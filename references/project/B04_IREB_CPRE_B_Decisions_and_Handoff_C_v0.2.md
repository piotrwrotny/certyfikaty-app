# B04 — Decisions, Gaps and Handoff C v0.2

**Projekt:** IREB CPRE Foundation Level Learning System. **Faza B. Data:** 1.11.2026. **Status: ACCEPTED G1 — jawna decyzja właściciela 2.11.2026; zakres i identyfikacja baseline w R06.**

> **Aktualny status G1:** przyjęte przez właściciela 2.11.2026, z zachowaniem K-04 i uznaniem udokumentowanego review AI za wystarczające dla B/L-B04. Zapisy warunkowe i rekomendacje w B04-05–08 opisują stan sprzed tej decyzji; aktualny zapis jest w B04-09 i R06.

> **Rewizja v0.2 — korekty po R04:** zachowano reguły i treść v0.1; doprecyzowano flagę przeglądu, neutralny słownik językowy i granice G2/G3 oraz nazwy wierszy K. B01–B04 tworzą jedną rewizję. Wynik ponownej kontroli: `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md`. Wprowadzenie poprawek nie jest akceptacją G1.


## B04-01 — Rezultaty i granica fazy

| Artefakt | Odpowiedzialność i rezultat |
|---|---|
| B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md | Kontrakt autorytatywny na poziomie informacji: zakres/kryteria, tożsamości, role, 26 nazwanych relacji, K0–K7, pełny pakiet pytania, źródła, rodziny, dowody, wersje i warunki użycia |
| B02_IREB_CPRE_FR_Traceability_v0.2.md | 38 indywidualnych kart FR-001–FR-038, obowiązki M/W/O, relacje, granularność, proweniencja, dowody, braki, B/C i testowalne AC-001–AC-038; ślad wszystkich części F13 |
| B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md | Trzy istniejące doświadczenia F13.8, reasoning każdej opcji/stwierdzenia, korekta, follow-up, powrót, czasy i ograniczenia; 24 próby negatywne kontraktu (E01–20 zachowane, E21–24 dodane po R04) |
| B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md | Proponowane decyzje, konflikty i granice interpretacji, otwarte ryzyka, obowiązki authoringu i kryteria odbioru C, krytyczny przegląd i rekomendacja G1 |

Wszystkie pięć wymaganych wejść projektu było dostępnych. B01-01 dokumentuje rzeczywisty zakres odczytu i ponownej kontroli zewnętrznych norm. Nie twierdzi się, że ponownie przeczytano całą bibliografię pedagogiczną albo niedostępne obecnie PDF PL/Handbook.

Nie opracowano pełnego curriculum, banku, gotowej rezerwy ani niezależnego modelu mastery. Nie wybrano technologii ani fizycznego modelu danych. Opis przykładów, ich istniejących kontroli i oczekiwanych zdarzeń jest testem kontraktu B, a nie rozpoczęciem produkcji treści C. Żaden materiał nie otrzymał statusu opublikowanego lub niezależnie zatwierdzonego.

## B04-02 — Rejestr nowych decyzji architektonicznych

Wszystkie B-DEC poniżej mają status **FUNCTIONAL DECISION — ACCEPTED G1, decyzja właściciela 2.11.2026 / R06**. Są źródłowo uzasadnionymi rozstrzygnięciami kontraktu informacyjnego, nie nowymi regułami IREB ani wynikami empirycznymi. Po akceptacji G1 są domyślną podstawą pracy C; C nie musi ich odgadywać.

