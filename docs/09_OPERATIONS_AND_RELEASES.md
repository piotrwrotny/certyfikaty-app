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

Pomocnik operatora dla małego wdrożenia: serwer włączasz tylko wtedy, gdy trzeba zainstalować aplikację albo pobrać nową treść. Po pierwszym wejściu aplikacja działa offline, więc serwer nie musi pracować stale. **Docelowy system serwera to Omarchy (Arch Linux)**; Windows służy tylko do testów (sekcja na końcu). Pomocnik jest **narzędziem operatora, nie produkcyjnym hostem** — nie zastępuje docelowego hosta z sekcji „Docelowy model”, ale spełnia jego reguły (HTTPS, cache, prawdziwe 404, fallback shellu).

**Instalacja krok po kroku, od czystego Omarchy: [instalacja omarchy](instalacja%20omarchy.md).** Ta sekcja opisuje mechanizm i opcje.

### Jak to działa i dlaczego własne CA

Instalacja PWA i service worker wymagają HTTPS z certyfikatem, któremu urządzenie ufa; zwykły `http://IP` nie wystarczy. Caddy wystawia certyfikat z własnego lokalnego CA (`tls internal`), a każde urządzenie instaluje certyfikat główny **jednorazowo**. To rozwiązanie bez kont zewnętrznych i bez zależności od dostawcy tożsamości (odrzucono m.in. Tailscale, który wymaga logowania przez zewnętrznego dostawcę SSO). Docker, router ani zmiana komputera nie zastępują zaufania do certyfikatu.

Skrypt `npm run lan:serve`: sprawdza Caddy i wolny port, buduje aplikację z `VITE_BASE=/cpre/`, generuje `release-out/lan/Caddyfile` (poza gitem), startuje Caddy, wypisuje adres aplikacji, adres pobrania certyfikatu i jego odcisk SHA-256.

| Opcja | Znaczenie |
|---|---|
| `--host <nazwa lub IP>` | Domyślnie `alfabet.local` (stały host aplikacji, niezależny od komputera). |
| `--port <n>` | Domyślnie 443; inny port trafia do adresu, np. `https://host:8443/cpre/`. |
| `--base /ścieżka/` | Domyślnie `/cpre/`; musi zgadzać się z buildem. |
| `--no-build` | Użyj istniejącego `dist/` (zbudowanego z tym samym `--base`). |
| `--ca-port <n>` | Port HTTP pobrania certyfikatu (domyślnie 80). |
| `--no-ca-download` | Nie serwuj `/ca.crt`. |
| `--print-config` | Tylko wypisz Caddyfile. |

**Pobranie certyfikatu z serwera.** Port 80 serwuje wyłącznie `/ca.crt` (certyfikat główny, plik publiczny) i przekierowuje resztę na HTTPS. Klucze prywatne nigdy nie są serwowane. Certyfikat idzie po zwykłym HTTP, więc skrypt wypisuje jego odcisk SHA-256 do porównania z odciskiem pokazanym przez urządzenie przy instalacji. Gdy port 80 jest zajęty albo wymaga uprawnień, pobranie jest wyłączane z komunikatem, a aplikacja startuje normalnie.

### Stałe CA między komputerami (`npm run lan:ca`)

Urządzenia ufają konkretnemu CA. Przy przeniesieniu serwera na inny komputer musi on mieć **to samo CA**, inaczej każde urządzenie traci zaufanie.

| Polecenie | Działanie |
|---|---|
| `npm run lan:ca -- show` | Ścieżka CA i odcisk SHA-256 certyfikatu głównego. |
| `npm run lan:ca -- export [plik]` | Kopia do `caddy-ca-backup.json` (domyślnie). **Zawiera klucze prywatne**; przenieś ręcznie (pendrive, `scp`), nie commituj (`.gitignore`). |
| `npm run lan:ca -- import <plik> [--force]` | Zapis CA w katalogu Caddy, **przed pierwszym uruchomieniem** na nowym komputerze. Sprawdza spójność kopii i parowanie kluczy; odmawia nadpisania innego CA bez `--force`. |
| `npm run lan:ca -- trust` | Zaufanie CA na tym komputerze: Linux — system (`sudo trust anchor`) i Chromium (`~/.pki/nssdb`); Windows — `certutil -user -addstore Root`. |

