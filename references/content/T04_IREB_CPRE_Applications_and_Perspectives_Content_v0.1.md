# T04 — Zastosowania i perspektywy RE — Content v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Karta uruchomienia i granice

| Pole | Wartość |
| --- | --- |
| FLOW_ID | FLOW-Z1-T04-01 |
| Tryb | CREATE |
| EO / poziom | EO1.3.1 L1 |
| RUN_SCOPE | Zastosowanie do różnych systemów; pięć perspektyw występowania wymagań. Poziom EO L1 mimo nagłówka §1.3 L2. |
| Zależności / bez gatingu | T01 system/stakeholder; T02 rodzaje wymagań; nie wymuszać klasyfikacji domenowej L3. |
| Poza pomiarem | Sąsiednie EO, zawodowa biegłość i pełny FL; brak L3 w właścicielskim zakresie Z1. |
| Zamierzone użycie | Materiał recenzencki i wsad dla agenta kodu; późniejsze użycia U-* po review |
| Wyniki | T04_IREB_CPRE_Applications_and_Perspectives_Content_v0.1.md; T04_IREB_CPRE_Applications_and_Perspectives_QA_and_Handoff_v0.1.md |
| Baseline | M01/M02/M03 v0.1; B01–04 v0.2/R06; kanon; FTC; Blueprint; C01–04 v0.2 |

### Widoczność, wynik i dowód

**[N]** objaśnienia, przykłady, porównania i korekty: Nauka po dopuszczeniu. **[Q]** tylko polecenie, opcje/wiersze i maksymalna waga. **[R]** klucz, rationale, reguła, EO, źródła, rodzina i rubryka: po odpowiedzi w Nauce, po finalizacji całej próby w Sprawdzeniu. **[D]** pełny kandydat delayed: poza zwykłym eksportem uczniowskim; w tym pliku jawny. Nagłówek tematu, metadane i źródło nie są częścią [Q].

Neutralna instrukcja przyszłej próby: „Możesz zmieniać odpowiedzi i oznaczać pytania do powrotu do chwili zakończenia całej próby. Oznaczenie jest dobrowolne. Wynik i wyjaśnienia zobaczysz po zakończeniu całości. Materiały RE są w trakcie niedostępne. Dopuszczony w profilu neutralny słownik językowy nie może zawierać definicji RE”. Możliwość flagi musi być dostępna; jej niewykorzystanie nie wpływa na punkty. Glossary CPRE stanowi pomoc dziedzinową. Czytnik, klawiatura i powiększenie są narzędziami dostępu.

Regulamin C-S04 5.6.2 §2, fizyczne s.4–6: A ma 4–5 opcji i jeden klucz; w=1 za trafny pojedynczy wybór, inaczej 0. P podaje k≥2; przy n≤k wynik w×c/k, przy n>k całe pytanie 0. K ma m wierszy; wynik w×c/m, a błąd, blank i obie wartości zerują tylko dany wiersz. Wagi niniejszych itemów 1–3 są decyzjami redakcyjnymi; nie empiryczną oceną trudności. Odpowiedzi otwarte ocenia lokalna rubryka, bez punktów CPRE. Ocena klasyfikacji według klucza i ocena swobodnego uzasadnienia pozostają osobne. Samoocena według rubryki jest samooceną.

Nie ma zdarzeń R25 EVIDENCE_FOR w korpusie. Prawidłowy wynik dotyczy ocenionych decyzji; nie zamyka całego EO ani nie ustala mastery. Przed nową próbą per kryterium trzeba zachować datę poprzedniej samodzielnej próby, koniec ostatniego istotnego kontaktu, oba rzeczywiste odstępy, historię itemu/rodziny oraz pomoc. Lektura reguły minutę przed zadaniem oznacza świeże wykonanie nawet po tygodniu od dawnej próby. Plan ≥24 h, 3–7 / około 14 dni jest hipotezą pilota z B, nie normą IREB.

K-04: **wiersz 4 ILL-K01 / KRY-X01** pozostaje pomocniczy bez EO. ILL-K01 zachowuje m=4, w=2, ilustracyjne 1/2 i dotychczasowe ograniczenie rezerwy CPRE/pełnego mocku. Nowe zadania Z1 nie zmieniają tej ilustracji.

## Inwentarz kryteriów i twierdzeń źródłowych

| Kryterium r1 / czynność | EO i poziom | Claim / lokalizacja | Granica obserwacji |
| --- | --- | --- | --- |
| KRY-T04-01 — RE dla różnych rodzajów systemów | EO1.3.1 L1 | CL-T04-01; C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |
| KRY-T04-02 — Pięć perspektyw występowania wymagań | EO1.3.1 L1 | CL-T04-02; C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13 | Tylko czynność i rozstrzygnięcia poniższego zakresu; bez dziedziczenia całego EO. |


## 1. RE dla różnych rodzajów systemów — KRY-T04-01

**Cel i czynność:** RE dotyczy wymagań dla różnych rodzajów systemów, także produktów, usług, procedur i urządzeń. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T04-01 — objaśnienie [N]

RE może być stosowane do wymagań dotyczących dowolnego rodzaju systemu. Syllabus wskazuje jako dominujący obszar systemy z ważną rolą oprogramowania, ale nie ogranicza definicji do tego obszaru. W takich systemach występują zwykle składniki programowe, fizyczne i organizacyjne. Oznacza to, że przedmiotem wymagań może być również urządzenie, procedura, usługa lub kombinacja elementów.

