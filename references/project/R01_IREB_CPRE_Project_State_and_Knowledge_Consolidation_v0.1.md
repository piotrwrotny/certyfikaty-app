# R01 — Stan projektu i konsolidacja wiedzy v0.1

**Projekt:** IREB CPRE Foundation Level Learning System  
**Stan odniesienia:** 1 listopada 2026, Europe/Warsaw  
**Rola:** audyt stanu, wymagań, semantyki i przekazania; bez realizacji fazy D  
**Status:** FOR REVIEW — propozycja kanonicznego obrazu stanu, do akceptacji właściciela. Nie zastępuje Sources ani nie zmienia ich statusów.  
**Powiązane wyniki:** R02 — dowody, konflikty, luki, bramki i działania; R03 — krótki brief następnej rozmowy.

## 1. Jednoznaczny stan projektu

**Projekt jest na odbiorze pakietu B i przygotowaniu do właściwego authoringu C.** Badania A oraz funkcjonalny blueprint A2 są opracowane. B01–B04 istnieją jako strukturalnie kompletny pakiet do przeglądu G1; akceptacja jest niepotwierdzona. C wykonał przygotowanie źródeł, terminology discovery i propozycję standardu, ale nie stworzył trzech zleconych pakietów edukacyjnych. C03 jest manifestem wstrzymania, nie korpusem. Nie wykonano G2, rzeczywistego walkthrough G3 ani handoffu G4. D pozostaje przyszłą fazą. [S-START §5–7; B01 nagłówek; B04-01/07; C03-01/04; C04-01/09]

**Wykonane i zaakceptowane to odrębne stany.** W bieżącym zleceniu właściciel wskazuje kanon, Blueprint i kontrakt funkcjonalny jako obowiązującą podstawę. Można stosować je jako baseline A/A2 bez ponownego projektowania. W zestawie nie ma osobnego historycznego protokołu akceptacji konkretnych bajtów A/A2; niniejszy audyt go nie tworzy. B i C jawnie oczekują odrębnych decyzji, których bieżące polecenie audytu nie udziela.

| Faza | Co rzeczywiście istnieje | Akceptacja / dopuszczenie |
|---|---|---|
| A — research i pedagogika | Raport D1–D15, kanon 1.0, indeks EO, dowody i ograniczenia | Obowiązująca podstawa projektu; brak lokalnej walidacji skuteczności całego programu |
| A2 — functional learning experience | F01–F16, FR-001–038, UC-01–18, FD-01–28, F13 i ilustracje | Baseline zachowań wskazany przez właściciela; nie jest gotowym UI ani przetestowaną aplikacją |
| B — knowledge architecture | Cztery dokumenty, model, traceability, próby logiczne, decyzje | FOR REVIEW; G1 otwarte; niezależny review B niepotwierdzony |
| C — acquisition i authoring | 9 wpisów źródeł, 13 terminów, 16 typów authoringu, manifest i plan QA | Przygotowanie przed G1; standard proponowany; 0/3 kompletnych pakietów C; G2 otwarte |
| D — application product design | Brak szczegółowego projektu aplikacji | Celowo odłożone; można rozpocząć odrębną rozmowę warunkowo, bez automatycznej zmiany bramek |
| Implementacja | Brak przekazanego, zaakceptowanego przyrostu technicznego w Sources | Nie rozpoczynano w tym audycie; G4 zablokowane |

## 2. Klasyfikacja informacji i hierarchia

- **FACT:** sprawdzalna zawartość pliku lub odczytana norma, z zakresem kontroli.
- **RESEARCH FINDING:** wynik wcześniejszego badania opisany w S-DR; nie jest wynikiem tego audytu.
- **INTERPRETATION:** wniosek z analizy; w tym ocena strukturalnej kompletności B i gotowości do rozmowy D.
- **DESIGN HYPOTHESIS:** lokalny mechanizm, parametr lub oczekiwany efekt wymagający walidacji.
- **FUNCTIONAL DECISION:** zachowanie przyjęte w baseline A2; ADOPT nie poświadcza skuteczności empirycznej.
- **PROPOSED DECISION:** B-DEC, propozycje C02 oraz rekomendacje R; nie zatwierdzają się przez użycie słowa „musi”.
- **UNVERIFIED / UNKNOWN:** brak dowodu; nie oznacza automatycznie fałszu ani nieistnienia.

Pierwszeństwo według S-START §3: oficjalny syllabus rozstrzyga zakres i EO; regulamin — format/scoring; Glossary — terminy i znaczenie; Handbook — objaśnienia. Kanon rozstrzyga zasady pedagogiczne, Blueprint zachowania, S-FTC obowiązki informacyjne. B operacjonalizuje te obowiązki po akceptacji; C dostarcza konkretne instancje i ich kontrolę. S-DR pozostaje bazą dowodową i kontekstem historycznym. R01 konsoliduje stan, nie zastępuje definicji z tych źródeł.

Pełna informacja o akceptacji powinna rozróżniać: **istnienie → kompletność dla danego celu → kontrolę autorską → rzeczywiście niezależną recenzję → decyzję właściciela o wersji → dopuszczenie do konkretnego użycia.** Strzałki nie oznaczają automatycznego przejścia.

## 3. Rejestr wszystkich 13 artefaktów i mapa Sources

Skróty w dalszej części są odwołaniami do poniższych dokładnych nazw. Wszystkie 13 pozycji są dostępne w bieżącym zestawie Sources, po jednej kopii każdej nazwy. Wszystkie mają stan odniesienia 1.11.2026. Brak deklarowanego numeru wersji oznaczono wprost. Numery SHA-256 kopii podaje R02.

