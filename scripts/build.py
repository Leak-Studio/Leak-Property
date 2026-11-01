"""Emit the pinned static Webflow page contracts with local Leak content."""
from pathlib import Path
from urllib.parse import urlparse, unquote, quote
from collections import Counter
from bs4 import BeautifulSoup
import argparse, hashlib, json, re, shutil, base64

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'source'
DIST = ROOT / 'dist'

def identity_tree(soup):
    attributes=['data-wf-component-id','data-wf-target','data-w-id']
    def descriptor(node):
        classes=sorted(value for value in node.get('class',[]) if not value.startswith('leak-'))
        tag='media' if node.name in ['img','video'] or 'leak-script-art' in node.get('class',[]) else node.name
        siblings=[sibling for sibling in node.parent.find_all(recursive=False) if sibling.name not in ['script','style','link','meta']] if node.parent else []
        position=next((index for index,sibling in enumerate(siblings) if sibling is node),-1)
        return [tag,classes,node.get('id'),position,*[node.get(key) for key in attributes]]
    records=[]
    for node in soup.select(','.join('['+key+']' for key in attributes)):
        path=[];ancestor=node
        while ancestor and getattr(ancestor,'name',None) not in ['[document]',None]:
            path.append(descriptor(ancestor));ancestor=ancestor.parent
        records.append(path)
    return hashlib.sha256(json.dumps(records,separators=(',',':')).encode()).hexdigest()

def value_at(data, key):
    value = data
    for part in key.split('.'):
        value = value[int(part)] if isinstance(value,list) else value[part]
    return str(value)

def render(template, data):
    from html import escape
    soup=BeautifulSoup(template,'html.parser')
    pattern=r'\{\{([A-Za-z0-9_.]+)\}\}'
    for script in soup.select('script[type="text/x-wf-template"]'):
        decoded=unquote(script.string or '')
        decoded=re.sub(pattern,lambda match:escape(value_at(data,match.group(1))),decoded)
        script.string=quote(decoded,safe="~()*!.'-_")
    return re.sub(pattern, lambda match: escape(value_at(data,match.group(1))), str(soup))

def check_document(page, html, contract, routes):
    soup = BeautifulSoup(html,'html.parser')
    assert soup.html.get('data-wf-page') == contract['pageId'], page['target']
    for attribute,expected in contract['identities'].items():
        actual=sorted(node[attribute] for node in soup.select('['+attribute+']'))
        assert actual == expected, (page['target'],attribute)
    assert identity_tree(soup)==contract['identityTree'],(page['target'],'identity ancestry')
    templates=[identity_tree(BeautifulSoup(unquote(script.string or ''),'html.parser')) for script in soup.select('script[type="text/x-wf-template"]')]
    assert templates==contract['templateTrees'],(page['target'],'repeater ancestry')
    assert [section.get('id') for section in soup.select('section')] == contract['sections'], page['target']
    assert [script['src'] for script in soup.select('script[src]')] == contract['scripts'], page['target']
    assert not soup.select('#app'), page['target']
    assert len(soup.select('header.header')) == 1
    assert len(soup.select('.u-modal')) == 2
    assert len(soup.select('.nav_content-menu > a')) == 5
    assert not soup.select('.meetings-iframe-container[data-src],iframe'), page['target']
    for gallery in soup.select('[data-slider="kitchen"],[data-slider="second"]'):
        main=[image.get('src') for image in gallery.select('[data-slider-main] img')]
        thumbs=[image.get('src') for image in gallery.select('[data-slider-thumbs] img')]
        assert main==thumbs and len(set(main))>1,(page['target'],'gallery thumbnail mapping')
    for form in soup.select('form'):
        assert form.has_attr('data-leak-demo') and form.get('action') == '#'
        assert not form.has_attr('data-wf-element-id')
    for node in soup.select('[src],[poster],[href],[srcset]'):
        for attribute in ['src','poster','href']:
            url=node.get(attribute,'')
            if url.startswith(('mailto:','tel:','https://','http://')):
                raise AssertionError((page['target'],attribute,url))
    for element in soup.select('link[integrity],script[integrity]'):
        url=element.get('href') or element.get('src')
        file=SOURCE/'runtime'/'webflow.css' if url=='/style.css' else SOURCE/'runtime'/url.removeprefix('/vendor/')
        assert file.is_file(),url
        candidates=element['integrity'].split()
        assert any(token==algorithm+'-'+base64.b64encode(hashlib.new(algorithm,file.read_bytes()).digest()).decode() for token in candidates for algorithm in ['sha256','sha384','sha512'] if token.startswith(algorithm+'-')),(page['target'],'SRI',url)
    for script in soup.select('script[type="text/x-wf-template"]'):
        decoded=unquote(script.string or '')
        assert 'cdn.prod.website-files.com' not in decoded, page['target']
    visible=soup.get_text(' ',strip=True)
    assert not re.search(r'stanzza|kirill|B66601600|Ausias|B-474168|\+34\s*654',visible,re.I), page['target']
    assert not re.search(r'\{\{[^}]+\}\}',html), page['target']
    return soup

