# 13 — Format autorski treści `cpre-authoring/1.0`

Instrukcja operacyjna dla agenta AI: `docs/14_AI_AUTHORING_AGENT_GUIDE.md`. Procedura wprowadzania treści do aplikacji: `docs/15_MIGRACJA_TRESCI.md`.

Status: **etapy 1 i 2 z 4 wykonane** (§10). Format, schematy, szablony, przykład oraz komendy `content:lint` i `content:convert` istnieją i przechodzą testy. Etap 3 czeka na decyzję właściciela.

## 1. Cel i granice

Format pozwala wytwarzać treść tematu poza aplikacją, w plikach YAML i Markdown, a potem zasilić nią aplikację powtarzalną komendą. Obejmuje zadania A/P/K, aktywności otwarte, lekcje, przykłady, korekty, reguły, źródła, rodziny, formy testu i typowane powiązania.

Granice wynikają z CLAUDE.md i docs/05:

- **Bez CMS.** Format to pliki, schematy i komendy. Nie powstaje edytor treści.
- **Statusy są osobnymi osiami.** Autor oznacza tylko kompletność (`authoring`). Recenzję, prawa, publikację i dopuszczone użycia zapisuje wyłącznie wskazana osoba w `review/decisions.yaml` (§7). Agent programujący nigdy nie tworzy tego pliku.
- **Konwerter nie dopowiada treści.** Brakujący klucz, uzasadnienie, reguła lub powiązanie to błąd albo jawny brak, nigdy wartość wymyślona.
- **Stały tekst projektu pozostaje poza formatem.** Nagłówki ekranów, przyciski i teksty pomocnicze Skupionej sesji są wspólne dla wszystkich tematów. Ich zmiana wymaga osobnej propozycji projektowej (§6).

## 2. Struktura katalogu

Każdy temat to jeden katalog `content/authoring/<ID tematu>/`. Katalogi zaczynające się od `_` (np. `_templates`) nie są tematami i konwerter je pomija.

```text
content/authoring/T22/
├── topic.yaml            tożsamość, teksty wyświetlane, kryteria, zakresy, rodziny
├── sources.yaml          źródła
├── rules.yaml            reguły rozstrzygające
├── relations.yaml        typowane powiązania między obiektami (opcjonalny)
├── forms.yaml            propozycje form testu (opcjonalny)
├── questions/<ID>.yaml   jedno zadanie A, P albo K na plik
├── lessons/<ID>.md       nota albo potrzebna podstawa
├── examples/<ID>.md      przykład, kontrprzykład, scenariusz albo porównanie
├── corrections/<ID>.md   korekta z kontrolami F i G
├── open/<ID>.md          aktywność otwarta z rubryką
├── review/decisions.yaml decyzje recenzji (pisze tylko upoważniona osoba)
└── review/withdrawals.yaml wycofania i spory o klucz (pisze tylko upoważniona osoba)
```

Pliki `.md` mają nagłówek YAML między liniami `---`, a pod nim treść w Markdown. Pliki `.yaml` z pierwszą linią `# yaml-language-server: $schema=…` są sprawdzane w VS Code na bieżąco przez rozszerzenie YAML. Nagłówki `.md` sprawdza komenda `content:lint`.

Konwerter czyta pliki w kolejności alfabetycznej nazw. Ta kolejność trafia do paczki i ma znaczenie: decyduje na przykład, która nota zakresu jest jego wprowadzeniem i które pytanie bazowe zakresu pojawi się pierwsze.

Wzory do skopiowania: `content/authoring/_templates/`. Pełny działający przykład: `examples/authoring/T21-mini/` (§11).

## 3. Zasady wspólne

