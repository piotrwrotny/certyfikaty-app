# B02 — Functional Traceability and Acceptance Matrix v0.2

**Projekt:** IREB CPRE Foundation Level Learning System. **Faza B. Data:** 1.11.2026. **Status: FOR REVIEW.** Definicje są w B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md; próby kontraktu w B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md; odbiór i decyzje w B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md.

> **Rewizja v0.2 — korekty po R04:** zachowano reguły i treść v0.1; doprecyzowano flagę przeglądu, neutralny słownik językowy i granice G2/G3 oraz nazwy wierszy K. B01–B04 tworzą jedną rewizję. Wynik ponownej kontroli: `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md`. Wprowadzenie poprawek nie jest akceptacją G1.


## B02-01 — Zasady czytania i pełny ślad F13

Macierz audytuje **FR-001–FR-038 bez wyłączeń**, wobec S-FTC F13 i szczegółowej akceptacji S-BP F09. Używa istniejących UC i FD. Nie zmienia priorytetów: FR-030 jest fakultatywnym Validate, globalne FR-031 jest Level 2; pełny timed mock jest Level 2, temat bez limitu Level 1. Zdefiniowanie informacji nie oznacza dostępności funkcji ani treści.

Każda karta dziedziczy: wersję i zakres K0, proweniencję twierdzeń, kontrolę praw i języka oraz faktyczny review z B01-04/11. **M** oznacza obowiązek; **W** — informację wymaganą tylko w opisanej gałęzi; **O** — opcjonalną. R01–R26, QG, U-* i LUKA-* mają znaczenie dokładnie z B01. Karta określa minimum wyjaśnienia, nie liczbę ekranów. Wszystkie kryteria AC dotyczą **sprawdzalności semantyki**; nie są wynikami testów aplikacji.

**Stałe wejście C:** po zatwierdzeniu G1 — B01, ta macierz, S-PED, S-DR i normy wskazane w B01. W polu B/C każda karta określa odpowiedzialność B i konkretny rezultat C. Fakty odpowiedzi, czasu i nawigacji dostarcza warstwa aktywności; C nie może ich stworzyć jako danych korpusu.

| Część F13 | Realizacja w pakiecie B | Kontrola |
|---|---|---|
| F13.1 Granice odpowiedzialności | B01-01/03/14, B04-05 | Treść i aktywność rozdzielone; brak implementacji |
| F13.2 Wszystkie role semantyczne | B01-02/03 | Każda ma znaczenie, minimum, granicę i właściciela |
| F13.3 K0–K7, P i E | B01-06/07/10/11 | Obowiązki dziedziczone przez każdą kartę |
| F13.4 Macierz 38 FR | B02-02/03 | AC-001–AC-038 i indywidualne karty |
| F13.5 Opcja → korekta | B01 R08–R19, B03-A/P/K | Rationale lokalne, diagnoza warunkowa, kontrola adekwatna |
| F13.6 Koncept → podstawa → powrót | B01 R14/R26, B03-A i B03-E | Warunkowy prerequisite, zachowane pytanie i wynik |
| F13.7 Braki i kompletność | B01-12/13, wszystkie karty FR z polem Brak | Brak nie jest dopowiadany ani przypisany uczniowi |
| F13.8 Trzy doświadczenia | B03-A, B03-P, B03-K | Zachowane EO, formaty, wyniki i ograniczenia ilustracji |

## B02-02 — Indeks wszystkich wymagań

Pakiety w nawiasie uruchamiają się warunkowo; szczegółowy warunek jest w karcie. Pokrycie oznacza zdefiniowanie kontraktu, nie gotowość korpusu.

| FR | Pakiety | Obszar odpowiedzialności | Kryterium |
|---|---|---|---|
| FR-001 | K0, (K6) | Zakres i profil zasad | AC-001 |
| FR-002 | K0; wejście K1 lub K2; (K5,K7 sond) | Wejście i ograniczona diagnoza | AC-002 |
| FR-003 | K0,K3,K7, (K1,K4,K5) | Przesłanki rekomendacji | AC-003 |
| FR-004 | K0,K7, (K1,K2) | Zakres/składowe a dowody | AC-004 |
| FR-005 | K0,K1, (K3) | Objaśnienie | AC-005 |
| FR-006 | K0,K2,K7 | Zadanie i sposób oceny | AC-006 |
| FR-007 | K0,K2,K5,K7 | Format A | AC-007 |
| FR-008 | K0,K2,K5,K7 | Format P | AC-008 |
| FR-009 | K0,K2,K5,K7 | Format K | AC-009 |
| FR-010 | K2,K5,K7 | Granica próby | AC-010 |
| FR-011 | K2,K7, (K1,K3) | Warstwy rationale | AC-011 |
| FR-012 | K2,K3,K7, (K1) | Opcja → rozróżnienie | AC-012 |
| FR-013 | K3,K7 | Powrót i kontekst | AC-013 |
| FR-014 | K1,K3,K7 | Comparison/prerequisite | AC-014 |
| FR-015 | K4,K7, (K2) | Hipoteza i sonda | AC-015 |
| FR-016 | K1,K2,K4,K5,K7 | Naprawa i wyjście | AC-016 |
| FR-017 | K0,K2,K5,K7 | Znaczący wariant | AC-017 |
| FR-018 | K5,K7, (K1,K2,K3) | Pomoc a znajomość | AC-018 |
| FR-019 | K2,K5,K7 | Rezerwa osoby | AC-019 |
| FR-020 | K0,K2,K5,K7 | Dwa odstępy czasu | AC-020 |
| FR-021 | K0,K7, (K1,K3,K4,K5) | Równowaga potrzeb | AC-021 |
| FR-022 | K0,K7, (K2,K5) | Dowód kryterium | AC-022 |
| FR-023 | K0,K7 | Mianownik i profil | AC-023 |
| FR-024 | K0,K6,K7, (K5) | Ograniczona gotowość | AC-024 |
| FR-025 | K0,K2,K5,K6,K7 | Dopuszczenie formy | AC-025 |
| FR-026 | K2,K5,K6,K7 | Widoczność w Sprawdzeniu | AC-026 |
| FR-027 | K5,K6,K7 | Przerwa/konwersja | AC-027 |
| FR-028 | K2,K5,K6,K7, (K4) | Wynik i review | AC-028 |
| FR-029 | K2,K7 | Kompetencja formatu | AC-029 |
| FR-030 | K7, (K2,K5) | Opcjonalna pewność | AC-030 |
| FR-031 | K0,K1,K3,K5,K7 | Słownik i widoczność | AC-031 |
| FR-032 | K0,K7, (K2,K5,K6) | Ciągłość sesji | AC-032 |
| FR-033 | K0–K7 według użycia | Typ i skutek braku | AC-033 |
| FR-034 | K0–K6 według pakietu | Dopuszczenie publikacji | AC-034 |
| FR-035 | K2,K3,K7, (K0,K5,K6) | Wpływ korekty | AC-035 |
| FR-036 | K0–K7 w reprezentacji | Równoważność i dostęp | AC-036 |
| FR-037 | K0,K1,K3, (K2,K7) | Znaczenie PL/EN | AC-037 |
| FR-038 | K0,K2,K5,K6,K7 | Manifest wydania | AC-038 |

## B02-03 — Karty kontraktowe i akceptacja

### FR-001 — Orientacja i warunki przygotowania

