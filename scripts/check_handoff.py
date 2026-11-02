#!/usr/bin/env python3
"""Portable integrity and arithmetic checks for this handoff, not app tests."""
from pathlib import Path
import json, re, hashlib, itertools, sys
from fractions import Fraction

ROOT=Path(__file__).resolve().parents[1]
checks=[]
def check(name,ok,details=None):
    checks.append({'check':name,'passed':bool(ok),'details':details})
def read(path):return json.loads((ROOT/path).read_text())

manifest=read('references/BASELINE_MANIFEST.json')
bad=[]
for entry in manifest['files']:
    p=ROOT/entry['path']
    if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=entry['sha256']:bad.append(entry['path'])
check('Immutable source/design bytes',not bad,{'files':len(manifest['files']),'mismatches':bad})
tasks=read('backlog/tasks.json')['tasks'];ids={x['id'] for x in tasks}
check('Task IDs unique and dependencies resolved',len(ids)==len(tasks) and all(d in ids for t in tasks for d in t['dependsOn']))
visiting=set();visited=set()
def visit(tid):
    if tid in visiting:raise ValueError('Dependency cycle: '+tid)
    if tid in visited:return
    visiting.add(tid)
    for dep in next(t for t in tasks if t['id']==tid)['dependsOn']:visit(dep)
    visiting.remove(tid);visited.add(tid)
try:
    for tid in ids:visit(tid)
    check('Task dependencies acyclic',True)
except ValueError as exc:check('Task dependencies acyclic',False,str(exc))
fr={f for t in tasks for f in t['fr']}
check('All 38 FR traced',fr=={f'FR-{n:03}' for n in range(1,39)},sorted(fr))
trace=(ROOT/'docs/08_FR_TRACEABILITY.md').read_text()
check('38 explicit FR matrix rows',len(re.findall(r'^\| FR-\d{3} —',trace,re.M))==38)
check('Validate/Later preserved',next(t for t in tasks if t['id']=='VAL-030')['priority']=='Validate' and not next(t for t in tasks if t['id']=='VAL-030')['inIncrement'] and next(t for t in tasks if t['id']=='LATER-031')['priority']=='Later' and not next(t for t in tasks if t['id']=='LATER-031')['inIncrement'])
check('No work falsely completed',all(t['status'] in ['todo','deferred'] and not t['evidence'] for t in tasks))
product=(ROOT/'docs/01_PRODUCT_AND_SCOPE.md').read_text()
newreq=set(re.findall(r'^\| ((?:PROF|PWA|UPD|CNT)-\d{2}) ',product,re.M))
mapped={r for t in tasks for r in t['newRequirements']}
check('All new profile/PWA/update/content requirements traced',newreq==mapped,{'requirements':len(newreq),'unmapped':sorted(newreq-mapped),'unexpected':sorted(mapped-newreq)})
qa=(ROOT/'docs/07_ACCEPTANCE_AND_TESTS.md').read_text()
qacases=set(re.findall(r'^\| (QA-\d{2}) ',qa,re.M));mappedqa={x for t in tasks for x in t['qa']}
check('36 QA scenarios referenced',qacases==mappedqa and len(qacases)==36,sorted(qacases-mappedqa))
inv=read('examples/t21/t21-item-inventory.json')['questions'];keys={x['id']:x for x in inv}
check('Actual T21 inventory 32 /128 /47',len(inv)==32 and sum(x['rationaleCount'] for x in inv)==128 and sum(x['weight'] for x in inv)==47)
fixture=read('examples/t21/t21-review-fixture.json')
check('Review fixture cannot claim learner approval',fixture['purpose']=='review-fixture' and fixture['runtimeCompleteness']=='partial' and fixture['status']['review']=='pending' and fixture['status']['publication']=='review-only' and fixture['status']['allowedUses']==[] and not fixture['forms'])
check('A/P/K fixture, all 12 rationale',sorted(x['format'] for x in fixture['questions'])==['A','K','P'] and sum(len(x['rationales']) for x in fixture['questions'])==12 and all({r['decisionId'] for r in q['rationales']}=={d['id'] for d in q['decisions']} for q in fixture['questions']))
source_ids={s['id'] for s in fixture['sources']};rule_ids={r['id'] for r in fixture['rules']}
check('Fixture source/rule references resolve',all(s['sourceId'] in source_ids for r in fixture['rules'] for s in r['sourceRefs']) and all(x in rule_ids for q in fixture['questions'] for r in q['rationales'] for x in r['ruleIds']))
check('Source files match fixture provenance',all((ROOT/p['path']).is_file() and hashlib.sha256((ROOT/p['path']).read_bytes()).hexdigest()==p['sha256'] for p in fixture['provenance']))