- **Kodowanie.** UTF-8, końce linii LF. Repozytorium wymusza LF przez `.gitattributes`.
- **Identyfikatory.** Wzorzec `^[A-Za-z0-9][A-Za-z0-9._:-]*$`, unikalne we wszystkich tematach. Konwencja: `<temat>-B01` dla pytań, `N-<temat>-01` dla not, `REG-<temat>-01` dla reguł, `KRY-<temat>-01` dla kryteriów, `ZAK-<temat>-01` dla zakresów. Nazwa pliku to identyfikator obiektu.
- **Rewizje.** Każdy obiekt ma `revision` (`r1`, `r2`, …). Po publikacji treść danej rewizji jest niezmienna. Każda zmiana treści opublikowanej rewizji wymaga nowej rewizji. Konwerter porównuje z poprzednią paczką i odrzuca zmianę bez nowej rewizji. Rozpoczęte próby uczniów zostają przy swojej rewizji.
- **Markdown.** Bezpieczny podzbiór: akapity, listy, wyróżnienia, proste tabele, linki `http(s)`. Surowy HTML i skrypty są odrzucane. Obrazy nie są obsługiwane.
- **Pułapka YAML.** Tekst zawierający dwukropek ze spacją (`: `), `#` poprzedzony spacją albo zaczynający się od `[`, `{`, `*`, `&`, `!`, `|`, `>`, `'`, `"`, `%` musi być w cudzysłowie albo w bloku `|`. Dłuższe teksty zawsze pisz w bloku `|`.
- **Gdzie zapisać powiązanie.** Wszystko, co należy do jednego obiektu, piszesz w jego pliku: zakres pytania, rodzinę, klucz, uzasadnienie i reguły opcji, reguły lekcji, kontrole korekty. Plik `relations.yaml` łączy dwa samodzielne obiekty i opisuje znaczenie tego połączenia.

## 4. Pliki i pola

Kolumna „Widać” mówi, gdzie uczeń widzi pole. Kolumna „Kontrakt” wskazuje pole paczki `content-package` (schemas/content-package.schema.json). Oznaczenie **E3** znaczy, że aplikacja zacznie używać pola po etapie 3 (§9).

### 4.1 `topic.yaml`

| Pole | Wym. | Znaczenie | Widać | Kontrakt |
|---|---|---|---|---|
| `format` | tak | Zawsze `cpre-authoring/1.0` | nie | — |
| `id`, `revision` | tak | Temat i rewizja paczki | nie | `packageId`, `revision` |
| `purpose` | nie | `content` (domyślnie) albo `review-fixture`, który nigdy nie trafia do ucznia | nie | `purpose` |
| `title` | tak | Pełny tytuł | panel „Zakres materiału” | `title` |
| `shortTitle` | tak | Krótki tytuł | nad pytaniem, przy celach (**E3**; dziś tytuł ucięty na nawiasie) | nowe pole |
| `authoring` | tak | `draft` albo `complete`, Twoja ocena kompletności | nie | `status.authoring` |
| `educationProfile` | tak | Wersje sylabusa, słownika i regulaminu | nie | `educationProfile` |
| `order` | nie | Kolejność kryteriów na liście celów (**E3**; dziś kolejność w paczce) | lista celów | nowe pole |
| `limitations` | nie | Czego temat świadomie nie obejmuje | raport importu | `limitations` |
| `provenance` | nie | Dokumenty źródłowe; SHA-256 liczy konwerter | nie | `provenance` |
| `criteria[].description` | tak | Cel uczenia się | przed odpowiedzią, dopóki brak `labelBeforeAnswer` | `criteria[].description` |
| `criteria[].labelBeforeAnswer` | nie | Neutralna etykieta bez nazwy zakresu (**E3**) | sesja, lista celów | nowe pole |
| `criteria[].eo` | nie | Oficjalne EO i poziom | nie | `criteria[].eoRefs` |
| `criteria[].aspects[].labelAfterAnswer` | tak | Nazwa zakresu | dopiero po odpowiedzi | `aspects[].label` |
| `families[]` | nie | Rodziny pytań z opisem rdzenia | nie | `families[]` (review z decyzji) |

### 4.2 `sources.yaml` i `rules.yaml`

