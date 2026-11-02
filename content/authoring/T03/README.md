# T03 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Cztery wskazane korzyści RE; objawy brakujących/niejasnych/nieprawidłowych wymagań i cztery źródłowo wymienione przyczyny.

T01; T07/PR01 rozwija zasadę wartości; bez obowiązku liczenia ROI lub diagnozy prawdziwego projektu.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T03-01 | Cztery źródła wartości RE; Nazywa mniejsze ryzyko niewłaściwego systemu, lepsze rozumienie problemu, podstawę estymacji i podstawę testowania. Dla dwóch korzyści łączy konkretny rezultat RE z użyciem, np. reguła → test albo zakres → estymacja; bez gwarancji. | EO1.2.1 L2 | ZAK-T03-01; lokalny zakres |
| KRY-T03-02 | Objawy i przyczyny niewłaściwego RE; Nazywa brakujące, niejasne i nieprawidłowe wymagania. Nazywa pośpiech ku budowie, problemy komunikacji, założenie oczywistości, brak edukacji/umiejętności. Nie przypisuje jednej pewnej przyczyny z samego symptomu. | EO1.2.2 L1 | ZAK-T03-02; lokalny zakres |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T03-SEN | 3.3.0 | §1.1–1.2; fizyczne strony PDF 11–12; §1.2, Adequate RE adds value; fizyczne strony PDF 12; §1.2, Basis for estimating; fizyczne strony PDF 12; §1.2, Prerequisite for testing; fizyczne strony PDF 12; §1.2, Symptoms and causes; fizyczne strony PDF 12; §1.2, This is particularly due to; fizyczne strony PDF 12; §1.2, Typical symptoms; fizyczne strony PDF 12 |
| SRC-T03-SPL | 3.3.0 | §1.1–1.2; fizyczne strony PDF 11–12; §1.2, Adequate RE adds value; fizyczne strony PDF 12; §1.2, Basis for estimating; fizyczne strony PDF 12; §1.2, Prerequisite for testing; fizyczne strony PDF 12; §1.2, Symptoms and causes; fizyczne strony PDF 12; §1.2, This is particularly due to; fizyczne strony PDF 12; §1.2, Typical symptoms; fizyczne strony PDF 12 |
| SRC-T03-HEN | 1.3.2 | §1.2; fizyczne strony PDF 12–13 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 2 |
| P | 4 |
| K | 2 |
| rationale | 35 |
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
| reguły | 7 |
| źródła | 3 |
| relacje jawne | 14 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T03_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
