# Backlog implementacji v0.1

Wykonuj w kolejności zależności. Wszystkie zadania TASK należą do przyrostu. VAL/LATER pozostają wyłączone. Priorytet Essential nie oznacza, że istniejące treści otrzymały dopuszczenie.

Statusy i wyniki utrzymuj w `tasks.json`. Status `done` wymaga konkretnych dowodów AC; przygotowanie planu nie zamyka zadania. Brak review blokuje użycie treści, nie techniczną implementację gate/fixtures.

| ID | Zadanie | Zależności | FR | Testy |
|---|---|---|---|---|
| TASK-001 | Wejścia, manifest i ochrona designu |  | FR-034, FR-038 | QA-35 |
| TASK-002 | Tooling i moduły aplikacji | TASK-001 |  |  |
| TASK-003 | Shell Skupionej sesji i komponenty dostępności | TASK-002 | FR-036, FR-037 | QA-34, QA-35 |
| TASK-004 | Model IndexedDB, wersje i transakcje | TASK-002 | FR-010, FR-032 | QA-29 |
| TASK-005 | Tworzenie, wybór i nazwy profili | TASK-003, TASK-004 |  | QA-01, QA-02 |
| TASK-006 | Izolacja profili i wiele kart | TASK-005 | FR-018, FR-019, FR-032 | QA-01, QA-03, QA-04, QA-05 |
| TASK-007 | Bezpieczne przełączanie i wznowienie profilu | TASK-006 | FR-027, FR-032 | QA-03, QA-12 |
| TASK-008 | Eksport, import i usuwanie jednego profilu | TASK-006 | FR-010, FR-032 | QA-02, QA-30 |
| TASK-009 | Kontrakt treści, projekcje i walidator | TASK-002 | FR-004, FR-034, FR-037, FR-038 | QA-14, QA-31, QA-33 |
| TASK-010 | Import T21 i procedura kolejnego tematu | TASK-009 | FR-005, FR-006, FR-012, FR-034 | QA-10, QA-31, QA-32 |
| TASK-011 | Bramka treści i generowanie wydania | TASK-010 | FR-019, FR-025, FR-034 | QA-31 |
| TASK-012 | Dokładny scoring A/P/K i wektory | TASK-009 | FR-007, FR-008, FR-009, FR-029 | QA-06, QA-07, QA-08, QA-09, QA-10 |
| TASK-013 | Kontrolki A/P/K i neutralna nauka formatu | TASK-003, TASK-012 | FR-007, FR-008, FR-009, FR-029 | QA-06, QA-07, QA-08, QA-34 |
| TASK-014 | Próba, draft, submit i niezmienna historia | TASK-004, TASK-013, TASK-007 | FR-010, FR-018, FR-032 | QA-03, QA-12, QA-15 |
| TASK-015 | Sesja, wybór celu i rekomendacja | TASK-010, TASK-014 | FR-001, FR-002, FR-003, FR-004, FR-021, FR-038 | QA-01, QA-19, QA-35 |
| TASK-016 | Noty i otwarty retrieval z rubryką | TASK-015 | FR-005, FR-006, FR-037 | QA-17, QA-33, QA-34 |
| TASK-017 | Warstwowy feedback i rationale wszystkich decyzji | TASK-014, TASK-010 | FR-011, FR-012 | QA-11, QA-17 |
| TASK-018 | Wiedza kontekstowa, comparison i powrót | TASK-017, TASK-016 | FR-012, FR-013, FR-014, FR-032 | QA-12, QA-34 |
| TASK-019 | Korekta, follow-up i wyjście | TASK-018 | FR-015, FR-016, FR-017, FR-021 | QA-13, QA-19 |
| TASK-020 | Ekspozycja, pomoc, rodziny i eligibility | TASK-014, TASK-009 | FR-015, FR-018, FR-019 | QA-14, QA-18 |
| TASK-021 | Późniejsza kontrola i dwa odstępy | TASK-020, TASK-019 | FR-020, FR-021 | QA-17, QA-18, QA-19 |
| TASK-022 | Zakres, postęp i profil dowodów | TASK-020, TASK-021 | FR-004, FR-022, FR-023, FR-024, FR-038 | QA-17, QA-18, QA-19 |
| TASK-023 | Formy testu tematu i warunki startu | TASK-011, TASK-020 | FR-025, FR-038 | QA-18, QA-31 |
| TASK-024 | Test: odpowiedzi, flags, review i finalizacja | TASK-023, TASK-014 | FR-008, FR-009, FR-010, FR-026, FR-028 | QA-14, QA-15 |
| TASK-025 | Test: pause, wznowienie i świadoma konwersja | TASK-024, TASK-007 | FR-027, FR-032 | QA-14, QA-16 |
| TASK-026 | Wynik testu i następny krok | TASK-024, TASK-022 | FR-011, FR-024, FR-028 | QA-09, QA-11, QA-15 |
| TASK-027 | Braki, zgłoszenie wątpliwości i korekta historii | TASK-017, TASK-024 | FR-033, FR-035 | QA-19, QA-28 |
| TASK-028 | PWA app shell, instalacja i gotowość offline | TASK-003, TASK-004 | FR-036 | QA-20, QA-21, QA-36 |
| TASK-029 | Aktualizator treści i atomowy commit | TASK-011, TASK-028 | FR-034, FR-035 | QA-22, QA-23, QA-24, QA-26, QA-29 |
| TASK-030 | Przypięte rewizje, wycofania i czyszczenie | TASK-029, TASK-027 | FR-010, FR-019, FR-032, FR-035 | QA-25, QA-28 |
| TASK-031 | Aktualizacja aplikacji bez utraty sesji | TASK-028, TASK-030 | FR-027, FR-032 | QA-27, QA-29 |
| TASK-032 | Stan danych, persist i błędy zapisu | TASK-008, TASK-029 | FR-032, FR-033 | QA-21, QA-29, QA-30 |
| TASK-033 | Testy domenowe, danych i integralności | TASK-019, TASK-022, TASK-025, TASK-030 | FR-007, FR-008, FR-009, FR-010, FR-018, FR-019, FR-020, FR-035 | QA-01, QA-04, QA-06, QA-07, QA-08, QA-09, QA-10, QA-16, QA-17, QA-18 |
| TASK-034 | E2E build: offline, profile, aktualizacja i awarie | TASK-031, TASK-032, TASK-033 | FR-032, FR-033, FR-034 | QA-20, QA-21, QA-22, QA-23, QA-24, QA-25, QA-26, QA-27, QA-29, QA-30 |
| TASK-035 | Regresja wizualna, klawiatura i dostępność | TASK-026, TASK-032, TASK-034 | FR-036, FR-037 | QA-14, QA-33, QA-34, QA-35, QA-36 |
| TASK-036 | Build do LAN, runbook i końcowy raport | TASK-035 | FR-034, FR-038 | QA-31, QA-32, QA-36 |
| VAL-030 | Opcjonalna deklaracja pewności |  | FR-030 |  |
| LATER-031 | Globalne wyszukiwanie PL/EN |  | FR-031 |  |

