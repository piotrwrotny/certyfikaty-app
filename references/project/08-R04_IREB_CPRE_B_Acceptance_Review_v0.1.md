# R04 — Przegląd akceptacyjny B01–B04 v0.1

> **Nota aktualizacyjna po korektach B v0.2:** poniżej zachowano pełny historyczny raport przeglądu v0.1. Usterki R-B01–04 usunięto w B01–B04 v0.2; wynik ponownej kontroli i aktualna rekomendacja są w `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md`. Historyczne statusy OPEN i rekomendacja punktowej korekty odnoszą się do v0.1. G1 nadal oczekuje decyzji właściciela.

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 1 listopada 2026, Europe/Warsaw  
**Rola:** reviewer kontraktu semantycznego; zakres G1  
**Status raportu:** REVIEW COMPLETED / RECOMMENDATION ONLY  
**Status pakietu B:** FOR REVIEW; brak decyzji właściciela o akceptacji.

**Rekomendacja G1: zwrócić v0.1 do punktowej korekty trzech niejednoznaczności, następnie przedstawić poprawioną rewizję do decyzji właściciela.** Rdzeń architektury nadaje się do zachowania. Nie ma podstaw do ponawiania całej fazy B.

Potwierdzono ślad **38/38 FR**, obecność **16/16 B-DEC**, **8/8 K-01–08**, **26/26 definicji relacji** i **20 przypadków negatywnych**. Po sprawdzeniu treści 36 kart FR nie ma zastrzeżeń w zakresie semantycznym; FR-018 i FR-026 wymagają doprecyzowania. Liczby te opisują przegląd dokumentów, a nie dostarczone funkcje lub wyniki testów aplikacji.

Wykryto trzy usterki P2 wymagające rozstrzygnięcia przed bezwarunkowym G1 oraz jedną uwagę redakcyjną P3. Nie wykryto błędu punktacji A/P/K ani sprzeczności podważającej pedagogiczny rdzeń modelu. Ograniczenie **K-04 jest merytorycznie właściwe i jawnie zapisane**; pozostaje propozycją do decyzji właściciela.

## 1. Przedmiot, podstawa i granice przeglądu

| Oznaczenie | Źródło i sprawdzony zakres |
|---|---|
| START | `00_IREB_CPRE_START.md`, całość: hierarchia źródeł, odpowiedzialności i bramki G0–G4 |
| PED | `00_IREB_CPRE_Fundament_pedagogiczny.md`, całość |
| BP | `IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md`: F01–F02, właściwe fragmenty F05, F06, wszystkie karty F09, F10–F14, rejestr decyzji F16 |
| FTC | `IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md`: całe F13.1–F13.8, F10–F12/F14 i Handoff B/C |
| DR | `IREB_CPRE_Deep_Research_PL_2026-11.md`: pomocnicza kontrola lokalizacji dotyczących K-01/02/03/06/07, w szczególności historii dostępu, D6.4–5, D8.4, D10.2 i identyfikacji ilustracji D12 |
| B01 | `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.1.md`, całość |
| B02 | `B02_IREB_CPRE_FR_Traceability_v0.1.md`, całość |
| B03 | `B03_IREB_CPRE_Semantic_Pilot_APK_v0.1.md`, całość |
| B04 | `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md`, całość |
| R02 | Pomocniczo: istniejący rejestr gotowości, zwłaszcza wcześniejsze wskazanie niejednoznaczności G3. Jego ocena nie zastępowała porównania B z wejściami |

Źródła C oraz projekt aplikacji nie były przedmiotem odbioru. Nie zmieniono żadnego z wejściowych plików B ani dokumentów nadrzędnych. Raport przedstawia ustalenia i proponowane korekty.

Ponownie odczytano regulamin IREB 5.6.2, wykazy EO użytych w ilustracjach i odpowiednie fragmenty Syllabus EN 3.3.0, szczególnie §1.1, EU2 oraz §6.6. Potwierdzono zgodność użytych reguł punktowania z regulaminem. Nie wykonano pełnego nowego audytu Handbooka, równoważności EN/PL, licencji przyszłego korpusu ani walidacji psychometrycznej. Dokładne źródła zewnętrzne podano w §10.

To odrębny, zlecony przegląd semantyczny wykonany przez AI. Dokumentuje kontrolę szerszą niż samo porównanie nazw lub zgodność dwóch odpowiedzi LLM. Nie poświadcza recenzji przez niezależnego człowieka lub eksperta certyfikowanego przez IREB. Wystarczalność tego zakresu dla **L-B04** rozstrzyga właściciel projektu; raport nie zamyka tej luki automatycznie.