System łączący software i składniki fizyczne nazywamy cyber-physical, a szerszy system obejmujący także ludzi i aspekty organizacyjne — socio-technical. Są to określenia składu i perspektywy, nie trzy rodzaje wymagań. Nazwanie elementów nieinformatycznych pomaga nie przeoczyć ich wpływu. Ten temat sprawdza rozpoznanie obszaru zastosowania; nie wymaga kompletnej architektury ani samodzielnej analizy granic.

Nie należy z dominacji zastosowań software wywodzić normy „wyłącznie software”. Podobnie użycie aplikacji nie usuwa roli sprzętu czy procedur w analizowanej całości.

**PL/EN i status:** system cyberfizyczny — cyber-physical system; system socjotechniczny — socio-technical system: objaśnienia składu według C-S06 System s.29 i C-S07 s.13; nie odrębne EO.

**Warunki i źródło CL-T04-01:** C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T04-01 — porównanie [N]

Oś: skład analizowanej całości. Sam program, system z urządzeniem i cała usługa z ludźmi mogą mieć wymagania. Rozszerzanie perspektywy nie tworzy automatycznie nowego rodzaju functional/quality/constraint.

**EX-KRY-T04-01 — przykład:** Stanowisko wydawania paczek może obejmować aplikację, zamek, skaner i zasady przekazania paczki przez pracownika. RE dotyczy oczekiwań wobec takiej całości.

**CE-KRY-T04-01 — kontrprzykład:** Uogólnienie „RE nie dotyczy procedury ręcznej” obala procedura obsługi zwrotu z określonym celem, rolami i wymaganiami, choć nie wprowadza się nowego programu.

### RP-T04-01 — retrieval [Q/R]

**[Q] Gdzie można stosować RE? Czy dominacja systemów software ogranicza dopuszczalny zakres?**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T04-01-rubryka-1 | RE dotyczy wymagań dla różnych rodzajów systemów, także produktów, usług, procedur i urządzeń. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T04-01-rubryka-2 | Dominujący obszar software nie oznacza wyłączności; rozpoznaje składniki fizyczne i organizacyjne. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T04-01 — korekta i kontrola [N]

Oddziel obserwację najczęstszych zastosowań od definicji dopuszczalnego zakresu. System nie musi być wyłącznie aplikacją. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T04-01-B01 / r1 — B / P

Redakcja [R]: primary KRY-T04-01 → EO1.3.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T04-01; Rozpoznanie dopuszczalnych obszarów.. Użycie: practice, do review.

**[Q] Które DWA twierdzenia poprawnie opisują zakres zastosowania RE?**

Wybierz dokładnie 2 odpowiedzi. Maksymalnie 2 pkt.

| Opcja | Treść |
| --- | --- |
| a | RE może dotyczyć urządzenia i współpracującego oprogramowania. |
| b | RE może dotyczyć procedury realizującej określony cel organizacji. |
| c | Dominacja zastosowań software oznacza, że RE jest z definicji ograniczone do samego kodu. |
| d | RE można stosować tylko wtedy, gdy wybrano liniowy proces wytwarzania. |

**[R] Klucz: a, b.** Przy n≤2 każda trafna daje 1; nadmiar zeruje całe pytanie.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T04-01-B01-a | wybrać | Szerokie znaczenie systemu obejmuje całość cyberfizyczną → wybrać. |
| RAT-Z1-T04-01-B01-b | wybrać | Procedura może być przedmiotem wymagań przy szerokim znaczeniu systemu → wybrać. |
| RAT-Z1-T04-01-B01-c | nie wybierać | Opis dominującego zastosowania nie jest ograniczeniem normatywnym → nie wybrać. |
| RAT-Z1-T04-01-B01-d | nie wybierać | Zastosowanie nie jest uzależnione od takiego procesu; zasady dotyczą różnych podejść → nie wybrać; C-S02/C-S03 preambuła s.3 i PR09 s.18. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T04-01 oraz C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oddziel obserwację najczęstszych zastosowań od definicji dopuszczalnego zakresu. System nie musi być wyłącznie aplikacją. Przejście do REG-KRY-T04-01 / CMP-KRY-T04-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T04-01-F01 / r1 — F / K

Redakcja [R]: primary KRY-T04-01 → EO1.3.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T04-01; Rozpoznanie twierdzeń bez tworzenia modelu.. Użycie: practice, do review.

**[Q] Oceń twierdzenia o zastosowaniu RE.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 2 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | RE może obejmować wymagania dla usługi z elementami organizacyjnymi. |
| 2 | Dominujące zastosowanie w software oznacza zakaz RE dla sprzętu. |
| 3 | System z software i elementami fizycznymi może być cyberfizyczny. |

**[R] Klucz: Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 2/3; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T04-01-F01-1 | Prawda | Usługi i elementy organizacyjne są dopuszczone → Prawda. |
| RAT-Z1-T04-01-F01-2 | Fałsz | Dominacja opisuje praktykę, nie wyłączność → Fałsz. |
| RAT-Z1-T04-01-F01-3 | Prawda | To podany zakres określenia składu → Prawda. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T04-01 oraz C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oddziel obserwację najczęstszych zastosowań od definicji dopuszczalnego zakresu. System nie musi być wyłącznie aplikacją. Przejście do REG-KRY-T04-01 / CMP-KRY-T04-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T04-01-D01 / r1 — D / A

Redakcja [R]: primary KRY-T04-01 → EO1.3.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T04-01; Kontrast zakresu systemu i rodzaju wymagania.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Który wniosek wynika z obecności ludzi i procedur w systemie usługi?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Wszystkie wymagania tej usługi są constraint. |
| b | Nie może wystąpić żaden komponent fizyczny. |
| c | Wymagania mogą dotyczyć szerszej całości niż sam program. |
| d | RE staje się niedozwolone. |

