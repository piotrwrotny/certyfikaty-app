# IREB CPRE Foundation Level — Functional-to-Knowledge Requirements Contract

**Stan: 1 listopada 2026 r. · Wersja 1.0 · Samodzielny materiał wejściowy do MASTER PROMPT B.**

Kontrakt przenosi wybrane zachowania produktu na wymagane informacje edukacyjne. Obejmuje 38 funkcji, kompletną macierz F13, trzy oryginalne przykłady A/P/K, reguły stanów i punktacji, zakres pilota, źródła oraz handoff B/C. Zachowuje numerację pełnego raportu IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md; szczegółowe kryteria odbioru FR znajdują się w jego F09.

**Decyzja nadrzędna:** jedna prowadzona sesja oparta na EO, z kontekstowym dostępem do wiedzy i powrotem do pytania. Dwa konteksty: Nauka oraz Sprawdzenie. W Level 1 sprawdzenie tematu jest bez limitu; pełny timed mock należy do Level 2. Wszystkie przejścia ujawniające pomoc merytoryczną są zamknięte podczas aktywnego Sprawdzenia. Globalny graf pozostaje odroczony.

**Odpowiedzialność fazy B:** zaprojektować znaczenie, relacje, tożsamość, wersje, proweniencję i kompletność informacji. Nie wybierać technologii, API, baz ani schematów przechowywania. Nie zmieniać modelu doświadczenia bez odnotowanej przyczyny. F13 rozdziela wymagania wobec B, authoringu C oraz danych aktywności ucznia.

**Priorytety:** rdzeń w zakresie pilota — Essential; pełne przygotowanie i globalne wyszukiwanie — Level 2; confidence — Validate, opcjonalnie poza standardowym mockiem. Level 1–3 oznaczają zakres produktu; L1–L3 przy EO oznaczają poziomy poznawcze IREB. Przy parametrach takich jak liczba prób, terminy rewizji lub liczba relacji zachować status hipotezy projektowej.

**Najważniejsza granica pomiaru:** punkty, pomoc, znajomość itemu, nowość rodziny, sposób oceny i retencja są odrębnymi informacjami. Retencja wymaga uwzględnienia czasu od ostatniej samodzielnej próby oraz od ostatniego istotnego kontaktu z badanym kryterium; sukces minutę po ponownej lekturze nie jest dowodem tygodniowej retencji. Stan całego EO nie wynika z jednego trafienia ani z obejrzenia treści.

## F13 — Functional-to-Knowledge Requirements Contract

**Status:** kontrakt funkcjonalny dla fazy B, nie projekt przechowywania wiedzy. **Punkty odniesienia:** P0 — kanoniczny fundament pedagogiczny; P1 — pełny raport, szczególnie D9–D15; katalog FR-001–FR-038 niniejszego blueprintu. **Zakres decyzji:** FUNCTIONAL DECISION i INTERPRETATION, chyba że wskazano wymóg oficjalny. Przejścia stanów, harmonogramy i dobór pomocy pozostają DESIGN HYPOTHESES.

Kontrakt opisuje znaczenie informacji, warunki jej użycia i odpowiedzialność za kompletność. Nie oznacza, że każda nazwana encja ma zostać oddzielnym dokumentem, obiektem albo rekordem. Jeden poprawnie opracowany fragment może obsługiwać kilka funkcji. Architektura nie ma rozmnażać treści, lecz zachować ich sens, pochodzenie i zależności.

### F13.1 Granice odpowiedzialności

**Knowledge Architecture — B:** ustala tożsamość i znaczenie jednostek wiedzy, relacji, klasyfikacji, wersji i warunków kompletności; określa, jak odróżnić mapowanie pomiarowe od wspierającego; projektuje kontrakty potrzebne do znalezienia właściwego objaśnienia lub wariantu. **Content Authoring — C:** pozyskuje źródła, pisze treść, uzasadnia relacje, opracowuje pytania, rozstrzygnięcia i warianty, zapewnia review oraz uprawnienia. B nie może „uzupełnić” brakującego uzasadnienia samą etykietą relacji; C nie może nadać odpowiedzi statusu niezależnego pomiaru bez informacji o ekspozycji.

**Warstwa doświadczenia ucznia:** zachowuje odpowiedzi, pomoc, czas, miejsce sesji i historię ekspozycji. To dane o aktywności, a nie twierdzenia korpusu. B określa ich znaczenie i powiązania potrzebne do interpretacji; nie przejmuje projektowania całej aplikacji. Sama karta konceptu nie wie, czy dany uczeń pamięta jej treść.

### F13.2 Minimalny słownik semantyczny

| Jednostka znaczeniowa | Co musi znaczyć w kontrakcie | Granica, której nie wolno przekroczyć |
|---|---|---|
| Educational Unit | Oficjalna część zakresu, zawierająca EO i podstawową terminologię | EU nie jest jedną umiejętnością ani obowiązkową długością sesji |
| Educational Objective | Oficjalny identyfikator, wersja, wymagane działanie i poziom L1/L2/L3 | Składowa pokrycia nie staje się nowym oficjalnym EO |
| Concept | Znaczące pojęcie, zasada albo rozróżnienie z zakresem i warunkami | Każde słowo i każdy dystraktor nie wymagają osobnego konceptu |
| Terminology / Definition | Preferowany termin PL/EN, synonimy, zakres znaczenia oraz źródłowa definicja lub odwołanie | Parafraza dydaktyczna nie udaje oficjalnego tłumaczenia |
| Explanatory content | Objaśnienie potrzebne do określonego działania, z granicami stosowania | Dłuższy tekst nie jest automatycznie pełniejszym pokryciem EO |
| Concept comparison | Nazwany wymiar różnicy, warunek rozstrzygający i przykłady obu stron | Samo sąsiedztwo dwóch definicji nie jest porównaniem |
| Example / Counterexample | Przypadek pokazujący regułę albo granicę kategorii | Kontrprzykład jest wymagany wtedy, gdy wnosi potrzebny kontrast |
| Worked scenario | Scenariusz wraz z uzasadnionymi krokami rozumowania | Obejrzenie kroków jest nauką z pomocą |
| Learning Unit | Cel, zakres, sekwencja działania i warunek zakończenia bieżącej pracy | Ukończenie jednostki nie potwierdza jeszcze retencji |
| Question / Answer Option | Zadanie z wystarczającymi warunkami; opcja lub stwierdzenie z rolą w rozstrzygnięciu | Opcja może dotyczyć tej samej zasady co pozostałe |
| Scoring rule | Wersjonowana reguła A/P/K, waga i właściwe parametry | Wynik oficjalny i siła dowodu ucznia są rozdzielone |
| Explanation | Reguła decydująca i rationale zadania, opcji lub stwierdzenia | Uzasadnienie nie może dopisać założenia brakującego w zadaniu |
| Misconception hypothesis | Sprawdzalna błędna reguła, alternatywne przyczyny i stan potwierdzenia | Wybór dystraktora nie dowodzi trwałego przekonania |
| Knowledge Relationship | Kierunkowa lub symetryczna teza z sensem, warunkiem, funkcją i weryfikacją | Link tekstowy nie wystarcza do uznania prerequisite |
| Prerequisite | Uzasadniony warunek potrzebny do określonego zadania | Nie oznacza globalnego zakazu rozpoczęcia całego tematu |
| Revision prompt | Zadanie ponownego wydobycia właściwej wiedzy, bez ujawnionej odpowiedzi | Termin powtórki wynika także z historii ucznia |
| Source Reference | Dokładne źródło wspierające konkretne twierdzenie, z wersją i lokalizacją | Sam publiczny URL nie potwierdza praw do reprodukcji |
| Question variant family | Grupa pozycji o wspólnym rozstrzygnięciu/scenariuszu i określonym podobieństwie | Kosmetyczna parafraza i tłumaczenie nie stają się nową rodziną |
| Assessment blueprint | Deklarowany zakres, rozkład zadań/punktów i warunki próby | Plan autorski nie przedstawia poufnego rozkładu egzaminu |
| Learning evidence | Zdarzenie z warunkami, oceną, kryterium EO i ograniczeniami interpretacji | Liczba kliknięć nie staje się dowodem wiedzy |
| Navigation context | Pytanie/aktywność źródłowa, punkt wejścia i punkt powrotu | To kontekst pracy ucznia, nie relacja dziedzinowa między pojęciami |

### F13.3 Wspólne pakiety informacji i zasady dziedziczenia

Wszystkie karty poniżej dziedziczą następujące kontrakty. Odwołanie do pakietu oznacza wymaganie **wszystkich jego informacji koniecznych**, nie samą nazwę. Brak pozycji oznaczonej jako opcjonalna nie unieważnia funkcji; brak krytycznej pozycji blokuje odpowiednią obietnicę.

- **K0 — Zakres:** EU, EO, wersja, poziom, wymagane działanie, składowe pokrycia, terminy podstawowe, status egzaminacyjne/wspierające/poza FL.
- **K1 — Nauka:** pojęcie lub rozróżnienie, definicja/odwołanie, autorskie objaśnienie, warunki, przykład, uzasadniony kontrast, adekwatna próba, źródło i status review.
- **K2 — Pytanie:** stem, wszystkie opcje/stwierdzenia, jednoznaczny klucz, typ, waga, parametry scoringu, główne i pomocnicze EO, czynność poznawcza, rozstrzygająca reguła, rationale każdej opcji, rodzina, język, prawa, wersja i review.
- **K3 — Powiązanie:** element źródłowy i docelowy, rodzaj/kierunek, pełne zdanie wyjaśniające sens, warunki, cel dydaktyczny, uzasadnienie źródłowe lub autorskie, status walidacji.
- **K4 — Naprawa:** konieczne są obserwacja błędu, poprawna reguła, korekta i właściwy follow-up. Błędna reguła jako hipoteza, alternatywne przyczyny, sonda rozdzielająca i stan potwierdzenia są warunkowe — wymagane wtedy, gdy proponuje się diagnozę konkretnej pomyłki. Zwykła korekta nie wymaga pełnego procesu diagnostycznego.
- **K5 — Nowość:** tożsamość i wersja zadania, rodzina i bliskie warianty/tłumaczenia, dopuszczona rola, historia ekspozycji użytkownika, stopień zmiany warunków w kolejnym zadaniu. Ekspozycja itemu/rodziny i istotny kontakt z badanym kryterium są rozdzielone: lektura zasady może pozostawić pytanie nowe, ale zmienia odstęp istotny dla retencji.
- **K6 — Sprawdzenie:** blueprint i deklarowany zakres, reguły czasu i pomocy, instrukcja, komplet zatwierdzonych zadań, warunki interpretacji wyniku, powiązanie z profilem egzaminu. Test tematu Level 1 jest bez limitu czasu, bez pomocy w trakcie i z review dopiero po zatwierdzeniu całości; pełny timed mock pozostaje Level 2.
- **K7 — Dowód i ciągłość:** aktywność źródłowa, odpowiedź, wynik, kryterium EO, sposób oceny, pomoc, ekspozycja przed próbą, wersja treści i ograniczenia. Zachować osobno czas od ostatniej samodzielnej próby oraz od ostatniego istotnego kontaktu z kryterium przed bieżącą próbą; osobno kontekst powrotu i powód rekomendacji.

**Proweniencja P:** każde istotne twierdzenie ma źródło, wersję, lokalizację, język, status sprawdzenia i zakres praw; autorski przykład pozostaje autorski. Pytanie wymaga weryfikacji klucza i każdej opcji. Relacja wymaga własnego uzasadnienia; nie dziedziczy poprawności tylko dlatego, że oba jej końce są poprawne. Wymogi te wynikają z P0 oraz P1 D10–D11.

**Dowód E:** każda interpretacja pozostaje ograniczona do mierzonego kryterium i warunków próby. Otwarcie treści, trafienie po pomocy, znana pozycja, nowy wariant i wynik po przerwie zachowują odrębność. Brak danych oznacza brak uprawnienia do mocniejszego wniosku. Samoocena odpowiedzi otwartej jest oznaczana jako samoocena, nie równoważna niezależnemu sprawdzeniu.

Retencja wymaga odstępu od ostatniego istotnego kontaktu z badanym kryterium, w tym objaśnienia, korekty, wskazówki lub ćwiczenia; nie wystarcza odstęp od wcześniejszej poprawnej próby. **Siedem dni od próby i minuta od objaśnienia oznacza bieżące relearning, nie odroczoną retencję.** Zachowuje się oba czasy. Kontakt poza aplikacją jest wyłącznie dobrowolnie deklarowany; brak deklaracji nie dowodzi braku zewnętrznej nauki. Wniosek o retencji ma jawny zakres znanych warunków.

### F13.4 Macierz pokrycia FR — karty kontraktowe

Każda karta zawiera 14 atrybutów z briefu: identyfikator FR; cel; czynność; informacje; encje; relacje; granularność objaśnienia; metadane egzaminu; proweniencję; dowód ucznia; konieczne/opcjonalne; konsekwencję braków; odpowiedzialność B; odpowiedzialność C. Identyfikator i tytuł są nagłówkiem, pozostałe atrybuty jawnie nazwano.

#### FR-001 — Orientacja

- **Cel / czynność:** zrozumieć zakres i warunki; rozpocząć naukę lub określić opcjonalny termin.
- **Informacje / encje:** K0, krótki opis Nauka/Sprawdzenie, profil czasu; EU, EO, examination profile, instrukcja.
- **Relacje / granularność:** profil → wersja zasad; krótka instrukcja z rozwinięciem, bez wykładu o wszystkich EO.
- **Metadane / proweniencja:** wersje sylabusa i regulaminu, język, standard/dostosowanie czasu; P i jawna data sprawdzenia.
- **Dowód / konieczne–opcjonalne:** zapoznanie z instrukcją nie dowodzi wiedzy; zakres i zasady konieczne, data egzaminu opcjonalna.
- **Brak:** nie zgadywać wersji ani dostosowania; pozostawić naukę z jawnym ograniczeniem zgodności.
- **B / C:** B definiuje semantykę profilu; C opracowuje i sprawdza orientację oraz zastrzeżenia warunków egzaminu.

#### FR-002 — Punkt startu

- **Cel / czynność:** dobrać ilość instrukcji; wybrać krótki pretest albo pominąć go.
- **Informacje / encje:** sondy K2, K0 i warunki interpretacji; pytanie, EO, kryterium początkowe.
- **Relacje / granularność:** sonda → badana składowa → pierwsza jednostka; feedback wskazuje pojedynczy brak.
- **Metadane / proweniencja:** poziom EO, format, rola orientacyjna; P oraz uzasadnione mapowanie.
- **Dowód / konieczne–opcjonalne:** E dla rozwiązanych sond, nieweryfikowane obszary nadal nieznane; doświadczenie deklarowane opcjonalne.
- **Brak:** brak reprezentatywnych sond oznacza start z lekcji, nie pozorną diagnozę.
- **B / C:** B rozdziela prior knowledge, deklarację i wynik; C tworzy krótkie sondy oraz warunki przejścia do objaśnienia.

#### FR-003 — Następny krok

- **Cel / czynność:** rozpocząć sensowną aktywność bez planowania; zaakceptować rekomendację lub wybrać alternatywę.
- **Informacje / encje:** cel, dostępność, prerequisite, revision i K7; aktywność, EO, powód rekomendacji.
- **Relacje / granularność:** potrzeba → odpowiednia aktywność; jedno zdanie „dlaczego teraz”, szczegóły opcjonalnie.
- **Metadane / proweniencja:** właściwy poziom i aktualność zakresu; P dla treści, oznaczenie reguły doboru jako projektowej.
- **Dowód / konieczne–opcjonalne:** wybór nie dowodzi wiedzy; konieczne uzasadnienie i dostępna aktywność, preferencja czasu opcjonalna.
- **Brak:** zaproponować dostępny temat i ujawnić niepełność podstaw rekomendacji.
- **B / C:** B definiuje przesłanki i dostępność; C zapewnia sensowne jednostki oraz zrozumiałe opisy celu.

#### FR-004 — Pokrycie

- **Cel / czynność:** wiedzieć, co wymagane i sprawdzone; przeglądać zakres oraz przejść do luki.
- **Informacje / encje:** pełne K0, status treści i dowodów; EU, EO, termin, składowa, aktywność.
- **Relacje / granularność:** treść wspiera EO, zadanie mierzy kryterium; nazwa celu i konkretna luka, rozwinięcie na żądanie.
- **Metadane / proweniencja:** oficjalne identyfikatory/poziomy, wersja; P z lokalizacją sylabusa.
- **Dowód / konieczne–opcjonalne:** E przypisany mierzonej części; cały inwentarz konieczny dla pełnego zakresu, kolejność sylabusa opcjonalna.
- **Brak:** nieznana komórka jest brakiem pokrycia, nie zerowym wynikiem ucznia.
- **B / C:** B rozróżnia mapowania i części; C uzasadnia każde przypisanie i uzupełnia terminologię bez własnego numerowania EO.

#### FR-005 — Krótkie objaśnienie

- **Cel / czynność:** zrozumieć zasadę; przeczytać minimum, obejrzeć przykład, opcjonalnie rozwinąć.
- **Informacje / encje:** K1 i K0; koncept, definition, explanation, example, learning unit.
- **Relacje / granularność:** pojęcie → objaśnienie → przykład → cel; rdzeń i rozwinięcie zachowują tę samą regułę.
- **Metadane / proweniencja:** poziom, zakres egzaminacyjny/wspierający; P, definicja oddzielona od parafrazy.
- **Dowód / konieczne–opcjonalne:** wyświetlenie to ekspozycja, nie niezależne wykonanie; rdzeń i przykład konieczne, dalsza lektura opcjonalna.
- **Brak:** nie proponować zadania wymagającego niedostępnego objaśnienia jako kompletnej jednostki nauki.
- **B / C:** B ustala spójność warstw; C pisze minimum, przykład i rozwinięcie bez ukrywania warunków rozstrzygających.

