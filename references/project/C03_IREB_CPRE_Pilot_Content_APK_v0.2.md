# C03 — Pilot Content A/P/K v0.2

**Projekt:** IREB CPRE Foundation Level Learning System. **Data:** 2.11.2026, Europe/Warsaw.  
**Status:** COMPLETE AUTHOR DRAFT / FOR CONTENT REVIEW. **G1:** przyjęte w R06. **G2/G3/G4:** otwarte.  
**Autor:** Agent C / AI. Wszystkie sytuacje, pytania, dystraktory i objaśnienia są autorskim opracowaniem do recenzji; nie pytaniami IREB.  
**Wydanie recenzenckie zawiera rozwiązania wszystkich kandydatów delayed. Dla czytelnika nie jest chronioną rezerwą.**

## C03-01 — Jak używać dokumentu

To rzeczywisty mały przekrój: trzy jednostki nauki, 3 bazowe A/P/K, 3 zamknięte follow-up i 3 zamknięte pozycje kandydujące do odroczonej kontroli. Dodatkowo: 3 otwarte retrieval prompts, 3 otwarte sondy i 1 zadanie wykonawcze L3 z rubrykami. Nie ma wyników uczniów ani danych o trudności, retencji i mastery.

Wszystkie nowe jednostki mają **rewizję treści r1**, język PL z kontrolowanymi terminami EN; źródła według C01 v0.2. Źródłowa reguła jest FACT w określonym zakresie, wnioskowanie o scenariuszu — INTERPRETATION. Korekta, kolejność materiału i role wariantów są decyzjami redakcyjnymi; hipotezy pomyłek i rodzin pozostają DESIGN HYPOTHESIS. Materiały nie mają jeszcze odrębnego review ani zgody na punktowane użycie uczniowskie.

### Wspólny kontrakt widoczności

- **[N]** — objaśnienie, przykład, comparison, korekta, wzorzec: materiał Nauki po dopuszczeniu. W aktywnym Sprawdzeniu niewidoczny.
- **[Q]** — wyłącznie stem, jawna instrukcja, opcje/wiersze i maksymalna waga. Może być przedstawiany w prawidłowej próbie po dopuszczeniu.
- **[R]** — klucz, rationale, źródła, mapowanie, reguła punktowania wyniku i rubryka: część recenzencka; w Nauce dopiero po oddaniu odpowiedzi, w Sprawdzeniu po finalizacji całej próby.
- **[D]** — kandydat delayed. Nie wchodzi do zwykłej lektury i eksportu treningowego; obecne pełne wydanie ujawnia go czytelnikowi.

Nagłówki z nazwą pojęcia, EO/kryterium, opis rodziny, podpisy i linki do źródeł są metadanymi redakcyjnymi, nie częścią [Q]. Umieszczenie [D] w tym samym pliku nie chroni treści przed osobą czytającą plik.

**Neutralna instrukcja Sprawdzenia po dopuszczeniu formy:** „Możesz zmieniać odpowiedzi i oznaczać pytania do powrotu do chwili zakończenia całej próby. Oznaczenie jest dobrowolne. Możesz oddać odpowiedzi niepełne. Wynik i wyjaśnienia zobaczysz po zakończeniu całości. Materiały RE są w trakcie niedostępne. Użycie dopuszczonego w profilu neutralnego słownika językowego odnotowujemy osobno; słownik nie może dostarczać definicji RE”.

### Kryteria — zakres, poziom i ocena

| Kryterium projektu | Oficjalny zakres i źródło | Obserwowalna czynność i metoda | Wyłączenie |
|---|---|---|---|
| KRY-A01, sens zachowany z B | Część EO2.2.2 L2, zasada kontekstu; S-A1 | Rozpoznać i wyjaśnić znaczenie zewnętrznego wpływu mimo braku zmiany; A oraz otwarte uzasadnienie według rubryki | Pozostałe zasady EO2.2.2; pełne EO4.1.1 |
| KRY-A02, nowe lokalne kryterium C | Część EO4.1.1 L3; S-A2/S-A3 | Samodzielnie wyznaczyć granice w opisanej perspektywie, odróżnić scope, skorygować podział po zmianie przedmiotu; rubryka C-A-L301 | Wszystkie możliwe domeny, techniki modelowania i trwałość wykonania |
| KRY-P01, sens zachowany z B | Część EO1.1.2 L2; S-P1/S-P2 | Rozróżnić quality od funkcji i narzuconego rozwiązania w podanych warunkach; P oraz uzasadnienie otwarte oddzielnie | Inne perspektywy klasyfikacji, jakość zapisu według EO3.8 |
| KRY-K01, sens zachowany z B | Część EO6.6.3 L1; S-K1 | Rozpoznać dopuszczony sposób zapisu jawnego związku; wskazane wiersze K | Projektowanie systemu traceability i komplet wszystkich form |
| KRY-K02, sens zachowany z B | Część EO6.6.1 L1; S-K2 | Rozpoznać podany powód utrzymywania powiązań | Pełny audyt wszystkich powodów |
| KRY-K03, nowe lokalne kryterium C | Część EO6.6.2 L1; S-K3 | Odróżnić zapis oparty na strukturze/konwencji od jawnego związku na identyfikatorach | Tworzenie narzędzia, modelu lub strategii traceability |
| KRY-X01 | Pomocnicze, bez własnego oficjalnego EO | Ograniczenie wniosku z linku wymaganie–test; historyczne B | Nie jest punktowanym celem nowych K |

KRY-A02/KRY-K03 są identyfikatorami projektu, nie dopisanymi numerami IREB. Bez właściwego wykonania nie powstaje R25 EVIDENCE_FOR. Nie deklaruje się pełnego pokrycia któregokolwiek z tych EO.

## C03-A — LU-C-A: wpływ otoczenia a granice

### A1. Wprowadzenie i wiedza [N]

**Cel:** wyjaśnić, dlaczego element zewnętrzny może być konieczny w analizie wymagań, chociaż nie wolno go zmienić. Przygotowuje to do wyznaczania granic, ale wybór A nie zastępuje samodzielnego wykonania L3.

**Terminy:** system boundary — granica systemu; system context — kontekst systemu; context boundary — granica kontekstu; scope — zakres wytwarzania. Sensy T-01–05 w C02.

**REG-A1 — krótki rdzeń:** najpierw nazwij analizowany system. Następnie sprawdź, jakie zewnętrzne zależności lub warunki mają znaczenie dla jego wymagań. To, czy projekt może je zmienić, jest odrębnym pytaniem. Źródło: S-A1.

**Rozwinięcie:** aplikacja może otrzymywać dane, podlegać regule organizacyjnej albo działać przy określonym zachowaniu ludzi i urządzeń. Pominięcie takiego wpływu może zostawić wymagania bez potrzebnego warunku. Nie każdy obiekt w firmie należy jednak do istotnego kontekstu. Potrzebne jest uzasadnienie znaczenia w przyjętej perspektywie. Wnioski trzeba ponownie ocenić po zmianie zakresu analizowanego systemu lub wiedzy o otoczeniu. Źródła S-A1/S-A2; własne objaśnienie.

**CMP-A — wspólna oś: rola elementu względem analizowanego systemu i swoboda zmiany.**

| Pytanie | Co ustala | Przykład rozstrzygający |
|---|---|---|
| Co jest częścią analizowanej całości? | Granicę systemu | Własny moduł obliczeń w zadanej całości pozostaje wewnątrz |
| Co poza nią ma znaczenie dla wymagań? | Istotny kontekst i jego granicę | Zewnętrzny harmonogram pracy obsługi może ograniczać terminy działania |
| Co wolno kształtować w przedsięwzięciu? | Scope | Moduł wewnętrzny może być niezmieniany, a zewnętrzna procedura — przeprojektowana |

**EX-A:** aplikacja archiwum ma wskazywać materiały dopuszczone do publikacji. Oddzielna umowa z deponentem zabrania publikacji określonych skanów. Umowa jest poza aplikacją, lecz wpływa na regułę udostępniania. Własna aplikacja pozostaje przedmiotem analizy; nie tworzymy osobnego Concept dla każdej umowy.

**CE-A:** obala „ten sam właściciel wystarcza do istotności”. Archiwum posiada też system sterowania podlewaniem roślin. W opisanej sytuacji nie wpływa on na aplikację ani jej wymagania; wspólny właściciel nie czyni go istotnym kontekstem. Źródło poprawnej reguły S-A1; sytuacje autorskie.

**PRE-A — opcjonalna podstawa:** ustalenie, co w tym zadaniu nazywamy systemem. Jest konieczne do zaklasyfikowania elementu względem granicy, bo bez perspektywy ten sam komponent może być wewnętrzny albo zewnętrzny. Sygnał braku: odpowiedź zmienia przedmiot analizy bez uzasadnienia. Krótka pomoc: „Wskaż nazwę analizowanej całości i jej wymienione składniki”. Można ją pominąć. R14 jest propozycją autorską, bez odrębnego review nie jest bramką.

### A2. Retrieval C-A-R01 [Q/R]

**[Q]** „Wyjaśnij własnymi słowami różnicę między granicą systemu, granicą kontekstu i zakresem wytwarzania. Czy informacja, że element pozostaje niezmieniony, wystarcza do pominięcia go w analizie wymagań? Podaj powód”.

**[R] Rubryka:** osobno ocenić trzy rozróżnienia i powód. Granica systemu oddziela przedmiot analizy; granica kontekstu ogranicza istotne otoczenie; scope określa możliwość kształtowania. Brak zmiany nie wystarcza do pominięcia, jeżeli element wpływa na wymagania. Akceptować równoważny język. Odpowiedź „nie, bo wszystko należy analizować” nie spełnia warunku istotności; samo „nie” jest niepełne. „Niezmieniany element zawsze zewnętrzny” — błąd. S-A1/S-A2. Pomiar rozumienia KRY-A01 jest częściowy; nie L3. Ocena: wskazany oceniający według rubryki albo jawna samoocena; bez punktów CPRE.

### A3. Bazowe C-A-B01

**Redakcja:** A, w=1; primary KRY-A01 / EO2.2.2 L2. Rodzina FAM-C-A1. Wspiera EO4.1.1; nie mierzy go wykonawczo.

**[Q]** Firma zamawia system obserwacji warunków transportu, obejmujący aplikację dyspozytora i usługę analizującą pomiary. Rejestrator temperatury jest odrębnym urządzeniem, przekazuje pomiary do usługi i pozostaje poza systemem zamawianym. Nie wolno go zmieniać. Odstępy między jego pomiarami wpływają na to, jak aktualną informację można pokazać dyspozytorowi.

