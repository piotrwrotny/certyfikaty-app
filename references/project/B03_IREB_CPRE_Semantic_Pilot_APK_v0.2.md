# B03 — Pilot Semantic Walkthrough A/P/K v0.2

**Projekt:** IREB CPRE Foundation Level Learning System. **Faza B. Data:** 1.11.2026. **Status: FOR REVIEW.** Kontrakt nadrzędny: B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md. Akceptacja FR: B02_IREB_CPRE_FR_Traceability_v0.2.md. Decyzje i luki: B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md.

> **Rewizja v0.2 — korekty po R04:** zachowano reguły i treść v0.1; doprecyzowano flagę przeglądu, neutralny słownik językowy i granice G2/G3 oraz nazwy wierszy K. B01–B04 tworzą jedną rewizję. Wynik ponownej kontroli: `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md`. Wprowadzenie poprawek nie jest akceptacją G1.


## B03-01 — Co jest testowane i czego nie zatwierdzono

**Wejście:** trzy istniejące ilustracje S-FTC/S-BP F13.8, nie historyczne A/P/K z innego scenariusza D12. Nie są pytaniami IREB, skalibrowanym bankiem ani nieznaną rezerwą dla czytelnika tych dokumentów. Wszystkie wyniki i zdarzenia uczniów poniżej są fikcyjne. Dopisane identyfikatory i jawne powiązania są operacjonalizacją architektury, nie oficjalnymi EO ani opublikowanym authoringiem C.

**Metoda:** zachować tekst, klucz, punkty i funkcjonalny przebieg F13.8; dla każdego przejścia wskazać potrzebną informację, relację oraz granicę wniosku. Tam, gdzie źródło nie zapewnia gotowego wariantu, review albo historii, nazwać brak i zablokować odpowiednią obietnicę. Nie zakładać milcząco, że etykieta „nowy” albo „zatwierdzony klucz” w opisie przyszłej sytuacji oznacza rzeczywiście przeprowadzoną recenzję tej ilustracji.

**Stan obecny wszystkich itemów:** kompletność tekstowa jest badana w tym walkthrough; źródłowe reguły porównano z normami w B01. Niezależne review kluczy, języka, rodzin i praw przyszłej publikacji **nie zostało wykonane**. Dlatego U-GUIDED/U-INDEPENDENT/U-RESERVED nie są tu rzeczywistymi zgodami na udostępnienie uczniowi. Walkthrough opisuje semantykę docelowego przebiegu i weryfikuje, czy można go przygotować bez brakujących podstawowych ról. Produkcyjna bramka QG-09 pozostaje zamknięta do pracy C.

### Wspólne oznaczenia

| Oznaczenie | Znaczenie |
|---|---|
| ILL-A01 / ILL-P01 / ILL-K01 | Lokalne identyfikatory istniejących ilustracji; rewizja ilustracyjna 1 |
| ILL-A-FU / ILL-P-FU / ILL-K-FU | Kontrole po korekcie opisane już w F13.8 |
| KRY-* | Kryteria B01-02; lokalne operacjonalizacje FOR REVIEW |
| REG-A / REG-P / REG-K | Nazwane fragmenty poprawnej reguły wewnątrz explanation, nie nowy oficjalny dokument |
| CMP-* / PRE-* / HYP-* | Lokalne comparison, kandydat prerequisite i hipoteza; identyfikatory nie nadają statusu review |
| FAM-ILL-* | Proponowane rodziny ilustracji; ostateczna klasyfikacja i ocena bliskości należą do C/review |
| D0 / D7 | Względne czasy fikcyjnej historii, nie rzeczywiste daty aktywności użytkownika |

Słownik źródeł N-* i S-* ma dokładnie znaczenie z B01-01. Wskazany Glossary uzasadnia regułę; szczegóły miasta, biblioteki czy macierzy są autorskimi warunkami zadania, nie faktami oficjalnego źródła.

## B03-A — A: system boundary versus system context

### A1. Cel, zakres i pakiet

- **Primary MEASURES:** ILL-A01 → KRY-A01 → EO2.2.2 L2, ograniczone do zasady kontekstu. Źródło: N-SYL-EN, EU2, wykaz EO s.14 i zasada kontekstu s.16.
- **SUPPORTS:** rozumienie potrzebne w EO4.1.1 L3. To pytanie nie wymaga samodzielnego wyznaczenia wszystkich granic i nie potwierdza tego EO.
- **Concept/terminy:** granica systemu (*system boundary*), kontekst systemu (*system context*), granica kontekstu (*context boundary*), zakres zmiany. Granica kontekstu pomaga objaśnić różnicę, nie jest automatycznie osobnym mierzonym kryterium.
- **Scoring:** A, w=1, klucz b; odwołanie do N-REG §2. Rodzina głównej ilustracji: FAM-ILL-A01, proponowana. Użycie: practice/ilustracja; nie reserved.
- **Warunek wystarczalności:** stem wskazuje skład nowego systemu, odrębność rejestru i jego wpływ. Sam brak modyfikacji nie wyznacza granicy; decyzja opiera się na całym opisie.

### A2. Istniejące pytanie i pełne rozstrzygnięcia

**Wybierz jedną odpowiedź.** Miasto zamawia system „Termin Odbioru”, składający się z aplikacji mieszkańca i usługi obsługującej zamówienia odbioru odpadów. Istniejący rejestr mieszkańców pozostaje osobnym systemem. Przekazuje nowemu systemowi dane adresowe potrzebne do sprawdzania uprawnień, ale nie będzie modyfikowany w tym projekcie. Jak należy traktować rejestr w analizie nowego systemu?

