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

## Format autorski `cpre-authoring/1.0` (docs/13, etap 1 z 4)

- **Cel**: zasilanie treści z plików YAML/Markdown przygotowanych poza aplikacją. Zlecenie właściciela z 2.11.2026; kierunek zaakceptowany po przeglądzie grafiki przepływu, grafu obiektów i mapy ekranów.
- **Nazwy pól angielskie**, zgodne z kontraktem paczki; treść po polsku. Domyślna odpowiedź przyjęta przy akceptacji, bo właściciel nie wskazał innej.
- **Klucz i uzasadnienie przy opcji**: opcja, poprawność, uzasadnienie i reguły w jednym miejscu. Konwerter rozdziela je na treść pytania i rozwiązanie, więc projekcja testu nie dostaje klucza.
- **Reguły lekcji w nagłówku lekcji**, nie w `relations.yaml`: aplikacja łączy uzasadnienie z notą przez pierwszą regułę (`noteForRule`), a okno wiedzy podsuwa materiały przez wspólne reguły i zakresy. `relations.yaml` przechowuje semantykę R10–R14 i R21 do recenzji. Kontrole F i G są listą `followUps` w korekcie, bo kontrakt trzyma je jako uporządkowane `followUpRefs`.
- **Instrukcja formatu nie jest polem autorskim**: aplikacja wylicza ją z formatu i `k` (`formatInstruction`), co wyklucza rozjazd instrukcji i punktacji. Pole `instruction` kontraktu wypełni konwerter tym samym tekstem.
- **`review/decisions.yaml` pisze wyłącznie upoważniona osoba**; brak pliku oznacza pending/review-only/bez użyć. Szablon decyzji niczego nie dopuszcza.
- **Przykład T21-mini** (`examples/authoring/T21-mini`) wygenerowano programowo z `content/normalized/T21.r1-full1.json`; test porównuje go ze źródłem pole po polu. Leży w `examples/`, nie w `content/authoring/`, żeby nie kolidował identyfikatorami z T21 i nie trafił do wydania.
- **Zależność `yaml` 2.9.1** (dev): parser plików autorskich dla skryptów i testów. Nie trafia do aplikacji.
- **Etap 2 — `content:lint` i `content:convert`** (`scripts/content/authoring-convert.ts`, `authoring-cli.ts`): czyste funkcje kontroli i konwersji oddzielone od zapisu plików. `content:lint` należy do `npm run check`; bez tematów kończy się sukcesem.
- **Bez decyzji prawa są `unresolved` bez kanałów**, więc paczka nie trafia nawet do kanału recenzenckiego. Konwerter nie domniemywa praw; widoczność dla recenzentów wymaga decyzji o prawach `review-only` dla `internal-review`.
- **Jedna rewizja tematu w `content/normalized`**: konwersja usuwa poprzednie rewizje tego samego `packageId`, bo `content:build` zabiera cały katalog. Przypięte rewizje rozpoczętych prób zostają na urządzeniach. Paczki spoza formatu autorskiego (import T21) są chronione; zastąpienie wymaga `--replace-import`.
- **Niezmienność rewizji względem poprzedniej konwersji**: błąd, gdy poprzednia rewizja była kompletna albo miała decyzję; ostrzeżenie dla szkicu bez decyzji. Pola zależne od decyzji nie liczą się jako zmiana treści.
- **`formatInstruction` przeniesiona do `src/content/instruction.ts`**, żeby aplikacja i konwerter używały jednego tekstu instrukcji. Zachowanie aplikacji bez zmian.
- **Pochodzenie paczki**: dokumenty z `topic.yaml` z SHA-256 oraz każdy plik autorski z SHA-256; kontrakt wymaga co najmniej dwóch wpisów.
- **Sprawdzenie ścieżki zapisu**: `content:convert --replace-import` na T21-mini zapisał paczkę i raport, `content:validate` przyjął wynik, po czym `content/normalized` przywrócono z git.

## Domknięcie luk: wycofania, pusty start, wydanie częściowe (2.11.2026)

