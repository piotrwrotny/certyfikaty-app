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

1. Umieść parę `Txx_…_Content` + `Txx_…_QA_and_Handoff` w `content/inbox/` i przygotuj import według `docs/05_CONTENT_INGESTION.md` (raport wejście→wyjście).
2. `npm run content:validate`.
3. Tylko gdy istnieje **rzeczywisty zapis** review, praw i dopuszczonych użyć: `npm run content:release -- --sequence <N+1> --created-at <ISO>`. Polecenie odrzuca pakiety review-only w kanale learner (`--strict`).
4. Skopiuj **najpierw** `release-out/content/learner/releases/<nowy-id>/` na host i sprawdź rozmiary/SHA-256 z manifestu.
5. **Na końcu** podmień `content/manifest.json` atomowo (zapis do pliku tymczasowego + rename). Nie edytuj manifestu w miejscu.
6. Sprawdź: nowa przeglądarka (pusta baza), istniejąca baza z aktywną próbą (ta sama rewizja zostaje), tryb offline, profile.

Puste wydanie learner (zero pakietów) jest poprawne: uczniowie widzą „Materiały są przygotowywane”.

## 6. Rollback

- Treść: opublikuj **nowy** manifest z **wyższym** `releaseSequence`, wskazujący poprzednie poprawne paczki; dodaj powód w `releaseNote`. Nie cofaj sekwencji i nie usuwaj historii ocen.
- Wycofanie/sporny klucz: wpis w `withdrawals` (kumulatywnie). Aktywne testy z tą rewizją zostaną neutralnie wstrzymane; odpowiedzi zostają.
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

Instalacja zależy od przeglądarki (Chromium/Edge: ikona w pasku adresu; Android Chrome: „Dodaj do ekranu głównego”; iOS Safari: Udostępnij → „Do ekranu początkowego”). Nauka w zwykłej karcie działa bez instalacji. „Gotowe offline” w „Dane aplikacji” oznacza, że app shell i aktywne wydanie są zapisane.