| Opcja i treść z F13.8 | Klucz wyboru / fikcyjna decyzja | Reguła i rationale danej opcji | Podstawa rozstrzygnięcia |
|---|---|---|---|
| a. Jako część nowego systemu, ponieważ oba rozwiązania należą do miasta | Nie / niewybrana | Wspólny właściciel nie zmienia jawnie przyjętego przedmiotu analizy. Opis wyodrębnia rejestr jako osobny system | Stem; REG-A; N-GLO-EN, system boundary, uwagi do zakresu |
| b. Jako element poza granicą systemu, należący do jego istotnego kontekstu | Tak / niewybrana | Rejestr jest oddzielny, a jego dane wpływają na wymagane działanie. To łącznie uzasadnia zewnętrzność i istotność | Stem; REG-A; N-GLO-EN, system boundary/system context; N-SYL-EN, zasada kontekstu |
| c. Jako element poza istotnym kontekstem, ponieważ nie będzie zmieniany | Nie / **wybrana** | Brak zleconej zmiany nie usuwa podanego wpływu danych. Z tej przesłanki nie wynika nieistotność | Stem; REG-A; N-GLO-EN, system context i system boundary, uwaga 3 |
| d. Jako przeszkodę uniemożliwiającą ustalenie granicy systemu | Nie / niewybrana | Interakcję z otoczeniem opisuje się przez granicę. Jej występowanie nie znosi rozróżnienia systemu i kontekstu | Stem; N-GLO-EN, system boundary, uwaga o interfejsach |

**REG-A — autorskie objaśnienie reguły:** ustalić, co jest rozpatrywanym systemem i co w jego otoczeniu wpływa na wymagania. Zakres prac nad elementem jest inną informacją niż jego istotność. Zewnętrzność i brak zmian nie oznaczają, że element wolno pominąć. Dokładne znaczenie terminów: N-GLO-EN/PL, właściwe hasła; nie jest to cytat oficjalnej polskiej definicji.

Każda opcja ma R08 do własnego rationale; wszystkie mogą mieć R09 do REG-A. Nie trzeba tworzyć Concept „miejski rejestr mieszkańców” ani czterech nowych EO.

### A3. Ścieżka od błędu do wiedzy i podstawy

| Krok | Informacja i relacja | Skutek / ograniczenie |
|---|---|---|
| Odpowiedź | Fikcyjny uczeń zatwierdza c bez pomocy w tej próbie | A daje 0/1. To błąd decyzji KRY-A01, nie diagnoza wszystkich granic |
| Pierwszy feedback | R08(c) → rationale → R09(REG-A); widoczne c i prawidłowe b, a/d na żądanie | Wyjaśnia rozstrzygający wpływ danych, bez wymogu czytania całej teorii |
| Celowany link | R10/R11 do CMP-A: „zakres zmiany a istotny kontekst” | Sens linku: wyjaśnić, dlaczego „nie zmieniamy” nie oznacza „pomijamy” |
| Porównanie | CMP-A zestawia trzy pytania: co należy do systemu; co w otoczeniu wpływa na wymagania; co obejmują zlecone prace | Nie utożsamia granicy systemu z granicą kontekstu ani zakresem projektu |
| Kandydat podstawy | PRE-A: system jako przyjęty przedmiot analizy; R14 wyłącznie do działania identyfikacji rozpatrywanego systemu | Potrzebne własne uzasadnienie i review. Bez niego nie wymuszać prerequisite; pełny flow nadal działa przez pewne rationale |
| Kotwica | Navigation Context: ILL-A01/rev.1, c, 0/1, fragment c, miejsce sesji, stan ujawnienia; R26 | Eksploracja nie tworzy nowej próby i nie nadpisuje źródła |

CMP-A wymaga własnego review osi i argumentu. Źródłowo poprawne definicje obu końców nie zatwierdzają automatycznie porównania. PRE-A w tej fazie jest kandydatem, nie empirycznie zweryfikowaną zależnością.

### A4. Hipoteza i korekta

**HYP-A:** „Nie zmieniamy elementu, więc nie analizujemy go w kontekście”. R16 wiąże wybór c tylko z możliwością tej reguły. Alternatywy: pominięte zdanie o danych, nieznany termin „kontekst”, przypadkowy wybór, mylne odczytanie polecenia.

Istniejąca sonda: **„Czy zewnętrzna usługa, której nie wolno zmienić, może narzucić ograniczenie nowemu systemowi? Podaj powód”.** Dla hipotezy oczekiwano by negowania istotności wyłącznie z powodu braku zmiany; adekwatne uzasadnienie wpływu ją osłabia. Odpowiedź bez powodu może być nierozstrzygająca. Metoda oceny swobodnego powodu musi być jawna.

W przebiegu F13.8 sonda występuje po pokazaniu poprawnej reguły. Dlatego może sprawdzić bieżące rozumienie, ale **nie potwierdza wstecz** przyczyny c. Możliwa neutralna korekta nie wymaga w ogóle HYP-A.

Korekta używa CMP-A oraz istniejącego kontrprzykładu przepisu określającego terminy obsługi: istotny wpływ nie musi mieć postaci interfejsu IT. R13 obala regułę „kontekst to tylko systemy wymieniające dane”; nie dowodzi, że ten konkretny uczeń wcześniej tak uważał.

### A5. Znaczący follow-up, ocena i powrót

Istniejący **ILL-A-FU**: „Aplikacja składa zamówienia na posiłki. Regulamin szkoły określa, do kiedy można anulować zamówienie. Regulamin nie jest częścią aplikacji ani elementem wdrożenia. Czy należy go uwzględnić przy określaniu wymagań i dlaczego?”.

Oczekiwane rozstrzygnięcie z F13.8: tak — regulamin określa warunek zachowania aplikacji. Rubryka ilustracyjna wymaga uznania istotności, wskazania wpływu na anulowanie i braku utożsamienia istotności z wewnętrzną częścią aplikacji. Nie wymaga dosłownej definicji ani stworzenia modelu L3.

**R19 + R06:** zmiana z technicznego dostarczania danych na regułę organizacyjną zachowuje KRY-A01 i jest dydaktycznie znacząca. Jednak po poprzedzającym przykładzie przepisu jest to bliski, świeżo przygotowany kontrast. Nie wolno uznać go automatycznie za niezależną nieznaną rodzinę. R21 ma opis różnicy i jawny brak niezależnego review; ostateczna FAM-ILL-A-FU pozostaje propozycją.

