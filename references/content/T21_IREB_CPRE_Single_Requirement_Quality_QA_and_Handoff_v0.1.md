# T21 — Jakość pojedynczego wymagania / Single requirement quality — QA and Handoff v0.1

**Projekt:** IREB CPRE Foundation Level Learning System.  
**FLOW_ID:** FLOW-T21-01, CREATE. **Data:** 2 listopada 2026, Europe/Warsaw.  
**Plik treści:** `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md`.  
**Stan końcowy authoringu:** ukończone oba pliki i kontrole autorskie w zadeklarowanym zakresie.  
**Status:** COMPLETE FOR SEPARATE REVIEW; treść niezatwierdzona do zaliczanej nauki ani produkcyjnego pomiaru.  
**Bramki:** G1 CLOSED według R06. G2/G3/G4 OPEN. **C-AC-12: niespełnione w części odrębnego review.**

To pełne wydanie recenzenckie; QA również ujawnia klucze i kandydatów delayed. Zero pozycji stanowi w tej paczce chronioną rezerwę dla jej czytelnika. Liczniki i wektory poniżej opisują rzeczywiście istniejące materiały i obliczenia, nie wyniki uczniów.

## 1. Wynik, zakres i stan umożliwiający wznowienie

Wykonano pełny zakres T21 z M01 i karty M02 §8: EO3.8.1 na L1, sześć kryteriów, znaczenia, szczególną wagę adekwatności/zrozumiałości oraz zalecany charakter listy i relację stopnia spełnienia do wartości. Pełność autorskiego opracowania nie jest odrębną recenzją, zamknięciem EO w korpusie dopuszczonym ani dowodem wiedzy osoby.

Nie zmieniono START, M01/M02, B, C ani D. Zmiany wspólne są wyłącznie propozycjami delt w §10. Historyczne G1 w C v0.1 nie zostało ponownie otwarte; aktualne C v0.2 odczytano jako właściwy wzorzec. K-04 i wiersz 4 ILL-K01 / KRY-X01 pozostały bez zmian. T21 nie dziedziczy zgody na review AI przyjętej dla B.

| Checkpoint | Rzeczywiście ukończony zakres i zapis | Stan pozostałych prac w tej chwili |
|---|---|---|
| CP1 | Content §1–4: zakres, źródła, terminy, rdzeń ośmiu not; pierwszy zapis obu plików | Zadania, relacje i QA pozostawały do wykonania |
| CP2 | Dodano 3 comparisons, 4 otwarte aktywności/rubryki oraz 32 zamknięte itemy / 128 rationale; zapis kolejnej wersji tych samych plików | Relacje, punktacja i końcowy handoff pozostawały do wykonania |
| CP3 — stan końcowy | Content §1–10 i pełny QA; 538 konkretnych instancji relacji, 8 planów R26, kontrola 176 wektorów / 1024 stanów, ślad pokrycia, delty i luki | W authoringu brak niewypełnionego zakresu T21. Otwarte: niezależne review, dopuszczenia, wybór publikacji, późniejsze G3/G4 i empiria |

**Instrukcja wznowienia:** otworzyć oba pliki w tych samych tożsamościach; użyć stabilnych ID/r1. Następna praca to review z §11. Przy poprawce zmienić rewizję dotkniętych obiektów, kluczy/rationale/relacji według B01-11, zachować wcześniejszy zapis. Nie generować konkurencyjnej kopii tematu ani nie podmieniać źródeł bez analizy wpływu. Żadna dalsza decyzja rutynowa autora nie wymagała zatrzymania i pytania właściciela.

## 2. Rzeczywisty inwentarz

### 2.1. Materiały edukacyjne

| Typ | Liczba | Istniejące obiekty / co policzono |
|---|---:|---|
| Główne kryteria M02 | 3 | KRY-T21-01–03, zachowane ID |
| Kontrolowane zakresy tych kryteriów | 8 | ZAK01–06: sześć znaczeń; ZAK07: szczególna para; ZAK08: lista/wartość |
| Pomocnicze kryteria L2 bez EO | 2 | AUX-T21-03/04 dla O03/O04; nie rozszerzają pomiaru CPRE |
| Spójny rdzeń wiedzy | 1 | Content §3–5; dwie warstwy: krótki rdzeń i rozwinięte warunki |
| Adresowalne noty N | 8 | N-T21-01–08, każda z regułą i ograniczeniem |
| Kontrolowane wiersze terminologiczne | 11 | 6 kryteriów + requirement, stakeholder, quality requirement, functional requirement, quality criteria |
| Hasła z potwierdzonym w T21 oznaczeniem foundational | 10 | Sześć rzeczownikowych nazw cech oraz requirement/stakeholder/quality requirement/quality criteria; kontrola wybranych pogrubień i legendy, nie pełny audyt słownika |
| Porównania | 3 | CMP-T21-01–03, każde z osią i dwoma przypadkami |
| Odrębne objaśnienia przykładu | 7 | EX01–06 i EX08; EX08 ilustruje kierunek zależności wartości, bez normy konkretnego budżetu |
| Kontrprzykłady z jawnymi faktami przypadku | 6 | CE01–06 z nazwanym obalanym uogólnieniem |
| Obalenie nadmiernej tezy na podstawie źródła | 1 | BOUND08; nie policzono go jako siódmego kontrprzykładu sytuacyjnego |
| Przepracowane scenariusze | 2 | WS01/02 z rzeczywistymi krokami; korzystają z istniejących przypadków, nie udają nowych historii |
| Otwarte aktywności | 4 | O01/O02: retrieval L1; O03/O04: objaśniające L2 |
| Pełne rubryki otwarte | 4 | 12 + 4 + 4 + 4 =24 oddzielnie oceniane elementy opisowe, bez punktów CPRE |
| Celowane korekty | 8 | REM01–08, każda z regułą, przykładem/pomocą, F, alternatywą, G i wyjściem |
| Gotowe komunikaty | 12 | MSG-START/P/K/BLANK/HELP/RETURN/EXIT/TWO/KNOWN/TIME/GAP/REVIEW |
| Plany powrotu R26 | 8 | NAVPLAN01–08; brak rzeczywistych zdarzeń nawigacji i brak wykonanego R26 |
| Hipotezy dotyczące osoby / diagnostyczne sondy | 0 / 0 | Świadomie wybrana neutralna remediacja, bez pozorowanej diagnozy |

Przypomnienie EX01 i konsekwencja CE01 w N07 nie zostały policzone jako nowe materiały. Nagłówki, wspólna instrukcja i odsyłacze nie są dodatkowymi pytaniami. Powtórzone użycie jednego przypadku w worked scenario jest odrębną reprezentacją dydaktyczną, nie nowym niezależnym scenariuszem pomiarowym.

### 2.2. Zamknięty bank i role

| Rola | A | P | K | Itemy | Opcje A | Opcje P | Wiersze K | Rationale | Suma maksymalnych wag |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| B01–08: base | 8 | 0 | 0 | 8 | 32 | 0 | 0 | 32 | 8 |
| F01–08: pierwszy follow-up | 0 | 0 | 8 | 8 | 0 | 0 | 24 | 24 | 16 |
| G01–08: drugi follow-up | 0 | 8 | 0 | 8 | 0 | 40 | 0 | 40 | 15 |
| D01–08: delayed candidates | 8 | 0 | 0 | 8 | 32 | 0 | 0 | 32 | 8 |
| **Razem** | **16** | **8** | **8** | **32** | **64** | **40** | **24** | **128** | **47** |

Łącznie istnieje **36 rzeczywistych aktywności: 32 zamknięte i 4 otwarte**. Suma 47 jest inwentarzem maksymalnych wag banku, nie planem jednej formy ani wynikiem ucznia. G ma k=2 i wagi kolejno 1,2,3,1,2,3,1,2. F ma m=3 i w=2; dzięki temu kontrola obejmuje rzeczywiste ułamki 2/3 i 4/3. Żadnego rationale nie pozostawiono do przyszłego dopisania.

Rodziny: 8 grupowań B/F/G/D i 4 grupowania otwartych, łącznie 12 nazw roboczych. **Potwierdzonych odrębnym review niezależnych rodzin: 0. Chronionych kandydatów dla czytelnika paczki: 0.** Nie jest to luka ukryta przez liczbę 32. D są kompletnymi zadaniami do późniejszej kontroli, ale po ujawnieniu i z bliskością mogą wspierać znaną powtórkę; nie deklarują transferu.

### 2.3. Relacje

W Content zapisano 538 unikalnych ID konkretnych instancji, każdą z r1, końcami, znaczeniem, kierunkiem/warunkiem, funkcją i proweniencją przez jawnie dziedziczone metadane oraz lokalny argument. Wszystkie oczekują odrębnego review. Wieloelementowe wiersze rejestru wymieniają osobne ID i końce każdej relacji, nie są nieokreślonym RELATED_TO.

| Relacja | Liczba | Relacja | Liczba |
|---|---:|---|---:|
| R01 IN_EU | 1 | R02 OPERATIONALIZES | 3 |
| R03 DENOTES | 12 | R04 DEFINES | 6 |
| R05 SUPPORTS | 13 | R06 MEASURES | 41 |
| R07 MENTIONS | 2 | R08 HAS_RATIONALE | 128 |
| R09 RESOLVED_BY | 172 | R10 EXPLAINS | 8 |
| R11 DISTINGUISHES | 3 | R12 ILLUSTRATES | 7 |
| R13 COUNTEREXEMPLIFIES | 6 | R14 REQUIRES_FOR | 1 |
| R15 BACKED_BY | 12 | R18 CORRECTS | 8 |
| R19 CHECKS_AFTER | 16 | R20 IN_FAMILY | 36 |
| R21 VARIANT_OF | 63 | Pozostałe jako faktyczne instancje | 0 |

