"""Budowa wyłącznie plików autorskich z zachowaniem źródeł. Nie jest content:convert."""
from pathlib import Path
import csv, hashlib, json, re, sys
import yaml
from z1_rules import RULES, NEUTRAL, ALT, TITLES, sy, gl
from z1_extensions import EXT
from z1_worked import WORKED

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT/'references/migration_input/z1_data.json').read_text())
AUTHOR = ROOT/'content/authoring'
HAND = ROOT/'handoff/Z1'
MAP=[]
PROFILE=dict(syllabusVersion='3.3.0',glossaryVersion='2.2.0',regulationsVersion='5.6.2')
ROLES={'B':'base','F':'follow-up-1','G':'follow-up-2','D':'delayed-candidate'}
PUB={
 'SEN':('CPRE Foundation Level Syllabus EN','3.3.0','https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf','IREB e.V.; Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal; 1.04.2026; © IREB e.V.'),
 'SPL':('CPRE Foundation Level Syllabus PL','3.3.0','https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/68b8837862-1787039957/cpre_foundationlevel_syllabus_pl_v.3.3.pdf','IREB e.V.; Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal; przekład SJSI wskazany na s.2; 1.04.2026; © IREB e.V.'),
 'GPL':('Glossary of Requirements Engineering Terminology — Polish','2.2.0','https://hub.ireb.org/media/pages/resources/cpre-glossary/d804142017-1787039952/ireb_cpre_glossary_pl_2.2.pdf','Martin Glinz / IREB e.V.; terminy polskie Monika Petri-Starego i Karolina Zmitrowicz; 1.10.2025; © 2011–2025 IREB e.V. i Martin Glinz; definicje w języku EN.'),
 'HEN':('CPRE Foundation Level Handbook EN','1.3.2','https://isqi.org/media/65/0a/43/1789029072/cpre_foundationlevel_handbook_en_v1.3.2.pdf','IREB e.V.; Martin Glinz, Hans van Loenhoud, Stefan Staal, Stan Bühne; wersja 1.3.2; historia wersji s.5: 23.07.2026; oficjalny dokument w publicznej kopii iSQI; prawa według s.2.'),
}

ORIG_RULE_INDICES={
'T01-01B':[2,1,3], 'T01-01D':[3,1,2,1],
'T01-02B':[2,2,2,1], 'T01-02F':[1,3,3],
'T01-03B':[1,1,1,1], 'T01-03F':[1,2,1,1], 'T01-03D':[1,1,3],
'T01-04B':[4,2,3,1], 'T01-04F':[3,2,3],
'T01-05B':[1,3,1,1], 'T01-05F':[3,1,1,1],
'T02-01B':[4,5,3,2,3], 'T02-01D':[2,3,4,1],
'T02-02B':[3,1,1,4], 'T02-02F':[1,3,2],
'T03-01B':[1,3,2,3], 'T03-02B':[1,2,3,2], 'T03-02F':[1,1,1,2,2],
'T04-01B':[1,1,1,4], 'T04-01F':[2,1,3], 'T04-01D':[1,2,2,1],
'T04-02B':[2,4,3,5,4], 'T04-02D':[1,1,1,4],
'T05-01B':[1,2,3,3], 'T05-01F':[1,1,5,4],
'T05-02B':[2,2,3,1], 'T05-02F':[1,2,2], 'T05-03B':[1,2,1,1,1],
'T06-01F':[1,1,1,1], 'T06-02B':[2,6,5,3],
'T07-01B':[1,3,1,2], 'T07-02B':[1,3,3,4], 'T07-03B':[5,1,1,3],
'T07-04B':[3,3,5,4], 'T07-05B':[1,2,5,1], 'T07-06B':[2,2,3,2,2],
'T07-07B':[2,1,4,4], 'T07-08B':[3,3,1,1], 'T07-09B':[1,3,4,3],
}

class Dumper(yaml.SafeDumper): pass
def represent_str(d, v):
    return d.represent_scalar('tag:yaml.org,2002:str',v,style='|' if '\n' in v or len(v)>110 else None)
Dumper.add_representer(str,represent_str)
def dump(d):return yaml.dump(d,Dumper=Dumper,allow_unicode=True,sort_keys=False,width=110)
def write_yaml(path,d,schema):
    path.parent.mkdir(parents=True,exist_ok=True)
    import os
    rel=os.path.relpath(ROOT/'schemas/authoring'/f'{schema}.schema.json',path.parent)
    path.write_text(f'# yaml-language-server: $schema={rel}\n'+dump(d),encoding='utf-8')
def write_md(path,meta,body):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text('---\n'+dump(meta)+'---\n\n'+body.strip()+'\n',encoding='utf-8')
def table(headers,rows):
    def cell(x):return str(x).replace('|','/').replace('\n',' ')
    return '| '+' | '.join(headers)+' |\n| '+' | '.join('---' for _ in headers)+' |\n'+''.join('| '+' | '.join(cell(x) for x in row)+' |\n' for row in rows)