**[R] Klucz: c.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T04-01-D01-a | nie wybierać | Skład systemu nie określa typu każdego wymagania → nie wybrać. |
| RAT-Z1-T04-01-D01-b | nie wybierać | Ludzie/procedury nie wykluczają sprzętu → nie wybrać. |
| RAT-Z1-T04-01-D01-c | wybrać | Skład socjotechniczny poszerza przedmiot analizy → wybrać. |
| RAT-Z1-T04-01-D01-d | nie wybierać | Elementy organizacyjne nie wyłączają RE → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T04-01 oraz C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Oddziel obserwację najczęstszych zastosowań od definicji dopuszczalnego zakresu. System nie musi być wyłącznie aplikacją. Przejście do REG-KRY-T04-01 / CMP-KRY-T04-01 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T04-01 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T04-01-B01 ↔ Z1-T04-01-F01 | Rozpoznanie dopuszczalnych obszarów. → Rozpoznanie twierdzeń bez tworzenia modelu.; rdzeniem jest re dla różnych rodzajów systemów | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T04-01-B01 ↔ Z1-T04-01-D01 | Rozpoznanie dopuszczalnych obszarów. → Kontrast zakresu systemu i rodzaju wymagania.; rdzeniem jest re dla różnych rodzajów systemów | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T04-01-F01 ↔ Z1-T04-01-D01 | Rozpoznanie twierdzeń bez tworzenia modelu. → Kontrast zakresu systemu i rodzaju wymagania.; rdzeniem jest re dla różnych rodzajów systemów | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## 2. Pięć perspektyw występowania wymagań — KRY-T04-02

**Cel i czynność:** Wymienia system, stakeholder, user, domain i business requirements z poprawnym ogólnym sensem. Możesz rozpocząć od zadania B albo najpierw przeczytać objaśnienie; nie ma obowiązku odhaczania lektury.

### REG-KRY-T04-02 — objaśnienie [N]

Syllabus wyróżnia wymagania systemowe, interesariuszy, użytkowników, domenowe i biznesowe. Systemowe odnoszą się do wymaganego systemu. Interesariuszy wyrażają oczekiwania z ich perspektywy, a użytkowników — potrzeby osób korzystających z systemu; wymagania użytkowników są podzbiorem wymagań interesariuszy. Domenowe dotyczą właściwości domeny, które mają zachodzić w kontekście systemu. Biznesowe dotyczą celów, zamierzeń i potrzeb organizacji.

Jest to perspektywa występowania, a nie alternatywny zamknięty podział concern. Wymóg użytkownika może dotyczyć funkcji lub jakości, a oczekiwanie biznesowe może zostać rozwinięte do różnych wymagań systemowych. Nie trzeba przypisywać każdemu zdaniu dokładnie jednej etykiety z pięciu, jeżeli kontekst tego nie rozstrzyga. Aby pytanie było jednoznaczne, wskazujemy perspektywę, np. cel organizacji albo właściwość rzeczywistej domeny.

Wymaganie domenowe nie jest automatycznie opisem algorytmu aplikacji: reguła o tym, co ma być prawdą w otoczeniu, wymaga przełożenia na obserwowalne i sterowalne własności systemu. To przełożenie szerzej wyjaśnia T07/PR04. W T04 wystarcza rozpoznanie znaczenia pięciu nazw.

**PL/EN i status:** wymaganie systemowe — system requirement; interesariusza — stakeholder requirement; użytkownika — user requirement; domenowe — domain requirement; biznesowe — business requirement: C-S06 s.33–34. „Dotyczące domeny” w sylabusie PL jest wariantem nazwy domenowego.

**Warunki i źródło CL-T04-02:** C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13 Sprawdzona przesłanka: sens i warunki opisane w REG. Obiekty zależne: wszystkie zadania B/F/D, RP, CMP, EX, CE i REM tego kryterium oraz ich rationale. Norma wspiera regułę; nie opisuje fikcyjnej sytuacji autora.

### CMP-KRY-T04-02 — porównanie [N]

Oś 1: z czyjej perspektywy / czego dotyczy wymaganie — pięć nazw. Oś 2: przedmiot oczekiwania — funkcja, jakość, constraint. Wymóg czasu oczekiwania zgłoszony przez użytkownika ma perspektywę user i concern quality.

**EX-KRY-T04-02 — przykład:** „Organizacja chce ograniczyć straty magazynowe” wskazuje perspektywę biznesową; „operator chce znaleźć różnicę stanu” użytkownika; „każda wydana paczka ma mieć rzeczywistego odbiorcę” może opisywać wymaganą właściwość domeny.

**CE-KRY-T04-02 — kontrprzykład:** Uogólnienie „user requirement jest czwartym rodzajem obok functional/quality/constraint” obala potrzeba użytkownika otrzymania potwierdzenia: perspektywa user i concern functional mogą współistnieć.

### RP-T04-02 — retrieval [Q/R]

**[Q] Nazwij pięć perspektyw i wskaż relację user requirements do stakeholder requirements.**

**[R] Wzorzec i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-RP-T04-02-rubryka-1 | Wymienia system, stakeholder, user, domain i business requirements z poprawnym ogólnym sensem. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-RP-T04-02-rubryka-2 | User requirements są podzbiorem stakeholder requirements; perspektywa nie zastępuje rodzaju z T02. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Zastąpienie rozstrzygającej reguły jej zaprzeczeniem; sam pewny ton nie kompensuje błędnej treści. Odpowiedź graniczna/równoważna: Poprawna krótka parafraza jest równoważna. Same nazwy bez wymaganych rozróżnień dają tylko częściowe wykonanie.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

### REM-KRY-T04-02 — korekta i kontrola [N]

