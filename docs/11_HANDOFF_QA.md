# 11 — Kontrola autorska wsadu

Data: 2 listopada 2026. Jest to kontrola przygotowanych instrukcji, referencji, kontraktów i obliczeń. **Nie jest testem przyszłej PWA, niezależnym review treści, audytem dostępności, badaniem użytkowników ani dowodem uczenia.**

## Wykryte problemy i korekty

| ID | Konkretny problem | Wykonana poprawka |
|---|---|---|
| HQ-01 | D01 opisuje historyczne C v0.1 i 0/3 pakietów, mimo dostępności C v0.2/T21 | Dołączono aktualne źródła i nakładkę statusu docs/01/10; nie nadpisano historycznego D ani START |
| HQ-02 | Wskazany z nazwy QA T21 nie zawiera sam całego materiału do renderowania | Odnaleziono i dołączono oba pełne pliki Content + QA, z rzeczywistą wersją plików 2 i hashami |
| HQ-03 | Samo „PWA aktualizuje cache” mogłoby podmienić pytanie i zresetować historię | Oddzielono shell/content/profile data; opisano staging/verify/commit, pinned snapshots i GC po referencjach wszystkich profili |
| HQ-04 | Nowy profil mógłby być utożsamiony z profilem warunków próby i wspólnym currentProfileId | Rozdzielono pojęcia, wymagany profileId w repozytoriach, kontekst per karta i kontrola async/lease |
| HQ-05 | W pierwszym szkicu fixture wszystkie lokalizacje reguł były podpięte do SEN, także GEN/GPL | Rozdzielono rzeczywiste sourceRefs SEN/SPL/GEN/GPL według adresów w źródłowym rejestrze; zachowano metadane sześciu źródeł |
| HQ-06 | Pierwszy ekstrakt wektorów wskazywał QA §6 zamiast §7; indeks kategorii odsyłał do B01-09 | Poprawiono lokalizację każdego wektora na §7 i kategorię na B01-10; dodano pięć dosłownych etykiet z kontraktu |
| HQ-08 | Pierwszy schemat nie miał odrębnego maszynowego pola praw/kanału obok review i publication | Dodano rights.status/channels/decisionRef oraz publicationChannel manifestu; learner gate ma wymagać obu niezależnych dopuszczeń |
| HQ-07 | Bogaty T21 może być omyłkowo uznany za gotowy test/rezerwę | Próbka ma review-only/partial i zero forms/allowedUses; gate learner i osobna forma techniczna są wymagane |

## Wykonane kontrole

- Integralność bajtów wszystkich dołączonych wejść i referencji designu według manifestu. B/C/D/START niezmienione.
- Mapowanie 38 FR i wszystkich nowych wymagań, zachowanie Validate/Later, spójność zależności backlogu i 36 scenariuszy QA.
- Inwentarz T21: 32 itemy, 128 rationale, suma wag 47. Próbka: trzy rzeczywiste A/K/P jednej gałęzi i 12 rationale, jawnie niepełna.
- 176 jawnych oczekiwanych wektorów z QA porównano z funkcją na dokładnych ułamkach; przejrzano 1024 stany pod kątem zakresu i nadmiaru. To weryfikacja ekstraktu i matematyki, nie merytoryczna akceptacja kluczy.
- Trzy schematy sprawdzono walidatorem Draft 2020-12; próbkę i release zwalidowano; negatywne przypadki sprawdzają odrzucenie wadliwego klucza/formatu/parametrów oraz nieuprawnionego wydania learner. Szczegóły w `qa/schema-checks.json`.
- Lokalne odnośniki nowych dokumentów i spójność ścieżek paczki; finalny ZIP sprawdzony pod względem integralności.

Wyniki maszynowe: `qa/handoff-checks.json`, `qa/schema-checks.json`, `qa/package-checks.json`. Skrypt przenośny: `python3 scripts/check_handoff.py`. Nie twierdzimy, że ten skrypt wykonuje pełną walidację JSON Schema ani zastępuje przyszłe testy aplikacji.

## Pozostałe warunki handoffu

Claude implementuje i bada produkt według docs/07. Wciąż potrzebne są rzeczywiste dopuszczenia C/T21 i formy, walkthrough na reprezentatywnych treściach, testy urządzeń/AT i formalne decyzje bramek. G2/G3/G4 nie zostały tutaj zamknięte. Użytkownik zaakceptował stylistykę; nie pytamy ponownie o motyw.
