# 09 — Uruchomienie w LAN i utrzymanie

## Docelowy model

Statyczne pliki aplikacji i `content/manifest.json` na tym samym hostcie HTTPS w sieci wewnętrznej. Nie ma serwera danych uczniów ani logowania do aplikacji w przyroście. Dostęp do LAN/ewentualnego firmowego SSO jest warunkiem infrastruktury, nie nazwanym profilem ucznia. Nie dodawaj integracji SSO bez konkretnego zlecenia i środowiska.

Claude przygotowuje build i instrukcję dla administratora, nie publikuje automatycznie. Nie używaj `vite preview` jako produkcyjnego serwera. Dokumentacja wdrożenia ma zawierać ustalany przy instalacji stabilny URL, base/scope, certyfikat, MIME, nagłówki cache, fallback na shell bez przechwytywania brakującego JSON oraz sposób rollbacku. Brak docelowego hosta nie blokuje build/test na localhost.

## Reguły serwowania

| Zasób | Zasada |
|---|---|
| HTML wejściowy, SW, manifest treści | Rewalidacja/no-cache zgodnie z rolą; manifest treści pobierany no-store, nie cache-first w SW |
| Hashed JS/CSS/ikony | Długie cache immutable; stare hashe dostępne dla otwartych kart |
| Paczki `content/releases/<id>/...` | Niezmienne bajty i URL; długie cache; nigdy nadpisanie pod tą samą rewizją |
| Brakujący JSON / release | Prawdziwe 404 z odpowiednim MIME; nie HTML SPA z kodem 200 |
| Trasy UI | Fallback app shell, spójny base, bez wchodzenia poza scope |
| Dane profili | Wyłącznie lokalny IndexedDB; nie ma endpointu upload/telemetrii |

Nie pobieraj bibliotek/fontów z publicznych CDN. Link bibliograficzny może wymagać zewnętrznego internetu, ale sam materiał i zadanie pozostają używalne offline. Dane diagnostyczne aktualizacji nie zawierają nazw profili ani odpowiedzi. Brak zewnętrznej analityki w pierwszym przyroście.

## Uruchomienie w LAN na żądanie (`npm run lan:serve`)

Pomocnik operatora dla małego wdrożenia: serwer włączasz tylko wtedy, gdy trzeba zainstalować aplikację albo pobrać nową treść. Po pierwszym wejściu aplikacja działa offline, więc serwer nie musi pracować stale. Pomocnik jest **narzędziem operatora, nie produkcyjnym hostem** — nie zastępuje docelowego hosta z sekcji „Docelowy model”, ale spełnia jego reguły (HTTPS, cache, prawdziwe 404, fallback shellu).

### Wymagania

- Node z `package.json`, Caddy (`winget install CaddyServer.Caddy`, potem nowy terminal), komputer i urządzenia w tej samej sieci prywatnej bez izolacji klientów Wi-Fi.
- Zezwolenie w zaporze Windows dla Caddy w sieci prywatnej (pierwsze uruchomienie).

### Uruchomienie

```bash
npm run lan:serve
```

Skrypt: sprawdza Caddy, buduje aplikację z `VITE_BASE=/cpre/`, generuje `release-out/lan/Caddyfile` (poza gitem), startuje Caddy z `tls internal`, wypisuje adres aplikacji i IP komputera oraz kopiuje certyfikat główny do `release-out/lan/caddy-root.crt`. Zatrzymanie: Ctrl+C.

| Opcja | Znaczenie |
|---|---|
| `--host <nazwa lub IP>` | Domyślnie `<nazwa-komputera>.local`. |
| `--port <n>` | Domyślnie 443; inny port trafia do adresu, np. `https://host:8443/cpre/`. |
| `--base /ścieżka/` | Domyślnie `/cpre/`; musi zgadzać się z buildem. |
| `--no-build` | Użyj istniejącego `dist/` (zbudowanego z tym samym `--base`). |
| `--print-config` | Tylko wypisz Caddyfile. |

Port 80 jest wyłączony (`http://` nie przekierowuje). Podawaj uczniom adres `https://…`.

### Origin musi być stały

Adres hosta jest częścią originu: IndexedDB, profile i instalacja PWA należą do `https://<host>[:port]`. Zmiana nazwy, IP albo portu to **nowy origin** — pusta instalacja bez profili; stara instalacja przestaje dostawać aktualizacje. Przed zmianą zaplanuj eksport i import profilu (sekcja „Kopie i utrzymanie”).

| Wybór hosta | Kiedy |
|---|---|
| `<nazwa-komputera>.local` (domyślnie) | Stała mimo zmiany IP; wymaga, by urządzenia rozwiązywały mDNS. Sprawdź na każdym typie urządzenia. |
| IP z rezerwacją DHCP w routerze | Gdy `.local` nie działa. Bez rezerwacji IP może się zmienić i zmieni origin. |
| Własna domena wskazująca na IP komputera | Opcja na dłużej; wymaga zmiany rekordu przy zmianie IP. |

### Zaufanie certyfikatowi i instalacja PWA

