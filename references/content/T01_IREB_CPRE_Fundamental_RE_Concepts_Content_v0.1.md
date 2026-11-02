# T01 — Podstawowe pojęcia RE — Content v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Karta uruchomienia i granice

| Pole | Wartość |
| --- | --- |
| FLOW_ID | FLOW-Z1-T01-01 |
| Tryb | CREATE |
| EO / poziom | EO1.1.1 L1 |
| RUN_SCOPE | Wymaganie w trzech sensach; specyfikacja/specyfikacja wymagań; interesariusz; system; RE i podstawowa terminologia roli. |
| Zależności / bez gatingu | T02/T05 rozwijają typy i rolę; znajomość słów można sprawdzić bez lektury innych T. |
| Poza pomiarem | Sąsiednie EO, zawodowa biegłość i pełny FL; brak L3 w właścicielskim zakresie Z1. |
| Zamierzone użycie | Materiał recenzencki i wsad dla agenta kodu; późniejsze użycia U-* po review |
| Wyniki | T01_IREB_CPRE_Fundamental_RE_Concepts_Content_v0.1.md; T01_IREB_CPRE_Fundamental_RE_Concepts_QA_and_Handoff_v0.1.md |
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
| KRY-T01-01 — Trzy sensy requirement | EO1.1.1 L1 | CL-T01-01; C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 hasło Wymaganie s.33 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T01-02 — Specification i requirements specification | EO1.1.1 L1 | CL-T01-02; C-S06 2.2.0 hasła Specyfikacja i Specyfikacja wymagań s.27; C-S02/C-S03 3.3.0 EU1 s.11 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T01-03 — Stakeholder a user | EO1.1.1 L1 | CL-T01-03; C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Interesariusz s.14 i Użytkownik s.32 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T01-04 — System w szerokim znaczeniu inżynierskim | EO1.1.1 L1 | CL-T01-04; C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 System s.29 i Komponent s.16 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T01-05 — Cel i charakter Requirements Engineering | EO1.1.1 L1 | CL-T01-05; C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Inżynieria wymagań i Inżynier wymagań s.14 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |


## Wprowadzenie do tematu [N]

Podstawowe pojęcia pozwalają ustalić, o czym rozmawiamy: czy o potrzebie człowieka, wymaganej właściwości systemu, czy o zapisie tej właściwości. W tym temacie rozpoznajesz znaczenia, a nie tworzysz jeszcze kompletnej specyfikacji. Najważniejsza praktyka językowa to nazwanie sensu słowa w konkretnym zdaniu. Obecność formularza, dokumentu lub numeru wymagania nie przesądza o istnieniu i poprawnym rozumieniu samej potrzeby.


## 1. Trzy sensy requirement — KRY-T01-01

**Cel i czynność:** Wymienia potrzebę interesariusza, wymaganą zdolność/właściwość systemu oraz udokumentowaną reprezentację. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T01-01 — objaśnienie [N]

Wymaganie (requirement) może oznaczać potrzebę postrzeganą przez interesariusza, zdolność lub właściwość, którą ma mieć system, albo udokumentowaną reprezentację takiej potrzeby, zdolności lub właściwości. To trzy sensy jednego terminu, nie trzy rodzaje z T02. Rozmówca mówiący „nie zapisaliśmy tego wymagania” może mieć na myśli istniejącą potrzebę, której nie utrwalono. Zdanie „wymaganie znajduje się w repozytorium” mówi zwykle o reprezentacji. Rozróżnienie pomaga uniknąć twierdzenia, że potrzeba zaczyna istnieć dopiero po utworzeniu rekordu.

Zapis jest środkiem komunikacji. Może być niejasny, niepełny lub nietrafny wobec potrzeby; samo jego istnienie nie potwierdza zgodności z potrzebą. Rozpoznanie sensu nie wymaga narzędzia ani formalnego ID. Gdy w zdaniu brakuje kontekstu, należy dopytać, zamiast arbitralnie wybierać jeden sens. Na L1 chodzi o znajomość tych znaczeń; ocena jakości zapisu i proces jego uzgadniania należą do innych tematów.

**PL/EN i status:** wymaganie — requirement: oficjalna para C-S06 s.33; „reprezentacja” jest objaśnieniem sensu 3.

**Warunki i źródło CL-T01-01:** C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 hasło Wymaganie s.33 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T01-01 — porównanie [N]

Oś: potrzeba → wymagana właściwość → jej zapis. „Chcę odzyskać dane” wskazuje potrzebę; „system ma umożliwiać odzyskanie” wskazuje właściwość; „akapit REQ-17” wskazuje zapis. Functional/quality/constraint to odmienna oś.

**EX-KRY-T01-01 — przykład:** Pracownik potrzebuje odtworzyć numer przesyłki po awarii. Zdolność odtworzenia jest oczekiwaniem wobec systemu; wpis REQ-17 jest jego reprezentacją.

**CE-KRY-T01-01 — kontrprzykład:** Uogólnienie „bez numeru nie ma wymagania” obala potrzeba odtworzenia zgłoszona ustnie przed utworzeniem REQ-17. Brak zapisu nie usuwa potrzeby.

### RP-T01-01 — retrieval [Q/R]

**[Q] Wymień trzy sensy requirement i pokaż różnicę między potrzebą a jej zapisem.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T01-01-rubryka-1 | Wymienia potrzebę interesariusza, wymaganą zdolność/właściwość systemu oraz udokumentowaną reprezentację. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T01-01-rubryka-2 | Odróżnia potrzebę od zapisu; dopuszcza istnienie potrzeby przed zapisem. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T01-01 — korekta i kontrola [N]

Najpierw ustal, czy zdanie dotyczy potrzeby, cechy systemu czy reprezentacji. Nie zastępuj tych sensów podziałem na funkcję, jakość i ograniczenie. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T01-01-B01 / r1 — B / K

Redakcja [R]: primary KRY-T01-01 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-01; Rozpoznanie trzech znaczeń wprost.. Użycie: practice, do review.

**[Q] Oceń twierdzenia o znaczeniu terminu requirement.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Potrzeba interesariusza może być wymaganiem przed jej udokumentowaniem. |
| 2 | Wpis w specyfikacji może być reprezentacją wymaganej właściwości. |
| 3 | Trzy sensy requirement to functional, quality i constraint. |

**[R] Klucz: Prawda, Prawda, Fałsz.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-01-B01-1 | Prawda | Podano potrzebę → pierwszy sens requirement nie wymaga wcześniejszego rekordu → Prawda. |
| RAT-Z1-T01-01-B01-2 | Prawda | Podano utrwalony zapis właściwości → sens reprezentacji → Prawda. |
| RAT-Z1-T01-01-B01-3 | Fałsz | Wyliczono rodzaje oczekiwań → to inna klasyfikacja niż trzy znaczenia terminu → Fałsz. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-01 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 hasło Wymaganie s.33. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw ustal, czy zdanie dotyczy potrzeby, cechy systemu czy reprezentacji. Nie zastępuj tych sensów podziałem na funkcję, jakość i ograniczenie. Przejście do REG-KRY-T01-01 / CMP-KRY-T01-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-01-F01 / r1 — F / O

Redakcja [R]: primary KRY-T01-01 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-01; Konkretny dialog zastępuje ogólne tezy; trzeba rozpoznać dwa referenty.. Użycie: practice, do review.

**[Q] Właściciel pracowni mówi: „Muszę widzieć, które zamówienia nie są opłacone”. Analityk dopisuje zdanie w rejestrze. Nazwij potrzebę i jej reprezentację; czy zapis stworzył potrzebę?**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T01-01-F01-rubryka-1 | Potrzebą jest wiedza o nieopłaconych zamówieniach, niezależna od późniejszego wpisu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T01-01-F01-rubryka-2 | Wpis analityka dokumentuje potrzebę; nie jest powodem jej powstania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie, że przed wpisem nie mogła istnieć potrzeba. Odpowiedź graniczna/równoważna: Nie trzeba cytować właściciela dosłownie; można nazwać sens własnymi słowami.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-01 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 hasło Wymaganie s.33. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw ustal, czy zdanie dotyczy potrzeby, cechy systemu czy reprezentacji. Nie zastępuj tych sensów podziałem na funkcję, jakość i ograniczenie. Przejście do REG-KRY-T01-01 / CMP-KRY-T01-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-01-D01 / r1 — D / A