def build(check_only=False):
    site=json.loads((SOURCE/'site.json').read_text(encoding='utf-8'))
    site['brand_upper']=site['brand'].upper()
    site['brand_symbol']=''.join(word[0] for word in site['brand'].split())
    contracts={item['source']:item for item in json.loads((SOURCE/'contracts.json').read_text(encoding='utf-8'))}
    locks=json.loads((SOURCE/'runtime.lock.json').read_text(encoding='utf-8'))
    for asset in locks['assets']:
        data=(SOURCE/asset['sourceFile']).read_bytes()
        assert hashlib.sha256(data).hexdigest()==asset['sha256'],asset['sourceFile']
        if asset.get('upstreamSha256'):
            normalized=data.decode('utf-8')
            for original,local in asset['urlReplacements'].items(): normalized=normalized.replace(local,original)
            assert hashlib.sha256(normalized.encode()).hexdigest()==asset['upstreamSha256'],'generated CSS geometry changed'
    rendered=[]
    for page in site['routes']:
        template=(SOURCE/'exports'/page['file']).read_text(encoding='utf-8')
        html=render(template,site)
        soup=check_document(page,html,contracts[page['source']],site['routes'])
        destination=DIST/page['target'].strip('/')/'index.html'
        if check_only:
            assert destination.read_text(encoding='utf-8') == html, str(destination)
        else:
            destination.parent.mkdir(parents=True,exist_ok=True)
            destination.write_text(html,encoding='utf-8')
        rendered.append((page['target'],soup))
    for source_file in sorted((SOURCE/'runtime').iterdir()):
        destination=DIST/'style.css' if source_file.name=='webflow.css' else DIST/'vendor'/source_file.name
        if check_only: assert destination.read_bytes() == source_file.read_bytes(), str(destination)
        else: destination.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source_file,destination)
    for source_file in sorted((SOURCE/'assets').rglob('*')):
        if source_file.is_file():
            destination=DIST/'assets'/source_file.relative_to(SOURCE/'assets')
            if check_only: assert destination.read_bytes()==source_file.read_bytes(),str(destination)
            else: destination.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source_file,destination)
    for name in ['adapter.js','adapter.css']:
        destination=DIST/name
        if check_only: assert destination.read_bytes()==(SOURCE/name).read_bytes(),name
        else: shutil.copyfile(SOURCE/name,destination)
    valid_routes={route:soup for route,soup in rendered}
    for route,soup in rendered:
        for element in soup.select('a[href]'):
            url=urlparse(element['href'])
            target_route=url.path or route
            target_route=target_route.rstrip('/')+'/' if target_route!='/' else '/'
            assert target_route in valid_routes,(route,element['href'])
            if url.fragment:
                target=valid_routes[target_route]
                assert target.find(id=unquote(url.fragment)),(route,element['href'])
        for element in soup.select('[src],[poster]'):
            for key in ['src','poster']:
                url=element.get(key,'')
                if url.startswith('/'):
                    assert (DIST/url.lstrip('/')).is_file(), (route,url)
    print(f'PASS: {len(rendered)} static routes; identity, section, script, link, media, and local integration contracts')

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--check',action='store_true')
    build(parser.parse_args().check)