- **Ślad:** S-FTC F13.4 / S-BP F09; UC-01, FD-02/04/18.
- **M / role:** K0, wersje norm, zakres wydania, język, instrukcja Nauka/Sprawdzenie i examination profile. **W/O:** profil czasu dla mocku; termin egzaminu opcjonalny.
- **Relacje / minimum wyjaśnienia:** R01/R15; profil → właściwa wersja norm. Krótka reguła i ograniczenie zgodności konkretnej rezerwacji.
- **P/Q / dowód:** N-SYL-EN/N-REG i data kontroli; wybór języka nie przyznaje uprawnienia do wydłużenia. Orientacja i deklaracje nie są EVIDENCE_FOR EO.
- **Brak:** LUKA-08/11; można rozpocząć zatwierdzoną naukę bez potwierdzonego profilu egzaminu, z jawnym ograniczeniem.
- **B/C:** B definiuje profil, zakres i status potwierdzenia. C dostarcza sprawdzoną notę orientacyjną, warunki oraz komunikat o wycinku.
- **AC-001:** brak daty nie blokuje wejścia; EN bez wybranego wydłużenia nie staje się profilem wydłużonym; pilot nie jest opisany jako pełne FL.

### FR-002 — Krótki wybór punktu startu

- **Ślad:** F13.4/F09; UC-01/03, FD-03.
- **M / role:** zatwierdzone wejście w K1 albo K2, kryteria K0 i warunki interpretacji. **W:** sondy K2/K5/K7 tylko dla gałęzi diagnozy. **O:** staż/deklaracja doświadczenia.
- **Relacje / minimum wyjaśnienia:** R06/R25 do konkretnych kryteriów, R05 dla pierwszej jednostki; jedno lokalne wyjaśnienie wyniku sondy.
- **P/Q / dowód:** review sond i mapowania; brak reprezentatywności całego programu jawny. Staż nie nadaje dowodu wiedzy, nieweryfikowane kryteria nie zmieniają stanu.
- **Brak:** LUKA-01/06; pominięta lub niedostępna diagnoza kieruje do działającego objaśnienia, bez etykiety porażki.
- **B/C:** B rozdziela deklarację, prior knowledge i obserwację. C dostarcza wejście oraz opcjonalne sondy treningowe bez niejawnego zużycia rezerwy.
- **AC-002:** po deklaracji wieloletniej praktyki żaden EO nie jest zaliczony; bez sond istnieje poprawny start od materiału; trzy trafienia dotyczą tylko mierzonych kryteriów.

### FR-003 — Jeden następny krok z wyjaśnieniem

- **Ślad:** F13.4/F09; UC-10/16/18, FD-01/13/21.
- **M / role:** cel K0, dostępna aktywność, stan potrzeby i przesłanki K7, rodzaj potrzeby: nowy zakres/naprawa/powrót. **W:** zweryfikowany prerequisite K3, K4 lub nowość K5 w odpowiedniej rekomendacji. **O:** preferencja czasu.
- **Relacje / minimum wyjaśnienia:** R05/R06 i ewentualnie R14/R19; jedno sprawdzalne zdanie „dlaczego teraz” z odwołaniem do przesłanki.
- **P/Q / dowód:** dostępność zgodna z B01-12; polityka doboru oznaczona projektowo. Rekomendacja/wybór nie tworzą obserwacji umiejętności.
- **Brak:** LUKA-01/06/07; następny dostępny cel z planu, z jawną niepełnością danych.
- **B/C:** B definiuje rodzaje przesłanek i braków. C dostarcza cele aktywności, ich warunki wejścia/wyjścia oraz krótkie uzasadnienia oparte na faktach.
- **AC-003:** propozycja rewizji wskazuje konkretne kryterium i datę/powód; wybór innego tematu zachowuje wcześniejszą potrzebę bez blokady.

### FR-004 — Pokrycie celów i składowych

- **Ślad:** F13.4/F09; UC-01/10/18, FD-04.
- **M / role:** K0 i K7; EU, EO, kryterium, obowiązek foundational, zakres wymagany/objaśniający/rozszerzający, status treści i dowodów. **W:** pełny inwentarz dla pełnego FL; lokalny dla jawnego pilota.
- **Relacje / minimum wyjaśnienia:** R01/02/05/06/07/25; nazwać konkretną część sprawdzoną i pozostałą lukę. MENTIONS nie dostaje pokrycia pomiarowego.
- **P/Q / dowód:** lokalizacja normy i review podziału EO; rozdzielone mianowniki treści, dostępnego pomiaru i obserwacji osoby.
- **Brak:** LUKA-01/02/06; „pokrycie niepotwierdzone” lub brak materiału, bez czerwonej diagnozy wiedzy.
- **B/C:** B definiuje podział i rolę mapowań. C dostarcza audyt składowych, terminów i argument każdego przypisania.
- **AC-004:** trafne A o kontekście nie zamyka EO2.2.2 ani L3 EO4.1.1; podstawowy termin bez własnego EO nadal występuje jako obowiązek zakresu.

### FR-005 — Krótkie objaśnienie z rozwinięciem

- **Ślad:** F13.4/F09; UC-02, FD-05/25.
- **M / role:** K0/K1; Concept, Definition/odsyłacz, Explanatory Content, Example, Learning Unit. **W:** kontrast lub counterexample, jeśli potrzebny; **O:** dalsze rozwinięcie.
- **Relacje / minimum wyjaśnienia:** R03/04/05/10/12/15; rdzeń: znaczenie, warunek, przykład; rozwinięcie zachowuje tę samą regułę.
- **P/Q / dowód:** definicja źródłowa odróżniona od parafrazy; dopuszczony fragment U-READ. Wyświetlenie to ekspozycja, bez samodzielnego wykazania.
- **Brak:** LUKA-01/02; udostępnić pewny fragment z ograniczeniem; nie obiecywać kompletnej jednostki bez K1.
- **B/C:** B definiuje role i spójność warstw. C pisze rdzeń, przykład i ewentualne rozwinięcie z dokładną podstawą oraz zakresem ujawnianych kryteriów.
- **AC-005:** pominięcie rozwinięcia nie blokuje zadania; sama lektura nie tworzy poprawnej próby; autorski PL tekst nie jest oznaczony jako oficjalna definicja.

### FR-006 — Retrieval i zastosowanie zgodne z EO

- **Ślad:** F13.4/F09; UC-02/03/07, FD-04/12/14.
- **M / role:** kryterium i poziom K0, Task K2, dopuszczalne odpowiedzi, źródło oceny K7. **W:** rubryka i odpowiedzi graniczne dla otwartych; **O:** swobodny komentarz.
- **Relacje / minimum wyjaśnienia:** R06/25/15; feedback wskazuje regułę i warunek, nie wyłącznie podobieństwo słów.
- **P/Q / dowód:** review zgodności czynności i rubryki z EO; samoocena/klucz/ekspert jawnie różne. Kryteria tworzenia L3 nie są wykazane przez definicyjne A.
- **Brak:** LUKA-02/06; otwarta wypowiedź bez gotowej rubryki może być refleksją bez zaliczenia, bez automatycznie przyznanych punktów.
- **B/C:** B definiuje adekwatny zakres obserwacji. C dostarcza zadanie, rubrykę, przykłady graniczne i uzasadnienie poziomu.
- **AC-006:** samooceniona poprawna wypowiedź pozostaje samooceną; dla kryterium L1 nie wymaga się ponadprogramowego projektu L3; brak rubryki nie daje niezależnie potwierdzonego wyniku.

### FR-007 — Pytanie A

- **Ślad:** F13.4/F09; UC-03/08, FD-17; B03-A.
- **M / role:** pełne K2, 4–5 opcji, pojedynczy klucz wobec polecenia, polaryzacja i waga; K5/K7. **W:** interpretacja negatywnego polecenia, jeśli występuje; **O:** misconception.
- **Relacje / minimum wyjaśnienia:** R06/08/09/15/20/25; wynik pytania i rationale każdej opcji, dostępne po właściwej granicy zatwierdzenia.
- **P/Q / dowód:** N-REG §2, QG; jedna odpowiedź nie mierzy automatycznie pojęć wszystkich opcji.
- **Brak:** LUKA-04/08; blokada punktowanego użycia, bez zgadywania klucza.
- **B/C:** B określa semantykę wyboru i scoringu. C dostarcza jednoznaczny klucz, pełne alternatywy i review źródłowe.
- **AC-007:** pojedynczy trafny wybór przy w=3 daje 3; błędny, pusty lub nadmiarowy zapis daje 0. Przy poleceniu o jedynej błędnej tezie nie utożsamiać klucza z tezą prawdziwą.

