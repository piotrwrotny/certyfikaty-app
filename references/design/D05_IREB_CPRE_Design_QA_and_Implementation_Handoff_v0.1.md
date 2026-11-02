# D05 — Kontrola projektu i przekazanie do implementacji

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 2 listopada 2026 · Europe/Warsaw  
**Wersja:** v0.1  
**Status:** projekt do oceny właściciela; G2/G3/G4 otwarte. G1 przyjęte według R06.  
**Autor:** Agent D / AI; kontrola autorska, bez badania użytkowników.

## 1. Wynik przeglądu

Pakiet D jest konkretnym materiałem do oceny: zakres 38 FR, ślad 18 UC i 28 FD, flow i stany, dwa rzeczywiste warianty, rozwinięta Skupiona sesja, atlas 25 stanów, desktop/mobile oraz interaktywny prototyp. Właściciel wskazał kierunek Skupionej sesji w rozmowie. **Nie przyjęto całego D ani nie zamknięto G2/G3/G4.**

Kontrolę wykonał autor projektu / AI na dokumentach, makietach i działającym prototypie. Nie była to niezależna recenzja treści C, badanie użytkowników, audyt zgodności WCAG ani walidacja skuteczności uczenia. Browser walkthrough na ilustracjach nie jest odbiorem G3 na rzeczywistym C.

## 2. Wejścia, wersje i rozstrzygnięcie metadanych

| Wejście | Faktyczny zakres wykorzystania / status |
|---|---|
| START | Całość: routing, granice mandatu i bramki. Historia inwentarza nie zastępuje bieżącej listy Sources |
| R06 v0.1 | Całość: decyzja G1, przyjęte B v0.2, K-04, rozdzielenie G2/G3 i warunki G4 |
| R03 v0.1 | Całość jako brief historyczny; stare B v0.1/G1/L-B04 zastąpione R06 i B v0.2 |
| Fundament pedagogiczny | Całość: cele, retrieval, feedback, pomoc, nowość, retencja, integralność |
| Blueprint 1.0 | F01, F03–F12, F14–F16, komplet FR/Acceptance, UC i FD. F13 korzysta z samodzielnego FTC |
| Functional-to-Knowledge Contract 1.0 | F13.1–8 w całości: role, K0–K7, 38 kart, łańcuchy, kompletność i A/P/K |
| B01–B04 v0.2 | Całość: semantyka, traceability, wszystkie przejścia, ilustracje/ograniczenia, B-DEC i K |
| C01–C04 v0.1 | Całość: rejestr, discovery, manifest i QA. Historyczne przygotowanie, nie gotowy korpus; C03 0/3 |
| Deep Research | Nie ponawiano researchu pedagogicznego; do uzasadnienia zachowań wystarczyły kanon i aktualny Blueprint. Nie przypisujemy D nowego przeglądu bibliografii lub norm IREB |
| W3C | Odczyt Quick Reference WCAG 2.2 i wzorca APG modal dialog jako pomoc dla celu dostępności |

Nie wykonano nowego normatywnego audytu egzaminu. Wersje 3.3.0 / 5.6.2 / 2.2.0 są odziedziczonym profilem projektu, a nie samodzielnym potwierdzeniem aktualności przez D. C i wydanie aplikacji ponownie sprawdzają własne użyte źródła.

**Zgodność baseline:** hashe B01–B03 odpowiadają przyjętemu R06; B04 odpowiada administracyjnie zaktualizowanej wersji wskazanej w R06. Szczegółowe hashe wejść są w `D_Source_Manifest.json`. Nie modyfikowano B ani C. Błędy historycznych nagłówków FOR REVIEW nie otwierają ponownie G1. Bieżąca lista obejmuje 19 unikalnych źródeł, w tym dostępne C03/C04 i R06.

## 3. Konkretne problemy wykryte i poprawki