- **Wycofania w formacie autorskim**: `review/withdrawals.yaml` (pisze upoważniona osoba) → `content:convert` → `content/withdrawals/<ID>.json` → manifest każdego wydania w obu kanałach. Wcześniej skrypt wydania zawsze zapisywał pustą listę, choć aplikacja obsługiwała wycofania. Dotyczą tylko pytań, bo tylko do nich aplikacja je stosuje. Lista jest kumulatywna i niezmienna, zgodnie z klientem, który nigdy nie usuwa otrzymanych wycofań.
- **TECH01 przeniesiony do `tests/fixtures/content/`** i dołączany wyłącznie flagą `--with-fixtures` (`build:e2e`). Zwykłe wydanie ucznia jest teraz puste, zgodnie z CLAUDE.md: fixtures nie trafiają automatycznie do wydania uczniowskiego. `content:validate` pilnuje, żeby żaden fixture nie wrócił do `content/normalized`.
- **Pusty korpus jest poprawny w `content:validate`** (wcześniej brak pakietów był błędem).
- **„Gotowe offline” przy pustym wydaniu** mówi, że aplikacja jest zapisana, a materiałów jeszcze nie ma, zamiast „aplikacja i materiały są zapisane”.
- **`content:release --strict` pozwala na wydanie częściowe**: temat w review jest pomijany i wypisany; odmowa następuje tylko, gdy paczka przeznaczona dla uczniów (approved, permitted albo z dopuszczonymi użyciami) nie przechodzi bramki albo jest uszkodzona. Odmowa zapada przed zapisem czegokolwiek; wcześniej manifest był zapisywany, a dopiero potem polecenie kończyło się błędem. Bramka ucznia jest bez zmian.
- **Runbook** opisuje przepływ formatu autorskiego, wydanie, wycofania i import historyczny T21.

## Wsad Z1 i dopuszczenie T01–T07 (2.11.2026)

- **Wsad Z1** (T01–T07 r2) przyjęty bez zmian treści; README korzenia paczki zachowany w `handoff/Z1/README.md`, numerowane kopie w `references/project` zostawione, bo wymienia je inwentarz SHA-256 autora, a T02/T07 odwołują się do kopii C03.
- **Decyzja właściciela zapisana na jego polecenie**: Piotr Wrotny, właściciel projektu, wybrał w sesji dopuszczenie T01–T07 r2 do kanału ucznia (`internal-lan`) i recenzenckiego, bez odrębnego review. Agent przedstawił alternatywę (sam kanał recenzencki) i ryzyko (63 pytania to nowe uzupełnienia, kontrola wyłącznie autorska); właściciel podtrzymał wybór. Pliki `T0n/review/decisions.yaml` mówią wprost, że krok 3 C02-08 nie został wykonany. `authoring: complete` ustawiono na polecenie właściciela. Użycia: learning, practice, remediation, delayed; bez topic-test, bo nie ma form.
- **G2 w rozumieniu C02-08 nie jest zamknięte**: brak odrębnego kompetentnego review. G3 i G4 bez zmian.
- **Stały korpus testów e2e**: `build:e2e` buduje wydanie z `--packages T21,TECH01`, żeby rzeczywiste tematy nie zmieniały scenariuszy testowych. Zwykły build ucznia zawiera teraz T01–T07.

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

## Uruchomienie w LAN na żądanie (2.11.2026)