## Kryteria per zadanie

### TASK-001 — Wejścia, manifest i ochrona designu

Priorytet: Essential. Przyrost v0.1.

- Porównaj hashe wszystkich kopii references i uruchom kontrolę handoffu.
- Otwórz atlas/prototyp i zapisz bazowe sceny do porównania; nie zmieniaj referencji.

### TASK-002 — Tooling i moduły aplikacji

Priorytet: Essential. Przyrost v0.1.

- Utwórz TS strict/React/Vite, plain CSS i test runner bez backendu.
- Zapisz zgodne wersje, lockfile i komendy wymagane w docs/07; realny build przechodzi.

### TASK-003 — Shell Skupionej sesji i komponenty dostępności

Priorytet: Essential. Przyrost v0.1.

- Odtwórz tokeny, typografię, szerokości i Sesja/Zakres i dowody według makiet.
- Zapewnij fokus, dialog, fieldset/legend, tekstowe statusy i układ 320/390/768/1200.

### TASK-004 — Model IndexedDB, wersje i transakcje

Priorytet: Essential. Przyrost v0.1.

- Rozdziel stores treści i ucznia; każda operacja aktywności wymaga profileId.
- Migracja ma test starej bazy, blocked/versionchange i brak resetu po błędzie.

### TASK-005 — Tworzenie, wybór i nazwy profili

