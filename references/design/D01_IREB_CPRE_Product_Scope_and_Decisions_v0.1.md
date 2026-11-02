# D01 — Zakres produktu i decyzje

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 2 listopada 2026 · Europe/Warsaw  
**Wersja:** v0.1  
**Status:** projekt do oceny właściciela; G2/G3/G4 otwarte. G1 przyjęte według R06.  
**Autor:** Agent D / AI; kontrola autorska, bez badania użytkowników.

## 1. Rekomendowany produkt i aktualny mandat

**„Skupiona sesja”**: jeden cel i jeden obszar pracy; krótkie wprowadzenie albo wejście od zadania; wynik i decydująca zasada; wiedza otwierana kontekstowo; inny przypadek; powrót do zachowanej odpowiedzi; późniejsza kontrola. Nawigacja główna ma dwa miejsca: **Sesja** oraz **Zakres i dowody**. Sprawdzenie rozpoczyna się z sesji, po poznaniu warunków. Czytanie, korekta i powtórka są czynnościami w Nauce.

Właściciel wskazał w tej rozmowie pierwszy obraz „Skupionej sesji” jako najlepszy kierunek. To potwierdzenie preferencji organizacji. Nie utożsamiamy go z akceptacją całej specyfikacji D, C ani G4. Drugi wariant pozostaje materiałem porównawczym.

**Założenie produktu D-ASM-01:** responsywny interfejs webowy na desktopie i telefonie, PL. Nie wybrano frameworka, backendu, API ani modelu przechowywania. Technika użyta do lokalnego prototypu jest jednorazowym narzędziem projektowym, bez decyzji o stosie przyszłej aplikacji.

**FACT o wejściach:** G1 zamknięte 2.11.2026 dla B01–B04 v0.2 według R06. Dostępne C01–C04 v0.1 są przygotowaniem sprzed G1, a C03 zawiera manifest 0/3 pakietów, 0 follow-up i 0 rezerwy. R06 zastępuje ich stary opis otwartego G1, lecz nie tworzy brakujących treści. B03 ma wyłącznie rolę ilustracyjną. G2, G3 i G4 pozostają otwarte.

## 2. Pierwszy przyrost — najmniejszy spójny zakres

Pierwszy przyrost obejmuje trzy częściowe rozróżnienia z rzeczywistego, później przyjętego C: kontekst/granica (A), rodzaje wymagań (P), dokumentowanie powiązań (K). Każda ścieżka wymaga działającej pętli i jawnego braku tam, gdzie korpus nie wystarcza. Nie deklarujemy pełnego EO2.2.2, EO1.1.2, EO6.6 ani wykonania EO4.1.1 L3 na podstawie tych ilustracji.

| Objęte zakresem | Warunek działania |
|---|---|
| Rozpoczęcie, wznowienie, wybór innego celu | Jedna rekomendacja z przesłanką, bez obowiązkowej diagnozy lub daty egzaminu |
| Materiał i A/P/K | Zatwierdzone K1/K2 dla zamierzonego użycia; pierwsza czynność nie wymaga przeglądania całego programu |
| Feedback i kontekstowa wiedza | Pełne rationale każdej opcji/wiersza; potrzebne relacje z własnym uzasadnieniem |
| Celowana korekta i follow-up | To samo kryterium, rzeczywista zmiana zadania, jawne źródło oceny i wyjście |
| Późniejsza kontrola | Odrębna aktywność, rzeczywisty odstęp od kontaktu z kryterium, kwalifikacja nowości sprzed ekspozycji |
| Test tematu bez limitu | K6/U-TOPIC, zadeklarowany wycinek, liczba zadań/punktów, nowość i warunki; feedback po finalizacji całości |
| Zakres i dowody | Fakty wykonania z warunkami, osobne braki materiału i dowodów osoby |
| Jakość, zgłoszenia, dostępność | Ręczna bramka treści i powtarzalne testy zachowania produktu |

Nie ustalamy arbitralnej liczby pytań jako definicji kompletności. Dla każdej pętli potrzebne są co najmniej odpowiednie okazje początkowej próby, kontroli po korekcie i późniejszego sprawdzenia. Rezerwa testu tematu i delayed musi mieć jawny przydział przed ekspozycją; ponowne użycie tej samej rodziny nie tworzy drugiego nieznanego pomiaru. To ograniczenie zasobu, nie naukowe minimum liczby itemów. Budżet 60+24 oraz 9 EO+3 fragmenty nie jest zamówieniem tego przyrostu.

