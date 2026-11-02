# T05 — Zadania RE, rola i kompetencje Requirements Engineer — Content v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Karta uruchomienia i granice

| Pole | Wartość |
| --- | --- |
| FLOW_ID | FLOW-Z1-T05-01 |
| Tryb | CREATE |
| EO / poziom | EO1.4.1 L1; EO1.5.1 L1; EO1.6.1 L1 |
| RUN_SCOPE | Cztery główne zadania i tailoring; rola względem stanowiska; sześć obszarów uczenia FL oraz objaśniające soft skills z Handbook. |
| Zależności / bez gatingu | T01; T30–T32 szczegółowo rozwijają proces, T39–T40 narzędzia. Brak obowiązku zawodowego L3 w tym temacie. |
| Poza pomiarem | Sąsiednie EO, zawodowa biegłość i pełny FL; brak L3 w właścicielskim zakresie Z1. |
| Zamierzone użycie | Materiał recenzencki i wsad dla agenta kodu; późniejsze użycia U-* po review |
| Wyniki | T05_IREB_CPRE_Tasks_Role_and_Competencies_Content_v0.1.md; T05_IREB_CPRE_Tasks_Role_and_Competencies_QA_and_Handoff_v0.1.md |
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
| KRY-T05-01 — Zadania RE i tailoring procesu | EO1.4.1 L1 | CL-T05-01; C-S02/C-S03 3.3.0 §1.4 s.12; C-S07 1.3.2 §1.4 s.13–14 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T05-02 — Rola Requirements Engineer a stanowisko | EO1.5.1 L1 | CL-T05-02; C-S02/C-S03 3.3.0 §1.5 s.13; C-S06 2.2.0 Inżynier wymagań s.14; C-S07 1.3.2 §1.5 s.14 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T05-03 — Co inżynier wymagań powinien poznawać | EO1.6.1 L1 | CL-T05-03; C-S02/C-S03 3.3.0 §1.6 s.13; C-S07 1.3.2 §1.6 s.14–15 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |


## 1. Zadania RE i tailoring procesu — KRY-T05-01

**Cel i czynność:** Nazywa elicitation, documentation, validation i management. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T05-01 — objaśnienie [N]

Główne zadania RE to pozyskiwanie, dokumentowanie, walidacja i zarządzanie wymaganiami. Syllabus zalicza analizę wymagań i rozwiązywanie ich konfliktów do pozyskiwania. Narzędzia mogą pomagać w realizacji tych zadań, ale zakup programu nie jest piątym równorzędnym zadaniem tego wykazu i nie zastępuje ich wykonania.

Aby realizować zadania właściwie, trzeba dopasować proces RE do sytuacji. Tailoring nie oznacza rezygnacji z dyscypliny. Określa dobór sposobu pracy, praktyk i artefaktów do problemu, otoczenia i procesu wytwarzania. Znajomość czterech nazw nie ustala obowiązkowej sekwencji jednorazowego przechodzenia przez etapy. Zadania mogą powracać i współdziałać; szczegóły konfiguracji procesu są właścicielskim zakresem T30–T32.

Na L1 należy rozpoznać zadanie i wiedzieć o potrzebie dostosowania procesu. Nie wymagamy samodzielnego zaprojektowania procesu dla złożonej organizacji ani wyboru jedynej techniki zawsze właściwej.

**PL/EN i status:** pozyskiwanie — elicitation; dokumentowanie — documentation; walidacja — validation; zarządzanie wymaganiami — requirements management; tailoring — projektowo „dostosowanie procesu”.

**Warunki i źródło CL-T05-01:** C-S02/C-S03 3.3.0 §1.4 s.12; C-S07 1.3.2 §1.4 s.13–14 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T05-01 — porównanie [N]

Oś: zadanie versus sposób wykonania. Walidacja jest zadaniem; wybrany review to praktyka jego wykonania. Narzędzie przechowujące wymagania wspiera pracę, lecz samo nie oznacza walidacji.

**EX-KRY-T05-01 — przykład:** Rozmowa o oczekiwaniach wspiera pozyskiwanie; zapis uzgodnień dokumentowanie; porównanie z potrzebami walidację; obsługa zmian i powiązań zarządzanie.

**CE-KRY-T05-01 — kontrprzykład:** Uogólnienie „jedna skuteczna procedura jest dobra wszędzie” obala zastosowanie ciężkiego trybu zatwierdzania do małego eksperymentu bez rozważenia jego celu i ryzyka. Wymagana jest refleksja i dopasowanie.

### RP-T05-01 — retrieval [Q/R]

**[Q] Wymień cztery główne zadania RE, miejsce analizy i rozwiązywania konfliktów oraz sens tailoring.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T05-01-rubryka-1 | Nazywa elicitation, documentation, validation i management. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T05-01-rubryka-2 | Analiza i rozwiązywanie konfliktów należą w tym wykazie do elicitation; proces dobiera się do sytuacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T05-01 — korekta i kontrola [N]

Oddziel „co robimy” od „jaką praktyką/narzędziem”. Cztery zadania pozostają; sposób ich realizacji wymaga dopasowania. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T05-01-B01 / r1 — B / K

Redakcja [R]: primary KRY-T05-01 → EO1.4.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-01; Nazwy i potrzeba dostosowania.. Użycie: practice, do review.

**[Q] Oceń twierdzenia o wykazie zadań RE.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Walidacja i dokumentowanie należą do głównych zadań RE. |
| 2 | Analizę wymagań i rozwiązywanie konfliktów zaliczono tu do pozyskiwania. |
| 3 | Proces RE należy dostosować do sytuacji. |
| 4 | Zakup narzędzia zastępuje pozyskiwanie wymagań. |