### FR-008 — Pytanie P i częściowe punkty

- **Ślad:** F13.4/F09; UC-11/08, FD-17; B03-P.
- **M / role:** pełne K2, jawne k≥2, waga, klucz wszystkich opcji, zestaw zaznaczeń i wynik K7/K5. **W:** polaryzacja/„najlepsze” zgodnie z tekstem; **O:** sonda przyczyny nadmiaru.
- **Relacje / minimum wyjaśnienia:** R06/08/09/15/25; wyjaśnienie zera formalnego, częściowych punktów i każdej decyzji, również pominiętej poprawnej.
- **P/Q / dowód:** N-REG §2; decyzje składowe zachowane, ale nie liczone jak niezależne próby EO.
- **Brak:** LUKA-04; brak k lub dowolnego rationale blokuje pełne punktowane użycie.
- **B/C:** B rozdziela punktację i sygnały diagnostyczne. C dostarcza klucz, instrukcję k, rationale i przypadki nadmiaru/niepełnego wyboru.
- **AC-008:** w=3,k=2, jeden trafny i jeden błędny wybór →1,5; trzy wybory →0; pojedynczy trafny wybór nadal →1,5. Niewybrany dystraktor nie daje punktu.

### FR-009 — Pytanie K i decyzje stwierdzeń

- **Ślad:** F13.4/F09; UC-11/08, FD-17/25; B03-K.
- **M / role:** K2, wszystkie m stwierdzeń, sens pary wartości, klucz/rationale każdego, waga i wspólny kontekst; K5/K7. **W:** lokalne kryterium pomocnicze oznaczone poza oficjalnym pokryciem.
- **Relacje / minimum wyjaśnienia:** R06/08/09/15/25 na poziomie wiersza; wspólne objaśnienie nie zastępuje lokalnych rozstrzygnięć.
- **P/Q / dowód:** N-REG §2; wiersze to zależne decyzje jednego zadania, nie cztery niezależne obserwacje całej kompetencji.
- **Brak:** LUKA-04/10; brak jednego klucza/rationale wstrzymuje cały pakiet. Nie usuwać wiersza bez rewizji m i zakresu.
- **B/C:** B definiuje brak/obie wartości/niepoprawne jako różne stany. C dostarcza rozstrzygalne tezy i pełną mapę ról kryteriów.
- **AC-009:** w=2,m=4, trzy poprawne i blank →1,5; blank nie jest Fałsz; zmiana m wymaga nowej podstawy punktowania.

### FR-010 — Zatwierdzenie i historia prób

- **Ślad:** F13.4/F09; UC-03/08/13, FD-12/24.
- **M / role:** wersja Task/K2, granica zatwierdzenia, oddane odpowiedzi, scoring, moment ujawnienia i K5/K7. **W:** finalizacja całej formy w Sprawdzeniu, korekta klucza FR-035; **O:** komentarz ucznia.
- **Relacje / minimum wyjaśnienia:** próba wskazuje użyte wersje; R25 odnosi wynik do kryterium. Wyjaśnienie różnicy odpowiedzi oddanej i późniejszego review.
- **P/Q / dowód:** stabilna podstawa oceny i historia zdarzeń. Kliknięcia przed zatwierdzeniem nie są nowymi próbami.
- **Brak:** LUKA-07; przy nierozdzielonej historii nie nazywać końcowej poprawki pierwotną samodzielną odpowiedzią.
- **B/C:** B definiuje znaczenie próby i przeliczenia. C dostarcza stabilne rewizje pytań, kluczy i feedbacku oraz neutralną instrukcję zatwierdzenia.
- **AC-010:** poprawka po kluczu nie zmienia pierwszego błędu; w Sprawdzeniu odpowiedzi pozostają zmienne do końca całości i nie wywołują feedbacku.

### FR-011 — Warstwowy feedback

- **Ślad:** F13.4/F09; UC-04/09/11/12, FD-05.
- **M / role:** pełne K2 i oddane decyzje K7. **W:** materiał/link K1/K3, gdy potrzebny; **O:** rozwinięcie pozostałych rationale przez ucznia.
- **Relacje / minimum wyjaśnienia:** R08/09/10; wynik → reguła → wybrany błąd/pominięta poprawna decyzja → wszystkie rationale na żądanie.
- **P/Q / dowód:** QG-03/05; zgodność rdzenia i rozwinięcia. Ujawnienie feedbacku jest nowym kontaktem dla późniejszych prób, bez zmiany historycznych warunków odpowiedzi.
- **Brak:** LUKA-04; brak pełnego wymaganego explanation blokuje nową publikację; incydent istniejący wymaga FR-035, bez generowania braków.
- **B/C:** B definiuje warstwy i granicę widoczności. C dostarcza krótki rdzeń i pełne rationale wszystkich opcji/stwierdzeń.
- **AC-011:** przy P b,c zamiast b,d feedback obejmuje c i d oraz 1/2; przy trafnym A nie wymaga się przeczytania wszystkich uzasadnień; aktywne Sprawdzenie nie ujawnia żadnej warstwy.

### FR-012 — Od opcji do właściwego rozróżnienia

- **Ślad:** F13.4/5, F09; UC-04/05/14, FD-06/08.
- **M / role:** opcja i jej lokalne rationale K2; uzasadnione powiązanie reguły K3; K7. **W:** osobny Concept/comparison K1 tylko, gdy potrzebny; **O:** dalszy kontekst.
- **Relacje / minimum wyjaśnienia:** R08→R09 oraz R10/R11, jeśli trafne; podać, który warunek wyjaśnia konkretną opcję.
- **P/Q / dowód:** review nie tylko końców, ale instancji powiązania. Kliknięcie jest eksploracją/ekspozycją, nie diagnozą ani nowym wykonaniem.
- **Brak:** LUKA-03; samowystarczalne rationale działa bez dodatkowego linku; nie wyświetlać niepewnego comparison jako rozstrzygnięcia.
- **B/C:** B definiuje lokalność i współdzielenie. C uzasadnia opcja–reguła–fragment, bez osobnego Concept dla każdego dystraktora.
- **AC-012:** trzy opcje mogą używać jednego comparison z trzema lokalnymi wiązaniami; opcja nieadekwatna w tym scenariuszu nie staje się uniwersalnie fałszywa.

### FR-013 — Odwracalna eksploracja i powrót

- **Ślad:** F13.4/6, F06/F09; UC-14/13, FD-07.
- **M / role:** Navigation Context K7: Question/rewizja, opcja, odpowiedź, wynik, stan ujawnienia, cel i ścieżka odejścia, kotwica/miejsce kontynuacji. **W:** status wycofania źródłowej treści; **O:** pełna historia wizualna.
- **Relacje / minimum wyjaśnienia:** R26, plus rzeczywiście otwierane K3; krótko określić cel gałęzi i punkt powrotu, bez nowej domenowej tezy.
- **P/Q / dowód:** wersje i dostępność odwiedzonych treści sprawdzone. Follow-up ma własną próbę, nawigacja nie daje kredytu wiedzy.
- **Brak:** LUKA-07/09; zachować znane odpowiedzi i źródło; nie rekonstruować fikcyjnego stanu ani nowej sesji losowego tematu.
- **B/C:** B definiuje znaczenie kotwicy. C dostarcza adresowalne, zrozumiałe poza lekcją fragmenty i tytuły bez przecieku.
- **AC-013:** pytanie→comparison→podstawa→powrót zachowuje tę samą odpowiedź i score; wycofany item wraca wyłącznie jako oznaczona historia z bezpieczną kontynuacją.

