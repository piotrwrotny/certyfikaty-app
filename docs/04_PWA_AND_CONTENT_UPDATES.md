# 04 — PWA, offline i aktualizacje z sieci wewnętrznej

## Co oznacza „po wejściu do sieci”

Aplikacja sprawdza dostępność własnego hosta przy uruchomieniu, powrocie na pierwszy plan i sygnale `online`, a także po kliknięciu „Sprawdź aktualizacje”. Po przyłączeniu do LAN otwarta/wznowiona PWA sprawdza i pobiera nowe treści. Przy widocznej aplikacji wykonuj też kontrolę co 5 minut po udanym sprawdzeniu, ponieważ podłączenie VPN/LAN nie musi wywołać zdarzenia online. W stanie błędu obowiązuje niżej opisany backoff; nowy sygnał foreground/online lub ręczna akcja inicjuje nową kontrolę. **Nie obiecuj wykrywania logowania do systemu/sieci ani obowiązkowego wykonywania zadań, gdy PWA jest zamknięta.** Background Sync nie jest warunkiem działania tego przyrostu.

`navigator.onLine` jest tylko podpowiedzią. Internet może działać przy niedostępnym LAN; LAN może działać bez internetu. Sprawdzaj skonfigurowany manifest na tym samym origin, z timeoutem 8 s i `cache: no-store`, MIME/JSON/schema oraz kontrolą przekierowań. Strona captive portalu/SSO z kodem 200 i HTML nie jest nową treścią. Brak dostępu nie zatrzymuje pracy offline. Nie kieruj żądań do publicznego zamiennika.

Po starcie/foreground/online wykonaj kontrolę, jeżeli ostatnia udana kontrola była ponad 60 s temu; ręczna ignoruje ten cooldown. Zdarzenia zbierz w jedno żądanie, jedna aktualizacja naraz na origin. Przy niepowodzeniu retry z backoff 30 s, 2 min, 10 min, potem maks. co 30 min tylko gdy aplikacja jest aktywna; bez zapętlenia w tle. Wartości są decyzją techniczną v0.1, nie wymogiem PWA. Aktualizacja nie wymaga wybranego profilu i nie wysyła jego danych.

## Schemat wydania

W `schemas/content-manifest.schema.json` znajduje się kontrakt. Plik `content/manifest.json` opisuje całe wydanie, dodatni `releaseSequence`, ID, kanał, zgodność aplikacji i zestaw paczek z niezmiennymi URL, liczbą bajtów i SHA-256. Nowe wydanie zawsze dostaje wyższy sequence. Nazwa pliku tematu/rewizja dokumentu nie zastępują rewizji payloadu.

Manifest dla uczniów zawiera wyłącznie paczki dopuszczone do zadeklarowanych użyć i właściwego kanału; brak materiału pokazuje stan braku. Pliki źródłowe Content/QA, inne review fixtures i pełne aneksy nie są kopiowane do `dist` przez wildcard. Puste, zgodne wydanie learner z zerem dopuszczonych paczek jest poprawne i pokazuje brak materiałów. W `examples/learner-empty-manifest.json` znajduje się taki przypadek. Przykładowy manifest w `examples/releases` ma kanał **review**, nie jest wydaniem uczniowskim.

## Protokół aktualizacji treści

1. **Probe:** pobierz manifest poza SW cache; sprawdź kod/MIME, rozmiar (limit 256 KiB), JSON, schemaVersion i app compatibility. Nowszy nieobsługiwany manifest pozostaw jako „wymaga aktualizacji aplikacji”, bez usuwania lokalnej wersji. Ten sam sequence z innym ID/digest jest błędem wydawcy, nie podmianą.
2. **Stage:** pobierz brakujące niezmienne paczki do staging pod ID docelowego wydania. Sprawdzaj limit pliku 10 MiB i całej aktualizacji 50 MiB w v0.1, liczbę bajtów, digest, schemat, unikalność ID/revisions, referencje, pełność QKP, użycia i zależności. Zmiana limitów dla uzasadnionej treści jest konfiguracją, nie zmianą pedagogiki. Pakiety nieaktywne nie są widoczne selektorom zadań.
3. **Verify:** poza transakcją wykonaj sieć/crypto i semantyczną walidację całego wydania. Zapis etapami może być konieczny dla dużej paczki, ale nie jest aktywacją. Błąd jednego wymaganego pliku uniemożliwia aktywację całego wydania. Staging ma `validationComplete` i manifest digest.
4. **Commit:** krótka transakcja IndexedDB sprawdza gotowość, poprzedni pointer i kompatybilność; zaznacza nowy release jako ready/active i przełącza `activeContentReleaseId` atomowo. Nie modyfikuje żadnych stores ucznia. Blokada/compare-and-swap zapobiega równoległemu commit dwóch kart. BroadcastChannel informuje pozostałe karty, ale DB jest źródłem prawdy.
5. **Use:** rozpoczęta próba i jej kontekst wiedzy zachowują dotychczasowy snapshot/release. Następne nowe aktywności używają aktywnego kompatybilnego wydania. Nie przeładowuj pytania, formularza ani rationale podczas czytania. Pokaż dyskretny stan „Nowe materiały są dostępne dla kolejnych zadań”.
6. **Recover/GC:** po restarcie niepełne staging jest odrzucane lub wznawiane po ponownej walidacji. Stary działający release pozostaje dostępny. Czyść wyłącznie nieaktywne, nieprzypięte paczki; zachowuj treści referencjonowane przez aktywne próby/nawigację i snapshoty niezbędne do historii. Przed kasowaniem sprawdź referencje wszystkich profili i kart. Nie usuwaj historii, by zwolnić miejsce.