Źródło: `id`, `title`, `version`, `url`, `location`, `attribution`, `usageNote`. Pole `url` jest wymagane przez kontrakt jako poprawny URI: adres `http(s)://` albo identyfikator `urn:`, np. `urn:isbn:…`, bez spacji (spacja jako `%20`). Pusty adres i przykładowy `example.org` ze wzoru są błędem. Okno wiedzy pokazuje tytuł i lokalizację. `usageNote` opisuje ograniczenia i nie jest zgodą na publikację.

Reguła: `id`, `revision`, `statement` (widoczne w oknie wiedzy) oraz `sources[]` z parami `source` i `location`. Każda reguła musi mieć co najmniej jedno źródło (R15).

### 4.3 `questions/<ID>.yaml`

| Pole | Wym. | Znaczenie | Widać |
|---|---|---|---|
| `format` | tak | `A`, `P` albo `K` | etykieta formatu |
| `role` | tak | `base` (B), `follow-up-1` (F), `follow-up-2` (G), `delayed-candidate` (D), `practice` | nie |
| `weight` | tak | Maksymalnie 1, 2 albo 3 punkty | wynik |
| `k` | tylko P | Liczba poprawnych opcji | instrukcja „Wybierz k odpowiedzi” |
| `scope` | tak | Mierzony zakres (R06); decyduje o korekcie po błędzie | nie |
| `secondaryScopes` | nie | Zakresy dodatkowe z rolą `secondary` albo `helper` | nie |
| `family` | tak | Rodzina z `topic.yaml` (R20) | nie |
| `stem` | tak | Treść pytania | przed odpowiedzią i w teście |
| `options[].id` | tak | Litera dla A i P, numer wiersza dla K | nie |
| `options[].text` | tak | Treść opcji albo wiersza | przed odpowiedzią |
| `options[].correct` | A, P | Czy opcja należy do klucza | po odpowiedzi |
| `options[].truth` | K | Poprawna ocena wiersza | po odpowiedzi |
| `options[].rationale` | tak | Uzasadnienie tej decyzji (R08) | po odpowiedzi |
| `options[].rules` | tak | Reguły rozstrzygające (R09); pierwsza wybiera lekcję pod uzasadnieniem | link „Zobacz: …” |
| `options[].see` | nie | Jawnie wskazana lekcja albo przykład (**E3**) | link „Zobacz: …” |
| `options[].scopes` | nie | Zakresy kontaktu uzasadnienia; domyślnie zakres pytania | nie |
| `sourceAnchor` | nie | Miejsce w źródle; domyślnie ścieżka pliku | nie |

Reguły formatów, sprawdzane przez schemat i konwerter:

- **A.** 4 albo 5 opcji, dokładnie jedna z `correct: true`, bez `k` (C02-05, docs/06).
- **P.** Pole `k` wymagane, co najmniej 2 i mniejsze od liczby opcji. Liczba opcji z `correct: true` równa `k`. Nadmiar zaznaczeń daje 0 punktów za całe pytanie.
- **K.** Każdy wiersz ma `truth`, bez `correct` i bez `k`. Liczbę wierszy `m` liczy konwerter. Poprawny wiersz daje `weight/m`, a pusty wiersz nigdy nie jest liczony jako Fałsz.
- **Każda opcja ma uzasadnienie**, także poprawna i pominięta. Brak uzasadnienia blokuje całe pytanie.

Instrukcji formatu nie piszesz. Aplikacja wylicza ją z `format` i `k`, żeby instrukcja zawsze zgadzała się z punktacją.

### 4.4 `lessons/<ID>.md` i `examples/<ID>.md`

Nagłówek: `id`, `revision`, `kind`, `title`, `scope` (lista zakresów), `rules`, opcjonalnie `sourceAnchor`. Treść pod nagłówkiem to tekst lekcji.

- **Lekcja** ma `kind: note` albo `prerequisite`. Podstawa wymaga `prerequisiteCondition` i może mieć `skippable`.
- **Przykład** ma `kind: example`, `counterexample`, `worked-example` albo `comparison`.
- **Tytuł** widać jako nagłówek lekcji, pozycję listy „Zacznij od wprowadzenia”, link pod uzasadnieniem i przycisk „Porównaj: …”.
- **Pierwsza nota zakresu**, według nazwy pliku, staje się jego wprowadzeniem.
- **Pole `rules`** decyduje dziś o połączeniach w aplikacji. Uzasadnienie opcji prowadzi do noty z jego pierwszą regułą. Okno wiedzy podsuwa porównania i noty o wspólnej regule oraz podstawy o wspólnym zakresie.