Fikcyjna odpowiedź: „Tak, ponieważ regulamin ustala warunek anulowania, który aplikacja musi respektować”. Uczeń porównuje ją sam z rubryką. Zapisać **wykonanie bez widocznego materiału po instrukcji, ocenione samodzielnie**. Nie zapisywać niezależnie zweryfikowanej poprawności rozumowania ani retencji.

Powrót przez R26 przywraca **c i 0/1**, ten sam stem, rozwinięte rationale i miejsce w sesji. Follow-up pozostaje osobną aktywnością. Kolejny krok może dotyczyć innego celu lub późniejszej kontroli; uczeń nie musi ponownie odpowiadać na znane A, żeby wrócić.

### A6. Dowody i brakujące informacje

| Moment fikcyjnej historii | Dane zachowane | Uprawniony wniosek |
|---|---|---|
| D0, przed ILL-A01 | Brak wcześniejszej zarejestrowanej próby KRY-A01; historia itemu wskazuje pierwszy kontakt; pomoc nieujawniona | Pierwsza obserwacja tego zadania według znanej historii. Brak poprzedniego czasu jest wartością nieustaloną, nie zerem dni |
| D0, po oddaniu c | 0/1, klucz b, criterion KRY-A01, brak pomocy przed odpowiedzią | Niepoprawne samodzielne wykonanie w tych warunkach; bez diagnozy przyczyny |
| D0, po feedbacku/CMP-A | Zakres ujawnionej reguły i czas istotnego kontaktu | Nauka/korekta; kontakt aktualizuje późniejszy odstęp KRY-A01 |
| Kilka minut później ILL-A-FU | Nowy przypadek treściowy, świeża instrukcja, brak bieżącego panelu, samoocena | Odpowiedź zgodna z rubryką według samooceny, po korekcie; brak retencji i niezależnie potwierdzonego transferu |
| Późniejszy termin | Plan, bez rzeczywistego zadania odroczonej rezerwy i bez odpowiedzi | Niczego jeszcze nie zmierzono; nie tworzyć wydarzenia ani punktów |

**Braki funkcjonalne:** bez rationale c/b — U-GUIDED/U-INDEPENDENT zablokowane; bez review PRE-A — pominąć podstawę; bez rodziny nowego zadania — brak niezależnego pomiaru; bez recenzowanej rubryki — wypowiedź może być refleksją, bez potwierdzonej oceny. Odroczony item nie powstał w B: C musi go przygotować i chronić, zanim będzie możliwa obietnica późniejszej niezależnej kontroli. [AC-004/006/007/010–020/022/033/037]

## B03-P — P: functional requirement, quality requirement, constraint

### P1. Cel i warunki

**Primary MEASURES:** ILL-P01 → KRY-P01 → EO1.1.2 L2. Wymagane jest rozróżnienie rodzaju wymagania, nie ocena jakości jego sformułowania z EO3.8.1. Materiał może wspierać późniejszą naukę jakości, lecz nie mierzy jej samym wystąpieniem procentów i czasu.

**Stan fikcyjny z F13.8:** definicje widziane wcześniej, item pierwszy raz, brak pomocy do bieżącej odpowiedzi. Czas wcześniejszego poznania definicji nie jest podany — nie wymyśla się odstępu retencji. Rodzina FAM-ILL-P01 proponowana; rola practice. Format P, w=2, k=2, klucz b,d.

### P2. Pytanie i rationale każdej opcji

**Wybierz dokładnie DWA wymagania jakościowe.** Każde zdanie należy oceniać jako wymaganie dotyczące tego samego systemu rezerwacji.

| Opcja z F13.8 | Przynależność do klucza / decyzja ucznia | Rationale i rozstrzygający element | Podstawa |
|---|---|---|---|
| a. System ma umożliwiać anulowanie rezerwacji przed jej zatwierdzeniem | Nie / niewybrana | Określa funkcję, którą system ma zapewnić. Warunek anulowania nie zmienia funkcji w wymaganie jakościowe | Stem; N-GLO-EN, functional requirement; N-SYL-EN §1.1 |
| b. Przy 200 jednoczesnych użytkownikach 95% odpowiedzi wyszukiwania ma pojawić się w czasie nie dłuższym niż 2 sekundy | Tak / **wybrana** | Opisuje oczekiwaną cechę działania w danych warunkach. Nie sama liczba, lecz sens oczekiwania rozstrzyga | Stem; REG-P; N-GLO-EN, quality requirement |
| c. System ma korzystać z firmowej biblioteki Integrator 4.0 | Nie / **wybrana** | Narzuca wybór rozwiązania; w tym opisie jest ograniczeniem przestrzeni realizacji, a nie oczekiwaną cechą jakości | Stem; REG-P; N-GLO-EN, constraint |
| d. W miesiącu kalendarzowym usługa ma być dostępna przez co najmniej 99,5% czasu, liczonego po wyłączeniu uzgodnionych okien serwisowych | Tak / **pominięta** | Określa dostępność usługi oraz warunki jej liczenia. Niewybranie tej poprawnej opcji wymaga feedbacku | Stem; REG-P; N-GLO-EN, quality requirement |
| e. System ma rejestrować, kto i kiedy zmienił limit rezerwacji | Nie / niewybrana | Określa wymagane zachowanie rejestrowania. Możliwy cel bezpieczeństwa nie zmienia automatycznie rodzaju tego zapisu | Stem; N-GLO-EN, functional requirement; autorskie zastosowanie reguły |

**REG-P:** klasyfikować według tego, czego zapis wymaga: zachowania, cechy jakościowej albo narzuconego wyboru rozwiązania. Wspólna oś CMP-P obejmuje trzy rodzaje; zapis techniczny, liczba ani cel biznesowy same nie są kryterium typu. Wszystkie opisy dotyczą podanego systemu i nie wymagają rozstrzygania, czy wymaganie jest dostatecznie dobrze napisane.