Priorytet: Essential. Przyrost v0.1.

- Selektor przy nowym uruchomieniu; nazwy 1–40, NFC, walidacja kolizji i stabilny UUID.
- Rename zachowuje wszystkie odwołania, polskie znaki i offline działają.

### TASK-006 — Izolacja profili i wiele kart

Priorytet: Essential. Przyrost v0.1.

- Odseparuj odpowiedzi, ekspozycję, plany, flags i ustawienia; brak domyślnego pierwszego profilu.
- Kontekst per karta i atomowa kontrola wersji/lease wykrywają konflikt.

### TASK-007 — Bezpieczne przełączanie i wznowienie profilu

Priorytet: Essential. Przyrost v0.1.

- Await zapisu przed przełączeniem; test dostaje pause bez finalizacji.
- Odświeżenie aktywnej karty odtwarza ten sam profil i tę samą próbę, bez nowego attemptId.

### TASK-008 — Eksport, import i usuwanie jednego profilu

Priorytet: Essential. Przyrost v0.1.

- Backup ma wersję, integralność, ekspozycję, oryginalne oceny i snapshoty.
- Import tworzy nowy profil bez merge; błędny nic nie zapisuje; delete dotyczy wyłącznie wskazanego profilu.

### TASK-009 — Kontrakt treści, projekcje i walidator

Priorytet: Essential. Przyrost v0.1.

- Wdroż schematy i walidację semantyczną pełnego QKP/referencji/użyć.
- QuestionPrompt nie zawiera solutions ani pomocnych mapowań; render bez raw HTML/JS.

### TASK-010 — Import T21 i procedura kolejnego tematu

Priorytet: Essential. Przyrost v0.1.

- Przeczytaj oba pełne pliki, zmapuj istniejące 32 zamknięte/128 rationale i 4 otwarte, wiedzę oraz potrzebne relacje i kontakty.
- Raport ma wszystkie liczniki/delty i zachowane pending review; drugi temat-fixture renderuje się bez hardcode.

### TASK-011 — Bramka treści i generowanie wydania

Priorytet: Essential. Przyrost v0.1.

- Review-only nie przechodzi do learner; formy wymagają własnego dopuszczenia.
- content:build jest deterministyczny, immutable URL/digest i manifest publikowany na końcu.

### TASK-012 — Dokładny scoring A/P/K i wektory

Priorytet: Essential. Przyrost v0.1.

- Implementuj reguły docs/06 niezależnie od UI, z dokładnymi ułamkami.
- 176 oczekiwanych wektorów i 1024 stanów T21 zgodne; dodatkowo K m=4/5 i A 5 opcji.

### TASK-013 — Kontrolki A/P/K i neutralna nauka formatu

Priorytet: Essential. Przyrost v0.1.

- A radio+wyczyść, P bez hard cap z n/k, K null/T/F i osobne clear, tekstowe etykiety.
- Format ma pomijalne neutralne objaśnienie bez naliczania dowodów RE.

### TASK-014 — Próba, draft, submit i niezmienna historia

Priorytet: Essential. Przyrost v0.1.

- Draft zapisuje się przy decyzji/flags i przed nawigacją; submit idempotentny commit.
- Próba ma przypięte rewizje i snapshot, feedback nie pozwala nadpisać pierwotnej odpowiedzi.

### TASK-015 — Sesja, wybór celu i rekomendacja

Priorytet: Essential. Przyrost v0.1.

- Jedna rekomendacja z przesłanką, wejście od noty albo pytania, wybór innego celu.
- Bez wymaganej diagnozy/daty, mastery/pełności FL; wznowienie ma pierwszeństwo z jasnym powodem.

### TASK-016 — Noty i otwarty retrieval z rubryką