### 4.5 `corrections/<ID>.md`

Nagłówek: `id`, `revision`, `scope` (jeden korygowany zakres, R18), `followUps` (najpierw F, potem G; każda pozycja tworzy R19), opcjonalnie `see`. Treść przed `## Inna pomoc` to korekta. Sekcja `## Inna pomoc` jest wymagana i pojawia się po nieudanej pierwszej kontroli. Po dwóch nieudanych kontrolach aplikacja zmienia sposób wsparcia i nie uruchamia trzeciej.

### 4.6 `open/<ID>.md`

Nagłówek: `id`, `revision`, `scope`, `evaluation` (`self-assessment` albo `designated-reviewer`). Treść ma dwie wymagane sekcje: `## Polecenie` i `## Rubryka`. Samoocena nie daje punktów CPRE.

### 4.7 `forms.yaml`

Forma testu: `id`, `revision`, `title` (widoczny na ekranie warunków), `scopes`, `items` (kolejność pytań), `dictionaryAllowed`. Forma działa dopiero po decyzji w `review/decisions.yaml`. Test nie ma limitu czasu.

## 5. Powiązania w `relations.yaml`

Każdy wpis ma `type`, `from`, `to` i `meaning`. Opcjonalnie ma `id`, `revision`, `condition` i `provenance`. Domyślne `id` to `REL-<from>-<typ>-<to>`. Domyślne `provenance` to „Interpretacja autora”. Status review relacji pochodzi wyłącznie z decyzji.

| Typ | Kod | Od | Do | Domyślny warunek |
|---|---|---|---|---|
| `explains` | R10 | lekcja, przykład | reguła | Ujawnienie dopuszczone przez granicę feedbacku |
| `distinguishes` | R11 | porównanie | reguła | Ujawnienie dopuszczone przez granicę feedbacku |
| `illustrates` | R12 | przykład, scenariusz | reguła | Ujawnienie dopuszczone przez granicę feedbacku |
| `counterexample-of` | R13 | kontrprzykład | reguła | Ujawnienie dopuszczone przez granicę feedbacku |
| `required-for` | R14 | podstawa | kryterium, zakres, pytanie | wymagany jawnie |
| `variant-of` | R21 | pytanie | pytanie | wymagany jawnie |

Powiązania zapisane w plikach obiektów tworzą relacje automatycznie:

| Zapis | Kod | Skutek w aplikacji |
|---|---|---|
| `scope` pytania | R06 | Korekta i kontrole po błędzie, dowody zakresu |
| `family` pytania | R20 | Ocena nowości i znajomości pytania |
| `options[].rationale` | R08 | Uzasadnienie po odpowiedzi |
| `options[].rules` | R09 | Link do noty pod uzasadnieniem |
| `rules[].sources` | R15 | Źródła w oknie wiedzy |
| `followUps` korekty | R19 | Kontrole F i G po korekcie |

Typy spoza tabel, np. R16 i R17 dla diagnozy błędnych przekonań, nie należą do przyrostu. Konwerter je odrzuca.

## 6. Co możesz zmienić na ekranie

| Ekran | Z Twoich plików | Stały tekst projektu |
|---|---|---|
| Sesja | etykieta kryterium, tytuł tematu w panelu | „Jeden cel. Jeden kolejny krok.”, przyciski |
| Wybór celu | etykieta kryterium, krótki tytuł, tytuły lekcji, kolejność | „Czego chcesz spróbować?”, „Zacznij od pytania” |
| Lekcja | tytuł, treść | „Nauka · krótkie wprowadzenie”, panel boczny |
| Pytanie | krótki tytuł, treść, opcje | „Twoja odpowiedź.”, instrukcja formatu, przyciski |
| Po odpowiedzi | nazwa zakresu, uzasadnienia, tytuł linkowanej lekcji | „Wynik tej odpowiedzi”, punkty liczone przez aplikację |
| Okno wiedzy | tytuł, treść, reguła, źródło, „Porównaj: …” | „Wstecz”, etykieta rodzaju materiału |
| Korekta | treść, inna pomoc | nagłówki etapów korekty |
| Test | tytuł formy, treść, opcje | ekrany warunków, przeglądu i wyniku |