### Kontrola tożsamości wejść

Kopie B02, B03 i B04 występujące pod nazwami z dodatkowymi prefiksami są identyczne bajtowo z odpowiednimi plikami bez tych prefiksów. Nie znaleziono konkurencyjnych rewizji B ukrytych pod tym samym oznaczeniem v0.1.

Porównanie sekcji potwierdziło identyczność F13 oraz F10–F12 w BP i FTC po pominięciu otaczających odstępów. Usterka R-B01 dotyczy relacji **F09 względem F13**, a nie różnicy między dwiema kopiami F13.

## 2. Konkretne usterki i warunki ich zamknięcia

**P2** oznacza lokalną niejednoznaczność kontraktu, którą należy usunąć przed bezwarunkowym odbiorem. **P3** oznacza uwagę redakcyjną bez samodzielnego wpływu na poprawność modelu. Wszystkie poniższe pozycje mają status **OPEN**; raport nie nanosi poprawek.

### R-B01 — Nieodróżniona dostępność flagi od opcjonalnego użycia flagi

**Waga:** P2. **Dotyczy:** FR-026; B02, karta FR-026, linia 324; BP F09 FR-026, linia 909; FTC F13.4 FR-026, linia 332; także F10/F11.

BP F09 wymaga udostępnienia flagi powrotu podczas Sprawdzenia. F10 i F11 opisują możliwość oznaczania pozycji do review. Tymczasem F13 nazywa flagi opcjonalnymi, a B02 zapisuje **„O: flagi do review”**. Nie określa, czy opcjonalne jest istnienie tej możliwości, czy jedynie zaznaczenie konkretnego pytania przez ucznia. Rejestr K-01–08 tego napięcia nie obejmuje.

To nie dowodzi błędu przyszłej realizacji, ale pozwala dwóm odbiorcom wyprowadzić różne obowiązki z tej samej karty. Samo istnienie karty FR-026 nie wystarcza do uznania takiego śladu za jednoznaczny.

**Zalecana korekta:** zachować dostępność oznaczania zgodnie z F09/F10/F11; określić wartość flagi jako opcjonalną informację aktywności. Brak zaznaczonej flagi nie jest brakiem odpowiedzi ani brakiem wiedzy. Jeśli zamiarem jest usunięcie tej możliwości, potrzebna jest jawna propozycja zmiany zachowania do decyzji właściciela.

**Warunek zamknięcia:** B02 rozróżnia obowiązek dostępności od opcjonalnego zdarzenia/oznaczenia; AC-026 uwzględnia oba przypadki. B04 dokumentuje interpretację napięcia między wejściami. Nie jest potrzebny projekt kontrolki.

### R-B02 — Pominięty wyjątek dla neutralnego słownika językowego

**Waga:** P2. **Dotyczy:** FR-018 i FR-026; B-DEC-14; B01-10/12, szczególnie linia 444; B02, odpowiednie karty.

BP FR-018/026 oraz FTC F10/F11 odróżniają dopuszczony neutralny słownik językowy od pomocy dziedzinowej. B01-12 wylicza natomiast, co wolno ujawnić w Sprawdzeniu, używając słowa **„wyłącznie”**, i nie zachowuje tego wyjątku. Rozróżnia technologie dostępu i pomoc merytoryczną, ale nie nazywa osobno tego warunku językowego.

**Skutek:** odbiorca B może potraktować użycie dozwolonego słownika jak naruszenie niezależności albo odczytać zamknięty katalog jako zakaz takiego warunku. Nie twierdzę, że B wprost nakazuje tę błędną klasyfikację; stwierdzam brak jednoznacznej ochrony odziedziczonego wyjątku.

**Zalecana korekta:** dopisać do semantyki warunków próby, że neutralny słownik dopuszczony w profilu nie jest pomocą RE. Glossary CPRE i definicje dziedzinowe pozostają pomocą merytoryczną. Nie wynika z tego obowiązek budowania słownika w aplikacji.

**Warunek zamknięcia:** B01 oraz karty/AC FR-018 i FR-026 zachowują tę klasyfikację i nie przypisują takiemu warunkowi automatycznie konwersji do Nauki. B-DEC-14 zachowuje ochronę przed przeciekami z tym doprecyzowaniem. Podstawa: BP F09, FTC F10/F11 oraz regulamin §1.2.

### R-B03 — Zapis B01 zaciera rozdział G2/G3 i wzmacnia warunek uczestnictwa ucznia