- **`npm run lan:serve`** (`scripts/lan-serve.ts`, generator w `scripts/lan/caddyfile.ts`): pomocnik operatora, który buduje z `VITE_BASE=/cpre/` i serwuje `dist/` przez Caddy z `tls internal`. Nie zmienia aplikacji ani zasad docs/09; procedura w docs/09 („Uruchomienie w LAN na żądanie”). Nie dodaje backendu ani zależności do aplikacji (Caddy to narzędzie operatora, nie zależność npm).
- **Host = origin**: domyślnie `alfabet.local` (decyzja właściciela z 2.11.2026), by origin PWA nie zależał ani od IP z DHCP, ani od komputera, na którym działa serwer; alternatywa to `--host <IP>` z rezerwacją DHCP. Komputer serwujący musi ogłaszać tę nazwę. Zmiana hosta/portu oznacza nowy origin.
- **System docelowy: Omarchy (Arch Linux)** (decyzja właściciela z 2.11.2026); Windows tylko do testów. Dokumentacja i skrypty są pisane Linux-first (`setcap`, Avahi, `ufw`, `trust anchor`).
- **Własne CA, bez kont zewnętrznych** (decyzja właściciela z 2.11.2026): instalacja PWA wymaga HTTPS z zaufanym certyfikatem; urządzenia instalują certyfikat główny raz. Odrzucono Tailscale (wymaga logowania przez zewnętrznego dostawcę SSO). Docker, router i zmiana komputera nie zastępują zaufania do certyfikatu.
- **Pobranie certyfikatu z serwera**: port 80 serwuje wyłącznie `/ca.crt` i przekierowuje resztę na HTTPS; klucze prywatne nie są serwowane. Certyfikat idzie po zwykłym HTTP, więc skrypt wypisuje odcisk SHA-256 do porównania na urządzeniu. Gdy port 80 jest niedostępny, funkcja wyłącza się z komunikatem, a aplikacja startuje (uniknięcie błędu Caddy). Pobranie nie jest weryfikacją tożsamości serwera: ochroną jest porównanie odcisku.
- **Stałe CA** (`npm run lan:ca`): `export`/`import` kopii (`caddy-ca-backup.json`, klucze prywatne, poza gitem), `show`, `trust`. Import sprawdza odcisk i parowanie kluczy, nie nadpisuje innego CA bez `--force`. Testy używają wyłącznie testowych par kluczy z `tests/fixtures/lan-ca` (nie prawdziwe CA).
- **Sprawdzenie portu HTTPS przed startem**: zajęty port lub brak uprawnień kończy się komunikatem z poleceniem (`setcap` na Linuksie) zamiast błędem Caddy.
- **Błędy nie dziedziczą cache**: `handle_errors` ustawia `no-store`; wykryte testem na żywym Caddy (brakujący JSON dostawał `immutable`).
- **Weryfikacja**: testy jednostkowe generatora i kopii CA, `caddy validate` oraz uruchomienie całego skryptu z prawdziwym Caddy na Windows i sondowanie `curl` na localhost (nagłówki, 404, fallback, redirecty, pobranie `/ca.crt` z zgodnym odciskiem). **Nie sprawdzono** na Omarchy (Avahi, `setcap`, `ufw`, `trust anchor`, `certutil`/`nssdb`) ani na telefonach: zaufania certyfikatowi, rozwiązywania `.local`, instalacji PWA i aktualizacji między urządzeniami — to ograniczenie, nie dowód.

## Odstępstwa techniczne od makiet (bez zmiany kompozycji)

- Pasek u góry: w prototypie „Prototyp D v0.1 …”; w aplikacji ten sam pasek pełni rolę dyskretnego statusu (offline, aktualizacje, błąd zapisu, tryb techniczny/recenzencki).
- Nagłówek ma dodatkowy przycisk z nazwą profilu (menu: Zmień profil, Kopia postępu, Dane aplikacji) — zgodnie z docs/02.
- `h1[tabindex=-1]:focus` bez obrysu: fokus programowy po zmianie widoku przenosi miejsce czytania; kontrolki zachowują obrys 3 px.
- Ikony aplikacji: proste, generowane deterministycznie (`scripts/make-icons.ts`), kolor akcentu i papieru; bez nowego brandingu.

## Propozycje do decyzji właściciela

- **[do decyzji właściciela]** Form U-TOPIC dla T21: brak — wymaga odrębnego review doboru, kolejności i przecieków (GAP-T21-06).
- **[do decyzji właściciela]** Integracja pozostałych instancji relacji T21 (§8.3) do pakietu — warto zrobić po review relacji.
- **[do decyzji właściciela]** Etap 3 formatu autorskiego: opcjonalne pola `shortTitle`, `order`, `labelBeforeAnswer` i jawne `see` w kontrakcie 1.1.0 (zgodnie wstecz). Zmienia źródło tekstów wyświetlanych, nie wygląd, pedagogikę ani punktację (docs/13 §9).
- **[do decyzji właściciela]** Opis tematu na ekranie sesji: nie istnieje w zaakceptowanym projekcie; wymaga osobnej propozycji projektowej (docs/13 §6).