Opis tematu na ekranie sesji nie istnieje w zaakceptowanym projekcie. Dodanie go to zmiana projektu, wymagająca osobnej propozycji.

## 7. Statusy i dopuszczenie

Bez decyzji dla bieżącej rewizji paczka ma `review: pending`, `publication: review-only`, `allowedUses: []` i prawa `unresolved` bez żadnego kanału. Taka paczka nie trafia do żadnego kanału, także recenzenckiego, bo kanał recenzencki wymaga praw obejmujących `internal-review`. Konwerter nie domniemywa praw.

Żeby recenzenci zobaczyli temat w buildzie recenzenckim, upoważniona osoba zapisuje decyzję z `review: pending`, `publication: review-only` i prawami `review-only` dla kanału `internal-review`.

Plik decyzji pisze osoba upoważniona do recenzji, praw i dopuszczenia. Każda decyzja ma `id`, `decidedAt`, `decidedBy`, `ref` (gdzie jest zapis recenzji), `revision` paczki, `review`, `publication`, `allowedUses` i `rights`. Może też zatwierdzać rodziny, relacje, ocenę nowości pytań i formy testu. Obowiązuje ostatnia decyzja dla danej rewizji. Decyzja dla innej rewizji niczego nie dopuszcza.

Kanał ucznia przyjmuje paczkę tylko po spełnieniu wszystkich warunków bramki z `src/content/validate.ts`:

- `purpose` inne niż `review-fixture` i `authoring: complete`;
- `review: approved` i `publication: permitted`, z odwołaniem do decyzji;
- niepuste `allowedUses`, obejmujące użycia wymagane przez wydanie;
- prawa `permitted`, z kanałem publikacji wydania, np. `internal-lan`, i odwołaniem do decyzji.

### Wycofania i spory o klucz

Wycofanie zapisuje upoważniona osoba w `review/withdrawals.yaml`. Każdy wpis ma `id` decyzji (unikalne we wszystkich tematach, np. `WD-T22-0001`), `question`, `revision`, `status` (`withdrawn` albo `key-disputed`), `reasonCode`, `decidedAt` (data), `decidedBy` i `ref`.

- **Dotyczy tylko pytań.** Aplikacja stosuje wycofania wyłącznie do pytań.
- **Skutek u ucznia.** Nowe użycia tej rewizji są zablokowane. Aktywny test z nią zostaje neutralnie wstrzymany, bez ujawniania klucza. Odpowiedzi zostają w historii, ale nie służą jako dowód.
- **Lista jest kumulatywna i niezmienna.** Urządzenia zachowują każde otrzymane wycofanie, więc usunięcie albo zmiana wpisu niczego by nie cofnęły. Lint zgłasza je jako błąd. Poprawione pytanie publikuje się jako nową rewizję.
- **Droga do manifestu.** `content:convert` zapisuje wpisy do `content/withdrawals/<ID>.json`. Wydanie dołącza wszystkie pliki z tego katalogu do manifestu w obu kanałach.

Wycofanie rewizji, której nie ma już w temacie, jest dozwolone i daje ostrzeżenie.

## 8. Konwersja i kontrole

Konwerter wylicza pola, których autor nie pisze:

