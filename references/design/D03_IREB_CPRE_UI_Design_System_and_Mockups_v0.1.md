# D03 — System wizualny i rzeczywiste makiety

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 2 listopada 2026 · Europe/Warsaw  
**Wersja:** v0.1  
**Status:** projekt do oceny właściciela; G2/G3/G4 otwarte. G1 przyjęte według R06.  
**Autor:** Agent D / AI; kontrola autorska, bez badania użytkowników.

## 1. Dwa warianty i wybrany kierunek

| Kryterium | 1 — Skupiona sesja | 2 — Pytanie i notatka |
|---|---|---|
| Organizacja | Jedna kolumna pytania i feedbacku; wiedza na żądanie | Pytanie i osobna stała kolumna wiedzy w review |
| Hierarchia | Najpierw aktualna czynność i jeden następny krok | Równoczesny dostęp do pytania i dłuższej notatki |
| Nawigacja wiedzy | Jeden dialog, kroki treści, stały powrót | Druga kolumna z kontekstem; odczyt między obszarami |
| Telefon | Ta sama kolejność, wiedza jako pełny widok | Kolumny przechodzą w pion; trzeba odnaleźć drugi obszar |
| Styl | Ciepłe jasne tło, ciemna zieleń, szeryfowy nagłówek | Chłodniejsza powierzchnia, granat, nagłówki bezszeryfowe |
| Koszt / hipoteza | Mniej równoległych obszarów; koszt otwarcia panelu | Mniej przełączeń na szerokim ekranie; większy koszt orientacji |
| Status | Rekomendacja autora; właściciel wskazał ten kierunek w rozmowie | Zachowana alternatywa porównawcza |

To porównanie projektowe, bez wyniku badania skuteczności lub testu preferencji populacji. Pierwsze dwa obrazy Image Gen w rozmowie są eksploracją kierunków. **Wiążące dla projektu v0.1 są poprawione makiety przeglądarkowe i D01–D04**: obrazy zawierały uproszczenia i błąd klasyfikacji, opisany w D05. Nie wolno uczyć z ich tekstu ani traktować go jako C.

Przegląd wariantów: [D_Variants_Comparison.jpg](visuals/D_Variants_Comparison.jpg). W obu natywnych makietach wykorzystano dokładnie ten sam ilustracyjny item P, odpowiedź i zakres feedbacku, aby nie mieszać różnicy układu z różnicą ilości informacji.

## 2. Artefakty do otwarcia

- [IREB_CPRE_D_Mockup_Atlas_v0.1.html](IREB_CPRE_D_Mockup_Atlas_v0.1.html) — samowystarczalny atlas **25 stanów**, dwa układy, szerokości 320/390/768/1200 px, porównanie oraz prototyp w ramce.
- [IREB_CPRE_D_Prototype_v0.1.html](IREB_CPRE_D_Prototype_v0.1.html) — samowystarczalny interaktywny prototyp, bez backendu i z demonstracyjnym zapisem lokalnym.
- [D_Review_Overview.png](visuals/D_Review_Overview.png) — skrócony przegląd wybranego kierunku.

Atlas zawiera narzędzia recenzenckie poza interfejsem ucznia. Wybór stanu/szerokości/wariantu nie jest funkcją produktu. Właściwy produkt nie pokazuje FR, KRY, R ani technicznych nazw plików w głównym przebiegu.

| Potrzeba / stan | Desktop | Telefon |
|---|---|---|
| Wejście i jeden kolejny krok | [home](visuals/desktop-home.png) | [home](visuals/mobile-home.png) |
| Pytanie A | [A](visuals/desktop-A-question.png) | [A](visuals/mobile-A-question.png) |
| Pytanie P | [P](visuals/desktop-P-question.png) | [P](visuals/mobile-P-question.png) |
| Pytanie K, puste wartości | [K](visuals/desktop-K-question.png) | [K](visuals/mobile-K-question.png) |
| Feedback A | [A feedback](visuals/desktop-A-feedback.png) | [A feedback](visuals/mobile-A-feedback.png) |
| Feedback P i pominięta poprawna opcja | [P feedback](visuals/desktop-P-feedback.png) | [P feedback](visuals/mobile-P-feedback.png) |
| Feedback K i blank | [K feedback](visuals/desktop-K-feedback.png) | [K feedback](visuals/mobile-K-feedback.png) |
| Kontekstowa wiedza / powrót | [wiedza](visuals/desktop-knowledge.png) | [wiedza](visuals/mobile-knowledge.png) |
| Follow-up po korekcie | [follow-up](visuals/desktop-follow.png) | [follow-up](visuals/mobile-follow.png) |
| Kontrola po korekcie / samoocena | [wynik](visuals/desktop-follow-result.png) | [wynik](visuals/mobile-follow-result.png) |
| Sprawdzenie przed finalizacją | [aktywne](visuals/desktop-test-P.png), [przegląd](visuals/desktop-test-review.png) | [aktywne](visuals/mobile-test-P.png), [przegląd](visuals/mobile-test-review.png) |
| Wynik po finalizacji | [wynik](visuals/desktop-test-result.png) | [wynik](visuals/mobile-test-result.png) |
| Konwersja zakończona | [Nauka](visuals/desktop-converted.png) | [Nauka](visuals/mobile-converted.png) |
| Brak treści | [brak](visuals/desktop-missing.png) | [brak](visuals/mobile-missing.png) |
| Brak wariantu | Atlas, stan 20 | [brak wariantu](visuals/mobile-novariant.png) |
| Sporny klucz | [spór](visuals/desktop-disputed.png) | [spór](visuals/mobile-disputed.png) |
| Brak wystarczających dowodów | [zakres](visuals/desktop-scope.png) | Atlas, stan 24 |
| Dwa odstępy i ograniczenie retencji | [odstępy](visuals/desktop-evidence.png) | [odstępy](visuals/mobile-evidence.png) |