Najpierw nazwij perspektywę lub przedmiot, a dopiero osobno rodzaj oczekiwania. Użytkownik jest interesariuszem; domena nie oznacza wyłącznie kodu. Po konkretnym błędzie wybierz fragment tego kryterium i zadanie F. Jest to neutralna korekta, bez person-specific diagnozy. Nie twierdzimy, że błędna opcja jest częstą pomyłką.

Warunek zakończenia gałęzi: poprawne wykonanie wymaganego rozróżnienia w F według jawnego klucza/rubryki; wynik dotyczy świeżej korekty. Po niepowodzeniu można wrócić do porównania lub przerwać. Ten zakres dostarcza jeden FU na kryterium, nie obiecuje drugiego nieznanego wariantu. Nie zużywać D jako automatycznej drugiej próby. Jeśli w późniejszej gałęzi wystąpią dwa nieudane FU, zaproponować inne wsparcie albo przerwę, bez automatycznej trzeciej podobnej próby.

#### Z1-T04-02-B01 / r1 — B / K

Redakcja [R]: primary KRY-T04-02 → EO1.3.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T04-02; Pięć perspektyw w jawnym rozpoznaniu.. Użycie: practice, do review.

**[Q] Oceń znaczenia perspektyw wymagań.**

Oceń każdy wiersz jako Prawda albo Fałsz; jedna wartość w wierszu. Maksymalnie 3 pkt.

| Wiersz | Treść |
| --- | --- |
| 1 | Business requirement może wyrażać cel organizacji. |
| 2 | User requirements są podzbiorem stakeholder requirements. |
| 3 | Domain requirement dotyczy wymaganej właściwości domeny w kontekście systemu. |
| 4 | System requirement musi być zawsze constraint. |
| 5 | Stakeholder requirement może wyrażać potrzebę osoby niekorzystającej bezpośrednio z systemu. |

**[R] Klucz: Prawda, Prawda, Prawda, Fałsz, Prawda.** Każdy poprawny wiersz daje 3/5; blank/błąd/obie wartości dają 0 za ten wiersz.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T04-02-B01-1 | Prawda | Cel organizacji to perspektywa biznesowa → Prawda. |
| RAT-Z1-T04-02-B01-2 | Prawda | User jest stakeholderem i wyraża własne potrzeby → Prawda. |
| RAT-Z1-T04-02-B01-3 | Prawda | To sens wskazany w źródle → Prawda. |
| RAT-Z1-T04-02-B01-4 | Fałsz | Odniesienie do systemu nie określa concern → Fałsz. |
| RAT-Z1-T04-02-B01-5 | Prawda | Nie każdy stakeholder jest userem → Prawda. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T04-02 oraz C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw nazwij perspektywę lub przedmiot, a dopiero osobno rodzaj oczekiwania. Użytkownik jest interesariuszem; domena nie oznacza wyłącznie kodu. Przejście do REG-KRY-T04-02 / CMP-KRY-T04-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T04-02-F01 / r1 — F / O

Redakcja [R]: primary KRY-T04-02 → EO1.3.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T04-02; Odtworzenie wszystkich nazw przy jawnie podanych perspektywach L1.. Użycie: practice, do review.

**[Q] Rozpoznaj perspektywy: (1) cel organizacji ograniczenia strat; (2) potrzeba osoby korzystającej z systemu; (3) wymagana właściwość domeny; (4) oczekiwanie operatora utrzymania jako interesariusza; (5) właściwość, którą ma mieć system. Nie klasyfikuj concern.**

Odpowiedz własnymi słowami bez widocznej rubryki. Rubryka lokalna, bez punktów CPRE.

**[R] Rozwiązanie i rubryka:**

| ID wymiaru i rationale | Pełne wykonanie / model | Częściowo / brak |
| --- | --- | --- |
| RAT-Z1-T04-02-F01-rubryka-1 | (1) business; (2) user. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T04-02-F01-rubryka-2 | (3) domain; (4) stakeholder; (5) system. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |
| RAT-Z1-T04-02-F01-rubryka-3 | Nazwy nie są zamiennikami functional/quality/constraint; user należy także do szerszej perspektywy stakeholder. | Wskazano tylko część sensu: częściowo; brak, sprzeczność lub pusta odpowiedź: niespełnione. |

Błąd krytyczny: Wymuszanie rozłączności user i stakeholder jako warunku poprawności. Odpowiedź graniczna/równoważna: Można wskazać user+stakeholder przy (2), zachowując węższą nazwę user.

Pełna odpowiedź spełnia wszystkie wymienione wymiary i nie zawiera błędu krytycznego; odpowiedź częściowa spełnia tylko wskazane wymiary. Pusta nie daje obserwacji poprawnego wykonania. Akceptować równoważne sformułowania i poprawne przykłady; nie wymagać dosłownego wzorca. Ocena: wskazana kompetentna osoba według rubryki albo jawna samoocena; żadna z nich nie została tu wykonana na odpowiedzi ucznia.

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T04-02 oraz C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw nazwij perspektywę lub przedmiot, a dopiero osobno rodzaj oczekiwania. Użytkownik jest interesariuszem; domena nie oznacza wyłącznie kodu. Przejście do REG-KRY-T04-02 / CMP-KRY-T04-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

#### Z1-T04-02-D01 / r1 — D / A

Redakcja [R]: primary KRY-T04-02 → EO1.3.1 L1; czynność tego itemu: L1; oceniane wyłącznie rozstrzygnięcie z tego kryterium. Rodzina FAM-T04-02; Kontrola relacji osi w krótkim opisie.. Użycie: practice / kandydat delayed [D], do review.

