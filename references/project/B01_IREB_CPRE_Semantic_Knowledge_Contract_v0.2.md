# B01 — Semantic Knowledge Contract v0.2

**Projekt:** IREB CPRE Foundation Level Learning System. **Faza:** B — Educational Knowledge Architecture. **Data:** 1 listopada 2026. **Język:** PL z terminologią EN. **Status całego pakietu B01–B04 v0.2: FOR REVIEW — oczekuje decyzji właściciela o G1.**

> **Rewizja v0.2 — korekty po R04:** zachowano reguły i treść v0.1; doprecyzowano flagę przeglądu, neutralny słownik językowy i granice G2/G3 oraz nazwy wierszy K. B01–B04 tworzą jedną rewizję. Wynik ponownej kontroli: `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md`. Wprowadzenie poprawek nie jest akceptacją G1.


**Rola i rezultat:** architekt wiedzy definiuje znaczenie informacji, jej tożsamość, dopuszczalne powiązania i granice interpretacji. Dokument jest kontraktem informacyjnym do odbioru G1, nie projektem przechowywania ani gotowym korpusem. Agent C rozpoczyna authoring na jego podstawie dopiero po akceptacji właściciela projektu.

**Powiązane artefakty:** B02_IREB_CPRE_FR_Traceability_v0.2.md — wszystkie FR i akceptacja; B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md — próby kontraktu A/P/K; B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md — decyzje, konflikty, luki i odbiór C. B01 jest miejscem definicji; pozostałe dokumenty go stosują.

## B01-01 — Podstawa, klasyfikacja i dostęp do źródeł

### Klasyfikacja wypowiedzi

| Oznaczenie | Znaczenie w pakiecie |
|---|---|
| FACT | Zweryfikowany fakt źródłowy lub policzalny stan dostarczonych dokumentów. Nie oznacza zatwierdzenia treści edukacyjnej. |
| RESEARCH FINDING | Wynik badań wraz z zakresem i ograniczeniami; przejmowany z S-PED/S-DR, bez ponownego badania pedagogiki. |
| INTERPRETATION | Uzasadniona interpretacja domeny lub zastosowanie wcześniejszego ustalenia. |
| DESIGN HYPOTHESIS | Założenie wymagające walidacji, w tym przewidywana trudność, skuteczność sondy i terminy powrotów. |
| FUNCTIONAL DECISION — odziedziczona | Zachowanie zaakceptowane w blueprintcie, identyfikowane FR/UC/FD. |
| FUNCTIONAL DECISION — propozycja B | Nowa decyzja o znaczeniu informacji, identyfikowana B-DEC w B04. Obowiązuje jako propozycja kontraktu, nie jako zatwierdzona norma IREB. |

**Domyślny status reguł B01:** propozycje B operacjonalizujące odziedziczone wymagania. Opis obowiązku „musi” określa warunek zgodności z proponowanym kontraktem. Nie nadaje dokumentowi statusu przyjętego.

### Wymagane źródła projektu — G0

Wszystkie pięć wymaganych plików było dostępnych w kopiach projektu; nie stwierdzono brakującego wejścia. Identyfikatory poniżej są lokalnymi oznaczeniami bibliograficznymi, niezależnymi od różnych numeracji bibliografii w źródłach.

| ID | Dokładny dokument | Przeczytany zakres i odpowiedzialność |
|---|---|---|
| S-START | 00_IREB_CPRE_START.md | Całość; hierarchia źródeł, fazy, G0–G4 i zakaz automatycznego przejścia do C. |
| S-FTC | IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md | F13.1–F13.8, K0–K7, F10–F12/F14, rejestr źródeł, Handoff B/C; główne wejście. |
| S-BP | IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md | F01, F04–F16, szczególnie F06, UC-01–UC-18 i wszystkie karty F09 FR-001–FR-038. F13 porównano z S-FTC: treść zgodna. |
| S-PED | 00_IREB_CPRE_Fundament_pedagogiczny.md | Całość; kanon nauki i ostrożności pomiaru. |
| S-DR | IREB_CPRE_Deep_Research_PL_2026-11.md | D2, D6–D12, D15 oraz właściwe wpisy bibliograficzne. Nie przeprowadzono ponownie przeglądu całej literatury D3/D4 ani pełnego audytu wszystkich publikacji. |

### Ponowna weryfikacja dokumentów IREB

Data kontroli: **1.11.2026**. Oficjalne źródło ma pierwszeństwo tylko w zakresie swojej odpowiedzialności. Brak ponownego dostępu do źródła nie oznacza, że autorzy poprzedniej fazy go nie czytali.

