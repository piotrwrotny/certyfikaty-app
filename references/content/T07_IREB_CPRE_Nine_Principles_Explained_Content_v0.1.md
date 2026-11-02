# T07 — Wyjaśnianie dziewięciu zasad RE — Content v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Karta uruchomienia i granice

| Pole | Wartość |
| --- | --- |
| FLOW_ID | FLOW-Z1-T07-01 |
| Tryb | EXTEND istniejącego wkładu C, bez zmiany jego obiektów |
| EO / poziom | EO2.2.2 L2 |
| RUN_SCOPE | Dziewięć jawnych zakresów PR01–PR09 z argumentem, warunkami i konsekwencją. PR04 obejmuje granice/scope, zmiany kontekstu, wymagania świata rzeczywistego i założenia. |
| Zależności / bez gatingu | T06 daje nazwy L1; T03 wartość; T24 interesariusze; T18 glosariusz; T23 granice L3; T28 walidacja; T37 zmiany; T30–T32 proces. Są to odsyłacze, bez automatycznego gatingu. |
| Poza pomiarem | Sąsiednie EO, zawodowa biegłość i pełny FL; brak L3 w właścicielskim zakresie Z1. |
| Zamierzone użycie | Materiał recenzencki i wsad dla agenta kodu; późniejsze użycia U-* po review |
| Wyniki | T07_IREB_CPRE_Nine_Principles_Explained_Content_v0.1.md; T07_IREB_CPRE_Nine_Principles_Explained_QA_and_Handoff_v0.1.md |
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
| KRY-T07-01 — PR01 — Orientacja na wartość | EO2.2.2 L2 | CL-T07-01; C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-02 — PR02 — Interesariusze | EO2.2.2 L2 | CL-T07-02; C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-03 — PR03 — Wspólne zrozumienie | EO2.2.2 L2 | CL-T07-03; C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-04 — PR04 — Kontekst: pełna granica zasady | EO2.2.2 L2 | CL-T07-04; C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-05 — PR05 — Problem–Wymaganie–Rozwiązanie | EO2.2.2 L2 | CL-T07-05; C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-06 — PR06 — Walidacja | EO2.2.2 L2 | CL-T07-06; C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-07 — PR07 — Ewolucja i stabilność | EO2.2.2 L2 | CL-T07-07; C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-08 — PR08 — Innowacja | EO2.2.2 L2 | CL-T07-08; C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T07-09 — PR09 — Systematyczna i zdyscyplinowana praca | EO2.2.2 L2 | CL-T07-09; C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |


## Wprowadzenie do tematu [N]

Każdą zasadę trzeba umieć wyjaśnić: jaki problem pracy RE rozwiązuje, dlaczego jest ważna i co z niej wynika w danych warunkach. Podanie nazwy nie wystarcza do L2. Poniższe PR01–PR09 są lokalnymi zakresami M01 w jednym oficjalnym EO2.2.2. Treść zasad współdziała, ale poprawna odpowiedź o kontekście nie jest obserwacją wszystkich pozostałych zasad. Zadania otwarte wymagają argumentu. Zamknięte oceniają wybór gotowego argumentu, więc ich wynik nie potwierdza samodzielnego stworzenia wyjaśnienia.


## 1. PR01 — Orientacja na wartość — T07/PR01

**Cel i czynność:** Korzyści obejmują spełnienie potrzeb i ograniczenie ryzyka/przeróbek; koszty to pozyskanie, dokumentowanie, walidacja i zarządzanie. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-01 — objaśnienie [N]

Orientacja na wartość traktuje wymagania jako środek do osiągnięcia potrzebnego wyniku. Zapisanie większej liczby wymagań nie jest niezależnym celem. W ujęciu sylabusa wartość wymagania wiąże korzyści z kosztami jego pozyskania, dokumentowania, walidacji i zarządzania. Korzyści dotyczą spełnienia potrzeb interesariuszy oraz ograniczenia ryzyka niepowodzenia i kosztownych przeróbek. Nie należy podmieniać kosztów pracy RE samym kosztem implementacji, jeżeli wyjaśniamy tę źródłową formułę.

Praktyczna konsekwencja to dobór nakładu odpowiedni do znaczenia wymagania i ryzyka pomyłki. Dokładny opis istotnego wyjątku może uchronić przed przeróbką; rozbudowywanie niskiego ryzyka bez użytecznej różnicy może tylko zwiększać koszt. Nie istnieje wynikająca z zasady liczba stron ani jednakowy poziom szczegółowości dla wszystkich oczekiwań. Zmniejszenie kosztu RE do zera nie maksymalizuje wartości automatycznie, bo może usunąć korzyść z rozpoznania potrzeb i kontroli ryzyka.

Korzyści często pojawiają się później niż wydatek na RE. Dlatego widoczny koszt warsztatu i brak natychmiastowego kodu nie wystarczają do stwierdzenia braku wartości. W tym materiale nie liczymy rzeczywistego ROI ani nie obiecujemy uniwersalnych oszczędności. W przykładach trzeba pokazać, jaki mechanizm łączy konkretną pracę RE z jej korzyścią i kosztem.

**PL/EN i status:** orientacja na wartość — value-orientation/value orientation; nazwa z Syllabus. Wartość ekonomiczna w scenariuszu jest interpretacją, nie zmierzonym wynikiem.

**Warunki i źródło CL-T07-01:** C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-01 — porównanie [N]

Oś: nakład versus uzyskana korzyść. Dodatkowy przykład krytycznego wyjątku może ograniczyć błąd; kolejny redundantny opis może tylko zwiększyć koszt. Objętość sama nie rozstrzyga.

**EX-KRY-T07-01 — przykład:** Doprecyzowanie wyjątku rezerwacji zajmuje godzinę, ale może uniknąć zbudowania błędnego procesu. Rozważamy koszt doprecyzowania i korzyść ograniczenia ryzyka.

**CE-KRY-T07-01 — kontrprzykład:** Uogólnienie „więcej dokumentacji zawsze zwiększa wartość” obala opisanie po raz dziesiąty oczywistego, niskiego ryzyka parametru bez poprawy decyzji ani zrozumienia.

### RP-T07-01 — retrieval [Q/R]

**[Q] Wyjaśnij zasadę wartości: jakie koszty i korzyści porównuje, i dlaczego nie zaleca ani maksimum dokumentacji, ani całkowitej rezygnacji z RE?**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-01-rubryka-1 | Korzyści obejmują spełnienie potrzeb i ograniczenie ryzyka/przeróbek; koszty to pozyskanie, dokumentowanie, walidacja i zarządzanie. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-01-rubryka-2 | Wyjaśnia potrzebę proporcji nakładu do korzyści i ryzyka; ilość dokumentacji nie jest celem. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-01 — korekta i kontrola [N]

Nazwij oczekiwaną korzyść oraz koszt pracy nad wymaganiem. Więcej ani mniej RE samo w sobie nie rozstrzyga wartości. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-01-B01 / r1 — B / A

Redakcja [R]: primary KRY-T07-01 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-01; Wybór właściwego argumentu dla nadmiarowego nakładu.. Użycie: practice, do review.

**[Q] Analityk chce rozbudować opis mało ryzykownego parametru o dwadzieścia stron, choć zespół rozumie go jednakowo i dodatkowy opis nie zmieni żadnej decyzji. Który argument najlepiej stosuje zasadę wartości?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | O wartości decyduje wyłącznie koszt zakupu edytora. |
| b | Więcej stron zawsze zwiększa wartość wymagania. |
| c | Warto rozważyć, czy dodatkowy koszt dokumentowania przyniesie korzyść dla potrzeb lub kontroli ryzyka. |
| d | Każde dokumentowanie należy wyeliminować. |

**[R] Klucz: c.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-01-B01-a | nie wybierać | Koszt pracy RE i korzyści są szersze niż nośnik → nie wybrać. |
| RAT-Z1-T07-01-B01-b | nie wybierać | Nie wskazano dodatkowej korzyści; sama objętość nie jest celem → nie wybrać. |
| RAT-Z1-T07-01-B01-c | wybrać | Opis mówi o koszcie bez wykazanej korzyści → trzeba ocenić saldo, nie liczbę stron → wybrać. |
| RAT-Z1-T07-01-B01-d | nie wybierać | Jedna nieopłacalna rozbudowa nie unieważnia korzyści dokumentacji w innych warunkach → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-01 oraz C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Nazwij oczekiwaną korzyść oraz koszt pracy nad wymaganiem. Więcej ani mniej RE samo w sobie nie rozstrzyga wartości. Przejście do REG-KRY-T07-01 / CMP-KRY-T07-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-01-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-01 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-01; Od nadmiaru niskiego ryzyka do uzasadnionego doprecyzowania wyjątku.. Użycie: practice, do review.

**[Q] Dla ryzykownego wyjątku rozliczenia zaplanowano warsztat i walidację, choć opis zwykłego przypadku już istnieje. Wyjaśnij, kiedy dodatkowy nakład może mieć wartość i jakie składniki trzeba rozważyć.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-01-F01-rubryka-1 | Korzyść: adekwatne pokrycie potrzeby oraz mniejsze ryzyko błędu i przeróbki w wyjątku. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-01-F01-rubryka-2 | Koszty dotyczą pozyskania/dokumentowania/walidacji/zarządzania; decyzja zależy od ich relacji do korzyści. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-01-F01-rubryka-3 | Brak gwarancji zwrotu; ani objętość, ani sama chęć oszczędności nie rozstrzygają. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Twierdzenie, że każdy dodatkowy dokument z definicji ma dodatnią wartość. Odpowiedź graniczna/równoważna: Wolno opisać ocenę jakościowo, bez wymyślania pieniędzy.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-01 oraz C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Nazwij oczekiwaną korzyść oraz koszt pracy nad wymaganiem. Więcej ani mniej RE samo w sobie nie rozstrzyga wartości. Przejście do REG-KRY-T07-01 / CMP-KRY-T07-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-01-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-01 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-01; Decyzja budżetowa o eliminacji walidacji zamiast liczby stron; nadal wspólna rodzina reguły.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Sponsor chce usunąć całą walidację, bo jej koszt jest natychmiastowy, a korzyści mogą pojawić się później. Wyjaśnij zasadę wartości z odniesieniem do obu stron decyzji i pełnego rodzaju kosztów.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-01-D01-rubryka-1 | Zerowy koszt walidacji nie gwarantuje najwyższej wartości; może zwiększyć ryzyko niespełnienia potrzeb i przeróbek. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-01-D01-rubryka-2 | Uwzględnia korzyści oraz koszt pozyskania, dokumentowania, walidacji i zarządzania, nie tylko implementacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-01-D01-rubryka-3 | Potrzebny jest proporcjonalny nakład do sytuacji, a nie ogólne maksimum lub minimum dokumentacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie późniejszego charakteru korzyści za dowód ich nieistnienia. Odpowiedź graniczna/równoważna: Można stwierdzić, że potrzebne są dane do konkretnej decyzji; nie trzeba rozstrzygać, czy warsztat na pewno się opłaci.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-01 oraz C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Nazwij oczekiwaną korzyść oraz koszt pracy nad wymaganiem. Więcej ani mniej RE samo w sobie nie rozstrzyga wartości. Przejście do REG-KRY-T07-01 / CMP-KRY-T07-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-01 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-01-B01 ↔ Z1-T07-01-F01 | Wybór właściwego argumentu dla nadmiarowego nakładu. → Od nadmiaru niskiego ryzyka do uzasadnionego doprecyzowania wyjątku.; rdzeniem jest pr01 — orientacja na wartość | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-01-B01 ↔ Z1-T07-01-D01 | Wybór właściwego argumentu dla nadmiarowego nakładu. → Decyzja budżetowa o eliminacji walidacji zamiast liczby stron; nadal wspólna rodzina reguły.; rdzeniem jest pr01 — orientacja na wartość | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-01-F01 ↔ Z1-T07-01-D01 | Od nadmiaru niskiego ryzyka do uzasadnionego doprecyzowania wyjątku. → Decyzja budżetowa o eliminacji walidacji zamiast liczby stron; nadal wspólna rodzina reguły.; rdzeniem jest pr01 — orientacja na wartość | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 2. PR02 — Interesariusze — T07/PR02

**Cel i czynność:** Wymienia inne istotne role i ryzyko utraty ich wymagań; jedna osoba może łączyć role. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-02 — objaśnienie [N]

RE ma pomagać zrozumieć i zaspokoić potrzeby właściwych interesariuszy. Nie wystarczy zebrać życzeń najgłośniejszej osoby lub samych użytkowników końcowych. W kontekście systemu istotne role mogą mieć zamawiający, odbiorca, użytkownik, operator czy regulator. Jedna osoba może łączyć role; dla danej istotnej roli trzeba znaleźć właściwych reprezentantów. Rola opisuje związek z systemem, a nie wyłącznie etat w organizacji.

Gdy grupa jest liczna lub przyszłe osoby nie są jeszcze znane, persona może reprezentować archetypowe potrzeby i sposób działania. To fikcyjny opis, a nie rzeczywisty użytkownik, który osobiście zatwierdził wymagania. Potrzeby i punkty widzenia mogą być sprzeczne; zadaniem RE jest ujawnienie i rozwiązanie konfliktów. „Zaspokojenie potrzeb” nie oznacza bezrefleksyjnego jednoczesnego przyjęcia każdej sprzecznej propozycji.

Użytkownicy przekazujący feedback z eksploatacji pozostają interesariuszami. Ważność zasady wynika z ryzyka pominięcia krytycznych oczekiwań: nawet świetny interfejs użytkownika nie pomoże, jeśli usługa nie może być utrzymywana albo jej wyniki są nieadekwatne dla istotnego odbiorcy. Konkretne techniki identyfikacji i lista stakeholderów to T24, natomiast tutaj wyjaśniamy potrzebę objęcia właściwych ról i pracy z konfliktem.

**PL/EN i status:** interesariusze — stakeholders; persona — persona; user/client/customer/operator/regulator to nazwy ról w źródle. Nie utożsamiać client i customer automatycznie.

**Warunki i źródło CL-T07-02:** C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-02 — porównanie [N]

Oś: potrzeba roli versus pojedyncza propozycja rozwiązania. Dwie role mogą potrzebować różnych rzeczy; konflikt trzeba uzgodnić. Persona zastępuje archetypowy opis grupy, nie realne porozumienie wszystkich osób.

**EX-KRY-T07-02 — przykład:** Nowa usługa spełnia oczekiwania klienta zamawiającego, ale operator nie może odtworzyć przetwarzania po awarii. Pominięcie roli operatora pozostawia ważną potrzebę bez uzgodnienia.

**CE-KRY-T07-02 — kontrprzykład:** Uogólnienie „wystarczy klient i użytkownik końcowy” obala wymaganie utrzymania zgłaszane przez operatora, który nie należy do tych ról w scenariuszu.

### RP-T07-02 — retrieval [Q/R]

**[Q] Dlaczego sam wywiad z klientem końcowym może nie wystarczyć? Wyjaśnij rolę reprezentantów, person i konfliktu potrzeb.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-02-rubryka-1 | Wymienia inne istotne role i ryzyko utraty ich wymagań; jedna osoba może łączyć role. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-02-rubryka-2 | Persona reprezentuje grupę/nieznane osoby, ale nie jest realnym potwierdzeniem ich zgody. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-02-rubryka-3 | Różne potrzeby mogą prowadzić do konfliktów wymagających identyfikacji i rozwiązania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-02 — korekta i kontrola [N]

Wskaż pominiętą rolę i jej możliwy wpływ. Persona pomaga opisać perspektywę, lecz nie dowodzi, że sprzeczne potrzeby zostały uzgodnione. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-02-B01 / r1 — B / P

Redakcja [R]: primary KRY-T07-02 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-02; Role, persona i błędny wniosek o konflikcie.. Użycie: practice, do review.

**[Q] Projekt rozmawiał tylko z kupującym i użytkownikami końcowymi. Nie uwzględnił operatora usługi. Dla licznej przyszłej grupy stworzono personę. Które DWIE oceny są uzasadnione?**

Wybierz dokładnie 2 odpowiedzi. Maksymalnie 2 pkt.

| Opcja | Treść |
| --- | --- |
| a | Pominięcie operatora może oznaczać pominięcie istotnych wymagań. |
| b | Persona może pomóc opisać archetypowe potrzeby nieznanej jeszcze grupy. |
| c | Sama persona dowodzi zgody wszystkich przyszłych użytkowników. |
| d | Każdą sprzeczną propozycję wszystkich ról należy przyjąć jednocześnie. |

**[R] Klucz: a, b.** Przy n≤2 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-02-B01-a | wybrać | Operator to możliwa istotna rola → ograniczenie rozmów może pozostawić potrzebę poza analizą → wybrać. |
| RAT-Z1-T07-02-B01-b | wybrać | Duża/nieznana grupa spełnia warunki użycia persony → wybrać. |
| RAT-Z1-T07-02-B01-c | nie wybierać | Fikcyjny archetyp nie jest uzgodnieniem realnych osób → nie wybrać. |
| RAT-Z1-T07-02-B01-d | nie wybierać | Konflikt wymaga rozwiązania, nie niemożliwego równoczesnego spełnienia → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-02 oraz C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Wskaż pominiętą rolę i jej możliwy wpływ. Persona pomaga opisać perspektywę, lecz nie dowodzi, że sprzeczne potrzeby zostały uzgodnione. Przejście do REG-KRY-T07-02 / CMP-KRY-T07-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-02-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-02 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-02; Konflikt dwóch ról zastępuje problem pominiętego operatora.. Użycie: practice, do review.