def score(q,answer):
    w=q['weight'];fmt=q['format'];key=q['answerKey']
    if fmt=='A':return Fraction(w if len(answer)==1 and answer[0]==key['selectedIds'][0] else 0)
    if fmt=='P':
        k=len(key['selectedIds'])
        return Fraction(0) if len(answer)>k else Fraction(w*len(set(answer)&set(key['selectedIds'])),k)
    truth=key['truthByDecisionId']
    return Fraction(w*sum(type(answer.get(k)) is bool and answer[k]==v for k,v in truth.items()),len(truth))

vectors=read('examples/t21/t21-scoring-golden-vectors.json')['vectors']
fail=[]
for v in vectors:
    f=v['expectedPoints'];expected=Fraction(f['numerator'],f['denominator'])
    actual=score(keys[v['itemId']],v['answer'])
    if actual!=expected:fail.append({'id':v['id'],'actual':str(actual),'expected':str(expected)})
check('176 independent explicit expected scoring vectors',len(vectors)==176 and not fail,{'vectors':len(vectors),'mismatches':fail})
count=0;badstates=[]
for q in inv:
    if q['format'] in ['A','P']:
        options=list('abcde')[:q['decisionCount']]
        answers=([options[i] for i in range(len(options)) if mask&(1<<i)] for mask in range(2**len(options)))
    else:
        answers=({str(i+1):x for i,x in enumerate(values)} for values in itertools.product([None,False,True,'both'],repeat=q['decisionCount']))
    for answer in answers:
        count+=1;value=score(q,answer)
        valid=Fraction(0)<=value<=q['weight']
        if q['format']=='A' and len(answer)!=1:valid=valid and value==0
        if q['format']=='P' and len(answer)>len(q['answerKey']['selectedIds']):valid=valid and value==0
        if not valid:badstates.append(q['id'])
check('1024 enumerated scoring states range and excess',count==1024 and not badstates,{'states':count,'failures':badstates})
check('Exact fraction addition',Fraction(2,3)+Fraction(2,3)+Fraction(2,3)==2)
release=read('examples/releases/review-0001/manifest.json');entry=release['packages'][0]
p=ROOT/'examples/releases/review-0001'/entry['url']
check('Review release payload digest/bytes',p.is_file() and p.stat().st_size==entry['bytes'] and hashlib.sha256(p.read_bytes()).hexdigest()==entry['sha256'] and release['channel']=='review')

# Only new authored docs are checked here; historical source links are untouched.
missing=[]
for p in list((ROOT/'docs').glob('*.md'))+list(ROOT.glob('*.md'))+list((ROOT/'examples').rglob('*.md'))+list((ROOT/'schemas').glob('*.md'))+list((ROOT/'content').rglob('*.md')):
    for raw in re.findall(r'(?<!!)\[[^\]]*\]\(([^)]+)\)',p.read_text()):
        if raw.startswith(('http:','https:','mailto:','#')):continue
        target=raw.split('#')[0]
        if target and not (p.parent/target).exists():missing.append(str(p.relative_to(ROOT))+': '+raw)
check('Authored Markdown local links resolve',not missing,missing)
check('Required technical docs present',all((ROOT/f'docs/{name}').is_file() for name in ['01_PRODUCT_AND_SCOPE.md','02_DESIGN_LOCK.md','03_ARCHITECTURE_AND_DATA.md','04_PWA_AND_CONTENT_UPDATES.md','05_CONTENT_INGESTION.md','06_EDUCATIONAL_INVARIANTS.md','07_ACCEPTANCE_AND_TESTS.md','08_FR_TRACEABILITY.md','09_OPERATIONS_AND_RELEASES.md','10_DECISIONS_AND_OPEN_ITEMS.md','11_HANDOFF_QA.md','12_TECHNICAL_SOURCES.md']))
result={'kind':'handoff-integrity-and-arithmetic-not-application-test','passed':all(c['passed'] for c in checks),'checks':checks}
dest=ROOT/'qa/handoff-checks.json';dest.parent.mkdir(exist_ok=True);dest.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'passed':result['passed'],'checks':len(checks),'failed':[c for c in checks if not c['passed']]},ensure_ascii=False))
sys.exit(0 if result['passed'] else 1)