Które działanie analityka jest właściwe? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Pominąć odstępy pomiarów, bo rejestrator nie jest objęty zmianą. |
| b | Włączyć rejestrator do systemu, bo dostarcza niezbędne pomiary. |
| c | Przesunąć granicę kontekstu tak, aby pominąć ten rejestrator. |
| d | Uwzględnić odstępy pomiarów jako wpływ istotnego kontekstu. |

**[R] Klucz: d.** 1 za pojedyncze d; inaczej 0. Źródło scoringu S-SCORE.

| Decyzja / rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| a / RAT-C-A-B01-a | Rejestrator nie jest zmieniany, ale rytm pomiarów ogranicza aktualność informacji → scope i istotność są odrębne → pominięcie tego wpływu jest niewłaściwe | S-A1/S-A2 |
| b / RAT-C-A-B01-b | Opis jawnie wyodrębnia urządzenie → istotna zależność nie staje się z tego powodu składnikiem przedmiotu analizy → nie należy zmieniać granicy wbrew przyjętej perspektywie | S-A1 |
| c / RAT-C-A-B01-c | Znaczenie rytmu pomiarów podano wprost → granica kontekstu nie służy usuwaniu znanego istotnego wpływu → to przesunięcie byłoby nieuzasadnione | S-A1/S-A2 |
| d / RAT-C-A-B01-d | Pomiary z oddzielnego urządzenia wpływają na oczekiwane informacje → wymagania trzeba rozpatrywać wraz z istotnym otoczeniem → wpływ należy uwzględnić | S-A1 |

**Decydujący feedback [N/R]:** „Rejestratora nie zmieniamy, ale sposób jego działania ogranicza informację dostępną w nowym systemie. W tej perspektywie jest zewnętrzną, istotną zależnością”. Przejścia: a/c → CMP-A, b → PRE-A, d → REG-A1. Każde przejście służy wskazanemu rozróżnieniu, nie całemu rozdziałowi.

### A4. Korekta, hipoteza i sonda

**REM-A [N]:** sprawdź dwie rzeczy oddzielnie: „czy element należy do opisanej całości?” i „czy jego zachowanie ma znaczenie dla wymagań?”. Dopiero trzecie pytanie brzmi „czy wolno go zmieniać?”. W C-A-B01 odpowiedzi to: nie / tak / nie. Po korekcie przejdź do C-A-F01, zachowując pierwotną odpowiedź i wynik.

**HYP-A:** wybór a może wskazywać regułę „brak zmiany oznacza brak potrzeby analizy”. To przewidywanie autora. Alternatywy: przeoczenie zdania o aktualności, pomylenie zakresów, niezrozumienie polecenia, błąd zaznaczenia lub wada itemu. Blank nie wskazuje tej reguły.

**C-A-S01 [Q]:** „Waga W przekazuje masę paczki aplikacji L; W jest odrębna i niezmieniana. Stary moduł M jest częścią L i też nie będzie zmieniany. Dla każdego elementu wskaż: czy z samego braku zmiany wynika, że można pominąć jego wpływ na wymagania L? Wyjaśnij różnicę”.

**[R] Wzorzec i rubryka:** nie dla obu. W dostarcza istotne dane z zewnątrz; M jest wewnętrzny według opisu. Brak zmiany nie wyznacza ani nieistotności, ani zewnętrzności. Oba argumenty są wymagane do pełnego wykonania sondy; poprawna odpowiedź tylko o W jest częściowa. Uznanie M za zewnętrzny wyłącznie dlatego, że nie jest zmieniany, wskazuje inną możliwą konfuzję.

**Przewidywania:** HYP-A — pominięcie W/M z powodu braku zmiany; przeoczenie pierwotnej przesłanki — możliwe poprawne wyjaśnienie obu; pomylenie scope z granicą — M błędnie zewnętrzny. Bez uzasadnienia lub przy sprzecznych odpowiedziach wynik nierozstrzygający. Przed instrukcją sonda może różnicować te wyjaśnienia, po REM-A sprawdza tylko bieżące rozumienie. Nie jest zwalidowanym narzędziem diagnostycznym. Źródła S-A1/S-A2; metoda oceny jak w A2.

### A5. Rzeczywisty follow-up C-A-F01

**Redakcja:** A, w=1; primary KRY-A01 / EO2.2.2 L2; FAM-C-A1, znaczący dydaktycznie, konserwatywnie bliski bazowemu.

**[Q]** Aplikacja introligatorni ma wskazywać zlecenia gotowe do wykonania. Przed rozpoczęciem prac pracownik ręcznie sprawdza zgodę właściciela materiału. Bez zgody zlecenie nie jest gotowe. Ten proces pozostaje poza aplikacją i nie będzie zmieniany. Nie ma automatycznego interfejsu między osobą sprawdzającą zgodę a aplikacją.

Dlaczego proces sprawdzania zgody trzeba uwzględnić w analizie wymagań aplikacji? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Wynik czynności ręcznej wpływa na znaczenie gotowości zlecenia w aplikacji. |
| b | Każdy proces w tej samej firmie należy do istotnego kontekstu aplikacji. |
| c | Istotny kontekst obejmuje wyłącznie czynności połączone interfejsem IT. |
| d | Proces musi wejść do aplikacji, skoro aplikacja ma uwzględniać jego wynik. |

**[R] Klucz: a.** S-SCORE; pojedyncze a=1, inne/brak/nadmiar=0.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-A-F01-a | Zgoda warunkuje gotowość → zewnętrzna czynność może kształtować wymagania → to właściwe uzasadnienie istotności | S-A1 |
| RAT-C-A-F01-b | Wskazano konkretny wpływ, nie wszystkie procesy firmy → wspólny właściciel nie przesądza znaczenia → argument jest zbyt szeroki | S-A1/S-A2 |
| RAT-C-A-F01-c | Brak automatycznego interfejsu nie usuwa warunku gotowości → kontekst nie ogranicza się do integracji IT → zdanie nie uzasadnia uwzględnienia i zawiera błędną regułę | S-A1, C-S02 §4.1 s.31 |
| RAT-C-A-F01-d | Proces pozostaje zewnętrzny w stemie → wpływ na wymagania nie wymusza wejścia do systemu → wniosek nie wynika z danych | S-A1/S-A2 |

**Feedback:** „Warunek biznesowy pozostaje istotny, chociaż pochodzi z ręcznej czynności poza aplikacją”. Zmiana wobec bazy: strumień pomiarów zastąpiono organizacyjną decyzją o gotowości; nie wystarczy pamięć o aktualności temperatury. To nadal świeże wykonanie po korekcie, bez obietnicy retencji lub niezależnej rodziny.

### A6. Kandydat delayed C-A-D01 [D]

**Redakcja:** A, w=1; primary KRY-A01 / EO2.2.2 L2; proponowana FAM-C-A2; niezależność rodziny niepotwierdzona.

**[Q]** Przedmiotem analizy jest aplikacja ewidencji palet, instalowana na istniejących terminalach. Sprzęt i organizacja stanowisk pozostają poza tą aplikacją i nie będą zmieniane. Na stanowisku obowiązkowo używa się grubych rękawic, co utrudnia trafianie w małe elementy dotykowe. Projekt może zmienić wielkość i odstępy przycisków aplikacji.

Który wniosek jest właściwy dla analizy wymagań? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Rękawice są poza kontekstem aplikacji, ponieważ nie przekazują danych przez API. |
| b | Używanie rękawic staje się częścią aplikacji, ponieważ wpływa na jej obsługę. |
| c | Warunki obsługi w rękawicach są istotnym kontekstem mimo braku ich zmiany. |
| d | Wymagania obsługi można określić bez rękawic, skoro projekt zmienia tylko aplikację. |

**[R] Klucz: c.** Pojedyncze c=1; inaczej 0, S-SCORE.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-A-D01-a | Podano fizyczny wpływ na obsługę → znaczenie kontekstu nie wymaga API → wykluczenie jest nieuzasadnione | S-A1 |
| RAT-C-A-D01-b | Rękawice należą do zewnętrznych warunków pracy → istotność nie oznacza przynależności do aplikacji → wniosek błędny w tej perspektywie | S-A1/S-A2 |
| RAT-C-A-D01-c | Sposób obsługi wpływa na wymagane elementy interakcji, a warunek pozostaje zewnętrzny → należy go uwzględnić mimo braku zmiany → wybór poprawny | S-A1 |
| RAT-C-A-D01-d | Zmieniana aplikacja ma działać w opisanych warunkach → zakres zmian nie znosi wpływu otoczenia → pominięcie warunku byłoby błędem | S-A1/S-A2 |

**Feedback po dozwolonej granicy:** „Niezmieniane otoczenie może określać wymagania wobec zmienianej aplikacji”. Zmiana poznawcza: fizyczny warunek interakcji zamiast dopływu danych lub reguły organizacyjnej. Przeniesienie ogólnej wiedzy jest celem; podobieństwo konstrukcji odpowiedzi nadal wymaga review R21.

### A7. Wykonanie L3 — C-A-L301

**Rola:** odrębne ćwiczenie zastosowania, nie pytanie A/P/K. Primary KRY-A02 / część EO4.1.1 L3; FAM-C-A3. Źródła S-A2/S-A3. Nie jest dodatkowym punktem w zamkniętej formie.

**[Q]** Pracownia zamawia system „Przyjęcie Prac”. W pierwszej perspektywie system obejmuje aplikację przyjęcia, usługę W obsługującą zlecenia i istniejący katalog materiałów będący jego modułem wewnętrznym. Katalog musi zostać ponownie użyty bez zmian.

Oddzielna waga przekazuje wyniki bezpośrednio do usługi W. Nie należy do systemu i nie będzie zmieniana. Poza systemem pozostaje ręczna procedura kontroli dostawy, od której wyniku zależy dopuszczenie zlecenia; procedurę wolno przeprojektować w tym przedsięwzięciu. Oddzielny system podlewania roślin nie wymienia z analizowanym systemem danych i w tym scenariuszu nie wpływa na jego wymagania.

1. Samodzielnie przedstaw granicę systemu i granicę istotnego kontekstu. Możesz użyć tekstu, tabeli lub rysunku; uwzględnij wszystkie wymienione elementy.
2. Wyjaśnij na dwóch wskazanych elementach, dlaczego scope nie musi pokrywać się z granicą systemu.
3. Następnie zmień perspektywę: analizowanym systemem jest wyłącznie usługa W. Aplikacja korzysta z W, a W korzysta z katalogu i wagi; procedura nadal określa dopuszczenie zlecenia. Pokaż nowy podział i uzasadnij zmiany.

**[R] Rozwiązanie modelowe:**