| ID / waga | Wykryty problem | Poprawka i dowód |
|---|---|---|
| D-QA-01 / P1 | Pierwszy obraz koncepcyjny błędnie nazywał limit czasu odtworzenia „ograniczeniem” wyłącznie z powodu liczby | Obrazy ograniczono do eksploracji organizacji. W makietach natywnych użyto znanego B03-P i poprawnego rozróżnienia zachowanie/cecha/narzucone rozwiązanie; pełne rationale 5 opcji. `desktop-P-feedback.png` |
| D-QA-02 / P1 | Stare C i R03 sugerowały nieprzyjęte G1 | Jawne pierwszeństwo R06 i B v0.2; brak uznania historycznego C za gotowe. D01 §1 i manifest wejść |
| D-QA-03 / P2 | Wczesny widok Nauki miał stale widoczny boczny panel warunków, osłabiający wybrany kierunek jednej kolumny | Jedna centralna kolumna Nauki; warunki w rozwinięciu pod pracą. Panel wiedzy otwierany na żądanie. `desktop-P-feedback.png`, `mobile-K-question.png` |
| D-QA-04 / P1 | Początkowa obsługa review testu mogła tworzyć pozór kolejnej próby | Review używa istniejącej pozycji i zamkniętych odpowiedzi, z powrotem do wyniku; bez nowego wyniku za samo otwarcie. D04 §3 i T6 |
| D-QA-05 / P2 | Kliknięcie Sesja podczas testu pierwotnie prowadziło do zbędnej konwersji | Sesja prowadzi do neutralnego wznowienia; dopiero żądanie wiedzy wymaga konwersji. Sprawdzono wznowienie z zachowaną przerwą i odpowiedziami |
| D-QA-06 / P2 | Jeden selektor atlasu prowadził do niewłaściwej sceny dla konwersji | Oddzielna inicjalizacja stanu converted. Kontrola wszystkich 25 stanów potwierdziła nagłówek „Próba przeszła do Nauki.” |
| D-QA-07 / P2 | Wyłączone natywne checkboxy w review były zbyt blade jako jedyny znacznik wcześniejszego zaznaczenia | Dodano tekst „Twój wybór” przy zaznaczonych A/P; K zachowuje tekst „Twoja odpowiedź” lub „Brak odpowiedzi”. Ponowny screenshot i porównanie |
| D-QA-08 / P1 | Ilustracyjne K mogło wyglądać jak nowa rezerwa CPRE | Zachowano 4 wiersze, m/w i 1/2; jawna rola pomocniczego wiersza i całej demonstracji. Forma prototypu nie jest dopuszczonym U-TOPIC/RESERVED/MOCK. D01 §2, T0 i makiety K |

Pozostałe ograniczenia są jawne i nie maskowane jako poprawki: brak realnego C, dopuszczonych rodzin, rzeczywistych uczniów, odroczonych obserwacji i pełnego audytu dostępności. To zależności odbioru, nie dowody wady samego wariantu.

## 4. Wykonana weryfikacja prototypu

| Kontrola | Wynik rzeczywistej kontroli autorskiej | Ograniczenie |
|---|---|---|
| Punkty | 13 wektorów z F11/B01: poprawne/błędne/puste/nadmiarowe A/P, partial P, blank i podwójny K, zmienne m/w i ułamki — PASS | Nie jest to review kluczy nowych pytań C |
| P częściowe | b,c daje 1/2, c i pominięta d mają rationale; inne rationale są dostępne | Dane ilustracyjne |
| Powrót z wiedzy | Opcja 3 → comparison → podstawa → powrót zachowuje b,c, 1/2 i fokus na tej opcji — PASS | Nie testowano wszystkich kombinacji ścieżek i awarii historii |
| Follow-up P | Trzy klasyfikacje → wynik 3/3 i osobna samoocena uzasadnienia → powrót do pierwotnego 1/2 — PASS | Brak niezależnie zrecenzowanej nowej rodziny, brak retencji |
| Widoczność Sprawdzenia | W aktywnym DOM 0 rationale, 0 linków wiedzy i brak zdobytego wyniku — PASS | To sprawdzenie UI; źródło statycznego pliku zawiera syntetyczne klucze |
| Nadmiar P / blank K w teście | Brak limitera zaznaczeń, przegląd podaje 1 nadmiar i 1 brak; można zakończyć — PASS | Dalsze warianty na C pozostają do G3 |
| Wynik sumaryczny | A 1/1 + P 0/2 za nadmiar + K 1,5/2 = 2,5/5 = 50% punktów po finalizacji — PASS | Nie jest oceną gotowości ani odsetkiem w całości poprawnych pytań |
| Zapis, reload i przerwa | Zachowane odpowiedzi i flaga, wznowiona ta sama próba; wynik pokazuje zapisaną przerwę — PASS | Zapis demonstracyjny, bez gwarancji synchronizacji i odporności produktu |
| Neutralny słownik | Jego dopuszczenie/użycie nie wymusza konwersji; fakt widoczny przy wyniku — PASS | Warunek profilu, bez zbudowanego słownika |
| Konwersja | Nawigacja do wiedzy najpierw pyta o konwersję; anulowanie nie ujawnia treści; potwierdzenie prowadzi do Nauki bez powrotu tej próby do niezależności — PASS | Bez pełnej historii tras i produkcyjnego modelu uprawnień |
| Klawiatura | Escape z wiedzy przywrócił fokus opcji i 1/2; K: Spacja wybiera, Enter na Wyczyść przywraca blank — PASS | Nie jest pełnym testem klawiatury ani czytnika |
| Reflow | Wszystkie 25 stanów przy 320 px bez poziomego overflow; 14 reprezentatywnych przy 390 px także bez overflow — PASS | CSS viewporty w przeglądarce, bez fizycznego telefonu, 400% zoom i text-spacing pozostają do testów |
| Render | Obejrzano wybrany kierunek, długie P/K, wiedzę oraz porównanie dwóch układów; zapisano rzeczywiste screenshots | Nie poświadcza badań użytkowników |
| Błędy przeglądarki | W odczytanym logu atlasu po odfiltrowaniu źródeł chrome-extension nie było błędów aplikacji | W logu występowały błędy metadanych rozszerzenia przeglądarki; nie były błędami prototypu |

