# Raport implementacji — przyrost v0.1 PWA IREB CPRE

Data: 2 listopada 2026. Gałąź `main`, zmiany niezacommitowane na bazie `3c76bb6 init`. Środowisko: Windows 11, Node 24.15.0, Playwright 1.64.1 (Chromium, Firefox, WebKit w wersjach dołączonych do Playwright).

**Granica raportu.** To raport technicznego wykonania. Nie jest odbiorem treści, walkthrough G3, decyzją G4, audytem WCAG 2.2 AA, badaniem użytkowników ani dowodem skuteczności nauki. **G2, G3 i G4 pozostają otwarte.** T21 pozostaje „do odrębnego review”. Nie publikowano niczego zewnętrznie.

## 1. Co powstało

- PWA w TypeScript strict + React + Vite, Dexie/IndexedDB, vite-plugin-pwa (`prompt`), zwykły CSS z `design/tokens.css`. Stylistyka Skupionej sesji odtworzona z prototypu; brak redesignu.
- Nazwane profile lokalne (wybór przy starcie, nazwa 1–40 znaków po NFC, UUID, izolacja, przełączanie z zapisem, kopia i odtworzenie jednego profilu, usuwanie tylko wskazanego).
- Nauka A/P/K z potwierdzeniem braków lub nadmiaru, warstwowym feedbackiem, rationale każdej decyzji, wiedzą kontekstową ze stosem i powrotem (fokus, scroll, ujawnienia), korektą F→inne wyjaśnienie→G z limitem dwóch nieudanych kontroli, neutralnym tutorialem formatu (D04 §3), otwartym retrieval z rubryką i samooceną.
- Test tematu bez limitu: tylko projekcja `QuestionPrompt` przed finalizacją, flagi, edycja, neutralny przegląd, idempotentna finalizacja, przerwa jako ta sama próba, nieodwracalna konwersja do Nauki, wynik z dokładnym ułamkiem i procentem punktów.
- Zakres i dowody: pięć opisów kategorii (B01-10), dwa odstępy per zakres, flaga „Sprawdź ponownie”, rozdzielenie braku materiału i braku dowodów. Wyniki z wycofanej lub spornej rewizji są w historii, ale nie służą jako dowód.
- Offline (app shell w SW, treści w IndexedDB), atomowe aktualizacje treści z hosta LAN (probe → stage → verify → commit z CAS, GC) i aktualizacja kodu tylko po „Zapisz i odśwież”.
- Import T21 (32 itemy / 128 rationale / suma wag 47, 4 otwarte, 8 not, 3 comparisons, 2 worked scenarios, 8 korekt) ze statusami źródła oraz syntetyczne fixtures techniczne TECH01 jako drugi temat.
- Dokumentacja: `docs/IMPLEMENTATION_DECISIONS.md`, `docs/RUNBOOK_LAN.md`, `content/normalized/T21-IMPORT_REPORT.md`, `backlog/tasks.json` z dowodami.

## 2. Komendy i wyniki

Wszystkie komendy uruchomiono w tym środowisku. Logi znajdują się w `qa/evidence/`.

| Komenda | Wynik | Dowód |
|---|---|---|
| `npm run typecheck` | 0 błędów (app, testy, skrypty) | `qa/evidence/check.log` |
| `npm run lint` | 0 błędów | `qa/evidence/check.log` |
| `npm run content:validate` | 19/19 kontroli PASS, w tym 8 przypadków negatywnych z oczekiwanymi kodami | `qa/evidence/check.log` |
| `npm test` | 242 testy, 11 plików, 0 pominiętych | `qa/evidence/check.log` |
| `npm run build` | build z SW; T21 wykluczone z kanału learner (7 kodów bramki) | `qa/evidence/check.log` |
| `npm run check` | EXIT=0 (typecheck → lint → content:validate → test → build) | `qa/evidence/check.log` |
| `npm run test:e2e` | 64 passed, 0 failed, 0 flaky, 0 retry (Chromium 33, Firefox 15, WebKit 12, review 4); 2,5 min; EXIT=0 | `qa/evidence/e2e.log`, `qa/evidence/playwright-e2e-results.json` |
| `npm run test:visual` | 3 passed; EXIT=0 | `qa/evidence/visual.log` |
| `npm run content:release` | celowo odmawia, dopóki w wejściu jest pakiet review-only (T21) | `scripts/content/build-release.ts --strict` |
| `python -I -X utf8 scripts/check_handoff.py` | 19/20 PASS, w tym references 76/76 bez zmian. Jedyny FAIL to „No work falsely completed”: kontrola wymaga, by każde zadanie miało status `todo`/`deferred` bez dowodów. To bramka sprzed implementacji, więc po wpisaniu dowodów do `tasks.json` nie przechodzi z definicji. Przed rozpoczęciem pracy wynik był 20/20. | `qa/evidence/handoff.log` |