| Element | Cały „Przyjęcie Prac” | Sama W | Powód |
|---|---|---|---|
| Aplikacja przyjęcia | Wewnątrz | Istotny kontekst | Węższa perspektywa wyłącza aplikację z systemu; pozostaje jej interakcja z W |
| Usługa W | Wewnątrz | Wewnątrz | W obu perspektywach część analizowanej całości |
| Katalog materiałów | Wewnątrz | Istotny kontekst | W pierwszej opisany jako moduł całości, w drugiej zależność zewnętrzna wobec samej W |
| Waga | Istotny kontekst | Istotny kontekst | Źródło pomiarów poza oboma przedmiotami analizy |
| Procedura kontroli | Istotny kontekst | Istotny kontekst | Zewnętrzny warunek dopuszczenia; możliwość przeprojektowania nie zmienia jej automatycznie w składnik aplikacji/W |
| System podlewania | Poza istotnym kontekstem | Poza istotnym kontekstem | Jawny brak znaczenia w danych scenariusza |

Katalog jest wewnętrzny w pierwszej perspektywie i poza zakresem zmian. Procedura jest zewnętrzna i objęta możliwością przeprojektowania. To dwa kontrprzypadki utożsamienia scope z granicą.

**Rubryka R-L3-A — ocena bez punktów CPRE:**

| Kryterium rubryki | Spełnione | Częściowo / niespełnione |
|---|---|---|
| L3-A1 — perspektywa i wnętrze | Całość nazwana; aplikacja, W i katalog wewnątrz | Brak jednego składnika: częściowo; zastąpienie perspektywy samym zakresem zmian: niespełnione |
| L3-A2 — zależność techniczna | Waga zewnętrzna i istotna, wskazany pomiar | Sama etykieta bez powodu: częściowo; pominięcie jako niezmienianej: niespełnione |
| L3-A3 — wpływ nietechniczny | Procedura zewnętrzna i istotna; wskazany warunek dopuszczenia | Brak uzasadnienia: częściowo; wykluczenie z braku IT: niespełnione |
| L3-A4 — granica kontekstu | Podlewanie oddzielone z powodu jawnego braku znaczenia | Brak rozstrzygnięcia: częściowo; włączenie wyłącznie przez właściciela: niespełnione |
| L3-A5 — zakres zmian | Oba kontrprzypadki scope/granica poprawne | Tylko jeden: częściowo; obie osie utożsamione: niespełnione |
| L3-A6 — nowe granice W | W wewnątrz, aplikacja/katalog na zewnątrz jako istotne; pozostałe role zachowane i uzasadnione | Jedno nieuzasadnione pominięcie: częściowo; stara granica bez aktualizacji: niespełnione |

**Warunek wykonania tego ćwiczenia:** wszystkie sześć wymiarów spełnione; to lokalna reguła redakcyjna, nie próg IREB. Nie sumować wymiarów jako niezależnych egzaminacyjnych sukcesów. Błędy krytyczne: pominięcie znanego istotnego wpływu wyłącznie z powodu braku zmiany; utożsamienie systemu ze scope; brak reakcji na nową perspektywę.

**Odpowiedzi graniczne:** poprawna tabela bez rysunku jest pełnoprawnym wykonaniem. Nazwanie „katalog jako subsystem całego systemu” jest zgodne z pierwszą perspektywą. W drugiej można nazwać go współpracującym modułem, jeżeli wyraźnie znajduje się poza granicą samej W. Stwierdzenie „procedura w scope, więc wewnątrz W” jest błędne. Dodanie nowych interakcji podlewania jest zmianą danych zadania, nie równoważną alternatywą. Uzasadnioną wątpliwość co do danych kieruje się do review, bez dopisywania ukrytych założeń.

**Źródło oceny:** wskazana kompetentna osoba według R-L3-A; własne porównanie ucznia z tabelą jest samooceną. Nie użyto jeszcze tej rubryki do oceny rzeczywistej osoby. Jedno takie wykonanie nie poświadcza pełnego EO4.1.1 ani jego retencji.

### A8. Zakończenie gałęzi i dopuszczone wnioski

Po poprawnym C-A-F01 można zakończyć bieżącą korektę KRY-A01 jako wykonanie po instrukcji; sam punkt A nie poświadcza swobodnego uzasadnienia. Jeżeli odpowiedź błędna: alternatywa PRE-A/CMP-A lub przerwa, bez zużywania C-A-D01 jako kolejnej natychmiastowej próby. Ten przekrój nie dostarcza drugiego zamkniętego follow-up A. Brak wariantu ujawnia się jawnie. Jeśli późniejsza zatwierdzona gałąź zawiera dwie nieudane kontrole, obowiązuje zmiana wsparcia/przerwa, bez automatycznej trzeciej.

Powrót ma kotwicę C-A-B01/r1 oraz identyfikator opcji wejścia; odtwarza rzeczywistą oddaną odpowiedź i wynik, stan wyjaśnień i miejsce kontynuacji. Nie ma tu z góry ustalonej odpowiedzi ucznia. C-A-F01 i C-A-L301 mają własne wykonania.

## C03-P — LU-C-P: funkcja, jakość i ograniczenie

### P1. Wprowadzenie i wiedza [N]

**Cel:** rozróżnić, czego wymaga konkretny zapis: rezultatu/zachowania, cechy jakościowej czy dodatkowo narzuconego wyboru rozwiązania. Primary KRY-P01 / część EO1.1.2 L2. Nie ocenia to kompletności ani jakości redakcji wymagania z EO3.8.

**Terminy:** functional requirement — wymaganie funkcjonalne; quality requirement — wymaganie jakościowe; constraint — ograniczenie; non-functional requirement — wymaganie niefunkcjonalne. T-06–09/13.

**REG-P1:** klasyfikuj oczekiwanie wyrażone w zdaniu. Funkcja określa wynik, zachowanie lub interakcję. Jakość określa cechę nieobjętą samym wymaganiem funkcjonalnym. Constraint dodatkowo ogranicza dopuszczalne rozwiązania. Wyraz „musi”, liczba, techniczny język i cel bezpieczeństwa nie są samodzielnymi regułami klasyfikacji. S-P1/S-P2.

**CMP-P — oś: przedmiot oczekiwania, zamiast powierzchni zdania.**

| Typ | Pytanie rozstrzygające | Własny przykład |
|---|---|---|
| Functional | Jaki wynik/zachowanie/interakcja ma być zapewnione? | System na żądanie porównuje dwa wskazane dokumenty |
| Quality | Jaka cecha jakości działania lub systemu jest wymagana? | Przy podanym zestawie danych zużycie pamięci procesu nie przekracza ustalonego pułapu |
| Constraint | Jaki dodatkowy wybór realizacji narzucono mimo innych odpowiednich rozwiązań? | Nakaz użycia komponentu dostawcy Z, chociaż inne spełniają te same wymagania |

**Granice:** jedno zdanie może łączyć różne oczekiwania; wtedy najpierw rozdzielić je znaczeniowo, zamiast wymuszać jedną etykietę. Zadania P poniżej celowo izolują oczekiwania. Constraint wymaga dodatkowego ograniczenia przestrzeni, nie tylko dowolnej wzmianki o technologii. „Niefunkcjonalne” w Glossary obejmuje jakość lub ograniczenie, dlatego nie zastępuje etykiety quality.

**EX-P:** „System zapisuje identyfikator osoby zatwierdzającej dokument” określa zachowanie, nawet gdy służy rozliczalności. **CE-P:** „System po żądaniu drukuje 3 kopie etykiety” obala „każda liczba oznacza jakość”: trzy kopie są oczekiwanym rezultatem funkcji. Nie wnioskujemy z tych przykładów, że każda informacja o bezpieczeństwie lub liczbie jest funkcjonalna. S-P1/S-P2.

**PRE-P:** do klasyfikacji trzeba rozumieć, co jest przedmiotem wymagania. Sygnał braku: klasyfikowanie wyłącznie po obecności słowa „techniczny” bez wskazania oczekiwania. Pomoc: „Podkreśl rezultat, cechę albo narzucony wybór; jeśli są dwa różne oczekiwania, nazwij oba”. Warunkowy kandydat R14, bez wymuszenia i bez obowiązku całej lekcji podstaw.

### P2. Retrieval C-P-R01 [Q/R]

**[Q]** „Podaj po jednym kryterium odróżniającym wymaganie funkcjonalne, jakościowe i ograniczenie. Wyjaśnij, dlaczego sama liczba w zdaniu nie określa jego typu. Czy wymaganie niefunkcjonalne oznacza wyłącznie jakościowe?”.

**[R] Rubryka:** osobno ocenić wskazanie rezultatu/zachowania, cechy jakości oraz dodatkowego ograniczenia rozwiązania; następnie brak reguły „liczba = typ” i szerszy zakres NFR. Własne trafne przykłady równoważne definicyjnemu opisowi są dopuszczalne. „Funkcja = co, jakość = jak” bez rozróżnienia concern jest niepełne; „każda specyfikacja techniczna jest constraint” jest błędne. S-P1/S-P2. KRY-P01 tylko w części trójpodziału; NFR jest wspierającą kontrolą terminologii, bez dodatkowego EO. Ocena z rubryki przez wskazaną osobę lub jawna samoocena; bez punktów CPRE.

### P3. Bazowe C-P-B01

**Redakcja:** P, w=2, k=2; primary KRY-P01 / EO1.1.2 L2; FAM-C-P1.

**[Q]** Poniższe wymagania dotyczą samoobsługowego systemu wypożyczeń, obejmującego terminal i jego aplikację. Wymieniony komponent CatalogCore jest dodatkowo narzucony organizacyjnie, chociaż dostępne są inne komponenty spełniające te same wymagania funkcjonalne i jakościowe.

**Wybierz dokładnie DWA wymagania jakościowe. Maksymalnie 2 punkty.**

| Opcja | Treść |
|---|---|
| a | System umożliwia czytelnikowi przedłużenie wskazanego wypożyczenia. |
| b | System wykorzystuje komponent CatalogCore jako jedyny dopuszczony silnik katalogu. |
| c | Pobór mocy terminala w zdefiniowanym trybie bezczynności nie przekracza 8 W. |
| d | System zapisuje identyfikator pracownika, który zatwierdził zmianę limitu wypożyczeń. |
| e | W godzinach otwarcia, bez wyłączania okien serwisowych, system jest gotowy do obsługi przez co najmniej 99,5% czasu w miesiącu. |