#### FR-006 — Retrieval i aplikacja

- **Cel / czynność:** wykazać wymaganą czynność; odpowiedzieć bez pomocy, także własnymi słowami.
- **Informacje / encje:** K0/K2, kryteria poprawności, rubryka i dopuszczalne uzasadnienia; zadanie, EO, rubric.
- **Relacje / granularność:** odpowiedź → kryterium EO; feedback do reguły i warunku, nie tylko podobieństwa słów.
- **Metadane / proweniencja:** L1/L2/L3 i rola zadania; P dla klucza/rubryki.
- **Dowód / konieczne–opcjonalne:** E z metodą oceny; rubryka konieczna dla otwartych, swobodne komentarze opcjonalne.
- **Brak:** nieoceniona wypowiedź pozostaje wykonaniem bez potwierdzenia poprawności.
- **B / C:** B definiuje zgodność kryterium z EO; C tworzy rubrykę, przykłady graniczne i zadania o wymaganej czynności.

#### FR-007 — Format A

- **Cel / czynność:** rozwiązać Single Choice i zrozumieć wynik; wybrać, zmienić, wyczyścić, zatwierdzić.
- **Informacje / encje:** K2, jedna poprawna opcja i waga; question, option, scoring rule.
- **Relacje / granularność:** wybór → klucz → rationale; jedno rozstrzygnięcie i pełne opcje po próbie.
- **Metadane / proweniencja:** typ A, maksymalne punkty, wersja regulaminu; P i kontrola jednoznaczności.
- **Dowód / konieczne–opcjonalne:** E oraz wynik punktowy; klucz/waga/rationale konieczne, hipoteza błędu opcjonalna.
- **Brak:** brak pewnego klucza blokuje punktowane pytanie, nie uruchamia zgadywania.
- **B / C:** B opisuje kontrakt scoringu i decyzji; C zapewnia jeden klucz i recenzuje wszystkie alternatywy.

#### FR-008 — Format P

- **Cel / czynność:** wybrać wskazaną liczbę odpowiedzi; odróżnić błąd treści od nadmiaru zaznaczeń.
- **Informacje / encje:** K2, k poprawnych, liczba wyborów i trafień; question, options, scoring rule.
- **Relacje / granularność:** każda opcja → klucz/rationale; objaśnienie wyniku całego P i decyzji składowych.
- **Metadane / proweniencja:** typ P, jawne k, waga, reguła nadmiaru; P z regulaminu.
- **Dowód / konieczne–opcjonalne:** punkty i decyzje E osobno; k konieczne, diagnoza źródła błędu warunkowa.
- **Brak:** bez k albo kompletnego klucza pytanie nie nadaje się do użycia.
- **B / C:** B rozdziela scoring i sygnały diagnostyczne; C sprawdza wszystkie opcje oraz jednoznaczność instrukcji liczby wyborów.

#### FR-009 — Format K

- **Cel / czynność:** ocenić każde stwierdzenie Prawda/Fałsz; zobaczyć wynik częściowy.
- **Informacje / encje:** K2, m stwierdzeń, klucz każdego i waga; statement, decision, scoring rule.
- **Relacje / granularność:** stwierdzenie → reguła i odpowiednie kryterium; rationale na poziomie wiersza.
- **Metadane / proweniencja:** typ K, liczba stwierdzeń, reguła częściowych punktów; P.
- **Dowód / konieczne–opcjonalne:** decyzje E zachowane, nie traktowane automatycznie jako niezależne próby; klucze i kontekst konieczne.
- **Brak:** nieocenialne stwierdzenie wstrzymuje cały pakiet do poprawy przed publikacją.
- **B / C:** B określa wspólny kontekst i zależności; C pisze pojedyncze rozstrzygalne tezy, z pełnym uzasadnieniem każdego wiersza.

#### FR-010 — Zatwierdzenie odpowiedzi

- **Cel / czynność:** oddzielić pierwsze wykonanie od poprawiania po feedbacku; świadomie zatwierdzić.
- **Informacje / encje:** stan próby, odpowiedzi, wersja pytania, moment ujawnienia; attempt, question, feedback event.
- **Relacje / granularność:** próba → niezmienny zestaw odpowiedzi i wersja; informacja o zatwierdzeniu bez nowej treści domenowej.
- **Metadane / proweniencja:** format i reguła obowiązujące w próbie; P dla ich wersji.
- **Dowód / konieczne–opcjonalne:** E pierwszej próby pozostaje; kolejna próba ma osobny status, komentarz opcjonalny.
- **Brak:** bez rozdziału prób nie wolno interpretować ostatniej poprawionej odpowiedzi jako pierwotnej.
- **B / C:** B definiuje znaczenie prób i ekspozycji; C zapewnia stabilne wersje pytania i objaśnienia.

#### FR-011 — Warstwowy feedback

- **Cel / czynność:** rozumieć wynik bez obowiązkowej długiej lektury; rozwinąć potrzebne uzasadnienie.
- **Informacje / encje:** K2 i wybrana odpowiedź; explanation, option rationale, decisive rule.
- **Relacje / granularność:** wynik → reguła → błędne/pominięte decyzje → pełne rationale.
- **Metadane / proweniencja:** format, waga i składowe punktacji; P dla każdego rozstrzygnięcia.
- **Dowód / konieczne–opcjonalne:** czytanie feedbacku jest pomocą dla kolejnych prób; wszystkie rationale konieczne redakcyjnie, ich rozwinięcie opcjonalne.
- **Brak:** nie publikować pytania z niekompletnym wymaganym pakietem; po wykryciu luki zastosować FR-033/035.
- **B / C:** B definiuje poziomy objaśnień; C pisze krótki rdzeń i pełne uzasadnienia bez sprzeczności.

#### FR-012 — Opcja do rozróżnienia

- **Cel / czynność:** zrozumieć konkretny wybór; otworzyć jego uzasadnienie i potrzebną wiedzę.
- **Informacje / encje:** K2/K3 i ewentualne K1; option, rationale, concept comparison.
- **Relacje / granularność:** opcja → uzasadnienie → rozstrzygająca zasada/porównanie; link z objaśnionym celem.
- **Metadane / proweniencja:** EO główny/pomocniczy i zakres pojęcia; P dla rationale oraz relacji.
- **Dowód / konieczne–opcjonalne:** kliknięcie jest eksploracją; rationale konieczne, osobna karta dla każdej opcji zbędna.
- **Brak:** pokazać dostępne uzasadnienie bez pozornego linku do niesprawdzonej wiedzy.
- **B / C:** B dopuszcza wiele opcji do jednej zasady; C uzasadnia mapowanie zamiast tworzyć automatyczne osobne koncepty.

#### FR-013 — Odwracalna eksploracja

- **Cel / czynność:** zbadać wiedzę i wrócić do tego samego zadania.
- **Informacje / encje:** K7, źródłowa aktywność, opcja, wynik, pozycja i cel odejścia; navigation context.
- **Relacje / granularność:** aktywność → odnośnik → koncept; ścieżka powrotu jest relacją użytkową, nie domenową.
- **Metadane / proweniencja:** kontekst Nauka/Sprawdzenie, status zatwierdzenia i wersje; P dla odwiedzanej wiedzy.
- **Dowód / konieczne–opcjonalne:** ekspozycja treści zachowana; kotwica powrotu konieczna, pełna historia wizualna opcjonalna.
- **Brak:** zachować pytanie źródłowe i umożliwić jawny powrót; nie przechodzić do przypadkowej nowej sesji.
- **B / C:** B opisuje wymagany kontekst i stabilne odwołania; C tworzy tytuły oraz lokalne fragmenty zrozumiałe poza całą lekcją.

#### FR-014 — Porównanie i prerequisite

- **Cel / czynność:** usunąć konkretną przeszkodę; porównać pojęcia albo odświeżyć potrzebną podstawę.
- **Informacje / encje:** K1/K3, kryterium kontrastu i warunek konieczności; comparison, prerequisite.
- **Relacje / granularność:** odróżnij-od z wymiarem; wymaga-do-zadania z uzasadnieniem; jedno porównanie/prerequisite na krok.
- **Metadane / proweniencja:** związek z EO i poziomem; P, relacja autorska wyraźnie oznaczona.
- **Dowód / konieczne–opcjonalne:** lektura nie zalicza obu konceptów; sens relacji konieczny, graf opcjonalny.
- **Brak:** nie wyświetlać niesprawdzonego prerequisite jako obowiązkowej bramki.
- **B / C:** B odróżnia zależność domenową i dydaktyczną; C pisze kontrasty, warunki i zadania sprawdzające użyteczność.

#### FR-015 — Hipoteza pomyłki

- **Cel / czynność:** sprawdzić możliwe źródło błędu; odpowiedzieć na sondę lub krótko uzasadnić wybór.
- **Informacje / encje:** K4; błędna reguła, poprawna reguła, alternatywy, confirmatory activity.
- **Relacje / granularność:** obserwacja sugeruje hipotezę, sonda ją rozróżnia; ostrożny komunikat bez etykietowania osoby.
- **Metadane / proweniencja:** zakres EO i status hipotezy; P dla reguły, osobne pochodzenie dowodu diagnozy.
- **Dowód / konieczne–opcjonalne:** sonda aktualizuje hipotezę, nie automatycznie mastery; alternatywne przyczyny konieczne.
- **Brak:** zaoferować neutralną korektę bez diagnozy konkretnego misconception.
- **B / C:** B opisuje warunki uzasadnienia i obalenia; C tworzy sondę, kontrprzykład oraz rozstrzygający follow-up.

#### FR-016 — Krótka remediacja

- **Cel / czynność:** poprawić regułę i zakończyć naprawę albo świadomie ją odłożyć.
- **Informacje / encje:** K4, mały materiał K1, wariant K5, kryterium wyjścia; remediation unit.
- **Relacje / granularność:** brak → korekta → weryfikacja; jednoznaczny zakres, nie cały rozdział po jednym błędzie.
- **Metadane / proweniencja:** poziom EO, role treningowe zadań; P.
- **Dowód / konieczne–opcjonalne:** natychmiastowa poprawa jest wynikiem nauki; wyjście z powtarzanej porażki konieczne, dodatkowy przykład warunkowy.
- **Brak:** oznaczyć nierozwiązaną lukę i zaproponować dostępną pomoc; nie zapętlać znanego pytania.
- **B / C:** B definiuje powiązanie korekty i kryterium; C przygotowuje alternatywne objaśnienie oraz ograniczoną ścieżkę po niepowodzeniu.

#### FR-017 — Inny wariant

- **Cel / czynność:** sprawdzić regułę poza zapamiętaną odpowiedzią; rozwiązać odmienny przypadek.
- **Informacje / encje:** K2/K5, zachowany cel i zmienione warunki; question, family, comparison of variants.
- **Relacje / granularność:** mierzy-to-samo-kryterium, różni-się-warunkiem; objaśnienie nowego rozstrzygnięcia po odpowiedzi.
- **Metadane / proweniencja:** EO, czynność, rodzina, przewidywana trudność oddzielona od empirycznej; P.
- **Dowód / konieczne–opcjonalne:** E z nowością przy starcie; historia rodziny konieczna, statystyki trudności opcjonalne do pilota.
- **Brak:** użyć znanego zadania tylko jako utrwalenia, bez deklaracji nowego transferu.
- **B / C:** B definiuje znaczącą zmianę; C tworzy różne scenariusze i recenzuje porównywalność kryterium.

#### FR-018 — Pomoc i znajomość

- **Cel / czynność:** korzystać z pomocy bez fałszowania dowodu; otworzyć wiedzę lub zgłosić znajomość pytania.
- **Informacje / encje:** K7, rodzaj i moment pomocy, K5; assistance event, attempt, exposure.
- **Relacje / granularność:** pomoc wspiera daną odpowiedź; krótki opis konsekwencji dowodowej.
- **Metadane / proweniencja:** kontekst próby i scoring bez zmian; P dla udzielonej pomocy.
- **Dowód / konieczne–opcjonalne:** punktacja i samodzielność osobno; rejestr pomocy konieczny, deklaracja znajomości poza systemem dobrowolna.
- **Brak:** nieznane warunki ujawnić i nie przyznawać najmocniejszego statusu niezależności.
- **B / C:** B odróżnia pomoc merytoryczną od dostępności; C oznacza, jaka treść ujawnia istotną regułę lub klucz.

#### FR-019 — Ochrona rezerwy

- **Cel / czynność:** uzyskać uczciwą nową próbę; korzystać z nauki bez przypadkowego ujawnienia rezerwy.
- **Informacje / encje:** K5, role publikacyjne, tłumaczenia, pokrewieństwo; item, family, exposure event.
- **Relacje / granularność:** warianty równoważne i bliskie; wystarcza opis utraty nowości, bez ujawnienia klucza.
- **Metadane / proweniencja:** przeznaczenie trening/pomiar, wersja, język; P i review podobieństwa.
- **Dowód / konieczne–opcjonalne:** nowość dla danej osoby ocenia się przed prezentacją zadania w bieżącej próbie. Pokazanie stemu zapisuje ekspozycję i wyklucza nowość przyszłych prób tej osoby, lecz samo nie unieważnia bieżącej próby. Ochrona search/preview konieczna, deklaracja zewnętrzna opcjonalna.
- **Brak:** nieoznaczona rodzina nie może być zaufaną rezerwą; pozycja pozostaje treningowa.
- **B / C:** B określa znaczenie ekspozycji i pokrewieństwa; C klasyfikuje warianty, unikając sztucznego mnożenia „nowych” itemów.

#### FR-020 — Powtórka po przerwie

- **Cel / czynność:** ponownie wydobyć wiedzę; wykonać wskazaną powtórkę przed objaśnieniem.
- **Informacje / encje:** K0/K5/K7, ostatnia samodzielna próba, ostatni istotny kontakt z kryterium przed bieżącą próbą i aktualna potrzeba; revision prompt, evidence.
- **Relacje / granularność:** prompt → sprawdzane kryterium, potrzeba → powód; jeden jawny powód terminu.
- **Metadane / proweniencja:** poziom EO i rola powtórkowa; P dla treści, harmonogram jako hipoteza.
- **Dowód / konieczne–opcjonalne:** oba rzeczywiste odstępy i warunki, nie tylko planowana data; historia kontaktów w aplikacji konieczna, zewnętrzna nauka wyłącznie dobrowolnie deklarowana, termin egzaminu opcjonalny.
- **Brak:** brak czasu istotnego kontaktu blokuje mocną etykietę retencji; świeża korekta oznacza relearning, nawet przy odległej poprzedniej próbie.
- **B / C:** B definiuje warunki dowodu odroczonego; C opracowuje prompty adekwatne do celu i wystarczające warianty.

#### FR-021 — Równowaga pracy

- **Cel / czynność:** naprawiać braki bez utraty szerokości; przejść z powtórek do nowego celu.
- **Informacje / encje:** K0/K7, dostępne jednostki, zaległości i niepokryte cele; coverage gap, activity.
- **Relacje / granularność:** aktywność realizuje pokrycie/naprawę/retencję; krótkie uzasadnienie wybranej kategorii.
- **Metadane / proweniencja:** zakres całego kursu lub pilota; P dla mapowania.
- **Dowód / konieczne–opcjonalne:** ukończenie kolejki nie oznacza ukończenia sylabusa; status pokrycia konieczny, preferencje opcjonalne.
- **Brak:** pokazać dostępny zakres i brak dalszego materiału, nie komunikat pełnej gotowości.
- **B / C:** B odróżnia potrzeby i luki; C dostarcza sensowne aktywności dla wszystkich deklarowanych części zakresu.

#### FR-022 — Model dowodów

- **Cel / czynność:** rozumieć podstawę stanu wiedzy; sprawdzić, co potwierdzono i w jakich warunkach.
- **Informacje / encje:** K7 i kryteria K0; evidence event, EO component, revision flag.
- **Relacje / granularność:** dowód wspiera określone kryterium; opis warunków oraz ograniczenia, nie mistyczny wynik mastery.
- **Metadane / proweniencja:** poziom, wersje treści/reguły, sposób oceny; P dla kryteriów, autorskie przejścia oznaczone.
- **Dowód / konieczne–opcjonalne:** historia nie znika po błędzie; pomoc, nowość oraz osobne odstępy od samodzielnej próby i istotnego kontaktu z kryterium są konieczne. Niepewność kontaktów zewnętrznych pozostaje jawna; pewność odpowiedzi opcjonalna.
- **Brak:** zachować „brak wystarczających danych” zamiast interpolować z sąsiednich pojęć.
- **B / C:** B definiuje granice wnioskowania; C określa obserwowalne kryteria wykonania i typy zadań, które je sprawdzają.

#### FR-023 — Profil postępu

- **Cel / czynność:** widzieć luki i priorytety; przejść od informacji o postępie do działania.
- **Informacje / encje:** K0/K7, status dostępności treści; coverage, evidence summary, next activity.
- **Relacje / granularność:** stan → dowody → aktywność; prosta etykieta i dostępne wyjaśnienie podstawy.
- **Metadane / proweniencja:** mianownik deklarowanego zakresu, poziomy i wersja; P dla zakresu.
- **Dowód / konieczne–opcjonalne:** viewed/assisted/independent/novel/delayed rozróżnione; luki konieczne, statystyki aktywności drugorzędne.
- **Brak:** nieznany mianownik uniemożliwia deklarację pełnego pokrycia; brak pomiaru pozostaje widoczny.
- **B / C:** B definiuje zrozumiałe znaczenie agregacji; C opracowuje etykiety nieobiecujące więcej niż dowody.

