# T05 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Cztery główne zadania i tailoring; rola względem stanowiska; sześć obszarów uczenia FL oraz objaśniające soft skills z Handbook.

T01; T30–T32 szczegółowo rozwijają proces, T39–T40 narzędzia. Brak obowiązku zawodowego L3 w tym temacie.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T05-01 | Zadania RE i tailoring procesu; Nazywa elicitation, documentation, validation i management. Analiza i rozwiązywanie konfliktów należą w tym wykazie do elicitation; proces dobiera się do sytuacji. | EO1.4.1 L1 | ZAK-T05-01; lokalny zakres |
| KRY-T05-02 | Rola Requirements Engineer a stanowisko; Wskazuje zadania RE, wiedzę RE oraz łączenie problemu z potencjalnymi rozwiązaniami. Dopuszcza np. analityka, PO, systems engineer lub programistę; rola nie wymaga konkretnej nazwy stanowiska. | EO1.5.1 L1 | ZAK-T05-02; lokalny zakres |
| KRY-T05-03 | Co inżynier wymagań powinien poznawać; Wymienia zasady, dokumentowanie, opracowywanie, procesy, zarządzanie i narzędzia. Soft skills np. słuchanie i moderacja są rozwinięciem Handbook, a nie nowymi EO; rozpoznanie nie certyfikuje wykonania. | EO1.6.1 L1 | ZAK-T05-03; lokalny zakres |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T05-SEN | 3.3.0 | §1.4; fizyczne strony PDF 12; §1.5; fizyczne strony PDF 13; §1.6; fizyczne strony PDF 13 |
| SRC-T05-SPL | 3.3.0 | §1.4; fizyczne strony PDF 12; §1.5; fizyczne strony PDF 13; §1.6; fizyczne strony PDF 13 |
| SRC-T05-GPL | 2.2.0 | Hasła Requirements Engineer; fizyczne strony PDF 14; Hasła Requirements management; fizyczne strony PDF 35; Hasła Validation / Walidacja; fizyczne strony PDF 32 |
| SRC-T05-HEN | 1.3.2 | §1.6, soft skills; fizyczne strony PDF 14 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 4 |
| P | 4 |
| K | 4 |
| rationale | 48 |
| base | 3 |
| follow-up-1 | 3 |
| follow-up-2 | 3 |
| delayed-candidate | 3 |
| note | 3 |
| comparison | 3 |
| example | 3 |
| counterexample | 3 |
| corrections | 3 |
| open | 4 |
| kryteria | 3 |
| zakresy | 3 |
| rodziny | 3 |
| reguły | 11 |
| źródła | 4 |
| relacje jawne | 21 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T05_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