N-GLO-PL kontroluje terminy polskie; rozwinięte rationale to autorskie objaśnienia. R08 dla a–e wskazuje lokalne przesłanki, R09 wspólną REG-P, R11 wspólny CMP-P. b i d nie wymagają dwóch nowych Concept tylko dlatego, że opisują inne cechy.

### P3. Wynik i droga do naprawy

Uczeń zaznaczył b,c. n=2 nie przekracza k; jedna trafna wybrana opcja daje **1/2**. c nie przynosi punktu, pominięta d nie przynosi punktu, niewybranie a/e również nie daje punktów. To nie jest „50% EO”.

| Wariant odpowiedzi na ten sam istniejący klucz | Wynik | Co można stwierdzić |
|---|---:|---|
| b,d | 2/2 | Pełny punktowy wynik tego pytania, nadal tylko ograniczony dowód |
| b,c | 1/2 | Trafne wskazanie b, nietrafne c, brak d; przyczyna nieustalona |
| b | 1/2 | Niepełny wybór zachowuje trafną część |
| b,c,d | 0/2 | Nadmiar zeruje scoring, choć zachowane decyzje zawierają dwa trafienia |
| a,e albo brak | 0/2 | Brak punktowanych trafień; inne interpretacje wymagają dodatkowych danych |

Feedback najpierw wyjaśnia część punktów i REG-P; domyślnie pokazuje c i pominiętą d, pozostałe rationale są dostępne. c → R08 → REG-P → CMP-P daje pełną ścieżkę bez nowej ontologii dystraktorów. e może prowadzić do istniejącego przykładu funkcji wspierającej cel jakościowy. Nie kieruje do całego działu bezpieczeństwa.

**Opcjonalna podstawa:** rozumienie „wymaganie jako oczekiwana właściwość/zachowanie” może być pomocne, ale R14 wymaga wskazania konkretnej luki. W tym przebiegu nie jest obowiązkową bramką. Wynik P sam nie dowodzi, że uczeń nie zna pojęcia wymagania.

### P4. Hipoteza, sonda i follow-up

**HYP-P:** „techniczne = jakościowe” lub „każda liczba oznacza jakość”. Alternatywy: przeoczona d; zawodowe utożsamienie „niefunkcjonalne” tylko z jakością; pomylone zaznaczenie; niezrozumienie instrukcji wyboru dwóch.

Sonda z F13.8 porównuje sens „95% operacji w 2 sekundy” i „biblioteka w wersji 4.0”: co rozstrzyga klasyfikację? Kryterium odpowiedzi wymaga wskazania cechy działania wobec narzuconego komponentu. Sama obecność liczby jest wspólna, więc nie rozdziela kategorii. Po instrukcji sonda pokazuje bieżące rozumienie; nie potwierdza pierwotnej HYP-P. Bez rozstrzygającego powodu pozostaje neutralna korekta.

**ILL-P-FU** zachowuje istniejący w F13.8 zakres: trzy nowe opisy przesyłania zdjęć — możliwość dołączenia zdjęcia do zgłoszenia; limit czasu przesłania przy określonych warunkach transmisji; nakaz użycia UploadKit 7. Uczeń klasyfikuje je jako **funkcjonalne, jakościowe, ograniczenie** oraz wskazuje rozstrzygające fragmenty.

Ta kontrola zmienia zadanie z wyboru dwóch jakości na klasyfikację trzech rodzajów, zachowując KRY-P01 i poziom L2. Nie jest pełnym nowym P: to złożone ćwiczenie treningowe z kluczem klasyfikacji i osobną rubryką krótkiego powodu. Nie dopisuje się mu punktacji egzaminacyjnej. Klasyfikacje mogą być ocenione sprawdzonym kluczem; własne uzasadnienia porównywane przez ucznia są **samooceną**. Fakt niezależnego ocenienia klasyfikacji nie przechodzi na swobodny tekst.

F13.8 nie zawiera ostatecznej redakcji wszystkich warunków transmisji ani dokumentacji review tej kontroli. Przed rzeczywistym użyciem C musi doprecyzować brzmienie, zatwierdzić klucz/rubrykę i rodzinę FAM-ILL-P-FU. B pokazuje, jakich informacji potrzeba; nie nadaje brakującemu tekstowi statusu gotowego itemu. Jest to dydaktycznie sensowny kierunek zmiany, bez udowodnionej niezależności rodziny.

### P5. Powrót, dowody i ograniczenia

R26 przywraca **b,c i 1/2**, w tym informację o pominiętej d. Powrót nie poprawia pierwszego wyniku. CMP-P i feedback aktualizują istotny kontakt KRY-P01 dla przyszłych prób. Follow-up kilka minut później może wykazać bieżącą poprawę klasyfikacji po korekcie; nie potwierdza odroczonej retencji.

| Zapis dowodowy | Interpretacja dozwolona | Interpretacja zabroniona |
|---|---|---|
| Pierwszy item nowy, brak pomocy przed odpowiedzią, 1/2 | Częściowo poprawne samodzielne wykonanie tego wyboru | Dwa niezależnie zmierzone braki albo 50% mastery |
| c wybrane, d pominięta | Dwie różne obserwacje wymagające objaśnienia | Pewna przyczyna obu decyzji |
| Otwarto CMP-P | Ekspozycja na regułę i jej zakres | Samo przeczytanie naprawiło rozumienie |
| Klasyfikacje follow-up ocenione kluczem, powody samoocenione | Dwa źródła oceny, świeża korekta i status rodziny jawne | Niezależnie zweryfikowane uzasadnienie albo transfer po przerwie |
| Plan późniejszego wyboru uzasadnienia cechy zużycia zasobów | Specyfikacja potrzebnego nowego zadania C | Istniejąca rezerwa lub rzeczywisty wynik, skoro itemu nie napisano |

