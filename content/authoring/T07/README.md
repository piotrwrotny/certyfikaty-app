# T07 r2 — notatka autora

Samokontrola autorska agenta AI, 2026-11-02. Status authoring: draft.

## Zakres

Dziewięć jawnych zakresów PR01–PR09 z argumentem, warunkami i konsekwencją. PR04 obejmuje granice/scope, zmiany kontekstu, wymagania świata rzeczywistego i założenia.

T06 daje nazwy L1; T03 wartość; T24 interesariusze; T18 glosariusz; T23 granice L3; T28 walidacja; T37 zmiany; T30–T32 proces. Są to odsyłacze, bez automatycznego gatingu.

| ID kryterium | Pełny sens / czynność źródłowa | EO / poziom | Aspekt i routing |
| --- | --- | --- | --- |
| KRY-T07-01 | PR01 — Orientacja na wartość; Korzyści obejmują spełnienie potrzeb i ograniczenie ryzyka/przeróbek; koszty to pozyskanie, dokumentowanie, walidacja i zarządzanie. Wyjaśnia potrzebę proporcji nakładu do korzyści i ryzyka; ilość dokumentacji nie jest celem. | EO2.2.2 L2 | ZAK-T07-01; T07/PR01 |
| KRY-T07-02 | PR02 — Interesariusze; Wymienia inne istotne role i ryzyko utraty ich wymagań; jedna osoba może łączyć role. Persona reprezentuje grupę/nieznane osoby, ale nie jest realnym potwierdzeniem ich zgody. Różne potrzeby mogą prowadzić do konfliktów wymagających identyfikacji i rozwiązania. | EO2.2.2 L2 | ZAK-T07-02; T07/PR02 |
| KRY-T07-03 | PR03 — Wspólne zrozumienie; Odróżnia explicit/implicit od prawdziwego/pozornego; dokument nie gwarantuje rozumienia. Wskazuje warunki wspólnej wiedzy/zaufania oraz bariery np. rotacji/odległości bez absolutyzowania. Wyjaśnia rolę przykładów, glosariusza/prototypów i krótkich pętli feedbacku. | EO2.2.2 L2 | ZAK-T07-03; T07/PR03 |
| KRY-T07-04 | PR04 — Kontekst: pełna granica zasady; Odróżnia granicę systemu, granicę kontekstu i scope, bez utożsamienia istotności z zakresem zmian. Wyjaśnia wpływ zmian otoczenia, przełożenie wymagań świata rzeczywistego na systemowe i rolę założeń. Nie uznaje samego sygnału/rekordu za pewny dowód realnego zdarzenia bez uzasadnionych warunków. | EO2.2.2 L2 | ZAK-T07-04; T07/PR04 |
| KRY-T07-05 | PR05 — Problem–Wymaganie–Rozwiązanie; Rozpoznaje problem, potrzebną właściwość i system realizujący oczekiwanie jako powiązane role. Rozdzielanie concern ułatwia pracę, ale nie oznacza izolacji ani niezmiennej kolejności; pomysł/prototyp może ujawnić wymagania. | EO2.2.2 L2 | ZAK-T07-05; T07/PR05 |
| KRY-T07-06 | PR06 — Walidacja; Wczesna kontrola zmniejsza ryzyko odkrycia nieadekwatności dopiero po wdrożeniu. Obejmuje porozumienie, adekwatne pokrycie potrzeb oraz rozsądne założenia kontekstu. Poprawność zapisu nie dowodzi zgodności z potrzebą. | EO2.2.2 L2 | ZAK-T07-06; T07/PR06 |
| KRY-T07-07 | PR07 — Ewolucja i stabilność; Wskazuje różne przyczyny: biznes/procesy, konkurencja, priorytety klientów, technologia, przepisy, feedback; dopuszcza korektę błędów/walidację. Wyjaśnia adaptację do potrzeb i potrzebę stabilnej podstawy realizacji, bez absolutnego zakazu albo automatycznej akceptacji zmian. | EO2.2.2 L2 | ZAK-T07-07; T07/PR07 |
| KRY-T07-08 | PR08 — Innowacja; Innowacja ma poprawiać zaspokojenie potrzeb, a nie jedynie zwiększać liczbę funkcji lub nowość technologii. Dopuszcza użyteczne uproszczenie/małą funkcję i istotnie nowy sposób działania w dużej skali. Nowy pomysł trzeba sprawdzać z interesariuszami; nie zakładać, że ekspert zawsze wie lepiej. | EO2.2.2 L2 | ZAK-T07-08; T07/PR08 |
| KRY-T07-09 | PR09 — Systematyczna i zdyscyplinowana praca; Potrzebne są odpowiednie praktyki czterech zadań niezależnie od procesu wytwarzania. Procesy/praktyki/artefakty dobiera się do problemu, kontekstu i środowiska; brak uniwersalnej recepty. Ponowne użycie wymaga refleksji; lekki sposób pracy może być zdyscyplinowany. | EO2.2.2 L2 | ZAK-T07-09; T07/PR09 |

