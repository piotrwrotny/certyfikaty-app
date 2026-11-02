# D04 — Interakcje i specyfikacja prototypu

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 2 listopada 2026 · Europe/Warsaw  
**Wersja:** v0.1  
**Status:** projekt do oceny właściciela; G2/G3/G4 otwarte. G1 przyjęte według R06.  
**Autor:** Agent D / AI; kontrola autorska, bez badania użytkowników.

## 1. Co zostało wykonane

Lokalny prototyp projektowy i atlas działają jako samowystarczalne pliki HTML. Nie mają backendu, kont, integracji, wyszukiwania globalnego ani wdrożenia. Nie podejmują decyzji o technologii przyszłej aplikacji. Główny prototyp zapisuje demonstracyjny stan na danym urządzeniu, o ile przeglądarka pozwala; ramki atlasu są izolowanymi scenariuszami do review, bez rzeczywistych danych ucznia.

| Zdolność | Zakres demonstracji | Granica |
|---|---|---|
| Start / zmiana celu / materiał | Działa dla trzech ilustracyjnych celów; wejście materiał/pytanie | Brak zatwierdzonego C i diagnozy całego programu |
| A/P/K | Wybór, zmiana, wyczyść, pusty i nadmiarowy zapis, submit i feedback | Ilustracje B03, bez publikacji edukacyjnej |
| Wiedza i powrót | Opcja → comparison → podstawa/źródło → kotwica z zachowaniem wyboru i fokusu | Dopuszczenie relacji C jest osobnym warunkiem |
| Follow-up | A: wypowiedź i samoocena; P: trzy klasyfikacje i osobna samoocena uzasadnienia; K: ilustracyjne A w innej reprezentacji | Świeża korekta, brak zatwierdzonej nowej rodziny; P-FU rozwija niepełną ilustrację B i wymaga authoringu/review C |
| Sprawdzenie | 3 ilustracje A/P/K, 5 pkt, edycja, flagi, przegląd, finalizacja, wynik, review | To demonstracja interakcji na znanych ilustracjach, nie dopuszczony test CPRE. K-04 obowiązuje |
| Ciągłość | Odpowiedzi i flagi testu po wyjściu/odświeżeniu, zapis przerwy, wznowienie tej samej próby | Brak synchronizacji między urządzeniami i odporności produkcyjnej |
| Konwersja | Potwierdzenie całej próby, anulowanie bez pomocy, po konwersji review w Nauce | Brak powrotu tej samej próby do niezależnego testu |
| Braki i dowody | Makiety braku treści, wariantu, sporu, wycofania i niewystarczających dowodów | Nie wykonano rzeczywistego delayed pomiaru ani korekty rzeczywistego błędnego klucza |
| Uwaga do treści | Zapis kontekstu i komentarza wyłącznie w prototypie | Nic nie jest wysyłane do innej osoby lub aplikacji |

Reguły przyszłego produktu są poniżej szersze niż demonstracja. Nie nazywać wszystkich opisanych przypadków wykonanymi testami aplikacji. Próg dwóch nieudanych follow-up i alternatywne wsparcie są wyspecyfikowane; prototyp nie ma dwóch zrecenzowanych alternatywnych rodzin każdego celu. Rzeczywiste wyjście z tej gałęzi trzeba sprawdzić w G3 na C.

## 2. Semantyczny kontrakt widoku — bez schematu technicznego

| Pakiet informacji | Co zachować dla interakcji | Użycie i zakaz |
|---|---|---|
| Źródłowa aktywność | Tożsamość i rewizja itemu/kryterium, miejsce sesji, kontekst Nauka/Sprawdzenie | Powrót nie podmienia rewizji ani nie tworzy nowego zadania |
| Odpowiedź | Robocza lub oddana, wszystkie wybory/blanki, moment granicy submit | Review nie nadpisuje pierwszego wykonania |
| Ocena | Reguła/waga/k/m, wynik i wersja klucza; źródło oceny otwartej | Samoocena swobodnego tekstu nie staje się oceną ekspercką |
| Pomoc | Ujawniony fragment, czas i zakres kryteriów; przed/po submit | Tytuł pomagający rozstrzygnąć również jest pomocą; zamknięcie panelu nie usuwa faktu |
| Znajomość | Item, język, rodzina i bliskość; historia sprzed bieżącej ekspozycji i deklaracje | Nowy ID/przekład/przestawienie opcji nie odnawia nowości |
| Ujawnienia | Otwarte rationale, comparison, źródło i ich zakres | W aktywnym Sprawdzeniu nie mogą być dostępne żadną drogą |
| Kotwica | Element/opcja/wiersz, fokus, scroll, rozwinięcia, cel odejścia i stos gałęzi | Zagnieżdżona wiedza nie zastępuje źródłowej kotwicy |
| Odstępy | Poprzednia samodzielna próba i ostatni istotny kontakt per kryterium, z historii sprzed startu | Bieżąca ekspozycja nie zeruje wstecz odstępu właśnie rozpoczętej próby |
| Gałąź korekty | Cel błędu, źródło, osobne follow-up, licznik nieudanych follow-up i warunek wyjścia | Błąd inicjujący nie wchodzi do licznika dwóch kontroli |
| Forma Sprawdzenia | Zakres, dopuszczenie, liczba/wagi, nowość, brak limitu/profil czasu, przerwy, status i finalizacja/konwersja | Warunki określają całą próbę; po konwersji brak przywrócenia niezależności |

