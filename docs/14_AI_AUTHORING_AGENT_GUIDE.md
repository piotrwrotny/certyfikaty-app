# 14 — Instrukcja dla agenta AI opracowującego wiedzę (`cpre-authoring/1.0`)

**Adresat:** agent AI, który przygotowuje treść tematów IREB CPRE Foundation Level dla aplikacji PWA.
**Wynik pracy agenta:** jeden katalog tematu w formacie `cpre-authoring/1.0`, gotowy do `content:lint` i `content:convert`.
**Hierarchia:** normatywne są `docs/13_AUTHORING_FORMAT.md` i schematy `schemas/authoring/*.schema.json`. Ten dokument jest instrukcją operacyjną. Przy sprzeczności obowiązuje docs/13 i schemat, a agent zgłasza sprzeczność w `README.md` tematu.

Słowa **MUSI**, **NIE WOLNO**, **POWINIEN** i **MOŻE** mają znaczenie jak w RFC 2119.

---

## 0. Pakiet wejściowy agenta

Agent pracuje na podstawie tych plików. Bez nich nie zaczyna pracy.

| Plik | Po co |
|---|---|
| `docs/14_AI_AUTHORING_AGENT_GUIDE.md` | ta instrukcja |
| `docs/13_AUTHORING_FORMAT.md` | pełna specyfikacja formatu |
| `schemas/authoring/*.schema.json` | 13 schematów JSON (Draft 2020-12), walidacja struktury |
| `content/authoring/_templates/**` | wzory każdego rodzaju pliku z komentarzami |
| `examples/authoring/T21-mini/**` | działający przykład w realnej treści |
| `references/project/C02_IREB_CPRE_Terminology_and_Authoring_Standard_v0.2.md` | standard pisania i terminologia |
| materiały źródłowe tematu | sylabus, słownik, regulamin w podanych wersjach |

---

## 1. Reguły bezwzględne

### 1.1 Statusy i decyzje

1. Agent **NIE WOLNO** utworzyć ani zmienić `review/decisions.yaml` ani `review/withdrawals.yaml`. Te pliki pisze wyłącznie upoważniona osoba.
2. Agent **NIE WOLNO** deklarować recenzji, dopuszczenia, praw, zgody ani nowości pytania w żadnym polu, tekście ani nazwie pliku.
3. Agent ustawia `authoring: draft`. Wartość `complete` **MOŻE** ustawić tylko wtedy, gdy przeszedł całą samokontrolę z §7 i nie zostawił żadnej luki.
4. Agent **NIE WOLNO** przedstawiać własnej ponownej lektury, zmiany perspektywy ani drugiego przebiegu jako niezależnej recenzji (C02-08).

### 1.2 Poprawność merytoryczna

5. LLM nie jest źródłem poprawności (C02-03 p.3). Każdy klucz i każde uzasadnienie **MUSI** wynikać z reguły, a każda reguła **MUSI** mieć źródło z dokładną wersją i lokalizacją.
6. Agent **NIE WOLNO** wymyślać źródeł, stron, sekcji, adresów URL ani cytatów. Gdy nie zna lokalizacji, zapisuje lukę w `README.md`, zostawia `authoring: draft` i nie tworzy reguły bez źródła. `url` źródła jest wymagany. Dla publikacji bez adresu sieciowego agent używa identyfikatora `urn:`, np. `urn:isbn:…`, a nigdy pustego tekstu ani `example.org`.
7. Agent **MUSI** oddzielać fakt normy, interpretację zastosowania i decyzję projektu (C02-03 p.2). Zdania interpretacji nie przypisuje IREB.
8. Agent **NIE WOLNO** diagnozować osoby z wybranego dystraktora, pustej odpowiedzi ani nadmiaru zaznaczeń (C02-03 p.6). Format nie ma pól na hipotezy błędnych przekonań i sondy diagnostyczne.
9. Agent **MUSI** używać terminologii kontrolowanej z C02-02. Nie tworzy nowych „oficjalnych” przekładów etykiet IREB.

