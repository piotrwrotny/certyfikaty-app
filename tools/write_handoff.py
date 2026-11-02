"""Inwentarz i raporty z rzeczywistych plików; brak decyzji lub wyników uczniów."""
from pathlib import Path
from collections import Counter
import csv,hashlib,json,re
import yaml
from build_authoring import ROOT,HAND,DATA,PUB,refpath,table

def load(p):return yaml.safe_load(p.read_text())
def meta(p):return yaml.safe_load(p.read_text().split('---\n',2)[1])
def main():
    topics={};tot=Counter();coverage=[];trace=[];sourcechecks=[];eos=set();invariants=[]
    val=json.loads((HAND/'LOCAL_VALIDATION.json').read_text())
    def inv(name,ok,details):invariants.append(dict(check=name,result='OK' if ok else 'FAIL',details=details));assert ok,(name,details)
    for t in DATA:
      tid=t['id'];folder=ROOT/'content/authoring'/tid;tp=load(folder/'topic.yaml');qs=[load(p) for p in sorted((folder/'questions').glob('*.yaml'))]
      rules=load(folder/'rules.yaml')['rules'];sources=load(folder/'sources.yaml')['sources'];ridx={r['id']:r for r in rules};sidx={s['id']:s for s in sources}
      lessons=[meta(p) for p in (folder/'lessons').glob('*.md')];examples=[meta(p) for p in (folder/'examples').glob('*.md')];rems=[meta(p) for p in (folder/'corrections').glob('*.md')];op=[meta(p) for p in (folder/'open').glob('*.md')]
      counts=Counter(q['format'] for q in qs)
      counts.update(questions=len(qs),rationales=sum(len(q['options']) for q in qs),criteria=len(tp['criteria']),aspects=sum(len(c['aspects']) for c in tp['criteria']),families=len(tp['families']),rules=len(rules),sources=len(sources),notes=sum(x['kind']=='note' for x in lessons),prerequisites=sum(x['kind']=='prerequisite' for x in lessons),examples=sum(x['kind']=='example' for x in examples),counterexamples=sum(x['kind']=='counterexample' for x in examples),comparisons=sum(x['kind']=='comparison' for x in examples),worked_examples=sum(x['kind']=='worked-example' for x in examples),corrections=len(rems),open=len(op),relations=len(load(folder/'relations.yaml')['relations']),files=len(list(folder.rglob('*.*'))))
      topics[tid]=counts;tot.update(counts)
      for c in tp['criteria']:
        for e in c.get('eo',[]):eos.add(e['id'])
        for a in c['aspects']:
          sc=dict(criterion=c['id'],aspect=a['id']);qscope=[q for q in qs if q['scope']==sc];byrole={q['role']:q['id'] for q in qscope}
          nota=[l['id'] for l in lessons if l['kind']=='note' and sc in l['scope']]
          ex=[l['id'] for l in examples if sc in l['scope']];oo=[l['id'] for l in op if sc in l['scope']];rem=next(r['id'] for r in rems if r['scope']==sc)
          ruleids=sorted({r for q in qscope for o in q['options'] for r in o['rules']})
          locs=sorted({r['source']+' '+r['location'] for rid in ruleids for r in ridx[rid]['sources']})
          coverage.append([tid,', '.join(e['id']+' '+e['level'] for e in c.get('eo',[])),c['id'],a['id']+' / '+a['labelAfterAnswer'],', '.join(nota),', '.join(ex),byrole.get('base','brak'),byrole.get('follow-up-1','brak'),byrole.get('follow-up-2','brak'),byrole.get('delayed-candidate','brak'),rem,', '.join(oo),'; '.join(locs),'Pokryte autorsko w deklarowanym zakresie; review otwarte. Otwarte D, jeśli źródłowe, poza runtime.'])
      for q in qs:
        c=next(c for c in tp['criteria'] if c['id']==q['scope']['criterion'])
        for o in q['options']:
          refs=[]
          for rid in o['rules']:
            for sr in ridx[rid]['sources']:
              s=sidx[sr['source']];refs.append(s['id']+' v'+s['version']+' '+sr['location'])
          trace.append(dict(topic=tid,question=q['id'],revision=q['revision'],option=o['id'],key=str(o.get('truth',o.get('correct'))).lower(),criterion=c['id'],aspect=q['scope']['aspect'],eo='; '.join(e['id']+' '+e['level'] for e in c['eo']),rules='; '.join(o['rules']),sources='; '.join(dict.fromkeys(refs)),knowledge=o.get('see',''),rationale=o['rationale'],boundary='Wynik dotyczy zamkniętego rozstrzygnięcia; nie zatwierdza swobodnego uzasadnienia lub pełnego EO.'))
      for r in rules:
        for sr in r['sources']:
          s=sidx[sr['source']];sourcechecks.append([tid,r['id'],r['statement'],s['title'],s['version'],sr['location'],s['url'],'Odczyt autora; zastosowania i granice wnioskowania są interpretacją, nie dosłownym cytatem IREB.'])
      # Rzeczywista kontrola zachowania każdego źródłowego zamkniętego zadania.
      qi={q['id']:q for q in qs}
      for u in t['units']:
        rp='RP-'+u['id'][4:];rptext=(folder/'open'/f'{rp}.md').read_text()
        inv('retrieval_preserved_'+rp,all(x in rptext for x in [u['rp'],*u['answer']]),'Polecenie i każdy element modelu zachowane w open.')
        for prefix,key in [('EX','example'),('CE','counter'),('CMP','comparison')]:
          mid=prefix+'-'+u['id'];text=(folder/'examples'/f'{mid}.md').read_text()
          inv('material_preserved_'+mid,u[key] in text,'ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane.')
        for q in u['tasks']:
          old=f"Z1-{tid}-{u['id'][-2:]}-{q['role']}01"
          if q['type']=='O':
            target=(HAND/'retained_open_delayed'/tid/'open'/f'{old}.md') if q['role']=='D' else folder/'open'/f'{old}.md'
            text=target.read_text();inv('open_preserved_'+old,all(s in text for s in [q['stem'],*q['dimensions'],q['critical'],q['border']]),str(target.relative_to(ROOT)))
          else:
            new=qi[old]
            key=[o['truth'] for o in new['options']] if q['type']=='K' else ''.join(o['id'] for o in new['options'] if o['correct'])
            oldkey=q['key'] if q['type']=='K' else ''.join(q['key'])
            inv('question_core_preserved_'+old,new['stem']==q['stem'] and [o['text'] for o in new['options']]==[x[0] for x in q['options']] and new['weight']==q['w'] and key==oldkey,'Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2.')
      inv('all_four_roles_'+tid,all(sum(q['role']==role for q in qs)==len(tp['criteria']) for role in ['base','follow-up-1','follow-up-2','delayed-candidate']),'Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów.')
    inv('eleven_owner_EO',len(eos)==11,', '.join(sorted(eos)))
    inv('nine_T07_principles',len(DATA[6]['units'])==9 and len(load(ROOT/'content/authoring/T07/topic.yaml')['criteria'])==10,'Dziewięć PR i dodatkowe częściowe KRY-A01; KRY-A02 nie wyeksportowano.')
    inv('all_original_open_D_retained',len(list((HAND/'retained_open_delayed').rglob('*.md')))==20,'20 pełnych wykonań otwartych D poza parserem tematów.')
    for name in ['C-A-B01','C-A-F01','C-A-D01','C-P-B01','C-P-F01','C-P-D01']:
      tid='T07' if name.startswith('C-A') else 'T02';q=load(ROOT/'content/authoring'/tid/'questions'/f'{name}.yaml')
      c3=next((ROOT/'references/project').glob('20-C03*')).read_text();m=re.search(r'\*\*\[R\] Klucz: ([a-e](?:,[a-e])*)\.\*\*',c3[c3.index('### '+('A' if tid=='T07' else 'P')+({'B': '3.','F':'5.','D':'6.'}[name[-3]])):])
      key=''.join(o['id'] for o in q['options'] if o['correct']);inv('legacy_key_preserved_'+name,m is not None and key==m.group(1).replace(',',''),'Klucz odczytany bezpośrednio z C03, nie z definicji generatora.')
    inv('no_fake_runtime_package',not (ROOT/'content/normalized').exists(),'Wyjście to pliki autorskie, bez ręcznie tworzonych JSON content-package.')
    inv('no_decision_files',not list((ROOT/'content/authoring').rglob('decisions.yaml')) and not list((ROOT/'content/authoring').rglob('withdrawals.yaml')),'Schematy chronionych plików są wejściem formatu, nie decyzjami.')
    # Pełne oryginały Content/QA/manifest oraz baseline projektu zachowano bajtowo.
    original_root=ROOT.parent
    if (original_root/'Z1').exists():
      for p in (ROOT/'references/content').iterdir():
        source=original_root/'Z1'/p.name
        inv('source_bytes_'+p.name,source.is_file() and p.read_bytes()==source.read_bytes(),'Kopia źródła bez zmiany bajtów.')
      for p in (ROOT/'references/project').glob('*.md'):
        source=original_root/'project_sources'/p.name
        inv('project_bytes_'+p.name,source.is_file() and p.read_bytes()==source.read_bytes(),'Baseline projektu bez zmiany bajtów.')
    with (HAND/'DECISION_TRACE.csv').open('w',encoding='utf-8',newline='') as f:
      w=csv.DictWriter(f,fieldnames=list(trace[0]),lineterminator='\n');w.writeheader();w.writerows(trace)
    (HAND/'SOURCE_CHECKS.md').write_text('# Z1 — źródłowa podstawa reguł\n\nKontrola autorska, 2026-11-02. Wersje i użyte fragmenty zweryfikowano na oficjalnych dokumentach IREB w lokalnych kopiach PDF o hashach zgodnych z pierwotnym manifestem. Strony oznaczają fizyczne strony PDF od 1; przykładowo fizyczna s.33 Glossary PL ma drukowany numer 26. Dokument w języku PL zawiera definicje EN.\n\nKatalog IREB ponownie sprawdzono pod adresem https://cpre.ireb.org/en/downloads-and-resources/downloads — profil sylabusa 3.3.0 i regulaminu 5.6.2 pozostaje zgodny. Glossary PL 2.2.0 i EN 2.2.0 sprawdzono na kopiach identycznych z wcześniejszym odczytem. Nie podmieniano profilu na inną wersję. Handbook 1.3.2 to dokument IREB w publicznej kopii iSQI; adres hosta nie jest deklaracją praw.\n\nZakres ponownego odczytu: Syllabus EN/PL 3.3.0 s.11–18; Examination Regulations 5.6.2 s.4–6; Glossary PL 2.2.0 hasła na s.12–14, 17, 21, 25, 27, 29, 32–35; Handbook EN 1.3.2 s.10–15, 20–25. Pozostały wcześniejszy odczyt tej samej rewizji udokumentowano w źródłowym manifeście i Content. Nie deklaruje się ponownego odczytu całych 161 stron.\n\nReguły poniżej są polskimi parafrazami. Rozdzielenie osi, brak gwarancji, zastosowanie do fikcyjnego przypadku i zakaz zbyt mocnej diagnozy są jawnymi wnioskami autora na podstawie znaczenia źródła. Nie są cytatami ani nowymi normami przypisywanymi IREB. Fakty fikcyjnych sytuacji są w stemach; IREB uzasadnia regułę ich oceny.\n\n'+table(['Temat','Reguła','Parafraza / granica','Dokument','Wersja','Lokalizacja','URL','Charakter'],sourcechecks),encoding='utf-8')
    (HAND/'COVERAGE.md').write_text('# Z1 — pokrycie formatu i czynności\n\n25 głównych zakresów oraz dwa odrębne, częściowe kryteria legacy. T07 ma dziewięć jawnych PR i dodatkowy wkład KRY-A01. Pokrycie autorskie nie jest odbiorem EO ani wynikiem ucznia.\n\nPytania zamknięte oceniają rozstrzygnięcia lub wybór gotowego argumentu. Odtworzenie i swobodne uzasadnienie zachowują osobne rubryki. 20 źródłowych otwartych D nie ma bezpiecznej reprezentacji roli w schemacie open, dlatego pozostaje poza runtime; nowe zamknięte D nie są równoważnym zastępstwem.\n\n'+table(['Temat','EO i poziom','Kryterium','Zakres','Nota','Przykłady','B','F','G','D zamknięte','Korekta','Otwarte / rubryka','Reguły i źródła','Stan i luka'],coverage),encoding='utf-8')
    with (HAND/'COVERAGE.csv').open('w',encoding='utf-8',newline='') as f:
      w=csv.writer(f,lineterminator='\n');w.writerow(['topic','eo_level','criterion','aspect','notes','examples','base','followup1','followup2','delayed_closed','correction','open','source_locations','state']);w.writerows(coverage)
    ac=[
      ('01','Autorsko sprawdzone; odrębne review otwarte','rules.yaml, SOURCE_CHECKS.md, DECISION_TRACE.csv; 435 lokalnych rationale z regułami i lokalizacjami.'),
      ('02','Autorsko sprawdzone w deklarowanym zakresie','27 lokalnych kryteriów, 11 EO właścicielskich; C-A-L301 / EO4.1.1 L3 poza runtime Z1.'),
      ('03','Autorsko sprawdzone','PL/EN w notach; explicit/implicit oddzielone od rzeczywiste/pozorne, NFR od quality; parafrazy nie są oficjalnym tłumaczeniem.'),
      ('04','Autorsko sprawdzone','Noty, 27 comparison, 27 EX i 27 CE, 9 worked-example, dwie pomijalne podstawy C; źródłowe argumenty R14 zachowane, bez wymuszenia.'),
      ('05','Wkład Z1 autorsko sprawdzony; nie odbiór historycznego przekroju','108 pełnych A/P/K, 435 rationale; legacy C-P/C-A pozostają materiałem do review.'),
      ('06','Rachunkowo sprawdzone, bez testu aplikacji','566 wektorów w SCORING_VECTORS.csv; dokładne ułamki, blank, nadmiar i podwójny K. Nie uruchomiono scorer aplikacji.'),
      ('07','Autorsko i strukturalnie sprawdzone','Reguły opcji, typowane relacje, istniejące źródła i sprawdzony wybór pierwszej noty; pole see zgodne z bieżącym fallbackiem.'),
      ('08','Autorsko sprawdzone','27 korekt z F/G i inną pomocą; zmiana wsparcia po dwóch niepowodzeniach; brak diagnoz osoby w runtime.'),
      ('09','Propozycja autorska; review rodzin i nowości otwarte','29 zachowanych/proponowanych rodzin; legacy D ma pierwotną rodzinę C-?2, niepotwierdzoną jako niezależna; *_VARIANTS.md i źródłowe QA.'),
      ('10','Autorsko sprawdzone','45 aktywności open runtime i 20 zachowanych D; wszystkie mają osobne rubryki i jawną samoocenę bez punktów CPRE.'),
      ('11','Opisane autorsko; brak historii osób','scope materiałów i rodzin; D poza zwykłymi lekcjami; pełne wydanie ujawnia kandydatów czytelnikowi, brak gwarancji rezerwy.'),
      ('12','Niespełnione w części odrębnego review i decyzji praw','Autor AI nie jest niezależnym reviewerem; brak decyzji dla r2 i kanału, także internal-review.'),
      ('13','Wkład treści przygotowany; G3 otwarte','Tekstowe A/P/K, neutralne opisy i fallbacki; brak wykonania aplikacji, dostępności i walkthrough.'),
      ('14','Autorsko sprawdzone; formalne dopuszczenie otwarte','Manifest, mapa migracji, luki, hashe, zmiany i checkpoint; brak deklaracji całego FL lub zamknięcia bramek.'),
    ]
    qg=[
      ('01','Autorsko sprawdzone','Stemy zawierają dane potrzebne do zamkniętego rozstrzygnięcia; odrębne rozwiązanie bez klucza pozostaje do review.'),
      ('02','Schemat i semantyka sprawdzone lokalnie','A=41, P=30, K=37; pełne klucze i parametry; to nie oficjalny lint.'),
      ('03','Autorsko sprawdzone','435 uzasadnień; 128 skrótowych rationale rozszerzono o jawną regułę; brak źródłowej poprawności nie jest zastępowany płynnością tekstu.'),
      ('04','Autorsko sprawdzone','Zakres primary przy każdej decyzji; nie utożsamiono wyboru argumentu z otwartym wykonaniem.'),
      ('05','Autorsko sprawdzone','Wersje, lokalizacje i ścieżka decyzja–reguła–źródło w audycie.'),
      ('06','Treść sprawdzona; UI niewykonane','Neutralne criteria.description, labelBeforeAnswer i tytuły materiałów; K ma pełne teksty wierszy i truth.'),
      ('07','Rodziny opisane; review niezależności otwarte','Przykłady i role nie stanowią decyzji o nowości dla osoby.'),
      ('08','Pochodzenie opisane; prawa kanału nierozstrzygnięte','usageNote nie jest zgodą; nie utworzono decyzji praw.'),
      ('09','Niespełnione','Brak odrębnego kompetentnego review tej rewizji i decyzji użycia.'),
      ('10','Ścieżki sesji przygotowane; forma testowa poza zakresem','27 pełnych zamkniętych B/F/G/D i korekt; brak zatwierdzonej formy Sprawdzenia.'),
    ]
    (HAND/'AUTHOR_SELF_CHECK.md').write_text('# Z1 — autokontrola C-AC i QG\n\nWyłącznie kontrola autorska agenta AI. Statusy nie są decyzją G2 ani odrębną recenzją. Punktem odniesienia jest M02 §6 i B01-07/B04 v0.2.\n\n'+table(['C-AC','Stan','Dowód / granica'],ac)+'\n'+table(['QG','Stan','Dowód / granica'],qg),encoding='utf-8')
    gaps=[
      ('Z1-GAP-CLI','Wszystkie tematy','Brak implementacji oficjalnego lint/convert i repozytorium aplikacji.','Nie potwierdzono zgodności zachowania rzeczywistego konwertera lub content-package; authoring pozostaje draft.','W repozytorium uruchomić content:lint dla T01–T07, naprawić błędy i wykonać content:convert; sprawdzić raport i różnice.'),
      ('Z1-GAP-OPEN-D','20 źródłowych wykonań otwartych D','Schema open nie posiada pola role ani obsługiwanej polityki delayed.','Pełne zadania zachowane w handoff, poza runtime; 27 zamkniętych D nie mierzy automatycznie ich swobodnego wykonania.','Ustalić w kontrakcie aplikacji reprezentację i ochronę otwartego delayed albo pozostawić te wykonania w osobnym trybie poza runtime. Nie dopisywać pola do obecnego schematu.'),
      ('Z1-GAP-REVIEW','108 pytań, 65 otwartych aktywności łącznie, reguły i relacje','Nie ma odrębnego kompetentnego review tej rewizji.','C-AC-12 i QG-09 w części review niespełnione.','Reviewer rozwiązuje stemy bez klucza, następnie sprawdza każdą decyzję, źródło, EO, rubrykę i scoring; rozliczyć uwagi dla konkretnych rewizji.'),
      ('Z1-GAP-RIGHTS','Wszystkie tematy r2','Brak upoważnionej decyzji o prawach, kanale i użyciach.','Nie ma dopuszczenia także do kanału internal-review; usageNote go nie zastępuje.','Upoważniona osoba ocenia użyte źródła i wydanie, następnie zapisuje właściwą decyzję; agent tego pliku nie tworzy.'),
      ('Z1-GAP-NOVELTY','D i bliskie rodziny','Brak review niezależności oraz historii ekspozycji osób.','Pełne archiwum ujawnia wszystkie klucze; nie stanowi nieznanej rezerwy dla czytelnika.','Ocenić rodziny i wzajemne przecieki oraz rzeczywistą eligibility przed użyciem D; zapisywać ekspozycję i oba czasy per kryterium.'),
      ('Z1-GAP-IMPLEMENTATION','Integracja i G3','Nie udostępniono działającej aplikacji do sprawdzenia UI i ograniczeń ekspozycji.','Neutralność treści i poprawny routing statyczny nie są wynikiem walkthrough.','Po odpowiednim odbiorze treści osobno wykonać G3 według protokołu na przyjętych rewizjach; nie deklarować retencji z symulacji.'),
    ]
    countsrows=[[tid,c['criteria'],c['questions'],c['A'],c['P'],c['K'],c['rationales'],c['notes'],c['prerequisites'],c['examples']+c['counterexamples']+c['comparisons']+c['worked_examples'],c['corrections'],c['open'],c['rules'],c['relations']] for tid,c in topics.items()]
    countsrows.append(['RAZEM']+[sum(row[i] for row in countsrows) for i in range(1,len(countsrows[0]))])
    summary=table(['Temat','Kryteria / zakresy','Pytania','A','P','K','Rationale','Noty','Podstawy','Przykłady łącznie','Korekty','Open runtime','Reguły','Relacje jawne'],countsrows)
    manifest='# Z1 — paczki autorskie wiedzy do aplikacji\n\nWydanie v1.0, 2026-11-02. Format cpre-authoring/1.0. Tematy T01–T07 mają revision r2 i authoring draft. Jest to przygotowany materiał autorski z lokalną walidacją schematów i semantyki; nie wynik oficjalnej konwersji ani decyzja użycia. Kontrola wyłącznie autorska.\n\n## Inwentarz\n\n'+summary
    manifest+='\n25 głównych lokalnych zakresów i dwa dodatkowe legacy KRY-P01/KRY-A01; 11 EO właścicielskich, bez deklaracji zaakceptowania pełnych EO. Każdy z 27 zakresów ma B/F/G/D zamknięte oraz korektę F/G. W 108 pytaniach jest 435 uzasadnionych decyzji; 63 pytania są nowymi uzupełnieniami, 39 pochodzi z Z1, 6 z C. Łącznie 45 aktywności otwartych runtime i 20 oryginalnych otwartych D zachowanych poza runtime. Dodatkowe C-A-L301 to wkład T23, poza mianownikiem Z1.\n\n29 etykiet rodzin jest grupowaniem źródłowym/autorskim, nie 29 niezależnymi pomiarami. Nie utworzono forms.yaml, zatwierdzonej formy testowej ani decyzji praw.\n\n## Pliki i źródła\n\n'
    manifest+=table(['Temat','Katalog','Źródłowy Content i QA','Zależności bez automatycznej bramki'],[(t['id'],'../../content/authoring/'+t['id'],refpath(t)+'; '+refpath(t,'QA_and_Handoff'),t['dependencies']) for t in DATA])
    manifest+='\nKopie wejść w references/content i references/project zachowują oryginalne bajty. Dane pośrednie w references/migration_input uzgodniono z Content przed użyciem. Dokument 13 i schematy są dołączone, instrukcja 14 pochodzi z rozmowy, a niedostarczonego dokumentu 15 nie odtworzono. Skrypty tools tworzą pliki autorskie i pomocnicze raporty, nie zastępują aplikacyjnego konwertera.\n\n'
    manifest+='Źródła merytoryczne: Syllabus EN/PL 3.3.0; Glossary PL 2.2.0 z definicjami EN; Examination Regulations EN 5.6.2 dla scoringu; Handbook EN 1.3.2 dla wskazanych rozwinięć. Dokładne kotwice: SOURCE_CHECKS.md i rules.yaml. Oficjalnych PDF nie dołączono do eksportu.\n\n'
    manifest+='Źródłowe C-S02/C-S03/C-S06/C-S07 reprezentują publikacje w starym rejestrze. W każdym temacie utworzono jawnie mapowane lokalne rekordy SRC-Txx-SEN/SPL/GPL/HEN, aby nie powtarzać ID obiektów między paczkami; nie zmieniono tożsamości publikacji ani rejestru C01. Dotychczasowe pytania, kryteria, materiały i rodziny zachowują swoje ID; nowe obiekty zawierają Txx.\n\n## Pokrycie i ograniczenia\n\n'
    manifest+='Pełna macierz jest w COVERAGE.md, a ścieżka każdej decyzji w DECISION_TRACE.csv. T07 rozlicza PR01–PR09 osobno; C-A jest tylko wkładem częściowym PR04. Zamknięte rozstrzygnięcie nie zastępuje odtworzenia lub swobodnego wyjaśnienia. Brak pola delayed dla open rozliczono jako rzeczywiste ograniczenie formatu.\n\nK-04: wiersz 4 ILL-K01 / KRY-X01 bez fikcyjnego EO; historyczne m=4, w=2 i ilustracyjne 1/2 pozostają bez zmiany. Cała ilustracja pozostaje poza rezerwą CPRE i pełnym mockiem; nie importowano jej jako punktowanego itemu Z1.\n\n## Kontrola i luki\n\n'
    manifest+=f"Lokalna walidacja: {len(val['errors'])} błędów, {len(val['warnings'])} oczekiwanych ostrzeżeń o braku decyzji; {sum(val['checks'].values())} wykonań kontroli i {val['checks']['schema_objects']} obiektów sprawdzonych schematem. To liczniki narzędzia pomocniczego, nie liczba niezależnych recenzji. Zapisano {val['scoring_vectors']} rachunkowych wektorów odpowiedzi. content:lint i content:convert nie zostały uruchomione: implementacji CLI nie dostarczono.\n\n"
    manifest+=table(['ID luki','Zakres','Brak','Wpływ','Następna czynność'],gaps)
    manifest+='\n## Następny krok do G2\n\nPrzekazać wskazane rewizje do odrębnego kompetentnego review: najpierw rozwiązanie stemów bez klucza, potem źródła, EO, każda opcja i rationale, scoring, rubryki, rodziny, widoczność i prawa. Rozliczyć uwagi, przeprowadzić rzeczywistą walidację/konwersję w repozytorium i uzyskać decyzję właściciela o zakresie G2. G3 jest osobnym walkthrough według protokołu; G2/G3/G4 pozostają otwarte.\n'
    (HAND/'MANIFEST.md').write_text(manifest,encoding='utf-8')
    report='# Z1 — rzeczywisty raport walidacji\n\nAutor: agent AI. Data 2026-11-02. Kontrola wyłącznie autorska.\n\n## Dostępność narzędzi\n\ncontent:lint — nie uruchomiono. content:convert — nie uruchomiono. content:validate aplikacji — nie uruchomiono. Brak scripts/content/authoring-cli.ts, walidatora content-package i kodu aplikacji; samo package.json nie wystarcza. Nie utworzono ręcznego content/normalized.\n\nPomocnicze wykonanie: python tools/validate_authoring_local.py --existing-normalized wskazany_katalog_T21. Użyto jsonschema 4.25.1, Draft 2020-12 i lokalnie zarejestrowanych schematów. Zależności narzędzia nie są spakowane. Dokładny rzeczywisty argument istniejącego katalogu zapisano w LOCAL_VALIDATION.json; nie jest on przenośnym poleceniem integracji.\n\n## Wyniki\n\n'
    report+=table(['Kontrola','Rzeczywisty wynik'],[(k,v) for k,v in val['checks'].items()])
    report+=f"\nBłędy: {len(val['errors'])}. Ostrzeżenia: {len(val['warnings'])}; wszystkie siedem dotyczy braku decyzji dla r2, po jednym na temat. Odrębne luki praw/review/CLI/open-D pozostają w manifeście; brak błędów schematu ich nie usuwa.\n\n"
    report+='Sprawdzono nazwy, unikalność ID, format A/P/K, parametry, referencje i rodzaje końców, przynależność aspektów, komplet B/F/G/D, scope i role korekt, niepustą inną pomoc, rubryki, routing see, podstawy źródłowe reguł, provenance i brak chronionych plików. Sprawdzono kolizje z dostępnym snapshotem T21 w contract_inputs/content/normalized. Nie jest to kontrola z niedostarczonymi paczkami T08–T40.\n\n566 wektorów to obliczenia według regulaminu i C02, bez wykonania aplikacyjnego scorer. SCORING_VECTORS.csv podaje każdą odpowiedź i dokładny oczekiwany ułamek. Brak testu aplikacji pozostaje jawny.\n\n## Realne poprawki\n\n'
    report+=table(['ID poprawki','Stan przed','Zmiana','Dowód po zmianie'],[
      ('Z1-APP-FIX-01','Pierwszy przebieg zgłosił 128 skrótowych rationale bez jawnego pełnego trójczłonowego toku.','Dopisano odpowiednią źródłową regułę między lokalną przesłanką a wynikiem, zachowując klucze i wagi.','Lokalna kontrola struktury rationale: brak błędów; pełny tekst w pytaniach i DECISION_TRACE.csv.'),
      ('Z1-APP-FIX-02','Robocza wersja G dla KRY-A01 zawierała wiersz o klasyfikacji modułu wewnętrznego.','Zastąpiono go przypadkiem niezmienianego zewnętrznego harmonogramu; każdy wiersz dotyczy wyłącznie istotnego wpływu mimo braku zmiany.','T07-GC01; KRY-A01 zachowuje wąski zakres.'),
      ('Z1-APP-FIX-03','Robocza kotwica podsystemu wskazywała Handbook s.10–11.','Po odczycie doprecyzowano do §1.1, Definition 1.4 i uwagi o podsystemach, fizyczna s.12.','REG-T01-04-03; osobne poprawne wsparcie Glossary s.29.'),
      ('Z1-APP-FIX-04','Oryginalne korekty dostarczały tylko F, czasem otwarte; brak G i pełnej alternatywnej pomocy.','27 korekt ma rzeczywiste zamknięte F/G w kolejności i inną pomoc; otwarte F zachowane oddzielnie.','Kontrole two_followups, followup_role_scope i alternate_help bez błędów.'),
      ('Z1-APP-FIX-05','Schema open nie pozwala bezpiecznie zapisać roli delayed; zwykły eksport mógłby wystawić D do Nauki.','Zachowano 20 oryginalnych otwartych D z ID i rubrykami poza parserem tematów, z mapą migracji.','Z1-GAP-OPEN-D pozostaje otwartą decyzją reprezentacji, a nie pozornie usuniętą luką.'),
      ('Z1-APP-FIX-06','Pierwsza adaptacja REM-A korzystała z szerszej pomocy PR04, a alternatywna pomoc głównego PR04 zbyt podobnie powtarzała cztery pytania.','REM-A otrzymała pierwotny wąski rdzeń C i przykład istotnego wpływu mimo niezmienności; PR04 otrzymał tabelę rozdzielającą sygnał od realnego zdarzenia.','Ręcznie ponownie sprawdzono zgodność celu korekty z KRY-A01 i KRY-T07-04; walidacja scope i odwołań bez błędów.'),
    ])
    report+='\n## Niezmienniki migracji\n\n'+table(['Kontrola','Wynik','Dowód'],[(x['check'],x['result'],x['details']) for x in invariants])
    report+='\n## Luki i granice\n\n'+table(['ID','Zakres','Brak','Wpływ','Następna czynność'],gaps)+'\nSamokontrola C-AC-01–14 i QG-01–10: AUTHOR_SELF_CHECK.md. C-AC-12 i QG-09 nie otrzymały autorskiego PASS w części odrębnego review. Źródłowe QA pozostaje zachowane, bez domniemania akceptacji G2.\n'
    (HAND/'VALIDATION_REPORT.md').write_text(report,encoding='utf-8')
    # Uzupełnij ślad dokumentów zachowanych w całości i jawnych rekordów źródeł.
    mp=HAND/'MIGRATION_MAP.csv'
    with mp.open(encoding='utf-8',newline='') as f:reader=csv.DictReader(f);fields=reader.fieldnames;rows=[r for r in reader if r['source_kind'] not in ['source-document','source-record']]
    for t in DATA:
      for kind in ['Content','QA_and_Handoff']:
        path=refpath(t,kind);rows.append(dict(source_file=path,source_version='v0.1',source_location='cały dokument',source_id=t['id']+'-'+kind,source_kind='source-document',target_topic=t['id'],target_path=path,target_id=t['id']+'-'+kind,target_revision='',action='retain-outside-runtime',reason='Pełny oryginał zachowany bajtowo; wszystkie niewspierane fragmenty i historyczne uwagi są dostępne do review.',gap_id=''))
      for src in load(ROOT/'content/authoring'/t['id']/'sources.yaml')['sources']:
        suffix=src['id'].rsplit('-',1)[1];old={'SEN':'C-S02','SPL':'C-S03','GPL':'C-S06','HEN':'C-S07'}[suffix]
        rows.append(dict(source_file='references/content/Z1_IREB_CPRE_Manifest_v0.1.md',source_version='v0.1',source_location='Oficjalne źródła i rzeczywisty odczyt',source_id=old,source_kind='source-record',target_topic=t['id'],target_path='content/authoring/'+t['id']+'/sources.yaml',target_id=src['id'],target_revision='',action='split',reason='Jawny lokalny rekord tej samej publikacji, bez zmiany wersji lub pierwotnego rejestru; unikalność między tematami.',gap_id=''))
    with mp.open('w',encoding='utf-8',newline='') as f:w=csv.DictWriter(f,fieldnames=fields,lineterminator='\n');w.writeheader();w.writerows(rows)
    (HAND/'INVARIANT_CHECKS.json').write_text(json.dumps(invariants,ensure_ascii=False,indent=2),encoding='utf-8')
    (HAND/'INVENTORY.json').write_text(json.dumps(dict(date='2026-11-02',topics={k:dict(v) for k,v in topics.items()},total=dict(tot),owner_eos=sorted(eos),new_closed_questions=63,retained_open_delayed=20,external_L3_items=1,local_validation_errors=len(val['errors']),local_validation_warnings=len(val['warnings']),official_lint_run=False,official_convert_run=False),ensure_ascii=False,indent=2),encoding='utf-8')
    (HAND/'PROGRESS.md').write_text('# Z1 — checkpoint ukończenia migracji autorskiej\n\n2026-11-02. Zapisano T01–T07 r2 w content/authoring, 108 pytań, 435 rationale, 45 otwartych aktywności runtime, 20 zachowanych otwartych D oraz zewnętrzny wkład T23. Wszystkie tematy pozostają draft.\n\nUkończone: mapowanie wejść, pełne treści i rozszerzenia, 27 korekt F/G, dziewięć jawnych zakresów T07, manifest, pokrycie, mapa migracji, źródła i lokalna walidacja bez błędów. Wyniki i liczby w INVENTORY.json oraz LOCAL_VALIDATION.json. Nie wykonano oficjalnego lint/convert ani odrębnego review.\n\nWznowienie: zacznij od MANIFEST.md i VALIDATION_REPORT.md. Nie generuj nowych konkurencyjnych ID. W repozytorium aplikacji uruchom rzeczywisty lint i konwersję; wykonaj odrębne review i rozlicz luki, w szczególności open delayed oraz prawa/kanał. Zmiany istniejącej treści wymagają właściwych rewizji. G2/G3/G4 pozostają otwarte.\n',encoding='utf-8')
    readme='# Z1 — paczki wiedzy w formacie autorskim\n\n'+summary+'\nZacznij od [manifestu](handoff/Z1/MANIFEST.md), [pokrycia](handoff/Z1/COVERAGE.md) i [raportu walidacji](handoff/Z1/VALIDATION_REPORT.md).\n\n'
    readme+='To siedem osobnych katalogów T01–T07 w content/authoring, w formacie cpre-authoring/1.0. Są przygotowanym wsadem do aplikacji, z pełną treścią i powiązaniami; nie są ręcznie wygenerowanymi paczkami JSON. Wszystkie tematy mają authoring draft.\n\n'
    readme+='Lokalna walidacja schematów i semantyki zakończyła się bez błędów; siedem ostrzeżeń to brak decyzji dla r2. Oficjalne content:lint/content:convert nie zostały uruchomione, ponieważ kontrakt.zip nie zawiera ich implementacji. Odrębne review, prawa i dopuszczenie pozostają otwarte. Kontrola autora nie zamyka G2/G3/G4.\n\n'
    readme+='20 źródłowych otwartych D zachowano w handoff/Z1/retained_open_delayed, ponieważ schema open nie koduje roli delayed. Nie kopiuj ich do zwykłej Nauki. C-A-L301 zachowano jako wkład T23. Pełna paczka ujawnia wszystkie rozwiązania czytelnikowi i nie stanowi dla niego nieznanej rezerwy.\n\n'
    readme+='K-04 pozostaje bez zmiany: wiersz 4 ILL-K01 / KRY-X01 bez EO; cała historyczna ilustracja poza rezerwą CPRE i pełnym mockiem. Nie utworzono decisions.yaml ani withdrawals.yaml.\n\n## Integracja w repozytorium\n\n'
    readme+='Skopiuj content/authoring/T01–T07 i odpowiadające im references/content oraz references/project, zachowując ścieżki provenance. Porównaj rzeczywisty kontrakt repozytorium z dołączonym docs/13_AUTHORING_FORMAT.md i schematami; nie nadpisuj nowszych schematów, kodu, decyzji ani istniejących paczek. Przy istniejących Txx potraktuj wynik jako propozycję aktualizacji wymagającą porównania rewizji.\n\n'
    readme+='Przykład uruchomienia w repozytorium z rzeczywistym CLI:\n\n```bash\nnpm run content:lint -- content/authoring/T01 content/authoring/T02 content/authoring/T03 content/authoring/T04 content/authoring/T05 content/authoring/T06 content/authoring/T07\nnpm run content:convert -- content/authoring/T01 content/authoring/T02 content/authoring/T03 content/authoring/T04 content/authoring/T05 content/authoring/T06 content/authoring/T07\n```\n\n'
    readme+='Przed konwersją zachowaj stare wyniki poza content/normalized lub w historii wersji. Nie używaj automatycznie --replace-import. Po konwersji sprawdź raporty i content:validate według rzeczywistej implementacji. Brak decyzji oznacza brak dopuszczonego kanału, także recenzenckiego. Decyzję może zapisać wyłącznie upoważniona osoba.\n\n## Odtwarzanie kontroli pomocniczej\n\n'
    readme+='Narzędzie wymaga Python, PyYAML i jsonschema 4.25.1 z obsługą Draft 2020-12. Zależności nie są dołączone. Po ich zainstalowaniu można wykonać:\n\n```bash\npython tools/validate_authoring_local.py\n```\n\n'
    readme+='To kontrola pomocnicza, bez równoważności z oficjalnym lint lub testem aplikacji. tools/build_authoring.py odtwarza pliki autorskie z dołączonych danych i rozszerzeń; nie uruchamiaj go nad później ręcznie poprawioną rewizją bez porównania. tools/write_handoff.py aktualizuje raporty na podstawie istniejących plików i wyników kontroli.\n\nNastępny krok do G2: odrębne kompetentne review właściwych rewizji, rozliczenie uwag, oficjalny lint/convert w repozytorium i decyzja właściciela o zakresie oraz użyciu. G3 to osobny późniejszy walkthrough.\n'
    (ROOT/'README.md').write_text(readme,encoding='utf-8')
    print(json.dumps(dict(topics=len(topics),questions=tot['questions'],rationales=tot['rationales'],runtime_open=tot['open'],notes=tot['notes'],examples=tot['examples']+tot['counterexamples']+tot['comparisons']+tot['worked_examples'],rules=tot['rules'],relations=tot['relations'],invariant_checks=len(invariants),mapping_rows=len(rows)),ensure_ascii=False))
if __name__=='__main__':main()