**Waga:** P2. **Dotyczy:** B01-14, ostatni akapit, linia 481; B04-05, sekwencja kroku 6, linia 124; START §6. Wcześniej sygnalizowane również w R02 jako R-K03.

B01 stwierdza łącznie, że **„G2/G3 wymagają”** opracowanej i recenzowanej treści oraz późniejszego **„walkthrough z uczniem”**. START rozdziela G2 — odbiór treści — od G3 — sprawdzenie przebiegów i symulacja odroczonej próby. B04-05 dodatkowo umieszcza przedstawienie do G2 przed rzeczywistym walkthrough G3.

Nie jest jednoznaczne, czy B01 przypisuje walkthrough również do warunku G2 ani czy uczestnictwo ucznia staje się nowym bezwzględnym warunkiem G3. BP F14 dopuszcza wczesne przejście z kartami i moderatorem. Obserwacje uczniów są wartościowe, lecz raport B nie powinien milcząco podwyższać bramki START lub łączyć jej z empirycznym badaniem retencji.

**Zalecana korekta:** osobno zapisać warunki G2 i G3 zgodnie ze START. Wymaganie uczestników oraz przebieg rzeczywistego badania określić w jawnym protokole walidacji. Symulacja osi czasu w walkthrough nie potwierdza skuteczności uczenia.

**Warunek zamknięcia:** B01-14 i B04-05 dają zgodną kolejność i definicje bramek. Jeżeli projekt ma wymagać udziału ucznia w G3, jest to jawna decyzja właściciela, z odróżnieniem od pilota empirycznego.

### R-B04 — Kolizja skrótu „K4” w przekazaniu ograniczenia K-04

**Waga:** P3. **Dotyczy:** B04 B-DEC-15, linia 38, i kolejność authoringu, linia 121.

Zapis **„Zachować K4 jako pomocniczą ilustrację”** używa K4 jako skrótu czwartego wiersza ILL-K01. W kontrakcie **K4 oznacza pakiet Naprawa**, a w B03-K nagłówek **K4** oznacza część o follow-up A. Znaczenie można odtworzyć z kontekstu, ale handoff nie powinien wymagać takiego rozstrzygania.

**Zalecana korekta:** pisać „wiersz 4 ILL-K01 / KRY-X01”. Zachować K4 dla pakietu informacji i stosować pełne odwołanie do sekcji B03-K K4. Nie zmieniać identyfikatora konfliktu K-04.

**Warunek zamknięcia:** usunięte dwuznaczne skróty w B04. Uwaga nie jest samodzielnym powodem odrzucenia semantyki B-DEC-15.

## 3. Przegląd B-DEC-01–16

„Zachować” jest rekomendacją reviewera, nie statusem accepted nadanym decyzji.

| Decyzja | Wynik przeglądu | Uzasadnienie i ślad |
|---|---|---|
| B-DEC-01 | Zachować | Lokalne kryterium ogranicza wniosek; nie tworzy oficjalnego EO. B01-02; FR-004/006/022; FTC K0/K7 |
| B-DEC-02 | Zachować | Foundational terms mają własny mianownik bez fikcyjnych EO. Pełny inwentarz należy do pełnego zakresu, nie jest warunkiem napisania kontraktu B |
| B-DEC-03 | Zachować | Role mogą współdzielić treść przy zachowaniu lokalnego sensu i rewizji. Zgodne z FTC F13.1–2 i FD-08 |
| B-DEC-04 | Zachować | R01–R26 mają znaczenie, warunki, uzasadnienie i ograniczenia. Odrębne SUPPORTS/MEASURES/MENTIONS/EVIDENCE_FOR; brak propagacji z podobieństwa |
| B-DEC-05 | Zachować | Punktowany trening wymaga pełnego K2. Pomoc nie usprawiedliwia brakującego klucza lub rationale. FR-007–011/033–034 |
| B-DEC-06 | Zachować | Wspólna reguła dopuszczona, uzasadnienie każdej decyzji lokalne. B03 ma 4/5/4 rationale ilustracji A/P/K |
| B-DEC-07 | Zachować | Rodzina nie jest EO; przekład i kosmetyczna zmiana nie odnawiają nowości. Bliskość między rodzinami ma osobne review. FR-017/019 |
| B-DEC-08 | Zachować | Dopuszczenie rewizji i kwalifikacja osoby to dwa warunki. U-* rozróżniają obietnice; doprecyzowania warunków Sprawdzenia obejmuje R-B01/02 |
| B-DEC-09 | Zachować | Źródło, review, publikacja i empiria są rozdzielone. Nie udaje wykonanej kalibracji lub niezależnej recenzji przez zmianę roli LLM |
| B-DEC-10 | Zachować | Fakty odpowiedzi oddzielone od interpretacji; dwa odstępy per kryterium. E06/E18 prawidłowo ograniczają retencję |
| B-DEC-11 | Zachować | Pięć kategorii nie jest drabiną ani algorytmem mastery. Progi i okna pozostają hipotezami; FD-16 nie został przywrócony |
| B-DEC-12 | Zachować | Korekta klucza, źródła, relacji i rodziny zachowuje historię; przeliczenie wymaga podstaw. FR-035; E05 |
| B-DEC-13 | Zachować | Sens, etykieta, przekład, parafraza i prawa są odrębne. FR-031/034/037; bez przypisywania autorskiego PL tekstu IREB |
| B-DEC-14 | Doprecyzować R-B02 | Ochrona wszystkich kanałów ujawnienia jest właściwa. Trzeba zachować wyjątek dla neutralnego słownika językowego |
| B-DEC-15 | Zachować z ograniczeniem K-04 | Pomocniczy wiersz nie uzyskuje fikcyjnego EO. Ograniczenie obejmuje użycie całego obecnego K w rezerwie CPRE/mocku. Poprawić skrót wskazany w R-B04 |
| B-DEC-16 | Zachować | Zwykły feedback nie wymaga diagnozy; pełna naprawa wymaga kontroli. Dwa nieudane follow-up prowadzą do zmiany wsparcia; pierwotny błąd nie jest follow-up |