### Origin musi być stały

Adres hosta jest częścią originu: IndexedDB, profile i instalacja PWA należą do `https://<host>[:port]`. Zmiana nazwy, IP albo portu to **nowy origin** — pusta instalacja bez profili; stara instalacja przestaje dostawać aktualizacje. Przed zmianą zaplanuj eksport i import profilu (sekcja „Kopie i utrzymanie”).

| Wybór hosta | Kiedy |
|---|---|
| `alfabet.local` (domyślnie) | Stała mimo zmiany IP i komputera, o ile serwujący komputer ogłasza tę nazwę (mDNS przez Avahi, nazwa maszyny `alfabet`) i urządzenia rozwiązują mDNS. Sprawdź na każdym typie urządzenia. |
| IP z rezerwacją DHCP w routerze | Gdy `.local` nie działa. Bez rezerwacji IP może się zmienić i zmieni origin. |
| Własna domena wskazująca na IP komputera | Opcja na dłużej; wymaga domeny i certyfikatu publicznego (inny mechanizm niż własne CA). |

### Wymagania systemowe na Omarchy (skrót)

Szczegóły i polecenia w [instalacja omarchy](instalacja%20omarchy.md): pakiety (`caddy`, `nss`, `avahi`, `nss-mdns`), nazwa maszyny `alfabet` ogłaszana przez Avahi, `setcap cap_net_bind_service` dla Caddy (porty 443 i 80 bez roota), reguła `ufw` dla własnej podsieci. **Nie zweryfikowane na Omarchy.**

### Zaufanie certyfikatowi na urządzeniach

Przekaż urządzeniom wyłącznie certyfikat główny (`/ca.crt`, `release-out/lan/caddy-root.crt`); **nigdy `root.key`**. Kroki dla Androida (Chrome), iPhone'a i iPada (Safari, w tym osobny krok „Ustawienia zaufania certyfikatów”), Windows i Linuksa są w [instalacja omarchy](instalacja%20omarchy.md#8-instalacja-na-urządzeniach). Po instalacji certyfikatu: Android Chrome → „Zainstaluj aplikację”; iOS Safari → „Do ekranu początkowego”; laptop Chrome/Edge → ikona instalacji.

### Aktualizacja treści w tym trybie

1. Zatrzymaj serwer (Ctrl+C). Nie buduj, gdy Caddy serwuje `dist/` — build czyści katalog i klienci dostaliby niepełne pliki.
2. Wykonaj kroki 1–2 z sekcji „Publikacja następnej paczki przez operatora” (import, `content:validate`, paczki i manifest dla kanału learner).
3. Uruchom `npm run lan:serve` (buduje i startuje). Otwórz aplikację na urządzeniu z siecią; baner aktualizacji pojawi się po sprawdzeniu manifestu (przy widocznej aplikacji najpóźniej po 5 minutach lub ręcznie).
4. Wykonaj krok 4 („Otwórz app w nowej i istniejącej bazie…”). Po aktualizacji serwer można zatrzymać; aplikacja działa offline.

### Szybka kontrola serwera

Z komputera serwującego, przy działającym serwerze (`-k`, bo curl bez `lan:ca -- trust` nie zna lokalnego CA):

```bash
curl -skI -H "Accept: text/html" https://<host>/cpre/              # 200, Cache-Control: no-cache
curl -skI https://<host>/cpre/content/manifest.json                # 200, no-store, application/json
curl -skI https://<host>/cpre/content/releases/x/packages/nope.json # 404, no-store (nie HTML)
curl -sI http://<host>/ca.crt                                      # 200, application/x-x509-ca-cert
```