**[R] Klucz: Prawda, Prawda, Prawda, Fałsz.** Każdy poprawny wiersz daje 1/2; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T05-01-B01-1 | Prawda | Obie nazwy należą do §1.4 → Prawda. |
| RAT-Z1-T05-01-B01-2 | Prawda | Taki zakres elicitation przyjmuje syllabus → Prawda. |
| RAT-Z1-T05-01-B01-3 | Prawda | §1.4 wymaga tailoring → Prawda. |
| RAT-Z1-T05-01-B01-4 | Fałsz | Wsparcie narzędziowe nie zastępuje zadania → Fałsz. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-01 oraz C-S02/C-S03 3.3.0 §1.4 s.12; C-S07 1.3.2 §1.4 s.13–14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oddziel „co robimy” od „jaką praktyką/narzędziem”. Cztery zadania pozostają; sposób ich realizacji wymaga dopasowania. Przejście do REG-KRY-T05-01 / CMP-KRY-T05-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T05-01-F01 / r1 — F / P

Redakcja [R]: primary KRY-T05-01 → EO1.4.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-01; Rozpoznanie zadań w prostych opisach, bez projektowania procesu.. Użycie: practice, do review.

**[Q] Które DWIE czynności odpowiadają walidacji lub zarządzaniu wymaganiami?**

Wybierz dokładnie 2 odpowiedzi. Maksymalnie 2 pkt.

| Opcja | Treść |
| --- | --- |
| a | Pozyskanie nowej potrzeby w wywiadzie, bez jej sprawdzania lub zarządzania istniejącym zapisem. |
| b | Utrwalenie treści rozmowy jako nowego opisu, bez oceny adekwatności. |
| c | Sprawdzenie, czy zapisane oczekiwanie odpowiada potrzebie interesariusza. |
| d | Utrzymanie wersji i obsługa zmiany istniejącego wymagania. |

**[R] Klucz: c, d.** Przy n≤2 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T05-01-F01-a | nie wybierać | To elicitation, nie jedna z dwóch czynności wyznaczonych pytaniem → nie wybrać. |
| RAT-Z1-T05-01-F01-b | nie wybierać | To dokumentowanie; sam zapis nie jest walidacją ani obsługą istniejącego wymagania → nie wybrać. |
| RAT-Z1-T05-01-F01-c | wybrać | To potwierdzenie adekwatności wobec potrzeby → walidacja → wybrać. |
| RAT-Z1-T05-01-F01-d | wybrać | To zarządzanie istniejącymi wymaganiami → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-01 oraz C-S02/C-S03 3.3.0 §1.4 s.12; C-S07 1.3.2 §1.4 s.13–14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oddziel „co robimy” od „jaką praktyką/narzędziem”. Cztery zadania pozostają; sposób ich realizacji wymaga dopasowania. Przejście do REG-KRY-T05-01 / CMP-KRY-T05-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T05-01-D01 / r1 — D / O

Redakcja [R]: primary KRY-T05-01 → EO1.4.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-01; Rozpoznanie różnicy wykaz–proces.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Zespół utrzymuje, że cztery zadania RE można wykonać wyłącznie raz w jednej niezmiennej kolejności. Przypomnij wykaz zadań i źródłową zasadę dotyczącą procesu.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T05-01-D01-rubryka-1 | Pozyskiwanie, dokumentowanie, walidacja, zarządzanie to wykaz zadań, nie gwarantowany jednorazowy harmonogram. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T05-01-D01-rubryka-2 | Odpowiedni proces trzeba dostosować; nie ma podstaw do uniwersalnej niezmiennej sekwencji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Potwierdzenie uniwersalnego procesu wyłącznie na podstawie kolejności listy. Odpowiedź graniczna/równoważna: Nie trzeba proponować własnego harmonogramu.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-01 oraz C-S02/C-S03 3.3.0 §1.4 s.12; C-S07 1.3.2 §1.4 s.13–14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oddziel „co robimy” od „jaką praktyką/narzędziem”. Cztery zadania pozostają; sposób ich realizacji wymaga dopasowania. Przejście do REG-KRY-T05-01 / CMP-KRY-T05-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T05-01 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T05-01-B01 ↔ Z1-T05-01-F01 | Nazwy i potrzeba dostosowania. → Rozpoznanie zadań w prostych opisach, bez projektowania procesu.; rdzeniem jest zadania re i tailoring procesu | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T05-01-B01 ↔ Z1-T05-01-D01 | Nazwy i potrzeba dostosowania. → Rozpoznanie różnicy wykaz–proces.; rdzeniem jest zadania re i tailoring procesu | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T05-01-F01 ↔ Z1-T05-01-D01 | Rozpoznanie zadań w prostych opisach, bez projektowania procesu. → Rozpoznanie różnicy wykaz–proces.; rdzeniem jest zadania re i tailoring procesu | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 2. Rola Requirements Engineer a stanowisko — KRY-T05-02

**Cel i czynność:** Wskazuje zadania RE, wiedzę RE oraz łączenie problemu z potencjalnymi rozwiązaniami. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T05-02 — objaśnienie [N]

Requirements Engineer zwykle oznacza rolę, a nie nazwę stanowiska. W tę rolę wchodzą osoby pozyskujące, dokumentujące, walidujące lub zarządzające wymaganiami w ramach swoich obowiązków, mające pogłębioną wiedzę RE i zdolność połączenia problemu z potencjalnymi rozwiązaniami. W praktyce mogą ją pełnić analitycy, specjaliści aplikacyjni, Product Owners, systems engineers oraz programiści.