Zamknięte odpowiedzi mierzą rozstrzygnięcia wskazane w opcjach, nie automatycznie swobodne wyjaśnienie L2 lub wykonanie L3. Oryginalne retrieval i otwarte B/F pozostają w open. Otwarte D zachowano poza runtime w handoff z pełną rubryką, gdyż schema open nie koduje roli delayed. Nowe zamknięte D nie zastępują tej czynności.

K-04 zachowane: wiersz 4 ILL-K01 / KRY-X01 pozostaje bez EO; ILL-K01 ma m=4, w=2, wynik ilustracyjny 1/2 i nie wchodzi do rezerwy CPRE ani pełnego mocku.

## Źródła użyte

| SRC | Wersja | Lokalizacje |
| --- | --- | --- |
| SRC-T07-SEN | 3.3.0 | §2.1–2.2, Principle 1 / Zasada 1; fizyczne strony PDF 14; §2.2, Principle 1 / Zasada 1; fizyczne strony PDF 14; §2.2, Principle 2 / Zasada 2; fizyczne strony PDF 15; §2.2, Principle 3 / Zasada 3; fizyczne strony PDF 15; §2.2, Principle 4 / Zasada 4; fizyczne strony PDF 16; §2.2, Principle 5 / Zasada 5; fizyczne strony PDF 16; §2.2, Principle 6 / Zasada 6; fizyczne strony PDF 17; §2.2, Principle 7 / Zasada 7; fizyczne strony PDF 17; §2.2, Principle 8 / Zasada 8; fizyczne strony PDF 17–18; §2.2, Principle 9 / Zasada 9; fizyczne strony PDF 18; §2.2, Principles 6 i 8 / Zasady 6 i 8; fizyczne strony PDF 17–18 |
| SRC-T07-SPL | 3.3.0 | §2.1–2.2, Principle 1 / Zasada 1; fizyczne strony PDF 14; §2.2, Principle 1 / Zasada 1; fizyczne strony PDF 14; §2.2, Principle 2 / Zasada 2; fizyczne strony PDF 15; §2.2, Principle 3 / Zasada 3; fizyczne strony PDF 15; §2.2, Principle 4 / Zasada 4; fizyczne strony PDF 16; §2.2, Principle 5 / Zasada 5; fizyczne strony PDF 16; §2.2, Principle 6 / Zasada 6; fizyczne strony PDF 17; §2.2, Principle 7 / Zasada 7; fizyczne strony PDF 17; §2.2, Principle 8 / Zasada 8; fizyczne strony PDF 17–18; §2.2, Principle 9 / Zasada 9; fizyczne strony PDF 18; §2.2, Principles 6 i 8 / Zasady 6 i 8; fizyczne strony PDF 17–18 |
| SRC-T07-GPL | 2.2.0 | Hasła Persona; fizyczne strony PDF 21; Hasła System boundary, uwaga 3; fizyczne strony PDF 13; Hasła System boundary; Context boundary; Scope; fizyczne strony PDF 12–13, 35; Hasła Validation; Verification; fizyczne strony PDF 32 |
| SRC-T07-HEN | 1.3.2 | §2.2.3; fizyczne strony PDF 20–21; §2.2.4, real-world requirements and assumptions; fizyczne strony PDF 22–24; §2.2.5; fizyczne strony PDF 24–25 |