### 1.3 Ujawnianie przed odpowiedzią

10. Treść pytania, opcje, `labelBeforeAnswer`, `shortTitle` i tytuł formy **NIE WOLNO** zdradzać klucza. Nazwa zakresu (`labelAfterAnswer`) jest często odpowiedzią, więc **NIE WOLNO** jej używać w tych polach.
11. Treść pytania **MUSI** zawierać wszystkie przesłanki potrzebne do jednej interpretacji klucza (C02-09).

### 1.4 Identyfikatory i rewizje

12. Identyfikatory są stałe. Po publikacji **NIE WOLNO** ich zmieniać, bo zmiana identyfikatora nie przenosi historii ucznia.
13. Każdy identyfikator **MUSI** zaczynać się od identyfikatora tematu albo zawierać go, np. `T22-B01` lub `REG-T22-01`, żeby był unikalny we wszystkich tematach.
14. Zmiana treści opublikowanego obiektu **MUSI** iść w parze z nową rewizją obiektu (`r1` na `r2`) i nową rewizją tematu w `topic.yaml`.

### 1.5 Technika

15. Pliki w UTF-8, końce linii LF, bez BOM.
16. Markdown wyłącznie z podzbioru: akapity, listy, `**wyróżnienia**`, proste tabele, linki `https://`. **NIE WOLNO** używać HTML, obrazów ani znaków `<…>` w tekście, bo lint traktuje je jak niewypełniony wzór.
17. Wartość YAML zawierającą `: ` albo ` #`, albo zaczynającą się od `[ { * & ! | > ' " %`, **MUSI** być w cudzysłowie albo w bloku `|`. Dłuższe teksty zawsze w bloku `|`.

---

## 2. Struktura wyniku

```text
<ID>/                         nazwa katalogu = id z topic.yaml, np. T22
├── README.md                 notatka przekazania agenta (§8); konwerter ją pomija
├── topic.yaml                tożsamość, teksty wyświetlane, kryteria, zakresy, rodziny
├── sources.yaml              źródła (wymagany)
├── rules.yaml                reguły rozstrzygające (wymagany)
├── relations.yaml            typowane powiązania (opcjonalny)
├── forms.yaml                propozycje form testu (opcjonalny)
├── questions/<ID>.yaml       jedno pytanie A, P albo K na plik
├── lessons/<ID>.md           nota (note) albo potrzebna podstawa (prerequisite)
├── examples/<ID>.md          example, counterexample, worked-example, comparison
├── corrections/<ID>.md       korekta z kontrolami F i G
└── open/<ID>.md              aktywność otwarta z rubryką
```

- Nazwa pliku bez rozszerzenia **MUSI** być równa polu `id` obiektu.
- Pliki `.md` mają nagłówek YAML między liniami `---`, a pod nim treść.
- Pierwsza linia plików `.yaml` **POWINNA** zawierać `# yaml-language-server: $schema=<ścieżka>` jak we wzorach.
- Konwerter czyta pliki alfabetycznie. Ta kolejność decyduje, która nota zakresu jest jego wprowadzeniem i które pytanie bazowe pojawi się pierwsze.

### 2.1 Zalecana konwencja identyfikatorów

| Obiekt | Wzorzec | Przykład |
|---|---|---|
| temat | `T<nn>` | `T22` |
| kryterium | `KRY-<temat>-<nn>` | `KRY-T22-01` |
| zakres | `ZAK-<temat>-<nn>` | `ZAK-T22-03` |
| rodzina | `FAM-<temat>-<nn>` | `FAM-T22-03` |
| źródło | `SRC-<temat>-<skrót>` | `SRC-T22-SEN` |
| reguła | `REG-<temat>-<nn>` | `REG-T22-04` |
| pytanie bazowe / F / G / D | `<temat>-B<nn>`, `-F<nn>`, `-G<nn>`, `-D<nn>` | `T22-F03` |
| nota, podstawa | `N-<temat>-<nn>`, `PRE-<temat>` | `N-T22-03` |
| porównanie, scenariusz | `CMP-<temat>-<nn>`, `WS-<temat>-<nn>` | `CMP-T22-01` |
| przykład, kontrprzykład | `EX-<temat>-<nn>`, `CE-<temat>-<nn>` | `CE-T22-02` |
| korekta | `REM-<temat>-<nn>` | `REM-T22-03` |
| aktywność otwarta | `<temat>-O<nn>` | `T22-O01` |
| forma testu | `FORM-<temat>-<nn>` | `FORM-T22-01` |