Nie rekomenduję odrzucenia żadnej z 16 zasad jako kierunku architektury. B-DEC-14 wymaga uzupełnienia. Akceptacja wszystkich B-DEC, ich dokładnej rewizji i ograniczeń należy do właściciela.

## 4. Przegląd K-01–08

Te identyfikatory oznaczają rejestr napięć w B04, a nie pakiety informacji K0–K7.

| ID | Wynik | Ocena rozstrzygnięcia |
|---|---|---|
| K-01 | Właściwe | Zachowano chronologię dostępu do Handbooka. Późniejszy częściowy odczyt nie oznacza pełnego review ani sprzeczności treści. Kontrola użytych fragmentów pozostaje zadaniem źródłowym przed dopuszczeniem zależnych treści |
| K-02 | Właściwe | FD-16 odracza automat 3×80%; starsza hipoteza go nie przywraca. Gotowość pozostaje profilem dowodów |
| K-03 | Właściwe | Ilustracja A z F13.8 mierzy wycinek EO2.2.2 L2; starszy pakiet D12 jest innym kontekstem. A nie dowodzi wykonania EO4.1.1 L3 |
| K-04 | Właściwe; decyzja właściciela otwarta | Wiersz 4 pozostaje pomocniczy, wynik ilustracji nie jest poprawiany po cichu; brak dopuszczenia obecnego K do rezerwy CPRE/mocku. Szczegóły w §5 |
| K-05 | Właściwe | 24 pozycje nie tworzą trzech rozłącznych zestawów po 12. Zgodność liczebna dwóch form nie dowodzi jeszcze niezależności rodzin ani jakości pomiaru |
| K-06 | Właściwe | Prerequisite dotyczy wiedzy potrzebnej do działania, nie obowiązku zaliczenia całej lekcji. Pominięcie i kontrola cykli zachowują sprawczość |
| K-07 | Właściwe | Pełne K2 jest wymagane do punktowanego pytania; brak follow-up ogranicza obietnicę naprawy, nie blokuje kompletnego samowystarczalnego feedbacku |
| K-08 | Właściwe | Historia KRY-K01 nie uzupełnia historii KRY-K02/X01. B03-K K5 oraz E18 zachowują osobne czasy i ograniczenia |

Rejestr poprawnie obsługuje osiem nazwanych problemów. Do uzupełnienia pozostają nowe niejednoznaczności R-B01–03; pozytywny wynik K-01–08 nie oznacza kompletności całego rejestru konfliktów.

## 5. Szczególna kontrola ograniczenia K-04

### Co zachowano poprawnie

