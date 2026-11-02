# T01 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Wymaganie w trzech sensach; specyfikacja/specyfikacja wymagań; interesariusz; system; RE i podstawowa terminologia roli.

T02/T05 rozwijają typy i rolę; znajomość słów można sprawdzić bez lektury innych T.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T01-01 | Trzy sensy requirement; Wymienia potrzebę interesariusza, wymaganą zdolność/właściwość systemu oraz udokumentowaną reprezentację. Odróżnia potrzebę od zapisu; dopuszcza istnienie potrzeby przed zapisem. | EO1.1.1 L1 | ZAK-T01-01; lokalny zakres |
| KRY-T01-02 | Specification i requirements specification; Rozpoznaje proces specyfikowania i uporządkowany opis jako rezultat. Requirements specification dotyczy wymagań, a specification może też opisywać właściwości już istniejące. | EO1.1.1 L1 | ZAK-T01-02; lokalny zakres |
| KRY-T01-03 | Stakeholder a user; Wskazuje osobę lub organizację oraz wpływ na wymagania lub oddziaływanie systemu. User korzysta z funkcjonalności; nie każdy stakeholder musi jej używać. | EO1.1.1 L1 | ZAK-T01-03; lokalny zakres |
| KRY-T01-04 | System w szerokim znaczeniu inżynierskim; Rozpoznaje wyodrębnioną całość współdziałających elementów realizującą cel. Dopuszcza usługę/urządzenie/procedurę lub całość socjotechniczną; nie ogranicza pojęcia do aplikacji. | EO1.1.1 L1 | ZAK-T01-04; lokalny zakres |
| KRY-T01-05 | Cel i charakter Requirements Engineering; Nazywa systematyczne i zdyscyplinowane specyfikowanie i zarządzanie wymaganiami. Wskazuje rozumienie potrzeb oraz zmniejszenie ryzyka dostarczenia systemu, który ich nie spełnia. | EO1.1.1 L1 | ZAK-T01-05; lokalny zakres |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T01-GPL | 2.2.0 | Hasła Requirement / Wymaganie, znaczenia 1 i 3; fizyczne strony PDF 33; Hasła Requirement / Wymaganie; Functional requirement; Quality requirement; Constraint; fizyczne strony PDF 21, 33–34; Hasła Requirement / Wymaganie; fizyczne strony PDF 33; Hasła Requirements Engineering / Inżynieria wymagań; fizyczne strony PDF 14; Hasła Requirements specification / Specyfikacja wymagań; fizyczne strony PDF 27; Hasła Specification / Specyfikacja, uwaga; fizyczne strony PDF 27; Hasła Specification / Specyfikacja; fizyczne strony PDF 27; Hasła Stakeholder / Interesariusz; fizyczne strony PDF 14; Hasła System, Important; fizyczne strony PDF 29; Hasła System, uwaga 1; fizyczne strony PDF 29; Hasła System, uwaga 4; fizyczne strony PDF 29; Hasła System, znaczenie 2; fizyczne strony PDF 29; Hasła User / Użytkownik; Stakeholder / Interesariusz; fizyczne strony PDF 14, 32 |
| SRC-T01-SEN | 3.3.0 | §1.1; fizyczne strony PDF 11; §2.2, Principle 2 / Zasada 2; fizyczne strony PDF 15; §2.2, Principle 9 / Zasada 9; fizyczne strony PDF 18 |
| SRC-T01-SPL | 3.3.0 | §1.1; fizyczne strony PDF 11; §2.2, Principle 2 / Zasada 2; fizyczne strony PDF 15; §2.2, Principle 9 / Zasada 9; fizyczne strony PDF 18 |
| SRC-T01-HEN | 1.3.2 | §1.1, Definition 1.4 i uwaga o podsystemach; fizyczne strony PDF 12 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 10 |
| P | 3 |
| K | 7 |
| rationale | 73 |
| base | 5 |
| follow-up-1 | 5 |
| follow-up-2 | 5 |
| delayed-candidate | 5 |
| note | 6 |
| example | 5 |
| comparison | 5 |
| counterexample | 5 |
| corrections | 5 |
| open | 6 |
| kryteria | 5 |
| zakresy | 5 |
| rodziny | 5 |
| reguły | 16 |
| źródła | 4 |
| relacje jawne | 35 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T01_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