**[Q] Użytkownicy chcą natychmiast usuwać rekord, a dział rozliczeń potrzebuje zachować dane do wyjaśnienia transakcji. Organizacja mówi, że RE oznacza po prostu wykonanie obu żądań. Wyjaśnij zasadę interesariuszy i sens pracy z taką sytuacją.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-02-F01-rubryka-1 | Obie istotne perspektywy trzeba rozpoznać i reprezentować; klient/user nie wyczerpują listy ról. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-02-F01-rubryka-2 | Sprzeczność wymaga identyfikacji i rozwiązania konfliktu; nie wystarczy przepisać obu żądań. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-02-F01-rubryka-3 | Należy zrozumieć potrzeby stojące za propozycjami; nie przesądzamy rozwiązania ani realnego prawa przechowywania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Obietnica jednoczesnego spełnienia sprzecznych zapisów bez uzgodnienia. Odpowiedź graniczna/równoważna: Nie trzeba wybrać czasu retencji ani cytować prawa; scenariusz jest fikcyjny.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-02 oraz C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Wskaż pominiętą rolę i jej możliwy wpływ. Persona pomaga opisać perspektywę, lecz nie dowodzi, że sprzeczne potrzeby zostały uzgodnione. Przejście do REG-KRY-T07-02 / CMP-KRY-T07-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-02-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-02 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-02; Sytuacja przyszłego rynku i eksploatacji, zamiast jednego konfliktu; zakres wyjaśnienia zachowany.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Przy nowej usłudze nie zna się nazwisk przyszłych użytkowników. Zamawiający sugeruje całkowite pominięcie tej grupy, a feedback operatorów ma trafiać wyłącznie do programistów bez pracy RE. Wyjaśnij właściwą rolę reprezentacji i feedbacku oraz granicę person.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-02-D01-rubryka-1 | Nieznajomość osób nie uzasadnia pominięcia roli; reprezentacja/persona może pomóc opisać potrzeby. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-02-D01-rubryka-2 | Użytkownicy/operatorzy przekazujący feedback są istotnymi źródłami potrzeb i możliwych zmian; RE powinno je uwzględnić. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-02-D01-rubryka-3 | Persona jest fikcyjna, nie poświadcza zgody grupy; różne potrzeby/konflikty nadal wymagają uzgodnień. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Utożsamienie persony z rzeczywistym podpisem całej grupy. Odpowiedź graniczna/równoważna: Wolno zaproponować reprezentantów grupy; nie trzeba tworzyć pełnej stakeholder list.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-02 oraz C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Wskaż pominiętą rolę i jej możliwy wpływ. Persona pomaga opisać perspektywę, lecz nie dowodzi, że sprzeczne potrzeby zostały uzgodnione. Przejście do REG-KRY-T07-02 / CMP-KRY-T07-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-02 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-02-B01 ↔ Z1-T07-02-F01 | Role, persona i błędny wniosek o konflikcie. → Konflikt dwóch ról zastępuje problem pominiętego operatora.; rdzeniem jest pr02 — interesariusze | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-02-B01 ↔ Z1-T07-02-D01 | Role, persona i błędny wniosek o konflikcie. → Sytuacja przyszłego rynku i eksploatacji, zamiast jednego konfliktu; zakres wyjaśnienia zachowany.; rdzeniem jest pr02 — interesariusze | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-02-F01 ↔ Z1-T07-02-D01 | Konflikt dwóch ról zastępuje problem pominiętego operatora. → Sytuacja przyszłego rynku i eksploatacji, zamiast jednego konfliktu; zakres wyjaśnienia zachowany.; rdzeniem jest pr02 — interesariusze | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 3. PR03 — Wspólne zrozumienie — T07/PR03

**Cel i czynność:** Odróżnia explicit/implicit od prawdziwego/pozornego; dokument nie gwarantuje rozumienia. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-03 — objaśnienie [N]

Wielu uczestników wytwarzania musi mieć wspólną podstawę znaczeń potrzeb, wymagań i kontekstu. RE buduje, podtrzymuje i sprawdza tę podstawę. Explicit shared understanding jest osiągane przez dokumentowanie i uzgadnianie, implicit przez wspólną wiedzę o potrzebach, domenie i wizji. To różne źródła wspólnej podstawy; żadne nie gwarantuje, że osoby rzeczywiście rozumieją to samo.

Wiedza domenowa, udana wcześniejsza współpraca, wspólna kultura i wartości oraz wzajemne zaufanie sprzyjają wspólnemu zrozumieniu. Odległość, outsourcing, duże zespoły i duża rotacja mogą je utrudniać. Nie są to bezwyjątkowe prawa: zdalny zespół może rozumieć się dobrze, a długo współpracujący może przeoczyć zmianę znaczenia. Dlatego potrzebna jest ocena faktycznego rozumienia, np. przez przykłady oczekiwanych wyników, prototyp lub porównanie interpretacji.

Glosariusz, prototyp i istniejący system jako punkt odniesienia pomagają budować podstawę. Krótkie pętle feedbacku ograniczają koszt i zasięg nieporozumień. Sam podpis lub użycie tego samego słowa nie jest wystarczającym dowodem. Co więcej, nawet zgodne rozumienie nie daje kompletności, jeśli nikt nie pomyślał o istotnym wymaganiu. Znaczenie PR03 polega na redukcji ryzyka rozbieżnych decyzji opartych na pozornie tych samych oczekiwaniach.

**PL/EN i status:** wspólne zrozumienie — shared understanding; explicit: PL „faktyczne”, projektowo „jawne”; implicit: PL „domniemane”, projektowo „niejawne”. Prawdziwe/pozorne to osobna oś.

**Warunki i źródło CL-T07-03:** C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-03 — porównanie [N]

Oś nośnika: explicit versus implicit. Oś trafności: faktycznie to samo znaczenie versus pozorna zgodność. Wspólna wiedza domenowa może być dobra, a uzgodniony zapis może zostać różnie odczytany.

**EX-KRY-T07-03 — przykład:** Dział sprzedaży i magazyn używają słowa „dostępny”. Przykład zamówienia ujawnia, że jeden liczy zarezerwowane sztuki, drugi je odejmuje. Glosariusz i feedback pozwalają uzgodnić sens.

**CE-KRY-T07-03 — kontrprzykład:** Uogólnienie „wspólny dokument dowodzi wspólnego rozumienia” obala dwóch podpisujących, którzy odmiennie interpretują „dostępny”.

### RP-T07-03 — retrieval [Q/R]

**[Q] Wyjaśnij, dlaczego shared understanding trzeba nie tylko budować, ale także sprawdzać. Podaj sprzyjające i utrudniające warunki oraz dwie praktyki.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-03-rubryka-1 | Odróżnia explicit/implicit od prawdziwego/pozornego; dokument nie gwarantuje rozumienia. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-03-rubryka-2 | Wskazuje warunki wspólnej wiedzy/zaufania oraz bariery np. rotacji/odległości bez absolutyzowania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-03-rubryka-3 | Wyjaśnia rolę przykładów, glosariusza/prototypów i krótkich pętli feedbacku. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-03 — korekta i kontrola [N]

Poproś o interpretację na konkretnym przykładzie. Podpis i wspólny termin to słabsza przesłanka niż zgodne rozstrzygnięcie przypadku; nie gwarantują też kompletności. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-03-B01 / r1 — B / A

Redakcja [R]: primary KRY-T07-03 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-03; Pozorna explicit zgodność w jednym terminie.. Użycie: practice, do review.

**[Q] Dwa działy podpisały zapis „zamówienie gotowe”, lecz jeden rozumie gotowość jako kompletację, a drugi jako kompletację wraz z opłaceniem. Który argument odpowiada zasadzie wspólnego zrozumienia?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Należy porównać przykłady oczekiwanych wyników i uzgodnić znaczenie gotowości. |
| b | Należy wyłącznie zmienić nazwę pliku. |
| c | Wspólne zrozumienie nigdy nie jest możliwe między działami. |
| d | Podpis kończy potrzebę sprawdzania znaczenia. |

**[R] Klucz: a.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-03-B01-a | wybrać | Przykład ujawnia różnicę i wspiera uzgodnienie → wybrać. |
| RAT-Z1-T07-03-B01-b | nie wybierać | Nazwa nie usuwa rozbieżnego sensu → nie wybrać. |
| RAT-Z1-T07-03-B01-c | nie wybierać | Jedna rozbieżność nie dowodzi niemożliwości uzgodnienia → nie wybrać. |
| RAT-Z1-T07-03-B01-d | nie wybierać | Różne interpretacje mimo podpisu pokazują pozorną zgodność → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-03 oraz C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Poproś o interpretację na konkretnym przykładzie. Podpis i wspólny termin to słabsza przesłanka niż zgodne rozstrzygnięcie przypadku; nie gwarantują też kompletności. Przejście do REG-KRY-T07-03 / CMP-KRY-T07-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-03-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-03 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-03; Zmieniające się warunki zespołu zamiast samego homonimu.. Użycie: practice, do review.

**[Q] Do zespołu z dużą rotacją dołącza dostawca zewnętrzny. Dotąd opierano się na wieloletniej wspólnej wiedzy bez zapisów. Wyjaśnij wpływ zmiany na wspólne zrozumienie i zaproponuj sensowną kontrolę, odróżniając nośnik od trafności.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-03-F01-rubryka-1 | Rotacja/outsourcing mogą osłabić wspólną wiedzę; dotychczasowa podstawa implicit nie musi wystarczyć. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-03-F01-rubryka-2 | Dokumentowanie i uzgadnianie mogą budować explicit, ale nie gwarantują prawdziwego wspólnego sensu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-03-F01-rubryka-3 | Glosariusz/przykłady/prototyp i krótkie pętle feedbacku pozwalają sprawdzać interpretacje, ograniczając wpływ nieporozumień. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie nowego podpisu za dowód usunięcia wszystkich rozbieżności. Odpowiedź graniczna/równoważna: Dopuszczalne różne praktyki z uzasadnieniem; nie należy zakazywać wszelkiej wiedzy implicit.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-03 oraz C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Poproś o interpretację na konkretnym przykładzie. Podpis i wspólny termin to słabsza przesłanka niż zgodne rozstrzygnięcie przypadku; nie gwarantują też kompletności. Przejście do REG-KRY-T07-03 / CMP-KRY-T07-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-03-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-03 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-03; Kontrast zgodności i kompletności przy sprzyjających warunkach.. Użycie: practice / kandydat delayed [D], do review.

**[Q] W małym zespole wszyscy wyjaśniają uzgodniony przykład jednakowo. Czy to dowodzi kompletności wymagań? Wyjaśnij obie postacie shared understanding, rolę warunków współpracy i potrzebę dalszej kontroli.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-03-D01-rubryka-1 | Zgodność przykładu jest ograniczoną przesłanką wspólnego rozumienia, nie dowodem kompletności; wszyscy mogli przeoczyć wymaganie. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-03-D01-rubryka-2 | Explicit opiera się na dokumentach i uzgodnieniu; implicit na wspólnej wiedzy, obie postacie mogą być pozorne. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-03-D01-rubryka-3 | Wiedza domenowa/zaufanie sprzyjają, rotacja/odległość mogą utrudniać; przykłady/prototypy i krótkie feedback loops umożliwiają kontrolę. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Wniosek „zgodni w jednym przykładzie, więc niczego nie brakuje”. Odpowiedź graniczna/równoważna: Można zaakceptować obecną zgodność jako dobry sygnał, zachowując granice.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-03 oraz C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Poproś o interpretację na konkretnym przykładzie. Podpis i wspólny termin to słabsza przesłanka niż zgodne rozstrzygnięcie przypadku; nie gwarantują też kompletności. Przejście do REG-KRY-T07-03 / CMP-KRY-T07-03 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-03 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-03-B01 ↔ Z1-T07-03-F01 | Pozorna explicit zgodność w jednym terminie. → Zmieniające się warunki zespołu zamiast samego homonimu.; rdzeniem jest pr03 — wspólne zrozumienie | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-03-B01 ↔ Z1-T07-03-D01 | Pozorna explicit zgodność w jednym terminie. → Kontrast zgodności i kompletności przy sprzyjających warunkach.; rdzeniem jest pr03 — wspólne zrozumienie | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-03-F01 ↔ Z1-T07-03-D01 | Zmieniające się warunki zespołu zamiast samego homonimu. → Kontrast zgodności i kompletności przy sprzyjających warunkach.; rdzeniem jest pr03 — wspólne zrozumienie | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 4. PR04 — Kontekst: pełna granica zasady — T07/PR04

**Cel i czynność:** Odróżnia granicę systemu, granicę kontekstu i scope, bez utożsamienia istotności z zakresem zmian. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-04 — objaśnienie [N]

System działa w istotnym otoczeniu. Bez zrozumienia jego wpływu nie można właściwie określić wymagań. Granica systemu oddziela analizowaną całość od kontekstu, granica kontekstu — istotne otoczenie od nieistotnej reszty. Scope oznacza zakres elementów możliwych do kształtowania. Granice i zakres zmian nie są tą samą osią: wewnętrzny moduł może być ponownie używany bez zmian, a procedura zewnętrzna może zostać przeprojektowana.

PR04 obejmuje więcej niż „zewnętrzne bywa istotne”. Trzeba uwzględniać zmiany kontekstu wpływające na wymagania, wymagania dotyczące świata rzeczywistego oraz założenia, które muszą zachodzić, żeby system działał zgodnie z potrzebą. Wymaganie o realnym zjawisku trzeba przełożyć na to, co system może obserwować lub sterować. Jeżeli aplikacja widzi jedynie zeskanowane zdarzenie, to jego zgodność z fizycznym faktem jest odrębnym założeniem albo wymaganiem wobec otoczenia.

Założenie nie staje się prawdziwe przez zapisanie. Gdy nie zachodzi, poprawny program może nie zapewnić pożądanego wyniku w świecie rzeczywistym. Tak samo zmiana regulaminu, czujnika lub procedury może zmienić wymagania bez automatycznej zmiany granicy systemu. Wyjaśnienie L2 uzasadnia te związki; nie zastępuje samodzielnego wyznaczania pełnych granic L3. KRY-A01 z C-A nadal dotyczy tylko ograniczonego wpływu mimo braku zmiany, a nie całego powyższego zakresu.

**PL/EN i status:** T-01–05 z C02 zachowane; real-world/domain requirement — wymaganie dotyczące świata rzeczywistego/domeny; context/domain assumption — założenie o kontekście/domenie: autorskie PL objaśnienia z §2.2.4.

**Warunki i źródło CL-T07-04:** C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-04 — porównanie [N]

Oś A: wewnętrzny/zewnętrzny; B: istotny/nieistotny; C: zmieniany/niezmieniany. Stary wewnętrzny moduł może być niezmieniany; zewnętrzna procedura istotna i zmieniana. Wymaganie realnego zwrotu i sygnał skanera są też różnymi poziomami opisu.

**EX-KRY-T07-04 — przykład:** System ewidencji narzędzi widzi skan zwrotu. Potrzeba „narzędzie rzeczywiście wróciło” wymaga zgodności skanu z fizycznym zwrotem; samo poprawne zapisanie skanu tego nie zapewnia.

**CE-KRY-T07-04 — kontrprzykład:** Uogólnienie „wszystko poza projektem można pominąć” obala niezmieniany skaner z opóźnieniami danych. Uogólnienie „zarejestrowane zdarzenie dowodzi realnego faktu” obala omyłkowy skan bez fizycznego zwrotu.

### RP-T07-04 — retrieval [Q/R]

**[Q] Wyjaśnij trzy osie granic/scope oraz trzy obowiązki zasady: zmiany kontekstu, real-world requirements i założenia. Podaj granicę wnioskowania z danych systemu.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-04-rubryka-1 | Odróżnia granicę systemu, granicę kontekstu i scope, bez utożsamienia istotności z zakresem zmian. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-04-rubryka-2 | Wyjaśnia wpływ zmian otoczenia, przełożenie wymagań świata rzeczywistego na systemowe i rolę założeń. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-04-rubryka-3 | Nie uznaje samego sygnału/rekordu za pewny dowód realnego zdarzenia bez uzasadnionych warunków. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-04 — korekta i kontrola [N]

Zadaj osobno pytania o skład systemu, istotność otoczenia, możliwość zmiany i wiarygodność powiązania danych ze światem. C-A naprawia tylko część tego rozróżnienia. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-04-B01 / r1 — B / K

Redakcja [R]: primary KRY-T07-04 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-04; Granice/scope i mapowanie realnego faktu na sygnał.. Użycie: practice, do review.

**[Q] Aplikacja magazynowa obejmuje formularz i stary moduł ewidencji używany bez zmian. Oddzielna procedura kontroli skanu może zostać przeprojektowana. Fizyczny zwrot narzędzia ma być odzwierciedlony skanem; aplikacja obserwuje wyłącznie skan. Oceń argumenty.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 3 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Stary moduł jest poza aplikacją tylko dlatego, że nie wolno go zmienić. |
| 2 | Procedura może być zewnętrzna i zarazem objęta zakresem zmiany. |
| 3 | Poprawny zapis skanu sam w sobie gwarantuje fizyczny zwrot. |
| 4 | Zmiana sposobu kontroli skanu może wpłynąć na wymagania aplikacji. |

**[R] Klucz: Fałsz, Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 3/4; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-04-B01-1 | Fałsz | Stem włącza go do aplikacji; brak zmiany dotyczy scope → Fałsz. |
| RAT-Z1-T07-04-B01-2 | Prawda | Dane jawnie rozdzielają przynależność i możliwość projektowania → Prawda. |
| RAT-Z1-T07-04-B01-3 | Fałsz | System widzi sygnał; zgodność sygnału z faktem wymaga warunku otoczenia → Fałsz. |
| RAT-Z1-T07-04-B01-4 | Prawda | Zmieniona procedura to istotny kontekst → możliwy wpływ na wymagania → Prawda. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-04 oraz C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zadaj osobno pytania o skład systemu, istotność otoczenia, możliwość zmiany i wiarygodność powiązania danych ze światem. C-A naprawia tylko część tego rozróżnienia. Przejście do REG-KRY-T07-04 / CMP-KRY-T07-04 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-04-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-04 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-04; Od skanu zwrotu do kontroli wejścia, ze zmianą rodzaju realnego celu i warunku.. Użycie: practice, do review.