**Missing-information:** brak rationale d blokuje nowe punktowane P, nawet gdy b/c są kompletne. Brak nowej rodziny pozwala na utrwalenie, bez transferu. Brak czasu wcześniejszej lektury ogranicza retencję. Kopia tego P ze zmienioną nazwą biblioteki pozostaje wariantem kosmetycznym. [AC-004–006/008/010–024/029/033–037]

## B03-K — K: traceability i jawnie dokumentowana relacja

### K1. Cel i mapa każdej decyzji

Primary criterion: **KRY-K01 → EO6.6.3 L1**. Rozróżnienie implicit/explicit z **EO6.6.2 L1** jest pomocnicze. Stwierdzenie 3 ma wtórny pomiar **KRY-K02 → EO6.6.1 L1**. Stwierdzenie 4 ma wyłącznie objaśniające **KRY-X01**, bez nowego oficjalnego EO. Odniesienie: N-SYL-EN, wykaz EU6 s.41 i §6.6 s.43; N-GLO-EN/PL, traceability.

Zachowuje się poziom L1: rozpoznanie rodzaju zapisu, nie samodzielne projektowanie całego modelu powiązań. Obecność macierzy lub historii projektu nie podnosi automatycznie czynności do L3.

K, w=2, m=4, klucz **Prawda, Fałsz, Prawda, Fałsz**. Rodzina FAM-ILL-K01 proponowana; rola ilustracja/practice. Kompletna mapa decyzji jest potrzebna niezależnie od tego, że suma scoringu pozostaje jedną liczbą.

### K2. Istniejące stwierdzenia i pełna interpretacja

**Oceń każde stwierdzenie jako prawdziwe albo fałszywe.**

| Wiersz z F13.8 | Klucz / decyzja / punkty | Rationale, reguła i źródło | Mapa dowodu |
|---|---|---|---|
| 1. Jawne śledzenie może dokumentować powiązanie wymagania z jego źródłem | Prawda / Prawda / 0,5 | Źródło jest możliwym końcem utrzymywanego powiązania. N-GLO-EN traceability; N-SYL-EN §6.6; REG-K | R06 do KRY-K01 w aspekcie powiązania ze źródłem; nie wszystkie formy dokumentowania |
| 2. Samo umieszczenie dwóch wymagań w jednym dokumencie stanowi jawne udokumentowanie relacji śledzenia między nimi | Fałsz / **Prawda** / 0 | Wspólne miejsce bez określenia powiązania nie zapisuje jawnej relacji. Struktura może pomagać w śledzeniu niejawnym, lecz nie ustanawia tego jawnego związku. N-SYL-EN §6.6 | R06 do KRY-K01; pomocniczo SUPPORTS EO6.6.2, bez automatycznego pełnego pomiaru tego EO |
| 3. Utrzymywane powiązania mogą pomagać wskazać elementy do przeglądu po zmianie wymagania | Prawda / Prawda / 0,5 | Utrzymywane zależności pozwalają odnaleźć kandydatów do analizy, a nie automatycznie rozstrzygnąć wszystkie skutki. N-SYL-EN §6.6 i autorska interpretacja przykładu | R06 do KRY-K02, fragment EO6.6.1 |
| 4. Powiązanie wymagania z testem samo w sobie dowodzi, że test wykonano z powodzeniem | Fałsz / **brak** / 0 | Zapis związku nie zawiera informacji o zdarzeniu wykonania ani rezultacie testu. Wynik wymaga osobnego dowodu. To autorski wniosek o granicy znaczenia relacji, wsparty zakresem N-GLO-EN traceability | KRY-X01 objaśniające; bez OPERATIONALIZES do wymyślonego oficjalnego EO |

**REG-K — objaśnienie:** jawny zapis określa powiązane artefakty i znaczenie związku. Samo sąsiedztwo nie wystarcza. Istnienie relacji nie potwierdza dowolnych właściwości jej końców. To sens stosowany również w architekturze B: link nie poświadcza ani mastery, ani poprawności innego twierdzenia.

Wynik według reguły punktowania K z N-REG to **1/2**: dwie trafne oceny, jedna nietrafna, jedna nieudzielona. Nie zero za całość i nie trzy trafne oceny przez potraktowanie pustego pola jako Fałsz.

**Ograniczenie ważności treści:** zachowano punktowanie całej istniejącej ilustracji, w tym pomocniczy wiersz 4. To nie poświadcza, że pytanie jest właściwą pozycją rezerwy CPRE. Bez uzasadnienia oficjalnego zakresu wszystkich punktowanych rozstrzygnięć nie można go włączyć do U-RESERVED CPRE/U-MOCK. Nie usuwa się wiersza 4 po cichu. C ma przygotować osobny, zgodny pakiet do zamierzonego pomiaru albo przedstawić jawny wniosek o nową wersję i zakres; patrz B04, konflikt K-04.

### K3. Od błędnego wiersza do celowanej naprawy

| Krok | Wymagane znaczenie | Dozwolony wynik |
|---|---|---|
| Oddanie K | Cztery odrębne stany decyzji, m=4, w=2, wersja klucza | Zachowane 1/2 oraz wynik każdego wiersza |
| Feedback | R08/R09 wiersza 2 prowadzi do REG-K, wiersza 4 do granicy wniosku | Brak wiersza 4 pozostaje „brak odpowiedzi”, bez diagnozy jego przyczyny |
| Comparison | CMP-K: zapis określonego związku vs samo współwystępowanie; R11 | Wyjaśnienie, co dokładnie trzeba udokumentować |
| Przykład | Powiązanie wymóg–test z oddzielną informacją o wykonaniu | Objaśnienie wiersza 4 bez tworzenia nowej obowiązkowej karty |
| Prerequisite | Rozumienie końców i znaczenia relacji może być podstawą rozpoznania; wymaga osobnego R14 | Brak zweryfikowanego prerequisite nie blokuje CMP-K ani follow-up |
| Hipoteza | HYP-K: organizacja dokumentu utożsamiona z jawną traceability | R16, bez pewnej diagnozy z jednego Prawda w wierszu 2 |