#### FR-024 — Gotowość

- **Cel / czynność:** ocenić pozostałe ryzyka; porównać warunki i wyniki kolejnych prób.
- **Informacje / encje:** K0/K6/K7, retencja, formaty, nowe rodziny i słabe cele; readiness profile.
- **Relacje / granularność:** każda przesłanka → konkretne dowody; kilka wskazówek, z możliwością kontroli źródeł wyniku.
- **Metadane / proweniencja:** zakres, czas, język, ekspozycja, scoring; P dla zasad, brak walidacji prognostycznej jawny.
- **Dowód / konieczne–opcjonalne:** wynik próby nie jest prawdopodobieństwem zdania; warunki i braki konieczne, próg roboczy opcjonalny eksperymentalnie.
- **Brak:** nie wydawać etykiety „gotowy”; wskazać, czego nie sprawdzono.
- **B / C:** B definiuje porównywalność przesłanek; C opisuje ostrożne komunikaty i warunki interpretacji.

#### FR-025 — Dopuszczenie sprawdzenia

- **Cel / czynność:** wybrać wiarygodny test tematu albo pełny mock.
- **Informacje / encje:** K6, liczba i zakres dostępnych K2/K5; blueprint, test form, availability.
- **Relacje / granularność:** zestaw pokrywa zadeklarowany zakres; krótka informacja o możliwości oraz ograniczeniach.
- **Metadane / proweniencja:** A/P/K, punkty, EU/EO, czas, profil wersji; P i review blueprintu.
- **Dowód / konieczne–opcjonalne:** samo uruchomienie bez dowodu wiedzy; komplet wymaganych pozycji konieczny. Test tematu Level 1: bez limitu czasu i pomocy, review po zatwierdzeniu całości; pełny timed mock dopiero Level 2.
- **Brak:** zaoferować jawny test wycinka lub praktykę; nie uzupełniać rezerwy znanymi itemami po cichu.
- **B / C:** B definiuje wystarczalność formy; C zapewnia recenzowane zestawy i uczciwą deklarację reprezentatywności.

#### FR-026 — Przebieg symulacji

- **Cel / czynność:** wykonać próbę w określonych warunkach; zmieniać odpowiedzi, przeglądać zaznaczenia i zatwierdzić całość.
- **Informacje / encje:** K6/K2/K7, status odpowiedzi, limit, instrukcja; assessment attempt.
- **Relacje / granularność:** pozycje należą do formy; podczas próby tylko instrukcje, bez edukacyjnych odsyłaczy i rationale.
- **Metadane / proweniencja:** konfiguracja czasu i scoringu, język, warunki pomocy; P.
- **Dowód / konieczne–opcjonalne:** odpowiedzi i czas E; przestrzeganie warunków konieczne, flagi „sprawdź” opcjonalne.
- **Brak:** niekompletne krytyczne zasady blokują rozpoczęcie; awaria przechodzi do FR-027.
- **B / C:** B określa dostępne/niedostępne warstwy wiedzy; C pisze neutralne instrukcje niepodpowiadające rozwiązań.

#### FR-027 — Przerwanie i konwersja

- **Cel / czynność:** zachować pracę i uczciwość pomiaru; opuścić, porzucić lub przejść w naukę.
- **Informacje / encje:** K7, czas, zdarzenie przerwania, ekspozycja; attempt status, interruption.
- **Relacje / granularność:** przerwana próba → dalsza aktywność; jasny komunikat o nieodwracalnej zmianie statusu.
- **Metadane / proweniencja:** wybrany protokół czasowy i pomocy; rozdzielić oficjalną zasadę od projektowej polityki przerwania.
- **Dowód / konieczne–opcjonalne:** zachować wykonanie z ograniczeniem; status przerwania konieczny, powód podany przez użytkownika opcjonalny.
- **Brak:** niepewnego przebiegu nie traktować jak nieprzerwanej symulacji.
- **B / C:** B definiuje konsekwencje interpretacyjne i ekspozycję; C przygotowuje krótkie objaśnienie alternatyw.

#### FR-028 — Wynik i review

- **Cel / czynność:** zamienić wynik na plan; przejrzeć odpowiedzi i wykonać celowaną naukę.
- **Informacje / encje:** K2/K6/K7, punkty, składowe błędy, K4/K5; result, remediation plan.
- **Relacje / granularność:** strata → możliwy brak → materiał → nowe zadanie; wynik całkowity, potem szczegóły opcji/stwierdzeń.
- **Metadane / proweniencja:** suma wag, reguły, zakres, czas, ekspozycja; P.
- **Dowód / konieczne–opcjonalne:** review ujawnia rozwiązania na przyszłość; scoring konieczny, diagnoza misconception warunkowa.
- **Brak:** niepewny item wyłączyć z interpretacji i pokazać ograniczenie zgodnie z FR-035.
- **B / C:** B rozdziela analizę wyniku i diagnozę; C dostarcza pełne rationale i materiały do ograniczonego planu dalszej nauki.

#### FR-029 — Nauka formatu

- **Cel / czynność:** opanować instrukcje bez mylenia ich z wiedzą RE; wykonać przykłady A/P/K.
- **Informacje / encje:** objaśnione reguły, neutralne zadania demonstracyjne, przykłady częściowych wyników; format tutorial.
- **Relacje / granularność:** decyzja użytkownika → konsekwencja scoringu; prosty przykład dla każdej istotnej reguły.
- **Metadane / proweniencja:** typ, waga, k/m, wersja regulaminu; P i autorski status demonstracji.
- **Dowód / konieczne–opcjonalne:** kompetencja formatu osobno od EO; przykłady nadmiaru/braku konieczne, rozbudowany trening opcjonalny.
- **Brak:** nie diagnozować błędu formatu jako braku pojęcia.
- **B / C:** B oddziela format i domenę; C pisze jednoznaczne demonstracje, które nie zużywają rezerwy.

#### FR-030 — Opcjonalna pewność

- **Cel / czynność:** ujawnić niepewne trafienie; dobrowolnie oznaczyć pewność przed feedbackiem w Nauce lub jawnie wydzielonym eksperymencie. Timed mock domyślnie nie zbiera tych deklaracji.
- **Informacje / encje:** proste definicje wyborów, odpowiedź i moment deklaracji; confidence statement.
- **Relacje / granularność:** deklaracja dotyczy danej próby; feedback wyjaśnia ograniczoną interpretację.
- **Metadane / proweniencja:** kontekst i ekspozycja próby; semantyka skali jako hipoteza projektowa.
- **Dowód / konieczne–opcjonalne:** pewność nie zmienia oficjalnych punktów; opcjonalna, pominięcie nie oznacza niskiej pewności.
- **Brak:** rekomendacja działa bez tej informacji; brak diagnozy złej kalibracji.
- **B / C:** B określa znaczenie odpowiedzi/braku; C przygotowuje krótkie komunikaty oraz feedback po niepewnym trafieniu. Priorytet Validate.

#### FR-031 — Znajdowanie wiedzy

- **Cel / czynność:** odnaleźć znany lub polsko-angielski termin; otworzyć właściwy materiał.
- **Informacje / encje:** K0/K1, aliasy, rozróżnienia znaczeń, publikacja K5; term, concept, learning material.
- **Relacje / granularność:** termin → znaczenie → materiał; krótki kontekst odróżniający wyniki.
- **Metadane / proweniencja:** język, zakres FL, wersja; P i kontrola terminologii.
- **Dowód / konieczne–opcjonalne:** otwarcie rejestruje ekspozycję, nie wiedzę; słownik kontekstowy konieczny, wyszukiwarka globalna Level 2.
- **Brak:** jawne „brak materiału”, bez domyślnie wygenerowanej definicji; rezerwa nie pojawia się w wynikach.
- **B / C:** B definiuje aliasy i rozróżnianie znaczeń; C opracowuje terminologię, tytuły i bezpieczne opisy materiałów.

#### FR-032 — Wznowienie

- **Cel / czynność:** kontynuować po przerwie; wybrać powrót do zadania lub krótką powtórkę.
- **Informacje / encje:** K7, miejsce sesji, rzeczywisty czas, stan ukończenia, dostępna treść; session context.
- **Relacje / granularność:** poprzedni krok → kontynuacja, przerwa → możliwa rewizja; krótkie przypomnienie celu.
- **Metadane / proweniencja:** wersja materiału i kontekst nauka/sprawdzenie; P przy zmianie treści.
- **Dowód / konieczne–opcjonalne:** historia pozostaje; odstęp konieczny dla retencji, termin egzaminu opcjonalny.
- **Brak:** zachować dostępne dowody i zaproponować wybór celu, bez fikcyjnego odtworzenia odpowiedzi.
- **B / C:** B definiuje wymagane powiązania ciągłości; C zapewnia zwięzłe streszczenia celu, bez automatycznego ujawniania klucza wznowionego zadania.

#### FR-033 — Braki informacji

- **Cel / czynność:** uczyć się w granicach dostępnego materiału; rozpoznać brak i wybrać bezpieczną alternatywę.
- **Informacje / encje:** typ braku, krytyczność, status review, dostępne zamienniki; completeness condition.
- **Relacje / granularność:** brak → dotknięta funkcja → dozwolona alternatywa; jasny komunikat bez fikcyjnej treści.
- **Metadane / proweniencja:** dotknięte wersje/EO/pakiety; P i status niedostępne/nieweryfikowane/niekompletne.
- **Dowód / konieczne–opcjonalne:** brak korpusu nie obniża wiedzy użytkownika; typ braku konieczny, data uzupełnienia opcjonalna.
- **Brak:** gdy nieznana sama kompletność, użyć najbardziej zachowawczej interpretacji. Niepełna historia istotnych kontaktów z kryterium pozwala zachować wynik wykonania, ale nie potwierdza mocnego wniosku o retencji.
- **B / C:** B definiuje testy wystarczalności; C rozwiązuje braki treści i weryfikacji, zamiast obchodzić je generowaniem.

#### FR-034 — Bramka publikacji

- **Cel / czynność:** dopuścić tylko materiał wspierający obiecaną funkcję; redaktor ocenia gotowość.
- **Informacje / encje:** K0–K6 odpowiednie do pakietu, źródła, prawa, recenzent, wersja; publication decision.
- **Relacje / granularność:** zatwierdzenie dotyczy konkretnej wersji i użycia; uzasadnienie decyzji dla redaktora.
- **Metadane / proweniencja:** zgodność EO/scoring/język, rola trening/pomiar; P w całości.
- **Dowód / konieczne–opcjonalne:** status ekspercki nie jest kalibracją psychometryczną; krytyczne pola i review konieczne.
- **Brak:** wstrzymanie odpowiedniego zastosowania, np. rezerwy, nie automatyczne publikowanie szkicu.
- **B / C:** B określa kontrakty przyjęcia; C przedstawia treść, dowody i recenzję; nazwa pakietu nie zastępuje kontroli jakości.

#### FR-035 — Wątpliwość i korekta

- **Cel / czynność:** zakwestionować item i uzyskać uczciwą korektę wyniku.
- **Informacje / encje:** wersja pytania, zgłoszenie, ustalenie review, wpływ na próby; issue, correction, affected evidence.
- **Relacje / granularność:** zmiana → klucz/wyjaśnienie → dotknięte wyniki; wskazać, co i dlaczego skorygowano.
- **Metadane / proweniencja:** wcześniejsza/nowa reguła, zakres i wersje; P z podstawą rozstrzygnięcia.
- **Dowód / konieczne–opcjonalne:** zmieniona interpretacja zachowuje historię; ślad wpływu konieczny, komentarz ucznia opcjonalny.
- **Brak:** wstrzymać nowe użycie oraz mocne wnioski z pozycji, której poprawność jest nierozstrzygnięta.
- **B / C:** B określa zakres oddziaływania; C rozstrzyga merytorycznie, poprawia i ponownie recenzuje.

#### FR-036 — Dostępność

- **Cel / czynność:** wykonać równoważne zadanie klawiaturą i technologią asystującą.
- **Informacje / encje:** etykiety, instrukcje, stany, kontekst K, alternatywy treści; accessible representation.
- **Relacje / granularność:** kontrolka → właściwa opcja/stwierdzenie; wynik tekstowy i logiczna kolejność odczytu.
- **Metadane / proweniencja:** format, język, profil czasu; P dla treści i cel WCAG 2.2 AA.
- **Dowód / konieczne–opcjonalne:** czytnik nie jest pomocą merytoryczną; równoważność treści konieczna, dekoracje opcjonalne.
- **Brak:** nie uznawać niedostępności za błąd wiedzy; wadliwy wariant trzeba poprawić.
- **B / C:** B opisuje semantyczną równoważność i kontekst; C pisze alternatywy bez zdradzania rozwiązania oraz jednoznaczne etykiety Prawda/Fałsz.

#### FR-037 — Terminologia PL/EN

- **Cel / czynność:** rozumieć termin w sensie IREB; sprawdzić odpowiednik i odróżnić parafrazę.
- **Informacje / encje:** terminy preferowane, aliasy, definicje, odradzane skróty; terminology entry.
- **Relacje / granularność:** termin PL ↔ EN ↔ znaczenie; krótka definicja i istotna różnica użycia zawodowego.
- **Metadane / proweniencja:** język i wersja glossary/syllabus; P, status tłumaczenia jawny.
- **Dowód / konieczne–opcjonalne:** odczyt definicji to pomoc; kontrolowane mapowanie konieczne, noty etymologiczne opcjonalne.
- **Brak:** oznaczyć autorskie tłumaczenie, nie prezentować go jako oficjalnego.
- **B / C:** B definiuje znaczenia i wieloznaczność; C prowadzi review PL/EN i sprawdza zachowanie sensu negacji oraz kwantyfikatorów pytań.

#### FR-038 — Zakres pilota

- **Cel / czynność:** rozumieć, do czego wystarcza bieżący materiał; świadomie rozpocząć wycinek przygotowania.
- **Informacje / encje:** manifest deklarowanego zakresu, pokrycie i brakujące funkcje; corpus release, scope statement.
- **Relacje / granularność:** wydanie → cele/treści/pytania → dostępne aktywności; krótki komunikat i szczegóły pokrycia.
- **Metadane / proweniencja:** wersje IREB, częściowe EO, liczba niezależnych rodzin; P i audyt wydania.
- **Dowód / konieczne–opcjonalne:** wyniki dotyczą tego wycinka; zakres konieczny, plan rozbudowy opcjonalny.
- **Brak:** brak audytu uniemożliwia obietnicę pełnego przygotowania lub pełnej symulacji.
- **B / C:** B definiuje kryterium kompletności wydania; C potwierdza rzeczywisty stan materiału i uczciwie opisuje ograniczenia.

### F13.5 Łańcuch 1: błędna opcja → wyjaśnienie pomyłki

**Przypadek:** uczeń po zatwierdzeniu wybiera „wyjaśnij, dlaczego ta opcja nie pasuje”. Łańcuch realizuje FR-007–012, 014–018, 033–035.

| Ogniwo | Informacja konieczna | Warunkowa / opcjonalna | Co wolno wywnioskować |
|---|---|---|---|
| Znaczenie zadania | Treść, wystarczający kontekst, wersja i kryterium EO | Pomocnicze EO, szerszy kontekst zawodowy | Czego ta odpowiedź rzeczywiście dotyczy |
| Decyzja ucznia | Zatwierdzona opcja, pozostałe wybory P/K, moment pomocy | Pewność i własne uzasadnienie | Jaka decyzja była błędna; nie dlaczego ją podjęto |
| Ocena | Zweryfikowany klucz, parametry scoringu, źródło | Dane empiryczne jakości itemu | Wynik punktowy oraz poprawność składowej |
| Rationale | Przyczyna nieadekwatności opcji w tym kontekście i poprawna zasada | Kontrprzykład, porównanie | Jaka reguła rozstrzyga; bez dopisywania założeń |
| Wiedza | Zweryfikowany materiał wyjaśniający zasadę i link o właściwej funkcji | Prerequisite, dodatkowy przykład | Gdzie znaleźć brakującą wiedzę |
| Hipoteza błędu | Wymagana tylko przy proponowaniu konkretnej diagnozy: błędna reguła, alternatywy, stan potwierdzenia | Sonda lub wypowiedź potwierdzająca | „Możliwe, że…”, dopóki brak potwierdzenia |
| Korekta i kontrola | Dla pełnej naprawy: krótka korekta oraz adekwatny inny przypadek | Dalsze odroczenie w tej samej sesji nie wystarcza | Czy uczeń poprawił wykonanie; retencja dopiero po rzeczywistej przerwie |

**Warunek kompletności:** zwykłe wyjaśnienie działa bez zdiagnozowanego misconception, o ile posiada pewne rationale. Spersonalizowana diagnoza nie działa wiarygodnie bez informacji rozróżniającej możliwe przyczyny. Pełne zalecenie „sprawdź rozumienie na nowym przykładzie” wymaga dostępnego wariantu z określoną rodziną i ekspozycją. Jeśli go nie ma, aplikacja kończy korektę z jawną informacją, że nowego wykonania jeszcze nie sprawdzono.

**Podział pracy:** B opisuje rodzaje zależności i warunki dopuszczalnego wniosku. C musi napisać rationale konkretnej opcji, uzasadnić poprawną regułę, opracować potrzebny kontrast i ewentualną sondę. Ani model językowy, ani podobieństwo słów nie zastępują tych treści. Zachowanie pierwotnej odpowiedzi i statusu pomocy należy do doświadczenia ucznia.