**[R] Klucz: c,e.** Dla najwyżej 2 zaznaczeń każda trafna opcja daje 1 punkt; >2 zaznaczenia =0 za całe pytanie; S-SCORE.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-P-B01-a | Przedłużenie wypożyczenia jest oczekiwanym działaniem → określa funkcję → nie należy do klucza jakości | S-P1 |
| RAT-C-P-B01-b | Podano dodatkowy nakaz jednego silnika mimo odpowiednich alternatyw → ogranicza przestrzeń rozwiązań ponad pozostałe wymagania → constraint, nie quality | S-P1 |
| RAT-C-P-B01-c | Wskazano zużycie energii w określonym stanie → jest cechą jakościową terminala, a nie dodatkowym wyborem komponentu → należy do klucza | S-P1; autorskie zastosowanie do zużycia zasobów |
| RAT-C-P-B01-d | Rejestrowanie osoby jest wymaganym zachowaniem → funkcja może służyć jakości/bezpieczeństwu → sam cel nie czyni tego zapisu quality | S-P1/S-P2 |
| RAT-C-P-B01-e | Określono gotowość w zadanym okresie i sposób liczenia → cecha dostępności → należy do klucza | S-P1 |

**Feedback [R/N]:** wskazać rzeczywiście wybrane błędne opcje i pominięte c/e, potem REG-P1. Punkty za niewybrane a/b/d nie powstają. b prowadzi do CMP-P „cecha a narzucony wybór”, d do EX-P „funkcja wspierająca cel jakościowy”, c/e do jakości w REG-P1. Liczba dwóch prawidłowych opcji nie tworzy dwóch niezależnych dowodów EO.

### P4. Korekta, hipoteza i sonda

**REM-P [N]:** usuń z klasyfikacji skrót „liczba/technologia/bezpieczeństwo = jakość”. Wskaż, co ma się wydarzyć albo jaką właściwość/wybór narzucono. W bazowym b podano wybór silnika mimo alternatyw; w c cechę zużycia energii; w d czynność rejestracji. Następnie C-P-F01 sprawdzi klasyfikację wraz z gotowym uzasadnieniem.

**HYP-P:** wybranie b jako quality może być skutkiem utożsamienia technicznego zapisu z jakością; uznanie d za quality może wynikać z celu bezpieczeństwa. Alternatywy: przeoczenie k, brak znajomości constraint, nieprzeczytanie przesłanki o alternatywach, przypadkowe zaznaczenie. Zero za nadmiar nie diagnozuje nieznajomości tych rodzajów.

**C-P-S01 [Q]:** „Dla trzech wymagań podaj typ i wskaż fragment, który o nim decyduje: (1) Po zatwierdzeniu system tworzy cztery kopie etykiety. (2) Przy podanym obciążeniu zapis wyniku trwa nie dłużej niż 400 ms. (3) System musi używać platformy Delta, chociaż dwie inne platformy spełniają te same wymagania funkcjonalne i jakościowe”.

**[R] Wzorzec/rubryka:** (1) functional — utworzenie określonego rezultatu; (2) quality — czas wykonania przy podanym obciążeniu; (3) constraint — dodatkowo narzucona platforma. Ocenić każdą klasyfikację osobno oraz każdy wskazany powód. Nie przyznawać poprawnego powodu automatycznie po trafnej etykiecie. „Wszystkie quality, bo są konkretne” wspiera hipotezę powierzchniową; (1) quality z powodu liczby, (3) quality z powodu technologii rozdzielają dwie wersje hipotezy. Wszystkie trafne z odpowiednimi powodami osłabiają ją, ale nie dowodzą, że pierwotny błąd był tylko przeoczeniem. Bez powodów wynik diagnostycznie ograniczony.

S-P1/S-P2; przewidywania autora, bez walidacji. Po REM-P jest to ćwiczenie bieżącego rozumienia, nie dowód wcześniejszej przyczyny. Oceniający według rubryki albo samoocena; brak oficjalnych punktów.

### P5. Rzeczywisty follow-up C-P-F01

**Redakcja:** P, w=3, k=2; primary KRY-P01 / EO1.1.2 L2; FAM-C-P1. Wybór klasyfikacji z powodem, zamiast samego wybierania zdań quality.

**[Q]** W systemie obsługi faktur opisano wymagania poniżej. Użycie komponentu ScanBridge jest dodatkowym nakazem organizacji mimo istnienia innych rozwiązań spełniających te same wymagania funkcjonalne i jakościowe.

**Które DWIE klasyfikacje wraz z uzasadnieniem są poprawne? Maksymalnie 3 punkty.**

| Opcja | Treść |
|---|---|
| a | „System na żądanie generuje trzy kopie potwierdzenia” — jakościowe, ponieważ podano liczbę kopii. |
| b | „System używa komponentu ScanBridge” — ograniczenie, ponieważ dodatkowo narzucono wybór realizacji. |
| c | „Przy 80 równoczesnych operatorach 95% podglądów faktury pojawia się w ciągu 1,5 s” — jakościowe, ponieważ ograniczono czas odpowiedzi w danych warunkach. |
| d | „System pozwala odrzucić fakturę z podaniem powodu” — jakościowe, ponieważ służy ograniczaniu błędów. |
| e | „Czas ponownego udostępnienia usługi po awarii procesu nie przekracza 40 s w uzgodnionym teście” — funkcjonalne, ponieważ wspomina o wykonaniu czynności. |

**[R] Klucz: b,c.** Przy n≤2 każda trafna=3/2 punktu, przy n>2 całe P=0; S-SCORE.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-P-F01-a | Trzy kopie określają wynik funkcji → liczba nie jest kryterium jakości → para typ/powód błędna | S-P1/S-P2 |
| RAT-C-P-F01-b | Alternatywy spełniają pozostałe wymagania, lecz nakazano ScanBridge → dodatkowe zawężenie rozwiązania → klasyfikacja i powód poprawne | S-P1 |
| RAT-C-P-F01-c | Czas dla odsetka podglądów przy wskazanym obciążeniu → cecha wydajności, nie sama funkcja podglądu → klasyfikacja i powód poprawne | S-P1 |
| RAT-C-P-F01-d | Odrzucenie z powodem to wymagane zachowanie → cel ograniczania błędów nie zmienia typu → quality jest nieadekwatne | S-P1/S-P2 |
| RAT-C-P-F01-e | Zdanie ogranicza czas przywrócenia usługi w teście → cecha jakościowa odtwarzania działania → obecność czynności nie uzasadnia typu functional dla tego ograniczenia | S-P1/S-P2 |

**Feedback:** „Ocenialiśmy zarówno typ, jak i podany powód. W b rozstrzyga dodatkowy nakaz; w c cecha wydajności”. Nowość dydaktyczna: trzeba odrzucić również błędne uzasadnienie pozornie znajomej klasyfikacji. Nie potwierdza to swobodnego tworzenia uzasadnienia ani niezależnej rodziny. Po błędzie a/d/e kierować do wskazanego wymiaru CMP-P, bez powrotu do całej teorii wymagań.

### P6. Kandydat delayed C-P-D01 [D]

**Redakcja:** A, w=1; primary KRY-P01 / EO1.1.2 L2; proponowana FAM-C-P2. Pakiet P zachowuje bazowe i follow-up P; późniejsza kontrola celowo zmienia format na wybór argumentu.

**[Q]** Moduł zestawia wyniki pomiarów. Dwie jego możliwe implementacje zapewniają te same wymagane funkcje, ale różnią się zużyciem pamięci. Postawiono wymaganie: „Podczas pracy na uzgodnionym zestawie 50 000 rekordów proces zajmuje nie więcej niż 256 MiB pamięci operacyjnej”. Wymaganie nie wskazuje komponentu, algorytmu ani platformy; obie implementacje mogą spełnić ten limit.

Która klasyfikacja tego wymagania ma właściwe uzasadnienie? **Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.**

| Opcja | Treść |
|---|---|
| a | Funkcjonalne — ponieważ sprawne zestawianie wyników jest ważnym celem modułu. |
| b | Ograniczenie — ponieważ każdy liczbowy limit zawężający możliwe implementacje jest ograniczeniem w sensie RE. |
| c | Funkcjonalne — ponieważ wymaganie nie narzuca nazwanego komponentu ani platformy. |
| d | Jakościowe — ponieważ określa cechę zużycia zasobu przy podanym wolumenie pracy. |

**[R] Klucz: d.** Pojedyncze d=1; inne/brak/nadmiar=0; S-SCORE, reguła A.

| Rationale | Przesłanka → reguła → rozstrzygnięcie | Źródło |
|---|---|---|
| RAT-C-P-D01-a | Przedmiotem zdania jest zużycie pamięci, chociaż system realizuje cel funkcjonalny → cel całego modułu nie określa typu każdego jego wymagania → uzasadnienie nie daje typu functional | S-P1/S-P2 |
| RAT-C-P-D01-b | Limit dotyczy cechy pracy modułu → także quality zawęża dopuszczalne realizacje; constraint ogranicza je dodatkowo ponad dane funkcje i jakość → sam limit liczbowy nie uzasadnia constraint | S-P1/S-P2 |
| RAT-C-P-D01-c | Nie narzucono komponentu → brak takiego constraint nie rozstrzyga pomiędzy functional i quality → argument jest niewystarczający i daje niewłaściwy typ | S-P1 |
| RAT-C-P-D01-d | Wskazano pamięć procesu przy określonych danych → cecha jakościowa zużycia zasobu, bez dodatkowego wyboru realizacji → klasyfikacja i argument poprawne | S-P1/S-P2; autorskie zastosowanie do zasobów |

**Feedback:** „Samo zawężenie zbioru implementacji nie wystarcza do rozpoznania constraint: wymagania funkcjonalne i jakościowe też ten zbiór zawężają. Tu ograniczono cechę zużycia pamięci”. Zmiana poznawcza: uczeń ocenia konkurencyjne reguły klasyfikacji jednego oczekiwania przy alternatywnych implementacjach, zamiast wyszukiwać kilka quality w liście. Rozróżnienie pojęciowe jest rzeczywiste; odrębność rodziny nadal wymaga review, a ekspozycja na tę samą regułę może pomagać zgodnie z celem nauki.

### P7. Zakończenie, powrót i ograniczenie rezerwy

Po C-P-F01 punktacja ocenia zamknięte pary klasyfikacja/powód, nie własną wypowiedź. Po pełnym wyniku można zakończyć lokalną korektę, zachowując informację o świeżej instrukcji. C-P-S01 daje osobne otwarte uzasadnienia z jawnym źródłem oceny, jeżeli rzeczywiście zostanie wykonane.

Błędny follow-up: CMP-P, wąska pomoc PRE-P albo przerwa. Nie używać delayed jako drugiego natychmiastowego follow-up. Brak drugiego zamkniętego wariantu jest jawnym ograniczeniem przekroju; reguła zmiany wsparcia po drugim niepowodzeniu nie wymusza produkcji trzeciego.