Numer `<nn>` pytań B, F, G, D, noty, korekty i rodziny **POWINIEN** być numerem zakresu. Wtedy `T22-B03`, `T22-F03`, `T22-G03`, `N-T22-03` i `REM-T22-03` należą do `ZAK-T22-03`.

---

## 3. Procedura

Agent wykonuje kroki w tej kolejności. Każdy krok kończy się plikami zgodnymi ze schematem.

**P1. Zakres tematu.** Ustal obserwowalną czynność, warunki, lokalne kryterium, EO i poziom (C02-03 p.1). Identyfikator kryterium projektu nie jest nowym EO IREB. Wynik: `topic.yaml` z `criteria`, `eo` i `aspects`.

**P2. Źródła.** Zapisz źródła z wersją, adresem i lokalizacją w `sources.yaml`. `usageNote` opisuje znane ograniczenia użycia i nie jest zgodą.

**P3. Reguły.** Zapisz każdą zasadę rozstrzygającą jako jedno zdanie w `rules.yaml`, z co najmniej jednym odwołaniem do źródła z lokalizacją. Reguła **POWINNA** być na tyle wąska, żeby uzasadnienie jednej opcji mogło się na nią powołać.

**P4. Teksty wyświetlane.** Ustaw `title`, `shortTitle`, `labelBeforeAnswer` (neutralne) i `labelAfterAnswer` (nazwa zakresu). Sprawdź regułę 10.

**P5. Lekcje.** Dla każdego zakresu napisz notę (`kind: note`) z `scope` i `rules`. Gdy zakres wymaga podstawy, dodaj `kind: prerequisite` z `prerequisiteCondition` i `skippable: true`.

**P6. Przykłady i porównania.** Dodaj tam, gdzie pomagają rozróżnieniu. Porównanie łączy co najmniej dwa sensy wspólną osią.

**P7. Pytania.** Dla każdego zakresu zalecany zestaw (wzorzec T21):

| Rola | Format w T21 | Cel |
|---|---|---|
| `base` (B) | A | pierwsza samodzielna próba |
| `follow-up-1` (F) | K | kontrola po korekcie, istotnie inny przypadek |
| `follow-up-2` (G) | P | druga kontrola po innym wyjaśnieniu |
| `delayed-candidate` (D) | A | późniejsza kontrola po przerwie |

B, F, G i D tego zakresu należą do jednej rodziny (`family`). Inny format jest dozwolony, jeśli spełnia reguły z §5.2.

**P8. Korekty.** Dla każdego zakresu z pytaniem bazowym napisz korektę z `scope` równym zakresowi pytania i `followUps: [F, G]` w tej kolejności. Bez korekty błąd w pytaniu bazowym nie uruchomi pomocy, a lint zgłosi ostrzeżenie.

**P9. Aktywności otwarte.** Opcjonalnie: polecenie odtworzenia z pamięci i rubryka.

**P10. Powiązania.** Zapisz semantykę w `relations.yaml` (§4.8). Powiązania strukturalne zostają w plikach obiektów.

**P11. Formy testu.** Opcjonalnie `forms.yaml`. Forma działa dopiero po decyzji osoby upoważnionej.

**P12. Samokontrola i przekazanie.** Wykonaj §7 i napisz `README.md` według §8.

---

## 4. Referencja pól

Pełne opisy są w docs/13 §4. Tu jest minimum potrzebne do pisania.

### 4.1 `topic.yaml`