Zwykły `http://IP` nie zadziała: service worker i instalacja wymagają bezpiecznego kontekstu. Caddy podpisuje certyfikat własnym lokalnym CA, więc **każde urządzenie musi zaufać jego certyfikatowi głównemu** (`release-out/lan/caddy-root.crt`, źródło: `%APPDATA%\Caddy\pki\authorities\local\root.crt`). Przekaż urządzeniom wyłącznie `root.crt`; **nigdy `root.key`**.

1. **Android:** Ustawienia → Bezpieczeństwo → Szyfrowanie i dane logowania → Zainstaluj certyfikat → Certyfikat CA. Potem Chrome → adres aplikacji → menu → „Zainstaluj aplikację”.
2. **iOS:** otwórz plik w Safari i zainstaluj profil; włącz zaufanie w Ustawienia → Ogólne → Informacje → Zaufanie certyfikatów. Potem Safari → adres aplikacji → Udostępnij → „Do ekranu początkowego”.
3. **Ten komputer:** przy pierwszym uruchomieniu Caddy może zapytać, czy dodać certyfikat do magazynu zaufanych (okno Windows). Zatwierdź tylko, jeśli chcesz używać aplikacji także w przeglądarce na tym komputerze.

### Aktualizacja treści w tym trybie

1. Zatrzymaj serwer (Ctrl+C). Nie buduj, gdy Caddy serwuje `dist/` — build czyści katalog i klienci dostaliby niepełne pliki.
2. Wykonaj kroki 1–2 z sekcji „Publikacja następnej paczki przez operatora” (import, `content:validate`, paczki i manifest dla kanału learner).
3. Uruchom `npm run lan:serve` (buduje i startuje). Otwórz aplikację na urządzeniu z siecią; baner aktualizacji pojawi się po sprawdzeniu manifestu (przy widocznej aplikacji najpóźniej po 5 minutach lub ręcznie).
4. Wykonaj krok 4 („Otwórz app w nowej i istniejącej bazie…”). Po aktualizacji serwer można zatrzymać; aplikacja działa offline.

### Szybka kontrola serwera

Z komputera, przy działającym serwerze (`-k`, bo curl nie zna lokalnego CA):

```bash
curl -skI -H "Accept: text/html" https://<host>/cpre/              # 200, Cache-Control: no-cache
curl -skI https://<host>/cpre/content/manifest.json                # 200, no-store, application/json
curl -skI https://<host>/cpre/content/releases/x/packages/nope.json # 404, no-store (nie HTML)
```

### Typowe problemy

| Objaw | Przyczyna / działanie |
|---|---|
| Telefon nie otwiera strony | Izolacja klientów Wi-Fi albo zapora; sprawdź inną sieć/hotspot i zezwolenie dla Caddy. |
| Telefon nie widzi `<nazwa>.local` | Użyj `--host <IP>` z rezerwacją DHCP (nowy origin — zrób to przed instalacją uczniów). |
| Ostrzeżenie o certyfikacie albo brak „Zainstaluj” | Certyfikat główny nie jest zainstalowany/zaufany na tym urządzeniu. |
| Port 443 zajęty | `--port 8443`; adres z portem. |
| `Nie znaleziono Caddy` | Zainstaluj Caddy i otwórz nowy terminal (PATH). |

## Publikacja następnej paczki przez operatora

1. Przekaż do repo parę tematu i ewentualny rzeczywisty zapis dopuszczenia. Wykonaj import, raport i `content:validate`.
2. Wygeneruj immutable paczki i manifest dla właściwego kanału. Fail, jeśli publikowane użycie nie jest dopuszczone. Review i learner to osobne output directories; nie tylko flaga w UI.
3. Umieść wszystkie pliki nowego release na hoście i sprawdź ich rozmiary/hashy/URL. Manifest opublikuj **na końcu** atomowym rename/swap pliku; nie edytuj go w trakcie pobierania przez klientów.
4. Otwórz app w nowej i istniejącej bazie. Sprawdź aktualizację, offline, profile, aktywną próbę starej rewizji i brak utraty postępu. Dla zmiany klucza/rodziny przygotuj impact report.
5. Przy błędzie opublikuj poprawne wydanie z wyższym sequence, odwołujące się do poprzednich payloadów; zachowaj listę wycofań. Nie polecaj uczniom kasowania danych witryny jako procedury aktualizacji.

## Kopie i utrzymanie

Użytkownik może wyeksportować pojedynczy profil i odtworzyć go jako nowy. Przy zmianie origin zaplanuj eksport/import przed przełączeniem; sama wspólna nazwa profilu nie przenosi historii między przeglądarkami/urządzeniami. Użycie trybu prywatnego lub usunięcie danych witryny może usunąć zapis — pokaż informację przy kopii/ustawieniach, bez straszącego modalu w sesji.

Instrukcja administratora po implementacji obejmuje upgrade app, content-only upgrade, rollback, brak LAN, quota, zablokowaną migrację przez inną kartę i odczyt historii wycofanych pytań. Każda naprawa ma zachować dane, a działania destrukcyjne wymagają świadomego wyboru użytkownika.