**[Q] System rejestruje wejścia do strefy na podstawie sygnału bramki. Bramki nie zmieniamy; procedurę reakcji ochrony można zmienić. Potrzebą jest rzeczywiste niedopuszczenie nieuprawnionych osób. Wyjaśnij znaczenie kontekstu, różnicę scope i granicy oraz założenia potrzebne do interpretacji sygnału.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-04-F01-rubryka-1 | Brama i procedura są istotnym otoczeniem wobec systemu; brak zmiany bramki nie usuwa wpływu, możliwość zmiany procedury nie czyni jej automatycznie częścią aplikacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-04-F01-rubryka-2 | Real-world requirement dotyczy rzeczywistego dostępu; wymaganie aplikacji dotyczy obserwowalnych sygnałów i reakcji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-04-F01-rubryka-3 | Zgodność sygnału z przejściem i skuteczność reakcji są warunkami otoczenia wymagającymi sprawdzenia; ich zmiana może zmienić wymagania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie samego rekordu wejścia za gwarancję rzeczywistej ochrony. Odpowiedź graniczna/równoważna: Nie trzeba projektować zabezpieczeń ani wyznaczać wszystkich granic L3; argument wystarcza.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-04 oraz C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zadaj osobno pytania o skład systemu, istotność otoczenia, możliwość zmiany i wiarygodność powiązania danych ze światem. C-A naprawia tylko część tego rozróżnienia. Przejście do REG-KRY-T07-04 / CMP-KRY-T07-04 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-04-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-04 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-04; Sterowanie realnym procesem z opóźnionym sygnałem zamiast ewidencji; pełne PR04, bez podnoszenia do L3.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Aplikacja planowania dostaw korzysta z niezmienianego, zewnętrznego czujnika poziomu zbiornika. Ma zapewnić brak przepełnienia w świecie rzeczywistym. Czujnik bywa opóźniony, a procedurę dostaw można zmienić. Wewnętrzny katalog aplikacji pozostaje bez zmian. Wyjaśnij pełną zasadę kontekstu, odnosząc się do granic, scope, wymagań realnych, mapowania sygnału, założeń i zmian.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-04-D01-rubryka-1 | Katalog może być wewnętrzny i niezmieniany; czujnik zewnętrzny i istotny; zmieniana procedura pozostaje odrębną częścią kontekstu. Granica kontekstu dotyczy istotności, nie zakresu prac. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-04-D01-rubryka-2 | Brak przepełnienia jest realnym celem; aplikacja podejmuje decyzje na podstawie danych czujnika, więc trzeba uzasadnić adekwatność mapowania danych na stan zbiornika. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-04-D01-rubryka-3 | Aktualność i poprawność odczytu oraz wykonanie procedury są istotnymi warunkami; zmiana czujnika/procedury może zmienić wymagania. Sam zapis nie gwarantuje realnego wyniku. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Pominięcie czujnika wyłącznie dlatego, że nie jest zmieniany, albo utożsamienie odczytu z gwarancją stanu realnego. Odpowiedź graniczna/równoważna: Dopuszczalne jawne wskazanie, że wymagania zależą od danych i nie można zagwarantować celu bez dodatkowych warunków.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-04 oraz C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zadaj osobno pytania o skład systemu, istotność otoczenia, możliwość zmiany i wiarygodność powiązania danych ze światem. C-A naprawia tylko część tego rozróżnienia. Przejście do REG-KRY-T07-04 / CMP-KRY-T07-04 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-04 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-04-B01 ↔ Z1-T07-04-F01 | Granice/scope i mapowanie realnego faktu na sygnał. → Od skanu zwrotu do kontroli wejścia, ze zmianą rodzaju realnego celu i warunku.; rdzeniem jest pr04 — kontekst: pełna granica zasady | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-04-B01 ↔ Z1-T07-04-D01 | Granice/scope i mapowanie realnego faktu na sygnał. → Sterowanie realnym procesem z opóźnionym sygnałem zamiast ewidencji; pełne PR04, bez podnoszenia do L3.; rdzeniem jest pr04 — kontekst: pełna granica zasady | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-04-F01 ↔ Z1-T07-04-D01 | Od skanu zwrotu do kontroli wejścia, ze zmianą rodzaju realnego celu i warunku. → Sterowanie realnym procesem z opóźnionym sygnałem zamiast ewidencji; pełne PR04, bez podnoszenia do L3.; rdzeniem jest pr04 — kontekst: pełna granica zasady | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 5. PR05 — Problem–Wymaganie–Rozwiązanie — T07/PR05

**Cel i czynność:** Rozpoznaje problem, potrzebną właściwość i system realizujący oczekiwanie jako powiązane role. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-05 — objaśnienie [N]

Problem opisuje niezadowalającą sytuację. Wymagania określają potrzebne właściwości lub zdolności pozwalające go usunąć albo ograniczyć. Rozwiązaniem jest system socjotechniczny, który je spełnia. Warto rozdzielać te role w myśleniu i komunikacji: inaczej łatwo uznać preferowaną technologię za sam problem albo z góry odrzucić inne sposoby zaspokojenia potrzeby.

Rozdzielenie znaczeń nie oznacza izolowania prac ani narzucenia kolejności, która nigdy nie może się zmienić. Pomysł rozwiązania może ujawnić nową potrzebę, szczególnie przy innowacji. Wykonalność wymagania bywa możliwa do oceny dopiero przez sprawdzenie rozwiązania, a prototyp jako częściowe rozwiązanie może wspierać walidację. System na wysokim poziomie może być rozwiązaniem, a dla podsystemu źródłem dalszych wymagań.

Ważność zasady wynika z potrzeby jednoczesnego utrzymania związku celu i realizacji oraz przejrzystości rozmowy. Należy wiedzieć, dlaczego czegoś potrzebujemy, co ma się zmienić i jakie rozwiązanie to umożliwi, bez udawania, że te pytania można zawsze zamknąć oddzielnie raz na zawsze. Nie jest to zakaz rozważania technologii w RE; jest to ochrona przed nieświadomym mieszaniem concern.

**PL/EN i status:** problem — problem; wymaganie — requirement; rozwiązanie — solution: nazwy trójki z Syllabus. PL §2.1 „nierozłączna trójka”, §2.2 „połączony trójkąt”; EN spójne triple. Nie traktować jako trzech faz.

**Warunki i źródło CL-T07-05:** C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-05 — porównanie [N]

Oś: rola opisu. „Mylimy paczki” to stan problemowy; „potrzebujemy sprawdzić tożsamość” to wymaganie; „stosujemy czytnik” to rozwiązanie. Ich związek nie znosi różnic, a różnice nie ustanawiają izolacji.

**EX-KRY-T07-05 — przykład:** Problem: magazyn myli paczki. Wymaganie: identyfikować paczkę przy wydaniu. Rozwiązanie: wybrana usługa z czytnikiem i procedurą. Pomysł czytnika może ujawnić dodatkowe potrzeby obsługi uszkodzonych etykiet.

**CE-KRY-T07-05 — kontrprzykład:** Uogólnienie „najpierw wszystkie wymagania, potem można pomyśleć o rozwiązaniu” obala prototyp potrzebny do oceny wykonalności i zrozumienia interakcji.

### RP-T07-05 — retrieval [Q/R]

**[Q] Wyjaśnij związek trójki i powód rozdzielania jej w komunikacji. Czy pomysł rozwiązania może poprzedzić doprecyzowanie potrzeb?**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-05-rubryka-1 | Rozpoznaje problem, potrzebną właściwość i system realizujący oczekiwanie jako powiązane role. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-05-rubryka-2 | Rozdzielanie concern ułatwia pracę, ale nie oznacza izolacji ani niezmiennej kolejności; pomysł/prototyp może ujawnić wymagania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-05 — korekta i kontrola [N]

Oznacz każde zdanie jako opis sytuacji, potrzebnej właściwości albo realizacji. Zachowaj powiązania między nimi i możliwość iteracji. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-05-B01 / r1 — B / A

Redakcja [R]: primary KRY-T07-05 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-05; Argument przeciw sztywnej kolejności.. Użycie: practice, do review.

**[Q] Zespół chce sprawdzić prototyp nowego sposobu obsługi, aby zrozumieć potrzeby użytkowników. Kierownik zakazuje tego, bo „żadne rozwiązanie nie może być rozważane przed kompletem wymagań”. Która ocena jest właściwa?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Każda sugestia technologii jest definicją problemu. |
| b | Zakaz wynika z zasady trójki w każdej sytuacji. |
| c | Prototyp może ujawnić wymagania; nadal warto rozdzielić opisy problemu, potrzeby i rozwiązania. |
| d | Od tej chwili potrzeby nie mają znaczenia. |

**[R] Klucz: c.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-05-B01-a | nie wybierać | Technologia jest propozycją realizacji, nie samym stanem problemowym → nie wybrać. |
| RAT-Z1-T07-05-B01-b | nie wybierać | Zasada dopuszcza wzajemny wpływ i brak stałej kolejności → nie wybrać. |
| RAT-Z1-T07-05-B01-c | wybrać | Częściowe rozwiązanie pomaga poznać potrzeby bez scalania ich znaczeń → wybrać. |
| RAT-Z1-T07-05-B01-d | nie wybierać | Rozwiązanie ma nadal zaspokajać potrzeby → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-05 oraz C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oznacz każde zdanie jako opis sytuacji, potrzebnej właściwości albo realizacji. Zachowaj powiązania między nimi i możliwość iteracji. Przejście do REG-KRY-T07-05 / CMP-KRY-T07-05 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-05-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-05 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-05; Solution bias w sformułowaniu klienta zamiast formalnego zakazu prototypu.. Użycie: practice, do review.

**[Q] Klient mówi: „Naszym problemem jest brak aplikacji mobilnej”. Z rozmowy wynika, że zgłoszenia giną między zmianami. Wyjaśnij różnicę problemu, wymagania i propozycji rozwiązania, bez zakazywania rozważenia aplikacji.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-05-F01-rubryka-1 | Zagubione zgłoszenia to niezadowalający stan; aplikacja mobilna jest propozycją realizacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-05-F01-rubryka-2 | Wymaganie powinno uchwycić potrzebną zdolność, np. zachowanie i przekazanie zgłoszeń, bez utożsamienia jej z jednym kanałem. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-05-F01-rubryka-3 | Rozwiązanie można badać, także prototypem; trójka współzależy, choć sensy należy komunikacyjnie rozdzielać. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie braku wskazanej technologii za jedyną możliwą definicję problemu. Odpowiedź graniczna/równoważna: Nie trzeba projektować alternatywnej aplikacji; trafne rozróżnienie wystarcza.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-05 oraz C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oznacz każde zdanie jako opis sytuacji, potrzebnej właściwości albo realizacji. Zachowaj powiązania między nimi i możliwość iteracji. Przejście do REG-KRY-T07-05 / CMP-KRY-T07-05 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-05-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-05 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-05; Innowacja pobudzona technologią, a nie istniejąca potrzeba opisana jako rozwiązanie.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Nowy czujnik umożliwił usługę, której użytkownicy wcześniej nie znali. Zespół dopiero teraz bada potrzebę i formułuje wymagania. Czy narusza zasadę trójki? Wyjaśnij sensy oraz powód ich rozdzielania i współzależności.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-05-D01-rubryka-1 | Nie; pomysł rozwiązania może pobudzać potrzeby i prowadzić do wymagań. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-05-D01-rubryka-2 | Problem/potrzeba, wymagane zdolności i realizujący je system mają różne role; nie należy uznać samego czujnika za kompletną potrzebę. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-05-D01-rubryka-3 | Rozdzielenie w opisie ułatwia rozumowanie, ale ocena rozwiązania/wykonalności i walidacja mogą oddziaływać na wymagania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Stwierdzenie, że sama kolejność pomysł→potrzeba unieważnia RE. Odpowiedź graniczna/równoważna: Wolno zaznaczyć konieczność potwierdzenia realnej potrzeby; nie zakładać popytu z istnienia czujnika.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-05 oraz C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oznacz każde zdanie jako opis sytuacji, potrzebnej właściwości albo realizacji. Zachowaj powiązania między nimi i możliwość iteracji. Przejście do REG-KRY-T07-05 / CMP-KRY-T07-05 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-05 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-05-B01 ↔ Z1-T07-05-F01 | Argument przeciw sztywnej kolejności. → Solution bias w sformułowaniu klienta zamiast formalnego zakazu prototypu.; rdzeniem jest pr05 — problem–wymaganie–rozwiązanie | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-05-B01 ↔ Z1-T07-05-D01 | Argument przeciw sztywnej kolejności. → Innowacja pobudzona technologią, a nie istniejąca potrzeba opisana jako rozwiązanie.; rdzeniem jest pr05 — problem–wymaganie–rozwiązanie | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-05-F01 ↔ Z1-T07-05-D01 | Solution bias w sformułowaniu klienta zamiast formalnego zakazu prototypu. → Innowacja pobudzona technologią, a nie istniejąca potrzeba opisana jako rozwiązanie.; rdzeniem jest pr05 — problem–wymaganie–rozwiązanie | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 6. PR06 — Walidacja — T07/PR06

**Cel i czynność:** Wczesna kontrola zmniejsza ryzyko odkrycia nieadekwatności dopiero po wdrożeniu. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-06 — objaśnienie [N]

Walidacja wymagań sprawdza, czy opisane oczekiwania odpowiadają potrzebom interesariuszy. Czekanie z tym do wdrożenia przenosi ryzyko na moment, gdy poprawa może wymagać znacznej przeróbki. Zasada wymaga rozpoczęcia kontroli już w RE. Nie oznacza to, że każda hipoteza wymogu musi być od razu w pełni zatwierdzona, zanim wolno ją zapisać; oznacza, że nie należy uznawać niezwalidowanego zapisu za wystarczająco pewną podstawę realizacji potrzeby.

Trzy źródłowe pytania dotyczą porozumienia między interesariuszami, adekwatnego pokrycia ich oczekiwań i potrzeb oraz rozsądności założeń kontekstu. Podpis jednej osoby nie dowodzi dwóch pozostałych warunków. Poprawna składnia ani pełne pola formularza nie dowodzą dopasowania do potrzeb. Kontrola zapisu jest ważna, ale nie zastępuje walidacji adekwatności.

Hasło zasady jest mocne, lecz trzeba interpretować je w granicach jej argumentu o ograniczaniu ryzyka. Prototyp, przykład lub rozmowa mogą ujawnić różnicę oczekiwań jeszcze przed implementacją. Szczegółowe techniki i ich dobór należą do T28–T29; tu trzeba uzasadnić wczesną walidację i objąć trzy pytania, a nie zaprojektować pełny plan testów.

**PL/EN i status:** walidacja — validation; weryfikacja — verification: C-S06 s.32. „Zgoda”, „pokrycie potrzeb” i „założenia” to trzy aspekty kontroli zasady.

**Warunki i źródło CL-T07-06:** C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-06 — porównanie [N]

Oś odniesienia: potrzeby interesariuszy i realne założenia versus formalna poprawność zapisu. Obie kontrole mogą być potrzebne; pierwsza nie wynika automatycznie z drugiej.

**EX-KRY-T07-06 — przykład:** Wymaganie przewiduje odbiór paczki przez całą dobę. Walidacja ujawnia, że założenie o nocnej obsadzie punktu jest fałszywe; poprawny formularz tego nie wykrył.

**CE-KRY-T07-06 — kontrprzykład:** Uogólnienie „brak literówek oznacza zwalidowane wymaganie” obala poprawnie napisany zapis o całodobowej usłudze bez warunków jej zapewnienia.

### RP-T07-06 — retrieval [Q/R]

**[Q] Dlaczego walidacja zaczyna się w RE? Wyjaśnij trzy pytania kontrolne i odróżnij je od samej kontroli składni.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-06-rubryka-1 | Wczesna kontrola zmniejsza ryzyko odkrycia nieadekwatności dopiero po wdrożeniu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-06-rubryka-2 | Obejmuje porozumienie, adekwatne pokrycie potrzeb oraz rozsądne założenia kontekstu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-06-rubryka-3 | Poprawność zapisu nie dowodzi zgodności z potrzebą. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-06 — korekta i kontrola [N]

Sprawdź osobno zgodę ról, potrzebę i założenia. Nie używaj jednego podpisu lub testu składni jako dowodu całej walidacji. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-06-B01 / r1 — B / P

Redakcja [R]: primary KRY-T07-06 → EO2.2.2 L2; czynność tego itemu: L1 — rozpoznanie opublikowanych pojęć/listy; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru. Rodzina FAM-T07-06; Pełna trójka pytań walidacyjnych.. Użycie: practice, do review.

**[Q] Które TRZY pytania odpowiadają zasadzie walidacji?**

Wybierz dokładnie 3 odpowiedzi. Maksymalnie 3 pkt.

| Opcja | Treść |
| --- | --- |
| a | Czy założenia kontekstu są rozsądne? |
| b | Czy wybrano najdroższy edytor dokumentacji? |
| c | Czy z dokumentu usunięto wszystkie numerowane punkty? |
| d | Czy interesariusze osiągnęli porozumienie co do wymagań? |
| e | Czy wymagania adekwatnie pokrywają potrzeby interesariuszy? |

**[R] Klucz: a, d, e.** Przy n≤3 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-06-B01-a | wybrać | Realność założeń to trzeci aspekt → wybrać. |
| RAT-Z1-T07-06-B01-b | nie wybierać | Cena narzędzia nie jest wskazanym pytaniem walidacji → nie wybrać. |
| RAT-Z1-T07-06-B01-c | nie wybierać | Sposób numeracji nie potwierdza zgodności z potrzebami → nie wybrać. |
| RAT-Z1-T07-06-B01-d | wybrać | Zgoda/uzgodnienie to pierwszy aspekt → wybrać. |
| RAT-Z1-T07-06-B01-e | wybrać | Dopasowanie do potrzeb to drugi aspekt → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-06 oraz C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź osobno zgodę ról, potrzebę i założenia. Nie używaj jednego podpisu lub testu składni jako dowodu całej walidacji. Przejście do REG-KRY-T07-06 / CMP-KRY-T07-06 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-06-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-06 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-06; Sytuacja fałszywego założenia zamiast odtwarzania listy.. Użycie: practice, do review.

**[Q] Wymaganie ma poprawną formę, lecz zakłada całodobową pracę operatora, który jest dostępny tylko w dzień. Wyjaśnij potrzebę walidacji już podczas RE i wskaż trzy aspekty sprawdzenia.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-06-F01-rubryka-1 | Poprawność formy nie potwierdza realizowalności potrzeby w podanym kontekście; wcześniejsza kontrola ogranicza ryzyko przeróbki po wdrożeniu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-06-F01-rubryka-2 | Trzeba sprawdzić uzgodnienie ról i adekwatność wymagania wobec potrzeb. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-06-F01-rubryka-3 | Założenie obsady jest nierozsądne wobec danych; należy uzgodnić wymaganie lub warunki, bez twierdzenia, że podpis usuwa problem. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie poprawnej formy za wystarczającą walidację. Odpowiedź graniczna/równoważna: Można zaproponować zmianę zakresu usługi lub warunków obsady jako przykład; wybór rozwiązania nie jest wymagany.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-06 oraz C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź osobno zgodę ról, potrzebę i założenia. Nie używaj jednego podpisu lub testu składni jako dowodu całej walidacji. Przejście do REG-KRY-T07-06 / CMP-KRY-T07-06 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-06-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-06 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-06; Rozbieżność ról i niepewne założenie w pakiecie, zamiast jednego jawnie fałszywego założenia.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Sponsor zaakceptował wymaganie, użytkownicy odczytują potrzebę inaczej, a zapis opiera się na niepotwierdzonej dostępności zewnętrznej usługi. Wyjaśnij, dlaczego jeden podpis nie zamyka walidacji i kiedy należy wykonać tę pracę.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-06-D01-rubryka-1 | Porozumienie istotnych interesariuszy nie wynika z podpisu sponsora, skoro podano rozbieżność. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-06-D01-rubryka-2 | Adekwatność wobec potrzeb i rozsądność założenia o usłudze wymagają osobnego sprawdzenia. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-06-D01-rubryka-3 | Walidację trzeba podejmować już w RE, żeby ograniczyć ryzyko wykrycia problemu dopiero przy wdrożeniu; kontrola dokumentu nie zastępuje trzech aspektów. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie jednej formalnej akceptacji za dowód wszystkich aspektów. Odpowiedź graniczna/równoważna: Można pozostawić założenie jako niepotwierdzone; nie wymyślać dostępności usługi.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-06 oraz C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Sprawdź osobno zgodę ról, potrzebę i założenia. Nie używaj jednego podpisu lub testu składni jako dowodu całej walidacji. Przejście do REG-KRY-T07-06 / CMP-KRY-T07-06 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-06 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-06-B01 ↔ Z1-T07-06-F01 | Pełna trójka pytań walidacyjnych. → Sytuacja fałszywego założenia zamiast odtwarzania listy.; rdzeniem jest pr06 — walidacja | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-06-B01 ↔ Z1-T07-06-D01 | Pełna trójka pytań walidacyjnych. → Rozbieżność ról i niepewne założenie w pakiecie, zamiast jednego jawnie fałszywego założenia.; rdzeniem jest pr06 — walidacja | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-06-F01 ↔ Z1-T07-06-D01 | Sytuacja fałszywego założenia zamiast odtwarzania listy. → Rozbieżność ról i niepewne założenie w pakiecie, zamiast jednego jawnie fałszywego założenia.; rdzeniem jest pr06 — walidacja | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 7. PR07 — Ewolucja i stabilność — T07/PR07

