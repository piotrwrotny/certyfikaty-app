# Z1 — paczki autorskie wiedzy do aplikacji

Wydanie v1.0, 2026-11-02. Format cpre-authoring/1.0. Tematy T01–T07 mają revision r2 i authoring draft. Jest to przygotowany materiał autorski z lokalną walidacją schematów i semantyki; nie wynik oficjalnej konwersji ani decyzja użycia. Kontrola wyłącznie autorska.

## Inwentarz

| Temat | Kryteria / zakresy | Pytania | A | P | K | Rationale | Noty | Podstawy | Przykłady łącznie | Korekty | Open runtime | Reguły | Relacje jawne |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T01 | 5 | 20 | 10 | 3 | 7 | 73 | 6 | 0 | 15 | 5 | 6 | 16 | 35 |
| T02 | 3 | 12 | 3 | 4 | 5 | 49 | 3 | 1 | 9 | 3 | 5 | 10 | 22 |
| T03 | 2 | 8 | 2 | 4 | 2 | 35 | 2 | 0 | 6 | 2 | 3 | 7 | 14 |
| T04 | 2 | 8 | 3 | 2 | 3 | 32 | 2 | 0 | 6 | 2 | 3 | 9 | 14 |
| T05 | 3 | 12 | 4 | 4 | 4 | 48 | 3 | 0 | 9 | 3 | 4 | 11 | 21 |
| T06 | 2 | 8 | 2 | 2 | 4 | 34 | 2 | 0 | 6 | 2 | 4 | 9 | 14 |
| T07 | 10 | 40 | 17 | 11 | 12 | 164 | 11 | 1 | 39 | 10 | 20 | 37 | 80 |
| RAZEM | 27 | 108 | 41 | 30 | 37 | 435 | 29 | 2 | 90 | 27 | 45 | 99 | 200 |

25 głównych lokalnych zakresów i dwa dodatkowe legacy KRY-P01/KRY-A01; 11 EO właścicielskich, bez deklaracji zaakceptowania pełnych EO. Każdy z 27 zakresów ma B/F/G/D zamknięte oraz korektę F/G. W 108 pytaniach jest 435 uzasadnionych decyzji; 63 pytania są nowymi uzupełnieniami, 39 pochodzi z Z1, 6 z C. Łącznie 45 aktywności otwartych runtime i 20 oryginalnych otwartych D zachowanych poza runtime. Dodatkowe C-A-L301 to wkład T23, poza mianownikiem Z1.

29 etykiet rodzin jest grupowaniem źródłowym/autorskim, nie 29 niezależnymi pomiarami. Nie utworzono forms.yaml, zatwierdzonej formy testowej ani decyzji praw.

## Pliki i źródła

| Temat | Katalog | Źródłowy Content i QA | Zależności bez automatycznej bramki |
| --- | --- | --- | --- |
| T01 | ../../content/authoring/T01 | references/content/T01_IREB_CPRE_Fundamental_RE_Concepts_Content_v0.1.md; references/content/T01_IREB_CPRE_Fundamental_RE_Concepts_QA_and_Handoff_v0.1.md | T02/T05 rozwijają typy i rolę; znajomość słów można sprawdzić bez lektury innych T. |
| T02 | ../../content/authoring/T02 | references/content/T02_IREB_CPRE_Kinds_of_Requirements_Content_v0.1.md; references/content/T02_IREB_CPRE_Kinds_of_Requirements_QA_and_Handoff_v0.1.md | T01: rozpoznanie przedmiotu wymagania; T04: perspektywa nie jest rodzajem; T21: jakość zapisu nie jest quality requirement. |
| T03 | ../../content/authoring/T03 | references/content/T03_IREB_CPRE_Value_and_Inadequate_RE_Content_v0.1.md; references/content/T03_IREB_CPRE_Value_and_Inadequate_RE_QA_and_Handoff_v0.1.md | T01; T07/PR01 rozwija zasadę wartości; bez obowiązku liczenia ROI lub diagnozy prawdziwego projektu. |
| T04 | ../../content/authoring/T04 | references/content/T04_IREB_CPRE_Applications_and_Perspectives_Content_v0.1.md; references/content/T04_IREB_CPRE_Applications_and_Perspectives_QA_and_Handoff_v0.1.md | T01 system/stakeholder; T02 rodzaje wymagań; nie wymuszać klasyfikacji domenowej L3. |
| T05 | ../../content/authoring/T05 | references/content/T05_IREB_CPRE_Tasks_Role_and_Competencies_Content_v0.1.md; references/content/T05_IREB_CPRE_Tasks_Role_and_Competencies_QA_and_Handoff_v0.1.md | T01; T30–T32 szczegółowo rozwijają proces, T39–T40 narzędzia. Brak obowiązku zawodowego L3 w tym temacie. |
| T06 | ../../content/authoring/T06 | references/content/T06_IREB_CPRE_Principles_Overview_and_Terminology_Content_v0.1.md; references/content/T06_IREB_CPRE_Principles_Overview_and_Terminology_QA_and_Handoff_v0.1.md | T01; T07 dzieli ten sam słownik, lecz ma odrębną czynność L2. Nie wymuszać ukończenia T06 przed próbą T07. |
| T07 | ../../content/authoring/T07 | references/content/T07_IREB_CPRE_Nine_Principles_Explained_Content_v0.1.md; references/content/T07_IREB_CPRE_Nine_Principles_Explained_QA_and_Handoff_v0.1.md | T06 daje nazwy L1; T03 wartość; T24 interesariusze; T18 glosariusz; T23 granice L3; T28 walidacja; T37 zmiany; T30–T32 proces. Są to odsyłacze, bez automatycznego gatingu. |