| ID / dokładna nazwa / wersja | Odpowiedzialność, faza i rodzaj | Rzeczywista zawartość i kompletność | Status źródłowy, review i akceptacja | Nadrzędne → zależne; użycie i otwarte działania |
|---|---|---|---|---|
| S-START — `00_IREB_CPRE_START.md`; bez numeru | Router całego projektu; kontekst kanoniczny | Cel, hierarchia, niezmienniki, mandaty, G0–G4; router działa, mapa nie obejmuje jeszcze B/C | „Proponowany plik główny”; warunek obowiązywania po dodaniu pięciu Sources spełniony. Brak osobnego protokołu review | Cztery bazowe Sources → wszyscy agenci. Wiążące granice wg zlecenia; zaktualizować routing i manifest 5→13, później dołączyć przyjęte R |
| S-PED — `00_IREB_CPRE_Fundament_pedagogiczny.md`; 1.0 | Kanon pedagogiczny A | Cele, dziesięć zasad, pętla, profile dowodów, hipotezy pilota; kompletny handoff pedagogiczny | „Dokument kanoniczny”; brak niezależnego protokołu recenzji w zestawie. Nie jest walidacją programu | S-DR → A2/B/C/D. Obowiązują zasady; historyczny dostęp do Handbook czytać łącznie z nowszymi zakresami kontroli |
| S-DR — `IREB_CPRE_Deep_Research_PL_2026-11.md`; bez numeru | Raport dowodowy i historyczne decyzje A | D1–D15, bibliografia, 70 EO, 33 podtematy, przykłady i budżety; struktura raportu kompletna | Przegląd integracyjny, nie systematyczny ani badanie CPRE; brak udokumentowanego niezależnego review całości | Oficjalne normy/literatura → S-PED/A2/B/C. Używać uzasadnień; nie przywracać odroczonych hipotez jako wymagań |
| S-BP — `IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md`; 1.0 | Baseline funkcjonalny A2 | F01–F16, 38 FR z Given/When/Then, 18 UC, 28 FD, zakresy i plan walidacji; dokumentacja zachowań kompletna do tej fazy | Statusy FACT/decision/hypothesis jawne; brak badania użytkowników/prototypu. Baseline wg bieżącego zlecenia; nie odnaleziono osobnego aktu akceptacji bajtów | S-PED/S-DR/normy → S-FTC/B/C/D. Wiążące zachowania; D dopracuje realizację i zakres wydania |
| S-FTC — `IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md`; 1.0 | Kontrakt informacyjny A2→B/C | Pełne F13, F10–F12/F14, źródła/handoff; tekstowo zgodny z odpowiednimi częściami S-BP | „Samodzielny materiał wejściowy”; szczegółowe AC produktu pozostają w F09. Nie ma osobnego review/akceptacji w zestawie | S-BP/S-PED → B/C. Wiążące obowiązki informacyjne, nie model fizyczny |
| B01 — `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.1.md`; 0.1 | Miejsce definicji semantyki B; proponowany kontrakt | Role/tożsamość, kryteria, R01–R26, K0–K7, QG, rodziny, dowody, U-*, LUKA-*; strukturalnie kompletne | „FOR REVIEW — niezaakceptowany”; kontrola źródłowa/autorska, brak niezależnego review i dopuszczenia treści | S-FTC/S-BP/S-PED → B02–04/C/D. Warunkowe wejście; wymaga G1 i rozpatrzenia B-DEC |
| B02 — `B02_IREB_CPRE_FR_Traceability_v0.1.md`; 0.1 | Traceability i semantyczne AC B | 38 indywidualnych kart/AC, M/W/O, B/C, fallback; wszystkie F13 i 11 przejść F06 | FOR REVIEW; formalne kontrole autorskie. „Acceptance” w tytule oznacza kryteria, nie dokonany odbiór | B01 + F09/F13 → B03/C/D/handoff. Zachować komplet kart; nie utożsamiać pokrycia informacji z wykonaniem funkcji |
| B03 — `B03_IREB_CPRE_Semantic_Pilot_APK_v0.1.md`; 0.1 | Ilustracje i test logiczny B | A/P/K: 4/5/4 rationale, korekty, kotwice, dane syntetyczne; 20 prób negatywnych. P-FU i delayed niegotowe do użycia | FOR REVIEW; brak niezależnego review itemów, empirii i dopuszczenia U-GUIDED/INDEPENDENT/RESERVED | F13.8/B01/B02 → review B/C/walkthrough. Wyłącznie ilustracja kontraktu; nie finalny korpus ani rezerwa |
| B04 — `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md`; 0.1 | Decyzje i handoff B→C | 16 B-DEC, 8 K, 13 L-B, obowiązki authoringu, 14 C-AC, rekomendacja G1 | FOR REVIEW, „bez automatycznej akceptacji G1”; samokontrola, L-B04 otwarte | B01–03/baseline → właściciel/C. Rozpatrzyć decyzje, ograniczenie K-04, review i konkretną rewizję |
| C01 — `C01_IREB_CPRE_Source_and_Licensing_Register_v0.1.md`; 0.1 | Rejestr źródeł/praw C | C-S01–09, V-META/TEXT/FULL, lokalizacje, sposoby użycia i SRC-01–07; częściowa gotowość acquisition | FOR REVIEW, przed G1; kontrola autora/AI, brak niezależnej opinii prawnej i dopuszczenia korpusu | Normy + B warunkowo → C02–04/authoring. Domknąć użyte fragmenty PL/EN i prawa zamierzonego kanału |
| C02 — `C02_IREB_CPRE_Terminology_and_Authoring_Standard_v0.1.md`; 0.1 | Discovery i propozycja standardu C | T-01–13: 11 par odczytanych, 2 etykiety PL autorskie; AT-01–16, scoring i checklisty; brak instancji edukacyjnych | FOR REVIEW; „niewiążące zalecenia przed G1”; autorska kontrola, brak przyjęcia standardu | C01/baseline/B warunkowo → właściwy C03. Dopasować do przyjętej rewizji B i poddać review |
| C03 — `C03_IREB_CPRE_Pilot_Content_APK_v0.1.md`; 0.1 | Manifest zatrzymanego authoringu C | Tabele A/P/K, 20 obowiązków i zerowy inwentarz; kompletny jako manifest, niekompletny jako zamówiony korpus | BLOCKED — G1 ACCEPTANCE NOT CONFIRMED; dopuszczony tylko przegląd planu/zależności; brak recenzji itemów | G1/B/C01–02 → G2/G3. Napisać realne pakiety, warianty, rubryki i rezerwę po G1 |
| C04 — `C04_IREB_CPRE_Content_QA_and_Handoff_v0.1.md`; 0.1 | Raport przygotowania C i plan dalszego QA | Jawna zależność G1, traceability, C-AC-01–14, ryzyka i audyt 12 komórek; kompletny raport stanu przygotowania | FOR REVIEW; przygotowanie przed G1 zakończone, C/G2 nieukończone. Autor AI, bez niezależnego review domenowego | C01–03/B04 → właściciel/C/walidacja/D. Nie traktować planu QA jako oceny nieistniejących pytań |

