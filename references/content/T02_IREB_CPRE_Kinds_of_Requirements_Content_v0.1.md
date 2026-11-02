# T02 — Rodzaje wymagań — Content v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Karta uruchomienia i granice

| Pole | Wartość |
| --- | --- |
| FLOW_ID | FLOW-Z1-T02-01 |
| Tryb | EXTEND istniejącego wkładu C, bez zmiany jego obiektów |
| EO / poziom | EO1.1.2 L2 |
| RUN_SCOPE | Pełny zadeklarowany trójpodział functional/quality/constraint, w tym dane/interakcje i granice heurystyk; NFR jako jakość lub ograniczenie. C-P pozostaje wkładem częściowym. |
| Zależności / bez gatingu | T01: rozpoznanie przedmiotu wymagania; T04: perspektywa nie jest rodzajem; T21: jakość zapisu nie jest quality requirement. |
| Poza pomiarem | Sąsiednie EO, zawodowa biegłość i pełny FL; brak L3 w właścicielskim zakresie Z1. |
| Zamierzone użycie | Materiał recenzencki i wsad dla agenta kodu; późniejsze użycia U-* po review |
| Wyniki | T02_IREB_CPRE_Kinds_of_Requirements_Content_v0.1.md; T02_IREB_CPRE_Kinds_of_Requirements_QA_and_Handoff_v0.1.md |
| Baseline | M01/M02/M03 v0.1; B01–04 v0.2/R06; kanon; FTC; Blueprint; C01–04 v0.2 |

### Widoczność, wynik i dowód

**[N]** objaśnienia, przykłady, porównania i korekty: Nauka po dopuszczeniu. **[Q]** tylko polecenie, opcje/wiersze i maksymalna waga. **[R]** klucz, rationale, reguła, EO, źródła, rodzina i rubryka: po odpowiedzi w Nauce, po finalizacji całej próby w Sprawdzeniu. **[D]** pełny kandydat delayed: poza zwykłym eksportem uczniowskim; w tym pliku jawny. Nagłówek tematu, metadane i źródło nie są częścią [Q].

Neutralna instrukcja przyszłej próby: „Możesz zmieniać odpowiedzi i oznaczać pytania do powrotu do chwili zakończenia całej próby. Oznaczenie jest dobrowolne. Wynik i wyjaśnienia zobaczysz po zakończeniu całości. Materiały RE są w trakcie niedostępne. Dopuszczony w profilu neutralny słownik językowy nie może zawierać definicji RE”. Możliwość flagi musi być dostępna; jej niewykorzystanie nie wpływa na punkty. Glossary CPRE stanowi pomoc dziedzinową. Czytnik, klawiatura i powiększenie są narzędziami dostępu.

Regulamin C-S04 5.6.2 §2, fizyczne s.4–6: A ma 4–5 opcji i jeden klucz; w=1 za trafny pojedynczy wybór, inaczej 0. P podaje k≥2; przy n≤k wynik w×c/k, przy n>k całe pytanie 0. K ma m wierszy; wynik w×c/m, a błąd, blank i obie wartości zerują tylko dany wiersz. Wagi niniejszych itemów 1–3 są decyzjami redakcyjnymi; nie empiryczną oceną trudności. Odpowiedzi otwarte ocenia lokalna rubryka, bez punktów CPRE. Ocena klasyfikacji według klucza i ocena swobodnego uzasadnienia pozostają osobne. Samoocena według rubryki jest samooceną.

Nie ma zdarzeń R25 EVIDENCE_FOR w korpusie. Prawidłowy wynik dotyczy ocenionych decyzji; nie zamyka całego EO ani nie ustala mastery. Przed nową próbą per kryterium trzeba zachować datę poprzedniej samodzielnej próby, koniec ostatniego istotnego kontaktu, oba rzeczywiste odstępy, historię itemu/rodziny oraz pomoc. Lektura reguły minutę przed zadaniem oznacza świeże wykonanie nawet po tygodniu od dawnej próby. Plan ≥24 h, 3–7 / około 14 dni jest hipotezą pilota z B, nie normą IREB.

K-04: **wiersz 4 ILL-K01 / KRY-X01** pozostaje pomocniczy bez EO. ILL-K01 zachowuje m=4, w=2, ilustracyjne 1/2 i dotychczasowe ograniczenie rezerwy CPRE/pełnego mocku. Nowe zadania Z1 nie zmieniają tej ilustracji.

## Inwentarz kryteriów i twierdzeń źródłowych

| Kryterium r1 / czynność | EO i poziom | Claim / lokalizacja | Granica obserwacji |
| --- | --- | --- | --- |
| KRY-T02-01 — Funkcja, jakość i dodatkowe ograniczenie rozwiązania | EO1.1.2 L2 | CL-T02-01; C-S02/C-S03 3.3.0 §1.1 s.11–12; C-S06 2.2.0 Functional/quality s.34, Constraint s.21; C-S07 1.3.2 §1.1 s.10–11 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T02-02 — NFR i rozdzielenie osi klasyfikacji | EO1.1.2 L2 | CL-T02-02; C-S06 2.2.0 Non-functional/quality/functional s.34 i Kind of requirement s.25; C-S02/C-S03 3.3.0 §1.1 s.11–12 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |


## 1. Funkcja, jakość i dodatkowe ograniczenie rozwiązania — KRY-T02-01

**Cel i czynność:** (1) Functional: wymagane zachowanie wysłania. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T02-01 — objaśnienie [N]

Klasyfikuj przedmiot oczekiwania. Functional requirement opisuje rezultat, zachowanie, dane lub interakcję, które ma zapewnić funkcja systemu. Quality requirement dotyczy cechy jakościowej niepokrytej samym wymaganiem funkcjonalnym. Constraint dodatkowo ogranicza przestrzeń rozwiązań ponad to, co wynika z wymaganych funkcji i jakości. Ten ostatni warunek odróżnia ograniczenie w sensie RE od potocznego „każde wymaganie coś ogranicza”.

Żądanie wygenerowania czterech etykiet jest funkcją mimo liczby. Limit czasu odpowiedzi jest jakością, choć odpowiada na ważne biznesowe „co chcemy osiągnąć”. Nakaz użycia wskazanej platformy mimo istnienia innych realizacji spełniających funkcje i jakość jest dodatkowym ograniczeniem. Wymóg zapisania osoby zatwierdzającej jest funkcją także wtedy, gdy służy bezpieczeństwu. Oczekiwana struktura danych oraz wymagana interakcja nie stają się constraint tylko przez szczegółowość. Zawodna heurystyka „co versus jak” nie może zastąpić concern, czyli przedmiotu oczekiwania.

Złożone zdanie może wyrażać kilka oczekiwań. „System tworzy raport i robi to w 2 sekundy” zawiera funkcję oraz cechę czasu. Rozdzielenie sensów jest objaśnieniem klasyfikacji L2, nie obowiązkiem wykonania pełnego projektu L3. Dla jednoznacznego punktowanego zadania trzeba określić perspektywę i warunki: czy technologia jest dodatkowo narzucona, czy zdanie opisuje cechę lub interakcję. Nie wolno dopisywać tych przesłanek dopiero w rationale.

**PL/EN i status:** T-06/T-07/T-08 z C02 zachowane; functional requirement — wymaganie funkcjonalne; quality requirement — wymaganie jakościowe; constraint in RE — ograniczenie w IW. Concern: autorskie objaśnienie „przedmiot oczekiwania”.

**Warunki i źródło CL-T02-01:** C-S02/C-S03 3.3.0 §1.1 s.11–12; C-S06 2.2.0 Functional/quality s.34, Constraint s.21; C-S07 1.3.2 §1.1 s.10–11 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T02-01 — porównanie [N]