Priorytet: Essential. Przyrost v0.1.

- Krótki rdzeń z rozwinięciem i kontaktem właściwego zakresu; brak obowiązku odczytu wszystkiego.
- Otwarte polecenie przed rubryką, jawna samoocena i brak automatycznego awansu do niezależnego pomiaru.

### TASK-017 — Warstwowy feedback i rationale wszystkich decyzji

Priorytet: Essential. Przyrost v0.1.

- Wynik i decydująca zasada; błędne/pominięte poprawne rozwinięte, reszta na żądanie.
- Kontakt jest logowany dla faktycznie ujawnionego RAT, nie całej ukrytej tabeli.

### TASK-018 — Wiedza kontekstowa, comparison i powrót

Priorytet: Essential. Przyrost v0.1.

- Jedna kotwica source attempt i stos treści; uzasadniony optional prerequisite bez bramki.
- Powrót/refresh zachowują odpowiedź/wynik/rewizję/ujawnienia/scroll/fokus i nie tworzą próby.

### TASK-019 — Korekta, follow-up i wyjście

Priorytet: Essential. Przyrost v0.1.

- Celowana ścieżka B→REM→F→alternatywna pomoc→G według treści, z możliwością wcześniejszego wyjścia.
- Po dwóch niepowodzeniach inne wsparcie/przerwa; neutralna korekta gdy brak sondy; D nie jest trzecią kontrolą.

### TASK-020 — Ekspozycja, pomoc, rodziny i eligibility

Priorytet: Essential. Przyrost v0.1.

- Snapshot przed pokazaniem, potem event; niezależne wymiary pomocy/itemu/rodziny/kontekstu/metody.
- Nowe ID/tłumaczenie/revizja nie resetuje znajomości; niepełna historia pozostaje niepewna.

### TASK-021 — Późniejsza kontrola i dwa odstępy

Priorytet: Essential. Przyrost v0.1.

- Dwa odstępy per criterion/aspect z historii sprzed próby, bez EO-level reset.
- Wybór eligible aktywności przed ponowną lekturą; brak zadania pokazuje uczciwą alternatywę.

### TASK-022 — Zakres, postęp i profil dowodów

Priorytet: Essential. Przyrost v0.1.

- Punkty/warunki/kategorie obserwacji/mianowniki osobno; źródło etykiety na żądanie.
- Brak korpusu, brak dowodów i ograniczona historia rozdzielone; zero mastery/pass forecast.

### TASK-023 — Formy testu tematu i warunki startu

Priorytet: Essential. Przyrost v0.1.

- FormRef z ID/revizją, declared scope, kolejność i użycia; sprawdź eligibility przed ekspozycją.
- Silnik testowany na jawnej formie technicznej; brak dopuszczonej T21 nie jest obchodzony automatycznym wyborem D01–08.

### TASK-024 — Test: odpowiedzi, flags, review i finalizacja

Priorytet: Essential. Przyrost v0.1.

- Prompt-only przed finalizacją; flags dostępne, odpowiedzi edytowalne, review neutralny.
- Całość commit idempotentnie, potem wynik i rationale, bez podglądu trafności w DOM/AT.

### TASK-025 — Test: pause, wznowienie i świadoma konwersja

Priorytet: Essential. Przyrost v0.1.

- Wstrzymany test nadal ogranicza wiedzę w kontekście profilu, pause zapisuje przerwę.
- Dialog konwersji całej formy, anulowanie bez przecieku, brak odzyskania niezależności po refresh/import.

### TASK-026 — Wynik testu i następny krok

Priorytet: Essential. Przyrost v0.1.

- Dokładna suma i procent punktów, zakres i warunki, dostępne pełne rationale.
- Brak progu zdania tematu i werdyktu całego FL; jeden uzasadniony dalszy krok.

### TASK-027 — Braki, zgłoszenie wątpliwości i korekta historii

Priorytet: Essential. Przyrost v0.1.

