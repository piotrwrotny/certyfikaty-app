# IREB CPRE — start repozytorium dla Claude Code v0.1

**Cel:** zbudować lekką, responsywną PWA do nauki, zachowując zaakceptowaną stylistykę **Skupionej sesji**, kontrakt edukacyjny i rzeczywiste statusy treści. Data: 2 listopada 2026.

Ta paczka jest konkretnym wsadem implementacyjnym: instrukcje agenta, specyfikacja, uporządkowany backlog z AC, schematy danych, przykłady T21 i komplet lokalnych referencji. **Nie zawiera gotowej aplikacji PWA.** HTML w `references/design` jest prototypem projektowym.

## Jak rozpocząć

1. Rozpakuj zawartość tego katalogu do pustego repozytorium. Jeżeli repo już zawiera aplikację, najpierw wykonaj inwentaryzację i pracuj na osobnej gałęzi; nie zastępuj plików w ciemno.
2. Uruchom Claude Code w katalogu głównym. Otrzyma `CLAUDE.md` automatycznie. Wklej tekst z [START_CLAUDE_CODE.md](START_CLAUDE_CODE.md).
3. Claude ma implementować kolejne zadania z [backlog/IMPLEMENTATION_BACKLOG.md](backlog/IMPLEMENTATION_BACKLOG.md) i aktualizować `backlog/tasks.json` na podstawie dowodów. Nie wystarczy plan ani lista checkboxów.
4. Następne tematy przekazuj parami **Content + QA_and_Handoff** według [content/inbox/README.md](content/inbox/README.md). Sam raport QA nie jest bankiem pytań.

## Najważniejsze wejścia

| Plik | Po co go otworzyć |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Mandat, kolejność pracy, niezmienniki i Definition of Done |
| [docs/01_PRODUCT_AND_SCOPE.md](docs/01_PRODUCT_AND_SCOPE.md) | PWA, nazwane profile, granice przyrostu |
| [docs/02_DESIGN_LOCK.md](docs/02_DESIGN_LOCK.md) | Zaakceptowany wygląd i ochrona przed redesignem |
| [docs/03_ARCHITECTURE_AND_DATA.md](docs/03_ARCHITECTURE_AND_DATA.md) | Stos, lokalne dane, izolacja profili i ciągłość prób |
| [docs/04_PWA_AND_CONTENT_UPDATES.md](docs/04_PWA_AND_CONTENT_UPDATES.md) | Offline, sieć wewnętrzna, atomowe wydania i aktualizacje |
| [docs/05_CONTENT_INGESTION.md](docs/05_CONTENT_INGESTION.md) | Dodawanie tematów przez agenta bez zmiany aplikacji |
| [docs/06_EDUCATIONAL_INVARIANTS.md](docs/06_EDUCATIONAL_INVARIANTS.md) | Punktacja, Sprawdzenie, ekspozycja, dwa czasy i dowody |
| [docs/07_ACCEPTANCE_AND_TESTS.md](docs/07_ACCEPTANCE_AND_TESTS.md) | Konkretne scenariusze odbioru i testy awarii |
| [docs/08_FR_TRACEABILITY.md](docs/08_FR_TRACEABILITY.md) | Wszystkie 38 FR, priorytety i przypisane zadania |
| [docs/09_OPERATIONS_AND_RELEASES.md](docs/09_OPERATIONS_AND_RELEASES.md) | Hosting w LAN, HTTPS, publikacja kolejnych paczek |
| [docs/10_DECISIONS_AND_OPEN_ITEMS.md](docs/10_DECISIONS_AND_OPEN_ITEMS.md) | Decyzje lokalne, zależności i aktualny stan G2/G3/G4 |
| [docs/11_HANDOFF_QA.md](docs/11_HANDOFF_QA.md) | Co sprawdzono w tym wsadzie; ograniczenia weryfikacji |
| [docs/12_TECHNICAL_SOURCES.md](docs/12_TECHNICAL_SOURCES.md) | Oficjalne dokumentacje techniczne i data kontroli |

## Wygląd, który należy zachować

Otwórz [atlas makiet](references/design/IREB_CPRE_D_Mockup_Atlas_v0.1.html), a następnie [prototyp](references/design/IREB_CPRE_D_Prototype_v0.1.html). Widoki odpowiadające zaakceptowanemu kierunkowi to „Skupiona sesja”, nie alternatywny układ z ciągłym panelem wiedzy. Kompozyt: [podgląd](references/design/visuals/D_Review_Overview.png). Dokumenty D01–D05 i wszystkie makiety znajdują się w `references/design`.

## Ustalone rozszerzenie

- Nazwane **profile lokalne na tym urządzeniu**, wybierane przy otwarciu aplikacji; każdy ma własne postępy, odpowiedzi, ekspozycję i wznowienia.
- Treści i aplikacja działają offline po pierwszym poprawnym pobraniu; zawartość jest wspólna, historia ucznia osobna.
- Po otwarciu/wznowieniu PWA i odzyskaniu dostępu do hosta w sieci wewnętrznej aplikacja sprawdza nowe wydanie treści. Nie potrzebuje do tego konta ucznia.
- Aktualizacja nie usuwa postępu, nie nadpisuje odpowiedzi ani nie podmienia pytania w rozpoczętej próbie.
- W przyroście nie ma synchronizacji postępu między urządzeniami, kont, haseł, CMS ani generowania odpowiedzi przez LLM w aplikacji.

## Status materiałów

Właściciel **zaakceptował stylistykę** i zlecił przygotowanie tego wsadu technicznego z PWA/profilami. To nowsza decyzja niż historyczne noty D „styl do oceny”. Nie jest automatycznym odbiorem treści ani wszystkich bramek.

G1 jest zamknięte przez R06. Aktualne C01–C04 v0.2 i oba T21 v0.1 są kompletne autorsko, lecz oczekują odrębnego review. **G2/G3/G4 pozostają otwarte w dostarczonych źródłach.** Claude może realizować implementację i testy techniczne z wyraźnie oddzielonymi fixtures; nie może sam nadać T21 statusu dopuszczonego do zaliczanej nauki ani ogłosić bramek zamkniętymi.

Kontrola samej paczki: `python3 scripts/check_handoff.py`. Nie wymaga instalowania zależności aplikacji. Wynik kontroli przygotowania zapisano w `qa/handoff-checks.json`.