Nie przesądza to tabel, API, typów transportowych ani silnika. B01 definiuje znaczenie; implementator ma je zachować, nie zastąpić jednym polem „ostatnio uczone” lub wspólną flagą assisted/known.

## 3. Interakcje A/P/K i scoring

**A:** kliknięcie lub Spacja wybiera jedną opcję; strzałki działają w radiogrupie; „Wyczyść” przywraca blank. Wybór nie zatwierdza. Po submit poprawny pojedynczy wybór daje w, inaczej 0. Przy uszkodzonym zapisie zawierającym nadmiar nie wybiera się za ucznia.

**P:** checkboxy nie ograniczają n do k i nie odznaczają samoczynnie poprzednich wyborów. Licznik podaje tylko liczbę, bez trafności. n≤k: w×c/k; n>k: 0 za całe pytanie. Mniej niż k można oddać. Niezaznaczony dystraktor nie daje punktu. W Nauce tekst konsekwencji nadmiaru może pojawić się od razu; w Sprawdzeniu dopiero neutralny przegląd finalizacji ostrzega o liczbie. W żadnym przypadku nie pokazuje to klucza.

**K:** osobna grupa w każdym wierszu; początkowo żadna wartość. Zmiana i wyczyszczenie dotyczą tego wiersza. w×c/m, brak/błędna/podwójna ocena to 0 za wiersz. m nie jest stałą równą 4. Czytnik musi znać treść stwierdzenia, numer wiersza, wartość i jej stan. Nie stosować jednego checkboxa, którego brak wygląda jak wybrane Fałsz.

Suma jest sumą punktów wobec sumy maksymalnych wag, nie procentem poprawnych w całości pytań. Ułamki zachowujemy w obliczeniu. Gdy później porównuje się z normatywnym progiem pełnej formy, porównuje się wartość niezaokrągloną i doprecyzowuje prezentację przy granicy. Test wycinka nie otrzymuje werdyktu egzaminacyjnego tylko dlatego, że wyświetlono procent punktów.

**Granica zatwierdzenia:** Nauka zamyka odpowiedź po jawnej akcji; przed nią można anulować. Sprawdzenie zachowuje edytowalne odpowiedzi do finalizacji całości. Po niej review jest read-only, a nowa odpowiedź wymaga osobnej próby z zachowaniem znajomości. Otwarcie review testu jest otwarciem istniejącego zapisu pozycji, nie nową próbą.

### Pomijalne ćwiczenie formatu — specyfikacja pierwszego przyrostu

Z instrukcji w Nauce dostępne jest „Pokaż przykład punktacji”. Otwiera neutralny przykład etykiet Opcja 1–4, bez pojęć RE, EO i rezerwy. Uczeń może zmienić wybór, wyczyścić i odsłonić wynik tego przykładu. A: w=1, poprawna Opcja 2; pusty lub inny wybór daje 0. P: w=2, k=2, poprawne Opcje 1 i 3; tylko Opcja 1 daje 1, Opcje 1 i 2 dają 1, trzy zaznaczenia dają 0. K: m=3, w=1, trzy neutralne twierdzenia o etykietach, klucz Prawda/Fałsz/Prawda; dwa trafne i blank dają 2/3, a nie 1. Wzorzec i wynik dotyczą wyłącznie tutorialu.