R06=32 główne itemów +4 wtórne warunku wartości +4 otwartych +1 wtórna O02. Są to mapowania okazji obserwacji, nie 41 wykonanych dowodów. R21=48 par wewnątrz ośmiu czwórek +4 porównania C-P/B03-P +11 porównań otwarte–zamknięte. R14 jest propozycją warunkową bez wymuszania. R16/R17 nie uruchomiono, R22–24 nie były potrzebne, R25 wymaga faktycznego wykonania. R26 ma osiem gotowych NAVPLAN, ale nie fikcyjne zdarzenia. Sam licznik relacji nie jest miarą jakości ani przydatności aplikacji.

## 3. Macierz pokrycia — sześć znaczeń i trzy kryteria

Legenda: „opracowane” oznacza stan autorski do review. Wszystkie poniższe pomiary zamknięte mają L1 zgodne z EO3.8.1; każdy widoczny ID zadania ma komplet wszystkich opcji/wierszy i rationale w Content. W A nie wywodzi się pomiaru pozostałych pojęć z ich obecności w dystraktorze. W P/K analizuje się konkretne decyzje w ramach wskazanego ZAK; suma punktów nie zamyka automatycznie zakresu.

| Kryterium / aspekt | EO, poziom i dokładne źródło | SUPPORTS: objaśnienie/przypadek | MEASURES: base i zakres decyzji | Korekta | Follow-up 1 / 2 | Pełny delayed | Rzeczywisty status / luka |
|---|---|---|---|---|---|---|---|
| KRY-T21-01 / ZAK01 adequate | EO3.8.1 L1; SEN §3.8 s.29; SPL s.30; GEN adequacy s.8 / GPL s.8 | N01, EX01/CE01; CMP03/WS01 | B01: a–d rozpoznają nazwę właściwego znaczenia; O01 elementy nazwa+sens adequacy | REM01 | F01 w.1–3 / G01 a–e | D01 a–d | Treść, ocena i warianty opracowane; review oraz niezależność rodzin otwarte |
| KRY-T21-01 / ZAK02 necessary | EO3.8.1 L1; SEN s.29; SPL s.30; GEN necessity s.20 / GPL konieczność s.17 | N02, EX02/CE02 | B02 a–d; O01 nazwa+sens necessity | REM02 | F02 w.1–3 / G02 a–e | D02 a–d | Jak wyżej; rozdzielono termin/przydatność/konieczność bez wymyślonego progu |
| KRY-T21-01 / ZAK03 unambiguous | EO3.8.1 L1; SEN s.29; SPL s.30; GEN unambiguity s.32 / GPL s.15 | N03, EX03/CE03, kontrast N05 | B03 a–d; O01 nazwa+sens unambiguity | REM03 | F03 w.1–3 / G03 a–e | D03 a–d | Jak wyżej; nie wymagano zawodowej analizy wieloznacznego dokumentu |
| KRY-T21-01 / ZAK04 complete | EO3.8.1 L1; SEN s.30; SPL s.30; GEN completeness s.11 sens 1 / GPL s.16 | N04, EX04/CE04, CMP02/WS02 | B04 a–d; O01 nazwa+sens completeness pojedynczej | REM04 | F04 w.1–3 / G04 a–e | D04 a–d | Bez luki definicyjnej; szczegółowa granica rozproszonej treści pozostaje interpretacją do review, poza rozstrzygającymi punktami |
| KRY-T21-01 / ZAK05 understandable | EO3.8.1 L1; SEN s.30; SPL s.30; GEN understandability s.32 / GPL s.36 | N05, EX05/CE05, kontrast N03 | B05 a–d; O01 nazwa+sens understandability | REM05 | F05 w.1–3 / G05 a–e | D05 a–d | Opracowane; znajomość autora nie zastępuje zamierzonych odbiorców |
| KRY-T21-01 / ZAK06 verifiable | EO3.8.1 L1; SEN s.30; SPL s.30; GEN verifiability s.34 / GPL s.32 | N06, EX06/CE06, CMP03 | B06 a–d; O01 nazwa+sens verifiability | REM06 | F06 w.1–3 / G06 a–e | D06 a–d | Opracowane; liczba nie jest warunkiem koniecznym, możliwość nie jest wykonaniem |
| KRY-T21-02 / ZAK07 szczególna para | EO3.8.1 L1; SEN §3.8 s.29; SPL s.30 | N07, CMP03, odwołanie do EX01/CE01 | B07 a–d; O02 elementy 1/2; warunek wartości kontrolowany wtórnie w ZAK08 | REM07 | F07 w.1–3 / G07 a–e | D07 a–d | Opracowano parę i granicę kompensowania; wartość nie jest domyślnie zaliczana z samej pary |
| KRY-T21-03 / ZAK08 lista i wartość; wtórnie KRY02 tylko warunek wartości | EO3.8.1 L1; SEN §3.8 s.29; SPL s.30; dodatkowa nota kontekstu GEN quality criteria s.23 / GPL s.17 | N08, EX08/BOUND08 | B08 a–d; O02 elementy 3/4; osobne R06-S do członu KRY02 | REM08 | F08 w.1–3 / G08 a–e | D08 a–d | Opracowany charakter zalecany, stopień/wartość i granice; bez procentowego progu i bez pełnego EO3.8.2 |

Każdy z sześciu sensów ma **cztery zamknięte itemy** i własny element retrieval z nazwą oraz znaczeniem. KRY-T21-01 nie jest zamykane jednym B. KRY02 obejmuje parę z ZAK07 oraz źródłowy warunek wartości z ZAK08; obserwacje pozostają odrębne, z ograniczeniem wtórnego mapowania tych samych decyzji. KRY03 ma własną ścieżkę. O03/O04 oceniają jedynie AUX03/AUX04 na lokalnym L2; nie podnoszą oficjalnego EO do L2/L3.

### Oddzielne SUPPORTS i MENTIONS

| Materiał | SUPPORTS — co rzeczywiście uczy | MENTIONS / kontekst — czego nie mierzy |
|---|---|---|
| CMP01 | Różnica quality of a requirement / quality requirement; częściowe wsparcie EO1.1.2 | Typy wymagań nie mają tu pełnego MEASURES KRY-P01; nie ma pełnego trójpodziału wraz z constraint |
| CMP02 i WS02 | ZAK04 oraz ograniczony sens kompletności zbioru z EO3.8.2 | Pozostałe kryteria artefaktu nie są opracowane ani mierzone jako T22 |
| CMP03/WS01 | REG01/06 i granica REG07 | Test lub zgodność z potrzebą w przykładzie nie mierzy EO4.4.1–3 |
| INTRO | Orientacja w celu T21 | Foundation Level to kontekst, bez dowodu całego FL |
| Dystraktory A/P oraz pozostałe nazwy cech | Właściwy kontrast przez lokalne rationale | Sama nazwa innego kryterium nie daje osobnego pomiaru tego znaczenia |
| Słowo „funkcjonalne” w WS01 | Tło przypadku; rozdzielenie osi w CMP01 | WS01 nie jest oceną EO1.1.2 |

## 4. Źródła, wersje, faktyczne odczyty i konflikty

Szczegółowy rejestr z linkami, autorami, wersjami, lokalizacjami i prawami znajduje się w Content §2/10. T21 wnosi nowy odczyt §3.8 i własnych haseł; nie dziedziczy pozornej weryfikacji z cytowania C. Katalog potwierdził profil Syllabus 3.3.0, Glossary 2.2.0 i Regulations 5.6.2 w dniu kontroli. Dla źródeł znaczeń odczytano pełne potrzebne hasła, a nie tylko wyniki wyszukiwania.

| ID kontroli | Ustalenie | Rozstrzygnięcie i ograniczenie |
|---|---|---|
| SRCQA-T21-01 | Syllabus PL ma 52 strony, EN 49 | Osobne strony: EO PL20/EN19; treść PL30/EN29–30. Nie przenosić EN numeracji do PL |
| SRCQA-T21-02 | Glossary ma rzeczownik necessity; oficjalny PL rzeczownik to „konieczność”, przymiotnik sylabusa „niezbędne” | Zapisano oficjalne źródła obu form i kontrolowany alias „niezbędność”; nie uznano go za inną cechę |
| SRCQA-T21-03 | PL objaśnia complete jako „niezależne”, EN jako self-contained; Glossary rozdziela dwa sensy | Użyto samowystarczalności pojedynczego opisu. Nie wywiedziono zakazu relacji ani całej specyfikacji w zdaniu. Szczegół rozproszenia treści do review; klucze go nie wymagają |
| SRCQA-T21-04 | Glossary zawiera adequacy, necessity, unambiguity, completeness, understandability i verifiability jako hasła, nie założone adequate/verifiable jako osobne wpisy | Zapisano faktycznie istniejące rzeczownikowe hasła oraz odpowiednie przymiotniki z sylabusa |
| SRCQA-T21-05 | Wybrane hasła są pogrubione w części definicyjnej; legenda EN s.8 wskazuje ich zakres Foundation Level | Potwierdzono lokalne dziesięć haseł przez fonty i legendę. Nie zadeklarowano całego inwentarza foundational |
| SRCQA-T21-06 | Wcześniejszy DR D2.6 używał „niewyczerpujące”, podczas gdy M02 ostrzega przed przypisaniem tej deklaracji syllabus | T21 powołuje zalecany charakter i zależność od wartości bez deklaracji pełności katalogu. Kontekstowy charakter zestawów ma osobną podstawę: Glossary quality criteria, uwagi 1/2 |
| SRCQA-T21-07 | Czytnik WWW nie otworzył PL, ale publiczny plik pobrano i odczytano | Luka dostępu zamknięta w używanym zakresie, bez fikcyjnego odczytu przez nieskuteczne narzędzie |
| SRCQA-T21-08 | Załączone C są v0.1, M02 wymaga v0.2 | Odczytano dokładne pliki v0.2, potwierdzono tożsamość i zgodność odtworzonego tekstu z manifestem M01. Nie aktualizowano wspólnych plików ani listy Sources |