Redakcja [R]: primary KRY-T01-01 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-01; Zmiana na odczyt sensu w instrukcji; wspólny rdzeń pojęciowy.. Użycie: practice / kandydat delayed [D], do review.

**[Q] W instrukcji przeglądu napisano: „Porównaj wymaganie zapisane w punkcie 8 z potrzebą zgłoszoną przez operatora”. Co oznacza tu wymaganie „zapisane w punkcie 8”?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Rodzaj ograniczenia technologicznego. |
| b | Udokumentowaną reprezentację potrzeby lub wymaganej właściwości. |
| c | Wyłącznie potrzebę, której nie da się zapisać. |
| d | Każdy zrealizowany fragment kodu. |

**[R] Klucz: b.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-01-D01-a | nie wybierać | Lokalizacja nie mówi, czego dotyczy oczekiwanie → typ constraint nie wynika → nie wybrać. |
| RAT-Z1-T01-01-D01-b | wybrać | Lokalizacja w tekście wskazuje reprezentację → sens 3 → właściwa odpowiedź. |
| RAT-Z1-T01-01-D01-c | nie wybierać | Podano istniejący zapis → nie jest to wyłącznie nieutrwalona potrzeba → nie wybrać. |
| RAT-Z1-T01-01-D01-d | nie wybierać | Punkt specyfikacji nie oznacza kodu → implementacja nie wynika ze stemu → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-01 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 hasło Wymaganie s.33. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw ustal, czy zdanie dotyczy potrzeby, cechy systemu czy reprezentacji. Nie zastępuj tych sensów podziałem na funkcję, jakość i ograniczenie. Przejście do REG-KRY-T01-01 / CMP-KRY-T01-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T01-01 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T01-01-B01 ↔ Z1-T01-01-F01 | Rozpoznanie trzech znaczeń wprost. → Konkretny dialog zastępuje ogólne tezy; trzeba rozpoznać dwa referenty.; rdzeniem jest trzy sensy requirement | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-01-B01 ↔ Z1-T01-01-D01 | Rozpoznanie trzech znaczeń wprost. → Zmiana na odczyt sensu w instrukcji; wspólny rdzeń pojęciowy.; rdzeniem jest trzy sensy requirement | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-01-F01 ↔ Z1-T01-01-D01 | Konkretny dialog zastępuje ogólne tezy; trzeba rozpoznać dwa referenty. → Zmiana na odczyt sensu w instrukcji; wspólny rdzeń pojęciowy.; rdzeniem jest trzy sensy requirement | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 2. Specification i requirements specification — KRY-T01-02

**Cel i czynność:** Rozpoznaje proces specyfikowania i uporządkowany opis jako rezultat. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T01-02 — objaśnienie [N]

Specification oznacza zarówno rezultat pracy, jak i proces specyfikowania. Jako rezultat jest uporządkowanym opisem właściwości określonego obiektu, spełniającym ustalone kryteria. Może opisywać właściwości wymagane lub już zaimplementowane. Requirements specification jako rezultat skupia wymagania w uporządkowanej reprezentacji. W drugim sensie wyrażenie może oznaczać czynność ich specyfikowania.

Nie należy utożsamiać każdej specyfikacji z listą przyszłych wymagań ani każdego zbioru luźnych notatek ze spełniającą kryteria specyfikacją. O rodzaju opisu decyduje przedmiot i rola, a nie rozszerzenie pliku. Requirements specification nie musi być pojedynczym dokumentem Word; w tym temacie rozpoznajemy sens, bez projektowania struktur dokumentacji z T19. Zdanie „specyfikacja trwała dwa dni” nazywa proces; „przejrzeliśmy specyfikację” zwykle nazywa rezultat.

**PL/EN i status:** specyfikacja — specification; specyfikacja wymagań — requirements specification: C-S06 s.27; nie każdy dokument to specyfikacja wymagań.

**Warunki i źródło CL-T01-02:** C-S06 2.2.0 hasła Specyfikacja i Specyfikacja wymagań s.27; C-S02/C-S03 3.3.0 EU1 s.11 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T01-02 — porównanie [N]

Oś 1: proces versus rezultat — „specyfikowanie” i „gotowy opis”. Oś 2: właściwości wymagane versus zaimplementowane — specyfikacja wymagań i opis wykonanego produktu. Każda oś ma własne pytanie.

**EX-KRY-T01-02 — przykład:** Opis już produkowanego czujnika może specyfikować jego rzeczywiste cechy; wymagania dla następnej wersji opisują cechy pożądane. Oba są opisami, lecz mają inną rolę.

**CE-KRY-T01-02 — kontrprzykład:** Uogólnienie „specification zawsze znaczy przyszłe wymagania” obala techniczny opis istniejącego czujnika dokumentujący cechy wykonanej wersji.

### RP-T01-02 — retrieval [Q/R]

**[Q] Odróżnij specification jako proces i rezultat oraz wyjaśnij, co wyróżnia requirements specification.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T01-02-rubryka-1 | Rozpoznaje proces specyfikowania i uporządkowany opis jako rezultat. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T01-02-rubryka-2 | Requirements specification dotyczy wymagań, a specification może też opisywać właściwości już istniejące. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T01-02 — korekta i kontrola [N]

Zbadaj przedmiot opisu i sens zdania. Nazwa pliku lub obecność tabel nie zastępuje tego rozróżnienia. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T01-02-B01 / r1 — B / A

Redakcja [R]: primary KRY-T01-02 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-02; Rozpoznanie znaczenia rezultatu pracy.. Użycie: practice, do review.

**[Q] Które zdanie poprawnie charakteryzuje requirements specification jako rezultat pracy?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Wyłącznie kod wdrożonej aplikacji. |
| b | Zawsze pojedynczy papierowy formularz. |
| c | Uporządkowany zbiór wymagań spełniający ustalone kryteria. |
| d | Dowolną rozmowę niezależnie od jej utrwalenia i struktury. |

**[R] Klucz: c.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-02-B01-a | nie wybierać | Kod implementuje zachowanie, a nie z definicji zbiór wymagań → nie wybrać. |
| RAT-Z1-T01-02-B01-b | nie wybierać | Nośnik i liczba dokumentów nie definiują znaczenia → bezpodstawne zawężenie → nie wybrać. |
| RAT-Z1-T01-02-B01-c | wybrać | Chodzi o rezultat → zbiór wymagań o uporządkowanej reprezentacji → wybrać. |
| RAT-Z1-T01-02-B01-d | nie wybierać | Rozmowa nie gwarantuje reprezentacji spełniającej kryteria → definicja rezultatu nie jest spełniona → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-02 oraz C-S06 2.2.0 hasła Specyfikacja i Specyfikacja wymagań s.27; C-S02/C-S03 3.3.0 EU1 s.11. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zbadaj przedmiot opisu i sens zdania. Nazwa pliku lub obecność tabel nie zastępuje tego rozróżnienia. Przejście do REG-KRY-T01-02 / CMP-KRY-T01-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-02-F01 / r1 — F / K

Redakcja [R]: primary KRY-T01-02 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-02; Proces/rezultat i wymagane/wykonane oceniane w kontrastach.. Użycie: practice, do review.

**[Q] Oceń użycia terminu specification.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Sformułowanie „specyfikowanie wymagań zajęło tydzień” dotyczy procesu. |
| 2 | Specyfikacja techniczna może opisywać już zaimplementowane właściwości. |
| 3 | Każda specyfikacja z definicji zawiera tylko wymagania. |

**[R] Klucz: Prawda, Prawda, Fałsz.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-02-F01-1 | Prawda | Opis czasu czynności → proces specyfikowania → Prawda. |
| RAT-Z1-T01-02-F01-2 | Prawda | Znaczenie specification dopuszcza cechy wykonane → Prawda. |
| RAT-Z1-T01-02-F01-3 | Fałsz | Specification ma szerszy zakres niż requirements specification → Fałsz. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-02 oraz C-S06 2.2.0 hasła Specyfikacja i Specyfikacja wymagań s.27; C-S02/C-S03 3.3.0 EU1 s.11. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zbadaj przedmiot opisu i sens zdania. Nazwa pliku lub obecność tabel nie zastępuje tego rozróżnienia. Przejście do REG-KRY-T01-02 / CMP-KRY-T01-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-02-D01 / r1 — D / O

