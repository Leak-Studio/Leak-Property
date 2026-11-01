"""Explicitly refresh local, read-only comparison fixtures from the recorded URLs."""
from pathlib import Path
from urllib.request import Request, urlopen
from concurrent.futures import ThreadPoolExecutor
from bs4 import BeautifulSoup
import argparse, hashlib, json

ROOT=Path(__file__).resolve().parents[1]

def capture(output, allow_changed=False):
    lock=json.loads((ROOT/'source/reference.lock.json').read_text(encoding='utf-8'))
    output=output.resolve()
    def download(page):
        with urlopen(Request(page['url'],headers={'User-Agent':'Mozilla/5.0'}),timeout=40) as response: data=response.read()
        digest=hashlib.sha256(data).hexdigest()
        if digest!=page['sha256'] and not allow_changed:
            raise RuntimeError('Reference changed: '+page['url']+'. Review a new capture before updating the comparison baseline.')
        soup=BeautifulSoup(data.decode('utf-8'),'html.parser')
        for script in soup.select('script[src]'):
            if 'hsappstatic.net' in script['src'] or 'hubspot' in script['src'] or 'finsweet' in script['src']: script.decompose()
        for iframe in soup.select('iframe'): iframe.decompose()
        for meeting in soup.select('.meetings-iframe-container'): meeting.attrs.pop('data-src',None)
        guard=soup.new_tag('script');guard.string='document.addEventListener("submit",function(event){event.preventDefault();event.stopImmediatePropagation()},true);'
        soup.head.insert(0,guard)
        soup.title.string='Reference snapshot'
        destination=output/page['path'].strip('/')/'index.html'
        destination.parent.mkdir(parents=True,exist_ok=True)
        destination.write_text(str(soup),encoding='utf-8')
        return {'path':page['path'],'sha256':digest}
    with ThreadPoolExecutor(max_workers=4) as pool: results=list(pool.map(download,lock['pages']))
    (output/'capture.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
    print(f'Captured {len(results)} read-only reference fixtures in {output}')

if __name__=='__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--output',type=Path,default=ROOT/'.reference')
    parser.add_argument('--allow-changed',action='store_true')
    args=parser.parse_args();capture(args.output,args.allow_changed)