Alternatywy dla HYP-K: przeoczono „samo”; odczytano dokument jako mający niewymienioną konwencję odsyłaczy; uczeń nie zna „jawne”; przypadkowy wybór. Sonda z F13.8 zestawia wspólny folder bez oznaczenia zależności z zapisem „R8 wywodzi się z celu G2”. Rozpoznanie drugiego zapisu po pokazaniu reguły wspiera bieżące rozumienie. Nie potwierdza, że pierwsza błędna odpowiedź wynikała właśnie z HYP-K. Hipoteza dotycząca wiersza 4 **nie powstaje z blank**.

### K4. Istniejący follow-up A w innej reprezentacji

**ILL-K-FU, A, w=1, klucz a.** „W macierzy wiersze oznaczają wymagania, a kolumny przypadki testowe. Legenda określa, że znak X oznacza: wskazany test weryfikuje wskazane wymaganie. W komórce dla wymagania W12 i testu T5 zapisano X. Który opis jest trafny?”.

| Opcja z F13.8 | Klucz i rationale wymagane do całego pakietu |
|---|---|
| a. Macierz dokumentuje jawną relację W12–T5 | Poprawna; identyfikatory oraz legenda i X określają relację. Stem zawiera wszystkie konieczne warunki |
| b. Macierz jedynie przechowuje nazwy obok siebie i nie zapisuje relacji | Niepoprawna; pomija znaczenie nadane X przez legendę. Nie jest to już samo sąsiedztwo nazw |
| c. Relacja stanie się jawna dopiero po przeniesieniu macierzy do grafu | Niepoprawna; jawność nie zależy od użycia grafu. N-SYL-EN §6.6 dopuszcza różne formy zapisu |
| d. Relacja nie może być udokumentowana przed wykonaniem testu | Niepoprawna; deklaracja powiązania nie wymaga informacji, że test już wykonano. Stem określa relację, bez danych o wyniku testu |

Powyższe uzasadnienia uszczegóławiają istniejące odpowiedzi dla kontroli kompletności B, bez tworzenia nowego itemu banku. Źródłową regułą jest §6.6 i termin traceability; odczyt konkretnej komórki wynika ze stemu. Ostateczny klucz i wszystkie rationale nadal wymagają niezależnego review.

R19 wiąże follow-up z korektą wiersza 2; R06 z KRY-K01, nadal L1. Zmiana tekstowego stwierdzenia na macierz z legendą jest znacząca dydaktycznie. Podobieństwo rozstrzygnięcia po świeżej korekcie nie daje automatycznie nowej niezależnej rodziny. FAM-ILL-K-FU i R21 wymagają review. Fikcyjny wybór a daje **1/1 tej nowej próby**, jeżeli ocena korzysta z poprawnego, dopuszczonego klucza. W obecnym dokumencie to oczekiwany wynik ilustracyjny, nie rzeczywista ocena ekspercka.

Follow-up nie daje niezależnej obserwacji KRY-K02 ani domknięcia KRY-X01. Rationale d może wspomagać objaśnienie wiersza 4, ale samo przeczytanie go nie mierzy naprawy tamtego braku odpowiedzi.

### K5. Dwa odstępy i granice retencji

F13.8 opisuje powrót po tygodniu bez zarejestrowanego istotnego kontaktu z badanym kryterium i z dobrowolną deklaracją braku nauki zewnętrznej. Żeby nie rozciągnąć tego opisu na wszystkie składowe K, przyjmujemy następujące **jawne dane syntetyczne**, wyłącznie dla sprawdzenia kontraktu:

| Kryterium | Poprzednia samodzielna próba | Ostatni istotny kontakt | Stan przed ILL-K01 w D7 09:00 |
|---|---|---|---|
| KRY-K01 | D0 08:50; wynik nieokreślony w danych wejściowych | Feedback/instrukcja D0 09:00 | Około 7 dni +10 min od próby i 7 dni od kontaktu; nowe K według historii; zewnętrzna deklaracja nie jest obserwacją |
| KRY-K02 | Nie podano | Nie podano | Wynik wiersza 3 można ocenić; brak podstaw do przypisania mu dokładnej siedmiodniowej retencji |
| KRY-X01 | Nie podano | Nie podano | Pomocniczy cel i blank; brak dowodu wykonania |

Pierwsze pokazanie ILL-K01 zapisuje ekspozycję, nie odbiera nowości bieżącej próbie. Wiersze 1 i 2 dają **mieszane obserwacje KRY-K01 po przerwie**: jedna trafna, jedna błędna. Nie zapisuje się „traceability utrzymane” dla całego obszaru. Wiersz 3 daje pozytywny sygnał KRY-K02 bez znanego odstępu. Wiersz 4 jest nieudzieloną odpowiedzią pomocniczą.

Po feedbacku nowy istotny kontakt dotyczy tych kryteriów, których reguły ujawniono, z własnym czasem. Trafne ILL-K-FU kilka minut później jest kontrolą świeżej korekty, nie drugim tygodniowym wynikiem. Jeśli minutę przed początkowym K odczytano REG-K, odstęp KRY-K01 od próby pozostaje około tygodnia, lecz od kontaktu wynosi minutę: ta wersja historii **nie pozwala na etykietę tygodniowej retencji**.

### K6. Powrót i brakujące informacje

R26 przywraca początkowe K: **Prawda, Prawda, Prawda, blank oraz 1/2**. Nie zmienia go w 2/2 po trafnym A. Flaga ponownej kontroli dotyczy KRY-K01, z zachowaną trafną i błędną obserwacją; nie kasuje dawnych wyników. Pozostałe cele nie dostają automatycznej kary ani zaliczenia.