| ID | Decyzja i miejsce definicji | Wymaganie odziedziczone | Alternatywa odrzucona / kompromis |
|---|---|---|---|
| B-DEC-01 | Lokalne kryterium wykonania jest jednostką pokrycia i wniosku; B01-02 | F13 K0/K7, FR-004/006/022, FD-04 | Same tagi EO są za szerokie. Nie tworzymy nowych oficjalnych podnumerów ani pełnej atomizacji każdego słowa |
| B-DEC-02 | Obowiązki foundational mają własną identyfikację zakresu bez wymyślania EO; B01-02 | S-PED, S-DR D2, FR-004/037 | Ograniczenie inwentarza do EO pomija wymaganą terminologię; nie dopisujemy sztucznych EO |
| B-DEC-03 | Role semantyczne mogą współdzielić fragmenty; twierdzenie i reguła są adresowalnymi rolami, nie obowiązkowymi oddzielnymi bytami fizycznymi; B01-03 | F13.1–2, FD-08 | Osobna karta na każdą opcję mnoży treść. Współdzielenie wymaga zachowania lokalnych warunków i zależności zmian |
| B-DEC-04 | Słownik R01–R26 z własnym uzasadnieniem, bez domyślnego RELATED_TO i automatycznej propagacji; B01-05 | F13.3–6, FR-012/014, S-DR D6 | Swobodne linki i podobieństwo tekstu nie definiują funkcji edukacyjnej. Więcej nazw oznacza precyzję ról, nie wymóg mnożenia dokumentów |
| B-DEC-05 | Każde nowe punktowane A/P/K ma pełne K2/QG także w guided practice; B01-07 | FR-007–011/033–034, FD-17/24 | „To tylko trening” nie usprawiedliwia brakującego klucza/rationale. Pewny fragment może być czytany bez udawania kompletnego pytania |
| B-DEC-06 | Wspólna reguła dopuszczona, ale każda opcja ma lokalne rationale: przesłanka–reguła–rozstrzygnięcie; B01-03/07 | F13.5, FR-011/012 | Ani pełne kopiowanie akapitów, ani jeden ogólnik dla całego pytania nie są potrzebne. Koszt review każdej decyzji pozostaje |
| B-DEC-07 | Rodzina grupuje zapamiętywalny rdzeń; bliskość może też łączyć rodziny. Nowa rodzina wymaga review różnicy, nie tylko zmiany tekstu; B01-09 | FR-017/019, FD-11 | Całe EO nie jest rodziną. Nowy identyfikator, parafraza lub przekład nie odświeża pomiaru. Granice rodzin pozostają eksperckie, bez kalibracji |
| B-DEC-08 | Dopuszczenie redakcyjne i eligibility osoby są odrębne; kompletność według U-READ…U-MOCK; B01-12 | F13.7, FR-025/033–034 | Jedno „gotowe” nie wystarcza. Znany item może pozostać praktyką; ujawnienie jednej osobie nie unieważnia puli wszystkich |
| B-DEC-09 | Odrębne osie źródła, recenzji, publikacji i empirii; faktyczna kontrola niezależna od autora przed punktowanym użyciem; rezerwa dodaje kontrolę formy/przecieków; B01-04 | FR-034, S-DR D7/D11 | Drugi LLM nie jest niezależną recenzją. Nie wymagamy fikcyjnej kalibracji przed małym pilotem. Kontrole języka/domeny mogą łączyć kompetencje jednej niezależnej osoby, jeśli zakres jest jawny |
| B-DEC-10 | Odpowiedź i warunki są historią faktów; kwalifikacja dowodu jest wersjonowaną interpretacją. Dwa czasy per kryterium; B01-10 | F13 K7, FR-010/018/020/022 | Jeden „last studied” albo flaga assisted/known nie wystarczają. Więcej kontekstu zapobiega nieuprawnionej etykiecie retencji |
| B-DEC-11 | Nie wprowadzać algorytmu mastery. Pięć kategorii i proponowane parametry pilota zachowują statusy źródłowe; B01-10 | FD-13–16/21–22, FR-022/024 | „Dwie rodziny” nie staje się nową normą; „trzy razy 80%” nie daje automatu gotowości. Agregacja ma zachować kryteria i liczby obserwacji |
| B-DEC-12 | Zmiana klucza, źródła, relacji lub rodziny uruchamia jawny przegląd wpływu; historia nie jest nadpisywana; B01-11 | FR-035, FD-24 | Ciche przeliczenie albo usunięcie niepewnego itemu ukrywa błąd. Przeliczenie możliwe tylko przy wystarczających danych; inaczej obserwacja niediagnostyczna |
| B-DEC-13 | Tożsamość sensu, etykieta PL/EN, parafraza, przekład i prawa do użycia są odrębne; B01-03/11 | FR-031/034/037, FD-25 | Oficjalny polski termin nie poświadcza oficjalnej polskiej definicji zdaniowej. Publiczny dokument nie poświadcza dowolnego użycia |
| B-DEC-14 | Widoczność określa znaczenie informacji: także tytuł, alt, źródło i tag mogą pomagać; B01-10/12 | F06, FR-018/019/026/036 | Zamknięcie przycisku „hint” nie wystarcza. Technologie dostępu nie są pomocą merytoryczną; wadliwy opis może nią zostać. Dopuszczony neutralny słownik językowy bez definicji RE jest warunkiem profilu, nie pomocą dziedzinową; Glossary CPRE pozostaje pomocą RE (K-10) |
| B-DEC-15 | Wiersz 4 ILL-K01 ma lokalny cel KRY-X01 bez oficjalnego EO. Zachować ilustrację i score, wykluczyć nieuzasadnione punkty z rezerwy CPRE; B01-02/12 i B03-K | F13.8 Experience 3, FR-004/009/025 | Nie dopisywać EO ani cicho usuwać wiersza. Nowe zadanie pomiarowe po G1 musi mieć własny, jawny zakres |
| B-DEC-16 | Pełna korekta i diagnoza to różne zobowiązania; pełna naprawa wymaga follow-up, zwykły feedback nie wymaga hipotezy; B01-08 | F13 K4/F13.5/7, FR-015/016 | Pełna diagnostyka każdego błędu jest nadmiarem. Sama lektura nie poświadcza poprawy; brak follow-up daje jawnie słabszy rezultat |

### Decyzje funkcjonalne zachowane

FD-01–07, FD-10, FD-12–14, FD-17, FD-24–25 są obsługiwane kontraktami bez zmiany zachowania. Odrzucenia FD-08/09/11/15/18/23 pozostają zakazami: Concept per dystraktor, pewna diagnoza z wyboru, transfer z tożsamego itemu, niezwalidowany procent mastery/p(zdania), pełny mock na pilocie oraz autorytatywny klucz na żywo.

FD-16/19/21 pozostają odroczone: automat „trzy mocki”, globalny graf i zaawansowana adaptacja. FD-20/22 są eksperymentalne, nie wymagane przez model. FD-26–28 nie są przywracane do zakresu. Żadna decyzja B nie oznacza wznowienia badań UX lub pedagogicznych.

## B04-03 — Sprzeczności, napięcia i jawna interpretacja