### F13.6 Łańcuch 2: koncept → prerequisite → kontrola → powrót

**Przypadek:** uczeń otwiera koncept z ocenionego pytania, przechodzi do potrzebnej podstawy, wykonuje follow-up i wraca. Łańcuch realizuje FR-012–020 i 032–033.

1. **Zachować zadanie źródłowe.** Potrzebne są pytanie, jego wersja, zatwierdzona odpowiedź, wynik, cel otwarcia, miejsce w sesji i kotwica powrotu. Nie wynikają one z relacji koncept–koncept; trzeba zachować je jako kontekst pracy.
2. **Otworzyć właściwy fragment.** Relacja z rationale musi wskazać regułę lub rozróżnienie, które wyjaśnia odpowiedź, oraz zakres jego znaczenia. Sam wspólny termin w pytaniu nie wystarcza.
3. **Zaproponować podstawę tylko z uzasadnieniem.** Prerequisite ma wskazać, do jakiego działania jest potrzebne i po czym można rozpoznać brak. Przy braku takiej relacji aplikacja nie wymusza wcześniejszej lekcji; może udostępnić zwykłą notę jako opcję.
4. **Zarejestrować rodzaj pracy.** Lektura podstawy jest ekspozycją; odpowiedź z widoczną podstawą jest wspomagana. Kryterium krótkiej próby i sposób oceny muszą być jawne. Nie przypisuje się sukcesu całemu EO tylko z odwiedzenia materiału.
5. **Dać sensowny follow-up.** Nowa sytuacja ma zachować kryterium, zmienić istotny warunek lub kontekst i nie należeć do pozornie nowej parafrazy. Bezpośredni wynik po korekcie dokumentuje poprawę w nauce; odrębny późniejszy wariant służy kontroli retencji.
6. **Wrócić bez przepisania historii.** Pierwotne pytanie służy porównaniu uzasadnień i odzyskaniu kontekstu, nie ponownemu niezależnemu zaliczeniu. Uczeń widzi poprzednią odpowiedź, dotychczasowy wynik i możliwość kontynuacji sesji.
7. **Zakończyć odejście.** Kolejny krok wynika z pierwotnego planu i aktualnych potrzeb. Nie trzeba ponownie wykonywać wszystkich wcześniejszych czynności. Nierozwiązany brak pozostaje oznaczony, a użytkownik może przerwać naprawę.

**B dostarcza:** znaczenie relacji i prerequisite, wymogi kryterium, wariantu i powrotu, warunki interpretacji dowodu. **C dostarcza:** fragment objaśniający, minimalną podstawę, sensowne zadanie kontrolne, pełne rationale i późniejszy wariant. **Doświadczenie użytkownika dostarcza:** rzeczywistą historię ekspozycji, zachowany kontekst, odpowiedzi i odstępy czasu.

### F13.7 Kompletność zależna od funkcji

Nie istnieje jedna etykieta „wiedza gotowa”, wystarczająca dla wszystkich zastosowań. Karta może być gotowa do lektury, a temat niegotowy do niezależnego sprawdzenia. Kompletny item treningowy może być nieodpowiedni do rezerwy dla danej osoby z powodu jej wcześniejszej ekspozycji albo braku nowej rodziny. Utrata nowości u jednej osoby nie wyklucza automatycznie pozycji z rezerwy innych osób. B ma zaprojektować rozróżnienia, C dostarczyć dowody spełnienia kryteriów.

| Brak lub ograniczenie | Zachowanie wobec ucznia | Zachowanie redakcyjne / warunek odblokowania |
|---|---|---|
| Treści jeszcze nie ma | Jawny brak w pokryciu; nieobiecująca alternatywa | Opracować K1 i sprawdzić źródła; brak nie jest porażką ucznia |
| Relacja niezweryfikowana | Nie proponować jej jako celowej naprawy lub obligatoryjnego prerequisite | Uzasadnić sens, warunki i funkcję; wstrzymać tylko tę relację, jeśli końce są poprawne |
| Niepełne explanation pytania | Nie publikować nowego punktowanego użycia jako pełnego pakietu | Uzupełnić wszystkie wymagane rationale; istniejący incydent jawnie obsłużyć, sprawdzając wpływ |
| Koncept poza zakresem egzaminu | Oznaczyć wspierający/rozszerzający; nie wymagać do pokrycia FL | Zweryfikować klasyfikację i relacje, nie usuwać automatycznie użytecznego objaśnienia |
| EO przypisany bez sensownego rozumowania | Nie uznawać pytania za dowód całego EO | Sprawdzić, jaka czynność jest faktycznie wymagana; poprawić mapowanie albo zadanie |
| Brak niezależnego wariantu | Możliwa nauka lub utrwalenie; brak obietnicy nowego pomiaru | Dopisać i zrecenzować rodzinę, zachowując rezerwę na odroczoną próbę |
| Hipoteza pomyłki bez potwierdzenia | Neutralne „ta odpowiedź może wynikać z…” lub sama korekta | Dostarczyć sondę i alternatywne wyjaśnienia; nie nadawać statusu zwalidowanej diagnozy |
| Źródło lub prawa nierozstrzygnięte | Nie udostępniać spornego materiału jako zatwierdzonego | Wyjaśnić pochodzenie i zamierzone użycie; przygotować legalne autorskie opracowanie |
| Zadanie znane, bliski wariant lub tłumaczenie | Trening z jawnym ograniczeniem pomiaru | Zachować rodzinę i historię; nie „odnawiać” niezależności zmianą nazwy |
| Rubryka otwartej odpowiedzi niegotowa | Możliwe ćwiczenie refleksji, bez automatycznego zaliczenia | Opracować kryteria i review odpowiedzi granicznych |
| Niepełny kontekst czasowy kontaktów z kryterium | Zachować wynik, ujawnić ograniczenie retencji; świeże objaśnienie oznacza relearning | Odróżnić czas od próby od czasu od ostatniego istotnego kontaktu; zewnętrznej ekspozycji nie traktować jako wykrytej ani wykluczonej bez podstaw |
| Niedostępna lub podpowiadająca alternatywa treści | Nie interpretować wyniku jako równoważnego | Poprawić reprezentację i sprawdzić, czy nie ujawnia decydującej reguły |
| Niewystarczająca rezerwa dla blueprintu | Test tematu lub praktyka z jawnym zakresem | Rozszerzyć pokrycie i nowe rodziny przed pełnym mockiem |

**Warunek przekazania do B:** każda wybrana funkcja posiada informacje konieczne, znaczenie relacji, poziom uzasadnienia, regułę braków i właściciela treści. B może zaproponować ich konsolidację, lecz nie może utracić odrębności klucza, rationale, hipotezy, warunku samodzielności ani źródła. Trzy pełne przejścia A/P/K w następnej części F13 służą sprawdzeniu, czy te kontrakty rzeczywiście wystarczają do przeprowadzenia pętli.

### F13.8 — Trzy kompletne doświadczenia question-to-knowledge-to-learning

**Status wszystkich przykładów:** oryginalne ilustracje autora blueprintu, nie pytania IREB, nie materiał poufny i nie skalibrowane pozycje banku. Przebiegi dotyczą fikcyjnych uczniów; opisane wyniki nie są wynikami użytkownika ani badania. Teksty pokazują działanie kontraktu. Przed publikacją jako korpus wymagają niezależnej recenzji merytorycznej i językowej. Osoba, która przeczytała poniższe pytania i rozwiązania, zna już te pozycje; nie mogą stanowić dla niej rezerwy nieznanej oceny.

#### Experience 1 — Błędna odpowiedź A: granica systemu i kontekst

**Cel początkowy:** wyjaśnić, dlaczego istotny element otoczenia może znajdować się poza systemem. To składowa zasady kontekstu w **EO2.2.2 L2**. Pomaga przygotować się do EO4.1.1 L3, lecz nie dowodzi jeszcze umiejętności samodzielnego wyznaczenia wszystkich granic. Podstawa treści: syllabus EU2, zasada kontekstu, EU4.1; Glossary: system boundary, system context, context boundary. [I1, I4]

**Stan wejściowy:** uczeń pracuje jako analityk, zna termin „zakres projektu”, ale nie wykonywał jeszcze niezależnego zadania dotyczącego kontekstu IREB. Rozpoczyna Naukę od pytania. Nazwa hipotezy błędu i karta porównania są przed odpowiedzią niewidoczne.

**Pytanie A, 1 punkt; wybierz jedną odpowiedź.** Miasto zamawia system „Termin Odbioru”, składający się z aplikacji mieszkańca i usługi obsługującej zamówienia odbioru odpadów. Istniejący rejestr mieszkańców pozostaje osobnym systemem. Przekazuje nowemu systemowi dane adresowe potrzebne do sprawdzania uprawnień, ale nie będzie modyfikowany w tym projekcie. Jak należy traktować rejestr w analizie nowego systemu?

| Opcja | Treść | Rationale po odpowiedzi |
|---|---|---|
| a | Jako część nowego systemu, ponieważ oba rozwiązania należą do miasta | Własność organizacyjna nie zmienia wyraźnie określonego przedmiotu analizy |
| b | Jako element poza granicą systemu, należący do jego istotnego kontekstu | Dostarcza dane wpływające na działanie i wymagania, pozostając oddzielnym systemem |
| c | Jako element poza istotnym kontekstem, ponieważ nie będzie zmieniany | Brak prac nad elementem nie usuwa jego wpływu na wymagania |
| d | Jako przeszkodę uniemożliwiającą ustalenie granicy systemu | Interakcja przez granicę jest możliwa; nie znosi samej granicy |

**Decyzja i wynik:** uczeń wybiera c i zatwierdza. Wynik **0/1**. Pierwotny wybór pozostaje widoczny. Najpierw pojawia się korekta: „O istotności dla kontekstu decyduje wpływ na analizowany system. Rejestr dostarcza potrzebne dane, choć sam nie jest przedmiotem zmiany”. Opcja b jest wskazana jako poprawna; rationale c i b widoczne od razu, a i d rozwijane na żądanie.

**Przejście do wiedzy:** przy c znajduje się „Odróżnij zakres zmiany od istotnego kontekstu”. Link prowadzi do krótkiego porównania, a nie do całego EU4. Uczeń widzi trzy krótkie rozróżnienia: „Co należy do analizowanego systemu?”, „Co w jego otoczeniu wpływa na wymagania?” oraz „Co obejmują zlecone prace?”. Rejestr może pozostawać poza granicą nowego systemu i poza zakresem zmian, a jednocześnie należeć do jego istotnego kontekstu. Uczeń może otworzyć prerequisite „system jako przyjęty przedmiot analizy”. Gałąź zachowuje stem, c, wynik i miejsce w kolejce.

**Hipoteza, nie diagnoza:** wybór c może wskazywać regułę „nie zmieniamy, więc nie analizujemy”. Może też wynikać z przeoczenia zdania o danych. Sonda brzmi: „Czy zewnętrzna usługa, której nie wolno zmienić, może narzucić ograniczenie nowemu systemowi? Podaj powód”. Odpowiedź ucznia pomaga wybrać krótką korektę. Bez sondy komunikat pozostaje „możliwe pomylenie”, a nie „masz błędne przekonanie”.

**Remediacja:** jedno zestawienie oraz kontrprzykład nietechniczny: przepis określający wymagane terminy obsługi może należeć do istotnego kontekstu, mimo braku interfejsu informatycznego. Nie wymagamy osobnej karty każdego systemu wymienionego w pytaniu.

**Nowa aktywność kontrolna:** „Aplikacja składa zamówienia na posiłki. Regulamin szkoły określa, do kiedy można anulować zamówienie. Regulamin nie jest częścią aplikacji ani elementem wdrożenia. Czy należy go uwzględnić przy określaniu wymagań i dlaczego?”. Oczekiwana odpowiedź: tak, ponieważ wpływa na wymagane zachowanie; element kontekstu nie musi być systemem wymieniającym dane. Uczeń odpowiada bez widocznego materiału: „Tak, ponieważ regulamin ustala warunek anulowania, który aplikacja musi respektować”, a następnie zaznacza zgodność własnej wypowiedzi z rubryką. To inna sytuacja i inny rodzaj wpływu; poziom nadal odpowiada rozumieniu zasady. Zapisujemy samoocenę wypowiedzi po instrukcji, nie niezależną ocenę ekspercką ani retencję.

**Powrót:** „Wróć do pytania” przywraca 0/1, nie zamienia go w 1/1. Po zamknięciu przeglądu kontynuacja prowadzi do następnego celu lub końca sesji. System proponuje odroczoną próbę z nieujawnionej rodziny. Gdy później celem stanie się EO4.1.1 L3, potrzebne będzie zadanie wyznaczenia granic, ocenione odrębną rubryką; przykład A nie zalicza go automatycznie.

| Element kontraktu | Wymaganie |
|---|---|
| FR | 004,006–007,010–020,022,033,037 |
| Encje | EO/składowa, Question, Answer Option, Scoring rule, Explanation, Concept, Comparison, Example, Prerequisite warunkowy, Misconception hypothesis warunkowa, Family, Source |
| Relacje | Pytanie sprawdza składową; c ma rationale; rationale wyjaśnia comparison; comparison odróżnia pojęcia; prerequisite wspiera określone zadanie; follow-up sprawdza tę samą zasadę |
| Dowód | Pierwszy błąd bez pomocy; otwarcie comparison po odpowiedzi; sonda i jej sposób oceny; sukces po instrukcji w nowej sytuacji; zaplanowana, jeszcze niewykonana rewizja |
| Czego nie wolno zapisać | Pełne opanowanie EO2.2.2 obejmującego wszystkie zasady; wykonanie całego EO4.1.1; potwierdzona retencja; pewna diagnoza z samego c |
| Failure modes | Mylenie context boundary z system boundary; zbyt szeroki rozdział; zgubienie stemu; dopisanie warunku dopiero w rationale; uznanie samooceny za ekspert review; zerowanie historii po poprawie |

#### Experience 2 — Częściowo poprawne P: rodzaje wymagań

**Cel początkowy:** odróżnić wymaganie funkcjonalne, jakościowe i ograniczenie. Główny cel **EO1.1.2 L2**. To przykład rodzajów wymagań, nie automatycznie ocena jakości ich zapisu według EO3.8.1. [I1, EU1.1; I4, functional requirement, quality requirement, constraint]

**Stan wejściowy:** uczeń poprawnie rozpoznaje funkcje, lecz w praktyce nazywa każde techniczne wymaganie „jakościowym”. Widział wcześniej definicje. To pierwsza ekspozycja na ten item; brak pomocy w bieżącej próbie.

**Pytanie P, 2 punkty; wybierz dokładnie DWA wymagania jakościowe.** Każde zdanie należy oceniać jako wymaganie dotyczące tego samego systemu rezerwacji.

| Opcja | Treść | Klucz i rationale |
|---|---|---|
| a | System ma umożliwiać anulowanie rezerwacji przed jej zatwierdzeniem | Nie: wymagana funkcja |
| b | Przy 200 jednoczesnych użytkownikach 95% odpowiedzi wyszukiwania ma pojawić się w czasie nie dłuższym niż 2 sekundy | Tak: określona cecha działania przy wskazanych warunkach |
| c | System ma korzystać z firmowej biblioteki Integrator 4.0 | Nie: narzucony wybór rozwiązania ogranicza przestrzeń realizacji |
| d | W miesiącu kalendarzowym usługa ma być dostępna przez co najmniej 99,5% czasu, liczonego po wyłączeniu uzgodnionych okien serwisowych | Tak: określona cecha dostępności usługi |
| e | System ma rejestrować, kto i kiedy zmienił limit rezerwacji | Nie: wymagane zachowanie rejestrowania, choć może wspierać cel bezpieczeństwa |

**Decyzja i wynik:** zaznaczone b i c. Wybrano dozwoloną liczbę. Wynik **1/2**, ponieważ b przynosi jeden punkt, c nie przynosi punktu, a d nie zostało wybrane. Brak zaznaczenia a i e nie daje punktów. Gdyby uczeń zaznaczył b,c,d, wynik wynosiłby 0/2 z powodu nadmiaru, co wymaga osobnego komunikatu o formacie.

**Feedback:** najpierw „Zaznaczono jedną z dwóch poprawnych odpowiedzi. Narzucona technologia jest ograniczeniem; wymaganie jakościowe określa oczekiwaną cechę jakości systemu lub usługi”. Widać rationale wybranego błędnie c oraz pominiętego d. Niewybrany poprawny element jest edukacyjnie istotny, mimo że użytkownik go nie kliknął. Wszystkie pozostałe uzasadnienia są dostępne. Dwie wymagane opcje nie oznaczają dwóch niezależnie zmierzonych kompetencji.

**Nawigacja:** c otwiera comparison „cecha działania a narzucone rozwiązanie”. b i d mogą prowadzić do tego samego pojęcia quality requirement, z różnymi przykładami; nie tworzymy dwóch nowych typów pojęć tylko dlatego, że istnieją dwie opcje. e ma przykład wymagania funkcjonalnego wspierającego jakość, by nie utrwalić reguły „bezpieczeństwo zawsze oznacza typ jakościowy”.

**Możliwa pomyłka:** „techniczny zapis = jakość” lub „liczba w wymaganiu = jakość”. Istnieją alternatywy: uczeń mógł pominąć d albo uznać wszystkie wymagania niefunkcjonalne za jedną kategorię. Krótka sonda porównuje „95% operacji w 2 sekundy” z „biblioteka w wersji 4.0”: co rzeczywiście rozstrzyga klasyfikację? Samo słowo „procent” nie jest regułą klasyfikacyjną.