**Cel i czynność:** Wskazuje różne przyczyny: biznes/procesy, konkurencja, priorytety klientów, technologia, przepisy, feedback; dopuszcza korektę błędów/walidację. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-07 — objaśnienie [N]

Wymagania zmieniają się, ponieważ zmieniają się potrzeby i warunki systemu. Źródłowe przykłady przyczyn obejmują procesy biznesowe, ofertę konkurencji, priorytety lub opinie klientów, technologię, przepisy oraz feedback użytkowników. Walidacja, wykrycie błędu w wymaganiu i zmienione potrzeby także mogą prowadzić do zmian. Nie każda zmiana dowodzi, że poprzednia praca RE była wadliwa; część jest reakcją na nową sytuację, część korektą wcześniejszego błędu.

Zasada prowadzi do pozornie sprzecznych celów: dopuszczać zmiany i utrzymywać stabilność wymagań. Bez możliwości dostosowania system traci dopasowanie do potrzeb, a bez pewnej stabilności trudno planować i rozwijać go w uporządkowany sposób. Stabilność nie oznacza niezmienności na zawsze. Dopuszczanie zmian nie oznacza przyjmowania każdej bez oceny i decyzji.

Ważność polega na świadomym zarządzaniu ewolucją, zamiast próby jej ignorowania lub chaotycznego reagowania. Szczegółowe mechanizmy zależą od procesu i są zakresem T37. W tym temacie potrzebne jest uzasadnienie obu celów oraz rozpoznanie źródeł zmiany; nie narzucamy jednej procedury CCB wszystkim organizacjom.

**PL/EN i status:** ewolucja — evolution; zmiana — change; stabilność — stability. Nazwy zasad z Syllabus; „stabilność” nie znaczy zamrożenia na zawsze.

**Warunki i źródło CL-T07-07:** C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-07 — porównanie [N]

Oś: otwartość na uzasadnioną zmianę versus zdolność oparcia prac na stabilnym zakresie. Nie są absolutnym albo–albo: kontrolowane decyzje pozwalają zachować oba cele w odpowiednim horyzoncie.

**EX-KRY-T07-07 — przykład:** Zmiana harmonogramu dostaw klienta ujawnia nową potrzebę anulowania. Organizacja ocenia jej wpływ i termin wprowadzenia, zachowując znany zakres bieżącego przyrostu.

**CE-KRY-T07-07 — kontrprzykład:** Uogólnienie „każda zmiana dowodzi błędu analityka” obala zmiana przepisów po uzgodnieniu poprawnych wcześniej wymagań. Uogólnienie „ewolucja = przyjmuj wszystko” obala sprzeczne żądania wymagające decyzji.

### RP-T07-07 — retrieval [Q/R]

**[Q] Podaj źródła zmian z zasady ewolucji i wyjaśnij, dlaczego RE jednocześnie dopuszcza zmianę i dba o stabilność.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-07-rubryka-1 | Wskazuje różne przyczyny: biznes/procesy, konkurencja, priorytety klientów, technologia, przepisy, feedback; dopuszcza korektę błędów/walidację. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-07-rubryka-2 | Wyjaśnia adaptację do potrzeb i potrzebę stabilnej podstawy realizacji, bez absolutnego zakazu albo automatycznej akceptacji zmian. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-07 — korekta i kontrola [N]

Najpierw ustal źródło zmiany, potem odróżnij możliwość jej rozważenia od automatycznej realizacji. Stabilna podstawa prac i ewolucja mogą współistnieć. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-07-B01 / r1 — B / K

Redakcja [R]: primary KRY-T07-07 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-07; Dwie strony zasady i źródła zmian.. Użycie: practice, do review.

**[Q] Oceń uzasadnienia dotyczące zmian wymagań.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Nowy produkt konkurenta lub zmiana priorytetu klienta mogą prowadzić do zmiany wymagań. |
| 2 | Zmiana po poprawnej walidacji zawsze dowodzi jej błędu. |
| 3 | RE ma dopuszczać zmiany i równocześnie dbać o stabilność. |
| 4 | Dopuszczenie zmiany oznacza obowiązek natychmiastowej realizacji każdego żądania. |

**[R] Klucz: Prawda, Fałsz, Prawda, Fałsz.** Każdy poprawny wiersz daje 1/2; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-07-B01-1 | Prawda | Obie przyczyny są wskazane w zasadzie → Prawda. |
| RAT-Z1-T07-07-B01-2 | Fałsz | Nowe potrzeby/warunki mogą pojawić się później → Fałsz. |
| RAT-Z1-T07-07-B01-3 | Prawda | To dwa źródłowe cele wymagające pogodzenia → Prawda. |
| RAT-Z1-T07-07-B01-4 | Fałsz | Możliwość ewolucji nie oznacza niekontrolowanej akceptacji → Fałsz. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-07 oraz C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw ustal źródło zmiany, potem odróżnij możliwość jej rozważenia od automatycznej realizacji. Stabilna podstawa prac i ewolucja mogą współistnieć. Przejście do REG-KRY-T07-07 / CMP-KRY-T07-07 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-07-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-07 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-07; Konkretny wybór polityki po zmianie procesu zamiast ogólnych tez.. Użycie: practice, do review.

**[Q] Proces obsługi zmienił się już po rozpoczęciu implementacji. Właściciel chce albo odrzucać wszystkie zmiany do końca projektu, albo przyjmować każdą natychmiast. Wyjaśnij, dlaczego obie skrajności są niepełne.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-07-F01-rubryka-1 | Zmiana procesu jest możliwym naturalnym źródłem nowych wymagań; blokada każdej zmiany może utrwalić niedopasowanie. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-07-F01-rubryka-2 | Natychmiastowa akceptacja wszystkiego usuwa stabilną podstawę prac i utrudnia uporządkowany rozwój. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-07-F01-rubryka-3 | Trzeba świadomie godzić dopuszczenie zmian i stabilność według procesu; bez obowiązku jednej uniwersalnej procedury. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie jednej skrajności za bezwyjątkową regułę ewolucji. Odpowiedź graniczna/równoważna: Nie trzeba ustalać konkretnego terminu wdrożenia zmiany.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-07 oraz C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw ustal źródło zmiany, potem odróżnij możliwość jej rozważenia od automatycznej realizacji. Stabilna podstawa prac i ewolucja mogą współistnieć. Przejście do REG-KRY-T07-07 / CMP-KRY-T07-07 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-07-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-07 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-07; Samodzielne odtworzenie pełnego katalogu i argumentu, bez podanej historii konkretnego projektu.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Wymień sześć przykładowych zewnętrznych źródeł zmian z §2.2/PR07 oraz wewnętrzne odkrycia, które też mogą powodować zmianę. Wyjaśnij na tej podstawie dwa cele zarządzania ewolucją.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-07-D01-rubryka-1 | Procesy biznesowe, konkurencja, priorytety/opinie klientów, technologia, przepisy, feedback użytkowników. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-07-D01-rubryka-2 | Walidacja, wykrycie wad i zmiana potrzeb mogą także zmienić wymagania; nie każda zmiana jest dowodem błędu, choć niektóre są korektą. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-07-D01-rubryka-3 | Dopuszczenie adaptacji i stabilność podstawy realizacji trzeba godzić; brak automatycznej akceptacji lub zakazu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Przypisanie wszystkich zmian wyłącznie niedostatecznej analizie. Odpowiedź graniczna/równoważna: Przyczyny można grupować we własnych słowach; wymagane jest zachowanie ich różnych sensów.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-07 oraz C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw ustal źródło zmiany, potem odróżnij możliwość jej rozważenia od automatycznej realizacji. Stabilna podstawa prac i ewolucja mogą współistnieć. Przejście do REG-KRY-T07-07 / CMP-KRY-T07-07 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-07 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-07-B01 ↔ Z1-T07-07-F01 | Dwie strony zasady i źródła zmian. → Konkretny wybór polityki po zmianie procesu zamiast ogólnych tez.; rdzeniem jest pr07 — ewolucja i stabilność | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-07-B01 ↔ Z1-T07-07-D01 | Dwie strony zasady i źródła zmian. → Samodzielne odtworzenie pełnego katalogu i argumentu, bez podanej historii konkretnego projektu.; rdzeniem jest pr07 — ewolucja i stabilność | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-07-F01 ↔ Z1-T07-07-D01 | Konkretny wybór polityki po zmianie procesu zamiast ogólnych tez. → Samodzielne odtworzenie pełnego katalogu i argumentu, bez podanej historii konkretnego projektu.; rdzeniem jest pr07 — ewolucja i stabilność | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 8. PR08 — Innowacja — T07/PR08

**Cel i czynność:** Innowacja ma poprawiać zaspokojenie potrzeb, a nie jedynie zwiększać liczbę funkcji lub nowość technologii. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-08 — objaśnienie [N]

RE nie ogranicza się do zapisu dokładnie tych rozwiązań, które interesariusze potrafią już wskazać. Rozumienie ich potrzeb może ujawnić sposób zaspokojenia lepszy niż oczekiwane obejście problemu. Innowacja może mieć małą skalę — nową użyteczną funkcję lub prostszą obsługę — albo dużą skalę, gdy rozważa się istotnie odmienny sposób działania. Sama nowość technologii lub liczba funkcji nie potwierdza korzyści.

Trzeba wyjść poza literalne propozycje i zbadać potrzebę, ale nie zastępować głosu interesariuszy przekonaniem „wiemy lepiej”. Pomysł rozwiązania wymaga sprawdzenia z potrzebami; zasada współdziała z walidacją i trójką problem–wymaganie–rozwiązanie. Użytkownik proszący o kolejne pole do ręcznego wpisania może potrzebować uniknąć pomyłek, co da się czasem osiągnąć przez usunięcie ponownego wprowadzania danych.

Ważność zasady polega na niewykorzystanej możliwości lepszego działania: bezrefleksyjne „więcej tego samego” może utrwalać problem. Innowacją nie musi być rewolucyjna architektura. Uzasadnione uproszczenie może dać wartość bez przyrostu funkcji. Zadania L2 wymagają wyjaśnienia mechanizmu i granic; nie żądają wynalezienia technologii ani dowodu popytu.

**PL/EN i status:** innowacja — innovation; mała/duża skala: objaśnienia z Syllabus; nie utożsamiać innowacji z dowolną nową technologią.

**Warunki i źródło CL-T07-08:** C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-08 — porównanie [N]

Oś: literalne żądanie rozwiązania versus potrzeba i lepszy sposób jej zaspokojenia. Dodatkowy formularz to jedna propozycja; usunięcie zbędnej czynności może lepiej realizować cel.

**EX-KRY-T07-08 — przykład:** Operator chce drugą kopię listy do kontroli. Analiza pokazuje, że chodzi o wychwycenie brakującego pola; prostszy sposób sprawdzenia przy wpisie może lepiej zaspokoić tę potrzebę.

**CE-KRY-T07-08 — kontrprzykład:** Uogólnienie „więcej funkcji oznacza innowację” obala dodanie kolejnej nieużywanej tabeli, która zwiększa trudność obsługi i nie odpowiada na potrzebę.

### RP-T07-08 — retrieval [Q/R]

**[Q] Wyjaśnij innowację w małej i dużej skali oraz granicę między wyjściem poza literalne życzenia a ignorowaniem interesariuszy.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-08-rubryka-1 | Innowacja ma poprawiać zaspokojenie potrzeb, a nie jedynie zwiększać liczbę funkcji lub nowość technologii. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-08-rubryka-2 | Dopuszcza użyteczne uproszczenie/małą funkcję i istotnie nowy sposób działania w dużej skali. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-08-rubryka-3 | Nowy pomysł trzeba sprawdzać z interesariuszami; nie zakładać, że ekspert zawsze wie lepiej. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-08 — korekta i kontrola [N]

Zapytaj, jaka potrzeba stoi za żądanym rozwiązaniem i czy inny sposób zaspokaja ją lepiej. Pomysł nadal wymaga walidacji, nie samej etykiety „innowacyjny”. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-08-B01 / r1 — B / A

Redakcja [R]: primary KRY-T07-08 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-08; Mała skala innowacji przez uproszczenie.. Użycie: practice, do review.

**[Q] Użytkownik prosi o trzeci ekran do ponownego przepisywania tych samych danych. Analiza potrzeby wskazuje, że chce uniknąć błędu uzgodnienia. Które działanie najlepiej oddaje zasadę innowacji?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Zignorować użytkownika, bo analityk zawsze wie lepiej. |
| b | Wybrać najnowszą technologię bez sprawdzenia celu. |
| c | Dodać ekran bez badania przyczyny, bo tylko literalna prośba jest wymaganiem. |
| d | Zbadać prostszy sposób uzgodnienia bez ponownego wpisu i zwalidować go z użytkownikiem. |

**[R] Klucz: d.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-08-B01-a | nie wybierać | Zasada nie znosi potrzeb i walidacji → nie wybrać. |
| RAT-Z1-T07-08-B01-b | nie wybierać | Nowość techniczna nie dowodzi poprawy → nie wybrać. |
| RAT-Z1-T07-08-B01-c | nie wybierać | Bezrefleksyjny zapis może utrwalać obejście zamiast potrzeby → nie wybrać. |
| RAT-Z1-T07-08-B01-d | wybrać | Lepsze zaspokojenie potrzeby może wymagać innego rozwiązania i kontroli → wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-08 oraz C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zapytaj, jaka potrzeba stoi za żądanym rozwiązaniem i czy inny sposób zaspokaja ją lepiej. Pomysł nadal wymaga walidacji, nie samej etykiety „innowacyjny”. Przejście do REG-KRY-T07-08 / CMP-KRY-T07-08 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-08-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-08 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-08; Kontrast małej i dużej skali, zamiast wyłącznie literalnego żądania.. Użycie: practice, do review.

**[Q] W firmie uznano, że innowacja wymaga dużej rewolucji technicznej. Analityk proponuje usunięcie zbędnego ręcznego kroku po zbadaniu potrzeby i pokazaniu użytkownikom wariantu. Wyjaśnij, czy to może realizować PR08.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-08-F01-rubryka-1 | Tak; użyteczne uproszczenie lub poprawa łatwości użycia mieści się w małej skali innowacji. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-08-F01-rubryka-2 | Wartość wynika z lepszego zaspokojenia potrzeby; sama nowość/rozmiar technologii nie jest kryterium. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-08-F01-rubryka-3 | Propozycja wymaga sprawdzenia z użytkownikami; duża skala także jest możliwa, lecz nie obowiązkowa. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Odrzucenie wartościowego uproszczenia wyłącznie z powodu braku nowej technologii. Odpowiedź graniczna/równoważna: Odpowiedź „może, po walidacji potrzeby” jest trafna; nie zakładać zmierzonej korzyści.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-08 oraz C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zapytaj, jaka potrzeba stoi za żądanym rozwiązaniem i czy inny sposób zaspokaja ją lepiej. Pomysł nadal wymaga walidacji, nie samej etykiety „innowacyjny”. Przejście do REG-KRY-T07-08 / CMP-KRY-T07-08 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-08-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-08 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-08; Porównanie dwóch skal i warunku wartości, bez gotowego przykładu obejścia.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Projekt może wybrać nową funkcję ułatwiającą pracę lub przeprojektować cały sposób świadczenia usługi. Wyjaśnij innowację obu skal, sens wyjścia poza życzenia i granicę, która chroni potrzeby interesariuszy.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-08-D01-rubryka-1 | Mała skala może poprawiać funkcję/łatwość pracy, duża badać radykalnie inny sposób realizacji usługi. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-08-D01-rubryka-2 | Nie ograniczamy się do literalnych propozycji; badamy potrzeby i możliwości ich lepszego zaspokojenia. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-08-D01-rubryka-3 | Nowość lub mnożenie funkcji nie wystarczają; pomysły waliduje się z potrzebami, bez założenia wyższości eksperta. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Przyjęcie technologicznej nowości za wystarczający dowód korzyści dla interesariusza. Odpowiedź graniczna/równoważna: Nie trzeba zaprojektować nowej usługi; oceniana jest argumentacja o zasadzie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-08 oraz C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Zapytaj, jaka potrzeba stoi za żądanym rozwiązaniem i czy inny sposób zaspokaja ją lepiej. Pomysł nadal wymaga walidacji, nie samej etykiety „innowacyjny”. Przejście do REG-KRY-T07-08 / CMP-KRY-T07-08 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-08 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-08-B01 ↔ Z1-T07-08-F01 | Mała skala innowacji przez uproszczenie. → Kontrast małej i dużej skali, zamiast wyłącznie literalnego żądania.; rdzeniem jest pr08 — innowacja | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-08-B01 ↔ Z1-T07-08-D01 | Mała skala innowacji przez uproszczenie. → Porównanie dwóch skal i warunku wartości, bez gotowego przykładu obejścia.; rdzeniem jest pr08 — innowacja | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-08-F01 ↔ Z1-T07-08-D01 | Kontrast małej i dużej skali, zamiast wyłącznie literalnego żądania. → Porównanie dwóch skal i warunku wartości, bez gotowego przykładu obejścia.; rdzeniem jest pr08 — innowacja | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 9. PR09 — Systematyczna i zdyscyplinowana praca — T07/PR09

**Cel i czynność:** Potrzebne są odpowiednie praktyki czterech zadań niezależnie od procesu wytwarzania. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T07-09 — objaśnienie [N]

Systematyczne i zdyscyplinowane RE wymaga odpowiednich procesów i praktyk pozyskiwania, dokumentowania, walidacji oraz zarządzania. Potrzeba ta występuje niezależnie od procesu wytwarzania, także gdy budowa systemu jest prowadzona doraźnie. Zwinność nie uzasadnia przypadkowego obchodzenia się z wymaganiami.

Nie istnieje jeden proces lub zestaw praktyk działający dobrze w każdej albo większości sytuacji. Dyscyplina oznacza świadome dopasowanie do problemu, kontekstu i środowiska: wybór potrzebnych praktyk oraz artefaktów, sprawdzenie ich celu i realizację przyjętego sposobu pracy. Kopiowanie procesu z udanego projektu bez refleksji nie staje się właściwe dlatego, że kiedyś zadziałał. Tak samo dopasowanie nie oznacza pominięcia walidacji bez rozważenia ryzyka.

Zasada jest ważna, ponieważ ogranicza przypadkowość i daje uzasadnioną, powtarzalną podstawę pracy, zachowując adekwatność do sytuacji. Nie nakazuje najcięższego formalizmu, jednej notacji ani jednego narzędzia. Zespół może pracować lekko i nadal systematycznie, jeżeli wie, jak rozpoznaje potrzeby, zapisuje i sprawdza istotne ustalenia oraz kontroluje zmiany. Szczegóły procesu należą do T30–T32; tutaj oceniamy wyjaśnienie, dlaczego dyscyplina i dostosowanie współistnieją.