| Element ILL-K01 | Wartość / rola |
|---|---|
| Format i parametry | K; w=2, m=4 |
| Klucz | Prawda, Fałsz, Prawda, Fałsz |
| Odpowiedź fikcyjnego ucznia | Prawda, Prawda, Prawda, brak |
| Punkty per wiersz | 0,5; 0; 0,5; 0 |
| Wynik całego zadania | 1 punkt z 2; zapis 1/2 |
| Wiersze 1–2 | KRY-K01, częściowy zakres EO6.6.3; EO6.6.2 wspierająco |
| Wiersz 3 | KRY-K02, częściowy zakres EO6.6.1 |
| Wiersz 4 | Pomocnicze KRY-X01, bez OPERATIONALIZES do wymyślonego EO |

Wynik 1/2 jest poprawny dla zachowanych czterech wierszy. Nie oznacza połowy opanowania EO ani dwóch niezależnych sukcesów w całej kompetencji. Blank nie jest wybraną odpowiedzią Fałsz ani potwierdzeniem misconception.

Ograniczenie istnieje w **B01-02**, **B01-12 U-RESERVED/U-MOCK**, **B03-K K2/K6** oraz **B04 B-DEC-15/K-04**. Obecne ILL-K01 nie może wejść do rezerwy CPRE lub pełnego mocku bez uzasadnienia oficjalnego zakresu wszystkich punktowanych decyzji. Warunek dotyczy pakietu, nie wyłącznie prezentacji tagu EO.

### Kontrpróba reviewera

Przy próbie zakwalifikowania obecnego ILL-K01 do rezerwy CPRE kontrakt odmawia dopuszczenia: wiersz 4 ma wyłącznie rolę pomocniczą, a U-RESERVED wymaga zgodnego zakresu wszystkich punktowanych decyzji. Jest to logiczna próba reguły, bez uruchamiania aplikacji.

Nie wolno uzyskać pozornego rozwiązania przez:

- przypisanie KRY-X01 arbitralnego oficjalnego EO;
- usunięcie wiersza 4 z zachowaniem dawnej wersji i starej punktacji;
- wyłączenie pomocniczego wiersza wyłącznie z opisu pokrycia, a pozostawienie jego punktów jako ukrytej części wyniku CPRE;
- uznanie sukcesu w ILL-K-FU za naprawę również KRY-K02/X01.

Usunięcie wiersza zmieniłoby m na 3 i wynik dwóch trafnych ocen przy w=2 na 4/3 punktu z 2. Byłaby to nowa rewizja zadania, nie sprostowanie zapisu pierwotnego 1/2.

W jawnej ilustracji lub praktyce można zachować szerszy cel dydaktyczny, ale nie przedstawiać jej łącznego wyniku jako normatywnego pokrycia CPRE. B03 pokazuje takie ograniczenie; nie jest zgodą na publikację przed bramką jakości. Dalsze źródłowe uzasadnienie mapowania lub osobny item są późniejszą pracą C, poza tym przeglądem.

**Wniosek:** B-DEC-15/K-04 rekomenduję zachować. Nie rekomenduję cichej zmiany pytania ani dopisania nowego EO. R-B04 dotyczy jednoznaczności nazwy, nie samego ograniczenia.

## 6. Pokrycie wszystkich 38 FR

Każdy wiersz porównano z odpowiadającą kartą **BP F09** i **FTC F13.4**. Dowodem w B jest indywidualna karta B02 oraz AC o tym samym numerze. Poniżej wskazano istotę kontroli i dodatkowe lokalizacje. „Zgodne” oznacza wystarczający kontrakt informacyjny w zakresie review; nie oznacza testu produktu, gotowego materiału lub zaakceptowanego FR.

