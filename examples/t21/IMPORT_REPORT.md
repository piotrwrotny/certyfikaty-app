# Przykładowy import T21 — granica wykonania

Oryginały Content i QA zostały dołączone w pełnych bajtach. Rewizja dokumentów v0.1, bieżąca wersja plików 2. Źródłowe statusy: COMPLETE FOR SEPARATE REVIEW, G2/G3/G4 open, brak learner approval i chronionej rezerwy.

## Rzeczywiście przygotowane dane

| Artefakt | Zakres |
|---|---|
| t21-item-inventory.json | 32 istniejące itemy, role/formats/wagi/klucze/anchor; 128 rationale w źródle, suma wag 47 |
| t21-scoring-golden-vectors.json | 176 jawnych wejść i oczekiwanych wyników przepisanych z QA §7; to syntetyczne przypadki arytmetyczne, nie wyniki osób |
| t21-review-fixture.json | Istniejące B01(A)/F01(K)/G01(P), 12 pełnych rationale i jedna nota N01; reguły i rzeczywiste adresy źródeł |
| examples/releases/review-0001 | Przykładowy manifest review z bytes i SHA-256 tej próbki; data wydania przykładowa |

Przykładowy JSON ma runtimeCompleteness partial, review pending, publication review-only i allowedUses puste. Schematowa poprawność nie nadaje zgody. Nie jest kompletną pętlą treści w aplikacji ani formą testu T21. Przed pełnym importem Claude czyta oba źródła w całości.

## Pozostała praca importera

- Pozostałe 29 zamkniętych itemów i 4 otwarte wraz z rubrykami oraz oceną; wszystkie noty, comparison/warunki, korekty, warianty i kontakty potrzebne do przyrostu.
- Pełne przypisanie zakresów kontaktu rationale/kontrastów według Content §8–9. Próbka obejmuje primary i nie może służyć kwalifikacji dowodów.
- Dokładne instancje relacji używanych przez produkt, m.in. ścieżki opcji do wiedzy, REM→F/G i NAVPLAN; pozostałe 538 instancji nie są tu przedstawione jako już znormalizowane.
- Odrębna kontrola rodzin, formy, praw i dopuszczeń. Zero zatwierdzonych form w próbce jest zamierzone. Nie generowano brakującej rezerwy, review ani historii ucznia.

Żadna treść źródłowa nie została nadpisana. Przykładowa konwersja i obliczenia są pomocą programistyczną, nie niezależną recenzją merytoryczną ani walkthrough G3.