Źródła technicznego śladu kontroli: `D_QA_Evidence.json` i `design-qa.md`; są dokumentacją demonstracji, nie specyfikacją stosu implementacyjnego. Dwóch dodatkowych klatek nie dołączono jako osobnych PNG; ich stany są dostępne w samowystarczalnym atlasie, bez odnośników do brakujących plików.

## 5. Obowiązkowa kontrola po dostarczeniu C

| ID | Materiał i próba | Kryterium przyjęcia / zależny ślad |
|---|---|---|
| C-D-01 | Każdy rzeczywisty A/P/K, wszystkie opcje i wiersze | Jednoznaczne instrukcje, w/k/m i stany puste; bez ukrytych warunków. FR-007–009/029/037 |
| C-D-02 | Najdłuższe rationale i lokalne źródła | Czytelna kolejność, brak ucięć, błędne i pominięte poprawne widoczne; reszta na żądanie bez przymusu. FR-011/036 |
| C-D-03 | Wielowierszowe K, m różne od 4 | Każda grupa czytelnie wiąże stwierdzenie z wartościami, blank nie wygląda jak Fałsz. FR-009/036 |
| C-D-04 | Opcja → reguła → concept/comparison | Właściwy fragment i cel linku, nie samo podobieństwo słów. FR-012/014, R08–R11 |
| C-D-05 | Prerequisite i dwa poziomy gałęzi | Uzasadnione dla czynności, pomijalne, bez cyklu i utraty źródła. FR-013/014/032 |
| C-D-06 | Korekta i znaczące warianty wszystkich trzech ścieżek | To samo kryterium, rzeczywista zmiana czynności/warunku, jawne rodziny i źródło oceny. FR-016/017 |
| C-D-07 | Dwa nieudane follow-up tej samej gałęzi | Początkowy błąd poza licznikiem, nowa pomoc/przerwa po drugim, brak automatycznego trzeciego. FR-016/021 |
| C-D-08 | Sonda przed/po instrukcji | Alternatywy i granica wniosku zachowane; po korekcie bez diagnozy dawnej przyczyny. FR-015 |
| C-D-09 | Otwarta odpowiedź, klasyfikacja i uzasadnienie | Rubryka, konieczne elementy, samoocena odrębna od klucza/eksperta; brak fikcyjnych punktów A/P/K. FR-006/022 |
| C-D-10 | Każdy tytuł, EO, source, breadcrumb, alt, preview i nazwa dostępna | W aktywnym Sprawdzeniu brak informacji ujawniającej rozwiązanie każdą drogą. FR-018/019/026/036 |
| C-D-11 | Ekspozycja trening/follow-up/delayed i czytelnika recenzji | Formy i rodziny rzeczywiście dopuszczone względem konkretnej osoby; brak resetu po zmianie ID/języka. FR-017/019/025 |
| C-D-12 | Dwa czasy per kryterium; w K kryteria mieszane | Dawna próba + świeża lektura nie dostają etykiety retencji; nieznane daty pozostają nieznane. FR-020/022 |
| C-D-13 | Brak treści, linku, wariantu, review, prawa, historii | Fallback adekwatny do U-*; krytyczny brak blokuje cały punktowany item, brak opcjonalnego linku nie blokuje dobrego rationale. FR-033/034 |
| C-D-14 | Materiał wycofany w trakcie przerwy, zakwestionowany klucz, późniejsze przeliczenie | Zachowana historia, jawne ograniczenie lub stara/nowa ocena z podstawą; bez kary za wadę produktu. FR-035 |
| C-D-15 | Zatwierdzona forma testu tematu | Prawdziwy zakres, liczby i nowość, flagi i edycja, neutralna finalizacja; po niej właściwy wynik i review. FR-025–028 |
| C-D-16 | Powrót klawiaturą i czytnikiem w A/P/K, długie teksty | Znana kotwica i fokus, równoważna treść bez podpowiedzi, reflow/zoom/text-spacing. FR-013/032/036 |
| C-D-17 | Manifest zakresu i pięć kategorii dowodów | SUPPORTS/MEASURES/MENTIONS rozdzielone, części EO i terminy jawne; brak mastery/prognozy. FR-004/022–024/038 |
| C-D-18 | Neutralny tutorial A/P/K z D04 | Wybór/wyczyszczenie/oddanie i przykłady punktacji, pomijalność, powrót bez zaliczenia EO RE. FR-029 |