| Pole kontraktu | Skąd |
|---|---|
| `runtimeCompleteness` | `complete` przy `authoring: complete`, inaczej `partial` |
| `questions[].instruction` | Z `format` i `k`, tym samym tekstem co aplikacja |
| `questions[].m` | Liczba wierszy pytania K |
| `questions[].decisions`, `answerKey` | Z `options[].text`, `correct` albo `truth`; klucz trafia tylko do rozwiązania, nigdy do treści testu |
| `rationales[].id` | `RAT-<ID pytania>-<ID opcji>` |
| `rationales[].sourceAnchor` | `<sourceAnchor pytania>, <ID uzasadnienia>` |
| `criterionMappings` | `scope` jako primary z wszystkimi opcjami, plus `secondaryScopes` |
| `remediations[].followUpRefs` | `followUps` z rewizjami wskazanych pytań |
| `remediations[].exitAfterFailedFollowUps` | Zawsze 2 |
| `relationships[]` | `relations.yaml` z kodem R oraz R19 z `followUps`, o identyfikatorze `REL-<pytanie>-checks-after-<korekta>` |
| `status`, `rights`, `noveltyReview`, review rodzin, relacji i form | Wyłącznie z decyzji dla bieżącej rewizji, inaczej wartości z §7 |
| `provenance[]` | Dokumenty z `topic.yaml` z sumą SHA-256 oraz każdy plik autorski z sumą SHA-256 i wersją `cpre-authoring/1.0` |

### Kontrole

Błąd zatrzymuje konwersję. Ostrzeżenie trafia do raportu i nie blokuje konwersji. Najpierw działa schemat. Gdy schemat zgłasza błędy, kontrole odwołań nie są uruchamiane.

Błędy:

- brak `sources.yaml` lub `rules.yaml`, nazwa pliku inna niż identyfikator, nazwa katalogu inna niż `id` tematu;
- powtórzony identyfikator w temacie albo identyfikator istniejący już w innej paczce `content/normalized`;
- odwołanie do nieistniejącego obiektu albo obiektu złego rodzaju, zakres spoza wskazanego kryterium, relacja łącząca rodzaje spoza §5, `required-for` i `variant-of` bez warunku;
- pytanie A z liczbą opcji inną niż 4 lub 5; pytanie P z `k` mniejszym niż 2, z liczbą poprawnych opcji różną od `k` albo z `k` nie mniejszym od liczby opcji;
- kontrole korekty w złej kolejności ról albo mierzące inny zakres niż korekta;
- `see` opcji wskazujące inny obiekt niż ten, który aplikacja wybierze dziś z pierwszej reguły (do etapu 3);
- `labelBeforeAnswer` zawierające `labelAfterAnswer` swojego kryterium;
- znacznik HTML albo niewypełniony wzór `<…>` w tekście wyświetlanym, link inny niż http(s), przykładowy adres źródła `example.org` ze wzoru;
- brak pliku wskazanego w `provenance`;
- wycofanie obiektu innego niż pytanie, powtórzony identyfikator wycofania, usunięty albo zmieniony wpis już przekonwertowanego wycofania;
- paczka niezgodna ze schematem albo regułami semantycznymi kontraktu (te same kontrole co `content:validate`).

Ostrzeżenia:

- brak decyzji dla bieżącej rewizji albo decyzja dla innej rewizji;
- pytanie bazowe bez korekty swojego zakresu, pytanie kontrolne niewskazane w żadnej korekcie;
- źródło lub reguła, których nic nie używa;
- wycofanie pytania, którego nie ma w bieżącej rewizji tematu.

### Niezmienność rewizji

Konwerter porównuje wynik z poprzednią konwersją tego tematu w `content/normalized`. Pola zależne od decyzji, np. review rodzin i ocena nowości, nie liczą się jako zmiana treści.

- **Poprzednia rewizja kompletna albo z decyzją.** Zmiana treści obiektu bez nowej rewizji jest błędem. Zmiana czegokolwiek przy tej samej rewizji tematu wymaga zwiększenia `revision` w `topic.yaml`. Zmiana rewizji pytania zmienia też formy, które je zawierają, więc forma również potrzebuje nowej rewizji.
- **Poprzednia rewizja była szkicem bez decyzji.** Zmiana bez nowej rewizji jest tylko ostrzeżeniem, więc szkic można poprawiać swobodnie.

### Komendy

```bash
npm run content:lint
```

```bash
npm run content:convert
```

