# R05 — Korekty B v0.2 i gotowość do decyzji G1

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 1 listopada 2026, Europe/Warsaw  
**Wersja raportu:** v0.1; odnosi się do pakietu B01–B04 v0.2  
**Status pracy porządkowej:** COMPLETE — poprawki sprawdzone  
**Status G1:** AWAITING OWNER CONFIRMATION — bramka niezamknięta.

**Rekomenduję zamknięcie G1 dla B01–B04 v0.2 w zakresie kontraktu semantycznego, z zachowaniem ograniczenia K-04 i jawnym przyjęciem zakresu review opisanego poniżej.** Pozostaje decyzja właściciela. Nie utworzono korpusu C ani projektu aplikacji.

## 1. Co zostało uporządkowane

| Pozycja z R04 | Wprowadzona korekta | Dowód ponownej kontroli | Status usterki |
|---|---|---|---|
| R-B01 | Dostępność oznaczania pytań do powrotu jest obowiązkowa; użycie oznaczenia przez ucznia opcjonalne. Brak oznaczenia nie jest brakiem odpowiedzi lub dowodem wiedzy | B01-12; B02 FR-026 i AC-026; B04 K-09; B03 E21 | RESOLVED |
| R-B02 | Neutralny słownik językowy dopuszczony w profilu jest warunkiem próby, odrębnym od pomocy RE; nie powoduje samoczynnej utraty niezależności lub konwersji. Glossary CPRE pozostaje pomocą dziedzinową | B01-10/12; B02 FR-018/026 i AC-018/026; B-DEC-14; K-10; E22 | RESOLVED |
| R-B03 | Rozdzielono odbiór treści G2 i walkthrough G3. Udział ucznia wynika z jawnego protokołu; symulacja odroczenia nie dowodzi retencji | B01-14; B04-05 krok 6; K-11; E23 | RESOLVED |
| R-B04 | Skrót „K4” oznaczający wiersz ilustracji zastąpiono jednoznacznym „wiersz 4 ILL-K01 / KRY-X01”. Zachowano znaczenie pakietu K4 Naprawa | B04 B-DEC-15, opis ryzyk i przekazanie; B03 E09/E12 | RESOLVED |

Nowe napięcia mają jawny ślad **K-09–11**. Pierwotne **K-01–08** zachowano bez zmiany rozstrzygnięć. B-DEC-01–16 zachowują identyfikatory; B-DEC-14 uzupełniono, a B-DEC-15 ujednoznaczniono redakcyjnie. Nie wprowadzono nowego algorytmu mastery ani nowych celów oficjalnych.

B03 ma teraz 24 logiczne przypadki kontrolne: zachowane E01–20 i dodane E21–24. E24 jawnie sprawdza odmowę dopuszczenia obecnego ILL-K01 do rezerwy CPRE/mocku. Są to kontrole kontraktu, nie wyniki testów oprogramowania lub badania uczniów.

## 2. Wynik weryfikacji zachowania treści

Kontrola dokumentów zakończyła się wynikiem PASS. Sprawdzono 62 warunki dotyczące identyfikatorów, zależności, wprowadzonych korekt i zachowania wejść.

| Obszar | Wynik |
|---|---|
| FR i AC | 38/38 tytułów i identyfikatorów FR zgodnych z BP F09; 38/38 indywidualnych AC |
| Karty nieobjęte korektą | Pozostałe 36 kart FR zachowano bez zmian; uzupełniono wyłącznie FR-018/026 |
| Decyzje i konflikty | 16/16 B-DEC; niezmienione rozstrzygnięcia K-01–08; trzy jawne doprecyzowania K-09–11 |
| Relacje | 26/26 definicji R01–R26; cały słownik relacji zachowany bez zmian |
| Ilustracje edukacyjne | Cała treść od B03-A do końca B03-K zachowana bajtowo: stemy, opcje, rationale, mapowania i przebiegi |
| Reguły punktowania | Sekcja punktacji B01 zachowana bajtowo; wyniki ilustracji nadal A 0/1, P 1/2, K 1/2 |
| Kryteria wyjścia C | 14/14 C-AC zachowane; brak authoringu nowego korpusu |
| Odwołania pakietu | B01–B04 wskazują wzajemnie v0.2; zapis autorskiego review v0.1 jest jawnie historyczny |
| Archiwum | Zachowano bajtowo wszystkie 21 plików z dostarczonego zestawu Sources oraz historyczny R04 |