### FR-014 — Porównanie i potrzebny prerequisite

- **Ślad:** F13.4/6, F09; UC-05/06/14, FD-06/19/20.
- **M / role:** K1/K3, cel kontrastu, warunki użycia, scope K0 i ekspozycja K7. **W:** dowód konieczności R14 tylko dla proponowanej podstawy; **O:** graf.
- **Relacje / minimum wyjaśnienia:** R11 z wymiarem i przypadkami obu stron; R14 z konkretnym działaniem, sygnałem braku i zakresem. Jedno potrzebne rozróżnienie/podstawa w kroku.
- **P/Q / dowód:** review sensu i kierunku; autorska zależność nie udaje normy ani potwierdzonej skuteczności. Lektura nie zalicza obu pojęć.
- **Brak:** LUKA-03; brak/cykl prerequisite nie tworzy obowiązkowej blokady; pozostać przy pewnym rationale lub lekturze.
- **B/C:** B definiuje warunkowość i kontrolę cykli. C dostarcza uzasadnione osie, przykłady i podstawę potrzebną do wskazanego działania.
- **AC-014:** brak review R14 wyklucza wymuszenie lekcji; uczeń może pominąć znaną podstawę i kontynuować bez utraty dowodów; porównanie bez osi nie przechodzi odbioru.

### FR-015 — Hipoteza pomyłki i jej sprawdzenie

- **Ślad:** F13.4/5, F09; UC-04/05, FD-09.
- **M / role:** dla gałęzi diagnozy K4: hipoteza, poprawna reguła, alternatywy, confirmatory activity, przewidywania i metoda oceny; obserwacja K7. **W:** pełne K2, gdy sonda jest ocenianym zadaniem, także otwartym; **O:** deklarowana pewność.
- **Relacje / minimum wyjaśnienia:** R16/R17/R18; ostrożne „możliwe, że…” i co pozwoli to rozróżnić.
- **P/Q / dowód:** źródło poprawnej reguły odrębne od dowodu diagnostycznego; timing sondy zachowany. Sonda po korekcie nie dowodzi przyczyny pierwszego błędu.
- **Brak:** LUKA-02/06; zwykła korekta bez person-specific diagnozy; wynik niepasujący do hipotezy osłabia ją.
- **B/C:** B definiuje stany i ograniczenia. C dostarcza falsyfikowalną regułę, alternatywy i sondę odróżniającą przyczyny.
- **AC-015:** pojedynczy dystraktor nie daje etykiety potwierdzonej misconception; blank nie diagnozuje przekonania; brak sondy blokuje konkretną diagnozę, ale nie feedback.

### FR-016 — Krótka remediacja bez nieskończonej pętli

- **Ślad:** F13.4/5/6, F09; UC-04/05/07, FD-10.
- **M / role:** K4, celowany materiał K1, pełny follow-up K2/K5, kryterium wyjścia i historia gałęzi K7. **W:** prerequisite/sonda tylko z uzasadnieniem; **O:** dodatkowa lektura.
- **Relacje / minimum wyjaśnienia:** R18/R19/R06; jedna poprawna reguła, potrzebny przykład i kontrola dokładnie naprawianego rozróżnienia.
- **P/Q / dowód:** review zgodności follow-up z kryterium; natychmiastowy sukces to wynik po korekcie, bez retencji.
- **Brak:** LUKA-05; korekta bez obietnicy sprawdzonej poprawy, dostępne wyjście i późniejszy powrót.
- **B/C:** B określa zakres gałęzi, liczenie follow-up i warunki wyjścia. C dostarcza korektę, kontrolę, alternatywne wsparcie i komunikat odłożenia.
- **AC-016:** po drugim nieudanym follow-up tej samej gałęzi powstaje propozycja innego wsparcia/przerwy, bez automatycznego trzeciego podobnego zadania; początkowy błąd nie wchodzi do tego licznika.

### FR-017 — Nowy wariant do weryfikacji

- **Ślad:** F13.4/6, F09; UC-07/15, FD-11.
- **M / role:** K0/K2/K5/K7, kryterium, rodzina, porównanie zmian i historia sprzed ekspozycji. **W:** review nowej rodziny, jeśli obiecana nowa niezależna realizacja; **O:** empiryczna trudność.
- **Relacje / minimum wyjaśnienia:** R06/R19/R20/R21; to samo kryterium, określony istotny warunek lub reprezentacja; uzasadnienie poprawnej decyzji nowego zadania.
- **P/Q / dowód:** ekspert ocenia różnicę poznawczą i poziom. Przewidywana trudność nie jest kalibracją; sensowny follow-up nie musi być niezależną rezerwą.
- **Brak:** LUKA-05; znana praktyka bez deklaracji transferu; bez generacji wariantu w trakcie nauki.
- **B/C:** B definiuje rozróżnienie tożsamości, bliskości i nowego kontekstu. C dostarcza recenzowany wariant oraz argument jego odmienności.
- **AC-017:** zmiana nazw/kolejności/PL→EN nie tworzy nowej rodziny; nowy wariant L1 nie wymaga L3; brak review różnicy ogranicza dowód do praktyki.

### FR-018 — Pomoc i znajomość a status dowodu

- **Ślad:** F13.4/3, F09/F10; UC-13/15, FD-12.
- **M / role:** K5/K7, moment i zakres pomocy, wcześniejszy item/rodzina, rozwiązanie i źródło informacji. **W:** zakres ujawnienia K1/K2/K3; **O:** dobrowolna deklaracja spoza systemu.
- **Relacje / minimum wyjaśnienia:** R25 z warunkami, R20–22 dla znajomości; krótki komunikat oddzielający punkty od niezależności.
- **P/Q / dowód:** C oznacza treści pomagające rozstrzygnąć zadanie, również tytuły/alt. Narzędzia dostępu są neutralne merytorycznie; pomoc przed i po oddaniu różnią się skutkiem. Dopuszczony w profilu neutralny słownik językowy bez definicji RE jest odnotowanym warunkiem, nie pomocą dziedzinową. Glossary CPRE pozostaje pomocą RE.
- **Brak:** LUKA-07/10; ujawnić niepewne warunki, bez najmocniejszej etykiety niezależności.
- **B/C:** B definiuje osie pomocy i znajomości. C dostarcza oznaczenie fragmentów ujawniających zasadę/klucz i neutralne komunikaty.
- **AC-018:** znany item z hintem zachowuje oba fakty i prawidłowe punkty; zamknięcie hintu nie przywraca niezależności; feedback po oddaniu nie odbiera jej wstecz; czytnik jej nie obniża. Użycie dopuszczonego neutralnego słownika językowego zapisuje się jako warunek, bez automatycznej utraty niezależności lub konwersji; otwarcie definicji RE nie jest objęte tym wyjątkiem.

### FR-019 — Ochrona rezerwy i historia ekspozycji

- **Ślad:** F13.4/7, F09; UC-17, FD-11/12.
- **M / role:** K2/K5/K7: rola reserved, rodzina, przekłady/bliskie warianty, rodzaj i czas ekspozycji, kwalifikacja osoby sprzed próby. **W:** zakres przecieku i affected persons; **O:** deklaracja zewnętrzna.
- **Relacje / minimum wyjaśnienia:** R20/R21/R22; informacja o utracie nowości bez dodatkowego ujawniania klucza.
- **P/Q / dowód:** review powiązań rodzin i bezpieczeństwa descriptions; nie zakładać, że ogólna znajomość reguły jest przeciekiem itemu.
- **Brak:** LUKA-05/07/10; rodzina nieustalona lub przeciek wykluczają zaufaną nową rezerwę osoby; materiał może pozostać practice.
- **B/C:** B definiuje kwalifikację per osoba/użycie. C dostarcza klasyfikację, listę znanych wersji oraz opisy niewyjawiające rezerwy.
- **AC-019:** pierwsza prezentacja w prawidłowo rozpoczętej próbie zachowuje jej początkową nowość; wcześniejszy preview wyklucza późniejsze „nieznane”; ekspozycja osoby A nie oznacza automatycznie znajomości u B.