Powrót wskazuje C-P-B01/r1 i opcję wejścia, zachowuje faktyczny zestaw zaznaczeń, punkty i stan feedbacku. C-P-F01 nie przelicza pierwotnej odpowiedzi. Utrata punktów za nadmiar jest osobnym faktem od poprawności poszczególnych klasyfikacji.

## C03-K — LU-C-K: traceability i sposób zapisu

### K1. Wprowadzenie i wiedza [N]

**Cel:** rozpoznać jawny zapis związku, odróżnić go od śledzenia wynikającego ze znaczącej struktury oraz przypomnieć powody utrzymywania powiązań. EO6.6.1–3 mają poziom L1; nie wymaga się samodzielnego projektu repozytorium lub narzędzia.

**Terminy:** traceability — śledzenie powiązań; explicit — jawne / wyraźne; implicit — niejawne / domniemane. Preferowane etykiety i statusy PL w C02 T-10–12.

**REG-K1 — jawny zapis:** rozpoznaj określone artefakty i zapisany między nimi związek. Forma może być tekstowa, tabelaryczna, macierzowa lub grafowa. Sam wybór specjalnego narzędzia nie jest definicją jawności. S-K1/S-K4.

**REG-K2 — powód:** powiązania służą potrzebom analizy, zgodności i informacji; na przykład wskazaniu artefaktów do przeglądu po zmianie albo odtworzeniu pochodzenia wymagania. Nie rozstrzygają automatycznie wszystkich skutków zmiany. S-K2.

**REG-K3 — podział:** przy implicit związek odczytuje się z ustalonej struktury lub konwencji; przy explicit związek zapisano między rozpoznawalnymi artefaktami na podstawie ich identyfikacji. To inny wymiar niż kierunek do źródła lub do późniejszych artefaktów. S-K3.

**CMP-K — oś: skąd czytelnik odczytuje związek?**

| Przypadek | Co pozwala odczytać związek | Rozstrzygnięcie |
|---|---|---|
| Pole „uzasadnione przez: DEC-17” wymagania REQ-8 | Wskazane końce i znaczenie pola | Jawny zapis |
| Uzgodniona struktura rozdziałów grupująca wymagania według wydania, bez indywidualnych linków | Ustalona konwencja organizacji dokumentu | Może dokumentować śledzenie niejawne |
| Dwa pliki losowo położone obok siebie | Brak reguły struktury i określenia związku | Sama obecność razem nie poświadcza opisanej relacji |

**EX-K:** zapis „REQ-14 uszczegóławia REQ-2” identyfikuje dwa wymagania i rodzaj ich związku. **CE-K:** dwa unikalne identyfikatory wydrukowane na kartce bez określenia relacji nie obalają potrzeby zapisania związku; obalają regułę „same identyfikatory wystarczą do jawnej traceability między tymi elementami”. S-K1/S-K3/S-K4; sytuacje autorskie.

**PRE-K:** do odczytania jawnego związku trzeba rozpoznać, co jest końcem relacji i jakie znaczenie nadaje jej zapis/legenda. Sygnał braku: utożsamianie listy nazw z zapisaniem zależności. Minimalna pomoc: „Nazwij oba artefakty, potem dokończ zdanie: pierwszy … drugi”. Można ją pominąć. Propozycja R14 bez niezależnego review nie jest wymuszana.

**Objaśnienie pomocnicze EX-K-X01:** odsyłacz wymaganie–test nie zawiera sam w sobie wyniku wykonania testu. Związek i zdarzenie wykonania to różne informacje. To autorska granica wnioskowania wsparta sensem traceability S-K4, a nie nowy oficjalny EO. **KRY-X01 nie jest punktowany w żadnym nowym K.**

**K-04 zachowane:** historyczny „wiersz 4 ILL-K01 / KRY-X01” oraz całe ILL-K01 pozostają w swoim oryginalnym statusie i parametrach m=4, w=2, ilustracyjny wynik 1/2. Nie są zastępowane nowym C-K-B01 ani przenoszone do rezerwy CPRE.

### K2. Retrieval C-K-R01 [Q/R]

**[Q]** „Wymień jeden powód utrzymywania traceability i dwie możliwe formy jawnego zapisu. Krótko odróżnij sposób jawny od niejawnego”.

**[R] Rubryka:** powód zgodny z analizą, zgodnością lub informacją; dwie formy spośród odsyłaczy, hiperłączy, tabel, macierzy lub grafów z określonymi końcami; podział według zapisanej relacji versus struktury/konwencji. Nie wymagać dosłownej listy. „Aby kupić narzędzie” nie jest odpowiednim powodem; „każdy wspólny folder” bez konwencji nie wyjaśnia implicit. Ocenić trzy części oddzielnie: KRY-K02, KRY-K01, KRY-K03; nie sumować jako niezależnych prób. S-K1–3. Ocena według rubryki lub jawna samoocena, bez punktów CPRE.

### K3. Bazowe C-K-B01

**Redakcja:** K, w=2, m=4; primary KRY-K01, wtórne KRY-K02/KRY-K03 wyłącznie w wskazanych wierszach. FAM-C-K1.

**[Q]** Oceń każde stwierdzenie o śledzeniu powiązań jako **Prawda** albo **Fałsz**. Wybierz jedną wartość w każdym wierszu. **Maksymalnie 2 punkty.**

| Wiersz | Stwierdzenie |
|---|---|
| 1 | Jawne dokumentowanie powiązań wymaga zastosowania specjalistycznego narzędzia do zarządzania wymaganiami. |
| 2 | Uzgodniona struktura artefaktów może umożliwiać niejawne śledzenie powiązań. |
| 3 | Jednym z powodów utrzymywania powiązań jest wspieranie wykazywania zgodności z właściwymi normami lub przepisami. |
| 4 | Macierz z jednoznacznie zidentyfikowanymi artefaktami oraz legendą określającą znaczenie zaznaczonych relacji może dokumentować powiązania jawne. |

**[R] Klucz: Fałsz, Prawda, Prawda, Prawda.** Po 1/2 punktu za poprawny wiersz; blank/błąd/obie wartości =0 tylko za dany wiersz. S-SCORE.

| Wiersz / rationale | Przesłanka → reguła → rozstrzygnięcie | Punktowany zakres |
|---|---|---|
| 1 / RAT-C-K-B01-1 | Teza uzależnia jawność od specjalistycznego narzędzia → norma dopuszcza różne sposoby zapisu, np. referencje i tabele → wymóg narzędzia jest fałszywy | KRY-K01 → EO6.6.3 L1; S-K1 |
| 2 / RAT-C-K-B01-2 | Podano uzgodnioną strukturę → to dopuszczona podstawa śledzenia implicit → zdanie prawdziwe; nie dotyczy dowolnego sąsiedztwa | KRY-K03 → EO6.6.2 L1; S-K3 |
| 3 / RAT-C-K-B01-3 | Wskazano zgodność z normami/przepisami jako powód → należy do opublikowanych celów traceability → zdanie prawdziwe | KRY-K02 → EO6.6.1 L1; S-K2 |
| 4 / RAT-C-K-B01-4 | Identyfikacja końców i legenda określają relację → macierz jest dopuszczoną reprezentacją jawnego związku → zdanie prawdziwe | KRY-K01 → EO6.6.3 L1; S-K1 |

**Feedback [R/N]:** REG-K1; następnie błędne i puste wiersze według faktycznej odpowiedzi. Wiersz 2 prowadzi do CMP-K, wiersz 3 do REG-K2, wiersze 1/4 do REG-K1. Każdy punkt ma oficjalne uzasadnienie; nie ma punktu za powodzenie wykonania testu. Cztery decyzje jednego K nie są czterema niezależnymi obserwacjami.

### K4. Korekta, hipoteza i sonda

**REM-K [N]:** rozdziel treść związku od jego nośnika. Wystarczy rozpoznać określone artefakty i znaczenie zapisu; nie trzeba przenieść go do specjalnego narzędzia. Jeśli zależność wynika ze znaczącej struktury, mówimy o implicit; przypadkowe wspólne miejsce nie gwarantuje nawet tego. Następnie C-K-F01.

**HYP-K:** Prawda w wierszu 1 może wskazywać regułę „jawne = zapisane w specjalistycznym narzędziu”. Alternatywy: przeoczenie słowa „wymaga”, rozumienie „jawne” jako audytowalne bez względu na formę, pomylenie zalecenia praktycznego z definicją lub przypadkowy wybór.

**C-K-S01 [Q]:** „Dwa zespoły zapisują tę samą relację. Zespół A na papierowej karcie wymagania REQ-21 umieszcza pole «źródło: DEC-4», a legenda wyjaśnia, że DEC-4 jest unikalnym identyfikatorem decyzji uzasadniającej wymaganie. Zespół B utrzymuje ten sam zapis w arkuszu kalkulacyjnym. Czy oba zapisy mogą dokumentować jawną traceability? Co jest rozstrzygające?”.

**[R] Wzorzec/rubryka:** tak, oba; identyfikowane końce i zapisane znaczenie relacji, a nie medium lub zakup narzędzia. Sama odpowiedź „tak” bez powodu jest częściowa. „Tylko arkusz, bo elektroniczny” wspiera inną wersję hipotezy zależności od nośnika; „żaden, bo nie użyto narzędzia RE” wspiera HYP-K. Pełne uzasadnienie osłabia HYP-K; nie rozstrzyga samo, co spowodowało wcześniejszą odpowiedź. Bez uzasadnienia wynik diagnostycznie nierozstrzygający.

S-K1/S-K4; ocena z rubryki przez wskazaną osobę albo jawna samoocena. Przed feedbackiem może różnicować pomylenie definicji z narzędziem; po REM-K pokazuje aktualne rozumienie. Brak danych o trafności diagnostycznej.

### K5. Rzeczywisty follow-up C-K-F01

**Redakcja:** K, w=2, m=3; primary KRY-K01; wtórne KRY-K03/KRY-K02 po wierszu. FAM-C-K1.

**[Q]** W projekcie zapisano:

- przy wymaganiu W9 pole „pochodzi z” o wartości D5; D5 jednoznacznie identyfikuje dokument źródłowy;
- dokument z wymaganiami uporządkowano według uzgodnionych rozdziałów określających wydanie, bez indywidualnych odsyłaczy wymagań do wydań;
- utrzymuje się tabelę zależności wymagań i artefaktów, przeznaczoną do analizy skutków zmian.

Oceń każde stwierdzenie jako **Prawda** albo **Fałsz**. **Maksymalnie 2 punkty.**

| Wiersz | Stwierdzenie |
|---|---|
| 1 | Pole „pochodzi z: D5” przy W9 dokumentuje jawny związek W9 z jego źródłem. |
| 2 | Przypisanie do wydania wynikające wyłącznie z opisanej struktury rozdziałów jest jawnym śledzeniem powiązań. |
| 3 | Tabela zależności może pomagać wskazać artefakty do przeglądu po zmianie wymagania. |