def original(t,u,q):return f"Z1-{t['id']}-{u['id'].split('-')[-1]}-{q['role']}01"
def content_name(t):return f"{t['id']}_IREB_CPRE_{t['slug']}_Content_v0.1.md"
def refpath(t,kind='Content'):return 'references/content/'+content_name(t).replace('_Content_',f'_{kind}_')
def relpath(p):return p.relative_to(ROOT).as_posix()
def mapped(t,src_id,kind,path,id,rev='r1',action='adapt',reason='',loc=None,srcfile=None):
    MAP.append(dict(source_file=srcfile or refpath(t),source_version='v0.2' if srcfile and 'C03' in srcfile else 'v0.1',
      source_location=loc or src_id,source_id=src_id,source_kind=kind,target_topic=t['id'],target_path=relpath(path),
      target_id=id,target_revision=rev,action=action,reason=reason,gap_id='Z1-GAP-OPEN-D' if action=='retain-outside-runtime' and kind=='open-delayed' else ''))
def rid(code,index):return 'REG-KRY-'+code if index==1 else f'REG-{code}-{index:02}'
def scope(t,u):return {'criterion':u['id'],'aspect':'ZAK-'+u['id'][4:]}
def clean_rat(s):
    s=re.sub(r'; także C-S02/C-S03[^.]*s\.15\.', '.', s)
    s=re.sub(r'; C-S02/C-S03[^;]*s\.18\.', '.', s)
    return s.strip()

def make_question(t,u,q,qid,indices,revision,source_anchor,family=None,ascope=None):
    code=u['id'][4:];labels=[str(i+1) for i in range(len(q['options']))] if q['type']=='K' else list('abcde')[:len(q['options'])]
    qq=dict(id=qid,revision=revision,format=q['type'],role=ROLES[q['role']],weight=q['w'],
      scope=ascope or scope(t,u),family=family or f"FAM-{code}",sourceAnchor=source_anchor,stem=q['stem'],options=[])
    if q['type']=='P':qq['k']=q.get('k',len(q['key']))
    for i,(lab,row) in enumerate(zip(labels,q['options'])):
      rix=indices[i];rix=[rix] if isinstance(rix,int) else rix
      rationale=clean_rat(row[1])
      if rationale.count('→')==1:
        premise,result=rationale.split('→',1)
        rationale=premise.strip().rstrip('.')+' → '+RULES[code][rix[0]-1][0]+' → '+result.strip()
      opt=dict(id=lab,text=row[0],rationale=rationale,rules=[rid(code,j) for j in rix],see=f'N-{code}')
      opt['truth' if q['type']=='K' else 'correct']=q['key'][i] if q['type']=='K' else lab in q['key']
      qq['options'].append(opt)
    return qq

def rubric(stem,dims,critical,border,source,role=None):
    text='## Polecenie\n\n'+stem+'\n\n## Rubryka\n\n'
    text+=table(['Element konieczny / model odpowiedzi','Ocena lokalna'],[(d,'Spełnione: sens zachowany; częściowo: fragment bez pełnego rozróżnienia; niespełnione: brak lub sprzeczność.') for d in dims])
    text+='\n**Odpowiedzi równoważne i graniczne:** '+border+'\n\n**Błąd krytyczny:** '+critical
    text+='\n\nPełne wykonanie obejmuje wszystkie elementy i nie zawiera błędu krytycznego. Samoocena według rubryki nie daje punktów CPRE; wybór zamknięty nie zastępuje tego wykonania.\n\n**Podstawa:** '+source
    return text