### FR-020 — Powtórka z rzeczywistym odstępem

- **Ślad:** F13.3/4, F09/F12; UC-07/16/18, FD-13.
- **M / role:** K0/K2/K5/K7, Revision Prompt, kryterium, poprzednia samodzielna próba, ostatni istotny kontakt z tym kryterium, źródła czasu i powód rewizji. **O:** termin egzaminu i zewnętrzna nauka jako dobrowolna deklaracja.
- **Relacje / minimum wyjaśnienia:** R06/R25; powód, dwa rzeczywiste odstępy i warunki. Pokazać, czy jest to nowy przypadek czy znane utrwalenie.
- **P/Q / dowód:** adekwatny klucz/rubryka, status rodzin i zakres kontaktów; kalendarz jest hipotezą. Kwalifikacja z historii sprzed próby.
- **Brak:** LUKA-05/07; zachować wykonanie z ograniczeniem, bez odroczonego transferu lub mocnej retencji, gdy brakuje podstaw.
- **B/C:** B definiuje dwa zegary i relearning. C dostarcza prompt bez ujawnionej reguły, zakres kryteriów fragmentów i późniejsze warianty.
- **AC-020:** 7 dni od próby + 1 minuta od rozstrzygającego objaśnienia → brak tygodniowej retencji, oba odstępy zapisane; kontakt z innym kryterium nie resetuje badanego; 10 minut nie daje pilotażowej etykiety odroczonej.

### FR-021 — Równowaga nowej nauki i powtórek

- **Ślad:** F13.4, F09/F12; UC-18/16, FD-01/13/21.
- **M / role:** K0/K7: zakres niepokryty, potrzeby korekty/retencji, dostępność, zakończenie poprzedniej gałęzi i przesłanka kolejnego kroku. **W:** K3 dla blokującej podstawy; K4/K5 przy konkretnej naprawie/nowym pomiarze. **O:** czas użytkownika.
- **Relacje / minimum wyjaśnienia:** R05/R06/R14; nazwać potrzebę, dla której dobrano aktywność, i zachowane braki.
- **P/Q / dowód:** cel i zależność sprawdzone; polityka priorytetu projektowa. Pusta kolejka nie oznacza pełnego programu, wybór nie jest wiedzą.
- **Brak:** LUKA-01/11; jawny koniec dostępnego materiału zamiast fałszywego ukończenia FL.
- **B/C:** B rozdziela rodzaje potrzeb i nową przesłankę. C dostarcza odpowiednie aktywności pokrycia/naprawy oraz kryteria zakończenia gałęzi.
- **AC-021:** po zakończonej naprawie ta sama luka bez nowej przesłanki nie uruchamia automatycznie identycznej gałęzi; dostępny inny potrzebny cel pozostaje możliwy. Zweryfikowany prerequisite dotyczy tylko wybranego działania.

### FR-022 — Profil dowodów wiedzy

- **Ślad:** F13.3/4, F09/F12; UC-07/11/15/18, FD-14/15.
- **M / role:** kryteria K0 i fakty K7: odpowiedzi, oceny, pomoc, znajomość, dwa odstępy, ograniczenia, flaga rewizji. **W:** szczegóły K2/K5 dla interpretowanej próby; **O:** confidence.
- **Relacje / minimum wyjaśnienia:** R06/R25 i podstawa R02; etykieta → konkretne obserwacje → zakres ograniczenia, bez nowego procentu mastery.
- **P/Q / dowód:** jawna wersja kryterium i źródło oceny. Kategorie nie są obowiązkową drabiną; wystarczalność wielu prób pozostaje hipotezą.
- **Brak:** LUKA-06/07; „brak wystarczających danych”, bez interpolacji z powiązanych pojęć.
- **B/C:** B definiuje dozwolone interpretacje. C dostarcza obserwowalne kryteria i treści właściwego poziomu; nie nadaje osobie stanu wiedzy.
- **AC-022:** poprawna nowa próba może dać ograniczony samodzielny dowód bez wcześniejszej lektury; znany item po tygodniu nie staje się nowym kontekstem; kolejny błąd zachowuje wcześniejsze sukcesy.

### FR-023 — Zrozumiały postęp i jawne braki

- **Ślad:** F13.4, F09/F12; UC-10/16/18, FD-04/14.
- **M / role:** K0/K7, mianownik deklarowanego zakresu, treść dostępna i niewytworzona, obserwacje, źródła etykiet i możliwy następny krok. **W:** pełne składowe i foundational dla pełnego zakresu; **O:** statystyki aktywności.
- **Relacje / minimum wyjaśnienia:** R02/R05/R06/R25; zakres poznany, sprawdzony i nieobjęty dowodami osobno; przy etykiecie widoczne ograniczenie.
- **P/Q / dowód:** audyt mianownika i wersji; agregat nie tworzy nowej obserwacji. Liczba rozpoczętych EO nie jest procentem wiedzy.
- **Brak:** LUKA-01/06/07; brak materiału odróżniony od braku danych osoby; nieznany mianownik blokuje deklarację pełnego pokrycia.
- **B/C:** B definiuje znaczenie agregacji. C dostarcza opisy zakresu, nazwane luki oraz zrozumiałe etykiety ograniczeń.
- **AC-023:** przeczytane materiały bez retrieval nie dają samodzielnego wykazania; brak zadania dla EO opisany jako niedostatek korpusu, bez etykiety „nie umiesz”.

### FR-024 — Ostrożny profil gotowości

- **Ślad:** F13.4, F09/F12; UC-08/10/15/17, FD-15/16/18.
- **M / role:** K0/K6/K7: zakres, wyniki, czas, formaty, retencja, źródła oceny, porównywalność i braki. **W:** K5 dla twierdzeń o nowych rodzinach; **O:** roboczy próg tylko w oznaczonym eksperymencie.
- **Relacje / minimum wyjaśnienia:** R25 i blueprint → zakres; każdy wymiar profilu wskazuje podstawę i brakujące dane.
- **P/Q / dowód:** review warunków form; liczba i poziomy prób jawne. Nieznana prognostyczna trafność nie jest zastępowana wynikiem treningu.
- **Brak:** LUKA-06/07/11; w pilocie wyłącznie profil wycinka, bez werdyktu pełnego FL i bez p(zdania).
- **B/C:** B określa granice porównywalności. C dostarcza plan zakresu, ograniczenia form i komunikaty nieobiecujące więcej niż obserwacje.
- **AC-024:** 90% na znanej formie pozostaje wynikiem znanej formy; brak retencji pozostaje widoczny mimo dobrych mock scores; „trzy razy 80%” nie jest automatycznym progiem gotowości.

### FR-025 — Warunki uruchomienia sprawdzenia

- **Ślad:** F13.4/7, F09/F11; UC-08/17, FD-18.
- **M / role:** K0/K2/K5/K6/K7, blueprint, jawny zakres/liczba/punkty, role i review itemów, nowość osoby oraz protokół. **W:** audyt całego FL i profil czasu dla pełnego mocku; temat Level 1 bez limitu nie wymaga tych parametrów.
- **Relacje / minimum wyjaśnienia:** R06/R20–22; forma pokrywa zadeklarowane kryteria; krótko wyjaśnić możliwe użycie i ograniczenie reprezentatywności.
- **P/Q / dowód:** kontrola formy i przecieków, nieznane wagi poufnego egzaminu jawne. Sam start nie dowodzi wiedzy.
- **Brak:** LUKA-05/11; mniejszy test tematu albo praktyka znana, bez cichego uzupełnienia rezerwy.
- **B/C:** B definiuje U-TOPIC/U-MOCK. C dostarcza zatwierdzony blueprint i wystarczającą formę dla deklarowanego zakresu.
- **AC-025:** 24 reserved itemy pilota nie tworzą pełnego mocku; prawidłowy test tematu bez limitu może wystartować; brak nowej rezerwy wywołuje jawny fallback.

