# C02 — Terminology and Authoring Standard v0.2

**Data:** 2.11.2026, Europe/Warsaw. **Projekt:** IREB CPRE Foundation Level Learning System.  
**Status:** zastosowany autorsko do C03; FOR REVIEW. Nie jest niezależnym dopuszczeniem treści.  
**Baseline:** przyjęte B01–B04 v0.2, decyzja R06; źródła i prawa C01 v0.2.  
**Ciągłość:** T-01–13 i AT-01–16 zachowują tożsamości z C02 v0.1. Nie są oficjalnymi EO.

## C02-01 — Co uzgodniono po G1

| Dawne przygotowanie / ryzyko | Obowiązujący zapis v0.2 | Skutek authoringu |
|---|---|---|
| Propozycje oparte na nieprzyjętym B v0.1 | B v0.2 przyjęte w R06; treść C nadal do review | Można pisać C03; nie nazywać C zaakceptowanym |
| AT/rezerwa nie precyzowały dostępności flagi | Możliwość oznaczenia do powrotu obowiązkowo dostępna; zaznaczenie przez ucznia dobrowolne | Neutralna instrukcja C03; brak flagi nie jest blankiem odpowiedzi |
| Wyjątek językowy nie był wyraźną częścią standardu | Dopuszczony neutralny słownik bez definicji RE to warunek próby, odrębny od pomocy RE | Odnotować warunek; nie odbiera samodzielności i nie wymusza konwersji do Nauki |
| C02-07 krok 7 wymieniał nowicjusza i praktyka bez jasnego oddzielenia bramki | G2: treść, źródła/prawa i review. G3: odrębny walkthrough; uczestnicy według przyjętego protokołu | Brak walkthrough nie blokuje napisania ani wcześniejszej recenzji C |
| Skrót „K4” mógł kolidować z pakietem K4 | Wyłącznie „wiersz 4 ILL-K01 / KRY-X01” dla historycznej ilustracji | Nie mylić z pakietem informacji K4 — Naprawa |
| ILL-K01 zawiera pomocniczy punkt | K-04 zachowane; osobne autorskie K w C03, każdy wiersz ze swoim uzasadnieniem EO | Nie przenosi się ILL-K01 do rezerwy ani nie usuwa ograniczenia ukryciem etykiety |

To uzgodnienie znaczeń i wpływu. Hashe i numer pliku są wyłącznie identyfikacją rewizji.

## C02-02 — Kontrolowana terminologia

Wszystkie opisowe zdania PL w C03 są autorskimi objaśnieniami. Oficjalne etykiety nie oznaczają oficjalnego przekładu całego zdania. Źródła C-S02/03/06 mają wersje i adresy w C01. Strony to strony PDF.

| ID | Preferowane PL w projekcie | EN | Źródło i status | Granica / formy mylące |
|---|---|---|---|---|
| T-01 | System | System | C-S06 2.2.0, s.29, para oficjalna | W przekroju sens inżynierski; nie tylko oprogramowanie |
| T-02 | Granica systemu | System boundary | C-S06 s.13, para oficjalna | Nie utożsamiać ze scope, właścicielem lub zakresem zmian |
| T-03 | Kontekst systemu | System context | C-S06 s.17, para oficjalna; alias „kontekst” wyłącznie w sensie RE | Nie każde otoczenie jest istotne |
| T-04 | Granica kontekstu | Context boundary | C-S06 s.12, para oficjalna | Oddziela otoczenie istotne od nieistotnego; nie system od kontekstu |
| T-05 | Zakres wytwarzania systemu | Scope of a system development | C-S06 s.35, para oficjalna; skrót „scope” po rozwinięciu | Wpływ na wymagania nie oznacza możliwości zmienienia elementu |
| T-06 | Wymaganie funkcjonalne | Functional requirement | C-S06 s.34, para oficjalna | Wynik/zachowanie/interakcja; cel bezpieczeństwa sam nie zmienia typu |
| T-07 | Wymaganie jakościowe | Quality requirement | C-S06 s.34, para oficjalna | Cecha jakościowa nieobjęta funkcją; liczba sama nie przesądza |
| T-08 | Ograniczenie w IW | Constraint in RE | C-S06 s.21, para oficjalna | Dodatkowe ograniczenie przestrzeni rozwiązania; nie każdy limit to constraint |
| T-09 | Wymaganie niefunkcjonalne | Non-functional requirement | C-S06 s.34, para oficjalna; NFR po rozwinięciu | Obejmuje jakość albo ograniczenie; nie synonim samej jakości |
| T-10 | Śledzenie powiązań | Traceability | Pełna etykieta oficjalna: „Śledzenie powiązań pomiędzy wymaganiami”, C-S06 s.26 | Projektowy skrót zachowuje także źródła, projekt/kod i testy |
| T-11 | Jawne śledzenie powiązań | Explicit traceability | C-S03 3.3.0 §6.6 s.45: wyraźne (jawne); EN C-S02 s.43 | Identyfikowane końce i zapis związku; nie wymaga grafu ani specjalnego narzędzia |
| T-12 | Niejawne śledzenie powiązań | Implicit traceability | „Niejawne” — kontrolowana etykieta projektu; oficjalny PL alias „domniemane”, C-S03 s.43/45 | Wynika ze znaczącej struktury/konwencji. Nie dowolne przypadkowe sąsiedztwo |
| T-13 | Wymaganie | Requirement | C-S06 s.33, para oficjalna | Potrzeba / właściwość lub zdolność / zapis: sens musi wynikać z kontekstu |