Kanon pedagogiczny, Blueprint i FTC pozostają niezmienione. Interpretację opcjonalności flagi zapisano w B04 K-09, zgodnie z bardziej szczegółowym zachowaniem F09/F10/F11; nie zmieniono jej po cichu w dokumentach nadrzędnych.

Pełny wykaz różnic zawiera `DIFF_B_v0.1_to_v0.2.patch`. Bieżące i archiwalne pliki mają sumy kontrolne w `SHA256SUMS.txt`. Oryginały pozostały również w dostarczonym zestawie wejść; nie przeprowadzano kasowania danych.

## 3. Ograniczenie K-04 pozostaje warunkiem przyjęcia

ILL-K01 zachowuje cztery wiersze, m=4, w=2 i wynik ilustracyjny 1/2. Wiersz 4 ma pomocnicze KRY-X01 bez fikcyjnego oficjalnego EO. Obecny cały pakiet pozostaje niedopuszczony do rezerwy CPRE oraz pełnego mocku bez uzasadnienia oficjalnego zakresu wszystkich punktowanych decyzji.

Ukrycie tagu KRY-X01 nie usuwa ograniczenia. Usunięcie wiersza wymagałoby jawnej nowej rewizji, m, zakresu i punktacji. Właściwy przyszły item może zostać przygotowany w C po przyjęciu kontraktu. Przyjęcie G1 nie dopuszcza obecnych ilustracji do punktowanej publikacji.

## 4. Rozliczenie review i L-B04

Zachowano trzy odrębne fakty:

1. B v0.1 zawierało autorski przegląd, którego nie przedstawiano jako recenzji innej osoby.
2. Na osobne zlecenie właściciela powstał R04: przegląd akceptacyjny AI względem kanonu, BP i FTC, z kontrolą wskazanych źródeł normatywnych.
3. W bieżącej pracy poprawiono R-B01–04 i sprawdzono spójność v0.2, zachowanie treści oraz ograniczenie K-04.

Nie wykonano ani nie poświadczono recenzji przez niezależnego człowieka. R05 jest kontrolą poprawek, a nie dodatkową niezależną opinią ekspercką. **Wniosek do właściciela:** uznać udokumentowany zakres review AI za wystarczający do odbioru kontraktu semantycznego B i w ten jawny sposób rozstrzygnąć L-B04 dla G1. Raport nie podejmuje tej decyzji samodzielnie.

Niezależne review źródeł, treści, kluczy, języka, praw i zamierzonego użycia C pozostaje wymagane przed właściwym dopuszczeniem materiału. Nie jest zastępowane decyzją o G1. Empiryczne badanie uczenia i retencji pozostaje osobnym etapem.

## 5. Gotowa lista podmian w Sources

Aktywne Project Sources wymagają ręcznej podmiany; zapis poprawionych plików nie przełącza tej listy automatycznie. Z paczki należy użyć plików z jej głównego katalogu. Katalogu `ARCHIVE_INPUTS_2026-11-01` nie dodawać jako bieżącej podstawy pracy.

| Obecna rola / plik | Działanie |
|---|---|
| `00_IREB_CPRE_START.md` | Podmienić aktualnym routerem o tej samej nazwie |
| `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.1.md` | Podmienić na `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md` |
| `B02_IREB_CPRE_FR_Traceability_v0.1.md` | Podmienić na `B02_IREB_CPRE_FR_Traceability_v0.2.md` |
| `B03_IREB_CPRE_Semantic_Pilot_APK_v0.1.md` | Podmienić na `B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md` |
| `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md` | Podmienić na `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md` |
| R04 | Dodać/zaktualizować wersję z notą: stary raport dotyczy v0.1, aktualne rozliczenie jest w R05 |
| R05 | Dodać niniejszy raport jako aktualne wejście do decyzji G1 |