- Różne stany braków; critical QKP blokuje cały item, optional link nie blokuje rationale.
- Lokalne zgłoszenie ma kontekst/revizję i eksport; nie zmienia klucza. Odgórna korekta zachowuje starą ocenę.

### TASK-028 — PWA app shell, instalacja i gotowość offline

Priorytet: Essential. Przyrost v0.1.

- Manifest, ikony i scope/base poprawne; shell bez CDN, działa jako zwykła strona.
- Gotowe offline dopiero po pełnym zapisie; offline cold start po pobraniu działa.

### TASK-029 — Aktualizator treści i atomowy commit

Priorytet: Essential. Przyrost v0.1.

- Implementuj docs/04: start/foreground/online/manual i okresowy fallback widocznej app, własny host, stage/verify/commit, compatibility.
- Timeout, portal, digest/schema/ref/quota/kill przed commit zachowują stare wydanie i postęp.

### TASK-030 — Przypięte rewizje, wycofania i czyszczenie

Priorytet: Essential. Przyrost v0.1.

- Nowe aktywności widzą nowe treści; aktywne zachowują snapshots; GC sprawdza wszystkie profile i karty.
- Krytyczne wycofanie zatrzymuje test neutralnie, bez klucza; nie resetuje ekspozycji ani odpowiedzi.

### TASK-031 — Aktualizacja aplikacji bez utraty sesji

Priorytet: Essential. Przyrost v0.1.

- SW prompt/waiting, bez auto-reload; Zapisz i odśwież dopiero po commit/przerwie.
- Koordynacja kart, kompatybilne migracje i odtworzenie tej samej próby po update.

### TASK-032 — Stan danych, persist i błędy zapisu

Priorytet: Essential. Przyrost v0.1.

- Dane aplikacji pokazują lokalną wersję/gotowość offline i wynik persist bez blokowania przy odmowie.
- Quota/write error zachowuje draft, udostępnia kopię i nie kasuje profili.

### TASK-033 — Testy domenowe, danych i integralności

Priorytet: Essential. Przyrost v0.1.

- Uruchom rzeczywiste testy scoring/state/evidence/profile/migration/replay i raport wyników.
- Brak skipped/fake PASS; negatywne fixture mają rzeczywiste oczekiwane błędy.

### TASK-034 — E2E build: offline, profile, aktualizacja i awarie

Priorytet: Essential. Przyrost v0.1.

- Testy build z SW i IndexedDB obejmują serwer A/B, urwane requesty, restart i realne profile.
- Wymuszone błędy nie usuwają danych i nie ujawniają rozwiązań.

### TASK-035 — Regresja wizualna, klawiatura i dostępność

Priorytet: Essential. Przyrost v0.1.

- Porównaj wszystkie kluczowe stany z baseline desktop/mobile, nowe profile w tym samym systemie.
- Przeprowadź keyboard/axe/reflow i dostępny rzeczywisty reader/device check; brak środowiska raportuj jawnie.

### TASK-036 — Build do LAN, runbook i końcowy raport

Priorytet: Essential. Przyrost v0.1.

- Wszystkie techniczne AC przyrostu spełnione, komendy działają, instrukcja HTTPS/base/publikacji/rollback/kopii.
- IMPLEMENTATION_REPORT oddziela wykonanie od G2/G3/G4 i sprawdzeń nieprzeprowadzonych; brak deploymentu bez zlecenia.

### VAL-030 — Opcjonalna deklaracja pewności

Priorytet: Validate. Poza przyrostem v0.1.

- Nieaktywne w bazowej sesji; odrębne badanie po decyzji właściciela.

### LATER-031 — Globalne wyszukiwanie PL/EN

Priorytet: Later. Poza przyrostem v0.1.

- Późniejszy przyrost; lokalne linki i terminy nie są globalną wyszukiwarką.

## Zasada iteracji

Po każdym pionowym przekroju uruchom właściwe kontrole; napraw znalezione błędy i dołącz wynik. Nie zgłaszaj końca tylko dlatego, że build działa. Na końcu wykonaj docs/07 i raport; niewykonane device/AT i dopuszczenia mają własny status, bez fikcyjnego PASS.
