# Decyzje implementacyjne — przyrost v0.1

Data: 2 listopada 2026. Rutynowe, odwracalne decyzje techniczne podjęte w trakcie implementacji (CLAUDE.md). Nie zmieniają zaakceptowanego wyglądu, pedagogiki, punktacji, izolacji danych ani zakresu Later/Validate. Pozycje oznaczone **[do decyzji właściciela]** są jawnymi propozycjami.

## Stos i wersje

| Obszar | Wybór (lockfile) | Uzasadnienie |
|---|---|---|
| Node | 24.15.0 (`.node-version`, `engines >=22.12`) | LTS dostępne lokalnie; wymagane przez Vite 8 / Vitest 5 |
| UI | React 19.3.1, TypeScript 6.0.3 strict (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) | TS 7.0 nie jest jeszcze obsługiwany przez typescript-eslint 8.72 (peer `<6.1`); wybrano najnowszy zgodny |
| Build | Vite 8.3.5, @vitejs/plugin-react 6.2.1 | — |
| PWA | vite-plugin-pwa 2.0.0, `registerType: 'prompt'`, workbox 7.4.1 | SW tylko dla app shell; brak `skipWaiting`/`clientsClaim` automatycznego |
| Dane | Dexie 4.4.7 / IndexedDB | — |
| Walidacja | Ajv 8.20 (Draft 2020-12) + ajv-formats — tylko w skryptach build | Runtime używa lżejszej walidacji strukturalnej i semantycznej (`src/content/validate.ts`), bez Ajv w bundlu |
| Testy | Vitest 5.0.5 + fake-indexeddb, Playwright 1.64.1, @axe-core/playwright 4.14 | — |

Rozmiar początkowego JS app shell: patrz raport (próg ≤ 250 KiB gzip).

## Architektura

- **Moduły**: `src/domain` (ułamki, punktacja — bez React), `src/content` (kontrakt, projekcje, walidator, selektory), `src/data` (IndexedDB, profile, próby, ekspozycja, kopia), `src/updates` (aktualizator treści), `src/services` (orkiestracja Nauki/Sprawdzenia, planer rekomendacji), `src/features` (widoki), `src/ui` (prymitywy: Markdown, Dialog, Layout).
- **Routing**: hash (`#/sesja`, `#/sprawdzenie/<id>/<n>` …). Działa pod dowolnym base (`/cpre/`) i przy głębokich linkach offline; URL nie zawiera nazw reguł/kryteriów.
- **Kontekst profilu per karta**: `sessionStorage` przechowuje wyłącznie ID profilu tej karty (refresh odtwarza profil i próbę; nowa karta/instancja PWA zaczyna od selektora). `localStorage` przechowuje tylko ID ostatnio użytego profilu jako sugestię. Brak globalnego `currentProfileId`.
- **Jeden piszący**: każda zmiana próby to transakcja z compare-and-swap na `versionCounter` + lease 30 s. Konflikt drugiej karty jest wykrywany i pokazywany („Przejmij edycję w tej karcie”), nigdy cichy last-write-wins.
- **Projekcja promptu**: widoki Sprawdzenia trzymają w stanie wyłącznie `QuestionPrompt` (bez klucza, rationale, kryteriów, rodzin, źródeł). Rozwiązanie dołącza serwis po finalizacji/konwersji.
- **Kanały wydania**: `content:build` zapisuje wydania do `release-out/content/{learner,review}`; plugin Vite kopiuje do `dist/content` **tylko** kanał budowanej aplikacji. Build ucznia (`npm run build`) nie zawiera T21. Build recenzencki (`npm run build:review` → `dist-review`) używa osobnej bazy `ireb-cpre-demo` i stałego paska „Tryb recenzencki”.

## Treści

- **T21 → `content/normalized/T21.r1-full1.json`**: pełny import obu plików (32 itemy/128 rationale, 4 otwarte z rubrykami, 8 not, 3 comparisons, 2 worked scenarios, INTRO/TERM/PRE, 8 korekt, 12 rodzin roboczych). Statusy źródła zachowane: review `pending`, publication `review-only`, `allowedUses: []`, rights `review-only`/`internal-review`, `forms: []`. Kanał learner odrzuca pakiet (7 kodów błędów bramki).
- **Relacje**: funkcje przyrostu korzystają z R08/R09 (w rationale), R18/R19 (w korektach) oraz jawnych instancji R10/R11/R14. Pozostałe instancje rejestru §8.3 (538) nie zostały przepisane 1:1 — pozostają w źródle (opisane w raporcie importu). Nie wygenerowano żadnej relacji.
- **REG-T21-TYPE**: dodano jako regułę pakietu, bo D08-d i CMP-T21-01 odwołują się do niej w źródle (CL-T21-09); źródła przepisane z §2.2.
- **Kryterium wtórne KRY-T21-02** w itemach ścieżki 08: mapowanie `secondary` bez aspektu (źródło nie nadaje mu własnego ZAK); te same decyzje nie liczą się jako dwie niezależne obserwacje.
- **AUX-T21-03/04**: zapisane jako kryteria pomocnicze bez EO (`eoRefs: []`), zgodnie ze źródłem.
- **TECH01 — syntetyczne fixtures techniczne** (`scripts/content/make-tech-fixture.ts`): neutralne etykiety „Opcja 1–4”, zero treści IREB, oznaczone w treści i pasku statusu. Mają techniczne „dopuszczenie” (`FIXTURE-TECH01-*`) wyłącznie po to, by demonstrować kanał learner, formę testu, follow-up i aktualizacje. **Nie jest to dopuszczenie treści ani formy T21.**
- Brak formy U-TOPIC T21: ekran warunków pokazuje „Nie mamy odpowiedniego zestawu do tego zakresu”; nie ma automatycznego wyboru D01–08.