Nie należy wyprowadzać pełnienia roli wyłącznie z etykiety stanowiska. Podobnie brak tytułu „Requirements Engineer” w strukturze organizacyjnej nie dowodzi braku pracy RE. W zadaniu rozpoznajemy charakterystykę roli; nie przeprowadzamy audytu kompetencji rzeczywistej osoby. Jedna osoba może łączyć role, a obowiązki RE mogą być rozdzielone między kilka osób. Zwrot „i/lub” w zakresie zadań nie oznacza obowiązku osobistego wykonania przez każdego inżyniera wszystkich czterech czynności w każdym projekcie.

**PL/EN i status:** inżynier wymagań — Requirements Engineer; rola — role; stanowisko — job title: ostatnie zestawienie jest objaśnieniem §1.5.

**Warunki i źródło CL-T05-02:** C-S02/C-S03 3.3.0 §1.5 s.13; C-S06 2.2.0 Inżynier wymagań s.14; C-S07 1.3.2 §1.5 s.14 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T05-02 — porównanie [N]

Oś: formalna etykieta organizacyjna versus wykonywana rola. „Analityk” jest nazwą stanowiska; faktyczne czynności i wiedza mogą wskazywać rolę RE. Etykieta nie jest samodzielnym dowodem kompetencji.

**EX-KRY-T05-02 — przykład:** Product Owner prowadzący uzgodnienia potrzeb i walidację może działać w roli RE, choć jego etat nie ma takiej nazwy.

**CE-KRY-T05-02 — kontrprzykład:** Uogólnienie „programista nie może pełnić roli RE” obala programista uczestniczący kompetentnie w pozyskiwaniu i uzgadnianiu wymagań. Sama nazwa stanowiska tego nie wyklucza.

### RP-T05-02 — retrieval [Q/R]

**[Q] Scharakteryzuj rolę Requirements Engineer i podaj dwa stanowiska, które mogą ją pełnić.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T05-02-rubryka-1 | Wskazuje zadania RE, wiedzę RE oraz łączenie problemu z potencjalnymi rozwiązaniami. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T05-02-rubryka-2 | Dopuszcza np. analityka, PO, systems engineer lub programistę; rola nie wymaga konkretnej nazwy stanowiska. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T05-02 — korekta i kontrola [N]

Sprawdź obowiązki i charakterystykę wiedzy, nie samą etykietę etatu. Nie oceniaj pełnej kompetencji zawodowej z jednego quizu. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T05-02-B01 / r1 — B / A

Redakcja [R]: primary KRY-T05-02 → EO1.5.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-02; Charakterystyka roli bez oceny osoby.. Użycie: practice, do review.

**[Q] Które stwierdzenie o roli Requirements Engineer jest poprawne?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Zawsze sprowadza się do przepisywania wypowiedzi bez rozumienia problemu. |
| b | Nie wymaga znajomości RE. |
| c | Może być pełniona przez Product Ownera lub programistę. |
| d | Musi być osobnym stanowiskiem w każdej organizacji. |

**[R] Klucz: c.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T05-02-B01-a | nie wybierać | Rola obejmuje wiedzę i most problem–rozwiązania → nie wybrać. |
| RAT-Z1-T05-02-B01-b | nie wybierać | Pogłębiona wiedza należy do charakterystyki → nie wybrać. |
| RAT-Z1-T05-02-B01-c | wybrać | §1.5 wymienia różne funkcje zawodowe → wybrać. |
| RAT-Z1-T05-02-B01-d | nie wybierać | Syllabus mówi zwykle o roli, nie obowiązkowym etacie → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-02 oraz C-S02/C-S03 3.3.0 §1.5 s.13; C-S06 2.2.0 Inżynier wymagań s.14; C-S07 1.3.2 §1.5 s.14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź obowiązki i charakterystykę wiedzy, nie samą etykietę etatu. Nie oceniaj pełnej kompetencji zawodowej z jednego quizu. Przejście do REG-KRY-T05-02 / CMP-KRY-T05-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T05-02-F01 / r1 — F / K

Redakcja [R]: primary KRY-T05-02 → EO1.5.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-02; Kontrast stanowiska i charakterystyki.. Użycie: practice, do review.

**[Q] Oceń twierdzenia o roli RE.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Brak etatu o nazwie Requirements Engineer nie dowodzi braku tej roli. |
| 2 | Sama nazwa stanowiska wystarcza do poświadczenia zawodowej kompetencji. |
| 3 | Łączenie problemu z potencjalnymi rozwiązaniami należy do charakterystyki roli. |

**[R] Klucz: Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T05-02-F01-1 | Prawda | Rolę mogą pełnić osoby o innych stanowiskach → Prawda. |
| RAT-Z1-T05-02-F01-2 | Fałsz | Etykieta nie potwierdza wiedzy i działania → Fałsz; granica interpretacji charakterystyki. |
| RAT-Z1-T05-02-F01-3 | Prawda | To wprost element §1.5 → Prawda. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-02 oraz C-S02/C-S03 3.3.0 §1.5 s.13; C-S06 2.2.0 Inżynier wymagań s.14; C-S07 1.3.2 §1.5 s.14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź obowiązki i charakterystykę wiedzy, nie samą etykietę etatu. Nie oceniaj pełnej kompetencji zawodowej z jednego quizu. Przejście do REG-KRY-T05-02 / CMP-KRY-T05-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T05-02-D01 / r1 — D / O