Po potwierdzeniu obecności nowych plików należy odłączyć od aktywnego zestawu identyczne kopie. Nie trzeba kasować oryginałów.

| Dodatkowa nazwa w obecnych Sources | Zachowana rola |
|---|---|
| `08-B02_IREB_CPRE_FR_Traceability_v0.1.md` | Kopia dawnego B02; archiwum. Aktywne ma być jedno B02 v0.2 |
| `07-B03_IREB_CPRE_Semantic_Pilot_APK_v0.1.md` | Kopia dawnego B03; archiwum. Aktywne ma być jedno B03 v0.2 |
| `06-B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md` | Kopia dawnego B04; archiwum. Aktywne ma być jedno B04 v0.2 |
| `10-C04_IREB_CPRE_Content_QA_and_Handoff_v0.1.md` | Identyczna kopia C04; zachować jedną kanoniczną kopię C04 |
| `11-C03_IREB_CPRE_Pilot_Content_APK_v0.1.md` | Identyczna kopia C03; zachować jedną kanoniczną kopię C03 |

Pięć podstawowych źródeł pozostaje w rdzeniu: START, kanon pedagogiczny, Deep Research, Blueprint i FTC. Po podmianie B i dodaniu R04/R05 rdzeń liczy 11 dokumentów. Unikalne C01–C04 i R01–R03 można zachować jako siedem źródeł pomocniczych ze statusem opisanym w routerze. Zestaw zachowujący je wszystkie liczy 18 plików bez duplikatów.

C01–C04 nadal opisują przygotowanie na B v0.1. Ich stare hashe mają znaczenie historyczne i nie zostały przepisane na nowy baseline bez faktycznego przeglądu. Po G1 trzeba uzgodnić to przygotowanie z B v0.2; nie jest to przeszkoda dla odbioru samego B. R01–R03 pozostają historycznymi zapisami stanu i nie nadpisują R05.

## 6. Dokładny zakres decyzji właściciela

Przedłożony do potwierdzenia wniosek obejmuje łącznie:

- przyjęcie B01–B04 v0.2 jako kontraktu semantycznego;
- przyjęcie B-DEC-01–16, z doprecyzowaniem B-DEC-14 i redakcyjną korektą B-DEC-15;
- zachowanie K-01–08, w szczególności ograniczenia K-04, oraz przyjęcie jawnych interpretacji K-09–11;
- uznanie zakresu review AI z R04/R05 za wystarczający dla odbioru B i rozstrzygnięcia L-B04 w G1;
- pozostawienie odbioru C, publikacji ilustracji i G2/G3 do właściwych etapów.

**Przed odpowiedzią właściciela G1 pozostaje otwarte.** Po jego potwierdzeniu należy zapisać decyzję z datą, zakresem i identyfikacją rewizji, a następnie zaktualizować statusy w routerze oraz B04. Taki zapis nie został wykonany z góry. Ewentualne odmienne rozstrzygnięcie właściciela należy zachować jako decyzję, a nie usuwać historii review.

Pytanie do właściciela: **czy potwierdzasz zamknięcie G1 dla powyższego zakresu?**

## 7. Identyfikacja rewizji

Dokładne hashe B01–B04 v0.2 zestawiono poniżej. Sumy pozostałych plików i wszystkich oryginałów znajdują się w `SHA256SUMS.txt` w paczce.

| Artefakt | SHA-256 |
|---|---|
| B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md | `f29c2f3b61ce1ad86467a19153b648c50af8cac61b07ca19bb856d0dfe46323c` |
| B02_IREB_CPRE_FR_Traceability_v0.2.md | `dc089326e158d431520c7a8eb5cc2f6d8935c0513bee355ca8f9ab7c92dcfa94` |
| B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md | `af112d6e97ebe559264eb7ba6df4c6acc8a0c91ffe02f543b0f44123913114d1` |
| B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md | `cd903c5e420a221a2edf53f489cc4a3e855bec32daf91ba993086306d9ccd607` |