Dodatkowy kontrolowany zwrot redakcyjny: „graf powiązań (trace graph)” dla grafowej reprezentacji traceability; PL §6.6 używa „wykresy”, EN — graphs. Nie utożsamiać z wykresem liczbowym.

Nie potwierdzono pełnego inwentarza foundational przez audyt typografii. Nie przypisuje się tym 13 wpisom kompletności słownika ani automatycznego dowodu znajomości L1.

## C02-03 — Wspólne zasady authoringu

1. Ustalić obserwowalną czynność, warunki, lokalne kryterium, zakres EO i poziom; identyfikator kryterium projektu nie jest nowym EO IREB.
2. Oddzielić FACT normy, INTERPRETATION zastosowania, FUNCTIONAL DECISION projektu i DESIGN HYPOTHESIS. Nie dopisywać RESEARCH FINDING na podstawie pracy autora.
3. Zapisać regułę → dokładne źródło/wersję/lokalizację → przesłankę scenariusza → rozstrzygnięcie. LLM nie jest źródłem poprawności.
4. Zachować stabilny identyfikator i rewizję materiału, źródła, kryterium i rodziny. Wszystkie nowe jednostki C03 mają rewizję r1; dokument je zawierający ma v0.2.
5. Współdzielona reguła jest dozwolona; każde rationale ma własną przesłankę, zastosowanie i wynik. Brak rationale jednej opcji wstrzymuje cały punktowany item.
6. Nie diagnozować osoby z dystraktora, blanku lub nadmiaru. Hipoteza wymaga alternatyw, sondy i jawnego timingu.
7. Nie wnioskować o całym EO z jednego kryterium ani o poprawnym otwartym uzasadnieniu z samego wyboru zamkniętego.
8. Zapisać źródło oceny: klucz, wskazany oceniający według rubryki, samoocena albo brak oceny. Automatyczna ocena tekstu przez LLM nie jest niezależnym review.
9. Powrót zachowuje oryginalny item, wersję, odpowiedź, wynik i miejsce; nie tworzy nowej próby i nie zastępuje źródła wynikiem follow-up.
10. Prawa i rola recenzencka są odrębne od publikacji uczniowskiej; aktualny status wszystkich nowych zadań: kompletne autorsko, do odrębnego review, niedopuszczone do użycia punktowanego.

## C02-04 — Standard 16 typów materiału

Każdy typ dziedziczy tożsamość/rewizję, PL/EN, cel i zakres, źródła, prawa, zakres ekspozycji oraz faktyczny status kontroli. Tabela konkretyzuje AT-01–16 z v0.1; nie znosi właściwych bramek B01.

