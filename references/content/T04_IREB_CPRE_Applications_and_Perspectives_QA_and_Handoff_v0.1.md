# T04 — Zastosowania i perspektywy RE — QA_and_Handoff v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Wynik i policzony inwentarz

| Materiał | Liczba / tożsamości |
| --- | --- |
| Kryteria / rdzenie / porównania / EX / CE / korekty | Po 2; dokładne ID w Content |
| B / F / D | Po 2 rzeczywistych zadań; razem 6 |
| Zamknięte | 5; A=2, P=1, K=2 |
| Opcje/wiersze i lokalne rationale | 20 |
| Otwarte zadania wariantowe / rubryki | 1 |
| Retrieval / rubryki | 2 |
| Pary B–F/B–D/F–D | 6 |
| Rodziny proponowane | 2; nie są potwierdzonymi niezależnymi rodzinami |
| Reuse istniejących C | 0 aktywności, nie nowe ID/r1 |
| Odrębnie zrecenzowane / dopuszczone uczniowsko | 0 / 0 |
| Chroniona rezerwa dla czytelnika pełnego pliku | 0 |
| Próby uczniów / R25 | 0 / 0 |


## Macierz pokrycia i czynności

| Kryterium / źródło i poziom | SUPPORTS / reguła | MEASURES | Korekta / FU / D | Luka |
| --- | --- | --- | --- | --- |
| KRY-T04-01; EO1.3.1 L1; C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29 | REG/CMP/EX/CE-KRY-T04-01 | Z1-T04-01-B01, Z1-T04-01-F01, Z1-T04-01-D01; RP-T04-01 | REM-KRY-T04-01; Z1-T04-01-F01; Z1-T04-01-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T04-02; EO1.3.1 L1; C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13 | REG/CMP/EX/CE-KRY-T04-02 | Z1-T04-02-B01, Z1-T04-02-F01, Z1-T04-02-D01; RP-T04-02 | REM-KRY-T04-02; Z1-T04-02-F01; Z1-T04-02-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |

MENTIONS: nazwy fikcyjnych organizacji, branże, urządzenia i technologie są tylko tłem. Nie uzyskują własnych EO ani punktów za specjalistyczną wiedzę. Nie utożsamiamy tej macierzy z wynikiem ucznia.


## Wektory punktacji każdego zamkniętego itemu

Syntetyczne dane kontrolne, bez historii osób. Źródło: C-S04 5.6.2 §2 s.4–6. Dokładne ułamki; zaokrąglenie prezentacji nie zmienia sum.

### Z1-T04-01-B01 / P / w=2 / k=2

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | a, b | 2 × 2/2 | 2 |
| częściowa/mieszana | a, c | 2 × 1/2 | 1 |
| niedobór | a | 2 × 1/2 | 1 |
| pusta | ∅ | 2 × 0/2 | 0 |
| same błędne | c, d | 2 × 0/2 | 0 |
| nadmiar | a, b, c | nadmiar n>k → 0 | 0 |

### Z1-T04-01-F01 / K / w=2 / m=3

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | Prawda, Fałsz, Prawda | 2 × 3/3 | 2 |
| jeden błąd | Fałsz, Fałsz, Prawda | 2 × 2/3 | 4/3 |
| jeden blank | Prawda, Fałsz, ∅ | 2 × 2/3 | 4/3 |
| pusta | ∅, ∅, ∅ | 2 × 0/3 | 0 |
| błędna | Fałsz, Prawda, Fałsz | 2 × 0/3 | 0 |
| obie wartości | Prawda, Fałsz, B | 2 × 2/3 | 4/3 |
| mieszana | Prawda, ∅, ∅ | 2 × 1/3 | 2/3 |

### Z1-T04-01-D01 / A / w=1

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| trafna | c | pełna waga tylko za trafny pojedynczy | 1 |
| błędna | a | pełna waga tylko za trafny pojedynczy | 0 |
| pusta | ∅ | pełna waga tylko za trafny pojedynczy | 0 |
| nadmiar | a, c | pełna waga tylko za trafny pojedynczy | 0 |

### Z1-T04-02-B01 / K / w=3 / m=5

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | Prawda, Prawda, Prawda, Fałsz, Prawda | 3 × 5/5 | 3 |
| jeden błąd | Fałsz, Prawda, Prawda, Fałsz, Prawda | 3 × 4/5 | 12/5 |
| jeden blank | Prawda, Prawda, Prawda, Fałsz, ∅ | 3 × 4/5 | 12/5 |
| pusta | ∅, ∅, ∅, ∅, ∅ | 3 × 0/5 | 0 |
| błędna | Fałsz, Fałsz, Fałsz, Prawda, Fałsz | 3 × 0/5 | 0 |
| obie wartości | Prawda, Prawda, Prawda, Fałsz, B | 3 × 4/5 | 12/5 |
| mieszana | Prawda, ∅, ∅, ∅, ∅ | 3 × 1/5 | 3/5 |