Próby trzeba wykonać na konkretnych rewizjach rzeczywistego C. Zmiana długości tekstu, m, rodzaju relacji lub rubryki może wymagać korekty D; nie dopasowywać merytoryki przez skrócenie koniecznego warunku.

## 6. Proces jakości treści w pierwszym przyroście

Kontrola może być ręczna: autor C dostarcza pełny pakiet i źródła → odrębny kompetentny reviewer sprawdza QG-01–10 oraz zamierzone prawa → uprawniona decyzja dopuszcza konkretną rewizję do U-READ/GUIDED/INDEPENDENT/REMEDIAL/REVISION/TOPIC, a rezerwa dodatkowo kontroluje formę i przecieki → manifest wydania wskazuje użycia i wyłączenia. Brak krytycznego warunku pozostawia dane użycie zamknięte. Nie wymaga to budowy CMS.

Uwaga ucznia nie przepisuje klucza. Wiarygodny nierozstrzygnięty spór wstrzymuje nowe użycie i mocne wnioski. Po rozstrzygnięciu zachowuje się pierwotną odpowiedź i ocenę oraz jawne przeliczenie z datą/podstawą, albo oznacza obserwację jako niediagnostyczną. Wyłączenie zmieniające mianownik formy jest jawne i nie daje automatycznej porównywalności pełnego mocku. Zmiana rdzenia, relacji, rodziny lub przekładu uruchamia analizę zależnych użyć, również feedbacku i dawnych kwalifikacji nowości.

## 7. Konkretne wejścia dla Claude Code

| Wejście | Wymagany stan przy handoffie |
|---|---|
| Decyzja G1 i B01–B04 v0.2 | R06 plus zachowanie K-04 i konkretnych rewizji |
| D01 | Przyjęty zakres pierwszego przyrostu, granice P/Z/L i decyzje UI; brak samodzielnego rozszerzania do pełnego kursu |
| D02 | Flow, miejsca/stany, przypadki negatywne i pełny ślad UC |
| D03 + atlas + screenshots | Wybrana organizacja, tokeny i desktop/mobile; natywne makiety mają pierwszeństwo nad błędnymi tekstami eksploracyjnych obrazów |
| D04 + prototyp | Niezmienniki interakcji i ciągłości; prototyp jest ilustracją, nie produkcyjną architekturą |
| Blueprint F09/F11/F16 i FTC | Oryginalne produktowe AC, scoring i zaakceptowane ograniczenia; B02 AC jako dodatkowa semantyka |
| C po G2 | Rzeczywiste pakiety, prawa, pełne rationale, rubryki, relacje, rodziny, manifest i dopuszczone role |
| Raport G3 | A/P/K, wiedza, korekta, nowa próba, powrót i symulacja odroczenia, pozytywne i negatywne przypadki na wskazanych rewizjach |
| Mandat techniczny i G4 | Akceptacja zakresu oraz warunków wykonania przez właściciela przed kodowaniem przyrostu |