Powrót odtwarza bieżące pytanie, bez zaliczenia domenowego EO i bez ujawnienia jego klucza. Tutorial jest pomijalny i dostępny ponownie z instrukcji; standardowe Sprawdzenie pokazuje jedynie neutralne instrukcje i reguły, bez wprowadzania dodatkowej próby tutorialowej w jego toku. Prototyp pokazuje instrukcje i działanie formatów na ilustracjach; osobny interaktywny neutralny tutorial pozostaje wyspecyfikowanym elementem wykonania pierwszego przyrostu i wymaga własnego materiału/review C (FR-029).

## 4. Ujawnienie i konwersja

| Informacja | Nauka przed submit | Nauka po submit | Aktywne/odłożone Sprawdzenie | Po finalizacji / konwersji |
|---|---|---|---|---|
| Stem, instrukcja, maksymalna waga | Tak | Tak | Tak | Tak |
| Wybory, neutralna liczba, flagi | Tak; flaga nie jest wymagana dla Nauki | Tak | Tak; flaga zawsze dostępna | Zapisane |
| Klucz, osiągnięte punkty, rationale | Nie w zwykłym widoku; pomoc na żądanie zmienia warunki | Tak | Nie | Tak, z właściwym statusem próby |
| Wiedza, porównanie, definicje RE | Na żądanie z rejestrem ujawnienia | Tak | Nie | Tak |
| EO/źródło/tytuł zdradzający regułę | Tylko jeśli świadomie ujawniana pomoc; nie automatyczna wskazówka | Tak, z granicą mapowania | Nie | Tak |
| Neutralny słownik językowy dopuszczony w profilu | Warunek, bez utożsamienia z pomocą RE | Warunek | Dozwolony i odnotowany | Warunek pozostaje |
| Klawiatura, powiększenie, czytnik | Tak | Tak | Tak | Tak |

Treść niedozwolona w aktywnym Sprawdzeniu nie powinna istnieć jako rozwijalny opis, tooltip, accessible name, preview, wynik wyszukiwania ani ujawniona gałąź historii. Samo ukrycie wzrokiem nie wystarcza. Prototyp pokazuje tę granicę na poziomie DOM i dostępnej nawigacji; zawiera syntetyczne klucze w swoim źródle i **nie jest mechanizmem ochrony produkcyjnej rezerwy**.

Żądanie pomocy przez test lub zakres → dialog: „Zakończysz niezależne warunki całej rozpoczętej próby…”. Domyślny fokus na bezpiecznym powrocie. Anulowanie zachowuje test bez ujawnienia. Potwierdzenie zapisuje zmianę całej próby przed otwarciem wiedzy. Późniejsze zamknięcie panelu, reload lub cofnięcie nie przywracają niezależności tej samej próby. Wcześniejsze odpowiedzi zachowują swoje faktyczne warunki; nie są automatycznie ukończonym niezależnym testem.

## 5. Wiedza, fokus i ciągłość

1. Zapisz źródłową kotwicę i stan przed otwarciem. Ujawnienie reguły przed submit zapisuje pomoc, nie auto-submit.
2. Otwórz jeden dialog i przenieś fokus na jego nagłówek. Tło jest inert; żaden ukryty background nie daje pomocy w Sprawdzeniu.
3. Kolejne pojęcie/podstawa/źródło zmienia treść tego samego okna i dopisuje stos. „Wstecz” cofa jedną treść. Źródłowa kotwica pozostaje ta sama.
4. „Wróć do pytania” lub Escape zamyka gałąź, odtwarza rozwinięcia, pozycję i wywołującą kontrolkę. Nie przesuwa do nowego itemu.
5. Follow-up ma odrębną próbę, ale źródło i kolejka pozostają zachowane. Powrót odtwarza np. P: b,c i 1/2; K: Prawda/Prawda/Prawda/blank i 1/2.
6. Jeśli źródło wycofano, nie otwieraj go jako aktywnego. Pokaż oznaczoną historię oraz bezpieczny cel; fokus na komunikacie i kontynuacji.

W przyszłym produkcie wyjście z wiedzy przez historię przeglądarki powinno być spójne z tym kontraktem i nie obchodzić ochrony testu. Lokalny prototyp operuje jawnymi kontrolkami; nie implementuje pełnej historii tras ani wszystkich awarii nawigacji. Powrót po minutach odtwarza stan; po długiej przerwie pokazuje powód rekomendacji i daje wybór bez resetu historii. Wyjście z testu bez limitu zapisuje przerwę i nie tworzy nowej próby. Zwykły przycisk Sesja w trakcie testu prowadzi do neutralnego wznowienia.

