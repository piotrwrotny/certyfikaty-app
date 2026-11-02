# 06 — Kontrakt zachowania edukacyjnego w kodzie

To indeks obowiązków do implementacji; pełne B/Blueprint/FTC/kanon w `references/project` pozostają źródłem. Identyfikatory FR/UC/FD nie zmieniają się. Pełne produktowe Acceptance są także w dodatku A D05.

## Pętla i punktacja

Cel → potrzebna wiedza lub próba → feedback → celowana korekta → znaczący follow-up → powrót i późniejsza kontrola. Uczeń może wyjść wcześniej, zmienić cel albo odłożyć zakres. Bez obowiązkowej diagnozy i odhaczania całej lektury.

| Format | Dane/kontrolki | Ocena |
|---|---|---|
| A | 4–5 opcji, jeden klucz, radio i wyczyść; puste oddanie dozwolone | Dokładnie jeden poprawny wybór = w; błędny/pusty/nadmiarowy = 0 |
| P | Jawne k≥2, checkboxy i licznik; nie blokuj zaznaczeń po k | n≤k: w×c/k; n>k: 0 za całość; brak punktów za niewybrane dystraktory |
| K | m niezależnych wierszy, radio Prawda/Fałsz, początkowo null i wyczyść per wiersz | w×c/m; błędny/blank/podwójny zapis = 0 tylko za ten wiersz |
| Otwarte | Pole tekstowe, submit, potem rubryka i jawna metoda oceny | Opisowa ocena elementów; samoocena nie staje się niezależną oceną ani punktami CPRE |

Wagi zamknięte w {1,2,3}; format wynika z pola `format`, nigdy z prefiksu ID. Obliczenia przechowuj jako dokładny ułamek licznik/mianownik, redukowany z kontrolą bezpiecznych integerów. Przy sumowaniu nie sumuj zaokrąglonych wyników wierszy. Procent punktów to punkty/suma wag, nie mastery. Brak progu zaliczenia testu T21/tematu przez skopiowanie progu egzaminu.

## Zatwierdzenie i feedback

W Nauce klik „Sprawdź odpowiedź” zatwierdza pojedynczy item. Pustą/nadmiarową odpowiedź można oddać po jawnym potwierdzeniu; nie odbieraj należnej części P za niedobór. Po zatwierdzeniu zachowaj odpowiedź i ocenę; kolejna próba ma nowe ID. Pokazuj wynik, decydującą zasadę i lokalne rationale. Błędne/pominięte poprawne decyzje rozwinięte; pozostałe dostępne, bez przymusowego przeczytania wszystkiego po trafieniu.

Przed submit dostępna pomoc Nauki zmienia warunki próby i jest zapisana przed jej ujawnieniem. Pomoc po oddaniu nie zmienia wstecz niezależności pierwotnej odpowiedzi, lecz wpływa na późniejsze wykonania. Technologie dostępu i dopuszczony neutralny słownik językowy są oddzielne od pomocy dziedzinowej. Glossary RE jest pomocą dziedzinową.

## Sprawdzenie — cały formularz

Przed finalizacją **całej** formy ukryte są: klucz, rationale, zdobyte punkty, poprawność decyzji, podpowiadające EO/źródła/tytuły/wiedza. Instrukcje, maksymalne wagi, liczba pytań, flags i neutralny status odpowiedzi są jawne. Nie wyświetlaj ostrzeżenia sugerującego poprawność P podczas wyboru; licznik n/k jest neutralny, konsekwencję nadmiaru pokaż w przeglądzie finalizacji. Flaga jest dostępna, użycie opcjonalne.

Do finalizacji odpowiedzi są edytowalne. Review pokazuje braki, nadmiary i flagi, bez wyniku. Finalizacja jest idempotentna: double click/retry nie tworzy nowych prób i nie ujawnia części wyniku przed commit. Po finalizacji suma i wszystkie wyjaśnienia są dostępne.

Pause/wznowienie zachowują tę samą próbę, itemy/revizje, odpowiedzi, flags, warunki i zapis przerwy. Wstrzymany test nadal ogranicza pomoc także przez Sesję, historię i wiedzę dla wybranego profilu. Zmiana celu oznaczająca kontakt RE wymaga świadomej konwersji lub zakończenia/porzucenia testu; nie pozostawiaj ukrytej drogi do pomocy. Zmiana profilu zapisuje przerwę oryginalnego profilu. Profile są lokalnymi tożsamościami; nie udawaj technicznego zakazu, by ta sama osoba korzystała z drugiej tożsamości. Możliwa zewnętrzna pomoc/deklaracja znajomości pozostaje rzeczywistym ograniczeniem pomiaru.