**K-04:** zachowano ilustracyjne K z czterema wierszami, m=4, w=2 oraz przykładowym wynikiem 1/2. Wiersz 4 jest pomocniczy, bez fikcyjnego EO. Cała ilustracja pozostaje poza U-RESERVED CPRE i U-MOCK. W prototypie może pokazywać zachowanie interfejsu; do rzeczywistej formy pomiarowej C ma dostarczyć zgodną pozycję. Samo ukrycie etykiety nie rozwiązuje ograniczenia.

## 3. Macierz 38 FR

To **zakres projektowany dla pierwszego przyrostu**, a nie oświadczenie o wykonaniu 38 funkcji aplikacji. R = realizowane w granicach wycinka; P = częściowo, z granicą poniżej; L = późniejszy przyrost; Z = zależne od odrębnej decyzji. W każdym R/P zależne użycie treści uruchamia się dopiero po odpowiednim dopuszczeniu C. Zakres prototypu jest odrębnie opisany w D04.

Priorytety odziedziczone: FR-030 **Validate**, FR-031 **Later**, pozostałe **Essential**, z etapami Level 1/2 wskazanymi w Blueprint F09/F14. Experimental pozostaje w FD-20/21 i nie jest nowym wymaganiem FR. Częściowość zakresu nie obniża priorytetu Essential.