Redakcja [R]: primary KRY-T01-02 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-02; Dwa równoległe artefakty wymuszają rozróżnienie przedmiotu.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Zespół ma katalog parametrów obecnego urządzenia i uzgodniony opis oczekiwań dla następnego wydania. Rozpoznaj, który opis jest specyfikacją wymagań. Czy drugi przez to przestaje być specification?**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T01-02-D01-rubryka-1 | Opis oczekiwań dla następnego wydania jest specyfikacją wymagań, o ile spełnia kryteria uporządkowanego zbioru. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T01-02-D01-rubryka-2 | Katalog parametrów obecnego urządzenia może być specyfikacją jego zaimplementowanych właściwości; nie musi być specyfikacją wymagań. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Stwierdzenie, że opis właściwości istniejącego urządzenia nie może być specyfikacją. Odpowiedź graniczna/równoważna: Dopuszczalne słowa „opis wykonania” i „opis tego, co ma powstać”; należy zachować obie role.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-02 oraz C-S06 2.2.0 hasła Specyfikacja i Specyfikacja wymagań s.27; C-S02/C-S03 3.3.0 EU1 s.11. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zbadaj przedmiot opisu i sens zdania. Nazwa pliku lub obecność tabel nie zastępuje tego rozróżnienia. Przejście do REG-KRY-T01-02 / CMP-KRY-T01-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T01-02 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T01-02-B01 ↔ Z1-T01-02-F01 | Rozpoznanie znaczenia rezultatu pracy. → Proces/rezultat i wymagane/wykonane oceniane w kontrastach.; rdzeniem jest specification i requirements specification | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-02-B01 ↔ Z1-T01-02-D01 | Rozpoznanie znaczenia rezultatu pracy. → Dwa równoległe artefakty wymuszają rozróżnienie przedmiotu.; rdzeniem jest specification i requirements specification | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-02-F01 ↔ Z1-T01-02-D01 | Proces/rezultat i wymagane/wykonane oceniane w kontrastach. → Dwa równoległe artefakty wymuszają rozróżnienie przedmiotu.; rdzeniem jest specification i requirements specification | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 3. Stakeholder a user — KRY-T01-03

**Cel i czynność:** Wskazuje osobę lub organizację oraz wpływ na wymagania lub oddziaływanie systemu. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T01-03 — objaśnienie [N]

Stakeholder to osoba lub organizacja wpływająca na wymagania systemu albo podlegająca wpływowi systemu. Alternatywa „albo” jest istotna: ktoś może nie mieć prawa decyzji, a mimo to być interesariuszem przez skutki działania systemu. User korzysta z funkcjonalności systemu. Użytkownik jest interesariuszem, lecz zbiór interesariuszy obejmuje również inne role.

Nabywca, zamawiający, operator czy organizacja regulująca mogą mieć istotne wymagania bez codziennej obsługi interfejsu. Jedna osoba może występować w kilku rolach. Nazwanie organizacji interesariuszem nie oznacza, że jej każda osoba jest automatycznie właściwym reprezentantem. T01 uczy definicji; pełna identyfikacja reprezentantów i stakeholder management należą do T24. W zadaniach wystarczy rozpoznać podaną przesłankę wpływu lub oddziaływania, bez znajomości rzeczywistych kompetencji prawnych wymyślonej instytucji.

**PL/EN i status:** interesariusz — stakeholder: oficjalna para s.14; użytkownik — user, s.32.

**Warunki i źródło CL-T01-03:** C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Interesariusz s.14 i Użytkownik s.32 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T01-03 — porównanie [N]

Oś: relacja do systemu. Użytkownik korzysta z funkcjonalności; interesariusz wpływa na wymagania lub odczuwa skutki. Kierownik klikający grafik spełnia oba warunki, pracownik objęty grafikiem może spełniać tylko drugi.

**EX-KRY-T01-03 — przykład:** Organizacja audytująca otrzymuje wyniki systemu i ustala kryteria raportowania, lecz nie loguje się do aplikacji. Może być interesariuszem bez bycia użytkownikiem.

**CE-KRY-T01-03 — kontrprzykład:** Uogólnienie „tylko zalogowani użytkownicy są interesariuszami” obala grupa pracowników, których grafik ustala system używany wyłącznie przez kierownika.

### RP-T01-03 — retrieval [Q/R]

**[Q] Podaj definicję stakeholder i powód, dla którego nie jest to synonim user.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T01-03-rubryka-1 | Wskazuje osobę lub organizację oraz wpływ na wymagania lub oddziaływanie systemu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T01-03-rubryka-2 | User korzysta z funkcjonalności; nie każdy stakeholder musi jej używać. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T01-03 — korekta i kontrola [N]

Sprawdź dwa niezależne wejścia do definicji: wpływ na wymagania i bycie dotkniętym działaniem systemu. Nie wymagaj obu jednocześnie. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T01-03-B01 / r1 — B / P

Redakcja [R]: primary KRY-T01-03 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-03; Dwie alternatywne przesłanki definicyjne.. Użycie: practice, do review.

**[Q] Które DWIE informacje samodzielnie wystarczają do uznania osoby lub organizacji za stakeholder w znaczeniu RE?**

Wybierz dokładnie 2 odpowiedzi. Maksymalnie 2 pkt.

| Opcja | Treść |
| --- | --- |
| a | Pracuje w tej samej miejscowości, bez jakiegokolwiek związku z systemem. |
| b | Wpływa na wymagania rozpatrywanego systemu. |
| c | System wpływa na jej sytuację. |
| d | Ma konto w dowolnym, niezwiązanym systemie. |

**[R] Klucz: b, c.** Przy n≤2 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-03-B01-a | nie wybierać | Wspólna miejscowość nie jest wpływem ani oddziaływaniem → nie wybrać. |
| RAT-Z1-T01-03-B01-b | wybrać | Wpływ na wymagania spełnia jedną stronę definicji → wybrać. |
| RAT-Z1-T01-03-B01-c | wybrać | Oddziaływanie systemu spełnia drugą stronę → wybrać. |
| RAT-Z1-T01-03-B01-d | nie wybierać | Brak związku z analizowanym systemem → informacja nie wystarcza → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-03 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Interesariusz s.14 i Użytkownik s.32. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź dwa niezależne wejścia do definicji: wpływ na wymagania i bycie dotkniętym działaniem systemu. Nie wymagaj obu jednocześnie. Przejście do REG-KRY-T01-03 / CMP-KRY-T01-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-03-F01 / r1 — F / A

Redakcja [R]: primary KRY-T01-03 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-03; Definicję przeniesiono na osobę dotkniętą wynikiem bez użycia aplikacji.. Użycie: practice, do review.

**[Q] System przydziela miejsca parkingowe pracownikom. Obsługuje go administrator. Pracownik objęty przydziałem nie korzysta z systemu. Która etykieta jest uzasadniona dla tego pracownika?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Stakeholder, ponieważ wynik systemu na niego wpływa. |
| b | Na pewno user, ponieważ każdy stakeholder jest userem. |
| c | Nie jest stakeholder, bo nie ma konta. |
| d | Wyłącznie element oprogramowania. |

**[R] Klucz: a.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-03-F01-a | wybrać | Przydział dotyczy pracownika → jest dotknięty systemem → wybrać. |
| RAT-Z1-T01-03-F01-b | nie wybierać | Nie korzysta z funkcjonalności → odwrócono relację user–stakeholder → nie wybrać. |
| RAT-Z1-T01-03-F01-c | nie wybierać | Konto nie jest warunkiem definicji → nie wybrać. |
| RAT-Z1-T01-03-F01-d | nie wybierać | Pracownik jest osobą → nie jest komponentem kodu → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-03 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Interesariusz s.14 i Użytkownik s.32. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź dwa niezależne wejścia do definicji: wpływ na wymagania i bycie dotkniętym działaniem systemu. Nie wymagaj obu jednocześnie. Przejście do REG-KRY-T01-03 / CMP-KRY-T01-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-03-D01 / r1 — D / K

Redakcja [R]: primary KRY-T01-03 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-03; Kontrola kwantyfikatorów i zakresu definicji.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Oceń relacje pojęć.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Interesariuszem może być organizacja. |
| 2 | Interesariusz musi zarazem wpływać na wymagania i korzystać z funkcjonalności. |
| 3 | Osoba może pełnić kilka ról interesariusza. |