Oś: przedmiot oczekiwania. Wynik/zachowanie/dane/interakcja → functional; cecha jakościowa → quality; dodatkowo narzucony wybór → constraint. Dwa różne oczekiwania w zdaniu trzeba nazwać osobno, zamiast wybierać typ po słowie „musi”.

**EX-KRY-T02-01 — przykład:** „Odpowiedź zawiera numer zgłoszenia” wymaga danych wyniku funkcji. „95% odpowiedzi w ≤1 s przy określonym obciążeniu” określa czas. „Użyj jedynie silnika X mimo odpowiednich alternatyw” nakazuje rozwiązanie.

**CE-KRY-T02-01 — kontrprzykład:** Uogólnienie „każdy limit to constraint” obala limit zużycia pamięci opisujący jakość pracy systemu. Wymagania funkcji i jakości też ograniczają możliwe realizacje.

### RP-T02-01 — retrieval [Q/R]

**[Q] Sklasyfikuj i uzasadnij: (1) system po żądaniu wysyła potwierdzenie; (2) czas odpowiedzi przy zadanym obciążeniu ≤1 s; (3) nakaz silnika X mimo alternatyw spełniających funkcje i jakość.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T02-01-rubryka-1 | (1) Functional: wymagane zachowanie wysłania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T02-01-rubryka-2 | (2) Quality: cecha czasu pracy przy wskazanym obciążeniu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T02-01-rubryka-3 | (3) Constraint: dodatkowy wybór realizacji mimo odpowiednich alternatyw. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T02-01 — korekta i kontrola [N]

Podkreśl, czego wymaga zdanie. Odrzuć reguły „liczba/technologia/bezpieczeństwo = jakość”. W constraint sprawdź dodatkowe zawężenie ponad funkcje i jakość. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T02-01-B01 / r1 — B / P

Redakcja [R]: primary KRY-T02-01 → EO1.1.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T02-01; Klasyfikacja wszystkich trzech rodzajów z uzasadnieniem.. Użycie: practice, do review.

**[Q] Dla systemu wydawania sprzętu oceń pary opis–typ. Wybrany czytnik Z jest narzucony mimo dostępności innych czytników spełniających wszystkie podane funkcje i cechy jakościowe. Które TRZY pary wraz z powodem są poprawne?**

Wybierz dokładnie 3 odpowiedzi. Maksymalnie 3 pkt.

| Opcja | Treść |
| --- | --- |
| a | „Użyj czytnika Z” — constraint, bo dodatkowo narzucono rozwiązanie mimo odpowiednich alternatyw. |
| b | „Po wydaniu sprzętu wyślij SMS” — quality, bo poprawia obsługę klienta. |
| c | „Limit pamięci procesu to 180 MiB w podanym teście” — constraint, bo każda liczba oznacza narzucony komponent. |
| d | „Potwierdzenie zawiera identyfikator wypożyczenia” — functional, bo opisuje dane wymaganego wyniku. |
| e | „95% identyfikacji w ≤0,8 s przy 30 terminalach” — quality, bo podaje cechę czasu w warunkach pracy. |

**[R] Klucz: a, d, e.** Przy n≤3 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T02-01-B01-a | wybrać | Przesłanka alternatyw jest jawna → dodatkowe zawężenie → wybrać. |
| RAT-Z1-T02-01-B01-b | nie wybierać | Wysyłanie to zachowanie → jego korzystny cel nie zmienia typu → nie wybrać. |
| RAT-Z1-T02-01-B01-c | nie wybierać | Limit zasobu nie nazywa komponentu → cecha jakości, błędna reguła → nie wybrać. |
| RAT-Z1-T02-01-B01-d | wybrać | Dane potwierdzenia są rezultatem funkcji → typ i argument właściwe → wybrać. |
| RAT-Z1-T02-01-B01-e | wybrać | Czas identyfikacji to concern jakości → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T02-01 oraz C-S02/C-S03 3.3.0 §1.1 s.11–12; C-S06 2.2.0 Functional/quality s.34, Constraint s.21; C-S07 1.3.2 §1.1 s.10–11. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Podkreśl, czego wymaga zdanie. Odrzuć reguły „liczba/technologia/bezpieczeństwo = jakość”. W constraint sprawdź dodatkowe zawężenie ponad funkcje i jakość. Przejście do REG-KRY-T02-01 / CMP-KRY-T02-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T02-01-F01 / r1 — F / O

Redakcja [R]: primary KRY-T02-01 → EO1.1.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T02-01; Jedno złożone wymaganie trzeba rozdzielić znaczeniowo; otwarty powód nie wynika z klucza P.. Użycie: practice, do review.

**[Q] System ma po anulowaniu zlecenia wysłać komunikat do operatora. Przy zadanym obciążeniu 99% komunikatów ma dotrzeć w ciągu 3 s. Do wysyłki narzucono komponent Omega, choć inne spełniają obie powyższe potrzeby. Rozdziel oczekiwania i podaj typ z powodem.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T02-01-F01-rubryka-1 | Wysłanie komunikatu to functional: wymagane zachowanie/interakcja. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T02-01-F01-rubryka-2 | Czas dla 99% komunikatów to quality: cecha działania w warunkach. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T02-01-F01-rubryka-3 | Omega to constraint: dodatkowo narzucony wybór realizacji mimo alternatyw. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie wszystkich oczekiwań za jeden typ wyłącznie z powodu słowa „komunikat” lub technologii. Odpowiedź graniczna/równoważna: Można opisać trzy oczekiwania jednym akapitem; wymagane są trzy odrębne klasyfikacje i powody.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T02-01 oraz C-S02/C-S03 3.3.0 §1.1 s.11–12; C-S06 2.2.0 Functional/quality s.34, Constraint s.21; C-S07 1.3.2 §1.1 s.10–11. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Podkreśl, czego wymaga zdanie. Odrzuć reguły „liczba/technologia/bezpieczeństwo = jakość”. W constraint sprawdź dodatkowe zawężenie ponad funkcje i jakość. Przejście do REG-KRY-T02-01 / CMP-KRY-T02-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T02-01-D01 / r1 — D / K

Redakcja [R]: primary KRY-T02-01 → EO1.1.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T02-01; Kontrast rezultatu liczbowego, cechy i dodatkowego wyboru; bliskość do C-P jawna.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Oceń klasyfikacje. System po zatwierdzeniu produkuje 5 kopii etykiety, ma dostępność 99,8% w uzgodnionym okresie i musi działać na platformie K narzuconej mimo odpowiednich alternatyw.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Wymóg pięciu kopii etykiety jest funkcjonalny. |
| 2 | Wymóg dostępności jest jakościowy. |
| 3 | Nakaz platformy K jest ograniczeniem w sensie RE. |
| 4 | Każde z tych wymagań jest jakościowe, bo zawęża zbiór realizacji. |

