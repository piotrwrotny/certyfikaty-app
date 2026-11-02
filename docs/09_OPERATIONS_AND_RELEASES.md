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

- Node z `package.json`, Caddy (Windows: `winget install CaddyServer.Caddy`, potem nowy terminal; Arch/Omarchy: `sudo pacman -S caddy`), komputer i urządzenia w tej samej sieci prywatnej bez izolacji klientów Wi-Fi.
- Zezwolenie w zaporze dla Caddy w sieci prywatnej (Windows: pierwsze uruchomienie; Linux: patrz „Uruchomienie na Linuksie”).

### Uruchomienie

```bash
npm run lan:serve
```

Skrypt: sprawdza Caddy, buduje aplikację z `VITE_BASE=/cpre/`, generuje `release-out/lan/Caddyfile` (poza gitem), startuje Caddy z `tls internal`, wypisuje adres aplikacji i IP komputera oraz kopiuje certyfikat główny do `release-out/lan/caddy-root.crt`. Zatrzymanie: Ctrl+C.

| Opcja | Znaczenie |
|---|---|
| `--host <nazwa lub IP>` | Domyślnie `alfabet.local` (stały host aplikacji, niezależny od komputera). |
| `--port <n>` | Domyślnie 443; inny port trafia do adresu, np. `https://host:8443/cpre/`. |
| `--base /ścieżka/` | Domyślnie `/cpre/`; musi zgadzać się z buildem. |
| `--no-build` | Użyj istniejącego `dist/` (zbudowanego z tym samym `--base`). |
| `--print-config` | Tylko wypisz Caddyfile. |

Port 80 jest wyłączony (`http://` nie przekierowuje). Podawaj uczniom adres `https://…`.

### Origin musi być stały

Adres hosta jest częścią originu: IndexedDB, profile i instalacja PWA należą do `https://<host>[:port]`. Zmiana nazwy, IP albo portu to **nowy origin** — pusta instalacja bez profili; stara instalacja przestaje dostawać aktualizacje. Przed zmianą zaplanuj eksport i import profilu (sekcja „Kopie i utrzymanie”).

| Wybór hosta | Kiedy |
|---|---|
| `alfabet.local` (domyślnie) | Stała mimo zmiany IP i komputera, o ile ten, który serwuje, ogłasza tę nazwę (mDNS; na Windows musi nazywać się `alfabet`, na Linuksie patrz niżej), a urządzenia rozwiązują mDNS. Sprawdź na każdym typie urządzenia. |
| IP z rezerwacją DHCP w routerze | Gdy `.local` nie działa. Bez rezerwacji IP może się zmienić i zmieni origin. |
| Własna domena wskazująca na IP komputera | Opcja na dłużej; wymaga zmiany rekordu przy zmianie IP. |

### Własne urządzenia: Tailscale (bez instalowania certyfikatu)