| FR / tytuł z F09 | Priorytet | Zakres | Realizacja i jawna granica | Ekrany / UC | Zależność |
|---|---|---|---|---|---|
| FR-001 — Orientacja i warunki przygotowania | Essential | P | Orientacja, język PL, zakres i dwa wejścia. Profile pełnego mocku 75/90 minut dopiero Level 2. | S01; UC-01 | Nota i profil wydania K0; nie data egzaminu. |
| FR-002 — Krótki wybór punktu startu | Essential | P | Materiał albo pytanie. Brak obowiązkowej diagnozy; fakultatywna diagnoza wymaga osobnej walidacji i sond. | S01/S02; UC-01/03 | Działające K1/K2; brak diagnozy nie blokuje startu. |
| FR-003 — Jeden następny krok z wyjaśnieniem | Essential | R | Jedna uzasadniona rekomendacja, zmiana celu i wyjście. | S01/S03; UC-16/18 | Dostępność i fakty historii, bez domyślnego mastery. |
| FR-004 — Pokrycie celów i składowych | Essential | P | Kryteria i terminy wybranego przekroju; jawny brak audytu całego FL. | S05; UC-01/18 | R02/R05/R06 i audyt zakresu C; pełny FL później. |
| FR-005 — Krótkie objaśnienie z rozwinięciem | Essential | R | Krótka nota, warunek i przykład, opcjonalne szczegóły. | S03/S04; UC-02 | Dopuszczone fragmenty K1, oznaczona parafraza. |
| FR-006 — Retrieval i zastosowanie zgodne z EO | Essential | P | A/P/K oraz prosta wypowiedź i rubryka z jawną samooceną. Brak pełnego pomiaru EO4.1.1 L3 w tym przekroju. | S03; UC-02/03 | Zadanie właściwej czynności i źródło oceny; bez automatycznej oceny swobodnego tekstu. |
| FR-007 — Pytanie A | Essential | R | A: pojedynczy wybór, zmiana, wyczyszczenie, oddanie pustej odpowiedzi. | S03/S06; UC-03/08 | K2, 4–5 opcji, klucz i waga. |
| FR-008 — Pytanie P i częściowe punkty | Essential | R | P: jawne k, licznik, niedobór i nadmiar dozwolone, częściowy wynik. | S03/S06; UC-11 | K2, pełne rationale także pominiętej poprawnej opcji. |
| FR-009 — Pytanie K i decyzje stwierdzeń | Essential | R | K: niezależna para Prawda/Fałsz w wierszu, stan pusty i wyczyszczenie, zmienne m. | S03/S06; UC-11 | Każdy wiersz z kluczem i rationale. K-04 pozostaje. |
| FR-010 — Zatwierdzenie i historia prób | Essential | R | Wyraźny submit w Nauce; w Sprawdzeniu finalizacja całości. Historia niezmienna po feedbacku. | S03/S06; UC-03/13 | Rewizja i odpowiedzi oddane, momenty ujawnień. |
| FR-011 — Warstwowy feedback | Essential | R | Krótki wynik i zasada; błędne/pominięte poprawne decyzje rozwinięte, pozostałe na żądanie. | S03; UC-04/11/12 | Pełne rationale dostępne redakcyjnie, niezależnie od otwarcia. |
| FR-012 — Od opcji do właściwego rozróżnienia | Essential | R | Nazwany link przy konkretnej opcji/wierszu do właściwego fragmentu. | S03/S04; UC-04/14 | R08/R09 i potrzebne R10/R11; samowystarczalne rationale może nie mieć linku. |
| FR-013 — Odwracalna eksploracja i powrót | Essential | R | Jedna kotwica źródłowa, stos gałęzi, powrót krokowy i bezpośredni z fokusem. | S04; UC-14 | K7/R26; item, rewizja, odpowiedź, wynik, ujawnienia i miejsce. |
| FR-014 — Porównanie i potrzebny prerequisite | Essential | R | Porównanie po wspólnej osi; pomijalna podstawa tylko z uzasadnieniem dla czynności. | S04; UC-05/06 | K3; niezweryfikowany prerequisite nie jest bramką. |
| FR-015 — Hipoteza pomyłki i jej sprawdzenie | Essential | R | Hipoteza z alternatywami i sondą wyłącznie gdy C ją zapewnia. W przeciwnym razie neutralna korekta. | S03/S04; UC-04/05 | R16/R17 i timing; brak sondy blokuje diagnozę, nie feedback. |
| FR-016 — Krótka remediacja bez nieskończonej pętli | Essential | R | Krótka korekta, inny przypadek i możliwość odłożenia. Po drugim nieudanym follow-up zmiana wsparcia/przerwa. | S03; UC-04/05 | K4 i właściwy follow-up; początkowy błąd nie jest follow-up. |
| FR-017 — Nowy wariant do weryfikacji | Essential | R | Znaczący follow-up, jawne rozróżnienie nowej sytuacji i nowej rodziny. Brak wariantu ma osobny stan. | S03/S07; UC-15 | R19/R21; bez zatwierdzonej nowości brak obietnicy transferu. |
| FR-018 — Pomoc i znajomość a status dowodu | Essential | R | Pomoc i znajomość oddzielnie; dobrowolne deklaracje, bez kary punktowej. | S03/S05/S06; UC-13/15 | K5/K7; neutralny słownik i technologie dostępu nie są pomocą RE. |
| FR-019 — Ochrona rezerwy i historia ekspozycji | Essential | R | Kontrola ekspozycji per osoba przed startem, chroniona pula poza eksploracją. | S06; UC-17 | R20–22 i historia; prototyp nie zawiera rzeczywistej rezerwy. |
| FR-020 — Powtórka z rzeczywistym odstępem | Essential | R | Późniejsza kontrola przed ponownym objaśnieniem; dwa odstępy per kryterium. | S01/S05; UC-07/16 | Nowa aktywność C i realny czas; ≥24 h to polityka pilota. |
| FR-021 — Równowaga nowej nauki i powtórek | Essential | R | Po gałęzi ponowny wybór między powrotem, brakującym zakresem i nową realizacją. | S01/S03; UC-18 | Przesłanka i dostępność; brak automatycznego długu do wyzerowania. |
| FR-022 — Profil dowodów wiedzy | Essential | R | Lista kwalifikowanych obserwacji, pięć kategorii bez drabiny i propagacji na sąsiadów. | S05; UC-07/15/18 | K7 i konkretne kryteria; samoocena osobno. |
| FR-023 — Zrozumiały postęp i jawne braki | Essential | R | Zakres materiału, stan dowodów i potrzeba kontroli osobno. Źródło etykiety na żądanie. | S05; UC-16/18 | Jawne mianowniki oraz osobne braki korpusu i ucznia. |
| FR-024 — Ostrożny profil gotowości | Essential | P | Ograniczenia profilu w badanym wycinku. Pełny profil FL, czas i porównywalne mocki dopiero Level 2. | S05/S06; UC-10/15 | Bez p(zdania), mastery i werdyktu całego FL. |
| FR-025 — Warunki uruchomienia sprawdzenia | Essential | P | Dopuszczenie testu tematu bez limitu. Pełny blueprint FL i timed mock później. | S06; UC-08/17 | K6/U-TOPIC, zatwierdzona forma i kwalifikacja osoby. |
| FR-026 — Przebieg sprawdzenia bez pomocy | Essential | P | Wspólny kontrakt Sprawdzenia, flagi, edycja i finalizacja całości. Brak zegara pełnego mocku. | S06; UC-08 | Widoczność zgodna z B; warunek neutralnego słownika z profilu. |
| FR-027 — Przerwanie i przejście w naukę | Essential | P | Test bez limitu: przerwa i ta sama próba; nieodwracalna konwersja całej próby. Bieg zegara mocku później. | S01/S06; UC-08/13/16 | K7; naruszeń i ekspozycji nie resetować. |
| FR-028 — Wynik i plan po sprawdzeniu | Essential | P | Suma punktów, procent punktów i review testu tematu, jeden kolejny krok. Pełny mock później. | S06; UC-09/11 | Zamknięta wersja, pełne rationale i zakres; bez automatycznej diagnozy. |
| FR-029 — Uczenie formatu oddzielnie od domeny | Essential | R | Instrukcja przy formacie i krótka neutralna demonstracja punktacji, pomijalna. | S03/S06; UC-01/11 | Materiały formatu C; ćwiczenie formatu nie zalicza EO RE. |
| FR-030 — Opcjonalna deklaracja pewności | Validate | Z | Fakultatywne Validate. Nieaktywne w bazowej sesji; właściciel może zlecić oddzielny eksperyment przed feedbackiem. | S03 (gałąź do walidacji); UC-12 | Decyzja o badaniu; brak deklaracji neutralny. Nie zmieniono priorytetu na Later. |
| FR-031 — Znajdowanie wiedzy PL/EN | Later / Level 2 | L | Globalne wyszukiwanie PL/EN w Level 2. Lokalne terminy i linki już w FR-005/012/037. | S04 (kontekst); UC-06/14 | Kontrolowany indeks i ochrona rezerwy przy rozszerzeniu. |
| FR-032 — Wznowienie po przerwie | Essential | R | Zapis i wznowienie miejsca bez nowej próby, także przerwanego review. | S01/S03/S06; UC-14/16 | Rewizja i status treści przy odtworzeniu; bez fikcyjnej historii. |
| FR-033 — Zachowanie przy brakach korpusu | Essential | R | Osobne stany braków, wariantu, relacji i danych; bez generatywnego uzupełniania. | S07; UC-14/17/18 | LUKA-01–11; krytyczny brak w K2 wstrzymuje cały item. |
| FR-034 — Minimalna bramka publikacji treści | Essential | R | Ręczny powtarzalny publish gate i manifest użycia. Bez budowy CMS. | Proces D05; wszystkie UC | QG/U-* i odrębne review C; UI nie zatwierdza korpusu. |
| FR-035 — Wątpliwość, wycofanie i korekta dowodów | Essential | R | Uwaga z kontekstem, status sporu, wycofanie, jawna korekta oceny i wpływu. | S07/S05; UC-03/09/17 | Review rozstrzyga; zgłoszenie samo nie zmienia klucza. |
| FR-036 — Dostępna obsługa interakcji | Essential | R | Klawiatura, semantyczne grupy, tekstowe wyniki, fokus, reflow i równoważne treści. | wszystkie S; wszystkie UC | WCAG 2.2 AA jako cel; wymagane późniejsze testy produktu i AT. |
| FR-037 — Terminologia i znaczenie egzaminacyjne | Essential | R | Preferowane PL/EN w lokalnym materiale; jawny status parafrazy. | S03/S04; UC-01/05/15 | C02 i review użytych fragmentów; nie pełny inwentarz terminów. |
| FR-038 — Jawny zakres pilota i pełnego przygotowania | Essential | R | Zakres przekroju, częściowe EO, manifest i ograniczenia we wszystkich punktach wyniku. | S01/S05/S06; UC-01/10/18 | Nie deklarować pełnego FL po zamknięciu małego przekroju. |

