# Runbook — publikacja w sieci wewnętrznej (LAN)

Instrukcja dla administratora. Aplikacja to pliki statyczne; nie ma serwera danych uczniów ani logowania. Nic nie jest publikowane automatycznie — każdy krok wykonuje operator.

## 1. Wymagania hosta

- Jeden stabilny origin HTTPS z zaufanym certyfikatem (np. `https://nauka.firma.local/cpre/`). Zwykłe `http://192.168…` nie jest poprawnym hostem PWA (poza `localhost`).
- Zmiana domeny, protokołu lub portu tworzy nowy origin: dane uczniów **nie przechodzą** — przed zmianą ogłoś eksport kopii profili.
- Serwer statyczny (nginx, IIS, Apache). **Nie używaj `vite preview` produkcyjnie.**

## 2. Build

```bash
npm ci
npm run check
```

```bash
VITE_BASE=/cpre/ npm run build
```

Wynik: `dist/` (app shell + `dist/content/` tylko z kanału learner). Build recenzencki (osobny katalog, osobna baza w przeglądarce): `VITE_BASE=/cpre-review/ npm run build:review` → `dist-review/`. Nie publikuj go dla uczniów.

## 3. Nagłówki

| Ścieżka | Cache-Control | Uwagi |
|---|---|---|
| `index.html`, `sw.js`, `manifest.webmanifest` | `no-cache` | rewalidacja przy każdym wejściu |
| `assets/*` (hashowane) | `public, max-age=31536000, immutable` | zachowaj stare pliki ≥ 30 dni dla otwartych kart |
| `content/manifest.json` | `no-store` | klient i tak pobiera z `cache: no-store` |
| `content/releases/<id>/**` | `public, max-age=31536000, immutable` | nigdy nie nadpisuj bajtów pod tą samą ścieżką |
| brakujący `*.json` | prawdziwe `404` z `application/json` | **nie** zwracaj HTML SPA z kodem 200 |
| trasy UI | fallback do `index.html` tylko dla nawigacji HTML w obrębie `/cpre/` | aplikacja używa tras `#/…` |

MIME: `.webmanifest` → `application/manifest+json`, `.json` → `application/json`, `.js` → `text/javascript`.

Przykład nginx:

```nginx
location /cpre/ {
  alias /srv/cpre/;
  try_files $uri $uri/ =404;
  location = /cpre/index.html { add_header Cache-Control "no-cache"; }
  location = /cpre/sw.js { add_header Cache-Control "no-cache"; }
  location /cpre/assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
  location = /cpre/content/manifest.json { add_header Cache-Control "no-store"; }
  location /cpre/content/releases/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
}
```

## 4. Aktualizacja aplikacji (kod)

1. Skopiuj nowe `assets/*` obok starych (nie usuwaj starych hashy przez ≥ 30 dni).
2. Podmień `index.html`, `manifest.webmanifest`, `sw.js`, `workbox-*.js`.
3. Uczniowie zobaczą „Dostępna jest aktualizacja aplikacji” z „Zapisz i odśwież” / „Później”. Nie ma automatycznego przeładowania w trakcie zadania.

## 5. Aktualizacja treści (bez zmiany kodu)

Treść jest oddzielona od kodu. Aplikacja pobiera `content/manifest.json` w czasie działania, więc nowe materiały publikuje się bez przebudowy i bez ponownej instalacji aplikacji.

**Pusty start jest poprawnym stanem.** Bez dopuszczonych tematów wydanie learner ma zero pakietów. Uczniowie widzą wtedy „Materiały są przygotowywane”, a „Dane aplikacji” mówią, że aplikacja jest zapisana, ale materiałów jeszcze nie ma. Fixtures techniczne (`tests/fixtures/content`, np. TECH01) trafiają wyłącznie do buildów testowych e2e i nigdy do zwykłego wydania.

### 5.1 Przygotowanie tematu (format autorski, docs/13)

1. Umieść katalog tematu w `content/authoring/<ID>/`. Wzory są w `content/authoring/_templates/`.
2. Sprawdź pliki:

   ```bash
   npm run content:lint
   ```

3. Przekonwertuj temat. Powstaje `content/normalized/<ID>.<rewizja>.json`, raport `content/normalized/<ID>-AUTHORING_REPORT.md` i, gdy są wycofania, `content/withdrawals/<ID>.json`:

   ```bash
   npm run content:convert
   ```

4. Przeczytaj raport. Sprawdź statusy, dostępność kanałów, ostrzeżenia i różnice względem poprzedniej rewizji.

Dopuszczenie zapisuje wyłącznie upoważniona osoba w `review/decisions.yaml` tematu. Bez decyzji temat nie trafia do żadnego kanału, także recenzenckiego. Dla buildu recenzenckiego wystarczy decyzja z `review: pending`, `publication: review-only` i prawami `review-only` dla `internal-review`.

### 5.2 Wydanie

1. Sprawdź całość:

   ```bash
   npm run check
   ```