| ID | Źródło i wersja | Faktyczny zakres obecnej kontroli |
|---|---|---|
| N-CATALOG | [IREB Download Center](https://cpre.ireb.org/en/downloads-and-resources/downloads) | Katalog potwierdza Syllabus 3.3.0, Regulations 5.6.2, Glossary 2.2.0, Handbook EN 1.3.2. Katalog nie weryfikuje klucza pytania. |
| N-SYL-EN | [Syllabus EN 3.3.0, 1.04.2026](https://isqi.org/media/bb/62/7b/1789026524/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf), IREB, kopia u certyfikatora iSQI | Odczytano zasady zakresu i L1–L3, wykazy EO oraz sekcje pilota: §1.1, EU2 zasada kontekstu, §4.1, §6.6. Istotne strony PDF: 4–5, 11–12, 14–16, 19, 31, 36, 41, 43, 45. Sprawdzono też warunki użycia, s.2. |
| N-SYL-PL | [Syllabus PL 3.3.0 — adres wskazany w S-DR](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/68b8837862-1787039957/cpre_foundationlevel_syllabus_pl_v.3.3.pdf) | W tej fazie plik niedostępny przez narzędzie odczytu. Dostępność języka potwierdza katalog, wcześniejszy odczyt opisuje S-DR. Nie poświadczono ponownie równoważności EN/PL; zadanie C dla faktycznie używanych fragmentów. |
| N-REG | [Examination Regulations 5.6.2, 5.02.2024](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf) | Cały dokument, 6 stron; §1.2–1.3 i §2 potwierdzają warunki i scoring zastosowane w B01-07. |
| N-GLO-EN | [Glossary EN 2.2.0, 1.10.2025](https://hub.ireb.org/media/pages/resources/cpre-glossary/bb302c52fe-1787039949/ireb_cpre_glossary_en_2.2.pdf) | Metadane, warunki użycia i hasła: constraint, context/context boundary, functional requirement, quality requirement, system boundary/system context, traceability. Lokalizacje podawać hasłem, dodatkowo stroną PDF, jeśli potrzebna. |
| N-GLO-PL | [Glossary PL 2.2.0](https://hub.ireb.org/media/pages/resources/cpre-glossary/d804142017-1787039952/ireb_cpre_glossary_pl_2.2.pdf) | Odczytano wstęp o tłumaczeniu terminów oraz właściwe hasła PL/EN. Definicje w tej edycji pozostają EN. Potwierdzona para terminu nie oznacza oficjalnej polskiej parafrazy definicji. |
| N-HBK | [Handbook EN 1.3.2 — adres z S-BP](https://isqi.org/media/65/0a/43/1789029072/cpre_foundationlevel_handbook_en_v1.3.2.pdf) | Obecna próba odczytu nieskuteczna. Wersja potwierdzona katalogiem; S-BP opisuje wcześniejszy częściowy przegląd. Nie wykonano w B pełnej kontroli treści ani zgodności wszystkich objaśnień. |

Nie audytowano zalogowanego banku Cockpit ani poufnego blueprintu. Publicznego sample nie kopiowano do zadań. Nie sprawdzono warunków konkretnej rezerwacji egzaminu. Te ograniczenia są jawne w B04; nie blokują zdefiniowania semantyki na podstawie dostępnych norm.

**Atrybucja źródeł:** prawa do oficjalnych dokumentów należą do IREB e.V. i wskazanych w nich autorów. Autorzy Syllabus: Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal; autor Glossary: Martin Glinz. Przekład terminów Glossary na PL: Monika Petri-Starego i Karolina Zmitrowicz. Pakiet B jest autorskim opracowaniem projektu, nie publikacją IREB ani poświadczeniem jego akredytacji. Zakres dozwolonego przyszłego wykorzystania materiału wymaga kontroli opisanej w B01-11.

## B01-02 — Zakres, EO i kryterium wykonania

### Jednostki zakresu

**FACT / N-SYL-EN:** program zawiera siedem EU. Zliczenie wykazów daje 70 EO: 36 L1, 27 L2, 7 L3. To kontrola inwentarza, nie wagi egzaminacyjne. L1 dotyczy znajomości, L2 rozumienia, L3 zastosowania. Terminy oznaczone w Glossary jako foundational także należą do wymaganego zakresu L1, nawet bez osobnego EO. [N-SYL-EN, s.4–5 i wykazy EU]

**Kontrakt K0:** każda deklaracja zakresu wskazuje profil dokumentów, język i przeznaczenie. EU ma oficjalną identyfikację i listę EO; maksymalny poziom EU nie przechodzi na każdy EO. EO ma oficjalny identyfikator, własny poziom, źródłowe brzmienie albo dokładny odsyłacz, granice i lokalne kryteria wykonania. Nie tworzy się nowych oficjalnych EO.

**Kryterium wykonania** to najmniejszy fragment, dla którego można określić obserwowalną czynność, warunki i ocenę. Jego tożsamość jest projektowa, np. **KRY-A01**, i zawsze odrębna od EO. Nie stosuje się zapisów wyglądających jak nowy numer IREB, np. „EO2.2.2.10”.

Minimum kryterium: lokalny identyfikator i rewizja, nadrzędny EO lub jawne oznaczenie pomocnicze, czynność, przedmiot rozróżnienia, warunki, obserwowalny rezultat, wyłączenia, sposób oceny, źródło uzasadniające zakres i stan review. Kryterium nie może wymagać wyższego poziomu niż zadeklarowany EO; dodatkowe ćwiczenie wyższego poziomu wymaga odrębnej roli wspierającej.

**Reguła podziału:** rozdzielić elementy, jeśli można je sprawdzić oddzielnie albo uczeń może wykazać jeden bez drugiego. Nie dzielić według liczby słów, opcji, ekranów czy kart. C proponuje podział konkretnego EO i uzasadnia pokrycie wszystkich jego członów; recenzent ocenia zgodność zakresu. B definiuje zasady podziału, nie cały curriculum.

### Ziarna kryteriów dla B03

Poniższe operacjonalizacje pochodzą z ilustracji S-FTC F13.8. **Status: INTERPRETATION / FOR REVIEW.** Nie są oficjalnymi podcelami ani zatwierdzonymi itemami.

| Kryterium | Odniesienie | Obserwowalna czynność i granica |
|---|---|---|
| KRY-A01 | EO2.2.2 L2; N-SYL-EN EU2 | Rozpoznać i wyjaśnić istotny wpływ elementu zewnętrznego, mimo braku jego zmiany. Jedna część zasady kontekstu, nie wszystkie zasady. EO4.1.1 L3 jest wspierany, nie mierzony pełnym wykonaniem A. |
| KRY-P01 | EO1.1.2 L2; N-SYL-EN §1.1 | Rozróżnić cechę jakościową od funkcji i narzuconego rozwiązania w jednoznacznych opisach. Wybór jakości w P to częściowy dowód klasyfikacji, bez automatycznego dowodu pełnego uzasadniania wszystkich typów. |
| KRY-K01 | EO6.6.3 L1; N-SYL-EN §6.6 | Rozpoznać, czy zapis identyfikuje jawne powiązanie artefaktów. Bez obowiązku projektowania systemu traceability. |
| KRY-K02 | EO6.6.1 L1; N-SYL-EN §6.6 | Rozpoznać analizę skutków zmiany jako jeden powód utrzymywania powiązań. Pozostałe powody pozostają poza tą obserwacją. |
| KRY-X01 | Objaśniające, bez własnego oficjalnego EO | Odróżnić istnienie powiązania wymaganie–test od wyniku wykonania testu. Dotyczy czwartego stwierdzenia K; punkt w ilustracji nie tworzy pokrycia nowego EO. |

Rozróżnienie explicit/implicit z EO6.6.2 jest w K wskazane pomocniczo. Dodatkowe MEASURES do tego EO wymaga osobnego uzasadnienia rzeczywiście wymaganej czynności; nie nadaje się go z samej wzmianki.

### Pokrycie ma kilka odrębnych znaczeń

| Rodzaj pokrycia | Warunek prawdziwej deklaracji | Co nie wystarcza |
|---|---|---|
| Zakres zinwentaryzowany | Wszystkie EO i wymagane terminy wskazane, profil źródeł i nieznane pola jawne | Lista tematów lub sam licznik 70 |
| Materiał opracowany | Dla każdego wymaganego kryterium istnieje adekwatny, zrecenzowany materiał SUPPORTS | Tekst z MENTIONS albo karta bez warunków |
| Pomiar dostępny | Istnieją poprawne zadania MEASURES na właściwym poziomie i odpowiednie warianty do zamierzonego użycia | Jeden item przypisany do całego rozdziału |
| Dowód ucznia | Wykonane aktywności mają EVIDENCE_FOR dokładnie tych kryteriów i znane ograniczenia | Samo istnienie pytań w korpusie |
| Pełny EO w zakresie treści | Audyt zamyka wszystkie wymagane kryteria EO, terminy i czynności, z jawnymi wyłączeniami | Jeden sukces w jednej składowej |
| Pełny EO w zakresie dowodów | Każda wymagana część ma adekwatne obserwacje, raportowane ze swoimi warunkami | Dziedziczenie sukcesu z sąsiedniego kryterium; procent mastery |

Zakres treści: **wymagane**, **objaśniające**, **rozszerzające**. Klasyfikacja dotyczy określonego użycia wobec zakresu, a nie długości tekstu. Przykład jest autorski, choć wyjaśnia wymagane pojęcie. Wspierający prerequisite nie staje się dodatkowym oficjalnym wymaganiem.

Obowiązek foundational term ma własną kontrolę znajomości L1 i podstawę w haśle Glossary. Może wspierać EO1.1.1, jeśli uzasadniono zakres, ale nie musi mieć sztucznie wymyślonego EO. Inwentarz obowiązków terminologicznych wchodzi do audytu pełnego FL jako odrębny mianownik.

## B01-03 — Tożsamość, granice i odpowiedzialności

### Zasady identyfikacji

1. **Znaczenie przed nazwą.** Concept identyfikuje jeden sens. PL/EN i kontrolowane synonimy mogą nazywać ten sam sens. Homonim otrzymuje rozdzielone znaczenia; podobna nazwa nie scala pojęć.
2. **Tożsamość i rewizja są odrębne.** Odwołanie do użytej treści obejmuje obie. Korekta literówki tworzy rewizję reprezentacji; zmiana klucza, warunków lub wniosku tworzy rewizję merytoryczną z ponownym review. Nowe zadanie o innych istotnych założeniach ma odrębną tożsamość i ocenę relacji wariantowej.
3. **EO należy do wersji programu.** Identyczny numer w kolejnej wersji nie poświadcza identycznego zakresu. Przeniesienie kryteriów lub dawnych dowodów wymaga jawnej oceny zgodności znaczenia; nie wykonuje się automatycznej migracji mastery.
4. **Opcja ma tożsamość w obrębie wersji zadania.** Zmiana kolejności nie tworzy nowej opcji ani nowej rodziny. Stwierdzenie może być poprawne jako teza, a nie odpowiadać na negatywne polecenie. Rozdzielić prawdziwość treści od przynależności do klucza wyboru.
5. **Treść współdzielona nie znosi lokalnego uzasadnienia.** Kilka opcji może używać tej samej reguły lub comparison. Każda zachowuje wiązanie: przesłanka z zadania → reguła → właściwe rozstrzygnięcie. Wspólny akapit bez tego wiązania nie spełnia rationale opcji.
6. **Tłumaczenie pytania jest powiązaną reprezentacją**, z własnym review i rewizją. Zachowuje rodzinę oraz historię znajomości; nowy język nie odnawia nowości.
7. **Zdarzenie ucznia pozostaje zdarzeniem.** Pierwotna odpowiedź i warunki nie są edytowane po feedbacku. Późniejsze przeliczenie lub korekta interpretacji wskazują starą i nową podstawę.

### Minimalne role semantyczne korpusu

Każda rola redakcyjna dziedziczy: tożsamość/rewizję, język, zakres użycia, autora, źródłowe uzasadnienie istotnych twierdzeń, prawa, review i status publikacji. Poniższe role **nie oznaczają odrębnych rekordów, tabel ani plików**. Fragment, twierdzenie, reguła, rubryka i kryterium mogą być adresowalnymi częściami jednej jednostki.

| Rola / granica znaczenia | Minimalna informacja właściwa roli | Właściciel i zmiana |
|---|---|---|
| Educational Unit | Oficjalna jednostka, profil programu, źródło, zawarte EO; nie sesja ani kompetencja | C odwzorowuje normę; recenzent zakresu kontroluje |
| Educational Objective | Oficjalny identyfikator i poziom, lokalizacja, wymagane działanie, operacyjne kryteria i wyłączenia | C proponuje operacjonalizację; review domenowy |
| Kryterium wykonania / obowiązek terminu | Czynność, warunki, wynik obserwowalny, ocena, powiązanie z zakresem albo status pomocniczy | C konkretyzuje zgodnie z B01-02; zmiana wymaga analizy mapowań |
| Concept | Jeden sens, warunki i granice, definicja lub odsyłacz, terminy i zakres | C/ekspert domeny; nowy sens nie zastępuje starego bez śladu |
| Terminology | Etykieta, język, sens, preferowany/dopuszczony/odradzany, źródło pary PL/EN; nie definicja sama w sobie | Redaktor PL/EN; kontrola homonimów i negacji |
| Definition | Określenie znaczenia ze źródłem i statusem cytatu, tłumaczenia lub autorskiej parafrazy; granice normy | C + recenzent; definicja EN i objaśnienie PL nie są tą samą deklaracją pochodzenia |
| Explanatory Content | Celowany fragment, reguła i warunki; rola: objaśnienie, comparison, przykład, korekta lub rationale | C; rdzeń i rozwinięcie muszą być zgodne |
| Comparison | Co najmniej dwa znaczenia, wspólny wymiar, cecha rozstrzygająca, przypadki obu stron | C + review; zestawienie nazw bez osi nie jest comparison |
| Example | Wystarczający opis przypadku, wskazanie reguły i przesłanek jej zastosowania | C; nie nadaje autorskiej historii statusu oficjalnego faktu |
| Counterexample | Obalane nadmierne uogólnienie lub badana granica; przypadek i rozstrzygnięcie | C; nie jest dowolnym drugim przykładem |
| Worked Scenario | Warunki, kolejne uzasadnione kroki, decyzje i granice; fragmenty ujawniające rozwiązanie oznaczone | C; obejrzenie stanowi naukę z pomocą |
| Learning Unit | Kryterium, zakres, wymagany stan wejścia, dostępne aktywności, warunek wyjścia i powrotu | C; zakończenie pracy nie potwierdza retencji |
| Question / Task | Zadanie, komplet danych K2, rola practice/revision/reserved; zadanie otwarte ma kryteria i rubrykę zamiast udawanej punktacji A/P/K | C, recenzent klucza i języka; zmiana przez B01-11 |
| Answer Option | Odpowiedź na określone polecenie, lokalne rozstrzygnięcie, rationale; nie osobna umiejętność | C; wszystkie opcje recenzowane, również niewybrane |
| Statement | Jedno rozstrzygalne twierdzenie K ze wspólnym kontekstem, znaczeniem pary ocen i kluczem | C; brak decyzji jest stanem odpowiedzi, nie wartością Fałsz |
| Scoring Rule | Zasada A/P/K, źródło i wersja, waga, k/m, polaryzacja polecenia; rubryka otwarta odrębna | Redaktor oceny; zmiana dotyka wyników, nie odpowiedzi historycznych |
| Explanation | Rozstrzygająca reguła, warunki i rationale każdej decyzji; warstwy ujawniania nie zmieniają znaczenia | C + review; nie dopisuje przesłanek nieobecnych w stemie |
| Misconception Hypothesis | Falsyfikowalna błędna reguła, poprawna reguła, alternatywy, przewidywane wyniki sondy, status uzasadnienia | C projektuje hipotezę; obserwacje osoby należą do dowodów |
| Confirmatory Activity | Sonda rozdzielająca przyczyny, przewidywania dla alternatyw, kryterium i metoda oceny; timing przed/po korekcie | C; sonda po instrukcji nie potwierdza wstecz pierwotnego rozumowania |
| Knowledge Relationship | Określone końce i role, nazwa, kierunek, warunki, zdanie sensu, cel i własne review | C uzasadnia instancję; B kontroluje słownik |
| Prerequisite | Szczególna rola relacji R14: podstawa potrzebna do konkretnego działania; sygnał braku i dopuszczalne pominięcie | C/ekspert; nie jest globalnym zakazem nauki |
| Revision Prompt | Kryterium, polecenie bez ujawnienia odpowiedzi, sposób oceny i wariant; termin należy do planu osoby | C tworzy treść; harmonogram nie jest cechą definicji pojęcia |
| Question Variant Family | Wspólny zapamiętywalny rdzeń rozwiązania/scenariusza, granice grupy, lista znanych bliskich wariantów i uzasadnienia | C + review podobieństwa; nie grupować całego EO jako jednej rodziny |
| Source Reference | Tożsamość dokumentu i rewizji, precyzyjna lokalizacja, zakres wsparcia konkretnego twierdzenia, dostęp i prawa | C/source reviewer; URL bez lokalizacji nie wystarcza |
| Assessment Blueprint | Deklarowany zakres, kryteria, liczba zadań/punktów, formaty, poziomy, rodziny i protokół; autorski plan formy | C + reviewer oceny; nie jest poufnym rozkładem IREB |

### Dane aktywności — odrębne od korpusu

| Rola | Minimalne znaczenie | Odpowiedzialność |
|---|---|---|
| Attempt / odpowiedź i ocena | Osoba, aktywność i wersje, kontekst, granica zatwierdzenia, oddana odpowiedź, scoring/rubryka, oceniający, wynik i ograniczenia | Warstwa aktywności dostarcza fakty; B ustala interpretację, C klucz/rubrykę |
| Assistance / exposure | Co i kiedy ujawniono, czy przed odpowiedzią, zakres kryteriów, item/family, stopień ujawnienia, źródło informacji | Aktywność; C oznacza znaczenie treści, także podpisów i tytułów |
| Learning Evidence | Powiązanie zaobserwowanego wykonania z konkretnym kryterium, z kwalifikacją samodzielności, nowości, czasów, oceny i ograniczeń | Interpretacja oparta na zdarzeniu, nie trwały atrybut Concept |
| Hipoteza dotycząca osoby | Powiązane obserwacje i alternatywy, stan wsparcia hipotezy, sonda i jej timing; bez etykiety trwałej cechy | Aktywność + uprawniona interpretacja; oddzielnie od hipotezy w korpusie |
| Navigation Context | Źródłowa aktywność i wersja, opcja/stwierdzenie, stan odpowiedzi/feedbacku, cel odejścia, ścieżka i kotwica powrotu, miejsce kontynuacji | Aktywność; nie relacja domenowa Concept–Concept |
| Recommendation / revision need | Wskazane kryterium, przesłanka, dostępna aktywność, wersja polityki, odroczenie i zamknięcie gałęzi | Aktywność; nie nowy dowód wiedzy |

## B01-04 — Życie treści i bramka redakcyjna

Rozdzielić pięć osi: **opracowanie** (szkic/kompletne), **weryfikacja źródłowa** (niesprawdzone/sprawdzone w zadanym zakresie/sporne), **recenzja** (oczekuje/zmiany wymagane/zrecenzowano określoną rewizję), **publikacja** (niedopuszczone/dopuszczone do wskazanego użycia/wstrzymane/wycofane), **badanie empiryczne** (brak danych/określony pilot/określona kalibracja). Przejście na jednej osi nie ustawia pozostałych.

Zaakceptowana recenzja musi wskazywać faktycznego recenzenta, datę, rewizję, kompetencję i zakres kontroli, rozstrzygnięte uwagi oraz dopuszczone zastosowanie. Autor/LLM nie poświadcza sam sobie niezależności. Minimalne użycie punktowanego practice wymaga odrębnej od autora kontroli źródłowej i merytorycznej, a także kontroli języka i scoringu. Reserved dodaje kontrolę rodzin, przecieków i planu formy; nie wymaga fikcyjnej etykiety kalibracji. Szczegółowe warunki zastosowań podaje B01-12.

**Historia kontroli v0.1:** wykonano kontrolę źródłową oraz autorskie sprawdzenie kontraktu. **Nie przeprowadzono niezależnej recenzji domenowej tych pakietów przez zewnętrznego eksperta ani walidacji uczniowskiej.** Wszystkie przykłady pozostają ilustracjami. Przebieg autorski zachowuje B04-07. Późniejszy, odrębnie zlecony przegląd AI dokumentuje R04; korekty v0.2 i ich sprawdzenie dokumentują B04-08 oraz R05. Nie przedstawia się tych działań jako recenzji ludzkiego eksperta. Wystarczalność tego zakresu dla L-B04 rozstrzyga właściciel przy G1.

## B01-05 — Kontrolowany słownik relacji

### Wspólny kontrakt każdej relacji

Instancja relacji ma własną tożsamość/rewizję, określone końce wraz z ich wersjami lub jawnym zakresem zgodności, role końców, nazwę, kierunek, warunki, jedno pełne zdanie sensu, funkcję dydaktyczną, uzasadnienie, proweniencję i status review. To obowiązek K3; sama nazwa R nie jest jego realizacją.

**Wymóg P-R dla wszystkich R01–R26:** zapisać, czy związek pochodzi wprost ze źródła, jest autorską interpretacją domenową, decyzją organizacyjną czy hipotezą dydaktyczną. Przy związku dziedzinowym wskazać źródło i lokalizację; przy mapowaniu autora — jego argument i odniesienie do kryterium. Relacja aktywności wymaga identyfikowalnego zdarzenia, a nie udawanego cytatu z IREB. Każda ma faktyczny zakres review. Poprawność końców nie zatwierdza połączenia. Brak dowodu skuteczności dydaktycznej nie uniemożliwia recenzji sensu relacji; nie pozwala jednak nazwać jej skuteczności potwierdzoną.

**Kierunki:** strzałka w tabeli opisuje znaczenie, nie implementację. Relacja wielostronna może obejmować comparison i dwa pojęcia bez wymuszania sztucznej relacji binarnej. Odsyłacz odwrotny służy nawigacji, zachowując pierwotne znaczenie. Nie jest nowym twierdzeniem przyczynowym.

### Znaczenie, końce, warunki i uzasadnienie

| ID / nazwa | Znaczenie, funkcja i poprawne role końców | Kierunek i warunek zastosowania | Wymagane uzasadnienie instancji |
|---|---|---|---|
| R01 IN_EU | EO należy do oficjalnej EU w określonym profilu programu | EO → EU; ten sam profil | Lokalizacja wykazu EO w N-SYL; nie domysł z podobnej nazwy |
| R02 OPERATIONALIZES | Lokalne kryterium określa sprawdzalny zakres oficjalnego EO | Kryterium → EO; czynność i poziom zachowane. Kryterium pomocnicze bez EO nie otrzymuje tej relacji | Który człon EO jest operacjonalizowany i czego kryterium nie obejmuje |
| R03 DENOTES | Termin w określonym języku i kontekście nazywa sens Concept | Termin → Concept; równoważność znaczenia potwierdzona | Hasło/wersja albo jawna propozycja autora; rozróżnienie homonimu i synonimu |
| R04 DEFINES | Definition określa znaczenie Concept | Definition → Concept; zakres i wersja zgodne | Dokładna definicja źródłowa/odsyłacz i status tłumaczenia lub parafrazy |
| R05 SUPPORTS | Fragment, przykład, comparison lub Learning Unit pomaga nauczyć kryterium, EO albo obowiązku terminu | Materiał → cel; wspiera naukę, nie zbiera dowodu wykonania | Jaką potrzebną wiedzę lub czynność wyjaśnia i w jakim zakresie |
| R06 MEASURES | Zadanie lub oceniana decyzja daje okazję obserwacji określonego kryterium | Task/decyzja → kryterium; konieczna ocena i zgodność poziomu | Co trzeba wykonać, aby rozwiązać zadanie; dlaczego klucz/rubryka rozróżnia adekwatne wykonanie. Wskazać zakres ograniczony i rolę primary/secondary |
| R07 MENTIONS | Pojęcie/EO występuje jako kontekst, tło lub słownictwo | Materiał/Task/opcja → Concept/EO; brak uzasadnienia pomiarowego | Fragment wystąpienia i rola kontekstowa; bez obietnicy uczenia/oceny |
| R08 HAS_RATIONALE | Konkretna opcja, stwierdzenie lub rozstrzygnięcie ma uzasadnienie w tym pytaniu | Decyzja w wersji Task → Explanation; wiązanie lokalne | Przesłanka stemu, poprawność tezy, zgodność z poleceniem i powód punktowania |
| R09 RESOLVED_BY | Rationale opiera rozstrzygnięcie na określonej regule | Explanation → adresowalna reguła/twierdzenie; warunki jawne | Który warunek uruchamia regułę; bez dopisywania założeń do stemu |
| R10 EXPLAINS | Fragment rozwija znaczenie pojęcia lub reguły | Fragment → Concept/reguła; adekwatny zakres | Jakie znaczenie, ograniczenie lub zastosowanie stanie się zrozumiałe |
| R11 DISTINGUISHES | Comparison wyjaśnia różnicę dwóch lub większej liczby znaczeń | Comparison → zestaw Concept; uczestnicy wymienni, role w osi zachowane; nie przechodnia | Wspólny wymiar, cecha rozstrzygająca i kontrastowe przypadki; np. zachowanie/cecha/wybór rozwiązania |
| R12 ILLUSTRATES | Przykład lub krok Worked Scenario pokazuje regułę w danych warunkach | Example/krok → Concept/reguła; zakres scenariusza wystarczający | Wskazać cechy przykładu spełniające warunki reguły |
| R13 COUNTEREXEMPLIFIES | Przypadek obala nadmierne uogólnienie albo pokazuje granicę jego stosowania | Counterexample → błędna reguła lub wyraźnie wskazane uogólnienie | Przewidywanie błędnej reguły i sprzeczny z nim wynik wynikający z poprawnej zasady |
| R14 REQUIRES_FOR | Określona podstawa jest potrzebna do konkretnego działania w Task, kryterium lub Learning Unit | Podstawa → działanie docelowe; zależność warunkowa, nie globalna kolejność tematów | Co uniemożliwia brak podstawy, jak go sprawdzić, zakres warunku i możliwość pominięcia przy wykazanej znajomości |
| R15 BACKED_BY | Konkretne twierdzenie, klucz, mapowanie lub relacja mają wsparcie źródłowe | Twierdzenie → Source Reference; wskazać zakres wsparcia | Źródło, wersja i lokalizacja; oddzielić regułę oficjalną od wniosku o autorskim scenariuszu |
| R16 MAY_INDICATE | Wzorzec odpowiedzi może dostarczać przesłanki dla hipotezy błędnej reguły | Wzorzec korpusu albo obserwacja osoby → Misconception Hypothesis | Przewidywanie hipotezy, alternatywy i ograniczenie identyfikowalności; obserwacja osoby musi wskazywać rzeczywistą próbę |
| R17 DISCRIMINATES | Sonda pomaga rozdzielić hipotezę i alternatywne przyczyny | Confirmatory Activity → hipoteza + alternatywy; kontrolowany timing | Przewidywane odpowiedzi dla poszczególnych wyjaśnień, ocena i warunki, w których wynik niczego nie rozstrzyga |
| R18 CORRECTS | Korekta pokazuje poprawną regułę zamiast określonego błędnego rozumowania | Fragment korekty → błędna reguła/kryterium; diagnoza osoby nie jest warunkiem zwykłej korekty | Co konkretnie zostaje skorygowane, jaka jest reguła i kiedy działa |
| R19 CHECKS_AFTER | Follow-up sprawdza problem, którego dotyczyła korekta | Task kontrolny → celowana korekta; równolegle R06 do kryterium | To samo rozróżnienie, znacząca zmiana przypadku, sposób oceny i granice interpretacji po instrukcji |
| R20 IN_FAMILY | Pytanie należy do rodziny o zdefiniowanym zapamiętywalnym rdzeniu | Question → Family; rodzina opisana i recenzowana | Wspólne przesłanki/rozwiązanie i powód grupowania; wspólny EO nie wystarcza |
| R21 VARIANT_OF | Dwa zadania są porównane pod względem bliskości i zmiany poznawczej | Question ↔ Question; symetryczna informacja o podobieństwie, opis różnicy może mieć orientację | Ten sam/odmienny kryterialny cel, zmienione warunki, zachowane wskazówki, relacja rodzin; kosmetyczny/bliski/znacząca realizacja; status review |
| R22 TRANSLATION_OF | Reprezentacja językowa jest przekładem określonej wersji zadania/fragmentu | Przekład → oryginał; własny review językowy | Pochodzenie tłumaczenia, zgodność sensu warunków, negacji, kwantyfikatorów i klucza |
| R23 IS_A | Jeden sens jest rodzajem drugiego, w określonym wymiarze klasyfikacji | Concept → szerszy Concept; relacja taksonomiczna, warunkowa w danej domenie | Kryterium przynależności i uzasadnienie źródłowe; nie zamieniać w część składową |
| R24 PART_OF | Element stanowi składnik określonej całości w przyjętej perspektywie | Concept/składnik → całość; perspektywa i rodzaj całości jawne | Argument składu; nie wywodzić z nazwy kategorii ani z własności organizacyjnej |
| R25 EVIDENCE_FOR | Konkretna obserwacja wykonania wspiera ograniczony wniosek o kryterium | Learning Evidence → kryterium; dopiero po wykonaniu i ocenie | Odpowiedź, oceniający, klucz/rubryka, pomoc, nowość, czasy i ograniczenia; powiązanie z R06 |
| R26 RETURNS_TO | Kontekst eksploracji wskazuje źródłową aktywność i kotwicę powrotu | Navigation Context → wersja aktywności/kotwica; aktywność nadal identyfikowalna | Zdarzenie odejścia, źródłowy stan i cel; to zależność użytkowa, nie twierdzenie o domenie RE |

### Proweniencja, review, wnioskowanie i skutek braku

P-R jest obowiązkowe we wszystkich wierszach. „Dopuszczalne” oznacza bezpieczną interpretację przy poprawnej instancji; nie oznacza polecenia automatycznego rozumowania.

| R | Szczególny dowód/review oprócz P-R | Dopuszczalne / zabronione wnioski | Brak lub nieważność |
|---|---|---|---|
| R01 | Kontrola oficjalnej struktury | Nawigacja EU–EO / bez dziedziczenia poziomu i mastery | Nie deklarować pokrycia właściwej EU |
| R02 | Review zakresu i poziomu | Wskazać część EO / bez utożsamienia z całym EO | Brak mapowania pomiarowego do normy; lokalna aktywność nie zamyka EO |
| R03 | Review terminologiczny PL/EN | Szukanie tego samego sensu po aliasie / bez scalania homonimów | Pokaż tylko zweryfikowaną etykietę; nie wymyślaj odpowiednika |
| R04 | Kontrola definicji i statusu przekładu | Odczyt znaczenia ze źródła / bez oficjalnego statusu parafrazy | Można linkować do pewnego źródła; brak definicji nie może być ukryty |
| R05 | Argument dydaktyczny i zgodność zakresu | Znaleźć materiał do nauki / SUPPORTS nie implikuje MEASURES ani EVIDENCE_FOR | Nie nazywać materiału pokryciem tego celu |
| R06 | Niezależny review wymaganej czynności i oceny | Przypisać wynik do kryterium w danych warunkach / bez pomiaru kontekstowych EO | Możliwa lektura/demonstracja; brak dowodu celu i brak miejsca w rezerwie |
| R07 | Kontrola wystąpienia i bezpiecznej widoczności | Kontekst lub wyszukanie materiału practice / bez wniosku o uczeniu i pomiarze | Nie twórz odsyłacza z podobieństwa słów |
| R08 | Review każdej decyzji, także pominiętej poprawnej P | Wyjaśnić decyzję lokalnie / bez „zawsze fałsz”, gdy tylko nieadekwatna | Brak zasadniczego rationale blokuje cały punktowany pakiet |
| R09 | Kontrola zgodności reguły z przesłankami | Dojść do rozstrzygającej zasady / bez dodawania warunków | Nie publikować rozstrzygnięcia bez pewnej podstawy |
| R10 | Review merytoryczny fragmentu | Otworzyć celowane objaśnienie / bez automatycznej relacji prerequisite | Wyjaśnienie samowystarczalne może działać; nie proponować pustego linku |
| R11 | Review osi i przykładów obu stron | Uczyć konkretnej różnicy / A różni się od B i B od C nie daje A różni się od C według tej samej osi | Nie proponować pozornego comparison; użyć kompletnego rationale |
| R12 | Kontrola scenariusza i zastosowania | Ilustracja reguły w tych warunkach / bez uogólnienia z jednego przykładu | Materiał bez wymaganego przykładu nie spełnia K1 pełnej nauki |
| R13 | Kontrola poprawnego obalenia | Odrzucić wskazane uogólnienie / bez dowodu, że uczeń je wyznawał | Zwykła korekta pozostaje możliwa, jeśli kontrprzykład nie jest konieczny |
| R14 | Review konieczności; użyteczność empiryczna osobno | Zaproponować wąską podstawę / bez tranzytywnego wymuszania całych rozdziałów | Nie wymuszać podstawy. Cykl nie może zamknąć dostępu do nauki |
| R15 | Odczyt lokalizacji, nie sam URL; kontrola zakresu praw osobno | Odtworzyć podstawę claim / bez dziedziczenia praw i poprawności wszystkich tez dokumentu | Wstrzymać zależne twierdzenie lub użycie; nie zatwierdzać przez LLM |
| R16 | Hipoteza autora oddzielona od obserwacji i walidacji diagnostycznej | „Możliwe, że…” / bez diagnozy z dystraktora lub blank | Neutralna korekta; brak person-specific misconception |
| R17 | Review rozróżnialności i oceny; empiria jeśli deklarowana | Zwiększyć/osłabić przesłankę / bez dowodu przyczyny pierwotnej po nauczeniu reguły | Nie proponować diagnozy; korekta może być zwykła |
| R18 | Źródło poprawnej zasady; dopasowanie zakresu | Skorygować regułę / bez uznania przeczytania za skuteczną naprawę | Nie prowadzić celowanej remediacji bez pewnej korekty |
| R19 | Review zgodności kryterium i rzeczywistej zmiany | Zarejestrować wynik po korekcie / bez automatycznej retencji lub transferu z nowej nazwy | Korekta bez deklaracji zweryfikowanej poprawy; jawny brak follow-up |
| R20 | Review rdzenia rodziny | Sprawdzić historię i chronić rezerwę / bez grupowania wszystkich pytań EO w jedną znaną całość | Rodzina nieustalona wyklucza zaufaną rezerwę |
| R21 | Recenzja pary i mapy możliwego przecieku | Ocenić bliskość względem osoby / podobieństwo i niepodobieństwo nie są automatycznie przechodnie | Nowość rodziny niepotwierdzona; praktyka z ograniczeniem |
| R22 | Źródło przekładu i review sensu | Powiązać ekspozycję oryginału i przekładu / bez odnowienia nowości | Niezweryfikowany przekład nie zastępuje dopuszczonej wersji |
| R23 | Review klasyfikacji | Użyć zatwierdzonej hierarchii nazw / bez mastery szerszego/niższego pojęcia; bez automatycznej tranzytywnej publikacji | Brak hierarchii nie blokuje pewnej definicji; nie wymyślać kategorii |
| R24 | Review całość–część w danej perspektywie | Wyjaśnić skład / bez IS_A, wpływu na kontekst ani znajomości wszystkich składników | Pominąć relację; brak składu krytycznego dla zadania blokuje zadanie |
| R25 | Fakty próby i wersja reguł interpretacji | Opisać ograniczony dowód / bez procentu mastery, propagacji na sąsiadów i niezależności decyzji jednego K | Zachować wykonanie, oznaczyć niewystarczającą interpretację |
| R26 | Integralność stanu i aktualny status treści | Wrócić do tego samego review / bez nowej próby lub ponownego zaliczenia | Zachować historię, wskazać bezpieczną kontynuację; wycofany item nie wraca jako aktywny |

**Zakazy ogólne:** wspólny termin, wspólny EO, embedding similarity, sąsiedztwo w dokumencie i połączenie w wizualnym grafie nie ustanawiają żadnej relacji edukacyjnej. Nie istnieje domyślne RELATED_TO uzasadniające remediację. Nie używa się ogólnego VALIDATES mieszającego walidację wymagań z oceną ucznia. Status „często mylone” wymaga danych, a nie tylko autora dystraktora.

**Od pojęcia do zadania:** kandydat do praktyki musi mieć uzasadnione powiązanie jego rozstrzygającego rationale/reguły z tym sensem oraz R06 do aktualnie ćwiczonego kryterium. Można przejść odwrotnie przez już zatwierdzone R10/R09/R08. Sam wspólny EO albo MENTIONS nie wystarcza. Dobór nadal sprawdza poziom, rolę practice i K5; nie ujawnia reserved. Jedenaście dróg F06 i ich warunki zestawia B02-04. R23/R24 są dostępne tylko wtedy, gdy rzeczywiście potrzebna jest klasyfikacja/skład; nie wymaga się ich dla każdego pojęcia.

**Kontrola prerequisite:** sprawdzić końce, działanie, poziom i zakres warunku. Wyszukać cykle w wymaganiach dotyczących tego samego działania i warunków. Wzajemne wyjaśnianie pojęć nie jest dowodem dwóch obowiązkowych prerequisites. Przy cyklu sprawdzić uzasadnienia: odrzucić niepoparte, ograniczyć warunki albo połączyć objaśnienia w jednostkę. Do rozstrzygnięcia nie wymuszać cyklicznej ścieżki; umożliwić lekturę i próbę. Nie projektuje się tu algorytmu grafowego.

## B01-06 — Pakiety K0–K7 i zasady współdzielenia

Każda funkcja dziedziczy wszystkie obowiązki wskazanego pakietu, a nie samą etykietę. **M** = konieczne dla obiecanej funkcji; **W** = wymagane po spełnieniu wskazanego warunku; **O** = opcjonalne. Brak W nie blokuje funkcji, której warunek go nie uruchamia. Proweniencja, review i wersje obowiązują przekrojowo.

| Pakiet | M — niezbędna informacja | W/O i granica kompletności | Bezpieczny skutek braku |
|---|---|---|---|
| K0 Zakres | Profil norm, EU/EO, poziom i czynność, lokalne kryteria, obowiązki foundational, klasyfikacja zakresu i manifest braków | W: pełny inwentarz dla deklaracji pełnego FL; O: kolejność lekcji | Deklaracja tylko znanego wycinka; brak treści nie staje się błędem osoby |
| K1 Nauka | Sens/rozróżnienie, definicja lub pewne odwołanie, objaśnienie, warunki, przykład, adekwatna okazja próby, źródło i review | W: comparison/kontrprzykład, gdy potrzebne do celu; prerequisite tylko uzasadniony; O: szersza lektura | Pewny fragment może być czytany ze wskazaniem zakresu, ale nie udawać kompletnej jednostki |
| K2 Pytanie | B01-07: stem, pełny klucz, wszystkie decyzje i rationale, scoring/rubryka, kryterium i poziom, reguły, rodzina, język, prawa, wersja, review | W: parametry k/m i negacja zgodnie z formatem; otwarte wymagają rubryki; O: hipotezy błędów i statystyki | Krytyczny brak blokuje nowe punktowane użycie całego pytania; nie usuwać tylko niewygodnej opcji |
| K3 Powiązanie | Końce i role, R, kierunek, zdanie sensu, warunki, cel, własne uzasadnienie i review | W: dowód konieczności dla R14; dowód rozpowszechnienia dla „często mylone”; O: prezentacja graficzna | Pominąć niepewną relację; nie osłabiać poprawnych końców, o ile nie są od niej zależne |
| K4 Naprawa | Obserwacja błędu, właściwa reguła, celowana korekta, właściwy follow-up i kryterium wyjścia | W: błędna reguła, alternatywy i sonda, jeśli proponowana jest konkretna diagnoza; O: dodatkowy przykład, jeśli zbędny | Zwykła korekta bez diagnozy; bez follow-up brak deklaracji sprawdzonej poprawy |
| K5 Nowość | Tożsamość/rewizja/język zadania, rodzina i bliskość, rola użycia, zakres zmian; przy doborze także historia osoby sprzed ekspozycji | W: ocena tłumaczenia, bliskich rodzin i przecieków; O: dobrowolna deklaracja zewnętrznej znajomości | Praktyka znana/nowość niepotwierdzona, bez niezależnego nowego pomiaru |
| K6 Sprawdzenie | Zatwierdzony blueprint jawnego zakresu, liczba zadań/punktów, protokół pomocy/czasu, instrukcja, komplet K2/K5, reguły interpretacji i kończenia | W: wszystkie EU, profil egzaminacyjny i szeroki korpus dla pełnego mocku; temat Level 1 bez limitu nie wymaga 75/90 minut | Test mniejszego, jawnego zakresu lub practice; brak krytycznych reguł blokuje start |
| K7 Dowód i ciągłość | Próba i wersje, odpowiedź, wynik, kryterium, metoda/źródło oceny, pomoc, stan ekspozycji, oba czasy z B01-10, ograniczenia, kontekst powrotu i przesłanka rekomendacji | W: przerwy i konwersja, jeśli wystąpiły; O: termin egzaminu, pewność i zewnętrzna nauka jako deklaracje | Zachować znane wykonanie; nie rekonstruować brakującej historii; nie wydawać mocniejszego wniosku |

**Współdzielenie:** jeden rdzeń znaczeniowy może zasilać definicję roboczą, objaśnienie, rationale i Revision Prompt, ale przy każdym użyciu zachować rolę, warunki oraz jawność rozwiązania. Prompt z odsłoniętą odpowiedzią jest materiałem do nauki, nie samodzielnym retrieval. Zmiana współdzielonego rdzenia uruchamia analizę wszystkich zastosowań. Każdy link krytyczny jest częścią pakietu; link opcjonalny nie może zastępować brakującego rationale.

## B01-07 — Question Knowledge Package

### Obowiązki informacyjne

| Pole znaczeniowe | Minimum konieczne / warunkowe |
|---|---|
| Tożsamość i użycie | Question, rewizja, język, rola practice/revision/reserved, autorstwo/pochodzenie, rodzina, relacje wariantów/tłumaczeń, status review i dopuszczone zastosowania |
| Polecenie i warunki | Pełny stem i scenariusz; przedmiot, perspektywa, założenia, polaryzacja, znaczenie „najlepsze”, jeżeli użyto; wszystkie dane potrzebne do jednego rozstrzygnięcia |
| Format i scoring | A/P/K, waga w, wersja reguły; P: jawne k i pełny klucz; K: m, sens dwóch wartości i klucz każdego wiersza. Otwarte: kryterium i rubryka, bez udawania formatu egzaminacyjnego |
| Decyzje | Wszystkie opcje/stwierdzenia z trwałym odniesieniem do użytej wersji; poprawność tezy i poprawność wyboru wobec polecenia rozdzielone |
| Klucz | Jeden kompletny, zweryfikowany zestaw decyzji. Dla negatywnego A/P klucz wskazuje odpowiedź na polecenie, a nie listę prawdziwych tez |
| Rationale każdej decyzji | Przesłanka z opisu, reguła, warunek stosowania, dlaczego dana opcja odpowiada/nie odpowiada na polecenie; także poprawne pominięte P oraz wszystkie wiersze K |
| Wyjaśnienie scoringu | Dlaczego uzyskano konkretne punkty; nadmiar P, brak decyzji K i błąd merytoryczny jako odrębne przypadki. Niewybranie dystraktora P nie jest punktowane |
| Główne kryterium | R06 do jednego jawnie wskazanego primary criterion i jego EO, jeżeli to zakres egzaminacyjny, z uzasadnieniem czynności. Tutorial może mieć lokalne kryterium formatu bez oficjalnego EO. K może dodatkowo mierzyć inne kryterium w określonym wierszu; nie rozdzielać automatycznie punktów na całe EO |
| Pozostałe role zakresu | Wtórne pomiary tylko z uzasadnieniem; auxiliary SUPPORTS i contextual MENTIONS oddzielnie. Pomocniczy lokalny cel bez EO dozwolony w jawnej ilustracji, nie jako ukryty punkt egzaminacyjnego pokrycia |
| Wiedza do korekty | Reguła i samowystarczalne rationale; W: celowany comparison/prerequisite, jeśli potrzebny. Oddzielna karta nie jest obowiązkiem |
| Źródła rozstrzygnięć | BACKED_BY dla każdej istotnej reguły i rozstrzygnięcia. Autorskie warunki scenariusza + źródłowa reguła + jawny wniosek autora; źródło nie musi opisywać fikcyjnego systemu z pytania |
| Nowy przypadek | W: właściwy follow-up, jeśli obiecano pełną remediację/weryfikację; kryterium, zmiana i status rodziny. Jego brak nie musi blokować samowystarczalnego practice, ale blokuje obietnicę naprawy potwierdzonej nową próbą |
| Język i dostępność | Kontrolowane terminy PL/EN, proste instrukcje, odpowiedniki diagramów zachowujące czynność; alternatywa nie ujawnia rozwiązania |
| Prawa | Właściciel/pochodzenie, zamierzony sposób wykorzystania, podstawa i ograniczenia; publiczny URL nie wystarcza do reprodukcji |
| Ocena jakości | Faktycznie wykonane review klucza, wszystkich rationale, EO, języka, scoringu, relacji koniecznych, praw i przecieków. Przewidywana trudność osobno od empirycznej |

Rationale składa się z **wyniku decyzji, rozstrzygającej reguły, przesłanki stosowania i ograniczenia zakresu**. Samo „c jest niepoprawne, bo b jest poprawne” nie wystarcza. Blank otrzymuje informację o braku decyzji i prawidłowe rozstrzygnięcie; nie otrzymuje przypisanej błędnej reguły osoby.

### Punktacja — nienegocjowalna zgodność z N-REG §2

Niech w ∈ {1,2,3}, n = liczba zaznaczonych opcji, k = liczba wymaganych poprawnych wyborów P, m = liczba stwierdzeń K, c = liczba trafnie zaznaczonych opcji P albo poprawnych ocen K.

| Format | Punkty | Granica |
|---|---|---|
| A | w wyłącznie za pojedynczy wybór zgodny z kluczem; inaczej 0 | 4–5 opcji; jedna odpowiedź na polecenie |
| P | n ≤ k: w × c/k; n > k: 0 | k ≥ 2; mniej niż k nie zeruje trafnej części |
| K | w × c/m | Błędna, pusta lub podwójna ocena daje 0 wyłącznie za dany wiersz |

Punkty sumuje się wobec sumy maksymalnych wag. Nie zastępuje się ich procentem w całości poprawnych pytań. N-REG §1.2–1.3 podaje około 45 pytań, 75 minut, próg 70% punktów i możliwość uzasadnionego wniosku o 90 minut dla języka innego niż ojczysty. Stałe **45 pytań** pełnej formy i porównanie niezaokrąglonego wyniku są odziedziczonym wyborem produktu, nie dodatkową normą certyfikatora. [S-BP F11]

Pomoc, znajomość pytania i pewność odpowiedzi nie zmieniają scoringu. Zmieniają kwalifikację dowodu. W K liczba wierszy nie musi wynosić cztery; waga nie jest liczbą wierszy. Nie wymyślać odrębnych oficjalnych punktów za otwarte zadania treningowe.

### Bramka pakietu — QG

| Kryterium | Warunek przyjęcia konkretnej rewizji |
|---|---|
| QG-01 Warunki | Recenzent rozstrzyga zadanie bez dopisywania istotnych założeń |
| QG-02 Klucz i format | Klucz pełny i jednoznaczny, parametry zgodne z formatem, wszystkie decyzje ocenialne |
| QG-03 Explanation | Każda opcja/stwierdzenie ma lokalne rationale i pewną regułę; warstwy nie są sprzeczne |
| QG-04 Zakres | Primary criterion, poziom, role pozostałych powiązań i granice dowodu sprawdzone |
| QG-05 Provenance | Każde istotne rozstrzygnięcie ma zlokalizowane wsparcie i jawny autorski krok zastosowania |
| QG-06 Język i dostęp | Negacja, kwantyfikatory, pary wartości i reprezentacje nie zmieniają sensu ani nie ujawniają klucza |
| QG-07 Rodzina | Rodzina i znane bliskie/tłumaczone wersje oznaczone; dla nowości ich review zakończone |
| QG-08 Prawa | Zamierzone użycie zgodne z ustaloną podstawą; brak nierozstrzygniętego pochodzenia |
| QG-09 Review | Faktyczna odrębna kontrola i decyzja o tym użyciu tej rewizji; brak istotnego otwartego sporu |
| QG-10 Cel aktywności | Zależności obiecanej funkcji kompletne: np. K4/follow-up dla pełnej naprawy, K6 dla Sprawdzenia |

**Wady blokujące nowe punktowane użycie:** niepewny klucz; brak rationale choćby jednej wymaganej opcji; ukryty warunek; niepełny K; nieznane k; niezgodny scoring; brak podstawy istotnej reguły; nierozstrzygnięte znaczenie tłumaczenia; nieustalone prawa; brak wymaganego review. Nie naprawiać K przez ciche usunięcie wiersza: zmieniłoby m, punktację i zakres. QG nie jest deklaracją walidacji psychometrycznej.

## B01-08 — Misconception i remediacja

**Odziedziczone: FD-09, FR-015–016.** Rozdzielić siedem elementów:

| Element | Co wiadomo / co trzeba dostarczyć |
|---|---|
| Zaobserwowany błąd | Oddana decyzja i klucz w określonej wersji; pominięcie, nadmiar i błędna ocena nie są tym samym |
| Hipoteza błędnej reguły | Falsyfikowalne przypuszczenie autora, które mogłoby prowadzić do tej decyzji |
| Alternatywne wyjaśnienia | Przeoczenie przesłanki/instrukcji, nieznany termin, błąd obsługi, zgadywanie, wadliwy item, inne rozumowanie |
| Sonda rozdzielająca | Zadanie/uzasadnienie z przewidywaniami dla hipotezy i alternatyw; określony timing i sposób oceny |
| Korekta | Prawidłowa reguła i jej zastosowanie do ujawnionego błędu; może działać bez diagnozy |
| Follow-up | Adekwatny inny przypadek tego samego rozróżnienia, z kluczem/rubryką i określoną bliskością |
| Dowód po korekcie | Faktyczne wykonanie i metoda oceny; świeże instrukcje oraz nowość zachowane w opisie |

**Minimum zwykłego feedbacku:** pewna decyzja, reguła, przesłanka i jej zastosowanie do opcji; nie wymaga hipotezy ani sondy. **Minimum pełnej remediacji:** dodatkowo celowana korekta, odpowiedni follow-up i warunek wyjścia. **Minimum interwencji odnoszącej się do konkretnej misconception:** dodatkowo błędna reguła, alternatywy, sonda rozdzielająca i jawny stan wsparcia hipotezy osoby.

Status treści hipotezy: przewidziana przez autora / zaobserwowana w określonych danych / zwalidowana diagnostycznie w opisanych warunkach. Status dotyczący osoby: nierozstrzygnięta / obserwacje wspierają / obserwacje osłabiają / brak wystarczających danych. Te osie nie są wymienne. „Potwierdzone” musi wskazywać kryterium potwierdzenia i ograniczenie; nie oznacza trwałej cechy osoby.

Jeżeli feedback ujawnił już poprawną regułę, późniejsza sonda sprawdza bieżące rozumienie, a nie odtwarza pewnie przyczyny pierwotnego wyboru. Sonda przed korektą wymaga neutralnej treści oraz odpowiedzi umożliwiającej rozdzielenie hipotez. Jedno trafienie po korekcie nie waliduje dystraktora jako narzędzia diagnozy.

**Wyjście z gałęzi:** zachować kryterium, pierwotny błąd, dotychczasową pomoc, liczbę nieudanych follow-up i przesłankę dalszego kroku. Po **drugim nieudanym follow-up tej samej gałęzi** zaproponować inną pomoc/podstawę lub przerwę, zamiast automatycznego trzeciego podobnego zadania. Błąd uruchamiający naprawę nie jest pierwszym follow-up. To odziedziczona hipoteza operacyjna, nie prawo uczenia. Uczeń może wyjść wcześniej; nierozwiązane kryterium pozostaje do kontroli, bez blokowania całej nauki. [S-BP FR-016, FR-021]

## B01-09 — Rodziny, warianty i rezerwa

**Rodzina** grupuje zadania, dla których zapamiętanie rozwiązania lub charakterystycznej konstrukcji istotnie ułatwia następne bez ponownego wykonania wymaganej czynności. Nie grupuje wszystkiego o tym samym pojęciu. Właściwa nauka ogólnej reguły ma pomagać w nowym zadaniu i nie jest sama w sobie przeciekiem.

| Relacja wariantów | Przesłanka | Dopuszczona interpretacja |
|---|---|---|
| Ta sama treść / przekład / kosmetyczny wariant | Nazwy, kolejność, powierzchowna parafraza albo język bez zmiany rozstrzygnięcia | To samo zapamiętywalne rozwiązanie; rodzina wspólna, bez nowej niezależnej okazji |
| Bliski wariant | Wspólna charakterystyczna struktura, klucz lub analogiczne wskazówki mimo pewnych zmian | Trening może być użyteczny, ale ekspozycja na bliski odpowiednik ogranicza ocenę nowości |
| Znacząca nowa realizacja kryterium | Inny istotny warunek, rodzaj wpływu, reprezentacja lub rozstrzygnięcie; nadal właściwy poziom | Kandydat na nowy kontekst. Nowa rodzina wymaga dodatkowego review przecieku, nie samej deklaracji autora |

**Test rodziny do authoringu:** (1) wskazać zmienione przesłanki, (2) ustalić, czy zapamiętana odpowiedź/pattern wystarczy bez badanego rozróżnienia, (3) sprawdzić, czy zachowano kryterium i poziom, (4) opisać pozostałe wskazówki i argument różnicy, (5) zrecenzować porównanie. Ekspercka porównywalność trudności nie jest kalibracją ani równoważnością psychometryczną. Dodatkowa trudność czytania nie stanowi lepszego dowodu tego samego konstruktu.

Rodzina jest podstawowym grupowaniem; R21 pozwala zaznaczyć bliskość również między dwiema rodzinami. Nie wnioskuje się automatycznie przechodnio z „A bliskie B, B bliskie C”, że A i C są równoważne. Przy nierozstrzygniętym ryzyku przecieku kandydat nie służy do mocnej deklaracji nowej rodziny. Zmiana identyfikatora lub granicy rodziny nie zeruje wcześniejszej historii; wymagany przegląd historycznej ekspozycji.

**Dwie odrębne kwalifikacje:** redakcyjna rola reserved oraz przydatność konkretnej rewizji dla konkretnej osoby w chwili doboru. Chroniony item nie pojawia się w zwykłym czytaniu, wyszukiwaniu, snippetach, podglądzie, przykładzie punktowania ani jako odsłonięty bliski follow-up. Reviewer może znać rozwiązanie; dla niego nie jest ono nieznaną rezerwą.

Nowość ustala się **przed pierwszym pokazaniem zadania w bieżącej próbie**, z dostępnej wcześniejszej historii. Następnie zapisuje się ekspozycję. To pierwsze pokazanie nie unieważnia bieżącej nowej próby, ale wyklucza przedstawienie następnej jako pierwszego kontaktu. W Sprawdzeniu kontrola formy odbywa się także przed startem. Powrót do pozycji w tej samej niezakończonej próbie nie jest kolejnym nowym pomiarem.

Przeciek całego stemu/rozwiązania wyklucza nowość tej pozycji dla dotkniętej osoby; ocenić bliskie warianty. Częściowy przeciek ma opis zakresu; jeśli wpływ niepewny, nie przyznawać najmocniejszej etykiety nowości. Ujawnienie jednej osobie nie zużywa automatycznie rezerwy dla innych. Błąd globalnego udostępnienia może dotknąć wiele osób — zakres ustalać z faktów, a nie zakładać prywatności.

## B01-10 — Semantyka dowodu ucznia

### Minimalny kontekst obserwacji

K7 zachowuje osobno: osobę i aktywność, odpowiedź, wynik/parametry punktowania, wersję pytania i kryterium, źródło oceny, warunki pomocy, historię itemu i bliskiej rodziny, ekspozycję na rozwiązanie, zmienione warunki, odstępy czasu, przerwy i ograniczenia kompletności historii. Samoocena i deklaracja zewnętrznej nauki pozostają deklaracjami.

| Wymiar | Wymagane rozróżnienie | Zakazany wniosek |
|---|---|---|
| Punkty | Pełny/częściowy/zerowy wynik oraz konkretne decyzje | P=1/2 nie oznacza 50% mastery EO; zero za nadmiar nie dowodzi zera wiedzy |
| Pomoc przed odpowiedzią | Rodzaj, treść, kryterium i moment ujawnienia; także niezamierzony tytuł/podpis | Zamknięcie panelu nie odzyskuje samodzielności tej samej próby |
| Pomoc po zatwierdzeniu | Oddzielne późniejsze ujawnienie; w Sprawdzeniu dopiero po finalizacji całości | Nie odbiera wstecz niezależności zakończonej odpowiedzi |
| Wcześniejsza instrukcja | Nauka kryterium przed nowym zadaniem, odrębna od pomocy do trwającej odpowiedzi | Świeżo nauczona reguła nie dowodzi retencji, nawet przy braku bieżącej pomocy |
| Znajomość itemu | Znany/nowy według historii/niepotwierdzony, stopień ekspozycji i przekłady | Znany item bez hintu nie staje się nowym kontekstem |
| Znajomość rodziny | Związek wcześniejszych ekspozycji z tą rodziną i bliskimi pozycjami | Nowy identyfikator nie zapewnia nowego rozwiązania |
| Ocena | Klucz, recenzowana rubryka i oceniający; samoocena osobno | LLM lub samoocena nie udają niezależnej recenzji eksperckiej |
| Samodzielność | Brak zarejestrowanej/deklarowanej pomocy merytorycznej do odpowiedzi; zakres obserwacji jawny | Aplikacja nie dowodzi braku pomocy zewnętrznej |
| Nowy kontekst | Review znaczącej zmiany + historia osoby + odpowiednie wykonanie | Inna nazwa miasta albo kolejność opcji nie wystarcza |
| Retencja | Rzeczywisty odstęp od istotnego kontaktu z tym kryterium, wykonanie i warunki | Sam odstęp od dawnej próby nie dowodzi utrzymania wiedzy |
| Dostępność | Równoważna reprezentacja, klawiatura, czytnik, powiększenie | Narzędzie dostępu nie jest pomocą merytoryczną |
| Neutralny słownik językowy | Warunek profilu próby: dopuszczony słownik bez definicji RE; użycie odnotowane osobno od pomocy dziedzinowej | Samo użycie dopuszczonego słownika nie odbiera samodzielności i nie wymaga konwersji do Nauki. Glossary CPRE i objaśnienia RE nie korzystają z tego wyjątku |
| Pewność | Opcjonalna deklaracja przed feedbackiem i jej brak jako brak danych | Nie zmienia punktów; niepewność nie dowodzi zgadywania, wysoka pewność nie diagnozuje misconception |

**Próba otwarta:** rubryka pozwala wskazać kryteria poprawności. Jeżeli uczeń sam porównuje wypowiedź ze wzorcem, zachować samoocenę, nawet gdy wzorzec był recenzowany. Klucz może obiektywnie ocenić klasyfikację, lecz nie ocenia automatycznie swobodnego uzasadnienia. To dwa źródła oceny w jednej aktywności.

### Dwa zegary — na poziomie kryterium

Dla bieżącej próby ustalić z historii **sprzed jej pierwszego przedstawienia**:

1. **Poprzednia samodzielna próba tego kryterium** — ostatnie wykonanie bez pomocy, także jeśli błędne; sukces można wskazać dodatkowo, ale nie zastępuje tej daty.
2. **Ostatni istotny kontakt z tym kryterium** — rozstrzygająca instrukcja, korekta, hint, odsłonięte rozwiązanie albo ćwiczenie. Kontakt ma zakres kryteriów, źródło i czas; przy kontakcie ciągłym znaczenie ma jego koniec.

Zachować daty i oba rzeczywiste odstępy. Bieżące pokazanie zadania nie może samo wyzerować wstecz odstępu kwalifikującego właśnie rozpoczętą próbę. Po jej wykonaniu staje się nowym kontaktem dla kolejnych prób. W zestawie kolejne pytanie może ćwiczyć to samo kryterium: późniejsza decyzja nie jest drugą niezależną tygodniową obserwacją. Reviewer sprawdza też, czy zadania nie zdradzają sobie rozwiązań.

Kontakt z innym pojęciem nie resetuje całego EO. Materiał SUPPORTS całe EO może rzeczywiście ujawniać tylko część kryteriów; C musi opisać zakres ujawnienia fragmentu. Niepełna historia, niedokładny moment lub niepewność, czy dotarto do fragmentu, pozostają ograniczeniem. „Wyświetlono” oznacza możliwość ekspozycji, nie dowód uważnego przeczytania ani wiedzy.

**Przykład kontrolny:** dawna samodzielna próba 7 dni temu, nowe objaśnienie minutę temu: zapisać 7 dni i 1 minutę; trafienie jest relearning/fresh performance, bez etykiety siedmiodniowej retencji. Nieznany item może nadal być nowym itemem. Dobrowolnie zgłoszona nauka poza produktem aktualizuje znany kontakt, z etykietą deklaracji; jej niezgłoszenie nie poświadcza braku zewnętrznej nauki.

### Pięć kategorii, bez nowego algorytmu mastery

Zachowane kategorie: **brak wystarczających danych; poznane/z pomocą; wykazane samodzielnie; wykazane w nowym kontekście; utrzymane po przerwie**. To opisy dowodów z zakresem, a nie obowiązkowa drabina. Można od razu wykonać nowe zadanie bez wcześniejszej lektury. Można wykazać odroczone wykonanie znanego itemu bez wykazania nowego kontekstu.

Przy małej liczbie prób raportować fakt, np. „jedna samodzielna poprawna próba”, a nie pełne opanowanie. Odziedziczona propozycja mocniejszego dowodu — co najmniej dwa samodzielne sukcesy w istotnie różnych zadaniach/rodzinach, jeden odroczony — pozostaje **DESIGN HYPOTHESIS**, bez automatycznego zaliczania całego EO. Pilotażowa etykieta odroczona wymaga co najmniej 24 godzin od istotnego kontaktu; okna 3–7 i około 14 dni nie są optimum naukowym. B nie dodaje progu mastery, modelu psychometrycznego ani p(zdania). [S-BP F12, FD-13–16]

Błąd tworzy potrzebę kontroli konkretnego kryterium. Nie usuwa dawnych sukcesów i nie propaguje się do innych EO. Brak zadania w korpusie, nieaktywność, brak deklaracji pewności i kliknięcie „pomiń” nie są obserwacjami niekompetencji. Rozbieżne wyniki mogą oznaczać trudniejszy wariant albo wadliwy item; potrzebują jawnej interpretacji.

## B01-11 — Proweniencja, język, prawa i zmiany

### Jednostką sprawdzania jest twierdzenie

Adresowalne twierdzenie może być częścią definicji, rationale, comparison, klucza albo relacji. Nie wymaga osobnego dokumentu. Jego opis obejmuje: treść i granice, kategorię wypowiedzi z B01-01, pochodzenie normatywne/objaśniające/autorskie, źródło i wersję, sekcję/EO/hasło/stronę, język, faktyczny zakres odczytu, osobę i datę sprawdzenia, wynik kontroli, zależne użycia i ograniczenia praw.

**Norma a objaśnienie:** regulamin uzasadnia scoring; syllabus zakres; Glossary znaczenie; Handbook może rozwijać objaśnienie. Autorski wniosek dotyczący fikcyjnego rejestru nie jest dosłowną tezą IREB: wymaga źródłowej reguły, jawnych przesłanek scenariusza i sprawdzenia rozumowania. „Źródło mówi o kontekście” nie wystarcza do uzasadnienia dowolnej granicy.

**PL/EN:** termin preferowany i alias mają wskazany sens oraz źródło etykiety. N-GLO-PL podaje oficjalne polskie terminy, nie zbiór polskich definicji zdaniowych. Własny polski tekst oznaczać jako autorskie objaśnienie/parafrazę lub autorski przekład. Tłumaczenie zadania kontroluje polecenie, negację, „dokładnie/najlepiej”, warunki, k/m, zakres klucza i wszystkie rationale. Nierozstrzygnięta równoważność blokuje tę reprezentację, nie zmusza do wycofania poprawnego oryginału, jeśli jest samodzielnie dopuszczony.

**Prawa do zamierzonego użycia:** zapisać właściciela/pochodzenie, podstawę, rodzaj działania (link, cytat, parafraza, własny przykład, diagram, reprodukcja pytania, przekład), kanał i ograniczenia, sprawdzającego, datę i wynik. Ustalone prawa do linkowania nie są prawami do skopiowania całej definicji. Użycie source jako podstawy własnego opracowania nie oznacza prawa do dowolnej reprodukcji. Przy braku ustaleń udostępniać wyłącznie dopuszczony odsyłacz, nie sporną treść. Nie włączać pytań poufnych ani brain dumps. B nie wydaje ogólnej opinii prawnej ani nie poświadcza przyszłego kanału dystrybucji.

### Analiza zmiany

| Zmiana | Co trzeba ponownie ocenić | Co zachować i jak ograniczyć użycie |
|---|---|---|
| Nowe źródło lub nowa rewizja | Konkretne twierdzenia R15, terminologię, poziomy, kryteria i zależne klucze/relacje | Poprzedni profil i jego zastosowania; nie przepinać automatycznie wszystkich treści do „najnowsze” |
| Definicja/Concept | Objaśnienia, comparisons, przykłady, dystraktory, rubric i przypisania EO | Historię sensu i rewizji; gdy sens istotnie różny, nie scalać dawnych dowodów bez oceny zgodności |
| Relacja | Jej kierunek, warunek, cel i funkcje zależne od ścieżki | Poprawne końce mogą pozostać; wstrzymać nieuzasadnione powiązanie, a nie cały temat bez przyczyny |
| Stem/opcja/warunek | Klucz, rationale, scoring, poziom, rodzina i dostępny język | Nowa rewizja; dawny stem i decyzje osoby pozostają; istotnie inny przypadek otrzymuje nowe zadanie |
| Klucz/scoring | Wszystkie odpowiedzi i agregaty oparte na wadliwej wersji; flagi remediacji, progres i plany | Pierwotną ocenę oraz oddzielne przeliczenie z podstawą i datą. Bez nowej próby i bez zmiany dawnych odpowiedzi |
| Rationale/feedback | Czy sam klucz pozostaje pewny; ekspozycje na błędne wyjaśnienie, późniejsze kontakty i korekty | Błąd objaśnienia może wymagać sprostowania także u osoby z poprawnym wynikiem |
| Rodzina/bliskość | Historyczną nowość pozycji i form oraz kwalifikacje dowodów | Nie resetować ekspozycji; oznaczyć dawną błędną interpretację nowości |
| Przekład/alternatywa dostępna | Czy zmieniono konstrukt, klucz lub ujawniono zasadę | Wstrzymać wadliwą reprezentację; nie interpretować bariery jako braku wiedzy |

**Zgłoszenie a wada:** samo zgłoszenie zapisuje wątpliwość i nie zmienia klucza automatycznie. Wiarygodny nierozstrzygnięty spór o klucz/zasadnicze rationale wstrzymuje nowe użycie i mocne wnioski do review. Gdy kontrola wykazuje wadę, zastosować jawne przeliczenie, jeśli warunki historycznego zadania nadal jednoznacznie wspierają poprawną ocenę. Jeżeli nie, oznaczyć obserwację jako niediagnostyczną i zaproponować inne zadanie. Przy wyłączeniu itemu z interpretacji formy zachować oryginalny wynik, wyłączenia i ewentualny wynik pomocniczy z nowym mianownikiem; zmodyfikowana forma nie staje się bez ponownego audytu porównywalnym mockiem.

Nie wygaszać review automatycznie przy dowolnej zmianie daty publikacji strony. Wygasa jego stosowalność tam, gdzie zmiana może dotknąć znaczenia lub warunków użycia; sprawdzenie „bez wpływu” także musi mieć argument. Źródło chwilowo niedostępne może nadal mieć wcześniej sprawdzoną lokalizację i rewizję; odnotować brak bieżącego dostępu, bez udawania nowej kontroli. Jeżeli sama podstawa nie została nigdy odczytana, pozostaje niezweryfikowana.

## B01-12 — Kompletność zależna od zamierzonej aktywności

Kompletność jest odpowiedzią **„czy ten pakiet, w tej rewizji i dla tej osoby, wystarcza do tego użycia?”**. Nie jest jedną globalną etykietą. Materiał, pytanie, temat, wydanie i historia ucznia mają odrębne ograniczenia.

| Kod użycia | Konieczne informacje i kontrola korpusu | Warunki aktywności/osoby | Fallback |
|---|---|---|---|
| U-READ — lektura | Zweryfikowany sens i granice fragmentu, źródło, język, prawa i dopuszczenie do lektury. Dopuszczalny pewny fragment niepełnego tematu | Widoczny zakres; odnotowana możliwość ekspozycji, bez dowodu wiedzy | Pewny mniejszy fragment lub odsyłacz; bez deklaracji kompletnego K1 |
| U-GUIDED — praktyka kierowana | Komplet K2 i odpowiednia wiedza K1/K3; QG-01–09. Pomoc nie usprawiedliwia niepewnego klucza | Pomoc dozwolona w Nauce, zakres i moment rejestrowane | Lektura/refleksja bez punktowanego pozornego pytania |
| U-INDEPENDENT — praktyka samodzielna | Komplet K2, kryterium i ocena, bez ujawnienia klucza przed odpowiedzią | Brak bieżącej pomocy do odpowiedzi; historia nowości jawna. Znany item może ćwiczyć samodzielne wykonanie | Wynik pozostaje praktyką znanej pozycji; bez nowego transferu. Nieznane warunki ograniczają samodzielność |
| U-REMEDIAL — pełna naprawa | K4, pewna reguła i korekta, adekwatny follow-up K2/K5, wyjście. Sonda i alternatywy tylko dla konkretnej diagnozy | Obserwacja dotyczy kryterium; wsparcie i kolejne próby zachowane | Zwykłe wyjaśnienie bez diagnozy albo korekta bez zweryfikowanej poprawy; możliwość kontynuacji |
| U-REVISION — powtórka | Revision Prompt mierzący kryterium, klucz/rubryka, zakres K5 i K7 | Dwa odstępy sprzed próby, instrukcja dopiero po retrieval; znany prompt dozwolony z ograniczeniem | Praktyka wcześniejsza/znana albo relearning, bez etykiety odroczonego transferu |
| U-RESERVED — niezależna rezerwa | QG kompletne; rola chroniona, recenzja rodzin/przecieków i zgodność wszystkich punktowanych decyzji z deklarowanym zakresem | Historia osoby sprzed ekspozycji nie ujawnia itemu/rozwiązania/bliskiej rodziny; niepewność historii ogranicza kwalifikację | Trening lub inna forma. W rezerwie CPRE nie może być ukrytych punktów za kryterium wyłącznie pomocnicze |
| U-TOPIC — sprawdzenie tematu | K6: blueprint wycinka, wystarczające zadania i punkty, kryteria i ograniczenia; zakres może być węższy niż pełny EO | Level 1 bez limitu; bez pomocy i feedbacku do finalizacji całości; nowość zadeklarowana i zabezpieczona, jeśli obiecana niezależna ocena | Mniejszy nazwany wycinek lub practice. Wynik nie oznacza opanowania całego FL ani pełnego EO |
| U-MOCK — pełna forma na czas | Audyt szerszego korpusu pełnego FL, obowiązków terminologicznych i poziomów; autorski blueprint obejmujący wszystkie EU, A/P/K, właściwe wagi, język, profil norm i zatwierdzona nowa forma | Level 2; zgodny profil czasu, brak pomocy i feedbacku w trakcie; kontrola ekspozycji i przerw; brak nieuzasadnionych punktów poza zakresem | U-TOPIC albo trening znanej formy; nie dobierać po cichu znanych pozycji i nie generować rezerwy na żywo |

Pełna forma nie musi mierzyć wszystkich kryteriów wszystkich EO w jednym podejściu. Pełna gotowość korpusu oraz ograniczony zakres dowodu konkretnej formy pozostają odrębne. Zatwierdzenie eksperckie, nowość dla osoby i zgodność formalna nie poświadczają trudności równej egzaminowi ani prognozy wyniku.

**Widoczność:** w aktywnym Sprawdzeniu ujawniać wyłącznie treść zadania, neutralne instrukcje, maksymalne wagi, stan odpowiedzi, oznaczenia do przeglądu oraz warunki czasu. Możliwość oznaczenia pytania do powrotu jest dostępna; jej użycie przez ucznia jest opcjonalne. Brak oznaczenia nie jest brakiem odpowiedzi ani sygnałem wiedzy. Dopuszczony w profilu neutralny słownik językowy jest osobnym warunkiem próby, nie pomocą RE; odnotowanie jego użycia nie zmienia samo w sobie niezależności ani nie konwertuje próby do Nauki. Nie ustanawia to obowiązku tworzenia funkcji słownikowej. Glossary CPRE i inne definicje dziedzinowe pozostają zamknięte. Klucz, osiągnięte punkty, EO tags, źródła, hints, rationale, wiedza i zdradzające opisy są zamknięte do finalizacji całości. Odnosi się to do każdej ścieżki F06, także podpisów, tekstu alternatywnego i powrotu z historii. Samo zachowanie pełnej treści redakcyjnej nie oznacza prawa jej ujawnienia w danym momencie.

**Przerwanie:** test tematu bez limitu może być wznowiony jako ta sama próba, z przerwą i bez pomocy. W mocku zwykłe wyjście nie zatrzymuje limitu; jawna pauza lub niewiarygodny czas ograniczają kwalifikację formy. Konwersja dowolnego Sprawdzenia do Nauki kończy niezależny kontrakt całej próby i nie jest odwracalna dla tej próby. Wcześniejsze odpowiedzi i ich rzeczywiste warunki pozostają; nie nadaje się automatycznie im statusu ukończonego niezależnego testu. [S-BP F10–F11, FR-026–027]

## B01-13 — Klasy braków i zachowanie bez dopowiadania

| Kod | Rodzaj braku | Skutek i odpowiedzialność |
|---|---|---|
| LUKA-01 | Treść nieopracowana | Brak pokrycia korpusu. C opracowuje; uczeń dostaje jawny wycinek lub inną zatwierdzoną aktywność |
| LUKA-02 | Treść istnieje, brak weryfikacji/review | Nie nadaje się do publikacji w wymaganym użyciu. C/recenzent sprawdzają; nie zastępuje ich wiarygodne brzmienie tekstu |
| LUKA-03 | Niepewna lub brakująca relacja | Pominąć link/prerequisite; samowystarczalny poprawny materiał może pozostać. C uzasadnia instancję |
| LUKA-04 | Niekompletny klucz, scoring lub zasadnicze rationale | Wstrzymać cały nowy punktowany pakiet; istniejące próby objąć kontrolą wpływu. C poprawia i poddaje review |
| LUKA-05 | Brak adekwatnego wariantu/nowej rodziny | Możliwa korekta i utrwalenie; nie potwierdzać nowej realizacji/transferu. C uzupełnia warianty przed odblokowaniem obietnicy |
| LUKA-06 | Niewystarczający dowód ucznia | Korpus może być gotowy; zaproponować ocenialną próbę. Brak danych nie jest porażką osoby ani brakiem treści |
| LUKA-07 | Niepełna historia ekspozycji, pomocy lub czasu | Zachować znany wynik, opisać niepewność nowości/retencji; nie odtwarzać fikcyjnie danych. Warstwa aktywności dostarcza historię |
| LUKA-08 | Źródło lub prawa nierozstrzygnięte; treść sporna | Wstrzymać dotknięte użycie. C wyjaśnia podstawę i zamierzone prawa; nie zastępować źródła LLM |
| LUKA-09 | Chwilowa niedostępność wcześniej sprawdzonej treści | Zachować status historycznej kontroli i ślad niedostępności; pozwolić wrócić do sesji, bez nowej generacji. Nie utożsamiać z nigdy nieopracowaną treścią |
| LUKA-10 | Wadliwa/niedostępna reprezentacja lub przeciek | Nie wnioskować o wiedzy z bariery; poprawić reprezentację. Przy przecieku zachować ekspozycję i ograniczyć niezależność |
| LUKA-11 | Blueprint/rezerwa nie wystarczają do zadeklarowanego sprawdzenia | Zmniejszyć jawny zakres lub zaproponować practice; C audytuje formę. Brak mocniejszej etykiety nie blokuje zwykłej nauki |

Jeśli nie wiadomo nawet, którego warunku kompletności brakuje, nie nadawać etykiety gotowości. Zachować pewne fakty, umożliwić powrót i skierować niejasność do kontroli. Bezpieczny fallback również musi mieć źródło i dopuszczone użycie; „podobna” wygenerowana odpowiedź nie jest fallbackiem.

## B01-14 — Niezmienniki i warunek przekazania

1. SUPPORTS, MEASURES, MENTIONS i EVIDENCE_FOR nie są zamienne.
2. Każde punktowane rozstrzygnięcie ma klucz, rationale, regułę, warunek i źródłową podstawę.
3. Żaden dystraktor ani blank nie diagnozuje automatycznie misconception.
4. Wersja treści, status publikacji, prawa, review i dowód osoby są odrębnymi informacjami.
5. Nowość dotyczy osoby i chwili sprzed ekspozycji; ogólna nauka kryterium nie zużywa wszystkich jego rodzin.
6. Dwa odstępy czasu, pomoc i znajomość pozostają oddzielne od punktów oraz od siebie.
7. Ocena według klucza nie staje się oceną swobodnego uzasadnienia; samoocena pozostaje jawna.
8. Powrót nie tworzy nowej próby i nie przepisuje pierwszego wyniku.
9. Zmiana klucza lub zakresu nie wymazuje historii; wymaga oceny wpływu.
10. Brak informacji blokuje odpowiednią obietnicę, a nie automatycznie całą naukę.
11. Nieznany mianownik, częściowe EO i brak niezależnych rodzin pozostają widoczne; brak p(zdania) i nowego algorytmu mastery.
12. Kontrakt nie wymaga grafu wizualnego, technologii ani osobnego fizycznego obiektu dla każdej roli.

**Weryfikacja:** B02 zachowuje indywidualny ślad wszystkich 38 FR i całego F13; B03 sprawdza ścieżki oraz przypadki wadliwe. B04 wskazuje decyzje, historię kontroli i zadania C. **G1 pozostaje otwarte do decyzji właściciela projektu.** **G2** wymaga zweryfikowanych źródeł/praw, kompletnego i zrecenzowanego pakietu treści deklarowanego przekroju oraz jego odbioru; walkthrough G3 nie jest dodatkowym warunkiem G2. **G3** jest osobnym sprawdzeniem A/P/K, korekty, powrotu i nowej próby oraz symulacji odroczonej kontroli na konkretnych wersjach treści. Może być dokumentowany z kartami i moderatorem zgodnie z F14; wymagany udział ucznia określa jawnie przyjęty protokół, nie sam kontrakt B. Empiryczny pilot z rzeczywistym odstępem i obserwacją uczniów pozostaje odrębną walidacją skuteczności. Symulacja czasu nie jest dowodem retencji. Żadna z tych bramek nie jest zamykana automatycznie przez przygotowanie dokumentów.