Każdy wiersz odsyła do **produktowego Acceptance w Blueprint F09 pod tym samym FR**. Pełny tekst tego Acceptance zachowano w D05, dodatek A. B02/AC-001–038 są dodatkową kontrolą semantyki i nie zastępują tych kryteriów. Numeracja S jest lokalną numeracją projektu D02, bez tworzenia nowych FR.

## 4. Decyzje projektowe

Każda D-DEC jest FUNCTIONAL DECISION o realizacji UI, chyba że oznaczono DESIGN HYPOTHESIS. Nie zmienia odziedziczonych FR/FD/B-DEC.

| ID | Decyzja | Uzasadnienie / ślad | Status |
|---|---|---|---|
| D-DEC-01 | Skupiona sesja, jedna kolumna zadania i wiedza na żądanie | FR-003/011–014; FD-01/05/07; mniejsza reorganizacja na telefonie — hipoteza użyteczności | Kierunek wskazany przez właściciela; specyfikacja do review |
| D-DEC-02 | Dwie pozycje nawigacji; Sprawdzenie z sesji | FD-02; brak mnożenia czytania/korekty/powtórek w tryby | Proponowana realizacja |
| D-DEC-03 | Wynik i zasada przed długą analizą opcji | FR-011; domyślnie rozwinięte błędne i pominięte poprawne decyzje | Dawka feedbacku do walidacji |
| D-DEC-04 | Dialog wiedzy z jedną kotwicą, stos treści bez stosu modalnych okien | FR-013/036; R26; logiczny fokus po powrocie | Proponowana realizacja |
| D-DEC-05 | A radio, P checkbox, K osobna radiogrupa w każdym wierszu i wyczyszczenie | FR-007–009; błędny nadmiar P nie jest blokowany kontrolką | Realizacja odziedziczonych reguł |
| D-DEC-06 | Jedno jawne potwierdzenie braków/nadmiaru w Nauce; pełny przegląd przed finalizacją testu | FR-010/026; bez neutralizowania oficjalnego zera za nadmiar | Propozycja UX |
| D-DEC-07 | Wiedza niedostępna w aktywnym i odłożonym Sprawdzeniu; konwersja całej próby przed ujawnieniem | FR-026/027; B-DEC-14; dotyczy także nawigacji, historii i alternatyw | Obowiązek, bez zmiany pedagogiki |
| D-DEC-08 | Po korekcie proponujemy jeden follow-up; po drugim nieudanym kontrolnym zadaniu inną pomoc lub przerwę | FR-016/021; brak automatycznego trzeciego podobnego | Parametr odziedziczony, hipoteza pilota |
| D-DEC-09 | Profil jako fakty i ograniczenia przy kryterium, bez mastery/prognozy | FR-004/022–024; B-DEC-10/11 | Obowiązek |
| D-DEC-10 | Dostępność materiału i wynik osoby mają osobne etykiety | FR-023/033; LUKA-01 vs LUKA-06 | Obowiązek |
| D-DEC-11 | Minimalny publish gate jako proces poza interfejsem ucznia | FR-034/035; bez CMS i technicznych identyfikatorów na ekranie | Propozycja realizacji |
| D-DEC-12 | Brak konta, synchronizacji i backendu w prototypie | Mandat D; demonstracyjny zapis na urządzeniu nie wybiera trwałej architektury | Granica prototypu |
| D-DEC-13 | Bazowy tekst 16 px, spokojna zieleń, oszczędna typografia; kontrolki ≥44 px | FR-036; szczegóły i kontrasty w D03 | Cel projektu, bez deklaracji audytu |