def export_topic(t):
    tid=t['id'];out=AUTHOR/tid;out.mkdir(parents=True,exist_ok=True)
    topic=dict(format='cpre-authoring/1.0',id=tid,revision='r2',title=f"{tid} — {t['title']}",shortTitle=f'{tid} — Ćwiczenia RE',language='pl',authoring='draft',educationProfile=PROFILE.copy(),
      order=[],limitations=[t['scope'],'Zakres wyłącznie opisanych czynności; brak dowodu pełnego EO z pojedynczego pytania.',
       'Brak oficjalnego CLI i konwersji; samokontrola jest autorska; odrębne review i decyzje użycia pozostają otwarte.',
       'Źródłowe otwarte D zachowano poza runtime, ponieważ schemat open nie koduje roli delayed.',
       'K-04: wiersz 4 ILL-K01 / KRY-X01 bez EO; cała ilustracja poza rezerwą CPRE i pełnym mockiem.'],
      provenance=[dict(path=refpath(t),documentVersion='v0.1'),dict(path=refpath(t,'QA_and_Handoff'),documentVersion='v0.1'),dict(path='references/content/Z1_IREB_CPRE_Manifest_v0.1.md',documentVersion='v0.1')],criteria=[],families=[])
    rules=[];relations=[];used_sources={};qchanges=[]
    for u in t['units']:
      code=u['id'][4:];s=scope(t,u);as_id=s['aspect'];noteid='N-'+code
      topic['order'].append(u['id'])
      topic['criteria'].append(dict(id=u['id'],revision='r2',description=NEUTRAL[code],labelBeforeAnswer=NEUTRAL[code],eo=[dict(id=u['eo'],level=u['level'])],aspects=[dict(id=as_id,labelAfterAnswer=u['title'])]))
      topic['families'].append(dict(id='FAM-'+code,revision='r2',description=f"Wspólny rdzeń {u['title']}; B/F/G/D i zachowane wykonania otwarte korzystają z tej wiedzy. To propozycja grupowania, bez ustalenia niezależności lub nowości."))
      for i,(statement,anchors) in enumerate(RULES[code],1):
        rr=dict(id=rid(code,i),revision='r2' if i==1 else 'r1',statement=statement,sources=[])
        for source,loc in anchors:
          rr['sources'].append(dict(source=f'SRC-{tid}-{source}',location=loc));used_sources.setdefault(source,set()).add(loc)
        rules.append(rr)
        mapped(t,'REG-'+u['id'],'rule',out/'rules.yaml',rr['id'],rr['revision'],'split' if i>1 else 'adapt','Wąska reguła z pełną podstawą; rozwinięcie źródłowe zachowane jako nota.')
      rids=[rid(code,i) for i in range(1,len(RULES[code])+1)]
      nmeta=dict(id=noteid,revision='r1',kind='note',title=TITLES[code],scope=[s],rules=rids,sourceAnchor=refpath(t)+' § REG-'+u['id'])
      body='**Cel:** '+NEUTRAL[code]+'\n\nMożesz najpierw podjąć próbę albo przeczytać objaśnienie. Zakres dotyczy wskazanego rozróżnienia, a nie całego EO.\n\n'+u['note']
      body+='\n\n**Terminologia PL/EN:** '+u['terms']+'\n\n**Przypadek:** '+u['example']+'\n\n**Granica:** '+u['counter']
      body+='\n\n**Samodzielna próba:** '+u['rp']+'\n\n**Źródła:** '+u['source']+'; dokładne odwołania znajdują się przy regułach tego zakresu.'
      write_md(out/'lessons'/f'{noteid}.md',nmeta,body)
      mapped(t,'REG-'+u['id'],'explanation',out/'lessons'/f'{noteid}.md',noteid,action='split',reason='Całe objaśnienie, warunki, granice i przykład zachowane; nowe ID noty oddziela ją od reguł.')
      for prefix,kind,key in [('EX','example','example'),('CE','counterexample','counter'),('CMP','comparison','comparison')]:
        eid=prefix+'-'+u['id'];p=out/'examples'/f'{eid}.md'
        txt=u[key]+'\n\n**Reguła rozstrzygająca:** '+RULES[code][0][0]+'\n\n**Podstawa:** '+u['source']
        if kind=='comparison':txt+='\n\nPorównanie dotyczy wskazanej wspólnej osi; dwa różne kryteria nie stają się jednym tylko dlatego, że odnoszą się do tego samego przykładu.'
        write_md(p,dict(id=eid,revision='r2',kind=kind,title={'EX':'Przypadek: ','CE':'Granica: ','CMP':'Porównanie: '}[prefix]+TITLES[code],scope=[s],rules=rids,sourceAnchor=refpath(t)+' § '+eid),txt)
        mapped(t,eid,kind,p,eid,'r2',reason='Zachowano przesłanki i ID; uzupełniono jawne powiązanie z regułami i źródłem.')
        relations.append(dict(type={'EX':'illustrates','CE':'counterexample-of','CMP':'distinguishes'}[prefix],from_=eid,to=rid(code,1),meaning={'EX':u['example'],'CE':u['counter'],'CMP':u['comparison']}[prefix]))
      rp='RP-'+code;p=out/'open'/f'{rp}.md'
      write_md(p,dict(id=rp,revision='r2',scope=[s],evaluation='self-assessment',sourceAnchor=refpath(t)+' § '+rp),
        rubric(u['rp'],u['answer'],u.get('rp_critical','Zastąpienie rozstrzygającej reguły jej zaprzeczeniem.'),u.get('rp_border','Akceptować poprawne parafrazy i równoważne przykłady; same nazwy bez żądanego powodu dają wykonanie częściowe.'),u['source']))
      mapped(t,rp,'retrieval',p,rp,'r2',reason='Zachowano odtworzenie i model, dostosowano rubrykę i źródło oceny do open.')
      chosen={}
      for q in u['tasks']:
        qid=original(t,u,q)
        if q['type']=='O':
          retained=q['role']=='D'
          p=(HAND/'retained_open_delayed'/tid/'open'/f'{qid}.md') if retained else out/'open'/f'{qid}.md'
          write_md(p,dict(id=qid,revision='r2',scope=[s],evaluation='self-assessment',sourceAnchor=refpath(t)+' § '+qid),rubric(q['stem'],q['dimensions'],q['critical'],q['border'],u['source'],q['role']))
          mapped(t,qid,'open-delayed' if retained else 'open',p,qid,'r2','retain-outside-runtime' if retained else 'adapt',
            'Rola D dla open nie ma pola w schemacie; zachowano poza zwykłą nauką, bez utożsamienia z nowym zamkniętym D.' if retained else 'Oryginalne wykonanie otwarte i ID zachowane; bez punktów CPRE.')
        else:
          indices=ORIG_RULE_INDICES[code+q['role']]
          qq=make_question(t,u,q,qid,indices,'r2',refpath(t)+' § '+qid)
          p=out/'questions'/f'{qid}.yaml';write_yaml(p,qq,'question')
          mapped(t,qid,'question-'+q['type'],p,qid,'r2',reason='Stem, opcje, klucz i waga zachowane; dopięto wąskie reguły, źródło i działający routing.')
          chosen[q['role']]=qid
          qchanges.append((qid,q['change'],q.get('mapping','Zakres wniosku ograniczony do ocenianych rozstrzygnięć.')))
      for role in 'BFGD':
        if role in chosen:continue
        key=(code,role)
        if key not in EXT:raise RuntimeError('Brak rozszerzenia '+str(key))
        q=EXT[key];qid=f"{tid}-{role}{code[-2:]}"
        qq=make_question(t,u,q,qid,q['rule_indices'],'r1','tools/z1_extensions.py '+code+'/'+role)
        p=out/'questions'/f'{qid}.yaml';write_yaml(p,qq,'question');chosen[role]=qid
        mapped(t,'','question-'+q['type'],p,qid,action='new',reason=q['change'],loc=code+' / brak zamkniętej roli '+role)
        qchanges.append((qid,q['change'],'Nowy wybór zamknięty; nie zastępuje zachowanego wykonania otwartego.'))
      rem='REM-'+u['id'];p=out/'corrections'/f'{rem}.md'
      primary=u['remedy'].replace(' C-A naprawia tylko część tego rozróżnienia.','')
      write_md(p,dict(id=rem,revision='r2',scope=s,followUps=[chosen['F'],chosen['G']],see=[noteid,'CMP-'+u['id']],sourceAnchor=refpath(t)+' § '+rem),
        primary+'\n\nSprawdź przesłanki konkretnego przypadku i zastosuj regułę przed oceną wyniku. Kontrola dotyczy tego rozróżnienia, bez diagnozy osoby.\n\n## Inna pomoc\n\n'+ALT[code]+'\n\nPo dwóch nieudanych kontrolach wybierz inne wsparcie lub przerwę. Nie traktuj lektury jako dowodu poprawnego wykonania i nie zużywaj kandydata D jako trzeciej natychmiastowej próby.')
      mapped(t,rem,'correction',p,rem,'r2',reason='Pełna alternatywna pomoc i dwa istniejące zamknięte follow-up F/G; zachowano cel korekty.')
      if code in WORKED:
        wid='WS-'+code;p=out/'examples'/f'{wid}.md';steps=WORKED[code]
        txt='**Perspektywa i dane:** '+steps[0]+'\n\n'+ '\n\n'.join(f'{i}. {step}' for i,step in enumerate(steps[1:],1))
        txt+='\n\nTo przepracowany przykład autora. Przeczytanie rozwiązania nie jest samodzielnym wykonaniem ocenianej czynności.\n\n**Podstawa:** '+u['source']
        write_md(p,dict(id=wid,revision='r1',kind='worked-example',title='Scenariusz: '+TITLES[code],scope=[s],rules=rids,sourceAnchor='tools/z1_worked.py '+code),txt)
        mapped(t,'','worked-example',p,wid,action='new',reason='Dodatkowe uzasadnione kroki dla zasady L2; nie wykorzystuje stemu kandydata D.')
        relations.append(dict(type='illustrates',from_=wid,to=rid(code,1),meaning='Przepracowanie jawnego przypadku pokazuje regułę, wynik i granice wnioskowania.'))
      relations.append(dict(type='explains',from_=noteid,to=rid(code,1),meaning='Nota wyjaśnia znaczenie, warunki i granicę reguły dla tego zakresu.'))
      for role in 'FGD':relations.append(dict(type='variant-of',from_=chosen[role],to=chosen['B'],meaning=next(z[1] for z in qchanges if z[0]==chosen[role]),condition='Ten sam rdzeń wiedzy; różnice opisane autorsko, bez ustalenia niezależności lub nowości.'))
      mapped(t,u['id'],'criterion',out/'topic.yaml',u['id'],'r2',reason='ID i EO zachowane; neutralny opis ekranowy, pełna definicja w README.')
      mapped(t,u.get('scope_id',u['id']),'scope',out/'topic.yaml',as_id,action='new',reason='Nowy identyfikator aspektu; routingu T07/PR nie usunięto z mapy i README.')
    if t.get('intro'):
      nid='N-'+tid+'-ZZ';p=out/'lessons'/f'{nid}.md'
      body=t['intro']+'\n\n**Przypadek wprowadzający:** '+t['units'][0]['example']+'\n\n**Możliwość próby:** '+t['units'][0]['rp']+' Możesz też wybrać inne lokalne kryterium bez obowiązku odhaczania lektury.\n\n**Podstawa:** '+t['units'][0]['source']
      write_md(p,dict(id=nid,revision='r1',kind='note',title='Cel i granice pracy w temacie',scope=[scope(t,u) for u in t['units']],rules=[rid(u['id'][4:],1) for u in t['units']],sourceAnchor=refpath(t)+' § Wprowadzenie do tematu'),body)
      mapped(t,'Wprowadzenie do tematu','introduction',p,nid,action='adapt',reason='Pełny tekst wprowadzenia zachowany; nazwa ZZ nie przejmuje routingu reguł od not zakresów.')
    export_reuse(t,topic,rules,relations,used_sources,qchanges)
    sources=[]
    for code,locs in used_sources.items():
      title,version,url,attribution=PUB[code]
      sources.append(dict(id=f'SRC-{tid}-{code}',title=title,version=version,url=url,location='; '.join(sorted(locs)),attribution=attribution,
        usageNote='Wersja i fragmenty sprawdzone przez autora AI na lokalnej kopii zgodnej SHA-256 z manifestem Z1; lokalizacje są fizycznymi stronami PDF. Parafrazy i fikcyjne przykłady autora. To opis ograniczeń, nie decyzja praw lub zgoda na kanał publikacji.'))
    write_yaml(out/'topic.yaml',topic,'topic');write_yaml(out/'sources.yaml',dict(sources=sources),'sources');write_yaml(out/'rules.yaml',dict(rules=rules),'rules')
    for rel in relations:
      if 'from_' in rel:rel['from']=rel.pop('from_')
    write_yaml(out/'relations.yaml',dict(relations=relations),'relations')
    (HAND/f'{tid}_VARIANTS.md').write_text('# '+tid+' — różnice wariantów i granice\n\n'+table(['ID pytania','Istotna różnica / rdzeń','Granica dowodu'],qchanges),encoding='utf-8')
    write_readme(t,topic,out,sources)
    (HAND/'PROGRESS.md').write_text('# Z1 — postęp migracji\n\n2026-11-02. Samokontrola autorska; G2/G3/G4 otwarte.\n\nZapisane tematy: '+', '.join(p.name for p in sorted(AUTHOR.iterdir()) if (p/'topic.yaml').exists())+'.\n\nNastępna czynność: dokończyć pozostałe tematy, uruchomić pomocniczą walidację schematów i semantyki, wygenerować raporty i archiwum.\n\ncontent:lint i content:convert: nie uruchomiono — brak implementacji CLI. Wszystkie tematy draft.\n',encoding='utf-8')
    print(tid,'zapisany',len(list(out.rglob('*.*'))),'plików')