Nie stwierdzono w użytych fragmentach konfliktu wymagającego zmiany przyjętego B. Prawa przyszłej publikacji, niezależne review i zgodność rezerwacji są odrębnymi lukami; nie mają zastępstwa w płynności objaśnień.

## 5. Ślad do FR i kryteriów akceptacji

Punktem odniesienia są karty B02 v0.2 / AC-001–038 i odpowiednie **Acceptance** w Blueprint F09 / FR-001–038. Tabela wskazuje dostarczony wsad do późniejszej weryfikacji Given/When/Then. Nie zawiera wyniku testu funkcji aplikacji. Zakresy Level 1/2 produktu nie są poziomami poznawczymi L1/L2.

| FR / AC B02 | Dowód dostarczony w paczce | Granica zgodności i późniejsza kontrola |
|---|---|---|
| FR-001 / AC-001 | Content §1/3.1/9.3: jawny T21, profil i cel | Brak daty egzaminu nie blokuje; nie przyznano pełnego FL ani wydłużonego czasu |
| FR-002 / AC-002 | Wejście od N albo B/O, bez obowiązku pretestu | Nie wywodzić wiedzy z deklarowanej praktyki; nie utworzono odrębnego zestawu diagnostycznego |
| FR-003 / AC-003 | REM/F/G/D i powód właściwy dla ZAK; MSG-EXIT | Rekomendacja przyszłego produktu wymaga rzeczywistej przesłanki, nie samego otwarcia tematu |
| FR-004 / AC-004 | Macierz §3, osiem zakresów i jawne EO/poziomy | Wynik jednego znaczenia nie zamyka KRY01 ani EO |
| FR-005 / AC-005 | Osiem not z rdzeniem, warunkami, przykładami i rozwinięciem | Nie trzeba odhaczyć całości, by przejść do zadania; lektura nie daje R25 |
| FR-006 / AC-006 | 32 L1 oraz O01/O02 L1 i pomocnicze O03/O04 L2, cztery rubryki | Otwarte wykonania wymagają wskazania oceniającego; samoocena zachowuje swój status |
| FR-007 / AC-007 | 16 pełnych A, cztery opcje, klucze i 64 wektory | Waga 1 w tym banku; ogólna reguła nie ogranicza A do 1 punktu w całym projekcie |
| FR-008 / AC-008 | 8 P, k=2, pięć opcji, 56 wektorów | Mniej niż dwa nie zeruje trafnej części; nadmiar daje 0; niezaznaczone dystraktory nie przynoszą punktów |
| FR-009 / AC-009 | 8 K z m=3, 24 rationale, 56 wektorów | Blank i obie wartości odrębne od Fałsz; jedno K nie staje się trzema niezależnymi próbami |
| FR-010 / AC-010 | ID/r1 i kontrakt zachowania pierwotnej odpowiedzi, Content §7/8.3/9 | Brak rzeczywistych prób; integrator nie nadpisuje B po poprawnym F |
| FR-011 / AC-011 | 128 lokalnych rationale i reguły feedbacku każdego itemu | A bez błędu nie wymusza czytania wszystkich; Sprawdzenie czeka na finalizację całości |
| FR-012 / AC-012 | 128 R08, 172 R09, 12 R15, trzy CMP | Prawidłowy link wynika z reguły i lokalnej przesłanki, nie z similarity |
| FR-013 / AC-013 | Osiem NAVPLAN i kotwice B/opcja, reguła dla wejścia z F/G/D | R26 powstanie dopiero z rzeczywistego Navigation Context; zachowanie fokusu do późniejszego testu |
| FR-014 / AC-014 | Trzy osie comparison i jeden warunkowy PRE/R14 | Brak review R14 wyklucza wymuszenie całej lekcji T01/T10/T22 |
| FR-015 / AC-015 | Jawne niewłączanie diagnozy osoby, neutralny REM | Brak sondy nie ukryto; nie wolno nazwać wyboru potwierdzoną misconception |
| FR-016 / AC-016 | Osiem gałęzi REM→F→inna pomoc→G→wyjście | F i G to dwie kontrole; B nie jest pierwszą, D nie służy jako automatyczna trzecia |
| FR-017 / AC-017 | Zmiana czynności każdego itemu; 48 wewnętrznych R21 i inne bliskości | Wspólne rodziny i jawny brak niezależności; zmiana formatu sama nie dowodzi transferu |
| FR-018 / AC-018 | Content §9.1/9.2, oddzielone pomoc/znajomość/punkty | Neutralny słownik bez RE jest warunkiem profilu; sam czytnik nie jest hintem |
| FR-019 / AC-019 | Role D i pełna ekspozycja recenzencka; brak obietnicy rezerwy | Potrzebny osobny eksport i eligibility; zero chronionej puli dla czytelnika |
| FR-020 / AC-020 | Osiem pełnych D, dwa zegary per ZAK i przypadek 7 dni/1 minuta | Brak realnych odstępów i odpowiedzi; nie oznaczono retencji |
| FR-021 / AC-021 | Wyjście po gałęzi, możliwość zmiany celu i odłożenia | Nie wymuszać „wyzerowania” wszystkich błędów przed inną nauką |
| FR-022 / AC-022 | Rozdzielone dane korpusu i przyszłe obserwacje; brak R25 | T21 dostarcza kryteria, nie nadaje osobie stanu wiedzy lub procentu mastery |
| FR-023 / AC-023 | Mianowniki 6 znaczeń/3 kryteria/8 zakresów; luki poza tematem | Brak materiału lub dowodu nie jest wynikiem 0 osoby |
| FR-024 / AC-024 | Zakres EO3.8.1 i ograniczenia pełnego FL | Nie wytworzono profilu gotowości do całego egzaminu ani p(zdania) |
| FR-025 / AC-025 | Jawna propozycja U-TOPIC i obliczenie 8×1 dla D | Forma NIE jest zatwierdzona; kolejność, podpowiedzi między itemami i eligibility do review |
| FR-026 / AC-026 | [Q]/[M]/[N]/[R], neutralna instrukcja, wagi, flaga, brak feedbacku w trakcie | Semantyka przygotowana; nie sprawdzono technicznego ukrywania tagów, podglądów i historii |
| FR-027 / AC-027 | Konwersja całej próby i zasady przerwy w Content §9.2 | Nie ma wykonanej konwersji; nie odnawiać niezależnego Sprawdzenia po ujawnieniu pomocy |
| FR-028 / AC-028 | Pełne rationale, wektory punktowe i lokalny plan korekty | Wynik i review jako odrębne etapy; brak empirycznej diagnozy przyczyn strat |
| FR-029 / AC-029 | Wspólne zasady A/P/K i przykłady wyników per item | Wkład do nauki formatu; nie utworzono osobnego neutralnego tutorialu ani jego dowodu |
| FR-030 / AC-030 | Żaden item nie wymaga deklaracji pewności i nie zmienia nią punktów | Funkcja fakultatywna poza T21; brak confidence nie jest porażką |
| FR-031 / AC-031 | 11 wierszy PL/EN i rozdzielone sensy quality/complete | Lokalna terminologia; nie dostarczono globalnej wyszukiwarki ani testu zabezpieczenia indeksu |
| FR-032 / AC-032 | CP1–CP3 dla pracy autora; osobno NAVPLAN i MSG-RETURN dla ucznia | Checkpoint autora nie jest historią ucznia; implementacja musi zachować jej rzeczywisty stan |
| FR-033 / AC-033 | Rejestr luk, MSG-GAP i brak generacji klucza na żywo | LUKA-02/08/10/11 blokują właściwą obietnicę, nie automatycznie wszystkie materiały |
| FR-034 / AC-034 | QG i C-AC w §6, jawne pending review | Bramka publikacyjna NIE jest spełniona przez kontrolę autora |
| FR-035 / AC-035 | §9: rzeczywiste korekty i lista wpływu | Brak odpowiedzi uczniów do przeliczenia; przyszłe zmiany klucza nie usuwają historii |
| FR-036 / AC-036 | W pełni tekstowe reprezentacje i etykiety K, wyniki bez koloru | Dostępność treści autorsko sprawdzona; brak wykonanego audytu gotowej aplikacji |
| FR-037 / AC-037 | Kontrola przymiotników/rzeczowników PL/EN i źródeł | Własne objaśnienia nie udają oficjalnego tłumaczenia definicji |
| FR-038 / AC-038 | Manifest realnych materiałów, pełność T21, jawne braki rezerwy/FL | Ukończenie T21 nie jest przygotowaniem do całego egzaminu ani zamknięciem większego pilota |

## 6. Autokontrola QG i C-AC-01–14

### 6.1. Bramka QG dla 32 nowych itemów

Każdy item jest odrębnie napisany i sprawdzony względem wspólnego minimum B01-07. Wszystkie 32 mają ten sam status **do odrębnego review**, niezależnie od pozytywnego wyniku kontroli formalnej. Brak QG-09 uniemożliwia oznaczenie dowolnego itemu jako dopuszczonego do punktowanej praktyki.