**[Q] Zdanie „Użytkownik chce, aby 95% odpowiedzi pojawiało się w ciągu sekundy” opisano jako user requirement. Który wniosek o tej etykiecie jest poprawny?**

Wybierz JEDNĄ odpowiedź. Maksymalnie 1 pkt.

| Opcja | Treść |
| --- | --- |
| a | Oznacza, że autor zapisał kod. |
| b | Nazywa perspektywę użytkownika; nie wyklucza rodzaju quality. |
| c | Wyklucza wszystkie rodzaje z T02. |
| d | Dowodzi, że wymaganie nie ma żadnego interesariusza. |

**[R] Klucz: b.** Trafny pojedynczy wybór daje pełną wagę; błędny, pusty lub nadmiarowy daje 0.

| ID rationale / decyzja | Wynik wobec polecenia | Przesłanka → reguła → rozstrzygnięcie |
| --- | --- | --- |
| RAT-Z1-T04-02-D01-a | nie wybierać | Perspektywa potrzeby nie jest implementacją → nie wybrać. |
| RAT-Z1-T04-02-D01-b | wybrać | Perspektywa i concern to inne osie → wybrać. |
| RAT-Z1-T04-02-D01-c | nie wybierać | Osie mogą współistnieć → nie wybrać. |
| RAT-Z1-T04-02-D01-d | nie wybierać | User jest stakeholderem → nie wybrać. |

**Źródło wszystkich rozstrzygnięć/rubryki:** CL-T04-02 oraz C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13. Fakty przypadku pochodzą z [Q]; zastosowanie reguły jest wnioskiem autora. Punktacja: C-S04 §2 s.4–6, 5.6.2.

Feedback [N/R]: Najpierw nazwij perspektywę lub przedmiot, a dopiero osobno rodzaj oczekiwania. Użytkownik jest interesariuszem; domena nie oznacza wyłącznie kodu. Przejście do REG-KRY-T04-02 / CMP-KRY-T04-02 wyjaśnia dokładnie oceniane rozróżnienie. W praktyce feedback wskazuje także pominiętą poprawną opcję P i puste wiersze K; blank nie jest przypisywaną osobie błędną regułą.

### Rodzina i konkretne porównania dla KRY-T04-02 [R]

| Para R21 | Rzeczywista zmiana / zachowany rdzeń | Wniosek |
| --- | --- | --- |
| Z1-T04-02-B01 ↔ Z1-T04-02-F01 | Pięć perspektyw w jawnym rozpoznaniu. → Odtworzenie wszystkich nazw przy jawnie podanych perspektywach L1.; rdzeniem jest pięć perspektyw występowania wymagań | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T04-02-B01 ↔ Z1-T04-02-D01 | Pięć perspektyw w jawnym rozpoznaniu. → Kontrola relacji osi w krótkim opisie.; rdzeniem jest pięć perspektyw występowania wymagań | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |
| Z1-T04-02-F01 ↔ Z1-T04-02-D01 | Odtworzenie wszystkich nazw przy jawnie podanych perspektywach L1. → Kontrola relacji osi w krótkim opisie.; rdzeniem jest pięć perspektyw występowania wymagań | Wspólna konserwatywna rodzina; nowość rodziny niepotwierdzona. Zmiana formy sama nie dowodzi transferu; review pending. |


## Reuse, zależności i granice integracji

Nie przeniesiono itemów C do tego tematu. Wspólne pojęcia i zasady B/C02 nie stają się nowymi tożsamościami; nowe kryteria mają przestrzeń Txx. Zależności wymienione w karcie to propozycje redakcyjne, nie obowiązkowa kolejność lekcji.


## Konkretne relacje, ekspozycja i powrót

Każdy koniec poniżej ma r1; źródła mają wersje rejestru na końcu. Każda instancja ma status „kontrola autorska 2.11.2026, odrębne review pending”. Relacje R02/R06 są interpretacją mapowania autora, R05/R08–R21 decyzją dydaktyczną uzasadnioną wskazaną regułą i czynnością; R15 wskazuje źródłową podstawę. Nie są automatycznie potwierdzone skutecznością.