| FR | Wynik | Sprawdzony warunek / dowód w B |
|---|---|---|
| FR-001 | Zgodne | Brak daty nie blokuje startu; język nie przyznaje automatycznie wydłużenia; pilot ma jawny zakres. B01 K0/K6 |
| FR-002 | Zgodne | Opcjonalna diagnoza; praktyka zawodowa nie zalicza EO; start bez sond pozostaje możliwy |
| FR-003 | Zgodne | Jedna propozycja z przesłanką; wybór alternatywy zachowuje wcześniejszą potrzebę. K7 |
| FR-004 | Zgodne | SUPPORTS/MEASURES/MENTIONS odrębne; częściowe EO i foundational jawne. B01-02/05; E07 |
| FR-005 | Zgodne | Rdzeń, warunek i przykład; bez obowiązku odhaczenia całego rozwinięcia; czytanie nie dowodzi wiedzy |
| FR-006 | Zgodne | Poziom i czynność zgodne z celem; rubryka i źródło oceny otwartej odpowiedzi jawne. E10 |
| FR-007 | Zgodne | Jedyny klucz wobec polecenia; błąd/brak/nadmiar bez częściowych punktów; rationale wszystkich opcji. B03-A |
| FR-008 | Zgodne | Częściowe punkty, niedobór i nadmiar odrębne; pominięta poprawna opcja ma rationale. B03-P; E01/E08 |
| FR-009 | Zgodne | Blank nie jest Fałsz; oceny per wiersz; m i w rozdzielone. B03-K; E09 |
| FR-010 | Zgodne | Pierwsza oddana odpowiedź nie jest nadpisywana; przed finalizacją Sprawdzenia dopuszczone zmiany. E05 |
| FR-011 | Zgodne | Warstwowe ujawnianie; pełny komplet redakcyjny; bez feedbacku w aktywnym Sprawdzeniu. E01 |
| FR-012 | Zgodne | Lokalne rationale prowadzi do konkretnej reguły; kilka opcji może współdzielić comparison. R08–R11 |
| FR-013 | Zgodne | Kotwica, wersja, wybór, wynik, stan i kontynuacja zachowane; wycofany item tylko jako oznaczona historia. R26 |
| FR-014 | Zgodne | Uzasadniona oś comparison i warunkowy prerequisite; brak review/cykl nie blokują całej nauki. E02/E13 |
| FR-015 | Zgodne | Hipoteza i alternatywy; timing sondy ogranicza diagnozę; pojedynczy wybór i blank nie potwierdzają przekonania |
| FR-016 | Zgodne | Korekta i follow-up tego samego rozróżnienia; po dwóch nieudanych kontrolach inne wsparcie/przerwa. E20 |
| FR-017 | Zgodne | Istotna zmiana wymaga uzasadnienia; przekład i kosmetyka nie tworzą nowej rodziny. E04/E14 |
| FR-018 | Doprecyzować | Pomoc, znajomość i dostępność rozdzielone; brakuje jawnego wyjątku językowego. R-B02 |
| FR-019 | Zgodne | Nowość sprzed prezentacji; ekspozycja per osoba; ochrona snippetów i bliskich wariantów. E03 |
| FR-020 | Zgodne | Dwa czasy per kryterium; świeże objaśnienie nie dowodzi retencji od dawnej próby. E06/E18 |
| FR-021 | Zgodne | Po gałęzi ponowna ocena potrzeb; ta sama luka bez nowej przesłanki nie wymusza identycznej naprawy. E20 |
| FR-022 | Zgodne | Pięć kategorii bez obowiązkowej drabiny, zachowane sukcesy i flaga kontroli; brak procentu mastery. E07/E08/E19 |
| FR-023 | Zgodne | Jawny mianownik; brak materiału oddzielony od braku danych osoby; etykiety mają podstawę |
| FR-024 | Zgodne | Profil zakresu, retencji, nowych prób i warunków; brak p(zdania) oraz automatu 3×80% |
| FR-025 | Zgodne | Test tematu bez limitu a pełny mock Level 2; audyt zakresu i rezerwy; fallback jawny. E17 |
| FR-026 | Doprecyzować | Ukrycie pomocy i wyników, finalizacja całości zachowane; status flag i wyjątek językowy niejednoznaczne. R-B01/02 |
| FR-027 | Zgodne | Zwykłe wyjście nie cofa limitu; temat bez limitu może być wznowiony; konwersja całej próby nieodwracalna. E11 |
| FR-028 | Zgodne | Suma punktów i mianownik; review wszystkich decyzji; nowy pomiar po review potrzebuje innych rodzin |
| FR-029 | Zgodne | Instrukcje i partial credit oddzielone od kompetencji RE; tutorial nie zalicza traceability |
| FR-030 | Zgodne | Confidence pomijalne; brak deklaracji neutralny; bez zmiany punktów i bez dodatkowej prośby w standardowym mocku |
| FR-031 | Zgodne | Kontrolowane aliasy i sensy; rezerwa nie pojawia się w wynikach; globalne szukanie pozostaje Level 2. E03 |
| FR-032 | Zgodne | Ciągłość bez resetu dowodów i ponownego naliczania wyniku; przerwany mock podlega odrębnym regułom |
| FR-033 | Zgodne | Brak rationale blokuje pakiet; brak opcjonalnego linku nie blokuje samowystarczalnej treści; fallback nie generuje wiedzy |
| FR-034 | Zgodne | Wersja, źródła, prawa, wszystkie rationale i rzeczywisty review; ekspercki status nie oznacza kalibracji. QG; E01/E15 |
| FR-035 | Zgodne | Wycofanie, wpływ na dowody i jawne przeliczenie; brak podstaw oznacza niediagnostyczność. E05 |
| FR-036 | Zgodne | Wiersz/wartość K, tekstowy wynik, kotwica i równoważność; alt nie daje klucza. Bez deklaracji wykonanego audytu WCAG. E16 |
| FR-037 | Zgodne | PL/EN i parafraza odrębne; kontrola negacji i homonimów; przekład nie odnawia nowości. E14 |
| FR-038 | Zgodne | Manifest wykonania, nie sam plan liczebny; pilot nie oznacza całego FL; rezerwa nie jest wielokrotnie nowa. E17 |