Kopie wejść w references/content i references/project zachowują oryginalne bajty. Dane pośrednie w references/migration_input uzgodniono z Content przed użyciem. Dokument 13 i schematy są dołączone, instrukcja 14 pochodzi z rozmowy, a niedostarczonego dokumentu 15 nie odtworzono. Skrypty tools tworzą pliki autorskie i pomocnicze raporty, nie zastępują aplikacyjnego konwertera.

Źródła merytoryczne: Syllabus EN/PL 3.3.0; Glossary PL 2.2.0 z definicjami EN; Examination Regulations EN 5.6.2 dla scoringu; Handbook EN 1.3.2 dla wskazanych rozwinięć. Dokładne kotwice: SOURCE_CHECKS.md i rules.yaml. Oficjalnych PDF nie dołączono do eksportu.

Źródłowe C-S02/C-S03/C-S06/C-S07 reprezentują publikacje w starym rejestrze. W każdym temacie utworzono jawnie mapowane lokalne rekordy SRC-Txx-SEN/SPL/GPL/HEN, aby nie powtarzać ID obiektów między paczkami; nie zmieniono tożsamości publikacji ani rejestru C01. Dotychczasowe pytania, kryteria, materiały i rodziny zachowują swoje ID; nowe obiekty zawierają Txx.

## Pokrycie i ograniczenia

Pełna macierz jest w COVERAGE.md, a ścieżka każdej decyzji w DECISION_TRACE.csv. T07 rozlicza PR01–PR09 osobno; C-A jest tylko wkładem częściowym PR04. Zamknięte rozstrzygnięcie nie zastępuje odtworzenia lub swobodnego wyjaśnienia. Brak pola delayed dla open rozliczono jako rzeczywiste ograniczenie formatu.

K-04: wiersz 4 ILL-K01 / KRY-X01 bez fikcyjnego EO; historyczne m=4, w=2 i ilustracyjne 1/2 pozostają bez zmiany. Cała ilustracja pozostaje poza rezerwą CPRE i pełnym mockiem; nie importowano jej jako punktowanego itemu Z1.

## Kontrola i luki

Lokalna walidacja: 0 błędów, 7 oczekiwanych ostrzeżeń o braku decyzji; 12730 wykonań kontroli i 329 obiektów sprawdzonych schematem. To liczniki narzędzia pomocniczego, nie liczba niezależnych recenzji. Zapisano 566 rachunkowych wektorów odpowiedzi. content:lint i content:convert nie zostały uruchomione: implementacji CLI nie dostarczono.

| ID luki | Zakres | Brak | Wpływ | Następna czynność |
| --- | --- | --- | --- | --- |
| Z1-GAP-CLI | Wszystkie tematy | Brak implementacji oficjalnego lint/convert i repozytorium aplikacji. | Nie potwierdzono zgodności zachowania rzeczywistego konwertera lub content-package; authoring pozostaje draft. | W repozytorium uruchomić content:lint dla T01–T07, naprawić błędy i wykonać content:convert; sprawdzić raport i różnice. |
| Z1-GAP-OPEN-D | 20 źródłowych wykonań otwartych D | Schema open nie posiada pola role ani obsługiwanej polityki delayed. | Pełne zadania zachowane w handoff, poza runtime; 27 zamkniętych D nie mierzy automatycznie ich swobodnego wykonania. | Ustalić w kontrakcie aplikacji reprezentację i ochronę otwartego delayed albo pozostawić te wykonania w osobnym trybie poza runtime. Nie dopisywać pola do obecnego schematu. |
| Z1-GAP-REVIEW | 108 pytań, 65 otwartych aktywności łącznie, reguły i relacje | Nie ma odrębnego kompetentnego review tej rewizji. | C-AC-12 i QG-09 w części review niespełnione. | Reviewer rozwiązuje stemy bez klucza, następnie sprawdza każdą decyzję, źródło, EO, rubrykę i scoring; rozliczyć uwagi dla konkretnych rewizji. |
| Z1-GAP-RIGHTS | Wszystkie tematy r2 | Brak upoważnionej decyzji o prawach, kanale i użyciach. | Nie ma dopuszczenia także do kanału internal-review; usageNote go nie zastępuje. | Upoważniona osoba ocenia użyte źródła i wydanie, następnie zapisuje właściwą decyzję; agent tego pliku nie tworzy. |
| Z1-GAP-NOVELTY | D i bliskie rodziny | Brak review niezależności oraz historii ekspozycji osób. | Pełne archiwum ujawnia wszystkie klucze; nie stanowi nieznanej rezerwy dla czytelnika. | Ocenić rodziny i wzajemne przecieki oraz rzeczywistą eligibility przed użyciem D; zapisywać ekspozycję i oba czasy per kryterium. |
| Z1-GAP-IMPLEMENTATION | Integracja i G3 | Nie udostępniono działającej aplikacji do sprawdzenia UI i ograniczeń ekspozycji. | Neutralność treści i poprawny routing statyczny nie są wynikiem walkthrough. | Po odpowiednim odbiorze treści osobno wykonać G3 według protokołu na przyjętych rewizjach; nie deklarować retencji z symulacji. |

## Następny krok do G2

Przekazać wskazane rewizje do odrębnego kompetentnego review: najpierw rozwiązanie stemów bez klucza, potem źródła, EO, każda opcja i rationale, scoring, rubryki, rodziny, widoczność i prawa. Rozliczyć uwagi, przeprowadzić rzeczywistą walidację/konwersję w repozytorium i uzyskać decyzję właściciela o zakresie G2. G3 jest osobnym walkthrough według protokołu; G2/G3/G4 pozostają otwarte.