**PL/EN i status:** systematyczna i zdyscyplinowana praca — systematic and disciplined work; dostosowanie — tailoring (kontrolowana nazwa projektowa).

**Warunki i źródło CL-T07-09:** C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T07-09 — porównanie [N]

Oś: świadomy dobór i konsekwentne wykonanie versus rutynowe kopiowanie lub chaos. Dostosowanie może zmieniać praktykę, a dyscyplina zachowuje cel, kryteria i odpowiedzialność.

**EX-KRY-T07-09 — przykład:** Mały zespół uzgadnia krótkie przykłady, zapisuje decyzje i regularnie waliduje je z właścicielem potrzeby. Mało dokumentów nie oznacza braku dyscypliny.

**CE-KRY-T07-09 — kontrprzykład:** Uogólnienie „dyscyplina = jeden szablon dla wszystkich projektów” obala dwa systemy o innym ryzyku i dostępności interesariuszy, wymagające uzasadnionych różnych praktyk.

### RP-T07-09 — retrieval [Q/R]

**[Q] Wyjaśnij, dlaczego systematyczność nie oznacza jednego procesu i dlaczego agile nie znosi potrzeby dyscypliny RE.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T07-09-rubryka-1 | Potrzebne są odpowiednie praktyki czterech zadań niezależnie od procesu wytwarzania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-09-rubryka-2 | Procesy/praktyki/artefakty dobiera się do problemu, kontekstu i środowiska; brak uniwersalnej recepty. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T07-09-rubryka-3 | Ponowne użycie wymaga refleksji; lekki sposób pracy może być zdyscyplinowany. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T07-09 — korekta i kontrola [N]

Pokaż cel wybranej praktyki i jej dopasowanie. Ani ciężki szablon, ani nazwa agile nie są samodzielnym dowodem właściwego RE. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T07-09-B01 / r1 — B / K

Redakcja [R]: primary KRY-T07-09 → EO2.2.2 L2; czynność tego itemu: L1 — rozpoznanie opublikowanych pojęć/listy; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru. Rodzina FAM-T07-09; Dostosowanie, reuse i niezależność od procesu.. Użycie: practice, do review.

**[Q] Oceń argumenty dotyczące systematycznego RE.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Zwinny proces wytwarzania usuwa potrzebę walidacji i zarządzania wymaganiami. |
| 2 | Praktyki trzeba dobrać do problemu, kontekstu i środowiska. |
| 3 | Proces sprawdzony wcześniej można zawsze kopiować bez refleksji. |
| 4 | Lekka dokumentacja może współistnieć z systematyczną pracą. |

**[R] Klucz: Fałsz, Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 1/2; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T07-09-B01-1 | Fałsz | Proces agile nie znosi głównych zadań RE → Fałsz. |
| RAT-Z1-T07-09-B01-2 | Prawda | To istota dostosowania w zasadzie → Prawda. |
| RAT-Z1-T07-09-B01-3 | Fałsz | Źródło wyraźnie wymaga refleksji nad reuse → Fałsz. |
| RAT-Z1-T07-09-B01-4 | Prawda | Dyscyplina nie oznacza maksymalnej objętości; ważny odpowiedni sposób pracy → Prawda. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-09 oraz C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Pokaż cel wybranej praktyki i jej dopasowanie. Ani ciężki szablon, ani nazwa agile nie są samodzielnym dowodem właściwego RE. Przejście do REG-KRY-T07-09 / CMP-KRY-T07-09 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-09-F01 / r1 — F / O

Redakcja [R]: primary KRY-T07-09 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-09; Refleksyjny reuse zamiast samej deklaracji agile.. Użycie: practice, do review.

**[Q] Dostawca proponuje w małym projekcie ten sam proces, którego użył dla znacznie większego systemu. Jedynym argumentem jest dawny sukces. Wyjaśnij, jak PR09 traktuje takie ponowne użycie i co wymaga oceny.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-09-F01-rubryka-1 | Dawny sukces nie wystarcza; trzeba rozważyć zgodność problemu, kontekstu, środowiska i procesu wytwarzania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-09-F01-rubryka-2 | Dobór praktyk i artefaktów powinien służyć pozyskiwaniu/dokumentowaniu/walidacji/zarządzaniu, bez jednego obowiązkowego zestawu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-09-F01-rubryka-3 | Dopuszczalne jest użycie części dawnego procesu po refleksji; nie trzeba wszystkiego odrzucać ani maksymalizować formalizmu. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Twierdzenie, że dawny sukces uzasadnia automatyczne kopiowanie w każdej sytuacji. Odpowiedź graniczna/równoważna: Można zachować dawną praktykę po uzasadnieniu dopasowania.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-09 oraz C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Pokaż cel wybranej praktyki i jej dopasowanie. Ani ciężki szablon, ani nazwa agile nie są samodzielnym dowodem właściwego RE. Przejście do REG-KRY-T07-09 / CMP-KRY-T07-09 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T07-09-D01 / r1 — D / O

Redakcja [R]: primary KRY-T07-09 → EO2.2.2 L2; czynność tego itemu: L2; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T07-09; Dwie odmienne sytuacje wymuszają wyjaśnienie obu skrajności i dopasowania.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Dwa zespoły mają różne ryzyka i dostępność interesariuszy. Jeden chce ciężkiego szablonu, drugi spontanicznych rozmów bez zapisu ani kontroli. Wyjaśnij zasadę systematycznej pracy, relację do agile i warunki uzasadnionego reuse.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T07-09-D01-rubryka-1 | Oba zespoły potrzebują odpowiednich praktyk głównych zadań RE; spontaniczność nie usuwa potrzeby sprawdzania i zarządzania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-09-D01-rubryka-2 | Nie ma jednego najlepszego procesu; dobór praktyk i artefaktów zależy od sytuacji, a ciężki szablon sam nie dowodzi adekwatności. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T07-09-D01-rubryka-3 | Agile nie jest wyjątkiem od dyscypliny; reuse dawnych praktyk wymaga refleksji nad dopasowaniem, a nie automatycznego skopiowania. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Uznanie ciężaru dokumentacji lub nazwy agile za wystarczający dowód poprawnego RE. Odpowiedź graniczna/równoważna: Wolno zaproponować inne sposoby pracy dla obu zespołów bez projektowania pełnego procesu.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T07-09 oraz C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Pokaż cel wybranej praktyki i jej dopasowanie. Ani ciężki szablon, ani nazwa agile nie są samodzielnym dowodem właściwego RE. Przejście do REG-KRY-T07-09 / CMP-KRY-T07-09 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T07-09 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T07-09-B01 ↔ Z1-T07-09-F01 | Dostosowanie, reuse i niezależność od procesu. → Refleksyjny reuse zamiast samej deklaracji agile.; rdzeniem jest pr09 — systematyczna i zdyscyplinowana praca | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-09-B01 ↔ Z1-T07-09-D01 | Dostosowanie, reuse i niezależność od procesu. → Dwie odmienne sytuacje wymuszają wyjaśnienie obu skrajności i dopasowania.; rdzeniem jest pr09 — systematyczna i zdyscyplinowana praca | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T07-09-F01 ↔ Z1-T07-09-D01 | Refleksyjny reuse zamiast samej deklaracji agile. → Dwie odmienne sytuacje wymuszają wyjaśnienie obu skrajności i dopasowania.; rdzeniem jest pr09 — systematyczna i zdyscyplinowana praca | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## Reuse, zależności i granice integracji

C-A zachowuje KRY-A01/r1, REG-A1, CMP-A, EX/CE/REM-A i C-A-B01/F01/D01/R01/S01. To wkład do PR04 o znaczeniu wpływu mimo braku zmiany, a nie pełne EO2.2.2. C-A-L301 i KRY-A02/r1 dotyczą części EO4.1.1 L3; pozostają materiałem do review właściciela T23, nie zostają przemianowane na pomiar dziewięciu zasad. Nowe KRY-T07-04/r1 ma szerszą granicę PR04; nie zastępuje ani nie rozszerza po cichu KRY-A01. Wierny aneks C-A obejmuje treść, rubryki, warianty i ograniczenia; cały C pozostaje nieprzyjęty w G2.


## Konkretne relacje, ekspozycja i powrót

Każdy koniec poniżej ma r1; źródła mają wersje rejestru na końcu. Każda instancja ma status „kontrola autorska 2.11.2026, odrębne review pending”. Relacje R02/R06 są interpretacją mapowania autora, R05/R08–R21 decyzją dydaktyczną uzasadnioną wskazaną regułą i czynnością; R15 wskazuje źródłową podstawę. Nie są automatycznie potwierdzone skutecznością.

