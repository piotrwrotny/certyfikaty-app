# Gotowy wsad dla Claude Code

Paczka zawiera instrukcję `CLAUDE.md`, prompt startowy, 36 zadań implementacyjnych z AC, zachowane pozycje Validate/Later, mapę wszystkich 38 FR, 36 scenariuszy odbioru oraz specyfikację PWA/profili/aktualizacji i importu treści. Kopie całego projektu D i wymaganych źródeł są lokalnie dołączone.

**Zaakceptowany wygląd Skupionej sesji jest chronionym baseline.** Claude ma odtworzyć go w kodzie i dodać nazwane profile oraz statusy PWA w tym samym systemie. Aktualizacja treści nie może nadpisać rozpoczętej próby ani postępu.

Przyjęto lokalne profile na jednym urządzeniu, bez kont i synchronizacji między urządzeniami. Wspólna treść odświeża się z hosta HTTPS w LAN po otwarciu/wznowieniu app i odzyskaniu dostępu. Postęp pozostaje osobny per profil i ma eksport/import.

Własne T21 ma 32 pytania /128 rationale i 4 aktywności otwarte. Dołączono oba pełne pliki, inwentarz, 176 wektorów oraz ograniczoną próbkę danych A/P/K. Materiał pozostaje do odrębnego review, nie jest zatwierdzoną rezerwą ani formą testu. Ta zależność nie blokuje programowania i testów technicznych na jawnych fixtures.

Jak użyć: rozpakuj paczkę do repozytorium, uruchom Claude Code w jego katalogu i wklej zawartość `START_CLAUDE_CODE.md`. Claude realizuje backlog do spełnienia AC, z rzeczywistymi dowodami testów. Nie budowaliśmy tu jeszcze docelowej PWA i nie zamykaliśmy G2/G3/G4.