Claude Code nie powinien odgadywać kluczy, pisać brakujących autorytatywnych rationale na żywo, zmieniać punktacji, ukrywać pomocniczego punktu K, upraszczać stanów dowodu do procentu mastery ani traktować tego prototypu jako chronionej rezerwy.

Nie wybrano tutaj repozytorium, frameworka, backendu, dostawcy tożsamości, sposobu synchronizacji, bazy, kontraktów API, wdrożenia ani obsługi produkcyjnej. Ich konkretyzacja należy do późniejszego mandatu. Rzeczywista realizacja musi egzekwować dopuszczenie treści i widoczność także poza samą warstwą prezentacji.

## 8. Warunki G4 i otwarte kwestie

- [ ] Właściciel przyjął D01–D05 i konkretny zakres pierwszego przyrostu; preferencja „Skupiona sesja” nie zastępuje tej decyzji.
- [ ] C przyjęte w G2, z rzeczywistymi źródłami/prawami, odrębnym review, wariantami i dopuszczoną formą testu tematu.
- [ ] D sprawdzono na rzeczywistym C według C-D-01–18; krytyczne wady usunięto.
- [ ] G3 wykonane i odebrane według jawnego protokołu. Symulacja odroczenia nie została nazwana dowodem retencji.
- [ ] Zapisano konkretne rewizje wejść, plan użycia rezerwy i ograniczenia dostępności/historii; brak pozornie nowych rodzin.
- [ ] Jest osobny mandat techniczny, zakres akceptacji i decyzja właściciela G4.

Pełny bank FL, pełna symulacja, dowód prognostyczny i zakończone badanie całej metody nie są dopisywane jako nowe warunki ograniczonego przyrostu. Pozostają ograniczeniami obietnicy produktu. G2 i G3 są osobnymi odbiorami; G3 nie jest wstecznym warunkiem zamknięcia G2.

**Najbliższa praca:** review konkretnego D, dokończenie C i odbiór G2, kontrola D na C oraz walkthrough G3. Pakiet jest gotowy do tych działań; nie jest zgodą na produkcyjne kodowanie ani zamknięciem którejkolwiek otwartej bramki.

## Dodatek A — produktowe kryteria akceptacji F09, bez zmiany identyfikatorów

Źródło: `IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md`, F09, pole Acceptance każdej karty. Poniżej zachowano tekst źródłowy. To kryteria przyszłego produktu, a nie lista już zdanych testów prototypu. D01 określa zakres pierwszego przyrostu; B02/AC-001–038 kontrolują odrębnie semantykę.

### FR-001 — Orientacja i warunki przygotowania

Given brak daty egzaminu, When uczeń wybiera start, Then nauka jest dostępna. Given wybrano EN, When nie wybrano wydłużenia, Then system nie przyznaje automatycznie 90 minut. Given pilot, When wyświetlono zakres, Then nie pada deklaracja pełnego przygotowania.

### FR-002 — Krótki wybór punktu startu

Given doświadczony analityk, When deklaruje praktykę, Then żaden EO nie otrzymuje samodzielnego dowodu. Given pominięta albo niedostępna diagnoza i zatwierdzony materiał, When uczeń wybiera naukę, Then dostaje działające wejście bez komunikatu o niepowodzeniu.

### FR-003 — Jeden następny krok z wyjaśnieniem

Given dwa zaległe cele, When podano rekomendację, Then powód wskazuje konkretną potrzebę. Given uczeń wybiera inny temat, When zaczyna, Then poprzednia potrzeba pozostaje widoczna bez blokady i bez utraty historii.

### FR-004 — Pokrycie celów i składowych

Given pytanie o jedną zasadę EO2.2.2, When odpowiedź jest trafna, Then pozostałe zasady nie stają się wykazane. Given definicja granicy, When rozwiązano A, Then system nie zalicza całego EO4.1.1 na poziomie L3.