| ID r1 | Typ | Końce i kierunek | Warunek / sens / funkcja / proweniencja |
| --- | --- | --- | --- |
| REL-T07-01-02 | R02 | KRY-T07-01 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-01-05-REG | R05 | REG-KRY-T07-01 → KRY-T07-01 | Materiał REG wspiera konkretną czynność KRY-T07-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-01-05-CMP | R05 | CMP-KRY-T07-01 → KRY-T07-01 | Materiał CMP wspiera konkretną czynność KRY-T07-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-01-05-EX | R05 | EX-KRY-T07-01 → KRY-T07-01 | Materiał EX wspiera konkretną czynność KRY-T07-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-01-05-CE | R05 | CE-KRY-T07-01 → KRY-T07-01 | Materiał CE wspiera konkretną czynność KRY-T07-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-01-05-REM | R05 | REM-KRY-T07-01 → KRY-T07-01 | Materiał REM wspiera konkretną czynność KRY-T07-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-01-10 | R10 | REG-KRY-T07-01 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-01-11 | R11 | CMP-KRY-T07-01 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-01-12 | R12 | EX-KRY-T07-01 → REG-KRY-T07-01 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-01-13 | R13 | CE-KRY-T07-01 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-01-15 | R15 | CL-T07-01 / REG-KRY-T07-01 → C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-01-18 | R18 | REM-KRY-T07-01 → KRY-T07-01 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-01-RP06 | R06 | RP-T07-01 → KRY-T07-01 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-01-B01-06 | R06 | Z1-T07-01-B01 → KRY-T07-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-01-B01-20 | R20 | Z1-T07-01-B01 → FAM-T07-01 | Zapamiętywalny rdzeń to rozróżnienie pr01 — orientacja na wartość; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-01-B01-a-08 | R08 | Z1-T07-01-B01/a → RAT-Z1-T07-01-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-B01-a-09 | R09 | RAT-Z1-T07-01-B01-a → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-B01-b-08 | R08 | Z1-T07-01-B01/b → RAT-Z1-T07-01-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-B01-b-09 | R09 | RAT-Z1-T07-01-B01-b → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-B01-c-08 | R08 | Z1-T07-01-B01/c → RAT-Z1-T07-01-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-B01-c-09 | R09 | RAT-Z1-T07-01-B01-c → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-B01-d-08 | R08 | Z1-T07-01-B01/d → RAT-Z1-T07-01-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-B01-d-09 | R09 | RAT-Z1-T07-01-B01-d → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-F01-06 | R06 | Z1-T07-01-F01 → KRY-T07-01 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-01-F01-20 | R20 | Z1-T07-01-F01 → FAM-T07-01 | Zapamiętywalny rdzeń to rozróżnienie pr01 — orientacja na wartość; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-01-F01-19 | R19 | Z1-T07-01-F01 → REM-KRY-T07-01 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-01-F01-rubryka-1-08 | R08 | Z1-T07-01-F01/rubryka-1 → RAT-Z1-T07-01-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-F01-rubryka-1-09 | R09 | RAT-Z1-T07-01-F01-rubryka-1 → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-F01-rubryka-2-08 | R08 | Z1-T07-01-F01/rubryka-2 → RAT-Z1-T07-01-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-F01-rubryka-2-09 | R09 | RAT-Z1-T07-01-F01-rubryka-2 → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-F01-rubryka-3-08 | R08 | Z1-T07-01-F01/rubryka-3 → RAT-Z1-T07-01-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-F01-rubryka-3-09 | R09 | RAT-Z1-T07-01-F01-rubryka-3 → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-D01-06 | R06 | Z1-T07-01-D01 → KRY-T07-01 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-01-D01-20 | R20 | Z1-T07-01-D01 → FAM-T07-01 | Zapamiętywalny rdzeń to rozróżnienie pr01 — orientacja na wartość; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-01-D01-rubryka-1-08 | R08 | Z1-T07-01-D01/rubryka-1 → RAT-Z1-T07-01-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-D01-rubryka-1-09 | R09 | RAT-Z1-T07-01-D01-rubryka-1 → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-D01-rubryka-2-08 | R08 | Z1-T07-01-D01/rubryka-2 → RAT-Z1-T07-01-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-D01-rubryka-2-09 | R09 | RAT-Z1-T07-01-D01-rubryka-2 → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-Z1-T07-01-D01-rubryka-3-08 | R08 | Z1-T07-01-D01/rubryka-3 → RAT-Z1-T07-01-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-01-D01-rubryka-3-09 | R09 | RAT-Z1-T07-01-D01-rubryka-3 → REG-KRY-T07-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-01. |
| REL-T07-02-02 | R02 | KRY-T07-02 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-02-05-REG | R05 | REG-KRY-T07-02 → KRY-T07-02 | Materiał REG wspiera konkretną czynność KRY-T07-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-02-05-CMP | R05 | CMP-KRY-T07-02 → KRY-T07-02 | Materiał CMP wspiera konkretną czynność KRY-T07-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-02-05-EX | R05 | EX-KRY-T07-02 → KRY-T07-02 | Materiał EX wspiera konkretną czynność KRY-T07-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-02-05-CE | R05 | CE-KRY-T07-02 → KRY-T07-02 | Materiał CE wspiera konkretną czynność KRY-T07-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-02-05-REM | R05 | REM-KRY-T07-02 → KRY-T07-02 | Materiał REM wspiera konkretną czynność KRY-T07-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-02-10 | R10 | REG-KRY-T07-02 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-02-11 | R11 | CMP-KRY-T07-02 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-02-12 | R12 | EX-KRY-T07-02 → REG-KRY-T07-02 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-02-13 | R13 | CE-KRY-T07-02 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-02-15 | R15 | CL-T07-02 / REG-KRY-T07-02 → C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-02-18 | R18 | REM-KRY-T07-02 → KRY-T07-02 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-02-RP06 | R06 | RP-T07-02 → KRY-T07-02 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-02-B01-06 | R06 | Z1-T07-02-B01 → KRY-T07-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-02-B01-20 | R20 | Z1-T07-02-B01 → FAM-T07-02 | Zapamiętywalny rdzeń to rozróżnienie pr02 — interesariusze; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-02-B01-a-08 | R08 | Z1-T07-02-B01/a → RAT-Z1-T07-02-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-B01-a-09 | R09 | RAT-Z1-T07-02-B01-a → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-B01-b-08 | R08 | Z1-T07-02-B01/b → RAT-Z1-T07-02-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-B01-b-09 | R09 | RAT-Z1-T07-02-B01-b → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-B01-c-08 | R08 | Z1-T07-02-B01/c → RAT-Z1-T07-02-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-B01-c-09 | R09 | RAT-Z1-T07-02-B01-c → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-B01-d-08 | R08 | Z1-T07-02-B01/d → RAT-Z1-T07-02-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-B01-d-09 | R09 | RAT-Z1-T07-02-B01-d → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-F01-06 | R06 | Z1-T07-02-F01 → KRY-T07-02 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-02-F01-20 | R20 | Z1-T07-02-F01 → FAM-T07-02 | Zapamiętywalny rdzeń to rozróżnienie pr02 — interesariusze; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-02-F01-19 | R19 | Z1-T07-02-F01 → REM-KRY-T07-02 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-02-F01-rubryka-1-08 | R08 | Z1-T07-02-F01/rubryka-1 → RAT-Z1-T07-02-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-F01-rubryka-1-09 | R09 | RAT-Z1-T07-02-F01-rubryka-1 → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-F01-rubryka-2-08 | R08 | Z1-T07-02-F01/rubryka-2 → RAT-Z1-T07-02-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-F01-rubryka-2-09 | R09 | RAT-Z1-T07-02-F01-rubryka-2 → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-F01-rubryka-3-08 | R08 | Z1-T07-02-F01/rubryka-3 → RAT-Z1-T07-02-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-F01-rubryka-3-09 | R09 | RAT-Z1-T07-02-F01-rubryka-3 → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-D01-06 | R06 | Z1-T07-02-D01 → KRY-T07-02 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-02-D01-20 | R20 | Z1-T07-02-D01 → FAM-T07-02 | Zapamiętywalny rdzeń to rozróżnienie pr02 — interesariusze; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-02-D01-rubryka-1-08 | R08 | Z1-T07-02-D01/rubryka-1 → RAT-Z1-T07-02-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-D01-rubryka-1-09 | R09 | RAT-Z1-T07-02-D01-rubryka-1 → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-D01-rubryka-2-08 | R08 | Z1-T07-02-D01/rubryka-2 → RAT-Z1-T07-02-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-D01-rubryka-2-09 | R09 | RAT-Z1-T07-02-D01-rubryka-2 → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-Z1-T07-02-D01-rubryka-3-08 | R08 | Z1-T07-02-D01/rubryka-3 → RAT-Z1-T07-02-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-02-D01-rubryka-3-09 | R09 | RAT-Z1-T07-02-D01-rubryka-3 → REG-KRY-T07-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-02. |
| REL-T07-03-02 | R02 | KRY-T07-03 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-03-05-REG | R05 | REG-KRY-T07-03 → KRY-T07-03 | Materiał REG wspiera konkretną czynność KRY-T07-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-03-05-CMP | R05 | CMP-KRY-T07-03 → KRY-T07-03 | Materiał CMP wspiera konkretną czynność KRY-T07-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-03-05-EX | R05 | EX-KRY-T07-03 → KRY-T07-03 | Materiał EX wspiera konkretną czynność KRY-T07-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-03-05-CE | R05 | CE-KRY-T07-03 → KRY-T07-03 | Materiał CE wspiera konkretną czynność KRY-T07-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-03-05-REM | R05 | REM-KRY-T07-03 → KRY-T07-03 | Materiał REM wspiera konkretną czynność KRY-T07-03; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-03-10 | R10 | REG-KRY-T07-03 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-03-11 | R11 | CMP-KRY-T07-03 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-03-12 | R12 | EX-KRY-T07-03 → REG-KRY-T07-03 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-03-13 | R13 | CE-KRY-T07-03 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-03-15 | R15 | CL-T07-03 / REG-KRY-T07-03 → C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-03-18 | R18 | REM-KRY-T07-03 → KRY-T07-03 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-03-RP06 | R06 | RP-T07-03 → KRY-T07-03 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-03-B01-06 | R06 | Z1-T07-03-B01 → KRY-T07-03 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-03-B01-20 | R20 | Z1-T07-03-B01 → FAM-T07-03 | Zapamiętywalny rdzeń to rozróżnienie pr03 — wspólne zrozumienie; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-03-B01-a-08 | R08 | Z1-T07-03-B01/a → RAT-Z1-T07-03-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-B01-a-09 | R09 | RAT-Z1-T07-03-B01-a → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-B01-b-08 | R08 | Z1-T07-03-B01/b → RAT-Z1-T07-03-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-B01-b-09 | R09 | RAT-Z1-T07-03-B01-b → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-B01-c-08 | R08 | Z1-T07-03-B01/c → RAT-Z1-T07-03-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-B01-c-09 | R09 | RAT-Z1-T07-03-B01-c → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-B01-d-08 | R08 | Z1-T07-03-B01/d → RAT-Z1-T07-03-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-B01-d-09 | R09 | RAT-Z1-T07-03-B01-d → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-F01-06 | R06 | Z1-T07-03-F01 → KRY-T07-03 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-03-F01-20 | R20 | Z1-T07-03-F01 → FAM-T07-03 | Zapamiętywalny rdzeń to rozróżnienie pr03 — wspólne zrozumienie; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-03-F01-19 | R19 | Z1-T07-03-F01 → REM-KRY-T07-03 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-03-F01-rubryka-1-08 | R08 | Z1-T07-03-F01/rubryka-1 → RAT-Z1-T07-03-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-F01-rubryka-1-09 | R09 | RAT-Z1-T07-03-F01-rubryka-1 → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-F01-rubryka-2-08 | R08 | Z1-T07-03-F01/rubryka-2 → RAT-Z1-T07-03-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-F01-rubryka-2-09 | R09 | RAT-Z1-T07-03-F01-rubryka-2 → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-F01-rubryka-3-08 | R08 | Z1-T07-03-F01/rubryka-3 → RAT-Z1-T07-03-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-F01-rubryka-3-09 | R09 | RAT-Z1-T07-03-F01-rubryka-3 → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-D01-06 | R06 | Z1-T07-03-D01 → KRY-T07-03 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-03-D01-20 | R20 | Z1-T07-03-D01 → FAM-T07-03 | Zapamiętywalny rdzeń to rozróżnienie pr03 — wspólne zrozumienie; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-03-D01-rubryka-1-08 | R08 | Z1-T07-03-D01/rubryka-1 → RAT-Z1-T07-03-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-D01-rubryka-1-09 | R09 | RAT-Z1-T07-03-D01-rubryka-1 → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-D01-rubryka-2-08 | R08 | Z1-T07-03-D01/rubryka-2 → RAT-Z1-T07-03-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-D01-rubryka-2-09 | R09 | RAT-Z1-T07-03-D01-rubryka-2 → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-Z1-T07-03-D01-rubryka-3-08 | R08 | Z1-T07-03-D01/rubryka-3 → RAT-Z1-T07-03-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-03-D01-rubryka-3-09 | R09 | RAT-Z1-T07-03-D01-rubryka-3 → REG-KRY-T07-03 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-03. |
| REL-T07-04-02 | R02 | KRY-T07-04 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-04-05-REG | R05 | REG-KRY-T07-04 → KRY-T07-04 | Materiał REG wspiera konkretną czynność KRY-T07-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-04-05-CMP | R05 | CMP-KRY-T07-04 → KRY-T07-04 | Materiał CMP wspiera konkretną czynność KRY-T07-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-04-05-EX | R05 | EX-KRY-T07-04 → KRY-T07-04 | Materiał EX wspiera konkretną czynność KRY-T07-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-04-05-CE | R05 | CE-KRY-T07-04 → KRY-T07-04 | Materiał CE wspiera konkretną czynność KRY-T07-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-04-05-REM | R05 | REM-KRY-T07-04 → KRY-T07-04 | Materiał REM wspiera konkretną czynność KRY-T07-04; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-04-10 | R10 | REG-KRY-T07-04 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-04-11 | R11 | CMP-KRY-T07-04 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-04-12 | R12 | EX-KRY-T07-04 → REG-KRY-T07-04 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-04-13 | R13 | CE-KRY-T07-04 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-04-15 | R15 | CL-T07-04 / REG-KRY-T07-04 → C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-04-18 | R18 | REM-KRY-T07-04 → KRY-T07-04 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-04-RP06 | R06 | RP-T07-04 → KRY-T07-04 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-04-B01-06 | R06 | Z1-T07-04-B01 → KRY-T07-04 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-04-B01-20 | R20 | Z1-T07-04-B01 → FAM-T07-04 | Zapamiętywalny rdzeń to rozróżnienie pr04 — kontekst: pełna granica zasady; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-04-B01-1-08 | R08 | Z1-T07-04-B01/1 → RAT-Z1-T07-04-B01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-B01-1-09 | R09 | RAT-Z1-T07-04-B01-1 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-B01-2-08 | R08 | Z1-T07-04-B01/2 → RAT-Z1-T07-04-B01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-B01-2-09 | R09 | RAT-Z1-T07-04-B01-2 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-B01-3-08 | R08 | Z1-T07-04-B01/3 → RAT-Z1-T07-04-B01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-B01-3-09 | R09 | RAT-Z1-T07-04-B01-3 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-B01-4-08 | R08 | Z1-T07-04-B01/4 → RAT-Z1-T07-04-B01-4 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-B01-4-09 | R09 | RAT-Z1-T07-04-B01-4 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-F01-06 | R06 | Z1-T07-04-F01 → KRY-T07-04 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-04-F01-20 | R20 | Z1-T07-04-F01 → FAM-T07-04 | Zapamiętywalny rdzeń to rozróżnienie pr04 — kontekst: pełna granica zasady; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-04-F01-19 | R19 | Z1-T07-04-F01 → REM-KRY-T07-04 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-04-F01-rubryka-1-08 | R08 | Z1-T07-04-F01/rubryka-1 → RAT-Z1-T07-04-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-F01-rubryka-1-09 | R09 | RAT-Z1-T07-04-F01-rubryka-1 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-F01-rubryka-2-08 | R08 | Z1-T07-04-F01/rubryka-2 → RAT-Z1-T07-04-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-F01-rubryka-2-09 | R09 | RAT-Z1-T07-04-F01-rubryka-2 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-F01-rubryka-3-08 | R08 | Z1-T07-04-F01/rubryka-3 → RAT-Z1-T07-04-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-F01-rubryka-3-09 | R09 | RAT-Z1-T07-04-F01-rubryka-3 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-D01-06 | R06 | Z1-T07-04-D01 → KRY-T07-04 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-04-D01-20 | R20 | Z1-T07-04-D01 → FAM-T07-04 | Zapamiętywalny rdzeń to rozróżnienie pr04 — kontekst: pełna granica zasady; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-04-D01-rubryka-1-08 | R08 | Z1-T07-04-D01/rubryka-1 → RAT-Z1-T07-04-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-D01-rubryka-1-09 | R09 | RAT-Z1-T07-04-D01-rubryka-1 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-D01-rubryka-2-08 | R08 | Z1-T07-04-D01/rubryka-2 → RAT-Z1-T07-04-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-D01-rubryka-2-09 | R09 | RAT-Z1-T07-04-D01-rubryka-2 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-Z1-T07-04-D01-rubryka-3-08 | R08 | Z1-T07-04-D01/rubryka-3 → RAT-Z1-T07-04-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-04-D01-rubryka-3-09 | R09 | RAT-Z1-T07-04-D01-rubryka-3 → REG-KRY-T07-04 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-04. |
| REL-T07-05-02 | R02 | KRY-T07-05 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-05-05-REG | R05 | REG-KRY-T07-05 → KRY-T07-05 | Materiał REG wspiera konkretną czynność KRY-T07-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-05-05-CMP | R05 | CMP-KRY-T07-05 → KRY-T07-05 | Materiał CMP wspiera konkretną czynność KRY-T07-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-05-05-EX | R05 | EX-KRY-T07-05 → KRY-T07-05 | Materiał EX wspiera konkretną czynność KRY-T07-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-05-05-CE | R05 | CE-KRY-T07-05 → KRY-T07-05 | Materiał CE wspiera konkretną czynność KRY-T07-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-05-05-REM | R05 | REM-KRY-T07-05 → KRY-T07-05 | Materiał REM wspiera konkretną czynność KRY-T07-05; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-05-10 | R10 | REG-KRY-T07-05 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-05-11 | R11 | CMP-KRY-T07-05 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-05-12 | R12 | EX-KRY-T07-05 → REG-KRY-T07-05 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-05-13 | R13 | CE-KRY-T07-05 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-05-15 | R15 | CL-T07-05 / REG-KRY-T07-05 → C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-05-18 | R18 | REM-KRY-T07-05 → KRY-T07-05 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-05-RP06 | R06 | RP-T07-05 → KRY-T07-05 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-05-B01-06 | R06 | Z1-T07-05-B01 → KRY-T07-05 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-05-B01-20 | R20 | Z1-T07-05-B01 → FAM-T07-05 | Zapamiętywalny rdzeń to rozróżnienie pr05 — problem–wymaganie–rozwiązanie; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-05-B01-a-08 | R08 | Z1-T07-05-B01/a → RAT-Z1-T07-05-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-B01-a-09 | R09 | RAT-Z1-T07-05-B01-a → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-B01-b-08 | R08 | Z1-T07-05-B01/b → RAT-Z1-T07-05-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-B01-b-09 | R09 | RAT-Z1-T07-05-B01-b → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-B01-c-08 | R08 | Z1-T07-05-B01/c → RAT-Z1-T07-05-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-B01-c-09 | R09 | RAT-Z1-T07-05-B01-c → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-B01-d-08 | R08 | Z1-T07-05-B01/d → RAT-Z1-T07-05-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-B01-d-09 | R09 | RAT-Z1-T07-05-B01-d → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-F01-06 | R06 | Z1-T07-05-F01 → KRY-T07-05 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-05-F01-20 | R20 | Z1-T07-05-F01 → FAM-T07-05 | Zapamiętywalny rdzeń to rozróżnienie pr05 — problem–wymaganie–rozwiązanie; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-05-F01-19 | R19 | Z1-T07-05-F01 → REM-KRY-T07-05 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-05-F01-rubryka-1-08 | R08 | Z1-T07-05-F01/rubryka-1 → RAT-Z1-T07-05-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-F01-rubryka-1-09 | R09 | RAT-Z1-T07-05-F01-rubryka-1 → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-F01-rubryka-2-08 | R08 | Z1-T07-05-F01/rubryka-2 → RAT-Z1-T07-05-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-F01-rubryka-2-09 | R09 | RAT-Z1-T07-05-F01-rubryka-2 → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-F01-rubryka-3-08 | R08 | Z1-T07-05-F01/rubryka-3 → RAT-Z1-T07-05-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-F01-rubryka-3-09 | R09 | RAT-Z1-T07-05-F01-rubryka-3 → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-D01-06 | R06 | Z1-T07-05-D01 → KRY-T07-05 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-05-D01-20 | R20 | Z1-T07-05-D01 → FAM-T07-05 | Zapamiętywalny rdzeń to rozróżnienie pr05 — problem–wymaganie–rozwiązanie; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-05-D01-rubryka-1-08 | R08 | Z1-T07-05-D01/rubryka-1 → RAT-Z1-T07-05-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-D01-rubryka-1-09 | R09 | RAT-Z1-T07-05-D01-rubryka-1 → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-D01-rubryka-2-08 | R08 | Z1-T07-05-D01/rubryka-2 → RAT-Z1-T07-05-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-D01-rubryka-2-09 | R09 | RAT-Z1-T07-05-D01-rubryka-2 → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-Z1-T07-05-D01-rubryka-3-08 | R08 | Z1-T07-05-D01/rubryka-3 → RAT-Z1-T07-05-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-05-D01-rubryka-3-09 | R09 | RAT-Z1-T07-05-D01-rubryka-3 → REG-KRY-T07-05 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-05. |
| REL-T07-06-02 | R02 | KRY-T07-06 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-06-05-REG | R05 | REG-KRY-T07-06 → KRY-T07-06 | Materiał REG wspiera konkretną czynność KRY-T07-06; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-06-05-CMP | R05 | CMP-KRY-T07-06 → KRY-T07-06 | Materiał CMP wspiera konkretną czynność KRY-T07-06; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-06-05-EX | R05 | EX-KRY-T07-06 → KRY-T07-06 | Materiał EX wspiera konkretną czynność KRY-T07-06; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-06-05-CE | R05 | CE-KRY-T07-06 → KRY-T07-06 | Materiał CE wspiera konkretną czynność KRY-T07-06; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-06-05-REM | R05 | REM-KRY-T07-06 → KRY-T07-06 | Materiał REM wspiera konkretną czynność KRY-T07-06; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-06-10 | R10 | REG-KRY-T07-06 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-06-11 | R11 | CMP-KRY-T07-06 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-06-12 | R12 | EX-KRY-T07-06 → REG-KRY-T07-06 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-06-13 | R13 | CE-KRY-T07-06 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-06-15 | R15 | CL-T07-06 / REG-KRY-T07-06 → C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-06-18 | R18 | REM-KRY-T07-06 → KRY-T07-06 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-06-RP06 | R06 | RP-T07-06 → KRY-T07-06 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-06-B01-06 | R06 | Z1-T07-06-B01 → KRY-T07-06 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-06-B01-20 | R20 | Z1-T07-06-B01 → FAM-T07-06 | Zapamiętywalny rdzeń to rozróżnienie pr06 — walidacja; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-06-B01-a-08 | R08 | Z1-T07-06-B01/a → RAT-Z1-T07-06-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-B01-a-09 | R09 | RAT-Z1-T07-06-B01-a → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-B01-b-08 | R08 | Z1-T07-06-B01/b → RAT-Z1-T07-06-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-B01-b-09 | R09 | RAT-Z1-T07-06-B01-b → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-B01-c-08 | R08 | Z1-T07-06-B01/c → RAT-Z1-T07-06-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-B01-c-09 | R09 | RAT-Z1-T07-06-B01-c → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-B01-d-08 | R08 | Z1-T07-06-B01/d → RAT-Z1-T07-06-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-B01-d-09 | R09 | RAT-Z1-T07-06-B01-d → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-B01-e-08 | R08 | Z1-T07-06-B01/e → RAT-Z1-T07-06-B01-e | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-B01-e-09 | R09 | RAT-Z1-T07-06-B01-e → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-F01-06 | R06 | Z1-T07-06-F01 → KRY-T07-06 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-06-F01-20 | R20 | Z1-T07-06-F01 → FAM-T07-06 | Zapamiętywalny rdzeń to rozróżnienie pr06 — walidacja; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-06-F01-19 | R19 | Z1-T07-06-F01 → REM-KRY-T07-06 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-06-F01-rubryka-1-08 | R08 | Z1-T07-06-F01/rubryka-1 → RAT-Z1-T07-06-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-F01-rubryka-1-09 | R09 | RAT-Z1-T07-06-F01-rubryka-1 → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-F01-rubryka-2-08 | R08 | Z1-T07-06-F01/rubryka-2 → RAT-Z1-T07-06-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-F01-rubryka-2-09 | R09 | RAT-Z1-T07-06-F01-rubryka-2 → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-F01-rubryka-3-08 | R08 | Z1-T07-06-F01/rubryka-3 → RAT-Z1-T07-06-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-F01-rubryka-3-09 | R09 | RAT-Z1-T07-06-F01-rubryka-3 → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-D01-06 | R06 | Z1-T07-06-D01 → KRY-T07-06 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-06-D01-20 | R20 | Z1-T07-06-D01 → FAM-T07-06 | Zapamiętywalny rdzeń to rozróżnienie pr06 — walidacja; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-06-D01-rubryka-1-08 | R08 | Z1-T07-06-D01/rubryka-1 → RAT-Z1-T07-06-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-D01-rubryka-1-09 | R09 | RAT-Z1-T07-06-D01-rubryka-1 → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-D01-rubryka-2-08 | R08 | Z1-T07-06-D01/rubryka-2 → RAT-Z1-T07-06-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-D01-rubryka-2-09 | R09 | RAT-Z1-T07-06-D01-rubryka-2 → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-Z1-T07-06-D01-rubryka-3-08 | R08 | Z1-T07-06-D01/rubryka-3 → RAT-Z1-T07-06-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-06-D01-rubryka-3-09 | R09 | RAT-Z1-T07-06-D01-rubryka-3 → REG-KRY-T07-06 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-06. |
| REL-T07-07-02 | R02 | KRY-T07-07 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-07-05-REG | R05 | REG-KRY-T07-07 → KRY-T07-07 | Materiał REG wspiera konkretną czynność KRY-T07-07; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-07-05-CMP | R05 | CMP-KRY-T07-07 → KRY-T07-07 | Materiał CMP wspiera konkretną czynność KRY-T07-07; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-07-05-EX | R05 | EX-KRY-T07-07 → KRY-T07-07 | Materiał EX wspiera konkretną czynność KRY-T07-07; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-07-05-CE | R05 | CE-KRY-T07-07 → KRY-T07-07 | Materiał CE wspiera konkretną czynność KRY-T07-07; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-07-05-REM | R05 | REM-KRY-T07-07 → KRY-T07-07 | Materiał REM wspiera konkretną czynność KRY-T07-07; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-07-10 | R10 | REG-KRY-T07-07 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-07-11 | R11 | CMP-KRY-T07-07 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-07-12 | R12 | EX-KRY-T07-07 → REG-KRY-T07-07 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-07-13 | R13 | CE-KRY-T07-07 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-07-15 | R15 | CL-T07-07 / REG-KRY-T07-07 → C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-07-18 | R18 | REM-KRY-T07-07 → KRY-T07-07 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-07-RP06 | R06 | RP-T07-07 → KRY-T07-07 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-07-B01-06 | R06 | Z1-T07-07-B01 → KRY-T07-07 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-07-B01-20 | R20 | Z1-T07-07-B01 → FAM-T07-07 | Zapamiętywalny rdzeń to rozróżnienie pr07 — ewolucja i stabilność; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-07-B01-1-08 | R08 | Z1-T07-07-B01/1 → RAT-Z1-T07-07-B01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-B01-1-09 | R09 | RAT-Z1-T07-07-B01-1 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-B01-2-08 | R08 | Z1-T07-07-B01/2 → RAT-Z1-T07-07-B01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-B01-2-09 | R09 | RAT-Z1-T07-07-B01-2 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-B01-3-08 | R08 | Z1-T07-07-B01/3 → RAT-Z1-T07-07-B01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-B01-3-09 | R09 | RAT-Z1-T07-07-B01-3 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-B01-4-08 | R08 | Z1-T07-07-B01/4 → RAT-Z1-T07-07-B01-4 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-B01-4-09 | R09 | RAT-Z1-T07-07-B01-4 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-F01-06 | R06 | Z1-T07-07-F01 → KRY-T07-07 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-07-F01-20 | R20 | Z1-T07-07-F01 → FAM-T07-07 | Zapamiętywalny rdzeń to rozróżnienie pr07 — ewolucja i stabilność; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-07-F01-19 | R19 | Z1-T07-07-F01 → REM-KRY-T07-07 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-07-F01-rubryka-1-08 | R08 | Z1-T07-07-F01/rubryka-1 → RAT-Z1-T07-07-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-F01-rubryka-1-09 | R09 | RAT-Z1-T07-07-F01-rubryka-1 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-F01-rubryka-2-08 | R08 | Z1-T07-07-F01/rubryka-2 → RAT-Z1-T07-07-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-F01-rubryka-2-09 | R09 | RAT-Z1-T07-07-F01-rubryka-2 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-F01-rubryka-3-08 | R08 | Z1-T07-07-F01/rubryka-3 → RAT-Z1-T07-07-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-F01-rubryka-3-09 | R09 | RAT-Z1-T07-07-F01-rubryka-3 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-D01-06 | R06 | Z1-T07-07-D01 → KRY-T07-07 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-07-D01-20 | R20 | Z1-T07-07-D01 → FAM-T07-07 | Zapamiętywalny rdzeń to rozróżnienie pr07 — ewolucja i stabilność; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-07-D01-rubryka-1-08 | R08 | Z1-T07-07-D01/rubryka-1 → RAT-Z1-T07-07-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-D01-rubryka-1-09 | R09 | RAT-Z1-T07-07-D01-rubryka-1 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-D01-rubryka-2-08 | R08 | Z1-T07-07-D01/rubryka-2 → RAT-Z1-T07-07-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-D01-rubryka-2-09 | R09 | RAT-Z1-T07-07-D01-rubryka-2 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-Z1-T07-07-D01-rubryka-3-08 | R08 | Z1-T07-07-D01/rubryka-3 → RAT-Z1-T07-07-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-07-D01-rubryka-3-09 | R09 | RAT-Z1-T07-07-D01-rubryka-3 → REG-KRY-T07-07 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-07. |
| REL-T07-08-02 | R02 | KRY-T07-08 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-08-05-REG | R05 | REG-KRY-T07-08 → KRY-T07-08 | Materiał REG wspiera konkretną czynność KRY-T07-08; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-08-05-CMP | R05 | CMP-KRY-T07-08 → KRY-T07-08 | Materiał CMP wspiera konkretną czynność KRY-T07-08; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-08-05-EX | R05 | EX-KRY-T07-08 → KRY-T07-08 | Materiał EX wspiera konkretną czynność KRY-T07-08; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-08-05-CE | R05 | CE-KRY-T07-08 → KRY-T07-08 | Materiał CE wspiera konkretną czynność KRY-T07-08; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-08-05-REM | R05 | REM-KRY-T07-08 → KRY-T07-08 | Materiał REM wspiera konkretną czynność KRY-T07-08; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-08-10 | R10 | REG-KRY-T07-08 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-08-11 | R11 | CMP-KRY-T07-08 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-08-12 | R12 | EX-KRY-T07-08 → REG-KRY-T07-08 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-08-13 | R13 | CE-KRY-T07-08 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-08-15 | R15 | CL-T07-08 / REG-KRY-T07-08 → C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-08-18 | R18 | REM-KRY-T07-08 → KRY-T07-08 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-08-RP06 | R06 | RP-T07-08 → KRY-T07-08 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-08-B01-06 | R06 | Z1-T07-08-B01 → KRY-T07-08 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-08-B01-20 | R20 | Z1-T07-08-B01 → FAM-T07-08 | Zapamiętywalny rdzeń to rozróżnienie pr08 — innowacja; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-08-B01-a-08 | R08 | Z1-T07-08-B01/a → RAT-Z1-T07-08-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-B01-a-09 | R09 | RAT-Z1-T07-08-B01-a → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-B01-b-08 | R08 | Z1-T07-08-B01/b → RAT-Z1-T07-08-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-B01-b-09 | R09 | RAT-Z1-T07-08-B01-b → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-B01-c-08 | R08 | Z1-T07-08-B01/c → RAT-Z1-T07-08-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-B01-c-09 | R09 | RAT-Z1-T07-08-B01-c → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-B01-d-08 | R08 | Z1-T07-08-B01/d → RAT-Z1-T07-08-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-B01-d-09 | R09 | RAT-Z1-T07-08-B01-d → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-F01-06 | R06 | Z1-T07-08-F01 → KRY-T07-08 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-08-F01-20 | R20 | Z1-T07-08-F01 → FAM-T07-08 | Zapamiętywalny rdzeń to rozróżnienie pr08 — innowacja; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-08-F01-19 | R19 | Z1-T07-08-F01 → REM-KRY-T07-08 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-08-F01-rubryka-1-08 | R08 | Z1-T07-08-F01/rubryka-1 → RAT-Z1-T07-08-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-F01-rubryka-1-09 | R09 | RAT-Z1-T07-08-F01-rubryka-1 → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-F01-rubryka-2-08 | R08 | Z1-T07-08-F01/rubryka-2 → RAT-Z1-T07-08-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-F01-rubryka-2-09 | R09 | RAT-Z1-T07-08-F01-rubryka-2 → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-F01-rubryka-3-08 | R08 | Z1-T07-08-F01/rubryka-3 → RAT-Z1-T07-08-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-F01-rubryka-3-09 | R09 | RAT-Z1-T07-08-F01-rubryka-3 → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-D01-06 | R06 | Z1-T07-08-D01 → KRY-T07-08 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-08-D01-20 | R20 | Z1-T07-08-D01 → FAM-T07-08 | Zapamiętywalny rdzeń to rozróżnienie pr08 — innowacja; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-08-D01-rubryka-1-08 | R08 | Z1-T07-08-D01/rubryka-1 → RAT-Z1-T07-08-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-D01-rubryka-1-09 | R09 | RAT-Z1-T07-08-D01-rubryka-1 → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-D01-rubryka-2-08 | R08 | Z1-T07-08-D01/rubryka-2 → RAT-Z1-T07-08-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-D01-rubryka-2-09 | R09 | RAT-Z1-T07-08-D01-rubryka-2 → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-Z1-T07-08-D01-rubryka-3-08 | R08 | Z1-T07-08-D01/rubryka-3 → RAT-Z1-T07-08-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-08-D01-rubryka-3-09 | R09 | RAT-Z1-T07-08-D01-rubryka-3 → REG-KRY-T07-08 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-08. |
| REL-T07-09-02 | R02 | KRY-T07-09 → EO2.2.2 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L2; nie cały zakres sąsiadów. |
| REL-T07-09-05-REG | R05 | REG-KRY-T07-09 → KRY-T07-09 | Materiał REG wspiera konkretną czynność KRY-T07-09; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-09-05-CMP | R05 | CMP-KRY-T07-09 → KRY-T07-09 | Materiał CMP wspiera konkretną czynność KRY-T07-09; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-09-05-EX | R05 | EX-KRY-T07-09 → KRY-T07-09 | Materiał EX wspiera konkretną czynność KRY-T07-09; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-09-05-CE | R05 | CE-KRY-T07-09 → KRY-T07-09 | Materiał CE wspiera konkretną czynność KRY-T07-09; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-09-05-REM | R05 | REM-KRY-T07-09 → KRY-T07-09 | Materiał REM wspiera konkretną czynność KRY-T07-09; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T07-09-10 | R10 | REG-KRY-T07-09 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T07-09-11 | R11 | CMP-KRY-T07-09 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T07-09-12 | R12 | EX-KRY-T07-09 → REG-KRY-T07-09 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T07-09-13 | R13 | CE-KRY-T07-09 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T07-09-15 | R15 | CL-T07-09 / REG-KRY-T07-09 → C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T07-09-18 | R18 | REM-KRY-T07-09 → KRY-T07-09 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T07-09-RP06 | R06 | RP-T07-09 → KRY-T07-09 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T07-09-B01-06 | R06 | Z1-T07-09-B01 → KRY-T07-09 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; mierzy tylko rozpoznanie składnika L1 wewnątrz szerszego kryterium L2; uzasadnienie i ważność zasady wymagają osobnego F/D/RP z rubryką, bez awansu z samego wyboru; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-09-B01-20 | R20 | Z1-T07-09-B01 → FAM-T07-09 | Zapamiętywalny rdzeń to rozróżnienie pr09 — systematyczna i zdyscyplinowana praca; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-09-B01-1-08 | R08 | Z1-T07-09-B01/1 → RAT-Z1-T07-09-B01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-B01-1-09 | R09 | RAT-Z1-T07-09-B01-1 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-B01-2-08 | R08 | Z1-T07-09-B01/2 → RAT-Z1-T07-09-B01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-B01-2-09 | R09 | RAT-Z1-T07-09-B01-2 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-B01-3-08 | R08 | Z1-T07-09-B01/3 → RAT-Z1-T07-09-B01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-B01-3-09 | R09 | RAT-Z1-T07-09-B01-3 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-B01-4-08 | R08 | Z1-T07-09-B01/4 → RAT-Z1-T07-09-B01-4 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-B01-4-09 | R09 | RAT-Z1-T07-09-B01-4 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-F01-06 | R06 | Z1-T07-09-F01 → KRY-T07-09 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-09-F01-20 | R20 | Z1-T07-09-F01 → FAM-T07-09 | Zapamiętywalny rdzeń to rozróżnienie pr09 — systematyczna i zdyscyplinowana praca; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-09-F01-19 | R19 | Z1-T07-09-F01 → REM-KRY-T07-09 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T07-09-F01-rubryka-1-08 | R08 | Z1-T07-09-F01/rubryka-1 → RAT-Z1-T07-09-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-F01-rubryka-1-09 | R09 | RAT-Z1-T07-09-F01-rubryka-1 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-F01-rubryka-2-08 | R08 | Z1-T07-09-F01/rubryka-2 → RAT-Z1-T07-09-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-F01-rubryka-2-09 | R09 | RAT-Z1-T07-09-F01-rubryka-2 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-F01-rubryka-3-08 | R08 | Z1-T07-09-F01/rubryka-3 → RAT-Z1-T07-09-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-F01-rubryka-3-09 | R09 | RAT-Z1-T07-09-F01-rubryka-3 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-D01-06 | R06 | Z1-T07-09-D01 → KRY-T07-09 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T07-09-D01-20 | R20 | Z1-T07-09-D01 → FAM-T07-09 | Zapamiętywalny rdzeń to rozróżnienie pr09 — systematyczna i zdyscyplinowana praca; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T07-09-D01-rubryka-1-08 | R08 | Z1-T07-09-D01/rubryka-1 → RAT-Z1-T07-09-D01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-D01-rubryka-1-09 | R09 | RAT-Z1-T07-09-D01-rubryka-1 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-D01-rubryka-2-08 | R08 | Z1-T07-09-D01/rubryka-2 → RAT-Z1-T07-09-D01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-D01-rubryka-2-09 | R09 | RAT-Z1-T07-09-D01-rubryka-2 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |
| REL-Z1-T07-09-D01-rubryka-3-08 | R08 | Z1-T07-09-D01/rubryka-3 → RAT-Z1-T07-09-D01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T07-09-D01-rubryka-3-09 | R09 | RAT-Z1-T07-09-D01-rubryka-3 → REG-KRY-T07-09 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T07-09. |

