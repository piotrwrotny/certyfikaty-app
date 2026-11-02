# Claude Code — wiążące instrukcje implementacji

## Wynik, który masz dostarczyć

Zaimplementuj lekką PWA IREB CPRE Foundation Level w języku polskim: Skupiona sesja, A/P/K, feedback, wiedza kontekstowa, korekta/follow-up, późniejsza kontrola, test tematu, zakres dowodów, nazwane profile lokalne, praca offline oraz bezpieczna aktualizacja treści z hosta w LAN. Pracuj do kompletnego wyniku technicznego w zadeklarowanym zakresie. Nie kończ na szkielecie, mockupie, TODO ani samym opisie planu.

Wykonuj rutynowe, odwracalne decyzje samodzielnie. Uzupełniaj `docs/IMPLEMENTATION_DECISIONS.md` o istotne wybory. Zmiana zaakceptowanego wyglądu, pedagogiki, punktacji, izolacji danych albo zakresu Later/Validate wymaga osobnej, konkretnej propozycji; kontynuuj niezależne prace. Brak dopuszczenia treści nie blokuje implementacji silnika i testów na fixtures. Nie publikuj aplikacji na zewnętrznym hoście ani nie zmieniaj produkcyjnej infrastruktury bez zlecenia.

## Obowiązkowa kolejność odczytu

1. README, `docs/01_PRODUCT_AND_SCOPE.md`, `docs/02_DESIGN_LOCK.md` oraz `docs/10_DECISIONS_AND_OPEN_ITEMS.md`.
2. Rzeczywiste makiety desktop/mobile, atlas i prototyp w `references/design`; pełne D01–D05.
3. `references/project/00_IREB_CPRE_START.md`, R06, cały kanon pedagogiczny; Blueprint F01/F03–F12/F14–F16 (wszystkie FR/produktowe Acceptance/UC/FD) i FTC F13.1–8/K0–K7; pełne B01–B04 v0.2. Późniejsze jawne zlecenie techniczne jest opisane w docs/10, nie aktualizuje po cichu START.
4. `docs/03`–`09`, schematy oraz cały backlog. B02 AC są semantyczne, nie zastępują Acceptance z Blueprintu.
5. Dla importu: C01/C02 v0.2, właściwe części C03/C04 i oba pliki tematu; w T21 przeczytaj Content i QA w całości przed pełnym mapowaniem. Przykładowa konwersja nie zastępuje pełnego źródła. Deep Research tylko do konkretnej niejasności.

## Ochrona rezultatu projektowego

**Stylistyka Skupionej sesji jest zaakceptowana. Nie projektuj jej ponownie.** Jedna centralna kolumna, spokojne tło, ciemna zieleń, Georgia w tytułach, Arial/system w tekście, kontekstowa wiedza. Tokeny są w `design/tokens.css`. Nie dodawaj dashboardu kafelków, gradientów, gamifikacji, stałego prawego panelu, biblioteki gotowych komponentów ani nowego motywu. Nowe ekrany profili i aktualizacji stosują ten sam system.

`references/**` jest baseline do odczytu. Nie modyfikuj go, nie podmieniaj screenshotów, nie aktualizuj jego hashy w celu uciszenia regresji. Kod prototypu ma demonstracyjne dane i localStorage: odtwórz UI i semantykę w docelowej strukturze, bez kopiowania go jako produkcyjnej architektury. Fixtures i materiały recenzenckie nie trafiają automatycznie do wydania uczniowskiego.

## Niezmienniki

- Zachowaj FR-001–038, UC-01–18, FD-01–28 i priorytety. FR-030 Validate jest wyłączone; FR-031 Later nie należy do przyrostu. Experimental i pełny timed mock pozostają odłożone.
- Rozdziel nazwany profil lokalny od profilu warunków próby i od profilu dowodów. `profileId` jest stabilnym losowym ID, nigdy nazwą ani indeksem listy.
- Każdy odczyt/zapis aktywności ma jawny `profileId`; brak profilu jest błędem, nie wyborem pierwszego. Zmiana profilu nie zeruje ani nie łączy danych.
- Nauka dopuszcza i zapisuje pomoc. Sprawdzenie ukrywa rozwiązania, rationale, zdobyte punkty i pomoc dziedzinową aż do finalizacji całej formy; także w DOM, nazwach dostępnych, tytułach, historii i nawigacji. Konwersja całej próby do Nauki jest świadoma i nieodwracalna.
- A: dokładnie jeden poprawny wybór; P: części przy n≤k, zero za n>k; K: niezależny blank/T/F, części w×c/m. Dokładne ułamki w obliczeniach. Szczegóły i wektory w docs/06–07.
- Oddanej odpowiedzi i pierwotnej oceny nie nadpisuje follow-up, aktualizacja klucza ani import. Powrót do pytania nie tworzy próby.
- Osobno przechowuj punkty, pomoc przed/po odpowiedzi, znajomość pytania/rodziny, nowy kontekst, oba odstępy czasu i metodę oceny. Nie twórz mastery %, prognozy zdania ani diagnozy z pojedynczego wyboru.
- Aktualizacja jest zweryfikowana i atomowa. Rozpoczęta próba ma przypięte rewizje/snapshot; aktywny test nie zostaje po cichu wzbogacony nowym pytaniem. Awaria pobrania zachowuje działającą poprzednią treść i cały postęp.
- Status authoringu, review, praw/kanału, dopuszczonych użyć i eligibility osoby to różne osie. Agent programujący nie wymyśla brakujących kluczy, recenzji ani relacji.

## Organizacja kodu i pracy

Domyślnie TypeScript strict + React + Vite, zwykły CSS z tokenami, Dexie/IndexedDB, vite-plugin-pwa z aktualizacją `prompt`. Szczegóły w docs/03. Dobierz aktualne zgodne wersje, zapisz je w lockfile i wersję Node w repo. Nie dodawaj backendu, kont, chmury, analityki, zdalnych fontów ani runtime LLM.

Najpierw zachowaj baseline i uruchom kontrolę handoffu. Następnie wykonuj zadania w kolejności zależności; utrzymuj działający pionowy przekrój. Domenę i punktację testuj niezależnie od React. Import treści, zapis ucznia i aktualizator mają własne moduły. Nie buduj ogólnego edytora treści ani rozbudowanego frameworka workflow.

Utwórz i faktycznie uruchamiaj: `npm run typecheck`, `lint`, `test`, `content:validate`, `test:e2e`, `test:visual`, `build`, `check`. `check` łączy kontrole deterministyczne; testy przeglądarki muszą badać build z service workerem, nie tylko dev server. Bez pomijania testów błędów zapisu/aktualizacji i przecieków przed finalizacją. Szczegóły dowodów w docs/07.

## Definition of Done i raport

Wszystkie zadania przyrostu mają status `done` dopiero po spełnieniu AC i dołączeniu rzeczywistego dowodu. `blocked-content` lub `blocked-environment` ma konkretny powód i nie oznacza sukcesu. Oddziel techniczne wykonanie, dopuszczenie treści, testy AT/urządzeń i decyzje właściciela. Zapisz `qa/IMPLEMENTATION_REPORT.md`: wykonane ID, komendy i wyniki, obrazy desktop/mobile, test offline/aktualizacji/profili, pozostałe ograniczenia. Nie aktualizuj baseline w odpowiedzi na nieudany test wizualny. Nie deklaruj badania użytkowników, skuteczności nauki, audytu WCAG ani zamknięcia G2/G3/G4 na podstawie własnych testów.