| QG | Wykonana kontrola i wynik autorski | Wymagane ograniczenie |
|---|---|---|
| QG-01 Warunki | Wszystkie stemy zawierają nazwany przedmiot, instrukcję i potrzebne znaczenia; nie opierają klucza na niepodanych faktach o potrzebie | Odrębny reviewer musi rozwiązać bez klucza i wskazać własne interpretacje |
| QG-02 Klucz/format | 16 A z jednym kluczem/4 opcjami, 8 P z jawnym k=2/5 opcjami, 8 K z trzema kluczami; pełne parametry | Brak niezależnego potwierdzenia kluczy |
| QG-03 Explanation | 128 unikalnych, niepustych rationale; każde ma lokalną przesłankę i wskazane reguły | Autorska kontrola sensu, bez statusu review zewnętrznego |
| QG-04 Zakres | Każdy item ma primary, ZAK i L1; wtórna wartość jest opisana; brak punktów za AUX L2 w banku zamkniętym | Reviewer ocenia adekwatność każdej granicy sensu i wyłączenia sąsiednich EO |
| QG-05 Provenance | CL/REG/źródła w Content §2 i konkretne R15; faktyczny odczyt użytych lokalizacji | LLM nie jest źródłem poprawności; szczegółowa interpretacja odwołań complete pozostaje poza kluczami |
| QG-06 Język/dostęp | Instrukcje pozytywne; K jawne Prawda/Fałsz; tekst nie wymaga koloru/grafiki; rozdzielono [Q]/[R]/[M] | Brak technicznego testu eksportu, metadanych i czytnika |
| QG-07 Rodzina | 12 nazw grupowań i 63 pary; wspólna rodzina czterech zadań jasno oznaczona | Odrębne review granic rodzin niewykonane; nie dopuszczono mocnej nowości |
| QG-08 Prawa | Odnotowano źródła, własne scenariusze, brak kopiowania pytań, obecne wykorzystanie recenzenckie i warunki | Przyszły publiczny/komercyjny kanał oraz jego uprawnienia nierozstrzygnięte |
| QG-09 Review | **Niespełnione: nie przeprowadzono odrębnego, kompetentnego review T21** | Wszystkie punktowane zastosowania oczekują; nie przenosić akceptacji B/R06 |
| QG-10 Cel | Dla każdego ZAK istnieją REM, F, G, pełny D, ocena i wyjście | K6 formy tematycznej niezatwierdzone; nie obiecywać pełnej symulacji |

### 6.2. C-AC — dowody, bez uśredniania do procentu gotowości

| C-AC | Dowód w T21 i wynik | Status oraz materialna granica |
|---|---|---|
| 01 | Content §2/7/8.3: CL00–11, 128 rationale, 12 R15, oficjalne lokalizacje, jawny autorski krok zastosowania | Autorsko sprawdzone; odrębna kontrola każdego rozstrzygnięcia oczekuje |
| 02 | Trzy istniejące kryteria, 8 adresów zakresu, R02/R05/R06/R07 rozdzielone; pomocnicze AUX03/04 bez EO | Autorsko sprawdzone; nie przypisano całego sąsiedniego EO |
| 03 | 11 wierszy terminologii; necessity/konieczność/niezbędne i complete/self-contained; definicje PL jako własne objaśnienia | Autorsko sprawdzone; review PL/EN oczekuje |
| 04 | Osiem not, 7 objaśnień przykładu, 6 kontrprzykładów, 3 rzeczywiste comparisons, warunkowy PRE | Autorsko sprawdzone; brak wymuszenia R14; interpretacja rozproszonych odwołań jawna |
| 05 | 32 pełne nowe A/P/K i 128 rationale, w tym wszystkie poprawne niewybrane P i wszystkie wiersze K | Pełność własnego flow autorsko sprawdzona; **wkład częściowy** wobec historycznego przekroju trzech pakietów C-A/P/K, bez odbioru całego C |
| 06 | 176 jawnych oczekiwanych wyników i kontrola 1024 stanów; dokładne ułamki, blank/nadmiar/obie wartości | Autorsko sprawdzone arytmetycznie; nie test implementacji |
| 07 | 128 R08, 172 R09, 12 R15, R10/R11 i plansze powrotu; lokalny RAT każdego wyboru | Autorsko sprawdzone; rzeczywisty R26 dopiero po zdarzeniu, review relacji oczekuje |
| 08 | Osiem REM z F/G, inną pomocą i wyjściem po drugim niepowodzeniu | Autorsko kompletne; bez diagnozy i bez udowodnionej skuteczności naprawy |
| 09 | Wszystkie 8 B/F/G/D porównano parami, w tym 48 par; C-P/B03 i otwarte — 15 dodatkowych porównań | Autorsko opisane; brak zatwierdzonej niezależności rodzin i chronionej rezerwy; jawna rola znanej powtórki |
| 10 | Cztery pełne rubryki /24 elementy, równoważne odpowiedzi i granice; przykłady §8 | Autorsko sprawdzone; oceniający rzeczywistego wykonania nie został jeszcze wyznaczony; samoocena jawna |
| 11 | Content §9.1: kontakty N/EX/CE/CMP/WS/REM/RAT i dwa zegary per właściwy zakres | Autorsko przygotowane; nie wytworzono rzeczywistej historii czasu/ekspozycji |
| 12 | Obecne użycie/prawa opisane; brak kopiowania pytań; status review prawdziwy | **Niespełnione w części odrębnego review.** Przyszła publikacja nierozstrzygnięta; nie ma PASS ani zamknięcia G2 |
| 13 | Tekst, instrukcje, oznaczenia K, neutralne komunikaty i warunki widoczności | Treść autorsko sprawdzona; G3 i techniczny test dostępności/wycieku nie zostały wykonane |
| 14 | Policzone materiały, luki, 0 chronionej rezerwy dla czytelnika, manifest, delty i historia CP1–CP3 | Autorsko sprawdzone; nie deklaruje się pełnego FL, empirii ani trzech niezależnych form |

## 7. Wektory punktacji każdego itemu

Każdy wiersz poniżej jest syntetyczną odpowiedzią kontrolną autora, **nie odpowiedzią ucznia**. Oczekiwany wynik określono według reguły źródłowej, a następnie porównano z funkcją obliczającą na dokładnych ułamkach. Blank zapisano jako `–`, a podwójną decyzję w K jako `B`. Wektor K zachowuje kolejność pełnych tez, nie jest luźnym ciągiem wartości.

Odrębnie skontrolowano wszystkie 16 podzbiorów czterech opcji każdego A, wszystkie 32 podzbiory pięciu opcji każdego P i 64 stany T/F/blank/obie wartości każdego trzywierszowego K. Łącznie **16×16 + 8×32 + 8×64 =1024 stany**. W każdym sprawdzono zakres 0…w; nadmiar A/P; w P brak punktu za niewybrany dystraktor i zmianę o w/2 po dodaniu trafnej opcji przy n≤2; w K brak punktu za blank/podwójną wartość i lokalny wpływ pojedynczego wiersza. Wynik: 1024/1024 zgodne z kontrolowanymi własnościami. To nie walidacja treści, niezależne review ani test aplikacji.

### T21-B01/r1 — A, w=1; klucz b

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | b | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | b,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B02/r1 — A, w=1; klucz d

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | d | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | d,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B03/r1 — A, w=1; klucz a

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | a | jedyny poprawny wybór → 1 | 1 |
| błędna | b | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | a,b | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B04/r1 — A, w=1; klucz c

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | c | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | c,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B05/r1 — A, w=1; klucz b

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | b | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | b,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B06/r1 — A, w=1; klucz d

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | d | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | d,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B07/r1 — A, w=1; klucz c

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | c | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | c,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-B08/r1 — A, w=1; klucz a

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | a | jedyny poprawny wybór → 1 | 1 |
| błędna | b | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | a,b | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-F01/r1 — K, w=2, m=3; klucz T,F,T

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | T,F,T | c=3: 2×3/3 | 2 |
| wszystkie błędne | F,T,F | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,F,T | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,F,T | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | T,T,– | c=1: 2×1/3 | 2/3 |

### T21-F02/r1 — K, w=2, m=3; klucz F,T,F

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | F,T,F | c=3: 2×3/3 | 2 |
| wszystkie błędne | T,F,T | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,T,F | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,T,F | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | F,F,– | c=1: 2×1/3 | 2/3 |

### T21-F03/r1 — K, w=2, m=3; klucz F,T,T

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | F,T,T | c=3: 2×3/3 | 2 |
| wszystkie błędne | T,F,F | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,T,T | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,T,T | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | F,F,– | c=1: 2×1/3 | 2/3 |

### T21-F04/r1 — K, w=2, m=3; klucz T,F,F

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | T,F,F | c=3: 2×3/3 | 2 |
| wszystkie błędne | F,T,T | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,F,F | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,F,F | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | T,T,– | c=1: 2×1/3 | 2/3 |

### T21-F05/r1 — K, w=2, m=3; klucz F,T,T

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | F,T,T | c=3: 2×3/3 | 2 |
| wszystkie błędne | T,F,F | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,T,T | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,T,T | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | F,F,– | c=1: 2×1/3 | 2/3 |

### T21-F06/r1 — K, w=2, m=3; klucz T,F,T

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | T,F,T | c=3: 2×3/3 | 2 |
| wszystkie błędne | F,T,F | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,F,T | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,F,T | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | T,T,– | c=1: 2×1/3 | 2/3 |

### T21-F07/r1 — K, w=2, m=3; klucz F,T,F

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | F,T,F | c=3: 2×3/3 | 2 |
| wszystkie błędne | T,F,T | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,T,F | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,T,F | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | F,F,– | c=1: 2×1/3 | 2/3 |

### T21-F08/r1 — K, w=2, m=3; klucz T,T,F

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | T,T,F | c=3: 2×3/3 | 2 |
| wszystkie błędne | F,F,T | c=0: 2×0/3 | 0 |
| wszystkie blank | –,–,– | c=0: 2×0/3 | 0 |
| wszystkie podwójne | B,B,B | c=0: 2×0/3 | 0 |
| jeden blank | –,T,F | c=2: 2×2/3 | 4/3 |
| jedna podwójna | B,T,F | c=2: 2×2/3 | 4/3 |
| jedna trafna, jedna błędna, blank | T,F,– | c=1: 2×1/3 | 2/3 |

