# R02 — Readiness Audit, rejestr luk i bramki v0.1

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data odniesienia:** 1 listopada 2026, Europe/Warsaw  
**Status:** FOR REVIEW — ocena audytowa, nie decyzja właściciela o zamknięciu G1–G4  
**Metoda kontroli:** audyt dokumentów i krytyczny self-review AI; bez niezależnej recenzji domenowej, walkthrough z uczestnikiem i empirycznego pilotażu.  
**Zakres:** 13 wskazanych Sources. Skróty i dokładne nazwy plików: R01 §3. Nie zmieniono żadnego źródła ani nie utworzono korpusu.

## 1. Werdykt wykonawczy

**Faktyczny etap: odbiór B przed wznowieniem authoringu C.** B jest opracowane strukturalnie, ale niezaakceptowane. C ukończył przygotowanie dozwolone przed G1; właściwy korpus nie powstał. Nie ma podstaw do uznania całych faz B i C za zakończone w znaczeniu projektowego Definition of completion. [S-START §5–7; B01 nagłówek; B04-07; C03-01/04; C04-01/09]

**Rozmowę o aplikacji można rozpocząć warunkowo już teraz**, jeśli właściciel uruchomi ją jako oddzielne zadanie D. Baseline A2 jest wystarczająco szczegółowy, aby nie odkrywać pętli nauki od początku. Nie trzeba czekać na cały bank ani pełne C. Projektant musi zachować status B jako propozycji oraz brak dopuszczonych treści. Finalizacja projektu przyrostu zależy od zaakceptowanej semantyki i reprezentatywnego pakietu.

**Nie ma jeszcze gotowości do przekazania realizacji edukacyjnego przyrostu agentowi programującemu.** Brak G1, realnego C03, wymaganych kontroli i G2/G3, a także odrębnie zaprojektowanego i zatwierdzonego zakresu przyrostu do G4. Techniczna próba wykonalności na jawnie syntetycznych danych jest możliwym osobnym zadaniem; nie jest handoffem edukacyjnym ani zezwoleniem na implementację w tym audycie.

## 2. Dowody, zakres odczytu i ograniczenia

### 2.1. Faktycznie sprawdzone

| Kontrola | Wynik / granica |
|---|---|
| Dostępność i wersje | 13/13 plików odczytanych co najmniej w metadanych i sekcjach potrzebnych do audytu; po jednej kopii każdej dokładnej nazwy, brak konkurencyjnych wersji w zestawie |
| Pełne małe dokumenty | S-START, S-PED oraz B01–04 i C01–04: statusy, treść i zależności. Zerowy inwentarz C03 sprawdzono we wnętrzu pliku |
| Blueprint | F01–F16: rekomendacja, ciągłość, konteksty, pętla, F06, wszystkie scenariusze w zakresie celów/FR/wyjścia, F08, wszystkie FR/AC, stany, scoring, postęp, F13, zakresy, walidacja i FD/handoff. Nie audytowano ponownie całej zewnętrznej bibliografii |
| Kontrakt funkcjonalny | F13.1–8 i odziedziczone F10–12/F14, karty FR, handoff; porównanie z S-BP |
| Raport badawczy | D2 — profil i indeks EO; D3 — klasyfikacja badań; D7–D8 — pytania/dowody; właściwe części D10–D12/D15 — pakiety, źródła i zakres; mapa pozostałych D i odpowiednie odwołania. Nie ponawiano badań pedagogicznych ani recenzji całej literatury |
| FR | 38/38 ID, zgodne pełne tytuły S-BP F09 i B02; każda karta B02 ma ślad, M/W/O, relacje, minimum explanation, proweniencję/dowód, skutek braku, B/C i AC-001–038 |
| UC i FD | 18 aktualnych UC w F07; 28 FD w F16. F13 stosuje czasem skrócone tytuły FR, zachowując ID — nie jest to inna wersja wymagania |
| B | 26 definicji R, 16 B-DEC, K-01–08, L-B01–13, K0–K7/QG/U-*/LUKA-*, 20 negatywnych przypadków E01–20; wszystkie 11 przejść F06 ma kontrakt w B02-04 |
| Kopie funkcjonalne | **F13, F10, F11, F12 i F14: treść identyczna** między S-BP i S-FTC; porównano odpowiednie zakresy po odcięciu otaczającej bibliografii/handoffu. Celowa redundancja, obecnie bez driftu |
| Rewizja B użyta przez C | Cztery SHA-256 podane w C04-06 odpowiadają dokładnie obecnym B01–04. Nazwy v0.1 odnoszą się tu do tych samych bajtów; hash nie jest akceptacją |
| EO | Ponowne zliczenie tabeli S-DR D2.5: 70, w tym 36/27/7 L1/L2/L3. To kontrola indeksu; nie nowy pełny audyt normatywny 70 EO |
| C | 9 źródeł C-S, 13 T, 16 AT, 14 ocen C-AC. 0 pytań, follow-up, delayed, rodzin i niezależnie zrecenzowanych pakietów C |

### 2.2. Bieżąca weryfikacja zewnętrzna — ograniczona do podstaw audytu

Nie wykonano kolejnego szerokiego researchu. Otwarto oficjalne zasoby, aby sprawdzić profil i reguły, których ewentualna zmiana mogłaby podważyć wniosek o gotowości.