**Naprawa:** comparison podaje wspólny wymiar: zachowanie, cecha działania, ograniczenie rozwiązania. Następnie przykład i kontrprzykład z tej samej dziedziny, aby zmiana kontekstu nie maskowała niezrozumienia. Uczeń może pominąć dodatkowe czytanie i od razu podjąć nową próbę.

**Nowa weryfikacja:** trzy nowe zdania dotyczą przesyłania zdjęć: możliwość dołączenia zdjęcia do zgłoszenia; limit czasu przesłania pliku przy określonych warunkach transmisji; nakaz użycia wskazanego komponentu UploadKit 7. Uczeń wybiera kolejno: funkcjonalne, jakościowe, ograniczenie, oraz wskazuje rozstrzygające fragmenty. Klasyfikacje są ocenione zatwierdzonym kluczem. Krótkie uzasadnienia uczeń porównuje sam ze wzorcem, więc nie zapisujemy ich jako niezależnie zweryfikowanej oceny rozumowania. To praktyka kontrastu po korekcie, nie jeszcze odroczony transfer. Kolejna nieujawniona rodzina powinna zmienić także strukturę zadania — np. wybór najlepszego uzasadnienia klasyfikacji cechy zużycia zasobów — przy zachowaniu poziomu L2.

**Powrót:** pierwotne P nadal pokazuje b,c i 1/2. Uczeń wraca do kolejki z krótkim zdaniem „Sprawdzimy to rozróżnienie ponownie po przerwie”. Nie musi czytać całego rozdziału rodzajów wymagań.

| Element kontraktu | Wymaganie |
|---|---|
| FR | 004–006,008,010–023,029,033–037 |
| Encje | EO, trzy Concept z kontrolowanymi terminami, Question P, pięć Options, Scoring rule z k=2, rationale, Comparison, przykłady/kontrprzykład, możliwa Misconception, Family, Source |
| Relacje | b,d są przykładami quality requirement; c wskazuje constraint; comparison ma jawny wymiar; follow-up sprawdza tę samą klasyfikację; mapping nie nadaje pięciu osobnych EO |
| Dowód | Wynik 1/2; poprawnie wybrana b, błędnie c, pominięta d; brak pomocy przed próbą; comparison po niej; nowe klasyfikacje ocenione kluczem i uzasadnienia ocenione samodzielnie; plan odroczonego sprawdzenia. Dane i wynik próby odroczonej powstaną dopiero po jej wykonaniu |
| Czego nie wolno zapisać | „50% mastery EO”; dwa braki wiedzy z każdej błędnej decyzji; pewna misconception; opanowanie jakości zapisu wymagań z samej klasyfikacji typu |
| Failure modes | Ogólna all-or-nothing punktacja P; punkty za niezaznaczone dystraktory; brak feedbacku dla d; niejednoznaczny stem; utożsamienie numerical/technical z quality; kosmetyczna parafraza udająca transfer |

#### Experience 3 — K: traceability, jawny związek i granice wniosku

**Cel początkowy:** rozpoznać jawnie udokumentowane powiązanie oraz odróżnić je od samego współwystępowania artefaktów. Głównym odniesieniem jest **EO6.6.3 L1**, uzupełnianym przez część **EO6.6.2 L1**. Stwierdzenie 3 dodatkowo sprawdza przesłankę z **EO6.6.1 L1**. Mapowanie i dowody określamy osobno dla poszczególnych stwierdzeń; wynik całego K nie stanowi automatycznego zaliczenia żadnego z tych EO. Wymagania nie są podwyższane do samodzielnego projektowania modelu traceability. [I1, EU6.6; I4, traceability]

**Stan wejściowy:** uczeń przed tygodniem poznał pojęcie i wykonał jedno zadanie. Nie ma wystarczających dowodów dla wszystkich składowych. Od tego czasu nie odnotowano istotnego kontaktu z ocenianym kryterium, a uczeń deklaruje, że nie wracał do niego poza aplikacją. Kontakt zewnętrzny pozostaje deklaracją; system nie potrafi go wiarygodnie wykryć. Sesja proponuje powtórkę przed ponowną lekturą. Przedstawione K jest nieznane, lecz sam temat był uczony — to pożądany stan. Status próby odroczonej uwzględnia ostatnią istotną ekspozycję i pomoc, nie tylko datę ostatniej odpowiedzi: przeczytanie przed chwilą odpowiedniej notatki wykluczałoby tutaj interpretację wyniku jako samodzielnej retencji po tygodniu.

**Pytanie K, 2 punkty; oceń każde stwierdzenie jako prawdziwe albo fałszywe.**

| Stwierdzenie | Klucz | Odpowiedź fikcyjnego ucznia | Punkty | Rationale |
|---|---|---|---:|---|
| 1. Jawne śledzenie może dokumentować powiązanie wymagania z jego źródłem | Prawda | Prawda | 0,5 | Źródło może być wskazanym końcem utrzymywanego powiązania |
| 2. Samo umieszczenie dwóch wymagań w jednym dokumencie stanowi jawne udokumentowanie relacji śledzenia między nimi | Fałsz | Prawda | 0 | Wspólne miejsce zapisu bez wskazania powiązania nie dokumentuje jawnej relacji. Uporządkowanie artefaktów może wspierać śledzenie niejawne, ale samo współwystępowanie nie określa jawnie związku |
| 3. Utrzymywane powiązania mogą pomagać wskazać elementy do przeglądu po zmianie wymagania | Prawda | Prawda | 0,5 | Śledzenie wspiera odnajdywanie zależnych elementów; nie automatycznie ocenia wszystkie skutki |
| 4. Powiązanie wymagania z testem samo w sobie dowodzi, że test wykonano z powodzeniem | Fałsz | Brak odpowiedzi | 0 | Istnienie związku nie jest informacją o wyniku wykonania testu |

**Mapowanie zakresu stwierdzeń:**

| Stwierdzenie | Rola w dowodzie |
|---|---|
| 1 | Znaczenie śledzenia do źródła: podstawowe pojęcie oraz składowa jawnego dokumentowania |
| 2 | Rozpoznanie, co stanowi jawny zapis powiązania: EO6.6.3; wspierająco rozróżnienie z EO6.6.2 |
| 3 | Powód utrzymywania traceability: EO6.6.1 |
| 4 | Pomocnicze rozpoznanie granicy wniosku z relacji; interpretacja dydaktyczna, nie odrębny wymagany podcel o wynikach testów ani pełne pokrycie EO |

**Wynik:** **1/2**. System mówi o dwóch trafnych ocenach, jednej nietrafnej i jednej nieudzielonej. Nie traktuje braku w czwartym wierszu jako potwierdzonego błędnego przekonania i nie zeruje pierwszego oraz trzeciego wiersza.

**Wyjaśnienie i linki:** najpierw reguła „Jawne powiązanie zapisuje określony związek; samo sąsiedztwo lub istnienie linku nie potwierdza wszystkiego o artefaktach”. Potem korekta drugiego stwierdzenia i rozstrzygnięcie czwartego. Link przy drugim prowadzi do krótkiego comparison „zapisana relacja a samo współwystępowanie”. Przy czwartym wystarczy przykład wymóg–test z oddzielną informacją o wykonaniu; nie wymuszamy nowej karty pojęciowej, jeśli objaśnienie jest wystarczające.

**Hipoteza i naprawa:** druga odpowiedź sugeruje możliwe utożsamienie organizacji dokumentu z jawnym śledzeniem. Sonda pokazuje dwa opisy: wspólny folder bez oznaczenia zależności oraz zapis „R8 wywodzi się z celu G2”. Uczeń rozpoznaje, który opis zawiera jawną relację. Poprawny wybór po tej korekcie to zastosowanie omówionej zasady w treningu. Nie dowodzi, że błędna reguła była przyczyną pierwotnej odpowiedzi, jeśli uczeń nie podał uzasadnienia.

**Nowa weryfikacja:** krótkie A za 1 punkt w innej reprezentacji; wybierz jedną odpowiedź: „W macierzy wiersze oznaczają wymagania, a kolumny przypadki testowe. Legenda określa, że znak X oznacza: wskazany test weryfikuje wskazane wymaganie. W komórce dla wymagania W12 i testu T5 zapisano X. Który opis jest trafny?”.

| Opcja | Treść |
|---|---|
| a | Macierz dokumentuje jawną relację W12–T5 |
| b | Macierz jedynie przechowuje nazwy obok siebie i nie zapisuje relacji |
| c | Relacja stanie się jawna dopiero po przeniesieniu macierzy do grafu |
| d | Relacja nie może być udokumentowana przed wykonaniem testu |

**Klucz: a.** Uczeń wybiera a i otrzymuje 1/1 za tę nową próbę. Zatwierdzony klucz pozwala obiektywnie ocenić ten wybór; macierz i jej legenda zapisują określone powiązanie. Zmiana z tekstowego odsyłacza na macierz sprawdza rozpoznanie jawnej relacji w innej reprezentacji, zgodnie z EO6.6.3 L1. Follow-up sprawdza naprawę błędu ze stwierdzenia 2. Jest to natychmiastowa kontrola po korekcie, nie niezależny dowód odroczonego transferu. Ograniczenie wnioskowania o wyniku testu ze stwierdzenia 4 pozostaje krótkim objaśnieniem; nie uznajemy pustej odpowiedzi za potwierdzoną pomyłkę.

**Powrót i później:** uczeń wraca do K z 1/2, następnie do sesji. W historii pozostaje jedna próba K po przerwie, zawierająca dwie trafne decyzje, jedną nietrafną i jedną nieudzieloną, wraz z warunkami ekspozycji i zakresem oceny. Nie nadpisujemy jej wspólnym „traceability nieopanowane”. Flaga powrotu dotyczy rozróżnienia wymagającego ponownej kontroli. Brak nowego wariantu powoduje jawny komunikat o ograniczeniu, nie ponowne przedstawienie K jako nieznanego testu.

| Element kontraktu | Wymaganie |
|---|---|
| FR | 004,006,007,009–023,029,033–037 |
| Encje | EO/składowe L1, Question K i kontrolne A, cztery stwierdzenia K z parami wartości oraz cztery opcje A, Scoring rule K m=4/w=2 i A w=1, rationale per decyzja, Concept traceability, Comparison, Example, Family, Source |
| Relacje | Każde stwierdzenie ma wskazane kryterium, a nie automatycznie pełny EO; rationale 2 prowadzi do comparison; rationale 4 do przykładu; follow-up sprawdza jawne dokumentowanie powiązania w nowej reprezentacji |
| Dowód | Rzeczywisty odstęp od ostatniej znanej istotnej ekspozycji, z deklaracją o kontaktach zewnętrznych; nowość K na początku; wynik każdego wiersza; brak odpowiedzi odrębny od błędu; pomoc dopiero później; prawidłowy wybór w kontrolnym A po korekcie |
| Czego nie wolno zapisać | Cztery niezależne obserwacje całej kompetencji; prawdopodobieństwo zapomnienia; opanowanie wszystkich EO6.6; L3 tylko dlatego, że istnieje opis projektu |
| Failure modes | Zerowanie całego K; punkty za brak zaznaczenia False; czytnik gubi związek wartości ze stwierdzeniem; blank diagnozowany jak misconception; relacja test–requirement uznana za wynik testu; samoocena ukryta jako ocena kluczem |

**Wspólny wniosek funkcjonalny:** potrzebny jest kompletny pakiet rozumowania dla każdej opcji/stwierdzenia, ale uczeń nie musi obejrzeć wszystkich warstw. Najkrótsza sensowna ścieżka to wynik → decydująca korekta → odpowiednia nowa próba → kontynuacja. Pojęcia, prerequisite i sondy dołączają się tylko wtedy, gdy usuwają konkretną przeszkodę.


## F10 — Functional State and Transition Rules

### Trzy niezależne warstwy

Stan aktywności opisuje **co uczeń robi**; stan próby — **czy odpowiedź może się jeszcze zmienić i kiedy wolno pokazać pomoc**; dowody wiedzy — **co wolno wywnioskować**. Żaden z tych porządków nie zastępuje pozostałych. Ekspozycja na pytanie jest dodatkową właściwością historii, nie ostatnim stanem lifecycle testu.

| Warstwa aktywności | Dozwolone przejście | Skutek |
|---|---|---|
| Gotowy do działania | Materiał albo samodzielne zadanie | Ustal cel i warunki; samo wejście nie daje punktów |
| Praca z materiałem | Zadanie, relacja, zakończenie | Obejrzenie treści zapisuje ekspozycję, nie kompetencję |
| Odpowiadanie | Zmiana wyboru, zatwierdzenie, pomoc w Nauce, wyjście | Przed zatwierdzeniem brak wyniku; pomoc zmienia warunki próby |
| Review odpowiedzi | Rationale, wiedza, remediacja, nowy przypadek, dalej | Pierwotny wynik pozostaje niezmieniony |
| Eksploracja wiedzy | Inna zweryfikowana relacja, poprzedni krok, pytanie, świadoma zmiana tematu | Zachowaj źródłową kotwicę, bez automatycznej nowej próby |
| Zakończono bieżącą aktywność | Następna aktywność lub wyjście | Można zakończyć sesję z oczekującą przyszłą rewizją |

Remediacja i revision są celami aktywności, nie dodatkowymi ekranowymi stanami. „Czeka na powtórkę” to plan przyszłej okazji pomiaru, nie blokada obecnej nauki.

Wspólny kontrakt Sprawdzenia obejmuje zadeklarowany zakres, brak pomocy i feedbacku do finalizacji całości, możliwość zmiany odpowiedzi przed finalizacją oraz zachowany wynik i późniejsze review. **Test tematu może być bez limitu czasu już w Level 1.** Pełny blueprint FL, profil 75/90 minut i reguły nieprzerwanego timed mocku należą do Level 2. Wyjście z testu bez limitu nie kończy próby, jeśli nie naruszono zadeklarowanych warunków; przerwa pozostaje widoczna (FR-025–027).

| Stan Sprawdzenia | Co wolno | Warunek wyjścia |
|---|---|---|
| Przygotowane | Poznać zakres, instrukcje, limit lub jego brak, dostępność nowej puli | Świadomie uruchomiona próba po bramce odpowiedniej dla jej zakresu |
| W toku | Odpowiadać, zmieniać, oznaczać do review; widzieć instrukcje i maksymalną wagę | Finalizacja całości albo koniec zadeklarowanego limitu; bez limitu — finalizacja przez ucznia |
| Zakończone | Widzieć wynik, warunki i ograniczenia | Można otwierać review; score zamkniętej wersji zachowany |
| Naruszono kontrakt / porzucone / przekształcone w Naukę | Wznowić pracę edukacyjną z odpowiednią etykietą | Nie odzyskuje pierwotnej kwalifikacji pełnej symulacji; po ujawnieniu pomocy także kontraktu niezależnego Sprawdzenia. Wcześniejsze odpowiedzi zachowują swoje warunki |
| Reviewed — flaga zakończonej próby | Otwierać wiedzę i wykonywać nowe próby | Ekspozycja wpływa na przyszłe użycie, nie na niezależność w chwili oryginalnej odpowiedzi |

### Polityki przejść

| Sytuacja | Reguła funkcjonalna | Konsekwencja dowodowa |
|---|---|---|
| Materiał otwarty przed odpowiedzią w Nauce | Dozwolony; komunikat „odpowiedź po skorzystaniu z pomocy” | Punkty według klucza; brak dowodu niezależnej próby tego itemu |
| Pomoc otwarta po zatwierdzeniu odpowiedzi w Nauce albo po zakończeniu całego Sprawdzenia | Dozwolona, zachowuje wynik | Nie unieważnia wstecz warunków odpowiedzi; kolejna próba itemu już znana |
| Hint, comparison lub breadcrumb zdradza zasadę | Zakwalifikuj jako pomoc, również bez przycisku „hint” | Status nie może zależeć wyłącznie od kliknięcia konkretnej kontrolki |
| Screen reader, powiększenie, klawiatura | Narzędzia dostępu, nie pomoc merytoryczna | Nie obniżają samodzielności |
| Neutralny słownik językowy dopuszczony w profilu egzaminu | Odnotowany warunek, bez wbudowanej bazy definicji RE | Nie utożsamiać z otwarciem Glossary CPRE |
| Zmiana wyboru przed submit | Swobodna; ostatni wybór jest odpowiedzią | Brak odrębnych prób za każde kliknięcie |
| Zmiana odpowiedzi po feedbacku | Nowa, jawnie oznaczona próba treningowa | Nie nadpisuje błędu ani nie liczy się jak nowe pytanie |
| Pomyłka przy wysokiej pewności | Pokaż regułę, ewentualnie sondę | Nie rozpoznawaj automatycznie trwałej misconception |
| Sukces przy niskiej pewności | Zachowaj punkty; zaoferuj powód i późniejszy wariant | Nie zamieniaj sukcesu w porażkę; brak pewności nie dowodzi zgadywania |
| Ponowna porażka po naprawie | Zmień rodzaj pomocy/sondy, umożliw wyjście | Nie propaguj porażki do wszystkich połączonych EO |
| Brak zweryfikowanego prerequisite | Nie pokazuj go jako obowiązkowego | Brak relacji nie jest brakiem wiedzy ucznia |
| Nieznane pytanie pokazane pierwszy raz | Nowość określ na podstawie historii sprzed pokazania; potem zapisz ekspozycję | Bieżąca próba może być nowa, przyszła nie |
| Item omyłkowo ujawniony w search/preview | Wycofaj go z rezerwy tej osoby; oceń bliskie warianty | Nie resetuj ekspozycji po zamknięciu podglądu |
| Pytanie było znane spoza aplikacji | Uczeń może zaznaczyć „znam to pytanie” | Ogranicz interpretację nowości; nie obiecuj wykrycia całej ekspozycji zewnętrznej |
| Mock opuszczony bez pauzy | Limit nadal upływa; powrót zachowuje czas i odpowiedzi | Czas i brak pomocy nadal decydują o interpretacji |
| Test tematu bez limitu opuszczony bez pomocy | Zachowaj odpowiedzi; pozwól wznowić tę samą próbę i zapisz przerwę | Nie wnioskuj o wykonaniu w czasie egzaminacyjnym; nowość nadal oceniaj na początku tej samej próby |
| Jawna pauza albo niewiarygodne warunki po awarii w pełnym mocku | Zaznacz naruszony protokół, umożliw naukę | Nie nazywaj wyniku pełną nieprzerwaną symulacją |
| Pomoc zażądana w dowolnym aktywnym Sprawdzeniu | Najpierw informacja o zakończeniu niezależnego kontraktu całej próby; po wyborze ucznia konwersja do Nauki | Ta sama próba nie odzyskuje statusu niezależnego Sprawdzenia; wcześniejsze obserwacje zachowują swoje pierwotne warunki |
| Powrót po długiej nieobecności | Przywróć historię, zaproponuj kontrolę | Brak aktywności sam nie dowodzi zapomnienia |