**Nakładanie odpowiedzialności jest w większości celowe.** S-PED jest skrótem zasad S-DR; S-FTC jest samodzielnym wyciągiem z S-BP; B02 stosuje definicje B01; B03 operacjonalizuje ilustracje F13.8. Nie znaleziono konkurencyjnej wersji treści F13. Wspólne F13/F10/F11/F12/F14 są identyczne w obu kopiach; przyszła zmiana musi objąć obie albo jawnie wycofać jedną jako kopię. C03 ma tytuł korpusu, ale status i wnętrze wyraźnie przeczą gotowości. Nie znaleziono dokumentu uznanego za gotowy wyłącznie przez jego własną nazwę.

**Router następnej rozmowy:** cel i bramki → S-START; pedagogika → S-PED; dowody/70 EO → S-DR; zachowanie/FR/UC/FD → S-BP; informacja F13 → S-FTC; znaczenia/relacje → B01; ślad FR → B02; przykłady i negatywne przypadki → B03; decyzje G1/C-AC → B04; źródła/prawa → C01; propozycja authoringu → C02; wykonanie korpusu → C03; bramki C i dalsze prace → C04. Aktualny stan przekazania → R02/R03, po ich przyjęciu.

## 4. Cel, domena i granice zakresu

Celem jest proste doświadczenie przygotowania dorosłego kandydata: znajomość terminów, rozumienie rozróżnień, adekwatne zastosowanie, korekta i utrzymanie wiedzy. Miara edukacyjna to samodzielne nowe wykonanie po przerwie z jawnym zakresem i kosztem czasu; nie kliknięcia ani liczba rozwiązanych pytań. [S-PED „Cel…”; S-BP F01/F12]

Profil źródłowy projektu: syllabus 3.3.0, regulamin 5.6.2, Glossary 2.2.0, Handbook EN 1.3.2. Indeks S-DR D2.5 zawiera 70 EO: 36 L1, 27 L2, 7 L3, w siedmiu EU. Zliczono ponownie w indeksie; nie jest to ponowny audyt każdego oficjalnego EO. Wymagane foundational terms są dodatkowym obowiązkiem zakresu, nie sztucznie dopisanymi EO. L1/L2/L3 oznacza czynności poznawcze, a **Level 1/2/3** — zakres produktu. Format A/P/K sam nie określa poziomu.

Aktualna kontrola audytowa katalogu IREB i regulaminu nie wykazała zmiany profilu. Odczytano również odpowiednie wykazy EO w syllabus EN. Ponowna próba odczytu wskazanego PL PDF nie powiodła się; historyczny odczyt S-DR nie jest nową kontrolą PL. Szczegóły i granice R02 §2.

| Zakres | Stan i znaczenie |
|---|---|
| Najbliższy przekrój | 2–3 rozróżnienia: kontekst/granice, typy wymagań, traceability; trzy pełne oryginalne pakiety A/P/K z korektą i późniejszą kontrolą. To aktualny cel C, jeszcze niewykonany |
| Rozszerzony pilot tematyczny | Plan 9 pełnych EO + fragmenty 3, 12 komórek; budżet 60 training +24 reserved, 24–32 karty, 8–12 jednostek, 40–60 relacji. To hipoteza nakładu, nie stan wykonania ani minimum G2 pierwszego przekroju |
| Pełne przygotowanie FL | Wszystkie EO/składowe i foundational terms, adekwatne L3, pełny korpus i rezerwy form; Level 2, później |
| Gotowość egzaminacyjna | Profil dowodów; brak prognozy zdania, gwarancji wyniku, poufnych wag i dowodu równoważnej trudności |

24 pozycje przy założeniu 12 nowych itemów na fazę dają liczebnie dwie formy, nie trzy. 36 byłoby tylko arytmetycznym minimum trzech takich form, nie dowodem jakości, rodzin ani równoważności. Nie trzeba tworzyć tego rozszerzonego pilota przed pierwszym małym przekrojem. [S-BP F14; B04 K-05; C04-08]

## 5. Pedagogika: ustalone zasady i niezweryfikowane parametry

| Obszar | Obowiązująca zasada / klasyfikacja | Granica pewności |
|---|---|---|
| EO i poziomy | Zadanie wymaga czynności właściwej EO; lokalne kryterium nazywa część zakresu — FACT normy + interpretacja operacyjna | Jedna poprawna definicja nie zamyka L3 ani całego wieloczłonowego EO |
| Retrieval / spacing | Próba bez materiału i powroty między sesjami — RESEARCH FINDING z S-DR D3, przyjęty kierunek | Brak bezpośredniej walidacji całej kompozycji CPRE |
| Feedback | Reguła, przesłanka i wszystkie rationale przygotowane; dawka warstwowa — FUNCTIONAL DECISION | Nie ma uniwersalnie najlepszej długości/timingu dla każdego zadania |
| Remediacja | Korekta + adekwatny follow-up; możliwość przerwania — decyzja | Natychmiastowy sukces po instrukcji nie potwierdza retencji |
| Misconceptions | Hipoteza, alternatywy, sonda tylko dla konkretnej diagnozy — decyzja jakościowa | Jeden dystraktor/blank nie ustala przyczyny błędu; brak lokalnej trafności diagnostycznej |
| Meaningful variants | Istotna zmiana przypadku z tym samym kryterium, review pary/rodziny | Zmiana nazw, kolejności i przekład nie tworzą niezależnego nowego pomiaru |
| Independent evidence | Oddzielne punkty, pomoc, ekspozycja itemu/rodziny, metoda oceny i odstępy | Samoocena nie staje się niezależną oceną dzięki dobrej rubryce |
| Parametry pilota | ≥24 h; okna 3–7/~14 dni; dwa sukcesy w różnych realizacjach, jeden odroczony; zmiana wsparcia po drugim nieudanym follow-up — DESIGN HYPOTHESES | Są zapisane w baseline do sprawdzenia, nie są optimum naukowym ani nowym mastery |
| Walidacja | Review → walkthrough → mały pilot → jedno wybrane porównanie; S-BP F15 | Logiczna spójność dokumentów nie dowodzi efektu uczenia. Nie trzeba uruchamiać wszystkich eksperymentów A–F przed ograniczoną implementacją |