PNG to rzeczywiste przechwycenia renderowanego prototypu, wykadrowane do zmierzonego obszaru ramki; nie są wygenerowanymi obrazami imitującymi działający interfejs. Długie makiety pokazują również przewijaną zawartość. Nie poświadczają testu na fizycznym telefonie.

## 3. Typografia i odstępy

| Rola | Reguła v0.1 |
|---|---|
| Tekst interfejsu | Arial/Helvetica/system sans; 16 px, line-height 1,6–1,65; bez pobierania zewnętrznych fontów w prototypie |
| Nagłówek strony | Georgia/system serif; desktop 32–52 px zależnie od szerokości (ok. 41 px przy 1200 px), telefon ok. 34 px; line-height 1,13; bez wersalików w treści zadania |
| Nagłówek sekcji | Sans 20–22 px, semibold; w dłuższej wiedzy serif do 32 px dla tytułu |
| Treść pomocnicza | 14 px; status prototypu 12 px; warunki nie są ukrywane przez zbyt niski kontrast |
| Wiersz tekstu | Docelowo maks. 68ch dla akapitów; długie opcje łamią się naturalnie. Bez ucinania wielokropkiem |
| Siatka odstępów | 4, 8, 12, 16, 20, 24, 32, 48, 72 px; 16–24 wewnątrz grup, 28–32 między czynnościami |
| Kolumna Nauki | Maks. ok. 760 px treści, kontener 856 px z paddingiem; jedna kolumna w wybranym wariancie |
| Strona sesji / zakresu | Kontener do 1232 px; kontekst pomocniczy może zajmować wąską drugą kolumnę; na telefonie poniżej |
| Promienie | 6 px kontrolek, 10 px noty, 12 px dialogu; bez kart wewnątrz kart i ozdobnych cieni w obszarze nauki |

Nie ustalono „dokładnie 65 znaków” jako warunku odbioru każdego tłumaczenia. Czytelność długich wyjaśnień trzeba ponownie sprawdzić na C.

## 4. Kolory i sprawdzone pary

| Token | Kolor | Rola |
|---|---|---|
| paper | #FAF9F6 | Główna powierzchnia |
| surface | #FFFFFF | Pola edycji, kontrastowe powierzchnie |
| ink | #182A2A | Tekst podstawowy |
| muted | #52625F | Informacje pomocnicze |
| accent | #185A50 | Główne akcje i linki |
| soft | #EAF2EE | Zaznaczenie i neutralna nota |
| line | #D7DED9 | Dekoracyjne separatory, nie jedyny wskaźnik granicy pola |
| control | #73847C | Widoczna granica aktywnej kontrolki |
| error / errorbg | #A1332E / #FFF0EC | Błąd wraz z tekstem i znaczeniem |
| warning / warningbg | #78531A / #FFF4DC | Ograniczenie/konsekwencja formalna |
| focus | #254CCD | Wyraźny obrys fokusu, 3 px z odstępem 4 px |

Kontrasty obliczono dla konkretnych par tokenów ze względnej luminancji sRGB; nie jest to audyt wszystkich stanów przeglądarki:

| Pierwszy plan | Tło | Kontrast |
|---|---|---:|
| #182a2a | #faf9f6 | 14.21:1 |
| #52625f | #faf9f6 | 6.10:1 |
| #185a50 | #ffffff | 8.02:1 |
| #a1332e | #fff0ec | 6.25:1 |
| #78531a | #fff4dc | 6.30:1 |
| #254ccd | #faf9f6 | 6.66:1 |
| #73847c | #ffffff | 3.95:1 |


Stany nie mogą polegać tylko na kolorze. Tekst „Wybrana niepoprawna odpowiedź”, „Pominięta poprawna odpowiedź”, „Brak odpowiedzi”, „Po skorzystaniu z pomocy” jest częścią znaczenia. Wyszarzone kontrolki po oddaniu nie są jedyną reprezentacją wyboru; widoczna jest treść oraz tekstowy stan. Kolor miękkiej powierzchni jest dekoracyjny.