2. Zbuduj wydanie ucznia z numerem sekwencji wyższym niż ostatnio opublikowany:

   ```bash
   npm run content:release -- --sequence <N+1> --created-at <ISO>
   ```

   Tematy jeszcze w review są pomijane i wypisane jako „do review, pominięty”. Polecenie odmawia wydania i niczego nie zapisuje, gdy temat przeznaczony dla uczniów (zatwierdzony, dopuszczony albo z dopuszczonymi użyciami) nie przechodzi bramki albo paczka jest uszkodzona.

3. Skopiuj **najpierw** `release-out/content/learner/releases/<nowy-id>/` na host i sprawdź rozmiary i SHA-256 z manifestu.
4. **Na końcu** podmień `content/manifest.json` atomowo, przez zapis do pliku tymczasowego i rename. Nie edytuj manifestu w miejscu. Starych katalogów `releases/` nie usuwaj.
5. Sprawdź nową przeglądarkę z pustą bazą, istniejącą bazę z aktywną próbą (ta sama rewizja zostaje), tryb offline i profile.

### 5.3 Wycofanie pytania i spór o klucz

1. Upoważniona osoba dopisuje wpis do `review/withdrawals.yaml` tematu: identyfikator decyzji, pytanie, rewizję, `withdrawn` albo `key-disputed`, kod przyczyny, datę, osobę i odwołanie do zapisu.
2. Uruchom `content:lint`, `content:convert` i wydanie z punktu 5.2. Wycofania z `content/withdrawals/` trafiają do manifestu każdego kolejnego wydania, w obu kanałach.
3. Urządzenia zachowują każde otrzymane wycofanie. Wpisu nie wolno usunąć ani zmienić, a lint zgłasza to jako błąd. Poprawione pytanie publikuje się jako nową rewizję.

Skutek u ucznia: nowe użycia wycofanej rewizji są zablokowane, a aktywny test z tą rewizją zostaje neutralnie wstrzymany bez ujawniania klucza. Odpowiedzi zostają w historii, ale nie służą jako dowód.

### 5.4 Import historyczny T21

`content/normalized/T21.r1-full1.json` powstał wcześniejszym importem (`npm run content:import`, docs/05). Konwerter formatu autorskiego go nie nadpisze, chyba że uruchomisz `content:convert` z flagą `--replace-import` dla tematu o tym samym identyfikatorze.

## 6. Rollback

- Treść: opublikuj **nowy** manifest z **wyższym** `releaseSequence`, wskazujący poprzednie poprawne paczki; dodaj powód w `releaseNote`. Nie cofaj sekwencji i nie usuwaj historii ocen.
- Wycofanie lub sporny klucz: procedura z punktu 5.3. Wpisy są kumulatywne. Aktywne testy z tą rewizją zostaną neutralnie wstrzymane, a odpowiedzi zostają.
- Kod: przywróć poprzednie `index.html`/`sw.js` (stare `assets` nadal są na serwerze).

## 7. Sytuacje awaryjne

| Sytuacja | Zachowanie aplikacji | Działanie operatora |
|---|---|---|
| Brak LAN / VPN / portal logowania | „Nie udało się sprawdzić nowych materiałów. Korzystasz z zapisanej wersji.” Nauka offline działa | brak |
| Zły digest / urwane pobieranie / błąd schematu | wydanie odrzucone w całości, poprzednie działa | popraw pliki, opublikuj wyższy `releaseSequence` |
| Manifest wymaga nowszej aplikacji | „Nowe materiały wymagają aktualizacji aplikacji.” | najpierw wdroż kompatybilny kod |
| Quota / brak miejsca | błąd zapisu bez utraty danych, aktualizacja wstrzymana | poproś o kopię profilu, zwolnij miejsce w przeglądarce |
| Druga karta z nowszą bazą | komunikat; dane nie są usuwane | zamknąć starsze karty |

Nigdy nie zalecaj uczniom „wyczyść dane witryny” jako procedury aktualizacji.

## 8. Kopie profili

Uczeń: menu profilu → „Kopia postępu” → „Pobierz kopię tego profilu” (plik JSON z sumą SHA-256). Odtworzenie zawsze tworzy **nowy** profil i oznacza historię jako zaimportowaną/niezweryfikowaną; nie ma scalania. Profil to lokalny zestaw danych, nie konto — nie chroni przed innymi użytkownikami tej samej przeglądarki.

## 9. Instalacja PWA

Instalacja zależy od przeglądarki (Chromium/Edge: ikona w pasku adresu; Android Chrome: „Dodaj do ekranu głównego”; iOS Safari: Udostępnij → „Do ekranu początkowego”). Nauka w zwykłej karcie działa bez instalacji. „Gotowe offline” w „Dane aplikacji” oznacza, że app shell i aktywne wydanie są zapisane. Przy pustym wydaniu ekran mówi wprost, że aplikacja jest zapisana, ale materiałów jeszcze nie ma.