| AT | Wymagane minimum i kontrola | Typowa wada / granica |
|---|---|---|
| 01 — Concept explanation | Sens, warunek, granica, przykład, okazja próby; R04/05/10/15 | Płynny opis bez kryterium zastosowania |
| 02 — Short learning note | Rdzeń, warunek, przykład i odsyłacz do rozwinięcia | Skrót nie może usuwać warunku |
| 03 — Detailed note | Dodatkowe uzasadnienie, wyjątki i źródła; zgodność rdzenia | Rozszerzenie zawodowe nie staje się FL |
| 04 — Comparison | Uczestnicy, wspólna oś, rozstrzygająca różnica, oba przypadki; R11 | Dwie definicje bez osi nie wystarczają |
| 05 — Example/counterexample | Jawne przesłanki i reguła; kontrprzykład wskazuje obalane uogólnienie; R12/13 | Dowolny drugi przykład nie jest kontrprzykładem |
| 06 — Worked scenario | Perspektywa, dane, uzasadnione kroki, wynik i granice | Oglądanie rozwiązania nie jest samodzielnym wykonaniem |
| 07 — Retrieval prompt | Polecenie bez odpowiedzi, kryterium i rubryka, źródło | Widoczny wzorzec zamienia retrieval w naukę |
| 08 — A/P/K | Całe K2/B01-07 i QG-01–10; wszystkie decyzje, klucz i scoring | Sam temat lub intuicja autora nie nadaje klucza |
| 09 — Option rationale | Lokalna przesłanka → reguła → wynik; prawdziwość tezy oddzielona od polecenia | „Błędne, bo inne jest poprawne” nie wystarcza |
| 10 — Misconception hypothesis | Błędna reguła, poprawna reguła, alternatywy, przewidywania i status | Przewidywana przez autora ≠ częsta lub potwierdzona |
| 11 — Diagnostic probe | Neutralna treść, timing, rozróżnialne przewidywania, rubryka i nierozstrzygnięcie | Sonda po instrukcji nie odtwarza pewnie wcześniejszej przyczyny |
| 12 — Remediation | Celowany błąd, pewna korekta, adekwatny follow-up i wyjście; R18/19 | Lektura nie potwierdza naprawy |
| 13 — Immediate follow-up | Zachowane kryterium, istotna zmiana, pełna ocena i bliskość; R06/19/21 | Nie musi być niezależną rodziną; świeża korekta wyklucza retencję |
| 14 — Delayed candidate | Pełne K2, źródła, rodzina, plan roli, review przecieków i eligibility osoby | Sam nagłówek lub nowa nazwa nie chronią rezerwy |
| 15 — Open rubric | Konieczne elementy, równoważne odpowiedzi, błędy krytyczne i graniczne, źródła i oceniający | Samoocena pozostaje samooceną; nie dodawać oficjalnych punktów A/P/K |
| 16 — Introduction | Krótki cel, zakres, możliwość próby i brak obietnicy całego EO | Tytuł nie może zdradzać klucza aktywnego Sprawdzenia |

## C02-05 — Punktowanie i interpretacja

Źródło: C-S04 5.6.2 §2 s.4–6; zgodność z Blueprint F11 i B01-07. Maksymalna waga w należy do {1,2,3}.

| Format | Reguła | Ważne przypadki |
|---|---|---|
| A | w za pojedynczy wybór klucza; inaczej 0 | 4–5 opcji; blank, błędna lub nadmiarowa odpowiedź =0 |
| P | n≤k: w×c/k; n>k: 0 | k≥2 podane wprost; niepełny wybór zachowuje trafną część; brak punktów za niewybrane dystraktory |
| K | w×c/m | Każdy wiersz: trafna decyzja, błąd, brak, obie wartości; ostatnie trzy dają 0 tylko za wiersz |

W C03 dwa pytania P mają k=2 przy różnych wagach, a K mają m=3/4/5. Ułamki zachować dokładnie w obliczeniach; zaokrąglenie prezentacji nie zmienia sumy ani strony progu. Punkty pomocy/znajomości nie są pomniejszane; warunki wpływają na interpretację dowodu. Delayed pakietu P jest pytaniem A o uzasadnienie klasyfikacji, co wymaga własnej reguły scoringu.

Wektory dla wszystkich dziewięciu itemów są w C04. Otwarte rubryki nie mają wymyślonego scoringu CPRE. Nie wyprowadza się procentu mastery ani prawdopodobieństwa zdania.

## C02-06 — Relacje i prerequisites

R01–R26 zachowują znaczenie B01-05. W C03 znajdują się instancje z końcami, kierunkiem, warunkiem, zdaniem sensu, funkcją i proweniencją; wszystkie mają status review autorskiego, nie niezależnego.

Wymagana ścieżka: decyzja → R08 rationale → R09 reguła → R15 źródło. R10 do objaśnienia lub R11 do comparison tylko tam, gdzie pomaga. Remediacja R18, follow-up R19 oraz własne R06 do kryterium. R05 SUPPORTS i R07 MENTIONS nie są R06 MEASURES. R25 EVIDENCE_FOR wymaga rzeczywistego wykonania; C nie tworzy takich zdarzeń.

R14 jest warunkową propozycją podstawy do konkretnego działania. Argument konieczności, sygnał braku i możliwość pominięcia są obowiązkowe. Bez odrębnego review żadna z propozycji R14 w C03 nie jest wymuszana. Nie ma domyślnego RELATED_TO, propagacji mastery ani obowiązkowego grafu.

## C02-07 — Widoczność i ekspozycja