| ID | Źródła i problem | Rozstrzygnięcie proponowane bez cichej zmiany | Wpływ i decyzja |
|---|---|---|---|
| K-01 | S-PED/S-DR: Handbook nieodczytany; późniejszy S-BP: częściowy przegląd przez certyfikatora; obecny odczyt nieskuteczny | Zachować trzy zakresy dostępu. W B wersja potwierdzona katalogiem, wnętrze nieweryfikowane ponownie | Nie blokuje semantyki. C musi sprawdzić faktycznie używane objaśnienia; nie dziedziczy pełnego review |
| K-02 | S-DR D8/D15 proponuje trzy nieznane formy ≥80%; aktualny S-BP FD-16 odracza automat | Aktualny blueprint rozstrzyga zachowanie: wskaźnik historyczny jest hipotezą, nie bramką gotowości | FR-024/025 zachowują profil dowodów. Nie tworzyć pola „gotowy po trzech” jako zaakceptowanej reguły |
| K-03 | Starsze D6/D12 pokazują granice w kontekście EO4.1.1 L3; aktualne F13.8 A mierzy EO2.2.2 L2 | Zadań nie utożsamiać. Stosować mapping aktualnej ilustracji A; wyznaczanie granic L3 wymaga innego wykonania | Nie zmieniono EO ani normy. B03-A nie poświadcza L3; C rozwija odpowiednie kryteria dla każdego użycia |
| K-04 | F13.8 K punktuje cztery wiersze, lecz czwarty jest pomocniczym wnioskiem bez odrębnego podcelu; zadanie ma wspierać przygotowanie egzaminacyjne | Zachować wszystkie wiersze i 1/2 przykładowego wyniku. KRY-X01 jest pomocniczy; ten pakiet nie trafia bez dalszego uzasadnienia do oficjalnie zakresowej rezerwy CPRE | Właściciel akceptuje ograniczenie B-DEC-15. C tworzy osobną zgodną pozycję pomiarową lub zgłasza jawną propozycję nowej wersji; nie wymyśla EO |
| K-05 | Plan 12 komórek, 24 reserved itemy, a możliwe oczekiwanie trzech nieznanych faz po 12 | Zachować aktualne ostrzeżenie F14: rezerwa wystarcza liczebnie na dwie takie formy, nie trzy; nie jest to psychometryczne minimum | C wybiera jawny plan wykorzystania przed ekspozycją. Nie zwiększać automatycznie budżetu ani używać ponownie jako „nieznane” |
| K-06 | „Prerequisite konieczny” może wyglądać jak zakaz pominięcia; FR-014 pozwala pominąć znaną podstawę | Konieczność dotyczy wiedzy do określonego działania, nie ukończenia lekcji. Wymaga argumentu i zakresu; bez review brak wymuszenia | Zachowana sprawczość, kontrola cykli i lokalny cel. Nie projektować sztywnego course gating |
| K-07 | D10 opisuje pełny pakiet z nową kontrolą; F13.7 dopuszcza feedback bez dostępnego wariantu | K2 musi być kompletne dla scoringu/explanation; pełna U-REMEDIAL dodatkowo wymaga follow-up. Brak follow-up ogranicza obietnicę naprawy, nie musi blokować samowystarczalnego practice | Rozstrzygnięcie zakresu kompletności zgodne z FR-033. C nie oznacza korekty bez kontroli jako zweryfikowanej poprawy |
| K-08 | Opis K po tygodniu może sugerować jeden odstęp dla wszystkich jego EO | Czasy są per kryterium. Dane KRY-K01 nie uzupełniają nieznanej historii KRY-K02 ani X01 | B03-K/E18 pokazuje ograniczenie. To doprecyzowanie K7, bez zmiany scoringu |
| K-09 | BP F09/F10/F11 udostępnia oznaczanie do powrotu; F13 i dawne B02 nazywają flagi opcjonalnymi | Dostępność oznaczania jest obowiązkowa, użycie flagi przez ucznia opcjonalne. Brak oznaczenia nie jest brakiem odpowiedzi ani dowodem wiedzy | R-B01 usunięta w B01-12 i B02/AC-026; E21. To interpretacja zachowująca F09, bez usuwania funkcji |
| K-10 | Dawny zamknięty katalog widoczności B pomijał wyjątek językowy z FR-018/026 i F10/F11 | Dopuszczony neutralny słownik językowy bez definicji RE jest odnotowanym warunkiem profilu, nie pomocą RE. Glossary CPRE pozostaje zamknięte; nie wymaga się budowania słownika | R-B02 usunięta w B01-10/12, B02/AC-018/026 i B-DEC-14; E22 |
| K-11 | B01-14 grupował G2/G3 i mógł narzucać walkthrough z uczniem jako warunek obu bramek | G2 odbiera treść i jej review; G3 osobno weryfikuje przebiegi i symulację czasu. Udział uczniów zależy od jawnego protokołu. Empiryczny pilot i prawdziwa retencja to odrębna walidacja | R-B03 usunięta w B01-14 i B04-05; E23. Zachowano START §6 i możliwość walkthrough z kartami/moderatorem |

Nie znaleziono sprzeczności między tekstem F13 w blueprintcie i samodzielnym kontrakcie — porównanie wykazało zgodność. Nie ma podstaw do zmiany przyjętego A/P/K scoringu; N-REG potwierdza użyte reguły. Rozbieżność dostępu do źródła nie jest dowodem różnicy jego zawartości.

## B04-04 — Luki, ryzyka i wymagane kontrole zewnętrzne