**[R] Klucz: Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-03-D01-1 | Prawda | Definicja obejmuje organizacje, nie tylko osoby → Prawda. |
| RAT-Z1-T01-03-D01-2 | Fałsz | Są to inne warunki; definicja używa wpływu lub oddziaływania, bez obowiązku użycia → Fałsz. |
| RAT-Z1-T01-03-D01-3 | Prawda | Role nie muszą wykluczać się wzajemnie → Prawda; także C-S02/C-S03 §2.2 zasada 2 s.15. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-03 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Interesariusz s.14 i Użytkownik s.32. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź dwa niezależne wejścia do definicji: wpływ na wymagania i bycie dotkniętym działaniem systemu. Nie wymagaj obu jednocześnie. Przejście do REG-KRY-T01-03 / CMP-KRY-T01-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T01-03 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T01-03-B01 ↔ Z1-T01-03-F01 | Dwie alternatywne przesłanki definicyjne. → Definicję przeniesiono na osobę dotkniętą wynikiem bez użycia aplikacji.; rdzeniem jest stakeholder a user | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-03-B01 ↔ Z1-T01-03-D01 | Dwie alternatywne przesłanki definicyjne. → Kontrola kwantyfikatorów i zakresu definicji.; rdzeniem jest stakeholder a user | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-03-F01 ↔ Z1-T01-03-D01 | Definicję przeniesiono na osobę dotkniętą wynikiem bez użycia aplikacji. → Kontrola kwantyfikatorów i zakresu definicji.; rdzeniem jest stakeholder a user | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 4. System w szerokim znaczeniu inżynierskim — KRY-T01-04

**Cel i czynność:** Rozpoznaje wyodrębnioną całość współdziałających elementów realizującą cel. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T01-04 — objaśnienie [N]

W znaczeniu inżynierskim system jest spójną, dającą się wyodrębnić całością elementów współdziałających w określonym celu. W CPRE używa się tego słowa szeroko: obejmuje produkty, usługi, urządzenia, procedury i ich składniki lub zestawienia. System nie jest synonimem aplikacji. W zależności od przedmiotu analizy całością może być samo oprogramowanie albo szersza usługa z ludźmi, urządzeniami i zasadami organizacyjnymi.

Komponent może być rozpatrywany jako system, gdy sam staje się analizowaną całością. Nie oznacza to dowolnego przesuwania granicy w trakcie rozwiązania zadania: przyjęta perspektywa musi być jawna. Znajomość definicji L1 nie zastępuje samodzielnego wyznaczania granic L3 z T23. W T01 rozpoznajemy szerokie znaczenie i możliwość hierarchii; nie tworzymy modelu kontekstu.

**PL/EN i status:** system — system, oficjalna para s.29; komponent — component, s.16. Używany sens inżynierski, nie ogólny „system porządkowania”.

**Warunki i źródło CL-T01-04:** C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 System s.29 i Komponent s.16 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T01-04 — porównanie [N]

Oś: zakres analizowanej całości. System aplikacji obejmuje jej elementy; system całej usługi może obejmować również urządzenia i ludzi. To inne przedmioty analizy, a nie sprzeczne definicje.

**EX-KRY-T01-04 — przykład:** Usługa odbioru zamówień może obejmować aplikację, skaner i pracowników wydających paczki. Wskazany cel i współdziałanie pozwalają rozpatrywać ją jako system.

**CE-KRY-T01-04 — kontrprzykład:** Uogólnienie „bez kodu nie ma systemu” obala zorganizowana procedura ręcznego wydawania sprzętu z określonym celem i współpracującymi elementami.

### RP-T01-04 — retrieval [Q/R]

**[Q] Czy system w CPRE musi być aplikacją? Wskaż znaczenie inżynierskie i przykład szerszy niż software.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T01-04-rubryka-1 | Rozpoznaje wyodrębnioną całość współdziałających elementów realizującą cel. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T01-04-rubryka-2 | Dopuszcza usługę/urządzenie/procedurę lub całość socjotechniczną; nie ogranicza pojęcia do aplikacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T01-04 — korekta i kontrola [N]

Nazwij cel i analizowaną całość. Oprogramowanie jest jednym możliwym składnikiem, nie warunkiem definicji systemu. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T01-04-B01 / r1 — B / A

Redakcja [R]: primary KRY-T01-04 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-04; Rozpoznanie definicji i granic pojęcia.. Użycie: practice, do review.

**[Q] Które stwierdzenie jest zgodne ze znaczeniem system w CPRE?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | System może obejmować oprogramowanie, ludzi i elementy organizacyjne. |
| b | System to zawsze wyłącznie kod aplikacji. |
| c | System nigdy nie zawiera innych systemów. |
| d | Każdy przypadkowy zbiór przedmiotów jest systemem niezależnie od celu i współdziałania. |

**[R] Klucz: a.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-04-B01-a | wybrać | Szerokie znaczenie obejmuje takie całości → wybrać. |
| RAT-Z1-T01-04-B01-b | nie wybierać | Bezpodstawne zawężenie pomija inne rodzaje całości → nie wybrać. |
| RAT-Z1-T01-04-B01-c | nie wybierać | Definicja dopuszcza podsystemy → nie wybrać. |
| RAT-Z1-T01-04-B01-d | nie wybierać | W sensie inżynierskim potrzebne są spójność i wspólny cel → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-04 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 System s.29 i Komponent s.16. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Nazwij cel i analizowaną całość. Oprogramowanie jest jednym możliwym składnikiem, nie warunkiem definicji systemu. Przejście do REG-KRY-T01-04 / CMP-KRY-T01-04 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-04-F01 / r1 — F / K

Redakcja [R]: primary KRY-T01-04 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-04; Zamiast definicji wprost sprawdzono hierarchię i zakres.. Użycie: practice, do review.

**[Q] Oceń twierdzenia o analizowanym module i usłudze.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Komponent rozpatrywany w izolacji może być traktowany jako system. |
| 2 | Usługa z urządzeniami i procedurami nie może być przedmiotem RE. |
| 3 | Przyjęta perspektywa analizy powinna być rozpoznawalna. |

**[R] Klucz: Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-04-F01-1 | Prawda | Zmiana przedmiotu analizy pozwala rozpatrywać komponent jako całość → Prawda. |
| RAT-Z1-T01-04-F01-2 | Fałsz | Syllabus obejmuje usługi i procedury → Fałsz. |
| RAT-Z1-T01-04-F01-3 | Prawda | Bez określenia analizowanej całości termin system byłby niejednoznaczny → Prawda; interpretacja warunku użycia definicji. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-04 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 System s.29 i Komponent s.16. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Nazwij cel i analizowaną całość. Oprogramowanie jest jednym możliwym składnikiem, nie warunkiem definicji systemu. Przejście do REG-KRY-T01-04 / CMP-KRY-T01-04 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-04-D01 / r1 — D / O

Redakcja [R]: primary KRY-T01-04 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-04; Rozpoznanie dopuszczalności nazwy w mieszanej całości.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Za system uznano usługę archiwizacji obejmującą ludzi, szafy i rejestr elektroniczny. Czy samo istnienie elementów nieinformatycznych unieważnia tę nazwę? Nazwij warunek definicyjny.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T01-04-D01-rubryka-1 | Nie; system w RE może zawierać składniki nieinformatyczne. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T01-04-D01-rubryka-2 | Rozstrzygają spójna wyodrębniona całość, współdziałanie elementów i cel archiwizacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie, że wyłącznie aplikacje są systemami. Odpowiedź graniczna/równoważna: Krótka odpowiedź z poprawnym warunkiem wystarcza; nie trzeba projektować granic.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-04 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 System s.29 i Komponent s.16. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Nazwij cel i analizowaną całość. Oprogramowanie jest jednym możliwym składnikiem, nie warunkiem definicji systemu. Przejście do REG-KRY-T01-04 / CMP-KRY-T01-04 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T01-04 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T01-04-B01 ↔ Z1-T01-04-F01 | Rozpoznanie definicji i granic pojęcia. → Zamiast definicji wprost sprawdzono hierarchię i zakres.; rdzeniem jest system w szerokim znaczeniu inżynierskim | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-04-B01 ↔ Z1-T01-04-D01 | Rozpoznanie definicji i granic pojęcia. → Rozpoznanie dopuszczalności nazwy w mieszanej całości.; rdzeniem jest system w szerokim znaczeniu inżynierskim | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-04-F01 ↔ Z1-T01-04-D01 | Zamiast definicji wprost sprawdzono hierarchię i zakres. → Rozpoznanie dopuszczalności nazwy w mieszanej całości.; rdzeniem jest system w szerokim znaczeniu inżynierskim | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 5. Cel i charakter Requirements Engineering — KRY-T01-05