Brak nowego odroczonego wariantu daje jawny komunikat „brak niezależnego nowego zadania dla tej kontroli”; stare K może służyć utrwaleniu. Brak czytelnego związku Prawda/Fałsz z wierszem blokuje równoważną interpretację. Brak klucza jednej tezy blokuje nowe użycie całego K. Brak oficjalnego mapowania wiersza 4 blokuje jego ukryte wykorzystanie w punktach rezerwy CPRE, nie zwykłe autorskie objaśnienie. [AC-004/007/009–023/029/033–037]

## B03-E — Przypadki negatywne i odporność kontraktu

Każdy wiersz jest **próbą logiczną na zdefiniowanym modelu**, nie wykonanym testem aplikacji. „Przechodzi” znaczy: kontrakt ma rozstrzygające informacje i bezpieczny skutek, bez ukrytej generacji. Nie znaczy, że wadliwa treść przechodzi bramkę publikacji.

| Test i wymuszona sytuacja | Obowiązek/ścieżka, którą sprawdzamy | Oczekiwany bezpieczny rezultat | Rozstrzygnięcie modelu |
|---|---|---|---|
| E01 Niekompletne rationale: P ma klucz b,d, ale brak rationale d | R08, QG-03, AC-008/011/034 | LUKA-04, blokada nowego punktowanego całego P; nie wystarczy poprawne wyjaśnienie wybranego c | Przechodzi: brak jest wykrywalny per opcja, nie znika w ogólnym explanation |
| E02 PRE-A bez uzasadnienia/review | R14 i AC-014 | Pominąć wymuszenie podstawy; użyć samowystarczalnego rationale lub wrócić | Przechodzi: niepewna relacja nie zamyka poprawnych końców |
| E03 Reserved ujawniony przez snippet | K5/K7, R20–22, AC-019/031 | Zapisać ekspozycję osoby, wykluczyć z jej nowej rezerwy i ocenić bliskie wersje; nie kasować śladu po zamknięciu preview | Przechodzi: rola korpusu i eligibility osoby są odrębne |
| E04 Nazwy Integrator 4.0 zamienione, reszta P identyczna | R21 i AC-017 | Kosmetyczna rodzina wspólna; możliwe practice, brak niezależnego transferu | Przechodzi: tożsamość tekstowa nie zastępuje różnicy poznawczej |
| E05 Wstrzyknięta historyczna wada klucza | B01-11, AC-010/035 | W sztucznej historii dawny klucz A=c błędnie dawał c punkt; po review podstawy b powstaje jawne przeliczenie, stara ocena i odpowiedź zostają. Jeśli stem był niejednoznaczny, bez przeliczenia, obserwacja niediagnostyczna | Przechodzi: nie jest to twierdzenie, że faktyczny klucz F13.8 był c; kontrpróba zachowuje wersje |
| E06 Dawna próba 7 dni temu, REG-K przeczytana minutę przed K | K7, AC-020/022 | Wynik punktowy zachowany; dwa odstępy; relearning, bez siedmiodniowej retencji. Item może być nadal nowy | Przechodzi: kontakt z kryterium nie zlewa się z historią itemu |
| E07 Po trafnym A system chciałby zaliczyć całe EO2.2.2 i EO4.1.1 | R02/R05/R06/R25, AC-004/006 | Wniosek odrzucony: tylko KRY-A01 w danych warunkach, L3 nie zostało wykonane | Przechodzi: brak dziedziczenia całego EO |
| E08 P=1/2 miałoby dać 50% mastery | B01-07/10, AC-022 | Zachować punkty i wybory; brak algorytmu takiego przeliczenia | Przechodzi: punkty i siła dowodu rozdzielone |
| E09 Blank w wierszu 4 ILL-K01 (KRY-X01) miałby potwierdzić misconception „link dowodzi sukcesu testu” | R16/R17, AC-009/015 | Oznaczyć brak odpowiedzi, podać korektę; diagnoza bez danych niedopuszczalna | Przechodzi: obserwacja braku nie jest wybraną błędną tezą |
| E10 Poprawny otwarty follow-up samooceniony według wzorca | K7, AC-006/022 | Zapisać samoocenę po instrukcji, bez niezależnie zweryfikowanego powodu | Przechodzi: poprawny wzorzec nie czyni samooceny ekspercką |
| E11 Pomoc otwarta w trakcie Sprawdzenia; potem próba powrotu do statusu testu | U-TOPIC/U-MOCK, AC-026/027 | Najpierw potwierdzenie konwersji; po niej kontrakt całej próby zakończony. Wcześniejsze dane zostają, brak odnowienia niezależnego Sprawdzenia | Przechodzi: brak obejścia granicy pomiaru przez nawigację |
| E12 Po korekcie wiersza 2 ILL-K01 trafne A miałoby zamknąć wszystkie EO6.6 i KRY-X01 z wiersza 4 | R19/R06/R25, AC-017/022 | Tylko obserwacja KRY-K01; KRY-K02 i KRY-X01 nie dziedziczą sukcesu | Przechodzi: naprawa ma jawny cel i zakres |
| E13 KRY-K01↔PRE-A tworzą cykl wymagań bez argumentu | R14, AC-014/033 | Brak obowiązkowego cyklu; kontrola sensu, zawężenie warunków albo wspólne objaśnienie; uczeń może kontynuować | Przechodzi: cykl nie daje ukrytej blokady |
| E14 PL przekład zmienił „dwa najlepsze” na „wszystkie prawdziwe” | R22, QG-02/06, AC-037 | Wstrzymać przekład i ocenić wpływ na wcześniejsze wyniki; nie zachowywać automatycznie klucza oryginału | Przechodzi: przekład ma własną kontrolę sensu |
| E15 Brak źródła/praw albo aktualny PDF niedostępny | R15, QG-05/08, AC-034 | Nigdy niesprawdzone twierdzenie wstrzymać; chwilowy brak dostępu do wcześniej sprawdzonej wersji oznaczyć osobno; legalny odsyłacz nie jest reprodukcją | Przechodzi: LUKA-08 i LUKA-09 są różne |
| E16 Alt diagramu podaje rozstrzygającą kategorię | QG-06, AC-018/026/036 | Wstrzymać wadliwą reprezentację; ujawnienie w trakcie próby zarejestrować jako pomoc, nie uznać bariery za błąd osoby | Przechodzi: dostępność nie jest pretekstem do przecieku |
| E17 24 reserved pozycje służą jednocześnie pre/post/delayed po 12 | K5/K6, AC-025/038 | Plan nie spełnia trzech nowych zestawów. Zmienić role/budżet/zakres; brak obietnicy pełnego mocku | Przechodzi: rola i rzeczywista ekspozycja kontrolują plan |
| E18 Odpowiedzi K z mieszanymi kryteriami otrzymują jeden czas retencji | B01-10 i K5 tabeli powyżej, AC-020/022 | Znane czasy KRY-K01 nie uzupełniają nieznanych czasów KRY-K02/X01 | Przechodzi: dwa zegary stosowane per kryterium, nie per cały temat |
| E19 Właściwy wynik na znanym pytaniu po tygodniu | K5/K7, AC-017/020/022 | Można opisać odroczone wykonanie znanego itemu, bez nowego kontekstu; warunek czasu nadal sprawdzany osobno | Przechodzi: retencja i nowość nie są jedną flagą |
| E20 Drugi follow-up nieudany, a potem automatyczny trzeci podobny | K4/K7, AC-016/021 | Zmiana propozycji wsparcia/przerwa; pierwotny błąd nie liczony jako follow-up; świadoma dalsza praca pozostaje możliwa | Przechodzi: kryterium wyjścia i historia gałęzi wystarczają |
| E21 Opcjonalne użycie flagi uznano za możliwość usunięcia oznaczania z całego Sprawdzenia | AC-026, B01-12, K-09 | Możliwość oznaczenia do powrotu jest dostępna; uczeń może niczego nie oznaczyć. Brak oznaczenia nie jest blankiem odpowiedzi, punktem ani sygnałem wiedzy | Przechodzi: obowiązek dostępności i fakultatywne użycie są odrębne |
| E22 Dopuszczony neutralny słownik językowy potraktowano jak otwarcie Glossary CPRE | AC-018/026, B01-10/12, K-10 | Neutralny słownik bez definicji RE jest warunkiem profilu, bez automatycznej utraty niezależności i konwersji. Definicje dziedzinowe pozostają pomocą RE; brak obowiązku budowania słownika | Przechodzi: zachowano wyjątek i granicę pomocy |
| E23 Do odbioru kompletnego pakietu C w G2 zażądano wcześniejszego wykonania G3 z uczniem | B01-14, B04-05/08, START §6, K-11 | G2 ocenia źródła/prawa, kompletność i review treści; G3 osobno przebiegi i symulację odroczenia. Uczestników określa jawny protokół; symulacja nie dowodzi retencji | Przechodzi: bramki i empiryczny pilot nie są utożsamione |
| E24 Obecne ILL-K01 z pomocniczym KRY-X01 próbuje wejść do rezerwy CPRE lub pełnego mocku | U-RESERVED/U-MOCK, QG-04, K-04, B-DEC-15 | Cały obecny pakiet niedopuszczony do tego użycia bez uzasadnienia oficjalnego zakresu wszystkich punktowanych decyzji. Nie wystarczy ukryć tag X01 ani usunąć wiersza bez nowej rewizji; zachowane m=4 i wynik ilustracji 1/2 | Przechodzi: ograniczenie zakresu jest warunkiem dopuszczenia, nie kosmetyką raportu |