| Luka / ryzyko | Aktualny status | Właściciel i warunek zamknięcia | Bramka, której dotyczy |
|---|---|---|---|
| L-B01 Ponowny odczyt Syllabus PL i równoważność fragmentów EN/PL | Obecny adres PL niedostępny; poprzednia kontrola w S-DR nie jest nowym audytem | C pozyskuje właściwą wersję i porównuje użyte cele, warunki i terminy; nie rekonstruuje oficjalnego PL brzmienia | G2 dla używanego materiału PL, nie struktura G1 |
| L-B02 Handbook | Wersja z katalogu, brak obecnego odczytu; wcześniejszy zakres częściowy | C sprawdza wykorzystywane sekcje i zgodność z profilem. Nie potrzebuje czytać nieużywanych 161 stron tylko dla etykiety | G2, zależnie od twierdzeń |
| L-B03 Pełny inwentarz foundational | Model jest, ale kompletna lista i oznaczenia nie zostały tu przygotowane | C przeprowadza źródłowy audyt oznaczeń, także gdy formatowanie PDF nie zachowuje się w ekstrakcji tekstu | Rozszerzenie korpusu/Level 2; pilot tylko jawny wycinek |
| L-B04 Niezależny review kontraktu B | v0.1: autorski przebieg krytyczny. Następnie odrębnie zlecone review AI R04 oraz korekty i kontrola v0.2 w R05; bez poświadczenia recenzji przez niezależnego człowieka | Właściciel ocenia B-DEC, K-04 i wystarczalność jawnie opisanego review AI dla G1. Nie deklaruje się wykonania ludzkiej recenzji eksperckiej ani recenzji korpusu C | Rozstrzygnięte dla G1: właściciel 2.11.2026 przyjął review AI jako wystarczające do odbioru B. Nie poświadczono recenzji człowieka; review treści C pozostaje wymagane |
| L-B05 Niezależne review treści i kluczy | Ilustracje FOR REVIEW; brak rzeczywistego dopuszczenia | C dostarcza odrębną kontrolę merytoryczną, językową, scoringu i praw, z tożsamością, datą i zakresem recenzji | G2, wszystkie punktowane użycia |
| L-B06 Granice rodzin i trudność | Proponowane grupowanie, brak kalibracji | C dokumentuje R20/R21, reviewer sprawdza ryzyko zapamiętanego rozwiązania. Ekspercka trudność oznaczona jako przewidywanie | G2 rezerwy; statystyczna równoważność pozostaje poza obietnicą |
| L-B07 Nowe, nieujawnione kontrole odroczone | Nie zostały napisane w B i nie są ukryte w dokumentach | C przygotowuje oraz oddziela role przed udostępnieniem. Osoby znające rozwiązania nie są nową próbą tych itemów | G2/G3, plan pilota |
| L-B08 P-FU i rubryki otwartych odpowiedzi | Kierunek i role określone, pełna redakcja i review niegotowe | C dopisuje wystarczające warunki, dopuszczalne odpowiedzi/kontrprzykłady i źródło oceny | G2; samoocena nie zastępuje niezależnej oceny |
| L-B09 Prawa przyszłej publikacji | Wskazano źródła i rodzaje użycia; nie poświadczono konkretnego kanału/komercyjnej dystrybucji korpusu | C dokumentuje zakres użycia i podstawę dla każdego zapożyczenia/opracowania. Nieustalone użycie blokuje dany materiał | G2 i każde późniejsze wydanie |
| L-B10 Rzeczywista historia aktywności i kontaktów zewnętrznych | Brak rzeczywistych danych ucznia; kontakty poza aplikacją nie są w pełni obserwowalne | Późniejsza warstwa aktywności zachowuje fakty; dobrowolne deklaracje mają jawne pochodzenie | G3/G4; zawsze ograniczenie retencji/nowości |
| L-B11 Skuteczność sond i metody nauki | Brak lokalnego pomiaru; hipotezy z S-BP F15 zachowane | Późniejszy pilot bada odpowiednio treść, proces i późniejsze wykonanie. Nie oznaczać diagnozy jako zwalidowanej na podstawie autora | Po G2/G3; nie warunek wymyślania nowego mastery w B |
| L-B12 Zgodność konkretnej rezerwacji i profilu czasu | Nie sprawdzano warunków organizatora dla użytkownika | Potwierdzić przy planowanej rezerwacji; jawny status niepotwierdzonego profilu, bez automatycznych uprawnień | Przed obietnicą zgodności konkretnego egzaminu |
| L-B13 Dostępne reprezentacje i nawigacja | Wymagania semantyczne określone, brak testu produktu z czytnikiem/klawiaturą | C przygotowuje treść równoważną; przyszła realizacja i testy sprawdzają zachowanie | G2 treści, G3/G4 wykonania |

**Ryzyka jakości wysokiej wagi:** błędny klucz uczy niepoprawnej reguły; wiersz 4 ILL-K01 tworzy fałszywe pokrycie oficjalne; ujawniony follow-up pozoruje rezerwę; świeża instrukcja pozoruje retencję; samoocena pozoruje niezależne uzasadnienie. Wszystkie mają blokadę lub jawny fallback w B01/B02 i próbę negatywną w B03.

**Niepewność, którą należy zachować:** brak kalibracji, brak poufnych wag egzaminu, ograniczona obserwacja działań zewnętrznych i brak walidacji prognostycznej. Nie zamykać ich etykietą „sprawdzone”, jeśli wykonano jedynie kontrolę źródłową.

## B04-05 — Dokładny kontrakt przekazania do C

### Warunek rozpoczęcia

C otrzymuje B01–B04 **po akceptacji G1** albo po jednoznacznej decyzji właściciela o zatwierdzeniu określonej rewizji/zakresu. Niniejszy pakiet nie jest taką decyzją. Do tego czasu nie zaczyna się automatycznie authoringu, wdrożenia ani przygotowywania pełnego banku.

Po G1 C ma pracować według poniższych ustaleń, bez ponownego projektowania podstawowych ról. Jeśli źródło podważy znaczenie, klucz lub zakres, C zapisuje zmianę i wpływ; nie przedefiniowuje samodzielnie zaakceptowanej semantyki.

### Obowiązki wejścia/wyjścia według roli