**Cel i czynność:** Nazywa systematyczne i zdyscyplinowane specyfikowanie i zarządzanie wymaganiami. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T01-05 — objaśnienie [N]

Requirements Engineering (RE, inżynieria wymagań, IW) oznacza systematyczne i zdyscyplinowane podejście do specyfikowania i zarządzania wymaganiami. Jego celem jest zrozumienie oczekiwań i potrzeb interesariuszy oraz ograniczenie ryzyka dostarczenia systemu, który ich nie spełnia. Akcent na cel chroni przed traktowaniem produkcji dokumentów jako samodzielnej miary powodzenia.

RE obejmuje pracę z wymaganiami podczas tworzenia i rozwijania systemu; nie kończy się z definicji po pierwszym wywiadzie. Requirements Engineer współpracuje z interesariuszami przy pozyskiwaniu, dokumentowaniu, walidacji i zarządzaniu. Szczegóły zadań, roli i wiedzy rozwija T05. Znajomość definicji nie dowodzi umiejętności wykonania zawodowego, podobnie jak samo posiadanie certyfikatu lub stanowiska nie jest wynikiem zadania w tym materiale.

**PL/EN i status:** inżynieria wymagań — Requirements Engineering; IW i RE jako kontrolowane skróty. Inżynier wymagań — Requirements Engineer, C-S06 s.14.

**Warunki i źródło CL-T01-05:** C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Inżynieria wymagań i Inżynier wymagań s.14 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T01-05 — porównanie [N]

Oś: działanie versus cel. Dokumentowanie jest czynnością; ograniczenie ryzyka niespełnienia potrzeb jest celem. Uporządkowane dokumenty mogą wspierać cel, lecz nie zastępują go.

**EX-KRY-T01-05 — przykład:** Analityk uzgadnia, co oznacza poprawne zamknięcie zgłoszenia, utrwala to i sprawdza z użytkownikami. Dokument jest częścią pracy ukierunkowanej na potrzebę.

**CE-KRY-T01-05 — kontrprzykład:** Uogólnienie „im więcej stron, tym lepsze RE” obala duża specyfikacja opisująca niewłaściwą potrzebę. Objętość nie zapewnia realizacji celu RE.

### RP-T01-05 — retrieval [Q/R]

**[Q] Co oznacza RE i jaki ma cel? Odróżnij ten cel od produkowania dokumentacji.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T01-05-rubryka-1 | Nazywa systematyczne i zdyscyplinowane specyfikowanie i zarządzanie wymaganiami. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T01-05-rubryka-2 | Wskazuje rozumienie potrzeb oraz zmniejszenie ryzyka dostarczenia systemu, który ich nie spełnia. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T01-05 — korekta i kontrola [N]

Powiąż czynności RE z potrzebami interesariuszy. Dokument i narzędzie są środkami; sama ich obecność nie poświadcza właściwego wyniku. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T01-05-B01 / r1 — B / A

Redakcja [R]: primary KRY-T01-05 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-05; Cel RE wprost.. Użycie: practice, do review.

**[Q] Który opis najtrafniej oddaje cel RE?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Zmaksymalizować liczbę stron bez względu na potrzeby. |
| b | Zastąpić wszystkie decyzje projektowe jednym narzędziem. |
| c | Zagwarantować brak jakichkolwiek przyszłych zmian. |
| d | Zrozumieć potrzeby i zmniejszyć ryzyko dostarczenia systemu, który ich nie spełnia. |

**[R] Klucz: d.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-05-B01-a | nie wybierać | Objętość nie jest celem definicyjnym → nie wybrać. |
| RAT-Z1-T01-05-B01-b | nie wybierać | Narzędzie nie zastępuje pracy z potrzebami → nie wybrać. |
| RAT-Z1-T01-05-B01-c | nie wybierać | RE ogranicza ryzyko; nie gwarantuje niezmienności → nie wybrać. |
| RAT-Z1-T01-05-B01-d | wybrać | Opis wskazuje cel definicyjny → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-05 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Inżynieria wymagań i Inżynier wymagań s.14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Powiąż czynności RE z potrzebami interesariuszy. Dokument i narzędzie są środkami; sama ich obecność nie poświadcza właściwego wyniku. Przejście do REG-KRY-T01-05 / CMP-KRY-T01-05 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-05-F01 / r1 — F / P

Redakcja [R]: primary KRY-T01-05 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-05; Kontrast definicji z nieuprawnionymi ograniczeniami.. Użycie: practice, do review.

**[Q] Które DWIE cechy należą do definicyjnego opisu RE?**

Wybierz dokładnie 2 odpowiedzi. Maksymalnie 2 pkt.

| Opcja | Treść |
| --- | --- |
| a | Obowiązek użycia jednego konkretnego programu. |
| b | Zakaz uzgadniania wymagań po rozpoczęciu projektu. |
| c | Systematyczne podejście do specyfikowania wymagań. |
| d | Zarządzanie wymaganiami z uwzględnieniem potrzeb interesariuszy. |

**[R] Klucz: c, d.** Przy n≤2 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T01-05-F01-a | nie wybierać | Definicja nie wyznacza narzędzia → nie wybrać. |
| RAT-Z1-T01-05-F01-b | nie wybierać | Takiego zakazu nie ma; pozostawałby sprzeczny z zarządzaniem ewolucją → nie wybrać. |
| RAT-Z1-T01-05-F01-c | wybrać | Specyfikowanie w sposób systematyczny należy do definicji → wybrać. |
| RAT-Z1-T01-05-F01-d | wybrać | Zarządzanie i cel potrzeb należą do definicji → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-05 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Inżynieria wymagań i Inżynier wymagań s.14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Powiąż czynności RE z potrzebami interesariuszy. Dokument i narzędzie są środkami; sama ich obecność nie poświadcza właściwego wyniku. Przejście do REG-KRY-T01-05 / CMP-KRY-T01-05 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T01-05-D01 / r1 — D / O

Redakcja [R]: primary KRY-T01-05 → EO1.1.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T01-05; Rozpoznanie niepełnej definicji w opisie zawodowym.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Ktoś opisuje RE jako „pisanie wszystkiego, co klient powie, bez sprawdzania znaczenia”. Jakich dwóch elementów definicji brakuje?**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T01-05-D01-rubryka-1 | Brakuje systematycznego i zdyscyplinowanego specyfikowania oraz zarządzania; samo przepisywanie nie opisuje całości. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T01-05-D01-rubryka-2 | Brakuje celu rozumienia potrzeb i ograniczania ryzyka ich niespełnienia; trzeba sprawdzać sens, a nie tylko utrwalać słowa. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie bezrefleksyjnego przepisywania za pełną definicję RE. Odpowiedź graniczna/równoważna: Dopuszczalne wskazanie pracy nad znaczeniem i ryzykiem bez odtwarzania formuły słowo w słowo.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T01-05 oraz C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Inżynieria wymagań i Inżynier wymagań s.14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Powiąż czynności RE z potrzebami interesariuszy. Dokument i narzędzie są środkami; sama ich obecność nie poświadcza właściwego wyniku. Przejście do REG-KRY-T01-05 / CMP-KRY-T01-05 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T01-05 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T01-05-B01 ↔ Z1-T01-05-F01 | Cel RE wprost. → Kontrast definicji z nieuprawnionymi ograniczeniami.; rdzeniem jest cel i charakter requirements engineering | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-05-B01 ↔ Z1-T01-05-D01 | Cel RE wprost. → Rozpoznanie niepełnej definicji w opisie zawodowym.; rdzeniem jest cel i charakter requirements engineering | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T01-05-F01 ↔ Z1-T01-05-D01 | Kontrast definicji z nieuprawnionymi ograniczeniami. → Rozpoznanie niepełnej definicji w opisie zawodowym.; rdzeniem jest cel i charakter requirements engineering | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## Reuse, zależności i granice integracji

Nie przeniesiono itemów C do tego tematu. Wspólne pojęcia i zasady B/C02 nie stają się nowymi tożsamościami; nowe kryteria mają przestrzeń Txx. Zależności wymienione w karcie to propozycje redakcyjne, nie obowiązkowa kolejność lekcji.


## Konkretne relacje, ekspozycja i powrót