**[R] Klucz: Prawda, Prawda, Prawda, Fałsz.** Każdy poprawny wiersz daje 1/2; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T02-01-D01-1 | Prawda | Liczba opisuje rezultat funkcji → functional → Prawda. |
| RAT-Z1-T02-01-D01-2 | Prawda | Dostępność jest cechą jakościową działania → Prawda. |
| RAT-Z1-T02-01-D01-3 | Prawda | Dodatkowy wybór platformy mimo alternatyw → constraint → Prawda. |
| RAT-Z1-T02-01-D01-4 | Fałsz | Każdy wymóg może zawężać realizacje; o typie decyduje concern → Fałsz. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T02-01 oraz C-S02/C-S03 3.3.0 §1.1 s.11–12; C-S06 2.2.0 Functional/quality s.34, Constraint s.21; C-S07 1.3.2 §1.1 s.10–11. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Podkreśl, czego wymaga zdanie. Odrzuć reguły „liczba/technologia/bezpieczeństwo = jakość”. W constraint sprawdź dodatkowe zawężenie ponad funkcje i jakość. Przejście do REG-KRY-T02-01 / CMP-KRY-T02-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T02-01 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T02-01-B01 ↔ Z1-T02-01-F01 | Klasyfikacja wszystkich trzech rodzajów z uzasadnieniem. → Jedno złożone wymaganie trzeba rozdzielić znaczeniowo; otwarty powód nie wynika z klucza P.; rdzeniem jest funkcja, jakość i dodatkowe ograniczenie rozwiązania | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T02-01-B01 ↔ Z1-T02-01-D01 | Klasyfikacja wszystkich trzech rodzajów z uzasadnieniem. → Kontrast rezultatu liczbowego, cechy i dodatkowego wyboru; bliskość do C-P jawna.; rdzeniem jest funkcja, jakość i dodatkowe ograniczenie rozwiązania | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T02-01-F01 ↔ Z1-T02-01-D01 | Jedno złożone wymaganie trzeba rozdzielić znaczeniowo; otwarty powód nie wynika z klucza P. → Kontrast rezultatu liczbowego, cechy i dodatkowego wyboru; bliskość do C-P jawna.; rdzeniem jest funkcja, jakość i dodatkowe ograniczenie rozwiązania | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 2. NFR i rozdzielenie osi klasyfikacji — KRY-T02-02

**Cel i czynność:** NFR w Glossary obejmuje quality albo constraint; sam termin NFR nie oznacza wyłącznie jakości. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T02-02 — objaśnienie [N]

W kontrolowanym znaczeniu Glossary non-functional requirement obejmuje quality requirement albo constraint. NFR nie jest więc synonimem samej jakości. Jeżeli materiał zawodowy stosuje inne znaczenie, trzeba je jawnie nazwać; w tym pakiecie klucze opierają się na profilu IREB. Wydajność traktujemy w tym profilu jako podkategorię jakości, nawet jeśli w innych klasyfikacjach bywa wyróżniana oddzielnie.

Nie mieszaj rodzaju wymagania z perspektywą. Wymaganie użytkownika może opisywać funkcję albo jakość, a wymaganie biznesowe wskazuje inną perspektywę niż podział concern. Nie myl też quality requirement z jakością samego sformułowania. Funkcjonalny zapis może być jasny lub niejasny; jakościowy zapis też może być niejasny. T21 ocenia jakość zapisu, T02 to, czego ten zapis wymaga. Rozdzielenie osi pozwala utrzymać sens terminów bez uznawania jednego członu za odpowiedź na wszystkie pytania klasyfikacyjne.

**PL/EN i status:** non-functional requirement — wymaganie niefunkcjonalne (T-09); quality requirement — T-07. NFR rozwijać przy pierwszym użyciu.

**Warunki i źródło CL-T02-02:** C-S06 2.2.0 Non-functional/quality/functional s.34 i Kind of requirement s.25; C-S02/C-S03 3.3.0 §1.1 s.11–12 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T02-02 — porównanie [N]

Oś zbiorów: quality jest jedną z dwóch kategorii NFR; constraint jest drugą. Oś redakcyjna: jasny/niejasny zapis jest niezależna od obu — „system działa szybko” jest jakościowe i zarazem nieprecyzyjne.

**EX-KRY-T02-02 — przykład:** Dodatkowy nakaz bazy danych jest constraint, więc należy do NFR w profilu Glossary. Wymóg czasu odpowiedzi jest quality, więc również należy do NFR.

**CE-KRY-T02-02 — kontrprzykład:** Uogólnienie „NFR = jakość” obala dodatkowy nakaz konkretnego silnika. Jest NFR jako constraint, choć nie określa cechy jakościowej.

### RP-T02-02 — retrieval [Q/R]

**[Q] Czy constraint należy do NFR? Czy jasny zapis funkcjonalny staje się quality requirement? Uzasadnij oba rozróżnienia.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T02-02-rubryka-1 | NFR w Glossary obejmuje quality albo constraint; sam termin NFR nie oznacza wyłącznie jakości. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T02-02-rubryka-2 | Jasność zapisu nie zmienia rodzaju oczekiwania; funkcja pozostaje funkcją. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T02-02 — korekta i kontrola [N]

Rozdziel pytanie o typ oczekiwania od pytania o jakość jego zapisania. W profilu IREB NFR ma dwa człony: quality i constraint. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T02-02-B01 / r1 — B / A

Redakcja [R]: primary KRY-T02-02 → EO1.1.2 L2; czynność tego itemu: L1 — rozpoznanie opublikowanych pojęć/listy; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru. Rodzina FAM-T02-02; Znajomość zakresu terminu wspierająca klasyfikację L2.. Użycie: practice, do review.

**[Q] Który zakres ma non-functional requirement w przyjętym Glossary IREB?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Każdy błędnie napisany zapis. |
| b | Wyłącznie quality requirement. |
| c | Quality requirement albo constraint. |
| d | Wyłącznie każda funkcja związana z bezpieczeństwem. |

**[R] Klucz: c.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T02-02-B01-a | nie wybierać | Jakość redakcyjna nie jest definicją rodzaju → nie wybrać. |
| RAT-Z1-T02-02-B01-b | nie wybierać | Pomija constraint → za wąski zakres → nie wybrać. |
| RAT-Z1-T02-02-B01-c | wybrać | Oba człony odpowiadają hasłu → wybrać. |
| RAT-Z1-T02-02-B01-d | nie wybierać | Cel bezpieczeństwa może prowadzić do funkcji, lecz nie definiuje NFR → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T02-02 oraz C-S06 2.2.0 Non-functional/quality/functional s.34 i Kind of requirement s.25; C-S02/C-S03 3.3.0 §1.1 s.11–12. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Rozdziel pytanie o typ oczekiwania od pytania o jakość jego zapisania. W profilu IREB NFR ma dwa człony: quality i constraint. Przejście do REG-KRY-T02-02 / CMP-KRY-T02-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T02-02-F01 / r1 — F / K

Redakcja [R]: primary KRY-T02-02 → EO1.1.2 L2; czynność tego itemu: L1 — rozpoznanie opublikowanych pojęć/listy; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru. Rodzina FAM-T02-02; Rozdzielono zakres NFR, jakość zapisu i wydajność.. Użycie: practice, do review.

**[Q] Oceń twierdzenia przy znaczeniu NFR z Glossary 2.2.0.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Dodatkowy constraint należy do NFR. |
| 2 | Jednoznaczny zapis funkcji automatycznie jest quality requirement. |
| 3 | W tym profilu performance requirement mieści się w quality requirement. |

**[R] Klucz: Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T02-02-F01-1 | Prawda | NFR obejmuje constraint → Prawda. |
| RAT-Z1-T02-02-F01-2 | Fałsz | Jakość zapisu nie zmienia concern → Fałsz. |
| RAT-Z1-T02-02-F01-3 | Prawda | Glossary przyjmuje wydajność jako podkategorię jakości → Prawda. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T02-02 oraz C-S06 2.2.0 Non-functional/quality/functional s.34 i Kind of requirement s.25; C-S02/C-S03 3.3.0 §1.1 s.11–12. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Rozdziel pytanie o typ oczekiwania od pytania o jakość jego zapisania. W profilu IREB NFR ma dwa człony: quality i constraint. Przejście do REG-KRY-T02-02 / CMP-KRY-T02-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T02-02-D01 / r1 — D / O