Każda tworzona jednostka dziedziczy metadane tożsamości, rewizji, języka, autorstwa/pochodzenia, zakresu, źródeł, praw, review i dopuszczonego użycia. To **pola informacyjne authoringu**, nie specyfikacja formatu, tabel lub schematu technicznego.

| Jednostka, którą C ma przygotować | Konkretne informacje wymagane na wyjściu | Warunek sprawdzenia |
|---|---|---|
| Rejestr źródeł i praw | Tożsamość/wersja/data/język, dostęp i zakres odczytu, lokalizacja, wspierane twierdzenie, właściciel, zamierzone użycie i podstawa, stan ustaleń | Każdą istotną regułę i klucz da się odtworzyć; samo istnienie URL nie wystarcza |
| EO/kryterium/obowiązek terminu | Oficjalne EO i poziom albo podstawowy termin z normy; lokalny identyfikator, czynność, warunki, rezultat, wyłączenia i metoda oceny; zakres pełny/częściowy | Bez nowych oficjalnych EO; częściowe kryterium nie zamyka nadrzędnego celu |
| Wpis terminologiczny | Sens, PL/EN preferowane, aliasy, odradzane/mylące formy, źródło pary, definicja/odsyłacz, status autorskiej parafrazy | Ta sama terminologia i zakres w karcie, pytaniu, rationale i feedbacku |
| Concept/K1 | Znaczenie, warunki i granice, krótki rdzeń, przykład, konieczny kontrast, powiązana próba i zakres ujawnianych kryteriów | Uczeń może zrozumieć regułę bez ukrytych założeń; zbędnych oddzielnych kart nie wymaga się |
| Comparison/Example/Counterexample/Worked Scenario | Role przypadków, wspólna oś, przesłanki i kroki, poprawna reguła; dla kontrprzykładu dokładne obalane uogólnienie | Przypadki obu stron rzeczywiście odróżnione; autorska historia nie udaje oficjalnego przykładu |
| Question Knowledge Package | Wszystkie obowiązki B01-07, w tym każde rationale, polaryzacja, w/k/m, komplet klucza, primary criterion, pomocnicze role, rodzina i przeznaczenie | QG-01–10 dla zamierzonej funkcji; brak jednej opcji nie jest akceptowany jako „prawie gotowe” |
| Otwarte zadanie/rubryka | Kryteria, konieczne elementy, dopuszczalne alternatywy, odpowiedzi graniczne, błędy krytyczne, sposób/źródło oceny | Samoocena, klucz klasyfikacji i niezależna ocena uzasadnienia są osobno nazwane |
| Relacja K3 | R, role i wersje końców, kierunek, warunki, jedno zdanie sensu, cel, argument, proweniencja i faktyczny review | Całe P-R; R14 wyłącznie do konkretnego działania, bez nieuzasadnionego cyklu |
| Korekta K4 | Obserwacja docelowa, poprawna reguła i przykład, follow-up, kryterium wyjścia, alternatywne wsparcie | Nie ma automatycznej pętli; diagnoza nie jest wymagana do zwykłego feedbacku |
| Misconception/sonda — jeśli proponowana | Błędna reguła, poprawna reguła, alternatywy, przewidywania odpowiedzi, timing, metoda oceny i warunki nierozstrzygnięcia | R16/17; popularność błędu i diagnoza osoby nie są wywiedzione z autorstwa dystraktora |
| Rodziny i warianty K5 | Opis wspólnego rdzenia, członkostwo, przekłady, bliskie pary, istotne różnice, przewidywany poziom/trudność i review | Nowa rodzina nie wynika z nowej nazwy; ogólna nauka reguły nie jest przeciekiem wszystkich rodzin |
| Revision Prompt | Kryterium, polecenie bez rozwiązania, klucz/rubryka, wariant/rodzina, rola pomiarowa lub treningowa | Treść nie zawiera reguły, którą ma wydobyć; rzeczywiste czasy zostawi dla aktywności |
| Plan sprawdzenia K6 | Deklarowany zakres, kryteria, liczba/formaty/punkty/rodziny, ograniczenia, czas/brak limitu, pomoc i finalizacja, ochrona rezerwy | Wycinek jest opisany jako wycinek; plan przygotowawczy nie udaje poufnych wag IREB |
| Learning Unit | Cel, zakres wejścia/wyjścia, objaśnienie i próby, warunek przerwania/zakończenia, plan późniejszej kontroli | Bieżące zakończenie nie oznacza retencji; karta i comparison mogą współdzielić rdzeń |
| Manifest wydania | Faktycznie dostępne treści, zakres pełnych/częściowych EO i terminów, role i liczby niezależnych rodzin, możliwe U-*, pozostałe luki | Plan 9 EO +3 fragmenty nie jest stanem wykonanym bez audytu; mianowniki są jawne |
| Komunikaty i reprezentacje | Nazwy i stany A/P/K, opis braków, instrukcja konwersji, cel linku, równoważne alternatywy, neutralne opisy do powrotu | Nie ujawniają klucza przed odpowiedzią; umożliwiają zachowanie sensu przy późniejszej obsłudze klawiaturą/czytnikiem |

**C nie produkuje jako korpusu:** historii ucznia, punktów z niewykonanych prób, odstępów od nieodnotowanych kontaktów, potwierdzonych diagnoz osób, empirycznych trudności bez danych ani etykiety G1/G2 accepted. Może przygotować jawnie syntetyczne przypadki do późniejszego testowania kontraktu.

### Kolejność i najbliższy zakres C

