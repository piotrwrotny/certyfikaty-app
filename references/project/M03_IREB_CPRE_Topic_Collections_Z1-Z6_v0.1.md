# M03 — Zbiory tematów CPRE FL: mapa Z1–Z6 v0.1

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data:** 2 listopada 2026  
**Status:** punkt odniesienia do planowania zleceń Work  
**Podstawa:** M01 — mapa tematów FL v0.1

## Oznaczenia

Przyjmujemy sześć zbiorów: **Z1–Z6**. „Z” oznacza „Zbiór” i odróżnia identyfikatory grup tematów od bramek projektu **G1–G4**. W tabeli z propozycją grupowania było sześć zbiorów — nie dziewięć. Każdy zbiór odpowiada jednej kategorii tematycznej.

Zbiór jest wygodną jednostką zlecenia w Work. Można zlecić cały zbiór jednym czatem albo uruchomić dowolny temat osobno. Przy pracy grupowej każdy temat zachowuje własny plik i własne pokrycie; zbiór nie scala kilku tematów w jeden niepodzielny tekst.

## Mapa zbiorów

| Zbiór | Kategoria | Tematy | Liczba |
|---|---|---|---:|
| **Z1** | Podstawy i zasady Requirements Engineering | T01 — Podstawowe pojęcia RE; T02 — Rodzaje wymagań; T03 — Wartość RE i skutki jego niedostatków; T04 — Zastosowania i perspektywy RE; T05 — Zadania RE, rola i kompetencje Requirements Engineer; T06 — Przegląd zasad RE i ich terminologia; T07 — Wyjaśnianie dziewięciu zasad RE | 7 |
| **Z2** | Dokumentowanie wymagań | T08 — Artefakty RE: cel, postać, czas życia i planowanie; T09 — Abstrakcja, szczegółowość i aspekty opisu; T10 — Wymagania w języku naturalnym; T11 — Szablony: wymaganie i user story; T12 — Use case w szablonie formularza; T18 — Glosariusz w RE; T19 — Dokumenty i struktury specyfikacji | 7 |
| **Z3** | Modele i jakość artefaktów | T13 — Modele: cel, język, ograniczenia i wybór; T14 — Interpretacja modeli: zakres wspólny i kontrola pełności; T15 — Dane i obiekty: diagram klas UML; T16 — Funkcja i proces: diagram aktywności UML; T17 — Interpretacja stanów i przejść; T20 — Prototypy i ich zastosowania; T21 — Jakość pojedynczego wymagania; T22 — Jakość artefaktu obejmującego wiele wymagań | 8 |
| **Z4** | Opracowywanie wymagań | T23 — Wyznaczanie granic systemu; T24 — Źródła, interesariusze i stakeholder list; T25 — Model Kano a pozyskiwanie wymagań; T26 — Techniki pozyskiwania i dobór do sytuacji; T27 — Konflikty wymagań i ich rozwiązywanie; T28 — Walidacja: cel i ważne aspekty; T29 — Dobór technik walidacji | 7 |
| **Z5** | Proces RE i narzędzia | T30 — Czynniki kształtujące proces RE; T31 — Aspekty konfiguracji procesu; T32 — Konfiguracja i zastosowanie procesu RE; T39 — Rodzaje wsparcia narzędziowego; T40 — Wprowadzanie narzędzi RE | 5 |
| **Z6** | Zarządzanie wymaganiami | T33 — Zarządzanie wymaganiami i cykl życia; T34 — Wersje, konfiguracje i baseline; T35 — Atrybuty i widoki wymagań; T36 — Śledzenie wymagań (traceability); T37 — Obsługa zmian; T38 — Priorytetyzacja | 6 |

## Jak zlecać pracę

- **Cały zbiór:** w nowym czacie Work podaj identyfikator, np. „Opracuj Z2 — Dokumentowanie wymagań — obejmując T08–T12, T18 i T19”.
- **Pojedynczy temat:** podaj identyfikator Txx, np. „Opracuj T21 z Z3”. Zbiór nie jest obowiązkowym zakresem minimalnym.
- **Część dużego tematu:** wskaż Txx i podzakres z M01, np. konkretny PR w T07; poproś o osobne oznaczenie pokrycia i pozostałych luk.
- **Wyniki grupy:** proś o osobny plik treści i QA dla każdego tematu oraz jeden krótki manifest zbioru z inwentarzem i zależnościami.
- **Integracja:** po opracowaniu kilku zbiorów uruchom osobną kontrolę spójności terminów, źródeł, relacji i identyfikatorów.

T07, T14 oraz tematy z wymaganym wykonaniem L3 mogą wymagać etapowania wewnątrz zbioru. W takim przypadku numer Z pozostaje stały, a zakres flow zostaje jawnie ograniczony.

## Reguła nazewnictwa czatów

Używaj nazw w formacie:

- `Z1 — Podstawy i zasady RE`
- `Z2 — Dokumentowanie wymagań`
- `Z3 — Modele i jakość artefaktów`
- `Z4 — Opracowywanie wymagań`
- `Z5 — Proces RE i narzędzia`
- `Z6 — Zarządzanie wymaganiami`

Dla pracy nad jednym tematem dodaj Txx, np. `Z3 / T21 — Jakość pojedynczego wymagania`.

**Nie używaj G1–G4 jako oznaczeń zbiorów.** G1–G4 pozostają identyfikatorami bramek projektu.

## Kontrola kompletności

Mapa obejmuje **40 unikalnych tematów**: Z1 — 7, Z2 — 7, Z3 — 8, Z4 — 7, Z5 — 5, Z6 — 6. Suma wynosi 40. Każdy T01–T40 występuje w jednym zbiorze.

Identyfikatory i oficjalne przypisania EO określa M01. M03 służy do routingu zleceń; nie zastępuje mapy zakresu, kontraktu B01–B04 v0.2, ani wymagań briefu M02.

## Historia

v0.1 — pierwsze ustalenie nazw Z1–Z6 i mapowania sześciu kategorii do tematów z M01.

