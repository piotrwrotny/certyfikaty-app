# Instalacja na czystym Omarchy — aplikacja dostępna w sieci lokalnej

Cel: laptop z Omarchy (Arch Linux) serwuje aplikację CPRE po HTTPS pod adresem **`https://alfabet.local/cpre/`**, a własne urządzenia (Android, iPhone, iPad, laptopy) instalują ją jako PWA. Bez kont zewnętrznych: HTTPS zapewnia własne lokalne CA (Caddy), któremu każde urządzenie ufa po jednorazowej instalacji certyfikatu. Tło i opcje: [09_OPERATIONS_AND_RELEASES.md](09_OPERATIONS_AND_RELEASES.md).

> **Status:** procedura złożona z dokumentacji i testów skryptów na Windows (generator Caddyfile, pobranie certyfikatu, kopia CA). **Nie była wykonana na Omarchy**; polecenia systemowe (Avahi, `setcap`, `ufw`, `trust`, `certutil`) są niezweryfikowane. Jeśli krok działa inaczej, popraw ten plik.

**Zasada nr 1:** adres (`alfabet.local`) jest częścią originu PWA. Zmiana nazwy lub portu = nowa instalacja bez dotychczasowych profili. Nie zmieniaj ich po zainstalowaniu aplikacji na urządzeniach.

## 0. Jeśli przenosisz serwer z innego komputera (zrób to NAJPIERW)

Żeby urządzenia, które już ufają certyfikatowi, nie wymagały ponownej instalacji, serwer musi mieć **to samo CA**. Na starym komputerze (w katalogu repozytorium):

```bash
npm run lan:ca -- export
```

Powstaje `caddy-ca-backup.json` z **kluczami prywatnymi CA**. Przenieś go pendrive'em albo `scp` na nowy komputer. Nie wysyłaj mailem, nie commituj (jest w `.gitignore`). Pierwsza instalacja bez starego serwera: pomiń ten krok.

## 1. System i pakiety

```bash
sudo pacman -Syu
sudo pacman -S --needed git github-cli nodejs npm caddy nss avahi nss-mdns
node -v
```

`node -v` ma pokazać ≥ 22.12. Jeśli Omarchy zarządza Node przez `mise` i pokazuje starszą wersję: `mise use -g node@24`. Pakiet `nss` dostarcza `certutil` (zaufanie w Chromium).

## 2. Repozytorium

```bash
gh auth login
gh auth setup-git
mkdir -p ~/work && cd ~/work
gh repo clone piotrwrotny/certyfikaty-app
cd certyfikaty-app
npm ci
```

`gh auth login`: GitHub.com, HTTPS, logowanie przez przeglądarkę. Dopóki zmiany nie są w `main`, dodaj do klonowania `-- --branch feat/lan-own-ca`.

## 3. Nazwa `alfabet.local`

Urządzenia znajdują serwer po nazwie ogłaszanej przez mDNS (Avahi):

```bash
sudo hostnamectl set-hostname alfabet
sudo systemctl enable --now avahi-daemon
```

Jeśli działa `systemd-resolved`, wyłącz w nim własne mDNS, żeby nie dublował odpowiedzi Avahi:

```bash
systemctl is-active systemd-resolved
sudo mkdir -p /etc/systemd/resolved.conf.d
printf '[Resolve]\nMulticastDNS=no\n' | sudo tee /etc/systemd/resolved.conf.d/mdns.conf
sudo systemctl restart systemd-resolved
```

(Drugi i trzeci wiersz tylko gdy pierwszy pokazuje `active`.) Żeby sam laptop też rozwiązywał nazwy `.local`, w pliku `/etc/nsswitch.conf` w linii `hosts:` dodaj `mdns_minimal [NOTFOUND=return]` przed `resolve` (lub `dns`).

## 4. Porty i zapora

Caddy musi nasłuchiwać na 443 (aplikacja) i 80 (pobranie certyfikatu). Zwykły użytkownik nie może bindować portów poniżej 1024, więc nadaj uprawnienie jednemu plikowi:

```bash
sudo setcap cap_net_bind_service=+ep "$(command -v caddy)"
```

Aktualizacja pakietu `caddy` kasuje to uprawnienie; po aktualizacji wykonaj polecenie ponownie. Zapora: sprawdź, czy działa `ufw`, i przepuść ruch z własnej podsieci:

```bash
sudo ufw status
ip -4 -o addr show scope global | awk '{print $2, $4}'
```