| ID r1 | Typ | Końce i kierunek | Warunek / sens / funkcja / proweniencja |
| --- | --- | --- | --- |
| REL-T04-01-02 | R02 | KRY-T04-01 → EO1.3.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T04-01-05-REG | R05 | REG-KRY-T04-01 → KRY-T04-01 | Materiał REG wspiera konkretną czynność KRY-T04-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-01-05-CMP | R05 | CMP-KRY-T04-01 → KRY-T04-01 | Materiał CMP wspiera konkretną czynność KRY-T04-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-01-05-EX | R05 | EX-KRY-T04-01 → KRY-T04-01 | Materiał EX wspiera konkretną czynność KRY-T04-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-01-05-CE | R05 | CE-KRY-T04-01 → KRY-T04-01 | Materiał CE wspiera konkretną czynność KRY-T04-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-01-05-REM | R05 | REM-KRY-T04-01 → KRY-T04-01 | Materiał REM wspiera konkretną czynność KRY-T04-01; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-01-10 | R10 | REG-KRY-T04-01 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T04-01-11 | R11 | CMP-KRY-T04-01 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T04-01-12 | R12 | EX-KRY-T04-01 → REG-KRY-T04-01 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T04-01-13 | R13 | CE-KRY-T04-01 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T04-01-15 | R15 | CL-T04-01 / REG-KRY-T04-01 → C-S02/C-S03 3.3.0 EO1.3.1 s.11 i §1.3 s.12; C-S07 1.3.2 §1.3 s.13; C-S06 System s.29 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T04-01-18 | R18 | REM-KRY-T04-01 → KRY-T04-01 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T04-01-RP06 | R06 | RP-T04-01 → KRY-T04-01 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T04-01-B01-06 | R06 | Z1-T04-01-B01 → KRY-T04-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T04-01-B01-20 | R20 | Z1-T04-01-B01 → FAM-T04-01 | Zapamiętywalny rdzeń to rozróżnienie re dla różnych rodzajów systemów; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T04-01-B01-a-08 | R08 | Z1-T04-01-B01/a → RAT-Z1-T04-01-B01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-B01-a-09 | R09 | RAT-Z1-T04-01-B01-a → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-B01-b-08 | R08 | Z1-T04-01-B01/b → RAT-Z1-T04-01-B01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-B01-b-09 | R09 | RAT-Z1-T04-01-B01-b → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-B01-c-08 | R08 | Z1-T04-01-B01/c → RAT-Z1-T04-01-B01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-B01-c-09 | R09 | RAT-Z1-T04-01-B01-c → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-B01-d-08 | R08 | Z1-T04-01-B01/d → RAT-Z1-T04-01-B01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-B01-d-09 | R09 | RAT-Z1-T04-01-B01-d → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-F01-06 | R06 | Z1-T04-01-F01 → KRY-T04-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T04-01-F01-20 | R20 | Z1-T04-01-F01 → FAM-T04-01 | Zapamiętywalny rdzeń to rozróżnienie re dla różnych rodzajów systemów; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T04-01-F01-19 | R19 | Z1-T04-01-F01 → REM-KRY-T04-01 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T04-01-F01-1-08 | R08 | Z1-T04-01-F01/1 → RAT-Z1-T04-01-F01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-F01-1-09 | R09 | RAT-Z1-T04-01-F01-1 → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-F01-2-08 | R08 | Z1-T04-01-F01/2 → RAT-Z1-T04-01-F01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-F01-2-09 | R09 | RAT-Z1-T04-01-F01-2 → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-F01-3-08 | R08 | Z1-T04-01-F01/3 → RAT-Z1-T04-01-F01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-F01-3-09 | R09 | RAT-Z1-T04-01-F01-3 → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-D01-06 | R06 | Z1-T04-01-D01 → KRY-T04-01 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T04-01-D01-20 | R20 | Z1-T04-01-D01 → FAM-T04-01 | Zapamiętywalny rdzeń to rozróżnienie re dla różnych rodzajów systemów; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T04-01-D01-a-08 | R08 | Z1-T04-01-D01/a → RAT-Z1-T04-01-D01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-D01-a-09 | R09 | RAT-Z1-T04-01-D01-a → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-D01-b-08 | R08 | Z1-T04-01-D01/b → RAT-Z1-T04-01-D01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-D01-b-09 | R09 | RAT-Z1-T04-01-D01-b → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-D01-c-08 | R08 | Z1-T04-01-D01/c → RAT-Z1-T04-01-D01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-D01-c-09 | R09 | RAT-Z1-T04-01-D01-c → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-Z1-T04-01-D01-d-08 | R08 | Z1-T04-01-D01/d → RAT-Z1-T04-01-D01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-01-D01-d-09 | R09 | RAT-Z1-T04-01-D01-d → REG-KRY-T04-01 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-01. |
| REL-T04-02-02 | R02 | KRY-T04-02 → EO1.3.1 | Kryterium operacjonalizuje wyłącznie nazwaną czynność na L1; nie cały zakres sąsiadów. |
| REL-T04-02-05-REG | R05 | REG-KRY-T04-02 → KRY-T04-02 | Materiał REG wspiera konkretną czynność KRY-T04-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-02-05-CMP | R05 | CMP-KRY-T04-02 → KRY-T04-02 | Materiał CMP wspiera konkretną czynność KRY-T04-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-02-05-EX | R05 | EX-KRY-T04-02 → KRY-T04-02 | Materiał EX wspiera konkretną czynność KRY-T04-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-02-05-CE | R05 | CE-KRY-T04-02 → KRY-T04-02 | Materiał CE wspiera konkretną czynność KRY-T04-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-02-05-REM | R05 | REM-KRY-T04-02 → KRY-T04-02 | Materiał REM wspiera konkretną czynność KRY-T04-02; argument zawiera jego objaśnienie/przypadek; podstawa CL tego zakresu. Nie tworzy dowodu ucznia. |
| REL-T04-02-10 | R10 | REG-KRY-T04-02 → sensy PL/EN tego zakresu | Objaśnienie rozwija znaczenie i granice terminów wymienionych w jednostce. |
| REL-T04-02-11 | R11 | CMP-KRY-T04-02 → znaczenia nazwane w porównaniu | Oś i przypadki po obu stronach określono w CMP; brak domyślnego RELATED_TO. |
| REL-T04-02-12 | R12 | EX-KRY-T04-02 → REG-KRY-T04-02 | Przesłanki przykładu spełniają warunek reguły; jest to autorski scenariusz. |
| REL-T04-02-13 | R13 | CE-KRY-T04-02 → uogólnienie nazwane w CE | Przypadek przeczy konkretnemu nadmiernemu uogólnieniu; nie diagnozuje ucznia. |
| REL-T04-02-15 | R15 | CL-T04-02 / REG-KRY-T04-02 → C-S02/C-S03 3.3.0 §1.3 s.12; C-S06 2.2.0 Business/Domain s.33, System/Stakeholder/User s.34; C-S07 1.3.2 §1.3 s.13 | Zakres wsparcia obejmuje sprawdzoną regułę; wniosek o scenariuszu pozostaje interpretacją. |
| REL-T04-02-18 | R18 | REM-KRY-T04-02 → KRY-T04-02 | Korekta usuwa błędne uogólnienie wskazane w objaśnieniu i konkretnych rationale. |
| REL-T04-02-RP06 | R06 | RP-T04-02 → KRY-T04-02 | Odtworzenie oceniane dokładnie według rubryki; samoocena nie jest niezależną oceną. |
| REL-Z1-T04-02-B01-06 | R06 | Z1-T04-02-B01 → KRY-T04-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T04-02-B01-20 | R20 | Z1-T04-02-B01 → FAM-T04-02 | Zapamiętywalny rdzeń to rozróżnienie pięć perspektyw występowania wymagań; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T04-02-B01-1-08 | R08 | Z1-T04-02-B01/1 → RAT-Z1-T04-02-B01-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-B01-1-09 | R09 | RAT-Z1-T04-02-B01-1 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-B01-2-08 | R08 | Z1-T04-02-B01/2 → RAT-Z1-T04-02-B01-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-B01-2-09 | R09 | RAT-Z1-T04-02-B01-2 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-B01-3-08 | R08 | Z1-T04-02-B01/3 → RAT-Z1-T04-02-B01-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-B01-3-09 | R09 | RAT-Z1-T04-02-B01-3 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-B01-4-08 | R08 | Z1-T04-02-B01/4 → RAT-Z1-T04-02-B01-4 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-B01-4-09 | R09 | RAT-Z1-T04-02-B01-4 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-B01-5-08 | R08 | Z1-T04-02-B01/5 → RAT-Z1-T04-02-B01-5 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-B01-5-09 | R09 | RAT-Z1-T04-02-B01-5 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-F01-06 | R06 | Z1-T04-02-F01 → KRY-T04-02 | Wymagana czynność: odpowiedzieć według rubryki; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T04-02-F01-20 | R20 | Z1-T04-02-F01 → FAM-T04-02 | Zapamiętywalny rdzeń to rozróżnienie pięć perspektyw występowania wymagań; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T04-02-F01-19 | R19 | Z1-T04-02-F01 → REM-KRY-T04-02 | Kontroluje tę samą czynność po korekcie; zmiana opisana w zadaniu, bez retencji. |
| REL-Z1-T04-02-F01-rubryka-1-08 | R08 | Z1-T04-02-F01/rubryka-1 → RAT-Z1-T04-02-F01-rubryka-1 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-F01-rubryka-1-09 | R09 | RAT-Z1-T04-02-F01-rubryka-1 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-F01-rubryka-2-08 | R08 | Z1-T04-02-F01/rubryka-2 → RAT-Z1-T04-02-F01-rubryka-2 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-F01-rubryka-2-09 | R09 | RAT-Z1-T04-02-F01-rubryka-2 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-F01-rubryka-3-08 | R08 | Z1-T04-02-F01/rubryka-3 → RAT-Z1-T04-02-F01-rubryka-3 | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-F01-rubryka-3-09 | R09 | RAT-Z1-T04-02-F01-rubryka-3 → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-D01-06 | R06 | Z1-T04-02-D01 → KRY-T04-02 | Wymagana czynność: rozstrzygnąć każdą decyzję według klucza; zakres primary ograniczony do treści tych decyzji; źródło i ograniczenia w metadanych zadania. |
| REL-Z1-T04-02-D01-20 | R20 | Z1-T04-02-D01 → FAM-T04-02 | Zapamiętywalny rdzeń to rozróżnienie pięć perspektyw występowania wymagań; grupowanie konserwatywne, bez obietnicy niezależnych rodzin. |
| REL-Z1-T04-02-D01-a-08 | R08 | Z1-T04-02-D01/a → RAT-Z1-T04-02-D01-a | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-D01-a-09 | R09 | RAT-Z1-T04-02-D01-a → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-D01-b-08 | R08 | Z1-T04-02-D01/b → RAT-Z1-T04-02-D01-b | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-D01-b-09 | R09 | RAT-Z1-T04-02-D01-b → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-D01-c-08 | R08 | Z1-T04-02-D01/c → RAT-Z1-T04-02-D01-c | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-D01-c-09 | R09 | RAT-Z1-T04-02-D01-c → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |
| REL-Z1-T04-02-D01-d-08 | R08 | Z1-T04-02-D01/d → RAT-Z1-T04-02-D01-d | Lokalna przesłanka, reguła i wynik są w rationale opcji/wiersza albo wymiarze rubryki tego zadania. |
| REL-Z1-T04-02-D01-d-09 | R09 | RAT-Z1-T04-02-D01-d → REG-KRY-T04-02 | Wskazana reguła rozstrzyga tę decyzję w podanych warunkach; R15 przez CL-T04-02. |