### FR-026 — Przebieg sprawdzenia bez pomocy

- **Ślad:** F13.4, F06/F09/F10/F11; UC-08, FD-02/12/17.
- **M / role:** K2/K5/K6/K7, forma, instrukcja, status finalizacji, limit lub jego brak, wagi i wersje oraz dostępna możliwość oznaczania pytań do powrotu. **W:** koniec czasu i profil dostosowania przy limicie; neutralny słownik językowy jako warunek, jeżeli dopuszczony w profilu. **O:** skorzystanie przez ucznia z oznaczenia do review. Dostępność możliwości nie jest opcjonalna; brak oznaczenia nie jest brakiem odpowiedzi.
- **Relacje / minimum wyjaśnienia:** pozycja → forma; R08–R15 istnieją redakcyjnie, lecz ich treść i zdradzające metadane nie są ujawniane. W trakcie wyłącznie neutralna instrukcja.
- **P/Q / dowód:** dopuszczona forma i bezpieczne alternatywy; odpowiedzi końcowe, czas i zmiany warunków odrębne od osiągniętych punktów ukrytych do końca.
- **Brak:** LUKA-10/11; brak reguł krytycznych blokuje start; naruszenie uruchamia FR-027.
- **B/C:** B definiuje semantyczne klasy ujawnienia. C dostarcza instrukcje i reprezentacje bez podpowiedzi, z pełnym pakietem do późniejszego review.
- **AC-026:** maksymalna waga jest widoczna, punkty/EO/źródła/alt zdradzający klucz ukryte; feedback pojawia się dopiero po finalizacji całości również w teście bez limitu; koniec limitu zamyka oddaną wersję odpowiedzi. Możliwość oznaczenia do powrotu jest dostępna, ale nieoznaczenie pytania nie blokuje oddania i nie wpływa na punktację lub dowód wiedzy. Dopuszczony neutralny słownik językowy nie wymaga konwersji do Nauki; Glossary CPRE i objaśnienia RE pozostają zamknięte. Nie wymaga się implementowania słownika.

### FR-027 — Przerwanie i przejście w naukę

- **Ślad:** F13.4, F09/F10/F11; UC-08/13/16/17, FD-02/12.
- **M / role:** K5/K6/K7, warunki czasu, odpowiedzi, przerwy, stan próby, ujawnienie i zmiana kontraktu. **W:** wiarygodność zegara przy awarii; **O:** powód wpisany przez ucznia.
- **Relacje / minimum wyjaśnienia:** przerwana próba → dalsza aktywność, R26 przy wznowieniu; konsekwencja konwersji całej próby, bez ujawnienia klucza przed wyborem.
- **P/Q / dowód:** oficjalne reguły czasu odrębne od polityki wyjścia produktu. Poprzednie odpowiedzi zachowują rzeczywiste warunki; nie odzyskuje się niezależnego statusu formy po pomocy.
- **Brak:** LUKA-07; niepewny czas/przebieg nie jest nieprzerwanym mockiem; ekspozycja nie znika po porzuceniu.
- **B/C:** B definiuje konsekwencje przerwy i konwersji. C dostarcza neutralne komunikaty alternatyw i warunków dalszej pracy.
- **AC-027:** pięć minut zwykłego wyjścia z mocku nie cofa czasu; temat bez limitu i bez pomocy może być tą samą wznowioną próbą; po konwersji nie wraca jako niezależne Sprawdzenie.

### FR-028 — Wynik i plan po sprawdzeniu

- **Ślad:** F13.4, F09/F11; UC-09/11, FD-05/10/17/24.
- **M / role:** K2/K5/K6/K7, zamknięte decyzje, punkty i mianownik, warunki i pełne rationale. **W:** K4 dla naprawy/diagnozy; **O:** dodatkowe priorytety poza krótkim planem.
- **Relacje / minimum wyjaśnienia:** R08/09/18/19/25; suma → decyzje → konkretna reguła → dostępna nowa kontrola. Wyjaśnić również blank i strata przez nadmiar.
- **P/Q / dowód:** wersje formy i kluczy; review tworzy późniejszą ekspozycję. Jeden błąd nie diagnozuje całego obszaru ani przyczyny straty.
- **Brak:** LUKA-04/05; wątpliwy item wyłączyć z mocnej interpretacji zgodnie z FR-035; brak wariantu ogranicza plan.
- **B/C:** B rozdziela wynik, diagnozę i nową obserwację. C dostarcza rationale, lokalne korekty i ograniczony plan z realnie dostępnym zadaniem.
- **AC-028:** P/K pokazują uzyskane i utracone części punktów; po review nie powstaje drugi niezależny mock z tych samych rodzin; zmiana mianownika po wyłączeniu jest jawna.

### FR-029 — Uczenie formatu oddzielnie od domeny

- **Ślad:** F13.4, F09/F11; UC-01/11, FD-17.
- **M / role:** reguły A/P/K i demonstracje K2 z instrukcją, w/k/m, przykładami poprawnych, pustych i nadmiarowych zapisów; K7 dla wykonania tutorialu. **O:** dodatkowy trening.
- **Relacje / minimum wyjaśnienia:** wybór → konsekwencja scoringu; R15 do N-REG. Neutralne demo ma lokalne kryterium formatu, bez R06 do kryterium EO RE tylko dlatego, że używa terminu RE.
- **P/Q / dowód:** źródło scoringu i autorski status demonstracji; kompetencja formatu odrębna od domeny i rezerwy.
- **Brak:** LUKA-02/04; nie diagnozować nieznajomości pojęcia wyłącznie z błędu liczby wyborów.
- **B/C:** B rozdziela kryterium formatu i domenowe. C dostarcza neutralne demonstracje oraz wyjaśnienia ułamków/braków, bez zużywania reserved.
- **AC-029:** P z dwoma trafnymi i nadmiarowym wyborem ma zero i wyjaśnienie formatu; ukończony tutorial K nie zalicza traceability; m nie jest na stałe równe 4.

### FR-030 — Opcjonalna deklaracja pewności

- **Ślad:** F13.4, F09; UC-12, FD-22; priorytet Validate.
- **M / role:** przy włączeniu gałęzi K7, znaczenie skali, odpowiedź, moment i fakt ujawnienia feedbacku. **W:** warunki K2/K5, jeśli zestawia się pewność z wynikiem/nowością; **O:** sama deklaracja.
- **Relacje / minimum wyjaśnienia:** deklaracja → konkretna próba; krótki opis jej ograniczeń. Brak wartości nie jest najniższą kategorią.
- **P/Q / dowód:** skala i użycie oznaczone DESIGN HYPOTHESIS; samoopis odrębny od oceny. Standardowy mock nie prosi o dodatkową deklarację; eksperyment ma zmodyfikowany protokół.
- **Brak:** LUKA-06; rekomendacja i punktacja działają bez confidence, bez diagnozy błędnej kalibracji osoby.
- **B/C:** B definiuje brak danych i timing. C dostarcza pomijalne etykiety i krótkie objaśnienie, bez kary punktowej.
- **AC-030:** pominięcie nie blokuje submit; trafne „niepewnie” zachowuje pełne punkty; deklaracja po kluczu nie jest traktowana jako sprzed feedbacku; standardowy mock jej nie wymaga.

### FR-031 — Znajdowanie wiedzy PL/EN