### FR-005 — Krótkie objaśnienie z rozwinięciem

Given otwarto kartę pojęcia, When uczeń przechodzi do zadania, Then nie wymaga się odhaczenia wszystkich akapitów. Given materiał przeczytany bez zadania, When otwiera postęp, Then widzi poznanie, a nie samodzielne wykazanie.

### FR-006 — Retrieval i zastosowanie zgodne z EO

Given otwarta odpowiedź oceniona samodzielnie, When spełniono checklistę, Then źródło oceny pozostaje widoczne. Given EO jakości na poziomie L1, When weryfikowany jest postęp, Then nie wymaga się dodatkowego zaawansowanego projektu jakości.

### FR-007 — Pytanie A

Given A o wadze 3, When wybrano poprawną opcję, Then wynik wynosi 3. Given próba symulacyjna, When zmieniono wybór, Then klucz i osiągnięte punkty pozostają ukryte, a maksymalna waga jest widoczna.

### FR-008 — Pytanie P i częściowe punkty

Given w=3 i k=2, When wybrano jedną trafną i jedną błędną, Then wynik wynosi 1,5. Given te same metadane, When wybrano trzy opcje, Then całe pytanie otrzymuje 0. Given tylko jedną odpowiedź, When uczeń zatwierdza, Then system jej nie blokuje.

### FR-009 — Pytanie K i decyzje stwierdzeń

Given w=2 i cztery stwierdzenia, When trzy odpowiedzi są poprawne, a jedna pusta, Then wynik wynosi 1,5. Given pusty wiersz, When prezentowany jest review, Then oznaczenie brzmi „brak odpowiedzi”, a nie „wybrano fałsz”.

### FR-010 — Zatwierdzenie i historia prób

Given błędna oddana odpowiedź, When uczeń otwiera rozwiązanie i zaznacza klucz, Then pierwotna próba pozostaje błędna. Given aktywny mock, When uczeń wraca do pytania przed końcem, Then może zmienić odpowiedź bez otrzymania feedbacku.

### FR-011 — Warstwowy feedback

Given P częściowo poprawne, When pokazano feedback, Then obejmuje pominiętą poprawną opcję i punktację. Given poprawne A, When uczeń wybiera „Dalej”, Then nie musi rozwijać pozostałych uzasadnień.

### FR-012 — Od opcji do właściwego rozróżnienia

Given opcja błędna tylko w danym kontekście, When otwarto rationale, Then nie jest opisana jako zawsze fałszywa. Given trzy opcje dotyczą jednego kontrastu, When otwarto wiedzę, Then mogą korzystać ze wspólnego porównania.

### FR-013 — Odwracalna eksploracja i powrót

Given pytanie → porównanie → prerequisite, When uczeń wybiera powrót do pytania, Then odzyskuje te same wybory i wynik. Given obsługa klawiaturą, When wraca, Then fokus znajduje się przy elemencie, z którego rozpoczęto eksplorację.

### FR-014 — Porównanie i potrzebny prerequisite

Given brak potwierdzonego prerequisite, When system proponuje naprawę, Then nie wymyśla zależności. Given znany prerequisite, When uczeń wybiera pominięcie, Then kontynuuje zadanie bez utraty dotychczasowego postępu.

### FR-015 — Hipoteza pomyłki i jej sprawdzenie

Given jedna błędna opcja, When wyświetlono interpretację, Then jest hipotezą. Given próba potwierdzająca nie wspiera hipotezy, When zaproponowano dalszy krok, Then nie wymusza się naprawy tej rzekomej pomyłki.

### FR-016 — Krótka remediacja bez nieskończonej pętli

Given jeden nieudany follow-up w danej gałęzi naprawy, When drugi follow-up także kończy się niepowodzeniem, Then system proponuje zmianę wsparcia lub przerwę, zamiast automatycznie uruchomić trzeci podobny wariant. Given pominięta remediacja, When uczeń kontynuuje, Then luka pozostaje do późniejszej kontroli bez zablokowania sesji.

### FR-017 — Nowy wariant do weryfikacji

Given tylko parafraza poznanego stemu, When rozpoczyna się próba, Then nie jest oznaczona jako niezależna nowa rodzina. Given brak nowego wariantu, When pokazano rekomendację, Then system nie deklaruje pomiaru transferu.