## 6. Feedback, korekta i interpretacja dowodów

Po submit fokus trafia do krótkiego wyniku i reguły. P i K zachowują decyzje składowe; błędne/pominięte poprawne decyzje mają domyślnie rozwinięte rationale. Pozostałe rationale można rozwinąć, bez obowiązku przeczytania. Poprawny wynik nie uruchamia długiej naprawy tylko z powodu ostrożnej deklaracji ucznia.

Hipoteza „możliwe, że…” wymaga alternatyw i sposobu ich rozdzielenia. Brak sondy oznacza neutralną korektę. Sonda po instrukcji nie potwierdza przyczyny pierwszego błędu. Blank K i formalne zero P nie diagnozują misconception. Po dwóch nieudanych follow-up tej samej gałęzi proponuje się inny rodzaj wsparcia lub przerwę; nie ma automatycznego trzeciego podobnego.

Wynik nowego zadania chwilę po instrukcji to świeże wykonanie. Nowy kontekst wymaga oceny zmiany i historii rodziny; retencja wymaga rzeczywistego odstępu od ostatniego istotnego kontaktu. Te cechy są osobne. Poprzednia samodzielna próba może być błędna — również jej data jest potrzebna. Dane nieznane są nieznane, a nie „0 dni”. Aktualny stem nie resetuje wstecz odstępu kwalifikującego bieżącą próbę.

## 7. Komunikaty i dostępność interakcji

| Sytuacja | Tekst / zachowanie |
|---|---|
| Pomoc przed submit | „Pomoc jest dozwolona. Jej otwarcie zostanie odnotowane przy tej próbie.” |
| Wynik po pomocy | „Odpowiedź po skorzystaniu z pomocy. Punkty pozostają zgodne z kluczem.” |
| Znajomość | „Znam już to pytanie lub bliski wariant”; dobrowolne, odrębne od pomocy |
| Brak K | „Brak odpowiedzi”; bez ukrytej wartości Fałsz |
| Nadmiar P | „Nadmiar zaznaczeń da 0 pkt za całe pytanie. Możesz poprawić wybór lub świadomie oddać.” |
| Finalizacja | „Po zakończeniu odpowiedzi zostaną zamknięte i pokażemy wynik całego zestawu.” |
| Powrót z korekty | „Pierwotna odpowiedź i wynik pozostają zachowane.” |
| Brak dowodów | „Jeszcze tego nie sprawdziliśmy”; osobno od „Tego materiału jeszcze nie ma” |
| Niepełna historia | „Nowość/odstęp nie są potwierdzone. Wynik wykonania jest zachowany.” |

Jedna logiczna kolejność odczytu, widoczny fokus, nazwy przycisków zgodne z tekstem, etykiety opcji i fieldset/legend dla K. Krótki region statusu obsługuje licznik, zapis i potwierdzenie uwagi; nie odczytuje całego długiego feedbacku równocześnie z przeniesieniem fokusu. Escape nie usuwa odpowiedzi. Nie ma obligatoryjnych gestów przeciągania, hover-only ani ocen wyrażonych tylko kolorem. Diagram wymagany w przyszłym C otrzymuje równoważną tekstową reprezentację, bez dodania rozstrzygającej kategorii. Brak odpowiednika wstrzymuje twierdzenie o równoważnym pomiarze.

## 8. Jak przeglądać prototyp

Otwórz atlas i wybierz stan oraz szerokość. Do pełnej ścieżki użyj „Uruchom pełną ścieżkę w ramce” lub osobnego pliku prototypu. Przykład P: wybierz b i c → submit → 1/2 → porównanie z opcji 3 → podstawa → powrót → klasyfikacje follow-up → powrót do niezmienionego 1/2. Sprawdzenie: poznaj warunki → odpowiedzi A/P/K i flaga → przegląd braków → finalizacja → suma i review. Oddzielnie sprawdź anulowanie i potwierdzenie konwersji.

Materiały i wyniki są oznaczone jako syntetyczne. Czytanie ich przez właściciela nie tworzy mu rezerwy niezależnej oceny. Nie przeprowadzono prawdziwej nauki po przerwie, testu na urządzeniu mobilnym, testu z czytnikiem ani walidacji skuteczności. To konkretna demonstracja dla review D i późniejszego G3, nie ich odbiór.