| Źródło / dostęp 1.11.2026 | Co potwierdzono teraz | Czego nie potwierdza |
|---|---|---|
| [IREB Download Center](https://cpre.ireb.org/en/downloads-and-resources/downloads), pozycje FL Syllabus/Regulations/Glossary/Handbook | Katalog wskazuje 3.3.0 / 5.6.2 / 2.2.0 / 1.3.2; Glossary PL zawiera terminy PL i definicje EN | Warunków konkretnej rezerwacji, treści całego Handbook ani kluczy autora |
| [Examination Regulations 5.6.2](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf), §1–2, PDF s.2–6 | Profil czasu/liczby pytań/progu oraz punktowanie A/P/K zgodne z F11/B01/C02, łącznie z niedoborem/nadmiarem P i blankiem K | Jakości merytorycznej ilustracji ani nieistniejących nowych pytań C |
| [Syllabus EN 3.3.0](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf), okładka, Terms of Use i wykazy odpowiednich EO | Wersję; EO1.1.2 L2, EO2.2.2 L2, EO4.1.1 L3, EO6.6.1–3 L1; rozdzielenie użycia jako podstawy opracowania od zastrzeżeń reprodukcji/reklamy | Pełnego review EN/PL, nowego klucza, ogólnej zgody na dowolne zapożyczenia |
| [Syllabus PL — wskazany adres](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/68b8837862-1787039957/cpre_foundationlevel_syllabus_pl_v.3.3.pdf) | Próba odczytu ponownie nieskuteczna przez narzędzie | Nie jest to dowód nieistnienia PL ani obalenie historycznego odczytu z S-DR |

Nie odczytano teraz ponownie całych Glossary, Handbook, public sample ani Cockpit. Ich zakres dostępu opisany w C01 pozostaje **deklaracją udokumentowanej wcześniejszej kontroli C**, nie nowym niezależnym potwierdzeniem wszystkich fragmentów. Nie wydano opinii prawnej. Prawa należy ustalać dla konkretnego materiału i kanału; nie wprowadzamy obowiązku ogólnej zgody IREB na każde oryginalne zadanie.

## 3. Macierz kompletności i akceptacji artefaktów

„Kompletne” poniżej dotyczy odpowiedzialności dokumentu, nie gotowości całej fazy. „Brak dowodu” znaczy niepotwierdzone w tym zestawie. Baseline A/A2 ma umocowanie w bieżącym zleceniu właściciela; audyt nie wymaga ponownego jego zatwierdzania jako warunku rozmowy D.

| Artefakt | Istnieje | Kompletność struktury / zleconego rezultatu | Kontrola autorska/AI | Niezależny review | Akceptacja właściciela i dopuszczenie |
|---|---|---|---|---|---|
| S-START | Tak | Tak jako router; mapa Sources nieaktualna | Autorstwo/synteza; brak osobnego protokołu | Brak dowodu | Obowiązuje wg warunku obecności i zlecenia; nie zatwierdza B/C |
| S-PED | Tak | Tak jako kanon | Opracowanie istnieje; nie wykonana walidacja | Brak dowodu | Obowiązujący kanon wg zlecenia; brak osobnej decyzji o bajtach |
| S-DR | Tak | D1–D15 istnieją | Krytyczny przegląd opisany; nie pełna nowa weryfikacja bibliografii | Brak dowodu | Baza dowodowa projektu; nie dowód skuteczności programu |
| S-BP | Tak | F01–16, FR/UC/FD i AC istnieją | Zakres kontroli opisany | Brak dowodu | Baseline zachowań wg zlecenia; nie akceptacja aplikacji |
| S-FTC | Tak | Tak; zgodność kopii sprawdzona | Wyciąg/kontrakt istnieje | Brak dowodu | Baseline informacji wg zlecenia; nie akceptacja B |
| B01 | Tak | Strukturalnie kompletne do review G1 | Tak, źródła i kontrola kontraktu | Niepotwierdzony, L-B04 | FOR REVIEW; nie accepted |
| B02 | Tak | 38/38 kart i AC | Tak | Niepotwierdzony | FOR REVIEW; AC nie są wynikami testów |
| B03 | Tak | Komplet prób kontraktu; nie pełny corpus | Tak; ilustracje/syntetyczne historie | Niewykonany dla itemów | FOR REVIEW; brak dopuszczenia punktowanej nauki/rezerwy |
| B04 | Tak | Rejestry i handoff istnieją | Tak | Niepotwierdzony | FOR REVIEW; rekomendacja przyjęcia nie zamyka G1 |
| C01 | Tak | Rejestr istnieje; acquisition/prawa częściowe | Tak | Brak niezależnego potwierdzenia | FOR REVIEW; brak dopuszczenia korpusu |
| C02 | Tak | Discovery i standard opisane; standard nieprzyjęty | Tak | Brak | Niewiążąca propozycja przed G1 |
| C03 | Tak | Manifest kompletny; **korpus 0/3** | Kontrola manifestu, brak itemów do QA | Brak itemów i review | BLOCKED; wyłącznie przegląd zależności |
| C04 | Tak | Raport przygotowania istnieje; nie QA gotowego C | Tak | Wprost: nie uczestniczył reviewer domenowy | FOR REVIEW; C i G2 nieukończone |

Nie ma podstaw do procentowego wskaźnika gotowości z tej tabeli. Kryteria nie są równoważne ani niezależne.

## 4. Ocena bramek G0–G4

Statusy są oceną audytora, nie wykonaniem decyzji właściciela. G0 dotyczy obecności wejść określonych w S-START; nie wymaga kompletnej licencji całego przyszłego produktu.

| Bramka / status | Sprawdzone dowody | Brakujące dowody i otwarte decyzje | Sprawdzalny warunek zamknięcia / następne działanie |
|---|---|---|---|
| **G0 — PASS w zakresie dostępności Sources** | START + wszystkie cztery bazowe Sources dostępne; dodatkowo cały pakiet B/C | Router §2/8 nadal opisuje pięć aktywnych plików; bieżące listy mają 13. To dług routingu, nie brak wejścia | Zachować zestaw; zaktualizować mapę po decyzjach. Nie używać G0 jako zgody na authoring lub implementację |
| **G1 — BLOCKED formalnie; struktura gotowa do przeglądu** | B01–04, wszystkie FR/AC, relacje, A/P/K i E01–20, jawne K/L-B | Brak decyzji o rewizji/zakresie i B-DEC; L-B04 niezależnego review; K-04 wymaga potwierdzenia ograniczenia | Raport rzeczywiście odrębnego kompetentnego review albo jawna decyzja właściciela o sposobie rozstrzygnięcia L-B04; następnie przyjęcie/odrzucenie określonej rewizji B z warunkami. Żaden wyjątek nie jest tu domniemywany |
| **G2 — BLOCKED** | C01–04 istnieją, standard i scoring opisane, braki jawne | 0/3 pakietów; brak kluczy/rationale/korekt/rodzin/rubryk/rezerwy, niezależnego review i dopuszczenia; źródła/prawa częściowe | Rzeczywiste C03 zgodne z przyjętym B, wszystkie stosowalne C-AC z dowodami, zamknięte krytyczne usterki, określone użycie i decyzja właściciela |
| **G3 — BLOCKED dla docelowego pierwszego przekroju** | B03 daje logiczną symulację i fallbacki; semantyka powrotu i dwóch czasów istnieje | Brak ukończonego C do rzeczywistego przejścia; P-FU i delayed nie są gotowymi kontrolami; brak protokołu wykonania walkthrough | Po G2 przejść A/P/K, pozytywne/negatywne ścieżki, korektę, nowy przypadek, powrót i symulację czasu na konkretnych wersjach. Zapisać kroki, dane, wynik, błędy i review poprawek; uzyskać odbiór. Rozstrzygnąć zakres uczestników G3 |
| **G4 — BLOCKED** | FR/AC i kontrakt informacyjny są udokumentowane | G1–G3 otwarte; nie wybrano/zaakceptowano przyrostu, projektu flow/UI ani przyszłego kontraktu technicznego | Po G1–G3 i zadaniu D właściciel zatwierdza scope/FR/AC, materiał referencyjny i specyfikacje przekazania; programista nie dopowiada zasad domenowych |

**Trzy różne rodzaje walidacji:** (1) obecny audyt logiczny sprawdza kontrakty i ograniczenia; (2) walkthrough przechodzi konkretny materiał i przypadki, może odbyć się bez aplikacji; (3) empiryczny pilot obserwuje rzeczywistych uczniów, w tym rzeczywisty powrót po przerwie. Przesunięcie syntetycznego czasu w walkthrough nie dowodzi retencji. G3 nie zamyka skuteczności metody. [S-START §6; S-BP F01/F15; B03-01/02]

## 5. Kryteria C-AC-01–14: pełny stan wykonania

Ocena dotyczy C, nie ilustracji B. Same kryteria pozostają częścią proponowanego B do G1.

| ID | Ocena audytowa | Dowód i domknięcie |
|---|---|---|
| C-AC-01 | Częściowe przygotowanie | C01 ma rejestr, brak claim-source trace nowych kluczy/rationale; wymagany dla każdej decyzji |
| C-AC-02 | Częściowe przygotowanie | Poziomy rozpoznane; brak operacjonalizacji C i instancji mapowań; oddzielić role zakresu |
| C-AC-03 | Częściowe | 11 par +2 autorskie PL; brak kontroli terminologii w pakietach; porównać użyte EN/PL |
| C-AC-04 | Niespełnione | Nie ma rdzeni K1, warunków/przykładów i potrzebnych porównań C |
| C-AC-05 | Niespełnione | 0/3 oryginalnych pełnych A/P/K; konieczne wszystkie decyzje i rationale |
| C-AC-06 | Reguły/arytmetyka sprawdzone; itemy nieocenione | Normatywny scoring nie zatwierdza nieistniejących kluczy; sprawdzić konkretne pakiety i wektory F11 |
| C-AC-07 | Niespełnione | Brak instancji ścieżek opcja→rationale→reguła→źródło/materiał |
| C-AC-08 | Niespełnione | Korekta/follow-up/wyjście tylko jako standard; konkretna diagnoza dodatkowo wymaga sondy |
| C-AC-09 | Niespełnione | Brak rodzin, wariantów i rezerwy C; wymagane review różnic i ochrona per osoba |
| C-AC-10 | Niespełnione | Brak rzeczywistych rubryk i ocen granicznych; jawnie oddzielić klasyfikację od uzasadnienia |
| C-AC-11 | Częściowe przygotowanie | Opisano regułę ujawniania/dwa czasy; brak konkretnych fragmentów i zakresów ekspozycji |
| C-AC-12 | Niespełnione | Brak niezależnego review pakietów; kanał użycia/podstawa konkretnych zapożyczeń otwarte |
| C-AC-13 | Niespełnione dla korpusu | Checklisty nie zastępują treści i kontroli jej alternatyw; dostępność produktu później |
| C-AC-14 | Manifest jest; kryterium całościowo niezamknięte | Braki udokumentowane, lecz brak rzeczywistych form, przydziału rezerwy i śladu zmian korpusu |

## 6. Kontrola zgodności między dokumentami

| Para / obszar audytu | Wniosek i ograniczenie |
|---|---|
| Kanon ↔ Blueprint | Zachowane cele, retrieval, spacing, warstwowy feedback, nowość i granice wniosków. Kalendarz/etykiety pozostają hipotezami; stare „3×80%” odroczone jawnie |
| Blueprint ↔ F13 | Pełne F13 oraz wspólne F10–12/F14 są identyczne. Nie wykryto sprzecznej wersji ani FR usuniętego z kontraktu |
| F13 ↔ B | 38 kart i wszystkie 11 przejść F06 mają semantyczne pokrycie. B doprecyzowuje kryteria, rodziny i proweniencję; nowe decyzje są jawne, nie accepted |
| B ↔ C | C odnosi się do B warunkowo i zatrzymuje authoring; kontrola hashy potwierdza tę samą rewizję. Nie stwierdzono milczącego przyjęcia B-DEC |
| FR ↔ dostępna treść | Właściciele informacji są określeni, ale nie ma kompletnego C. Brak wykonania treści nie jest brakiem FR ani powodem nowego UX |
| A/P/K ↔ EO i scoring | Wzory zgodne z regulaminem. A ma częściowe L2, nie L3; P rozróżnia typy; K ma pomocniczy wiersz 4 bez pełnego uzasadnienia zakresu egzaminacyjnego. Poprawna arytmetyka nie kwalifikuje itemów |
| Authoring ↔ publikacja | C02 proponuje QG/review/prawa/rodziny zgodne z B; nie ma instancji ani decyzji o dopuszczeniu. Nie znaleziono „QA completed” ukrywającego brak niezależnej kontroli |
| Deklaracje ↔ dowody | B deklaruje gotowość do review, C deklaruje brak korpusu — zgodnie z zawartością. Ryzyko pomyłki dotyczy skrótowego odczytu nazw plików, nie ukrytej deklaracji gotowości w ich treści |

### 6.1. Rejestr konfliktów i niejednoznaczności

Nie wszystkie pozycje poniżej są nierozwiązanymi sprzecznościami. Oddzielono aktualną niezgodność metadanych, jawną decyzję do odbioru i rozbieżności już wyjaśnione. Nie dopisano konfliktu tylko dlatego, że brak UI.

| ID / charakter | Dokładne źródła / sekcje | Wpływ | Warianty i rekomendacja | Właściciel / stan |
|---|---|---|---|---|
| R-K01 — nieaktualny router | S-START §2/8: 5 aktywnych Sources i faza przygotowania; bieżący zestaw: 13, B/C już wytworzone | Następny agent może nie znaleźć B/C lub uznać je za niewykonane | Dopisać aktualne role/statusy do istniejącego routera albo utrzymywać osobny indeks. Zalecane po przyjęciu R: mała aktualizacja START, bez zastępowania definicji | Właściciel/redaktor Sources; otwarte, nie blokuje D ani G0 |
| R-K02 — K4 i zakres punktów | S-BP/S-FTC F13.8 Experience 3; B01-02/12; B03-K K2; B04 K-04/B-DEC-15; C03-02 | Ilustracja nie jest gotową pozycją rezerwy CPRE; agent mógłby dopisać EO | Zachować ilustrację pomocniczą; dla rezerwy napisać osobną pozycję zakresową albo jawnie zrewidować istniejącą po źródłowym uzasadnieniu. Zalecane: zachować B, oryginalne K w C | Właściciel ograniczenia G1; C/reviewer treści; otwarte zatwierdzenie, problem jawny |
| R-K03 — dwie interpretacje G3 | S-START §6: możliwość przejścia i symulacji; S-BP F15: review→walkthrough→pilot; B01-14: „walkthrough z uczniem”; C02-07 krok 7: nowicjusz i praktyk | Niejasne, czy G3 wymaga już obserwacji uczniów, czy dokumentowego wykonania. Ryzyko fikcyjnego PASS lub zbędnego blokowania prototypu | Jawnie określić protokół G3: wykonanie na C z raportem; ewentualne moderowane obserwacje zaznaczyć osobno; empirycznej retencji nie zastępować symulacją. Nie narzucać badań skuteczności jako G4. Zalecane rozstrzygnięcie przez właściciela przed odbiorem G3 | Właściciel + prowadzący walidację; doprecyzowanie wymagane |
| R-K04 — historyczny próg gotowości | S-PED „Pierwszy korpus…”; S-DR D8.4/D15; S-BP F02/F16 FD-16; B04 K-02 | Ryzyko przywrócenia automatu „3×80%” w D | Wariant: eksperyment później albo brak automatu. Obecny baseline już wybiera odroczenie — stosować go, bez nowej decyzji | Rozwiązane hierarchią; D zachowuje FD-16 |
| R-K05 — zakres dostępu do Handbook/PL | S-PED „Obowiązująca podstawa…”; S-DR D2.1; S-BP F02 „Korekty”; B01-01; C01 C-S03/07 | Nie wolno odziedziczyć pełnej weryfikacji z samego nowszego dostępu | Zachować chronologię kontroli; odczytać tylko faktycznie użyte lokalizacje, bez ponawiania całego researchu. Brak dostępu teraz nie unieważnia dawnego odczytu | C/source reviewer; historyczna rozbieżność wyjaśniona, konkretne luki otwarte |
| R-K06 — plan korpusu a wykonanie | S-DR D12; S-BP F14; B04 K-05; C03-04; C04-08 | 84/24/12 może zostać uznane za istniejący zasób lub trzy nowe formy | Używać manifestu wykonania, osobno budżetu; wybrać role rezerwy przed ekspozycją. Nie zwiększać automatycznie do 36 ani nie ponawiać ujawnionych itemów jako nowych | C + właściciel planu pomiaru; ostrzeżenie istnieje, plan przyszły |
| R-K07 — nazwy mylące przy samym routingu | Tytuł C03 „Initial Educational Content Corpus” vs C03 status/§1/§4; B02 tytuł „Acceptance Matrix” vs §1 | Pobieżny agent może pomylić manifest/kryteria z treścią/odbiorem | Zachować identyfikatory i dodać status w routerze. Zmiana nazw opcjonalna; brak potrzeby przebudowy dokumentów | Redaktor Sources; P3, brak sprzeczności wnętrza |

## 7. Rejestr braków P0–P3

**Priorytet jest względny wobec wskazanej czynności.** P0 blokuje jej bezpieczne rozpoczęcie/odbiór teraz; nie oznacza zakazu wszelkiej równoległej pracy. P1 jest wymagane przed dopuszczeniem pierwszego pilota i stosownego użycia treści; może też warunkować pełny odbiór wcześniejszej bramki. P2 dotyczy pełnego produktu; P3 jest odłożone/opcjonalne. Żaden brak stylistyki nie jest błędem B/C.

Kategorie: **A** wiedza/domena; **B** treść; **C** jakość/akceptacja; **D** specyfikacja funkcjonalna; **E** wejścia przyszłego Product Design; **F** handoff implementacyjny.

| ID / kategoria / priorytet | Sprawdzalny brak i źródło | Co blokuje i dlaczego | Właściciel i sprawdzalne zamknięcie |
|---|---|---|---|
| GAP-01 / C / **P0** | Akceptacja rewizji/zakresu B niepotwierdzona; B01 status, B04-05/07, C-B01 | Wznowienie authoringu pod B i edukacyjny handoff: C nie ma przyjętej podstawy. Nie blokuje analiz źródeł ani warunkowej rozmowy D | Właściciel: zapis przyjętej wersji/zakresu, B-DEC i warunków. Jeśli przyjęty tylko wycinek, nazwać go wprost; to nie pełne G1 |
| GAP-02 / B / **P0** | Brak realnego C03: 0/3, brak kompletnej ścieżki danych; C03-03/04, C-B02 | Odbiór G2/G3 i handoff edukacyjnego przyrostu według START: nie ma materiału referencyjnego do wykonania. Nie blokuje prototypu czysto syntetycznego | C: trzy oryginalne kompletne pakiety z K1–K5/K7 właściwymi aktywnościom; manifest rzeczywistych instancji i zgodność z B. Review i dopuszczenie osobno GAP-08 |
| GAP-03 / F / **P0 dla handoffu** | Brak zatwierdzonego przyrostu i kompletu wejść D/G4; START G4, S-BP F14 | Przekazanie realizacji konkretnego produktu: programista musiałby sam ustalić scope/realizację flow. To przewidziana przyszła faza, nie wada B/C | Właściciel + przyszły D: zatwierdzony zakres, wskazane FR/AC, zaakceptowany flow i wymagane specyfikacje realizacji. Dopiero później decyzje techniczne |
| GAP-04 / A / P1 | Nowe kryteria/mapowania C, zakres K i ewentualny L3 niewykonane; B01-02, K-03/04, C03-02 | Publikację zakresowego pomiaru: L2 A nie zastępuje L3, KRY-X01 nie może dawać ukrytych punktów FL | C + reviewer: każda punktowana decyzja ma uzasadnione kryterium/poziom; K pomocniczy albo osobny zakresowy item; jeśli L3 w scope — adekwatna czynność i rubryka |
| GAP-05 / A / P1 | Bieżąca równoważność użytych EN/PL i T-11/12 niezweryfikowana; L-B01, SRC-02, C02-02 | Dopuszczenie materiału deklarującego oficjalne PL brzmienie; nie samo projektowanie czy pracę na zweryfikowanej normie EN | C/redaktor PL/EN: odczyt konkretnych fragmentów PL, porównanie sensu/praw i wpis w rejestrze. Własne PL objaśnienie jawnie autorskie |
| GAP-06 / A / P1 warunkowe | Wsparcie konkretnych objaśnień/kluczy jeszcze niepowiązane z odczytanymi lokalizacjami; SRC-03/06, L-B02 | Przyjęcie zależnych twierdzeń: link do źródła nie sprawdza zastosowania. Nie trzeba czytać całego Handbook, jeśli nieużywany | C/source reviewer: claim→reguła/wersja/lokalizacja→przesłanka→wniosek. Zamknąć dla wszystkich twierdzeń użytego przekroju |
| GAP-07 / C / P1; do rozpatrzenia przy G1 | Brak rzeczywiście niezależnego review B; L-B04, B04-07, C04-06 | Pełny odbiór bez zastrzeżeń i wymagany review; ten audyt AI nie zamyka luki | Właściciel/kompetentny reviewer odrębny od autora: zakres, osoba, data, rewizja i rozstrzygnięte uwagi. Ewentualne ograniczenie odbioru jawne; nie udawać wykonanej kontroli |
| GAP-08 / C / P1 | Brak niezależnego review C, dopuszczenia i G2; L-B05, C-B03, C-AC-12 | Każde punktowane użycie i rzeczywisty pilot. Nie blokuje napisania draftu po przyjęciu podstawy | Reviewer domeny/języka/scoringu + właściciel: zapis kontroli każdej opcji, korekty i wariantu, zamknięcie krytycznych usterek, dozwolone użycie konkretnej rewizji; potem decyzja G2 |
| GAP-09 / C / P1 | Kanał użycia i podstawa konkretnych zapożyczeń nieustalone; L-B09, SRC-04, C-R02 | Udostępnienie dotkniętych materiałów w tym kanale. Nie jest wymogiem opinii prawnej całego rynku ani kopiowania banku | Właściciel/C/reviewer praw stosownie do potrzeby: określone użycie, pochodzenie, działania, podstawa i atrybucja; sporne zapożyczenie usunąć lub wyjaśnić |
| GAP-10 / B / P1 | Brak meaningful follow-up i niezależnych delayed/rodzin/rezerwy; L-B06/07, C-R05 | Pełną remediację, nowy pomiar i późniejszą próbę. Znana praktyka/lektura nadal możliwa po dopuszczeniu | C + reviewer: rzeczywiste warianty, argument różnicy, porównanie rodzin, przydział faz i kontrola przecieków per osoba przed ekspozycją |
| GAP-11 / B / P1 | Rubryki i źródło oceny otwartych prób nieopracowane, P-FU nieostateczne; L-B08, B03-P P4 | Ocena rozumowania i pełny walkthrough; samoocena nie zastępuje niezależnej oceny | C + reviewer: rubryka, odpowiedzi poprawne/graniczne/krytycznie błędne, oceniający i zasady interpretacji. Doprecyzować przesłanki przed użyciem |
| GAP-12 / C / P1 | Brak wykonanego G3 na dopuszczonej treści; R-K03, C04-09 | Odbiór przepływów i G4: dokument definiuje zachowanie, ale nie poświadcza wykonania | Prowadzący walidację + właściciel: zaakceptowany protokół, przejścia A/P/K, negatywne przypadki, korekta, powrót, symulacja delayed i wynik review; uczestnicy określeni jawnie |
| GAP-13 / C / P1 | Dostępne reprezentacje i neutralne opisy C nieocenione; L-B13, C-AC-13 | Równoważne użycie i ochronę pomiaru w wybranym przekroju | C/reviewer: etykiety/wiersze/alternatywy bez klucza; później D/implementacja sprawdzają klawiaturę, czytnik i fokus. Nie twierdzić, że audyt WCAG jest już wykonany |
| GAP-14 / D / P1 dla wybranego pilota | Nie zatwierdzono konkretnej operacyjnej polityki użytych hipotez; F12/F15, B-DEC-11, C04-09 | Powtarzalny eksperyment/pilot, jeśli opiera się na kalendarzu i agregacji; nie podstawowe znaczenie punktów | Właściciel + walidacja: wybrane okna powrotu, reguły doboru/remisu i opis dowodów dla scope, jawne hipotezy. Można stosować opis faktów bez automatycznej etykiety mastery |
| GAP-15 / E / P3 teraz; wymagane do realizacji wybranego scope | Szczegółowe flow/ekrany/nawigacja, zachowanie komponentów, komunikaty/stany, styl/design system, responsywność i priorytety wydania celowo nieopracowane | Nie blokuje rozpoczęcia rozmowy D. Konkretne decyzje będą potrzebne w zakresie zatwierdzonego handoffu GAP-03 | Przyszły D + właściciel: spójna specyfikacja realizacji na bazie FR/UC/FD/B/C; żadnego nowego projektu w R03 |
| GAP-16 / F / P1 dla G4 | Brak złożonego pakietu przekazania oraz pozytywnych/negatywnych danych referencyjnych konkretnego C; START §5/6, B02/B03 | Wykonanie edukacyjnego scope bez domysłów. Przypadki B są ilustracjami, nie dopuszczonym datasetem | TPM/D/C/walidacja: scope, baseline, zaakceptowane B, dopuszczone reprezentatywne treści, scenariusze/AC, ograniczenia, statusy i protokoły G1–3, wyłączenia i decyzja G4 |
| GAP-17 / A+B / P2 | Brak pełnej operacjonalizacji 70 EO, całego foundational i pełnego banku/form; L-B03, S-BP F14 | Wyłącznie deklarację pełnego przygotowania Level 2; nie ograniczony pilot | C + reviewer zakresu: pełny audyt czynności/terminów, materiały, adekwatne zadania/rodziny i formy; liczby wynikają z pokrycia, nie celu 375–415 |
| GAP-18 / C / P2 | Brak potwierdzenia konkretnej rezerwacji, pełnego profilu egzaminu i aktualizacji operacyjnych; L-B12, SRC-07 | Obietnicę zgodności z konkretnym egzaminem i wydanie pełnego produktu; nie tematyczny pilot bez takiej obietnicy | Właściciel/source reviewer: potwierdzenie organizatora wtedy, gdy potrzebne, i przegląd wersji przed wydaniem; bez automatyzacji niewymaganej w zadaniu |
| GAP-19 / C / P3 dla implementacji; wymagane przed twierdzeniem o skuteczności | Brak danych uczniów, trafności sond, kalibracji i prognozy zdania; L-B10/11, F15 | Twierdzenia empiryczne, automatyczną diagnozę i prognostykę; nie poprawny mały korpus ani techniczną implementację jego reguł | Prowadzący badanie: osobny rzeczywisty pilot po G2/G3, znane warunki i opóźnienia. Wynik niepewny raportować; nie wymagać statystycznej kalibracji przed małym pilotem |
| GAP-20 / A / P3 | Nieaktualny routing START i mylące same nazwy; R-K01/07 | Bezpośrednio nic przy komplecie wejść tego audytu; zwiększa ryzyko przyszłego pominięcia B/C | Redaktor + właściciel: mała aktualizacja mapy aktywnej wiedzy i link do przyjętego obrazu stanu. Oryginały zachować |

**Świadomie nierozwiązywalna całkowicie niepewność:** aplikacja nie wykryje każdej nauki/pomocy poza nią. B01-10 i FR-018/020 już wymagają jawnego ograniczenia i deklaracji. Nie dodajemy blokera „udowodnić brak wszelkiej pomocy zewnętrznej” ani obowiązku zebrania rzeczywistych danych uczniów przed implementacją rejestrowania aktywności. Syntetyczne historie wystarczą do testowania reguł; empiryczne twierdzenia wymagają później prawdziwych danych.

### 7.1. Rzeczywiste blokery według następnego kroku

| Następna czynność | Co ją rzeczywiście zatrzymuje teraz |
|---|---|
| Analiza źródeł / przygotowanie terminologii | Brak globalnego blokera; używać jawnych zakresów dostępu |
| Wznowienie authoringu C | GAP-01: nieprzyjęta rewizja/zakres B; przed startem także ustalenie ścieżki review i użycia według B04-06 |
| Osobna rozmowa D | Brak merytorycznego blokera rozpoczęcia; wymagane jawne warunki i nierozstrzygnięte B/C, patrz R03 |
| Punktowane użycie edukacyjne / G2 | GAP-02 oraz krytyczne warunki jakości właściwego użycia: źródła, klucze, prawa, review i dopuszczenie |
| G3 / odroczony pomiar | Brak kompletnego C/rezerwy i protokołu wykonania; nie zastępować ich B03 ani zmianą syntetycznej daty |
| Handoff edukacyjny / G4 | GAP-01/02/03, domknięcie właściwych G1–G3 i pakietu GAP-16 |

## 8. Dwa rodzaje gotowości i cztery poziomy implementacji

### 8.1. Rozmowa Application Design — TAK, WARUNKOWO

Można rozpocząć po odrębnym zleceniu właściciela, zanim C będzie kompletne. Obecny audyt takiej rozmowy nie realizuje. Wiążące są: cel/fazy S-START, S-PED, zachowania S-BP F01/F05–12/F14/F16 i obowiązki S-FTC F13. S-DR jest uzasadnieniem; nie przywraca historycznego automatu readiness. B01–04 są obowiązkowym materiałem do przeczytania, lecz ich nowe decyzje są warunkowe do G1. C01–04 pokazują ograniczenia, standard proponowany i brak korpusu.

Przed pełnym C można rozstrzygać organizację doświadczenia, nawigację, styl, interakcje i kandydatów scope w granicach A2. Tymczasowe dane trzeba oznaczyć jako syntetyczne/ilustracyjne. Nie nadawać im oficjalnych kluczy ani statusu zatwierdzonego korpusu. Nie uzależniać pętli od globalnego grafu, wyszukiwarki, confidence, pełnego mocku czy zaawansowanej adaptacji. Finalne przyjęcie flow zależnego od B/C może wymagać korekty po G1/G2; jawnie śledzić tę zależność.

### 8.2. Programming Agent Handoff — oceny odrębne

| Poziom | Werdykt teraz | Minimalny warunek przejścia |
|---|---|---|
| 1. Prototypowanie techniczne | **Możliwe warunkowo jako osobne zadanie; brak bieżącego mandatu wykonania** | Zlecony, wąski cel wykonalności, ograniczony scope i jawnie syntetyczne dane. Brak obietnicy poprawnego korpusu/uczenia; nie nazywać tego G4 |
| 2. Implementacja pierwszego zakresu edukacyjnego | **NIE — jeszcze niegotowe** | Przyjęta rewizja/zakres B, reprezentatywny realny C spełniający warunki użycia, G2/G3 w wymaganym zakresie, przyjęte rezultaty D, pakiet wejść i decyzja G4 |
| 3. Pilot z rzeczywistą treścią | **NIE** | Zrecenzowany/dopuszczony C, chronione rodziny/fazy, ocena odpowiedzi, protokół, G2/G3; jeśli przez aplikację — także wykonany i sprawdzony przyrost. Pilot może wcześniej odbyć się bez aplikacji |
| 4. Pełny produkt egzaminacyjny | **NIE; poza obecnym przyrostem** | Level 2: pełny zakres i foundational, adekwatne L3, redakcja/wersje, formy/rezerwy i warunki, wyniki właściwej walidacji. Odrębny audyt rozszerzenia; nadal bez prognozy zdania bez walidacji prognostycznej |

Nie ma podstaw, by wymagać całego banku 70 EO przed poziomem 2. Nie ma też podstaw, by samą rozmowę o stylu lub uruchomienie demonstratora utożsamić z poziomem 2 albo 3.

## 9. Najkrótszy racjonalny plan domknięcia

Poniższe działania są rekomendacją audytu, nie nowym zatwierdzonym backlogiem. Nie tworzą nowej fazy badawczej. D może toczyć się równolegle z uzupełnieniem C po osobnym zleceniu; wyników implementacji i produkcji treści nie wykonujemy automatycznie.

| ID / kiedy i odpowiedzialność | Zadanie i powód / źródłowy brak | Wymagane wejścia | Konkretny wynik i kryterium odbioru | Zależności / priorytet / bramka |
|---|---|---|---|---|
| NEXT-01 — teraz; właściciel + reviewer B | Rozpatrzyć B-DEC-01–16, K-04 i L-B04; ustalić oraz wykonać wymagany review i decyzję przyjęcia podstawy, zamiast ponawiać projekt B | B01–04, F09/F13, R01/R02 | Raport kontroli z rozstrzygniętymi uwagami oraz decyzja o dokładnej rewizji/zakresie. Oddzielić przyjęcie kontraktu od dopuszczenia ilustracji; ewentualny ograniczony odbiór nazwany | GAP-01/07; P0 dla wznowienia C; G1. Nie domniemywać odstąpienia od review |
| NEXT-02 — teraz; właściciel + C + reviewer | Wskazać najbliższy mały przekrój, kanał użycia i ścieżkę recenzji; uniknąć rozszerzenia do 84 pozycji | B04-05/06, C01, C04-09 | Przyjęte przeznaczenie, granice kryteriów i odpowiedzialny reviewer; plan roli delayed przed ekspozycją. Nie musi przesądzać pełnego modelu biznesowego produktu | NEXT-01 w zakresie podstawy; GAP-04/08/09/10; P1, wymagane przed właściwym C; G2 |
| NEXT-03 — uzupełnienie B/C; C, B tylko przy zgłoszonej niejednoznaczności | Domknąć użyte EN/PL i claim-source trace, dopasować C02 do przyjętego B, uzasadnić kryteria i wariant K | Przyjęte B, C01–02, oficjalne użyte sekcje | Kontrolowana terminologia i operacjonalizacja wycinka; każda decyzja ma zakres/źródło, T-11/12 jawny status; brak fikcyjnego EO lub L3 | NEXT-01/02; GAP-04–06; P1; G2 |
| NEXT-04 — uzupełnienie C; autor | Zastąpić manifest C03 rzeczywistymi pakietami, ponieważ sam standard nie obsłuży funkcji | NEXT-03, K1–K5/K7, C-AC | 3 oryginalne A/P/K z objaśnieniami, wszystkimi rationale, korektą, follow-up, rubrykami i odpowiednimi delayed/rodzinami; instancje relacji i manifest. Kontrola autora wykazuje kompletność, nie niezależność | NEXT-01–03; GAP-02/10/11/13; P0 dla handoffu, P1 dla elementów pilota; G2 |
| NEXT-05 — rzeczywiście niezależna kontrola; kompetentny reviewer + właściciel | Rozwiązać pakiety bez sugestii autora, sprawdzić każdą opcję/EO/scoring/PL/EN/prawa/reprezentacje/rodziny i dopuścić użycie | Konkretne rewizje C01–03, QG, C-AC-01–14, protokół rezerwy | Tożsamość, data, zakres, uwagi/rozstrzygnięcia, brak krytycznych usterek; każda pozycja dopuszczona do określonej roli. Decyzja właściciela o G2 po dowodach | NEXT-04; GAP-08–11/13; P1; G2. Autor/AI nie poświadcza sobie niezależności |
| NEXT-06 — walidacja; prowadzący + właściciel | Rozstrzygnąć R-K03 i przeprowadzić konkretny walkthrough; nie mylić dokumentowego wyniku z retencją | Przyjęte C, FR/AC, B03 E01–20 jako wzorzec, przyjęty zakres G3 | Raport trzech przejść A/P/K, korekty/powrotu, przypadków negatywnych i próby delayed na osi czasu; obserwacje uczestników, jeśli w protokole. Krytyczne usterki zamknięte z ponownym review; decyzja G3 | NEXT-05; GAP-12/14; P1; G3 |
| NEXT-07 — odrębna rozmowa D; projektant + właściciel | Zaprojektować realizację i priorytety pierwszego przyrostu z zachowaniem istniejących reguł | R03, obowiązkowe Sources, statusy G1/G2 aktualizowane w trakcie | Przyjęty scope, mapowanie FR/UC/AC, szczegóły flow/UI/stylu i jawny rejestr zależności/zmian; bez ponownego projektowania pedagogiki | Rozpoczęcie może nastąpić teraz; finalizacja zależnych części po NEXT-01/05/06; GAP-03/15; P3 teraz, wymagane do G4 |
| NEXT-08 — handoff; TPM + D/C/walidacja + właściciel | Złożyć i zatwierdzić konkretne wejście dla programisty; domena nie jest jego zadaniem do odgadnięcia | Wyniki NEXT-01–07 w stosownym zakresie | Scope/FR/AC, przyjęte B, dopuszczone referencyjne C, dane/scenariusze pozytywne i negatywne, flow/UI, statusy/prawa, reguły ekspozycji/rewizji, ograniczenia i odpowiedzialności; decyzja G4. Dopiero przyszły agent dobiera rozwiązania techniczne w otrzymanym mandacie | GAP-03/16; P0 dla rozpoczęcia handoffu edukacyjnego; G4 |
| NEXT-09 — porządek po odbiorze R; redaktor Sources | Uaktualnić istniejący START, aby następny agent odnalazł aktualne kontrakty i statusy | Przyjęte R i decyzje właściciela | Krótka aktualna mapa, faza i wersje; stare dokumenty zachowane; bez zastępowania szczegółowych kontraktów R01 | GAP-20; P3, można wykonać obok innych działań |
| NEXT-10 — po pierwszym przekroju; właściciel/C/badanie | Rozszerzać korpus i badać lokalne hipotezy dopiero w potrzebnym zakresie | Wyniki małego walkthrough/pilota, audyt nowych EO/rodzin | Wybrany empiryczny pilot lub rozszerzenie zakresu z uczciwym statusem; pełny produkt wymaga osobnego odbioru | GAP-17–19; P2/P3; poza pierwszym handoffem |

**Ścieżka minimalna:** decyzja o podstawie B i review → mały realny C → odrębna kontrola i G2 → walkthrough G3 → zaakceptowany projekt przyrostu D + pakiet i G4. Rozmowa D może rozpocząć się wcześniej równolegle; nie musi czekać na pełne FL ani pełny pilot 12 komórek.

## 10. Decyzje właściciela — tylko rzeczywiście otwarte

1. **Rewizja/zakres B i sposób zamknięcia L-B04:** przyjąć, przyjąć wskazany wycinek z warunkami albo zwrócić konkretne uwagi. Rozpatrzyć wszystkie B-DEC, zwłaszcza B-DEC-15/K-04. Ten audyt nie jest niezależnym review domenowym i nie podejmuje decyzji G1.
2. **Pierwsze użycie C i ścieżka review:** np. ograniczony pilot edukacyjny jako rekomendacja, ale nie przyjęty fakt; wskazać odpowiedzialność i dozwolony kanał. Nie zakładać publikacji komercyjnej.
3. **Zakres/protokół pomiaru i G3:** wybrane kryteria, role rezerwy/faz przed ekspozycją, metoda oceny otwartych odpowiedzi, stosowane parametry pilota i udział uczestników w walkthrough. Liczby 84/24/36 nie są gotową decyzją.
4. **Późniejsze przyjęcie G2/G3 oraz przyrostu D/G4:** dopiero po konkretnych wynikach. Nie ma jeszcze gotowego projektu D do zatwierdzenia.
5. **Przyjęcie R01–R03 jako aktualnego obrazu stanu oraz aktualizacja routera:** nie zmienia samo w sobie akceptacji B/C.

Nie potrzeba obecnie decyzji o stosie, bazie danych, hostingu, pełnej wielkości banku, globalnym grafie, progach mastery ani uruchomienia sześciu eksperymentów. Zasady A2 już rozstrzygnięte nie wymagają ponownego głosowania.

## 11. Krytyczny self-review i granice odbioru raportu

| Kryterium z bieżącego zlecenia | Wynik kontroli artefaktów R |
|---|---|
| 13 Sources i rzeczywiste statusy | R01 §3 i R02 §2–3; wszystkie uwzględnione; nie przyjęto statusu z samej nazwy |
| Istnienie/kompletność/review/akceptacja/użycie | Odrębne osie, jawne braki dowodów; A2 baseline z bieżącego zlecenia odróżniony od osobnego historycznego aktu |
| G1 otwarte, C03 zbadane | Jawnie BLOCKED; 0/3; manifest nie udaje korpusu |
| B03 ≠ C i scoring ≠ item validity | Oddzielone w R01 §7–8 i R02 §5–6 |
| Pełny ślad FR/UC/FD | 38 kart, 18 UC i 28 FD w R01; kryteria semantyczne odróżnione od AC produktu i wykonanych testów |
| Zależności C od B | G1 lub jawnie przyjęty wycinek przed authoringiem; C02 dopasować po przyjęciu rewizji; SHA zgodne |
| Pilot ≠ pełny produkt; D ≠ programowanie | Oddzielne werdykty; brak wymogu ukończenia 70 EO przed ograniczonym przyrostem |
| Brak przedwczesnego UX/technologii | R03 zawiera wejście i granice rozmowy; nie ekrany, design system, stack ani backlog implementacji |
| Blockery z właścicielem i testem zamknięcia | GAP-01/02/03 oraz właściwe warunki jakości; plan NEXT wiąże luki, wejścia, wynik i bramki |
| Propozycje ≠ accepted | B-DEC/C02/R pozostają propozycjami; R nie zamyka G1–G4 |
| R03 umożliwia kontynuację | Dokładne pliki, FR/UC/FD, zakresy, statusy i wymagania późniejszego handoffu |

To **self-review AI** trzech wynikowych dokumentów. Nie zamyka L-B04 ani recenzji C. Nie przeprowadzono badań uczniów ani pełnego nowego audytu licencji. Raport może służyć sprawdzeniu stanu i decyzjom; nie jest dopuszczeniem nieistniejącego materiału do nauki.

## 12. Identyfikacja dokładnych kopii Sources

Poniższe SHA-256 pochodzą z bajtów audytowanych plików. Umożliwiają sprawdzenie rewizji, nie poświadczają poprawności lub akceptacji. Prefiksy roboczych kopii pominięto; użyto oryginalnych nazw Sources.

| Dokładna nazwa | SHA-256 |
|---|---|
| `00_IREB_CPRE_START.md` | `c064af7a19404629b1ce0a4afcfb75e4d31fed6952eff4b902fff40d2f1a4587` |
| `IREB_CPRE_Deep_Research_PL_2026-11.md` | `04d8dd6c237fbacf4daedfffe41034279e595714c5db4aab23a6371fa0eff9ed` |
| `IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md` | `43e82c6915aaae12f735ed45d4b341186f6cefa8d93dab140a4b1099644122b8` |
| `IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md` | `d1cd3831a6aa80c6c899b38ae02ea46737b63e026fa155e7f6612ea5e5d95210` |
| `00_IREB_CPRE_Fundament_pedagogiczny.md` | `12643d8e65e495a9fac2aaab46c96b14da6b25c2a454e9859a66c529e57b68cd` |
| `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md` | `8a6af1f2cfd302a80260b16bf0eda62a5f063817594d9636db9fd6310f79cf5e` |
| `B03_IREB_CPRE_Semantic_Pilot_APK_v0.1.md` | `bfee0bde967fe4c837ee204921d1a00bcb54e955f7856084eac0496f8349c052` |
| `B02_IREB_CPRE_FR_Traceability_v0.1.md` | `fa45a4156b20a37903dfe533b3695e6235120db89080272efda1588fda475109` |
| `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.1.md` | `52a3dfde3d0f8665da77bb25266342a355e60c57dad3ee02133e5d6de61746f7` |
| `C04_IREB_CPRE_Content_QA_and_Handoff_v0.1.md` | `91c37ff2b554fe162c0102a54b2b14245ad6dd68f91df23b649709ad0185cc53` |
| `C03_IREB_CPRE_Pilot_Content_APK_v0.1.md` | `b92d740f4e58b9dd45b323eefa74157da14d93fb6522db70d8c7626f000326f9` |
| `C02_IREB_CPRE_Terminology_and_Authoring_Standard_v0.1.md` | `8c8393f5863e8dbe6e50dd60e1046088ee13e197ba2af6d47a0ef0c632c4dab3` |
| `C01_IREB_CPRE_Source_and_Licensing_Register_v0.1.md` | `8606f70a06c364499b09853f9873c39816f3d4e156bbbf4c83b82200b20f5155` |