**Wynik:** 38/38 kart i 38/38 AC; 36 kart bez zastrzeżeń semantycznych w tym przeglądzie, 2 do doprecyzowania. R-B03 dotyczy warunków bramek całego pakietu i nie jest dodatkowym „brakującym FR”.

## 7. Zgodność z kanonem i F13 jako całością

| Obowiązek | Wynik i lokalizacja |
|---|---|
| Cel i kryterium przed aktywnością | Zachowane: B01-02/03; B02 FR-003–006 |
| Retrieval, korekta, nowy przypadek, powrót po przerwie | Semantyka zachowana: B01-08/10; B03-A/P/K. Brak gotowej rezerwy nie został ukryty |
| Misconception jako hipoteza | Zachowane: R16/R17, B01-08; sondy po korekcie nie rekonstruują pewnie wcześniejszej przyczyny |
| Powiązania służą działaniu, bez obowiązkowego grafu | Zachowane: 26 ról nie oznacza 26 fizycznych bytów ani wymaganej wizualizacji. B01-03/05 |
| Pomoc, punkty, znajomość i retencja odrębne | Zachowane w rdzeniu; wyjątek językowy wymaga R-B02 |
| Nowość i rezerwa per osoba | Zachowane: B01-09/12; pierwsza prezentacja nie unieważnia bieżącej próby |
| Pokrycie EO nie wynika z jednego trafienia | Zachowane: B01-02/10; E07/E08/E12/E18 |
| Proweniencja, prawa i recenzja | Kontrakty istnieją: R15, QG, B01-04/11. Nie nadano ilustracjom statusu opublikowanego korpusu |
| F13.1–2 — granice i słownik | Pokryte: B01-01/02/03/14 |
| F13.3 — K0–K7, P i E | Pokryte: B01-06/07/10/11; obowiązki dziedziczone |
| F13.4 — 38 FR | Ślad kompletny; dwie karty do doprecyzowania według §6 |
| F13.5–6 — opcja/korekta oraz prerequisite/powrót | Pokryte: R08–R19/R26; B03; 11 przejść F06 w B02-04 |
| F13.7 — brak i wystarczalność zależna od funkcji | Pokryte: QG, U-*, LUKA-01–11. Nie każda luka blokuje całą naukę |
| F13.8 — A/P/K | Zachowano teksty główne, klucze, wyniki i granice dowodów. Dodatkowe syntetyczne czasy w K są jawne |

Główne przykłady zachowują wyniki **A 0/1, P 1/2, K 1/2** i powrót do tych samych odpowiedzi. Rationale są kompletne na poziomie ilustracji. P-FU nadal jest specyfikacją potrzebnej treści, a wszystkie rodziny i kontrole wymagają późniejszego review do zamierzonego użycia. Nie traktuję tych jawnych braków C jako usterki architektury B.

Sprawdzono logikę 20 przypadków E01–E20: brak rationale; brak review prerequisite; przeciek; kosmetyczny wariant; korekta klucza; świeża instrukcja; zawyżenie EO; procent mastery; blank; samoocena; konwersja; zbyt szeroka naprawa; cykl; przekład; źródło/prawa; alt; liczebność rezerwy; czas per kryterium; znany item po przerwie; granica powtarzanej naprawy. Wyniki B03 są oczekiwaniami kontraktu. Nie są raportem z wykonanych testów produktu.

## 8. Co pozostaje otwarte i nie blokuje samo w sobie G1