**[R] Klucz: Prawda, Fałsz, Prawda.** Po 2/3 punktu za trafny wiersz, inne stany wiersza=0; S-SCORE.

| Wiersz / rationale | Przesłanka → reguła → rozstrzygnięcie | Punktowany zakres |
|---|---|---|
| 1 / RAT-C-K-F01-1 | Pole przy W9 podaje jednoznaczne D5 i znaczenie pochodzenia → określony związek na identyfikatorach → Prawda | KRY-K01 → EO6.6.3 L1; S-K1/S-K4 |
| 2 / RAT-C-K-F01-2 | Powiązanie odczytuje się ze struktury, brak indywidualnego zapisu relacji → opisuje implicit, nie explicit → Fałsz | KRY-K03 → EO6.6.2 L1; S-K3 |
| 3 / RAT-C-K-F01-3 | Podano utrzymywane zależności i analizę skutków → to odpowiedni cel traceability → Prawda; nie obiecuje automatycznej oceny wszystkich skutków | KRY-K02 → EO6.6.1 L1; S-K2 |

**Feedback:** „O jawności decyduje zapis związku, o niejawności — sposób odczytania go ze struktury; analiza skutków jest jednym z powodów utrzymywania powiązań”. Zmiana wobec bazy: rozpoznanie trzech opisanych zapisów, zamiast samych ogólnych twierdzeń; inne m nie jest samo w sobie zmianą poznawczą. Zachowano L1 — rozpoznanie opublikowanych kategorii, bez projektowania.

### K6. Kandydat delayed C-K-D01 [D]

**Redakcja:** K, w=2, m=5; primary KRY-K01; wtórne KRY-K03/KRY-K02 po wierszu. Proponowana FAM-C-K2.

**[Q]** W rejestrze wymagania W23 jest pole „uzasadnienie” wskazujące unikalną decyzję DEC8. Instrukcja rejestru definiuje to pole jako relację do decyzji uzasadniającej wymaganie. W innym zbiorze przypisanie wymagań do etapów wynika z uzgodnionej struktury dokumentu; nie zapisano indywidualnych relacji do etapów.

Oceń każde stwierdzenie jako **Prawda** albo **Fałsz**. **Maksymalnie 2 punkty.**

| Wiersz | Stwierdzenie |
|---|---|
| 1 | Związek W23–DEC8 stanie się jawny dopiero po przedstawieniu go w grafie. |
| 2 | Opisana struktura drugiego zbioru może dokumentować niejawne śledzenie przypisania do etapów. |
| 3 | Ustalenie, skąd pochodzi wymaganie i jakie ma uzasadnienie, jest jednym z informacyjnych celów traceability. |
| 4 | Różnica między implicit i explicit polega na tym, że pierwsze prowadzi do źródeł, a drugie do późniejszych artefaktów. |
| 5 | Odwołanie tekstowe może dokumentować jawną relację, jeśli określa powiązane artefakty i znaczenie związku. |

**[R] Klucz: Fałsz, Prawda, Prawda, Fałsz, Prawda.** Po 2/5 punktu za trafny wiersz; błąd/brak/obie wartości=0 za wiersz, S-SCORE.

| Wiersz / rationale | Przesłanka → reguła → rozstrzygnięcie | Punktowany zakres |
|---|---|---|
| 1 / RAT-C-K-D01-1 | Pole i instrukcja już określają związek na identyfikatorach → graf jest jedną z form, nie warunkiem → Fałsz | KRY-K01 → EO6.6.3 L1; S-K1 |
| 2 / RAT-C-K-D01-2 | Znaczenie przypisania wynika z uzgodnionej struktury → dopuszczony sposób implicit → Prawda | KRY-K03 → EO6.6.2 L1; S-K3 |
| 3 / RAT-C-K-D01-3 | Wskazano potrzebę informacji o pochodzeniu/uzasadnieniu → mieści się w celach traceability → Prawda | KRY-K02 → EO6.6.1 L1; S-K2/S-K4 |
| 4 / RAT-C-K-D01-4 | Teza utożsamia sposób dokumentacji z kierunkiem śledzenia → to niezależne podziały → Fałsz | KRY-K03 → EO6.6.2 L1; S-K3, C-S07 §6.6 s.141–142 |
| 5 / RAT-C-K-D01-5 | Wskazano końce i znaczenie relacji → referencja tekstowa jest dopuszczoną formą → Prawda | KRY-K01 → EO6.6.3 L1; S-K1 |

**Feedback:** „Forma, kierunek i powód śledzenia to różne informacje”. Zmiana: powiązanie z decyzją uzasadniającą oraz odróżnienie kierunku od sposobu zapisu. Pozostaje ryzyko bliskości do ćwiczeń o polu źródła i strukturze; dodatkowe wiersze oraz nowe identyfikatory nie gwarantują nowej rodziny. Wszystkie pięć rozstrzygnięć ma oficjalnie uzasadniony zakres, bez KRY-X01.

### K7. Zakończenie i powrót

Wynik C-K-F01 rozpatruje się po wierszu. Trafienie w wierszu 1 nie zamyka kryterium powodów KRY-K02, a błąd w wierszu 2 nie obciąża wszystkich EO6.6. Przy poprawnej kontroli można zakończyć bieżącą korektę odpowiedniego kryterium, nadal jako wykonanie po instrukcji.

Po błędzie dostępne CMP-K/PRE-K lub przerwa. Drugi zamknięty follow-up nie został przygotowany; nie zużywać C-K-D01 do natychmiastowego treningu i nie generować brakującego zadania na żywo. Obowiązuje ograniczenie gałęzi jak w A8.

Kotwica C-K-B01/r1 obejmuje każdy rzeczywiście oddany stan wiersza, blank oddzielony od Fałsz, wynik, stan ujawnienia i miejsce sesji. Powrót nie zmienia wyniku po późniejszym trafieniu w follow-up. Czasy kontaktów są osobne dla KRY-K01/K02/K03; ekspozycja EX-K-X01 dotyczy KRY-X01, bez resetowania całego traceability.

## C03-02 — Konkretne relacje i ich proweniencja

Wszystkie końce dotyczą r1 niniejszego korpusu, normy — profilu C01. Każda relacja ma status **kontrola autorska 2.11.2026 / odrębne review pending**. Typ związku domenowego/interpretacji/decyzji podano poniżej. Przy braku wymaganego review nie wymusza się R14 ani nie kwalifikuje nowej rodziny.

### Zakres, materiał i obserwowana czynność

| ID relacji / typ | Końce i pełne znaczenie | Warunek, funkcja i podstawa |
|---|---|---|
| REL-O-A01 / R02 | KRY-A01 operacjonalizuje fragment EO2.2.2 dotyczący istotnego kontekstu | L2 i źródłowy zakres zasady 4; nie wszystkie zasady. INTERPRETATION, S-A1 |
| REL-O-A02 / R02 | KRY-A02 operacjonalizuje ograniczone wykonanie EO4.1.1 | Samodzielne wyznaczenie granic, adekwatna rubryka; S-A2/S-A3 |
| REL-O-P01 / R02 | KRY-P01 operacjonalizuje wybrane rozróżnienia rodzajów z EO1.1.2 | Jednoznaczne oczekiwania; S-P1/S-P2 |
| REL-O-K01 / R02 | KRY-K01 operacjonalizuje rozpoznanie form jawnego zapisu z EO6.6.3 | L1, bez projektu narzędzia; S-K1 |
| REL-O-K02 / R02 | KRY-K02 operacjonalizuje rozpoznanie wskazanego powodu z EO6.6.1 | L1, wyłącznie oceniony powód; S-K2 |
| REL-O-K03 / R02 | KRY-K03 operacjonalizuje rozróżnienie sposobów z EO6.6.2 | L1, nie kierunek śledzenia; S-K3 |
| REL-S-A1 / R05 | REG-A1, CMP-A, EX-A i CE-A wspierają KRY-A01 | Wyjaśniają, co rozstrzyga istotność mimo braku zmiany; uzasadnienie autora na S-A1/S-A2 |
| REL-S-A2 / R05 | CMP-A oraz modelowe rozwiązanie C-A-L301 wspierają KRY-A02 | Objaśniają dwie perspektywy i scope; oglądanie nie mierzy L3 |
| REL-S-P1 / R05 | REG-P1, CMP-P, EX-P i CE-P wspierają KRY-P01 | Uczą osi concern i jej granic; S-P1/S-P2 |
| REL-S-K1 / R05 | REG-K1 oraz EX-K wspierają KRY-K01 | Uczą rozpoznania określonego związku i formy; S-K1/S-K4 |
| REL-S-K2 / R05 | REG-K2 wspiera KRY-K02 | Uczy wskazanych powodów, nie wszystkich zastosowań; S-K2 |
| REL-S-K3 / R05 | REG-K3 i CMP-K wspierają KRY-K03 | Uczą struktury/konwencji versus zapisu; S-K3 |
| REL-S-X1 / R05 | EX-K-X01 wspiera pomocnicze KRY-X01 | Wyjaśnia ograniczenie wniosku z linku, bez punktów i bez R02 do fikcyjnego EO |
| REL-M-A / R06 | C-A-B01, C-A-F01, C-A-D01 dają po jednej okazji obserwacji KRY-A01 | Wybór właściwego wniosku o wpływie; ocena S-SCORE, uzasadnienia A3/A5/A6. Trzy odrębne relacje, po jednej na nazwany item |
| REL-M-AL3 / R06 | C-A-L301 daje okazję obserwacji KRY-A02 | Samodzielny podział i zmiana perspektywy według R-L3-A; ocena wykonania, nie lektury wzorca |
| REL-M-P / R06 | C-P-B01, C-P-F01, C-P-D01 dają okazje obserwacji KRY-P01 | Wybór odpowiednich klasyfikacji; nie pomiar swobodnego wyjaśnienia ani pełnego EO. Po jednej relacji na item |
| REL-M-KB / R06 | C-K-B01: wiersze 1/4 → KRY-K01; 2 → KRY-K03; 3 → KRY-K02 | Każda decyzja rozpoznaje konkretny opublikowany element L1; uzasadnienie i źródła K3 |
| REL-M-KF / R06 | C-K-F01: wiersz 1 → KRY-K01; 2 → KRY-K03; 3 → KRY-K02 | Źródłowe uzasadnienie każdego punktu w K5; bez dziedziczenia całego EO |
| REL-M-KD / R06 | C-K-D01: wiersze 1/5 → KRY-K01; 2/4 → KRY-K03; 3 → KRY-K02 | Uzasadnienie i lokalizacje w K6; brak KRY-X01 |
| REL-M-AR / R06 | C-A-R01 → ograniczone KRY-A01 | Rubryka A2, odtworzenie i powód; nie L3 |
| REL-M-PR / R06 | C-P-R01 → ograniczone KRY-P01 | Rubryka P2; NFR jest wsparciem terminologicznym |
| REL-M-KR / R06 | C-K-R01 → KRY-K01/K02/K03 w odpowiednich częściach | Rubryka K2 ocenia osobno formy, powód i podział |
| REL-M-AS / R06 | C-A-S01 → KRY-A01, pomocniczo rozróżnienie scope | Rubryka A4; diagnostyczna skuteczność niepotwierdzona |
| REL-M-PS / R06 | C-P-S01 → KRY-P01 | Etykieta i powód oceniane osobno; P4 |
| REL-M-KS / R06 | C-K-S01 → KRY-K01 | Rozpoznanie jawności w dwóch mediach; K4 |
| REL-T-CTX / R07 | Scenariusze transportu, introligatorni i palet są kontekstem zadań A | Nie są osobnymi Concept ani pomiarem ekspertyzy tych domen |
| REL-T-SEC / R07 | Rozliczalność/bezpieczeństwo pojawiają się jako cel funkcji w EX-P i rationale d | Samo wystąpienie nie mierzy odrębnego EO bezpieczeństwa |