Bez argumentów obie komendy biorą każdy katalog `content/authoring/*` poza nazwami zaczynającymi się od `_` lub `.`. Można też podać katalogi tematów jako argumenty po `--`. Kod wyjścia 0 oznacza brak błędów, 1 błędy, 2 złe użycie. `content:lint` jest częścią `npm run check`.

`content:convert` zapisuje `content/normalized/<id>.<revision>.json`, raport `content/normalized/<id>-AUTHORING_REPORT.md` i, gdy temat ma wycofania, `content/withdrawals/<id>.json`. Raport zawiera statusy, dostępność kanałów, liczby obiektów, błędy, ostrzeżenia i różnice względem poprzedniej konwersji. Poprzednie rewizje tego tematu znikają z `content/normalized`, bo wydanie zabiera wszystkie pliki z tego katalogu. Urządzenia uczniów zachowują przypięte stare rewizje dla rozpoczętych prób.

Konwerter odmawia nadpisania paczki o tym samym `packageId`, która nie powstała z formatu autorskiego, np. importu T21. Świadome zastąpienie wymaga flagi `--replace-import`.

## 9. Pola wymagające zmiany aplikacji (etap 3)

| Pole | Dziś | Po etapie 3 |
|---|---|---|
| `shortTitle` | Tytuł ucięty na pierwszym nawiasie | Wartość pola |
| `order` | Kolejność w paczce | Kolejność z pola |
| `labelBeforeAnswer` | Opis kryterium | Wartość pola, z opisem jako rezerwą |
| `options[].see` | Nota z pierwszą regułą uzasadnienia | Jawnie wskazany obiekt |

Zmiana dodaje opcjonalne pola do kontraktu `content-package` w zgodny wstecz sposób, jako wersję 1.1.0. Starsze paczki działają bez zmian. Nie zmienia wyglądu, pedagogiki ani punktacji.

## 10. Etapy i kryteria odbioru

| Etap | Wynik | Odbiór |
|---|---|---|
| 1. Specyfikacja, wykonany | Ten dokument, schematy `schemas/authoring/`, szablony, przykład T21-mini | `tests/unit/authoring-format.test.ts`: szablony i przykład przechodzą, przypadki negatywne są odrzucane, przykład zgadza się słowo w słowo z T21 |
| 2. Lint i konwerter, wykonany | `npm run content:lint`, `npm run content:convert`, raport | `tests/unit/authoring-convert.test.ts`: T21-mini po konwersji równy odpowiadającym obiektom T21 poza wyliczaną instrukcją; błędy wskazują plik i pole; decyzje, niezmienność rewizji i bramka ucznia sprawdzone |
| 3. Aplikacja | Kontrakt 1.1.0, nowe pola wyświetlania i `see` | Testy e2e i wizualne bez zmian baseline; stara paczka T21 działa |
| 4. Pierwszy temat | Twój temat w `content/authoring/` przechodzi lint, konwersję i trafia do kanału recenzenckiego | Raport bez błędów; decyzja recenzji po Twojej stronie |

## 11. Przykład

`examples/authoring/T21-mini/` to wycinek T21 zapisany w formacie autorskim. Obejmuje pytania B01 (A), F01 (K) i G01 (P) ścieżki adekwatności, notę N-T21-01, podstawę PRE-T21, porównanie CMP-T21-03, scenariusz WS-T21-01, korektę REM-T21-01, pięć reguł, cztery źródła i trzy relacje.

Treść skopiowano programowo z `content/normalized/T21.r1-full1.json`. Test `tests/unit/authoring-format.test.ts` sprawdza, że każde pole przykładu zgadza się ze źródłem. Test `tests/unit/authoring-convert.test.ts` sprawdza, że paczka po konwersji równa się odpowiadającym obiektom T21. Jedyny wyjątek to instrukcja formatu, wyliczana z formatu.

Przykład ma `purpose: review-fixture`, status do review i brak decyzji. Dzieli identyfikatory z T21, więc `content:lint` uruchomiony na nim słusznie zgłasza kolizję z importem T21.