### Typowe problemy

| Objaw | Przyczyna / działanie |
|---|---|
| Telefon nie otwiera strony ani `http://<IP>/ca.crt` | Zapora serwera, izolacja klientów Wi-Fi albo inna sieć; sprawdź hotspot z innego telefonu i regułę `ufw`. Test krok po kroku w [instalacja omarchy](instalacja%20omarchy.md#9-jeśli-urządzenie-nie-widzi-serwera). |
| Telefon otwiera IP, ale nie `alfabet.local` | mDNS nie dociera (Avahi nie działa albo router filtruje multicast). Wyjście: `--host <IP>` z rezerwacją DHCP (nowy origin — przed instalacją na urządzeniach). |
| Ostrzeżenie o certyfikacie albo brak „Zainstaluj” | Certyfikat główny niezainstalowany lub (iOS) niezaufany na tym urządzeniu. |
| `Nie można nasłuchiwać na porcie 443` | Poprzedni `lan:serve` nadal działa albo brak uprawnień (Linux: `setcap`); inny port to inny origin. |
| `Nie znaleziono Caddy` | Omarchy: `sudo pacman -S caddy`. |

### Windows (tylko testy)

Serwer na Windows służy do prób na laptopie deweloperskim, nie jako host docelowy. `winget install CaddyServer.Caddy` (potem nowy terminal); zezwól Caddy w zaporze — sieć oznaczona w Windows jako **Public** domyślnie blokuje połączenia przychodzące (reguła: `New-NetFirewallRule -DisplayName "CPRE LAN" -Direction Inbound -Protocol TCP -LocalPort 80,443 -RemoteAddress LocalSubnet -Action Allow -Profile Any`, jako administrator); rozłącz VPN na czas testu. Zaufanie na tym komputerze: `npm run lan:ca -- trust` (Caddy sam nie dodaje CA niezawodnie: błąd `keytool.exe` przy starcie jest nieszkodliwy, a `caddy trust` nie działa przy `admin off`).

## Publikacja następnej paczki przez operatora

1. Przekaż do repo parę tematu i ewentualny rzeczywisty zapis dopuszczenia. Wykonaj import, raport i `content:validate`.
2. Wygeneruj immutable paczki i manifest dla właściwego kanału. Fail, jeśli publikowane użycie nie jest dopuszczone. Review i learner to osobne output directories; nie tylko flaga w UI.
3. Umieść wszystkie pliki nowego release na hoście i sprawdź ich rozmiary/hashy/URL. Manifest opublikuj **na końcu** atomowym rename/swap pliku; nie edytuj go w trakcie pobierania przez klientów.
4. Otwórz app w nowej i istniejącej bazie. Sprawdź aktualizację, offline, profile, aktywną próbę starej rewizji i brak utraty postępu. Dla zmiany klucza/rodziny przygotuj impact report.
5. Przy błędzie opublikuj poprawne wydanie z wyższym sequence, odwołujące się do poprzednich payloadów; zachowaj listę wycofań. Nie polecaj uczniom kasowania danych witryny jako procedury aktualizacji.

## Kopie i utrzymanie

Użytkownik może wyeksportować pojedynczy profil i odtworzyć go jako nowy. Przy zmianie origin zaplanuj eksport/import przed przełączeniem; sama wspólna nazwa profilu nie przenosi historii między przeglądarkami/urządzeniami. Użycie trybu prywatnego lub usunięcie danych witryny może usunąć zapis — pokaż informację przy kopii/ustawieniach, bez straszącego modalu w sesji.

Instrukcja administratora po implementacji obejmuje upgrade app, content-only upgrade, rollback, brak LAN, quota, zablokowaną migrację przez inną kartę i odczyt historii wycofanych pytań. Każda naprawa ma zachować dane, a działania destrukcyjne wymagają świadomego wyboru użytkownika.