Redakcja [R]: primary KRY-T05-02 → EO1.5.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-02; Charakterystykę rozpoznaje się przy podziale obowiązków.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Analityk i deweloper dzielą pracę: pierwszy pozyskuje i dokumentuje potrzeby, drugi wraz z interesariuszami waliduje ich znaczenie. Obaj mają wiedzę RE i rozumieją problem. Czy brak osobnego etatu wyklucza rolę RE? Odnieś odpowiedź do charakterystyki.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T05-02-D01-rubryka-1 | Nie; rola RE nie jest uzależniona od osobnego tytułu stanowiska. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T05-02-D01-rubryka-2 | Podane zadania, wiedza i związek problem–rozwiązanie odpowiadają charakterystyce; nie stanowią całościowego audytu kompetencji obu osób. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Wykluczenie roli wyłącznie z powodu nazwy etatu. Odpowiedź graniczna/równoważna: Wystarczy wskazać możliwość pełnienia roli, bez certyfikowania kompetencji.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-02 oraz C-S02/C-S03 3.3.0 §1.5 s.13; C-S06 2.2.0 Inżynier wymagań s.14; C-S07 1.3.2 §1.5 s.14. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź obowiązki i charakterystykę wiedzy, nie samą etykietę etatu. Nie oceniaj pełnej kompetencji zawodowej z jednego quizu. Przejście do REG-KRY-T05-02 / CMP-KRY-T05-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T05-02 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T05-02-B01 ↔ Z1-T05-02-F01 | Charakterystyka roli bez oceny osoby. → Kontrast stanowiska i charakterystyki.; rdzeniem jest rola requirements engineer a stanowisko | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T05-02-B01 ↔ Z1-T05-02-D01 | Charakterystyka roli bez oceny osoby. → Charakterystykę rozpoznaje się przy podziale obowiązków.; rdzeniem jest rola requirements engineer a stanowisko | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T05-02-F01 ↔ Z1-T05-02-D01 | Kontrast stanowiska i charakterystyki. → Charakterystykę rozpoznaje się przy podziale obowiązków.; rdzeniem jest rola requirements engineer a stanowisko | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 3. Co inżynier wymagań powinien poznawać — KRY-T05-03

**Cel i czynność:** Wymienia zasady, dokumentowanie, opracowywanie, procesy, zarządzanie i narzędzia. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T05-03 — objaśnienie [N]

Podstawowy zakres uczenia obejmuje zasady RE, dokumentowanie w różnych postaciach, praktyki opracowywania wymagań, odpowiednie procesy i struktury pracy, zarządzanie wymaganiami oraz wsparcie narzędziowe. To sześć obszarów odpowiadających EU2–EU7; EU1 daje wprowadzenie. Lista nie nakazuje nauki jednego konkretnego produktu ani sprowadzania RE do diagramów.

Handbook dodatkowo wskazuje umiejętności interpersonalne: słuchanie, moderowanie, negocjowanie, mediację, empatię i otwartość na potrzeby oraz pomysły innych. W tym temacie są objaśniającym rozwinięciem roli, jawnie opartym na Handbook. Nie tworzymy z nich nowych oficjalnych EO ani testu praktycznego poziomu L3. Nauka pojęć o narzędziach to inna rzecz niż sama obsługa jednego interfejsu; podobnie znajomość celu negocjacji nie poświadcza zawodowej biegłości negocjatora.

Wymagany wynik L1 to rozpoznanie obszarów i ich sensu. Szczegółowe wykonania i techniki pozostają w odpowiednich tematach późniejszych zbiorów.

**PL/EN i status:** zasady — principles; artefakty — work products; opracowywanie — elaboration; proces i struktura pracy — process and working structure; zarządzanie — management; wsparcie narzędziowe — tool support: nazwy obszarów sylabusa.

**Warunki i źródło CL-T05-03:** C-S02/C-S03 3.3.0 §1.6 s.13; C-S07 1.3.2 §1.6 s.14–15 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T05-03 — porównanie [N]

Oś: obszar kompetencji versus konkretny nośnik/praktyka. Tool support jest obszarem; kliknięcia w programie są jedną umiejętnością operacyjną. Moderowanie spotkania wspiera współpracę, ale nie zastępuje dokumentowania czy walidacji.

**EX-KRY-T05-03 — przykład:** Kandydat uczy się dobierać reprezentację wymagania, rozumieć walidację i zarządzać zmianą; znajomość jednej notacji nie wyczerpuje zakresu.

**CE-KRY-T05-03 — kontrprzykład:** Uogólnienie „kurs narzędzia wyczerpuje RE” obala sytuacja, gdy użytkownik programu umie tworzyć rekordy, lecz nie rozróżnia potrzeby i narzuconego rozwiązania.

### RP-T05-03 — retrieval [Q/R]

**[Q] Wymień sześć obszarów nauki wskazanych w §1.6. Osobno nazwij dwa przykłady soft skills z Handbook.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T05-03-rubryka-1 | Wymienia zasady, dokumentowanie, opracowywanie, procesy, zarządzanie i narzędzia. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T05-03-rubryka-2 | Soft skills np. słuchanie i moderacja są rozwinięciem Handbook, a nie nowymi EO; rozpoznanie nie certyfikuje wykonania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T05-03 — korekta i kontrola [N]

Sprawdź komplet sześciu obszarów, zamiast redukować RE do narzędzia, pisania dokumentów albo diagramów. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T05-03-B01 / r1 — B / P