## 5. Komponenty i ich stany

| Komponent | Anatomia i zachowanie | Wymagane stany |
|---|---|---|
| Rekomendacja | Cel, jednozdaniowy powód, jedna główna akcja, jawna alternatywa | Nowy cel, wznowienie, późniejsza kontrola, brak dostępnej aktywności |
| Pytanie A | Polecenie, waga, radiogrupa 4–5 opcji, wyczyść i submit | Puste, wybrane, fokus, oddane, review; nigdy automatyczny submit |
| Pytanie P | Polecenie/k/w, checkboxy, licznik, neutralny review | Niedobór, k wyborów, nadmiar, częściowy wynik, pominięta poprawna opcja |
| Wiersz K | Stwierdzenie jako legenda, para radio, wyczyść i tekst stanu | Brak, Prawda, Fałsz, oddana decyzja, wynik wiersza; m zmienne |
| Feedback | Punkty, zasada z warunkiem, zachowany wybór, wszystkie rationale | Poprawny, częściowy, błędny, zero formalne, blank; bez obowiązkowej lektury całości |
| Rationale | Jawne rozwinięcie powiązane z decyzją, lokalne wyjaśnienie i celowany link | Złożone/rozwinięte, fokus, brak opcjonalnej relacji |
| Wiedza | Jeden dialog, nazwa potrzeby, treść i kotwica powrotu | Pojęcie, comparison, podstawa, źródło, niedostępność |
| Warunki próby | Oddzielne fakty punktów, pomocy, znajomości i czasu | Pomoc przed/po submit, znany item/rodzina, niepełna historia |
| Flaga powrotu | Przycisk przełączający o widocznym stanie i nazwie | Oznaczone/nieoznaczone; zawsze dostępne w teście |
| Przegląd testu | Lista pytań, stan odpowiedzi, braki/nadmiar, flagi, finalizacja | Edytowalne do końca; po zamknięciu read-only |
| Komunikat | Jasny tytuł, przyczyna i dostępny dalszy krok | Brak, oczekiwanie, błąd zapisu, wycofanie, spór, brak dowodów |

Hover zmienia powierzchnię, nie ujawnia wiedzy. Focus-visible jest czytelny niezależnie od hover. Akcja w toku ma neutralne „Zapisywanie…” bez ujawnienia poprawności; po powodzeniu krótki status. Nie wyłączać całego kontekstu bez powodu. Brak dostępnego wariantu ma wyjaśniony stan i alternatywę, a nie samotny nieaktywny przycisk.

**Ikonografia:** w v0.1 funkcje mają przede wszystkim tekstowe etykiety i natywne znaczniki wyboru/rozwinięcia. Nie jest potrzebna dodatkowa biblioteka ikon. Jeśli pojawią się ikony, mają wspierać istniejącą etykietę, nie zastępować „Wróć do pytania”, stanu K lub statusu wyniku. Nie projektuje się dekoracyjnych rysunków z HTML ani znaków emoji.

## 6. Responsywność i dostępność

Poniżej ok. 900 px kontekst z ekranu sesji/zakresu przechodzi pod główną treść. Nauka pozostaje jedną kolumną. Poniżej 520 px padding wynosi 20 px, CTA główne zajmuje dostępną szerokość, a długie etykiety rosną w pionie. Wiedza staje się pełnoekranowym dialogiem; nagłówek z powrotem pozostaje dostępny. Nie ma poziomej tabeli K: każdy wiersz zawiera własne stwierdzenie i wartości. Przy 320 px sterowanie wyczyść może przejść do kolejnego wiersza.

Cel: **WCAG 2.2 AA**, z testami m.in. 1.3.1, 1.4.3, 1.4.10–12, 2.1.1–2, 2.4.3/7/11, 2.5.3/8, 3.3.1–2, 4.1.2–3. Aktywne cele dotykowe projektujemy na ≥44 px; nie utożsamiamy tej lokalnej decyzji z minimalnym progiem WCAG 2.5.8 wynoszącym 24 CSS px z wyjątkami. Docelowo kontrast tekstu zwykłego ≥4,5:1, dużego ≥3:1, istotnych granic kontrolek ≥3:1. Powiększenie, tekstowe odstępy i czytnik trzeba sprawdzić w realizacji.

Źródła projektowania dostępności: [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/), [W3C APG — modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). Obsługa technologii wspomagających nie jest pomocą merytoryczną. Brak przecieków dotyczy również nazw dostępnych, altów, tytułów, breadcrumbs i hidden/preview, nie tylko przycisku „pomoc”.

Przeprowadzona kontrola wymiarów i wyglądu nie zastępuje audytu dostępności, testów z czytnikiem ani badania użytkowników.