| Fragment | Nauka po dopuszczeniu | Aktywne Sprawdzenie po dopuszczeniu formy |
|---|---|---|
| Stem, odpowiedzi, neutralna instrukcja, maksymalna waga | Widoczne | Widoczne |
| Flaga do powrotu | Dostępna według kontekstu | Możliwość dostępna; użycie opcjonalne |
| Neutralny słownik językowy | Warunek profilu | Dopuszczony tylko zgodnie z profilem; odnotowany osobno od pomocy RE |
| Klucz, trafność, zdobyte punkty | Po zatwierdzeniu itemu | Dopiero po finalizacji całego Sprawdzenia |
| Objaśnienie, comparison, źródła, EO/kryterium, hipoteza, sonda, korekta | Materiał do nauki; kontakt z właściwymi kryteriami | Niewidoczne, także w tytule, alt, historii, podglądzie i linku |
| Kandydat delayed i jego rozwiązanie | Poza zwykłym materiałem uczniowskim | Wyłącznie wybrany stem w uprawnionej próbie; rozwiązanie po finalizacji |

Czytnik, klawiatura i powiększenie są narzędziami dostępu. Dla K nazwa decyzji zawiera numer wiersza, jego pełną tezę i wybraną wartość; nie dodaje oceny poprawności. Wszystkie zadania C03 są kompletne tekstowo, nie potrzebują grafiki ani widzenia koloru.

**Pełny C03 jest wydaniem recenzenckim z kluczami.** Jego przeczytanie ujawnia także kandydatów delayed. Dla czytelnika nie są one nieznaną rezerwą; stosuje się historię także bliskich rodzin. Nie utworzono oddzielnego chronionego eksportu uczniowskiego ani systemu kontroli dostępu. Przed rzeczywistym pomiarem przygotować taki eksport i sprawdzić go względem uczestników. Nowość ocenia się przed prezentacją, następnie zapisuje ekspozycję.

Dwa czasy są per kryterium: poprzednia samodzielna próba i ostatni istotny kontakt przed bieżącą próbą. Materiał nie resetuje całego EO. Siedem dni od próby i minuta od właściwego feedbacku nie jest tygodniową retencją. ≥24 h i okna 3–7 / około 14 dni to parametry pilota, nie normy IREB ani zwalidowane optimum.

## C02-08 — Proces i bramki

1. **G1:** spełnione na podstawie R06; C nie zmienia B.
2. **Autor:** źródła, kryterium, prawa obecnego użycia, pełna treść, samokontrola i jawne usterki.
3. **Odrębny kompetentny reviewer:** najpierw rozwiązuje stemy bez klucza; następnie sprawdza źródła, EO, PL/EN, wszystkie opcje, rationale, scoring, relacje, rubryki i prawa. Zapisuje tożsamość, kompetencje, datę, rewizję, uwagi i dopuszczone użycie. Brak review pozostaje brakiem.
4. **Kandydaci reserved:** dodatkowe review rodzin, przecieków i planu formy. Materiał do review nie jest dla czytelnika rezerwą.
5. **Właściciel:** odbiór G2 dla określonego zakresu. Nie ma automatycznego przejścia z autokontroli.
6. **G3:** osobny walkthrough na przyjętych wersjach; karty i moderator są dopuszczalne, skład uczestników wymaga protokołu. Symulacja odstępu nie dowodzi retencji.
7. **Publikacja/pilot:** właściwe dopuszczenie, określony kanał i prawa, ochrona ekspozycji. Empiria osobno; G4 wyłącznie decyzją właściciela.

Jedna odrębna osoba może łączyć kompetencje, jeżeli zakres jest jawny. Niniejszy autor AI nie przedstawia zmiany perspektywy ani kolejnego przebiegu jako niezależnej recenzji.

## C02-09 — Checklisty stosowane do przekroju

**Autor:** kryterium i poziom; pewne źródła z lokalizacją; pełne przesłanki w stemie; jedna interpretacja klucza; każda opcja; poprawne n/k/m/w; konkretne relacje; sensowna korekta i wariant; rodzina/bliskość; rubryki i odpowiedzi graniczne; zakres ujawnienia; PL/EN i tekst dostępny; pochodzenie i właściwe użycie; jawne ograniczenia.

**Reviewer:** własne rozwiązanie bez sugestii klucza; weryfikacja alternatywnych interpretacji i każdego punktu; kontrola pominiętych poprawnych P; blank/nadmiar/podwójne K; brak wycieku przez metadane; ocena granic rodzin i form; rozliczenie każdej uwagi; wskazanie osoby/daty/rewizji/zakresu. Nie oznaczać pytań jako skalibrowanych bez danych.

**Historia:** v0.1 — discovery i propozycja przed G1; v0.2 — zastosowanie B v0.2, weryfikacja terminów PL, zaktualizowany proces i jawny materiał do review. Wady wykryte podczas zastosowania standardu i ich rzeczywiste poprawki rejestruje C04.