### T21-G01/r1 — P, w=1, k=2; klucz a,b

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | a,b | n=2, c=2: 1×2/2 | 1 |
| niedobór: jedna trafna | a | n=1, c=1: 1×1/2 | 1/2 |
| mieszana: trafna i błędna | a,c | n=2, c=1: 1×1/2 | 1/2 |
| dwie błędne | c,d | n=2, c=0: 1×0/2 | 0 |
| pusta | brak | n=0, c=0: 1×0/2 | 0 |
| nadmiar z dwoma trafieniami | a,b,c | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | c,d,e | n=3>2 → 0 za całe P | 0 |

### T21-G02/r1 — P, w=2, k=2; klucz d,e

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | d,e | n=2, c=2: 2×2/2 | 2 |
| niedobór: jedna trafna | d | n=1, c=1: 2×1/2 | 1 |
| mieszana: trafna i błędna | d,a | n=2, c=1: 2×1/2 | 1 |
| dwie błędne | a,b | n=2, c=0: 2×0/2 | 0 |
| pusta | brak | n=0, c=0: 2×0/2 | 0 |
| nadmiar z dwoma trafieniami | d,e,a | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | a,b,c | n=3>2 → 0 za całe P | 0 |

### T21-G03/r1 — P, w=3, k=2; klucz b,c

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | b,c | n=2, c=2: 3×2/2 | 3 |
| niedobór: jedna trafna | b | n=1, c=1: 3×1/2 | 3/2 |
| mieszana: trafna i błędna | b,a | n=2, c=1: 3×1/2 | 3/2 |
| dwie błędne | a,d | n=2, c=0: 3×0/2 | 0 |
| pusta | brak | n=0, c=0: 3×0/2 | 0 |
| nadmiar z dwoma trafieniami | b,c,a | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | a,d,e | n=3>2 → 0 za całe P | 0 |

### T21-G04/r1 — P, w=1, k=2; klucz a,c

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | a,c | n=2, c=2: 1×2/2 | 1 |
| niedobór: jedna trafna | a | n=1, c=1: 1×1/2 | 1/2 |
| mieszana: trafna i błędna | a,b | n=2, c=1: 1×1/2 | 1/2 |
| dwie błędne | b,d | n=2, c=0: 1×0/2 | 0 |
| pusta | brak | n=0, c=0: 1×0/2 | 0 |
| nadmiar z dwoma trafieniami | a,c,b | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | b,d,e | n=3>2 → 0 za całe P | 0 |

### T21-G05/r1 — P, w=2, k=2; klucz b,d

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | b,d | n=2, c=2: 2×2/2 | 2 |
| niedobór: jedna trafna | b | n=1, c=1: 2×1/2 | 1 |
| mieszana: trafna i błędna | b,a | n=2, c=1: 2×1/2 | 1 |
| dwie błędne | a,c | n=2, c=0: 2×0/2 | 0 |
| pusta | brak | n=0, c=0: 2×0/2 | 0 |
| nadmiar z dwoma trafieniami | b,d,a | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | a,c,e | n=3>2 → 0 za całe P | 0 |

### T21-G06/r1 — P, w=3, k=2; klucz a,e

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | a,e | n=2, c=2: 3×2/2 | 3 |
| niedobór: jedna trafna | a | n=1, c=1: 3×1/2 | 3/2 |
| mieszana: trafna i błędna | a,b | n=2, c=1: 3×1/2 | 3/2 |
| dwie błędne | b,c | n=2, c=0: 3×0/2 | 0 |
| pusta | brak | n=0, c=0: 3×0/2 | 0 |
| nadmiar z dwoma trafieniami | a,e,b | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | b,c,d | n=3>2 → 0 za całe P | 0 |

### T21-G07/r1 — P, w=1, k=2; klucz c,d

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | c,d | n=2, c=2: 1×2/2 | 1 |
| niedobór: jedna trafna | c | n=1, c=1: 1×1/2 | 1/2 |
| mieszana: trafna i błędna | c,a | n=2, c=1: 1×1/2 | 1/2 |
| dwie błędne | a,b | n=2, c=0: 1×0/2 | 0 |
| pusta | brak | n=0, c=0: 1×0/2 | 0 |
| nadmiar z dwoma trafieniami | c,d,a | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | a,b,e | n=3>2 → 0 za całe P | 0 |

### T21-G08/r1 — P, w=2, k=2; klucz b,e

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| pełna | b,e | n=2, c=2: 2×2/2 | 2 |
| niedobór: jedna trafna | b | n=1, c=1: 2×1/2 | 1 |
| mieszana: trafna i błędna | b,a | n=2, c=1: 2×1/2 | 1 |
| dwie błędne | a,c | n=2, c=0: 2×0/2 | 0 |
| pusta | brak | n=0, c=0: 2×0/2 | 0 |
| nadmiar z dwoma trafieniami | b,e,a | n=3>2 → 0 za całe P | 0 |
| nadmiar trzech błędnych | a,c,d | n=3>2 → 0 za całe P | 0 |

### T21-D01/r1 — A, w=1; klucz c

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | c | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | c,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D02/r1 — A, w=1; klucz a

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | a | jedyny poprawny wybór → 1 | 1 |
| błędna | b | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | a,b | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D03/r1 — A, w=1; klucz d

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | d | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | d,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D04/r1 — A, w=1; klucz b

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | b | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | b,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D05/r1 — A, w=1; klucz a

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | a | jedyny poprawny wybór → 1 | 1 |
| błędna | b | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | a,b | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D06/r1 — A, w=1; klucz c

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | c | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | c,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D07/r1 — A, w=1; klucz d

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | d | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | d,a | brak pojedynczego wyboru klucza → 0 | 0 |

### T21-D08/r1 — A, w=1; klucz b

| Przypadek | Odpowiedź | Obliczenie według reguły | Oczekiwane punkty |
|---|---|---|---:|
| poprawna | b | jedyny poprawny wybór → 1 | 1 |
| błędna | a | brak pojedynczego wyboru klucza → 0 | 0 |
| pusta | brak | brak pojedynczego wyboru klucza → 0 | 0 |
| nadmiar | b,a | brak pojedynczego wyboru klucza → 0 | 0 |

### Podsumowanie i sumy

Sprawdzono **64 wektory A +56 wektorów P +56 wektorów K =176**, bez rozbieżności oczekiwanego i obliczonego wyniku. Na przykład F01: T,F,– daje 4/3 z 2; G01: samo a daje 1/2 z 1; G03: b,a daje 3/2 z 3; G03: a,b,c daje 0 mimo dwóch trafień. To różne ograniczenia punktowe, nie jedno wspólne „procent poprawnych pytań”.

**Kontrola sumy wyłącznie arytmetyczna:** B01 poprawne =1/1, G01 samo a =1/2 punktu z 1, F01 T,F,– =4/3 z 2. Razem 17/6 punktu z 4, czyli 17/24 możliwych punktów; nie 1/3 pytań w pełni poprawnych. Zestaw nie jest zatwierdzoną formą i ten syntetyczny wynik nie oznacza zdania egzaminu. Zachowanie dokładnych ułamków nie zależy od wyświetlanego zaokrąglenia.

## 8. Przypadki graniczne oceny otwartej

Poniższe odpowiedzi są syntetycznymi próbkami do oceny rubryk autora, nie wynikami osób. Każda rubryka ma kontrolę pełną, częściową, pustą, krytycznie błędną i równoważną. „Elementy spełnione” to opis rubryki, **nie punkty CPRE** i nie procent opanowania.