Redakcja [R]: primary KRY-T02-02 → EO1.1.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T02-02; Dwa błędne rozumowania trzeba poprawić samodzielnie.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Recenzent mówi: „Zdanie o generowaniu potwierdzenia jest dobrze napisane, więc przeniosę je do wymagań jakościowych. Nakaz platformy nie może być NFR, bo nie mówi o jakości”. Skoryguj oba argumenty.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T02-02-D01-rubryka-1 | Generowanie potwierdzenia pozostaje functional; dobrze napisane oznacza cechę zapisu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T02-02-D01-rubryka-2 | Nakaz platformy będący dodatkowym constraint należy do NFR według Glossary, niezależnie od braku quality concern. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Utrzymanie dowolnego z dwóch utożsamień jako reguły definicyjnej. Odpowiedź graniczna/równoważna: Nie trzeba oceniać rzeczywistej jakości zdania; wystarczy rozdzielić osie i zakres terminu.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T02-02 oraz C-S06 2.2.0 Non-functional/quality/functional s.34 i Kind of requirement s.25; C-S02/C-S03 3.3.0 §1.1 s.11–12. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Rozdziel pytanie o typ oczekiwania od pytania o jakość jego zapisania. W profilu IREB NFR ma dwa człony: quality i constraint. Przejście do REG-KRY-T02-02 / CMP-KRY-T02-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T02-02 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T02-02-B01 ↔ Z1-T02-02-F01 | Znajomość zakresu terminu wspierająca klasyfikację L2. → Rozdzielono zakres NFR, jakość zapisu i wydajność.; rdzeniem jest nfr i rozdzielenie osi klasyfikacji | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T02-02-B01 ↔ Z1-T02-02-D01 | Znajomość zakresu terminu wspierająca klasyfikację L2. → Dwa błędne rozumowania trzeba poprawić samodzielnie.; rdzeniem jest nfr i rozdzielenie osi klasyfikacji | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T02-02-F01 ↔ Z1-T02-02-D01 | Rozdzielono zakres NFR, jakość zapisu i wydajność. → Dwa błędne rozumowania trzeba poprawić samodzielnie.; rdzeniem jest nfr i rozdzielenie osi klasyfikacji | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## Reuse, zależności i granice integracji

KRY-P01/r1, REG-P1, CMP-P, EX/CE/REM-P oraz C-P-B01/F01/D01/R01/S01 zachowują ID i znaczenie z C03 v0.2. KRY-P01 nadal jest częściowym rozróżnieniem quality wobec funkcji i dodatkowo narzuconego rozwiązania. Nowe KRY-T02-01/r1 operacjonalizuje szerszy jawny zakres: rozpoznanie i uzasadnienie każdego z trzech rodzajów także w danych/interakcjach; KRY-T02-02 kontroluje NFR. Nie przemianowano C-P-D01 na P: jest A. Pełny wkład C-P z jego źródłami, rodzinami i ograniczeniami włączono niżej jako wierny aneks; autorski odczyt nie zastępuje review C.


## Konkretne relacje, ekspozycja i powrót

Każdy koniec poniżej ma r1; źródła mają wersje rejestru na końcu. Każda instancja ma status „kontrola autorska 2.11.2026, odrębne review pending”. Relacje R02/R06 są interpretacją mapowania autora, R05/R08–R21 decyzją dydaktyczną uzasadnioną wskazaną regułą i czynnością; R15 wskazuje źródłową podstawę. Nie są automatycznie potwierdzone skutecznością.