## Pedagogika — interpretacje wykonawcze (bez zmiany zasad)

- **Nagłówek pytania**: treść nie zawiera tytułów itemów, a ich dopisanie byłoby tworzeniem treści. H1 jest neutralny („Twoja odpowiedź.” / „Sprawdź inną sytuację.”), stem jest akapitem pod nim — ta sama hierarchia co w makiecie.
- **Zasada rozstrzygająca w feedbacku**: reguła wspólna dla wszystkich rationale itemu (w T21 to zawsze REG właściwego ZAK); fallback: pierwsza reguła rationale klucza.
- **Link „Zobacz: …” przy opcji**: nota połączona przez R10 z pierwszą regułą rationale tej opcji; bez podobieństwa tekstu.
- **Licznik follow-up**: liczony na próbie follow-up (`failedFollowUps`) w gałęzi źródłowej próby B. F→(inne wyjaśnienie)→G; po drugim niepowodzeniu stan „Zmieńmy sposób wyjaśnienia…”, brak trzeciej kontroli; D nigdy nie jest follow-up.
- **Kategorie dowodów**: kwalifikacja jednej obserwacji do jednej z pięciu kategorii B01-10 (etykiety dosłowne w „Zakres i dowody”). „Wykazane w nowym kontekście” wymaga: wariantu z `noveltyReview: independent`, roli innej niż base/practice oraz wcześniejszej samodzielnej próby w zakresie. „Utrzymane po przerwie” wymaga ≥ 24 h od ostatniego istotnego kontaktu (parametr pilota B01-10, opisany jako ograniczenie). Błąd dodaje tylko flagę „Sprawdź ponownie” dla tego zakresu.
- **Późniejsza kontrola w rekomendacji**: proponowana, gdy w zakresie jest samodzielna próba i ≥ 24 h od ostatniego istotnego kontaktu, a istnieje dostępny kandydat delayed; znany item jest oznaczony komunikatem MSG-KNOWN.
- **Samoocena otwartej odpowiedzi**: zapisywana jako `rubric-self` (4 poziomy), nigdy jako punkty CPRE ani dowód niezależny.
- **Pauza**: tylko test tematu bez limitu (Level 1). Pełny mock na czas pozostaje odłożony.

## PWA i aktualizacje

- Parametry docs/04 zaimplementowane dosłownie: timeout 8 s, `cache: no-store`, `redirect: 'error'`, odrzucenie HTML (portal), cooldown 60 s, okresowo 5 min przy widocznej aplikacji, backoff 30 s / 2 min / 10 min / 30 min, limity 256 KiB / 10 MiB / 50 MiB.
- **„Zapisz i odśwież”**: najpierw zapis przerwy aktywnego testu i miejsca Nauki; dopiero potem `SKIP_WAITING` i reload po aktywacji oczekującego workera (także gdy strona pierwszej wizyty nie była jeszcze kontrolowana przez SW — wykryte testem e2e).
- **Nowsza baza danych** (np. po aktualizacji w innej karcie): aplikacja odmawia pracy z nieznanym schematem i pokazuje komunikat; dane nie są usuwane (Dexie 4 domyślnie otworzyłby taką bazę — wykryte testem e2e).
- Wycofania z manifestu są kumulatywne; aktywny test, którego przypiętej rewizji dotyczy krytyczna decyzja, jest wstrzymywany jako cała forma („Ta próba wymaga aktualizacji materiału. Zachowaliśmy odpowiedzi”), z wyborem „Zakończ bez wyniku” albo „Przejdź do Nauki”.

## Odstępstwa techniczne od makiet (bez zmiany kompozycji)

- Pasek u góry: w prototypie „Prototyp D v0.1 …”; w aplikacji ten sam pasek pełni rolę dyskretnego statusu (offline, aktualizacje, błąd zapisu, tryb techniczny/recenzencki).
- Nagłówek ma dodatkowy przycisk z nazwą profilu (menu: Zmień profil, Kopia postępu, Dane aplikacji) — zgodnie z docs/02.
- `h1[tabindex=-1]:focus` bez obrysu: fokus programowy po zmianie widoku przenosi miejsce czytania; kontrolki zachowują obrys 3 px.
- Ikony aplikacji: proste, generowane deterministycznie (`scripts/make-icons.ts`), kolor akcentu i papieru; bez nowego brandingu.

## Propozycje do decyzji właściciela

- **[do decyzji właściciela]** Form U-TOPIC dla T21: brak — wymaga odrębnego review doboru, kolejności i przecieków (GAP-T21-06).
- **[do decyzji właściciela]** Integracja pozostałych instancji relacji T21 (§8.3) do pakietu — warto zrobić po review relacji.