### Z1-T04-02-D01 / A / w=1

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| trafna | b | pełna waga tylko za trafny pojedynczy | 1 |
| błędna | a | pełna waga tylko za trafny pojedynczy | 0 |
| pusta | ∅ | pełna waga tylko za trafny pojedynczy | 0 |
| nadmiar | a, b | pełna waga tylko za trafny pojedynczy | 0 |


## Przykłady kontroli otwartej oceny

| Aktywność | Pełna / częściowa / pusta / graniczna / krytyczna |
| --- | --- |
| Z1-T04-02-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Można wskazać user+stakeholder przy (2), zachowując węższą nazwę user. Krytyczna: Wymuszanie rozłączności user i stakeholder jako warunku poprawności. |
| RP-T04-01 | Pełna: RE dotyczy wymagań dla różnych rodzajów systemów, także produktów, usług, procedur i urządzeń. Dominujący obszar software nie oznacza wyłączności; rozpoznaje składniki fizyczne i organizacyjne. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T04-02 | Pełna: Wymienia system, stakeholder, user, domain i business requirements z poprawnym ogólnym sensem. User requirements są podzbiorem stakeholder requirements; perspektywa nie zastępuje rodzaju z T02. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |


## QG-01–10 i C-AC-01–14 — autokontrola

| QG | Rzeczywisty wynik |
| --- | --- |
| QG-01 | Autorsko sprawdzono wystarczalność stemu; odrębny recenzent ma rozwiązać bez klucza. |
| QG-02 | Sprawdzono pełność kluczy i parametrów; A/P/K oddzielone od rubryk otwartych. |
| QG-03 | Przygotowano i autorsko odczytano 20 lokalnych rationale; każda decyzja ma przesłankę/regułę/wynik. |
| QG-04 | Kryterium/EO/poziom jawne; L1 nie awansuje do L3. L2 obejmuje argument/rubrykę. |
| QG-05 | Odczytano wskazane sekcje źródeł, zastosowanie do fikcyjnego przypadku jawne. |
| QG-06 | Instrukcje, polaryzacja i wiersze tekstowe sprawdzone autorsko; bez testu czytnika. |
| QG-07 | Rodziny i pary opisane, odrębne review granic pending; brak mocnej etykiety nowej rezerwy. |
| QG-08 | Obecny review i pochodzenie opisane; kanał publikacyjny nieustalony. |
| QG-09 | **Niespełnione: odrębne kompetentne review nie zostało wykonane.** |
| QG-10 | Treści B/F/D i korekty istnieją; dopuszczenie U-* oraz K6 formy oczekują review. |

| C-AC | Stan / dowód / ograniczenie |
| --- | --- |
| C-AC-01 | Autorsko sprawdzone: claimy CL, źródła/wersje/lokalizacje przy REG i każdym zadaniu. |
| C-AC-02 | Autorsko sprawdzone: macierz powyżej, czynności per kryterium. Brak deklaracji wykazania całego EO przez osobę. |
| C-AC-03 | Autorsko sprawdzone: PL/EN i etykiety versus własne parafrazy; delty poniżej. |
| C-AC-04 | Rdzenie, warunki, konkretne EX/CE i osie CMP istnieją. R14 niewymuszone. |
| C-AC-05 | Nowe faktyczne stemy, klucze i każde rationale istnieją; nie wymuszono A/P/K w każdym T. |
| C-AC-06 | Wektory każdego itemu przeliczone na dokładnych ułamkach; arytmetyka nie jest review merytorycznym. |
| C-AC-07 | Relacje decyzja–R08–rationale–R09–reguła–R15–źródło instancjonowane w Content. |
| C-AC-08 | Neutralna korekta i rzeczywisty FU per kryterium; brak twierdzeń o diagnozie osoby; wyjście i limit pętli jawne. |
| C-AC-09 | Częściowo: pełni kandydaci D, konserwatywne rodziny i 3 pary na kryterium; odrębne review rodzin/eligibility pending. |
| C-AC-10 | Rubryki otwarte, warunki pełnej/częściowej/pustej/granicznej odpowiedzi i metoda oceny jawne. |
| C-AC-11 | Zakres kontaktu per kryterium, item/rodzina, dwa zegary i ekspozycja recenzencka opisane. |
| C-AC-12 | **Niespełnione w części odrębnego review.** Prawa obecnego review opisane; dalszy kanał publikacji nierozstrzygnięty. |
| C-AC-13 | Treści tekstowe z pełną tezą wiersza; zasady widoczności i powrotu określone. Realna interakcja do G3. |
| C-AC-14 | Inwentarz, delty, wersje, luki i handoff przygotowane. Brak pełnego FL, mocku i chronionej puli dla czytelnika. |