| ID r1 | Typ | Końce i kierunek | Warunek / sens / funkcja / proweniencja |
| --- | --- | --- | --- |
| REL-T02-01-02 | R02 | KRY-T02-01 → EO1.1.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T02-01-05-REG | R05 | REG-KRY-T02-01 → KRY-T02-01 | Materiał REG wspiera konkretną czynność KRY-T02-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-01-05-CMP | R05 | CMP-KRY-T02-01 → KRY-T02-01 | Materiał CMP wspiera konkretną czynność KRY-T02-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-01-05-EX | R05 | EX-KRY-T02-01 → KRY-T02-01 | Materiał EX wspiera konkretną czynność KRY-T02-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-01-05-CE | R05 | CE-KRY-T02-01 → KRY-T02-01 | Materiał CE wspiera konkretną czynność KRY-T02-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-01-05-REM | R05 | REM-KRY-T02-01 → KRY-T02-01 | Materiał REM wspiera konkretną czynność KRY-T02-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-01-10 | R10 | REG-KRY-T02-01 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T02-01-11 | R11 | CMP-KRY-T02-01 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T02-01-12 | R12 | EX-KRY-T02-01 → REG-KRY-T02-01 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T02-01-13 | R13 | CE-KRY-T02-01 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T02-01-15 | R15 | CL-T02-01 / REG-KRY-T02-01 → C-S02/C-S03 3.3.0 §1.1 s.11–12; C-S06 2.2.0 Functional/quality s.34, Constraint s.21; C-S07 1.3.2 §1.1 s.10–11 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T02-01-18 | R18 | REM-KRY-T02-01 → KRY-T02-01 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T02-01-RP06 | R06 | RP-T02-01 → KRY-T02-01 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T02-01-B01-06 | R06 | Z1-T02-01-B01 → KRY-T02-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T02-01-B01-20 | R20 | Z1-T02-01-B01 → FAM-T02-01 | Zapamiętywalny rdzeń to rozróżnienie funkcja, jakość i dodatkowe ograniczenie rozwiązania; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T02-01-B01-a-08 | R08 | Z1-T02-01-B01/a → RAT-Z1-T02-01-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-B01-a-09 | R09 | RAT-Z1-T02-01-B01-a → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-B01-b-08 | R08 | Z1-T02-01-B01/b → RAT-Z1-T02-01-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-B01-b-09 | R09 | RAT-Z1-T02-01-B01-b → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-B01-c-08 | R08 | Z1-T02-01-B01/c → RAT-Z1-T02-01-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-B01-c-09 | R09 | RAT-Z1-T02-01-B01-c → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-B01-d-08 | R08 | Z1-T02-01-B01/d → RAT-Z1-T02-01-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-B01-d-09 | R09 | RAT-Z1-T02-01-B01-d → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-B01-e-08 | R08 | Z1-T02-01-B01/e → RAT-Z1-T02-01-B01-e | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-B01-e-09 | R09 | RAT-Z1-T02-01-B01-e → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-F01-06 | R06 | Z1-T02-01-F01 → KRY-T02-01 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T02-01-F01-20 | R20 | Z1-T02-01-F01 → FAM-T02-01 | Zapamiętywalny rdzeń to rozróżnienie funkcja, jakość i dodatkowe ograniczenie rozwiązania; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T02-01-F01-19 | R19 | Z1-T02-01-F01 → REM-KRY-T02-01 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T02-01-F01-rubryka-1-08 | R08 | Z1-T02-01-F01/rubryka-1 → RAT-Z1-T02-01-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-F01-rubryka-1-09 | R09 | RAT-Z1-T02-01-F01-rubryka-1 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-F01-rubryka-2-08 | R08 | Z1-T02-01-F01/rubryka-2 → RAT-Z1-T02-01-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-F01-rubryka-2-09 | R09 | RAT-Z1-T02-01-F01-rubryka-2 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-F01-rubryka-3-08 | R08 | Z1-T02-01-F01/rubryka-3 → RAT-Z1-T02-01-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-F01-rubryka-3-09 | R09 | RAT-Z1-T02-01-F01-rubryka-3 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-D01-06 | R06 | Z1-T02-01-D01 → KRY-T02-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T02-01-D01-20 | R20 | Z1-T02-01-D01 → FAM-T02-01 | Zapamiętywalny rdzeń to rozróżnienie funkcja, jakość i dodatkowe ograniczenie rozwiązania; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T02-01-D01-1-08 | R08 | Z1-T02-01-D01/1 → RAT-Z1-T02-01-D01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-D01-1-09 | R09 | RAT-Z1-T02-01-D01-1 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-D01-2-08 | R08 | Z1-T02-01-D01/2 → RAT-Z1-T02-01-D01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-D01-2-09 | R09 | RAT-Z1-T02-01-D01-2 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-D01-3-08 | R08 | Z1-T02-01-D01/3 → RAT-Z1-T02-01-D01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-D01-3-09 | R09 | RAT-Z1-T02-01-D01-3 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-Z1-T02-01-D01-4-08 | R08 | Z1-T02-01-D01/4 → RAT-Z1-T02-01-D01-4 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-01-D01-4-09 | R09 | RAT-Z1-T02-01-D01-4 → REG-KRY-T02-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-01. |
| REL-T02-02-02 | R02 | KRY-T02-02 → EO1.1.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T02-02-05-REG | R05 | REG-KRY-T02-02 → KRY-T02-02 | Materiał REG wspiera konkretną czynność KRY-T02-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-02-05-CMP | R05 | CMP-KRY-T02-02 → KRY-T02-02 | Materiał CMP wspiera konkretną czynność KRY-T02-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-02-05-EX | R05 | EX-KRY-T02-02 → KRY-T02-02 | Materiał EX wspiera konkretną czynność KRY-T02-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-02-05-CE | R05 | CE-KRY-T02-02 → KRY-T02-02 | Materiał CE wspiera konkretną czynność KRY-T02-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-02-05-REM | R05 | REM-KRY-T02-02 → KRY-T02-02 | Materiał REM wspiera konkretną czynność KRY-T02-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T02-02-10 | R10 | REG-KRY-T02-02 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T02-02-11 | R11 | CMP-KRY-T02-02 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T02-02-12 | R12 | EX-KRY-T02-02 → REG-KRY-T02-02 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T02-02-13 | R13 | CE-KRY-T02-02 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T02-02-15 | R15 | CL-T02-02 / REG-KRY-T02-02 → C-S06 2.2.0 Non-functional/quality/functional s.34 i Kind of requirement s.25; C-S02/C-S03 3.3.0 §1.1 s.11–12 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T02-02-18 | R18 | REM-KRY-T02-02 → KRY-T02-02 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T02-02-RP06 | R06 | RP-T02-02 → KRY-T02-02 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T02-02-B01-06 | R06 | Z1-T02-02-B01 → KRY-T02-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T02-02-B01-20 | R20 | Z1-T02-02-B01 → FAM-T02-02 | Zapamiętywalny rdzeń to rozróżnienie nfr i rozdzielenie osi klasyfikacji; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T02-02-B01-a-08 | R08 | Z1-T02-02-B01/a → RAT-Z1-T02-02-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-B01-a-09 | R09 | RAT-Z1-T02-02-B01-a → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-B01-b-08 | R08 | Z1-T02-02-B01/b → RAT-Z1-T02-02-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-B01-b-09 | R09 | RAT-Z1-T02-02-B01-b → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-B01-c-08 | R08 | Z1-T02-02-B01/c → RAT-Z1-T02-02-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-B01-c-09 | R09 | RAT-Z1-T02-02-B01-c → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-B01-d-08 | R08 | Z1-T02-02-B01/d → RAT-Z1-T02-02-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-B01-d-09 | R09 | RAT-Z1-T02-02-B01-d → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-F01-06 | R06 | Z1-T02-02-F01 → KRY-T02-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T02-02-F01-20 | R20 | Z1-T02-02-F01 → FAM-T02-02 | Zapamiętywalny rdzeń to rozróżnienie nfr i rozdzielenie osi klasyfikacji; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T02-02-F01-19 | R19 | Z1-T02-02-F01 → REM-KRY-T02-02 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T02-02-F01-1-08 | R08 | Z1-T02-02-F01/1 → RAT-Z1-T02-02-F01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-F01-1-09 | R09 | RAT-Z1-T02-02-F01-1 → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-F01-2-08 | R08 | Z1-T02-02-F01/2 → RAT-Z1-T02-02-F01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-F01-2-09 | R09 | RAT-Z1-T02-02-F01-2 → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-F01-3-08 | R08 | Z1-T02-02-F01/3 → RAT-Z1-T02-02-F01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-F01-3-09 | R09 | RAT-Z1-T02-02-F01-3 → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-D01-06 | R06 | Z1-T02-02-D01 → KRY-T02-02 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T02-02-D01-20 | R20 | Z1-T02-02-D01 → FAM-T02-02 | Zapamiętywalny rdzeń to rozróżnienie nfr i rozdzielenie osi klasyfikacji; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T02-02-D01-rubryka-1-08 | R08 | Z1-T02-02-D01/rubryka-1 → RAT-Z1-T02-02-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-D01-rubryka-1-09 | R09 | RAT-Z1-T02-02-D01-rubryka-1 → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |
| REL-Z1-T02-02-D01-rubryka-2-08 | R08 | Z1-T02-02-D01/rubryka-2 → RAT-Z1-T02-02-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T02-02-D01-rubryka-2-09 | R09 | RAT-Z1-T02-02-D01-rubryka-2 → REG-KRY-T02-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T02-02. |

Nie wymusza się nowego R14. Gdy brak terminu uniemożliwia konkretną czynność, proponowany krótki powrót do definicji można pominąć po wykazaniu znajomości. Nie trzeba ukończyć całego poprzedniego T. R03: oficjalne terminy PL/EN w tabelach/nocie oznaczają wskazany sens; autorskie aliasy jawnie oznaczono. Nie tworzono przekładów zadań EN (brak R22) ani R25 z projektu zadania. Kontekst scenariusza, np. logistyka czy wypożyczenia, ma tylko R07 MENTIONS, bez pomiaru biegłości domenowej.

**R26 — kontrakt instancji przy rzeczywistym odejściu:** Navigation Context wskazuje dokładny ID/r1 źródłowego B/F/D/RP, opcję/wiersz lub część rubryki, oddaną odpowiedź, wynik, stan ujawnienia, miejsce sesji i kotwicę. Powrót odtwarza ten sam stan; FU ma własne wykonanie. Nie ma tutaj fikcyjnego zdarzenia odejścia. Wycofany item pozostaje oznaczoną historią.

| Fragment | Zakres istotnego kontaktu | Ekspozycja / ograniczenie |
| --- | --- | --- |
| REG/CMP/EX/CE/REM-KRY-T02-01 | KRY-T02-01 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T02-02 | KRY-T02-02 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| Z1-T02-01-B01 | KRY-T02-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T02-01-F01 | KRY-T02-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T02-01-D01 | KRY-T02-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T02-02-B01 | KRY-T02-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T02-02-F01 | KRY-T02-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T02-02-D01 | KRY-T02-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |

### Źródła, atrybucja i prawa

Kontrola autora 2.11.2026: pobrano sześć PDF; odczytano faktycznie użyte fragmenty wskazane w claimach. Syllabus EN ma 49, PL 52 strony; lokalizacje to fizyczne strony PDF od 1. Regulamin przeczytano w całości. Katalog potwierdził wersje EN/PL. Handbook przeczytano w §§1.1–1.6 i 2.1–2.2.9, s.10–29; nie audytowano całego Handbook. Glossary odczytano hasłowo; audyt foundational osobno w manifeście. Lista URL nie zastępuje kontroli treści.