```yaml
format: cpre-authoring/1.0
id: T22
revision: r1
title: T22 — <pełny tytuł>                 # panel „Zakres materiału”
shortTitle: <krótki tytuł>                 # nad pytaniem, przy celach
language: pl
authoring: draft                           # draft | complete; nigdy approved
educationProfile: { syllabusVersion: 3.3.0, glossaryVersion: 2.2.0, regulationsVersion: 5.6.2 }
order: [KRY-T22-01]                        # kolejność kryteriów na liście celów
limitations:
  - <czego temat świadomie nie obejmuje>
provenance:                                # dokumenty, z których powstał temat (ścieżki w repozytorium)
  - { path: references/content/<plik>.md, documentVersion: v0.1, storedFileVersion: "1" }
criteria:
  - id: KRY-T22-01
    revision: r1
    description: <cel uczenia się: Rozpoznaje …>
    labelBeforeAnswer: <neutralna etykieta bez nazwy zakresu>
    eo: [{ id: EO3.8.1, level: L1 }]
    aspects:
      - { id: ZAK-T22-01, labelAfterAnswer: <nazwa zakresu> }
families:
  - { id: FAM-T22-01, revision: r1, description: <wspólny rdzeń B/F/G/D i powód grupowania> }
```

`provenance` **MOŻE** zostać puste, gdy temat nie powstał z dokumentu w repozytorium. Ścieżka musi istnieć, bo konwerter liczy jej SHA-256.

### 4.2 `sources.yaml` i `rules.yaml`

```yaml
sources:
  - id: SRC-T22-SEN
    title: CPRE Foundation Level Syllabus EN 3.3.0
    version: 3.3.0
    url: https://…                          # wymagany URI: https://… albo urn:isbn:…; bez spacji
    location: "§3.8 s.29–30"
    attribution: <autorzy, wydawca, tytuł, data>
    usageNote: <ograniczenia użycia>
```

```yaml
rules:
  - id: REG-T22-01
    revision: r1
    statement: <jedno zdanie reguły>
    sources:
      - { source: SRC-T22-SEN, location: "§3.8 s.29" }
```

### 4.3 `questions/<ID>.yaml`

```yaml
id: T22-B01
revision: r1
format: A                  # A | P | K
role: base                 # base | follow-up-1 | follow-up-2 | delayed-candidate | practice
weight: 1                  # 1 | 2 | 3
scope: { criterion: KRY-T22-01, aspect: ZAK-T22-01 }
family: FAM-T22-01
stem: |
  <pełne przesłanki i pytanie>
options:
  - id: a
    text: <opcja>
    correct: false          # A i P: correct; K: truth (true = Prawda)
    rationale: |
      <lokalna przesłanka → reguła → wynik dla tej opcji>
    rules: [REG-T22-01, REG-T22-02]   # pierwsza reguła wybiera lekcję pod uzasadnieniem
```

Pola opcjonalne: `k` (tylko P), `secondaryScopes`, `sourceAnchor`, `options[].scopes`, `options[].sourceAnchor`, `options[].see`.

Agent **NIE** pisze instrukcji formatu („Wybierz jedną odpowiedź.”), identyfikatorów uzasadnień, liczby wierszy `m` ani mapowań kryteriów. Wylicza je konwerter.

### 4.4 `lessons/<ID>.md`

```markdown
---
id: N-T22-01
revision: r1
kind: note                 # note | prerequisite
title: <tytuł lekcji>
scope:
  - { criterion: KRY-T22-01, aspect: ZAK-T22-01 }
rules: [REG-T22-01]
---

<treść lekcji>
```

`prerequisite` wymaga dodatkowo `prerequisiteCondition` i **POWINNO** mieć `skippable: true`.

### 4.5 `examples/<ID>.md`

Nagłówek jak w lekcji, z `kind`: `example`, `counterexample`, `worked-example` albo `comparison`.

### 4.6 `corrections/<ID>.md`

