"""Pomocnicza walidacja Draft 2020-12 i semantyki; to nie oficjalny content:lint."""
from pathlib import Path
from collections import Counter
from fractions import Fraction
import argparse,csv,hashlib,itertools,json,re,sys
import yaml
try:
    from jsonschema import Draft202012Validator, FormatChecker
    from referencing import Registry, Resource
except ImportError:
    sys.path.insert(0,str(Path(__file__).resolve().parents[2]/'.z1_validation_dependencies'))
    from jsonschema import Draft202012Validator, FormatChecker
    from referencing import Registry, Resource

ROOT=Path(__file__).resolve().parents[1]
HAND=ROOT/'handoff/Z1'
ERRORS=[];WARNINGS=[];CHECKS=Counter();ALL={};TOPICS={};SCORING=[]
class UniqueLoader(yaml.SafeLoader):pass
def mapping(loader,node,deep=False):
    result={}
    for k,v in node.value:
      key=loader.construct_object(k,deep=deep)
      if key in result:raise ValueError('Powtórzony klucz YAML '+str(key))
      result[key]=loader.construct_object(v,deep=deep)
    return result
UniqueLoader.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG,mapping)
def check(ok,what,path):
    CHECKS[what]+=1
    if not ok:ERRORS.append(dict(check=what,path=str(path.relative_to(ROOT)) if isinstance(path,Path) and path.is_relative_to(ROOT) else str(path)))
def read(path):
    raw=path.read_bytes();check(not raw.startswith(b'\xef\xbb\xbf') and b'\r' not in raw,'UTF8_LF_no_BOM',path)
    text=raw.decode('utf-8')
    if path.suffix=='.md':
      assert text.startswith('---\n'),path
      header,body=text[4:].split('\n---\n',1);return yaml.load(header,Loader=UniqueLoader),body
    m=re.match(r'# yaml-language-server: \$schema=(.+)\n',text)
    check(bool(m) and (path.parent/m.group(1)).is_file(),'schema_comment_path',path)
    return yaml.load(text,Loader=UniqueLoader),''
def register(obj,kind,path):
    id=obj['id'];check(id not in ALL,'global_unique_id',path)
    ALL[id]=dict(kind=kind,obj=obj,path=path)
def ref(id,kinds,path,local=None):
    check(id in ALL and ALL[id]['kind'] in kinds,'typed_reference',path)
    if local is not None:check(id in local,'local_reference',path)
def correct_score(q,response):
    w=Fraction(q['weight'])
    if q['format']=='A':return w if response==[next(o['id'] for o in q['options'] if o['correct'])] else Fraction(0)
    if q['format']=='P':
      if len(response)>q['k']:return Fraction(0)
      key={o['id'] for o in q['options'] if o['correct']}
      return w*len(set(response)&key)/q['k']
    return w*sum(type(v) is bool and v==o['truth'] for o,v in zip(q['options'],response))/len(q['options'])
def vectors(q):
    if q['format'] in ['A','P']:
      key=[o['id'] for o in q['options'] if o['correct']];wrong=[o['id'] for o in q['options'] if not o['correct']]
      v=[('pełna',key),('pusta',[]),('błędna',[wrong[0]]),('nadmiar',key+[wrong[0]])]
      if q['format']=='P':v += [('niepełna poprawna',[key[0]]),('mieszana',[key[0],wrong[0]])]
      return v
    key=[o['truth'] for o in q['options']];blank=key.copy();blank[-1]=None;both=key.copy();both[-1]='both';wrong=key.copy();wrong[0]=not wrong[0]
    return [('pełna',key),('jeden błąd',wrong),('jeden blank',blank),('jeden podwójny',both),('wszystkie blank',[None]*len(key)),('same błędne',[not x for x in key])]

