# Raport importu T21 → kontrakt v1.0.0

Data importu: 2026-11-02T11:12:13.659Z
Wejścia: oba pełne pliki źródłowe przeczytane w całości przed mapowaniem.

| Wejście | SHA-256 | Zgodny z provenance |
|---|---|---|
| references/content/T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md | 365e60dda5f9a47697c7f3170c938d821187c7658b38f7e8eb894f5621ccf965 | tak |
| references/content/T21_IREB_CPRE_Single_Requirement_Quality_QA_and_Handoff_v0.1.md | ba95c577e0e251d23d227ec6289d96dfbdce501df24c384dc95e0b1883e6c57f | tak |

## Liczniki wejście → wyjście

| Obiekt | Źródło (QA §2) | Zmapowano |
|---|---:|---:|
| Zamknięte itemy | 32 | 32 |
| Rationale | 128 | 128 |
| Suma maksymalnych wag | 47 | 47 |
| Otwarte aktywności + rubryki | 4 | 4 |
| Noty N | 8 | 8 |
| Comparisons | 3 | 3 |
| Worked scenarios | 2 | 2 |
| Korekty REM | 8 | 8 |
| Rodziny (nazwy robocze) | 12 | 12 |
| Reguły REG | 8 + REG-T21-TYPE | 9 |
| Źródła | 6 | 6 |
| Relacje zmapowane do funkcji (R10/R11/R14) | — | 12 |

## Delty i zachowane statusy

- Rewizja pakietu: r1-full1 (nowa normalizacja; źródłowa rewizja dokumentów v0.1, plik 2). Próbka r1-import1 pozostaje nietknięta w examples/.
- Status review: **pending** — zachowano; import nie nadaje zatwierdzenia (QG-09, C-AC-12 otwarte).
- publication: review-only; allowedUses: []; rights: review-only / internal-review. Kanał learner odrzuca ten pakiet.
- forms: 0 — brak dopuszczonej formy U-TOPIC; nie wygenerowano automatycznego wyboru D01–08.
- Rejestr 538 relacji §8.3 nie został przepisany 1:1: funkcje przyrostu używają R08/R09 (w rationale), R18/R19 (w remediations), R10/R11/R14 (jawne instancje). Brakujące ID względem źródła: pozostałe instancje rejestru — pozostają w źródle do przyszłej integracji.
- Nie wygenerowano kluczy, rationale, rodzin, sond ani zgód. Brak wycofanych rewizji.

## Problemy importu

Brak.

Wynik: OK
