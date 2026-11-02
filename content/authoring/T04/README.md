# T04 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Zastosowanie do różnych systemów; pięć perspektyw występowania wymagań. Poziom EO L1 mimo nagłówka §1.3 L2.

T01 system/stakeholder; T02 rodzaje wymagań; nie wymuszać klasyfikacji domenowej L3.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T04-01 | RE dla różnych rodzajów systemów; RE dotyczy wymagań dla różnych rodzajów systemów, także produktów, usług, procedur i urządzeń. Dominujący obszar software nie oznacza wyłączności; rozpoznaje składniki fizyczne i organizacyjne. | EO1.3.1 L1 | ZAK-T04-01; lokalny zakres |
| KRY-T04-02 | Pięć perspektyw występowania wymagań; Wymienia system, stakeholder, user, domain i business requirements z poprawnym ogólnym sensem. User requirements są podzbiorem stakeholder requirements; perspektywa nie zastępuje rodzaju z T02. | EO1.3.1 L1 | ZAK-T04-02; lokalny zakres |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T04-SEN | 3.3.0 | §1.3, Requirements can occur as; fizyczne strony PDF 12; §1.3; fizyczne strony PDF 12; §2.2, Principle 9 / Zasada 9; fizyczne strony PDF 18 |
| SRC-T04-SPL | 3.3.0 | §1.3, Requirements can occur as; fizyczne strony PDF 12; §1.3; fizyczne strony PDF 12; §2.2, Principle 9 / Zasada 9; fizyczne strony PDF 18 |
| SRC-T04-GPL | 2.2.0 | Hasła Business requirement; fizyczne strony PDF 33; Hasła Domain requirement; fizyczne strony PDF 33; Hasła System requirement; Kind of requirement; fizyczne strony PDF 25, 34; Hasła System, uwaga 3; fizyczne strony PDF 29; Hasła User requirement; Stakeholder requirement; fizyczne strony PDF 34 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 3 |
| P | 2 |
| K | 3 |
| rationale | 32 |
| base | 2 |
| follow-up-1 | 2 |
| follow-up-2 | 2 |
| delayed-candidate | 2 |
| note | 2 |
| counterexample | 2 |
| example | 2 |
| comparison | 2 |
| corrections | 2 |
| open | 3 |
| kryteria | 2 |
| zakresy | 2 |
| rodziny | 2 |
| reguły | 9 |
| źródła | 3 |
| relacje jawne | 14 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T04_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