Rozmiar app shell (gzip): JS 144,9 KiB + CSS 3,4 KiB + workbox-window 2,2 KiB. Próg ≤ 250 KiB jest spełniony. Ajv nie trafia do bundla; walidacja w runtime jest własna.

## 3. Testy e2e na buildzie z service workerem

Build pod podkatalogiem `/cpre/` (`dist-e2e`, drugi build `dist-e2e-b` do testu aktualizacji kodu, build recenzencki `dist-review` pod `/cpre-review/`). Serwowane przez testowy host LAN `tests/e2e/server.ts`. Host ma produkcyjne nagłówki, prawdziwe 404 dla JSON i tryby awarii: portal HTML, 503, zawieszenie, zły digest, urwane pobieranie, błąd schematu, niekompatybilny manifest, wycofanie, rollback.

| Scenariusz | Chromium | Firefox | WebKit | Plik |
|---|---|---|---|---|
| QA-36 smoke: manifest scope/start_url `/cpre/`, ikona maskable, 404 JSON, brak CDN, brak treści review w buildzie ucznia | ✓ | ✓ | ✓ | smoke.spec.ts |
| QA-01/02 izolacja, rename z polskimi znakami, kolizja nazw, usunięcie tylko Bartka | ✓ | ✓ | — | profiles.spec.ts |
| PROF-01 nowa karta → selektor; refresh → ten sam profil i próba | ✓ | ✓ | — | profiles.spec.ts |
| QA-05 dwie karty, różne profile | ✓ | ✓ | — | profiles.spec.ts |
| QA-04 ta sama próba w dwóch kartach: wykryty konflikt, jawne przejęcie | ✓ | ✓ | — | profiles.spec.ts |
| QA-06/07/08 A/P/K w Nauce, potwierdzenie braków, punkty 0/1, 1/2, 4/3 | ✓ | — | ✓ | learning.spec.ts |
| QA-12/34 opcja → wiedza → porównanie → Wstecz → Escape; fokus, wynik, refresh | ✓ | — | ✓ | learning.spec.ts |
| QA-13 dwa nieudane follow-up → zmiana wsparcia, brak trzeciej kontroli | ✓ | — | ✓ | learning.spec.ts |
| FR-029 neutralny tutorial formatu (2/3 dla K z pustym wierszem) | ✓ | — | ✓ | learning.spec.ts |
| FR-032 „Zapisz miejsce i wyjdź” → wznowienie tej samej próby | ✓ | — | ✓ | learning.spec.ts |
| QA-33 brak skryptów w treści, brak poziomego scrolla przy 320 px | ✓ | — | ✓ | learning.spec.ts |
| QA-14/15 Sprawdzenie bez przecieków (DOM, drzewo dostępności, tytuł, URL), flagi, przegląd, podwójna finalizacja, 13/3 = 4,33/5 | ✓ | — | ✓ | topic-test.spec.ts |
| QA-16 konwersja: anuluj nic nie ujawnia; potwierdzenie trwałe po refresh | ✓ | — | ✓ | topic-test.spec.ts |
| FR-027 przerwa i wznowienie tej samej próby, „1 zapisana przerwa” | ✓ | — | ✓ | topic-test.spec.ts |
| QA-20 po „Gotowe offline”: zamknięcie, offline, nowa instancja, selektor, nauka, finalizacja testu, deep link | ✓ | ✓ | — | offline.spec.ts |
| QA-21 pierwszy start bez treści: „Materiały są przygotowywane”, brak fałszywego „Gotowe offline”, retry | ✓ | ✓ | — | offline.spec.ts |
| QA-22 portal 200 HTML i 503 bez aktywacji; LAN wraca bez zdarzenia `online` (okresowa kontrola, zegar sterowany) | ✓ | ✓ | — | updates.spec.ts |
| QA-23 zły digest / urwane pobieranie / błąd schematu: zero częściowej aktywacji, postęp zachowany | ✓ | ✓ | — | updates.spec.ts |
| QA-25 nowe wydanie podczas odpowiedzi: przypięta r1; nowa aktywność dostaje r2 | ✓ | ✓ | — | updates.spec.ts |
| QA-26 niekompatybilny manifest; rollback wyższym sequence z zachowaniem postępu | ✓ | ✓ | — | updates.spec.ts |
| QA-28 wycofanie/spór: neutralne wstrzymanie całego testu, brak klucza, blokada nowych użyć, historia bez użycia jako dowód | ✓ | ✓ | — | updates.spec.ts |
| QA-27 nowy SW czeka; „Później” bez reloadu; „Zapisz i odśwież” → przerwa, ta sama próba i profil, build B | ✓ | — | — | app-update.spec.ts |
| QA-29/03 odmowa zapisu: draft w pamięci, komunikat, blokada zmiany profilu | ✓ | — | — | failures.spec.ts |
| QA-29 nowsza baza z innej karty: komunikat, dane nieusunięte | ✓ | — | — | failures.spec.ts |
| QA-30 eksport, uszkodzony import nic nie zapisuje, poprawny tworzy nowy profil bez scalania | ✓ | — | — | failures.spec.ts |
| axe (WCAG 2.x A/AA, poziom serious/critical) na 13 stanach; obsługa wyłącznie klawiaturą; cele ≥ 44 px | ✓ | — | — | a11y.spec.ts |
| Tryb recenzencki T21: brak nazwy kryterium przed odpowiedzią, długie treści z tabelami przy 320 px, brak formy T21, O01 z samooceną | ✓ (projekt `review`) | — | — | review.spec.ts |

