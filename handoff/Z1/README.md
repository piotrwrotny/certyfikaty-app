# Z1 — paczki wiedzy w formacie autorskim

| Temat | Kryteria / zakresy | Pytania | A | P | K | Rationale | Noty | Podstawy | Przykłady łącznie | Korekty | Open runtime | Reguły | Relacje jawne |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T01 | 5 | 20 | 10 | 3 | 7 | 73 | 6 | 0 | 15 | 5 | 6 | 16 | 35 |
| T02 | 3 | 12 | 3 | 4 | 5 | 49 | 3 | 1 | 9 | 3 | 5 | 10 | 22 |
| T03 | 2 | 8 | 2 | 4 | 2 | 35 | 2 | 0 | 6 | 2 | 3 | 7 | 14 |
| T04 | 2 | 8 | 3 | 2 | 3 | 32 | 2 | 0 | 6 | 2 | 3 | 9 | 14 |
| T05 | 3 | 12 | 4 | 4 | 4 | 48 | 3 | 0 | 9 | 3 | 4 | 11 | 21 |
| T06 | 2 | 8 | 2 | 2 | 4 | 34 | 2 | 0 | 6 | 2 | 4 | 9 | 14 |
| T07 | 10 | 40 | 17 | 11 | 12 | 164 | 11 | 1 | 39 | 10 | 20 | 37 | 80 |
| RAZEM | 27 | 108 | 41 | 30 | 37 | 435 | 29 | 2 | 90 | 27 | 45 | 99 | 200 |

Zacznij od [manifestu](handoff/Z1/MANIFEST.md), [pokrycia](handoff/Z1/COVERAGE.md) i [raportu walidacji](handoff/Z1/VALIDATION_REPORT.md).

To siedem osobnych katalogów T01–T07 w content/authoring, w formacie cpre-authoring/1.0. Są przygotowanym wsadem do aplikacji, z pełną treścią i powiązaniami; nie są ręcznie wygenerowanymi paczkami JSON. Wszystkie tematy mają authoring draft.

Lokalna walidacja schematów i semantyki zakończyła się bez błędów; siedem ostrzeżeń to brak decyzji dla r2. Oficjalne content:lint/content:convert nie zostały uruchomione, ponieważ kontrakt.zip nie zawiera ich implementacji. Odrębne review, prawa i dopuszczenie pozostają otwarte. Kontrola autora nie zamyka G2/G3/G4.

20 źródłowych otwartych D zachowano w handoff/Z1/retained_open_delayed, ponieważ schema open nie koduje roli delayed. Nie kopiuj ich do zwykłej Nauki. C-A-L301 zachowano jako wkład T23. Pełna paczka ujawnia wszystkie rozwiązania czytelnikowi i nie stanowi dla niego nieznanej rezerwy.

K-04 pozostaje bez zmiany: wiersz 4 ILL-K01 / KRY-X01 bez EO; cała historyczna ilustracja poza rezerwą CPRE i pełnym mockiem. Nie utworzono decisions.yaml ani withdrawals.yaml.

## Integracja w repozytorium

Skopiuj content/authoring/T01–T07 i odpowiadające im references/content oraz references/project, zachowując ścieżki provenance. Porównaj rzeczywisty kontrakt repozytorium z dołączonym docs/13_AUTHORING_FORMAT.md i schematami; nie nadpisuj nowszych schematów, kodu, decyzji ani istniejących paczek. Przy istniejących Txx potraktuj wynik jako propozycję aktualizacji wymagającą porównania rewizji.

Przykład uruchomienia w repozytorium z rzeczywistym CLI:

```bash
npm run content:lint -- content/authoring/T01 content/authoring/T02 content/authoring/T03 content/authoring/T04 content/authoring/T05 content/authoring/T06 content/authoring/T07
npm run content:convert -- content/authoring/T01 content/authoring/T02 content/authoring/T03 content/authoring/T04 content/authoring/T05 content/authoring/T06 content/authoring/T07
```

Przed konwersją zachowaj stare wyniki poza content/normalized lub w historii wersji. Nie używaj automatycznie --replace-import. Po konwersji sprawdź raporty i content:validate według rzeczywistej implementacji. Brak decyzji oznacza brak dopuszczonego kanału, także recenzenckiego. Decyzję może zapisać wyłącznie upoważniona osoba.

## Odtwarzanie kontroli pomocniczej

Narzędzie wymaga Python, PyYAML i jsonschema 4.25.1 z obsługą Draft 2020-12. Zależności nie są dołączone. Po ich zainstalowaniu można wykonać:

```bash
python tools/validate_authoring_local.py
```

To kontrola pomocnicza, bez równoważności z oficjalnym lint lub testem aplikacji. tools/build_authoring.py odtwarza pliki autorskie z dołączonych danych i rozszerzeń; nie uruchamiaj go nad później ręcznie poprawioną rewizją bez porównania. tools/write_handoff.py aktualizuje raporty na podstawie istniejących plików i wyników kontroli.

Następny krok do G2: odrębne kompetentne review właściwych rewizji, rozliczenie uwag, oficjalny lint/convert w repozytorium i decyzja właściciela o zakresie oraz użyciu. G3 to osobny późniejszy walkthrough.