```markdown
---
id: REM-T22-01
revision: r1
scope: { criterion: KRY-T22-01, aspect: ZAK-T22-01 }
followUps: [T22-F01, T22-G01]     # najpierw follow-up-1, potem follow-up-2; ten sam zakres
see: [N-T22-01]                   # opcjonalnie
---

<korekta jednego rozróżnienia, inna niż pierwotne uzasadnienie>

## Inna pomoc

<inne wyjaśnienie pokazywane po nieudanej pierwszej kontroli>
```

### 4.7 `open/<ID>.md`

```markdown
---
id: T22-O01
revision: r1
scope:
  - { criterion: KRY-T22-01 }
evaluation: self-assessment       # self-assessment | designated-reviewer
---

## Polecenie

<polecenie odtworzenia z pamięci>

## Rubryka

- <element konieczny>
- <odpowiedź równoważna, błąd krytyczny, przypadek graniczny>
```

### 4.8 `relations.yaml`

| `type` | Kod | `from` | `to` | `condition` |
|---|---|---|---|---|
| `explains` | R10 | lekcja, przykład | reguła | opcjonalny |
| `distinguishes` | R11 | porównanie | reguła | opcjonalny |
| `illustrates` | R12 | example, worked-example | reguła | opcjonalny |
| `counterexample-of` | R13 | counterexample | reguła | opcjonalny |
| `required-for` | R14 | prerequisite | kryterium, zakres, pytanie | **wymagany** |
| `variant-of` | R21 | pytanie | pytanie | **wymagany** |

```yaml
relations:
  - type: explains
    from: N-T22-01
    to: REG-T22-01
    meaning: <jakie znaczenie lub granicę reguły rozwija nota>
```

Powiązania zapisane w plikach obiektów tworzą relacje automatycznie: `scope` pytania (R06), `family` (R20), uzasadnienie opcji (R08), reguły opcji (R09), źródła reguł (R15) i `followUps` korekty (R19). Ich **NIE** powtarza się w `relations.yaml`. Typy spoza tabeli, np. R16 i R17, nie należą do przyrostu.

---

## 5. Standard jakości treści

### 5.1 Punktacja (C02-05, docs/06)

| Format | Dane | Ocena |
|---|---|---|
| A | 4 albo 5 opcji, dokładnie jedna poprawna | `w` za pojedynczy wybór klucza; pusty, błędny lub nadmiarowy wybór daje 0 |
| P | jawne `k ≥ 2`, `k` mniejsze od liczby opcji, dokładnie `k` poprawnych | przy `n ≤ k` daje `w×c/k`; przy `n > k` daje 0 za całe pytanie |
| K | `m` wierszy, każdy z `truth` | `w×c/m`; błędny, pusty albo podwójny wiersz daje 0 tylko za ten wiersz |

Waga `w` należy do {1, 2, 3}. Agent dobiera wagę do liczby rozstrzygnięć, a nie do trudności odczuwanej przez siebie.

### 5.2 Wymagania na typ materiału (C02-04)

| Typ | Minimum | Typowa wada do uniknięcia |
|---|---|---|
| Nota (`note`) | rdzeń, warunek, przykład, odsyłacz | skrót usuwający warunek |
| Wprowadzenie (pierwsza nota zakresu) | krótki cel, zakres, możliwość próby, bez obietnicy całego EO | tytuł zdradzający klucz |
| Podstawa (`prerequisite`) | argument konieczności, sygnał braku, możliwość pominięcia | wymuszanie całego innego tematu |
| Porównanie (`comparison`) | uczestnicy, wspólna oś, rozstrzygająca różnica, oba przypadki | dwie definicje bez osi |
| Przykład i kontrprzykład | jawne przesłanki i reguła; kontrprzykład wskazuje obalane uogólnienie | dowolny drugi przykład nazwany kontrprzykładem |
| Scenariusz (`worked-example`) | perspektywa, dane, uzasadnione kroki, wynik i granice | traktowanie oglądania rozwiązania jak samodzielnego wykonania |
| Pytanie A/P/K | wszystkie decyzje, klucz, scoring, pełne przesłanki w treści | klucz z intuicji autora |
| Uzasadnienie opcji | lokalna przesłanka, reguła, wynik; prawdziwość tezy oddzielona od polecenia | „błędne, bo inne jest poprawne” |
| Korekta | jedno celowane rozróżnienie, pewna reguła, kontrole F i G | powtórzenie pierwotnego uzasadnienia |
| Kontrola F i G | to samo kryterium, istotnie zmieniony przypadek, pełna ocena | ta sama treść innymi słowami |
| Kandydat D | pełny klucz, rodzina, rola późniejszej kontroli | przeciek: D widoczny w zwykłym materiale |
| Aktywność otwarta | elementy konieczne, odpowiedzi równoważne, błędy krytyczne i graniczne, źródła, oceniający | punkty CPRE za samoocenę |

