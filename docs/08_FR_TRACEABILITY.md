# 08 — Ślad wszystkich 38 FR

Zakres i priorytety dziedziczone z D01/Blueprint. R = realizowane w wycinku, P = częściowo, L = później, Z = zależne od decyzji. Treści mają odrębne dopuszczenia. Nowe PWA/profile nie zmieniają istniejącej numeracji. Każdy wiersz nadal wymaga produktowego Acceptance z Blueprint F09; pełny tekst także D05 dodatek A. B02 AC są dodatkowe, semantyczne.

| FR / nazwa | Priorytet | Zakres D | Granica przyrostu | Zadania |
|---|---|---|---|---|
| FR-001 — Orientacja i warunki przygotowania | Essential | P | Orientacja, język PL, zakres i dwa wejścia. Profile pełnego mocku 75/90 minut dopiero Level 2. | TASK-015 |
| FR-002 — Krótki wybór punktu startu | Essential | P | Materiał albo pytanie. Brak obowiązkowej diagnozy; fakultatywna diagnoza wymaga osobnej walidacji i sond. | TASK-015 |
| FR-003 — Jeden następny krok z wyjaśnieniem | Essential | R | Jedna uzasadniona rekomendacja, zmiana celu i wyjście. | TASK-015 |
| FR-004 — Pokrycie celów i składowych | Essential | P | Kryteria i terminy wybranego przekroju; jawny brak audytu całego FL. | TASK-009, TASK-015, TASK-022 |
| FR-005 — Krótkie objaśnienie z rozwinięciem | Essential | R | Krótka nota, warunek i przykład, opcjonalne szczegóły. | TASK-010, TASK-016 |
| FR-006 — Retrieval i zastosowanie zgodne z EO | Essential | P | A/P/K oraz prosta wypowiedź i rubryka z jawną samooceną. Brak pełnego pomiaru EO4.1.1 L3 w tym przekroju. | TASK-010, TASK-016 |
| FR-007 — Pytanie A | Essential | R | A: pojedynczy wybór, zmiana, wyczyszczenie, oddanie pustej odpowiedzi. | TASK-012, TASK-013, TASK-033 |
| FR-008 — Pytanie P i częściowe punkty | Essential | R | P: jawne k, licznik, niedobór i nadmiar dozwolone, częściowy wynik. | TASK-012, TASK-013, TASK-024, TASK-033 |
| FR-009 — Pytanie K i decyzje stwierdzeń | Essential | R | K: niezależna para Prawda/Fałsz w wierszu, stan pusty i wyczyszczenie, zmienne m. | TASK-012, TASK-013, TASK-024, TASK-033 |
| FR-010 — Zatwierdzenie i historia prób | Essential | R | Wyraźny submit w Nauce; w Sprawdzeniu finalizacja całości. Historia niezmienna po feedbacku. | TASK-004, TASK-008, TASK-014, TASK-024, TASK-030, TASK-033 |
| FR-011 — Warstwowy feedback | Essential | R | Krótki wynik i zasada; błędne/pominięte poprawne decyzje rozwinięte, pozostałe na żądanie. | TASK-017, TASK-026 |
| FR-012 — Od opcji do właściwego rozróżnienia | Essential | R | Nazwany link przy konkretnej opcji/wierszu do właściwego fragmentu. | TASK-010, TASK-017, TASK-018 |
| FR-013 — Odwracalna eksploracja i powrót | Essential | R | Jedna kotwica źródłowa, stos gałęzi, powrót krokowy i bezpośredni z fokusem. | TASK-018 |
| FR-014 — Porównanie i potrzebny prerequisite | Essential | R | Porównanie po wspólnej osi; pomijalna podstawa tylko z uzasadnieniem dla czynności. | TASK-018 |
| FR-015 — Hipoteza pomyłki i jej sprawdzenie | Essential | R | Hipoteza z alternatywami i sondą wyłącznie gdy C ją zapewnia. W przeciwnym razie neutralna korekta. | TASK-019, TASK-020 |
| FR-016 — Krótka remediacja bez nieskończonej pętli | Essential | R | Krótka korekta, inny przypadek i możliwość odłożenia. Po drugim nieudanym follow-up zmiana wsparcia/przerwa. | TASK-019 |
| FR-017 — Nowy wariant do weryfikacji | Essential | R | Znaczący follow-up, jawne rozróżnienie nowej sytuacji i nowej rodziny. Brak wariantu ma osobny stan. | TASK-019 |
| FR-018 — Pomoc i znajomość a status dowodu | Essential | R | Pomoc i znajomość oddzielnie; dobrowolne deklaracje, bez kary punktowej. | TASK-006, TASK-014, TASK-020, TASK-033 |
| FR-019 — Ochrona rezerwy i historia ekspozycji | Essential | R | Kontrola ekspozycji per osoba przed startem, chroniona pula poza eksploracją. | TASK-006, TASK-011, TASK-020, TASK-030, TASK-033 |
| FR-020 — Powtórka z rzeczywistym odstępem | Essential | R | Późniejsza kontrola przed ponownym objaśnieniem; dwa odstępy per kryterium. | TASK-021, TASK-033 |
| FR-021 — Równowaga nowej nauki i powtórek | Essential | R | Po gałęzi ponowny wybór między powrotem, brakującym zakresem i nową realizacją. | TASK-015, TASK-019, TASK-021 |
| FR-022 — Profil dowodów wiedzy | Essential | R | Lista kwalifikowanych obserwacji, pięć kategorii bez drabiny i propagacji na sąsiadów. | TASK-022 |
| FR-023 — Zrozumiały postęp i jawne braki | Essential | R | Zakres materiału, stan dowodów i potrzeba kontroli osobno. Źródło etykiety na żądanie. | TASK-022 |
| FR-024 — Ostrożny profil gotowości | Essential | P | Ograniczenia profilu w badanym wycinku. Pełny profil FL, czas i porównywalne mocki dopiero Level 2. | TASK-022, TASK-026 |
| FR-025 — Warunki uruchomienia sprawdzenia | Essential | P | Dopuszczenie testu tematu bez limitu. Pełny blueprint FL i timed mock później. | TASK-011, TASK-023 |
| FR-026 — Przebieg sprawdzenia bez pomocy | Essential | P | Wspólny kontrakt Sprawdzenia, flagi, edycja i finalizacja całości. Brak zegara pełnego mocku. | TASK-024 |
| FR-027 — Przerwanie i przejście w naukę | Essential | P | Test bez limitu: przerwa i ta sama próba; nieodwracalna konwersja całej próby. Bieg zegara mocku później. | TASK-007, TASK-025, TASK-031 |
| FR-028 — Wynik i plan po sprawdzeniu | Essential | P | Suma punktów, procent punktów i review testu tematu, jeden kolejny krok. Pełny mock później. | TASK-024, TASK-026 |
| FR-029 — Uczenie formatu oddzielnie od domeny | Essential | R | Instrukcja przy formacie i krótka neutralna demonstracja punktacji, pomijalna. | TASK-012, TASK-013 |
| FR-030 — Opcjonalna deklaracja pewności | Validate | Z | Fakultatywne Validate. Nieaktywne w bazowej sesji; właściciel może zlecić oddzielny eksperyment przed feedbackiem. | VAL-030 |
| FR-031 — Znajdowanie wiedzy PL/EN | Later / Level 2 | L | Globalne wyszukiwanie PL/EN w Level 2. Lokalne terminy i linki już w FR-005/012/037. | LATER-031 |
| FR-032 — Wznowienie po przerwie | Essential | R | Zapis i wznowienie miejsca bez nowej próby, także przerwanego review. | TASK-004, TASK-006, TASK-007, TASK-008, TASK-014, TASK-018, TASK-025, TASK-030, TASK-031, TASK-032, TASK-034 |
| FR-033 — Zachowanie przy brakach korpusu | Essential | R | Osobne stany braków, wariantu, relacji i danych; bez generatywnego uzupełniania. | TASK-027, TASK-032, TASK-034 |
| FR-034 — Minimalna bramka publikacji treści | Essential | R | Ręczny powtarzalny publish gate i manifest użycia. Bez budowy CMS. | TASK-001, TASK-009, TASK-010, TASK-011, TASK-029, TASK-034, TASK-036 |
| FR-035 — Wątpliwość, wycofanie i korekta dowodów | Essential | R | Uwaga z kontekstem, status sporu, wycofanie, jawna korekta oceny i wpływu. | TASK-027, TASK-029, TASK-030, TASK-033 |
| FR-036 — Dostępna obsługa interakcji | Essential | R | Klawiatura, semantyczne grupy, tekstowe wyniki, fokus, reflow i równoważne treści. | TASK-003, TASK-028, TASK-035 |
| FR-037 — Terminologia i znaczenie egzaminacyjne | Essential | R | Preferowane PL/EN w lokalnym materiale; jawny status parafrazy. | TASK-003, TASK-009, TASK-016, TASK-035 |
| FR-038 — Jawny zakres pilota i pełnego przygotowania | Essential | R | Zakres przekroju, częściowe EO, manifest i ograniczenia we wszystkich punktach wyniku. | TASK-001, TASK-009, TASK-015, TASK-022, TASK-023, TASK-036 |

## Nowe wymagania

Identyfikatory PROF/PWA/UPD/CNT z docs/01 to rozszerzenie techniczne właściciela. Są realizowane przez przypisane zadania w tasks.json i testy QA-01–36; nie zastępują FR-001–038. Eksperymentalna aktywna mapa/zaawansowana adaptacja pozostają poza zakresem według FD-20/21.

## UC i FD

UC-01–18 i FD-01–28 pozostają bez zmian w Blueprint i w mapach D01/D02/D05. Nie utworzono nowego, konkurencyjnego katalogu UC ani nie zmieniono odrzuconych/odłożonych FD. Profile są nowym przepływem technicznym opisanym w docs/02–03.
