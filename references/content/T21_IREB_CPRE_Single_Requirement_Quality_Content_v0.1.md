# T21 — Jakość pojedynczego wymagania / Single requirement quality — Content v0.1

**Projekt:** IREB CPRE Foundation Level Learning System.  
**FLOW_ID:** FLOW-T21-01; tryb CREATE; data 2 listopada 2026, Europe/Warsaw.  
**Rewizja dokumentu:** v0.1; adresowalne obiekty: r1, o ile wskazano inaczej.  
**Odbiorca:** właściciel projektu, recenzent i agent implementujący aplikację.  
**Stan:** authoring ukończony i autorsko sprawdzony; oba pliki kompletne do odrębnego review. G2/G3/G4 pozostają otwarte.  
**Uwaga o ujawnieniu:** to pełne wydanie recenzenckie. Zawiera rozwiązania, rubryki i kandydatów delayed. Czytelnik poznaje te treści; plik nie tworzy chronionej rezerwy.

## 1. Zakres, baseline i granice wnioskowania

Realizowana faza: C — Content Acquisition & Authoring, w granicach T21 z M01 i §3–8 M02 v0.1. Celem jest pełny merytoryczny wsad tego tematu, a nie kod, schemat bazy, projekt ekranów ani nowy algorytm mastery.

**RUN_SCOPE:** całe zadeklarowane T21: EO3.8.1, L1, sześć zalecanych kryteriów, znaczenie ich nazw, szczególna waga adekwatności i zrozumiałości oraz relacja stopnia spełnienia kryteriów do wartości wymagania. Oficjalne lokalizacje: Syllabus EN 3.3.0, wykaz EO s.19 i §3.8 s.29–30; PL 3.3.0, wykaz s.20 i §3.8 s.30. Strony w całej paczce są fizycznymi stronami PDF liczonymi od 1.

**Baseline:** START i R06; przyjęte B01–B04 v0.2; kanon pedagogiczny; FTC F13/F10–F12/F14; Blueprint F09; M01/M02 v0.1; C01–C04 v0.2 odczytane jako wzorzec do review. Dostarczone Project Sources zawierały C v0.1; aktualne C v0.2 odnaleziono po dokładnych nazwach i odczytano osobno. Historyczne stwierdzenia o otwartym G1 nie uchylają R06. Szczegóły identyfikacji w QA.

**Poza pomiarem:** całe EO3.8.2, EO1.1.2, EO3.2.2, EO4.4.1–3 oraz tworzenie/naprawianie wymagań na L3. Comparison z T22 wspiera rozróżnienie poziomu jakości; nie mierzy pełnego T22. Nie odbiera się G2, G3 ani G4. K-04 i wiersz 4 ILL-K01 / KRY-X01 pozostają bez zmian.

| Kryterium z M02 | Obserwowalna czynność | Zakres/aspekt kontrolowany oddzielnie | Granica oceny |
|---|---|---|---|
| KRY-T21-01 | Rozpoznaje sześć nazw i odtwarza ich znaczenia | ZAK-T21-01 adequate; 02 necessary; 03 unambiguous; 04 complete; 05 understandable; 06 verifiable | Nie wnioskuj o pozostałych pięciu znaczeniach z trafienia jednego |
| KRY-T21-02 | Rozpoznaje dwie najważniejsze cechy oraz ich znaczenie wobec pozostałych | ZAK-T21-07: adekwatność i zrozumiałość; warunek wartości łączy się z KRY-T21-03 | Samo wskazanie pary nie potwierdza praktycznej walidacji potrzeb |
| KRY-T21-03 | Pamięta zalecany charakter listy i kontekst wartości | ZAK-T21-08: stopień spełnienia względem wartości; brak obowiązku całkowitego spełnienia zawsze | Nie ustala progu liczbowego ani zwolnienia z dbałości o jakość |

ZAK to adresy zakresu lokalnych kryteriów, nie nowe EO ani nowa norma IREB. Są jednostkami śladu i kontaktu: materiał dotyczący ZAK-T21-04 nie dowodzi ani nie resetuje automatycznie wszystkich zakresów KRY-T21-01. Klasyfikacja twierdzeń: **FACT** — sprawdzona treść źródła; **INTERPRETATION** — jej zastosowanie w wymyślonym przykładzie; **FUNCTIONAL DECISION** — przyjęty kontrakt projektu; **DESIGN HYPOTHESIS** — przewidywana przydatność wariantów. Wszystkie polskie objaśnienia są autorskie, a nie oficjalnymi polskimi definicjami.

## 2. Źródła i zlokalizowane twierdzenia

### 2.1. Rejestr rzeczywiście odczytanych źródeł

Wszystkie poniższe kontrole przeprowadzono 2.11.2026. V-TEXT oznacza odczyt wymienionego zakresu, a nie całego pobranego pliku. Katalog sprawdzono jako V-META. Używane dokumenty PDF pobrano i odczytano; nieskuteczny odczyt PL w czytniku WWW został zastąpiony odczytem publicznego pliku, bez obchodzenia uwierzytelnienia.