1. Potwierdzić używane wersje i prawa; zamknąć luki dostępu w granicach potrzebnej treści. Źródła EN/PL porównywać dla konkretnych terminów i rozstrzygnięć.
2. Przygotować mały przekrój: kontekst/granica, rodzaje wymagań i jawna traceability. Użyć kryteriów B01-02 jako propozycji, zweryfikować ich zakres i nie udawać pełnego EO.
3. Opracować rdzenie K1, porównania i ich źródłowe reguły, następnie kompletne pytania A/P/K i wszystkie rationale. Zachować wiersz 4 ILL-K01 (KRY-X01) jako pomocniczą ilustrację albo przedstawić jawnie osobny wariant do właściwej rezerwy.
4. Przygotować odpowiedni follow-up do każdej wybranej korekty oraz role nieujawnionych rodzin do późniejszego pomiaru. Przydzielić rezerwę do faz przed ekspozycją; nie umieszczać jej rozwiązań w materiale czytanym przez przyszłego uczestnika pomiaru.
5. Opracować źródłowo poprawne rubryki oraz jawne źródło oceny; hipotezy i sondy tylko tam, gdzie funkcja diagnozy jest rzeczywiście uruchamiana.
6. Wykonać niezależne review treści i usunąć wady krytyczne, następnie przedstawić pakiet do G2. Po G2 osobno przeprowadzić G3: A/P/K, korektę, nową próbę, powrót i symulację odroczonej kontroli na konkretnych wersjach. Udział ucznia określa jawny protokół; dopuszczalny walkthrough z kartami i moderatorem nie jest empirycznym potwierdzeniem retencji ani warunkiem wcześniejszego G2.

Rozszerzenie do audytu planowanych 9 pełnych EO i 3 fragmentów jest kolejnym zakresem authoringu, nie warunkiem deklarowania, że pierwsze trzy ilustracje go już pokrywają. Budżet 60+24 pozostaje hipotezą nakładu. Zwiększenie korpusu nie zastępuje kompletności ścieżek.

### Dokładne kryteria odbioru wyjścia C

| ID | Kryterium odbioru | Weryfikacja / przypadek negatywny |
|---|---|---|
| C-AC-01 | Każda istotna reguła, klucz i rationale mają źródło, wersję i lokalizację oraz jawny autorski krok zastosowania | Reviewer odtwarza każde rozstrzygnięcie. Brak jednego źródłowego wsparcia nie jest uzupełniany przez LLM |
| C-AC-02 | Wszystkie wybrane kryteria mają poziom i zakres, OPERATIONALIZES/SUPPORTS/MENTIONS rozdzielone | Jedno A o zasadzie kontekstu nie zamyka EO2.2.2 ani EO4.1.1; KRY-X01 nie dostaje fikcyjnego EO |
| C-AC-03 | PL/EN i parafrazy są kontrolowane w całym przekroju | Wyrażenia „quality”, „niefunkcjonalne”, „constraint” nie są dowolnie wymieniane; autorskie PL zdanie nie udaje oficjalnego tłumaczenia |
| C-AC-04 | Rdzeń nauki obejmuje warunki i przykład, a konieczny comparison ma oś i oba przypadki | Zestaw dwóch definicji bez kryterium różnicy nie spełnia comparison; zbędny prerequisite nie jest wymuszany |
| C-AC-05 | Trzy pełne pakiety A/P/K mają dostateczne stemy, komplet kluczy i wszystkie rationale | Kontrola 4/5/4 decyzji istniejących ilustracji albo pełnych decyzji nowej jawnej rewizji; brak rationale pominiętej poprawnej P blokuje publikację |
| C-AC-06 | Scoring i parametry zachowują F11/N-REG | Sprawdzić A: błąd/brak/nadmiar; P: pełny/częściowy/niedobór/nadmiar oraz ułamki; K: błąd/blank/obie wartości, zmienne m i w; suma po punktach, bez zmiany strony progu przez wyświetlane zaokrąglenie |
| C-AC-07 | Każda wymagana ścieżka opcji do reguły ma komplet uzasadnionych relacji | R08→R09→potrzebny materiał działa bez similarity; niezweryfikowany R14 znika jako obowiązek, pozostaje powrót |
| C-AC-08 | Pełna remediacja ma adekwatny follow-up i wyjście; konkretna diagnoza ma alternatywy i sondę | Po dwóch nieudanych follow-up inna propozycja/przerwa; bez sondy tylko neutralna korekta; sonda po instrukcji nie dowodzi pierwotnej przyczyny |
| C-AC-09 | Follow-up i późniejsza kontrola mają określone rodziny, bliskość i role | Parafraza/zmiana nazw/przekład nie udają nowego pomiaru; nieujawniona rezerwa jest rzeczywiście odseparowana od nauki tej osoby |
| C-AC-10 | Rubryki i źródła oceny pozwalają oddzielić klasyfikację od swobodnego uzasadnienia | Samoocena według dobrego wzorca nadal samooceną; poprawność części zamkniętej nie zatwierdza części otwartej |
| C-AC-11 | Fragmenty mają opis zakresu istotnego kontaktu i ujawniania rozwiązania | 7 dni od próby + świeża lektura nie daje retencji; lektura innego kryterium nie resetuje całego EO; nowość oceniona przed prezentacją |
| C-AC-12 | Każdy pakiet ma faktyczne, odrębne od autora review oraz ustalone zamierzone prawa | Zapisać kto/kiedy/co sprawdził i co dopuścił. Status szkicu i empirycznej nieweryfikacji pozostaje jawny |
| C-AC-13 | Reprezentacje i komunikaty zachowują czynność oraz granice widoczności | K jednoznacznie wiąże wiersz z wartościami; alt nie daje klucza; błędu obsługi nie opisuje się jako błędu wiedzy |
| C-AC-14 | Istnieje audyt manifestu, luk, planu rezerwy i ślad korekt wersji | Nie obiecywać pełnego FL ani trzech nieznanych form po 12 z 24 pozycji. Zmiana klucza wskazuje dotknięte interpretacje, bez usuwania odpowiedzi |