### 5.3 Uzasadnienia

- Każda opcja i każdy wiersz K **MUSI** mieć własne uzasadnienie, także opcja poprawna i poprawna pominięta w P. Brak jednego blokuje całe pytanie.
- Uzasadnienie **MUSI** mieć postać: przesłanka z treści pytania, potem reguła, potem wynik dla tej opcji.
- Wspólna reguła jest dozwolona, ale każde uzasadnienie ma własną przesłankę i zastosowanie.
- Pierwsza reguła w `options[].rules` decyduje, którą lekcję aplikacja pokaże pod uzasadnieniem. Jest to pierwsza nota (według nazwy pliku) z tą regułą w `rules`. Gdy żadna nota jej nie ma, aplikacja bierze pierwszy inny materiał z tą regułą. Gdy i takiego nie ma, pokazuje samą regułę.

---

## 6. Zmiany istniejącego tematu

1. Agent **NIE** zmienia identyfikatorów.
2. Poprawka treści obiektu wymaga nowej `revision` tego obiektu i nowej `revision` w `topic.yaml`.
3. Nowa rewizja pytania w formie testu wymaga nowej rewizji formy.
4. Usunięcie obiektu nie wycofuje go z urządzeń. Wycofanie lub spór o klucz zapisuje osoba upoważniona w `review/withdrawals.yaml`, nie agent. Agent opisuje potrzebę wycofania w `README.md`.
5. Każda nowa rewizja tematu wymaga nowej decyzji osoby upoważnionej, zanim trafi do uczniów.

---

## 7. Samokontrola przed przekazaniem

### 7.1 Gdy agent ma dostęp do repozytorium

```bash
npm run content:lint -- content/authoring/<ID>
```

Wynik **MUSI** mieć 0 błędów. Dozwolone ostrzeżenie to brak decyzji, bo decyzję pisze osoba upoważniona. Każde inne ostrzeżenie agent wyjaśnia w `README.md`.

### 7.2 Lista kontrolna, także bez dostępu do repozytorium

Struktura:

- [ ] nazwa katalogu = `id` tematu; nazwa każdego pliku obiektu = jego `id`
- [ ] istnieją `topic.yaml`, `sources.yaml`, `rules.yaml`
- [ ] każde odwołanie (`scope`, `family`, `rules`, `source`, `followUps`, `see`, `from`, `to`) wskazuje istniejący obiekt właściwego rodzaju
- [ ] zakres w `scope.aspect` należy do kryterium z `scope.criterion`
- [ ] brak `review/decisions.yaml` i `review/withdrawals.yaml`

Pytania:

- [ ] A: 4 albo 5 opcji, dokładnie jedna `correct: true`
- [ ] P: `k ≥ 2`, `k` < liczba opcji, dokładnie `k` opcji `correct: true`
- [ ] K: każdy wiersz ma `truth`, żaden nie ma `correct`
- [ ] każda opcja ma `rationale` i co najmniej jedną regułę
- [ ] treść pytania nie zawiera nazwy zakresu ani innej wskazówki klucza

Korekty:

- [ ] każde pytanie bazowe ma korektę swojego zakresu
- [ ] `followUps` mają role `follow-up-1`, potem `follow-up-2`, i ten sam zakres co korekta
- [ ] sekcja `## Inna pomoc` istnieje i nie jest pusta