### FR-018 — Pomoc i znajomość a status dowodu

Given otwarto klucz przed submit, When wybrano poprawnie, Then punkty są poprawne, ale brak samodzielnego dowodu. Given poprawna odpowiedź na znany item, When aktualizowany jest postęp, Then nie pojawia się nowy dowód transferu. Given znany item i otwarta wskazówka, When uczeń odpowiada, Then historia zachowuje zarówno znajomość, jak i pomoc.

### FR-019 — Ochrona rezerwy i historia ekspozycji

Given pierwszy kontakt z reserved itemem w teście, When pojawia się stem, Then bieżąca próba pozostaje pierwszym pomiarem. Given rozwiązanie ujawnione wcześniej w podglądzie, When dobierany jest test, Then item nie jest wybrany jako nieznany.

### FR-020 — Powtórka z rzeczywistym odstępem

Given ponowna próba po dziesięciu minutach, When uczeń odpowiada trafnie, Then nie otrzymuje pilotażowej etykiety „utrzymane po przerwie”. Given siedem dni od dawnej próby i minuta od przeczytania rozstrzygającego wyjaśnienia tego samego kryterium, When nowa odpowiedź jest poprawna, Then oba odstępy są zachowane, a wynik nie dostaje etykiety siedmiodniowej retencji. Given błąd po tygodniu, When aktualizowany jest profil, Then poprzedni sukces pozostaje w historii, a pojawia się potrzeba rewizji.

### FR-021 — Równowaga nowej nauki i powtórek

Given brak zaległych powtórek i niepokryty cel, When uczeń wybiera kontynuację, Then dostaje nową naukę. Given zakończona gałąź naprawy, dostępny niepokryty cel i brak nowej przesłanki dla powtarzania naprawy ani blokującego prerequisite, When powstaje domyślna rekomendacja, Then nie uruchamia automatycznie tej samej gałęzi i umożliwia dalszy zakres.

### FR-022 — Profil dowodów wiedzy

Given samodzielna nowa próba bez wcześniejszej lektury w aplikacji, When jest poprawna, Then nie wymaga się sztucznego przejścia przez „przeczytane”. Given znane zadanie po tygodniu, When wynik jest trafny, Then retencja tego wykonania nie staje się dowodem nowego kontekstu.

### FR-023 — Zrozumiały postęp i jawne braki

Given poznane materiały bez retrieval, When uczeń ogląda postęp, Then nie widzi samodzielnego wykazania. Given brak zadania dla EO, When wyświetlono lukę, Then jest opisana jako niedostatek materiału/pomiaru, a nie wykazany brak kompetencji.

### FR-024 — Ostrożny profil gotowości

Given wynik 90% na poznanej formie, When wyświetlono przygotowanie, Then znajomość jest widoczna i nie pojawia się gwarancja zdania. Given brak danych retencji, When prezentowano mocne mock scores, Then brak retencji nadal pozostaje jawny.

### FR-025 — Warunki uruchomienia sprawdzenia

Given tylko 24 rezerwowe pytania pilota, When wybierana jest symulacja całego FL, Then produkt jej tak nie nazywa. Given zatwierdzony tematyczny zestaw bez limitu, When uczeń rozpoczyna Sprawdzenie, Then brak profilu 75/90 minut nie blokuje startu. Given wystarczająca forma z ujawnionymi rodzinami, When wymagana jest niezależność, Then proponowany jest fallback albo inna forma.

### FR-026 — Przebieg sprawdzenia bez pomocy

Given trwa mock, When otwarto pytanie, Then waga jest widoczna, wynik nie. Given test tematu bez limitu, When uczeń odpowiada, Then może zmieniać wybory do finalizacji całości, lecz nie widzi feedbacku. Given upłynął zadeklarowany limit, When uczeń próbuje zmienić odpowiedź, Then nie zmienia ona oddanej próby. Given próba kliknięcia wiedzy w dowolnym aktywnym Sprawdzeniu, Then pomoc nie zostaje ujawniona.

### FR-027 — Przerwanie i przejście w naukę