## B03-02 — Wynik walidacji semantycznej

| Pytanie odbiorowe | Wynik i ograniczenie |
|---|---|
| Czy A/P/K mają komplet głównych rozstrzygnięć? | Tak na poziomie ilustracji: 4/5/4 rationale, parametry, klucze i źródłowe reguły wskazane. Nie jest to niezależne dopuszczenie do publikacji |
| Czy od błędu da się dojść do reguły i korekty? | Tak, przez R08/R09 i celowane CMP; prerequisite nie jest wymyślany jako obowiązkowy |
| Czy każdy follow-up ma znany cel? | Tak: A→KRY-A01, P→KRY-P01, K/A→KRY-K01. Redakcja P-FU i review wszystkich kontroli pozostają pracą C |
| Czy znaczący wariant staje się automatycznie nową rodziną? | Nie. Opisano zmianę i ryzyka bliskości; niezależny pomiar wymaga dodatkowego review i historii osoby |
| Czy powrót zachowuje pierwotną aktywność? | Kontrakt wskazuje wszystkie konieczne kotwice i stany: A 0/1, P 1/2, K 1/2; techniczne odtworzenie należy do późniejszej fazy |
| Czy można już wykonać rzeczywisty pomiar odroczony na gotowej rezerwie? | Nie: nie opracowano i nie zrecenzowano nieujawnionych rodzin. Zasady ich przygotowania i interpretacji są kompletne; brak zasobu daje jawny fallback |
| Czy ilustracyjne K jest gotowym itemem rezerwy CPRE? | Nie: objaśniający wiersz 4 nie ma uzasadnionego oficjalnego pomiaru. Zachowano go, wynik i ograniczenie; decyzja o nowym authoringu należy po G1 do C |
| Czy wykazano skuteczność uczenia? | Nie. To test wystarczalności modelu informacji, bez obserwacji rzeczywistych uczniów, kalibracji lub predykcji egzaminu |

**Konkluzja dla G1:** architektura pozwala opisać trzy pętle i wszystkie wskazane braki bez ukrytych ról lub nieuprawnionych wniosków. Ujawnione braki dotyczą przygotowania i recenzji korpusu C, historii rzeczywistych aktywności oraz przyszłej walidacji. Zatwierdzenie B nie może być przedstawione jako gotowość ilustracji do nauczania, gotowość rezerwy ani zamknięcie G2/G3.