Redakcja [R]: primary KRY-T05-03 → EO1.6.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-03; Rozpoznanie części katalogu; pełna lista odtwarzana w F/RP.. Użycie: practice, do review.

**[Q] Które TRZY pozycje są obszarami nauki wskazanymi w §1.6?**

Wybierz dokładnie 3 odpowiedzi. Maksymalnie 3 pkt.

| Opcja | Treść |
| --- | --- |
| a | Zarządzanie istniejącymi wymaganiami. |
| b | Obowiązkowe opanowanie jednego konkretnego komercyjnego edytora. |
| c | Zastąpienie wszystkich uzgodnień samą pamięcią autora. |
| d | Dokumentowanie wymagań w różnych formach. |
| e | Procesy i struktury pracy RE. |

**[R] Klucz: a, d, e.** Przy n≤3 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T05-03-B01-a | wybrać | To wskazany obszar EU6 → wybrać. |
| RAT-Z1-T05-03-B01-b | nie wybierać | Syllabus nie narzuca konkretnego produktu → nie wybrać. |
| RAT-Z1-T05-03-B01-c | nie wybierać | To nie jest obszar wskazanego zestawu umiejętności → nie wybrać. |
| RAT-Z1-T05-03-B01-d | wybrać | To wskazany obszar EU3 → wybrać. |
| RAT-Z1-T05-03-B01-e | wybrać | To wskazany obszar EU5 → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-03 oraz C-S02/C-S03 3.3.0 §1.6 s.13; C-S07 1.3.2 §1.6 s.14–15. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź komplet sześciu obszarów, zamiast redukować RE do narzędzia, pisania dokumentów albo diagramów. Przejście do REG-KRY-T05-03 / CMP-KRY-T05-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T05-03-F01 / r1 — F / O

Redakcja [R]: primary KRY-T05-03 → EO1.6.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-03; Swobodne przywołanie pełnej listy zamiast wyboru trzech znanych pozycji.. Użycie: practice, do review.

**[Q] Przywołaj pełną listę sześciu obszarów nauki z §1.6 i połącz każdy z krótkim sensem. Nie wybieraj konkretnych narzędzi.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T05-03-F01-rubryka-1 | Zasady RE; dokumentowanie w różnych formach; opracowywanie różnymi praktykami. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T05-03-F01-rubryka-2 | Definiowanie i stosowanie odpowiednich procesów; zarządzanie wymaganiami; wsparcie narzędziowe. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie listy samą obsługą jednego programu. Odpowiedź graniczna/równoważna: Dopuszczalne nazwy EU2–EU7 z poprawnym sensem; pominięty obszar to częściowe odtworzenie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-03 oraz C-S02/C-S03 3.3.0 §1.6 s.13; C-S07 1.3.2 §1.6 s.14–15. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź komplet sześciu obszarów, zamiast redukować RE do narzędzia, pisania dokumentów albo diagramów. Przejście do REG-KRY-T05-03 / CMP-KRY-T05-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T05-03-D01 / r1 — D / O

Redakcja [R]: primary KRY-T05-03 → EO1.6.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T05-03; Pełna szóstka sprawdzana w nowym opisie niepełnego kursu, zamiast rozpoznania trzech tez.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Kurs ma obejmować wyłącznie obsługę edytora i rysowanie diagramów. Przywołaj sześć obszarów §1.6, pokaż braki tej propozycji, a osobno wskaż dwa soft skills rozwijane w Handbook.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T05-03-D01-rubryka-1 | Zasady, dokumentowanie i opracowywanie wymagań to trzy obszary; sam diagram nie pokrywa wszystkich. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T05-03-D01-rubryka-2 | Proces i struktura pracy, zarządzanie oraz wsparcie narzędziowe uzupełniają pełną szóstkę; obsługa jednego edytora nie wyczerpuje żadnego pełnego zakresu RE. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T05-03-D01-rubryka-3 | Np. słuchanie i moderowanie są interpersonalnym rozwinięciem Handbook; nie nowymi EO ani dowodem zawodowej biegłości. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie dwóch wskazanych umiejętności za kompletny zakres nauki RE. Odpowiedź graniczna/równoważna: Nazwy EU2–EU7 z poprawnym sensem wystarczą.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T05-03 oraz C-S02/C-S03 3.3.0 §1.6 s.13; C-S07 1.3.2 §1.6 s.14–15. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź komplet sześciu obszarów, zamiast redukować RE do narzędzia, pisania dokumentów albo diagramów. Przejście do REG-KRY-T05-03 / CMP-KRY-T05-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T05-03 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T05-03-B01 ↔ Z1-T05-03-F01 | Rozpoznanie części katalogu; pełna lista odtwarzana w F/RP. → Swobodne przywołanie pełnej listy zamiast wyboru trzech znanych pozycji.; rdzeniem jest co inżynier wymagań powinien poznawać | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T05-03-B01 ↔ Z1-T05-03-D01 | Rozpoznanie części katalogu; pełna lista odtwarzana w F/RP. → Pełna szóstka sprawdzana w nowym opisie niepełnego kursu, zamiast rozpoznania trzech tez.; rdzeniem jest co inżynier wymagań powinien poznawać | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T05-03-F01 ↔ Z1-T05-03-D01 | Swobodne przywołanie pełnej listy zamiast wyboru trzech znanych pozycji. → Pełna szóstka sprawdzana w nowym opisie niepełnego kursu, zamiast rozpoznania trzech tez.; rdzeniem jest co inżynier wymagań powinien poznawać | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## Reuse, zależności i granice integracji