## Ślad FR / AC / UC

| Istniejące odniesienia | Wkład treści / granica |
| --- | --- |
| FR/AC-001–006; UC-01–03 | Karta, kryteria, materiały i retrieval; nie test orientacji/interfejsu. |
| FR/AC-007–012; UC-03/04/11 | Faktyczne formaty i rationale; nieobecny format w T nie jest brakującym obowiązkiem. |
| FR/AC-013–017; UC-05/06/07/14 | Korekty, CMP, FU, R26 kontrakt; brak realnej nawigacji ani diagnoz. |
| FR/AC-018–024; UC-15/16/18 | Rodziny/ujawnienie/czasy i ostrożne wnioski. Bez mastery, p(zdania) i danych osób. |
| FR/AC-025–030; UC-08/09/11/17 | Brak zatwierdzonego K6 Sprawdzenia lub pełnego mocku; instrukcje przyszłego użycia, scoring i opcjonalna flaga zachowane. |
| FR/AC-031–038; UC-14/16/17/18 | Terminy, luki, manifest, rewizje i reprezentacja. Brak testu wyszukiwarki/WCAG produktu. |


## Delty rejestrów, realne napięcia i korekty

Źródło: §1.3 ma nagłówek L2, lecz EO1.3.1 ma L1 w EN/PL. Zachowano L1 konkretnego EO. Nie odziedziczono poziomu nagłówka. Pięć perspektyw nie zastępuje trójpodziału rodzajów z T02.

C01: dopisać faktyczny odczyt wskazanych sekcji EU1/EU2 i Glossary; nie zmieniać ID C-S01–07. C02: nowe kontrolowane terminy z tej jednostki, bez nadpisania T-01–13; nowe nazwy otrzymują przestrzeń TERM-T04. Rodziny: dodać wymienione FAM i pary R21, z zachowaniem pending. START i B pozostają bez zmian.

Nie udokumentowano tutaj fikcyjnej historii wad ani prób osób. Ślad rzeczywistych korekt wydania jest w manifeście Z1. Źródło/klucz/rodzina zmienione po tym wydaniu wymagają oceny wszystkich zależnych REG/CMP/REM/B/F/D/RP, rationale i interpretacji historycznych. Danych uczniów obecnie brak, więc nie ma wyników do przeliczenia.


## Luki, dopuszczenia i konkretny następny krok do G2

| Luka | Wpływ / następna czynność |
| --- | --- |
| LUKA-02 / C-AC-12 | Odrębny reviewer rozwiązuje stemy bez [R], potem weryfikuje źródła, wszystkie klucze, rationale, rubryki, PL/EN, relacje i prawa. Zapisać osobę/kompetencje/datę/rewizję/zakres/uwagi/decyzję. |
| LUKA-05 / K5 | Rodziny konserwatywne, brak potwierdzonej nowej niezależnej rodziny per kryterium; kandydaci D istnieją. Reviewer porównuje B–F, B–D, F–D oraz bliskie C/inne T. |
| LUKA-07 / eligibility | Brak historii osoby. Pełny plik ujawniony czytelnikowi; nie można nazwać dla niego tych D nową rezerwą. |
| LUKA-08 / kanał | Wewnętrzny review określony; publiczny/komercyjny kanał i konkretne prawa wymagają rozstrzygnięcia przed publikacją. |
| LUKA-11 / K6 | Nie powstała zatwierdzona forma testowa; brak kompletnego FL i pełnego mocku. Nie składać wszystkich B w test bez review przecieków. |
| Empiria / G3 | Brak prób uczniów, trudności i retencji. G3 to osobny walkthrough po G2, z jawnym protokołem; symulacja nie dowodzi retencji. |

**Wniosek:** authoring tego T jest ukończony do review. Nie nadano zgody U-READ/U-GUIDED/U-INDEPENDENT/U-REMEDIAL/U-REVISION/U-RESERVED/U-TOPIC/U-MOCK. Po rozliczeniu odrębnego review właściciel może ocenić G2 dla określonej rewizji i użycia; G3 pozostaje osobno. R06 przyjęło review AI wyłącznie dla B, nie dla C/Z1.

Historia: v0.1, pierwsza autorska kontrola i handoff. Oryginalnych Sources nie zmieniono.