Nie wymusza się nowego R14. Gdy brak terminu uniemożliwia konkretną czynność, proponowany krótki powrót do definicji można pominąć po wykazaniu znajomości. Nie trzeba ukończyć całego poprzedniego T. R03: oficjalne terminy PL/EN w tabelach/nocie oznaczają wskazany sens; autorskie aliasy jawnie oznaczono. Nie tworzono przekładów zadań EN (brak R22) ani R25 z projektu zadania. Kontekst scenariusza, np. logistyka czy wypożyczenia, ma tylko R07 MENTIONS, bez pomiaru biegłości domenowej.

**R26 — kontrakt instancji przy rzeczywistym odejściu:** Navigation Context wskazuje dokładny ID/r1 źródłowego B/F/D/RP, opcję/wiersz lub część rubryki, oddaną odpowiedź, wynik, stan ujawnienia, miejsce sesji i kotwicę. Powrót odtwarza ten sam stan; FU ma własne wykonanie. Nie ma tutaj fikcyjnego zdarzenia odejścia. Wycofany item pozostaje oznaczoną historią.

| Fragment | Zakres istotnego kontaktu | Ekspozycja / ograniczenie |
| --- | --- | --- |
| REG/CMP/EX/CE/REM-KRY-T07-01 | KRY-T07-01 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-02 | KRY-T07-02 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-03 | KRY-T07-03 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-04 | KRY-T07-04 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-05 | KRY-T07-05 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-06 | KRY-T07-06 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-07 | KRY-T07-07 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-08 | KRY-T07-08 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T07-09 | KRY-T07-09 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| Z1-T07-01-B01 | KRY-T07-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-01-F01 | KRY-T07-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-01-D01 | KRY-T07-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-02-B01 | KRY-T07-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-02-F01 | KRY-T07-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-02-D01 | KRY-T07-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-03-B01 | KRY-T07-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-03-F01 | KRY-T07-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-03-D01 | KRY-T07-03 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-04-B01 | KRY-T07-04 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-04-F01 | KRY-T07-04 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-04-D01 | KRY-T07-04 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-05-B01 | KRY-T07-05 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-05-F01 | KRY-T07-05 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-05-D01 | KRY-T07-05 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-06-B01 | KRY-T07-06 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-06-F01 | KRY-T07-06 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-06-D01 | KRY-T07-06 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-07-B01 | KRY-T07-07 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-07-F01 | KRY-T07-07 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-07-D01 | KRY-T07-07 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-08-B01 | KRY-T07-08 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-08-F01 | KRY-T07-08 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-08-D01 | KRY-T07-08 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-09-B01 | KRY-T07-09 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-09-F01 | KRY-T07-09 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T07-09-D01 | KRY-T07-09 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |

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

## Aneks — wierny wkład C-A z C03 v0.2 / r1

Poniżej zachowano oryginalne ID, treść i ograniczenia. Cytowany materiał jest własnym materiałem projektu dostarczonym w Sources. Nie jest poprawką C ani nową akceptacją. Różnica stylu i starsze ograniczenia są historyczne. KRY-A02/C-A-L301 pozostają wkładem L3 do T23.

## C03-A — LU-C-A: wpływ otoczenia a granice

### A1. Wprowadzenie i wiedza [N]

**Cel:** wyjaśnić, dlaczego element zewnętrzny może być konieczny w analizie wymagań, chociaż nie wolno go zmienić. Przygotowuje to do wyznaczania granic, ale wybór A nie zastępuje samodzielnego wykonania L3.

**Terminy:** system boundary — granica systemu; system context — kontekst systemu; context boundary — granica kontekstu; scope — zakres wytwarzania. Sensy T-01–05 w C02.

**REG-A1 — krótki rdzeń:** najpierw nazwij analizowany system. Następnie sprawdź, jakie zewnętrzne zależności lub warunki mają znaczenie dla jego wymagań. To, czy projekt może je zmienić, jest odrębnym pytaniem. Źródło: S-A1.

**Rozwinięcie:** aplikacja może otrzymywać dane, podlegać regule organizacyjnej albo działać przy określonym zachowaniu ludzi i urządzeń. Pominięcie takiego wpływu może zostawić wymagania bez potrzebnego warunku. Nie każdy obiekt w firmie należy jednak do istotnego kontekstu. Potrzebne jest uzasadnienie znaczenia w przyjętej perspektywie. Wnioski trzeba ponownie ocenić po zmianie zakresu analizowanego systemu lub wiedzy o otoczeniu. Źródła S-A1/S-A2; własne objaśnienie.

**CMP-A — wspólna oś: rola elementu względem analizowanego systemu i swoboda zmiany.**

| Pytanie | Co ustala | Przykład rozstrzygający |
|---|---|---|
| Co jest częścią analizowanej całości? | Granicę systemu | Własny moduł obliczeń w zadanej całości pozostaje wewnątrz |
| Co poza nią ma znaczenie dla wymagań? | Istotny kontekst i jego granicę | Zewnętrzny harmonogram pracy obsługi może ograniczać terminy działania |
| Co wolno kształtować w przedsięwzięciu? | Scope | Moduł wewnętrzny może być niezmieniany, a zewnętrzna procedura — przeprojektowana |

**EX-A:** aplikacja archiwum ma wskazywać materiały dopuszczone do publikacji. Oddzielna umowa z deponentem zabrania publikacji określonych skanów. Umowa jest poza aplikacją, lecz wpływa na regułę udostępniania. Własna aplikacja pozostaje przedmiotem analizy; nie tworzymy osobnego Concept dla każdej umowy.

**CE-A:** obala „ten sam właściciel wystarcza do istotności”. Archiwum posiada też system sterowania podlewaniem roślin. W opisanej sytuacji nie wpływa on na aplikację ani jej wymagania; wspólny właściciel nie czyni go istotnym kontekstem. Źródło poprawnej reguły S-A1; sytuacje autorskie.

**PRE-A — opcjonalna podstawa:** ustalenie, co w tym zadaniu nazywamy systemem. Jest konieczne do zaklasyfikowania elementu względem granicy, bo bez perspektywy ten sam komponent może być wewnętrzny albo zewnętrzny. Sygnał braku: odpowiedź zmienia przedmiot analizy bez uzasadnienia. Krótka pomoc: „Wskaż nazwę analizowanej całości i jej wymienione składniki”. Można ją pominąć. R14 jest propozycją autorską, bez odrębnego review nie jest bramką.

### A2. Retrieval C-A-R01 [Q/R]

**[Q]** „Wyjaśnij własnymi słowami różnicę między granicą systemu, granicą kontekstu i zakresem wytwarzania. Czy informacja, że element pozostaje niezmieniony, wystarcza do pominięcia go w analizie wymagań? Podaj powód”.

**[R] Rubryka:** osobno ocenić trzy rozróżnienia i powód. Granica systemu oddziela przedmiot analizy; granica kontekstu ogranicza istotne otoczenie; scope określa możliwość kształtowania. Brak zmiany nie wystarcza do pominięcia, jeżeli element wpływa na wymagania. Akceptować równoważny język. Odpowiedź „nie, bo wszystko należy analizować” nie spełnia warunku istotności; samo „nie” jest niepełne. „Niezmieniany element zawsze zewnętrzny” — błąd. S-A1/S-A2. Pomiar rozumienia KRY-A01 jest częściowy; nie L3. Ocena: wskazany oceniający według rubryki albo jawna samoocena; bez punktów CPRE.

### A3. Bazowe C-A-B01

**Redakcja:** A, w=1; primary KRY-A01 / EO2.2.2 L2. Rodzina FAM-C-A1. Wspiera EO4.1.1; nie mierzy go wykonawczo.

**[Q]** Firma zamawia system obserwacji warunków transportu, obejmujący aplikację dyspozytora i usługę analizującą pomiary. Rejestrator temperatury jest odrębnym urządzeniem, przekazuje pomiary do usługi i pozostaje poza systemem zamawianym. Nie wolno go zmieniać. Odstępy między jego pomiarami wpływają na to, jak aktualną informację można pokazać dyspozytorowi.