Nie przeniesiono itemów C do tego tematu. Wspólne pojęcia i zasady B/C02 nie stają się nowymi tożsamościami; nowe kryteria mają przestrzeń Txx. Zależności wymienione w karcie to propozycje redakcyjne, nie obowiązkowa kolejność lekcji.


## Konkretne relacje, ekspozycja i powrót

Każdy koniec poniżej ma r1; źródła mają wersje rejestru na końcu. Każda instancja ma status „kontrola autorska 2.11.2026, odrębne review pending”. Relacje R02/R06 są interpretacją mapowania autora, R05/R08–R21 decyzją dydaktyczną uzasadnioną wskazaną regułą i czynnością; R15 wskazuje źródłową podstawę. Nie są automatycznie potwierdzone skutecznością.

| ID r1 | Typ | Końce i kierunek | Warunek / sens / funkcja / proweniencja |
| --- | --- | --- | --- |
| REL-T05-01-02 | R02 | KRY-T05-01 → EO1.4.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T05-01-05-REG | R05 | REG-KRY-T05-01 → KRY-T05-01 | Materiał REG wspiera konkretną czynność KRY-T05-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-01-05-CMP | R05 | CMP-KRY-T05-01 → KRY-T05-01 | Materiał CMP wspiera konkretną czynność KRY-T05-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-01-05-EX | R05 | EX-KRY-T05-01 → KRY-T05-01 | Materiał EX wspiera konkretną czynność KRY-T05-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-01-05-CE | R05 | CE-KRY-T05-01 → KRY-T05-01 | Materiał CE wspiera konkretną czynność KRY-T05-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-01-05-REM | R05 | REM-KRY-T05-01 → KRY-T05-01 | Materiał REM wspiera konkretną czynność KRY-T05-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-01-10 | R10 | REG-KRY-T05-01 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T05-01-11 | R11 | CMP-KRY-T05-01 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T05-01-12 | R12 | EX-KRY-T05-01 → REG-KRY-T05-01 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T05-01-13 | R13 | CE-KRY-T05-01 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T05-01-15 | R15 | CL-T05-01 / REG-KRY-T05-01 → C-S02/C-S03 3.3.0 §1.4 s.12; C-S07 1.3.2 §1.4 s.13–14 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T05-01-18 | R18 | REM-KRY-T05-01 → KRY-T05-01 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T05-01-RP06 | R06 | RP-T05-01 → KRY-T05-01 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T05-01-B01-06 | R06 | Z1-T05-01-B01 → KRY-T05-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-01-B01-20 | R20 | Z1-T05-01-B01 → FAM-T05-01 | Zapamiętywalny rdzeń to rozróżnienie zadania re i tailoring procesu; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-01-B01-1-08 | R08 | Z1-T05-01-B01/1 → RAT-Z1-T05-01-B01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-B01-1-09 | R09 | RAT-Z1-T05-01-B01-1 → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-B01-2-08 | R08 | Z1-T05-01-B01/2 → RAT-Z1-T05-01-B01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-B01-2-09 | R09 | RAT-Z1-T05-01-B01-2 → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-B01-3-08 | R08 | Z1-T05-01-B01/3 → RAT-Z1-T05-01-B01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-B01-3-09 | R09 | RAT-Z1-T05-01-B01-3 → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-B01-4-08 | R08 | Z1-T05-01-B01/4 → RAT-Z1-T05-01-B01-4 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-B01-4-09 | R09 | RAT-Z1-T05-01-B01-4 → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-F01-06 | R06 | Z1-T05-01-F01 → KRY-T05-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-01-F01-20 | R20 | Z1-T05-01-F01 → FAM-T05-01 | Zapamiętywalny rdzeń to rozróżnienie zadania re i tailoring procesu; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-01-F01-19 | R19 | Z1-T05-01-F01 → REM-KRY-T05-01 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T05-01-F01-a-08 | R08 | Z1-T05-01-F01/a → RAT-Z1-T05-01-F01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-F01-a-09 | R09 | RAT-Z1-T05-01-F01-a → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-F01-b-08 | R08 | Z1-T05-01-F01/b → RAT-Z1-T05-01-F01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-F01-b-09 | R09 | RAT-Z1-T05-01-F01-b → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-F01-c-08 | R08 | Z1-T05-01-F01/c → RAT-Z1-T05-01-F01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-F01-c-09 | R09 | RAT-Z1-T05-01-F01-c → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-F01-d-08 | R08 | Z1-T05-01-F01/d → RAT-Z1-T05-01-F01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-F01-d-09 | R09 | RAT-Z1-T05-01-F01-d → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-D01-06 | R06 | Z1-T05-01-D01 → KRY-T05-01 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-01-D01-20 | R20 | Z1-T05-01-D01 → FAM-T05-01 | Zapamiętywalny rdzeń to rozróżnienie zadania re i tailoring procesu; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-01-D01-rubryka-1-08 | R08 | Z1-T05-01-D01/rubryka-1 → RAT-Z1-T05-01-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-D01-rubryka-1-09 | R09 | RAT-Z1-T05-01-D01-rubryka-1 → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-Z1-T05-01-D01-rubryka-2-08 | R08 | Z1-T05-01-D01/rubryka-2 → RAT-Z1-T05-01-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-01-D01-rubryka-2-09 | R09 | RAT-Z1-T05-01-D01-rubryka-2 → REG-KRY-T05-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-01. |
| REL-T05-02-02 | R02 | KRY-T05-02 → EO1.5.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T05-02-05-REG | R05 | REG-KRY-T05-02 → KRY-T05-02 | Materiał REG wspiera konkretną czynność KRY-T05-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-02-05-CMP | R05 | CMP-KRY-T05-02 → KRY-T05-02 | Materiał CMP wspiera konkretną czynność KRY-T05-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-02-05-EX | R05 | EX-KRY-T05-02 → KRY-T05-02 | Materiał EX wspiera konkretną czynność KRY-T05-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-02-05-CE | R05 | CE-KRY-T05-02 → KRY-T05-02 | Materiał CE wspiera konkretną czynność KRY-T05-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-02-05-REM | R05 | REM-KRY-T05-02 → KRY-T05-02 | Materiał REM wspiera konkretną czynność KRY-T05-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-02-10 | R10 | REG-KRY-T05-02 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T05-02-11 | R11 | CMP-KRY-T05-02 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T05-02-12 | R12 | EX-KRY-T05-02 → REG-KRY-T05-02 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T05-02-13 | R13 | CE-KRY-T05-02 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T05-02-15 | R15 | CL-T05-02 / REG-KRY-T05-02 → C-S02/C-S03 3.3.0 §1.5 s.13; C-S06 2.2.0 Inżynier wymagań s.14; C-S07 1.3.2 §1.5 s.14 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T05-02-18 | R18 | REM-KRY-T05-02 → KRY-T05-02 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T05-02-RP06 | R06 | RP-T05-02 → KRY-T05-02 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T05-02-B01-06 | R06 | Z1-T05-02-B01 → KRY-T05-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-02-B01-20 | R20 | Z1-T05-02-B01 → FAM-T05-02 | Zapamiętywalny rdzeń to rozróżnienie rola requirements engineer a stanowisko; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-02-B01-a-08 | R08 | Z1-T05-02-B01/a → RAT-Z1-T05-02-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-B01-a-09 | R09 | RAT-Z1-T05-02-B01-a → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-B01-b-08 | R08 | Z1-T05-02-B01/b → RAT-Z1-T05-02-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-B01-b-09 | R09 | RAT-Z1-T05-02-B01-b → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-B01-c-08 | R08 | Z1-T05-02-B01/c → RAT-Z1-T05-02-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-B01-c-09 | R09 | RAT-Z1-T05-02-B01-c → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-B01-d-08 | R08 | Z1-T05-02-B01/d → RAT-Z1-T05-02-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-B01-d-09 | R09 | RAT-Z1-T05-02-B01-d → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-F01-06 | R06 | Z1-T05-02-F01 → KRY-T05-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-02-F01-20 | R20 | Z1-T05-02-F01 → FAM-T05-02 | Zapamiętywalny rdzeń to rozróżnienie rola requirements engineer a stanowisko; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-02-F01-19 | R19 | Z1-T05-02-F01 → REM-KRY-T05-02 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T05-02-F01-1-08 | R08 | Z1-T05-02-F01/1 → RAT-Z1-T05-02-F01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-F01-1-09 | R09 | RAT-Z1-T05-02-F01-1 → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-F01-2-08 | R08 | Z1-T05-02-F01/2 → RAT-Z1-T05-02-F01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-F01-2-09 | R09 | RAT-Z1-T05-02-F01-2 → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-F01-3-08 | R08 | Z1-T05-02-F01/3 → RAT-Z1-T05-02-F01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-F01-3-09 | R09 | RAT-Z1-T05-02-F01-3 → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-D01-06 | R06 | Z1-T05-02-D01 → KRY-T05-02 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-02-D01-20 | R20 | Z1-T05-02-D01 → FAM-T05-02 | Zapamiętywalny rdzeń to rozróżnienie rola requirements engineer a stanowisko; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-02-D01-rubryka-1-08 | R08 | Z1-T05-02-D01/rubryka-1 → RAT-Z1-T05-02-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-D01-rubryka-1-09 | R09 | RAT-Z1-T05-02-D01-rubryka-1 → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-Z1-T05-02-D01-rubryka-2-08 | R08 | Z1-T05-02-D01/rubryka-2 → RAT-Z1-T05-02-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-02-D01-rubryka-2-09 | R09 | RAT-Z1-T05-02-D01-rubryka-2 → REG-KRY-T05-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-02. |
| REL-T05-03-02 | R02 | KRY-T05-03 → EO1.6.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T05-03-05-REG | R05 | REG-KRY-T05-03 → KRY-T05-03 | Materiał REG wspiera konkretną czynność KRY-T05-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-03-05-CMP | R05 | CMP-KRY-T05-03 → KRY-T05-03 | Materiał CMP wspiera konkretną czynność KRY-T05-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-03-05-EX | R05 | EX-KRY-T05-03 → KRY-T05-03 | Materiał EX wspiera konkretną czynność KRY-T05-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-03-05-CE | R05 | CE-KRY-T05-03 → KRY-T05-03 | Materiał CE wspiera konkretną czynność KRY-T05-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-03-05-REM | R05 | REM-KRY-T05-03 → KRY-T05-03 | Materiał REM wspiera konkretną czynność KRY-T05-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T05-03-10 | R10 | REG-KRY-T05-03 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T05-03-11 | R11 | CMP-KRY-T05-03 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T05-03-12 | R12 | EX-KRY-T05-03 → REG-KRY-T05-03 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T05-03-13 | R13 | CE-KRY-T05-03 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T05-03-15 | R15 | CL-T05-03 / REG-KRY-T05-03 → C-S02/C-S03 3.3.0 §1.6 s.13; C-S07 1.3.2 §1.6 s.14–15 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T05-03-18 | R18 | REM-KRY-T05-03 → KRY-T05-03 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T05-03-RP06 | R06 | RP-T05-03 → KRY-T05-03 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T05-03-B01-06 | R06 | Z1-T05-03-B01 → KRY-T05-03 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-03-B01-20 | R20 | Z1-T05-03-B01 → FAM-T05-03 | Zapamiętywalny rdzeń to rozróżnienie co inżynier wymagań powinien poznawać; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-03-B01-a-08 | R08 | Z1-T05-03-B01/a → RAT-Z1-T05-03-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-B01-a-09 | R09 | RAT-Z1-T05-03-B01-a → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-B01-b-08 | R08 | Z1-T05-03-B01/b → RAT-Z1-T05-03-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-B01-b-09 | R09 | RAT-Z1-T05-03-B01-b → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-B01-c-08 | R08 | Z1-T05-03-B01/c → RAT-Z1-T05-03-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-B01-c-09 | R09 | RAT-Z1-T05-03-B01-c → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-B01-d-08 | R08 | Z1-T05-03-B01/d → RAT-Z1-T05-03-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-B01-d-09 | R09 | RAT-Z1-T05-03-B01-d → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-B01-e-08 | R08 | Z1-T05-03-B01/e → RAT-Z1-T05-03-B01-e | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-B01-e-09 | R09 | RAT-Z1-T05-03-B01-e → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-F01-06 | R06 | Z1-T05-03-F01 → KRY-T05-03 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-03-F01-20 | R20 | Z1-T05-03-F01 → FAM-T05-03 | Zapamiętywalny rdzeń to rozróżnienie co inżynier wymagań powinien poznawać; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-03-F01-19 | R19 | Z1-T05-03-F01 → REM-KRY-T05-03 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T05-03-F01-rubryka-1-08 | R08 | Z1-T05-03-F01/rubryka-1 → RAT-Z1-T05-03-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-F01-rubryka-1-09 | R09 | RAT-Z1-T05-03-F01-rubryka-1 → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-F01-rubryka-2-08 | R08 | Z1-T05-03-F01/rubryka-2 → RAT-Z1-T05-03-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-F01-rubryka-2-09 | R09 | RAT-Z1-T05-03-F01-rubryka-2 → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-D01-06 | R06 | Z1-T05-03-D01 → KRY-T05-03 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T05-03-D01-20 | R20 | Z1-T05-03-D01 → FAM-T05-03 | Zapamiętywalny rdzeń to rozróżnienie co inżynier wymagań powinien poznawać; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T05-03-D01-rubryka-1-08 | R08 | Z1-T05-03-D01/rubryka-1 → RAT-Z1-T05-03-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-D01-rubryka-1-09 | R09 | RAT-Z1-T05-03-D01-rubryka-1 → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-D01-rubryka-2-08 | R08 | Z1-T05-03-D01/rubryka-2 → RAT-Z1-T05-03-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-D01-rubryka-2-09 | R09 | RAT-Z1-T05-03-D01-rubryka-2 → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |
| REL-Z1-T05-03-D01-rubryka-3-08 | R08 | Z1-T05-03-D01/rubryka-3 → RAT-Z1-T05-03-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T05-03-D01-rubryka-3-09 | R09 | RAT-Z1-T05-03-D01-rubryka-3 → REG-KRY-T05-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T05-03. |