Teksty:

- [ ] `labelBeforeAnswer` nie zawiera `labelAfterAnswer` swojego kryterium
- [ ] brak HTML, obrazów i znaków `<…>`; linki tylko `https://`
- [ ] każde `url` źródła to prawdziwy `https://…` albo `urn:…`, bez spacji i bez `example.org`
- [ ] wartości z `: ` w cudzysłowie albo w bloku `|`

Merytoryka:

- [ ] każda reguła ma źródło z wersją i lokalizacją; nic nie zostało wymyślone
- [ ] każde uzasadnienie ma przesłankę, regułę i wynik
- [ ] F i G istotnie różnią się od B; D nie jest kopią B
- [ ] terminologia zgodna z C02-02

### 7.3 Najczęstsze komunikaty lintu

| Komunikat (fragment) | Przyczyna | Naprawa |
|---|---|---|
| `Nieznany identyfikator …` | literówka albo brak obiektu | popraw id albo dodaj obiekt |
| `… to nota, a oczekiwano: porównanie` | zły rodzaj końca relacji | zmień `type` albo koniec relacji |
| `Pytanie A musi mieć 4 albo 5 opcji` | za mało lub za dużo opcji | dodaj albo usuń dystraktor |
| `Pytanie P ma k=…, ale … opcji z correct: true` | niezgodny klucz | popraw `k` albo `correct` |
| `… ma rolę …, a na tej pozycji wymagana jest follow-up-1` | zła kolejność `followUps` | najpierw F, potem G |
| `Aplikacja pokaże dziś …` | `see` niezgodne z pierwszą regułą | zmień kolejność `rules` albo usuń `see` |
| `zawiera nazwę zakresu` | przeciek w `labelBeforeAnswer` | przeformułuj etykietę neutralnie |
| `znacznik HTML albo niewypełniony wzór` | `<…>` w tekście | usuń znaczniki i dokończ wzór |
| `Nested mappings are not allowed` | `: ` w wartości bez cudzysłowu | ujmij wartość w cudzysłów albo w blok `|` |
| `/url: must match format "uri"` albo `must match pattern` | pusty adres, spacja albo `<…>` w adresie | podaj poprawny `https://…` albo `urn:…`; spację koduj jako `%20` |
| `Adres źródła to przykład ze wzoru` | zostawiony `example.org` | podaj prawdziwy adres |
| `Nazwa pliku … różni się od identyfikatora` | niezgodna nazwa pliku | zmień nazwę pliku |
| `Brak korekty dla zakresu …` (ostrzeżenie) | pytanie bazowe bez korekty | dodaj korektę albo uzasadnij w README |

---

## 8. Przekazanie: `README.md` tematu

Agent kończy pracę plikiem `<ID>/README.md` o tej strukturze. Konwerter go pomija, czyta go człowiek i recenzent.

```markdown
# <ID> r<n> — notatka autora

## Zakres
Kryteria, zakresy i EO; czego temat świadomie nie obejmuje.

## Źródła użyte
Lista SRC z wersjami i lokalizacjami.

## Inwentarz
| Obiekt | Liczba |
|---|---|
| Pytania A / P / K | … |
| Uzasadnienia | … |
| Noty / podstawy / przykłady / porównania / scenariusze | … |
| Korekty / aktywności otwarte / relacje | … |

## Wynik samokontroli
`content:lint`: błędy 0, ostrzeżenia … (wyjaśnienie każdego) albo lista kontrolna §7.2 z wynikiem.

## Luki i pytania do recenzenta
Brakujące lokalizacje źródeł, niepewne klucze, sporne interpretacje, proponowane wycofania.

## Zmiany względem poprzedniej rewizji
Tylko przy poprawce: obiekty z nową rewizją i powód.
```

Agent **NIE WOLNO** pisać w `README.md`, że treść jest zrecenzowana, zatwierdzona ani gotowa dla uczniów.
