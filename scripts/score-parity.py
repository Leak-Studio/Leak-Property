"""Evaluate declared layout/motion criteria; never a full-image similarity claim."""
from pathlib import Path
import json, math, sys

ROOT=Path(__file__).resolve().parents[1]
if len(sys.argv)<2: raise SystemExit('Usage: python scripts/score-parity.py OBSERVATIONS.json [OUTPUT.json]')
from build import build
build(check_only=True)
input_file=Path(sys.argv[1])
records=json.loads(input_file.read_text(encoding='utf-8'))

def numeric(value):
    try: return float(str(value).removesuffix('px'))
    except (TypeError,ValueError): return None

def compare_geometry(a,b,width,height):
    layout=[]; typography=[]; differences=[]
    for selector,source_nodes in a.items():
        target_nodes=b.get(selector,[])
        if len(source_nodes)!=len(target_nodes):
            layout.append(False);differences.append({'selector':selector,'field':'count','reference':len(source_nodes),'local':len(target_nodes)})
        for index,(source,target) in enumerate(zip(source_nodes,target_nodes)):
            if source['display']=='none' or source['width']<1 or source['height']<1: continue
            for field,unit in [('x',width),('y',height),('width',width),('height',height)]:
                delta=abs(source[field]-target[field]);passed=delta<=max(2,unit*.02)
                layout.append(passed)
                if not passed: differences.append({'selector':selector,'index':index,'field':field,'reference':round(source[field],2),'local':round(target[field],2),'delta':round(delta,2)})
            for field in ['font','size','lineHeight','weight']:
                source_value=numeric(source[field]);target_value=numeric(target[field])
                passed=abs(source_value-target_value)<=1 if source_value is not None and target_value is not None else source[field]==target[field]
                typography.append(passed)
                if not passed: differences.append({'selector':selector,'index':index,'field':field,'reference':source[field],'local':target[field]})
    return sum(layout)/len(layout) if layout else 0, sum(typography)/len(typography) if typography else 0, differences

def visible(nodes):
    return any(n['display']!='none' and n['width']>1 and n['height']>1 and float(n['opacity'])>.9 for n in nodes)

def matrix(value):
    import re
    if value=='none': return [1,0,0,1,0,0]
    numbers=[float(part) for part in re.findall(r'-?\d+(?:\.\d+)?(?:e[-+]?\d+)?',value.split('(',1)[-1],re.I)]
    if len(numbers)==16: return [numbers[0],numbers[1],numbers[4],numbers[5],numbers[12],numbers[13]]
    return numbers if len(numbers)==6 else [1,0,0,1,0,0]

def observe_motion(entry):
    checks=[];details=[]
    for state in entry.get('states',[]):
        if state['action'] in ['menu','modal','close']: continue
        for group,key in [('textMotion','type'),('components','id')]:
            sources=state['reference'].get(group,[]);targets=state['local'].get(group,[])
            source_top=entry['top']['reference'].get(group,[]);target_top=entry['top']['local'].get(group,[])
            for index,(source,target) in enumerate(zip(sources,targets)):
                if source.get(key)!=target.get(key): checks.append(False);continue
                if not(source['visible'] or target['visible']): continue
                if group=='textMotion' and source['type'] not in ['caption','big-body','body','head-two','head-three','head-four']: continue
                if index>=len(source_top) or index>=len(target_top): continue
                a=matrix(source['transform']);b=matrix(target['transform']);at=matrix(source_top[index]['transform']);bt=matrix(target_top[index]['transform'])
                # Compare movement from each page's initial state, retaining content-dependent centering.
                checks.append(abs(float(source['opacity'])-float(target['opacity']))<=.15)
                for axis in range(6):
                    tolerance=.03 if axis<4 else .02*entry['top']['reference']['viewport']['width' if axis==4 else 'height']
                    passed=abs((a[axis]-at[axis])-(b[axis]-bt[axis]))<=max(.03,tolerance)
                    checks.append(passed)
                    if not passed: details.append({'state':state['action'],'group':group,'index':index,'axis':axis,'sourceDelta':round(a[axis]-at[axis],3),'localDelta':round(b[axis]-bt[axis],3)})
    return (sum(checks)/len(checks) if checks else 0),len(checks),details

results=[]
for entry in records:
    source=entry['top']['reference'];target=entry['top']['local'];w=source['viewport']['width'];h=source['viewport']['height']
    layout,typo,differences=compare_geometry(source['geometry'],target['geometry'],w,h)
    interaction=[]
    for state in entry.get('states',[]):
        action=state['action'];sa=state['reference']['motion'];ta=state['local']['motion']
        if action=='menu':
            interaction.append(visible(sa['.nav_content']) and visible(ta['.nav_content']))
        elif action=='modal':
            interaction.append(visible(sa['.u-modal-wrapper']) and visible(ta['.u-modal-wrapper']))
        elif action=='close':
            interaction.append(not visible(ta['.u-modal-wrapper']) and not visible(ta['.nav_content']) and not visible(sa['.u-modal-wrapper']) and not visible(sa['.nav_content']))
    interactions=sum(interaction)/len(interaction) if interaction else 0
    geometry=40*(layout*.75+typo*.25)
    # Engine/config contract is verified independently by the static build gate.
    # Scroll-state observation contributes later; do not mark absent work as passed.
    motion_config=20
    observed_ratio,observed_checks,motion_differences=observe_motion(entry)
    observed_motion=20*observed_ratio
    measured=geometry+motion_config+observed_motion+20*interactions
    relative_height=abs(source['totalHeight']-target['totalHeight'])/max(1,source['totalHeight'])
    results.append({'route':entry['route'],'viewport':entry['viewport'],'layoutRatio':round(layout,4),'typographyRatio':round(typo,4),'interactionRatio':round(interactions,4),'geometryPoints':round(geometry,2),'motionConfigPoints':motion_config,'observedMotionPoints':round(observed_motion,2),'motionObservationCount':observed_checks,'measuredPointsOutOf100':round(measured,2),'pageHeightDifference':round(relative_height,4),'heightGatePassed':relative_height<=.05,'mediaGatePassed':target['incompleteImages']==0,'referenceHeight':source['totalHeight'],'localHeight':target['totalHeight'],'differences':differences,'motionDifferences':motion_differences})

output=Path(sys.argv[2]) if len(sys.argv)>2 else input_file.with_name(input_file.stem+'-scores.json');output.write_text(json.dumps(results,indent=2),encoding='utf-8')
for item in results:
    print(item['viewport'],item['route'],'score',item['measuredPointsOutOf100'],'UI',item['interactionRatio'],'height',str(round(item['pageHeightDifference']*100,1))+'%','motion checks',item['motionObservationCount'])
print('Scored',len(results),'pairs. A pass also requires every independent static hard gate and page-height gate.')
site=json.loads((ROOT/'source/site.json').read_text(encoding='utf-8'))
expected={(page['target'],viewport) for page in site['routes'] for viewport in ['1280,800','790,850','429,928']}
actual={(row['route'],row['viewport']) for row in results}
if actual!=expected or len(results)!=len(expected):
    print('INCOMPLETE:',len(expected-actual),'required pairs are missing.');raise SystemExit(2)
failed=[row for row in results if row['measuredPointsOutOf100']<90 or not row['heightGatePassed'] or not row['mediaGatePassed']]
if failed:
    print('FAIL:',[(row['route'],row['viewport']) for row in failed]);raise SystemExit(1)
print('PASS: all routes and tested viewports meet the declared 90-point threshold and hard gates.')