def parse_table(s):
    rows=[]
    for line in s.splitlines():
      if line.startswith('|'):
        cells=[x.strip() for x in line.strip().strip('|').split('|')]
        if cells and not all(set(x)<=set('-: ') for x in cells):rows.append(cells)
    return rows

def export_reuse(t,topic,rules,relations,used_sources,qchanges):
    if t['id'] not in ('T02','T07'):return
    letter='P' if t['id']=='T02' else 'A';tid=t['id'];out=AUTHOR/tid
    srcpath=next((ROOT/'references/project').glob('20-C03*'));s=srcpath.read_text();start=s.index('## C03-'+letter+' —');end=s.index('## C03-'+('K' if letter=='P' else 'P')+' —',start)
    section=s[start:end];legacy='KRY-'+letter+'01';asp=f'ZAK-{tid}-C-{letter}01';sc=dict(criterion=legacy,aspect=asp);basecode='T02-01' if letter=='P' else 'T07-04'
    u=next(u for u in t['units'] if u['id'][4:]==basecode)
    topic['criteria'].append(dict(id=legacy,revision='r2',description='Rozpoznaje i uzasadnia wskazane rozróżnienie w dodatkowych przypadkach.',labelBeforeAnswer='Rozpoznaje i uzasadnia wskazane rozróżnienie w dodatkowych przypadkach.',eo=[dict(id=u['eo'],level=u['level'])],aspects=[dict(id=asp,labelAfterAnswer='Klasyfikacja typu oczekiwania' if letter=='P' else 'Istotność wpływu a zakres zmian')]))
    topic['order'].append(legacy)
    for n in (1,2):topic['families'].append(dict(id=f'FAM-C-{letter}{n}',revision='r2',description=f'Zachowana propozycja rodziny C-{letter}{n} z C03 v0.2; bliskość także wobec pozostałych rodzin C i Z1, bez ustalenia niezależności.'))
    topic['provenance'].append(dict(path=relpath(srcpath),documentVersion='v0.2'))
    regr='REG-'+letter+'1';legacy_rule=RULES[basecode][0]
    rules.append(dict(id=regr,revision='r2',statement=legacy_rule[0],sources=[dict(source=f'SRC-{tid}-{c}',location=loc) for c,loc in legacy_rule[1]]))
    for c,loc in legacy_rule[1]:used_sources.setdefault(c,set()).add(loc)
    intro=section[section.index('### '+letter+'1.'):section.index('### '+letter+'2.')]
    # Zapis całego wkładu dydaktycznego, nie hipotez o osobie.
    intro=re.sub(r'^###[^\n]*\n','',intro,count=1).strip()
    nid=f'N-{tid}-C-{letter}01';p=out/'lessons'/f'{nid}.md'
    write_md(p,dict(id=nid,revision='r1',kind='note',title='Dodatkowe objaśnienie i przykłady',scope=[sc],rules=[regr],sourceAnchor=relpath(srcpath)+' § '+letter+'1'),intro)
    mapped(t,'LU-C-'+letter,'lesson',p,nid,action='split',reason='Pełny wkład C w obrębie jego pierwotnego kryterium.',srcfile=relpath(srcpath))
    mapped(t,regr,'rule',out/'rules.yaml',regr,'r2',reason='ID zachowane; atomizowany rdzeń z dokładną podstawą, cały tekst w nocie.',srcfile=relpath(srcpath))
    legacyqs={}
    indices={'A':{'B':[2,2,2,1],'F':[1,2,2,2],'D':[2,2,1,2]},'P':{'B':[2,4,3,5,3],'F':[2,4,3,5,3],'D':[2,4,1,3]}}
    for role,num in [('B',3),('F',5),('D',6)]:
      a=section.index(f'### {letter}{num}.');z=section.find('\n### ',a+4);block=section[a:z if z!=-1 else len(section)]
      qid=f'C-{letter}-{role}01';qsection=block[block.index('**[Q]**')+7:]
      stem=qsection[:qsection.index('| Opcja')].strip()
      stem=re.sub(r'\*\*Wybierz JEDNĄ odpowiedź\. Maksymalnie 1 punkt\.\*\*','',stem).strip()
      stem=re.sub(r'\*\*Wybierz dokładnie DWA wymagania jakościowe\. Maksymalnie 2 punkty\.\*\*','Które wymagania są jakościowe?',stem).strip()
      stem=re.sub(r'\*\*Które DWIE klasyfikacje wraz z uzasadnieniem są poprawne\? Maksymalnie 3 punkty\.\*\*','Które klasyfikacje wraz z uzasadnieniem są poprawne?',stem).strip()
      ot=parse_table(qsection[qsection.index('| Opcja'):qsection.index('**[R]')])[1:]
      rblock=block[block.index('**[R]'):];rtables=parse_table(rblock)
      rats=[row for row in rtables if row[0].startswith('RAT-') or re.match(r'^[a-e] / RAT-',row[0])]
      assert len(ot)==len(rats),(qid,len(ot),len(rats))
      opts=[(x[1],r[1]) for x,r in zip(ot,rats)]
      kind='P' if letter=='P' and role!='D' else 'A'
      key={'A':{'B':'d','F':'a','D':'c'},'P':{'B':['c','e'],'F':['b','c'],'D':'d'}}[letter][role]
      qq=make_question(t,u,dict(type=kind,role=role,w=3 if letter=='P' and role=='F' else 2 if kind=='P' else 1,stem=stem,options=opts,key=key),qid,indices[letter][role],'r2',relpath(srcpath)+' § '+qid,family=f'FAM-C-{letter}{2 if role=="D" else 1}',ascope=sc)
      # Rdzeń legacy zapewnia nawigację do wiernego wkładu, szczegółowe reguły pozostają źródłowo jawne.
      for opt in qq['options']:opt['rules']=[regr]+opt['rules'];opt['see']=nid
      p=out/'questions'/f'{qid}.yaml';write_yaml(p,qq,'question');legacyqs[role]=qid
      mapped(t,qid,'question-'+kind,p,qid,'r2',reason='Oryginalne opcje, klucz, waga i rodzina zachowane; usunięto ręczną instrukcję formatu, dopięto źródła.',srcfile=relpath(srcpath))
      qchanges.append((qid,'Wierny przypadek C03; D zachowuje odrębny historyczny identyfikator rodziny.','Rozróżnienie częściowe; brak decyzji nowości.'))
    q=EXT[(tid+'-C-'+letter,'G')];qid=tid+'-GC01'
    qq=make_question(t,u,q,qid,q['rule_indices'],'r1','tools/z1_extensions.py '+tid+'-C-'+letter+'/G',family='FAM-C-'+letter+'1',ascope=sc)
    for opt in qq['options']:opt['rules']=[regr]+opt['rules'];opt['see']=nid
    p=out/'questions'/f'{qid}.yaml';write_yaml(p,qq,'question');legacyqs['G']=qid
    mapped(t,'','question-K',p,qid,action='new',reason=q['change'],loc=legacy+' / brak G',srcfile=relpath(srcpath))
    qchanges.append((qid,q['change'],'Nie rozszerza legacy kryterium do całego T02 lub PR04.'))
    for suff in ('R01','S01'):
      oid='C-'+letter+'-'+suff
      if suff=='R01':
        a=section.index('### '+letter+'2.');z=section.index('### '+letter+'3.');block=section[a:z]
        stem=block[block.index('**[Q]**')+7:block.index('**[R]')].strip().strip('„” \n')
        rub=block[block.index('**[R]'):];rub=re.sub(r'^\*\*\[R\][^:]*:\*\*','',rub).strip()
      else:
        a=section.index('**'+oid+' [Q]:**');z=section.index('### '+letter+'5.');block=section[a:z]
        stem=block[block.index('**')+2:];stem=block.split('**',2)[2].split('**[R]')[0].strip().strip('„” \n')
        rub=block.split('**[R]',1)[1].split('**Przewidywania:**')[0]
        if letter=='P':rub=rub.split('„Wszystkie quality')[0]
        else:rub=rub.split('Uznanie M')[0]
        rub=re.sub(r'^[^:]*:\*\*','',rub).strip()
        rub+='\n\nOceniane są bieżące rozróżnienia i powody. Brak odpowiedzi jest brakiem dowodu; nie przypisuje się na tej podstawie wcześniejszej przyczyny błędu lub cechy osoby.'
      stem=re.sub(r'[”"]\.$','.',stem)
      p=out/'open'/f'{oid}.md'
      critical='Pominięcie znanego istotnego wpływu wyłącznie z powodu braku zmiany albo utożsamienie scope z granicą systemu.' if letter=='A' else 'Klasyfikacja wyłącznie po liczbie, technologii lub celu bezpieczeństwa, bez rozpoznania przedmiotu oczekiwania.'
      border='Własny poprawny opis różnicy granic i wpływu jest równoważny; sama etykieta lub samo nie bez powodu jest częściowe.' if letter=='A' else 'Równoważne nazwy PL/EN i trafne własne przykłady są dopuszczalne; sam skrót co/jak bez wskazania concern jest częściowy.'
      body='## Polecenie\n\n'+stem+'\n\n## Rubryka\n\n'+rub+'\n\n**Błąd krytyczny:** '+critical+'\n\n**Odpowiedzi równoważne i graniczne:** '+border+'\n\n**Podstawa źródłowa:** '+u['source']+'\n\nOcena: jawna samoocena, bez punktów CPRE. Wymagane są wszystkie wskazane rozróżnienia; poprawne równoważne sformułowania są dopuszczalne.'
      write_md(p,dict(id=oid,revision='r2',scope=[sc],evaluation='self-assessment',sourceAnchor=relpath(srcpath)+' § '+oid),body)
      mapped(t,oid,'retrieval' if suff=='R01' else 'open-probe',p,oid,'r2',reason='Zachowano wykonanie i model; przewidywania diagnostyczne pozostają poza runtime.',srcfile=relpath(srcpath))
    # Zmaterializuj istniejące EX/CE/CMP/PRE jako osobne obiekty, zachowując ich ID.
    for prefix,kind in [('EX','example'),('CE','counterexample'),('CMP','comparison')]:
      oldid=prefix+'-'+letter
      if prefix=='CMP':
        a=intro.index('**CMP-'+letter);z=intro.index('**EX-'+letter,a);txt=intro[a:z].strip()
      else:
        a=intro.index('**'+oldid+':**')
        z=intro.find('**'+('CE-'+letter+':**' if prefix=='EX' else 'PRE-'+letter),a+4)
        txt=intro[a:z if z!=-1 else len(intro)].strip()
      p=out/'examples'/f'{oldid}.md'
      write_md(p,dict(id=oldid,revision='r2',kind=kind,title={'EX':'Przypadek uzupełniający','CE':'Granica dodatkowego uogólnienia','CMP':'Porównanie uzupełniające'}[prefix],scope=[sc],rules=[regr],sourceAnchor=relpath(srcpath)+' § '+oldid),txt)
      mapped(t,oldid,kind,p,oldid,'r2',action='adapt',reason='Istniejący materiał C wyodrębniony z zachowaniem ID i tekstu; nowe metadane reprezentacji mają r2.',srcfile=relpath(srcpath))
      relations.append(dict(type={'EX':'illustrates','CE':'counterexample-of','CMP':'distinguishes'}[prefix],from_=oldid,to=regr,meaning='Zachowany przypadek C rozwija częściowy zakres jego kryterium.'))
    pre='PRE-'+letter;p=out/'lessons'/f'{pre}.md';a=intro.index('**'+pre);txt=intro[a:].strip()
    condition='Gdy nie można wskazać, co w zdaniu jest przedmiotem oczekiwania.' if letter=='P' else 'Gdy nie można wskazać analizowanej całości i odróżnić jej od zakresu zmian.'
    write_md(p,dict(id=pre,revision='r2',kind='prerequisite',title='Pomijalna pomoc w odczytaniu przypadku',scope=[sc],rules=[regr],prerequisiteCondition=condition,skippable=True,sourceAnchor=relpath(srcpath)+' § '+pre),txt)
    mapped(t,pre,'prerequisite',p,pre,'r2',action='adapt',reason='Zachowano argument konieczności, sygnał braku i pomijalność; nowe metadane mają r2, bez obowiązkowego gatingu.',srcfile=relpath(srcpath))
    relations.append(dict(type='required-for',from_=pre,to=legacy,condition=condition+' Znana podstawa jest pomijalna; brak decyzji nie tworzy bramki.',meaning='Podstawa umożliwia odczytanie przyjętej perspektywy lub przedmiotu wymagania.'))
    rem='REM-'+letter;p=out/'corrections'/f'{rem}.md'
    a=section.index('**'+rem+' [N]:**');z=section.index('**HYP-',a);primary=section[a:z].split('**',2)[2].strip()
    primary=re.sub(r' Następnie C-P-F01[^.]*\.','',primary)
    primary=re.sub(r' Po korekcie przejdź do C-A-F01[^.]*\.','',primary)
    alternative=ALT[basecode] if letter=='P' else 'Pomyśl o niezmienianych godzinach działania zewnętrznego punktu. Jeżeli aplikacja ma podawać możliwy termin odbioru, godziny mają znaczenie dla jej wymagań, choć projekt nie może ich zmienić. Pytanie o istotny wpływ jest inne niż pytanie o swobodę modyfikacji; sam brak zmiany nie uzasadnia pominięcia.'
    write_md(p,dict(id=rem,revision='r2',scope=sc,followUps=[legacyqs['F'],legacyqs['G']],see=[nid],sourceAnchor=relpath(srcpath)+' § '+rem),
      primary+'\n\n## Inna pomoc\n\n'+alternative+'\n\nPo dwóch nieudanych kontrolach wybierz inne wsparcie lub przerwę; D pozostaje późniejszym kandydatem.')
    mapped(t,rem,'correction',p,rem,'r2',reason='Uzupełniono pełną pomoc alternatywną i drugą kontrolę G bez zmiany zakresu legacy.',srcfile=relpath(srcpath))
    relations.append(dict(type='explains',from_=nid,to=regr,meaning='Wierny wkład C wyjaśnia zachowany częściowy zakres.'))
    for role in 'FGD':relations.append(dict(type='variant-of',from_=legacyqs[role],to=legacyqs['B'],meaning='Wspólny kontrast C-'+letter+'; zachowano źródłową rodzinę D, ale jej odrębność nie jest potwierdzona.',condition='Podobieństwo wiedzy i konstrukcji; autorskie porównanie bez decyzji nowości.'))
    mapped(t,legacy,'criterion',out/'topic.yaml',legacy,'r2',reason='Historyczne ID bez Txx zachowane jako zgodne z normatywnym schematem i globalnie unikalne.',srcfile=relpath(srcpath))
    if letter=='A':
      a=section.index('### A7.');z=section.index('### A8.');p=HAND/'retained_external_T23/C-A-L301.md';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(section[a:z],encoding='utf-8')
      mapped(t,'C-A-L301','external-L3',p,'C-A-L301',action='retain-outside-runtime',reason='KRY-A02 / EO4.1.1 L3 należy do T23; nie rozszerza mianownika Z1.',srcfile=relpath(srcpath))
    # Całe tło diagnostyczne, dawne relacje i PRE/CMP/EX/CE pozostają także w wiernej kopii C03.
    mapped(t,'C03-'+letter,'source-annex',srcpath,'C03-'+letter,action='retain-outside-runtime',reason='Pełny oryginał zachowany bajtowo; nieobsługiwane relacje i hipotezy nie są polami runtime.',srcfile=relpath(srcpath))