Które działanie analityka jest właściwe? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Pominąć odstępy pomiarów, bo rejestrator nie jest objęty zmianą. |
| b | Włączyć rejestrator do systemu, bo dostarcza niezbędne pomiary. |
| c | Przesunąć granicę kontekstu tak, aby pominąć ten rejestrator. |
| d | Uwzględnić odstępy pomiarów jako wpływ istotnego kontekstu. |

**[R] Klucz: d.** 1 za pojedyncze d; inaczej 0. Źródło scoringu S-SCORE.

| Decyzja / rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| a / RAT-C-A-B01-a | Rejestrator nie jest zmieniany, ale rytm pomiarów ogranicza aktualność informacji → scope i istotność są odrębne → pominięcie tego wpływu jest niewłaściwe | S-A1/S-A2 |
| b / RAT-C-A-B01-b | Opis jawnie wyodrębnia urządzenie → istotna zależność nie staje się z tego powodu składnikiem przedmiotu analizy → nie należy zmieniać granicy wbrew przyjętej perspektywie | S-A1 |
| c / RAT-C-A-B01-c | Znaczenie rytmu pomiarów podano wprost → granica kontekstu nie służy usuwaniu znanego istotnego wpływu → to przesunięcie byłoby nieuzasadnione | S-A1/S-A2 |
| d / RAT-C-A-B01-d | Pomiary z oddzielnego urządzenia wpływają na oczekiwane informacje → wymagania trzeba rozpatrywać wraz z istotnym otoczeniem → wpływ należy uwzględnić | S-A1 |

**Decydujący feedback [N/R]:** „Rejestratora nie zmieniamy, ale sposób jego działania ogranicza informację dostępną w nowym systemie. W tej perspektywie jest zewnętrzną, istotną zależnością”. Przejścia: a/c → CMP-A, b → PRE-A, d → REG-A1. Każde przejście służy wskazanemu rozróżnieniu, nie całemu rozdziałowi.

### A4. Korekta, hipoteza i sonda

**REM-A [N]:** sprawdź dwie rzeczy oddzielnie: „czy element należy do opisanej całości?” i „czy jego zachowanie ma znaczenie dla wymagań?”. Dopiero trzecie pytanie brzmi „czy wolno go zmieniać?”. W C-A-B01 odpowiedzi to: nie / tak / nie. Po korekcie przejdź do C-A-F01, zachowując pierwotną odpowiedź i wynik.

**HYP-A:** wybór a może wskazywać regułę „brak zmiany oznacza brak potrzeby analizy”. To przewidywanie autora. Alternatywy: przeoczenie zdania o aktualności, pomylenie zakresów, niezrozumienie polecenia, błąd zaznaczenia lub wada itemu. Blank nie wskazuje tej reguły.

**C-A-S01 [Q]:** „Waga W przekazuje masę paczki aplikacji L; W jest odrębna i niezmieniana. Stary moduł M jest częścią L i też nie będzie zmieniany. Dla każdego elementu wskaż: czy z samego braku zmiany wynika, że można pominąć jego wpływ na wymagania L? Wyjaśnij różnicę”.

**[R] Wzorzec i rubryka:** nie dla obu. W dostarcza istotne dane z zewnątrz; M jest wewnętrzny według opisu. Brak zmiany nie wyznacza ani nieistotności, ani zewnętrzności. Oba argumenty są wymagane do pełnego wykonania sondy; poprawna odpowiedź tylko o W jest częściowa. Uznanie M za zewnętrzny wyłącznie dlatego, że nie jest zmieniany, wskazuje inną możliwą konfuzję.

**Przewidywania:** HYP-A — pominięcie W/M z powodu braku zmiany; przeoczenie pierwotnej przesłanki — możliwe poprawne wyjaśnienie obu; pomylenie scope z granicą — M błędnie zewnętrzny. Bez uzasadnienia lub przy sprzecznych odpowiedziach wynik nierozstrzygający. Przed instrukcją sonda może różnicować te wyjaśnienia, po REM-A sprawdza tylko bieżące rozumienie. Nie jest zwalidowanym narzędziem diagnostycznym. Źródła S-A1/S-A2; metoda oceny jak w A2.

### A5. Rzeczywisty follow-up C-A-F01

**Redakcja:** A, w=1; primary KRY-A01 / EO2.2.2 L2; FAM-C-A1, znaczący dydaktycznie, konserwatywnie bliski bazowemu.

**[Q]** Aplikacja introligatorni ma wskazywać zlecenia gotowe do wykonania. Przed rozpoczęciem prac pracownik ręcznie sprawdza zgodę właściciela materiału. Bez zgody zlecenie nie jest gotowe. Ten proces pozostaje poza aplikacją i nie będzie zmieniany. Nie ma automatycznego interfejsu między osobą sprawdzającą zgodę a aplikacją.

Dlaczego proces sprawdzania zgody trzeba uwzględnić w analizie wymagań aplikacji? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Wynik czynności ręcznej wpływa na znaczenie gotowości zlecenia w aplikacji. |
| b | Każdy proces w tej samej firmie należy do istotnego kontekstu aplikacji. |
| c | Istotny kontekst obejmuje wyłącznie czynności połączone interfejsem IT. |
| d | Proces musi wejść do aplikacji, skoro aplikacja ma uwzględniać jego wynik. |

**[R] Klucz: a.** S-SCORE; pojedyncze a=1, inne/brak/nadmiar=0.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-A-F01-a | Zgoda warunkuje gotowość → zewnętrzna czynność może kształtować wymagania → to właściwe uzasadnienie istotności | S-A1 |
| RAT-C-A-F01-b | Wskazano konkretny wpływ, nie wszystkie procesy firmy → wspólny właściciel nie przesądza znaczenia → argument jest zbyt szeroki | S-A1/S-A2 |
| RAT-C-A-F01-c | Brak automatycznego interfejsu nie usuwa warunku gotowości → kontekst nie ogranicza się do integracji IT → zdanie nie uzasadnia uwzględnienia i zawiera błędną regułę | S-A1, C-S02 §4.1 s.31 |
| RAT-C-A-F01-d | Proces pozostaje zewnętrzny w stemie → wpływ na wymagania nie wymusza wejścia do systemu → wniosek nie wynika z danych | S-A1/S-A2 |

**Feedback:** „Warunek biznesowy pozostaje istotny, chociaż pochodzi z ręcznej czynności poza aplikacją”. Zmiana wobec bazy: strumień pomiarów zastąpiono organizacyjną decyzją o gotowości; nie wystarczy pamięć o aktualności temperatury. To nadal świeże wykonanie po korekcie, bez obietnicy retencji lub niezależnej rodziny.

### A6. Kandydat delayed C-A-D01 [D]

**Redakcja:** A, w=1; primary KRY-A01 / EO2.2.2 L2; proponowana FAM-C-A2; niezależność rodziny niepotwierdzona.

**[Q]** Przedmiotem analizy jest aplikacja ewidencji palet, instalowana na istniejących terminalach. Sprzęt i organizacja stanowisk pozostają poza tą aplikacją i nie będą zmieniane. Na stanowisku obowiązkowo używa się grubych rękawic, co utrudnia trafianie w małe elementy dotykowe. Projekt może zmienić wielkość i odstępy przycisków aplikacji.

Który wniosek jest właściwy dla analizy wymagań? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Rękawice są poza kontekstem aplikacji, ponieważ nie przekazują danych przez API. |
| b | Używanie rękawic staje się częścią aplikacji, ponieważ wpływa na jej obsługę. |
| c | Warunki obsługi w rękawicach są istotnym kontekstem mimo braku ich zmiany. |
| d | Wymagania obsługi można określić bez rękawic, skoro projekt zmienia tylko aplikację. |

**[R] Klucz: c.** Pojedyncze c=1; inaczej 0, S-SCORE.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-A-D01-a | Podano fizyczny wpływ na obsługę → znaczenie kontekstu nie wymaga API → wykluczenie jest nieuzasadnione | S-A1 |
| RAT-C-A-D01-b | Rękawice należą do zewnętrznych warunków pracy → istotność nie oznacza przynależności do aplikacji → wniosek błędny w tej perspektywie | S-A1/S-A2 |
| RAT-C-A-D01-c | Sposób obsługi wpływa na wymagane elementy interakcji, a warunek pozostaje zewnętrzny → należy go uwzględnić mimo braku zmiany → wybór poprawny | S-A1 |
| RAT-C-A-D01-d | Zmieniana aplikacja ma działać w opisanych warunkach → zakres zmian nie znosi wpływu otoczenia → pominięcie warunku byłoby błędem | S-A1/S-A2 |

**Feedback po dozwolonej granicy:** „Niezmieniane otoczenie może określać wymagania wobec zmienianej aplikacji”. Zmiana poznawcza: fizyczny warunek interakcji zamiast dopływu danych lub reguły organizacyjnej. Przeniesienie ogólnej wiedzy jest celem; podobieństwo konstrukcji odpowiedzi nadal wymaga review R21.

### A7. Wykonanie L3 — C-A-L301

**Rola:** odrębne ćwiczenie zastosowania, nie pytanie A/P/K. Primary KRY-A02 / część EO4.1.1 L3; FAM-C-A3. Źródła S-A2/S-A3. Nie jest dodatkowym punktem w zamkniętej formie.

**[Q]** Pracownia zamawia system „Przyjęcie Prac”. W pierwszej perspektywie system obejmuje aplikację przyjęcia, usługę W obsługującą zlecenia i istniejący katalog materiałów będący jego modułem wewnętrznym. Katalog musi zostać ponownie użyty bez zmian.

Oddzielna waga przekazuje wyniki bezpośrednio do usługi W. Nie należy do systemu i nie będzie zmieniana. Poza systemem pozostaje ręczna procedura kontroli dostawy, od której wyniku zależy dopuszczenie zlecenia; procedurę wolno przeprojektować w tym przedsięwzięciu. Oddzielny system podlewania roślin nie wymienia z analizowanym systemem danych i w tym scenariuszu nie wpływa na jego wymagania.

1. Samodzielnie przedstaw granicę systemu i granicę istotnego kontekstu. Możesz użyć tekstu, tabeli lub rysunku; uwzględnij wszystkie wymienione elementy.
2. Wyjaśnij na dwóch wskazanych elementach, dlaczego scope nie musi pokrywać się z granicą systemu.
3. Następnie zmień perspektywę: analizowanym systemem jest wyłącznie usługa W. Aplikacja korzysta z W, a W korzysta z katalogu i wagi; procedura nadal określa dopuszczenie zlecenia. Pokaż nowy podział i uzasadnij zmiany.

**[R] Rozwiązanie modelowe:**

| Element | Cały „Przyjęcie Prac” | Sama W | Powód |
|---|---|---|---|
| Aplikacja przyjęcia | Wewnątrz | Istotny kontekst | Węższa perspektywa wyłącza aplikację z systemu; pozostaje jej interakcja z W |
| Usługa W | Wewnątrz | Wewnątrz | W obu perspektywach część analizowanej całości |
| Katalog materiałów | Wewnątrz | Istotny kontekst | W pierwszej opisany jako moduł całości, w drugiej zależność zewnętrzna wobec samej W |
| Waga | Istotny kontekst | Istotny kontekst | Źródło pomiarów poza oboma przedmiotami analizy |
| Procedura kontroli | Istotny kontekst | Istotny kontekst | Zewnętrzny warunek dopuszczenia; możliwość przeprojektowania nie zmienia jej automatycznie w składnik aplikacji/W |
| System podlewania | Poza istotnym kontekstem | Poza istotnym kontekstem | Jawny brak znaczenia w danych scenariusza |

Katalog jest wewnętrzny w pierwszej perspektywie i poza zakresem zmian. Procedura jest zewnętrzna i objęta możliwością przeprojektowania. To dwa kontrprzypadki utożsamienia scope z granicą.

**Rubryka R-L3-A — ocena bez punktów CPRE:**

| Kryterium rubryki | Spełnione | Częściowo / niespełnione |
|---|---|---|
| L3-A1 — perspektywa i wnętrze | Całość nazwana; aplikacja, W i katalog wewnątrz | Brak jednego składnika: częściowo; zastąpienie perspektywy samym zakresem zmian: niespełnione |
| L3-A2 — zależność techniczna | Waga zewnętrzna i istotna, wskazany pomiar | Sama etykieta bez powodu: częściowo; pominięcie jako niezmienianej: niespełnione |
| L3-A3 — wpływ nietechniczny | Procedura zewnętrzna i istotna; wskazany warunek dopuszczenia | Brak uzasadnienia: częściowo; wykluczenie z braku IT: niespełnione |
| L3-A4 — granica kontekstu | Podlewanie oddzielone z powodu jawnego braku znaczenia | Brak rozstrzygnięcia: częściowo; włączenie wyłącznie przez właściciela: niespełnione |
| L3-A5 — zakres zmian | Oba kontrprzypadki scope/granica poprawne | Tylko jeden: częściowo; obie osie utożsamione: niespełnione |
| L3-A6 — nowe granice W | W wewnątrz, aplikacja/katalog na zewnątrz jako istotne; pozostałe role zachowane i uzasadnione | Jedno nieuzasadnione pominięcie: częściowo; stara granica bez aktualizacji: niespełnione |

**Warunek wykonania tego ćwiczenia:** wszystkie sześć wymiarów spełnione; to lokalna reguła redakcyjna, nie próg IREB. Nie sumować wymiarów jako niezależnych egzaminacyjnych sukcesów. Błędy krytyczne: pominięcie znanego istotnego wpływu wyłącznie z powodu braku zmiany; utożsamienie systemu ze scope; brak reakcji na nową perspektywę.

**Odpowiedzi graniczne:** poprawna tabela bez rysunku jest pełnoprawnym wykonaniem. Nazwanie „katalog jako subsystem całego systemu” jest zgodne z pierwszą perspektywą. W drugiej można nazwać go współpracującym modułem, jeżeli wyraźnie znajduje się poza granicą samej W. Stwierdzenie „procedura w scope, więc wewnątrz W” jest błędne. Dodanie nowych interakcji podlewania jest zmianą danych zadania, nie równoważną alternatywą. Uzasadnioną wątpliwość co do danych kieruje się do review, bez dopisywania ukrytych założeń.

**Źródło oceny:** wskazana kompetentna osoba według R-L3-A; własne porównanie ucznia z tabelą jest samooceną. Nie użyto jeszcze tej rubryki do oceny rzeczywistej osoby. Jedno takie wykonanie nie poświadcza pełnego EO4.1.1 ani jego retencji.

### A8. Zakończenie gałęzi i dopuszczone wnioski

Po poprawnym C-A-F01 można zakończyć bieżącą korektę KRY-A01 jako wykonanie po instrukcji; sam punkt A nie poświadcza swobodnego uzasadnienia. Jeżeli odpowiedź błędna: alternatywa PRE-A/CMP-A lub przerwa, bez zużywania C-A-D01 jako kolejnej natychmiastowej próby. Ten przekrój nie dostarcza drugiego zamkniętego follow-up A. Brak wariantu ujawnia się jawnie. Jeśli późniejsza zatwierdzona gałąź zawiera dwie nieudane kontrole, obowiązuje zmiana wsparcia/przerwa, bez automatycznej trzeciej.

Powrót ma kotwicę C-A-B01/r1 oraz identyfikator opcji wejścia; odtwarza rzeczywistą oddaną odpowiedź i wynik, stan wyjaśnień i miejsce kontynuacji. Nie ma tu z góry ustalonej odpowiedzi ucznia. C-A-F01 i C-A-L301 mają własne wykonania.


### Źródła referencji S-* aneksu — zachowane z C01 v0.2

| Referencja | Zachowane znaczenie |
| --- | --- |
| S-A1 | C-S02 §2.2, zasada 4 s.16; C-S03 s.16; C-S06 system boundary s.13, context/system context s.17 |
| S-A2 | C-S06 context boundary s.12, scope s.35 i system boundary uwaga 3 s.13; C-S07 §2.2.4 s.22–24 |
| S-A3 | C-S02 EO4.1.1 / §4.1 s.31; C-S03 s.32; poziomy EN/PL s.4 |
| S-SCORE | C-S04 §2 s.4–6; §1.2 s.2 |
| S-LEARN | Kanon pedagogiczny w całości; Deep Research D7/D10–12; Blueprint F09–F14; przyjęte B01–B04 v0.2 |


### Rodziny i pary reuse — zachowane z C03 v0.2

| FAM-C-A1 | C-A-B01, C-A-F01, C-A-R01, C-A-S01 | Kontrast „brak zmiany/poza systemem” versus istotny wpływ; po korekcie łatwo rozpoznać znany wzorzec argumentu. Grupowanie szersze, zachowawcze |
| FAM-C-A2 | C-A-D01 | Fizyczne warunki interakcji poza aplikacją, bez API; kandydat różnicy wobec technicznego/organizacyjnego wpływu A1 |
| FAM-C-A3 | C-A-L301 | Samodzielny podział wielu elementów, dwa kontrprzypadki scope i zmiana perspektywy; odmienna czynność L3 |
| C-A-B01 ↔ C-A-F01 | Dopływ pomiarów i aktualność → ręczny warunek dopuszczenia | Znaczący dydaktycznie nowy rodzaj wpływu; to samo rozstrzygnięcie o istotności; wspólna konserwatywna rodzina |
| C-A-B01 ↔ C-A-D01 | Techniczne źródło danych → fizyczny warunek użytkowania | Nie kosmetyka nazw; jednak oba przeciwstawiają brak zmiany istotności. Nowa rodzina do review |
| C-A-F01 ↔ C-A-D01 | Procedura organizacyjna → warunek fizyczny bez interfejsu | W obu istotny kontekst nie ogranicza się do API; możliwość bliskiego transferu, bez potwierdzenia niezależności |

Rodziny reuse zachowują status propozycji z C03. Porównanie z nowymi zadaniami znajduje się w QA; niezależność nie jest zadeklarowana.

## Foundational — lokalny odczyt oznaczeń

Glossary PL 2.2.0 s.8 objaśnia, że pogrubione hasła są key terms FL. Sprawdzono niżej nagłówki i fonty PDF (PPMori-Bold). Definicje EN odczytano w wydaniu PL. To lokalny inwentarz Z1; nie audyt wszystkich haseł całego FL i nie dodatkowe oficjalne EO.

| Hasło / strona PDF C-S06 | Status / pokrycie |
| --- | --- |
| Persona / 21 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| System boundary / 13 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Context boundary / 12 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Context / 17 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Scope / 35 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Validation / 32 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |

Shared understanding jest terminem EU2 w Syllabus; nie znaleziono osobnego hasła o tej nazwie w Glossary PL/EN. Nie dopisano fikcyjnej definicji słownikowej. Verification w Glossary PL s.32 nie jest pogrubione; służy tutaj kontrastowi z validation. System context w PL s.17 nie jest pogrubione, ale jego sens odpowiada kontekstowi RE i jest wymaganym elementem objaśnienia.