## 6. Funkcjonalność: co już rozstrzygnięto

Wszystkie F01–F16 istnieją. F01 wybiera sesję i konteksty; F02 zachowuje ciągłość dowodów; F03 opisuje uczniów/jobs; F04 porównuje i wybiera model; F05 ustala pętlę; F06 jedenaście przejść; F07 scenariusze; F08 capabilities; F09 wymagania/AC; F10 stany; F11 A/P/K i sprawdzenie; F12 postęp/rewizję; F13 obowiązki informacji; F14 zakresy; F15 walidację; F16 decyzje i handoff. Brak ekranów nie unieważnia tych rozstrzygnięć.

Niezmienniki: jedna rekomendowana kontynuacja z prawem zmiany; wejście od wiedzy lub pytania; Nauka z pomocą oraz Sprawdzenie bez pomocy do finalizacji całego zestawu; kontekstowa droga pytanie → feedback → wiedza/porównanie → korekta → inny przypadek → powrót; zachowanie wersji, odpowiedzi, wyniku i miejsca. Przerwanie testu bez limitu może zachować próbę; konwersja do Nauki kończy jej niezależny kontrakt. Powrót i review nie dają nowych punktów za pierwotną próbę.

A daje wagę za pojedynczy trafny wybór; P przy n≤k daje w×c/k, nadmiar zeruje całość; K daje w×c/m, blank/błąd/obie wartości zeruje tylko wiersz. Wynik formy liczy punkty, nie całe poprawne pytania. Wagi, k/m i klucze mają wersje. [S-BP F11; B01-07; C02-05; regulamin §2]

**Zakresy:** Essential to rdzeń pilota proporcjonalny do wybranego zakresu; FR-024 już ogranicza obietnice, pełny profil przychodzi w Level 2; FR-025–028 obejmują tematyczne Sprawdzenie bez limitu już w Level 1. FR-030 jest Validate i opcjonalne. FR-031 globalnie jest Later/Level 2; lokalna definicja i odsyłacz nie czekają na wyszukiwarkę. Lokalna mapa to późniejszy TEST; globalny graf i zaawansowana adaptacja DEFER. [S-BP F09/F14/F16]

### 6.1. Rejestr FD — obowiązujący kierunek, bez nowej akceptacji B

Poniższy skrót zachowuje wszystkie FD; szczegóły, dowody i eksperymenty pozostają w S-BP F16.

| FD | Kierunek z F16 |
|---|---|
| FD-01 Jeden prowadzony tok | ADOPT |
| FD-02 Dwa konteksty | ADOPT Nauka/Sprawdzenie |
| FD-03 Elastyczne wejście | ADOPT; krótka diagnoza TEST |
| FD-04 Pełne pokrycie, nie same tematy | ADOPT |
| FD-05 Zwięzły feedback z rozwinięciem | ADOPT minimum; TEST dawkę |
| FD-06 Opcja do właściwego rozróżnienia | ADOPT lokalnie, TEST korzyść |
| FD-07 Zachowanie pytania i powrotu | ADOPT |
| FD-08 Każdy dystraktor osobnym concept | REJECT |
| FD-09 Diagnoza z jednego wyboru | REJECT |
| FD-10 Celowana korekta i nowa próba | ADOPT; dobór TEST |
| FD-11 Tożsamy item jako dowód transferu | REJECT |
| FD-12 Pomoc i nowość oddzielnie | ADOPT |
| FD-13 Proste powroty | ADOPT; odstępy TEST |
| FD-14 Pięć kategorii dowodów | ADOPT semantykę, TEST język |
| FD-15 Procent mastery / pass probability | REJECT bez empirycznej podstawy |
| FD-16 Trzy mocki ≥80% jako automat | DEFER |
| FD-17 Wierność scoringu A/P/K | ADOPT |
| FD-18 Pełny mock w pilocie tematycznym | REJECT |
| FD-19 Global graph głównym wejściem | DEFER |
| FD-20 Lokalna aktywna mapa | TEST później |
| FD-21 Zaawansowana adaptacja | DEFER |
| FD-22 Confidence | TEST opcjonalnie |
| FD-23 LLM jako autor autorytatywnej odpowiedzi na żywo | REJECT |
| FD-24 Redakcja i zgłoszenie błędu | ADOPT minimalne |
| FD-25 Dostępność i terminologia | ADOPT |
| FD-26 Streaki, ranking, XP jako rdzeń | REJECT |
| FD-27 Własny notatnik, social, marketplace, kursowy CMS | REJECT w tym produkcie |
| FD-28 Pełna biblioteka przed pilotem | REJECT |

### 6.2. Pełny ślad FR-001–FR-038

Każdy wiersz odsyła równocześnie do **S-BP F09 / wskazany FR** (zachowanie i Given/When/Then), **S-FTC F13.4 / ten FR** (obowiązki informacji) oraz **B02-03 / ten FR / AC o tym samym numerze** (proponowana realizacja semantyczna). Nie są to testy wykonanej aplikacji. B odpowiada za kontrakt; C za wskazane treści; fakty prób i nawigacji dostarczy późniejsza warstwa aktywności. W każdym z 38 przypadków B02 ma jawne B/C oraz fallback — nie znaleziono FR bez właściciela wymaganej informacji. Aktualnie nie ma kompletnych instancji C do edukacyjnego wykonania tych ścieżek.