R01: EO1.1.2 → EU1; EO2.2.2 → EU2; EO4.1.1 → EU4; EO6.6.1, EO6.6.2, EO6.6.3 → EU6, każda w profilu 3.3.0. Źródło wykazów C-S02 s.11/14/31/41 oraz C-S03 s.11/14/32/43. Są to źródłowe relacje zakresu, nie dziedziczenie mastery.

R03: terminy T-01–13 oznaczają sensy nazwane w odpowiednich wierszach C02-02; źródło i status każdej pary są tam jawne. REG-A1/P1/K1–3 są autorskimi objaśnieniami R10 tych sensów. Nie przedstawia się ich jako przepisanych definicji EN lub oficjalnych polskich definicji R04.

### Każda decyzja → rationale → reguła → źródło

Poniższy skrócony rejestr wymienia wszystkie konkretne końce. Każda wymieniona opcja/wiersz ma własne R08 do dokładnego RAT o tej samej końcówce, a każdy RAT ma R09 do wskazanej reguły. Identyfikator relacji to „REL-” + identyfikator RAT + „-08” lub „-09”. Nie oznacza to wymagania fizycznych obiektów.

| Item i konkretne decyzje | Końce R08 — rationale istniejące wyżej | Końce R09 / R15 |
|---|---|---|
| C-A-B01: a,b,c,d | RAT-C-A-B01-a,b,c,d, każde jako odrębny identyfikator | REG-A1; źródła poszczególnych decyzji w A3, S-A1/S-A2 |
| C-A-F01: a,b,c,d | RAT-C-A-F01-a,b,c,d | REG-A1; A5, S-A1/S-A2 |
| C-A-D01: a,b,c,d | RAT-C-A-D01-a,b,c,d | REG-A1; A6, S-A1/S-A2 |
| C-P-B01: a,b,c,d,e | RAT-C-P-B01-a,b,c,d,e | REG-P1; P3, S-P1/S-P2 |
| C-P-F01: a,b,c,d,e | RAT-C-P-F01-a,b,c,d,e | REG-P1; P5, S-P1/S-P2 |
| C-P-D01: a,b,c,d | RAT-C-P-D01-a,b,c,d | REG-P1; P6, S-P1/S-P2 |
| C-K-B01: 1,2,3,4 | RAT-C-K-B01-1,2,3,4 | 1/4 → REG-K1; 2 → REG-K3; 3 → REG-K2; K3 i S-K1–3 |
| C-K-F01: 1,2,3 | RAT-C-K-F01-1,2,3 | 1 → REG-K1; 2 → REG-K3; 3 → REG-K2; K5 |
| C-K-D01: 1,2,3,4,5 | RAT-C-K-D01-1,2,3,4,5 | 1/5 → REG-K1; 2/4 → REG-K3; 3 → REG-K2; K6 |

To **38 lokalnych rationale**, każde z przesłanką, regułą i wynikiem. Skrót „RAT-C-P-D01-a,b…” rozwija cztery nazwy, nie jeden ogólny akapit. R15 każdej reguły i lokalnego rozstrzygnięcia wskazuje odpowiednią referencję S-* z dokładną wersją/lokalizacją w C01-03. Relacja jest interpretacją zastosowania: dokument IREB nie opisuje fikcyjnego CatalogCore, W9 lub rękawic.

### Porównania, korekty i warunkowe podstawy

| ID / typ | Końce i zdanie sensu | Warunek, funkcja, pochodzenie |
|---|---|---|
| REL-CMP-A / R11 | CMP-A odróżnia granicę systemu, granicę kontekstu i scope według roli i swobody zmiany | Dwa pytania nie zastępują trzeciego; oba przypadki w A1; interpretacja na S-A2 |
| REL-CMP-P / R11 | CMP-P odróżnia functional/quality/constraint według przedmiotu oczekiwania | Wystarczająco rozdzielone oczekiwanie; interpretacja na S-P1/S-P2 |
| REL-CMP-K / R11 | CMP-K odróżnia explicit/implicit oraz brak określonej relacji według podstawy odczytu związku | Nie utożsamiać meaningful structure z przypadkową bliskością; S-K1/S-K3 |
| REL-EX-A/P/K / R12 | EX-A ilustruje REG-A1; EX-P ilustruje REG-P1; EX-K ilustruje REG-K1 | Trzy odrębne związki, przesłanki w A1/P1/K1; autorskie przykłady |
| REL-CE-A/P/K / R13 | CE-A obala „właściciel wystarcza”; CE-P obala „liczba = quality”; CE-K obala „same ID wystarczą” | Trzy odrębne kontrprzykłady i poprawne reguły A1/P1/K1; nie diagnoza osoby |
| REL-PRE-A / R14 | Rozpoznanie analizowanej całości PRE-A jest potrzebne do podziału w C-A-L301 | Konieczność i sygnał A1/A7; do czasu review pomoc opcjonalna, bez gating |
| REL-PRE-P / R14 | Ustalenie oczekiwania PRE-P jest potrzebne do klasyfikacji w C-P-B01 | Sygnał P1; nie wymaga ukończenia rozdziału; interpretacja dydaktyczna |
| REL-PRE-K / R14 | Odczyt końców i znaczenia PRE-K jest potrzebny do rozpoznania zapisu w C-K-F01/1 | Sygnał K1; pomoc możliwa do pominięcia; interpretacja dydaktyczna |
| REL-H-A / R16 | Wzorzec wyboru a w C-A-B01 może wskazywać HYP-A | Nie rzeczywista obserwacja ucznia; alternatywy A4 |
| REL-H-P / R16 | Wzorzec wyboru b/d jako quality w C-P-B01 może wskazywać HYP-P | Rozróżnić dwie hipotezy; alternatywy P4 |
| REL-H-K / R16 | Prawda w C-K-B01/1 może wskazywać HYP-K | Alternatywy K4; blank nie ustanawia związku |
| REL-SON-A/P/K / R17 | C-A-S01, C-P-S01 i C-K-S01 różnicują swoje hipotezy i wymienione alternatywy | Każdy ma oddzielne przewidywania i rubrykę A4/P4/K4; po instrukcji tylko bieżące rozumienie; brak walidacji skuteczności |
| REL-REM-A/P/K / R18 | REM-A koryguje pominięcie wpływu z powodu braku zmiany; REM-P powierzchniową klasyfikację; REM-K utożsamienie jawności z nośnikiem | Zakres i poprawne reguły S-A1/S-P1/S-K1; trzy odrębne relacje, bez diagnozowania osoby |
| REL-FU-A/P/K / R19 | C-A-F01 sprawdza rozróżnienie po REM-A; C-P-F01 po REM-P; C-K-F01 po REM-K | Zmiana w A5/P5/K5 i R06; wynik po instrukcji, nie retencja |

### Nawigacja i dowód

R26 nie jest faktem korpusu o uczniu. Przy rzeczywistym odejściu powstaje Navigation Context wskazujący C-A-B01, C-P-B01 albo C-K-B01/r1, opcję/wiersz wejścia, oddaną odpowiedź, wynik, moment ujawnienia i miejsce powrotu. A8/P7/K7 definiują kotwice; nie utworzono fikcyjnych instancji zdarzeń.

Tak samo nie utworzono R25: item i klucz umożliwiają obserwację, ale nie są obserwacją. R22 nie występuje — nie utworzono wersji EN pytań. R23/R24 nie są potrzebne do tej ścieżki i nie zostały sztucznie dodane.

## C03-03 — Rodziny, podobieństwo i plan delayed

### Przypisania R20

Status wszystkich rodzin: **robocze, konserwatywne grupowanie autora; review granic oczekuje**. Każda z 16 aktywności ma wskazaną rodzinę. Nie ma deklaracji siedmiu niezależnych okazji transferu.

| Rodzina | Konkretne aktywności | Zapamiętywalny rdzeń i powód grupowania |
|---|---|---|
| FAM-C-A1 | C-A-B01, C-A-F01, C-A-R01, C-A-S01 | Kontrast „brak zmiany/poza systemem” versus istotny wpływ; po korekcie łatwo rozpoznać znany wzorzec argumentu. Grupowanie szersze, zachowawcze |
| FAM-C-A2 | C-A-D01 | Fizyczne warunki interakcji poza aplikacją, bez API; kandydat różnicy wobec technicznego/organizacyjnego wpływu A1 |
| FAM-C-A3 | C-A-L301 | Samodzielny podział wielu elementów, dwa kontrprzypadki scope i zmiana perspektywy; odmienna czynność L3 |
| FAM-C-P1 | C-P-B01, C-P-F01, C-P-R01, C-P-S01 | Kontrast powierzchniowego sygnału z przedmiotem oczekiwania; liczba/technologia/cel nie wystarczają. Świeża korekta daje charakterystyczne wskazówki |
| FAM-C-P2 | C-P-D01 | Ocena reguły klasyfikacji jednego limitu zasobu przy alternatywnych implementacjach, w tym błędnego argumentu „każde zawężenie = constraint”; granice do review |
| FAM-C-K1 | C-K-B01, C-K-F01, C-K-R01, C-K-S01 | Rozpoznanie zapisu związku niezależnie od medium, z kontrastem struktury; rdzeń reguły może silnie ułatwiać podobne sformułowania |
| FAM-C-K2 | C-K-D01 | Pole uzasadnienia, struktura etapów i rozdzielenie kierunku od sposobu; propozycja, z ryzykiem bliskości do K1 |

