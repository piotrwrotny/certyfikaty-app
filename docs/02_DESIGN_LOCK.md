# 02 — Zaakceptowany projekt i ochrona wyglądu

Właściciel wskazał „Skupioną sesję”, a następnie **w pełni zaakceptował stylistykę**. Ta decyzja obowiązuje mimo historycznych adnotacji „do oceny” w D. Nie oznacza automatycznej akceptacji C lub wszystkich szczegółów funkcjonalnych.

## Baseline

Źródłem kompozycji są D03, rzeczywisty atlas, prototyp oraz desktop/mobile PNG w `references/design`. D01/D02/D04/D05 opisują zachowania. `references/BASELINE_MANIFEST.json` utrwala kopie wejściowe. Zmiana ich hashy w celu ukrycia regresji jest niedopuszczalna.

Odtwarzaj widoki z wariantu „Skupiona sesja”. Obraz z pierwotnej generacji i wariant porównawczy nie są źródłem kluczy, tekstów edukacyjnych ani alternatywnym motywem. Teksty syntetyczne z prototypu wymieniaj na treści dopuszczone bez zmiany hierarchii i zachowania.

| Element | Wartość bazowa |
|---|---|
| Tło / powierzchnia | #FAF9F6 / #FFFFFF |
| Tekst / tekst pomocniczy | #182A2A / #52625F |
| Akcent / tło akcentu | #185A50 / #EAF2EE |
| Linia dekoracyjna / istotna granica kontrolki | #D7DED9 / #73847C |
| Błąd / tło | #A1332E / #FFF0EC |
| Uwaga / tło | #78531A / #FFF4DC |
| Fokus | #254CCD, 3 px, offset 4 px |
| Tekst | Arial, Helvetica, sans-serif; 16 px, line-height 1.6 |
| Tytuły | Georgia, serif; skala i szerokości według makiet |
| Odstępy | 4, 8, 12, 16, 20, 24, 32, 48, 72 px |
| Czytanie zadania | Jedna kolumna max 760 px; kontener około 856 px |
| Telefon | Padding 20 px, kontrolki min 44 px, brak poziomej tabeli K |

Tokeny startowe znajdują się w `design/tokens.css`. Odstępstwa techniczne dokumentuj w implementacji; nie zastępuj wartości motywem biblioteki komponentów. Neutralne, krótkie ikony SVG są dopuszczalne obok tekstu. Nie trzeba biblioteki ikon ani dodatkowego fontu.

## Nowe elementy PWA i profili

| Stan | Kompozycja i treść | Interakcja i fokus |
|---|---|---|
| Wybór profilu | Ten sam nagłówek, wąska karta „Kto dziś się uczy?”, lista nazw, „Dodaj profil”, informacja „Postęp jest zapisany na tym urządzeniu” | Wybór nazwy prowadzi do Sesji; fokus na H1 Sesji. Nie pokazuj cudzych odpowiedzi w podglądzie |
| Dodaj/zmień nazwę | Jeden prosty dialog: etykieta „Nazwa profilu”, pole, „Zapisz”, „Anuluj”; brak avatara i rejestracji | Fokus w polu, błąd przy polu, po zapisie przy nowej nazwie / wejście do sesji przy utworzeniu |
| Menu profilu | Nazwa w nagłówku; „Zmień profil”, „Kopia postępu”, „Dane aplikacji” | To menu pomocnicze, nie trzecia sekcja nauki. Esc/klik poza zamyka z powrotem fokusu |
| Offline | Dyskretny tekst „Pracujesz offline. Postęp zapisujemy na tym urządzeniu” w obszarze statusu | Bez modalu na każde przejście sieci, bez blokowania rozwiązywania |
| Pobieranie treści | „Pobieramy nowe materiały…” i stan, jeśli użytkownik otworzył Dane aplikacji | aria-live polite; nie przejmuj fokusu ani nie wyświetlaj tytułów podpowiadających w Sprawdzeniu |
| Treści gotowe | „Nowe materiały są dostępne dla kolejnych zadań” | W aktywnej próbie dyskretna informacja; jej wersja zostaje zachowana |
| Nowa aplikacja | „Dostępna jest aktualizacja aplikacji”, „Zapisz i odśwież”, „Później” | Nigdy auto-reload. Przy aktywnym teście najpierw zapisz przerwę, potem odtwórz tę samą próbę |
| Host niedostępny | „Nie udało się sprawdzić nowych materiałów. Korzystasz z zapisanej wersji”, „Spróbuj ponownie” | Zachowaj zadanie i fokus, nie traktuj jako błędu wiedzy |
| Zapis nieudany | „Nie udało się zapisać odpowiedzi. Spróbuj ponownie” | Nie pokazuj „Zapisano”, nie przechodź do kolejnego zadania/profilu; zachowaj w pamięci bieżącą odpowiedź |

Profile i szczegóły wersji umieszczaj poza zadaniem. W trakcie Sprawdzenia status aktualizacji nie pokazuje nazw reguł, tematów wariantów ani zakresu wycofania, który zdradzałby odpowiedź. Szczegóły po zakończeniu/konwersji, z wyjątkiem neutralnej konieczności wstrzymania próby.

## Kontrola wierności

Zrób screenshoty przy ustalonych danych dla 1200×900 i 390×844, dodatkowo sprawdź 320×800 i 768×1024. Minimum: Sesja, A/P/K przed odpowiedzią, feedback z rationale, wiedza/powrót, follow-up, test przed finalizacją, wynik, braki oraz nowe profile/status offline.

Porównuj strukturę, szerokości, kolejność, typografię, odstępy, kolory i stany. Różnice antyaliasingu systemowego nie usprawiedliwiają zmiany kompozycji. Nowy baseline renderów implementacji nie zastępuje referencji projektowych. Zaprojektowany cel dostępności: **WCAG 2.2 AA**; to nie wykonany audyt produktu.