| Aktywność / przypadek | Przykładowa odpowiedź | Oczekiwane rozstrzygnięcie rubryki |
|---|---|---|
| O01 — pełna | „Adekwatne: rzeczywiste uzgodnione potrzeby; niezbędne: potrzebne w specyfikacji; jednoznaczne: brak różnych interpretacji; kompletne: samowystarczalny opis; zrozumiałe: pojmowalne dla odbiorców; weryfikowalne: da się sprawdzić spełnienie w systemie” | 6 rozpoznawalnych nazw i 6 poprawnych znaczeń; 12 elementów opisowych spełnionych, bez wymogu kolejności/EN |
| O01 — częściowa | „Adekwatność — rzeczywiste, uzgodnione potrzeby. Weryfikowalność — możliwość sprawdzenia spełnienia” | Poprawne nazwy i znaczenia ZAK01/06: 4 elementy. Pozostałe 8 elementów bez odpowiedzi; nie orzekać ich nieznajomości z samego pominięcia |
| O01 — pusta | Brak odpowiedzi | 0 obserwowanych elementów; brak wykonania, bez przypisania błędnej reguły |
| O01 — błąd krytyczny zakresu | Pięć poprawnych par; „kompletne — cały zbiór zawiera wszystkie znane istotne wymagania” | Nazwa complete rozpoznana, ale znaczenie przeniesiono do zbioru. Nie zaliczać znaczenia ZAK04; zachować 10 poprawnych elementów pozostałych par i rozpoznaną nazwę complete |
| O01 — równoważna/graniczna | „Necessary — stanowi potrzebny element specyfikacji”; pozostałe pięć par jak pełne | EN i własna parafraza dopuszczalne, wszystkie elementy spełnione; „niezbędność” też dopuszczalna. Samo „kompletne = niezależne” bez doprecyzowania samowystarczalności wymaga wyjaśnienia i nie daje automatycznie elementu znaczenia |
| O02 — pełna | „Adekwatność i zrozumiałość. Stopień spełnienia odpowiada wartości; nie zawsze wszystko całkowicie. Nie ma stałego procentu ani prawa do dowolnej wady” | Wszystkie 4 elementy spełnione; para i warunek wartości oceniane oddzielnie |
| O02 — częściowa | „Adekwatność i zrozumiałość” | Spełnione elementy 1 i 2, brak odpowiedzi na elementy 3 i 4; nie przyznawać warunku wartości z samej pary |
| O02 — pusta | Brak odpowiedzi | Brak danych dla wszystkich 4 elementów |
| O02 — błąd krytyczny | Właściwa para i zależność wartości, ale „zawsze wystarcza dowolne pięć z sześciu” | Elementy 1, 2 i 3 mogą być spełnione; element 4 błędny. Wymagany REM08, nie kasować poprawnej pary |
| O02 — równoważna | „Najważniejsze są zgodność z uzgodnioną potrzebą, czyli adequacy, i pojmowalność dla adresatów, czyli understandability. Wartość wpływa na stopień staranności; nie zakłada się zawsze całkowitego spełnienia wszystkich kryteriów, a źródło nie ustala uniwersalnego progu” | Para nazwana po EN i poprawny sens, wszystkie 4 elementy spełnione. W krótszej wypowiedzi, w której warunek stopnia pozostaje niejasny, poprosić o doprecyzowanie elementu 3 zamiast dopowiedzieć go za ucznia |
| O03 — pełna | „Oba wnioski są błędne. Typ funkcjonalny mówi o oczekiwanym zachowaniu; jakość dotyczy sposobu uchwycenia i opisu oczekiwania. Kompletna jedna treść nie wyklucza brakującego innego wymagania w zbiorze” | Cztery elementy spełnione; tylko AUX03, bez pełnego EO1.1.2/EO3.8.2 |
| O03 — częściowa | „Oba wnioski są błędne” | Obie decyzje obserwowane; oba uzasadnienia niesprawdzone. Nie zatwierdzać ich na podstawie decyzji |
| O03 — pusta | Brak odpowiedzi | Cztery elementy bez danych |
| O03 — błędna | „Anna ma rację, bo jakość dotyczy tylko quality requirements. Bartek ma rację, bo kompletność pojedyncza i zbiorowa to to samo” | Obie decyzje i oba powody błędne; korekta CMP01/02, bez diagnozy trwałej misconception |
| O03 — równoważna | „Dobre opisanie funkcji i żądanie cechy systemu to różne osie. Samowystarczalność jednego opisu nie usuwa braków w zestawie; dlatego oba wnioski nie wynikają z przesłanek” | Cztery elementy spełnione mimo innej konstrukcji zdań |
| O04 — pełna | „Testowalność nie naprawia potrzeby. Podany odbiorca jest niezgodny z jawnym uzgodnieniem. Można sprawdzić zachowanie wysyłki do administracji, ale nie oznacza to, że wykonano test lub system działa zgodnie z zapisem” | Cztery elementy spełnione, tylko AUX04; brak wymagania pisania testu |
| O04 — częściowa | „Nie, bo wiadomość nie trafia do uzgodnionego odbiorcy” | Elementy 1 i 2 spełnione; elementy 3 i 4 bez odpowiedzi; nie dopowiadać sprawdzalności za autora odpowiedzi |
| O04 — pusta | Brak odpowiedzi | Brak obserwacji, bez utożsamiania blanku z błędnym przekonaniem |
| O04 — błąd główny | „Skoro można zrobić test wysyłki do administracji, wymaganie jest adekwatne” | Główne rozróżnienie błędne. Można odnotować wzmiankę o możliwości kontroli, ale elementy 1 i 2 nie są spełnione i nie wnioskować, że całość poprawna |
| O04 — równoważna/graniczna | „Sprawdzalne, ale nietrafne wobec uzgodnionej potrzeby; sprawdzalne nie znaczy już sprawdzone” | Przy jasnym odniesieniu do danych spełnia wszystkie 4 elementy. Samo „źle napisane” bez wskazania rozbieżnego odbiorcy nie wystarcza dla elementu 2 |

Po wykonaniu przez ucznia trzeba zapisać rzeczywistą odpowiedź i źródło oceny. Jeżeli uczeń sam porówna ją ze wzorcem, jest to samoocena, nawet po późniejszym zrecenzowaniu rubryki. LLM oceniający tekst nie staje się przez to odrębnym kompetentnym recenzentem treści.

## 9. Rzeczywiste korekty, luki i analiza wpływu

### 9.1. Zapis faktycznie wykrytych i poprawionych problemów

Nie wypełniano tabeli fikcyjnymi błędami, wynikami uczniów ani udawanym review. Rozróżniono wadę szkicu, korektę liczenia oraz rozwiązanie zależności wejściowej. Końcowe itemy wydaje się jako r1; roboczych szkiców nie przedstawia się jako poprzednich opublikowanych rewizji pytań.

| ID | Rzeczywisty stan przed | Wykonana korekta | Dotknięte ID i ponowna kontrola |
|---|---|---|---|
| FIX-T21-01 — zakres wiersza F01 | Roboczy F01, wiersz 3, pytał o brak danych jako dowód nieadekwatności. Taki punkt mógł przesunąć główny pomiar ku ogólnej ostrożności wnioskowania zamiast znajomości znaczenia | Wiersz zastąpiono tezą o odróżnieniu adekwatności od samej technicznej wykonalności. Zasada „brak danych nie dowodzi wady” pozostaje w objaśnieniu bez odrębnego punktu | F01/3, RAT-T21-F01-3, opis zmiany i źródłowa REG01; klucz nadal T,F,T, m=3,w=2. Sprawdzono lokalne rationale i wszystkie wektory F01 |
| FIX-T21-02 — zawyżenie inwentarza przykładów | W początkowym rdzeniu etykiety EX07/CE07 powtarzały te same przypadki EX01/CE01. CE08 stanowiło źródłowe obalenie ogólnej tezy, a nie nowy przypadek sytuacyjny | Usunięto pozorne nowe ID EX07/CE07, pozostawiając jawne przypomnienie. CE08 oznaczono BOUND08. Inwentarz liczy 7 objaśnień przykładów, 6 kontrprzykładów i osobno 1 obalenie źródłowe | N07/N08, CL07/08, §2 QA, R12/R13. Sprawdzono, że nie ma relacji ani zadań odwołujących się do usuniętych nowych ID |
| FIX-T21-03 — rewizja wejścia | Kopie C w bieżących Project Sources miały v0.1, podczas gdy M02 nakazuje użycie v0.2 | Odnaleziono dokładne C01–C04 v0.2 i odczytano właściwy zakres. Nie nadpisywano dawnych kopii ani nie cofano stanu G1 | Baseline C, comparison z C-P, prawa i standard. To rozwiązana zależność, nie stwierdzenie wady C v0.1 z czasu jego tworzenia |
| FIX-T21-04 — odtworzenie tożsamości tekstu C | Pełny odczyt tekstowy C nie zawierał jednego końcowego LF; długość tekstu była o 1 bajt mniejsza od metadanych. Hash takiego tekstu nie identyfikował bajtów wskazanych w M01 | Dla kontroli identyfikacji dodano wyłącznie końcowy LF; rozmiary i SHA-256 wszystkich czterech plików zrównały się z manifestem M01. Nie zmieniano źródłowych C | Manifest §12; nie przedstawiono hasha bez LF jako hasha pliku C. Sprawdzono cztery zgodności rozmiaru i cztery zgodności SHA |
| FIX-T21-05 — kompletność kontraktu użycia | Pierwszy zapis warstw [Q]/[R] określał widoczność pomocy, ale nie rozwijał w T21 skutku konwersji całego aktywnego Sprawdzenia | Dopisano jawnie w Content §9.2 zakończenie niezależnego kontraktu całej próby po potwierdzonej konwersji oraz zasady przerwy bez limitu | FR-027/AC-027, §5 QA. Kontrola dokumentacyjna, bez twierdzenia o wykonanym teście konwersji |

Po korektach ponowiono kontrolę liczników, ID, 128 rationale, parametrów i oceny wszystkich 32 itemów. Nie ujawniono autorsko nierozstrzygniętego drugiego klucza. To wynik kontroli autora, a nie dowód niezależnej poprawności. Nie istnieją odpowiedzi uczniów wymagające przeliczenia.

### 9.2. Rzeczywiste otwarte luki i granice dopuszczenia