### Relacje R21 — wszystkie pary trójek

| Para | Co rzeczywiście się zmienia | Zachowane wskazówki / kwalifikacja autora |
|---|---|---|
| C-A-B01 ↔ C-A-F01 | Dopływ pomiarów i aktualność → ręczny warunek dopuszczenia | Znaczący dydaktycznie nowy rodzaj wpływu; to samo rozstrzygnięcie o istotności; wspólna konserwatywna rodzina |
| C-A-B01 ↔ C-A-D01 | Techniczne źródło danych → fizyczny warunek użytkowania | Nie kosmetyka nazw; jednak oba przeciwstawiają brak zmiany istotności. Nowa rodzina do review |
| C-A-F01 ↔ C-A-D01 | Procedura organizacyjna → warunek fizyczny bez interfejsu | W obu istotny kontekst nie ogranicza się do API; możliwość bliskiego transferu, bez potwierdzenia niezależności |
| C-P-B01 ↔ C-P-F01 | Wybór samych quality → ocena klasyfikacji razem z gotowym powodem | Wymaga oceny argumentu, ale powtarza liczbę/komponent/cel; rodzina wspólna |
| C-P-B01 ↔ C-P-D01 | Wybór dwóch quality z wielu oczekiwań → ocena konkurencyjnych reguł dla jednego limitu i dwóch realizacji | Nie wystarczy pamięć c/e; trzeba odrzucić utożsamienie każdego zawężenia z constraint. Nowa rodzina pozostaje propozycją |
| C-P-F01 ↔ C-P-D01 | Ocena wielu par opis/typ → rozstrzygnięcie granicy definicji constraint w jednym oczekiwaniu | W obu ocenia się gotowe argumenty; ryzyko bliskości pozostaje i wymaga review |
| C-K-B01 ↔ C-K-F01 | Ogólne tezy → rozpoznanie określonych zapisów i ich celów | Dydaktycznie znaczące bez zmiany L1; ta sama konserwatywna rodzina |
| C-K-B01 ↔ C-K-D01 | Inny wspólny kontekst i rozdzielenie kierunku od sposobu | Pamięć odpowiedzi o grafie/narzędziu może pomagać; bez gwarancji niezależności |
| C-K-F01 ↔ C-K-D01 | Źródło dokumentowe/wydanie → decyzja uzasadniająca/etapy i rozróżnienie kierunku | Pola i struktura są bliskie; sama zamiana ID/etykiet nie wystarcza. Dodatkowe rozróżnienie jest rzeczywiste, lecz wymaga review rodziny |

Każda para ma własny wynik review pending, nie wnioskuje się przechodnio. C-A-L301 nie jest delayed dla KRY-A01 — ma inną czynność i kryterium. Nie służy zamianie wymogu L2 na L3.

**Porównanie z historią projektu:** F13.8/B03 pokazują już zewnętrzne źródła danych, reguły organizacyjne, quality/constraint i jawny zapis związku. C nie nazywa ich czytelnika naiwnym wobec tych wzorców. Nowe stemy, opcje i scenariusze nie są kopiami ilustracji, ale strukturalna bliskość wymaga oceny razem z FAM-ILL-A01/P01/K01 i ilustracyjnymi follow-up. Także D12 zawiera wcześniejsze przykłady granic. Różnice treści nie resetują historii ekspozycji.

### Konkretny plan wykorzystania

| Rola | Materiał | Warunek |
|---|---|---|
| Nauka / orientacyjny start | C-A-B01, C-P-B01, C-K-B01 oraz materiały [N] | Po odrębnym review i dopuszczeniu; mogą być znane, ze stosowną etykietą |
| Kontrola po korekcie | C-A-F01, C-P-F01, C-K-F01 | Po korekcie, bez widocznej pomocy do odpowiedzi; nadal świeża instrukcja, wspólne rodziny |
| Jedna planowana kontrola odroczona | C-A-D01, C-P-D01, C-K-D01 | Po review treści, rodzin i ekspozycji; nie trzy niezależne fale |
| Wykonanie L3 | C-A-L301 | Oddzielna rola, rubryka, oceniający i ujawnienia; nie część 3-itemowej zamkniętej formy |

Nie proponuje się użycia tych samych trzech delayed w pre/post/delayed jako trzech nieznanych zestawów. Potencjalna mała forma zamknięta to **3 pozycje / maks.4 punkty**, bez limitu, z zakresem trzech A/P/K i wskazanych kryteriów; wymaga odrębnego dopuszczenia, bez gwarancji równoważnej trudności. Nie jest mockiem FL i nie stosuje się do niej werdyktu zdania egzaminu.

**Eligibility osoby:** sprawdzić przed pokazaniem itemu wcześniejszy stem, klucz, rationale, bliskie warianty i tłumaczenia. Dla czytelnika pełnego C03 te pozycje są ujawnione; ewentualne późniejsze użycie to znana praktyka. Dla innej osoby historia nadal wymaga sprawdzenia. Przy niepewnej bliskości P2/K2 nie nadaje się mocnej etykiety nowej rodziny. Możliwy jest odroczony wynik znanego/bliskiego zadania z jawnym ograniczeniem; nie pozoruje się niezależnego transferu.

## C03-04 — Zakres kontaktu i dwa odstępy czasu

| Fragment/aktywność | Kryteria istotnego kontaktu | Zakres ekspozycji itemu/rodziny |
|---|---|---|
| REG-A1, EX-A, CE-A, REM-A, C-A-R01/S01 | KRY-A01 | Instrukcja ogólna nie ujawnia automatycznie każdego stemu; konkretne Q/R ujawniają własną aktywność i możliwie A1 |
| CMP-A, PRE-A | KRY-A01; dla porównania scope także wspierana część KRY-A02 | Bezpośredni udział w nowej próbie przed odpowiedzią jest pomocą |
| Stem/odpowiedź/rationale A-B/F/D | KRY-A01 | Własny item, rozwiązanie po [R]; rodziny zgodnie z R21 |
| C-A-L301 i wzorzec | KRY-A02; wyjaśnienia scope wspierają również A01 | Znany L3 i A3; nie reset wszystkich zasad EO2.2.2 |
| REG-P1, CMP-P, EX/CE/REM-P, wszystkie zadania P | KRY-P01 | Konkretna prezentacja Q/R ujawnia aktywność; ogólna zasada nie ujawnia automatycznie wszystkich P |
| REG-K1, EX-K, PRE-K, C-K-S01 | KRY-K01 | Treść o zapisie relacji; nie aktualizuje sama czasu powodu K02 |
| REG-K2 | KRY-K02 | Powody; bez automatycznego kontaktu z formami |
| REG-K3 | KRY-K03 | Podział sposobów |
| CMP-K, REM-K | KRY-K01/KRY-K03 | Wyjaśnienie zapisu i struktury; bez K02, jeżeli nie otwarto uzasadnienia powodu |
| C-K-B01: wiersze 1/4; 2; 3 | Odpowiednio KRY-K01; KRY-K03; KRY-K02 | Każdy Q jest ćwiczeniem swojego kryterium; rationale ma ten sam zakres |
| C-K-F01: 1; 2; 3 | Odpowiednio KRY-K01; KRY-K03; KRY-K02 | Wspólny pokaz całego zestawu dotyczy trzech kryteriów; nie tworzy trzech niezależnych tygodniowych prób |
| C-K-D01: 1/5; 2/4; 3 | Odpowiednio KRY-K01; KRY-K03; KRY-K02 | Jak wyżej; zakres ujawnienia [R] per wiersz |
| C-K-R01 | KRY-K01/KRY-K02/KRY-K03, osobno części | Odtworzenie trzech elementów; bez własnego punktu za KRY-X01 |
| EX-K-X01 | KRY-X01 | Pomocnicze objaśnienie; nie dopisuje się EO i nie resetuje całej EU6 |

Przed nową próbą zachować dla każdego mierzonego kryterium: datę poprzedniej samodzielnej próby, datę końca ostatniego istotnego kontaktu, oba rzeczywiste odstępy i źródło informacji, historię pomocy, nowość itemu i rodziny, znajomość rozwiązania, metodę oceny i niepewność działań zewnętrznych. W C nie uzupełniono tych pól fikcyjnymi wartościami.

Po prezentacji zapisuje się nowy kontakt dla kolejnej próby; nie odbiera się wstecz nowości bieżącej pierwszej próbie. Otworzenie feedbacku po zamknięciu nie zmienia historycznej pomocy przed odpowiedzią. Czytanie minutę przed delayed oznacza świeże wykonanie mimo dawnej daty samodzielnej próby. Terminy ≥24 h / 3–7 / około 14 dni pozostają parametrami badania, nie źródłowymi normami.

## C03-05 — Statusy użycia i zamknięcie authoringu

| Oś / użycie | Rzeczywisty stan |
|---|---|
| Opracowanie | Treść wszystkich 3 pakietów, 9 zamkniętych itemów i 7 otwartych aktywności ukończona autorsko |
| Źródła | Sprawdzone w zakresie C01; zastosowanie norm do fikcyjnych sytuacji jest interpretacją do review |
| Kontrola | Autorska, źródłowa i arytmetyczna; wynik C04 |
| Odrębne kompetentne review | Nie wykonane |
| U-READ / U-GUIDED / U-INDEPENDENT / U-REMEDIAL / U-REVISION | Przygotowane zależności treści, brak aktualnego dopuszczenia uczniowskiego do danego użycia |
| U-RESERVED / U-TOPIC | Kandydaci i plan istnieją; review treści/rodzin, separacja eksportu i eligibility pozostają wymagane |
| U-MOCK | Nieobjęte zakresem, niedopuszczone |
| Publikacja publiczna/komercyjna | Kanał nieustalony, brak dopuszczenia; warunki C01 |
| Empiria | Brak prób uczniów, kalibracji, trudności empirycznej, retencji i prognostycznej walidacji |

**Wspólna atrybucja i prawa:** jak C01-05; całość to autorskie opracowanie projektu z wykorzystaniem pojęć IREB. Wydanie przekazuje się do recenzji. Przy zmianie klucza, źródła, rodziny lub sensu rationale ponownie sprawdzić zależne treści i historyczne interpretacje, zachowując pierwotne odpowiedzi. Nie utworzono historii ucznia ani wyników z niewykonanych prób.

**Historia dokumentu:** v0.1 był manifestem wstrzymanego authoringu z zerowym inwentarzem. v0.2 zastępuje ten stan rzeczywistymi treściami po decyzji G1; nie nadaje G2 statusu accepted. Kompletność materiału do review nie jest niezależnym dopuszczeniem ani potwierdzeniem skuteczności nauki.