## 5. Rejestr odziedziczonych FD-01–FD-28

Poniższe statusy pochodzą z Blueprint F16; wybór wariantu D nie otwiera ich na nowo.

| FD | Status źródłowy / zachowanie | Realizacja D |
|---|---|---|
| FD-01 Jeden prowadzony tok | ADOPT | S01–S06, odpowiednie D-DEC |
| FD-02 Dwa konteksty | ADOPT Nauka/Sprawdzenie | S01–S06, odpowiednie D-DEC |
| FD-03 Elastyczne wejście | ADOPT; krótka diagnoza TEST | S01–S06, odpowiednie D-DEC |
| FD-04 Pełne pokrycie, nie same tematy | ADOPT | S01–S06, odpowiednie D-DEC |
| FD-05 Zwięzły feedback z rozwinięciem | ADOPT minimum; TEST dawkę | S01–S06, odpowiednie D-DEC |
| FD-06 Opcja do właściwego rozróżnienia | ADOPT lokalnie, TEST korzyść | S01–S06, odpowiednie D-DEC |
| FD-07 Zachowanie pytania i powrotu | ADOPT | S01–S06, odpowiednie D-DEC |
| FD-08 Każdy dystraktor osobnym concept | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-09 Diagnoza z jednego wyboru | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-10 Celowana korekta i nowa próba | ADOPT; dobór TEST | S01–S06, odpowiednie D-DEC |
| FD-11 Tożsamy item jako dowód transferu | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-12 Pomoc i nowość oddzielnie | ADOPT | S01–S06, odpowiednie D-DEC |
| FD-13 Proste powroty | ADOPT; odstępy TEST | S01–S06, odpowiednie D-DEC |
| FD-14 Pięć kategorii dowodów | ADOPT semantykę, TEST język | S01–S06, odpowiednie D-DEC |
| FD-15 Procent mastery / pass probability | REJECT bez empirycznej podstawy | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-16 Trzy mocki ≥80% jako automat | DEFER | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-17 Wierność scoringu A/P/K | ADOPT | S01–S06, odpowiednie D-DEC |
| FD-18 Pełny mock w pilocie tematycznym | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-19 Global graph głównym wejściem | DEFER | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-20 Lokalna aktywna mapa | TEST później | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-21 Zaawansowana adaptacja | DEFER | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-22 Confidence | TEST opcjonalnie | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-23 LLM jako autor autorytatywnej odpowiedzi na żywo | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-24 Redakcja i zgłoszenie błędu | ADOPT minimalne | S01–S06, odpowiednie D-DEC |
| FD-25 Dostępność i terminologia | ADOPT | S01–S06, odpowiednie D-DEC |
| FD-26 Streaki, ranking, XP jako rdzeń | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-27 Własny notatnik, social, marketplace, kursowy CMS | REJECT w tym produkcie | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |
| FD-28 Pełna biblioteka przed pilotem | REJECT | Zachowano wyłączenie lub odroczenie; brak nowego ekranu i zobowiązania implementacyjnego |