Przedstawienie tych dowodów umożliwia decyzję **G2 — C accepted**, ale jej nie zastępuje. Brak materiału/review może być uczciwie wykazany; nie spełnia jednak kryterium dostępności funkcji wymagającej tego materiału.

## B04-06 — Decyzje wymagające właściciela projektu

Do zatwierdzenia jest **kontrakt v0.1 jako całość**, w szczególności:

1. Lokalna granularność kryterium i oddzielna kontrola foundational terms — B-DEC-01/02.
2. Minimalne role, pełne rationale i warunkowa kompletność funkcji — B-DEC-03–06/08/16.
3. Granice rodzin, kwalifikacja per osoba i rzeczywisty niezależny review — B-DEC-07/09.
4. Dwa czasy, rozdzielenie danych/interpretacji i brak nowego mastery — B-DEC-10–12.
5. Kontrola języka, praw i wszystkich kanałów ujawniania — B-DEC-13/14.
6. Zachowanie wiersza 4 ILL-K01 (KRY-X01) jako pomocniczego, z ograniczeniem użycia rezerwowego — B-DEC-15 i K-04.

Nie jest potrzebna na G1 decyzja o technologii, liczbie tabel, grafie wizualnym, docelowej wielkości banku ani matematycznym progu mastery. Ostateczna rodzina konkretnego itemu i prawa konkretnego opracowania są zadaniami redakcyjnymi C w ramach ustalonych reguł, a nie nieokreślonymi podstawami architektury.

Przed startem C należy wskazać ścieżkę niezależnego review treści i dopuszczony zakres użycia pierwszego korpusu. Przed pomiarem C/pilot musi zatwierdzić przydział rezerwy do faz. Nie zakłada się automatycznie trzech niezależnych pomiarów ani komercyjnej publikacji.

## B04-07 — Krytyczny przegląd autorski i rekomendacja G1 — zapis z v0.1

> Zachowany zapis kontroli i rekomendacji pierwotnej rewizji v0.1; liczby 20 przypadków i K-01–08 odnoszą się do tej rewizji. Aktualne uzupełnienie v0.2 oraz rekomendacja po korektach są w B04-08 i R05.

Przegląd przeprowadzono jako **odrębny przebieg kontroli autorskiej**, oceniający kontrakt z perspektywy niezależnego semantic design reviewera. Obejmował sprawdzenie pełnego śladu FR, zgodności nazw i odwołań, zależności K/R, przebiegów A/P/K oraz prób zanegowania wniosków o wiedzy. Nie był recenzją innej osoby ani niezależnym zatwierdzeniem domenowym. Tego wymagania nie oznaczono jako wykonane przez samą zmianę roli modelu.

| Kontrola wymagana przez brief B | Wynik przeglądu | Granica wyniku |
|---|---|---|
| Wszystkie 38 FR traceable | Każdy ma indeks, kartę i indywidualne AC; brak wyłączonego FR | Ślad dokumentacyjny, nie dostarczona funkcja aplikacji |
| Każda wybrana zdolność ma kontrakt | K0–K7, role, R i U-* obejmują CAP-01–20, F13.1–8 | C musi wypełnić konkretne treści i proweniencję |
| A/P/K wykonalne semantycznie | Trzy przebiegi rozstrzygają wszystkie opcje, korektę, kontrolę i powrót; braki publikacyjne są nazwane | Brak zrecenzowanej rezerwy i pełnej redakcji P-FU; brak rzeczywistej sesji ucznia |
| Pomoc, scoring, ekspozycja i dowody rozdzielone | Oddzielne role i czasy, ograniczenie wniosków per kryterium | Zewnętrzna pomoc pozostaje nie w pełni obserwowalna |
| Krytyczne braki mają bezpieczny wynik | LUKA-01–11, bramki QG/U oraz 20 przypadków negatywnych | Nie przetestowano technicznego egzekwowania w aplikacji |
| C może zacząć bez zgadywania podstaw | Zdefiniowane pola, role, kolejność i C-AC-01–14 | Dopiero po akceptacji G1; własny review nadal potrzebny |
| Nierozstrzygnięcia i wymagane zewnętrzne przeglądy jawne | Rejestr K-01–08 i L-B01–13, status FOR REVIEW wszystkich artefaktów | Brak zewnętrznego niezależnego review pozostaje otwarty, nie jest ukrytym „PASS” |

### Wnioski z adversarial review

Kontrola formalna porównała wszystkie 38 identyfikatorów i tytułów FR z F09; sprawdziła indywidualne pola kart i 38 AC, komplet definicji oraz ograniczeń R01–R26, 20 przypadków negatywnych, 16 B-DEC, 14 C-AC i odwołania do plików/sekcji. F13 oraz wspólne F10–F12/F14 w dwóch źródłach porównano i stwierdzono zgodność. Sprawdzono arytmetyczne przykłady ułamków i częściowych wyników. To kontrola dokumentów, bez testowania aplikacji lub wyników uczniów.

Przegląd spowodował także doprecyzowania: warunkowość sond w indeksie FR-002, lokalne kryterium formatu bez oficjalnego EO, objęcie sond otwartych wymaganiem oceny, rozdzielenie nazwy domenowej REG-K od reguły scoringu oraz jawny kontrakt wszystkich 11 przejść F06. W szczególności przejście Concept→Question wymaga związku z rozstrzygającą regułą i mierzonym kryterium; wspólny EO nie wystarcza.

