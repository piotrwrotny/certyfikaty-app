# Design QA — CPRE D v0.1

**Rodzaj:** autorska kontrola projektu i lokalnego prototypu, bez badania użytkowników.

- Source visual truth: pierwszy obraz „Skupiona sesja” w rozmowie, 1487 × 1058 px; artefakt kierunkowy z błędem treści, nie korpus. Szczegółowy obowiązujący projekt: D01–D04 i natywne makiety po korekcie.
- Implementation screenshot: `visuals/desktop-P-feedback.png`, szerokość CSS 1200 px, raster 1200 px, pełna przewijana treść. Telefon: `visuals/mobile-K-question.png`, CSS/raster 390 px.
- Full-view comparison evidence: `visuals/D_Design_QA_Comparison.png`, oba obrazy w jednym pliku, szerokość każdego 860 px z zachowaniem proporcji. Ten sam kontekst częściowego feedbacku P; tekst/liczba opcji/jawny źródłowy przekrój B i położenie wyniku zmienione celowo według wymagań. Nie jest to zadanie klonowania piksel w piksel.
- Focused region: przejrzano zaznaczenia i rozwinięte rationale P oraz grupy Prawda/Fałsz i blank K. Całe widoki są dostępne w `visuals`; nie wykonywano osobnego powiększenia niewymaganego do oceny tych pól.

## Historia porównania i poprawki

1. P1: błędna klasyfikacja w wygenerowanym koncepcie. W końcowej makiecie użyto B03-P, pięciu opcji, pełnych rationale i właściwej reguły. Kierunkowy obraz nie jest źródłem klucza.
2. P2: stały boczny panel warunków w Nauce utrudniał zachowanie wybranego kierunku. Usunięto stałą drugą kolumnę; warunki są w rozwinięciu pod pracą. Wiedza otwiera się na żądanie. Ponowna kontrola końcowego widoku desktop i telefonu nie wykazała pozostałego problemu.
3. P2: blade natywne checkboxy po submit. Dodano tekst „Twój wybór” dla A/P; K zachowuje tekstowy stan. Ponowny screenshot i DOM potwierdziły dwie etykiety dla odpowiedzi b,c.
4. P2: nieprawidłowa scena converted w atlasie. Poprawiono inicjalizację; odczyt nagłówka po zmianie i wąskiego reflow potwierdza „Próba przeszła do Nauki.”.

## Weryfikacja w przeglądarce

Sprawdzono P częściowe, przejście wiedza/podstawa/powrót z fokusem, follow-up P i samoocenę, brak feedbacku przed końcem testu, flagi, nadmiar P, blank K, zapis/reload/przerwę, sumę 2,5/5, neutralny słownik, anulowanie i potwierdzenie konwersji, Escape i wyczyszczenie K klawiaturą. Wszystkie 25 stanów przy 320 px i reprezentatywne 390 px bez poziomego overflow. Odczytany log atlasu nie zawierał błędów aplikacji; występowały odrębne błędy rozszerzenia przeglądarki.

Nie pozostało wykrytych P0/P1/P2 w zakresie autorskiej kontroli renderowania kierunku i tych interakcji. Nie jest to akceptacja całego D przez właściciela, odbiór G3 na C, audyt WCAG ani deklaracja przydatności produkcyjnej. Brak realnego C i review rodzin pozostaje blokerem edukacyjnego handoffu, nie ukrytym wynikiem PASS.

P3 / dalsza weryfikacja: dawka feedbacku i długości C, fizyczne urządzenia, czytnik, 400% zoom/text spacing i wszystkie ścieżki historii/awarii. Szczegóły w D05.

**final result: passed**