Konwersja dotyczy lokalnego kontraktu próby, nie uprawnień do zwykłej nauki. Nie wymaga od ucznia potwierdzania każdej dostępnej pomocy; potwierdzenie jest potrzebne wyłącznie przy zmianie warunków już rozpoczętego Sprawdzenia.

## F11 — Examination Practice and Simulation Functional Specification

### Zweryfikowana reguła wyniku

**FACT.** Regulamin 5.6.2 przewiduje około 45 pytań, 75 minut, wagi 1–3 i próg 70% punktów. Profil 90 minut dotyczy uzasadnionego wniosku osoby zdającej w języku innym niż ojczysty, ocenianego przez certyfikatora. Dopuszczone słowniki językowe nie oznaczają zgody na materiały szkoleniowe lub słownik definicji RE. [I2, sekcje 1.2–1.3]

Niech **w** oznacza wagę pytania, **n** liczbę zaznaczeń, **k** wymaganą liczbę poprawnych wyborów P, **m** liczbę stwierdzeń K, a **c** liczbę trafnych zaznaczeń/ocen.

| Format | Reguła punktowa | Częściowe wykonanie |
|---|---|---|
| A | w za jedyny poprawny wybór; w pozostałych przypadkach 0 | Brak, błąd lub nadmiar: 0 |
| P | Gdy n≤k: w×c/k; gdy n>k: 0 | Mniej niż k wolno zaznaczyć; błędny wybór nie daje punktu; niewybrany dystraktor nie daje punktu |
| K | w×c/m | Każde stwierdzenie osobno; błędnie, obie wartości lub brak: 0 dla tego stwierdzenia |

To zasady regulaminowe. Sposób prezentacji licznika, ostrzeżeń, radio buttons lub review opisany dalej jest **FUNCTIONAL DECISION**, a nie deklaracja identyczności z interfejsem certyfikatora. [I2, sekcja 2]

### Własny kontrakt interakcji

Przed odpowiedzią widać typ, instrukcję, liczbę wymaganych wyborów tam, gdzie ma zastosowanie, oraz maksymalną wagę. A umożliwia pojedynczy wybór i jego zmianę/wyczyszczenie. P umożliwia także niepełny i nadmiarowy wybór; pokazuje neutralną liczbę zaznaczeń, nie domyśla się intencji i nie odznacza innej opcji. W Nauce wyjaśnia skutek nadmiaru. W Sprawdzeniu nie podpowiada klucza; przy finalizacji może zwrócić uwagę na niepoprawną liczbę zaznaczeń oraz brakujące odpowiedzi. Uczeń może mimo to zatwierdzić. K pozwala wskazać jedną wartość przy każdym stwierdzeniu oraz wrócić do braku wyboru. Nie trzeba udzielić wszystkich odpowiedzi, aby zakończyć próbę.

System nie dopuszcza dwóch równoczesnych wartości K przy zwykłej obsłudze. Gdy oceniany zapis zawiera taką nieprawidłowość, reguła F11 nadal jednoznacznie ją obsługuje. Instrukcja liczby odpowiedzi nie jest wskazówką merytoryczną. Metadane ujawniające właściwe pojęcie lub klasę odpowiedzi są natomiast ukryte w Sprawdzeniu.

Wynik całej próby to **suma punktów uzyskanych / suma punktów możliwych**. Aplikacja porównuje niezaokrąglony wynik z progiem; zaokrąglenie prezentacji nie może zmienić jego strony. Przy wyniku granicznym pokazuje dokładniejszą wartość. To przyjęta reguła obliczenia w naszym produkcie; nie przypisujemy regulaminowi nieopisanego algorytmu zaokrągleń certyfikatora.

### Przypadki odbiorowe punktacji

To autorskie wektory testowe, nie pytania egzaminacyjne ani dane o rozkładzie operacyjnej puli.

| Przypadek | Waga i klucz | Odpowiedź | Oczekiwane punkty | Co wyjaśnić |
|---|---|---|---:|---|
| A1 | w=3, poprawna b | b | 3 | Jedna trafna decyzja |
| A2 | w=3, poprawna b | a lub brak | 0 | Brak trafnej odpowiedzi |
| A3 | w=3, poprawna b | a+b w nieprawidłowym zapisie | 0 | Nadmiar, bez wybierania za ucznia |
| P1 | w=2, k=2, poprawne a,c | a,c | 2 | Pełne wykonanie |
| P2 | jak wyżej | a,d | 1 | Jedna trafna opcja i jedna nietrafna |
| P3 | jak wyżej | a | 1 | Niepełny wybór zachowuje trafną część |
| P4 | jak wyżej | a,c,d | 0 | Nadmiar zeruje całość, mimo dwóch trafień |
| P5 | w=1, k=3, poprawne a,b,d | a,b | 2/3 | Ułamki pozostają w obliczeniu |
| P6 | w=2, k=2 | same błędne lub brak | 0 | Brak punktów za niezaznaczony dystraktor |
| K1 | w=2, m=4 | 3 poprawne, 1 błędna | 1,5 | Błąd jednego wiersza nie kasuje reszty |
| K2 | w=2, m=4 | 2 poprawne, 1 brak, 1 obie wartości | 1 | Każdy wiersz osobno |
| K3 | w=3, m=4 | 3 poprawne, 1 brak | 2,25 | Waga nie jest liczbą stwierdzeń |
| Suma | A:1/1, P:1/2, K:1,5/2 | Cała próba | 3,5/5 =70% | Wynik punktowy; nie „1 z 3 pytań poprawne” |

### Role pytania i ponowne użycie

| Rola | Dozwolony materiał | Warunki interpretacji |
|---|---|---|
| Start diagnostyczny | Trening, nie chroniona rezerwa pełnego mock | Ustala punkt wejścia, nie gotowość całego zakresu |
| Guided practice | Znane lub nowe zadanie | Pomoc i wcześniejsza instrukcja jawne |
| Independent practice | Bez bieżącej pomocy, historia ekspozycji znana | Znany item nadal może być praktyką, lecz nie nowym pomiarem |
| Revision | Ten sam cel po odstępie; preferowana zmiana zadania | Dokładny odstęp i wcześniejsze kontakty widoczne |
| Verification | Odrębna okazja i potrzebna nowość rodziny | Dopasowanie poziomu/rozróżnienia i brak ujawnionego klucza |
| Sprawdzenie tematu | Zatwierdzony zestaw dla jawnie ograniczonego zakresu | Brak feedbacku do finalizacji całości; może być bez limitu, z zapisaną nowością i warunkami |
| Timed mock | Zatwierdzona, odpowiednio szeroka i wcześniej nieujawniona rezerwa | Protokół i pokrycie sprawdzone przed uruchomieniem |

Jedno pytanie może przejść z assessment do practice po wykorzystaniu. Nie może odzyskać statusu „nieznane” przez reset wyniku, zmianę kolejności opcji, tłumaczenie lub kosmetyczną parafrazę. To status względem konkretnego ucznia; ekspozycja jednej osoby nie zużywa automatycznie banku dla wszystkich. Ogólna znajomość zasady jest celem przygotowania, a nie skażeniem pomiaru. Kontrola rodziny dotyczy zapamiętywalnego rozwiązania i bliskości zadania, nie całego EO.

### Bramka wiarygodnej symulacji

Pełny mock udostępnia się dopiero, gdy zatwierdzono: plan próby obejmujący wszystkie siedem EU, adekwatne zadania z właściwych poziomów, realizację A/P/K, zgodne wagi i czas, jakość językową, klucze i rationale, prawa wykorzystania oraz brak wcześniejszego ujawnienia użytych pozycji i zbyt bliskich rodzin. Pojedyncza forma nie mierzy wszystkich składowych 70 EO; zakres dowodów ocenia się także na podstawie historii nauki.

**Nasza początkowa konfiguracja pełnej formy: 45 pozycji i standardowo 75 minut.** To wybór zgodny z przybliżoną liczbą w regulaminie, a nie twierdzenie, że każdy egzamin zawsze ma dokładnie 45 pozycji. Rozkład tematów, formatów i wag formy autorskiej jest jawny, uzasadniony pokryciem treści i podpisany jako plan przygotowawczy. Nie wolno ogłaszać, że odtwarza poufny rozkład IREB. Publiczny sample 3.3.1 służy analizie formy, nie estymacji takiego rozkładu. [I6]

Warunki „zgodne formalnie”, „recenzowane ekspercko” i „nieznane dla tej osoby” nie oznaczają kalibracji psychometrycznej ani walidacji prognostycznej. W opisie wystarczy: **„Autorska symulacja według opublikowanych zasad; wynik nie jest prognozą zdania”**. Jeśli korpus nie spełnia bramki, produkt oferuje **sprawdzenie wybranych tematów** z rzeczywistą liczbą zadań i zakresem. Nie uzupełnia rezerwy ukrytym losowaniem znanych pytań.

### Wspólny kontrakt i test tematu bez limitu

Każde Sprawdzenie wymaga określenia zakresu, liczby zadań, statusu nowości, warunków pomocy oraz limitu czasu lub jego braku. Od startu do finalizacji całości uczeń może zmieniać odpowiedzi i oznaczać je do review, lecz nie otrzymuje klucza, wyniku, wskazówek ani powiązanej wiedzy. Po finalizacji wynik jest zamknięty i można przejść do wyjaśnień. Te zasady obowiązują także w teście tematu dostępnym w Level 1 (FR-025–028).

Test tematu może być bez limitu: nie wymaga 45 pozycji, pełnego blueprintu FL ani profilu 75/90 minut. Ma własny zatwierdzony zakres i odpowiednią pulę pytań. Dozwolona przerwa zachowuje tę samą próbę i odpowiedzi, a wynik pokazuje warunki przerwy. Otwarcie pomocy wymaga wcześniejszego zakończenia kontraktu Sprawdzenia i przejścia do Nauki. Taka aktywność nie dostarcza dowodu wykonania pełnej formy w czasie egzaminacyjnym. Jeżeli w teście tematu wybrano limit, zasady jego biegu i zakończenia muszą być jawne przed startem.

### Pełny timed mock: przebieg i przerwanie

Przed startem uczeń poznaje zakres, limit, brak pomocy oraz zasady wyjścia. Profil 90 minut wybiera jawnie w związku z planowanym wydłużeniem; aplikacja nie przyznaje uprawnienia i nie włącza go automatycznie po wyborze angielskiego. Inne dostosowania opisuje się osobno. Neutralny słownik językowy może być odnotowany; funkcje wiedzy CPRE pozostają zamknięte.

W toku uczeń dowolnie przegląda pytania, zmienia odpowiedzi i oznacza je do końcowego przeglądu. Widzi pozostały czas, lecz czytnik nie odczytuje każdej sekundy. Nie widzi klucza, trafności, wyniku pytania, istotnych tagów EO, wyjaśnień, kart, wyszukiwarki wiedzy ani ukrytej podpowiedzi w alternatywie tekstowej. Maksymalna waga pozostaje widoczna. Standardowy pełny mock nie dodaje pytań o pewność; badanie takich deklaracji podczas limitowanej próby stanowi osobno oznaczony, zmodyfikowany protokół (FR-030).

Przy dobrowolnej finalizacji system pokazuje liczbę braków i nieprawidłowych wyborów, umożliwia powrót albo zatwierdzenie. Po upływie limitu zamyka aktualny zestaw odpowiedzi bez wydłużania czasu dialogiem potwierdzenia. Wyjście z aktywności nie zatrzymuje zegara. Jawne wstrzymanie, ujawnienie pomocy albo utrata wiarygodności pomiaru czasu zmieniają kwalifikację próby; odpowiedzi nie przepadają. Wynik z naruszonym protokołem może służyć nauce, ale nie trendowi porównywalnych pełnych symulacji.

### Review i dalsza nauka

Najpierw pokazuje się punkty, mianownik, warunki, czas i zakres. Następnie błędne, częściowe oraz nieudzielone odpowiedzi z wyjaśnieniem punktacji. Raport tematu podaje liczbę obserwacji i konkretne składowe, nie precyzyjne mastery przy jednym pytaniu. Można przeglądać także poprawne odpowiedzi.

Plan dalszej pracy zawiera najwyżej trzy jawne priorytety: rozróżnienie do naprawy, cel do uzupełnienia albo format do przećwiczenia. Pierwsza aktywność jest dostępna od razu. Uczeń może zmienić kolejność. Po review kolejne zadania kontrolne muszą pochodzić z odpowiednio nowych rodzin. „Rozwiąż ponownie ten test” pozostaje treningiem znanego zestawu i nie zastępuje nowego mocka.

## F12 — Learning Progression and Readiness Experience

### Sposób pokazywania pięciu stanów

Stany P0 zachowujemy jako **kategorie dowodów**, a nie skalę inteligencji, prawdopodobieństwo znajomości lub pięć obowiązkowych szczebli. Każda etykieta odnosi się do określonej składowej celu. Obserwacja jednej składowej nie obejmuje automatycznie całego EO.

| Kategoria kanonu | Język dla ucznia | Wymagany dowód i ograniczenie |
|---|---|---|
| Brak wystarczających danych | „Jeszcze tego nie sprawdziliśmy” | Brak odpowiednich prób; brak danych nie znaczy brak wiedzy |
| Wprowadzone / z pomocą | „Materiał poznany; potrzebna samodzielna próba” | Treść obejrzana lub zadanie wykonane przy pomocy; to dwa fakty widoczne w szczegółach |
| Wykazane samodzielnie | „Masz samodzielne poprawne próby” | Jawna liczba, rodzaj i daty prób zgodnych z kryterium; pojedynczy sukces opisany jako wstępny |
| Nowy kontekst | „Udało się w innej sytuacji” | Samodzielny sukces w zatwierdzonej, znacząco odmiennej realizacji celu; dla L1 nie wymagać ponadprogramowego L3 |
| Utrzymane po przerwie | „Potwierdzone po przerwie: 7 dni” | Właściwa próba po rzeczywistym odstępie od ostatniego istotnego kontaktu z tym samym kryterium, z informacją o nowości zadania; świeża lektura jego wyjaśnienia nie uzasadnia tej etykiety |

**Robocza reguła wzmocnienia dowodu, DESIGN HYPOTHESIS:** dla konkretnego kryterium poszukujemy co najmniej dwóch samodzielnych sukcesów w istotnie różnych zadaniach/rodzinach, w tym jednego odroczonego. Nie stanowi to zaliczenia całego EO bez pokrycia wszystkich jego kryteriów. Jedna próba pozostaje w historii i może pokazać fakt nowego zastosowania, ale nie otrzymuje etykiety pełnego opanowania. Poprawność samooceniona po zadaniu otwartym pozostaje oddzielona od oceny według klucza lub review eksperta.

Kryteria celów, warunki pomocy, znajomość rodziny i metoda oceny muszą być opisane przed wykorzystaniem wyników. B ma zapewnić możliwość reprezentacji tych rozróżnień, C przygotować kryteria i zadania. Dalsza walidacja może zmienić liczbę potrzebnych obserwacji bez zmiany historycznych faktów.

**Świeżość kontaktu dotyczy tego samego kryterium (FR-020; kontrakt F13).** Zachowujemy dwa odstępy: od poprzedniej samodzielnej próby oraz od ostatniego istotnego kontaktu z rozstrzygającą instrukcją, feedbackiem lub ćwiczeniem tego kryterium. Kwalifikację bieżącej próby ustalamy z historii sprzed jej rozpoczęcia. Siedem dni od dawnej próby i minuta od ponownej lektury oznaczają świeże ponowne uczenie, nie siedmiodniową retencję. Kontakt z niezwiązanym pojęciem nie resetuje tego odstępu; niepełna historia ogranicza pewność wniosku.

Nowy błąd dodaje flagę **„sprawdź ponownie”** przy odpowiednim kryterium. Nie usuwa dawnych sukcesów, nie zeruje innych pojęć i nie dowodzi zapomnienia, jeśli nowe zadanie było trudniejsze albo wadliwe. Odstęp sam również nie tworzy negatywnego wyniku.

### Prosta polityka rewizji