- **Ślad:** F13.4, F06/F09; UC-06/14, FD-25; globalnie Level 2.
- **M / role:** K0/K1/K3/K5, kontrolowane terminy, sensy, aliasy, tytuły i role publikacji; K7 dla ekspozycji po otwarciu. **W:** opis rozróżniający homonim; **O:** globalna wyszukiwarka w Level 1.
- **Relacje / minimum wyjaśnienia:** R03/R04/R10; termin → sens → dopuszczony materiał. Wynik ma krótki kontekst znaczenia.
- **P/Q / dowód:** review par PL/EN i widoczności; odnalezienie/otwarcie nie jest wiedzą, ale może być istotnym kontaktem z kryterium.
- **Brak:** LUKA-01/03; jawny brak materiału i droga do tematu, bez generowanej definicji. Rezerwa i jej snippet nie są fallbackiem.
- **B/C:** B definiuje aliasy i rozdzielenie sensów. C dostarcza indeks, tytuły, bezpieczne opisy oraz powiązania z materiałem practice.
- **AC-031:** kontrolowany alias EN prowadzi do właściwego sensu PL; pasujące reserved pytanie nie ujawnia stemu/snippetu/klucza; brak global search nie blokuje lokalnej definicji.

### FR-032 — Wznowienie po przerwie

- **Ślad:** F13.4/6, F09; UC-14/16, FD-07/13.
- **M / role:** K0/K7, źródłowa aktywność/rewizja, status, odpowiedzi/ujawnienia, moment przerwy, dostępność i potrzeba powrotu. **W:** K2/K5 dla ponownej próby, K6 dla przerwanego Sprawdzenia; **O:** termin egzaminu.
- **Relacje / minimum wyjaśnienia:** R26 i próba → kryterium; krótkie przypomnienie celu bez niezamierzonego rozwiązania przed retrieval.
- **P/Q / dowód:** stan aktualnej treści sprawdzony; sama nieobecność nie dowodzi zapomnienia. Dwa odstępy kryterium nie są zastępowane długością nieobecności w aplikacji.
- **Brak:** LUKA-07/09; zachować pewną historię i wybór celu, bez wymyślania dawnych odpowiedzi.
- **B/C:** B definiuje znaczenie ciągłości i wersji. C dostarcza zwięzłe przypomnienia celu i alternatywy dla wycofanego materiału.
- **AC-032:** powrót po tygodniu nie zeruje dowodów; wznowione review nie nalicza wyniku ponownie; dawny przerwany mock podlega FR-027 i nie jest nową formą.

### FR-033 — Zachowanie przy brakach korpusu

- **Ślad:** całe F13.7 oraz F13.4/F09; wszystkie UC, szczególnie UC-14/17.
- **M / role:** kompletność dla zamierzonego użycia U-*, typ LUKA-*, dotknięte pakiety/wersje/kryteria, krytyczność, status i dostępne dopuszczone alternatywy. **W:** właściwe K0–K7; **O:** data planowanego uzupełnienia.
- **Relacje / minimum wyjaśnienia:** brak → dotknięta funkcja → dozwolona alternatywa; prosty opis tego, czego nie da się obiecać.
- **P/Q / dowód:** status brakującego źródła/relacji/review jawny. Brak treści nie jest dowodem braku wiedzy; brak historii nie jest dowodem retencji.
- **Brak:** nieznana sama kompletność oznacza brak mocnej obietnicy, bez ukrytej generacji i bez pozornego „zaliczone”.
- **B/C:** B definiuje klasy i zależną od funkcji wystarczalność. C dostarcza rejestr luk, pewne alternatywy oraz rozwiązuje braki authoringu/review.
- **AC-033:** niezweryfikowane rationale blokuje pytanie; brak opcjonalnego linku nie blokuje samowystarczalnego explanation; brak nowej rodziny blokuje transfer, a nie zwykłą lekturę.

### FR-034 — Minimalna bramka publikacji treści

- **Ślad:** F13.4/7, F09; przekrojowo, FD-24/25.
- **M / role:** właściwe K0–K6, QG i U-*, twierdzenie–źródło, wersja, prawa, faktyczny recenzent, zakres review i decyzja o użyciu. **W:** dodatkowa kontrola rezerwy/blueprintu; **O:** empiria, jeśli nie deklaruje się kalibracji.
- **Relacje / minimum wyjaśnienia:** R15 i zależności konieczne; uzasadnienie decyzji publikacyjnej dla redakcji, z listą warunków niespełnionych.
- **P/Q / dowód:** oddzielone opracowanie, kontrola źródła, recenzja, publikacja i badanie empiryczne. To jakość korpusu, bez dowodu umiejętności osoby.
- **Brak:** LUKA-02/04/08; brak krytycznego warunku zatrzymuje dane użycie, bez etykiety „zatwierdzone” dla szkicu.
- **B/C:** B dostarcza bramki i warunki ponownego przeglądu. C przedstawia materiał, źródła/prawa, review i jawne zgody/wyłączenia.
- **AC-034:** P bez rationale pominiętej poprawnej opcji nie przechodzi publikacji; zgodność dwóch LLM nie jest niezależnym review; review ekspercki nie daje statusu psychometrycznej kalibracji.

### FR-035 — Wątpliwość, wycofanie i korekta dowodów

- **Ślad:** F13.4/7, F09; UC-03/09/17, FD-24.
- **M / role:** wersja itemu, zgłoszenie, decyzja review, dotknięte twierdzenia/klucze i próby, pierwotny wynik i podstawa korekty K2/K3/K7. **W:** wpływ na zakres K0, rodzinę K5 i formę K6; **O:** opis ucznia.
- **Relacje / minimum wyjaśnienia:** R15, zależne R08/09/25; co zmieniono, dlaczego i które interpretacje wymagają aktualizacji.
- **P/Q / dowód:** rozstrzygnięcie źródłowe, ponowna bramka; zgłoszenie nie zmienia klucza samoczynnie. Historia przeliczenia odrębna od nowej próby.
- **Brak:** LUKA-04/08; nierozstrzygnięty klucz wstrzymuje użycie i mocne wnioski. Niemożliwe przeliczenie daje obserwację niediagnostyczną, nie usunięcie historii.
- **B/C:** B definiuje zakres wpływu. C rozstrzyga merytorycznie, poprawia i wskazuje zależności do ponownego review.
- **AC-035:** po zmianie błędnego klucza widoczne są stara i skorygowana ocena z podstawą; brak danych do przeliczenia nie daje nowego wyniku; wycofany item nie wraca do nowej sesji.

### FR-036 — Dostępna obsługa interakcji

- **Ślad:** F13.4/7, F06/F09; wszystkie UC, FD-25.
- **M / role:** semantyczna reprezentacja odpowiednich K0–K7: etykiety, instrukcje, powiązanie wartości z wierszem K, tekst wyniku i stanu, alternatywa diagramu oraz kotwica powrotu. **W:** opis równoważny diagramowi i profil czasu; **O:** dekoracja.
- **Relacje / minimum wyjaśnienia:** kontrolka/ocena → właściwa opcja/stwierdzenie, R26; tekst przekazuje ten sam stan i dane, bez dodatkowego rozwiązania.
- **P/Q / dowód:** review równoważności treści, docelowe WCAG 2.2 AA z S-BP; brak deklaracji ukończonego audytu produktu. Czytnik/powiększenie nie są hintem.
- **Brak:** LUKA-10; brak równoważnej reprezentacji oznacza ograniczenie pomiaru; bariera nie jest błędem wiedzy.
- **B/C:** B definiuje semantyczną równoważność. C dostarcza logiczną kolejność, opisy i jednoznaczne nazwy bez przecieków; implementacja dostępności należy później do innej fazy.
- **AC-036:** każdy wybór K identyfikuje wiersz i wartość; tekst wyniku nie wymaga koloru; alt nie zdradza klucza; powrót wskazuje źródłowy element, umożliwiając późniejsze odtworzenie fokusu.

### FR-037 — Terminologia i znaczenie egzaminacyjne