Z drugiego polecenia odczytaj podsieć (np. `192.168.0.169/24` → `192.168.0.0/24`) i jeśli `ufw` jest aktywny:

```bash
sudo ufw allow from 192.168.0.0/24 to any port 80,443 proto tcp
```

## 5. CA (tylko przy przeniesieniu serwera)

Jeśli masz `caddy-ca-backup.json` z kroku 0, **przed pierwszym uruchomieniem**:

```bash
npm run lan:ca -- import ~/caddy-ca-backup.json
npm run lan:ca -- show
```

`show` wypisuje odcisk SHA-256 certyfikatu głównego; powinien być identyczny jak na starym komputerze. Bez kopii pomiń: pierwsze uruchomienie utworzy nowe CA i **każde urządzenie trzeba skonfigurować od nowa**. Skrypt odmówi nadpisania innego, istniejącego CA bez `--force`.

## 6. Uruchomienie

```bash
npm run lan:serve
```

Skrypt buduje aplikację z bazą `/cpre/`, startuje Caddy i wypisuje:
- adres aplikacji `https://alfabet.local/cpre/`,
- adres do pobrania certyfikatu na urządzenie: `http://alfabet.local/ca.crt` (oraz wersję z IP komputera),
- **odcisk SHA-256 certyfikatu głównego**, do porównania na urządzeniu.

Zostaw terminal otwarty; zatrzymanie: Ctrl+C. Gdy port 80 jest niedostępny, pobranie certyfikatu jest wyłączone z komunikatem (użyj `--ca-port <n>` albo skopiuj `release-out/lan/caddy-root.crt` ręcznie).

## 7. Zaufanie na tym laptopie

```bash
npm run lan:ca -- trust
```

Dodaje CA do magazynu systemowego (`sudo trust anchor`, zapyta o hasło) i do bazy Chromium (`~/.pki/nssdb`, utworzy ją bez hasła, jeśli nie istnieje; istniejącej nie rusza). Zamknij całkowicie przeglądarkę i otwórz ją ponownie. Firefox ma własny magazyn: Ustawienia → Prywatność i bezpieczeństwo → Certyfikaty → Wyświetl certyfikaty → Urzędy → Importuj (`release-out/lan/caddy-root.crt`).

## 8. Instalacja na urządzeniach

Na każdym urządzeniu, w tej samej sieci Wi-Fi: **najpierw certyfikat, potem aplikacja.** Certyfikat idzie po zwykłym HTTP, więc porównaj jego odcisk z wypisanym przez skrypt (krok 6).

### Android (Chrome)

1. Otwórz `http://alfabet.local/ca.crt` — plik `caddy-root.crt` zostanie pobrany. Jeśli nazwa się nie rozwiązuje, użyj adresu z IP wypisanego przez skrypt.
2. Ustawienia → Zabezpieczenia i prywatność → Więcej ustawień zabezpieczeń → Szyfrowanie i dane logowania → **Zainstaluj certyfikat → Certyfikat CA** → „Zainstaluj mimo to” → wskaż pobrany plik. (Nazwy menu zależą od producenta; wymagana jest blokada ekranu. Na Androidzie 11+ instalacja działa wyłącznie przez Ustawienia, samo dotknięcie pliku nie wystarczy.)
3. Opcjonalnie sprawdź odcisk: Ustawienia → … → Dane logowania użytkownika → wybierz certyfikat.
4. Chrome → `https://alfabet.local/cpre/` → menu ⋮ → **Zainstaluj aplikację**.

### iPhone i iPad (Safari — procedura identyczna)

1. W Safari otwórz `http://alfabet.local/ca.crt` → „Zezwól” na pobranie profilu konfiguracji.
2. Ustawienia → **Profil pobrany** (lub Ogólne → VPN i zarządzanie urządzeniem) → profil → **Zainstaluj** → kod → Zainstaluj. Odcisk: „Więcej szczegółów” → certyfikat → SHA-256.
3. **Krok łatwy do pominięcia:** Ustawienia → Ogólne → Informacje → **Ustawienia zaufania certyfikatów** → włącz pełne zaufanie dla certyfikatu Caddy. Bez tego certyfikat jest zainstalowany, ale nie jest zaufany.
4. Safari → `https://alfabet.local/cpre/` → Udostępnij → **Do ekranu początkowego**.

Zainstaluj certyfikat osobno na iPhonie i iPadzie.