## 6. Luki, decyzje właściciela i dalszy krok

| Kwestia | Rekomendacja autora / stan | Kiedy potrzebna decyzja |
|---|---|---|
| Organizacja najważniejszej ścieżki | Właściciel wskazał Skupioną sesję; kontynuacja według tego kierunku | Bez ponownego pytania o wariant |
| Przyjęcie D01–D05 i zakresu pierwszego przyrostu | Konkretny pakiet gotowy do review; nie jest jeszcze zaakceptowany | Po przeglądzie artefaktów |
| Rzeczywiste C i forma testu tematu | 0/3 w dostępnym C03; zespół C dostarcza własne rewizje i review | G2; potem kontrola dopasowania D |
| Protokół G3 | Jawne scenariusze A/P/K, zachowanie powrotu, wyników i symulacja odroczenia; udział ucznia według przyjętego protokołu | Przed wykonaniem G3; nie warunek wcześniejszego G2 |
| Zbieranie pewności / diagnoza startowa | Nieaktywne bazowo; zachowane Validate | Tylko jeśli właściciel zleca eksperyment |
| Techniczne wykonanie ograniczonego przyrostu | Claude Code otrzymuje dopiero zaakceptowany zakres i komplet G1–G3 | G4, odrębny mandat |

Nie wykazano nowej sprzeczności pedagogicznej wymagającej zmiany B. Rozbieżności metadanych są historyczne: otwarte G1 w R03/C zastępuje R06; opis brakujących C03/C04 w START §8 zastępuje bieżący spis 19 dostępnych Sources. Nie nadpisano START, B ani C. Osobna propozycja aktualizacji routera: `D_START_Update_Proposal_v0.1.md`.
