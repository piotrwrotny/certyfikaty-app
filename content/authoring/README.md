# Treści w formacie autorskim

Każdy temat to katalog `content/authoring/<ID tematu>/` w formacie `cpre-authoring/1.0`.

- Specyfikacja: [docs/13_AUTHORING_FORMAT.md](../../docs/13_AUTHORING_FORMAT.md).
- Instrukcja dla agenta AI: [docs/14_AI_AUTHORING_AGENT_GUIDE.md](../../docs/14_AI_AUTHORING_AGENT_GUIDE.md).
- Wprowadzanie do aplikacji krok po kroku: [docs/15_MIGRACJA_TRESCI.md](../../docs/15_MIGRACJA_TRESCI.md).
- Wzory do skopiowania: [_templates](_templates/).
- Działający przykład: [examples/authoring/T21-mini](../../examples/authoring/T21-mini/).

Katalogi zaczynające się od `_` nie są tematami. Pliki `review/decisions.yaml` i `review/withdrawals.yaml` pisze wyłącznie osoba upoważniona do recenzji i dopuszczenia.

## Wsad Z1: T01–T07 (r2, authoring draft)

| Temat | Kryteria / zakresy | Pytania | A | P | K | Uzasadnienia | Noty | Podstawy | Przykłady łącznie | Korekty | Aktywności otwarte | Reguły | Relacje jawne |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [T01](T01/README.md) | 5 | 20 | 10 | 3 | 7 | 73 | 6 | 0 | 15 | 5 | 6 | 16 | 35 |
| [T02](T02/README.md) | 3 | 12 | 3 | 4 | 5 | 49 | 3 | 1 | 9 | 3 | 5 | 10 | 22 |
| [T03](T03/README.md) | 2 | 8 | 2 | 4 | 2 | 35 | 2 | 0 | 6 | 2 | 3 | 7 | 14 |
| [T04](T04/README.md) | 2 | 8 | 3 | 2 | 3 | 32 | 2 | 0 | 6 | 2 | 3 | 9 | 14 |
| [T05](T05/README.md) | 3 | 12 | 4 | 4 | 4 | 48 | 3 | 0 | 9 | 3 | 4 | 11 | 21 |
| [T06](T06/README.md) | 2 | 8 | 2 | 2 | 4 | 34 | 2 | 0 | 6 | 2 | 4 | 9 | 14 |
| [T07](T07/README.md) | 10 | 40 | 17 | 11 | 12 | 164 | 11 | 1 | 39 | 10 | 20 | 37 | 80 |
| RAZEM | 27 | 108 | 41 | 30 | 37 | 435 | 29 | 2 | 90 | 27 | 45 | 99 | 200 |

Dokumentacja autora: [manifest](../../handoff/Z1/MANIFEST.md), [pokrycie](../../handoff/Z1/COVERAGE.md), [raport walidacji autora](../../handoff/Z1/VALIDATION_REPORT.md), [samokontrola autora](../../handoff/Z1/AUTHOR_SELF_CHECK.md). Oryginalne README korzenia paczki leży bez zmian w [handoff/Z1/README.md](../../handoff/Z1/README.md); jego linki są względne wobec korzenia paczki.

### Stan w repozytorium

- `content:lint`: 0 błędów we wszystkich tematach; jedyne ostrzeżenie to brak decyzji dla r2.
- `content:convert`: paczki `content/normalized/T0n.r2.json` i raporty `content/normalized/T0n-AUTHORING_REPORT.md`. Kontrakt poprawny, zero kolizji identyfikatorów, klucz każdego pytania daje pełną punktację, żadne pytanie nie ujawnia klucza w treści testu.
- Bez decyzji żaden temat nie trafia do kanału recenzenckiego ani ucznia. Kolejne kroki: [docs/15_MIGRACJA_TRESCI.md](../../docs/15_MIGRACJA_TRESCI.md), część A od kroku 5.

### Ograniczenia zgłoszone przez autora

- Status wszystkich tematów: `authoring: draft`, kontrola wyłącznie autorska. Odrębne review, prawa i dopuszczenie pozostają otwarte; G2, G3 i G4 są otwarte.
- Według manifestu 63 ze 108 pytań to nowe uzupełnienia, 39 pochodzi z Z1, a 6 z C03. Nowe uzupełnienia wymagają szczególnie starannej recenzji.
- 20 otwartych pytań późniejszej kontroli (D) leży poza aplikacją w `handoff/Z1/retained_open_delayed`, bo format nie ma roli późniejszej kontroli dla aktywności otwartych. Nie kopiuj ich do zwykłej Nauki.
- Obiekty z pilota C03 zachowały dawne identyfikatory bez prefiksu tematu (`C-P-*` w T02, `C-A-*` w T07, np. `REG-A1`).
- K-04 bez zmian: wiersz 4 ILL-K01 / KRY-X01 bez EO, poza rezerwą CPRE i pełnym mockiem.

### Narzędzia autora

`tools/*.py` i `references/migration_input/z1_data.json` to narzędzia i dane pośrednie autora (Python, PyYAML, jsonschema; zależności nie są w repozytorium). Nie należą do aplikacji ani do `npm run check`. `tools/build_authoring.py` odtwarza pliki tematów z danych pośrednich, więc nie uruchamiaj go nad ręcznie poprawioną rewizją bez porównania.