SHA-256 wykrywa niespójność/zmianę bajtów; nie jest podpisem zaufanego autora, jeśli ktoś kontroluje cały manifest. Źródłem zaufania jest poprawny HTTPS własnego hosta i kontrolowany proces publikacji. Nie dodawaj kryptograficznego systemu kluczy do pierwszego przyrostu bez realnej potrzeby.

## Awaria i rollback

| Zdarzenie | Obowiązkowy rezultat |
|---|---|
| Brak LAN / timeout / portal logowania | Zapisana treść działa, bieżąca odpowiedź i fokus zachowane; ręczna próba ponowienia |
| Przerwany download / zły hash / błąd schematu lub relacji | Zero nowego wydania w selekcji; działające poprzednie wydanie; diagnostyka bez danych ucznia |
| QuotaExceededError | Aktualizacja wstrzymana, żadne próby nieusunięte, możliwość eksportu i sprzątnięcia nieprzypiętego cache |
| Zamknięcie karty przed commit | Po starcie poprzedni release, staging nie jest aktywny |
| Zamknięcie po commit | Całe nowe wydanie; commit nie może wskazać paczek, które nie są zapisane |
| Rollback wydawcy | Nowe wydanie z wyższym sequence może odwołać się do wcześniejszych poprawnych payloadów; odnotowuje powód. Nigdy ciche cofnięcie historii ocen |
| Niekompatybilna nowa aplikacja / migracja | Zachowaj dane i dotychczasową wersję; jawny komunikat o aktualizacji/migracji, bez resetu bazy |

## Wycofanie, sporny klucz i zmiana rodziny

Manifest może zawierać niezależne, kumulatywne decyzje wycofania z ID itemu i rewizją oraz trybem `withdrawn` lub `key-disputed`; ich zastosowanie nie usuwa oryginalnej próby. Zgłoszenie użytkownika to lokalna wątpliwość, nie odgórna zmiana klucza.

Po wiarygodnym pobraniu decyzji zablokuj nowe próby dotkniętej rewizji. Aktywną Naukę można przerwać neutralnym komunikatem i wyjściem, bez punktowego dowodu. Aktywne Sprawdzenie **wstrzymaj jako całą formę**, jeśli dotyczy go krytyczna decyzja: „Ta próba wymaga aktualizacji materiału. Zachowaliśmy odpowiedzi”; nie wskazuj poprawnej opcji, treści sporu ani punktów. Pozwól zakończyć jako nieważne do wnioskowania albo świadomie przejść do Nauki. Nie wymieniaj pojedynczego pytania na nowe i nie ujawniaj rozwiązania przed finalizacją/konwersją. Gdy urządzenie było offline, wycofanie staje się znane dopiero po połączeniu; nie deklaruj wcześniejszej wiedzy aplikacji.

Poprawiona rewizja ma nowe ID rewizji oraz jawny impact report. Stara ocena jest zachowana. Ponowna ocena z powodem, datą i podstawą jest oddzielna; bez możliwości rzetelnego przeliczenia wynik ma ograniczenie „nie używamy jako dowodu”, a nie domyślne zero wiedzy. Zmiana rodziny scala historię ekspozycji konserwatywnie według mapowania aliasów; nie robi ze znanej pozycji nieznanej.

## Aktualizacja kodu aplikacji

SW obsługuje wyłącznie app shell. Użyj `prompt`; nie konfiguruj automatycznego reload/skipWaiting podczas próby. Nowa wersja instaluje się w waiting. „Zapisz i odśwież” awaituje zapis, zapisuje przerwę testu, koordynuje karty i uruchamia nowy SW. Po reload przywraca profil i tę samą próbę. „Później” pozostawia działającą wersję. Równoczesne karty nie mogą uruchomić niekompatybilnego kodu na nieprzetestowanej migracji.

Nie mieszaj cache app shell z corpus store. `cleanupOutdatedCaches` nie może skasować danych ucznia ani paczek pytań. Zachowaj stare hashowane assety na serwerze przez okres umożliwiający kończenie otwartych kart. App i content mają osobne wersje oraz macierz zgodności; najpierw wdraża się kompatybilny reader, potem nowy schema content. Bez automatycznego pobierania review-only w wydaniu uczniowskim.

## Hosting i instalacja

Docelowo statyczny host w LAN, jeden stabilny origin i zaufany certyfikat HTTPS. Wyjątek localhost do developmentu nie oznacza, że zwykły `http://192.168...` jest poprawnym hostem PWA. Ustaw base URL, start_url i scope spójnie z rzeczywistą ścieżką, np. `/cpre/`; sprawdź również hosting w podkatalogu. Manifest: nazwa PL, display standalone, theme/background z tokenów, ikony 192/512 i maskable. SVG/PNG ikon aplikacji mają być proste, bez nowego brandingu strony.

Pierwsze uruchomienie musi pobrać shell i wybrany dostępny korpus. Dopiero po zapisaniu oznacz „Gotowe offline”. Nauka w zwykłej karcie działa bez instalacji. Mechanizm zaproszenia do instalacji zależy od przeglądarki: używaj feature detection i krótkiej instrukcji, nie wymuszaj pozornego uniwersalnego przycisku. Rzeczywisty test Android/desktop/iOS jest opisany w docs/07.