Nie wymusza się nowego R14. Gdy brak terminu uniemożliwia konkretną czynność, proponowany krótki powrót do definicji można pominąć po wykazaniu znajomości. Nie trzeba ukończyć całego poprzedniego T. R03: oficjalne terminy PL/EN w tabelach/nocie oznaczają wskazany sens; autorskie aliasy jawnie oznaczono. Nie tworzono przekładów zadań EN (brak R22) ani R25 z projektu zadania. Kontekst scenariusza, np. logistyka czy wypożyczenia, ma tylko R07 MENTIONS, bez pomiaru biegłości domenowej.

**R26 — kontrakt instancji przy rzeczywistym odejściu:** Navigation Context wskazuje dokładny ID/r1 źródłowego B/F/D/RP, opcję/wiersz lub część rubryki, oddaną odpowiedź, wynik, stan ujawnienia, miejsce sesji i kotwicę. Powrót odtwarza ten sam stan; FU ma własne wykonanie. Nie ma tutaj fikcyjnego zdarzenia odejścia. Wycofany item pozostaje oznaczoną historią.

| Fragment | Zakres istotnego kontaktu | Ekspozycja / ograniczenie |
| --- | --- | --- |
| REG/CMP/EX/CE/REM-KRY-T04-01 | KRY-T04-01 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| REG/CMP/EX/CE/REM-KRY-T04-02 | KRY-T04-02 | Reguła tego zakresu, bez resetu innych kryteriów lub całego EO. |
| Z1-T04-01-B01 | KRY-T04-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T04-01-F01 | KRY-T04-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T04-01-D01 | KRY-T04-01 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T04-02-B01 | KRY-T04-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T04-02-F01 | KRY-T04-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |
| Z1-T04-02-D01 | KRY-T04-02 | Stem ujawnia własny item; klucz/rationale także rozwiązanie; porównanie R21 określa ryzyko bliskiej rodziny. |

