# Instalacja na czystym Omarchy — działająca aplikacja w sieci lokalnej

Cel: laptop z Omarchy (Arch Linux) serwuje aplikację CPRE po HTTPS tak, że **własne urządzenia (Android, iPhone/iPad, laptopy) instalują PWA bez instalowania certyfikatu**. HTTPS z zaufanym certyfikatem zapewnia Tailscale (`tailscale serve`); Caddy podaje pliki tylko na `127.0.0.1`. Tło decyzji: [09_OPERATIONS_AND_RELEASES.md](09_OPERATIONS_AND_RELEASES.md) („Własne urządzenia: Tailscale”).

> **Status:** procedura złożona na podstawie dokumentacji i testów na Windows. **Nie była wykonana na Omarchy ani z prawdziwym Tailscale.** Jeśli jakiś krok działa inaczej, popraw ten plik.

Adres aplikacji, który dostaniesz na końcu: `https://alfabet.<twoja-sieć>.ts.net/cpre/`. Nazwa maszyny (`alfabet`) i nazwa sieci Tailscale wchodzą w adres, czyli w origin PWA. Ich późniejsza zmiana oznacza nową instalację PWA bez dotychczasowych profili.

## 1. System i pakiety

```bash
sudo pacman -Syu
sudo pacman -S --needed git github-cli nodejs npm caddy tailscale jq
```

Sprawdź wersję Node (wymagane ≥ 22.12):

```bash
node -v
```

Jeśli Omarchy zarządza Node przez `mise` i pokazuje starszą wersję, zainstaluj nowszą (`mise use -g node@24`) albo użyj pakietu z `pacman` i upewnij się, że `node -v` pokazuje ≥ 22.12.

## 2. Repozytorium

```bash
gh auth login
```

Wybierz GitHub.com, protokół HTTPS, logowanie przez przeglądarkę. Potem:

```bash
gh auth setup-git
mkdir -p ~/work && cd ~/work
gh repo clone piotrwrotny/certyfikaty-app -- --branch feat/lan-tailscale
cd certyfikaty-app
npm ci
```

Gałąź `feat/lan-tailscale` zawiera tryb `--tailscale`. Po zmergowaniu jej do `main` pomiń `-- --branch ...` i klonuj domyślną gałąź.

## 3. Tailscale

```bash
sudo systemctl enable --now tailscaled
sudo tailscale up --hostname=alfabet
```

Polecenie wypisze adres logowania. Otwórz go w przeglądarce i zaloguj konto Tailscale (załóż je, jeśli nie masz).

W panelu administratora, w zakładce DNS (`https://login.tailscale.com/admin/dns`), włącz:
- **MagicDNS**,
- **HTTPS Certificates**.

Pozwól swojemu użytkownikowi sterować `tailscale serve` bez `sudo` i sprawdź stan:

```bash
sudo tailscale set --operator="$USER"
tailscale status
```

Zapisz pełną nazwę tej maszyny (to twój adres):

```bash
tailscale status --json | jq -r '.Self.DNSName'
```

## 4. HTTPS dla lokalnego serwera

Jednorazowo (konfiguracja zostaje po restarcie):

```bash
tailscale serve --bg --https=443 http://127.0.0.1:8080
tailscale serve status
```

Używaj `tailscale serve`. **Nie używaj `tailscale funnel`** — funnel wystawia aplikację w internecie.

## 5. Uruchomienie aplikacji

W katalogu `~/work/certyfikaty-app`:

```bash
npm run lan:serve -- --tailscale
```

Skrypt zbuduje aplikację z bazą `/cpre/`, uruchomi Caddy na `127.0.0.1:8080` i wypisze adres. Zostaw terminal otwarty; zatrzymanie: Ctrl+C. Caddy nasłuchuje na porcie powyżej 1024, więc nie są potrzebne uprawnienia roota ani `setcap`.

Sprawdzenie na tym samym komputerze (w drugim terminalu):

```bash
curl -I "https://$(tailscale status --json | jq -r '.Self.DNSName | rtrimstr(".")')/cpre/"
```

Oczekiwane: `HTTP/2 200`. Aplikację można też otworzyć w przeglądarce na tym laptopie pod tym samym adresem.

## 6. Instalacja PWA na urządzeniach

Na każdym urządzeniu najpierw zainstaluj aplikację **Tailscale** (Google Play, App Store lub instalator dla laptopa) i zaloguj **to samo konto**. Potem otwórz adres `https://alfabet.<sieć>.ts.net/cpre/` i zainstaluj:

| Urządzenie | Przeglądarka | Instalacja |
|---|---|---|
| Android | Chrome | menu ⋮ → „Zainstaluj aplikację” |
| iPhone / iPad | Safari | Udostępnij → „Do ekranu początkowego” |
| Laptop (Windows, macOS, Linux) | Chrome lub Edge | ikona instalacji w pasku adresu |

Po instalacji aplikacja działa offline. Tailscale i uruchomiony serwer są potrzebne tylko do instalacji i pobierania nowej treści.

## 7. Aktualizacja treści i kodu

```bash
cd ~/work/certyfikaty-app
git pull
npm ci
npm run lan:serve -- --tailscale
```

Przed `git pull` zatrzymaj działający serwer (Ctrl+C): build czyści `dist/`, więc urządzenia dostałyby niepełne pliki. Baner aktualizacji pojawi się w aplikacji po sprawdzeniu manifestu (przy otwartej aplikacji najpóźniej po kilku minutach lub po ręcznym sprawdzeniu).

## 8. Zatrzymanie i wyłączenie

```bash
# zatrzymanie serwera: Ctrl+C w terminalu z lan:serve
tailscale serve reset        # usuwa wystawienie HTTPS (aplikacja przestaje być dostępna)
```

## Typowe problemy

| Objaw | Działanie |
|---|---|
| `tailscale serve` zgłasza, że HTTPS nie jest włączony | Włącz **HTTPS Certificates** i **MagicDNS** w panelu DNS (krok 3), uruchom polecenie ponownie. |
| `tailscale serve` odmawia bez `sudo` | Wykonaj `sudo tailscale set --operator="$USER"` albo uruchom z `sudo`. |
| Adres nie otwiera się z telefonu | Tailscale na telefonie musi być połączony (to samo konto). Sprawdź `tailscale status` na laptopie. |
| Nie otwiera się nawet z innego komputera w sieci Tailscale | Zapora: `sudo ufw status`; jeśli aktywna, `sudo ufw allow in on tailscale0`. |
| `curl` zwraca 502 lub brak połączenia | Serwer `lan:serve` nie działa albo używa innego portu (`--local-port` musi zgadzać się z `tailscale serve`). |
| `EADDRINUSE` na porcie 8080 | `npm run lan:serve -- --tailscale --local-port 8081` i `tailscale serve --bg --https=443 http://127.0.0.1:8081`. |
| Strona znika po zamknięciu klapy | Uśpiony laptop nie serwuje. Podłącz zasilanie i wyłącz usypianie przy zamknięciu klapy albo uruchamiaj serwer tylko na czas aktualizacji. |
| Android/iOS: Tailscale odmawia połączenia | Telefon ma jedno aktywne VPN naraz; wyłącz inne. |

## Ograniczenia

- Dostęp mają tylko urządzenia w twojej sieci Tailscale. To rozwiązanie dla własnych urządzeń, nie dla uczniów.
- Zmiana nazwy maszyny lub sieci Tailscale zmienia adres i origin (nowa instalacja PWA).
- Dane (profile, postęp) są wyłącznie w przeglądarkach urządzeń; serwer nie przechowuje niczego o użytkowniku.