| FR / zachowanie | UC i FD według B02 | Pakiet informacji | Konkretny obowiązek C — skrót |
|---|---|---|---|
| FR-001 — Orientacja i warunki przygotowania | UC-01, FD-02/04/18 | K0, (K6) | Nota zakresu i profilu |
| FR-002 — Krótki wybór punktu startu | UC-01/03, FD-03 | K0; wejście K1 lub K2; (K5,K7 sond) | Wejście; sondy tylko warunkowo |
| FR-003 — Jeden następny krok z wyjaśnieniem | UC-10/16/18, FD-01/13/21 | K0,K3,K7, (K1,K4,K5) | Cele i powody kolejnego kroku |
| FR-004 — Pokrycie celów i składowych | UC-01/10/18, FD-04 | K0,K7, (K1,K2) | Składowe EO i argument mapowania |
| FR-005 — Krótkie objaśnienie z rozwinięciem | UC-02, FD-05/25 | K0,K1, (K3) | Rdzeń objaśnienia, warunek i przykład |
| FR-006 — Retrieval i zastosowanie zgodne z EO | UC-02/03/07, FD-04/12/14 | K0,K2,K7 | Zadanie i recenzowana rubryka |
| FR-007 — Pytanie A | UC-03/08, FD-17; B03-A | K0,K2,K5,K7 | A: klucz i wszystkie rationale |
| FR-008 — Pytanie P i częściowe punkty | UC-11/08, FD-17; B03-P | K0,K2,K5,K7 | P: k, klucz, wszystkie rationale |
| FR-009 — Pytanie K i decyzje stwierdzeń | UC-11/08, FD-17/25; B03-K | K0,K2,K5,K7 | K: wiersze, klucze, lokalne zakresy |
| FR-010 — Zatwierdzenie i historia prób | UC-03/08/13, FD-12/24 | K2,K5,K7 | Wersje kluczy i instrukcja zatwierdzenia |
| FR-011 — Warstwowy feedback | UC-04/09/11/12, FD-05 | K2,K7, (K1,K3) | Rdzeń feedbacku i wszystkie opcje |
| FR-012 — Od opcji do właściwego rozróżnienia | UC-04/05/14, FD-06/08 | K2,K3,K7, (K1) | Lokalne wiązania opcji z regułą |
| FR-013 — Odwracalna eksploracja i powrót | UC-14/13, FD-07 | K3,K7 | Adresowalne fragmenty i neutralne kotwice |
| FR-014 — Porównanie i potrzebny prerequisite | UC-05/06/14, FD-06/19/20 | K1,K3,K7 | Osie porównań i uzasadnione podstawy |
| FR-015 — Hipoteza pomyłki i jej sprawdzenie | UC-04/05, FD-09 | K4,K7, (K2) | Hipoteza, alternatywy i sonda, jeśli diagnoza |
| FR-016 — Krótka remediacja bez nieskończonej pętli | UC-04/05/07, FD-10 | K1,K2,K4,K5,K7 | Korekta, follow-up, alternatywne wsparcie |
| FR-017 — Nowy wariant do weryfikacji | UC-07/15, FD-11 | K0,K2,K5,K7 | Wariant i argument różnicy |
| FR-018 — Pomoc i znajomość a status dowodu | UC-13/15, FD-12 | K5,K7, (K1,K2,K3) | Zakres ujawnienia reguły/klucza |
| FR-019 — Ochrona rezerwy i historia ekspozycji | UC-17, FD-11/12 | K2,K5,K7 | Rodziny i neutralne opisy rezerwy |
| FR-020 — Powtórka z rzeczywistym odstępem | UC-07/16/18, FD-13 | K0,K2,K5,K7 | Prompt i zakresy kontaktu z kryterium |
| FR-021 — Równowaga nowej nauki i powtórek | UC-18/16, FD-01/13/21 | K0,K7, (K1,K3,K4,K5) | Aktywności i warunki zakończenia |
| FR-022 — Profil dowodów wiedzy | UC-07/11/15/18, FD-14/15 | K0,K7, (K2,K5) | Kryteria obserwacji, bez fikcyjnych wyników |
| FR-023 — Zrozumiały postęp i jawne braki | UC-10/16/18, FD-04/14 | K0,K7 | Zakresy i etykiety braków |
| FR-024 — Ostrożny profil gotowości | UC-08/10/15/17, FD-15/16/18 | K0,K6,K7, (K5) | Plan zakresu i ograniczenia wyniku |
| FR-025 — Warunki uruchomienia sprawdzenia | UC-08/17, FD-18 | K0,K2,K5,K6,K7 | Blueprint jawnego wycinka i pula |
| FR-026 — Przebieg sprawdzenia bez pomocy | UC-08, FD-02/12/17 | K2,K5,K6,K7 | Neutralne instrukcje; pełne review po końcu |
| FR-027 — Przerwanie i przejście w naukę | UC-08/13/16/17, FD-02/12 | K5,K6,K7 | Komunikaty konsekwencji przerwy/konwersji |
| FR-028 — Wynik i plan po sprawdzeniu | UC-09/11, FD-05/10/17/24 | K2,K5,K6,K7, (K4) | Rationale, korekta i realna kontrola |
| FR-029 — Uczenie formatu oddzielnie od domeny | UC-01/11, FD-17 | K2,K7 | Neutralne demonstracje formatu |
| FR-030 — Opcjonalna deklaracja pewności | UC-12, FD-22; priorytet Validate | K7, (K2,K5) | Pomijalne etykiety, tylko jeśli włączone |
| FR-031 — Znajdowanie wiedzy PL/EN | UC-06/14, FD-25; globalnie Level 2 | K0,K1,K3,K5,K7 | Indeks PL/EN i opisy bez rezerwy |
| FR-032 — Wznowienie po przerwie | UC-14/16, FD-07/13 | K0,K7, (K2,K5,K6) | Neutralne przypomnienie celu i alternatywy |
| FR-033 — Zachowanie przy brakach korpusu | wszystkie UC, szczególnie UC-14/17 | K0–K7 według użycia | Manifest luk i dopuszczone alternatywy |
| FR-034 — Minimalna bramka publikacji treści | przekrojowo, FD-24/25 | K0–K6 według pakietu | Prawa, źródła, review i decyzje użycia |
| FR-035 — Wątpliwość, wycofanie i korekta dowodów | UC-03/09/17, FD-24 | K2,K3,K7, (K0,K5,K6) | Korekta materiału i zależności wersji |
| FR-036 — Dostępna obsługa interakcji | wszystkie UC, FD-25 | K0–K7 w reprezentacji | Równoważne treści i etykiety bez przecieków |
| FR-037 — Terminologia i znaczenie egzaminacyjne | UC-01/05/15, FD-25 | K0,K1,K3, (K2,K7) | Kontrolowany słownik i review PL/EN |
| FR-038 — Jawny zakres pilota i pełnego przygotowania | UC-01/10/18, FD-18/28 | K0,K2,K5,K6,K7 | Manifest pokrycia i przydział rezerwy |