### Laptop Windows (Chrome/Edge)

Pobierz `http://alfabet.local/ca.crt`, a w PowerShellu w folderze z plikiem:

```powershell
certutil -user -addstore Root caddy-root.crt
```

Zatwierdź okno Windows, uruchom ponownie przeglądarkę, otwórz adres i zainstaluj aplikację (ikona instalacji w pasku adresu).

### Inny laptop z Linuksem

```bash
sudo trust anchor --store caddy-root.crt
certutil -d sql:$HOME/.pki/nssdb -A -t "C,," -n "Caddy Local CA" -i caddy-root.crt
```

(Drugie polecenie wymaga istniejącej bazy `~/.pki/nssdb`; pierwsza jej wersja: `mkdir -p ~/.pki/nssdb && certutil -d sql:$HOME/.pki/nssdb -N --empty-password`.)

Po instalacji aplikacja działa offline. Serwer jest potrzebny tylko do instalacji i pobierania nowej treści.

## 9. Jeśli urządzenie nie widzi serwera

Telefon nie otwiera `http://<IP>/ca.crt` (adres z IP, bez nazwy):

| Sprawdź | Jak |
|---|---|
| Ta sama sieć | Telefon ma adres z tej samej podsieci co laptop (np. `192.168.0.x`), nie sieć gościnną ani dane komórkowe. |
| Zapora Omarchy | `sudo ufw status`; reguła z kroku 4 dla twojej podsieci. |
| Serwer działa | Na laptopie `curl -sI http://127.0.0.1/ca.crt` → `200`. |
| Router | Wyłącz „AP isolation” / „client isolation” / „izolacja klientów” w ustawieniach Wi-Fi routera. Test: hotspot z innego telefonu; jeśli tam działa, wina leży po stronie routera. |

IP działa, a nazwa `alfabet.local` nie: mDNS nie dociera do urządzenia (Avahi nie działa albo router filtruje multicast). Sprawdź `systemctl status avahi-daemon`. Wyjście awaryjne: stały adres IP (rezerwacja DHCP w routerze) i `npm run lan:serve -- --host <IP>` — to **inny origin**, więc rób to przed instalacją aplikacji na urządzeniach, i zainstaluj PWA wyłącznie z tego adresu.

## 10. Aktualizacja treści i kodu

Zatrzymaj serwer (Ctrl+C) — build czyści `dist/`, więc urządzenia dostałyby niepełne pliki:

```bash
cd ~/work/certyfikaty-app
git pull
npm ci
npm run lan:serve
```

Baner aktualizacji pojawia się w aplikacji po sprawdzeniu manifestu (przy otwartej aplikacji najpóźniej po kilku minutach lub ręcznie).

## Typowe problemy

| Objaw | Działanie |
|---|---|
| `Nie można nasłuchiwać na porcie 443` | Poprzedni `lan:serve` nadal działa, albo brak uprawnienia — `setcap` z kroku 4. |
| Pobranie certyfikatu wyłączone (port 80) | Ten sam `setcap`; albo `--ca-port 8081` i adres `http://alfabet.local:8081/ca.crt`. |
| Ostrzeżenie o certyfikacie na urządzeniu | Certyfikat niezainstalowany albo (iOS) niezaufany: krok „Ustawienia zaufania certyfikatów”. |
| Chrome nie pokazuje „Zainstaluj aplikację” | Adres musi być HTTPS z zaufanym certyfikatem; sprawdź kłódkę. |
| Po przeniesieniu serwera urządzenia znów mają ostrzeżenie | Zaimportowano nowe CA zamiast kopii (krok 5): odcisk z `lan:ca -- show` ≠ odcisk zainstalowany na urządzeniu. |
| Strona znika po zamknięciu klapy | Uśpiony laptop nie serwuje: zasilanie i brak usypiania przy zamknięciu klapy albo uruchamiaj serwer na czas aktualizacji. |

## Ograniczenia

- Certyfikat trzeba zainstalować na każdym urządzeniu raz; nowe urządzenie = powtórzenie kroku 8.
- Dane (profile, postęp) są wyłącznie w przeglądarkach urządzeń; serwer nie przechowuje niczego o użytkowniku.
- Klucz prywatny CA (`root.key`) musi zostać na serwerze i w kopii `caddy-ca-backup.json`; jego wyciek pozwala podszyć się pod dowolną stronę na urządzeniach, które ufają CA.
