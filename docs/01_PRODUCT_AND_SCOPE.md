# 01 — Produkt, zakres i nowe wymagania

Status: specyfikacja techniczna v0.1 na podstawie jawnego zlecenia właściciela z 2.11.2026. Stylistyka zaakceptowana. Rozwinięcie historycznego D, bez zmiany plików źródłowych.

## Użytkownik i doświadczenie

Uczeń otwiera PWA, wybiera swój nazwany profil i otrzymuje jedną propozycję: wznowienie, kontrolę po przerwie albo nowy cel z krótkim powodem. Może zmienić cel i wejść od materiału lub próby. Nawigacja pozostaje „Sesja” i „Zakres i dowody”; menu z nazwą profilu służy zmianie profilu, kopii postępu i informacjom o danych. Status offline/aktualizacji jest dyskretny.

Nie twórz osobnego obszaru dla każdego kroku pętli. Wiedza otwiera się przy zadaniu i przywraca ten sam stan. Dostępność testu wynika z dopuszczonej formy i warunków osoby; sam fakt posiadania 32 pytań nie tworzy formy.

## Uzgodniony przyrost techniczny

| ID | Wymaganie | Kryterium obserwowalne |
|---|---|---|
| PROF-01 | Wybór profilu przy świeżym uruchomieniu | Ekran startowy pokazuje nazwy i „Dodaj profil”; ostatni użyty może być sugerowany, lecz nie otwiera danych bez wyboru |
| PROF-02 | Utworzenie i zmiana nazwy | 1–40 znaków po NFC/trim; polskie znaki dozwolone, pusty/niewidoczny tekst odrzucony; nazwa nie jest kluczem danych |
| PROF-03 | Pełna izolacja postępu | Odpowiedzi, próby, flagi, ekspozycja, dowody, cele, przerwy i ustawienia ucznia są oddzielne per profileId |
| PROF-04 | Bezpieczne przełączenie | Zapis bieżącego stanu przed wyjściem; przy błędzie zapisu profil się nie zmienia. Aktywny test zostaje wstrzymany jako ta sama próba |
| PROF-05 | Kopia i odtworzenie | Eksport jednego profilu, import bez nadpisania istniejącego; weryfikacja wersji, spójności i jawne pochodzenie historii |
| PROF-06 | Usunięcie wybranego profilu | Potwierdzenie z nazwą; opcja eksportu; usuwa tylko jego dane, nie wspólny korpus ani pozostałe profile |
| PWA-01 | Zwykła strona i instalowalna PWA | Manifest, ikony, poprawny scope/base, HTTPS; brak obsługi instalacji nie uniemożliwia nauki w karcie |
| PWA-02 | Nauka i zapis offline | Po pełnym pobraniu lokalnego zestawu można otworzyć/zamknąć app, rozwiązywać i wznowić bez LAN/internetu |
| PWA-03 | Prawdziwy stan gotowości | „Gotowe offline” dopiero gdy app shell i potrzebne paczki są zapisane; pierwsze wejście offline bez danych ma jasny stan braku |
| PWA-04 | Utrzymanie danych | IndexedDB, obsługa quota/write errors, prośba o persist gdy wspierana i eksport; brak obietnicy niezniszczalnego zapisu |
| UPD-01 | Automatyczna kontrola hosta LAN | Przy starcie, powrocie na pierwszy plan i online; okresowo przy widocznej aplikacji; ręczne „Sprawdź aktualizacje”; onLine jest sygnałem, fetch hosta rozstrzyga |
| UPD-02 | Atomowe wydanie treści | Download → walidacja → staging → aktywacja; awaria pozostawia całe poprzednie wydanie |
| UPD-03 | Ochrona prób i historii | Przypięty release/itemRevision/snapshot; nowe wydanie służy nowym aktywnościom, nie modyfikuje oddanych odpowiedzi |
| UPD-04 | Odrębna aktualizacja aplikacji | Nowy SW czeka; bez auto-reload w zadaniu; aktualizacja po bezpiecznym zapisie i świadomej akcji |
| UPD-05 | Wycofania i korekta klucza | Nowe użycia zatrzymane, stan historyczny zachowany, ewentualna nowa ocena oddzielnie z powodem |
| CNT-01 | Powtarzalny import pary Markdown | Content + QA, stałe ID, raport różnic, walidacja; kolejne tematy nie wymagają kodowania nowego ekranu |
| CNT-02 | Rozdział review i użycia ucznia | Review-only nie jest wybierane przez sesję ucznia; lokalna demonstracja fixtures ma jawny tryb techniczny i osobną bazę |
| CNT-03 | Dane bez runtime LLM | Schematy/relacje/rationale są danymi; brak autorytatywnych odpowiedzi generowanych podczas nauki |

## Pierwszy przyrost edukacyjny

Zakres funkcji i ograniczenia 38 FR dziedziczymy z D01. Obsłuż kompletne ścieżki A/P/K, otwarte retrieval z jawną samooceną/rubryką, korektę z maksymalnie dwiema kontrolami, powrót, późniejszą kontrolę, test tematu bez limitu i oddzielny profil dowodów. Silnik jest tematycznie niezależny: T21 jest pierwszym bogatym przykładem treści, nie wymuszoną jedyną domeną.

D01 w chwili powstania widział C v0.1 i zerowy authoring. To historyczny snapshot. W tej paczce są C v0.2 oraz T21: istnieją rzeczywiste teksty, ale nie ma przyjęcia G2 ani formy T21. Nie buduj ekranu sugerującego zerowy korpus wyłącznie na podstawie starego D01; odczytuj aktualny manifest dostępności.

## Pozostaje poza przyrostem

Globalny graf, wyszukiwarka globalna FR-031, pełny timed mock FL, algorytm mastery, prognoza zdania, obowiązkowa diagnoza, gamifikacja, social, rozbudowany CMS, konta i hasła, serwer postępu, synchronizacja między urządzeniami. FR-030 zachowuje Validate i jest wyłączone. Nie dopisuj pominiętych funkcji do zakresu pod pozorem technicznej wygody.

„Profil” w nowym wymaganiu oznacza nazwany zestaw danych lokalnych; „profil próby” w B/Blueprint oznacza warunki pomiaru. To różne pojęcia w kodzie i interfejsie.