### 6.3. Pełny indeks UC-01–UC-18

Źródło rozstrzygające: **S-BP F07 / konkretny UC**, dwanaście pól każdego scenariusza. Historyczne UC z S-DR D9 nie zastępują aktualnych scenariuszy F07. Lista obejmuje również zachowania pełnego produktu, których materiał nie należy do pierwszego przekroju.

| UC / intencja | Powiązane FR i zakres z F07 |
|---|---|
| UC-01 — Pierwszy kontakt z IREB | FR-001–004, FR-029, FR-037–038; **Essential, Level 1**. |
| UC-02 — Nauka całkowicie nowego pojęcia | FR-005–006, FR-011, FR-014, FR-017–018, FR-022; **Essential, Level 1**. |
| UC-03 — Nauka rozpoczynana od pytania | FR-006–018, FR-030, FR-035; **Essential, Level 1 mechanizm; przykład EO 4.2.3 w Level 2 korpusu**. |
| UC-04 — Błędna odpowiedź i celowana korekta | FR-010–018, FR-020, FR-033; **Essential, Level 1**. |
| UC-05 — Powracające mylenie podobnych pojęć | FR-012, FR-014–017, FR-022, FR-037; **Essential, Level 1**. |
| UC-06 — Poznawanie relacji między pojęciami | FR-013–014, FR-017, FR-022, FR-033; **Essential, Level 1 dla tekstowych relacji; mapa Validate, Level 3**. |
| UC-07 — Powrót do zapomnianej wiedzy | FR-017–022, FR-032–033; **Essential, Level 1**. |
| UC-08 — Realistyczna symulacja na czas | FR-007–010, FR-018–019, FR-024–029, FR-036; **Essential, Level 2**. |
| UC-09 — Przegląd ukończonej symulacji | FR-011–024, FR-028–029, FR-035; **Essential, Level 2; analogiczny review testu tematu w Level 1**. |
| UC-10 — Ostatnie przygotowanie przed egzaminem | FR-003–004, FR-017–024, FR-029, FR-038; **Essential, Level 2**. |
| UC-11 — Częściowo poprawna odpowiedź P lub K | FR-008–012, FR-017, FR-022, FR-029; **Essential, Level 1; wariant UC-03/04**. |
| UC-12 — Poprawna, lecz niepewna odpowiedź | FR-011–017, FR-022, FR-030; **Essential feedback, Level 1; pomiar pewności Validate**. |
| UC-13 — Materiał otwarty przed odpowiedzią | FR-010, FR-013, FR-017–019, FR-027; **Essential, Level 1**. |
| UC-14 — Powrót z pojęcia do pierwotnej aktywności | FR-012–014, FR-017, FR-032–033, FR-036; **Essential, Level 1**. |
| UC-15 — Sukces w znanych pytaniach, porażka w nowych wariantach | FR-014–019, FR-022–024, FR-033; **Essential, Level 1**. |
| UC-16 — Powrót po dłuższej przerwie | FR-003, FR-020–023, FR-027, FR-032–033; **Essential, Level 1**. |
| UC-17 — Pytanie z rezerwy zostało ujawnione | FR-018–019, FR-024–028, FR-033; **Essential, Level 1 ochrona; Level 2 pełne mocki**. |
| UC-18 — Temat ukończony, ale powtórki pozostają | FR-003–004, FR-020–024, FR-033, FR-038; **Essential, Level 1**. |

## 7. Semantyka B — opracowane, nadal proponowane

B01 definiuje sens i tożsamość, nie fizyczny podział na tabele czy pliki. Oficjalny EO ma wersję programu; lokalne KRY-* opisuje obserwowalne wykonanie, warunki, ocenę i wyłączenia. Terminy PL/EN nazywają sens; definicja, parafraza, tłumaczenie i oryginalny przykład zachowują odrębne pochodzenie. Opcja jest częścią wersji zadania, nie osobną umiejętnością.

K0 — zakres; K1 — nauka; K2 — pełny pakiet pytania; K3 — uzasadnione powiązanie; K4 — naprawa; K5 — nowość; K6 — Sprawdzenie; K7 — dowody i ciągłość. B01-05 określa R01–R26 wraz z końcami, kierunkiem, warunkami, proweniencją, review i zakazami wnioskowania. W szczególności **R05 SUPPORTS ≠ R06 MEASURES ≠ R07 MENTIONS ≠ R25 EVIDENCE_FOR**. Ostatnia relacja wymaga wykonanej próby. R08/R09 wiążą opcję z rationale i regułą; R15 z podstawą; R18/R19 korektę z kontrolą; R20/R21 rodziny i bliskość; R26 kontekst powrotu.

Question Knowledge Package zawiera stem, przesłanki, kompletny klucz, każdą opcję/wiersz, wszystkie rationale, reguły, scoring, kryterium i poziom, rodzinę, źródła, język, prawa, rewizję i review. QG-01–10 określa bramkę. U-READ/GUIDED/INDEPENDENT/REMEDIAL/REVISION/RESERVED/TOPIC/MOCK określają kompletność dla użycia. LUKA-01–11 rozdzielają brak treści, review, relacji, klucza, wariantu, dowodów, historii, źródeł/praw, czasową niedostępność, reprezentację/przeciek i niewystarczającą formę. Brak blokuje właściwą obietnicę, nie automatycznie całą naukę. [B01-06–13]

Dowód ucznia zachowuje punkty, pomoc, znajomość itemu/rodziny, nowy kontekst, metodę oceny i **dwa odstępy per kryterium**, ustalone z historii sprzed prezentacji: od poprzedniej samodzielnej próby oraz od ostatniego istotnego kontaktu. 7 dni od próby i minuta od wyjaśnienia nie daje tygodniowej retencji. Dane historyczne pozostają faktami, kwalifikacja jest wersjonowaną interpretacją. Nie dodano algorytmu mastery. [B01-10/11]