Każdy koniec poniżej ma r1; źródła mają wersje rejestru na końcu. Każda instancja ma status „kontrola autorska 2.11.2026, odrębne review pending”. Relacje R02/R06 są interpretacją mapowania autora, R05/R08–R21 decyzją dydaktyczną uzasadnioną wskazaną regułą i czynnością; R15 wskazuje źródłową podstawę. Nie są automatycznie potwierdzone skutecznością.

| ID r1 | Typ | Końce i kierunek | Warunek / sens / funkcja / proweniencja |
| --- | --- | --- | --- |
| REL-T01-01-02 | R02 | KRY-T01-01 → EO1.1.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T01-01-05-REG | R05 | REG-KRY-T01-01 → KRY-T01-01 | Materiał REG wspiera konkretną czynność KRY-T01-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-01-05-CMP | R05 | CMP-KRY-T01-01 → KRY-T01-01 | Materiał CMP wspiera konkretną czynność KRY-T01-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-01-05-EX | R05 | EX-KRY-T01-01 → KRY-T01-01 | Materiał EX wspiera konkretną czynność KRY-T01-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-01-05-CE | R05 | CE-KRY-T01-01 → KRY-T01-01 | Materiał CE wspiera konkretną czynność KRY-T01-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-01-05-REM | R05 | REM-KRY-T01-01 → KRY-T01-01 | Materiał REM wspiera konkretną czynność KRY-T01-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-01-10 | R10 | REG-KRY-T01-01 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T01-01-11 | R11 | CMP-KRY-T01-01 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T01-01-12 | R12 | EX-KRY-T01-01 → REG-KRY-T01-01 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T01-01-13 | R13 | CE-KRY-T01-01 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T01-01-15 | R15 | CL-T01-01 / REG-KRY-T01-01 → C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 hasło Wymaganie s.33 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T01-01-18 | R18 | REM-KRY-T01-01 → KRY-T01-01 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T01-01-RP06 | R06 | RP-T01-01 → KRY-T01-01 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T01-01-B01-06 | R06 | Z1-T01-01-B01 → KRY-T01-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-01-B01-20 | R20 | Z1-T01-01-B01 → FAM-T01-01 | Zapamiętywalny rdzeń to rozróżnienie trzy sensy requirement; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-01-B01-1-08 | R08 | Z1-T01-01-B01/1 → RAT-Z1-T01-01-B01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-B01-1-09 | R09 | RAT-Z1-T01-01-B01-1 → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-B01-2-08 | R08 | Z1-T01-01-B01/2 → RAT-Z1-T01-01-B01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-B01-2-09 | R09 | RAT-Z1-T01-01-B01-2 → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-B01-3-08 | R08 | Z1-T01-01-B01/3 → RAT-Z1-T01-01-B01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-B01-3-09 | R09 | RAT-Z1-T01-01-B01-3 → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-F01-06 | R06 | Z1-T01-01-F01 → KRY-T01-01 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-01-F01-20 | R20 | Z1-T01-01-F01 → FAM-T01-01 | Zapamiętywalny rdzeń to rozróżnienie trzy sensy requirement; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-01-F01-19 | R19 | Z1-T01-01-F01 → REM-KRY-T01-01 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T01-01-F01-rubryka-1-08 | R08 | Z1-T01-01-F01/rubryka-1 → RAT-Z1-T01-01-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-F01-rubryka-1-09 | R09 | RAT-Z1-T01-01-F01-rubryka-1 → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-F01-rubryka-2-08 | R08 | Z1-T01-01-F01/rubryka-2 → RAT-Z1-T01-01-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-F01-rubryka-2-09 | R09 | RAT-Z1-T01-01-F01-rubryka-2 → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-D01-06 | R06 | Z1-T01-01-D01 → KRY-T01-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-01-D01-20 | R20 | Z1-T01-01-D01 → FAM-T01-01 | Zapamiętywalny rdzeń to rozróżnienie trzy sensy requirement; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-01-D01-a-08 | R08 | Z1-T01-01-D01/a → RAT-Z1-T01-01-D01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-D01-a-09 | R09 | RAT-Z1-T01-01-D01-a → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-D01-b-08 | R08 | Z1-T01-01-D01/b → RAT-Z1-T01-01-D01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-D01-b-09 | R09 | RAT-Z1-T01-01-D01-b → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-D01-c-08 | R08 | Z1-T01-01-D01/c → RAT-Z1-T01-01-D01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-D01-c-09 | R09 | RAT-Z1-T01-01-D01-c → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-Z1-T01-01-D01-d-08 | R08 | Z1-T01-01-D01/d → RAT-Z1-T01-01-D01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-01-D01-d-09 | R09 | RAT-Z1-T01-01-D01-d → REG-KRY-T01-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-01. |
| REL-T01-02-02 | R02 | KRY-T01-02 → EO1.1.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T01-02-05-REG | R05 | REG-KRY-T01-02 → KRY-T01-02 | Materiał REG wspiera konkretną czynność KRY-T01-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-02-05-CMP | R05 | CMP-KRY-T01-02 → KRY-T01-02 | Materiał CMP wspiera konkretną czynność KRY-T01-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-02-05-EX | R05 | EX-KRY-T01-02 → KRY-T01-02 | Materiał EX wspiera konkretną czynność KRY-T01-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-02-05-CE | R05 | CE-KRY-T01-02 → KRY-T01-02 | Materiał CE wspiera konkretną czynność KRY-T01-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-02-05-REM | R05 | REM-KRY-T01-02 → KRY-T01-02 | Materiał REM wspiera konkretną czynność KRY-T01-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-02-10 | R10 | REG-KRY-T01-02 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T01-02-11 | R11 | CMP-KRY-T01-02 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T01-02-12 | R12 | EX-KRY-T01-02 → REG-KRY-T01-02 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T01-02-13 | R13 | CE-KRY-T01-02 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T01-02-15 | R15 | CL-T01-02 / REG-KRY-T01-02 → C-S06 2.2.0 hasła Specyfikacja i Specyfikacja wymagań s.27; C-S02/C-S03 3.3.0 EU1 s.11 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T01-02-18 | R18 | REM-KRY-T01-02 → KRY-T01-02 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T01-02-RP06 | R06 | RP-T01-02 → KRY-T01-02 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T01-02-B01-06 | R06 | Z1-T01-02-B01 → KRY-T01-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-02-B01-20 | R20 | Z1-T01-02-B01 → FAM-T01-02 | Zapamiętywalny rdzeń to rozróżnienie specification i requirements specification; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-02-B01-a-08 | R08 | Z1-T01-02-B01/a → RAT-Z1-T01-02-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-B01-a-09 | R09 | RAT-Z1-T01-02-B01-a → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-B01-b-08 | R08 | Z1-T01-02-B01/b → RAT-Z1-T01-02-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-B01-b-09 | R09 | RAT-Z1-T01-02-B01-b → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-B01-c-08 | R08 | Z1-T01-02-B01/c → RAT-Z1-T01-02-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-B01-c-09 | R09 | RAT-Z1-T01-02-B01-c → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-B01-d-08 | R08 | Z1-T01-02-B01/d → RAT-Z1-T01-02-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-B01-d-09 | R09 | RAT-Z1-T01-02-B01-d → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-F01-06 | R06 | Z1-T01-02-F01 → KRY-T01-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-02-F01-20 | R20 | Z1-T01-02-F01 → FAM-T01-02 | Zapamiętywalny rdzeń to rozróżnienie specification i requirements specification; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-02-F01-19 | R19 | Z1-T01-02-F01 → REM-KRY-T01-02 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T01-02-F01-1-08 | R08 | Z1-T01-02-F01/1 → RAT-Z1-T01-02-F01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-F01-1-09 | R09 | RAT-Z1-T01-02-F01-1 → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-F01-2-08 | R08 | Z1-T01-02-F01/2 → RAT-Z1-T01-02-F01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-F01-2-09 | R09 | RAT-Z1-T01-02-F01-2 → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-F01-3-08 | R08 | Z1-T01-02-F01/3 → RAT-Z1-T01-02-F01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-F01-3-09 | R09 | RAT-Z1-T01-02-F01-3 → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-D01-06 | R06 | Z1-T01-02-D01 → KRY-T01-02 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-02-D01-20 | R20 | Z1-T01-02-D01 → FAM-T01-02 | Zapamiętywalny rdzeń to rozróżnienie specification i requirements specification; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-02-D01-rubryka-1-08 | R08 | Z1-T01-02-D01/rubryka-1 → RAT-Z1-T01-02-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-D01-rubryka-1-09 | R09 | RAT-Z1-T01-02-D01-rubryka-1 → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-Z1-T01-02-D01-rubryka-2-08 | R08 | Z1-T01-02-D01/rubryka-2 → RAT-Z1-T01-02-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-02-D01-rubryka-2-09 | R09 | RAT-Z1-T01-02-D01-rubryka-2 → REG-KRY-T01-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-02. |
| REL-T01-03-02 | R02 | KRY-T01-03 → EO1.1.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T01-03-05-REG | R05 | REG-KRY-T01-03 → KRY-T01-03 | Materiał REG wspiera konkretną czynność KRY-T01-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-03-05-CMP | R05 | CMP-KRY-T01-03 → KRY-T01-03 | Materiał CMP wspiera konkretną czynność KRY-T01-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-03-05-EX | R05 | EX-KRY-T01-03 → KRY-T01-03 | Materiał EX wspiera konkretną czynność KRY-T01-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-03-05-CE | R05 | CE-KRY-T01-03 → KRY-T01-03 | Materiał CE wspiera konkretną czynność KRY-T01-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-03-05-REM | R05 | REM-KRY-T01-03 → KRY-T01-03 | Materiał REM wspiera konkretną czynność KRY-T01-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-03-10 | R10 | REG-KRY-T01-03 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T01-03-11 | R11 | CMP-KRY-T01-03 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T01-03-12 | R12 | EX-KRY-T01-03 → REG-KRY-T01-03 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T01-03-13 | R13 | CE-KRY-T01-03 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T01-03-15 | R15 | CL-T01-03 / REG-KRY-T01-03 → C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Interesariusz s.14 i Użytkownik s.32 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T01-03-18 | R18 | REM-KRY-T01-03 → KRY-T01-03 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T01-03-RP06 | R06 | RP-T01-03 → KRY-T01-03 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T01-03-B01-06 | R06 | Z1-T01-03-B01 → KRY-T01-03 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-03-B01-20 | R20 | Z1-T01-03-B01 → FAM-T01-03 | Zapamiętywalny rdzeń to rozróżnienie stakeholder a user; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-03-B01-a-08 | R08 | Z1-T01-03-B01/a → RAT-Z1-T01-03-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-B01-a-09 | R09 | RAT-Z1-T01-03-B01-a → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-B01-b-08 | R08 | Z1-T01-03-B01/b → RAT-Z1-T01-03-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-B01-b-09 | R09 | RAT-Z1-T01-03-B01-b → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-B01-c-08 | R08 | Z1-T01-03-B01/c → RAT-Z1-T01-03-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-B01-c-09 | R09 | RAT-Z1-T01-03-B01-c → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-B01-d-08 | R08 | Z1-T01-03-B01/d → RAT-Z1-T01-03-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-B01-d-09 | R09 | RAT-Z1-T01-03-B01-d → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-F01-06 | R06 | Z1-T01-03-F01 → KRY-T01-03 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-03-F01-20 | R20 | Z1-T01-03-F01 → FAM-T01-03 | Zapamiętywalny rdzeń to rozróżnienie stakeholder a user; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-03-F01-19 | R19 | Z1-T01-03-F01 → REM-KRY-T01-03 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T01-03-F01-a-08 | R08 | Z1-T01-03-F01/a → RAT-Z1-T01-03-F01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-F01-a-09 | R09 | RAT-Z1-T01-03-F01-a → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-F01-b-08 | R08 | Z1-T01-03-F01/b → RAT-Z1-T01-03-F01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-F01-b-09 | R09 | RAT-Z1-T01-03-F01-b → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-F01-c-08 | R08 | Z1-T01-03-F01/c → RAT-Z1-T01-03-F01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-F01-c-09 | R09 | RAT-Z1-T01-03-F01-c → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-F01-d-08 | R08 | Z1-T01-03-F01/d → RAT-Z1-T01-03-F01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-F01-d-09 | R09 | RAT-Z1-T01-03-F01-d → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-D01-06 | R06 | Z1-T01-03-D01 → KRY-T01-03 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-03-D01-20 | R20 | Z1-T01-03-D01 → FAM-T01-03 | Zapamiętywalny rdzeń to rozróżnienie stakeholder a user; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-03-D01-1-08 | R08 | Z1-T01-03-D01/1 → RAT-Z1-T01-03-D01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-D01-1-09 | R09 | RAT-Z1-T01-03-D01-1 → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-D01-2-08 | R08 | Z1-T01-03-D01/2 → RAT-Z1-T01-03-D01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-D01-2-09 | R09 | RAT-Z1-T01-03-D01-2 → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-Z1-T01-03-D01-3-08 | R08 | Z1-T01-03-D01/3 → RAT-Z1-T01-03-D01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-03-D01-3-09 | R09 | RAT-Z1-T01-03-D01-3 → REG-KRY-T01-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-03. |
| REL-T01-04-02 | R02 | KRY-T01-04 → EO1.1.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T01-04-05-REG | R05 | REG-KRY-T01-04 → KRY-T01-04 | Materiał REG wspiera konkretną czynność KRY-T01-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-04-05-CMP | R05 | CMP-KRY-T01-04 → KRY-T01-04 | Materiał CMP wspiera konkretną czynność KRY-T01-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-04-05-EX | R05 | EX-KRY-T01-04 → KRY-T01-04 | Materiał EX wspiera konkretną czynność KRY-T01-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-04-05-CE | R05 | CE-KRY-T01-04 → KRY-T01-04 | Materiał CE wspiera konkretną czynność KRY-T01-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-04-05-REM | R05 | REM-KRY-T01-04 → KRY-T01-04 | Materiał REM wspiera konkretną czynność KRY-T01-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-04-10 | R10 | REG-KRY-T01-04 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T01-04-11 | R11 | CMP-KRY-T01-04 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T01-04-12 | R12 | EX-KRY-T01-04 → REG-KRY-T01-04 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T01-04-13 | R13 | CE-KRY-T01-04 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T01-04-15 | R15 | CL-T01-04 / REG-KRY-T01-04 → C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 System s.29 i Komponent s.16 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T01-04-18 | R18 | REM-KRY-T01-04 → KRY-T01-04 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T01-04-RP06 | R06 | RP-T01-04 → KRY-T01-04 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T01-04-B01-06 | R06 | Z1-T01-04-B01 → KRY-T01-04 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-04-B01-20 | R20 | Z1-T01-04-B01 → FAM-T01-04 | Zapamiętywalny rdzeń to rozróżnienie system w szerokim znaczeniu inżynierskim; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-04-B01-a-08 | R08 | Z1-T01-04-B01/a → RAT-Z1-T01-04-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-B01-a-09 | R09 | RAT-Z1-T01-04-B01-a → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-B01-b-08 | R08 | Z1-T01-04-B01/b → RAT-Z1-T01-04-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-B01-b-09 | R09 | RAT-Z1-T01-04-B01-b → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-B01-c-08 | R08 | Z1-T01-04-B01/c → RAT-Z1-T01-04-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-B01-c-09 | R09 | RAT-Z1-T01-04-B01-c → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-B01-d-08 | R08 | Z1-T01-04-B01/d → RAT-Z1-T01-04-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-B01-d-09 | R09 | RAT-Z1-T01-04-B01-d → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-F01-06 | R06 | Z1-T01-04-F01 → KRY-T01-04 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-04-F01-20 | R20 | Z1-T01-04-F01 → FAM-T01-04 | Zapamiętywalny rdzeń to rozróżnienie system w szerokim znaczeniu inżynierskim; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-04-F01-19 | R19 | Z1-T01-04-F01 → REM-KRY-T01-04 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T01-04-F01-1-08 | R08 | Z1-T01-04-F01/1 → RAT-Z1-T01-04-F01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-F01-1-09 | R09 | RAT-Z1-T01-04-F01-1 → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-F01-2-08 | R08 | Z1-T01-04-F01/2 → RAT-Z1-T01-04-F01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-F01-2-09 | R09 | RAT-Z1-T01-04-F01-2 → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-F01-3-08 | R08 | Z1-T01-04-F01/3 → RAT-Z1-T01-04-F01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-F01-3-09 | R09 | RAT-Z1-T01-04-F01-3 → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-D01-06 | R06 | Z1-T01-04-D01 → KRY-T01-04 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-04-D01-20 | R20 | Z1-T01-04-D01 → FAM-T01-04 | Zapamiętywalny rdzeń to rozróżnienie system w szerokim znaczeniu inżynierskim; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-04-D01-rubryka-1-08 | R08 | Z1-T01-04-D01/rubryka-1 → RAT-Z1-T01-04-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-D01-rubryka-1-09 | R09 | RAT-Z1-T01-04-D01-rubryka-1 → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-Z1-T01-04-D01-rubryka-2-08 | R08 | Z1-T01-04-D01/rubryka-2 → RAT-Z1-T01-04-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-04-D01-rubryka-2-09 | R09 | RAT-Z1-T01-04-D01-rubryka-2 → REG-KRY-T01-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-04. |
| REL-T01-05-02 | R02 | KRY-T01-05 → EO1.1.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T01-05-05-REG | R05 | REG-KRY-T01-05 → KRY-T01-05 | Materiał REG wspiera konkretną czynność KRY-T01-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-05-05-CMP | R05 | CMP-KRY-T01-05 → KRY-T01-05 | Materiał CMP wspiera konkretną czynność KRY-T01-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-05-05-EX | R05 | EX-KRY-T01-05 → KRY-T01-05 | Materiał EX wspiera konkretną czynność KRY-T01-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-05-05-CE | R05 | CE-KRY-T01-05 → KRY-T01-05 | Materiał CE wspiera konkretną czynność KRY-T01-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-05-05-REM | R05 | REM-KRY-T01-05 → KRY-T01-05 | Materiał REM wspiera konkretną czynność KRY-T01-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T01-05-10 | R10 | REG-KRY-T01-05 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T01-05-11 | R11 | CMP-KRY-T01-05 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T01-05-12 | R12 | EX-KRY-T01-05 → REG-KRY-T01-05 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T01-05-13 | R13 | CE-KRY-T01-05 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T01-05-15 | R15 | CL-T01-05 / REG-KRY-T01-05 → C-S02/C-S03 3.3.0 §1.1 s.11; C-S06 2.2.0 Inżynieria wymagań i Inżynier wymagań s.14 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T01-05-18 | R18 | REM-KRY-T01-05 → KRY-T01-05 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T01-05-RP06 | R06 | RP-T01-05 → KRY-T01-05 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T01-05-B01-06 | R06 | Z1-T01-05-B01 → KRY-T01-05 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-05-B01-20 | R20 | Z1-T01-05-B01 → FAM-T01-05 | Zapamiętywalny rdzeń to rozróżnienie cel i charakter requirements engineering; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-05-B01-a-08 | R08 | Z1-T01-05-B01/a → RAT-Z1-T01-05-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-B01-a-09 | R09 | RAT-Z1-T01-05-B01-a → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-B01-b-08 | R08 | Z1-T01-05-B01/b → RAT-Z1-T01-05-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-B01-b-09 | R09 | RAT-Z1-T01-05-B01-b → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-B01-c-08 | R08 | Z1-T01-05-B01/c → RAT-Z1-T01-05-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-B01-c-09 | R09 | RAT-Z1-T01-05-B01-c → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-B01-d-08 | R08 | Z1-T01-05-B01/d → RAT-Z1-T01-05-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-B01-d-09 | R09 | RAT-Z1-T01-05-B01-d → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-F01-06 | R06 | Z1-T01-05-F01 → KRY-T01-05 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-05-F01-20 | R20 | Z1-T01-05-F01 → FAM-T01-05 | Zapamiętywalny rdzeń to rozróżnienie cel i charakter requirements engineering; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-05-F01-19 | R19 | Z1-T01-05-F01 → REM-KRY-T01-05 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T01-05-F01-a-08 | R08 | Z1-T01-05-F01/a → RAT-Z1-T01-05-F01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-F01-a-09 | R09 | RAT-Z1-T01-05-F01-a → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-F01-b-08 | R08 | Z1-T01-05-F01/b → RAT-Z1-T01-05-F01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-F01-b-09 | R09 | RAT-Z1-T01-05-F01-b → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-F01-c-08 | R08 | Z1-T01-05-F01/c → RAT-Z1-T01-05-F01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-F01-c-09 | R09 | RAT-Z1-T01-05-F01-c → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-F01-d-08 | R08 | Z1-T01-05-F01/d → RAT-Z1-T01-05-F01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-F01-d-09 | R09 | RAT-Z1-T01-05-F01-d → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-D01-06 | R06 | Z1-T01-05-D01 → KRY-T01-05 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T01-05-D01-20 | R20 | Z1-T01-05-D01 → FAM-T01-05 | Zapamiętywalny rdzeń to rozróżnienie cel i charakter requirements engineering; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T01-05-D01-rubryka-1-08 | R08 | Z1-T01-05-D01/rubryka-1 → RAT-Z1-T01-05-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-D01-rubryka-1-09 | R09 | RAT-Z1-T01-05-D01-rubryka-1 → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |
| REL-Z1-T01-05-D01-rubryka-2-08 | R08 | Z1-T01-05-D01/rubryka-2 → RAT-Z1-T01-05-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T01-05-D01-rubryka-2-09 | R09 | RAT-Z1-T01-05-D01-rubryka-2 → REG-KRY-T01-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T01-05. |