Given wyjście z mocku na pięć minut, When uczeń wraca, Then czas nie jest cofnięty. Given test tematu bez limitu i bez ujawnionej pomocy, When uczeń wraca po przerwie, Then kontynuuje tę samą próbę z zapisaną przerwą. Given potwierdzona konwersja do Nauki, When otwarto wyjaśnienie, Then ta sama próba nie może odzyskać statusu niezależnego Sprawdzenia. Given porzucony item, Then pozostaje ujawniony.

### FR-028 — Wynik i plan po sprawdzeniu

Given wynik częściowy P/K, When otwarto review, Then wyjaśniono uzyskane i nieuzyskane punkty. Given jeden błąd w wieloskładnikowym EO, When powstał plan, Then wskazuje konkretną przesłankę, nie pewne nieopanowanie całego EO.

### FR-029 — Uczenie formatu oddzielnie od domeny

Given P z dwoma trafnymi i nadmiarowym wyborem, When wynik wynosi zero, Then feedback wyjaśnia regułę nadmiaru. Given ukończony tutorial K, When aktualizowany jest profil, Then nie wzrasta opanowanie traceability tylko dlatego, że użyto go w ilustracji.

### FR-030 — Opcjonalna deklaracja pewności

Given deklaracja pominięta, When uczeń zatwierdza odpowiedź, Then nie ma blokady ani kary. Given poprawna odpowiedź „niepewnie”, When naliczane są punkty, Then pozostają pełne, a system może zaproponować inny wariant. Given pewny błąd, Then diagnoza nadal wymaga potwierdzenia. Given standardowy pełny mock, When uczeń odpowiada, Then nie pojawia się dodatkowa prośba o ocenę pewności.

### FR-031 — Znajdowanie wiedzy PL/EN

Given zapytanie po angielskim synonimie, When istnieje kontrolowane powiązanie, Then znalezione jest właściwe pojęcie PL. Given pasujący reserved item, When wyszukiwano, Then jego treść, snippet i odpowiedzi nie są ujawnione.

### FR-032 — Wznowienie po przerwie

Given powrót po tygodniu, When otwarto postęp, Then wcześniejsze dowody nadal istnieją. Given niedokończone review, When uczeń wybiera kontynuację, Then wraca do odpowiedniego pytania i feedbacku, bez ponownego naliczania wyniku.

### FR-033 — Zachowanie przy brakach korpusu

Given niezweryfikowane rationale klucza, When przygotowywana jest sesja, Then item jest niedopuszczony. Given brak opcjonalnego comparison link, When wyjaśnienie jest kompletne, Then pytanie może działać bez pustej obietnicy linku. Given brak nowego wariantu, Then nie deklaruje się transferu.

### FR-034 — Minimalna bramka publikacji treści

Given item bez uzasadnienia pominiętej poprawnej opcji P, When zgłoszono publikację, Then bramka jej nie dopuszcza. Given recenzja ekspercka bez danych użytkowników, When pokazano jakość, Then nie pada etykieta psychometrycznie zwalidowanego pytania.

### FR-035 — Wątpliwość, wycofanie i korekta dowodów

Given poprawiony błędny klucz, When oglądany jest dawny wynik, Then korekta jest jawna. Given item wycofany, When dobierana jest kolejna sesja, Then nie trafia do praktyki ani nowej symulacji.

### FR-036 — Dostępna obsługa interakcji

Given tylko klawiatura, When uczeń wykonuje P i otwiera rationale, Then może wrócić i kontynuować. Given czytnik ekranu w K, When zmienia ocenę, Then zna stwierdzenie i aktualną wartość. Given brak rozróżniania kolorów, Then wynik nadal jest zrozumiały.

### FR-037 — Terminologia i znaczenie egzaminacyjne

Given polskie objaśnienie autora, When wyświetlono je, Then nie jest przypisane jako oficjalna polska definicja IREB. Given termin ma dwa znaczenia, When używa go pytanie, Then kontekst rozstrzyga właściwe znaczenie albo publikacja jest wstrzymana.

### FR-038 — Jawny zakres pilota i pełnego przygotowania

Given pilot wybranych tematów, When uczeń kończy wszystkie zadania, Then nie otrzymuje deklaracji przygotowania do całego FL. Given 12 komórek i 24 reserved itemy, When planuje się pre/post/delayed, Then system badania nie opisuje trzech pomiarów po 12 jako niezależnie nieznanych.