B03 testuje architekturę na istniejących ilustracjach F13.8, 20 kontrpróbach i fikcyjnych zdarzeniach. To świadectwo opisywalności i lokalnych fallbacków. Brak rezerwy, pełnej redakcji P-FU i niezależnego review jest jawny. B02 pokrywa wszystkie 38 FR i 11 przejść F06; sam ten fakt nie zamyka G1.

### 7.1. B-DEC-01–16 — wszystkie pozostają PROPOSED DECISION

B04 nazywa je „FUNCTIONAL DECISION — propozycja B / FOR REVIEW”. W niniejszej konsolidacji status to PROPOSED DECISION; obowiązki odziedziczone z A2 pozostają obowiązujące niezależnie od akceptacji ich nowej operacjonalizacji.

| ID | Proponowane rozstrzygnięcie |
|---|---|
| B-DEC-01 | Lokalne kryterium jako jednostka pokrycia i wniosku |
| B-DEC-02 | Foundational terms jako osobny obowiązek bez fikcyjnych EO |
| B-DEC-03 | Współdzielone fragmenty i adresowalne role reguły/twierdzenia |
| B-DEC-04 | R01–R26 bez domyślnego RELATED_TO i propagacji |
| B-DEC-05 | Pełne K2/QG dla każdego punktowanego A/P/K |
| B-DEC-06 | Lokalne rationale każdej opcji przy wspólnej regule |
| B-DEC-07 | Rodziny według zapamiętywalnego rdzenia i review różnic |
| B-DEC-08 | Dopuszczenie redakcyjne odrębne od eligibility osoby; U-* |
| B-DEC-09 | Odrębne osie jakości; rzeczywiście niezależny review punktowanego użycia |
| B-DEC-10 | Fakty odpowiedzi odrębne od interpretacji; dwa czasy per kryterium |
| B-DEC-11 | Brak nowego mastery; parametry nadal hipotezami |
| B-DEC-12 | Jawna analiza zmian i zachowanie historii |
| B-DEC-13 | Sens, PL/EN, przekład, parafraza i prawa odrębne |
| B-DEC-14 | Wszystkie kanały ujawniania, również tytuł, alt i źródło |
| B-DEC-15 | Pomocniczy wiersz 4 K: KRY-X01 bez fikcyjnego EO, ograniczona rezerwa |
| B-DEC-16 | Pełna remediacja wymaga follow-up; feedback nie wymaga diagnozy |

### 7.2. K-01–K-08 — zachowane ograniczenia interpretacji

| ID z B04-03 | Aktualny stan uzgodnienia |
|---|---|
| K-01 Handbook | Różne historyczne zakresy dostępu, nie sprzeczne wersje. C01 poprawia dostęp do wybranych sekcji, nie poświadcza całych 161 stron |
| K-02 Trzy wyniki ≥80% | Wyjaśnione przez F16/FD-16: automat odroczony. Stara hipoteza nie jest obowiązującą bramką gotowości |
| K-03 A a L3 | Wyjaśnione: ilustracja A mierzy fragment EO2.2.2 L2, wspiera EO4.1.1 L3; nie udaje wykonania L3 |
| K-04 Pomocniczy K4 | Istotna decyzja do G1: wiersz 4 ma KRY-X01; zachowana ilustracja i scoring nie dopuszczają go automatycznie do rezerwy CPRE |
| K-05 Rezerwa | Arytmetyka wyjaśniona; przydział rzeczywistych rodzin/faz pozostaje do zatwierdzenia przed ekspozycją |
| K-06 Prerequisite | Wiedza konieczna do konkretnej czynności nie oznacza obowiązku ukończenia lekcji. FR-014 pozwala pominąć znaną podstawę |
| K-07 Feedback / pełna naprawa | Wyjaśnione: pełne K2 konieczne do punktowania, follow-up dodatkowo do pełnej U-REMEDIAL; brak wariantu ogranicza obietnicę |
| K-08 Czas K | Dwa czasy per kryterium; historia KRY-K01 nie uzupełnia nieznanych odstępów pozostałych wierszy |

### 7.3. Routing EO i przykładów — bez fikcyjnego pokrycia

Pełny indeks: **S-DR D2.5**; oficjalny zakres: odpowiednie wykazy EU/EO i sekcje syllabus; zasady operacjonalizacji: **B01-02**. Szczegóły FR/UC nie tworzą EO. Poniżej aktualny najbliższy zakres i plan rozszerzenia, nie wykonany curriculum.

| EO / poziom | Gdzie szukać wymagania i interpretacji | Co rzeczywiście opracowano / czego brak |
|---|---|---|
| EO1.1.2 L2 | S-DR D2.5/D12; S-BP UC-05/12/15 i F13.8 P; B01 KRY-P01; B03-P; C03-02 | Istnieje ilustracja klasyfikacji; brak oryginalnego pakietu C i pełnego pokrycia wszystkich rozróżnień |
| EO2.2.2 L2 | S-DR D2.5; S-BP F13.8 A; B01 KRY-A01; B03-A; C03-02 | Fragment zasady kontekstu; nie całość dziewięciu zasad |
| EO4.1.1 L3 | S-DR D12; S-BP UC-02/F14; B01-02; C03-02 | Zdefiniowana potrzeba wyznaczania granic; A nie wystarcza. Treść, wykonanie L3 i rubryka C niegotowe |
| EO6.6.1 L1 | S-BP F13.8 K; B01 KRY-K02; B03-K; C03-02 | Ilustracja jednego powodu traceability, nie pełny zakres |
| EO6.6.2 L1 | S-DR D2.5; C01-04/C02 T-11/12; B03-K | W ilustracji rola pomocnicza; nie zatwierdzono samodzielnego MEASURES dla nowego C |
| EO6.6.3 L1 | B01 KRY-K01; B03-K, K-FU; C03-02 | Ilustracja dokumentowania; brak C i rezerwy |
| KRY-X01, bez EO | B01-02; B03-K wiersz 4; B04 K-04/B-DEC-15 | Objaśniający wniosek „link ≠ wykonanie testu”; nie nowy oficjalny EO |
| EO3.8.1–3.8.2 L1 | S-DR D12; S-BP UC-11/F14; C04-08 | Plan rozszerzonego pilota, nie pierwszy wykonany pakiet |
| EO4.4.1 L2 / EO4.4.2 L1 / fragment EO4.4.3 | S-DR D12; S-BP UC-04/F14; C04-08 | Plan rozszerzenia walidacji; brak C |
| Fragment EO3.4.5 L2 | S-DR D12; S-BP F14; C04-08 | Interpretacja modeli kontekstu jako późniejsze rozszerzenie |
| EO z pozostałych scenariuszy, np. EO4.2.3, EO6.4.1 | S-BP F07 UC-03/09 i S-DR D2.5 | Przykłady intencji funkcjonalnych; nie dopisują treści do pierwszego przekroju |