Nie wymusza się nowego R14. Gdy brak terminu uniemożliwia konkretną czynność, proponowany krótki powrót do definicji można pominąć po wykazaniu znajomości. Nie trzeba ukończyć całego poprzedniego T. R03: oficjalne terminy PL/EN w tabelach/nocie oznaczają wskazany sens; autorskie aliasy jawnie oznaczono. Nie tworzono przekładów zadań EN (brak R22) ani R25 z projektu zadania. Kontekst scenariusza, np. logistyka czy wypożyczenia, ma tylko R07 MENTIONS, bez pomiaru biegłości domenowej.

**R26 — kontrakt instancji przy rzeczywistym odejściu:** Navigation Context wskazuje dokładny ID/r1 źródłowego B/F/D/RP, opcję/wiersz lub część rubryki, oddaną odpowiedź, wynik, stan ujawnienia, miejsce sesji i kotwicę. Powrót odtwarza ten sam stan; FU ma własne wykonanie. Nie ma tutaj fikcyjnego zdarzenia odejścia. Wycofany item pozostaje oznaczoną historią.

| Fragment | Zakres istotnego kontaktu | Ekspozycja / ograniczenie |
| --- | --- | --- |
| REG/CMP/EX/CE/REM-KRY-T01-01 | KRY-T01-01 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T01-02 | KRY-T01-02 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T01-03 | KRY-T01-03 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T01-04 | KRY-T01-04 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T01-05 | KRY-T01-05 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| Z1-T01-01-B01 | KRY-T01-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-01-F01 | KRY-T01-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-01-D01 | KRY-T01-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-02-B01 | KRY-T01-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-02-F01 | KRY-T01-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-02-D01 | KRY-T01-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-03-B01 | KRY-T01-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-03-F01 | KRY-T01-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-03-D01 | KRY-T01-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-04-B01 | KRY-T01-04 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-04-F01 | KRY-T01-04 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-04-D01 | KRY-T01-04 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-05-B01 | KRY-T01-05 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-05-F01 | KRY-T01-05 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T01-05-D01 | KRY-T01-05 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |

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

## Foundational — lokalny odczyt oznaczeń

Glossary PL 2.2.0 s.8 objaśnia, że pogrubione hasła są key terms FL. Sprawdzono niżej nagłówki i fonty PDF (PPMori-Bold). Definicje EN odczytano w wydaniu PL. To lokalny inwentarz Z1; nie audyt wszystkich haseł całego FL i nie dodatkowe oficjalne EO.

| Hasło / strona PDF C-S06 | Status / pokrycie |
| --- | --- |
| Wymaganie / requirement / 33 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Specyfikacja / specification / 27 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Specyfikacja wymagań / requirements specification / 27 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Interesariusz / stakeholder / 14 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| System / 29 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Inżynieria wymagań / RE / 14 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Inżynier wymagań / Requirements Engineer / 14 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Użytkownik / user / 32 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |

Shared understanding jest terminem EU2 w Syllabus; nie znaleziono osobnego hasła o tej nazwie w Glossary PL/EN. Nie dopisano fikcyjnej definicji słownikowej. Verification w Glossary PL s.32 nie jest pogrubione; służy tutaj kontrastowi z validation. System context w PL s.17 nie jest pogrubione, ale jego sens odpowiada kontekstowi RE i jest wymaganym elementem objaśnienia.