Konwersja Sprawdzenia do Nauki wymaga neutralnego dialogu „Przejście do Nauki udostępni wyjaśnienia. Ta próba nie wróci do niezależnego Sprawdzenia”. Anulowanie nie ujawnia nic. Potwierdzenie zmienia całą formę, zachowuje wcześniej oddane odpowiedzi i ich pierwotne warunki; dalsza pomoc jest jawna. Nie ma cofnięcia tej konwersji przez restart, profil, eksport lub aktualizację.

## Wiedza, korekta i powrót

Klik przy opcji/wierszu wybiera konkretną regułę przez relacje, nie podobieństwo tekstu. W jednym dialogu można przejść do comparison/prerequisite, z jednym źródłowym NavigationContext i stosem treści. Comparison ma wspólną oś i oba przypadki. Prerequisite wymaga argumentu konieczności, sygnału i możliwości pominięcia znanej podstawy. Niezweryfikowany R14 nie jest bramką kursu.

Powrót przywraca item+rewizję, odpowiedź, ocenę, ujawnione treści, otwarte rationale, miejsce i fokus na przycisku opcji. Po refresh nie ma nowej próby ani utraty informacji o ujawnieniu. Fokus ma fallback do nagłówka tej samej pozycji, jeżeli oryginalnej kontrolki nie można odtworzyć.

Follow-up mierzy właściwe kryterium w rzeczywistej zmianie zadania. Powtórka po korekcie nie jest dowodem retencji. Po dwóch nieudanych follow-up proponuj inne wsparcie/przerwę; początkowego błędu nie wliczaj. Brak wariantu pokazuje brak, nie generuje nowego itemu. T21 nie ma hipotez/sond osobowych: neutralna korekta jest pełnoprawna. Pustej odpowiedzi nie przypisuj domniemanej misconception.

## Ekspozycja i dowody

Nowość oceń z historii sprzed pokazania pozycji i dopiero potem zapisz ekspozycję. Zachowuj znajomość itemu, rodziny, klucza, nowego kontekstu i granice danych. Inne ID, przetasowanie opcji, tłumaczenie czy inny format nie usuwają znajomości. Pula chroniona nie jest widoczna w eksploracji/search/snippetach. Odczyt pełnych T21 z kluczami ujawnia D czytelnikowi; zerowej rezerwy nie zastępuje deklaracja o dużej liczbie pytań.

Dla każdego kryterium/aspektu zachowaj dwa odstępy, ustalone przed próbą: od poprzedniej samodzielnej próby (również błędnej) i od ostatniego istotnego kontaktu. Kontakt z jedną notą nie resetuje całego EO. 7 dni od próby i minuta od lektury oznacza świeże wykonanie po nauce. Brak dat/historii oznacza brak danych, nie datę wygenerowaną przez system. Robocze ≥24 h to parametr pilota, nie norma IREB ani dowód optymalnego odstępu. Testy mogą sterować zegarem; nie są realnym doświadczeniem retencji.

Pięć kategorii dowodów z B01-10/D05 — **brak wystarczających danych; poznane/z pomocą; wykazane samodzielnie; wykazane w nowym kontekście; utrzymane po przerwie** — pozostaje odrębnymi opisami obserwacji, bez drabiny i agregacji na mastery. Nie propaguj trafienia na całe EO ani sąsiednie kryteria. Rozróżnij brak treści, brak dopuszczenia, brak niezależnych okazji, niepełną historię i brak dowodów osoby. Żaden z tych stanów sam nie dowodzi braku wiedzy.

## Treści wadliwe i historyczne ograniczenia

Krytyczny brak klucza, rationale dowolnej decyzji, źródła lub dopuszczenia blokuje użycie całego itemu. Opcjonalny brak relacji nie blokuje poprawnego samowystarczalnego feedbacku. Wycofanie/spór nie usuwa odpowiedzi i nie zmienia automatycznie klucza. Korekta oceny ma osobny ślad.

K-04 nadal dotyczy **wiersza 4 ILL-K01 / KRY-X01** z B03. Nie usuwaj tego wiersza w celu nazwania ilustracji zgodnym CPRE. B03 jest ilustracją, nie produkcyjną rezerwą. Aktualne C ma nowe K; ono również wymaga własnego dopuszczenia.