- **Ślad:** F13.4, F09; UC-01/05/15, FD-25.
- **M / role:** K0/K1/K3: termin preferowany PL/EN, sens, alias/odradzana forma, definicja/odsyłacz, status parafrazy i foundational. **W:** review K2 dla tłumaczonych pytań; K7, gdy odczyt definicji jest pomocą; **O:** etymologia.
- **Relacje / minimum wyjaśnienia:** R03/R04/R22; krótki sens i istotna różnica wobec użycia zawodowego, bez automatycznej równoważności nazw.
- **P/Q / dowód:** N-GLO-PL/EN i właściwy syllabus; kontrola negacji/kwantyfikatorów także w dystraktorach. Odczyt znaczenia nie daje poprawnej próby.
- **Brak:** LUKA-02/03/08; nie publikować arbitralnej równoważności; autorski przekład oznaczyć i zweryfikować przed użyciem.
- **B/C:** B definiuje sens i tożsamość terminologiczną. C prowadzi kontrolowany słownik, uzasadnia aliasy i sprawdza faktycznie użyte fragmenty EN/PL.
- **AC-037:** własna polska parafraza nie jest oficjalną definicją; dwa sensy terminu wymagają rozstrzygającego kontekstu albo blokady pytania; tłumaczenie nie odnawia nowości rodziny.

### FR-038 — Jawny zakres pilota i pełnego przygotowania

- **Ślad:** F13.4/7/8, F09/F14; UC-01/10/18, FD-18/28.
- **M / role:** manifest wydania K0, rzeczywiste treści K2, rodziny K5, dopuszczone sprawdzenia K6 i ograniczenia obserwacji K7; kompletne/częściowe EO i terminy. **W:** pełny audyt dla Level 2; **O:** plan rozbudowy.
- **Relacje / minimum wyjaśnienia:** wydanie → kryteria/treści/rodziny → możliwe U-*; krótki zakres i szczegóły braków na żądanie.
- **P/Q / dowód:** audyt stanu, nie tylko plan 60+24. Pokrycie funkcji nie poświadcza kompletności korpusu ani opanowania przez osobę.
- **Brak:** LUKA-01/05/11; bez audytu brak obietnicy pełnego kursu/mocku; nie zużywać tej samej rezerwy jako nowej w kilku fazach.
- **B/C:** B definiuje manifest i mianowniki. C przedstawia rzeczywiste pokrycie, role rezerwy i rozbieżność plan–wykonanie.
- **AC-038:** ukończenie wszystkich ilustracji nie daje gotowości FL; 24 pozycji przy 12 komórkach nie opisuje się jako trzech nieznanych zestawów po 12; liczby treści pozostają budżetem do audytu.

## B02-04 — Kontrola przekrojowa i wynik audytu

### Jedenaście przejść F06

Wspólna granica: w aktywnym Sprawdzeniu żadna droga nie ujawnia pomocy; patrz AC-026/027. W Nauce pomoc przed odpowiedzią jest rejestrowana, a nie zakazana. Odtworzenie odsyłacza odwrotnego nie jest automatycznym zatwierdzeniem nowej relacji.

| Przejście F06 | Kontrakt ścieżki i konieczna informacja | Granica/fallback |
|---|---|---|
| Pytanie → wyjaśnienie | R08/R09, K2 i oddana próba K7 | W Nauce po zatwierdzeniu; w Sprawdzeniu po finalizacji całości |
| Wyjaśnienie → pojęcie | R10, wskazany sens i źródłowa reguła, K3 | Bez uzasadnienia linku pozostać przy samowystarczalnym rationale |
| Opcja → rozróżnienie | R08/R09 i R11 z lokalną przesłanką opcji | Kilka opcji może wskazywać ten sam comparison; brak osobnej karty nie jest wadą |
| Pojęcie → pojęcie | Konkretna, uzasadniona R11/R14/R23/R24 lub ścieżka przez wyjaśnienie K3; cel odejścia K7 | Brak RELATED_TO z samego podobieństwa; brak relacji oznacza brak rekomendowanego przejścia |
| Pojęcie → prerequisite | Aktualne działanie/kryterium oraz R14 podstawa→to działanie; sygnał braku i zakres warunku | Nie tworzyć globalnego prerequisite między tematami; brak review nie wymusza podstawy |
| Pojęcie → pytania | Zatwierdzony związek rozstrzygającego rationale/reguły z sensem pojęcia przez R10/R09/R08 oraz R06 do potrzebnego kryterium; role K5 | Wspólny EO lub MENTIONS nie wystarczy. Tylko dopuszczone practice, bez ujawniania rezerwy |
| Hipoteza → sonda | R16/R17, alternatywy, przewidywania i metoda oceny K4 | Bez rozdzielającej sondy zwykła korekta; timing po instrukcji ogranicza diagnozę |
| Aktywność → nowy wariant | R19/R21/R06, opis zmiany, rodziny i ekspozycja K5 | Kosmetyczny wariant jest treningiem; brak nowej rodziny nie jest maskowany |
| Remediacja → pierwotna sesja | K7 i R26, źródłowa aktywność, kolejka, wynik i stan ukończenia gałęzi | Follow-up nie zastępuje źródłowej aktywności; wycofany item ma oznaczoną historię |
| Pytanie → EO | R06 do kryterium i R02 do EO, jawne role pomocnicze/kontekstowe | Nie przenosić dowodu na cały EO; w aktywnym Sprawdzeniu metadane ukryte |
| EO → materiał | Wskazana potrzebna składowa przez R02 oraz R05 od odpowiedniego materiału | Bez treści nazwać lukę; ogólne SUPPORTS całego EO nie dowodzi pokrycia wszystkich części |

### Zdolności z F08

| Zdolności S-BP | Zachowany ślad |
|---|---|
| CAP-01–04: orientacja, prowadzenie, zakres, pojęcia | FR-001–005,021,029,037–038 |
| CAP-05–07: zadania, feedback, opcja–wiedza | FR-006–012 |
| CAP-08–10: diagnoza/naprawa, relacje, powrót | FR-013–017,030 |
| CAP-11–14: rewizja, integralność, dowody, gotowość | FR-018–024 |
| CAP-15–18: sprawdzenie, review, znajdowanie, ciągłość | FR-025–028,031–032,037 |
| CAP-19–20: publikacja, braki, korekta, dostęp | FR-033–037; obowiązki dziedziczone przez wszystkie pozostałe |

### Kontrole nieusuwalne przez konsolidację

| Ryzyko utraty wymagania | Sprawdzenie w macierzy |
|---|---|
| Klucz zostaje, rationale znika | AC-008/009/011/034 wymagają wszystkich rozstrzygnięć |
| SUPPORTS staje się pomiarem | AC-004/006/022; oddzielne R05/R06/R25 |
| Pomoc i znajomość zlewają się w jedną flagę | AC-018/019 wymagają obu historii |
| Przerwa od dawnej próby udaje retencję po świeżej lekturze | AC-020/022/032 zachowują dwa odstępy |
| Trzy poprawne K udają trzy niezależne EO | AC-009/022/028 ograniczają poziom wniosku |
| Brak korpusu obciąża ucznia | AC-004/023/033/038 rozdzielają mianowniki |
| Rezerwa wycieka przez knowledge navigation | AC-019/026/031/036 obejmują opisy i alternatywy |
| Korekta klucza wymazuje historię | AC-010/035 wymagają wersji i jawnego przeliczenia |

**Wynik kontroli autorskiej:** 38/38 FR ma indywidualną kartę, warunek braków, odpowiedzialność B/C i kryterium AC. Wszystkie części F13.1–F13.8 mają wskazane miejsce realizacji. Nie wykonano testu aplikacji ani review gotowego korpusu. Scenariusze pozytywne i negatywne modelu są w B03; luki i wymagane niezależne recenzje w B04. Ten wynik nie zamyka G1.