| Rozwiązanie | Zaleta | Ograniczenie | Decyzja |
|---|---|---|---|
| Stałe powroty | Zrozumiałe, łatwe do porównania w pilocie | Nie reagują na wynik i termin | Kontrola eksperymentalna i fallback |
| Jawne reguły według dowodów | Uwzględniają błędy, odstęp, nowe cele i dostępność wariantów | Parametry nadal wymagają testu | Początkowy wybór |
| Zaawansowana adaptacja | Może dobierać pracę bardziej precyzyjnie przy dobrych danych | Złożoność i niepewna interpretacja, bez lokalnej walidacji | DEFER |

Proponowany kalendarz pilota: pierwszy powrót w kolejnej sesji po co najmniej 24 godzinach od ostatniego istotnego kontaktu z danym kryterium według FR-020, później okna 3–7 i około 14 dni stosownie do wyniku i terminu egzaminu. To **parametry badania**, nie optymalny harmonogram wywiedziony z metaanalizy. Wcześniejsze ponowienie po korekcie nadal jest wartościową praktyką, ale nie dostaje tej samej etykiety co opóźniony wynik. Uczeń widzi faktyczny odstęp; pomiar po 24 godzinach nie obiecuje retencji po miesiącu.

Po błędzie plan obejmuje krótką naprawę i nowy późniejszy powrót. Gdy brak nowej rodziny, dopuszczalna jest powtórka znanego zadania z odpowiednią etykietą. Nie wolno ukryć braku materiału pod słowem „adaptacja”. Jeżeli nic nie jest do powtórki, system proponuje niepokryty cel, mieszany nowy przypadek albo zakończenie pracy — nie produkuje sztucznego długu.

### „Co dalej i dlaczego?”

Najpierw system sprawdza, czy materiał jest poprawny i dostępny. Potem proponuje wznowienie sensownie przerwanej aktywności. W ramach aktualnego celu usuwa rzeczywiście blokujący prerequisite. Po zakończeniu tej gałęzi wybiera potrzebne odroczone sprawdzenie, niepokryty cel albo nową realizację celu o zbyt wąskich dowodach.

Minimalna polityka chroniąca pokrycie: po jednej kompletnej gałęzi powtórki/naprawy system ponownie porównuje potrzebę rewizji, niepokryty zakres i dostępność nowych zadań. Samo utrzymywanie się tej samej luki nie jest nową przesłanką do ponownego domyślnego przydzielenia identycznej gałęzi; następna rekomendacja powinna umożliwić inny potrzebny cel lub późniejszy powrót. Wyjątkiem jest zweryfikowany prerequisite blokujący cel właśnie wybrany przez ucznia. Uczeń może świadomie kontynuować naprawę, ale nie musi wyzerować kolejki, by przejść dalej (FR-021). Przy remisie można użyć jawnej kolejności programu i najdłuższego odstępu od samodzielnej próby. Nie stosujemy niezweryfikowanych „wag prawdopodobieństwa wystąpienia EO na egzaminie”.

Przykładowe uzasadnienia są krótkie i sprawdzalne: „Ten cel nie był jeszcze ćwiczony”; „W dwóch różnych zadaniach pomyliłeś jakość z ograniczeniem — sprawdźmy różnicę”; „Poprzednio korzystałeś z podpowiedzi”; „Od ostatniej próby minął tydzień”; „Dotychczas znałeś wszystkie użyte pytania”. Uczeń może wybrać inny cel. Wyboru nie interpretuje się jako wyniku wiedzy.

### Postęp i gotowość

Podstawowy widok pokazuje trzy rzeczy: **zakres pracy, siłę dostępnych dowodów i najbliższe braki**. Można podać policzalne fakty, np. „12 z 70 EO rozpoczętych”, ale trzeba wyjaśnić mianownik i nie utożsamiać go z odsetkiem wiedzy. Wieloczłonowe EO mają dodatkowo pokrycie składowych; podstawowa terminologia nie znika poza mianownikiem. W pilocie widoczny jest zakres pilota i to, ile pełnego programu pozostaje poza nim.

| Wymiar profilu | Co pokazać | Czego nie twierdzić |
|---|---|---|
| Zakres | Poznane i niepokryte EO/składowe/terminy | „Ukończyłeś kurs” jako dowód wiedzy |
| Samodzielność | Liczba adekwatnych prób bez pomocy | „Dobra odpowiedź po hint = samodzielność” |
| Nowość | Nieznane zadania, rodziny, konteksty | „Inna kolejność opcji = nowe zadanie” |
| Retencja | Daty, odstępy, wyniki i kontakty po drodze | „Odpowiedź po 5 minutach = trwała wiedza” |
| Format i czas | Punkty, braki, nadmiary P, ukończenie w danym profilu | „Słabsze K dowodzi gorszej wiedzy”, bez kontroli treści |
| Stabilność | Różne porównywalne formy, ich zakres i warunki | Trend na znanych zestawach jako trend gotowości |
| Niepewność | Mało prób, brak wariantu, niezweryfikowana treść | Liczba z kilkoma miejscami po przecinku zamiast wyjaśnienia |

Komunikat po dobrym mocku może brzmieć: **„W tej nieznanej próbie uzyskałeś 78% punktów w wybranym limicie. Wymaga poprawy rozróżnienie X; celów Y i Z ta próba nie sprawdzała. Nie mamy jeszcze odroczonych dowodów dla obszaru W.”** Nie wynika z niego prawdopodobieństwo zdania. Pilot w ogóle nie wydaje oceny gotowości do pełnego egzaminu.


## F14 — Minimum Coherent Functional Scope

### Najmniejsza pełna pętla

Minimum nie jest pełnym bankiem A/P/K ani zminiaturyzowanym kursem. Jest kompletną drogą dla jednego rozróżnienia: **cel → potrzebne objaśnienie → próba bez pomocy → feedback → celowana wiedza z powrotem → inny przypadek → odroczone sprawdzenie → uczciwy opis dowodu**. Pierwsza próba może równocześnie być retrieval i zadaniem o formie egzaminacyjnej; nie trzeba dodawać drugiej aktywności tylko po to, aby nazwać ją „retrieval”. Comparison może być tym samym materiałem, który wyjaśnia błąd — nie potrzebuje osobnego kursu.

Na pierwszym przejściu wystarczy jedno kryterium EO, krótka karta z przykładem, pytanie, rationale, potrzebne porównanie i dwie odpowiednio różne okazje dalszej próby, z których jedna pozostaje nieujawniona do pomiaru odroczonego. To pozwala wykryć błędy przepływu, ale nie ocenić całego modelu dla wszystkich typów treści. Następny mały przekrój obejmuje **2–3 rozróżnienia oraz A, P i K**, żeby sprawdzić częściowy wynik, różne mapowania i powrót z wiedzy. Wczesny walkthrough może być przeprowadzony z kartami i moderatorem; implementacja nie jest warunkiem nauki o trafności funkcji.

Nie są konieczne do pierwszej pętli: pełne onboarding, diagnoza startowa, globalna wyszukiwarka, profile czasu egzaminu, pełny mock, dashboard gotowości, graf, zaawansowany scheduler lub automatyczna diagnoza misconception. Potrzebne są natomiast poprawna treść, stan odpowiedzi, jasny powrót, oddzielenie pomocy, nowości i opóźnienia oraz możliwość zgłoszenia wątpliwego materiału. Kontrolę redakcyjną można na tym etapie realizować ręcznie.

### Trzy poziomy zakresu

Oznaczenia **Level 1–3** dotyczą zakresu produktu. Oznaczenia **L1–L3** przy EO odnoszą się wyłącznie do poziomu poznawczego IREB.

| Poziom | Włączone zdolności | Świadomie poza zakresem | Dlaczego taka granica | Treści wymagane | Warunek walidacji i ryzyko |
|---|---|---|---|---|---|
| **Level 1 — Essential Educational Loop** | Nauka, kontekstowe pojęcia, A/P/K w małym przekroju, feedback i powrót, minimalna remediacja, nowy wariant, odroczony check tematu, warunki dowodu, ciągłość, dostępność, ręczny publish gate | Cały syllabus, pełny timed mock, global search, werdykt gotowości, confidence jako obowiązek, graf, rozbudowana adaptacja | Sprawdza pełną przyczynową drogę od błędu do późniejszego wykonania | Najpierw 2–3 kryteria; następnie docelowy pilot tematyczny po audycie | Uczeń sam przechodzi pętlę i rozumie wynik; niezależny późniejszy wynik możliwy. Ryzyko: zbyt mała różnorodność i efekt moderatora |
| **Level 2 — Reliable Examination Preparation** | Level 1 w pełnym zakresie, wszystkie EO/składowe i podstawowe terminy, globalne wyszukiwanie, mieszane rewizje, pełne symulacje, review, profile warunków, pełny profil dowodów, utrzymanie wersji | Predykcja zdania, pełny CMS kursów, społeczność, automatyczny autor kluczy | Dopiero tu można uczciwie mówić o przygotowaniu do całego FL | Audyt całego zakresu, odpowiednie L3, recenzowane rezerwy nowych form, warianty i complete rationale | Zgodność formalna i pokrycie potwierdzone, sensowny pilot uczenia. Ryzyko: niekalibrowane trudności, wyczerpanie rezerwy, aktualizacje źródeł |
| **Level 3 — Experimental Enhancements** | Testy małej mapy, aktywnej rekonstrukcji relacji, bardziej zaawansowanej adaptacji, opcjonalnej kalibracji pewności | Automatyczne wdrożenie wszystkiego po samym wzroście liczby użytkowników | Każdy dodatek musi wykazać przyrost wartości względem Level 1/2 | Stabilny korpus, dobre dane i niezależny zbiór oceny danego eksperymentu | Lepsze późniejsze wykonanie albo wiarygodna oszczędność czasu przy zachowaniu jakości; ryzyko kosztownej atrakcyjności bez uczenia |

### Audyt proponowanego korpusu

Zachowujemy zakres P1 D12 jako **hipotezę budżetu**: 9 pełnych EO i fragmenty 3 kolejnych w 12 autorskich komórkach. Nie utożsamiamy komórki z EO.

| Obszar | Zakres planowany | Warunek pełności |
|---|---|---|
| Rodzaje wymagań, 2 komórki | EO1.1.2 L2 | Wszystkie wymagane rozróżnienia, nie jeden przykład quality |
| Kontekst i granice, 3 komórki | EO4.1.1 L3; części EO2.2.2 i EO3.4.5 | Próba wyznaczenia granic, interpretacja właściwych modeli i jawne ograniczenie częściowych EO |
| Jakość, 3 komórki | EO3.8.1–3.8.2 L1 | Cały wymagany zakres kryteriów pojedynczego wymagania i artefaktu |
| Walidacja, 2 komórki | EO4.4.1 L2, EO4.4.2 L1; część EO4.4.3 | Potrzeba i aspekty walidacji; nie ogłaszać pokrycia wszystkich technik |
| Traceability, 2 komórki | EO6.6.1–6.6.3 L1 | Powody, rodzaje i formy dokumentowania, bez wymogu ponadprogramowego projektowania |

**24–32 karty, 8–12 jednostek, 40–60 relacji i 60 pytań treningowych** mogą wystarczyć do tego zakresu, jeżeli każda potrzebna ścieżka jest kompletna. Nie trzeba osiągać dolnej liczby relacji, gdy 30 dobrze dobranych obsługuje wszystkie badane czynności. Nie należy kończyć authoringu na 32 kartach, jeżeli nie zamknięto wymaganego rozróżnienia. Szczególnie sprawdzić rodzinę kontrolną, pełne rationale oraz rubrykę L3; ich brak jest bardziej istotny niż brak kilku dodatkowych linków.

**24 pytania reserved są ograniczonym zasobem pomiarowym.** Przy 12 komórkach dają po dwa itemy na komórkę. Można przypisać jedną formę 12-itemową do pomiaru bezpośredniego i drugą do odroczonego, o ile rodziny nie przeciekły w treningu. Nie wystarczą jednocześnie na pretest, immediate post-test i delayed post-test po jednym nieznanym itemie na komórkę. Do trzech takich faz potrzeba co najmniej 36 odpowiednio różnych pozycji przy tym prostym założeniu liczebnym — nadal bez dowodu wystarczalności psychometrycznej.

W pierwszym badaniu zalecamy użyć orientacyjnych zadań treningowych do ustalenia wejścia, a rezerwę chronić dla właściwych pomiarów. Jeżeli celem jest przede wszystkim retencja, można przeznaczyć większą część rezerwy na pomiar odroczony, kosztem szerokości wczesnego post-testu. Dokładny przydział zależy od wybranego eksperymentu. „Reserved” oznacza rolę materiału i ochronę względem osoby, nie gwarancję, że wystarczy do dowolnej liczby badań.

Pilot może sprawdzić powrót z wiedzy, poprawność punktacji, zrozumiałość feedbacku, rozróżnienie pomocy i samodzielności, występowanie powtarzanych błędów, wykonalność odroczonego pomiaru i porównanie wariantów przepływu. **Nie potwierdzi pełnej gotowości FL, poufnego blueprintu, prawdopodobieństwa zdania ani reprezentatywności trudności.** 24 pozycje nie tworzą standardowej pełnej formy około 45 pytań, a zakres 9 EO nie obejmuje całego programu.

Rozszerzenie do Level 2 wycenić dopiero po audycie składowych, rodzin i form. Wstępna estymata 375–415 pytań z P1 była sposobem liczenia nakładu, nie wymaganiem produktu. Jedna pełna nieznana forma wymaga rzeczywistych pozycji w odpowiednim przekroju; trend niezależnych form wymaga kolejnych nowych zestawów. Nie przyjmujemy automatycznie obowiązku „trzy razy 45”, jeśli nie ma jeszcze uzasadnienia i budżetu na wiarygodne rodziny.


### Rejestr źródeł i zakres weryfikacji

**Data dostępu do źródeł zewnętrznych: 1 listopada 2026.** Poniższe identyfikatory wiążą cytowania w raporcie z konkretnymi materiałami. Dokumentacje produktów potwierdzają opisane funkcje, a nie ich skuteczność w CPRE. Przyjęte progi pilota, liczby kroków, nazwy stanów i reguły kontynuacji są decyzjami lub hipotezami projektu.

#### Źródła projektu

