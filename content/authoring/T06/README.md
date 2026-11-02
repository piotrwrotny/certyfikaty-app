# T06 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Odtworzenie dziewięciu zasad; sześć terminów EU2 i związane rozróżnienia terminologiczne. Wyjaśnianie znaczenia i ważności zasad należy do T07.

T01; T07 dzieli ten sam słownik, lecz ma odrębną czynność L2. Nie wymuszać ukończenia T06 przed próbą T07.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T06-01 | Nazwy wszystkich dziewięciu zasad; Podaje wszystkie dziewięć nazw, dopuszczając trafne odpowiedniki EN i równoważne PL. Rozpoznaje przekrojowe zasady, bez obowiązkowego dziewięcioetapowego harmonogramu. | EO2.1.1 L1 | ZAK-T06-01; lokalny zakres |
| KRY-T06-02 | Sześć terminów EU2 i słownik zasad; Nazywa sześć terminów: context, requirement, RE, stakeholder, shared understanding, validation. Explicit/implicit rozróżnia według udokumentowanej podstawy versus wspólnej wiedzy; nie według prawdziwe/fałszywe. Validation wiąże z potrzebami, verification ze specyfikacją; to termin wspierający kontrast. | EO2.2.1 L1 | ZAK-T06-02; lokalny zakres |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T06-SEN | 3.3.0 | EU2, Terms / Terminy; fizyczne strony PDF 14; §2.1, akapit wprowadzający; fizyczne strony PDF 14; §2.1; fizyczne strony PDF 14; §2.2, Principle 3 / Zasada 3; fizyczne strony PDF 15 |
| SRC-T06-SPL | 3.3.0 | EU2, Terms / Terminy; fizyczne strony PDF 14; §2.1, akapit wprowadzający; fizyczne strony PDF 14; §2.1; fizyczne strony PDF 14; §2.2, Principle 3 / Zasada 3; fizyczne strony PDF 15 |
| SRC-T06-GPL | 2.2.0 | Hasła Context / Kontekst, znaczenie 2; fizyczne strony PDF 17; Hasła Requirements Engineering / Inżynieria wymagań; fizyczne strony PDF 14; Hasła Stakeholder / Interesariusz; Requirement / Wymaganie; fizyczne strony PDF 14, 33; Hasła Validation / Walidacja; Verification / Weryfikacja; fizyczne strony PDF 32 |
| SRC-T06-HEN | 1.3.2 | §2.2.3; fizyczne strony PDF 20–21 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 2 |
| P | 2 |
| K | 4 |
| rationale | 34 |
| base | 2 |
| follow-up-1 | 2 |
| follow-up-2 | 2 |
| delayed-candidate | 2 |
| note | 2 |
| example | 2 |
| comparison | 2 |
| counterexample | 2 |
| corrections | 2 |
| open | 4 |
| kryteria | 2 |
| zakresy | 2 |
| rodziny | 2 |
| reguły | 9 |
| źródła | 4 |
| relacje jawne | 14 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T06_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