Dokładne kotwice przy regułach w rules.yaml. Odczyt na kopiach PDF o hashach zgodnych z manifestem pierwotnego Z1; URL i wersje z potwierdzonego rejestru. Nie deklaruje się praw kanału publikacji.

## Inwentarz

| Obiekt | Liczba |
| --- | --- |
| A | 17 |
| P | 11 |
| K | 12 |
| rationale | 164 |
| base | 10 |
| follow-up-1 | 10 |
| follow-up-2 | 10 |
| delayed-candidate | 10 |
| note | 11 |
| prerequisite | 1 |
| comparison | 10 |
| worked-example | 9 |
| example | 10 |
| counterexample | 10 |
| corrections | 10 |
| open | 20 |
| kryteria | 10 |
| zakresy | 10 |
| rodziny | 11 |
| reguły | 37 |
| źródła | 4 |
| relacje jawne | 80 |
| forms | 0 |

## Wynik samokontroli

content:lint — nie uruchomiono. content:convert — nie uruchomiono. Przyczyna: brak implementacji CLI i repozytorium aplikacji. Rzeczywisty wynik walidacji pomocniczej schematów i semantyki znajduje się w handoff/Z1/VALIDATION_REPORT.md oraz LOCAL_VALIDATION.json. To nie oficjalny lint i nie test aplikacji.

Routing opcji ustalono przez pierwszą regułę i pierwszą alfabetycznie notę z tą regułą; pole see musi wskazywać ten sam materiał. Neutralne criteria.description i labelBeforeAnswer chronią także zachowanie sprzed etapu 3. Tytuły materiałów nie zawierają klucza rozpoznawania nazwy. Zróżnicowanie B/F/G/D opisano w handoff/Z1/T07_VARIANTS.md.

## Luki i pytania do recenzenta

- Brak oficjalnego lint/convert i testu implementacji; wszystkie tematy pozostają draft.
- Rola D dla open nie ma reprezentacji w schemacie; ściśle zachowane otwarte D są poza runtime.
- Brak odrębnego review kluczy, źródeł, mapowania EO, rodzin, rubryk i praw; C-AC-12 w części review niespełnione.
- Brak decyzji dla tej rewizji i dopuszczonego kanału, także internal-review.
- D są znane czytelnikowi pełnej paczki; nie są dla niego nieznaną rezerwą.

Historyczne ID KRY-P01/KRY-A01 oraz REG-P1/REG-A1, REM-P/REM-A i rodziny C zachowano. Odstępstwo od zalecanego Txx w ID dotyczy istniejących tożsamości zgodnych z normatywnym schematem. D zachowuje historyczną odrębną rodzinę C-?2; to nie potwierdza niezależności od C-?1.

Dziewięć zakresów PR01–PR09 pozostaje jawnych; KRY-A01 jest dodatkowym częściowym wkładem PR04. C-A-L301 / KRY-A02 to T23 i nie zwiększa pokrycia Z1.

## Zmiany względem poprzedniej rewizji

Pierwsza reprezentacja aplikacyjna opracowania Z1 v0.1; nie istniała opublikowana paczka Txx. Temat r2 i obiekty zmienione r2 zachowują ślad adaptacji źródłowych obiektów r1. Nowe noty, pytania i szczegółowe reguły mają r1. Kryteria otrzymały neutralny opis; rdzeń REG wyodrębniono z pełnej noty; korekty otrzymały F/G i inną pomoc. Stem, opcje, wagi i klucze źródłowych zadań Z1 zachowano. Pełne pochodzenie i zmiany: MIGRATION_MAP.csv. Źródłowego Content/QA/C nie nadpisano.