## 8. C — źródła, standard i rzeczywisty stan korpusu

C01 rejestruje dziewięć źródeł. Katalog jest V-META; syllabus EN i Glossary mają odczyt wybranych sekcji; regulamin jest oznaczony V-FULL; syllabus PL — V-META/UNAVAILABLE w kontroli C; Handbook — V-TEXT z wybranymi sekcjami przez odsyłacz certyfikatora; sample i Cockpit — ograniczony odczyt publiczny. Nie pozyskano banku Cockpit, poufnych itemów ani uprawnień do ich ekstrakcji. Rejestr jest śladem dostępu i planowanych sposobów użycia, nie audytem nieistniejących autorskich kluczy.

C02 ma **13 wpisów**: system, system boundary/context/context boundary/scope, functional/quality/non-functional requirement, constraint, traceability, explicit/implicit traceability i requirement. **11 par PL/EN jest odczytanych; T-11/12 PL są propozycjami autora.** Polskie definicje zdaniowe nie stają się oficjalnymi przez użycie oficjalnego terminu. AT-01–16 pokrywają objaśnienia, noty, porównania, przykłady, scenariusze, retrieval, A/P/K, rationale, hipotezy, sondy, korektę, follow-up, reserved, rubryki i wprowadzenie. Standard pozostaje propozycją przed G1.

**Stan rzeczywisty C03:** 0 pytań A/P/K, 0 follow-up, 0 kandydatów delayed, 0 rodzin C, 0 dopuszczonych punktowanych pozycji i 0 niezależnie zrecenzowanych pakietów. Nie ma kompletnych objaśnień, kluczy, rationale, correction flows, instancji relacji ani rezerwy C. Manifest opisuje braki dla 20 obowiązków w każdym z trzech pakietów. Istniejące ilustracje B03/F13.8 nie zmieniają tych zer. [C03-03/04]

**C-AC-01–14:** przygotowanie źródeł, terminów, widoczności i manifestu jest częściowe; rdzeń nauki, A/P/K, ścieżki relacji, remediacja, rodziny/rezerwa, rubryki, review/prawa i reprezentacje korpusu pozostają niespełnione. Reguły scoringu oraz wektory obliczeń nie oceniają jeszcze żadnego itemu C. Żaden komplet kryteriów nie uzasadnia G2. Szczegółowa macierz R02 §5 zachowuje wszystkie 14 ID.

Nie ma dowodu, że C przyjął B-DEC milcząco: C01–04 wielokrotnie opisują odniesienia do B jako warunkowe. Nie ma też ukrytego „QA completed” dla pytań; C04 wyraźnie nazywa samokontrolę autorską i brak pytań do oceny.

## 9. Co pozostaje do decyzji i czego nie odtwarzać

**Właściciel musi jeszcze rozstrzygnąć:** przyjętą rewizję/zakres B wraz z B-DEC-01–16 i K-04; sposób domknięcia rzeczywistego review B; ścieżkę niezależnego review C i zamierzone użycie pierwszego korpusu; zakres oraz protokół pierwszego pilota i przydział rezerwy przed ekspozycją. G2, G3 i G4 wymagają później rzeczywistych wyników i osobnych decyzji. R02 przedstawia minimalną kolejność.

**C musi wykonać:** operacjonalizację zakresu nowych pakietów, faktyczne objaśnienia/A/P/K/rationale/korekty/rubryki/rodziny, claim-source trace, prawa konkretnego użycia i manifest. B może wyjaśnić zgłoszone niejednoznaczności, nie musi projektować modelu od początku.

**Do D odłożono:** szczegółowy flow, ekrany/nawigację, realizację zachowania komponentów, komunikaty/stany wizualne, styl/design system, responsywność oraz wybór pierwszego przyrostu. Blueprint określa już semantyczne skutki tych działań; D wybiera ich realizację i zapisuje ewentualne zmiany. Nie wolno zastąpić brakującego C wymyślonym przez projektanta kluczem.

**Do późniejszej implementacji:** techniczne odwzorowanie zaakceptowanych reguł i danych, rzeczywista historia aktywności oraz testy wykonania. Brak takich elementów teraz nie jest usterką B/C. Pełny bank, pełny inwentarz foundational, zaawansowana psychometria, predykcja zdania, globalny graf i rozbudowana adaptacja nie są warunkiem rozpoczęcia rozmowy D ani ukończenia małego przekroju.

## 10. Granice tego obrazu stanu

Uwzględniono 13/13 Sources. Pełny odczyt START, kanonu i pakietów B/C połączono z kontrolą właściwych sekcji S-BP, S-FTC i S-DR; odczytane obszary i kontrole formalne podaje R02. Nie przeprowadzono nowego researchu pedagogicznego, niezależnej recenzji domenowej, testów z uczniami ani sprawdzenia aplikacji. Nie uzupełniano źródeł domysłami z rozmów. Brak dowodu akceptacji oznacza niepotwierdzoną akceptację w tym zestawie, nie twierdzenie o wszystkich możliwych zewnętrznych decyzjach.

**Wynik do akceptacji:** R01 jest audytową konsolidacją istniejącej wiedzy. Dopuszczenie go jako aktualnego obrazu stanu wymaga decyzji właściciela; nie nadaje tej akceptacji źródłowym B/C.