| Otwarte zagadnienie | Właściwy moment / warunek |
|---|---|
| Nieodczytane obecnie używane fragmenty PL/Handbooka | Przed dopuszczeniem treści zależnych od tych fragmentów; zachować historię rzeczywistego odczytu |
| Pełne pytania C, P-FU, rubryki i oryginalne rodziny odroczone | Authoring po przyjęciu podstawy; kompletność i review przed właściwym użyciem/G2 |
| Prawa konkretnej treści i kanału dystrybucji | Kontrola konkretnego użycia; B definiuje wymagane informacje, nie udziela zgody prawnej |
| Pełne 70 EO, wszystkie foundational terms i większy bank | Rozszerzenie do pełnego zakresu; pierwszy ograniczony przekrój nie musi zawierać całego programu |
| Empiryczna trudność, skuteczność sond, retencja i trafność gotowości | Właściwy późniejszy pilot; opis syntetyczny nie stanowi danych ucznia |
| Techniczne egzekwowanie widoczności, powrotu i dostępności | Późniejsza realizacja i jej sprawdzenie; brak aplikacji nie uniemożliwia oceny semantyki |

**L-B04 jest osobnym zagadnieniem odbiorowym:** niniejszy raport dostarcza odrębnego review na aktualne zlecenie. Nie nadaje sobie statusu ludzkiej recenzji eksperckiej. Decyzja o wystarczalności tego dowodu dla G1 ma być jawna; nie należy utożsamiać jej z recenzją kluczy przyszłego korpusu.

## 9. Rekomendacja G1 i najbliższa akcja

**Rekomendacja: REVISE THEN ACCEPT — punktowa korekta przed decyzją właściciela.** Dla niezmienionej v0.1 nie rekomenduję bezwarunkowego odbioru, ponieważ trzy opisane niejednoznaczności pozostawiają odbiorcy rozstrzygnięcia, których G1 ma nie pozostawiać w domyśle.

Najbliższe zadanie ma dotyczyć wyłącznie B:

1. Rozstrzygnąć R-B01, zachowując różnicę między dostępnością flagi a jej użyciem.
2. Uzupełnić R-B02 w semantyce pomocy, profilu i widoczności.
3. Ujednoznacznić R-B03 w końcowym zapisie B01 i przekazaniu B04.
4. Przy okazji usunąć kolizję nazwy R-B04.
5. Przedstawić spójną poprawioną rewizję B, jej zakres zmian i wynik ponownej kontroli zmienionych miejsc. Ponowny przegląd całego niezmienionego kontraktu nie jest konieczny bez nowej przesłanki.

Do decyzji właściciela pozostają: przyjęcie konkretnej rewizji i B-DEC-01–16, przyjęcie ograniczenia K-04 oraz ocena, czy przedstawiony zakres review rozstrzyga L-B04. Raport nie podejmuje żadnej z tych decyzji.

Po usunięciu wskazanych niejednoznaczności rekomenduję przyjęcie **kontraktu semantycznego B** z zachowaniem ograniczeń publikacji i pomiaru. Odbiór B nie jest odbiorem ilustracji jako korpusu, zamknięciem G2/G3 ani potwierdzeniem skuteczności uczenia.

## 10. Źródła normatywne i identyfikacja rewizji

Kontrola zewnętrzna z 1 listopada 2026:

- [IREB Examination Regulations 5.6.2](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf), §1.2–1.3 i §2: pomoce, warunki oraz scoring. Odczyt pełnego dokumentu.
- [IREB CPRE Foundation Level Syllabus EN 3.3.0 — kopia iSQI](https://isqi.org/media/bb/62/7b/1789026524/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf), definicje poziomów, EO1.1.2, EO2.2.2, EO4.1.1 i EO6.6.1–3 oraz §6.6. Kontrola wybranych lokalizacji, bez deklaracji ponownego przeczytania całego sylabusa.
- [IREB Download Center](https://cpre.ireb.org/en/downloads-and-resources/downloads), pomocnicza kontrola katalogu; katalog nie jest dowodem poprawności kluczy.

Pełne SHA-256 przeglądanych artefaktów B:

| Artefakt | SHA-256 |
|---|---|
| B01 | `52a3dfde3d0f8665da77bb25266342a355e60c57dad3ee02133e5d6de61746f7` |
| B02 | `fa45a4156b20a37903dfe533b3695e6235120db89080272efda1588fda475109` |
| B03 | `bfee0bde967fe4c837ee204921d1a00bcb54e955f7856084eac0496f8349c052` |
| B04 | `8a6af1f2cfd302a80260b16bf0eda62a5f063817594d9636db9fd6310f79cf5e` |

Numery linii w rejestrze usterek odnoszą się do powyższych rewizji oraz dostarczonych kopii BP/FTC. Sekcje i identyfikatory są podstawowym śladem, jeśli edytor wyświetla inne zawijanie wierszy.