| Luka | Stan i dotknięte obiekty | Użycie teraz / warunek zamknięcia |
|---|---|---|
| GAP-T21-01 — odrębne review | Nie wykonano; cała paczka, QG-09, C-AC-12 | Pełny materiał do przeglądu. Kompetentny recenzent odrębny od autora odtwarza klucze/źródła/rubryki i zapisuje decyzję użycia |
| GAP-T21-02 — rodziny i nowość | 12 nazw roboczych, 63 porównania; brak niezależnego review ich granic | Nie nadawać mocnej etykiety nowej rodziny. Zatwierdzić bliskość i role; przy potrzebie transferu opracować dodatkowe, uzasadnione rodziny |
| GAP-T21-03 — chroniony eksport | Oba pliki jawnie pokazują D i klucze, brak oddzielnego eksportu | Czytelnik nie ma nieznanej rezerwy tych itemów. Dla innych osób przygotować właściwy eksport, kontrolę dostępu/wycieków i eligibility; samo ukrycie sekcji nie naprawia historii |
| GAP-T21-04 — kanał publikacji/prawa | Obecnie planowanie i review; publiczny/komercyjny kanał nierozstrzygnięty | Ustalić konkretny kanał i warunki użytych opracowań; nie przenosić automatycznie uprawnienia do review na reklamę lub dystrybucję |
| GAP-T21-05 — complete i odwołania | Bezsporne znaczenie samowystarczalności wyjaśnione; szczegółowa granica rozproszonej normatywnej treści jest interpretacją | Nie blokuje kluczy opartych na definicji, ale wymaga domenowego review noty. Nie dopisywać do banku zadania rozstrzygającego trudny link bez dodatkowej podstawy |
| GAP-T21-06 — forma U-TOPIC | Jest propozycja zakresu i suma ośmiu D, brak dopuszczonego blueprintu formy | Sprawdzić kolejność, podpowiadanie między itemami, zakres każdego punktu, nowość i instrukcję. Nie uruchamiać jako zatwierdzonego testu tematu |
| GAP-T21-07 — wynik review wspólnego C | C v0.2 nadal oczekuje review; T21 używa standardu jako wzorca zgodnego z B | Po nowych uwagach do C sprawdzić wpływ na źródła, terminologię, itemy, relacje, scoring i ekspozycję T21 |
| GAP-T21-08 — empiria | Brak pilota, danych trudności, cognitive interviews, retencji i transferu | Nie deklarować skuteczności, kalibracji lub prognozy zdania. Osobny późniejszy protokół i rzeczywiste wykonania |
| GAP-T21-09 — aktywność i implementacja | Brak rzeczywistych odpowiedzi, zegarów, R25/R26 i testu obsługi | To zależność przyszłej aplikacji/G3, nie niewypełniona sekcja authoringu. Zachowywać wyłącznie fakty zdarzeń |
| GAP-T21-10 — sąsiednie banki | Brak gotowych T10/T22 do porównania; C-P/B03-P porównane w znanym zakresie | Integrator sprawdza bliskość po ich powstaniu. Nie deklarować globalnego audytu wszystkich pytań |

**Poza zakresem, bez obietnicy uzupełnienia w T21:** cały FL, cały inwentarz foundational, pełna jakość zbioru wymagań, praktyczne pisanie/naprawianie L3, metody walidacji i pełne symulacje egzaminu. Nie są to ukryte braki w deklarowanym T21.

### 9.3. Co wolno przekazać dalej

| Zastosowanie | Status tej rewizji |
|---|---|
| Czytanie przez właściciela, recenzenta i agenta przygotowującego implementację | Pakiet kompletny do tego celu, z zachowaniem metadanych review |
| U-READ dla przyszłego ucznia | Wniosek o dopuszczenie po review, bez bieżącej zgody autora na publikację |
| U-GUIDED/U-INDEPENDENT | Pełne K2 istnieją, ale brak QG-09 blokuje punktowane użycie |
| U-REMEDIAL | Pełne REM+F+G+wyjście napisane; skuteczność i review niepotwierdzone |
| U-REVISION | Pełne D i O są dostępne; po review zachować realne czasy, znajomość i bliskość |
| U-RESERVED / nowy transfer | Niedopuszczone jako chroniona rezerwa czytelnika; brak odrębnego review rodzin i eksportu |
| U-TOPIC | Propozycja, niedopuszczona forma; osobne review i decyzja właściwego zakresu |
| U-MOCK, gotowość do FL, p(zdania) | Poza zakresem i niedopuszczone |

### 9.4. Zależności do ponownego sprawdzenia po zmianie

- Zmiana dowolnej REG01–06: odpowiadająca N/EX/CE/REM, B/F/G/D, element O01, konkretne RAT z tą regułą (także w innych ścieżkach), ich R09/R15 i kontakty. Nie przeliczać wyłącznie itemu primary, jeżeli reguła występuje w dystraktorze innego.
- Zmiana REG07/08: noty N07/08, szczególna para i warunek wartości, odpowiednie czwórki, O02, wtórne R06-S i interpretacje wyników; nie zlewać KRY02/03.
- Zmiana znaczenia complete: CMP02, WS02, O03, D02-d i D06-d oraz wszystkie inne rationale odsyłające do REG04. Trudny przypadek odwołania nie zmienia automatycznie bezspornego klucza B04.
- Zmiana scoringu/regulaminu: wszystkie 32 itemy, 176 wektorów, sumy banku/form i instrukcje. Odpowiedzi pozostają; nowa ocena ma własną podstawę.
- Zmiana rodziny lub przeciek: R20/R21, kwalifikacja nowości osób, wybór form i rezerwy; historia ekspozycji nie znika po nowym ID lub rewizji.
- Zmiana rubryki: przykłady §8, źródło oceny i dawne kwalifikacje, jeżeli pojawią się realne odpowiedzi. Samoocena nadal pozostaje samooceną.
- Zmiana źródła/praw/kanału albo wynik review C: odtworzyć dotknięte CL i sprawdzić odpowiednie zależności, zamiast automatycznie przepinać całą paczkę na „najnowsze”.

## 10. Propozycje delt — do integracji, bez nadpisania wspólnych plików

Każda delta ma status **PROPOSED / NOT APPLIED**. Integrator wprowadza je po właściwym review i w uzgodnionej kolejności. Nie wykonano zapisu do START, M01, C01/C02, B ani innych tematów.

| Delta / cel | Stan przed → proponowany stan po | Powód i źródło | Dotknięte obiekty / zakres integracji |
|---|---|---|---|
| DELTA-T21-01 — C01, źródła | C-S02/03 nie zawierały faktycznego odczytu T21 §3.8 → dopisać odczyt EN s.19/29–30 i PL s.20/30–31 z 2.11.2026 | Faktyczna lektura T21, source manifest i CL00/01–08 | Istniejące C-S02/03, bez nowych konkurencyjnych tożsamości źródła; dopisać zakres, nie „pełne PDF” |
| DELTA-T21-02 — C01, Glossary | Dotychczas odczytano głównie hasła A/P/K → dopisać adequacy/completeness/necessity/unambiguity/understandability/verifiability i quality criteria z dokładnymi EN/PL stronami Content §2 | Nowe znaczenia i zweryfikowane pogrubienia, CL01–06/11 | C-S05/06 i rejestr foundational tylko wybranych haseł; bez deklaracji pełnego słownika |
| DELTA-T21-03 — C02, terminologia | T-01–13 obejmują podstawy C-P/A/K → dodać sześć par przymiotnik/rzeczownik i kontrolowane aliasy | SPL §3.8, GEN/GPL właściwe hasła; konieczność vs „niezbędne”, complete vs „niezależne” | Nie zmieniać T-01–13. Nowe globalne numery nada integrator, aby nie zderzyć numeracji równoległych flow; lokalne TERM-T21 zachować jako mapowane źródła |
| DELTA-T21-04 — M01/T21 | „Brak treści tego tematu w obecnym pilocie C” → „T21 v0.1 opracowane autorsko: sześć znaczeń, trzy kryteria/osiem zakresów; 32 zamknięte +4 otwarte, oczekuje review” | Rzeczywisty inwentarz §2/3; EO3.8.1 L1 | Wyłącznie wiersz T21 i jego status authoringu; nie „zaakceptowany pełny EO”, nie zamknięcie G2 |
| DELTA-T21-05 — ID i rodziny | Brak lokalnej przestrzeni T21 → zarejestrować B/F/G/D01–08, O01–04, N/REM, 12 rodzin i 63 pary | Content §7/8; B01-03/09 | Rejestr ID/rodzin, z bliskością do C-P i otwartych; zero niezależnych zatwierdzonych rodzin; nie resetować ekspozycji |
| DELTA-T21-06 — reguły wspólne | Krótki opis complete może zostać odczytany jako zakaz relacji → dodać jawne rozdzielenie samowystarczalności, terminologii, relacji i nieokreślonej treści | GEN completeness s.11, SPL s.30; interpretacja T21 do review | C02/nowe tematy T10/T22 oraz noty zależne; nie wprowadzać niepotwierdzonego absolutnego wyjątku „każdy link jest OK” |
| DELTA-T21-07 — START | Router nie opisuje ukończonego T21 → dodać stan do review, źródło merytoryczne dla agenta implementacji, otwarte G2–G4 | CP3 i handoff; R06 zachowane | Jedna nota statusu i routing obu plików; nie aktualizować automatycznie całej fazy ani akceptacji C |
| DELTA-T21-08 — C04/plan review | C04 opisuje własne trzy pakiety → dodać odrębny zakres review T21, bez domniemanego rozszerzenia akceptacji | M02 §7/8, B04 C-AC-12 | Właściwy harmonogram/zakres review; wynik C może wymusić kontrolę wpływu w T21 |
| DELTA-T21-09 — ekspozycja | Wspólne noty mogą resetować cały EO → używać faktycznego zakresu kontaktu, per ZAK i per RAT | Content §9.1, B01-10/FR-020 | Reguły integracji kontaktów oraz T02/C-P jako częściowy zewnętrzny zakres z CMP01; bez automatycznej propagacji mastery |
| DELTA-T21-10 — źródłowa atrybucja twierdzeń | DR opisuje „niewyczerpującą” checklistę bez rozdzielenia podstaw → rozdzielić zalecany charakter z syllabus od kontekstowej natury zestawów z Glossary | CL08 vs CL11; rzeczywiste odczyty §4 | Propozycja doprecyzowania redakcyjnego przy integracji; bez zmiany kanonu pedagogicznego i bez przypisania syllabus nieodczytanej normy |

Proponowany tekst noty START/M01 po przyjęciu do rejestru: „T21 v0.1 zawiera kompletny autorski wsad dla EO3.8.1 L1: sześć znaczeń kryteriów, szczególną parę i zależność wartości, 32 zadania zamknięte i 4 otwarte z oceną. Oba pliki oczekują odrębnego review; nie stanowią chronionej rezerwy dla czytelnika. G1 i K-04 pozostają zachowane; G2/G3/G4 otwarte”.

## 11. Handoff do odrębnego review i najbliższy krok do G2