def main():
    ap=argparse.ArgumentParser();ap.add_argument('--existing-normalized');args=ap.parse_args()
    schemas={p.stem.replace('.schema',''):p for p in (ROOT/'schemas/authoring').glob('*.schema.json')}
    registry=Registry().with_resources((p.as_uri(),Resource.from_contents(json.loads(p.read_text()))) for p in schemas.values())
    validators={k:Draft202012Validator({'$ref':p.as_uri()},registry=registry,format_checker=FormatChecker()) for k,p in schemas.items()}
    def validate(data,key,path):
      CHECKS['schema_objects']+=1
      for e in validators[key].iter_errors(data):ERRORS.append(dict(check='schema',path=str(path.relative_to(ROOT)),field='/'.join(map(str,e.path)),message=e.message))
    for folder in sorted((ROOT/'content/authoring').iterdir()):
      if not folder.is_dir() or folder.name.startswith(('_','.')):continue
      topic,_=read(folder/'topic.yaml');validate(topic,'topic',folder/'topic.yaml')
      check(topic['id']==folder.name,'topic_directory_name',folder)
      check(topic['authoring']=='draft','draft_without_cli',folder)
      store={'topic':topic,'files':[],'local':set(),'counts':Counter()};TOPICS[topic['id']]=store
      register(topic,'topic',folder/'topic.yaml')
      for c in topic['criteria']:
        register(c,'criterion',folder/'topic.yaml');store['local'].add(c['id'])
        for a in c['aspects']:register(a|{'criterion':c['id']},'aspect',folder/'topic.yaml');store['local'].add(a['id'])
      for fam in topic['families']:register(fam,'family',folder/'topic.yaml');store['local'].add(fam['id'])
      for fname,key,listname,kind in [('sources.yaml','sources','sources','source'),('rules.yaml','rules','rules','rule'),('relations.yaml','relations','relations','relation')]:
        data,_=read(folder/fname);validate(data,key,folder/fname)
        for obj in data[listname]:
          if kind=='relation' and 'id' not in obj:obj['id']=f"REL-{obj['from']}-{obj['type']}-{obj['to']}"
          register(obj,kind,folder/fname);store['local'].add(obj['id']);store['counts'][kind]+=1
      for directory,key in [('questions','question'),('lessons','lesson'),('examples','example'),('corrections','correction'),('open','open')]:
        for p in sorted((folder/directory).glob('*.*')):
          obj,body=read(p);validate(obj,key,p);check(p.stem==obj['id'],'object_filename',p)
          register(obj,key,p);store['local'].add(obj['id']);store['files'].append((p,key,obj,body));store['counts'][key]+=1
      for p in topic['provenance']:check((ROOT/p['path']).is_file(),'provenance_file_exists',folder/'topic.yaml')
      for protected in ['review/decisions.yaml','review/withdrawals.yaml']:check(not (folder/protected).exists(),'no_author_created_decisions',folder)
    for tid,store in TOPICS.items():
      local=store['local'];topic=store['topic'];folder=ROOT/'content/authoring'/tid
      def scopes(ss,path):
        for s in ss:
          ref(s['criterion'],['criterion'],path,local)
          if 'aspect' in s:
            ref(s['aspect'],['aspect'],path,local);check(ALL[s['aspect']]['obj']['criterion']==s['criterion'],'aspect_belongs_to_criterion',path)
      def display(s,path):
        check(not re.search(r'<[^>]*>|!\[|```|\[[^\]]*\]\((?!https://)',s),'safe_markdown',path)
        check('example.org' not in s,'no_template_url',path)
      for c in topic['criteria']:
        for a in c['aspects']:
          for f in ['description','labelBeforeAnswer']:check(a['labelAfterAnswer'].casefold() not in c[f].casefold(),'neutral_criterion_label',folder/'topic.yaml')
      # Porządek i odwołania nie mogą obejmować obcych kryteriów.
      check(set(topic['order'])=={c['id'] for c in topic['criteria']},'criterion_order',folder/'topic.yaml')
      for id in local:
        item=ALL[id];o=item['obj'];p=item['path']
        if item['kind']=='rule':
          for s in o['sources']:ref(s['source'],['source'],p,local);check(bool(s['location'].strip()),'source_location',p)
        if item['kind']=='source':check(bool(re.match(r'^(https://|urn:)[^\s<>\"]+$',o['url'])),'real_uri_structure',p)
        if item['kind']=='relation':
          kinds={'explains':(['lesson','example'],['rule']),'distinguishes':(['example'],['rule']),'illustrates':(['example'],['rule']),'counterexample-of':(['example'],['rule']),'required-for':(['lesson'],['criterion','aspect','question']),'variant-of':(['question'],['question'])}
          a,b=kinds[o['type']];ref(o['from'],a,p,local);ref(o['to'],b,p,local)
          if o['type'] in ['required-for','variant-of']:check(bool(o.get('condition','').strip()),'relation_condition',p)
          special={'distinguishes':'comparison','counterexample-of':'counterexample','required-for':'prerequisite'}
          if o['type'] in special:check(ALL[o['from']]['obj']['kind']==special[o['type']],'relation_endpoint_kind',p)
          if o['type']=='illustrates':check(ALL[o['from']]['obj']['kind'] in ['example','worked-example'],'relation_endpoint_kind',p)
      allq=[(p,o) for p,k,o,b in store['files'] if k=='question']
      rems=[(p,o) for p,k,o,b in store['files'] if k=='correction']
      for p,kind,o,body in store['files']:
        if kind in ['lesson','example','open']:scopes(o['scope'],p)
        else:scopes([o['scope']],p)
        if kind in ['lesson','example']:
          display(body,p);display(o['title'],p)
          for r in o['rules']:ref(r,['rule'],p,local)
          if o.get('kind')=='prerequisite':check(bool(o.get('prerequisiteCondition')) and o.get('skippable') is True,'skippable_prerequisite',p)
        if kind=='open':
          check('## Polecenie\n' in body and '## Rubryka\n' in body,'open_sections',p);display(body,p)
          check('Błąd krytyczny' in body and 'równoważne i graniczne' in body and 'Podstawa' in body,'open_rubric_components',p)
          check('-D01' not in o['id'],'no_open_delayed_in_learning',p)
        if kind=='correction':
          check('## Inna pomoc\n' in body and bool(body.split('## Inna pomoc\n',1)[1].strip()),'alternate_help',p)
          check(len(o['followUps'])==2,'two_followups',p)
          for role,qid in zip(['follow-up-1','follow-up-2'],o['followUps']):
            ref(qid,['question'],p,local);q=ALL[qid]['obj'];check(q['role']==role and q['scope']==o['scope'],'followup_role_scope',p)
          for s in o.get('see',[]):ref(s,['lesson','example'],p,local)
          display(body,p)
        if kind=='question':
          ref(o['family'],['family'],p,local);display(o['stem'],p)
          fmt=o['format'];opts=o['options'];ids=[x['id'] for x in opts]
          check(len(ids)==len(set(ids)),'option_unique_id',p)
          check(o['weight'] in [1,2,3],'allowed_weight',p)
          if fmt=='A':check(len(opts) in [4,5] and sum(x['correct'] for x in opts)==1 and 'k' not in o,'A_semantics',p)
          if fmt=='P':check(2<=o['k']<len(opts) and sum(x['correct'] for x in opts)==o['k'],'P_semantics',p)
          if fmt=='K':check(all(type(x.get('truth')) is bool and 'correct' not in x for x in opts) and 'k' not in o,'K_semantics',p)
          if o['role']=='base':check(any(r['scope']==o['scope'] for _,r in rems),'base_has_correction',p)
          if o['role'].startswith('follow-up'):check(any(o['id'] in r['followUps'] for _,r in rems),'followup_is_used',p)
          for op in opts:
            display(op['text'],p);display(op['rationale'],p)
            check(op['rationale'].count('→')>=2,'rationale_three_part_structure',p)
            for rid in op['rules']:ref(rid,['rule'],p,local)
            choices=[z for z in store['files'] if z[1]=='lesson' and z[2]['kind']=='note' and op['rules'][0] in z[2]['rules']]
            if not choices:choices=[z for z in store['files'] if z[1] in ['lesson','example'] and op['rules'][0] in z[2]['rules']]
            picked=choices[0][2]['id'] if choices else None
            if 'see' in op:ref(op['see'],['lesson','example'],p,local);check(op['see']==picked,'see_matches_current_routing',p)
          for case,response in vectors(o):SCORING.append(dict(question=o['id'],revision=o['revision'],format=fmt,case=case,response=json.dumps(response,ensure_ascii=False),expected_fraction=str(correct_score(o,response)),basis='Examination Regulations 5.6.2 §2 s.4–6; kontrola rachunkowa autora, bez wykonania scorer aplikacji'))
      for c in topic['criteria']:
        for a in c['aspects']:
          rr={q['role'] for p,q in allq if q['scope']==dict(criterion=c['id'],aspect=a['id'])}
          check(rr=={'base','follow-up-1','follow-up-2','delayed-candidate'},'complete_BFGD_scope',folder/'topic.yaml')
      WARNINGS.append(dict(topic=tid,code='DECISION-MISSING',meaning='Brak decyzji dla r2; oczekiwany, bez dopuszczonego kanału.'))
    derived_rationale=set()
    for item in list(ALL.values()):
      if item['kind']=='question':
        for o in item['obj']['options']:
          generated='RAT-'+item['obj']['id']+'-'+o['id']
          check(generated not in ALL and generated not in derived_rationale,'derived_rationale_id_unique',item['path']);derived_rationale.add(generated)
    if args.existing_normalized:
      normal=Path(args.existing_normalized);existing=set()
      def scan(v):
        if isinstance(v,dict):
          if isinstance(v.get('id'),str):existing.add(v['id'])
          for x in v.values():scan(x)
        elif isinstance(v,list):
          for x in v:scan(x)
      for p in normal.glob('*.json'):scan(json.loads(p.read_text()))
      check(not ((set(ALL)|derived_rationale)&existing),'no_collision_with_available_normalized',str(normal))
    report=dict(kind='autorska walidacja pomocnicza, nie content:lint',date='2026-11-02',schema_draft='2020-12',validator='jsonschema 4.25.1',official_lint='not-run: brak implementacji CLI',official_convert='not-run: brak implementacji CLI',checks=dict(CHECKS),errors=ERRORS,warnings=WARNINGS,
      objects=len(ALL),topics={t:dict(s['counts']) for t,s in TOPICS.items()},scoring_vectors=len(SCORING),external_normalized_checked=args.existing_normalized or None)
    (HAND/'LOCAL_VALIDATION.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    with (HAND/'SCORING_VECTORS.csv').open('w',encoding='utf-8',newline='') as f:
      w=csv.DictWriter(f,fieldnames=['question','revision','format','case','response','expected_fraction','basis'],lineterminator='\n');w.writeheader();w.writerows(SCORING)
    print(json.dumps(dict(errors=len(ERRORS),warnings=len(WARNINGS),objects=len(ALL),checks=sum(CHECKS.values()),scoring_vectors=len(SCORING),first_errors=ERRORS[:20]),ensure_ascii=False,indent=2))
    return 1 if ERRORS else 0
if __name__=='__main__':sys.exit(main())