- **P0.** [00_IREB_CPRE_Fundament_pedagogiczny.md](https://chatgpt.com/library?file_id=libfile_1f79d4e5f31481a4a185f5dddb97b075&account_id=9ff2b74e-3ec8-4a0b-8c93-722210e5cae4), wersja opracowania 1.0, 1.11.2026. Przeczytany w całości. Wiążący punkt wyjścia pedagogicznego.
- **P1.** [IREB_CPRE_Deep_Research_PL_2026-11.md](https://chatgpt.com/library?file_id=libfile_fe4178cdcf7481a4bc3624de050bfb68&account_id=9ff2b74e-3ec8-4a0b-8c93-722210e5cae4), D1–D15 i pełna bibliografia. Cały raport przejrzano zespołowo. Zakres wcześniejszego dostępu do publikacji — pełny tekst, abstrakt lub metadane — zachowuje ważność; nie został automatycznie rozszerzony w tej fazie.

#### Oficjalne źródła IREB

- **I0.** IREB, [Download Center](https://cpre.ireb.org/en/downloads-and-resources/downloads). Wersje, języki, metadane i dostępność. Nie jest zamiennikiem treści PDF.
- **I1.** IREB, [CPRE Foundation Level Syllabus EN 3.3.0](https://isqi.org/media/bb/62/7b/1789026524/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf), 1.04.2026, oficjalny dokument udostępniony przez iSQI. Sprawdzono tabele EO, poziomy, zakres egzaminu i wskazane sekcje; strony drukowane 4–5, 11, 14, 19, 29–31, 41 i 44 istotne dla wywodu. Wersję PL i pełne odwzorowanie pojęć utrzymuje P1; aktualny pełny audyt EN/PL należy do authoringu.
- **I2.** IREB, [Foundation Level and RE@Agile Primer Examination Regulations 5.6.2](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf), 5.02.2024. Pełny dokument, strony 2–6; reguły czasu, punktów i formatów.
- **I3.** IREB, [Online Self-Assessment](https://cpre.ireb.org/en/training-certification/online-self-assesment). Publiczny opis Training Mode, Exam Simulation, rationale, EO i źródeł. Bez dostępu do zalogowanego banku.
- **I4.** IREB / Martin Glinz, [CPRE Glossary EN 2.2.0](https://hub.ireb.org/media/pages/resources/cpre-glossary/bb302c52fe-1787039949/ireb_cpre_glossary_en_2.2.pdf), 1.10.2025. Metadane i właściwe hasła: system boundary, system context, context boundary, functional requirement, quality requirement, constraint, traceability. Nie reprodukujemy pełnego słownika.
- **I5.** IREB, [Foundation Level Handbook EN 1.3.2](https://isqi.org/media/65/0a/43/1789029072/cpre_foundationlevel_handbook_en_v1.3.2.pdf), historia wersji: 23.07.2026. Sprawdzono początek, warunki użycia, historię i spis treści. Dostęp przez oficjalnego certyfikatora; nie wykonano pełnego przeglądu 161 stron.
- **I6.** IREB, [Practice Exam Set_Public_EN_3.3.1](https://isqi.org/media/a5/83/53/1710759616/IREB_CPRE_FL_Questionnaire_Set_Public_EN_v3.3.1.pdf). Publiczny przykład formy, bez ekstrapolacji proporcji na operacyjną pulę. Pytania nie są reprodukowane w naszych przykładach.

#### Udokumentowane funkcje produktów

- **A1.** AMBOSS, [Using Study Mode and Exam Mode](https://support.amboss.com/hc/en-us/articles/360036038991-Using-Study-Mode-Exam-Mode). Dwa tryby, oznaczenie pomocy, Key Learning Point i granica symulacji.
- **A2.** AMBOSS, [Reviewing a Qbank session](https://support.amboss.com/hc/en-us/articles/360035979311-Reviewing-a-Qbank-session). Review, rationale, terminy w opcjach prowadzące do artykułu.
- **A3.** AMBOSS, [Qbank sessions based on Articles](https://support.amboss.com/hc/en-us/articles/360034823632-Qbank-sessions-based-on-Articles). Artykuł jako początek praktyki; związki bezpośrednie i pośrednie.
- **A4.** UWorld, [USMLE Product Tour](https://medical.uworld.com/usmle/features/). Tutor, warunki czasowe, self-assessments, wyjaśnienia i wcześniejsze testy. Nie przenosi się formatu USMLE do IREB.
- **A5.** Anki, [Leeches](https://docs.ankiweb.net/manual/leeches). Reakcja na powtarzające się niepowodzenia, bez przenoszenia liczbowego progu do CPRE.
- **A6.** Anki, [Studying](https://docs.ankiweb.net/manual/studying). Start talii, New/Learning/Due, odsłonięcie odpowiedzi i samoocena.
- **A7.** SuperMemo, [What are repetitions and drills?](https://www.supermemo.com/en/faq/repetitions-and-drills). Rozdział nowej nauki, powtórek i bieżących trudnych pozycji. Nie przyjmujemy marketingowych twierdzeń o dokładnym momencie zapominania jako wyniku badania.
- **A8.** RemNote, [The Flashcard Home](https://help.remnote.com/en/articles/7925835-the-flashcard-home). Kolejka, nowy materiał i organizacja sesji.
- **A9.** RemNote, [Practicing Specific Flashcards](https://help.remnote.com/en/articles/6904503-practicing-specific-flashcards). Dokument lub temat jako zakres praktyki i różne warunki jej wykonania.
- **A10.** RemNote, [Hiding Ancestors on Flashcards](https://help.remnote.com/en/articles/9631727-hiding-ancestors-on-flashcards). Kontekst notatki może zdradzać odpowiedź; przydatna przesłanka kontroli ekspozycji.
- **B1.** Brilliant, [What are Learning Paths?](https://brilliant.org/help/features/what-are-learning-paths/). Kolejność tematów, objaśnienia, zadania i checkpoints.
- **B2.** Khan Academy, [What are Course and Unit Mastery?](https://support.khanacademy.org/hc/en-us/articles/115002552631-What-are-Course-and-Unit-Mastery), aktualizacja 25.08.2026. Aktualna definicja procentu własnego systemu i stanów umiejętności.
- **B3.** Khan Academy, [What are Mastery Challenges?](https://support.khanacademy.org/hc/en-us/articles/360037494231-What-are-Mastery-Challenges). Powrót do ćwiczonych umiejętności; funkcja opisana dla matematyki.
- **B4.** Quizlet, [Studying with Learn](https://help.quizlet.com/hc/en-us/articles/360030986971-Studying-with-Learn). Cel i ustawienia sesji, mechanizmy ćwiczenia.
- **B5.** Quizlet, [Using Progress for targeted studying](https://help.quizlet.com/hc/en-ca/articles/360048803491-Using-Progress-for-targeted-studying). Wybór terminów wymagających pracy.
- **B6.** Quizlet, [Studying with Test](https://help.quizlet.com/hc/en-us/articles/360030642972-Studying-with-Test). Konfiguracja, submit/review i ograniczenie zachowania niedokończonej próby.
- **B7.** Duolingo, [Explain My Answer](https://blog.duolingo.com/explain-my-answer-now-free/). Opcjonalne objaśnienie po odpowiedzi; opis funkcji, nie dowód jej efektu CPRE.
- **B8.** Duolingo, [How to Review Previous Lessons](https://blog.duolingo.com/how-to-review-lessons-on-duolingo/). Powrót do wcześniejszych sekcji i aktualnego miejsca ścieżki.
- **B9.** Duolingo, [Practice Tab](https://blog.duolingo.com/guide-to-duolingo-practice-hub/). Ćwiczenia i powrót do błędów; deklarowana dostępność zależna od platformy.
- **B10.** Obsidian, [Graph view](https://obsidian.md/help/plugins/graph). Graf globalny i lokalny; link nie stanowi dowodu relacji pedagogicznej.
- **B11.** Obsidian, [Page preview](https://obsidian.md/help/plugins/page-preview). Podgląd bez odejścia; hover nie jest jedyną dopuszczoną interakcją naszego produktu.
- **B12.** Obsidian, [Backlinks](https://obsidian.md/help/plugins/backlinks). Linki zwrotne i kontekst wzmianki.

#### Dostępność

- **W0.** W3C, [WCAG 2.2](https://www.w3.org/TR/WCAG22/), Recommendation 12.12.2024. Norma docelowa; ten dokument nie jest deklaracją zakończonej zgodności aplikacji.
- **W1.** W3C, [Understanding Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), SC2.1.1.
- **W2.** W3C, [Understanding Name Role Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html), SC4.1.2.
- **W3.** W3C, [Understanding Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html), SC2.4.3.
- **W4.** W3C, [Understanding Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), SC1.4.1.
- **W5.** W3C, [Understanding Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html), SC4.1.3.
- **W6.** W3C, [Understanding Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html), SC2.2.1; rozróżnienie treningu i czasu istotnego dla zadania. Artykuły Understanding są objaśnieniami standardu, nie oddzielnymi normami.

#### Ciągłość badań pedagogicznych

Nie powtarzano całego przeglądu. Ustalenia retrieval, spacing, transferu, obciążenia, feedbacku i mapowania przyjęto z odpowiednimi kwalifikacjami z **P1 D3/D5/D6/D8 i bibliografii L/G/P**. W szczególności: L03 Yang i in. 2021; L08 Latimier i in. 2021; L11 Sweller i in. 2019; L13 Pan i Rickard 2018; G2 Schroeder i in. 2018; G16 Soderstrom i Bjork 2015. Nie liczy się dwukrotnie Butler/Roediger występującego w dwóch częściach bibliografii. Dowód ogólny nie ustanawia optymalnego kalendarza CPRE ani przewagi lokalnego panelu lub całego proponowanego modelu.

**Ograniczenia, które wpływają na decyzje:** brak obserwacji zalogowanych interfejsów i rzeczywistej sesji kandydata; brak lokalnych wyników porównań; brak kalibracji pytań; nieznany rozkład poufnej puli; częściowe ograniczenia dostępu do badań odziedziczone z P1; brak pełnego porównania źródeł EN/PL. Są to powody walidacji opisanej w F15, nie powody do wstrzymania całego funkcjonalnego projektu.


### Handoff B — Educational Knowledge Architecture

**Mandat:** zaprojektuj semantyczną architekturę treści, która realizuje F13 i 38 FR, zachowując model jednej sesji oraz rozdział Nauka/Sprawdzenie. Nie wracaj do greenfield listy funkcji. Nie wybieraj bazy, API ani technologii przechowywania. P0 pozostaje pedagogicznym kanonem; ten blueprint jest kontraktem funkcjonalnym. Zweryfikowana korekta źródeł może zmienić regułę, ale musi mieć ślad decyzji i wpływu.

**Wejścia:** P0, P1 D2/D6–D12, F04–F06, F09–F13, F14–F16 oraz źródła IREB o wskazanych wersjach. Szczególnie użyj F13.4 jako macierzy pokrycia. Każdy pominięty wymóg wymaga uzasadnienia, a nie domyślnej interpretacji autora architektury.

**Jednostki do zbadania:** EU, EO i ich operacyjne składowe; pojęcie i terminologia PL/EN; definicja i autorskie objaśnienie; comparison, przykład, kontrprzykład i worked scenario; Learning Unit; pytanie, opcja/stwierdzenie, scoring i explanation; misconception hypothesis; nazwana relacja i prerequisite; revision prompt; Source Reference; variant family; blueprint sprawdzenia; znaczenie dowodu i kontekstu nawigacji. Ustal, które mogą współdzielić treść i gdzie rozdzielenie jest potrzebne do poprawnego użycia. Nie zamieniaj tej listy w obowiązkową listę tabel lub plików.

**Relacje obowiązkowe dla funkcji:**

- Materiał **wspiera** EO; zadanie **mierzy** określone kryterium EO; wzmianka tylko **dostarcza kontekstu**. Te trzy role pozostają rozróżnione.
- Opcja lub stwierdzenie **ma uzasadnienie w danym kontekście**, a rationale wskazuje **regułę rozstrzygającą**. W razie potrzeby prowadzi do pojęcia lub comparison.
- Comparison **odróżnia** pojęcia według określonego wymiaru; przykład **ilustruje** zastosowanie, a kontrprzykład **wyznacza granicę**.
- Prerequisite **jest potrzebny do konkretnego działania**. Podobieństwo pojęć lub dwukierunkowy link nie ustanawia tej zależności.
- Obserwowany błąd **może wspierać** hipotezę; sonda **rozdziela** możliwe przyczyny; korekta **odnosi się do** reguły; follow-up **sprawdza właśnie naprawiany problem**.
- Zadanie **należy do rodziny** i ma relacje bliskości z wariantami/tłumaczeniami. Nowy kontekst jest cechą zadania oraz jego relacji do wcześniejszych kontaktów ucznia, nie arbitralną etykietą autora.
- Źródło **wspiera konkretne twierdzenie**, z lokalizacją i zakresem, a zmiana źródła **może wpłynąć na** wskazane klucze, terminy i relacje.

**Nienegocjowalne kontrakty:** pakiet pytania zawiera komplet rationale i scoringu; kontakt z pomocą jest oddzielony od wcześniejszej znajomości; nowość jest oceniana przed prezentacją w bieżącej próbie; ekspozycja jest indywidualna; ogólna nauka pojęcia nie zużywa całego EO; kryterium i metoda oceny ograniczają wniosek. Należy odróżnić czas od poprzedniego wykonania od czasu od ostatniego istotnego kontaktu z badanym kryterium. Fresh instruction nie może być przedstawiona jako opóźniona retencja. Dane aktywności i stan publikacji są odrębne od prawdziwości twierdzeń korpusu.

**Nawigacja wpływająca na model:** z opcji trzeba osiągnąć fragment wyjaśniający jej błąd, z niego potrzebną relację, a z pojęcia odpowiednie zadania treningowe. W aktywnym Sprawdzeniu żadna z tych dróg ani nazwa/preview nie może ujawnić rozwiązania. Utrzymanie kotwicy pytania należy do doświadczenia aplikacji; B określa znaczenie identyfikowanych elementów i ich wersji. Nie projektuje mechanizmu technicznego zachowania scrollu.

**Proweniencja i aktualizacja:** każdy merytoryczny fragment ma wersję, źródło, lokalizację, język, typ twierdzenia, zakres praw i status review. Relacja nie dziedziczy poprawności od dwóch poprawnych pojęć. Przewidywany dystraktor nie staje się empirycznie częstą misconception. Przewidywana trudność nie jest skalibrowanym parametrem. Po zmianie klucza architektura ma pozwalać zidentyfikować dotknięte interpretacje dowodów bez wymazywania historii.

**Funkcje niemożliwe bez szczególnej treści:** FR-012 bez rationale–distinction nie zapewnia celowanego przejścia; FR-014 bez uzasadnienia prerequisite nie może wymuszać podstaw; FR-015 bez alternatyw i sondy nie diagnozuje pomyłki; FR-017/019 bez rodziny nie chronią nowości; FR-020/022 bez dwóch czasów kontaktu nie uzasadniają retencji; FR-024/025 bez pokrycia i rezerwy nie uzasadniają pełnego mock ani profilu gotowości.

**Otwarte rozstrzygnięcia B:** granularność składowych złożonego EO; granica między wariantem i rodziną; kryteria porównywalności trudności bez kalibracji; współdzielenie rationale; zasady dwujęzycznej równoważności; wykrywanie nieuzasadnionych/cyklicznych prerequisites; rozróżnienie stale niepełnego źródła od chwilowo niedostępnej treści; minimalny status jakości pozwalający na practice versus reserved. Każdą propozycję sprawdź na przykładach F13.8 i brakach F13.7.

**Wymagany wynik B:** słownik semantyczny, znaczenie i ograniczenia relacji, schemat kompletności pakietów na poziomie informacji, reguły identyfikacji i wersji, mapowanie wszystkich FR, audyt przykładowych trzech pakietów oraz lista brakujących decyzji authoringu. Warunek odbioru: da się obsłużyć wszystkie przejścia i wyjątki F06/F10 bez automatycznego dopowiadania wiedzy. B nie generuje pełnego kursu ani nie ustanawia nowego matematycznego mastery bez odrębnej walidacji.

### Handoff C — IREB Content Acquisition and Authoring

**Mandat:** przygotuj poprawny, kontrolowany i możliwie mały korpus realizujący wybrany przepływ. Najpierw kompletność edukacyjnego pakietu, potem skala. Nie kopiuj publicznego sample do banku z założeniem, że publiczny dostęp rozstrzyga prawa. Nie traktuj przykładów tego raportu jako gotowej rezerwy pomiarowej.

**Pozyskanie i kontrola źródeł:** aktualny Syllabus EN/PL 3.3.0, regulamin 5.6.2, Glossary EN/PL 2.2.0, Handbook EN 1.3.2 oraz oficjalne publiczne instrukcje i sample. Przy każdym źródle ustal zamierzony sposób użycia i odpowiednie prawa: odsyłacz, krótki cytat, parafraza, własny przykład, reprodukcja diagramu lub pytania. Zapisz dokładną lokalizację wspierającą twierdzenie. Pełny audyt Handbooka i porównania EN/PL nadal należy wykonać w granicach faktycznie używanej treści. Różne numery wersji dokumentów nie dowodzą sprzeczności.

**Kontrola języka:** oficjalny termin polski i angielski, synonimy i zwroty mylące; oznaczone autorskie parafrazy; jeden sens pojęcia w karcie, pytaniu, rationale i feedbacku. Polski glossary zawiera terminologię PL i definicje EN; nie przypisuj własnemu tłumaczeniu statusu oficjalnego bez podstaw. Sprawdzaj negację, kwantyfikatory, warunki „najlepsze/dwa”, zgodność liczby odpowiedzi i znaczenie słowa „wymaganie”. Upraszczaj język objaśnienia bez zmiany konstruktu pytania. [I0, I4]

**Kolejność pierwszego authoringu:**

1. Wybierz 2–3 rozróżnienia z pilota: kontekst/granica, quality/constraint i jawna traceability. Dla każdego określ dokładny EO, poziom i mierzoną składową.
2. Napisz rdzeń objaśnienia, wspólny wymiar comparison, przykład i potrzebny kontrprzykład. Przygotuj źródłowe uzasadnienie poprawnej reguły.
3. Opracuj zadanie i wszystkie opcje, bez ukrytych założeń. Nadaj klucz, wagę, k/m i rolę practice/verification. Rationale obejmuje także pominiętą poprawną opcję P i brak odpowiedzi K jako odrębne zdarzenie.
4. Powiąż tylko konieczne fragmenty wiedzy. Dla każdego linku napisz jedno zdanie wyjaśniające jego cel. Nie twórz grafu poprzez podobieństwo słów.
5. Dodaj korektę i follow-up mierzący dokładnie naprawiane rozróżnienie. Hipoteza misconception, alternatywy i sonda są warunkowe; zwykła pomyłka nie potrzebuje całego diagnozowania.
6. Przygotuj odrębną rodzinę do późniejszego pomiaru oraz rozdziel role rezerwy przed pierwszą ekspozycją. Tłumaczenie lub zmiana nazw nie stanowią niezależnej rodziny.
7. Opracuj rubryki dla otwartych zadań, szczególnie L3. Samoocena nie otrzymuje statusu oceny eksperckiej. Zadania L1 nie wymagają L3 tylko dlatego, że istnieje scenariusz.
8. Zapewnij dostępne odpowiedniki diagramów, jasne instrukcje i brak przecieku rozwiązania przez podpis, breadcrumb lub tekst alternatywny.
9. Przeprowadź niezależny review klucza, punktacji, EO, języka, wszystkich rationale, relacji i praw. Wstrzymaj każdy nierozstrzygnięty klucz; dopiero potem test z uczniem.
10. Rozszerz korpus do audytowanych 12 komórek i zbieraj rzeczywiste problemy. Korekta błędnego itemu zawiera listę dotkniętych twierdzeń i dowodów; nie karze ucznia za błąd autora.

**Typy treści wymagające własnego autorstwa:** krótkie objaśnienia, comparisons, przykłady/kontrprzykłady, scenariusze, pytania i dystraktory, rationale wszystkich opcji, prompty retrieval, sondy błędów, follow-up, rubryki i komunikaty ograniczeń. LLM może pomóc szkicować. Ostateczne statusy „sprawdzone”, „recenzowane” i „skalibrowane” muszą wynikać z faktycznie wykonanych odrębnych działań.

**Warunek odbioru C:** trzy kompletne recenzowane pakiety A/P/K realizują F13.8 bez luk; działają powrót i nowa próba; plan pomiaru nie zużywa uprzednio własnej rezerwy; każde istotne twierdzenie i klucz ma źródło. Następnie audyt potwierdza zakres deklarowanych 9 EO, fragmentów 3 EO i podstawowej terminologii. Uczciwy brak treści jest lepszym wynikiem authoringu niż pozornie kompletne, niezweryfikowane objaśnienie.