- Gdy połączymy SUPPORTS i MEASURES, A zawyża L3. Model odrzuca to przez R02/R05/R06 i zakres KRY-A01.
- Gdy połączymy czas ostatniej próby z kontaktem, świeże REG-K zawyża retencję. Dwa czasy per kryterium usuwają ten błąd bez nowego algorytmu.
- Gdy potraktujemy każdą opcję jako osobną umiejętność, P i K mnożą dowody. Model zachowuje decyzje, lecz nie ich domniemaną niezależność.
- Gdy zaakceptujemy nową rodzinę tylko z deklaracji autora, follow-up po korekcie pozoruje transfer. R21 i review oddzielają wartość dydaktyczną od nowości pomiarowej.
- Gdy nazwiemy wszystkie przykłady „recenzowane”, zniknąłby koszt rzeczywistej kontroli C. QG-09 i jawny status B03 blokują taki skrót.
- Gdy cały K zostanie uznany za normatywny pomiar CPRE, wiersz 4 ILL-K01 stworzy nieuprawniony punkt pokrycia. B-DEC-15 zachowuje zaakceptowaną ilustrację i ogranicza jej dalsze użycie.

### Rekomendacja

**Pakiet jest gotowy do przeglądu G1; rekomenduję przyjęcie kontraktu v0.1 po rozpatrzeniu B-DEC-01–16 i potwierdzeniu ograniczenia K-04. G1 nie zostało zamknięte.**

Jeżeli wymagany w briefie „niezależny przegląd” oznacza recenzję przez inną osobę/agenta, ten warunek pozostaje otwarty jako L-B04. Odrębny autorski przebieg i kontrole formalne nie są jego zamiennikiem. Właściciel powinien objąć to kontrolą G1, a rzeczywiste klucze i pakiety treści — niezależną kontrolą G2.

Po akceptacji reguł modelu nie ma potrzeby odgadywania podstawowej struktury przez C. Pozostające braki są nazwanymi zadaniami pozyskania źródeł, authoringu, recenzji i późniejszej walidacji. Nie są zgodą na publikację ilustracji, deklarację pełnego przygotowania ani rozpoczęcie implementacji. Następny krok wymaga decyzji właściciela projektu o G1.


## B04-08 — Korekty v0.2 i rekomendacja po R04 — zapis przed decyzją właściciela

Na zlecenie właściciela wprowadzono R-B01–04. R-B01–03 są opisane również jako K-09–11; K-01–08 i B-DEC-01–16 zachowują identyfikatory. B-DEC-14 uzupełniono, a skróty odnoszące się do wiersza 4 ILL-K01 zastąpiono nazwą jednoznaczną. Nie zmieniono kluczy, stemów, wag, m/k, mapowań kryteriów ani wyników A/P/K. Nie utworzono korpusu C ani projektu aplikacji.

B03 zachowuje E01–20 i dodaje E21–24 do logicznej kontroli korekt oraz ograniczenia K-04. R05 podaje porównanie rewizji, wyniki kontroli, hashe i plan uporządkowania Sources. Wcześniejszy raport R04 pozostaje dowodem przeglądu v0.1, a nie aktualnym zleceniem ponowienia tych samych poprawek.

**Aktualna rekomendacja: pakiet B01–B04 v0.2 jest przygotowany do decyzji właściciela o zamknięciu G1 w zakresie kontraktu semantycznego, z zachowaniem K-04.** Usterki R-B01–04 są usunięte i objęte kontrolą dokumentów. Pozostaje decyzja właściciela o przyjęciu tej rewizji, B-DEC-01–16, ograniczenia K-04 i wystarczalności opisanego review AI dla L-B04. Samo przygotowanie poprawek ani niniejsza rekomendacja nie nadają G1 statusu accepted.

Review AI nie jest przedstawiane jako recenzja przez niezależnego człowieka. Odrębne review źródeł, kluczy i treści C, prawa zamierzonego użycia oraz odbiór G2/G3 pozostają wymagane we właściwych etapach. Zgoda na G1 nie jest zgodą na publikację ilustracji, pełny mock ani deklarację pełnej gotowości egzaminacyjnej.

## B04-09 — Decyzja właściciela o G1 z 2 listopada 2026

Właściciel potwierdził zamknięcie G1 dla B01–B04 v0.2, zachowanie ograniczenia K-04 i wystarczalność udokumentowanego przeglądu AI do odbioru kontraktu B. Przyjęty zakres odpowiada wnioskowi R05 §6: B-DEC-01–16, K-01–08 i doprecyzowania K-09–11. L-B04 jest rozstrzygnięte dla tej bramki jako jawna akceptacja zakresu review AI.

Decyzję, datę i SHA-256 czterech dokumentów przed niniejszą aktualizacją administracyjną zapisano w `R06_IREB_CPRE_G1_Owner_Decision_v0.1.md`. Zmiana statusu B04, dopisanie decyzji oraz rozliczenie L-B04 nie zmieniają reguł semantycznych, tabel B-DEC/K ani C-AC-01–14. Zatwierdzony plik B04 sprzed zapisu pozostaje w paczce v0.2 i historii wersji.

C może wznowić authoring po uzgodnieniu przygotowania C01–C04 z przyjętym B v0.2. Równoległe D może ruszyć na osobne zlecenie i korzystać z zaakceptowanych zachowań oraz kontraktu; przed G4 trzeba sprawdzić flow i ekrany na rzeczywistym C. G2, G3 i G4 pozostają otwarte, a review C wymaga odrębnego wykonania i udokumentowania.
