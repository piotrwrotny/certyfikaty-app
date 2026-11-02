# T02 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Pełny zadeklarowany trójpodział functional/quality/constraint, w tym dane/interakcje i granice heurystyk; NFR jako jakość lub ograniczenie. C-P pozostaje wkładem częściowym.

T01: rozpoznanie przedmiotu wymagania; T04: perspektywa nie jest rodzajem; T21: jakość zapisu nie jest quality requirement.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T02-01 | Funkcja, jakość i dodatkowe ograniczenie rozwiązania; (1) Functional: wymagane zachowanie wysłania. (2) Quality: cecha czasu pracy przy wskazanym obciążeniu. (3) Constraint: dodatkowy wybór realizacji mimo odpowiednich alternatyw. | EO1.1.2 L2 | ZAK-T02-01; lokalny zakres |
| KRY-T02-02 | NFR i rozdzielenie osi klasyfikacji; NFR w Glossary obejmuje quality albo constraint; sam termin NFR nie oznacza wyłącznie jakości. Jasność zapisu nie zmienia rodzaju oczekiwania; funkcja pozostaje funkcją. | EO1.1.2 L2 | ZAK-T02-02; lokalny zakres |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T02-SEN | 3.3.0 | §1.1 i §1.3; fizyczne strony PDF 11–12; §1.1, Constraints; fizyczne strony PDF 12; §1.1, Functional requirements; fizyczne strony PDF 11; §1.1, Quality requirements; fizyczne strony PDF 11; §1.1; fizyczne strony PDF 11–12 |
| SRC-T02-SPL | 3.3.0 | §1.1 i §1.3; fizyczne strony PDF 11–12; §1.1, Constraints; fizyczne strony PDF 12; §1.1, Functional requirements; fizyczne strony PDF 11; §1.1, Quality requirements; fizyczne strony PDF 11; §1.1; fizyczne strony PDF 11–12 |
| SRC-T02-GPL | 2.2.0 | Hasła Constraint / Ograniczenie w IW; fizyczne strony PDF 21; Hasła Functional requirement; Quality requirement; Constraint; fizyczne strony PDF 21, 34; Hasła Functional requirement; Quality requirement; Quality criteria in RE; fizyczne strony PDF 17, 34; Hasła Functional requirement; fizyczne strony PDF 34; Hasła Non-functional requirement; fizyczne strony PDF 34; Hasła Performance requirement; Non-functional requirement, uwaga; fizyczne strony PDF 34; Hasła Quality requirement; Performance requirement; fizyczne strony PDF 34; Hasła Security / Zabezpieczenia, uwaga; fizyczne strony PDF 35; Hasła User requirement; Functional requirement; Quality requirement; fizyczne strony PDF 34 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 3 |
| P | 4 |
| K | 5 |
| rationale | 49 |
| base | 3 |
| follow-up-1 | 3 |
| follow-up-2 | 3 |
| delayed-candidate | 3 |
| note | 3 |
| prerequisite | 1 |
| example | 3 |
| counterexample | 3 |
| comparison | 3 |
| corrections | 3 |
| open | 5 |
| kryteria | 3 |
| zakresy | 3 |
| rodziny | 4 |
| reguły | 10 |
| źródła | 3 |
| relacje jawne | 22 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T02_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

Historyczne ID KRY-P01/KRY-A01 oraz REG-P1/REG-A1, REM-P/REM-A i rodziny C zachowano. Odstępstwo od zalecanego Txx w ID dotyczy istniejących tożsamości zgodnych z normatywnym schematem. D zachowuje historyczną odrębną rodzinę C-?2; to nie potwierdza niezależności od C-?1.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