Nie wymusza się nowego R14. Gdy brak terminu uniemożliwia konkretną czynność, proponowany krótki powrót do definicji można pominąć po wykazaniu znajomości. Nie trzeba ukończyć całego poprzedniego T. R03: oficjalne terminy PL/EN w tabelach/nocie oznaczają wskazany sens; autorskie aliasy jawnie oznaczono. Nie tworzono przekładów zadań EN (brak R22) ani R25 z projektu zadania. Kontekst scenariusza, np. logistyka czy wypożyczenia, ma tylko R07 MENTIONS, bez pomiaru biegłości domenowej.

**R26 — kontrakt instancji przy rzeczywistym odejściu:** Navigation Context wskazuje dokładny ID/r1 źródłowego B/F/D/RP, opcję/wiersz lub część rubryki, oddaną odpowiedź, wynik, stan ujawnienia, miejsce sesji i kotwicę. Powrót odtwarza ten sam stan; FU ma własne wykonanie. Nie ma tutaj fikcyjnego zdarzenia odejścia. Wycofany item pozostaje oznaczoną historią.

| Fragment | Zakres istotnego kontaktu | Ekspozycja / ograniczenie |
| --- | --- | --- |
| REG/CMP/EX/CE/REM-KRY-T05-01 | KRY-T05-01 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T05-02 | KRY-T05-02 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T05-03 | KRY-T05-03 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| Z1-T05-01-B01 | KRY-T05-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-01-F01 | KRY-T05-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-01-D01 | KRY-T05-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-02-B01 | KRY-T05-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-02-F01 | KRY-T05-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-02-D01 | KRY-T05-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-03-B01 | KRY-T05-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-03-F01 | KRY-T05-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T05-03-D01 | KRY-T05-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |

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
| Requirements Engineer / RE / stakeholder / 14 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Requirements management / 35 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |

Shared understanding jest terminem EU2 w Syllabus; nie znaleziono osobnego hasła o tej nazwie w Glossary PL/EN. Nie dopisano fikcyjnej definicji słownikowej. Verification w Glossary PL s.32 nie jest pogrubione; służy tutaj kontrastowi z validation. System context w PL s.17 nie jest pogrubione, ale jego sens odpowiada kontekstowi RE i jest wymaganym elementem objaśnienia.