Końcowy przebieg: 64 testy zaliczone, 0 niezaliczonych, 0 niestabilnych, bez ponowień (`qa/evidence/e2e.log`).

QA-24 (zabicie procesu przed lub po przełączeniu wskaźnika) jest pokryty testem jednostkowym `tests/unit/updater.test.ts`: staging porzucony, stare wydanie aktywne, a commit nie wskazuje brakujących paczek. QA-17/18 (dwa odstępy, rodziny, niepełna historia) mają testy jednostkowe ze sterowanym zegarem. To symulacja, nie rzeczywisty odstęp.

## 4. Testy jednostkowe (242)

- Punktacja: 176 wektorów T21 z QA §7, pełne 1024 stany, A z 5 opcjami, K m=4/5, `2/3 + 2/3 + 2/3 = 2`.
- Profile i próby: walidacja nazw, kolizje, rename, izolacja, CAS i lease, idempotentny submit i finalize, pauza, konwersja.
- Ekspozycja i dowody: dwa odstępy, 7 dni + 1 min, kontakt innego ZAK nie resetuje, nowość po rodzinie, niepełna historia.
- Kopia: digest dokładnych bajtów `payloadJson`, przykład z paczki, obce rekordy odrzucone, konwersja zachowana po imporcie.
- Aktualizator: aktywacja, portal, zły digest, review-only w kanale learner, niekompatybilność, równoległy commit dwóch kart, rollback, GC, restart przed commit, wycofania, cooldown i backoff.
- Baza: indeksy `profileId`, nowsza baza odrzucona bez usuwania, `versionchange`.
- Projekcje (wszystkie 32 itemy T21 bez klucza i rationale w prompt) i bezpieczny Markdown.

## 5. Zgodność wizualna (TASK-035, QA-35)

`tests/visual/fidelity.spec.ts` otwiera zaakceptowany prototyp z `references/design` (tylko odczyt) i porównuje w tej samej przeglądarce: tło, font, rozmiar i interlinię H1, położenie i szerokość kolumny, kolory, wysokość i promień przycisku głównego, font akapitu i kolor nawigacji. Porównanie obejmuje stany Sesja (1200 i 390), K przed odpowiedzią (1200 i 390), feedback P, test P, przegląd testu, wynik i konwersję. Wszystkie metryki zgodne w tolerancji 1–2 px; końcowy przebieg 3/3 PASS.

Zrzuty implementacji (43 pliki): `qa/screenshots/desktop-*.png` (1200×900) i `qa/screenshots/mobile-*.png` (390×844). Stany: profile, sesja, menu profilu, A/P/K, feedback A/P, wiedza (pełny ekran na telefonie), korekta, follow-up, warunki testu, test P, przegląd, wynik, dialog konwersji, po konwersji, brak wariantu, dwa nieudane follow-up, sporny klucz, zakres, dane aplikacji i status offline. Brak poziomego przewijania przy 320/390/768/1200 px.

Osobny baseline regresji implementacji (`tests/visual/fidelity.spec.ts-snapshots/`) nie zastępuje referencji projektowych. Regenerowano go raz, po celowych zmianach UI (pager bez ramki jak w prototypie, neutralne etykiety przed odpowiedzią, link tutorialu), a nie w odpowiedzi na nieudany test. `references/**` nie zmieniono: 76/76 SHA-256 zgodnych.

## 6. Problemy wykryte testami i naprawione