Podstawa: IREB e.V. i autorzy Syllabus — Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal; Glossary — Martin Glinz, terminy PL Monika Petri-Starego i Karolina Zmitrowicz; Handbook — Martin Glinz, Hans van Loenhoud, Stefan Staal, Stan Bühne. Tłumaczenie sylabusa PL: zespół SJSI wskazany na s.2 źródła. Prawa do źródeł pozostają przy ich właścicielach. Opracowanie projektu wspomagane AI; bez statusu oficjalnych pytań, akredytacji lub rekomendacji IREB.

Odczytano warunki na s.2 Syllabus EN/PL, Glossary EN/PL i Handbook. Użycie obecne: autorskie objaśnienia, oryginalne scenariusze, kontrolowane terminy i lokalizowane odsyłacze dla wewnętrznego review. Nie przeniesiono rysunków, tabel źródłowych ani pytań sample/Cockpit. Użycie istniejącego C wskazano jako reuse własnego materiału projektu. Nie ustalono kanału przyszłej publicznej/komercyjnej publikacji; przed nim trzeba ocenić konkretne wydanie i zakres zapożyczeń. Dostępność PDF nie oznacza ogólnej licencji reprodukcyjnej.
| ID zachowane z C01 | Źródło / wersja |
| --- | --- |
| C-S01 | [Katalog IREB, kontrola 2.11.2026](https://cpre.ireb.org/en/downloads-and-resources/downloads) |
| C-S02 | [IREB e.V., Syllabus EN 3.3.0, 1.04.2026](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf) |
| C-S03 | [IREB e.V., Syllabus PL 3.3.0, 1.04.2026](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/68b8837862-1787039957/cpre_foundationlevel_syllabus_pl_v.3.3.pdf) |
| C-S04 | [IREB e.V., Examination Regulations EN 5.6.2, 5.02.2024](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf) |
| C-S05 | [Martin Glinz / IREB e.V., Glossary EN 2.2.0, 1.10.2025](https://hub.ireb.org/media/pages/resources/cpre-glossary/bb302c52fe-1787039949/ireb_cpre_glossary_en_2.2.pdf) |
| C-S06 | [Martin Glinz / IREB e.V., Glossary PL 2.2.0, 1.10.2025; terminy PL: Monika Petri-Starego i Karolina Zmitrowicz](https://hub.ireb.org/media/pages/resources/cpre-glossary/d804142017-1787039952/ireb_cpre_glossary_pl_2.2.pdf) |
| C-S07 | [IREB e.V., Handbook EN 1.3.2, historia 23.07.2026; oficjalna publikacja w publicznej kopii iSQI](https://isqi.org/media/65/0a/43/1789029072/cpre_foundationlevel_handbook_en_v1.3.2.pdf) |

Historia: v0.1 — pierwsze ukończone autorskie wydanie tego tematu Z1. Nie zmieniono B, C, M ani START. Ocena QG i C-AC oraz rzeczywiste ograniczenia są w pliku QA_and_Handoff.

## Aneks — wierny wkład C-P z C03 v0.2 / r1

Poniżej zachowano oryginalne ID, treść i ograniczenia. Jest to reuse własnego materiału projektu dostarczonego w Sources, bez nowej akceptacji. KRY-P01 pozostaje zakresem częściowym.

## C03-P — LU-C-P: funkcja, jakość i ograniczenie

### P1. Wprowadzenie i wiedza [N]

**Cel:** rozróżnić, czego wymaga konkretny zapis: rezultatu/zachowania, cechy jakościowej czy dodatkowo narzuconego wyboru rozwiązania. Primary KRY-P01 / część EO1.1.2 L2. Nie ocenia to kompletności ani jakości redakcji wymagania z EO3.8.

**Terminy:** functional requirement — wymaganie funkcjonalne; quality requirement — wymaganie jakościowe; constraint — ograniczenie; non-functional requirement — wymaganie niefunkcjonalne. T-06–09/13.

**REG-P1:** klasyfikuj oczekiwanie wyrażone w zdaniu. Funkcja określa wynik, zachowanie lub interakcję. Jakość określa cechę nieobjętą samym wymaganiem funkcjonalnym. Constraint dodatkowo ogranicza dopuszczalne rozwiązania. Wyraz „musi”, liczba, techniczny język i cel bezpieczeństwa nie są samodzielnymi regułami klasyfikacji. S-P1/S-P2.

**CMP-P — oś: przedmiot oczekiwania, zamiast powierzchni zdania.**

| Typ | Pytanie rozstrzygające | Własny przykład |
|---|---|---|
| Functional | Jaki wynik/zachowanie/interakcja ma być zapewnione? | System na żądanie porównuje dwa wskazane dokumenty |
| Quality | Jaka cecha jakości działania lub systemu jest wymagana? | Przy podanym zestawie danych zużycie pamięci procesu nie przekracza ustalonego pułapu |
| Constraint | Jaki dodatkowy wybór realizacji narzucono mimo innych odpowiednich rozwiązań? | Nakaz użycia komponentu dostawcy Z, chociaż inne spełniają te same wymagania |

**Granice:** jedno zdanie może łączyć różne oczekiwania; wtedy najpierw rozdzielić je znaczeniowo, zamiast wymuszać jedną etykietę. Zadania P poniżej celowo izolują oczekiwania. Constraint wymaga dodatkowego ograniczenia przestrzeni, nie tylko dowolnej wzmianki o technologii. „Niefunkcjonalne” w Glossary obejmuje jakość lub ograniczenie, dlatego nie zastępuje etykiety quality.

**EX-P:** „System zapisuje identyfikator osoby zatwierdzającej dokument” określa zachowanie, nawet gdy służy rozliczalności. **CE-P:** „System po żądaniu drukuje 3 kopie etykiety” obala „każda liczba oznacza jakość”: trzy kopie są oczekiwanym rezultatem funkcji. Nie wnioskujemy z tych przykładów, że każda informacja o bezpieczeństwie lub liczbie jest funkcjonalna. S-P1/S-P2.

**PRE-P:** do klasyfikacji trzeba rozumieć, co jest przedmiotem wymagania. Sygnał braku: klasyfikowanie wyłącznie po obecności słowa „techniczny” bez wskazania oczekiwania. Pomoc: „Podkreśl rezultat, cechę albo narzucony wybór; jeśli są dwa różne oczekiwania, nazwij oba”. Warunkowy kandydat R14, bez wymuszenia i bez obowiązku całej lekcji podstaw.

### P2. Retrieval C-P-R01 [Q/R]

**[Q]** „Podaj po jednym kryterium odróżniającym wymaganie funkcjonalne, jakościowe i ograniczenie. Wyjaśnij, dlaczego sama liczba w zdaniu nie określa jego typu. Czy wymaganie niefunkcjonalne oznacza wyłącznie jakościowe?”.

**[R] Rubryka:** osobno ocenić wskazanie rezultatu/zachowania, cechy jakości oraz dodatkowego ograniczenia rozwiązania; następnie brak reguły „liczba = typ” i szerszy zakres NFR. Własne trafne przykłady równoważne definicyjnemu opisowi są dopuszczalne. „Funkcja = co, jakość = jak” bez rozróżnienia concern jest niepełne; „każda specyfikacja techniczna jest constraint” jest błędne. S-P1/S-P2. KRY-P01 tylko w części trójpodziału; NFR jest wspierającą kontrolą terminologii, bez dodatkowego EO. Ocena z rubryki przez wskazaną osobę lub jawna samoocena; bez punktów CPRE.

### P3. Bazowe C-P-B01

**Redakcja:** P, w=2, k=2; primary KRY-P01 / EO1.1.2 L2; FAM-C-P1.

**[Q]** Poniższe wymagania dotyczą samoobsługowego systemu wypożyczeń, obejmującego terminal i jego aplikację. Wymieniony komponent CatalogCore jest dodatkowo narzucony organizacyjnie, chociaż dostępne są inne komponenty spełniające te same wymagania funkcjonalne i jakościowe.

**Wybierz dokładnie DWA wymagania jakościowe. Maksymalnie 2 punkty.**

| Opcja | Treść |
|---|---|
| a | System umożliwia czytelnikowi przedłużenie wskazanego wypożyczenia. |
| b | System wykorzystuje komponent CatalogCore jako jedyny dopuszczony silnik katalogu. |
| c | Pobór mocy terminala w zdefiniowanym trybie bezczynności nie przekracza 8 W. |
| d | System zapisuje identyfikator pracownika, który zatwierdził zmianę limitu wypożyczeń. |
| e | W godzinach otwarcia, bez wyłączania okien serwisowych, system jest gotowy do obsługi przez co najmniej 99,5% czasu w miesiącu. |

**[R] Klucz: c,e.** Dla najwyżej 2 zaznaczeń każda trafna opcja daje 1 punkt; >2 zaznaczenia =0 za całe pytanie; S-SCORE.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-P-B01-a | Przedłużenie wypożyczenia jest oczekiwanym działaniem → określa funkcję → nie należy do klucza jakości | S-P1 |
| RAT-C-P-B01-b | Podano dodatkowy nakaz jednego silnika mimo odpowiednich alternatyw → ogranicza przestrzeń rozwiązań ponad pozostałe wymagania → constraint, nie quality | S-P1 |
| RAT-C-P-B01-c | Wskazano zużycie energii w określonym stanie → jest cechą jakościową terminala, a nie dodatkowym wyborem komponentu → należy do klucza | S-P1; autorskie zastosowanie do zużycia zasobów |
| RAT-C-P-B01-d | Rejestrowanie osoby jest wymaganym zachowaniem → funkcja może służyć jakości/bezpieczeństwu → sam cel nie czyni tego zapisu quality | S-P1/S-P2 |
| RAT-C-P-B01-e | Określono gotowość w zadanym okresie i sposób liczenia → cecha dostępności → należy do klucza | S-P1 |

**Feedback [R/N]:** wskazać rzeczywiście wybrane błędne opcje i pominięte c/e, potem REG-P1. Punkty za niewybrane a/b/d nie powstają. b prowadzi do CMP-P „cecha a narzucony wybór”, d do EX-P „funkcja wspierająca cel jakościowy”, c/e do jakości w REG-P1. Liczba dwóch prawidłowych opcji nie tworzy dwóch niezależnych dowodów EO.

### P4. Korekta, hipoteza i sonda

**REM-P [N]:** usuń z klasyfikacji skrót „liczba/technologia/bezpieczeństwo = jakość”. Wskaż, co ma się wydarzyć albo jaką właściwość/wybór narzucono. W bazowym b podano wybór silnika mimo alternatyw; w c cechę zużycia energii; w d czynność rejestracji. Następnie C-P-F01 sprawdzi klasyfikację wraz z gotowym uzasadnieniem.

**HYP-P:** wybranie b jako quality może być skutkiem utożsamienia technicznego zapisu z jakością; uznanie d za quality może wynikać z celu bezpieczeństwa. Alternatywy: przeoczenie k, brak znajomości constraint, nieprzeczytanie przesłanki o alternatywach, przypadkowe zaznaczenie. Zero za nadmiar nie diagnozuje nieznajomości tych rodzajów.

**C-P-S01 [Q]:** „Dla trzech wymagań podaj typ i wskaż fragment, który o nim decyduje: (1) Po zatwierdzeniu system tworzy cztery kopie etykiety. (2) Przy podanym obciążeniu zapis wyniku trwa nie dłużej niż 400 ms. (3) System musi używać platformy Delta, chociaż dwie inne platformy spełniają te same wymagania funkcjonalne i jakościowe”.

**[R] Wzorzec/rubryka:** (1) functional — utworzenie określonego rezultatu; (2) quality — czas wykonania przy podanym obciążeniu; (3) constraint — dodatkowo narzucona platforma. Ocenić każdą klasyfikację osobno oraz każdy wskazany powód. Nie przyznawać poprawnego powodu automatycznie po trafnej etykiecie. „Wszystkie quality, bo są konkretne” wspiera hipotezę powierzchniową; (1) quality z powodu liczby, (3) quality z powodu technologii rozdzielają dwie wersje hipotezy. Wszystkie trafne z odpowiednimi powodami osłabiają ją, ale nie dowodzą, że pierwotny błąd był tylko przeoczeniem. Bez powodów wynik diagnostycznie ograniczony.

S-P1/S-P2; przewidywania autora, bez walidacji. Po REM-P jest to ćwiczenie bieżącego rozumienia, nie dowód wcześniejszej przyczyny. Oceniający według rubryki albo samoocena; brak oficjalnych punktów.

### P5. Rzeczywisty follow-up C-P-F01

**Redakcja:** P, w=3, k=2; primary KRY-P01 / EO1.1.2 L2; FAM-C-P1. Wybór klasyfikacji z powodem, zamiast samego wybierania zdań quality.

**[Q]** W systemie obsługi faktur opisano wymagania poniżej. Użycie komponentu ScanBridge jest dodatkowym nakazem organizacji mimo istnienia innych rozwiązań spełniających te same wymagania funkcjonalne i jakościowe.

**Które DWIE klasyfikacje wraz z uzasadnieniem są poprawne? Maksymalnie 3 punkty.**

| Opcja | Treść |
|---|---|
| a | „System na żądanie generuje trzy kopie potwierdzenia” — jakościowe, ponieważ podano liczbę kopii. |
| b | „System używa komponentu ScanBridge” — ograniczenie, ponieważ dodatkowo narzucono wybór realizacji. |
| c | „Przy 80 równoczesnych operatorach 95% podglądów faktury pojawia się w ciągu 1,5 s” — jakościowe, ponieważ ograniczono czas odpowiedzi w danych warunkach. |
| d | „System pozwala odrzucić fakturę z podaniem powodu” — jakościowe, ponieważ służy ograniczaniu błędów. |
| e | „Czas ponownego udostępnienia usługi po awarii procesu nie przekracza 40 s w uzgodnionym teście” — funkcjonalne, ponieważ wspomina o wykonaniu czynności. |

**[R] Klucz: b,c.** Przy n≤2 każda trafna=3/2 punktu, przy n>2 całe P=0; S-SCORE.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-P-F01-a | Trzy kopie określają wynik funkcji → liczba nie jest kryterium jakości → para typ/powód błędna | S-P1/S-P2 |
| RAT-C-P-F01-b | Alternatywy spełniają pozostałe wymagania, lecz nakazano ScanBridge → dodatkowe zawężenie rozwiązania → klasyfikacja i powód poprawne | S-P1 |
| RAT-C-P-F01-c | Czas dla odsetka podglądów przy wskazanym obciążeniu → cecha wydajności, nie sama funkcja podglądu → klasyfikacja i powód poprawne | S-P1 |
| RAT-C-P-F01-d | Odrzucenie z powodem to wymagane zachowanie → cel ograniczania błędów nie zmienia typu → quality jest nieadekwatne | S-P1/S-P2 |
| RAT-C-P-F01-e | Zdanie ogranicza czas przywrócenia usługi w teście → cecha jakościowa odtwarzania działania → obecność czynności nie uzasadnia typu functional dla tego ograniczenia | S-P1/S-P2 |

**Feedback:** „Ocenialiśmy zarówno typ, jak i podany powód. W b rozstrzyga dodatkowy nakaz; w c cecha wydajności”. Nowość dydaktyczna: trzeba odrzucić również błędne uzasadnienie pozornie znajomej klasyfikacji. Nie potwierdza to swobodnego tworzenia uzasadnienia ani niezależnej rodziny. Po błędzie a/d/e kierować do wskazanego wymiaru CMP-P, bez powrotu do całej teorii wymagań.

### P6. Kandydat delayed C-P-D01 [D]

**Redakcja:** A, w=1; primary KRY-P01 / EO1.1.2 L2; proponowana FAM-C-P2. Pakiet P zachowuje bazowe i follow-up P; późniejsza kontrola celowo zmienia format na wybór argumentu.

**[Q]** Moduł zestawia wyniki pomiarów. Dwie jego możliwe implementacje zapewniają te same wymagane funkcje, ale różnią się zużyciem pamięci. Postawiono wymaganie: „Podczas pracy na uzgodnionym zestawie 50 000 rekordów proces zajmuje nie więcej niż 256 MiB pamięci operacyjnej”. Wymaganie nie wskazuje komponentu, algorytmu ani platformy; obie implementacje mogą spełnić ten limit.

Która klasyfikacja tego wymagania ma właściwe uzasadnienie? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Funkcjonalne — ponieważ sprawne zestawianie wyników jest ważnym celem modułu. |
| b | Ograniczenie — ponieważ każdy liczbowy limit zawężający możliwe implementacje jest ograniczeniem w sensie RE. |
| c | Funkcjonalne — ponieważ wymaganie nie narzuca nazwanego komponentu ani platformy. |
| d | Jakościowe — ponieważ określa cechę zużycia zasobu przy podanym wolumenie pracy. |

**[R] Klucz: d.** Pojedyncze d=1; inne/brak/nadmiar=0; S-SCORE, reguła A.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-P-D01-a | Przedmiotem zdania jest zużycie pamięci, chociaż system realizuje cel funkcjonalny → cel całego modułu nie określa typu każdego jego wymagania → uzasadnienie nie daje typu functional | S-P1/S-P2 |
| RAT-C-P-D01-b | Limit dotyczy cechy pracy modułu → także quality zawęża dopuszczalne realizacje; constraint ogranicza je dodatkowo ponad dane funkcje i jakość → sam limit liczbowy nie uzasadnia constraint | S-P1/S-P2 |
| RAT-C-P-D01-c | Nie narzucono komponentu → brak takiego constraint nie rozstrzyga pomiędzy functional i quality → argument jest niewystarczający i daje niewłaściwy typ | S-P1 |
| RAT-C-P-D01-d | Wskazano pamięć procesu przy określonych danych → cecha jakościowa zużycia zasobu, bez dodatkowego wyboru realizacji → klasyfikacja i argument poprawne | S-P1/S-P2; autorskie zastosowanie do zasobów |

**Feedback:** „Samo zawężenie zbioru implementacji nie wystarcza do rozpoznania constraint: wymagania funkcjonalne i jakościowe też ten zbiór zawężają. Tu ograniczono cechę zużycia pamięci”. Zmiana poznawcza: uczeń ocenia konkurencyjne reguły klasyfikacji jednego oczekiwania przy alternatywnych implementacjach, zamiast wyszukiwać kilka quality w liście. Rozróżnienie pojęciowe jest rzeczywiste; odrębność rodziny nadal wymaga review, a ekspozycja na tę samą regułę może pomagać zgodnie z celem nauki.

### P7. Zakończenie, powrót i ograniczenie rezerwy

Po C-P-F01 punktacja ocenia zamknięte pary klasyfikacja/powód, nie własną wypowiedź. Po pełnym wyniku można zakończyć lokalną korektę, zachowując informację o świeżej instrukcji. C-P-S01 daje osobne otwarte uzasadnienia z jawnym źródłem oceny, jeżeli rzeczywiście zostanie wykonane.

Błędny follow-up: CMP-P, wąska pomoc PRE-P albo przerwa. Nie używać delayed jako drugiego natychmiastowego follow-up. Brak drugiego zamkniętego wariantu jest jawnym ograniczeniem przekroju; reguła zmiany wsparcia po drugim niepowodzeniu nie wymusza produkcji trzeciego.

Powrót wskazuje C-P-B01/r1 i opcję wejścia, zachowuje faktyczny zestaw zaznaczeń, punkty i stan feedbacku. C-P-F01 nie przelicza pierwotnej odpowiedzi. Utrata punktów za nadmiar jest osobnym faktem od poprawności poszczególnych klasyfikacji.


### Źródła referencji S-* aneksu — zachowane z C01 v0.2

| Referencja | Zachowane znaczenie |
| --- | --- |
| S-P1 | C-S02 EO1.1.2 / §1.1 s.11–12; C-S03 s.11–12; C-S06 odpowiednie hasła s.21/34 |
| S-P2 | C-S06 non-functional requirement s.34; C-S07 §1.1 s.10–11 |
| S-SCORE | C-S04 §2 s.4–6; §1.2 s.2 |
| S-LEARN | Kanon pedagogiczny w całości; Deep Research D7/D10–12; Blueprint F09–F14; przyjęte B01–B04 v0.2 |


### Rodziny i pary reuse — zachowane z C03 v0.2

| FAM-C-P1 | C-P-B01, C-P-F01, C-P-R01, C-P-S01 | Kontrast powierzchniowego sygnału z przedmiotem oczekiwania; liczba/technologia/cel nie wystarczają. Świeża korekta daje charakterystyczne wskazówki |
| FAM-C-P2 | C-P-D01 | Ocena reguły klasyfikacji jednego limitu zasobu przy alternatywnych implementacjach, w tym błędnego argumentu „każde zawężenie = constraint”; granice do review |
| C-P-B01 ↔ C-P-F01 | Wybór samych quality → ocena klasyfikacji razem z gotowym powodem | Wymaga oceny argumentu, ale powtarza liczbę/komponent/cel; rodzina wspólna |
| C-P-B01 ↔ C-P-D01 | Wybór dwóch quality z wielu oczekiwań → ocena konkurencyjnych reguł dla jednego limitu i dwóch realizacji | Nie wystarczy pamięć c/e; trzeba odrzucić utożsamienie każdego zawężenia z constraint. Nowa rodzina pozostaje propozycją |
| C-P-F01 ↔ C-P-D01 | Ocena wielu par opis/typ → rozstrzygnięcie granicy definicji constraint w jednym oczekiwaniu | W obu ocenia się gotowe argumenty; ryzyko bliskości pozostaje i wymaga review |

Rodziny reuse zachowują status propozycji z C03. Porównanie z nowymi zadaniami znajduje się w QA; niezależność nie jest zadeklarowana.

## Foundational — lokalny odczyt oznaczeń

Glossary PL 2.2.0 s.8 objaśnia, że pogrubione hasła są key terms FL. Sprawdzono niżej nagłówki i fonty PDF (PPMori-Bold). Definicje EN odczytano w wydaniu PL. To lokalny inwentarz Z1; nie audyt wszystkich haseł całego FL i nie dodatkowe oficjalne EO.

| Hasło / strona PDF C-S06 | Status / pokrycie |
| --- | --- |
| Wymaganie funkcjonalne / functional requirement / 34 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Wymaganie jakościowe / quality requirement / 34 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Ograniczenie / constraint / 21 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| NFR / 34 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |

Shared understanding jest terminem EU2 w Syllabus; nie znaleziono osobnego hasła o tej nazwie w Glossary PL/EN. Nie dopisano fikcyjnej definicji słownikowej. Verification w Glossary PL s.32 nie jest pogrubione; służy tutaj kontrastowi z validation. System context w PL s.17 nie jest pogrubione, ale jego sens odpowiada kontekstowi RE i jest wymaganym elementem objaśnienia.