def write_readme(t,topic,out,sources):
    counts={'A':0,'P':0,'K':0,'rationale':0}
    roles={r:0 for r in ['base','follow-up-1','follow-up-2','delayed-candidate']}
    for p in (out/'questions').glob('*.yaml'):
      q=yaml.safe_load(p.read_text());counts[q['format']]+=1;counts['rationale']+=len(q['options']);roles[q['role']]+=1
    material_kinds={}
    for d in ['lessons','examples']:
      for p in (out/d).glob('*.md'):
        m=yaml.safe_load(p.read_text().split('---\n',2)[1]);material_kinds[m['kind']]=material_kinds.get(m['kind'],0)+1
    txt=f"# {t['id']} r2 — notatka autora\n\nSamokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.\n\n## Zakres\n\n{t['scope']}\n\n{t['dependencies']}\n\n"
    txt+=table(['ID kryterium','Pełny sens / czynność źródłowa','EO / poziom','Aspekt i routing'],[(u['id'],u['title']+'; '+ ' '.join(u['answer']),u['eo']+' '+u['level'],'ZAK-'+u['id'][4:]+'; '+u.get('scope_id','lokalny zakres')) for u in t['units']])
    txt+='\nZamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.\n\n'
    txt+='K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.\n\n## Źródła użyte\n\n'
    txt+=table(['SRC','Wersja','Lokalizacje'],[(s['id'],s['version'],s['location']) for s in sources])
    txt+='\nDokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.\n\n## Inwentarz\n\n'
    txt+=table(['Obiekt','Liczba'],[(k,counts[k]) for k in ['A','P','K','rationale']]+list(roles.items())+list(material_kinds.items())+[(d,len(list((out/d).glob('*.*')))) for d in ['corrections','open']]+[('kryteria',len(topic['criteria'])),('zakresy',sum(len(c['aspects']) for c in topic['criteria'])),('rodziny',len(topic['families'])),('reguły',len(yaml.safe_load((out/'rules.yaml').read_text())['rules'])),('źródła',len(sources)),('relacje jawne',len(yaml.safe_load((out/'relations.yaml').read_text())['relations'])),('forms',0)])
    txt+='\n## Wynik samokontroli\n\ncontent:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.\n\n'
    txt+='Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/'+t['id']+'_VARIANTS.md.\n\n'
    txt+='## Luki i pytania do recenzenta\n\n- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.\n- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.\n- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.\n- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.\n- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.\n\n'
    if t['id'] in ('T02','T07'):txt+='Historyczne ID KRY-P01/KRY-A01 oraz REG-P1/REG-A1, REM-P/REM-A i rodziny C zachowano. Odstępstwo od zalecanego Txx w ID dotyczy istniejących tożsamości zgodnych z normatywnym schematem. D zachowuje historyczną odrębną rodzinę C-?2; to nie potwierdza niezależności od C-?1.\n\n'
    if t['id']=='T07':txt+='Dziewięć zakresów PR01–PR09 pozostaje jawnych; KRY-A01 jest dodatkowym częściowym wkładem PR04. C-A-L301 / KRY-A02 to T23 i nie zwiększa pokrycia Z1.\n\n'
    txt+='## Zmiany względem poprzedniej rewizji\n\nPierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.\n'
    (out/'README.md').write_text(txt,encoding='utf-8')

def main():
    wanted=set(sys.argv[1:]) or {t['id'] for t in DATA}
    for t in DATA:
      if t['id'] in wanted:export_topic(t)
    with (HAND/'MIGRATION_MAP.csv').open('w',encoding='utf-8',newline='') as f:
      w=csv.DictWriter(f,fieldnames=['source_file','source_version','source_location','source_id','source_kind','target_topic','target_path','target_id','target_revision','action','reason','gap_id'],lineterminator='\n');w.writeheader();w.writerows(MAP)
if __name__=='__main__':main()