### Źródła, atrybucja i prawa

Kontrola autora 2.11.2026: pobrano sześć PDF; odczytano faktycznie użyte fragmenty wskazane w claimach. Syllabus EN ma 49, PL 52 strony; lokalizacje to fizyczne strony PDF od 1. Regulamin przeczytano w całości. Katalog potwierdził wersje EN/PL. Handbook przeczytano w §§1.1–1.6 i 2.1–2.2.9, s.10–29; nie audytowano całego Handbook. Glossary odczytano hasłowo; audyt foundational osobno w manifeście. Lista URL nie zastępuje kontroli treści.

Podstawa: IREB e.V. i autorzy Syllabus — Stan Bühne, Martin Glinz, Hans van Loenhoud, Stefan Staal; Glossary — Martin Glinz, terminy PL Monika Petri-Starego i Karolina Zmitrowicz; Handbook — Martin Glinz, Hans van Loenhoud, Stefan Staal, Stan Bühne. Tłumaczenie sylabusa PL: zespół SJSI wskazany na s.2 źródła. Prawa do źródeł pozostają przy ich właścicielach. Opracowanie projektu wspomagane AI; bez statusu oficjalnych pytań, akredytacji lub rekomendacji IREB.

Odczytano warunki na s.2 Syllabus EN/PL, Glossary EN/PL i Handbook. Użycie obecne: autorskie objaśnienia, oryginalne scenariusze, kontrolowane terminy i lokalizowane odsyłacze dla wewnętrznego review. Nie przeniesiono rysunków, tabel źródłowych ani pytań sample/Cockpit. Użycie istniejącego C wskazano jako reuse własnego materiału projektu. Nie ustalono kanału przyszłej publicznej/komercyjnej publikacji; przed nim trzeba ocenić konkretne wydanie i zakres zapożyczeń. Dostępność PDF nie oznacza ogólnej licencji reprodukcyjnej.
| ID zachowane z C01 | Źródło / wersja |
| --- | --- |
| C-S01 | [Katalog IREB, kontrola 2.11.2026](https://cpre.ireb.org/en/downloads-and-resources/downloads) |
| C-S02 | [IREB e.V., Syllabus EN 3.3.0, 1.04.2026](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf) |
| C-S03 | [IREB e.V., Syllabus PL 3.3.0, 1.04.2026](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/68b8837862-1787039957/cpre_foundationlevel_syllabus_pl_v.3.3.pdf) |
| C-S04 | [IREB e.V., Examination Regulations EN 5.6.2, 5.02.2024](https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf) |
| C-S05 | [Martin Glinz / IREB e.V., Glossary EN 2.2.0, 1.10.2025](https://hub.ireb.org/media/pages/resources/cpre-glossary/bb302c52fe-1787039949/ireb_cpre_glossary_en_2.2.pdf) |
| C-S06 | [Martin Glinz / IREB e.V., Glossary PL 2.2.0, 1.10.2025; terminy PL: Monika Petri-Starego i Karolina Zmitrowicz](https://hub.ireb.org/media/pages/resources/cpre-glossary/d804142017-1787039952/ireb_cpre_glossary_pl_2.2.pdf) |
| C-S07 | [IREB e.V., Handbook EN 1.3.2, historia 23.07.2026; oficjalna publikacja w publicznej kopii iSQI](https://isqi.org/media/65/0a/43/1789029072/cpre_foundationlevel_handbook_en_v1.3.2.pdf) |

Historia: v0.1 — pierwsze ukończone autorskie wydanie tego tematu Z1. Nie zmieniono B, C, M ani START. Ocena QG i C-AC oraz rzeczywiste ograniczenia są w pliku QA_and_Handoff.

## Foundational — lokalny odczyt oznaczeń

Glossary PL 2.2.0 s.8 objaśnia, że pogrubione hasła są key terms FL. Sprawdzono niżej nagłówki i fonty PDF (PPMori-Bold). Definicje EN odczytano w wydaniu PL. To lokalny inwentarz Z1; nie audyt wszystkich haseł całego FL i nie dodatkowe oficjalne EO.

| Hasło / strona PDF C-S06 | Status / pokrycie |
| --- | --- |
| System / 29 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Business requirement / 33 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Domain requirement / 33 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| Stakeholder requirement / 34 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| User requirement / 34 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |
| System requirement / 34 | Pogrubione hasło potwierdzone; sens objaśniony w temacie lub wskazanym reuse. Obserwacje wykonania tylko w granicy konkretnych zadań. |

Shared understanding jest terminem EU2 w Syllabus; nie znaleziono osobnego hasła o tej nazwie w Glossary PL/EN. Nie dopisano fikcyjnej definicji słownikowej. Verification w Glossary PL s.32 nie jest pogrubione; służy tutaj kontrastowi z validation. System context w PL s.17 nie jest pogrubione, ale jego sens odpowiada kontekstowi RE i jest wymaganym elementem objaśnienia.