Najprostsza droga dla kilku własnych urządzeń (Android, iPhone/iPad, laptopy, komputer serwujący). Tailscale wystawia prawdziwy certyfikat HTTPS dla nazwy `*.ts.net`, więc **żadne urządzenie nie instaluje certyfikatu CA**, a nazwa nie zależy od mDNS ani IP z DHCP. Warunek: na każdym urządzeniu jest Tailscale (to samo konto). Dla uczniów raczej nieodpowiednie — tam stosuj hosta z zaufanym certyfikatem (własna domena z certyfikatem Let's Encrypt albo własne CA z sekcji niżej).

Pełna procedura od czystego Omarchy, komenda po komendzie: [instalacja omarchy](instalacja%20omarchy.md). Skrót:

Jednorazowo:

1. Konto Tailscale. W panelu administratora (zakładka DNS) włącz **MagicDNS** i **HTTPS Certificates**.
2. Komputer serwujący: Linux `sudo pacman -S tailscale`, `sudo systemctl enable --now tailscaled`, `sudo tailscale up --hostname=alfabet`; Windows `winget install Tailscale.Tailscale` i logowanie w aplikacji. Nazwa maszyny wchodzi w adres: `alfabet.<tailnet>.ts.net`.
3. HTTPS dla lokalnego serwera (zostaje po restarcie; na Linuksie z `sudo`, chyba że `sudo tailscale set --operator=$USER`):
   ```bash
   tailscale serve --bg --https=443 http://127.0.0.1:8080
   ```

Przy każdej aktualizacji lub instalacji:

```bash
npm run lan:serve -- --tailscale
```

Skrypt buduje aplikację, startuje Caddy **tylko na `127.0.0.1:8080`** (z tymi samymi regułami cache i 404 co wyżej) i wypisuje adres `https://alfabet.<tailnet>.ts.net/cpre/`. Opcja `--local-port` zmienia port lokalny (musi zgadzać się z `tailscale serve`).

Na urządzeniach: zainstaluj aplikację Tailscale (Google Play, App Store, instalator na laptopa), zaloguj to samo konto, otwórz adres i zainstaluj PWA (Android/Chrome: „Zainstaluj aplikację”; iPhone/iPad/Safari: „Do ekranu początkowego”; laptop/Chrome lub Edge: ikona instalacji w pasku adresu). Po instalacji aplikacja działa offline; Tailscale jest potrzebny do instalacji i pobierania nowej treści.

Uwagi:

- Używaj `tailscale serve`, **nie** `tailscale funnel` — funnel wystawia aplikację w internecie, wbrew założeniu sieci wewnętrznej.
- Zmiana nazwy maszyny lub tailnetu zmienia origin (nowa instalacja PWA bez profili).
- Android i iOS mają jedno aktywne VPN naraz; Tailscale zajmuje to miejsce.
- **Nie zweryfikowano z prawdziwym Tailscale.** Sprawdzono tylko Caddy w tym trybie (curl na `127.0.0.1`, obcy nagłówek Host, brak dostępu przez IP LAN). Składnię `tailscale serve` porównaj z wersją zainstalowanego klienta (`tailscale serve --help`).

### Uruchomienie na Linuksie (Arch/Omarchy)

Start od zera na Omarchy (Arch). Skrypt działa tak samo jak na Windows (`npm run lan:serve`); poniżej kroki systemowe. **Nie zweryfikowane na Omarchy** — sprawdź każdy punkt i popraw dokument, jeśli coś działa inaczej.

1. **Klon i pakiety:**
   ```bash
   git clone git@github.com:piotrwrotny/certyfikaty-app.git
   cd certyfikaty-app
   sudo pacman -S caddy nodejs npm avahi nss-mdns
   npm ci
   ```
   Wersja Node: pole `engines` w `package.json` (≥ 22.12).
2. **Certyfikat główny — przed pierwszym startem.** Katalog `~/.local/share/caddy/pki/authorities/local/` ma zawierać pliki z poprzedniego komputera (`root.crt`, `root.key`, `intermediate.crt`, `intermediate.key`; Windows: `%APPDATA%\Caddy\pki\authorities\local`). Wtedy urządzenia, które już ufają certyfikatowi, nie wymagają ponownej instalacji. Bez tego Caddy utworzy nowe CA i każde urządzenie trzeba skonfigurować od nowa. Pliki zawierają klucz prywatny — przenieś nośnikiem lub `scp`, **nigdy przez git**.
3. **Nazwa `alfabet.local`:** `sudo hostnamectl set-hostname alfabet`, potem `sudo systemctl enable --now avahi-daemon`. Jeśli `systemd-resolved` ma włączone MulticastDNS, wyłącz je albo Avahi, by nie dublować odpowiedzi. Sprawdzenie z innego urządzenia w sieci: `ping alfabet.local`.
4. **Port 443 bez roota:** `sudo setcap cap_net_bind_service=+ep "$(command -v caddy)"` (aktualizacja pakietu `caddy` kasuje to uprawnienie) albo `sudo sysctl -w net.ipv4.ip_unprivileged_port_start=443`. Inny port zmienia origin.
5. **Zapora:** jeśli działa `ufw`, `sudo ufw allow 443/tcp`.
6. **Start:** `npm run lan:serve`. Skrypt wypisze adres `https://alfabet.local/cpre/`.
7. **Zaufanie na tym komputerze (opcjonalnie):** `caddy trust` nie zadziała (admin endpoint jest wyłączony); użyj `sudo trust anchor --store ~/.local/share/caddy/pki/authorities/local/root.crt`.
8. **Telefon/tablet:** otwórz adres. Ostrzeżenie o certyfikacie = sieć działa, brakuje zaufania (sekcja niżej); „nie można połączyć” = nazwa niewidoczna, zapora albo izolacja klientów (tabela „Typowe problemy”).

### Zaufanie certyfikatowi i instalacja PWA

Zwykły `http://IP` nie zadziała: service worker i instalacja wymagają bezpiecznego kontekstu. Caddy podpisuje certyfikat własnym lokalnym CA, więc **każde urządzenie musi zaufać jego certyfikatowi głównemu** (`release-out/lan/caddy-root.crt`, źródło: `%APPDATA%\Caddy\pki\authorities\local\root.crt`). Przekaż urządzeniom wyłącznie `root.crt`; **nigdy `root.key`**.

1. **Android:** Ustawienia → Bezpieczeństwo → Szyfrowanie i dane logowania → Zainstaluj certyfikat → Certyfikat CA. Potem Chrome → adres aplikacji → menu → „Zainstaluj aplikację”.
2. **iOS:** otwórz plik w Safari i zainstaluj profil; włącz zaufanie w Ustawienia → Ogólne → Informacje → Zaufanie certyfikatów. Potem Safari → adres aplikacji → Udostępnij → „Do ekranu początkowego”.
3. **Ten komputer (Windows):** nie polegaj na automatycznym dodaniu przez Caddy (przy starcie zgłasza błąd `keytool.exe` z magazynem Javy, a `caddy trust` nie działa przy `admin off`). Dodaj ręcznie: `certutil -user -addstore Root release-out\lan\caddy-root.crt` i zatwierdź okno Windows. Zrób to tylko, jeśli chcesz używać aplikacji także w przeglądarce na tym komputerze.

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