| ID lokalny / ID wspólne | Dokument, autorzy, wersja i link | Faktyczny odczyt w T21 | Funkcja |
|---|---|---|---|
| SRC-T21-CAT / C-S01 | IREB e.V., [CPRE Download Center](https://cpre.ireb.org/en/downloads-and-resources/downloads), strona bez rewizji | Wpisy Syllabus 3.3.0, Glossary 2.2.0 i Regulations 5.6.2; Handbook 1.3.2 tylko jako metadana | Kontrola profilu, nie kluczy |
| SRC-T21-SEN / C-S02 | IREB e.V.; Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal, [CPRE Foundation Level Syllabus EN 3.3.0](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf), 1.04.2026 | s.1–2; s.4–5; s.19; §3.8 s.29–30; §1.1 s.11–12 dla comparison | EO, poziom, lista, priorytet i wartość |
| SRC-T21-SPL / C-S03 | IREB e.V., ci sami autorzy; przekład SJSI: Radosław Grębski, Joanna Kalabińska, konsultacja Iwona Kolasa, redakcja Monika Petri-Starego; [Syllabus PL 3.3.0](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/68b8837862-1787039957/cpre_foundationlevel_syllabus_pl_v.3.3.pdf), 1.04.2026 | s.1–2 i 4; s.19–20; §3.8 s.30–31; §1.1 s.11–12 | Kontrola PL/EN; osobne strony |
| SRC-T21-GEN / C-S05 | Martin Glinz / IREB e.V., [Glossary EN 2.2.0](https://hub.ireb.org/media/pages/resources/cpre-glossary/bb302c52fe-1787039949/ireb_cpre_glossary_en_2.2.pdf), 1.10.2025 | s.1–2, 5 i 8; adequacy s.8; completeness s.11; necessity s.20; quality criteria i quality requirement s.23; requirement s.24; stakeholder s.28; unambiguity i understandability s.32; verifiability s.34 | Znaczenia sześciu kryteriów i pojęć pomocniczych; kontrola pogrubień wybranych haseł |
| SRC-T21-GPL / C-S06 | Martin Glinz / IREB e.V.; terminy PL Monika Petri-Starego i Karolina Zmitrowicz, [Glossary PL 2.2.0](https://hub.ireb.org/media/pages/resources/cpre-glossary/d804142017-1787039952/ireb_cpre_glossary_pl_2.2.pdf), 1.10.2025 | s.1–2, 5 i 8; adekwatność s.8; interesariusz s.14; jednoznaczność s.15; kompletność s.16; konieczność i kryteria jakości s.17; weryfikowalność s.32; wymaganie s.33; wymaganie jakościowe/funkcjonalne s.34; zrozumiałość s.36 | Oficjalne polskie etykiety; definicje w tym PDF pozostają angielskie |
| SRC-T21-REG / C-S04 | IREB e.V., [Foundation Level and RE@Agile Primer — Examination Regulations EN 5.6.2](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf), 5.02.2024 | s.1–6, V-FULL; scoring §2 s.4–6 | A/P/K; nie podstawa domenowego klucza |

Handbook, public sample i bank Cockpit nie są źródłami nowych zadań T21. Nie kopiowano ich pytań ani nie rekonstruowano poufnej puli. Glossary wystarcza do wyjaśnienia używanych znaczeń; brak dodatkowego odczytu Handbook nie jest luką źródłową dla tych claimów. Nie badano warunków konkretnej rezerwacji egzaminu.

### 2.2. Rejestr claimów i reguł

Reguły REG-T21-01–08 są adresowalnym rdzeniem wyjaśnień. Treść w następnych sekcjach stanowi własne rozwinięcie. Claim nie przenosi automatycznie praw ani nie zatwierdza autorskiego itemu.

| Claim / reguła | Sprawdzona przesłanka i granica | Źródłowy adres | Zastosowanie |
|---|---|---|---|
| CL-T21-00 | EO3.8.1 jest L1; nie przejmuje L3 z nagłówka EU3 | SEN s.4/19; SPL s.4/20 | Wszystkie zadania zamknięte, kryteria i wyłączenia |
| CL-T21-01 / REG-T21-01 | Adekwatność dotyczy rzeczywistych, uzgodnionych potrzeb, a nie tylko poprawności języka | SEN §3.8 s.29; SPL s.30; GEN adequacy s.8; GPL s.8 | N01, EX01, CE01, B01/F01/G01/D01 |
| CL-T21-02 / REG-T21-02 | Konieczność dotyczy niezbędności danego wymagania w specyfikacji rozpatrywanego systemu | SEN §3.8 s.29; SPL s.30; GEN necessity s.20; GPL konieczność s.17 | N02, EX02, CE02, B02/F02/G02/D02 |
| CL-T21-03 / REG-T21-03 | Jednoznaczność dotyczy niedopuszczania różnych odczytań wymagania przez różne osoby | SEN §3.8 s.29; SPL s.30; GEN unambiguity s.32; GPL s.15 | N03, EX03, CE03, B03/F03/G03/D03 |
| CL-T21-04 / REG-T21-04 | Kompletność jednego wymagania to samowystarczalność jego opisu; drugi sens kompletności dotyczy zbioru | SEN §3.8 s.30; SPL s.30–31; GEN completeness s.11, sensy 1/2; GPL s.16 | N04, CMP02, EX04/CE04, B04/F04/G04/D04 |
| CL-T21-05 / REG-T21-05 | Zrozumiałość ocenia się względem zamierzonych odbiorców | SEN §3.8 s.30; SPL s.30; GEN understandability s.32; GPL s.36 | N05, EX05/CE05, B05/F05/G05/D05 |
| CL-T21-06 / REG-T21-06 | Weryfikowalność oznacza możliwość sprawdzenia spełnienia w zrealizowanym systemie; pomiar nie jest jedyną drogą | SEN §3.8 s.30; SPL s.30; GEN verifiability s.34 i uwaga o testach, pomiarach, inspekcjach; GPL s.32 | N06, EX06/CE06, B06/F06/G06/D06 |
| CL-T21-07 / REG-T21-07 | Dla pojedynczego wymagania szczególną wagę mają adekwatność i zrozumiałość; pozostałe cechy ich nie zastępują | SEN §3.8 s.29; SPL s.30 | N07, CMP03, EX01/CE01, B07/F07/G07/D07 |
| CL-T21-08 / REG-T21-08 | Lista jest zalecana; w podejściu wartościowym stopień spełnienia odnosi się do wartości; większa wartość zwiększa znaczenie jakości dla ograniczenia ryzyka | SEN §3.8 s.29; SPL s.30 | N08, EX08/BOUND08, B08/F08/G08/D08 |
| CL-T21-09 / REG-T21-TYPE | Typ quality requirement i jakość dowolnego wymagania to dwie osie opisu | GEN quality requirement s.23, requirement s.24; GPL s.33–34; SEN/SPL §1.1 i §3.8 | CMP01 i O03; reuse sensów C-P/REG-P1, bez nowego KRY-P01 |
| CL-T21-10 / REG-T21-SCORE | A: jeden klucz; P: części przy n≤k i zero za n>k; K: części per wiersz | REG §2 s.4–6 | Wszystkie itemy i wektory QA |
| CL-T21-11 | Nie istnieje jeden powszechnie uzgodniony zestaw kryteriów RE; dobór zależy od kontekstu projektu | GEN quality criteria s.23, uwagi 1/2; GPL s.17 | Nota graniczna N08; nie przypisywać tej tezy samemu syllabus |

**Wniosek autorski dla complete:** odróżniamy brak istotnej treści wymagania od samego stosowania uzgodnionej terminologii i jawnych relacji do innych artefaktów. Źródła nie ustanawiają zakazu takich relacji. Nie orzekamy jednak automatycznie, że każde wymaganie odsyłające do osobnego dokumentu jest kompletne. Granica dopuszczalnego rozproszenia normatywnej treści pozostaje przedmiotem review; klucze zadań o complete dotyczą wyłącznie bezspornych znaczeń, bez punktów za ten sporny przypadek.

## 3. Wejście do nauki i wspólna terminologia

### 3.1. INTRO-T21 [N]

„W tym temacie poznasz kryteria opisujące jakość jednego wymagania. Będziesz rozpoznawać ich znaczenia, odróżniać podobne nazwy i pamiętać, jak stosować zalecaną listę. Możesz zacząć od próby albo od krótkiego objaśnienia. Wynik dotyczy tego tematu; nie potwierdza umiejętności napisania całej specyfikacji”.

Wejście przez pytanie nie pokazuje przed odpowiedzią nazw kryteriów, poprawnej pary ani streszczenia rozwiązania. Powyższa nota celu nie jest hintem do konkretnej opcji, ale jej ekspozycję należy odnotować. W Sprawdzeniu używa się neutralnego komunikatu z §9, bez treści edukacyjnej.

### 3.2. TERM-T21 — etykiety, znaczenia i aliasy

| Termin PL w nauce | EN przymiotnik / nazwa cechy | Status i lokalizacja | Formy wymagające ostrożności |
|---|---|---|---|
| adekwatne / adekwatność wymagania | adequate / adequacy of a requirement | Przymiotnik SPL §3.8 s.30; rzeczownik GPL s.8 / GEN s.8 | „Poprawne” bez kontekstu jest zbyt szerokie; nie zastępuje nazwy kryterium |
| niezbędne / konieczność wymagania | necessary / necessity of a requirement | Przymiotnik SPL s.30; rzeczownik GPL s.17 / GEN s.20 | „Niezbędność” dopuszczalny alias dydaktyczny; Glossary używa „konieczność” |
| jednoznaczne / jednoznaczność wymagań | unambiguous / unambiguity of requirements | SPL s.30; GPL s.15 / GEN s.32 | „Łatwe do przeczytania” nie wystarcza |
| kompletne / kompletność wymagań, sens pojedynczy | complete / completeness of requirements, sense 1 | SPL s.30; GPL s.16 / GEN s.11 | „Niezależne” w PL nie oznacza zakazu powiązań ani zupełności systemu |
| zrozumiałe / zrozumiałość | understandable / understandability | SPL s.30; GPL s.36 / GEN s.32 | Nie utożsamiać z usability systemu ani zrozumieniem autora |
| weryfikowalne / weryfikowalność wymagań | verifiable / verifiability of requirements | SPL s.30; GPL s.32 / GEN s.34 | „Mierzalne” może być węższe; „już zweryfikowane” opisuje wynik, nie możliwość |
| wymaganie | requirement | GPL s.33 / GEN s.24 | Własny opis w tym pliku: treść oczekiwania oraz jej zapis, zależnie od zdania |
| interesariusz | stakeholder | GPL s.14 / GEN s.28 | Nie tylko bezpośredni użytkownik systemu |
| wymaganie jakościowe | quality requirement | GPL s.34 / GEN s.23 | Typ wymagania o właściwości jakościowej systemu, nie pochwała jakości zapisu |
| wymaganie funkcjonalne | functional requirement | GPL s.34; SEN/SPL §1.1 | Wymaganie funkcjonalne także podlega kryteriom T21 |
| kryteria jakości w IW | quality criteria in RE | GPL s.17 / GEN s.23 | Nie utożsamiać z samymi kryteriami akceptacji konkretnego rozwiązania |

Pierwsze sześć wierszy terminów ma adresy TERM-T21-01–06, z końcówką -PL albo -EN dla odpowiedniej etykiety. CON-T21-01–06 identyfikują odpowiadające im sensy rozwinięte w N01–06.

Dla sześciu rzeczownikowych haseł, requirement, stakeholder, quality requirement i quality criteria potwierdzono oznaczenie pogrubieniem w części definicyjnej Glossary — w znaczeniu foundational podanym w legendzie EN s.8. Potwierdzenie dotyczy tych dziesięciu haseł, nie całego słownika. Nie tworzono nowego oficjalnego EO. Wymaganie funkcjonalne jest dodatkową podstawą comparison z istniejącego C-P; nie dodaje odrębnej oceny całego EO1.1.2. Potrzebne kontrole typografii i par PL/EN zestawia QA.

### 3.3. PRE-T21 — potrzebna podstawa bez bramki kursu

Do zrozumienia adekwatności potrzebne jest rozumienie, że wymaganie wyraża potrzebę lub oczekiwaną zdolność/właściwość, a interesariusz jest osobą lub organizacją wpływającą na wymagania albo dotkniętą działaniem systemu. Sygnał braku: uznanie poprawnej gramatyki za pełną zgodność z potrzebą albo uznanie wyłącznie użytkowników za interesariuszy. Minimalne wsparcie stanowią dwa poprzednie zdania, nie cała lekcja T01/T24.

R14 proponuje się wyłącznie jako requirement/stakeholder → czynność rozpoznania sensu adequacy, z argumentem, że bez rozumienia potrzeb i ich podmiotu nie można odczytać tego kryterium. Gdy podstawa jest znana, można ją pominąć. Bez odrębnego review R14 nie wymusza niczego. T10 i T22 są odsyłaczami do sąsiednich zakresów, nie obowiązkowymi etapami przed T21.

## 4. Rdzeń wiedzy — osiem adresowalnych not

### N-T21-01 — Adekwatne / adequate

**Rdzeń:** zapis ma odzwierciedlać to, czego interesariusze rzeczywiście potrzebują i co uzgodnili. Sama precyzja sformułowania nie poświadcza adekwatności. **Pytanie pomocnicze autora:** „Czy to rzeczywiście ta potrzeba, a nie tylko dobrze napisane inne oczekiwanie?”. REG01 / CL01.

Nie należy uznawać wymagania za nieadekwatne tylko dlatego, że w krótkim opisie nie podano protokołu uzgodnienia. W przykładzie trzeba dać dowód zgodności albo rozbieżności z potrzebą; bez niego wynik to „brak danych”, nie negatywna ocena. Adekwatność nie jest głosowaniem nad gramatyką ani samą wykonalnością techniczną.

**EX-T21-01 [N]:** opiekunowie skrytki uzgodnili, że potwierdzenie odbioru ma trafić do osoby odbierającej paczkę. Wymaganie „Po odebraniu paczki system wysyła potwierdzenie na zapisany adres e-mail tej osoby” odzwierciedla podaną, uzgodnioną potrzebę w tym zakresie. Nie oceniamy tu wszystkich innych kryteriów.

**CE-T21-01 [N]:** przy tej samej jawnej potrzebie zapis wymaga wysłania potwierdzenia wyłącznie do administracji, która nie przekazuje go odbierającemu. Obie strony potwierdzają, że taki przebieg nie realizuje uzgodnionej potrzeby. Można go bardzo dokładnie przetestować, ale to nie naprawia adekwatności. Obala uogólnienie „jednoznaczny i sprawdzalny zapis zawsze jest adekwatny”.

### N-T21-02 — Niezbędne / necessary

**Rdzeń:** pytamy o potrzebę obecności tego konkretnego wymagania w specyfikacji rozpatrywanego systemu. Kryterium odnosi się do konieczności treści, nie tylko jej elegancji lub popularności. REG02 / CL02.

To nie jest automatyczna reguła priorytetu „tylko najwyższy priorytet = necessary”. Niski priorytet realizacji nie dowodzi zbędności treści w specyfikacji. Brak wyjaśnienia celu w zadaniu też nie dowodzi zbędności. Odrębność konieczności i adekwatności pomaga zadawać różne pytania, ale nie oznacza, że te cechy są zawsze niezależne statystycznie lub logicznie.

**EX-T21-02 [N]:** uzgodniony zakres obejmuje rejestrację wydania sprzętu z identyfikatorem odbierającego; bez tego nie da się ustalić, komu sprzęt wydano. Wymaganie rejestrowania tego identyfikatora jest potrzebnym składnikiem tak opisanej specyfikacji.

**CE-T21-02 [N]:** interesariusze uzgodnili, że system nie będzie wysyłał żadnych powiadomień; w tym zakresie nie ma też przepisu ani zależności wymagającej takiej funkcji. Do specyfikacji omyłkowo dodano pozostałość z innego projektu: wysyłanie nocnego e-maila testowego. W opisie jawnie ustalono, że usunięcie tego żądania nie narusza żadnej potrzeby ani obowiązku tego systemu. Łatwość wykonania takiej funkcji nie czyni jej niezbędną. Obalane uogólnienie: „skoro jest łatwe i ma mały koszt, powinno zostać jako necessary”. To lokalna ilustracja, a nie metoda rozstrzygania realnej konieczności bez analizy zależności.

### N-T21-03 — Jednoznaczne / unambiguous

**Rdzeń:** różne osoby nie powinny otrzymywać różnych znaczeń z tego samego wymagania. Chodzi o możliwe interpretacje treści, nie liczbę zdań ani ich długość. REG03 / CL03.

Krótkie zdanie może być niejednoznaczne. Zdanie z liczbą może mieć niejasną jednostkę, zakres lub punkt odniesienia. To, że autor i jeden odbiorca zrozumieli je tak samo, nie dowodzi braku innych rozsądnych odczytań. Brak jednoznaczności może współwystępować z innymi wadami; nie należy w zadaniu wymuszać jedynej wady, gdy przesłanki wykazują kilka.

**EX-T21-03 [N]:** „Dla nowego zgłoszenia pole »Termin« przechowuje datę wymaganego zakończenia obsługi, a nie datę jego utworzenia”. To autorska ilustracja usunięcia dwóch jawnie wskazanych interpretacji jednego pola; nie twierdzi się, że sam fragment wystarcza jako kompletne wymaganie systemowe.

**CE-T21-03 [N]:** „Pokaż ostatnie zgłoszenie”. W opisie nie ustalono, czy „ostatnie” odnosi się do utworzenia, edycji czy zamknięcia; każde z tych znaczeń jest dopuszczalne dla odbiorców. Krótkość i codzienne słowa nie eliminują różnych odczytań. Obala „krótkie i proste zdanie musi być jednoznaczne”.

### N-T21-04 — Kompletne / complete, pojedyncze wymaganie

**Rdzeń:** opis ma zawierać treść potrzebną do samodzielnego uchwycenia tego wymagania. Nie trzeba z niego odtwarzać wszystkich wymagań systemu. EN określa to jako self-contained; PL §3.8 używa objaśnienia „niezależne”. REG04 / CL04.

Nie wyprowadzamy stąd zakazu glossary, traceability, zależności biznesowych ani powiązań między wymaganiami. Nie zakładamy też, że samo dodanie linku uzupełnia dowolny brak. Uzgodnione pojęcie i brakująca normatywna decyzja to różne sytuacje. Bezpieczny przypadek braku to np. nieokreślone „odpowiednio”, „tak samo jak poprzednio” bez dostępnego odniesienia albo brak niezbędnego warunku. Dokładna granica dopuszczalnych odwołań wymaga review interpretacji, a nie intuicyjnego klucza.

**EX-T21-04 [N]:** „Na żądanie zalogowanego magazyniera system zapisuje dla wskazanego wydania identyfikator odbierającego podany w formularzu wydania”. W przyjętym przykładzie wszystkie użyte role, pola i wskazania są jawne; pokazuje to samowystarczalność treści jednej reguły zapisu. Nie poświadcza kompletności całego systemu magazynowego.

**CE-T21-04 [N]:** „W drugim przypadku system robi to samo”. W materiale nie opisano przypadków, czynności ani żadnego dostępnego odniesienia. Czytelnik nie może ustalić wymaganej czynności z dostarczonej treści. Jedno zdanie i nadany identyfikator nie uzupełniają brakującej treści. Obala „każdy zapis w jednym zdaniu jest kompletnym wymaganiem”.

### N-T21-05 — Zrozumiałe / understandable

**Rdzeń:** treść ma być przyswajalna dla jej zamierzonych odbiorców. Zrozumienie autora nie wystarcza. Właściwe terminy specjalistyczne mogą pomagać kompetentnym odbiorcom; sama obecność skrótu nie dowodzi wady. REG05 / CL05.

Zrozumiałość i jednoznaczność mają różne osie. Dwa odczytania prostego zdania są problemem jednoznaczności. Ścisły zapis, którego docelowi odbiorcy nie umieją odczytać, może mieć problem zrozumiałości. Nie należy uznawać każdego wymagania za niezrozumiałe dla całej ludzkości tylko dlatego, że używa wiedzy dziedzinowej.

**EX-T21-05 [N]:** „Po zatwierdzeniu formularza system pokazuje numer zgłoszenia”. W scenariuszu przyszli odbiorcy dokumentu znają formularz i numer zgłoszenia oraz potrafią własnymi słowami odtworzyć tę czynność. Przesłanka o odbiorcach wspiera pozytywną ilustrację zrozumiałości; nie jest wynikiem rzeczywistego badania użytkowników.

**CE-T21-05 [N]:** jedynymi zamierzonymi odbiorcami są pracownicy obsługi, którzy nie znają użytej notacji formalnej; zapis nie ma wyjaśnienia, a w scenariuszu potwierdzono, że nie mogą go odczytać. To, że autor uznaje zapis za matematycznie ścisły, nie zapewnia zrozumiałości dla tych odbiorców. Obala „jeśli autor rozumie i zapis jest ścisły, kryterium jest spełnione”.

### N-T21-06 — Weryfikowalne / verifiable

**Rdzeń:** musi istnieć możliwość sprawdzenia, czy zrealizowany system spełnia wymaganie. To właściwość wymagania, a nie informacja, że sprawdzenie już się odbyło lub zakończyło sukcesem. REG06 / CL06.

Sprawdzenie może użyć testu, pomiaru albo inspekcji. Sama liczba nie gwarantuje rozstrzygalności bez znanej jednostki i warunków; brak liczby nie wyklucza sprawdzenia zachowania. Nie wolno dopisać w rationale nieobecnego progu lub procedury, aby uratować klucz. Dobór pełnego procesu walidacji należy do T28/T29; tu kontrolujemy sens słowa.

**EX-T21-06 [N]:** „Po wybraniu polecenia »Wyloguj« system zamyka bieżącą sesję, a ponowne otwarcie chronionej strony wymaga zalogowania”. Dla opisanej czynności można wykonać scenariusz sprawdzający dostęp po wylogowaniu. Brak wartości liczbowej nie uniemożliwia obserwacji spełnienia.

**CE-T21-06 [N]:** „Raport ma wyglądać wspaniale”. Nie podano wzorca, kryterium akceptacji ani uzgodnionego sposobu rozstrzygnięcia; w scenariuszu odbiorcy oceniają te same raporty sprzecznie. Nie można rozstrzygnąć spełnienia na podanych danych. Obala „sama możliwość zapytania kogokolwiek o opinię gwarantuje verifiability”. Nie oznacza to zakazu uzgodnionej oceny eksperckiej o jawnych kryteriach.

### N-T21-07 — Szczególna waga adekwatności i zrozumiałości

**Rdzeń:** przy rozpoznawaniu szczególnie ważnej pary wybierz adekwatność i zrozumiałość. Precyzyjne i sprawdzalne żądanie może kierować zespół ku niewłaściwej potrzebie; treść niezrozumiała dla zamierzonych odbiorców nie zapewnia porozumienia. REG07 / CL07. Nie zamieniaj tej wskazanej w źródle pary na własny ranking sześciu pozycji.

**Przypomnienie EX-T21-01 [N], bez nowego przypadku:** w EX01 treść dotyczy właściwego odbiorcy potwierdzenia i jest zrozumiała dla wskazanych osób. Te dwie cechy uzasadniają podany w źródle priorytet; reszta listy nadal ma znaczenie.

**Konsekwencja CE-T21-01 [N], bez nowego kontrprzykładu:** zespół perfekcyjnie sprawdził działanie wysyłania potwierdzenia do administracji z CE01, ale potrzeba nadal dotyczy osoby odbierającej. Weryfikacja wykonania niewłaściwego oczekiwania nie zastępuje adekwatności. Obala „spełnienie pozostałych kryteriów kompensuje brak jednego z dwóch najważniejszych”.

### N-T21-08 — Zalecana lista i wartość

**Rdzeń:** poznaj zalecane sześć kryteriów, ale nie traktuj ich jako bezwarunkowego nakazu identycznego stopnia spełnienia we wszystkich sytuacjach. W podejściu zorientowanym na wartość stopień spełnienia odnosi się do wartości wymagania; wraz z wartością rośnie znaczenie jakości dla ograniczenia ryzyka niepowodzenia. REG08 / CL08.

To nie jest zgoda na dowolną wadę ani recepta „niska wartość = można nie uzgadniać potrzeb”. Nie ma tu oficjalnego procentu jakości, punktowej sumy sześciu cech ani zasady „pięć z sześciu wystarcza”. Dobór praktycznej staranności wymaga kontekstu; T21 nie wyznacza progu akceptacji zawodowej. Glossary quality criteria (CL11) dodatkowo wyjaśnia kontekstowy charakter zestawów kryteriów. Nie przypisujemy syllabus deklaracji, że jego lista stanowi pełny katalog wszystkich możliwych cech.

**EX-T21-08 [N]:** organizacja dla wymagania mającego dużą wartość biznesową planuje silniejsze potwierdzenie potrzeb, staranniejszy przegląd treści i pewniejszy sposób kontroli spełnienia. To ilustracja kierunku zależności opisanego w §3.8; nie wylicza właściwego budżetu ani nie ustanawia normy liczby review.

**BOUND-T21-08 [N] — obalenie źródłowe nadmiernej reguły:** „Każde wymaganie, bez względu na wartość i kontekst, musi uzyskać identyczny stopień wszystkich sześciu cech; inaczej sylabus zabrania jego użycia”. To autorskie nadmierne uogólnienie sprzeczne z warunkiem opisanym w §3.8. Kontrprzykładem jest sam dopuszczony w źródle kontekst różnego stopnia spełnienia; nie wymyśla się konkretnego przypadku, w którym dowolna wada byłaby z tego powodu bezpieczna.

## 5. Trzy porównania i dwa przepracowane przypadki

### CMP-T21-01 — Jakość wymagania a quality requirement [N]

**Wspólna oś:** czego dotyczy ocena — treści oczekiwania wobec systemu czy sposobu, w jaki to oczekiwanie uchwycono i opisano? CL09, REG-T21-TYPE; reuse C-P/REG-P1, bez zmiany KRY-P01.

| Przypadek | Typ oczekiwania | Pytanie o jakość zapisu |
|---|---|---|
| „Po wyborze »Usuń szkic« system usuwa wskazany szkic” | Funkcjonalne: opisuje zachowanie | Nadal pytamy o adekwatność, konieczność, jednoznaczność, kompletność, zrozumiałość i weryfikowalność |
| „Dla uzgodnionego obciążenia czas utworzenia podglądu nie przekracza 2 s” | Jakościowe: dotyczy cechy czasowej działania | Liczba sama nie zapewnia adekwatności; potrzeba i odbiorcy wymagają osobnej kontroli |

Własny przykład obu stron pokazuje, że „jakościowe” nie oznacza automatycznie „dobrej jakości”, a „funkcjonalne” nie oznacza „poza kryteriami jakości”. Zadania T21 nie przejmują z tego powodu pomiaru całego EO1.1.2. Jeżeli agent chce uczyć klasyfikacji rodzajów, powinien użyć właściwego zakresu T02/C-P. Ten comparison wspiera rozpoznawanie sensu określenia „jakość wymagania”.

### CMP-T21-02 — Kompletność pojedyncza a kompletność zbioru [N]

**Wspólna oś:** jednostka, o której wypowiadamy sąd. REG04, CL04; SEN §3.8 s.30, SPL s.30–31, Glossary completeness sensy 1/2.

| Jednostka i przypadek | Co trzeba sprawdzić | Czego wynik nie dowodzi |
|---|---|---|
| Jedna reguła zapisu identyfikatora odbierającego, z jawną rolą, wejściem i wynikiem | Czy opis tej reguły jest samowystarczalny | Że opisano całą obsługę wydań |
| Zestaw wymagań dla obsługi wydań; jawnie wiadomo, że pominięto istotne, uzgodnione wymaganie zwrotu sprzętu | Czy zbiór uwzględnia wszystkie znane istotne wymagania w swoim zakresie | Że każdy obecny zapis jest niekompletny jako pojedyncze wymaganie |

W jednym artefakcie mogą istnieć poprawne pojedyncze wymagania i luka w zbiorze. To comparison wspierające T21, nie kontrola wszystkich kryteriów T22. Nie dodaje się tu punktów za spójność, modyfikowalność czy zgodność ze standardem.

### CMP-T21-03 — Adekwatność a sama możliwość weryfikacji [N]

**Wspólna oś:** zgodność z potrzebą versus możliwość potwierdzenia wykonania zapisanego oczekiwania. REG01/REG06/REG07, CL01/06/07.

| Przypadek | Adekwatność | Możliwość weryfikacji |
|---|---|---|
| Uzgodniono potwierdzenie dla odbierającego; zapis i test odnoszą się do tego odbiorcy | W podanym zakresie zgodne z potrzebą | Można sprawdzić wysłanie do wskazanej osoby |
| Uzgodniono potwierdzenie dla odbierającego; zapis nakazuje wysłać je wyłącznie do administracji; wykazano, że nie spełnia to potrzeby | W podanym zakresie niezgodne z potrzebą | Nadal można sprawdzić działanie opisane w błędnym wymaganiu |

W drugim wierszu test może wykazać poprawną realizację niewłaściwego wymagania. Nie mówi to, że weryfikacja jest zbędna: stwierdza tylko, że nie zastępuje adekwatności. Nie utożsamiać weryfikowalności z już wykonanym testem.

### WS-T21-01 — Jedna potrzeba, kilka odrębnych pytań [N]

**Jawne dane:** interesariusze skrytki uzgodnili, że osoba odbierająca paczkę powinna dostać e-mail z potwierdzeniem. Mają rozpoznany adres odbierającego. Odrzucili wysyłkę wyłącznie do administracji. Dokument ma być czytany przez koordynatorów znających te pojęcia. Rozpatrz zapis: „Po odebraniu paczki system wysyła potwierdzenie wyłącznie do administracji”.

1. Przedmiot zapisu to zachowanie, więc nie należy mylić go z typem quality requirement. To tło, a nie punkt pomiarowy T21.
2. Jawne porównanie z uzgodnioną potrzebą wykazuje rozbieżność adresata: podstawa negatywnej oceny adekwatności jest dostępna przed wnioskiem.
3. Można sprawdzić, czy system wysyła wiadomość do administracji. Nie potrzeba wyniku takiego sprawdzenia, aby mówić o samej możliwości weryfikacji.
4. Z pkt 3 nie wynika, że wymaganie staje się adekwatne. REG07 wskazuje, dlaczego sama testowalność nie kompensuje tej wady.
5. Nie orzekamy o konieczności, kompletności wszystkich wymagań ani pełnym spełnieniu każdej cechy tylko na podstawie tego fragmentu.

Oglądanie tego toku to instrukcja; nie jest samodzielnym wykonaniem L2 ani L3.

### WS-T21-02 — Różny poziom sądu o kompletności [N]

**Jawne dane:** specyfikacja obsługi wydania zawiera jedną samowystarczalną regułę zapisu identyfikatora odbierającego z EX04. Wiadomo też, że zakres obejmuje zwrot sprzętu, lecz uzgodnionego wymagania zwrotu w specyfikacji nie ma.

1. Jednostką pierwszego sądu jest jedna reguła zapisu, a drugiego — cały zbiór obsługi wydania i zwrotu.
2. Obecność jasnej reguły zapisu nie wypełnia nieobecnego wymagania zwrotu. Nie potwierdza kompletności zbioru.
3. Pominięcie zwrotu nie czyni automatycznie opisu zapisu identyfikatora niekompletnym we własnym zakresie.
4. Powrót do T21 zatrzymuje się na znaczeniu complete dla jednego wymagania. Ocena pełnego T22 pozostaje osobnym flow.

## 6. Cztery otwarte aktywności z oceną

[Q] jest poleceniem do przyszłego eksportu uczniowskiego. [R] jest ujawnieniem odpowiedzi i musi być oddzielone od polecenia. Bez odrębnego review aktywności nie są dopuszczone do punktowanego lub zaliczanego użycia. Poniższe jednostki nie przyznają punktów CPRE.

### T21-O01/r1 — Retrieval sześciu znaczeń

**Rola:** retrieval/revision L1; primary KRY-T21-01, ZAK01–06. Rodzina FAM-T21-LEX-ALL/r1, bliska sześciu rodzinom znaczeniowym; nie jest niezależną rezerwą. Źródło: CL01–06. Reprezentacja w całości tekstowa.

**[Q]** „Bez otwierania notatek wymień sześć zalecanych kryteriów jakości pojedynczego wymagania. Przy każdym podaj polską lub angielską nazwę i krótkie znaczenie. Nie musisz pamiętać kolejności listy ani dosłownej definicji”.

**[R] Rubryka RUB-T21-O01:** dla każdego ZAK oddzielnie ocenić (a) rozpoznawalną nazwę i (b) zgodne znaczenie: łącznie 12 elementów opisowych. Wzorzec: adekwatność — zgodność z rzeczywistą, uzgodnioną potrzebą; konieczność — potrzebna część specyfikacji; jednoznaczność — brak różnych interpretacji; kompletność pojedyncza — samowystarczalny opis; zrozumiałość — pojmowalność dla zamierzonych odbiorców; weryfikowalność — możliwość sprawdzenia spełnienia w systemie. Dopuszczalne przymiotniki PL/EN i „niezbędność” zamiast „konieczność”, o ile znaczenie jest właściwe. Nie karać za brak EN ani kolejność.

Pełna odpowiedź ma sześć rozpoznawalnych nazw i sześć zgodnych znaczeń. Odpowiedź z jedną poprawną nazwą bez znaczenia daje tylko obserwację tej nazwy. „Kompletność = wszystkie znane wymagania w całym zbiorze” nie spełnia elementu znaczenia ZAK04. Nie kasuje to poprawnych elementów pozostałych. „Weryfikowalne = już przetestowane” jest błędem znaczenia ZAK06. Dodatkowe kryterium poza zalecaną szóstką nie zastępuje żadnego brakującego elementu; nie deklarować z tego powodu, że taka cecha nie może być użyteczna w RE.

**Metoda:** ocenia wskazany recenzent/edukator według rubryki albo uczeń wykonuje jawnie oznaczoną samoocenę po ujawnieniu wzorca. Bez rzeczywistego oceniającego i zapisu odpowiedzi brak potwierdzonego wyniku. Wsparcie: N01–06; po błędzie celowana ścieżka właściwego ZAK w §7/8. Kontakt z samym poleceniem nie ujawnia klucza; wzorzec ujawnia ZAK01–06.

### T21-O02/r1 — Retrieval priorytetu i wartości

**Rola:** retrieval L1; primary KRY-T21-02, secondary KRY-T21-03 w części wartości; ZAK07/08. Rodzina FAM-T21-PRIORITY-VALUE/r1, bliska FAM-T21-07/08. Źródła CL07/08.

**[Q]** „Które dwie cechy mają szczególne znaczenie dla jakości pojedynczego wymagania? Co źródło mówi o stopniu spełnienia kryteriów w podejściu zorientowanym na wartość? Czy wynika z tego stały procent albo prawo do dowolnego pominięcia jakości?”.

**[R] RUB-T21-O02 — cztery elementy:** (1) adekwatność; (2) zrozumiałość; (3) stopień spełnienia odniesiony do wartości, z pamięcią, że nie zawsze trzeba całkowicie spełnić wszystkie kryteria; (4) brak wymyślonego progu i brak dowolnego zwolnienia z dbałości o jakość. Pełna odpowiedź zawiera wszystkie; pkt 3 może być wyrażony własnymi słowami. „Im więcej płacę za aplikację, tym więcej punktów dostaję” nie jest opisem wartości wymagania. Podanie pary konieczność/weryfikowalność nie spełnia elementów 1/2. Sama poprawna para nie zalicza elementów 3/4. Błąd krytyczny dla elementu 4: „zawsze wystarcza pięć cech z sześciu”.

**Metoda:** oceniający lub jawna samoocena; oddzielna ocena czterech elementów, bez procentu mastery. Po błędzie N07/N08 i odpowiednie F07/F08. Wzorzec ujawnia ZAK07/08; nie jest chronioną próbą.

### T21-O03/r1 — Dwie osie i dwie jednostki oceny

**Rola:** primary AUX-T21-03/r1 — rozdzielenie obu osi i jednostek oceny; dobrowolne ćwiczenie objaśniające, lokalne L2; bez MEASURES oficjalnego EO3.8.1 ani EO1.1.2/EO3.8.2. Wspiera rozróżnienia z CMP01/02. Rodzina FAM-T21-COMPARISONS/r1. Źródła CL04/09.

**[Q]** „Anna mówi: »To wymaganie jest funkcjonalne, więc kryteria jakości wymagania go nie dotyczą«. Bartek mówi: »Każde obecne wymaganie ma samowystarczalny opis, więc zbiór na pewno nie pomija żadnego znanego istotnego wymagania«. Oceń oddzielnie oba wnioski i podaj powód. Nie oceniaj kompletności żadnej rzeczywistej specyfikacji”.

**[R] RUB-T21-O03 — cztery elementy:** (1) odrzucenie wniosku Anny; (2) rozdzielenie typu oczekiwania od jakości jego zapisu; (3) odrzucenie wniosku Bartka; (4) rozdzielenie samowystarczalności pojedynczej treści od zawartości całego zbioru. Dopuszczalne własne proste przykłady, jeżeli rzeczywiście pokazują różnicę. Same „nie/nie” obserwują dwie decyzje, lecz nie potwierdzają żadnego uzasadnienia. „Functional jest zawsze słabej jakości” albo „wszystkie linki niszczą kompletność” jest nieadekwatnym powodem. Błąd jednego uzasadnienia nie przekreśla drugiego. Metoda: oceniający lub jawna samoocena; nie wyprowadzać z poprawnej decyzji automatycznej oceny powodu.

### T21-O04/r1 — Kontrola rozumowania na jawnych danych

**Rola:** primary AUX-T21-04/r1 — odróżnienie zgodności z potrzebą i możliwości sprawdzenia; dobrowolne objaśniające ćwiczenie L2, bez dodatkowego oficjalnego EO i bez punktów CPRE. Rodzina FAM-T21-NEED-VS-CHECK/r1, bliska WS01/CMP03. Źródła CL01/06/07.

**[Q]** „Uzgodniona potrzeba: osoba odbierająca paczkę ma dostać potwierdzenie. Wymaganie: system wysyła potwierdzenie wyłącznie do administracji; administracja nie przekazuje go dalej. Interesariusze potwierdzili, że nie realizuje to uzgodnionej potrzeby. Można wykonać test sprawdzający wysyłkę do administracji. Czy sama możliwość takiego testu naprawia adekwatność? Co można stwierdzić o adekwatności, a co o weryfikowalności? Podaj powody”.

**[R] RUB-T21-O04 — cztery elementy:** (1) nie, testowalność nie kompensuje nieadekwatności; (2) w podanym zakresie brak zgodności z uzgodnionym adresatem; (3) istnieje możliwość sprawdzenia zapisanego zachowania; (4) możliwość weryfikacji nie dowodzi, że test już wykonano ani że rzeczywisty system spełnia wymaganie. Nie wymagać napisania testu lub nowego wymagania. „Brak danych o potrzebie” jest tu nieprawidłowy — dane podano. „Skoro da się przetestować, wymaganie jest właściwe” to błąd głównego rozróżnienia. Metoda: oceniający według rubryki lub jawna samoocena. Nie wyprowadzać samodzielnego transferu z odpowiedzi po WS01.

## 7. Bank zadań zamkniętych — 32 pełne itemy
### 7.1. Wspólny kontrakt każdego itemu [M]

Każda pozycja ma stabilne ID i r1, język PL z terminami EN, autorskie pochodzenie AI, źródła CL/REG z §2 i ograniczenia praw z §10. Każda ma stan: **opracowana, źródła autorsko sprawdzone, oczekuje odrębnego review, niedopuszczona do użycia uczniowskiego, bez empirii**. Dziedziczenie tych metadanych jest jawne; nie zastępuje brakującego pola treści zadania.

Primary dla zakresów 01–06: KRY-T21-01 z dokładnie wskazanym ZAK; dla 07: KRY-T21-02; dla 08: KRY-T21-03. W zakresie 08 występuje też secondary KRY-T21-02, wyłącznie w członie „pamięta warunek podejścia wartościowego”; ten sam wybór nie staje się dwiema niezależnymi obserwacjami. **Wszystkie zadania zamknięte mają L1:** rozpoznanie wcześniej objaśnionych nazw, znaczeń i reguł, bez nowej analizy przypadku. Żaden punkt nie wymaga napisania lub poprawienia wymagania.

B = zadanie bazowe; F = pierwszy follow-up; G = drugi follow-up po celowanej alternatywnej pomocy; D = pełny kandydat delayed. Każda czwórka ma proponowaną rodzinę FAM-T21-01…08/r1, z analizą bliskości w §8. Nie są to 32 niezależne rodziny. Nie trzeba rozwiązywać całego banku w jednej sesji ani wykonywać G po poprawnym F. Delayed nie służy jako trzeci natychmiastowy follow-up.

SCORE-T21/r1, podstawa CL10 / Regulations 5.6.2 §2 s.4–6:

- A ma cztery opcje i jeden klucz: pojedynczy poprawny wybór daje w, błędny/pusty/nadmiarowy daje 0.
- P ma pięć opcji i jawne k=2: dla n≤2 wynik = w×c/2, dla n>2 wynik =0. Niewybrany dystraktor nie przynosi punktu. Polecenie „wybierz dokładnie dwa” nie blokuje oddania mniejszej liczby ani nie odbiera trafnej części.
- K ma trzy wiersze, m=3, parę Prawda/Fałsz i w=2: wynik = 2×c/3. Błąd, blank lub obie wartości zerują wyłącznie dany wiersz. T/F w kluczu oznaczają Prawda/Fałsz, nigdy brak odpowiedzi.

Wagi są lokalnym wyborem konstrukcji banku, nie odtworzeniem trudności lub wag poufnej puli. Pełne obliczenia dla każdej pozycji zawiera QA. W interfejsie zwykły A i K nie zapisują dwóch wartości naraz; jeżeli wadliwy zapis dotrze z importu, nie przyznawać mu punktów. To rozróżnienie obsługi i oceny, a nie diagnoza wiedzy.

[M] i [R] nie należą do treści aktywnego Sprawdzenia. Po [Q] widać tylko instrukcję, maksymalną wagę, stem i opcje/wiersze; klucz, rationale, źródła, kryteria, rodzina i cele pozostają ukryte do finalizacji całej próby. W Nauce feedback pojawia się po zatwierdzeniu itemu. Dostępna jest flaga powrotu; jej użycie jest dobrowolne. Neutralny słownik językowy bez RE, jeśli dopuszczony profilem, to odnotowany warunek odrębny od pomocy dziedzinowej.

Każda opcja/wiersz ma adres `<item>/<litera-lub-numer>@r1`, a uzasadnienie `RAT-<item>-<litera-lub-numer>@r1`. Kolumna REG wskazuje dokładne reguły i przez tabelę §2 pełne źródła. Pozostałe znaczenia w dystraktorach nie otrzymują automatycznie MEASURES; stanowią treść kontrastu i mogą być istotnym kontaktem, gdy ujawniono ich wyjaśnienie.

### 7.2. Ścieżka ZAK-T21-01

#### T21-B01/r1

**[M]** A, w=1; base; primary KRY-T21-01; ZAK-T21-01; L1; FAM-T21-01/r1.

**[Q]** Które kryterium jakości pojedynczego wymagania odnosi się do zgodności z rzeczywistymi, uzgodnionymi potrzebami interesariuszy?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Konieczność. |
| b | Adekwatność. |
| c | Jednoznaczność. |
| d | Weryfikowalność. |

**[R] Klucz:** b. **Punktacja:** Jedynie pojedynczy wybór b daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B01-a | Konieczność odnosi się do niezbędności danego wymagania w specyfikacji. Polecenie pyta o zgodność treści z potrzebami, dlatego ta nazwa nie jest właściwym wyborem. | REG-T21-01 / CL-T21-01; REG-T21-02 / CL-T21-02 |
| RAT-T21-B01-b | W poleceniu wskazano rzeczywiste i uzgodnione potrzeby. To rozstrzygający przedmiot adekwatności, dlatego należy wybrać tę odpowiedź. | REG-T21-01 / CL-T21-01 |
| RAT-T21-B01-c | Jednoznaczność dotyczy różnych interpretacji zapisu. Brak takich różnic nie jest sam w sobie zgodnością z rzeczywistymi potrzebami, o którą pyta polecenie. | REG-T21-01 / CL-T21-01; REG-T21-03 / CL-T21-03 |
| RAT-T21-B01-d | Weryfikowalność odnosi się do możliwości sprawdzenia spełnienia. Można sprawdzić realizację niewłaściwej potrzeby, więc nazwa nie odpowiada wskazanemu znaczeniu. | REG-T21-01 / CL-T21-01; REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Rozpoznanie nazwy ze znaczenia; bez analizy przypadku.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-01, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-01 i N-T21-01; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F01/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-01; ZAK-T21-01; L1; FAM-T21-01/r1.

**[Q]** Oceń każdą tezę dotyczącą adekwatności pojedynczego wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Adekwatność odnosi się do potrzeb rzeczywistych i uzgodnionych. | Prawda / Fałsz |
| 2 | Poprawność gramatyczna sama wystarcza do uznania wymagania za adekwatne. | Prawda / Fałsz |
| 3 | Adekwatność nie oznacza wyłącznie technicznej możliwości realizacji wymagania. | Prawda / Fałsz |

**[R] Klucz:** 1: Prawda, 2: Fałsz, 3: Prawda. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F01-1 | Teza wymienia oba warunki sensu adekwatności; odpowiada regule, dlatego Prawda. | REG-T21-01 / CL-T21-01 |
| RAT-T21-F01-2 | Teza zastępuje zgodność z potrzebami własnością języka. Reguła nie daje takiej równoważności, dlatego Fałsz. | REG-T21-01 / CL-T21-01 |
| RAT-T21-F01-3 | Definicja dotyczy rzeczywistych, uzgodnionych potrzeb; sama wykonalność opisuje inny przedmiot. Teza poprawnie rozdziela te znaczenia, dlatego Prawda. | REG-T21-01 / CL-T21-01 |

**Zmiana czynności/rola:** Z nazwy przechodzi do rozpoznania warunku, niewystarczającej przesłanki i granicy wobec wykonalności.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-01, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-01 i N-T21-01; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G01/r1

**[M]** P, w=1, k=2; follow_up_2; primary KRY-T21-01; ZAK-T21-01; L1; FAM-T21-01/r1.

**[Q]** Które DWA stwierdzenia prawidłowo opisują adekwatność pojedynczego wymagania?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Ocena dotyczy tego, czy zapis trafnie odzwierciedla rzeczywiste, uzgodnione potrzeby. |
| b | Ściśle opisane wymaganie może nadal nie odpowiadać rzeczywistej, uzgodnionej potrzebie. |
| c | Uzgodnienie treści z dowolną osobą automatycznie dowodzi jej zgodności z rzeczywistymi potrzebami interesariuszy. |
| d | Każde wymaganie z liczbą jest adekwatne. |
| e | Adekwatność jest nazwą braku różnych interpretacji zdania. |

**[R] Klucz:** a,b. **Punktacja:** n≤2: 1×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 1/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G01-a | Teza zachowuje przedmiot i warunki adekwatności, dlatego należy do klucza. | REG-T21-01 / CL-T21-01 |
| RAT-T21-G01-b | Ścisłość nie zapewnia zgodności z potrzebą. Teza poprawnie rozdziela te cechy, dlatego należy do klucza. | REG-T21-01 / CL-T21-01; REG-T21-03 / CL-T21-03 |
| RAT-T21-G01-c | Teza usuwa warunki rzeczywistej potrzeby i właściwych interesariuszy. Sama dowolna zgoda ich nie potwierdza, dlatego nie należy do klucza. | REG-T21-01 / CL-T21-01 |
| RAT-T21-G01-d | Liczba nie jest dowodem zgodności z potrzebą. Teza nie opisuje tego kryterium i nie należy do klucza. | REG-T21-01 / CL-T21-01 |
| RAT-T21-G01-e | Brak różnych interpretacji to jednoznaczność. Opcja podmienia sens adekwatności, dlatego nie należy do klucza. | REG-T21-01 / CL-T21-01; REG-T21-03 / CL-T21-03 |

**Zmiana czynności/rola:** Wymaga wyboru dwóch poprawnych tez i odrzucenia zgody pozornej; nie jest tylko zmianą liter klucza.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-01, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-01 i N-T21-01; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D01/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-01; ZAK-T21-01; L1; FAM-T21-01/r1.

**[Q]** Która notatka poprawnie objaśnia adequacy of a requirement?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Sprawdza wyłącznie, czy opis używa uzgodnionego szablonu. |
| b | Sprawdza, czy da się potwierdzić wykonanie zapisu w systemie. |
| c | Sprawdza, w jakim stopniu wymaganie wyraża to, czego interesariusze rzeczywiście potrzebują i co uzgodnili. |
| d | Sprawdza wyłącznie, czy wymaganie ma być zrealizowane w pierwszej iteracji. |

**[R] Klucz:** c. **Punktacja:** Jedynie pojedynczy wybór c daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D01-a | Szablon może porządkować zapis, lecz nie jest kryterium zgodności z rzeczywistą potrzebą. Słowo wyłącznie dodatkowo wyklucza istotny sens. | REG-T21-01 / CL-T21-01 |
| RAT-T21-D01-b | To sens weryfikowalności. Polecenie dotyczy adekwatności, więc ta notatka nie odpowiada nazwie. | REG-T21-01 / CL-T21-01; REG-T21-06 / CL-T21-06 |
| RAT-T21-D01-c | Notatka obejmuje istotne warunki adekwatności i nie redukuje jej do języka lub sprawdzania systemu. To właściwy wybór. | REG-T21-01 / CL-T21-01 |
| RAT-T21-D01-d | Termin realizacji nie definiuje adekwatności. Priorytet dostarczenia nie rozstrzyga zgodności treści z potrzebą. | REG-T21-01 / CL-T21-01 |

**Zmiana czynności/rola:** Kierunek EN→wyjaśnienie zamiast opis→nazwa; konkurencyjne cele kontroli, nadal bliska rodzina definicyjna.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-01, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-01 i N-T21-01; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.3. Ścieżka ZAK-T21-02

#### T21-B02/r1

**[M]** A, w=1; base; primary KRY-T21-01; ZAK-T21-02; L1; FAM-T21-02/r1.

**[Q]** Które kryterium określa, czy pojedyncze wymaganie jest niezbędną częścią specyfikacji rozpatrywanego systemu?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Zrozumiałość. |
| b | Weryfikowalność. |
| c | Kompletność. |
| d | Konieczność. |

**[R] Klucz:** d. **Punktacja:** Jedynie pojedynczy wybór d daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B02-a | Zrozumiałość dotyczy odbiorców treści. Polecenie dotyczy potrzebnej obecności wymagania w specyfikacji, więc nie jest to właściwy wybór. | REG-T21-02 / CL-T21-02; REG-T21-05 / CL-T21-05 |
| RAT-T21-B02-b | Możliwość sprawdzenia spełnienia jest inną cechą niż niezbędność wymagania. Ta nazwa nie odpowiada opisanemu znaczeniu. | REG-T21-02 / CL-T21-02; REG-T21-06 / CL-T21-06 |
| RAT-T21-B02-c | Kompletność pojedyncza dotyczy samowystarczalności opisu. Nie zastępuje pytania, czy jego treść jest potrzebną częścią specyfikacji. | REG-T21-02 / CL-T21-02; REG-T21-04 / CL-T21-04 |
| RAT-T21-B02-d | Polecenie opisuje niezbędność obecności konkretnego wymagania w specyfikacji; to sens necessity, po polsku konieczności. | REG-T21-02 / CL-T21-02 |

**Zmiana czynności/rola:** Rozpoznaje potrzebną część specyfikacji, nie cechę samej formy.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-02, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-02 i N-T21-02; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F02/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-01; ZAK-T21-02; L1; FAM-T21-02/r1.

**[Q]** Oceń tezy dotyczące kryterium necessary / konieczności wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Wymaganie z późniejszym terminem realizacji jest z definicji zbędne w specyfikacji. | Prawda / Fałsz |
| 2 | Kryterium dotyczy tego, czy dane wymaganie jest potrzebnym składnikiem specyfikacji systemu. | Prawda / Fałsz |
| 3 | Łatwość implementacji sama wystarcza do spełnienia kryterium necessary. | Prawda / Fałsz |

**[R] Klucz:** 1: Fałsz, 2: Prawda, 3: Fałsz. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F02-1 | Teza utożsamia termin realizacji z koniecznością obecności treści. Definicja takiej równoważności nie ustanawia, dlatego Fałsz. | REG-T21-02 / CL-T21-02 |
| RAT-T21-F02-2 | Teza zachowuje przedmiot necessity, dlatego Prawda. | REG-T21-02 / CL-T21-02 |
| RAT-T21-F02-3 | Koszt lub łatwość nie dowodzi niezbędności treści. Teza dodaje nieuprawniony warunek wystarczający, dlatego Fałsz. | REG-T21-02 / CL-T21-02 |

**Zmiana czynności/rola:** Odróżnia konieczność od terminu i łatwości realizacji; kontroluje sens, nie powtórzenie etykiety.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-02, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-02 i N-T21-02; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G02/r1

**[M]** P, w=2, k=2; follow_up_2; primary KRY-T21-01; ZAK-T21-02; L1; FAM-T21-02/r1.

**[Q]** Które DWA stwierdzenia poprawnie opisują kryterium konieczności wymagania?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 2 punkty.

| Opcja | Treść |
| ---|--- |
| a | Necessary oznacza, że wymaganie nie zawiera żadnych terminów specjalistycznych. |
| b | Każde wymaganie już wpisane do dokumentu jest przez ten fakt necessary. |
| c | Weryfikowalność i konieczność są dwiema nazwami dokładnie tego samego kryterium. |
| d | Niski priorytet realizacji nie dowodzi sam w sobie zbędności wymagania w specyfikacji. |
| e | Przy tym kryterium rozpatruje się potrzebę obecności danego wymagania w specyfikacji systemu. |

**[R] Klucz:** d,e. **Punktacja:** n≤2: 2×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 2/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G02-a | To rzekoma reguła językowa; brak terminów specjalistycznych nie definiuje potrzebnej obecności wymagania. | REG-T21-02 / CL-T21-02 |
| RAT-T21-G02-b | Fakt zapisania nie stanowi dowodu niezbędności treści. Teza czyniłaby kontrolę pozorną, dlatego nie należy do klucza. | REG-T21-02 / CL-T21-02 |
| RAT-T21-G02-c | Możliwość sprawdzenia i niezbędność składnika specyfikacji mają różne znaczenia. Teza jest niepoprawna. | REG-T21-02 / CL-T21-02; REG-T21-06 / CL-T21-06 |
| RAT-T21-G02-d | Definicja dotyczy niezbędności treści, a nie samego terminu. Teza zachowuje tę granicę i należy do klucza. | REG-T21-02 / CL-T21-02 |
| RAT-T21-G02-e | To opis istotnego przedmiotu necessity, dlatego należy do klucza. | REG-T21-02 / CL-T21-02 |

**Zmiana czynności/rola:** Odrzuca pozorny dowód z samego zapisania oraz utożsamienie z inną cechą; zmienia cel selekcji.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-02, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-02 i N-T21-02; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D02/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-01; ZAK-T21-02; L1; FAM-T21-02/r1.

**[Q]** Która notatka poprawnie objaśnia necessity of a requirement?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Dotyczy tego, czy to konkretne wymaganie stanowi niezbędny składnik specyfikacji systemu. |
| b | Dotyczy wyłącznie zrozumienia zapisu przez jego autora. |
| c | Dotyczy wyłącznie możliwości pomiaru czasu działania funkcji. |
| d | Dotyczy tego, czy cały zbiór zawiera wszystkie znane istotne wymagania. |

**[R] Klucz:** a. **Punktacja:** Jedynie pojedynczy wybór a daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D02-a | Notatka zachowuje jednostkę i znaczenie konieczności. To właściwy wybór. | REG-T21-02 / CL-T21-02 |
| RAT-T21-D02-b | To nie opis konieczności; dodatkowo zrozumiałość dotyczy zamierzonych odbiorców, nie tylko autora. | REG-T21-02 / CL-T21-02; REG-T21-05 / CL-T21-05 |
| RAT-T21-D02-c | To wąski aspekt potencjalnej weryfikacji, a nie niezbędność treści w specyfikacji. | REG-T21-02 / CL-T21-02; REG-T21-06 / CL-T21-06 |
| RAT-T21-D02-d | To kompletność zbioru, czyli inna jednostka i inny przedmiot oceny. Nie objaśnia necessity pojedynczego wymagania. | REG-T21-02 / CL-T21-02; REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Rozpoznaje znaczenie wśród opisów różnych jednostek i celów oceny; ta sama rodzina, nie dowód nowego transferu.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-02, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-02 i N-T21-02; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.4. Ścieżka ZAK-T21-03

#### T21-B03/r1

**[M]** A, w=1; base; primary KRY-T21-01; ZAK-T21-03; L1; FAM-T21-03/r1.

**[Q]** Które kryterium jakości wymagania dotyczy wyeliminowania różnych interpretacji jego treści przez różne osoby?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Jednoznaczność. |
| b | Konieczność. |
| c | Adekwatność. |
| d | Kompletność zbioru. |

**[R] Klucz:** a. **Punktacja:** Jedynie pojedynczy wybór a daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B03-a | Polecenie dotyczy różnic odczytania treści; to bezpośrednio sens unambiguity. Odpowiedź jest właściwa. | REG-T21-03 / CL-T21-03 |
| RAT-T21-B03-b | Konieczność dotyczy niezbędności wymagania w specyfikacji, a nie różnych interpretacji jego zapisu. | REG-T21-03 / CL-T21-03; REG-T21-02 / CL-T21-02 |
| RAT-T21-B03-c | Adekwatność dotyczy zgodności z rzeczywistą, uzgodnioną potrzebą. Sama zgodność z potrzebą nie definiuje braku różnych interpretacji. | REG-T21-03 / CL-T21-03; REG-T21-01 / CL-T21-01 |
| RAT-T21-B03-d | Kompletność zbioru dotyczy braku pominiętych znanych istotnych wymagań. Polecenie pyta o znaczenie jednego zapisu, więc wybór jest nieadekwatny. | REG-T21-03 / CL-T21-03; REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Rozpoznaje sens różnych interpretacji bez analizy złożonego tekstu.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-03, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-03 i N-T21-03; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F03/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-01; ZAK-T21-03; L1; FAM-T21-03/r1.

**[Q]** Oceń tezy dotyczące jednoznaczności pojedynczego wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Krótkie zdanie zawsze jest jednoznaczne. | Prawda / Fałsz |
| 2 | Jednoznaczność dotyczy tego, czy różne osoby mogą odczytać wymaganie na różne sposoby. | Prawda / Fałsz |
| 3 | Sama obecność liczby nie wyklucza różnych odczytań wymagania. | Prawda / Fałsz |

**[R] Klucz:** 1: Fałsz, 2: Prawda, 3: Prawda. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F03-1 | Długość nie wyklucza różnych interpretacji. Teza wprowadza nieuprawniony warunek wystarczający, dlatego Fałsz. | REG-T21-03 / CL-T21-03 |
| RAT-T21-F03-2 | To właściwa oś kryterium, dlatego Prawda. | REG-T21-03 / CL-T21-03 |
| RAT-T21-F03-3 | Liczba może mieć nieokreślony zakres lub jednostkę; teza nie utożsamia jej z brakiem różnych interpretacji, dlatego Prawda. To autorska ilustracja granicy reguły. | REG-T21-03 / CL-T21-03 |

**Zmiana czynności/rola:** Rozpoznaje granice skrótów długość/liczba, zamiast ponownie nazywać kryterium.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-03, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-03 i N-T21-03; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G03/r1

**[M]** P, w=3, k=2; follow_up_2; primary KRY-T21-01; ZAK-T21-03; L1; FAM-T21-03/r1.

**[Q]** Które DWA stwierdzenia poprawnie opisują jednoznaczność wymagania?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 3 punkty.

| Opcja | Treść |
| ---|--- |
| a | Jest automatycznie zapewniona, jeżeli wymaganie ma tylko jedno zdanie. |
| b | Różne dopuszczalne znaczenia tego samego zapisu są istotne dla oceny tego kryterium. |
| c | Nie jest tym samym co sama łatwość zrozumienia zdania. |
| d | Oznacza brak jakichkolwiek zależności między wymaganiami. |
| e | Jest nazwą braku pominiętych wymagań w całej specyfikacji. |

**[R] Klucz:** b,c. **Punktacja:** n≤2: 3×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 3/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G03-a | Jedno zdanie może dopuszczać różne interpretacje. Teza jest niepoprawnym skrótem i nie należy do klucza. | REG-T21-03 / CL-T21-03 |
| RAT-T21-G03-b | Opcja wskazuje przedmiot unambiguity, dlatego należy do klucza. | REG-T21-03 / CL-T21-03 |
| RAT-T21-G03-c | Łatwość pojmowania przez odbiorców i brak różnych interpretacji są odrębnymi osiami; teza jest poprawna i należy do klucza. | REG-T21-03 / CL-T21-03; REG-T21-05 / CL-T21-05 |
| RAT-T21-G03-d | Zależności między wymaganiami nie są definicją różnych odczytań zapisu. Opcja podmienia znaczenie. | REG-T21-03 / CL-T21-03 |
| RAT-T21-G03-e | To opis kompletności zbioru. Nie jest znaczeniem jednoznaczności, więc nie należy do klucza. | REG-T21-03 / CL-T21-03; REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Porównuje zakres znaczenia i granicę wobec zrozumiałości; nadal odtwórcze rozpoznanie wcześniej nauczonych sensów.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-03, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-03 i N-T21-03; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D03/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-01; ZAK-T21-03; L1; FAM-T21-03/r1.

**[Q]** Która notatka poprawnie wyjaśnia unambiguity of requirements?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Wymaganie ma być przede wszystkim tanie do realizacji. |
| b | Wymaganie ma zawierać wszystkie znane wymagania dotyczące systemu. |
| c | Wymaganie ma być już wykonane i zaakceptowane przez zamawiającego. |
| d | Sposób wyrażenia wymagania ma zapobiegać odmiennym interpretacjom przez różne osoby. |

**[R] Klucz:** d. **Punktacja:** Jedynie pojedynczy wybór d daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D03-a | Koszt realizacji nie definiuje braku różnych interpretacji treści. To inny przedmiot oceny. | REG-T21-03 / CL-T21-03 |
| RAT-T21-D03-b | To dodatkowo błędne przeniesienie całej specyfikacji do jednego wymagania; nie jest znaczeniem unambiguity. | REG-T21-03 / CL-T21-03; REG-T21-04 / CL-T21-04 |
| RAT-T21-D03-c | Stan realizacji i akceptacji nie określa jednoznaczności zapisu. Odpowiedź myli właściwość treści z historią pracy. | REG-T21-03 / CL-T21-03 |
| RAT-T21-D03-d | Notatka zachowuje istotną oś definicji, dlatego jest właściwa. | REG-T21-03 / CL-T21-03 |

**Zmiana czynności/rola:** Rozpoznaje definicję wobec kosztu, kompletności i stanu realizacji; konserwatywnie wspólna rodzina.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-03, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-03 i N-T21-03; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.5. Ścieżka ZAK-T21-04

#### T21-B04/r1

**[M]** A, w=1; base; primary KRY-T21-01; ZAK-T21-04; L1; FAM-T21-04/r1.

**[Q]** Który opis dotyczy complete w znaczeniu jakości POJEDYNCZEGO wymagania?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Cały zbiór zawiera wszystkie znane, istotne wymagania w swoim zakresie. |
| b | Zrealizowany system przeszedł już wszystkie testy. |
| c | Opis tego wymagania jest samowystarczalny. |
| d | Wymaganie ma zawsze najwyższy priorytet realizacji. |

**[R] Klucz:** c. **Punktacja:** Jedynie pojedynczy wybór c daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B04-a | To drugi sens completeness, dotyczący zbioru. Polecenie wyraźnie pyta o pojedyncze wymaganie. | REG-T21-04 / CL-T21-04 |
| RAT-T21-B04-b | To informacja o sprawdzeniu systemu, nie definicja samowystarczalności opisu wymagania. | REG-T21-04 / CL-T21-04; REG-T21-06 / CL-T21-06 |
| RAT-T21-B04-c | To sens completeness pojedynczego wymagania wskazany w źródle, więc właściwy wybór. | REG-T21-04 / CL-T21-04 |
| RAT-T21-B04-d | Priorytet nie definiuje kompletności treści pojedynczego wymagania. Opcja nie odpowiada poleceniu. | REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Rozdziela dwa źródłowe sensy completeness, bez audytu zbioru.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-04, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-04 i N-T21-04; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F04/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-01; ZAK-T21-04; L1; FAM-T21-04/r1.

**[Q]** Oceń tezy dotyczące kompletności pojedynczego wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Kompletność pojedynczego wymagania dotyczy samowystarczalności jego opisu. | Prawda / Fałsz |
| 2 | Z kompletności jednego wymagania wynika kompletność całego zbioru wymagań. | Prawda / Fałsz |
| 3 | Samo nadanie identyfikatora uzupełnia brakującą istotną treść wymagania. | Prawda / Fałsz |

**[R] Klucz:** 1: Prawda, 2: Fałsz, 3: Fałsz. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F04-1 | Teza przywołuje właściwy sens completeness, dlatego Prawda. | REG-T21-04 / CL-T21-04 |
| RAT-T21-F04-2 | Zmiana jednostki oceny nie ma uzasadnienia. Inne istotne wymagania mogą być pominięte, dlatego Fałsz. | REG-T21-04 / CL-T21-04 |
| RAT-T21-F04-3 | Identyfikator pozwala wskazać zapis, ale nie wnosi brakującego oczekiwania. Nie gwarantuje samowystarczalności, dlatego Fałsz. | REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Kontroluje dwa nieuprawnione wnioski: przejście do całego zbioru i kompletność z samego ID.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-04, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-04 i N-T21-04; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G04/r1

**[M]** P, w=1, k=2; follow_up_2; primary KRY-T21-01; ZAK-T21-04; L1; FAM-T21-04/r1.

**[Q]** Które DWA stwierdzenia poprawnie objaśniają complete dla pojedynczego wymagania?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | W tym znaczeniu chodzi o samowystarczalność opisu jednego wymagania. |
| b | Wymaganie musi w jednym zdaniu zawierać całą specyfikację systemu. |
| c | Brak pominiętych znanych, istotnych wymagań odnosi się do innego poziomu oceny: zbioru. |
| d | Każdy zapis bez linków jest przez ten fakt kompletny. |
| e | Kompletność pojedyncza oznacza, że test systemu zakończył się sukcesem. |

**[R] Klucz:** a,c. **Punktacja:** n≤2: 1×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 1/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G04-a | Teza odtwarza właściwy sens źródłowy, dlatego należy do klucza. | REG-T21-04 / CL-T21-04 |
| RAT-T21-G04-b | Teza przenosi zakres całej specyfikacji do pojedynczego wymagania. Definicja tego nie wymaga, więc nie należy do klucza. | REG-T21-04 / CL-T21-04 |
| RAT-T21-G04-c | Teza poprawnie rozdziela dwa sensy completeness i należy do klucza; nie zamyka pełnego T22. | REG-T21-04 / CL-T21-04 |
| RAT-T21-G04-d | Brak linków nie zapewnia obecności istotnej treści. Teza zastępuje samowystarczalność mechaniczną cechą reprezentacji. | REG-T21-04 / CL-T21-04 |
| RAT-T21-G04-e | To pomieszanie właściwości opisu z wynikiem sprawdzenia implementacji. Opcja nie należy do klucza. | REG-T21-04 / CL-T21-04; REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Wybiera sens pojedynczy oraz granicę sensu zbiorowego, bez rozstrzygania spornego zakresu odwołań.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-04, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-04 i N-T21-04; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D04/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-01; ZAK-T21-04; L1; FAM-T21-04/r1.

**[Q]** Które z poniższych objaśnień jest właściwe dla completeness of a single requirement?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Brak jakichkolwiek relacji z innymi wymaganiami. |
| b | Samowystarczalny opis tego pojedynczego wymagania. |
| c | Brak nadmiarowych kopii tego wymagania w repozytorium. |
| d | Znajomość zapisu przez wszystkich pracowników organizacji. |

**[R] Klucz:** b. **Punktacja:** Jedynie pojedynczy wybór b daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D04-a | Źródło mówi o samowystarczalności opisu, a nie zakazie relacji. Mechaniczny brak powiązań nie objaśnia kryterium. | REG-T21-04 / CL-T21-04 |
| RAT-T21-D04-b | To właściwy sens w odróżnieniu od kompletności zbioru i innych cech. Odpowiedź należy wybrać. | REG-T21-04 / CL-T21-04 |
| RAT-T21-D04-c | Liczba kopii informacji nie jest znaczeniem samowystarczalności jej treści. Opcja opisuje inny problem jakości. | REG-T21-04 / CL-T21-04 |
| RAT-T21-D04-d | Zasięg rozpowszechnienia nie definiuje kompletności pojedynczej treści. Nie odpowiada nazwie kryterium. | REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Odróżnia samowystarczalność od relacji, kopii i rozpowszechnienia; nowy zestaw granic w tej samej rodzinie.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-04, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-04 i N-T21-04; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.6. Ścieżka ZAK-T21-05

#### T21-B05/r1

**[M]** A, w=1; base; primary KRY-T21-01; ZAK-T21-05; L1; FAM-T21-05/r1.

**[Q]** Które kryterium dotyczy tego, czy zamierzeni odbiorcy potrafią pojąć treść wymagania?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Konieczność. |
| b | Zrozumiałość. |
| c | Kompletność zbioru. |
| d | Weryfikowalność. |

**[R] Klucz:** b. **Punktacja:** Jedynie pojedynczy wybór b daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B05-a | Konieczność dotyczy potrzebnej obecności wymagania w specyfikacji. Nie jest nazwą pojmowalności dla odbiorców. | REG-T21-05 / CL-T21-05; REG-T21-02 / CL-T21-02 |
| RAT-T21-B05-b | Polecenie podaje właściwego odbiorcę i przedmiot understandability, więc jest to właściwa odpowiedź. | REG-T21-05 / CL-T21-05 |
| RAT-T21-B05-c | Kompletność zbioru dotyczy zawartości całego artefaktu. Nie określa pojmowalności treści dla zamierzonych odbiorców. | REG-T21-05 / CL-T21-05; REG-T21-04 / CL-T21-04 |
| RAT-T21-B05-d | Możliwość sprawdzenia spełnienia w systemie nie jest tym samym co rozumienie opisu przez odbiorców. | REG-T21-05 / CL-T21-05; REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Wiąże cechę z odbiorcami treści, bez testowania ich faktycznej kompetencji.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-05, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-05 i N-T21-05; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F05/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-01; ZAK-T21-05; L1; FAM-T21-05/r1.

**[Q]** Oceń tezy dotyczące zrozumiałości wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Wystarczy, że autor potrafi odczytać wymaganie; pozostali zamierzeni odbiorcy nie mają znaczenia. | Prawda / Fałsz |
| 2 | Kryterium odnosi się do pojmowalności treści dla jej zamierzonych odbiorców. | Prawda / Fałsz |
| 3 | Sama obecność terminu specjalistycznego nie dowodzi niezrozumiałości dla zamierzonych odbiorców. | Prawda / Fałsz |

**[R] Klucz:** 1: Fałsz, 2: Prawda, 3: Prawda. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F05-1 | Reguła dotyczy zamierzonych odbiorców. Zawężenie do autora usuwa istotny warunek, dlatego Fałsz. | REG-T21-05 / CL-T21-05 |
| RAT-T21-F05-2 | To właściwa oś understandability, dlatego Prawda. | REG-T21-05 / CL-T21-05 |
| RAT-T21-F05-3 | Odbiorcy mogą znać ten termin. Bez informacji o ich rozumieniu nie można automatycznie stwierdzić wady, dlatego Prawda; to granica zastosowania definicji. | REG-T21-05 / CL-T21-05 |

**Zmiana czynności/rola:** Sprawdza właściwego odbiorcę i granicę zakazu terminów specjalistycznych.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-05, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-05 i N-T21-05; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G05/r1

**[M]** P, w=2, k=2; follow_up_2; primary KRY-T21-01; ZAK-T21-05; L1; FAM-T21-05/r1.

**[Q]** Które DWA stwierdzenia poprawnie opisują zrozumiałość wymagania?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 2 punkty.

| Opcja | Treść |
| ---|--- |
| a | Understandable oznacza dokładnie tyle co usable dla działającego systemu. |
| b | Zamierzeni odbiorcy są istotni dla oceny tej cechy. |
| c | Każdy skrót automatycznie czyni wymaganie niezrozumiałym. |
| d | To, że zdanie jest łatwe do przeczytania, nie dowodzi jeszcze braku różnych interpretacji. |
| e | Kryterium dotyczy przede wszystkim tego, czy wymaganie jest już zaimplementowane. |

**[R] Klucz:** b,d. **Punktacja:** n≤2: 2×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 2/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G05-a | Zrozumiałość treści i użyteczność systemu mają różne przedmioty. Ta równoważność nie objaśnia kryterium T21. | REG-T21-05 / CL-T21-05 |
| RAT-T21-G05-b | Teza zachowuje źródłowe odniesienie do intended users danego elementu, tu treści wymagania. Należy do klucza. | REG-T21-05 / CL-T21-05 |
| RAT-T21-G05-c | Teza pomija wiedzę zamierzonych odbiorców. Skrót może być dla nich znany, więc nie jest to ogólna reguła. | REG-T21-05 / CL-T21-05 |
| RAT-T21-G05-d | Łatwość rozumienia nie jest automatyczną jednoznacznością. Opcja poprawnie rozdziela te cechy i należy do klucza. | REG-T21-05 / CL-T21-05; REG-T21-03 / CL-T21-03 |
| RAT-T21-G05-e | Stan realizacji nie definiuje pojmowalności treści dla jej odbiorców. Opcja jest niepoprawna. | REG-T21-05 / CL-T21-05 |

**Zmiana czynności/rola:** Rozdziela cechę treści, cechę systemu i jednoznaczność; nie wymaga interpretacji nowego przypadku.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-05, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-05 i N-T21-05; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D05/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-01; ZAK-T21-05; L1; FAM-T21-05/r1.

**[Q]** Która notatka poprawnie objaśnia understandability pojedynczego wymagania?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Treść ma być pojmowalna dla zamierzonych odbiorców, do których skierowano opis. |
| b | Treść ma być rozpowszechniona w jak największej liczbie kopii. |
| c | Treść ma być pozbawiona wszystkich terminów dziedziny niezależnie od wiedzy odbiorców. |
| d | Treść ma opisywać wyłącznie łatwe do implementacji funkcje. |

**[R] Klucz:** a. **Punktacja:** Jedynie pojedynczy wybór a daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D05-a | Notatka zachowuje przedmiot oraz grupę odniesienia definicji. Jest właściwa. | REG-T21-05 / CL-T21-05 |
| RAT-T21-D05-b | Liczba kopii nie określa rozumienia treści. Można szeroko udostępnić opis, którego odbiorcy nie pojmują. | REG-T21-05 / CL-T21-05 |
| RAT-T21-D05-c | To arbitralna zasada językowa. Definicja ocenia pojmowalność względem odbiorców, a nie brak całej terminologii. | REG-T21-05 / CL-T21-05 |
| RAT-T21-D05-d | Łatwość realizacji nie jest znaczeniem understandability. Funkcja trudna do realizacji może być jasno opisana. | REG-T21-05 / CL-T21-05 |

**Zmiana czynności/rola:** Wybiera opis względem odbiorców spośród reguł dystrybucji, języka i wykonania; ta sama rodzina.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-05, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-05 i N-T21-05; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.7. Ścieżka ZAK-T21-06

#### T21-B06/r1

**[M]** A, w=1; base; primary KRY-T21-01; ZAK-T21-06; L1; FAM-T21-06/r1.

**[Q]** Które kryterium dotyczy możliwości sprawdzenia, czy zrealizowany system spełnia wymaganie?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Adekwatność. |
| b | Konieczność. |
| c | Zrozumiałość. |
| d | Weryfikowalność. |

**[R] Klucz:** d. **Punktacja:** Jedynie pojedynczy wybór d daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B06-a | Adekwatność dotyczy rzeczywistej, uzgodnionej potrzeby. Możliwość sprawdzenia realizacji jest odrębną cechą. | REG-T21-06 / CL-T21-06; REG-T21-01 / CL-T21-01 |
| RAT-T21-B06-b | Konieczność dotyczy potrzebnej obecności treści w specyfikacji. Nie jest nazwą możliwości sprawdzenia realizacji. | REG-T21-06 / CL-T21-06; REG-T21-02 / CL-T21-02 |
| RAT-T21-B06-c | Pojmowanie opisu przez odbiorców jest innym przedmiotem niż sprawdzenie spełnienia w systemie. | REG-T21-06 / CL-T21-06; REG-T21-05 / CL-T21-05 |
| RAT-T21-B06-d | Polecenie podaje znaczenie verifiability i dotyczy możliwości, a nie wykonanego testu. To właściwy wybór. | REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Rozpoznaje możliwość sprawdzenia, nie rzeczywisty wynik testu.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-06, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-06 i N-T21-06; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F06/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-01; ZAK-T21-06; L1; FAM-T21-06/r1.

**[Q]** Oceń tezy dotyczące weryfikowalności wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Weryfikowalność oznacza, że można sprawdzić spełnienie wymagania w zrealizowanym systemie. | Prawda / Fałsz |
| 2 | Wymaganie jest weryfikowalne dopiero po udanym wykonaniu jego testu. | Prawda / Fałsz |
| 3 | Sprawdzenie spełnienia może korzystać z pomiaru, testu albo inspekcji. | Prawda / Fałsz |

**[R] Klucz:** 1: Prawda, 2: Fałsz, 3: Prawda. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F06-1 | Teza poprawnie wskazuje możliwość i przedmiot sprawdzenia, dlatego Prawda. | REG-T21-06 / CL-T21-06 |
| RAT-T21-F06-2 | Teza myli możliwość sprawdzenia z wynikiem już przeprowadzonej czynności. Dlatego Fałsz. | REG-T21-06 / CL-T21-06 |
| RAT-T21-F06-3 | Źródło podaje takie przykładowe sposoby; teza nie ogranicza sprawdzenia do jednej z nich, dlatego Prawda. | REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Rozpoznaje różnicę zdolność/wynik oraz kilka dopuszczalnych dróg sprawdzenia.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-06, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-06 i N-T21-06; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G06/r1

**[M]** P, w=3, k=2; follow_up_2; primary KRY-T21-01; ZAK-T21-06; L1; FAM-T21-06/r1.

**[Q]** Które DWA stwierdzenia poprawnie opisują verifiability wymagania?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 3 punkty.

| Opcja | Treść |
| ---|--- |
| a | Weryfikowalność nie oznacza, że wymaganie zostało już sprawdzone z wynikiem pozytywnym. |
| b | Wymaganie bez liczby nie może być weryfikowalne. |
| c | Jedynym dopuszczalnym sposobem sprawdzenia jest pomiar czasu. |
| d | Sama obecność liczby zawsze gwarantuje możliwość rozstrzygnięcia spełnienia. |
| e | Możliwość sprawdzenia spełnienia może opierać się na uzgodnionej procedurze inspekcji. |

**[R] Klucz:** a,e. **Punktacja:** n≤2: 3×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 3/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G06-a | To poprawne rozróżnienie możliwości i zdarzenia. Teza należy do klucza. | REG-T21-06 / CL-T21-06 |
| RAT-T21-G06-b | Źródło nie sprowadza sprawdzenia do progów liczbowych. Zachowanie można sprawdzać testem lub inspekcją, więc ta ogólna teza nie należy do klucza. | REG-T21-06 / CL-T21-06 |
| RAT-T21-G06-c | Teza nieuprawnienie usuwa inne testy, pomiary i inspekcje. Nie należy do klucza. | REG-T21-06 / CL-T21-06 |
| RAT-T21-G06-d | Liczba bez warunków lub jednostki może nie dawać rozstrzygnięcia. Definicja nie ustanawia takiej gwarancji. | REG-T21-06 / CL-T21-06 |
| RAT-T21-G06-e | Inspekcja jest jednym ze źródłowo podanych przykładów weryfikacji. Opcja należy do klucza. | REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Odrzuca równoważność liczba=sprawdzalność, zachowując różne procedury; nie wymaga zaprojektowania testu.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-06, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-06 i N-T21-06; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D06/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-01; ZAK-T21-06; L1; FAM-T21-06/r1.

**[Q]** Która notatka poprawnie objaśnia verifiability of requirements?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Każde wymaganie z liczbą jest już zweryfikowane. |
| b | Weryfikowalność dotyczy tego, czy interesariusze uzgodnili rzeczywistą potrzebę. |
| c | Spełnienie wymagania przez zrealizowany system można sprawdzić, na przykład testem, pomiarem lub inspekcją. |
| d | Weryfikowalność oznacza, że cały zbiór wymagań nie zawiera pominięć. |

**[R] Klucz:** c. **Punktacja:** Jedynie pojedynczy wybór c daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D06-a | Teza myli własność treści, obecność liczby i wynik czynności. Żaden z tych wniosków nie wynika z definicji. | REG-T21-06 / CL-T21-06 |
| RAT-T21-D06-b | To przedmiot adekwatności. Sama zgodność z potrzebą nie jest definicją możliwości sprawdzenia spełnienia. | REG-T21-06 / CL-T21-06; REG-T21-01 / CL-T21-01 |
| RAT-T21-D06-c | Notatka zachowuje możliwość i właściwy przedmiot kontroli, bez zakładania udanego wykonania. To właściwy wybór. | REG-T21-06 / CL-T21-06 |
| RAT-T21-D06-d | To opis kompletności zbioru, nie możliwości sprawdzenia realizacji danego wymagania. | REG-T21-06 / CL-T21-06; REG-T21-04 / CL-T21-04 |

**Zmiana czynności/rola:** Wybiera znaczenie wraz z metodami, przeciwstawione wynikowi, adekwatności i kompletności; wspólna rodzina.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-06, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-06 i N-T21-06; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.8. Ścieżka ZAK-T21-07

#### T21-B07/r1

**[M]** A, w=1; base; primary KRY-T21-02; ZAK-T21-07; L1; FAM-T21-07/r1.

**[Q]** Która para ma według §3.8 sylabusa szczególne znaczenie dla jakości pojedynczego wymagania?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Konieczność i kompletność. |
| b | Jednoznaczność i weryfikowalność. |
| c | Adekwatność i zrozumiałość. |
| d | Kompletność i weryfikowalność. |

**[R] Klucz:** c. **Punktacja:** Jedynie pojedynczy wybór c daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B07-a | Obie cechy są na zalecanej liście, lecz nie są wskazaną w źródle najważniejszą parą. Opcja nie odpowiada poleceniu. | REG-T21-07 / CL-T21-07; REG-T21-02 / CL-T21-02; REG-T21-04 / CL-T21-04 |
| RAT-T21-B07-b | Obie cechy są zalecane, ale źródło szczególnie wyróżnia inną parę. Nie wolno zastąpić jej własnym rankingiem. | REG-T21-07 / CL-T21-07; REG-T21-03 / CL-T21-03; REG-T21-06 / CL-T21-06 |
| RAT-T21-B07-c | To para wyróżniona dla pojedynczych wymagań w §3.8. Odpowiada poleceniu. | REG-T21-07 / CL-T21-07 |
| RAT-T21-B07-d | Te cechy są ważne, jednak nie stanowią pary wskazanej w źródle. Nie należy ich wybrać w tym poleceniu. | REG-T21-07 / CL-T21-07; REG-T21-04 / CL-T21-04; REG-T21-06 / CL-T21-06 |

**Zmiana czynności/rola:** Odtwarza źródłowo wskazaną parę, a nie własną opinię o hierarchii jakości.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-07, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-07 i N-T21-07; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F07/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-02; ZAK-T21-07; L1; FAM-T21-07/r1.

**[Q]** Oceń tezy o szczególnej wadze kryteriów jakości pojedynczego wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | Sylabus wyróżnia w tym kontekście jednoznaczność i weryfikowalność jako najważniejszą parę. | Prawda / Fałsz |
| 2 | Spełnienie pozostałych kryteriów nie zastępuje adekwatności i zrozumiałości wymagania. | Prawda / Fałsz |
| 3 | Wyróżnienie dwóch kryteriów oznacza usunięcie pozostałych czterech z zalecanej listy. | Prawda / Fałsz |

**[R] Klucz:** 1: Fałsz, 2: Prawda, 3: Fałsz. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F07-1 | Teza podmienia źródłowo wskazaną parę na dwie inne zalecane cechy. Dlatego Fałsz. | REG-T21-07 / CL-T21-07 |
| RAT-T21-F07-2 | Teza zachowuje opis szczególnej wagi tej pary i granicy kompensowania, dlatego Prawda. | REG-T21-07 / CL-T21-07 |
| RAT-T21-F07-3 | Źródło nadal zaleca sześć kryteriów; ich szczególna waga nie usuwa innych. Dlatego Fałsz. | REG-T21-07 / CL-T21-07; REG-T21-08 / CL-T21-08 |

**Zmiana czynności/rola:** Kontroluje znaczenie wyróżnienia, nie samo pamiętanie nazw.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-07, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-07 i N-T21-07; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G07/r1

**[M]** P, w=1, k=2; follow_up_2; primary KRY-T21-02; ZAK-T21-07; L1; FAM-T21-07/r1.

**[Q]** Które DWA stwierdzenia zgodnie z §3.8 opisują szczególną wagę adekwatności i zrozumiałości?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Oznacza ona, że pozostałe kryteria nie służą już ocenie jakości. |
| b | Oznacza ona, że liczbowy próg w wymaganiu gwarantuje właściwą potrzebę. |
| c | Samo spełnienie pozostałych kryteriów nie kompensuje braku tej pary. |
| d | Wyróżnioną parą są adekwatność i zrozumiałość pojedynczego wymagania. |
| e | Pozwala ona uznać za dobre wymaganie, którego zamierzeni odbiorcy nie potrafią pojąć. |

**[R] Klucz:** c,d. **Punktacja:** n≤2: 1×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 1/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G07-a | To nieuprawnione usunięcie innych zalecanych cech. Wyróżnienie nie jest wykreśleniem reszty listy. | REG-T21-07 / CL-T21-07; REG-T21-08 / CL-T21-08 |
| RAT-T21-G07-b | Liczba nie poświadcza adekwatności. Teza nie wynika z wyróżnienia pary i nie należy do klucza. | REG-T21-07 / CL-T21-07; REG-T21-01 / CL-T21-01 |
| RAT-T21-G07-c | To właściwa granica roli innych cech wobec adekwatności i zrozumiałości. Należy do klucza. | REG-T21-07 / CL-T21-07 |
| RAT-T21-G07-d | Opcja poprawnie przywołuje parę oraz jednostkę oceny. Należy do klucza. | REG-T21-07 / CL-T21-07 |
| RAT-T21-G07-e | Brak zrozumiałości jest właśnie jedną z przesłanek, których inne cechy nie kompensują. Teza jest sprzeczna z regułą. | REG-T21-07 / CL-T21-07; REG-T21-05 / CL-T21-05 |

**Zmiana czynności/rola:** Łączy pamięć pary i granicę kompensowania; nie jest audytem nowego wymagania.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-07, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-07 i N-T21-07; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D07/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-02; ZAK-T21-07; L1; FAM-T21-07/r1.

**[Q]** Która notatka wiernie podsumowuje wskazanie §3.8 dotyczące najważniejszych kryteriów pojedynczego wymagania?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Wystarczy weryfikowalność; zgodność z potrzebą nie ma wtedy znaczenia. |
| b | Źródło ustala pełny ranking od pierwszego do szóstego miejsca. |
| c | Najważniejsza para zawsze zmienia się na tę, którą wskaże autor pytania. |
| d | Adekwatność i zrozumiałość mają szczególną wagę; spełnienie pozostałych kryteriów nie zastępuje ich braku. |

**[R] Klucz:** d. **Punktacja:** Jedynie pojedynczy wybór d daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D07-a | Możliwość sprawdzenia nie zastępuje adekwatności. Teza zaprzecza wskazanej w źródle granicy. | REG-T21-07 / CL-T21-07; REG-T21-01 / CL-T21-01; REG-T21-06 / CL-T21-06 |
| RAT-T21-D07-b | Źródło wyróżnia parę, lecz nie ustanawia tu pełnego porządku sześciu cech. Opcja dodaje nieistniejącą normę. | REG-T21-07 / CL-T21-07 |
| RAT-T21-D07-c | Polecenie pyta o wskazanie źródła. Opinia autora nie zastępuje tej podstawy, dlatego opcja nie jest właściwa. | REG-T21-07 / CL-T21-07 |
| RAT-T21-D07-d | Notatka zachowuje parę i sens jej wyróżnienia, dlatego jest właściwa. | REG-T21-07 / CL-T21-07 |

**Zmiana czynności/rola:** Wybiera pełne podsumowanie źródłowego priorytetu wobec konkurencyjnych meta-reguł, nadal ta sama rodzina.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-07, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-07 i N-T21-07; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

### 7.9. Ścieżka ZAK-T21-08

#### T21-B08/r1

**[M]** A, w=1; base; primary KRY-T21-03; secondary KRY-T21-02 w części wartości; ZAK-T21-08; L1; FAM-T21-08/r1.

**[Q]** Które stwierdzenie odpowiada §3.8 w odniesieniu do zalecanych kryteriów i podejścia zorientowanego na wartość?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Stopień spełnienia kryteriów powinien odpowiadać wartości wymagania; nie zawsze trzeba całkowicie spełnić wszystkie kryteria. |
| b | Każde wymaganie musi w każdym kontekście spełniać wszystkie kryteria całkowicie. |
| c | Zawsze wystarcza dowolnych pięć z sześciu kryteriów. |
| d | Zalecany charakter listy oznacza, że jakość można całkowicie zignorować. |

**[R] Klucz:** a. **Punktacja:** Jedynie pojedynczy wybór a daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-B08-a | Opcja zachowuje warunek wartości i granicę bezwarunkowego pełnego spełnienia. To właściwy wybór. | REG-T21-08 / CL-T21-08 |
| RAT-T21-B08-b | Teza usuwa jawny warunek wartości i możliwość niepełnego stopnia spełnienia, dlatego nie odpowiada źródłu. | REG-T21-08 / CL-T21-08 |
| RAT-T21-B08-c | Źródło nie podaje liczbowego progu ani dowolnego wyboru pięciu cech. Opcja dodaje nieistniejącą normę. | REG-T21-08 / CL-T21-08 |
| RAT-T21-B08-d | Zalecenie i dostosowanie stopnia nie są zwolnieniem z dbałości o jakość. Teza nie odpowiada opisanej zależności. | REG-T21-08 / CL-T21-08 |

**Zmiana czynności/rola:** Rozpoznaje źródłowy warunek zamiast sztywnej lub dowolnej checklisty.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-08, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-08 i N-T21-08; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-F08/r1

**[M]** K, w=2, m=3; follow_up_1; primary KRY-T21-03; secondary KRY-T21-02 w części wartości; ZAK-T21-08; L1; FAM-T21-08/r1.

**[Q]** Oceń tezy dotyczące zalecanej listy kryteriów jakości i wartości wymagania.

Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.

| Wiersz | Teza | Dostępne decyzje |
| ---|---|--- |
| 1 | W podejściu zorientowanym na wartość stopień spełnienia kryteriów wiąże się z wartością wymagania. | Prawda / Fałsz |
| 2 | Wyższa wartość wymagania zwiększa znaczenie kryteriów jakości dla ograniczenia ryzyka niepowodzenia. | Prawda / Fałsz |
| 3 | Określenie listy jako zalecanej samo w sobie pozwala dowolnie ignorować adekwatność. | Prawda / Fałsz |

**[R] Klucz:** 1: Prawda, 2: Prawda, 3: Fałsz. **Punktacja:** 2×liczba trafnych wierszy/3; blank i podwójna decyzja dają 0 za własny wiersz.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-F08-1 | Teza zachowuje podaną zależność, dlatego Prawda. | REG-T21-08 / CL-T21-08 |
| RAT-T21-F08-2 | To kierunek zależności wskazany w §3.8, dlatego Prawda; bez wymyślania liczbowego budżetu. | REG-T21-08 / CL-T21-08 |
| RAT-T21-F08-3 | Teza zamienia zalecenie w nieograniczone zwolnienie i pomija szczególną wagę adekwatności. Dlatego Fałsz. | REG-T21-08 / CL-T21-08; REG-T21-07 / CL-T21-07 |

**Zmiana czynności/rola:** Sprawdza kierunek zależności i granicę dowolnego pomijania jakości.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-08, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-08 i N-T21-08; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-G08/r1

**[M]** P, w=2, k=2; follow_up_2; primary KRY-T21-03; secondary KRY-T21-02 w części wartości; ZAK-T21-08; L1; FAM-T21-08/r1.

**[Q]** Które DWA stwierdzenia są zgodne z opisanym w §3.8 podejściem do stopnia spełnienia kryteriów?

Wybierz dokładnie DWA stwierdzenia. Maksymalnie 2 punkty.

| Opcja | Treść |
| ---|--- |
| a | Wartość wymagania przekłada się na ustaloną w źródle tabelę procentów jakości. |
| b | Nie należy z tej zasady wyprowadzać identycznego, całkowitego spełnienia wszystkich kryteriów w każdej sytuacji. |
| c | Dla wymagania o małej wartości wszystkie kryteria są automatycznie nieistotne. |
| d | Sam fakt, że wymaganie ma identyfikator, ustala właściwy stopień jakości. |
| e | Większa wartość wymagania sprawia, że jakość ma większe znaczenie dla ograniczenia ryzyka niepowodzenia. |

**[R] Klucz:** b,e. **Punktacja:** n≤2: 2×c/2; n>2: 0. Za każdą wybraną poprawną opcję przy n≤2: 2/2 punktu.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-G08-a | Źródło nie podaje takiej tabeli ani procentów. Opcja tworzy dodatkową normę i nie należy do klucza. | REG-T21-08 / CL-T21-08 |
| RAT-T21-G08-b | Opcja zachowuje zależność od wartości i granicę pełnego spełnienia. Należy do klucza. | REG-T21-08 / CL-T21-08 |
| RAT-T21-G08-c | Źródło opisuje stopień i znaczenie, a nie automatyczne wyłączenie całej jakości. Opcja jest niepoprawna. | REG-T21-08 / CL-T21-08 |
| RAT-T21-G08-d | Identyfikator nie określa wartości ani stopnia spełnienia kryteriów. Teza nie wynika z reguły. | REG-T21-08 / CL-T21-08 |
| RAT-T21-G08-e | To właściwy kierunek zależności źródłowej. Opcja należy do klucza. | REG-T21-08 / CL-T21-08 |

**Zmiana czynności/rola:** Rozpoznaje zależność i odrzuca wymyśloną metrykę oraz zero-jakości; nadal L1.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-08, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-08 i N-T21-08; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

#### T21-D08/r1

**[M]** A, w=1; delayed_candidate; primary KRY-T21-03; secondary KRY-T21-02 w części wartości; ZAK-T21-08; L1; FAM-T21-08/r1.

**[Q]** Która notatka poprawnie streszcza status listy sześciu kryteriów i warunek wartości opisany w sylabusie?

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.

| Opcja | Treść |
| ---|--- |
| a | Lista nakazuje zawsze identyczny stopień spełnienia wszystkich kryteriów. |
| b | To zalecany zestaw; stopień spełnienia odnosi się do wartości wymagania, bez podanego uniwersalnego procentu jakości. |
| c | Lista definiuje oficjalny próg: spełnienie połowy cech wystarcza do akceptacji. |
| d | Lista dotyczy wyłącznie wymagań jakościowych i omija wymagania funkcjonalne. |

**[R] Klucz:** b. **Punktacja:** Jedynie pojedynczy wybór b daje 1; pozostałe zapisy 0.

| Rationale ID | Lokalna przesłanka → reguła → rozstrzygnięcie | REG / CL |
|---|---|---|
| RAT-T21-D08-a | Teza zamienia zalecany zestaw i zależny od wartości stopień w bezwarunkowy identyczny nakaz. Nie odpowiada źródłu. | REG-T21-08 / CL-T21-08 |
| RAT-T21-D08-b | Notatka zachowuje status listy, zależność i brak dodatkowego progu. To właściwy wybór. | REG-T21-08 / CL-T21-08 |
| RAT-T21-D08-c | Źródło nie podaje takiego progu. Opcja dodaje nieuprawnioną regułę akceptacji. | REG-T21-08 / CL-T21-08 |
| RAT-T21-D08-d | Zakres §3.8 dotyczy pojedynczych wymagań, a nie tylko jednego ich typu. Opcja myli dwie osie. | REG-T21-08 / CL-T21-08; REG-T21-TYPE / CL-T21-09 |

**Zmiana czynności/rola:** Rozpoznaje podsumowanie statusu i warunku wobec progu i ograniczenia do typu; wspólna rodzina, nie chroniona rezerwa.

**Feedback i przejście:** po ocenie podaj rzeczywisty wynik według SCORE-T21/r1 i rozstrzygającą REG-T21-08, z przesłanką właściwej decyzji z tabeli. Przy błędzie albo pominięciu otwórz REM-T21-08 i N-T21-08; dobór F/G/D i wyjście według §8. Brak odpowiedzi oznacz jako brak decyzji, bez przypisania błędnej reguły. Przy trafieniu pełne rationale pozostają dostępne na żądanie.

## 8. Korekta, rodziny, relacje i powrót

### 8.1. Osiem celowanych korekt [N]

REM nie diagnozuje przyczyny odpowiedzi. Uruchamia się na podstawie rzeczywistego błędu/pominięcia we właściwym zakresie; nadmiar P wymaga najpierw objaśnienia formatu. Każda korekta ma r1, źródło odpowiedniej CL/REG z §2, stan autorski do review, primary criterion i zakres ZAK zgodne z §1.

| REM ID / zakres | Gotowy komunikat korekty i przykład | Pierwsza kontrola | Alternatywne wsparcie i druga kontrola |
|---|---|---|---|
| REM-T21-01 / ZAK01 | „Adekwatność pyta o rzeczywistą, uzgodnioną potrzebę. Poprawny język ani możliwość wykonania nie zastępują tej zgodności. W przykładzie potwierdzenia rozstrzyga właściwy adresat potrzeby”. N01, EX01/CE01, CMP03 | T21-F01 | Po błędzie F01 pokaż obie strony CMP03; poproś o wskazanie różnicy adresata bez oceny zaliczenia. Następnie T21-G01 |
| REM-T21-02 / ZAK02 | „Konieczność dotyczy potrzebnego składnika specyfikacji systemu. Termin realizacji i łatwość wykonania nie rozstrzygają tej cechy. W EX02 wymaganie identyfikacji odbierającego jest potrzebne z powodu jawnie określonego celu”. N02 | T21-F02 | Po błędzie F02 wróć do EX02/CE02 i odczytaj jawny warunek potrzeby, bez wnioskowania z samego braku danych. Następnie T21-G02 |
| REM-T21-03 / ZAK03 | „Jednoznaczność pyta o różne możliwe odczytania tej samej treści. Krótkie zdanie z liczbą może nadal mieć różne znaczenia. W CE03 nie wiadomo, do jakiej daty odnosi się »ostatnie«”. N03 | T21-F03 | Po błędzie F03 zestaw N03 z N05: różne odczytania versus pojmowalność dla odbiorców. Następnie T21-G03 |
| REM-T21-04 / ZAK04 | „Complete dla jednego wymagania oznacza samowystarczalny opis tego wymagania. Kompletność zbioru ma inny zakres. Samo ID nie wnosi brakującej treści”. N04, EX04/CE04 | T21-F04 | Po błędzie F04 pokaż dwa poziomy CMP02/WS02; nie dodawaj arbitralnego zakazu glossary lub relacji. Następnie T21-G04 |
| REM-T21-05 / ZAK05 | „Zrozumiałość odnosi się do zamierzonych odbiorców. Samo zrozumienie autora nie wystarcza, a znany odbiorcom termin specjalistyczny nie jest automatycznie wadą”. N05, EX05/CE05 | T21-F05 | Po błędzie F05 przeczytaj kontrast osoby docelowej i autora z CE05, potem różnicę N03/N05. Następnie T21-G05 |
| REM-T21-06 / ZAK06 | „Weryfikowalność to możliwość sprawdzenia spełnienia wymagania w systemie. Test, pomiar i inspekcja są możliwymi drogami; nie oznacza to, że kontrolę już wykonano. EX06 pokazuje sprawdzalne zachowanie bez liczby”. N06 | T21-F06 | Po błędzie F06 zestaw możliwość kontroli, jej wykonanie i wynik jako trzy różne informacje; użyj EX06/CE06. Następnie T21-G06 |
| REM-T21-07 / ZAK07 | „Wskazana w źródle para to adekwatność i zrozumiałość. Inne cechy nadal należą do zalecanej listy, lecz ich spełnienie nie kompensuje braku tej pary”. N07, CMP03 | T21-F07 | Po błędzie F07 wróć do CE01 i pokaż, że można perfekcyjnie sprawdzić realizację niewłaściwej potrzeby. Następnie T21-G07 |
| REM-T21-08 / ZAK08 | „Lista jest zalecana, a stopień spełnienia odnosi się do wartości wymagania. Większa wartość zwiększa znaczenie jakości dla ograniczenia ryzyka. Źródło nie daje progu pięciu z sześciu ani zgody na dowolne ignorowanie jakości”. N08 | T21-F08 | Po błędzie F08 zestaw bezwarunkowe 100%, dowolne pomijanie i właściwą zależność jako trzy opisy; nazwij regułę ze źródła. Następnie T21-G08 |

**Wyjście z gałęzi:** przed follow-up można zamknąć pomoc; fakt wcześniejszej instrukcji pozostaje. Pełny prawidłowy F lub G potwierdza jedynie aktualne wykonanie po korekcie w danym ZAK. Wynik częściowy oznacza częściową poprawność konkretnych decyzji, a nie „połowę opanowania”. Początkowy B nie jest pierwszym follow-up. Po niepowodzeniu F licznik wynosi 1; po niepowodzeniu G wynosi 2. Wtedy nie uruchamia się automatycznie D ani powtórzonego B/F jako trzeciej kontroli. Proponuje się inną formę pracy z materiałem, konsultację/samoocenę z O01/O02 albo przerwę. Uczeń może wyjść wcześniej, zachowując potrzebę późniejszej kontroli. Nie blokuje się całej nauki.

**Diagnozy i sondy:** nie utworzono w tej paczce person-specific hypothesis ani sondy diagnostycznej. Przewidywane przez autora błędne uogólnienia w kontrprzykładach służą wyjaśnieniu; nie dowodzą częstości ani przyczyny odpowiedzi konkretnej osoby. Neutralna korekta spełnia zakres T21 bez diagnozy. Ewentualne przyszłe R16/R17 wymagają osobnego authoringu, alternatywnych przyczyn, rozróżnialnych przewidywań i kontroli timingu.

### 8.2. Rodziny i komplet porównań

Osiem FAM-T21-01…08 grupuje odpowiednie B/F/G/D według zapamiętywalnego rdzenia: konkretnego znaczenia lub wyraźnie określonej reguły. Przy prostych zadaniach L1 nauka reguły ma pomagać w kolejnym zadaniu. To nie jest samo przez się przeciek, ale powtarzanie charakterystycznego kontrastu lub formy odpowiedzi ogranicza siłę deklaracji o nowej rodzinie. Wszystkie grupowania są propozycją autora do review; zero rodzin ma potwierdzenie niezależnego review lub kalibracji.

FAM-T21-LEX-ALL (O01), FAM-T21-PRIORITY-VALUE (O02), FAM-T21-COMPARISONS (O03) i FAM-T21-NEED-VS-CHECK (O04) są czterema dodatkowymi grupowaniami roboczymi. O01 krzyżuje sześć rodzin znaczeń; O02 krzyżuje 07/08; O03 jest bliskie CMP01/02, O04 — WS01/CMP03/CE01 i grupowaniom 01/06/07. Łącznie jest 12 nazw rodzin, **nie 12 potwierdzonych niezależnych rodzin pomiarowych**.

W tabeli par poniżej: wszystkie końce r1; status autorski do odrębnego review; proweniencja — własna analiza rzeczywistych stemów i uzasadnień, B01-09/C02-06/07. Każda para ma własny R21. Zdanie w kolumnie opisuje zmianę, cel i pozostające ryzyko. Brak deklaracji empirycznej równoważności lub transferu.

| R21 ID | Końce r1 | Wspólny rdzeń, rzeczywista zmiana, funkcja i ryzyko |
|---|---|---|
| REL-T21-21-01-BF | T21-B01 ↔ T21-F01 | Rdzeń: zgodność z rzeczywistą, uzgodnioną potrzebą; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Z nazwy przechodzi do rozpoznania warunku, niewystarczającej przesłanki i granicy wobec wykonalności. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-01. |
| REL-T21-21-01-BG | T21-B01 ↔ T21-G01 | Rdzeń: zgodność z rzeczywistą, uzgodnioną potrzebą; rozpoznanie bazowe → wybór dwóch poprawnych tez. Wymaga wyboru dwóch poprawnych tez i odrzucenia zgody pozornej; nie jest tylko zmianą liter klucza. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-01. |
| REL-T21-21-01-BD | T21-B01 ↔ T21-D01 | Rdzeń: zgodność z rzeczywistą, uzgodnioną potrzebą; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Kierunek EN→wyjaśnienie zamiast opis→nazwa; konkurencyjne cele kontroli, nadal bliska rodzina definicyjna. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-01. |
| REL-T21-21-01-FG | T21-F01 ↔ T21-G01 | Rdzeń: zgodność z rzeczywistą, uzgodnioną potrzebą; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Wymaga wyboru dwóch poprawnych tez i odrzucenia zgody pozornej; nie jest tylko zmianą liter klucza. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-01. |
| REL-T21-21-01-FD | T21-F01 ↔ T21-D01 | Rdzeń: zgodność z rzeczywistą, uzgodnioną potrzebą; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Kierunek EN→wyjaśnienie zamiast opis→nazwa; konkurencyjne cele kontroli, nadal bliska rodzina definicyjna. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-01. |
| REL-T21-21-01-GD | T21-G01 ↔ T21-D01 | Rdzeń: zgodność z rzeczywistą, uzgodnioną potrzebą; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Kierunek EN→wyjaśnienie zamiast opis→nazwa; konkurencyjne cele kontroli, nadal bliska rodzina definicyjna. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-01. |
| REL-T21-21-02-BF | T21-B02 ↔ T21-F02 | Rdzeń: niezbędny składnik specyfikacji; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Odróżnia konieczność od terminu i łatwości realizacji; kontroluje sens, nie powtórzenie etykiety. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-02. |
| REL-T21-21-02-BG | T21-B02 ↔ T21-G02 | Rdzeń: niezbędny składnik specyfikacji; rozpoznanie bazowe → wybór dwóch poprawnych tez. Odrzuca pozorny dowód z samego zapisania oraz utożsamienie z inną cechą; zmienia cel selekcji. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-02. |
| REL-T21-21-02-BD | T21-B02 ↔ T21-D02 | Rdzeń: niezbędny składnik specyfikacji; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje znaczenie wśród opisów różnych jednostek i celów oceny; ta sama rodzina, nie dowód nowego transferu. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-02. |
| REL-T21-21-02-FG | T21-F02 ↔ T21-G02 | Rdzeń: niezbędny składnik specyfikacji; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Odrzuca pozorny dowód z samego zapisania oraz utożsamienie z inną cechą; zmienia cel selekcji. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-02. |
| REL-T21-21-02-FD | T21-F02 ↔ T21-D02 | Rdzeń: niezbędny składnik specyfikacji; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje znaczenie wśród opisów różnych jednostek i celów oceny; ta sama rodzina, nie dowód nowego transferu. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-02. |
| REL-T21-21-02-GD | T21-G02 ↔ T21-D02 | Rdzeń: niezbędny składnik specyfikacji; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje znaczenie wśród opisów różnych jednostek i celów oceny; ta sama rodzina, nie dowód nowego transferu. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-02. |
| REL-T21-21-03-BF | T21-B03 ↔ T21-F03 | Rdzeń: różne interpretacje zapisu; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Rozpoznaje granice skrótów długość/liczba, zamiast ponownie nazywać kryterium. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-03. |
| REL-T21-21-03-BG | T21-B03 ↔ T21-G03 | Rdzeń: różne interpretacje zapisu; rozpoznanie bazowe → wybór dwóch poprawnych tez. Porównuje zakres znaczenia i granicę wobec zrozumiałości; nadal odtwórcze rozpoznanie wcześniej nauczonych sensów. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-03. |
| REL-T21-21-03-BD | T21-B03 ↔ T21-D03 | Rdzeń: różne interpretacje zapisu; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje definicję wobec kosztu, kompletności i stanu realizacji; konserwatywnie wspólna rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-03. |
| REL-T21-21-03-FG | T21-F03 ↔ T21-G03 | Rdzeń: różne interpretacje zapisu; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Porównuje zakres znaczenia i granicę wobec zrozumiałości; nadal odtwórcze rozpoznanie wcześniej nauczonych sensów. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-03. |
| REL-T21-21-03-FD | T21-F03 ↔ T21-D03 | Rdzeń: różne interpretacje zapisu; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje definicję wobec kosztu, kompletności i stanu realizacji; konserwatywnie wspólna rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-03. |
| REL-T21-21-03-GD | T21-G03 ↔ T21-D03 | Rdzeń: różne interpretacje zapisu; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje definicję wobec kosztu, kompletności i stanu realizacji; konserwatywnie wspólna rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-03. |
| REL-T21-21-04-BF | T21-B04 ↔ T21-F04 | Rdzeń: samowystarczalny opis jednego wymagania; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Kontroluje dwa nieuprawnione wnioski: przejście do całego zbioru i kompletność z samego ID. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-04. |
| REL-T21-21-04-BG | T21-B04 ↔ T21-G04 | Rdzeń: samowystarczalny opis jednego wymagania; rozpoznanie bazowe → wybór dwóch poprawnych tez. Wybiera sens pojedynczy oraz granicę sensu zbiorowego, bez rozstrzygania spornego zakresu odwołań. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-04. |
| REL-T21-21-04-BD | T21-B04 ↔ T21-D04 | Rdzeń: samowystarczalny opis jednego wymagania; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Odróżnia samowystarczalność od relacji, kopii i rozpowszechnienia; nowy zestaw granic w tej samej rodzinie. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-04. |
| REL-T21-21-04-FG | T21-F04 ↔ T21-G04 | Rdzeń: samowystarczalny opis jednego wymagania; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Wybiera sens pojedynczy oraz granicę sensu zbiorowego, bez rozstrzygania spornego zakresu odwołań. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-04. |
| REL-T21-21-04-FD | T21-F04 ↔ T21-D04 | Rdzeń: samowystarczalny opis jednego wymagania; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Odróżnia samowystarczalność od relacji, kopii i rozpowszechnienia; nowy zestaw granic w tej samej rodzinie. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-04. |
| REL-T21-21-04-GD | T21-G04 ↔ T21-D04 | Rdzeń: samowystarczalny opis jednego wymagania; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Odróżnia samowystarczalność od relacji, kopii i rozpowszechnienia; nowy zestaw granic w tej samej rodzinie. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-04. |
| REL-T21-21-05-BF | T21-B05 ↔ T21-F05 | Rdzeń: pojmowalność dla zamierzonych odbiorców; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Sprawdza właściwego odbiorcę i granicę zakazu terminów specjalistycznych. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-05. |
| REL-T21-21-05-BG | T21-B05 ↔ T21-G05 | Rdzeń: pojmowalność dla zamierzonych odbiorców; rozpoznanie bazowe → wybór dwóch poprawnych tez. Rozdziela cechę treści, cechę systemu i jednoznaczność; nie wymaga interpretacji nowego przypadku. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-05. |
| REL-T21-21-05-BD | T21-B05 ↔ T21-D05 | Rdzeń: pojmowalność dla zamierzonych odbiorców; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Wybiera opis względem odbiorców spośród reguł dystrybucji, języka i wykonania; ta sama rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-05. |
| REL-T21-21-05-FG | T21-F05 ↔ T21-G05 | Rdzeń: pojmowalność dla zamierzonych odbiorców; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Rozdziela cechę treści, cechę systemu i jednoznaczność; nie wymaga interpretacji nowego przypadku. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-05. |
| REL-T21-21-05-FD | T21-F05 ↔ T21-D05 | Rdzeń: pojmowalność dla zamierzonych odbiorców; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Wybiera opis względem odbiorców spośród reguł dystrybucji, języka i wykonania; ta sama rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-05. |
| REL-T21-21-05-GD | T21-G05 ↔ T21-D05 | Rdzeń: pojmowalność dla zamierzonych odbiorców; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Wybiera opis względem odbiorców spośród reguł dystrybucji, języka i wykonania; ta sama rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-05. |
| REL-T21-21-06-BF | T21-B06 ↔ T21-F06 | Rdzeń: możliwość sprawdzenia spełnienia w systemie; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Rozpoznaje różnicę zdolność/wynik oraz kilka dopuszczalnych dróg sprawdzenia. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-06. |
| REL-T21-21-06-BG | T21-B06 ↔ T21-G06 | Rdzeń: możliwość sprawdzenia spełnienia w systemie; rozpoznanie bazowe → wybór dwóch poprawnych tez. Odrzuca równoważność liczba=sprawdzalność, zachowując różne procedury; nie wymaga zaprojektowania testu. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-06. |
| REL-T21-21-06-BD | T21-B06 ↔ T21-D06 | Rdzeń: możliwość sprawdzenia spełnienia w systemie; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Wybiera znaczenie wraz z metodami, przeciwstawione wynikowi, adekwatności i kompletności; wspólna rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-06. |
| REL-T21-21-06-FG | T21-F06 ↔ T21-G06 | Rdzeń: możliwość sprawdzenia spełnienia w systemie; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Odrzuca równoważność liczba=sprawdzalność, zachowując różne procedury; nie wymaga zaprojektowania testu. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-06. |
| REL-T21-21-06-FD | T21-F06 ↔ T21-D06 | Rdzeń: możliwość sprawdzenia spełnienia w systemie; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Wybiera znaczenie wraz z metodami, przeciwstawione wynikowi, adekwatności i kompletności; wspólna rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-06. |
| REL-T21-21-06-GD | T21-G06 ↔ T21-D06 | Rdzeń: możliwość sprawdzenia spełnienia w systemie; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Wybiera znaczenie wraz z metodami, przeciwstawione wynikowi, adekwatności i kompletności; wspólna rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-06. |
| REL-T21-21-07-BF | T21-B07 ↔ T21-F07 | Rdzeń: szczególna waga adekwatności i zrozumiałości; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Kontroluje znaczenie wyróżnienia, nie samo pamiętanie nazw. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-07. |
| REL-T21-21-07-BG | T21-B07 ↔ T21-G07 | Rdzeń: szczególna waga adekwatności i zrozumiałości; rozpoznanie bazowe → wybór dwóch poprawnych tez. Łączy pamięć pary i granicę kompensowania; nie jest audytem nowego wymagania. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-07. |
| REL-T21-21-07-BD | T21-B07 ↔ T21-D07 | Rdzeń: szczególna waga adekwatności i zrozumiałości; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Wybiera pełne podsumowanie źródłowego priorytetu wobec konkurencyjnych meta-reguł, nadal ta sama rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-07. |
| REL-T21-21-07-FG | T21-F07 ↔ T21-G07 | Rdzeń: szczególna waga adekwatności i zrozumiałości; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Łączy pamięć pary i granicę kompensowania; nie jest audytem nowego wymagania. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-07. |
| REL-T21-21-07-FD | T21-F07 ↔ T21-D07 | Rdzeń: szczególna waga adekwatności i zrozumiałości; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Wybiera pełne podsumowanie źródłowego priorytetu wobec konkurencyjnych meta-reguł, nadal ta sama rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-07. |
| REL-T21-21-07-GD | T21-G07 ↔ T21-D07 | Rdzeń: szczególna waga adekwatności i zrozumiałości; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Wybiera pełne podsumowanie źródłowego priorytetu wobec konkurencyjnych meta-reguł, nadal ta sama rodzina. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-07. |
| REL-T21-21-08-BF | T21-B08 ↔ T21-F08 | Rdzeń: zalecana lista i stopień jakości względem wartości; rozpoznanie bazowe → trzy rozstrzygnięcia prawda/fałsz. Sprawdza kierunek zależności i granicę dowolnego pomijania jakości. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-08. |
| REL-T21-21-08-BG | T21-B08 ↔ T21-G08 | Rdzeń: zalecana lista i stopień jakości względem wartości; rozpoznanie bazowe → wybór dwóch poprawnych tez. Rozpoznaje zależność i odrzuca wymyśloną metrykę oraz zero-jakości; nadal L1. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-08. |
| REL-T21-21-08-BD | T21-B08 ↔ T21-D08 | Rdzeń: zalecana lista i stopień jakości względem wartości; rozpoznanie bazowe → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje podsumowanie statusu i warunku wobec progu i ograniczenia do typu; wspólna rodzina, nie chroniona rezerwa. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-08. |
| REL-T21-21-08-FG | T21-F08 ↔ T21-G08 | Rdzeń: zalecana lista i stopień jakości względem wartości; trzy rozstrzygnięcia prawda/fałsz → wybór dwóch poprawnych tez. Rozpoznaje zależność i odrzuca wymyśloną metrykę oraz zero-jakości; nadal L1. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-08. |
| REL-T21-21-08-FD | T21-F08 ↔ T21-D08 | Rdzeń: zalecana lista i stopień jakości względem wartości; trzy rozstrzygnięcia prawda/fałsz → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje podsumowanie statusu i warunku wobec progu i ograniczenia do typu; wspólna rodzina, nie chroniona rezerwa. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-08. |
| REL-T21-21-08-GD | T21-G08 ↔ T21-D08 | Rdzeń: zalecana lista i stopień jakości względem wartości; wybór dwóch poprawnych tez → wybór objaśnienia z konkurencyjnych notatek. Rozpoznaje podsumowanie statusu i warunku wobec progu i ograniczenia do typu; wspólna rodzina, nie chroniona rezerwa. Wskazówki i reguła pozostają wspólne; cel: dalsza praktyka tego ZAK, bez niezależnego transferu; proponowana wspólna FAM-T21-08. |

#### Porównanie z istniejącym C i bliskość między tematami

Wszystkie poniższe pary mają osobny R21, r1 końców z C03 v0.2 i T21 v0.1, proweniencję własnej analizy odczytanego C03-P/C04 oraz status do review. Główna różnica: C-P mierzy rodzaj oczekiwania na L2, T21 — jakość wymagania na L1; O03 jest wyraźnie pomocniczym L2. Wspólny termin „quality” nie scala automatycznie rodzin. Przypadki T21 nie kopiują sytuacji, komponentów ani zestawów odpowiedzi z C-P.

| R21 ID | Końce r1 | Analiza rdzenia, różnicy i kontaktu |
|---|---|---|
| REL-T21-21-CP1 | T21-O03 ↔ C-P-B01 | C-P-B01 wybiera dwa quality w liście funkcji, ograniczenia i cech. O03 odrzuca zwolnienie wymagań funkcjonalnych z kontroli jakości zapisu. Wspólny most terminologiczny, odmienne rozstrzygnięcie; roboczo odrębne rodziny, ale O03/CMP01 mogą przygotować słownik klasyfikacji |
| REL-T21-21-CP2 | T21-O03 ↔ C-P-F01 | C-P-F01 wybiera pary typ/powód, O03 wymaga otwartego wyjaśnienia osi jakości i typu. Wspólna terminologia nie daje równoważności. Ujawnienie CMP01 jest kontaktem z częścią reguły C-P/KRY-P01, a nie dowodem jej wykonania |
| REL-T21-21-CP3 | T21-D08 ↔ C-P-D01 | C-P-D01 klasyfikuje jeden limit pamięci wobec konkurencyjnych reguł; D08 rozpoznaje status listy i wartość. Dystraktor D08-d przywołuje różnicę typ/jakość. Inny rdzeń i główny cel; pełne rationale D08-d jest kontaktem z pojęciem quality requirement, nie z rozwiązaniem limitu pamięci |
| REL-T21-21-ILLP | T21-O03 ↔ ILL-P01 | Historyczna ilustracja B03-P wybiera wymagania jakościowe, nie jakość ich zapisu. O03 objaśnia inną oś. Nie scalać rodzin ani nie przenosić statusu review B do T21; wcześniejsza znajomość terminologii pozostaje znana |
| REL-T21-21-O1 | T21-O01 ↔ T21-B01 | Otwarte odtworzenie sześciu znaczeń obejmuje definicyjny rdzeń B01. Osobne grupowanie zbiorcze nie usuwa bliskości względem FAM-T21-01; analogiczne powiązania z pozostałymi zakresami zapisano niżej |
| REL-T21-21-O2 | T21-O01 ↔ T21-B02 | Wzorzec O01 ujawnia necessity i pomaga w B02; nowy format nie usuwa wspólnego znaczeniowego rdzenia |
| REL-T21-21-O3 | T21-O01 ↔ T21-B03 | Wzorzec O01 ujawnia unambiguity i pomaga w B03; traktować jako kontakt i bliskość definicyjną |
| REL-T21-21-O4 | T21-O01 ↔ T21-B04 | Wzorzec O01 ujawnia sens pojedynczej kompletności; nie uznawać B04 po tym ujawnieniu za nieprzygotowaną kontrolę tego sensu |
| REL-T21-21-O5 | T21-O01 ↔ T21-B05 | Wzorzec O01 ujawnia warunek zamierzonych odbiorców; B05 zachowuje ten rdzeń mimo zamkniętej odpowiedzi |
| REL-T21-21-O6 | T21-O01 ↔ T21-B06 | Wzorzec O01 ujawnia możliwość sprawdzenia spełnienia; osobny ID rodziny zbiorczej nie zapewnia niezależności B06 |
| REL-T21-21-O7 | T21-O02 ↔ T21-B07 | Odtworzenie pary i wybór pary wykorzystują ten sam zapamiętywalny fakt; jawna bliskość FAM-T21-07 |
| REL-T21-21-O8 | T21-O02 ↔ T21-B08 | Otwarte odtworzenie zależności wartości i wybór tezy powtarzają rdzeń FAM-T21-08 |
| REL-T21-21-O9 | T21-O04 ↔ T21-B01 | O04 stosuje pojęcie do potwierdzenia dla odbiorcy, B01 rozpoznaje nazwę. O04 z rozwiązaniem ujawnia regułę adequacy; nie oznacza, że zamknięty B01 mierzy wykonanie L2 z O04 |
| REL-T21-21-O10 | T21-O04 ↔ T21-B06 | O04 z rozwiązaniem rozdziela możliwość kontroli i jej wynik; reguła pomaga w B06. Inny poziom czynności nie usuwa kontaktu z sensem verifiability |
| REL-T21-21-O11 | T21-O04 ↔ T21-B07 | Rozwiązanie O04 pokazuje granicę kompensowania adekwatności. Wspiera regułę pary, ale nie zastępuje jej jawnego rozpoznania w B07 |

Nie dostarczono gotowego banku T22/T10. Nie przeprowadzono więc deduplikacji z niewidocznymi zadaniami tych tematów. Integrator musi sprawdzić ją po ich powstaniu. Odczytane historyczne B03-P i aktualne C-P są znane punkty porównania, a nie dowód oryginalności względem wszystkich istniejących banków.

### 8.3. Rejestr konkretnych relacji K3

**Metadane wspólne każdej instancji poniżej:** własne ID i r1; końce mają podane rewizje albo dokładny profil źródła; język PL; autor AI T21; status „autorsko sprawdzone / oczekuje odrębnego review”. Dla mapowania treści proweniencja to INTERPRETATION autora na podstawie wskazanej reguły i B01-05. Dla R01 źródłem struktury jest wykaz EO; dla R08/R09/R19/R20 — decyzja redakcyjna stosująca B. Warunki ujawnienia: R08/R09 i edukacyjne końce nie są widoczne przed właściwą granicą feedbacku. Te metadane są częścią każdej wymienionej instancji, a nie domniemaniem akceptacji.

Role końców CON-T21-01–06 są zdefiniowane przez odpowiednie noty i wiersze terminów. CON-T21-QUALITY-OF-REQ@r1 oznacza ocenianą jakość uchwycenia i opisu wymagania według §3.8, nie typ wymagania; jego objaśnieniem jest CMP01. Zewnętrzne końce „sens quality requirement z C-P@r1” i „completeness-of-set@Glossary2.2.0” wskazują istniejący sens w C-P/REG-P1 i sens 2 hasła completeness, bez tworzenia konkurencyjnych definicji.

#### Zakres, etykiety i wsparcie

| ID instancji | R, końce i kierunek | Warunek, zdanie sensu, cel i podstawa |
|---|---|---|
| REL-T21-01 | R01: EO3.8.1@Syllabus3.3.0 → EU3@Syllabus3.3.0 | Ten sam profil EN/PL: EO3.8.1 należy do EU3, co umiejscawia zakres T21; SEN s.19 / SPL s.20, bez dziedziczenia L3 |
| REL-T21-02-01 | R02: KRY-T21-01@r1 → EO3.8.1@3.3.0 | Rozpoznanie sześciu znaczeń operacjonalizuje listę dla jednego wymagania; CL00–06; cel: ograniczony pomiar L1 |
| REL-T21-02-02 | R02: KRY-T21-02@r1 → EO3.8.1@3.3.0 | Rozpoznanie szczególnej pary i warunku wartości operacjonalizuje właściwą część §3.8; CL07/08; nie pełna walidacja potrzeb |
| REL-T21-02-03 | R02: KRY-T21-03@r1 → EO3.8.1@3.3.0 | Znajomość statusu listy i stopnia spełnienia względem wartości operacjonalizuje warunek §3.8; CL08; brak liczbowego progu |
| REL-T21-03-01-PL; REL-T21-03-01-EN | R03: TERM-T21-01-PL@r1 → CON-T21-01@r1; TERM-T21-01-EN@r1 → ten sam CON | Oficjalna para z §3.2 oznacza jeden sens, nie dwa pojęcia; CL01, Glossary PL/EN i SPL §3.8; cel: wspólne odnajdywanie znaczenia |
| REL-T21-04-01 | R04: rdzeń N-T21-01@r1 → CON-T21-01@r1 | Autorska parafraza określa sens zgodność z rzeczywistą, uzgodnioną potrzebą; CL01; cel: objaśnienie z jawnym statusem nieoficjalnej definicji |
| REL-T21-05-01 | R05: N-T21-01@r1 → KRY-T21-01@r1, zakres ZAK-T21-01 | Nota wyjaśnia zgodność z rzeczywistą, uzgodnioną potrzebą i wspiera naukę tego zakresu; CL01; lektura nie jest pomiarem |
| REL-T21-10-01 | R10: N-T21-01@r1 → REG-T21-01@r1 | Nota rozwija znaczenie i granice właściwej reguły zgodność z rzeczywistą, uzgodnioną potrzebą; cel: celowany powrót do wiedzy; CL01 |
| REL-T21-12-01 | R12: EX-T21-01@r1 → REG-T21-01@r1 | Jawne przesłanki przykładu ilustrują zgodność z rzeczywistą, uzgodnioną potrzebą; cel: zobaczyć regułę bez dopisywania faktów; CL01 i autorskie dane §4 |
| REL-T21-13-01 | R13: CE-T21-01@r1 → nadmierne uogólnienie nazwane w CE-T21-01@r1 | Kontrprzykład obala dokładnie wskazaną błędną regułę przez jawne dane z §4; cel: granica uogólnienia, bez diagnozy osoby; CL01 |
| REL-T21-18-01 | R18: REM-T21-01@r1 → KRY-T21-01@r1, ZAK-T21-01 | Przy błędzie w tym zakresie korekta przywraca regułę zgodność z rzeczywistą, uzgodnioną potrzebą; cel: celowana naprawa bez diagnozy; CL01 i §8.1 |
| REL-T21-19-F01 | R19: T21-F01@r1 → REM-T21-01@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G01 | R19: T21-G01@r1 → REM-T21-01@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-03-02-PL; REL-T21-03-02-EN | R03: TERM-T21-02-PL@r1 → CON-T21-02@r1; TERM-T21-02-EN@r1 → ten sam CON | Oficjalna para z §3.2 oznacza jeden sens, nie dwa pojęcia; CL02, Glossary PL/EN i SPL §3.8; cel: wspólne odnajdywanie znaczenia |
| REL-T21-04-02 | R04: rdzeń N-T21-02@r1 → CON-T21-02@r1 | Autorska parafraza określa sens niezbędny składnik specyfikacji; CL02; cel: objaśnienie z jawnym statusem nieoficjalnej definicji |
| REL-T21-05-02 | R05: N-T21-02@r1 → KRY-T21-01@r1, zakres ZAK-T21-02 | Nota wyjaśnia niezbędny składnik specyfikacji i wspiera naukę tego zakresu; CL02; lektura nie jest pomiarem |
| REL-T21-10-02 | R10: N-T21-02@r1 → REG-T21-02@r1 | Nota rozwija znaczenie i granice właściwej reguły niezbędny składnik specyfikacji; cel: celowany powrót do wiedzy; CL02 |
| REL-T21-12-02 | R12: EX-T21-02@r1 → REG-T21-02@r1 | Jawne przesłanki przykładu ilustrują niezbędny składnik specyfikacji; cel: zobaczyć regułę bez dopisywania faktów; CL02 i autorskie dane §4 |
| REL-T21-13-02 | R13: CE-T21-02@r1 → nadmierne uogólnienie nazwane w CE-T21-02@r1 | Kontrprzykład obala dokładnie wskazaną błędną regułę przez jawne dane z §4; cel: granica uogólnienia, bez diagnozy osoby; CL02 |
| REL-T21-18-02 | R18: REM-T21-02@r1 → KRY-T21-01@r1, ZAK-T21-02 | Przy błędzie w tym zakresie korekta przywraca regułę niezbędny składnik specyfikacji; cel: celowana naprawa bez diagnozy; CL02 i §8.1 |
| REL-T21-19-F02 | R19: T21-F02@r1 → REM-T21-02@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G02 | R19: T21-G02@r1 → REM-T21-02@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-03-03-PL; REL-T21-03-03-EN | R03: TERM-T21-03-PL@r1 → CON-T21-03@r1; TERM-T21-03-EN@r1 → ten sam CON | Oficjalna para z §3.2 oznacza jeden sens, nie dwa pojęcia; CL03, Glossary PL/EN i SPL §3.8; cel: wspólne odnajdywanie znaczenia |
| REL-T21-04-03 | R04: rdzeń N-T21-03@r1 → CON-T21-03@r1 | Autorska parafraza określa sens różne interpretacje zapisu; CL03; cel: objaśnienie z jawnym statusem nieoficjalnej definicji |
| REL-T21-05-03 | R05: N-T21-03@r1 → KRY-T21-01@r1, zakres ZAK-T21-03 | Nota wyjaśnia różne interpretacje zapisu i wspiera naukę tego zakresu; CL03; lektura nie jest pomiarem |
| REL-T21-10-03 | R10: N-T21-03@r1 → REG-T21-03@r1 | Nota rozwija znaczenie i granice właściwej reguły różne interpretacje zapisu; cel: celowany powrót do wiedzy; CL03 |
| REL-T21-12-03 | R12: EX-T21-03@r1 → REG-T21-03@r1 | Jawne przesłanki przykładu ilustrują różne interpretacje zapisu; cel: zobaczyć regułę bez dopisywania faktów; CL03 i autorskie dane §4 |
| REL-T21-13-03 | R13: CE-T21-03@r1 → nadmierne uogólnienie nazwane w CE-T21-03@r1 | Kontrprzykład obala dokładnie wskazaną błędną regułę przez jawne dane z §4; cel: granica uogólnienia, bez diagnozy osoby; CL03 |
| REL-T21-18-03 | R18: REM-T21-03@r1 → KRY-T21-01@r1, ZAK-T21-03 | Przy błędzie w tym zakresie korekta przywraca regułę różne interpretacje zapisu; cel: celowana naprawa bez diagnozy; CL03 i §8.1 |
| REL-T21-19-F03 | R19: T21-F03@r1 → REM-T21-03@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G03 | R19: T21-G03@r1 → REM-T21-03@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-03-04-PL; REL-T21-03-04-EN | R03: TERM-T21-04-PL@r1 → CON-T21-04@r1; TERM-T21-04-EN@r1 → ten sam CON | Oficjalna para z §3.2 oznacza jeden sens, nie dwa pojęcia; CL04, Glossary PL/EN i SPL §3.8; cel: wspólne odnajdywanie znaczenia |
| REL-T21-04-04 | R04: rdzeń N-T21-04@r1 → CON-T21-04@r1 | Autorska parafraza określa sens samowystarczalny opis jednego wymagania; CL04; cel: objaśnienie z jawnym statusem nieoficjalnej definicji |
| REL-T21-05-04 | R05: N-T21-04@r1 → KRY-T21-01@r1, zakres ZAK-T21-04 | Nota wyjaśnia samowystarczalny opis jednego wymagania i wspiera naukę tego zakresu; CL04; lektura nie jest pomiarem |
| REL-T21-10-04 | R10: N-T21-04@r1 → REG-T21-04@r1 | Nota rozwija znaczenie i granice właściwej reguły samowystarczalny opis jednego wymagania; cel: celowany powrót do wiedzy; CL04 |
| REL-T21-12-04 | R12: EX-T21-04@r1 → REG-T21-04@r1 | Jawne przesłanki przykładu ilustrują samowystarczalny opis jednego wymagania; cel: zobaczyć regułę bez dopisywania faktów; CL04 i autorskie dane §4 |
| REL-T21-13-04 | R13: CE-T21-04@r1 → nadmierne uogólnienie nazwane w CE-T21-04@r1 | Kontrprzykład obala dokładnie wskazaną błędną regułę przez jawne dane z §4; cel: granica uogólnienia, bez diagnozy osoby; CL04 |
| REL-T21-18-04 | R18: REM-T21-04@r1 → KRY-T21-01@r1, ZAK-T21-04 | Przy błędzie w tym zakresie korekta przywraca regułę samowystarczalny opis jednego wymagania; cel: celowana naprawa bez diagnozy; CL04 i §8.1 |
| REL-T21-19-F04 | R19: T21-F04@r1 → REM-T21-04@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G04 | R19: T21-G04@r1 → REM-T21-04@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-03-05-PL; REL-T21-03-05-EN | R03: TERM-T21-05-PL@r1 → CON-T21-05@r1; TERM-T21-05-EN@r1 → ten sam CON | Oficjalna para z §3.2 oznacza jeden sens, nie dwa pojęcia; CL05, Glossary PL/EN i SPL §3.8; cel: wspólne odnajdywanie znaczenia |
| REL-T21-04-05 | R04: rdzeń N-T21-05@r1 → CON-T21-05@r1 | Autorska parafraza określa sens pojmowalność dla zamierzonych odbiorców; CL05; cel: objaśnienie z jawnym statusem nieoficjalnej definicji |
| REL-T21-05-05 | R05: N-T21-05@r1 → KRY-T21-01@r1, zakres ZAK-T21-05 | Nota wyjaśnia pojmowalność dla zamierzonych odbiorców i wspiera naukę tego zakresu; CL05; lektura nie jest pomiarem |
| REL-T21-10-05 | R10: N-T21-05@r1 → REG-T21-05@r1 | Nota rozwija znaczenie i granice właściwej reguły pojmowalność dla zamierzonych odbiorców; cel: celowany powrót do wiedzy; CL05 |
| REL-T21-12-05 | R12: EX-T21-05@r1 → REG-T21-05@r1 | Jawne przesłanki przykładu ilustrują pojmowalność dla zamierzonych odbiorców; cel: zobaczyć regułę bez dopisywania faktów; CL05 i autorskie dane §4 |
| REL-T21-13-05 | R13: CE-T21-05@r1 → nadmierne uogólnienie nazwane w CE-T21-05@r1 | Kontrprzykład obala dokładnie wskazaną błędną regułę przez jawne dane z §4; cel: granica uogólnienia, bez diagnozy osoby; CL05 |
| REL-T21-18-05 | R18: REM-T21-05@r1 → KRY-T21-01@r1, ZAK-T21-05 | Przy błędzie w tym zakresie korekta przywraca regułę pojmowalność dla zamierzonych odbiorców; cel: celowana naprawa bez diagnozy; CL05 i §8.1 |
| REL-T21-19-F05 | R19: T21-F05@r1 → REM-T21-05@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G05 | R19: T21-G05@r1 → REM-T21-05@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-03-06-PL; REL-T21-03-06-EN | R03: TERM-T21-06-PL@r1 → CON-T21-06@r1; TERM-T21-06-EN@r1 → ten sam CON | Oficjalna para z §3.2 oznacza jeden sens, nie dwa pojęcia; CL06, Glossary PL/EN i SPL §3.8; cel: wspólne odnajdywanie znaczenia |
| REL-T21-04-06 | R04: rdzeń N-T21-06@r1 → CON-T21-06@r1 | Autorska parafraza określa sens możliwość sprawdzenia spełnienia w systemie; CL06; cel: objaśnienie z jawnym statusem nieoficjalnej definicji |
| REL-T21-05-06 | R05: N-T21-06@r1 → KRY-T21-01@r1, zakres ZAK-T21-06 | Nota wyjaśnia możliwość sprawdzenia spełnienia w systemie i wspiera naukę tego zakresu; CL06; lektura nie jest pomiarem |
| REL-T21-10-06 | R10: N-T21-06@r1 → REG-T21-06@r1 | Nota rozwija znaczenie i granice właściwej reguły możliwość sprawdzenia spełnienia w systemie; cel: celowany powrót do wiedzy; CL06 |
| REL-T21-12-06 | R12: EX-T21-06@r1 → REG-T21-06@r1 | Jawne przesłanki przykładu ilustrują możliwość sprawdzenia spełnienia w systemie; cel: zobaczyć regułę bez dopisywania faktów; CL06 i autorskie dane §4 |
| REL-T21-13-06 | R13: CE-T21-06@r1 → nadmierne uogólnienie nazwane w CE-T21-06@r1 | Kontrprzykład obala dokładnie wskazaną błędną regułę przez jawne dane z §4; cel: granica uogólnienia, bez diagnozy osoby; CL06 |
| REL-T21-18-06 | R18: REM-T21-06@r1 → KRY-T21-01@r1, ZAK-T21-06 | Przy błędzie w tym zakresie korekta przywraca regułę możliwość sprawdzenia spełnienia w systemie; cel: celowana naprawa bez diagnozy; CL06 i §8.1 |
| REL-T21-19-F06 | R19: T21-F06@r1 → REM-T21-06@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G06 | R19: T21-G06@r1 → REM-T21-06@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-05-07 | R05: N-T21-07@r1 → KRY-T21-02@r1, zakres ZAK-T21-07 | Nota wyjaśnia szczególna waga adekwatności i zrozumiałości i wspiera naukę tego zakresu; CL07; lektura nie jest pomiarem |
| REL-T21-10-07 | R10: N-T21-07@r1 → REG-T21-07@r1 | Nota rozwija znaczenie i granice właściwej reguły szczególna waga adekwatności i zrozumiałości; cel: celowany powrót do wiedzy; CL07 |
| REL-T21-18-07 | R18: REM-T21-07@r1 → KRY-T21-02@r1, ZAK-T21-07 | Przy błędzie w tym zakresie korekta przywraca regułę szczególna waga adekwatności i zrozumiałości; cel: celowana naprawa bez diagnozy; CL07 i §8.1 |
| REL-T21-19-F07 | R19: T21-F07@r1 → REM-T21-07@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G07 | R19: T21-G07@r1 → REM-T21-07@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-05-08 | R05: N-T21-08@r1 → KRY-T21-03@r1, zakres ZAK-T21-08 | Nota wyjaśnia zalecana lista i stopień jakości względem wartości i wspiera naukę tego zakresu; CL08; lektura nie jest pomiarem |
| REL-T21-10-08 | R10: N-T21-08@r1 → REG-T21-08@r1 | Nota rozwija znaczenie i granice właściwej reguły zalecana lista i stopień jakości względem wartości; cel: celowany powrót do wiedzy; CL08 |
| REL-T21-18-08 | R18: REM-T21-08@r1 → KRY-T21-03@r1, ZAK-T21-08 | Przy błędzie w tym zakresie korekta przywraca regułę zalecana lista i stopień jakości względem wartości; cel: celowana naprawa bez diagnozy; CL08 i §8.1 |
| REL-T21-19-F08 | R19: T21-F08@r1 → REM-T21-08@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-19-G08 | R19: T21-G08@r1 → REM-T21-08@r1 | Zadanie sprawdza po korekcie ten sam zakres w zmienionej czynności opisanej przy itemie; cel: wykonanie po instrukcji, bez deklaracji retencji; §7/8.1 |
| REL-T21-11-01 | R11: CMP-T21-01@r1 → CON-T21-QUALITY-OF-REQ@r1 i sens quality requirement z C-P@r1 | Oś jakość zapisu/typ oczekiwania odróżnia dwa sensy „quality”; oba przypadki w §5; CL09, cel: usunąć pomylenie zakresów |
| REL-T21-11-02 | R11: CMP-T21-02@r1 → CON-T21-04@r1 i completeness-of-set@Glossary2.2.0 | Oś pojedynczy opis/zbiór rozdziela dwa sensy kompletności; CL04 i dwa wiersze §5; cel: nie przypisać całego T22 |
| REL-T21-11-03 | R11: CMP-T21-03@r1 → CON-T21-01@r1 i CON-T21-06@r1 | Oś właściwa potrzeba/możliwość sprawdzenia odróżnia adekwatność i weryfikowalność; dwa jawne przypadki §5; CL01/06/07 |
| REL-T21-05-CMP1 | R05: CMP-T21-01@r1 → KRY-T21-01@r1 | Odróżnienie jakości zapisu od typu usuwa przeszkodę interpretacyjną całej szóstki; CL09; bez dowodu znajomości sześciu znaczeń |
| REL-T21-05-CMP2 | R05: CMP-T21-02@r1 → KRY-T21-01@r1, ZAK04 | Comparison uczy właściwej jednostki sensu complete; CL04; cel: zakres pojedynczy |
| REL-T21-05-CMP3 | R05: CMP-T21-03@r1 → KRY-T21-02@r1 oraz KRY-T21-01@r1, ZAK01/06 | Comparison uczy granicy kompensowania oraz osi potrzeba/sprawdzenie; CL01/06/07; SUPPORTS nie jest MEASURES |
| REL-T21-05-NEIGH1 | R05: CMP-T21-01@r1 → EO1.1.2@3.3.0, wkład częściowy | Dwa przykłady funkcji i jakości wspierają ograniczony trójpodział z C-P; nie pokrywają constraint ani pełnego EO; CL09 |
| REL-T21-05-NEIGH2 | R05: CMP-T21-02@r1 → EO3.8.2@3.3.0, tylko completeness zbioru | Drugi wiersz objaśnia jedną cechę zbioru; nie pokrywa wszystkich kryteriów T22; CL04 |
| REL-T21-07-01 | R07: INTRO-T21@r1 → Foundation Level@profil3.3.0 | Nazwa certyfikacji jest tłem celu, a nie pomiarem całego FL; §3.1; cel: orientacja |
| REL-T21-07-02 | R07: WS-T21-01@r1 → EO1.1.2@3.3.0 | Wzmianka o funkcjonalnym charakterze zachowania służy orientacji w przypadku; WS01 nie ocenia pełnego trójpodziału |
| REL-T21-14 | R14: PRE-T21 requirement/stakeholder@r1 → rozpoznanie znaczenia adequacy w KRY-T21-01@r1, ZAK01 | Tylko gdy niezrozumiałe są pojęcia potrzeby i interesariusza: podstawa jest potrzebna do odczytania definicji; sygnał i pominięcie §3.3; proweniencja dydaktyczna; bez review nie wymuszać |
| REL-T21-12-08 | R12: EX-T21-08@r1 → REG-T21-08@r1 | Opisana silniejsza staranność dla większej wartości ilustruje kierunek zależności; CL08; bez normy liczby przeglądów |

#### Zadania → kryteria i rodziny

W R06 warunkiem jest wykonanie i ocena zgodna z kluczem/rubryką. Relacja daje **okazję** obserwacji, a nie R25. W każdym zamkniętym itemie wszystkie opcje/wiersze odnoszą się do wskazanego ZAK; szczegółowe znaczenia kontrastowe w dystraktorach nie dostają osobnego pomiaru. R20 wskazuje jedynie proponowane grupowanie zapamiętywalnego rdzenia. Każdy wiersz tworzy dwie nazwane instancje z podanymi końcami; ich zdania sensu są jawne.

| R06 ID / R20 ID | Task r1 → kryterium r1 / rodzina r1 | Zdanie sensu i uzasadnienie czynności |
|---|---|---|
| REL-T21-06-B01; REL-T21-20-B01 | T21-B01 → KRY-T21-01, ZAK-T21-01; T21-B01 → FAM-T21-01 | T21-B01 pozwala obserwować L1: zgodność z rzeczywistą, uzgodnioną potrzebą; klucz w §7 odróżnia właściwy sens. T21-B01 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F01; REL-T21-20-F01 | T21-F01 → KRY-T21-01, ZAK-T21-01; T21-F01 → FAM-T21-01 | T21-F01 pozwala obserwować L1: zgodność z rzeczywistą, uzgodnioną potrzebą; klucz w §7 odróżnia właściwy sens. T21-F01 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G01; REL-T21-20-G01 | T21-G01 → KRY-T21-01, ZAK-T21-01; T21-G01 → FAM-T21-01 | T21-G01 pozwala obserwować L1: zgodność z rzeczywistą, uzgodnioną potrzebą; klucz w §7 odróżnia właściwy sens. T21-G01 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D01; REL-T21-20-D01 | T21-D01 → KRY-T21-01, ZAK-T21-01; T21-D01 → FAM-T21-01 | T21-D01 pozwala obserwować L1: zgodność z rzeczywistą, uzgodnioną potrzebą; klucz w §7 odróżnia właściwy sens. T21-D01 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B02; REL-T21-20-B02 | T21-B02 → KRY-T21-01, ZAK-T21-02; T21-B02 → FAM-T21-02 | T21-B02 pozwala obserwować L1: niezbędny składnik specyfikacji; klucz w §7 odróżnia właściwy sens. T21-B02 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F02; REL-T21-20-F02 | T21-F02 → KRY-T21-01, ZAK-T21-02; T21-F02 → FAM-T21-02 | T21-F02 pozwala obserwować L1: niezbędny składnik specyfikacji; klucz w §7 odróżnia właściwy sens. T21-F02 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G02; REL-T21-20-G02 | T21-G02 → KRY-T21-01, ZAK-T21-02; T21-G02 → FAM-T21-02 | T21-G02 pozwala obserwować L1: niezbędny składnik specyfikacji; klucz w §7 odróżnia właściwy sens. T21-G02 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D02; REL-T21-20-D02 | T21-D02 → KRY-T21-01, ZAK-T21-02; T21-D02 → FAM-T21-02 | T21-D02 pozwala obserwować L1: niezbędny składnik specyfikacji; klucz w §7 odróżnia właściwy sens. T21-D02 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B03; REL-T21-20-B03 | T21-B03 → KRY-T21-01, ZAK-T21-03; T21-B03 → FAM-T21-03 | T21-B03 pozwala obserwować L1: różne interpretacje zapisu; klucz w §7 odróżnia właściwy sens. T21-B03 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F03; REL-T21-20-F03 | T21-F03 → KRY-T21-01, ZAK-T21-03; T21-F03 → FAM-T21-03 | T21-F03 pozwala obserwować L1: różne interpretacje zapisu; klucz w §7 odróżnia właściwy sens. T21-F03 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G03; REL-T21-20-G03 | T21-G03 → KRY-T21-01, ZAK-T21-03; T21-G03 → FAM-T21-03 | T21-G03 pozwala obserwować L1: różne interpretacje zapisu; klucz w §7 odróżnia właściwy sens. T21-G03 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D03; REL-T21-20-D03 | T21-D03 → KRY-T21-01, ZAK-T21-03; T21-D03 → FAM-T21-03 | T21-D03 pozwala obserwować L1: różne interpretacje zapisu; klucz w §7 odróżnia właściwy sens. T21-D03 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B04; REL-T21-20-B04 | T21-B04 → KRY-T21-01, ZAK-T21-04; T21-B04 → FAM-T21-04 | T21-B04 pozwala obserwować L1: samowystarczalny opis jednego wymagania; klucz w §7 odróżnia właściwy sens. T21-B04 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F04; REL-T21-20-F04 | T21-F04 → KRY-T21-01, ZAK-T21-04; T21-F04 → FAM-T21-04 | T21-F04 pozwala obserwować L1: samowystarczalny opis jednego wymagania; klucz w §7 odróżnia właściwy sens. T21-F04 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G04; REL-T21-20-G04 | T21-G04 → KRY-T21-01, ZAK-T21-04; T21-G04 → FAM-T21-04 | T21-G04 pozwala obserwować L1: samowystarczalny opis jednego wymagania; klucz w §7 odróżnia właściwy sens. T21-G04 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D04; REL-T21-20-D04 | T21-D04 → KRY-T21-01, ZAK-T21-04; T21-D04 → FAM-T21-04 | T21-D04 pozwala obserwować L1: samowystarczalny opis jednego wymagania; klucz w §7 odróżnia właściwy sens. T21-D04 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B05; REL-T21-20-B05 | T21-B05 → KRY-T21-01, ZAK-T21-05; T21-B05 → FAM-T21-05 | T21-B05 pozwala obserwować L1: pojmowalność dla zamierzonych odbiorców; klucz w §7 odróżnia właściwy sens. T21-B05 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F05; REL-T21-20-F05 | T21-F05 → KRY-T21-01, ZAK-T21-05; T21-F05 → FAM-T21-05 | T21-F05 pozwala obserwować L1: pojmowalność dla zamierzonych odbiorców; klucz w §7 odróżnia właściwy sens. T21-F05 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G05; REL-T21-20-G05 | T21-G05 → KRY-T21-01, ZAK-T21-05; T21-G05 → FAM-T21-05 | T21-G05 pozwala obserwować L1: pojmowalność dla zamierzonych odbiorców; klucz w §7 odróżnia właściwy sens. T21-G05 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D05; REL-T21-20-D05 | T21-D05 → KRY-T21-01, ZAK-T21-05; T21-D05 → FAM-T21-05 | T21-D05 pozwala obserwować L1: pojmowalność dla zamierzonych odbiorców; klucz w §7 odróżnia właściwy sens. T21-D05 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B06; REL-T21-20-B06 | T21-B06 → KRY-T21-01, ZAK-T21-06; T21-B06 → FAM-T21-06 | T21-B06 pozwala obserwować L1: możliwość sprawdzenia spełnienia w systemie; klucz w §7 odróżnia właściwy sens. T21-B06 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F06; REL-T21-20-F06 | T21-F06 → KRY-T21-01, ZAK-T21-06; T21-F06 → FAM-T21-06 | T21-F06 pozwala obserwować L1: możliwość sprawdzenia spełnienia w systemie; klucz w §7 odróżnia właściwy sens. T21-F06 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G06; REL-T21-20-G06 | T21-G06 → KRY-T21-01, ZAK-T21-06; T21-G06 → FAM-T21-06 | T21-G06 pozwala obserwować L1: możliwość sprawdzenia spełnienia w systemie; klucz w §7 odróżnia właściwy sens. T21-G06 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D06; REL-T21-20-D06 | T21-D06 → KRY-T21-01, ZAK-T21-06; T21-D06 → FAM-T21-06 | T21-D06 pozwala obserwować L1: możliwość sprawdzenia spełnienia w systemie; klucz w §7 odróżnia właściwy sens. T21-D06 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B07; REL-T21-20-B07 | T21-B07 → KRY-T21-02, ZAK-T21-07; T21-B07 → FAM-T21-07 | T21-B07 pozwala obserwować L1: szczególna waga adekwatności i zrozumiałości; klucz w §7 odróżnia właściwy sens. T21-B07 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F07; REL-T21-20-F07 | T21-F07 → KRY-T21-02, ZAK-T21-07; T21-F07 → FAM-T21-07 | T21-F07 pozwala obserwować L1: szczególna waga adekwatności i zrozumiałości; klucz w §7 odróżnia właściwy sens. T21-F07 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G07; REL-T21-20-G07 | T21-G07 → KRY-T21-02, ZAK-T21-07; T21-G07 → FAM-T21-07 | T21-G07 pozwala obserwować L1: szczególna waga adekwatności i zrozumiałości; klucz w §7 odróżnia właściwy sens. T21-G07 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D07; REL-T21-20-D07 | T21-D07 → KRY-T21-02, ZAK-T21-07; T21-D07 → FAM-T21-07 | T21-D07 pozwala obserwować L1: szczególna waga adekwatności i zrozumiałości; klucz w §7 odróżnia właściwy sens. T21-D07 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B08; REL-T21-20-B08 | T21-B08 → KRY-T21-03, ZAK-T21-08; T21-B08 → FAM-T21-08 | T21-B08 pozwala obserwować L1: zalecana lista i stopień jakości względem wartości; klucz w §7 odróżnia właściwy sens. T21-B08 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-F08; REL-T21-20-F08 | T21-F08 → KRY-T21-03, ZAK-T21-08; T21-F08 → FAM-T21-08 | T21-F08 pozwala obserwować L1: zalecana lista i stopień jakości względem wartości; klucz w §7 odróżnia właściwy sens. T21-F08 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-G08; REL-T21-20-G08 | T21-G08 → KRY-T21-03, ZAK-T21-08; T21-G08 → FAM-T21-08 | T21-G08 pozwala obserwować L1: zalecana lista i stopień jakości względem wartości; klucz w §7 odróżnia właściwy sens. T21-G08 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-D08; REL-T21-20-D08 | T21-D08 → KRY-T21-03, ZAK-T21-08; T21-D08 → FAM-T21-08 | T21-D08 pozwala obserwować L1: zalecana lista i stopień jakości względem wartości; klucz w §7 odróżnia właściwy sens. T21-D08 należy do rodziny o tym rdzeniu; charakterystyczna reguła i kontrasty są wspólne, jak wykazano w R21. |
| REL-T21-06-B08-S | R06: T21-B08@r1 → KRY-T21-02@r1, tylko warunek wartości | Rozpoznanie właściwej tezy o wartości w tym itemie jest wtórną okazją kontroli członu KRY02; te same decyzje pierwotnie mierzą KRY03 i nie są liczone podwójnie jako niezależne próby. |
| REL-T21-06-F08-S | R06: T21-F08@r1 → KRY-T21-02@r1, tylko warunek wartości | Rozpoznanie właściwej tezy o wartości w tym itemie jest wtórną okazją kontroli członu KRY02; te same decyzje pierwotnie mierzą KRY03 i nie są liczone podwójnie jako niezależne próby. |
| REL-T21-06-G08-S | R06: T21-G08@r1 → KRY-T21-02@r1, tylko warunek wartości | Rozpoznanie właściwej tezy o wartości w tym itemie jest wtórną okazją kontroli członu KRY02; te same decyzje pierwotnie mierzą KRY03 i nie są liczone podwójnie jako niezależne próby. |
| REL-T21-06-D08-S | R06: T21-D08@r1 → KRY-T21-02@r1, tylko warunek wartości | Rozpoznanie właściwej tezy o wartości w tym itemie jest wtórną okazją kontroli członu KRY02; te same decyzje pierwotnie mierzą KRY03 i nie są liczone podwójnie jako niezależne próby. |
| REL-T21-06-O01; REL-T21-20-O01 | T21-O01 → KRY-T21-01; T21-O01 → FAM-T21-LEX-ALL | T21-O01 pozwala obserwować sześć nazw i sześć znaczeń oddzielnie według 12 elementów rubryki; ocena rubryką z §6. Zadanie należy do wskazanego grupowania roboczego, którego bliskość wykazano w §8.2; bez domniemania niezależności. |
| REL-T21-06-O02; REL-T21-20-O02 | T21-O02 → KRY-T21-02; T21-O02 → FAM-T21-PRIORITY-VALUE | T21-O02 pozwala obserwować para kryteriów według elementów 1/2; elementy 3/4 także KRY-T21-03; ocena rubryką z §6. Zadanie należy do wskazanego grupowania roboczego, którego bliskość wykazano w §8.2; bez domniemania niezależności. |
| REL-T21-06-O03; REL-T21-20-O03 | T21-O03 → AUX-T21-03; T21-O03 → FAM-T21-COMPARISONS | T21-O03 pozwala obserwować cztery elementy rozdzielenia osi i jednostek oceny, pomocnicze L2 bez EO; ocena rubryką z §6. Zadanie należy do wskazanego grupowania roboczego, którego bliskość wykazano w §8.2; bez domniemania niezależności. |
| REL-T21-06-O04; REL-T21-20-O04 | T21-O04 → AUX-T21-04; T21-O04 → FAM-T21-NEED-VS-CHECK | T21-O04 pozwala obserwować cztery elementy oceny jawnego przypadku, pomocnicze L2 bez EO; ocena rubryką z §6. Zadanie należy do wskazanego grupowania roboczego, którego bliskość wykazano w §8.2; bez domniemania niezależności. |
| REL-T21-06-O02-S | R06: T21-O02@r1 → KRY-T21-03@r1, tylko elementy 3/4 rubryki | Odtworzenie warunku wartości i granicy progu jest osobno ocenianym członem odpowiedzi; nie wynika z samej trafnej pary cech |

#### Każda decyzja → rationale → reguła

Każdy następny wiersz instancjonuje R08 o podanym ID oraz osobne R09 dla każdej wymienionej reguły. Końce r1; kierunek jest zapisany strzałką. **Warunek R08:** oceniany jest wskazany wybór/wiersz konkretnego itemu i ujawnienie jest dopuszczone. **Cel R08:** wyjaśnienie dokładnie tej decyzji, w tym pominiętej poprawnej P. **Warunek R09:** lokalna przesłanka jest tą z tabeli rationale w §7. **Cel R09:** dojście do znaczenia rozstrzygającego wybór, bez dodawania przesłanek. **Proweniencja:** autorski krok zastosowania CL, B01-05/07. **Review:** autorskie, oczekuje odrębnego review. Treść sensu jest podana jawnie w każdym wierszu; lokalny argument znajduje się pod dokładnym RAT ID w §7.

| ID R08; ID R09 | Końce i pełne zdanie sensu |
|---|---|
| REL-T21-08-B01-a; REL-T21-09-B01-a-01; REL-T21-09-B01-a-02 | Decyzja T21-B01/a@r1 → RAT-T21-B01-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B01-a@r1 → REG-T21-01@r1, REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B01-b; REL-T21-09-B01-b-01 | Decyzja T21-B01/b@r1 → RAT-T21-B01-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B01-b@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B01-c; REL-T21-09-B01-c-01; REL-T21-09-B01-c-03 | Decyzja T21-B01/c@r1 → RAT-T21-B01-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B01-c@r1 → REG-T21-01@r1, REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B01-d; REL-T21-09-B01-d-01; REL-T21-09-B01-d-06 | Decyzja T21-B01/d@r1 → RAT-T21-B01-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B01-d@r1 → REG-T21-01@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F01-1; REL-T21-09-F01-1-01 | Decyzja T21-F01/1@r1 → RAT-T21-F01-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F01-1@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F01-2; REL-T21-09-F01-2-01 | Decyzja T21-F01/2@r1 → RAT-T21-F01-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F01-2@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F01-3; REL-T21-09-F01-3-01 | Decyzja T21-F01/3@r1 → RAT-T21-F01-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F01-3@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G01-a; REL-T21-09-G01-a-01 | Decyzja T21-G01/a@r1 → RAT-T21-G01-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G01-a@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G01-b; REL-T21-09-G01-b-01; REL-T21-09-G01-b-03 | Decyzja T21-G01/b@r1 → RAT-T21-G01-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G01-b@r1 → REG-T21-01@r1, REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G01-c; REL-T21-09-G01-c-01 | Decyzja T21-G01/c@r1 → RAT-T21-G01-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G01-c@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G01-d; REL-T21-09-G01-d-01 | Decyzja T21-G01/d@r1 → RAT-T21-G01-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G01-d@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G01-e; REL-T21-09-G01-e-01; REL-T21-09-G01-e-03 | Decyzja T21-G01/e@r1 → RAT-T21-G01-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G01-e@r1 → REG-T21-01@r1, REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D01-a; REL-T21-09-D01-a-01 | Decyzja T21-D01/a@r1 → RAT-T21-D01-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D01-a@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D01-b; REL-T21-09-D01-b-01; REL-T21-09-D01-b-06 | Decyzja T21-D01/b@r1 → RAT-T21-D01-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D01-b@r1 → REG-T21-01@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D01-c; REL-T21-09-D01-c-01 | Decyzja T21-D01/c@r1 → RAT-T21-D01-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D01-c@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D01-d; REL-T21-09-D01-d-01 | Decyzja T21-D01/d@r1 → RAT-T21-D01-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D01-d@r1 → REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B02-a; REL-T21-09-B02-a-02; REL-T21-09-B02-a-05 | Decyzja T21-B02/a@r1 → RAT-T21-B02-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B02-a@r1 → REG-T21-02@r1, REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B02-b; REL-T21-09-B02-b-02; REL-T21-09-B02-b-06 | Decyzja T21-B02/b@r1 → RAT-T21-B02-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B02-b@r1 → REG-T21-02@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B02-c; REL-T21-09-B02-c-02; REL-T21-09-B02-c-04 | Decyzja T21-B02/c@r1 → RAT-T21-B02-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B02-c@r1 → REG-T21-02@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B02-d; REL-T21-09-B02-d-02 | Decyzja T21-B02/d@r1 → RAT-T21-B02-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B02-d@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F02-1; REL-T21-09-F02-1-02 | Decyzja T21-F02/1@r1 → RAT-T21-F02-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F02-1@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F02-2; REL-T21-09-F02-2-02 | Decyzja T21-F02/2@r1 → RAT-T21-F02-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F02-2@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F02-3; REL-T21-09-F02-3-02 | Decyzja T21-F02/3@r1 → RAT-T21-F02-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F02-3@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G02-a; REL-T21-09-G02-a-02 | Decyzja T21-G02/a@r1 → RAT-T21-G02-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G02-a@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G02-b; REL-T21-09-G02-b-02 | Decyzja T21-G02/b@r1 → RAT-T21-G02-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G02-b@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G02-c; REL-T21-09-G02-c-02; REL-T21-09-G02-c-06 | Decyzja T21-G02/c@r1 → RAT-T21-G02-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G02-c@r1 → REG-T21-02@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G02-d; REL-T21-09-G02-d-02 | Decyzja T21-G02/d@r1 → RAT-T21-G02-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G02-d@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G02-e; REL-T21-09-G02-e-02 | Decyzja T21-G02/e@r1 → RAT-T21-G02-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G02-e@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D02-a; REL-T21-09-D02-a-02 | Decyzja T21-D02/a@r1 → RAT-T21-D02-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D02-a@r1 → REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D02-b; REL-T21-09-D02-b-02; REL-T21-09-D02-b-05 | Decyzja T21-D02/b@r1 → RAT-T21-D02-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D02-b@r1 → REG-T21-02@r1, REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D02-c; REL-T21-09-D02-c-02; REL-T21-09-D02-c-06 | Decyzja T21-D02/c@r1 → RAT-T21-D02-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D02-c@r1 → REG-T21-02@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D02-d; REL-T21-09-D02-d-02; REL-T21-09-D02-d-04 | Decyzja T21-D02/d@r1 → RAT-T21-D02-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D02-d@r1 → REG-T21-02@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B03-a; REL-T21-09-B03-a-03 | Decyzja T21-B03/a@r1 → RAT-T21-B03-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B03-a@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B03-b; REL-T21-09-B03-b-03; REL-T21-09-B03-b-02 | Decyzja T21-B03/b@r1 → RAT-T21-B03-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B03-b@r1 → REG-T21-03@r1, REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B03-c; REL-T21-09-B03-c-03; REL-T21-09-B03-c-01 | Decyzja T21-B03/c@r1 → RAT-T21-B03-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B03-c@r1 → REG-T21-03@r1, REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B03-d; REL-T21-09-B03-d-03; REL-T21-09-B03-d-04 | Decyzja T21-B03/d@r1 → RAT-T21-B03-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B03-d@r1 → REG-T21-03@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F03-1; REL-T21-09-F03-1-03 | Decyzja T21-F03/1@r1 → RAT-T21-F03-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F03-1@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F03-2; REL-T21-09-F03-2-03 | Decyzja T21-F03/2@r1 → RAT-T21-F03-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F03-2@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F03-3; REL-T21-09-F03-3-03 | Decyzja T21-F03/3@r1 → RAT-T21-F03-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F03-3@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G03-a; REL-T21-09-G03-a-03 | Decyzja T21-G03/a@r1 → RAT-T21-G03-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G03-a@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G03-b; REL-T21-09-G03-b-03 | Decyzja T21-G03/b@r1 → RAT-T21-G03-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G03-b@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G03-c; REL-T21-09-G03-c-03; REL-T21-09-G03-c-05 | Decyzja T21-G03/c@r1 → RAT-T21-G03-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G03-c@r1 → REG-T21-03@r1, REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G03-d; REL-T21-09-G03-d-03 | Decyzja T21-G03/d@r1 → RAT-T21-G03-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G03-d@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G03-e; REL-T21-09-G03-e-03; REL-T21-09-G03-e-04 | Decyzja T21-G03/e@r1 → RAT-T21-G03-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G03-e@r1 → REG-T21-03@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D03-a; REL-T21-09-D03-a-03 | Decyzja T21-D03/a@r1 → RAT-T21-D03-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D03-a@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D03-b; REL-T21-09-D03-b-03; REL-T21-09-D03-b-04 | Decyzja T21-D03/b@r1 → RAT-T21-D03-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D03-b@r1 → REG-T21-03@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D03-c; REL-T21-09-D03-c-03 | Decyzja T21-D03/c@r1 → RAT-T21-D03-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D03-c@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D03-d; REL-T21-09-D03-d-03 | Decyzja T21-D03/d@r1 → RAT-T21-D03-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D03-d@r1 → REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B04-a; REL-T21-09-B04-a-04 | Decyzja T21-B04/a@r1 → RAT-T21-B04-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B04-a@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B04-b; REL-T21-09-B04-b-04; REL-T21-09-B04-b-06 | Decyzja T21-B04/b@r1 → RAT-T21-B04-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B04-b@r1 → REG-T21-04@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B04-c; REL-T21-09-B04-c-04 | Decyzja T21-B04/c@r1 → RAT-T21-B04-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B04-c@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B04-d; REL-T21-09-B04-d-04 | Decyzja T21-B04/d@r1 → RAT-T21-B04-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B04-d@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F04-1; REL-T21-09-F04-1-04 | Decyzja T21-F04/1@r1 → RAT-T21-F04-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F04-1@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F04-2; REL-T21-09-F04-2-04 | Decyzja T21-F04/2@r1 → RAT-T21-F04-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F04-2@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F04-3; REL-T21-09-F04-3-04 | Decyzja T21-F04/3@r1 → RAT-T21-F04-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F04-3@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G04-a; REL-T21-09-G04-a-04 | Decyzja T21-G04/a@r1 → RAT-T21-G04-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G04-a@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G04-b; REL-T21-09-G04-b-04 | Decyzja T21-G04/b@r1 → RAT-T21-G04-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G04-b@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G04-c; REL-T21-09-G04-c-04 | Decyzja T21-G04/c@r1 → RAT-T21-G04-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G04-c@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G04-d; REL-T21-09-G04-d-04 | Decyzja T21-G04/d@r1 → RAT-T21-G04-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G04-d@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G04-e; REL-T21-09-G04-e-04; REL-T21-09-G04-e-06 | Decyzja T21-G04/e@r1 → RAT-T21-G04-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G04-e@r1 → REG-T21-04@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D04-a; REL-T21-09-D04-a-04 | Decyzja T21-D04/a@r1 → RAT-T21-D04-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D04-a@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D04-b; REL-T21-09-D04-b-04 | Decyzja T21-D04/b@r1 → RAT-T21-D04-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D04-b@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D04-c; REL-T21-09-D04-c-04 | Decyzja T21-D04/c@r1 → RAT-T21-D04-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D04-c@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D04-d; REL-T21-09-D04-d-04 | Decyzja T21-D04/d@r1 → RAT-T21-D04-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D04-d@r1 → REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B05-a; REL-T21-09-B05-a-05; REL-T21-09-B05-a-02 | Decyzja T21-B05/a@r1 → RAT-T21-B05-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B05-a@r1 → REG-T21-05@r1, REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B05-b; REL-T21-09-B05-b-05 | Decyzja T21-B05/b@r1 → RAT-T21-B05-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B05-b@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B05-c; REL-T21-09-B05-c-05; REL-T21-09-B05-c-04 | Decyzja T21-B05/c@r1 → RAT-T21-B05-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B05-c@r1 → REG-T21-05@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B05-d; REL-T21-09-B05-d-05; REL-T21-09-B05-d-06 | Decyzja T21-B05/d@r1 → RAT-T21-B05-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B05-d@r1 → REG-T21-05@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F05-1; REL-T21-09-F05-1-05 | Decyzja T21-F05/1@r1 → RAT-T21-F05-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F05-1@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F05-2; REL-T21-09-F05-2-05 | Decyzja T21-F05/2@r1 → RAT-T21-F05-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F05-2@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F05-3; REL-T21-09-F05-3-05 | Decyzja T21-F05/3@r1 → RAT-T21-F05-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F05-3@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G05-a; REL-T21-09-G05-a-05 | Decyzja T21-G05/a@r1 → RAT-T21-G05-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G05-a@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G05-b; REL-T21-09-G05-b-05 | Decyzja T21-G05/b@r1 → RAT-T21-G05-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G05-b@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G05-c; REL-T21-09-G05-c-05 | Decyzja T21-G05/c@r1 → RAT-T21-G05-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G05-c@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G05-d; REL-T21-09-G05-d-05; REL-T21-09-G05-d-03 | Decyzja T21-G05/d@r1 → RAT-T21-G05-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G05-d@r1 → REG-T21-05@r1, REG-T21-03@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G05-e; REL-T21-09-G05-e-05 | Decyzja T21-G05/e@r1 → RAT-T21-G05-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G05-e@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D05-a; REL-T21-09-D05-a-05 | Decyzja T21-D05/a@r1 → RAT-T21-D05-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D05-a@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D05-b; REL-T21-09-D05-b-05 | Decyzja T21-D05/b@r1 → RAT-T21-D05-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D05-b@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D05-c; REL-T21-09-D05-c-05 | Decyzja T21-D05/c@r1 → RAT-T21-D05-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D05-c@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D05-d; REL-T21-09-D05-d-05 | Decyzja T21-D05/d@r1 → RAT-T21-D05-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D05-d@r1 → REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B06-a; REL-T21-09-B06-a-06; REL-T21-09-B06-a-01 | Decyzja T21-B06/a@r1 → RAT-T21-B06-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B06-a@r1 → REG-T21-06@r1, REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B06-b; REL-T21-09-B06-b-06; REL-T21-09-B06-b-02 | Decyzja T21-B06/b@r1 → RAT-T21-B06-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B06-b@r1 → REG-T21-06@r1, REG-T21-02@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B06-c; REL-T21-09-B06-c-06; REL-T21-09-B06-c-05 | Decyzja T21-B06/c@r1 → RAT-T21-B06-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B06-c@r1 → REG-T21-06@r1, REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B06-d; REL-T21-09-B06-d-06 | Decyzja T21-B06/d@r1 → RAT-T21-B06-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B06-d@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F06-1; REL-T21-09-F06-1-06 | Decyzja T21-F06/1@r1 → RAT-T21-F06-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F06-1@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F06-2; REL-T21-09-F06-2-06 | Decyzja T21-F06/2@r1 → RAT-T21-F06-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F06-2@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F06-3; REL-T21-09-F06-3-06 | Decyzja T21-F06/3@r1 → RAT-T21-F06-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F06-3@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G06-a; REL-T21-09-G06-a-06 | Decyzja T21-G06/a@r1 → RAT-T21-G06-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G06-a@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G06-b; REL-T21-09-G06-b-06 | Decyzja T21-G06/b@r1 → RAT-T21-G06-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G06-b@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G06-c; REL-T21-09-G06-c-06 | Decyzja T21-G06/c@r1 → RAT-T21-G06-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G06-c@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G06-d; REL-T21-09-G06-d-06 | Decyzja T21-G06/d@r1 → RAT-T21-G06-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G06-d@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G06-e; REL-T21-09-G06-e-06 | Decyzja T21-G06/e@r1 → RAT-T21-G06-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G06-e@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D06-a; REL-T21-09-D06-a-06 | Decyzja T21-D06/a@r1 → RAT-T21-D06-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D06-a@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D06-b; REL-T21-09-D06-b-06; REL-T21-09-D06-b-01 | Decyzja T21-D06/b@r1 → RAT-T21-D06-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D06-b@r1 → REG-T21-06@r1, REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D06-c; REL-T21-09-D06-c-06 | Decyzja T21-D06/c@r1 → RAT-T21-D06-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D06-c@r1 → REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D06-d; REL-T21-09-D06-d-06; REL-T21-09-D06-d-04 | Decyzja T21-D06/d@r1 → RAT-T21-D06-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D06-d@r1 → REG-T21-06@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B07-a; REL-T21-09-B07-a-07; REL-T21-09-B07-a-02; REL-T21-09-B07-a-04 | Decyzja T21-B07/a@r1 → RAT-T21-B07-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B07-a@r1 → REG-T21-07@r1, REG-T21-02@r1, REG-T21-04@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B07-b; REL-T21-09-B07-b-07; REL-T21-09-B07-b-03; REL-T21-09-B07-b-06 | Decyzja T21-B07/b@r1 → RAT-T21-B07-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B07-b@r1 → REG-T21-07@r1, REG-T21-03@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B07-c; REL-T21-09-B07-c-07 | Decyzja T21-B07/c@r1 → RAT-T21-B07-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B07-c@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B07-d; REL-T21-09-B07-d-07; REL-T21-09-B07-d-04; REL-T21-09-B07-d-06 | Decyzja T21-B07/d@r1 → RAT-T21-B07-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B07-d@r1 → REG-T21-07@r1, REG-T21-04@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F07-1; REL-T21-09-F07-1-07 | Decyzja T21-F07/1@r1 → RAT-T21-F07-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F07-1@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F07-2; REL-T21-09-F07-2-07 | Decyzja T21-F07/2@r1 → RAT-T21-F07-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F07-2@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F07-3; REL-T21-09-F07-3-07; REL-T21-09-F07-3-08 | Decyzja T21-F07/3@r1 → RAT-T21-F07-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F07-3@r1 → REG-T21-07@r1, REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G07-a; REL-T21-09-G07-a-07; REL-T21-09-G07-a-08 | Decyzja T21-G07/a@r1 → RAT-T21-G07-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G07-a@r1 → REG-T21-07@r1, REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G07-b; REL-T21-09-G07-b-07; REL-T21-09-G07-b-01 | Decyzja T21-G07/b@r1 → RAT-T21-G07-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G07-b@r1 → REG-T21-07@r1, REG-T21-01@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G07-c; REL-T21-09-G07-c-07 | Decyzja T21-G07/c@r1 → RAT-T21-G07-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G07-c@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G07-d; REL-T21-09-G07-d-07 | Decyzja T21-G07/d@r1 → RAT-T21-G07-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G07-d@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G07-e; REL-T21-09-G07-e-07; REL-T21-09-G07-e-05 | Decyzja T21-G07/e@r1 → RAT-T21-G07-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G07-e@r1 → REG-T21-07@r1, REG-T21-05@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D07-a; REL-T21-09-D07-a-07; REL-T21-09-D07-a-01; REL-T21-09-D07-a-06 | Decyzja T21-D07/a@r1 → RAT-T21-D07-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D07-a@r1 → REG-T21-07@r1, REG-T21-01@r1, REG-T21-06@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D07-b; REL-T21-09-D07-b-07 | Decyzja T21-D07/b@r1 → RAT-T21-D07-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D07-b@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D07-c; REL-T21-09-D07-c-07 | Decyzja T21-D07/c@r1 → RAT-T21-D07-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D07-c@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D07-d; REL-T21-09-D07-d-07 | Decyzja T21-D07/d@r1 → RAT-T21-D07-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D07-d@r1 → REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B08-a; REL-T21-09-B08-a-08 | Decyzja T21-B08/a@r1 → RAT-T21-B08-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B08-a@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B08-b; REL-T21-09-B08-b-08 | Decyzja T21-B08/b@r1 → RAT-T21-B08-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B08-b@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B08-c; REL-T21-09-B08-c-08 | Decyzja T21-B08/c@r1 → RAT-T21-B08-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B08-c@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-B08-d; REL-T21-09-B08-d-08 | Decyzja T21-B08/d@r1 → RAT-T21-B08-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-B08-d@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F08-1; REL-T21-09-F08-1-08 | Decyzja T21-F08/1@r1 → RAT-T21-F08-1@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F08-1@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F08-2; REL-T21-09-F08-2-08 | Decyzja T21-F08/2@r1 → RAT-T21-F08-2@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F08-2@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-F08-3; REL-T21-09-F08-3-08; REL-T21-09-F08-3-07 | Decyzja T21-F08/3@r1 → RAT-T21-F08-3@r1 ma wskazane lokalne uzasadnienie; RAT-T21-F08-3@r1 → REG-T21-08@r1, REG-T21-07@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G08-a; REL-T21-09-G08-a-08 | Decyzja T21-G08/a@r1 → RAT-T21-G08-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G08-a@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G08-b; REL-T21-09-G08-b-08 | Decyzja T21-G08/b@r1 → RAT-T21-G08-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G08-b@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G08-c; REL-T21-09-G08-c-08 | Decyzja T21-G08/c@r1 → RAT-T21-G08-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G08-c@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G08-d; REL-T21-09-G08-d-08 | Decyzja T21-G08/d@r1 → RAT-T21-G08-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G08-d@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-G08-e; REL-T21-09-G08-e-08 | Decyzja T21-G08/e@r1 → RAT-T21-G08-e@r1 ma wskazane lokalne uzasadnienie; RAT-T21-G08-e@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D08-a; REL-T21-09-D08-a-08 | Decyzja T21-D08/a@r1 → RAT-T21-D08-a@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D08-a@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D08-b; REL-T21-09-D08-b-08 | Decyzja T21-D08/b@r1 → RAT-T21-D08-b@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D08-b@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D08-c; REL-T21-09-D08-c-08 | Decyzja T21-D08/c@r1 → RAT-T21-D08-c@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D08-c@r1 → REG-T21-08@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |
| REL-T21-08-D08-d; REL-T21-09-D08-d-08; REL-T21-09-D08-d-09 | Decyzja T21-D08/d@r1 → RAT-T21-D08-d@r1 ma wskazane lokalne uzasadnienie; RAT-T21-D08-d@r1 → REG-T21-08@r1, REG-T21-TYPE@r1 opiera rozstrzygnięcie na tych dokładnie regułach. |

#### Reguła → właściwe źródło

R15 nie poświadcza dowolnego sformułowania zadań: źródło wspiera znaczenie, a lokalne rozstrzygnięcie wynika dodatkowo z pełnej przesłanki opcji w §7. Wersje i prawa dokumentów w §2/10. Każda instancja ma r1 i autorsko sprawdzony zakres odczytu.

| R15 ID | Końce, kierunek i zdanie sensu | Lokalizacja i granica wsparcia |
|---|---|---|
| REL-T21-15-01 | REG-T21-01@r1 → SRC-T21-GEN@2.2.0: reguła ma wsparcie w tej lokalizacji | adequacy s.8; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-02 | REG-T21-02@r1 → SRC-T21-GEN@2.2.0: reguła ma wsparcie w tej lokalizacji | necessity s.20; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-03 | REG-T21-03@r1 → SRC-T21-GEN@2.2.0: reguła ma wsparcie w tej lokalizacji | unambiguity s.32; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-04 | REG-T21-04@r1 → SRC-T21-GEN@2.2.0: reguła ma wsparcie w tej lokalizacji | completeness s.11, sens 1 oraz comparison sens 2; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-05 | REG-T21-05@r1 → SRC-T21-GEN@2.2.0: reguła ma wsparcie w tej lokalizacji | understandability s.32; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-06 | REG-T21-06@r1 → SRC-T21-GEN@2.2.0: reguła ma wsparcie w tej lokalizacji | verifiability s.34 wraz z uwagą; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-07 | REG-T21-07@r1 → SRC-T21-SEN@3.3.0: reguła ma wsparcie w tej lokalizacji | §3.8 s.29, szczególna para; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-08 | REG-T21-08@r1 → SRC-T21-SEN@3.3.0: reguła ma wsparcie w tej lokalizacji | §3.8 s.29, akapit wartości; źródło wspiera normę/znaczenie, nie fakty fikcyjnych historii |
| REL-T21-15-TYPE | REG-T21-TYPE@r1 → SRC-T21-GEN@2.2.0: rozdzielenie typu i jakości ma wskazaną podstawę | quality requirement s.23, requirement s.24, quality criteria s.23; własne zestawienie osi |
| REL-T21-15-SCORE | SCORE-T21@r1 → SRC-T21-REG@5.6.2: reguły naliczania mają podstawę regulaminową | §2 s.4–6; parametry poszczególnych itemów autorskie |
| REL-T21-15-SCOPE | CL-T21-00@r1 → SRC-T21-SEN@3.3.0: L1 i lokalizacja EO są sprawdzone | s.4 i 19; kontrola PL s.4/20 |
| REL-T21-15-BOUND | CL-T21-11@r1 → SRC-T21-GEN@2.2.0: kontekstowy charakter zestawów ma osobną podstawę | quality criteria s.23, uwagi 1/2; nie przypisywać tej dodatkowej tezy §3.8 syllabus |

#### Powrót — osiem konkretnych planów R26

Nie ma rzeczywistych zdarzeń ucznia, więc nie istnieje tu wykonana instancja R26 ani R25. Poniższe NAVPLAN są **konkretnymi kontraktami przyszłego utworzenia R26**, nie fikcyjną historią. Gdy wystąpi odejście od odpowiedzi, Navigation Context otrzymuje rzeczywiste ID próby, źródłowy item/r1, opcję/wiersz, oddaną odpowiedź, wynik, stan feedbacku, pozycję/fokus i miejsce kolejki. R26 prowadzi z tego rzeczywistego kontekstu do podanej kotwicy. Argument: przywrócić aktywność, z której użytkownik odszedł, bez nowego zaliczenia. Proweniencja: przyjęte FR-013/032, B01-05; test implementacji pozostaje G3. Dla wejścia z F/G/D źródłem jest rzeczywisty F/G/D, nie automatycznie B.

| NAVPLAN ID / przyszłe R26 | Źródłowa kotwica r1 | Gotowa ścieżka merytoryczna i zachowanie |
|---|---|---|
| NAVPLAN-T21-01 / REL-T21-26-01-{actual-navigation-id} | T21-B01@r1 / wskazana opcja | RAT → REG-T21-01 → N-T21-01 / CMP-T21-03 → REM-T21-01 → F01, opcjonalnie G01 → powrót do tej samej odpowiedzi B01 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-02 / REL-T21-26-02-{actual-navigation-id} | T21-B02@r1 / wskazana opcja | RAT → REG-T21-02 → N-T21-02 / N-T21-02 → REM-T21-02 → F02, opcjonalnie G02 → powrót do tej samej odpowiedzi B02 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-03 / REL-T21-26-03-{actual-navigation-id} | T21-B03@r1 / wskazana opcja | RAT → REG-T21-03 → N-T21-03 / N-T21-03 → REM-T21-03 → F03, opcjonalnie G03 → powrót do tej samej odpowiedzi B03 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-04 / REL-T21-26-04-{actual-navigation-id} | T21-B04@r1 / wskazana opcja | RAT → REG-T21-04 → N-T21-04 / CMP-T21-02 → REM-T21-04 → F04, opcjonalnie G04 → powrót do tej samej odpowiedzi B04 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-05 / REL-T21-26-05-{actual-navigation-id} | T21-B05@r1 / wskazana opcja | RAT → REG-T21-05 → N-T21-05 / N-T21-05 → REM-T21-05 → F05, opcjonalnie G05 → powrót do tej samej odpowiedzi B05 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-06 / REL-T21-26-06-{actual-navigation-id} | T21-B06@r1 / wskazana opcja | RAT → REG-T21-06 → N-T21-06 / N-T21-06 → REM-T21-06 → F06, opcjonalnie G06 → powrót do tej samej odpowiedzi B06 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-07 / REL-T21-26-07-{actual-navigation-id} | T21-B07@r1 / wskazana opcja | RAT → REG-T21-07 → N-T21-07 / CMP-T21-03 → REM-T21-07 → F07, opcjonalnie G07 → powrót do tej samej odpowiedzi B07 i jej pierwotnego wyniku. F/G mają osobne wykonania. |
| NAVPLAN-T21-08 / REL-T21-26-08-{actual-navigation-id} | T21-B08@r1 / wskazana opcja | RAT → REG-T21-08 → N-T21-08 / N-T21-08 → REM-T21-08 → F08, opcjonalnie G08 → powrót do tej samej odpowiedzi B08 i jej pierwotnego wyniku. F/G mają osobne wykonania. |

## 9. Kontakt z wiedzą, eksport i semantyka użycia

### 9.1. Zakres ekspozycji materiałów

Dwa zegary zachowuje się osobno dla KRY i jego rzeczywiście dotkniętych ZAK: czas od poprzedniej samodzielnej próby oraz czas od ostatniego istotnego kontaktu z rozstrzygającą treścią/ćwiczeniem, ustalone z historii **sprzed** rozpoczęcia bieżącej próby. Istotny kontakt nie musi być poprawną odpowiedzią. Kontakt z jednym znaczeniem nie jest automatycznie kontaktem ze wszystkimi sześcioma.

| Fragment | Zakres kontaktu i stopień ujawnienia | Czego nie wolno z tego wywnioskować |
|---|---|---|
| INTRO-T21 | Cel tematu; bez kluczy i bez wyliczenia sześciu znaczeń | Nie zalicza żadnego ZAK |
| TERM-T21, całe §3.2 | Nazwy szóstki i uwagi o różnicach; ponadto foundational/helper terms z tabeli | Nie udowadnia samodzielnego rozpoznania lub odtworzenia |
| Rdzeń N01–N06, każdy osobno | Pełna reguła odpowiadającego ZAK01–06; odrębnie logować otwarte przykłady/kontrasty | Sam nagłówek nie oznacza przeczytania całej noty; nie resetuje całego EO |
| EX01/CE01, CMP03, WS01 | Adekwatność ZAK01, możliwość sprawdzenia ZAK06; granica kompensowania jako fragment ZAK07 | Nie potwierdzają, że uczeń zna obie nazwy najważniejszej pary |
| EX02/CE02 | ZAK02: potrzeba obecności treści i niewystarczalność łatwości wykonania | Nie nadają wyniku oceny każdemu realnemu wymaganiu |
| EX03/CE03 | ZAK03: różne interpretacje mimo prostoty; powiązanie z łatwością odczytu tylko w pokazanym kontraście | Nie dowodzą znajomości pełnego ZAK05 |
| EX04/CE04, CMP02, WS02 | ZAK04; w CMP02/WS02 także wspierający sens kompletności zbioru poza zakresem T21 | Nie zamykają całego T22 ani nie powodują pomiaru EO3.8.2 |
| EX05/CE05 | ZAK05: zamierzeni odbiorcy i znaczenie ich wiedzy | Nie stanowią empirycznej obserwacji rzeczywistych odbiorców |
| EX06/CE06 | ZAK06: możliwość rozstrzygnięcia, brak konieczności liczby, granica nieuzgodnionej oceny | Nie dowodzą, że jakikolwiek system został już sprawdzony |
| N07, z powiązanym przypomnieniem EX01/CE01 | ZAK07 w pełnym znaczeniu pary i niekompensowania; adekwatność i zrozumiałość występują dodatkowo jako cechy | Samo wystąpienie nazw nie poświadcza pełnego kontaktu z ich definicjami ZAK01/05 |
| N08, EX08, BOUND08 | ZAK08; fragment szczególnej wagi jakości wobec ryzyka | Nie ustanawiają liczbowego progu jakości |
| CMP01 | Oś jakości zapisu oraz typu wymagania; częściowy kontakt z KRY-P01/C-P i EO1.1.2 | Nie resetuje wszystkich aspektów T02 ani nie mierzy ich |
| Polecenia O01/O02 | Próba wydobycia odpowiednio ZAK01–06 / ZAK07–08; brak wzorca przed odpowiedzią | Pokazanie polecenia nie ujawnia klucza; samo wykonanie jest kontaktem dla późniejszych prób |
| Wzorce O01/O02 | Ujawnione wszystkie wskazane w nich znaczenia i właściwe odpowiedzi | Po ujawnieniu nie ma samodzielnego ponownego retrieval tego samego wzorca w tej chwili |
| O03/O04 i ich rubryki | O03: CMP01/02, AUX03; O04: ZAK01/06 i fragment ZAK07, AUX04 | Sukces w pomocniczym L2 nie tworzy nowego oficjalnego EO |
| Stem i decyzje dowolnego B/F/G/D | Ekspozycja na konkretny item i rodzinę; ćwiczenie właściwego ZAK, nawet bez feedbacku | Nie oznacza samoistnego poznania klucza; kolejny item tego zakresu nie jest drugą niezależną obserwacją tego samego odstępu |
| RAT konkretnej opcji/wiersza | Rozstrzygająca reguła primary ZAK oraz dokładny fragment kontrastu opisany w tym RAT; lista R09 wskazuje źródłowy zakres kontrastu | Tag drugiej reguły nie oznacza przeczytania jej całej definicji. W B07-a/d np. wymieniono cechy, ale nie objaśniono ich znaczeń |
| REM01–REM08 i otwarta pomoc alternatywna | Właściwy primary ZAK, z dodatkowymi zakresami faktycznie otwartego EX/CMP według tabeli | Lektura nie jest poprawnym follow-up; zamknięcie pomocy nie usuwa faktu jej ujawnienia |
| D01–D08 wraz z [R] | Pełne rozwiązania kandydatów delayed w tej rewizji | Wydanie recenzenckie nie chroni ich nowości dla czytelnika |

**Dla rationale kontakt zapisuje się na poziomie konkretnego RAT, nie całej tabeli, jeżeli pozostałe wiersze nie zostały pokazane.** Współdzielona reguła może wyjaśniać kilka opcji. Otworzenie pełnej noty jest osobnym kontaktem, którego zakres może być szerszy. Zachowuje się fakt możliwości ekspozycji, nie deklarację uważnego przeczytania.

**Przypadek interpretacyjny, nie dane ucznia:** poprzednia samodzielna próba ZAK06 była 7 dni wcześniej, ale N06 odczytano minutę przed nową próbą. Zachowuje się oba odstępy; sukces oznacza świeże wykonanie po nauce, nie siedmiodniową retencję. Jeżeli świeżo czytano wyłącznie N02, nie resetuje to automatycznie ZAK06. Przy niepełnej historii nie uzupełnia się dat fikcyjnie.

D01–D08 są pełnymi kandydatami późniejszej kontroli. Po wymaganym review mogą służyć **powtórce z jawną znajomością/bliskością**, jeżeli taka jest historia osoby. Nie deklaruje się tu nieujawnionego nowego transferu. Robocze ≥24 h oraz okna 3–7/około 14 dni pochodzą z przyjętego protokołu pilota; nie są normą IREB ani zwalidowanym optimum. Rzeczywisty odstęp i warunki muszą być podane. Sama nazwa D nie nadaje eligibility.

### 9.2. Precyzyjny zakres przyszłego eksportu

**Materiał wiedzy [N]:** INTRO, terminy, N, EX/CE/BOUND, CMP i WS, po odpowiednim dopuszczeniu. Nie eksportować bibliograficznych tabel QA jako aktywnych podpowiedzi w Sprawdzeniu.

**Zadania [Q]:** wyłącznie dokładny stem, neutralna instrukcja, opcje/tezy i maksymalna waga z każdego itemu; w otwartych — polecenie. Widoczne ID może być neutralną etykietą, ale nazwa rodziny, primary criterion, EO, ZAK, cele wariantu i źródła są metadanymi redakcyjnymi [M].

**Feedback [R]:** klucz, wynik, wszystkie rationale i rubryka — w Nauce po zatwierdzeniu pozycji, w Sprawdzeniu dopiero po finalizacji całości. Delayed z rozwiązaniami pozostaje poza zwykłym eksportem uczniowskim, jeśli plan użycia ma zachować jego nowość dla innych osób. Taki eksport nie został w tym zleceniu utworzony; oba dostarczone pliki są jawne recenzencko.

W trakcie aktywnego Sprawdzenia prośba o pomoc RE wymaga najpierw informacji, że potwierdzona konwersja do Nauki kończy niezależny kontrakt całej próby. Dopiero po świadomym wyborze ucznia ujawnia się pomoc; ta sama próba nie odzyskuje później statusu niezależnego Sprawdzenia. Wcześniejsze odpowiedzi zachowują swoje rzeczywiste warunki. Test bez limitu i bez pomocy może być wznowiony jako ta sama próba, z zapisem przerwy. Nie ustanawia to reguł pełnego mocku ani nie zastępuje G3.

Treść alternatywna nie wymaga grafiki: cały materiał jest tekstowy. W K nazwa dostępnego wyboru powinna identyfikować numer wiersza, pełną tezę oraz wybraną wartość, np. „Wiersz 2: [pełna teza]; wybrano Fałsz”. Nie dodaje „poprawnie” przed dopuszczonym feedbackiem. Wynik i brak odpowiedzi muszą być zrozumiałe bez koloru. Nie deklaruje się przeprowadzonego testu czytnika ani WCAG gotowej aplikacji.

### 9.3. Gotowe neutralne komunikaty i kryteria zakończenia

| ID | Tekst / reguła użycia |
|---|---|
| MSG-T21-START | „Próba dotyczy wybranego zakresu tematu. Możesz zmieniać odpowiedzi do zatwierdzenia całości. Wyjaśnienia zobaczysz po zakończeniu”. Dopiero po odrębnym dopuszczeniu formy |
| MSG-T21-P | „Wymagane odpowiedzi: 2. Zaznaczono: [n]”. Przy finalizacji nadmiaru: „Więcej niż 2 zaznaczenia daje 0 punktów za to pytanie. Możesz poprawić wybór albo oddać odpowiedź” |
| MSG-T21-K | „[liczba] wierszy bez odpowiedzi”. Brak wyboru nie jest Fałsz; można oddać niepełne odpowiedzi |
| MSG-T21-BLANK | „Nie udzielono odpowiedzi”. Nie dopisywać domniemanej błędnej reguły |
| MSG-T21-HELP | „Ta odpowiedź powstała po skorzystaniu z pomocy. Punkty obliczamy według klucza; warunki próby zapisujemy osobno” |
| MSG-T21-RETURN | „Wróć do odpowiedzi [neutralny ID]”. Przywraca tę samą wersję i oddaną odpowiedź, nie tworzy nowej próby |
| MSG-T21-EXIT | „Możesz odłożyć ten zakres i kontynuować naukę. Zachowamy potrzebę ponownej kontroli” |
| MSG-T21-TWO | „Dwie kolejne próby po korekcie nie zakończyły się pełną poprawnością. Wybierz inną pomoc lub przerwę; możesz wrócić później”. Nie stanowi diagnozy przyczyny |
| MSG-T21-KNOWN | „To znane lub bliskie zadanie. Może służyć powtórce; jego wynik nie potwierdza nowej niezależnej rodziny” |
| MSG-T21-TIME | „Od poprzedniej samodzielnej próby: [odstęp albo brak danych]. Od ostatniego istotnego kontaktu z tym zakresem: [odstęp albo brak danych]” |
| MSG-T21-GAP | „Brakuje dopuszczonego nowego zadania dla tej kontroli. Dostępna jest nauka lub powtórka ze znanym materiałem”. Nie generować nowego klucza w aplikacji |
| MSG-T21-REVIEW | „Ten materiał oczekuje przeglądu. Nie jest jeszcze dopuszczony do zaliczanej próby” |

Learning Unit LU-T21/r1 może zakończyć bieżącą pracę, gdy uczeń wykona wybrany cel, świadomie go odłoży albo dotrze do końca dostępnego materiału. Nie trzeba rozwiązać całej trzydziestodwuelementowej puli. Dla pełnego bieżącego pokrycia tematu trzeba mieć osobne obserwacje sześciu znaczeń i dwóch reguł; otwarty O01/O02 albo odpowiedni wybór zamkniętych itemów dostarcza okazji, nie automatycznej gwarancji wiedzy. Brak danych o jednym ZAK pozostaje widoczny.

Propozycja przyszłego U-TOPIC: rozpoznanie wszystkich ośmiu ZAK, bez limitu, bez pomocy i feedbacku do finalizacji. Przy wyborze np. D01–D08 maksymalna suma wyniosłaby 8 punktów, ale **nie jest to dopuszczona forma**: trzeba odrębnie sprawdzić przecieki między pytaniami, ich kolejność, rodziny, prawa i eligibility. Opcje i stemy mogą powtarzać znaczenia pomocne w innych pozycjach. Nie wolno z ośmiu decyzji wywodzić ośmiu niezależnych testów retencji. Zatwierdzona wersja formy może wymagać selekcji innych pozycji lub dodatkowego authoringu. Próg 70% całego egzaminu nie jest progiem zaliczenia T21.

## 10. Pochodzenie, prawa, status i przekazanie

T21 to oryginalne opracowanie projektu wspomagane AI. Fikcyjne scenariusze skrytki, wydania sprzętu, pola „Termin” i wylogowania służą objaśnieniu pojęć. Nie są oficjalnymi przykładami IREB ani danymi empirycznymi. Zadań nie kopiowano z public sample, Cockpit ani materiałów operacyjnych. Nie poświadcza się globalnej oryginalności wobec nieznanych banków.

**Atrybucja:** podstawa pojęciowa: IREB e.V., *CPRE Foundation Level Syllabus* 3.3.0 — Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal; polski przekład SJSI ze wskazanymi osobami w §2. *Glossary of Requirements Engineering Terminology* 2.2.0 — Martin Glinz / IREB e.V.; terminy PL: Monika Petri-Starego i Karolina Zmitrowicz. Format i reguły naliczania: IREB e.V., *Foundation Level and RE@Agile Primer Examination Regulations* 5.6.2. Właściwe linki i lokalizacje podano w §2. Prawa do źródeł pozostają przy ich właścicielach. Opracowanie nie jest akredytowane ani zatwierdzone przez IREB.

Odczytane warunki Syllabus EN/PL s.2 opisują wskazane opracowania pochodne z atrybucją i odrębnie zastrzegają reprodukcję oraz użycie reklamowe. Glossary EN/PL s.2 rozróżnia wskazane opracowania, kopie osobiste/dydaktyczne i inne reprodukcje; reklama wymaga zgody. W T21 wykorzystano pojęcia, kontrolowaną terminologię i odsyłacze, z własnymi objaśnieniami, sytuacjami i zadaniami. Nie przeniesiono definicji zdaniowych, tabel, diagramów ani pytań jako kopii źródła. Nie ustalono ogólnej licencji reprodukcyjnej regulaminu; opisano własnymi słowami zasady i wykonano własne obliczenia. Atrybucja nie jest zgodą na dowolny kanał publikacyjny.

**Obecne użycie:** wewnętrzne planowanie i odrębny przegląd merytoryczny. Kanał publiczny/komercyjny przyszłej aplikacji pozostaje nierozstrzygnięty i wymaga właściwej oceny konkretnego wydania. Nie przedstawia się tej noty jako opinii prawnej ani uzyskanej zgody na reklamę.

**Pięć osi statusu:** (1) authoring — kompletne T21 w zadeklarowanym zakresie; (2) źródła — autorsko sprawdzone w podanych lokalizacjach; (3) review — oczekuje odrębnej, kompetentnej kontroli; (4) publikacja — przekazane do review, brak dopuszczenia uczniowskiego/produkcyjnego; (5) empiria — brak danych. QG-09 i C-AC-12 pozostają otwarte. Nie wykonano walkthrough G3, implementacji ani lokalnego badania retencji/trudności.

Materiał źródłowy dla agenta implementującego obejmuje wszystkie zawarte treści, ale status **do review** musi zostać zachowany podczas przygotowania aplikacji. Nie należy samodzielnie uzupełniać braków recenzji etykietą „zatwierdzone”, generować nowych odpowiedzi w trakcie nauki ani wyprowadzać nowych wymagań egzaminacyjnych. Delty do wspólnych rejestrów, pełne obliczenia, manifest i rzeczywiste luki zapisano w drugim pliku.

**Właściwy następny krok:** odrębne kompetentne review obu plików T21, a następnie decyzja właściciela o dopuszczonym zakresie w ramach G2. Zgoda na review AI kontraktu B w G1 nie zastępuje tego review. G3 i G4 pozostają osobnymi bramkami.