| Problem | Naprawa |
|---|---|
| Nazwa zakresu („adequate”) pokazywana przed pytaniem T21-B01 była odpowiedzią (B-DEC-14, INTRO-T21) | Przed odpowiedzią tylko neutralne kryterium i temat; nazwa zakresu pojawia się przy wejściu przez materiał i po odpowiedzi |
| Pierwsza próba bazowa oznaczana jako „wykazane w nowym kontekście” | Nowy kontekst wymaga zrecenzowanego wariantu, roli innej niż base oraz wcześniejszej samodzielnej próby |
| „Zapisz i odśwież” nie przeładowywał na stronie pierwszej wizyty | Reload po aktywacji oczekującego workera, niezależnie od zdarzenia `controlling` |
| Dexie 4 po cichu otwierał bazę z nowszej wersji aplikacji | Jawna odmowa i komunikat; dane nieusuwane |
| Szybkie kolejne zmiany w jednej karcie wywoływały konflikt z samym sobą | Kolejka zapisów per widok z najnowszą wersją próby; konflikty między kartami nadal wykrywane |
| WebKit: fokus nie wracał do kontrolki po zamknięciu dialogu | Zapamiętanie aktywowanej kontrolki i przywrócenie fokusu po zamknięciu `<dialog>` |
| Fałszywy baner „Dostępna jest aktualizacja aplikacji” w drugiej karcie przy pierwszej instalacji SW | Baner tylko przy oczekującym workerze obok aktywnego |

## 7. Status backlogu

`backlog/tasks.json`: **34 × done, 2 × blocked-environment, 2 × deferred** (VAL-030, LATER-031 bez zmian).

- **TASK-035, blocked-environment.** Wykonano porównanie wizualne, axe, klawiaturę i reflow. Brakuje rzeczywistego czytnika ekranu (NVDA + Firefox lub VoiceOver + Safari), fizycznego telefonu oraz ręcznego testu 400% zoom i text-spacing. W tym środowisku nie ma technologii asystujących ani urządzeń.
- **TASK-036, blocked-environment.** Wykonano runbook, build, decyzje i ten raport. Brakuje rzeczywistego hosta HTTPS w LAN oraz testu instalacji na Chromium/Edge desktop, Android Chrome i iOS Safari (część QA-36). Deploymentu nie zlecono i nie wykonano.

### Ręczny protokół do wykonania (TASK-035/036)

1. Opublikuj `dist/` według `docs/RUNBOOK_LAN.md` na docelowym HTTPS.
2. Zainstaluj PWA na Chromium/Edge, Android Chrome i iOS Safari. Utwórz profil, zaczekaj na „Gotowe offline” w „Dane aplikacji”, przejdź w tryb samolotowy i otwórz z ikony.
3. Czytnik ekranu: sesja, pytania A/P/K (grupy i stan „Brak odpowiedzi”), dialog wiedzy (powrót i Escape), test z flagami, przegląd, wynik i komunikaty statusu.
4. 400% zoom i text-spacing (WCAG 1.4.10 i 1.4.12) na pytaniu K i feedbacku P.

## 8. Treści i dopuszczenia — stan rzeczywisty

- **T21**: zaimportowany kompletnie do kontraktu. review `pending`, publication `review-only`, `allowedUses: []`, rights `review-only/internal-review`, `forms: []`. Rodziny `pending`. Kanał learner go odrzuca. Widoczny wyłącznie w buildzie recenzenckim (osobna baza `ireb-cpre-demo`, pasek „Tryb recenzencki”).
- **Relacje T21**: funkcje korzystają z R08/R09/R18/R19 i jawnych instancji R10/R11/R14. Rejestr §8.3 (538 instancji) nie został przepisany w całości. Kontakty rationale obejmują zakres primary (zachowawczo, bez resetu cudzych zegarów). Szczegóły w raporcie importu.
- **TECH01**: syntetyczne fixtures techniczne (neutralne „Opcja 1–4”, zero treści IREB) z technicznym „dopuszczeniem” wyłącznie do demonstracji kanału learner, formy testu i aktualizacji. To nie jest dopuszczenie żadnej treści egzaminacyjnej.
- Nie wygenerowano kluczy, rationale, relacji, recenzji ani zgód. Brak runtime LLM.

## 9. Pozostałe zależności i decyzje właściciela

- **Brak commita.** Cała praca jest niezacommitowana w drzewie roboczym na `main`.

- **G2**: odrębne review T21 (QG-09, C-AC-12), prawa kanału, decyzja użyć. Bez tego build ucznia pokazuje tylko TECH01 albo pusty korpus.
- **G3**: walkthrough na rzeczywistych, dopuszczonych treściach. Testy na fixtures go nie zastępują.
- **G4**: formalna decyzja zakresu.
- **Forma U-TOPIC T21**: brak dopuszczonej formy; silnik testowany na jawnej formie technicznej.
- **Host LAN**: stały origin HTTPS i certyfikat ustala operator.
- Propozycje w `docs/IMPLEMENTATION_DECISIONS.md` (forma T21, pełna integracja relacji §8.3) czekają na decyzję właściciela.