**Konkretny następny krok:** przekazać oba pełne pliki T21 kompetentnemu recenzentowi odrębnemu od autora, z poleceniem samodzielnego rozwiązania 32 stemów oraz 4 otwartych poleceń przed oglądaniem kluczy. To zlecenie review, nie kolejny research pedagogiki, nie ponowne otwieranie B i nie implementacja. Nie zarejestrowano tu osoby ani fikcyjnej daty wykonania takiej recenzji.

Recenzent powinien:

1. Odtworzyć EO3.8.1/L1 oraz wszystkie sześć znaczeń z oficjalnych lokalizacji; porównać PL/EN, szczególnie necessity i complete. Sprawdzić, że nie podniesiono wymagań do L2/L3 przez punktowane decyzje zamknięte.
2. Rozwiązać i sprawdzić wszystkie 128 opcji/wierszy, także poprawne P pominięte w syntetycznych wektorach. Dla każdej uwagi wskazać item/r1, konkretny warunek i właściwe źródło; nierozstrzygnięty klucz wstrzymać.
3. Odtworzyć punktację z §7, skontrolować dokładne ułamki i rozdzielenie braku/nadmiaru od błędu wiedzy. Sprawdzić każdą z czterech rubryk na odpowiedziach §8; ocena decyzji nie zatwierdza automatycznie swobodnego powodu.
4. Sprawdzić osie trzech comparisons, sens siedmiu objaśnień przykładów, sześć rzeczywistych kontrprzykładów i dwa worked scenarios. Osobno ocenić interpretację granicy samowystarczalności oraz zgodność opisu najważniejszej pary i wartości.
5. Przejrzeć R08/R09/R15 i lokalne R06, wszystkie istotne R21 w ramach czwórek oraz znane pary C-P/B03-P. Zatwierdzić lub poprawić rodziny i role delayed; nie potwierdzać niezależności z samego nowego ID, formatu lub kolejności opcji.
6. Sprawdzić ekspozycję, przyszłe wydzielenie [Q]/[R]/[M], metadane zdradzające regułę i warunki dostępu. Wskazać, czy ewentualna forma tematu wymaga selekcji/innych zadań z powodu podpowiadania między pozycjami.
7. Sprawdzić prawa aktualnego i planowanego kanału, atrybucję oraz status własnych polskich objaśnień. Zarejestrować rzeczywistego recenzenta, datę, kompetencje, dokładną rewizję/zakres, uwagi i decyzję użycia.

Minimalny zapis każdej uwagi: `obiekt/rev → problem i wpływ → źródło lub wymaganie → poprawka/decyzja → ponowna kontrola → dozwolone użycia / ograniczenia`. Status końcowy recenzji: zmiany wymagane / dopuszczone do określonego użycia / wyłączone. Pusta karta ani kolejna odpowiedź LLM nie jest dokumentem wykonanego review. Jedna rzeczywiście odrębna osoba może łączyć kompetencje, jeśli zakres jest jawny; nie wymyśla się liczby recenzentów lub wyników zgodności.

Po rozliczeniu review właściciel może ocenić przyjęcie T21 i jego użyć w ramach **G2**. Nie należy z tego automatycznie wyprowadzać odbioru całego C, G3 lub G4. G3 osobno sprawdza rzeczywistą ścieżkę odpowiedź–wiedza–korekta–follow-up–powrót, widoczność i symulację odroczenia na określonych wersjach. Rzeczywista retencja wymaga później realnej przerwy i wykonania, a nie symulacji czasu. Zakres kodowania wymaga właściwego mandatu projektu; sam merytoryczny wsad go nie ustanawia.

Dla agenta implementującego: używać tej paczki jako źródła znaczeń, zadań i kontraktów informacyjnych. Przygotowanie technicznej reprezentacji nie może usuwać pending review, zmieniać scoringu, tworzyć R25 z istnienia zadania, odtwarzać fikcyjnej historii ani przywracać nowości ujawnionych pozycji. Braki i otwarte użycia są częścią wymagań wejściowych.

## 12. Manifest wersji i odtworzenie kontroli

### 12.1. Dokumenty projektu

Hash służy identyfikacji bajtów, nie potwierdza praw, poprawności lub akceptacji. M01/M02 wskazują rolę i zakres; R06 potwierdza G1. Właściwy zakres odczytu T21 to reguły B, FTC F13 i właściwe FR/AC, pedagogika oraz wybrane sekcje DR D2/D7/D10–12, aktualne C01/C02 i reuse C03-P/C04. Nie poświadcza się nowego pełnego audytu całej literatury badawczej ani wszystkich 70 EO.

| Dokument wejściowy | SHA-256 użytego tekstu/pliku |
|---|---|
| 00_IREB_CPRE_START.md | `b8216bf09c60bd5455077bfb3731ac009c9a34d5a0909cf24225093d77d7ca78` |
| 00_IREB_CPRE_Fundament_pedagogiczny.md | `12643d8e65e495a9fac2aaab46c96b14da6b25c2a454e9859a66c529e57b68cd` |
| IREB_CPRE_Deep_Research_PL_2026-11.md | `04d8dd6c237fbacf4daedfffe41034279e595714c5db4aab23a6371fa0eff9ed` |
| IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md | `43e82c6915aaae12f735ed45d4b341186f6cefa8d93dab140a4b1099644122b8` |
| IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md | `d1cd3831a6aa80c6c899b38ae02ea46737b63e026fa155e7f6612ea5e5d95210` |
| B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md | `f29c2f3b61ce1ad86467a19153b648c50af8cac61b07ca19bb856d0dfe46323c` |
| B02_IREB_CPRE_FR_Traceability_v0.2.md | `dc089326e158d431520c7a8eb5cc2f6d8935c0513bee355ca8f9ab7c92dcfa94` |
| B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md | `af112d6e97ebe559264eb7ba6df4c6acc8a0c91ffe02f543b0f44123913114d1` |
| B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md | `00d82a4f62d8b1c01931941a0dcfa8fccccd378b29c1990eb47d5fd3dc4988e2` |
| R06_IREB_CPRE_G1_Owner_Decision_v0.1.md | `85181939cbbe1e9eb96170b416c732de83a5882864db63857e4de47c2dd593d0` |
| M01_IREB_CPRE_FL_Topic_Map_and_Authoring_Backlog_v0.1.md | `4036fa4af886e9a0feb2e186933b2a92c30cbaa05f2331c4423398a121ba9739` |
| M02_IREB_CPRE_Topic_Flow_Brief_Template_v0.1.md | `6c019430595741d9a45084ca77aa78302fb83a3995c4117436aab124735bd365` |
| C01_IREB_CPRE_Source_and_Licensing_Register_v0.2.md | `5bc472d6a8df25a7aa65561114ca23ed7defd00c03f7254bf76cc78181921f5a` |
| C02_IREB_CPRE_Terminology_and_Authoring_Standard_v0.2.md | `de488b934a6c65a22988d49636259d45a40331059800ccc44d9acf528d6681aa` |
| C03_IREB_CPRE_Pilot_Content_APK_v0.2.md | `f249bf8e631afc8f4c2154920a1e6da4261adf1a9a7e5f831b0014429de4fec9` |
| C04_IREB_CPRE_Content_QA_and_Handoff_v0.2.md | `63fa29fda5a7661b11b971be81b07eb56c6cd9529e789dd29f1f17b3fc9bd6ca` |

C v0.2 odczytano w pełnej reprezentacji tekstowej; końcowy LF pominięty przez odczyt przywrócono wyłącznie do kontroli tożsamości bajtowej. Wszystkie cztery rozmiary oraz SHA zgadzają się z manifestem M01. To kontrola właściwej rewizji, nie modyfikacja C ani nowa recenzja jego treści. B01–B03 i administracyjnie zaktualizowane B04 są zgodne z właściwym baseline R06.

### 12.2. Oficjalne pliki faktycznie odczytane

| Źródło | Strony PDF | SHA-256 pobranych bajtów |
|---|---:|---|
| syllabus_en | 49 | `feed272cb0de2085f73586df4f6d14865ef255c88bb0747ac2630c4d0c9a0b24` |
| syllabus_pl | 52 | `bfc14ec9a6591ac8d82d6d3db3a82e311bb6304fc71d8bfca4c7c7722b7f5951` |
| glossary_en | 39 | `ef1f6b9bf95b444a6d5d3eca56f51cd10b715fc8161900356cf43b8d4b508579` |
| glossary_pl | 48 | `c867011dfd74a488cda951a1aeec6cdc0ae1cde6c7a0c38a592864feea362a3c` |
| regulations | 6 | `59435ce078e693941b6e6d32754321fe389461641b490033715c3e77c4e011eb` |

### 12.3. Tożsamość dostarczonej treści i granica zamknięcia

Plik Content v0.1: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md`; 214843 bajtów UTF-8; SHA-256 `365e60dda5f9a47697c7f3170c938d821187c7658b38f7e8eb894f5621ccf965`. QA v0.1 to niniejszy dokument z zachowanym stanem CP1–CP3. Nie umieszcza się w nim samoodnoszącego SHA własnych zmiennych bajtów.

Wszystkie 32 zamknięte itemy i 4 otwarte aktywności są rzeczywiście napisane. Sześć znaczeń i trzy kryteria M02 mają pełny łańcuch treść–ocena–korekta–F/G–D w zakresie tego tematu. Nie ma niewypełnionego „dopisać pytanie/klucz/rationale później”. Odrębna recenzja, dopuszczenie kanału i użyć, chroniona pula, G3/G4 i empiria pozostają otwarte zgodnie z §9/11.

**Historia v0.1:** CP1 — rdzeń; CP2 — wszystkie zadania; CP3 — kompletne relacje, kontakty, arytmetyka, QA i handoff. To checkpointy jednego flow i dwóch plików, nie konkurencyjne linie treści ani fikcyjna historia ucznia.
