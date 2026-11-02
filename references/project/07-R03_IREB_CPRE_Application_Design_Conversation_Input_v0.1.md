# R03 — Wejście do przyszłej rozmowy Application Design v0.1

**Projekt:** IREB CPRE Foundation Level Learning System  
**Stan:** 1 listopada 2026, Europe/Warsaw  
**Status:** FOR REVIEW — brief do osobno zleconej fazy D; nie projekt aplikacji ani zgoda na programowanie.  
**Podstawa stanu:** R01/R02 v0.1. Przed kolejną rozmową uwzględnij późniejsze jawne decyzje właściciela; nie domniemuj ich z obecności plików.

## 1. Cel następnej rozmowy i punkt startu

Przełożyć istniejące zachowania edukacyjne na spójny, bardzo prosty produkt: szczegółowy flow, nawigację/ekrany, interakcje, komunikaty, styl, responsywność i priorytety pierwszego przyrostu. **Nie odkrywać ponownie pedagogiki ani pętli nauki.** Projektant wybiera realizację przyjętych reguł, a proponowaną zmianę zapisuje z przyczyną i wpływem.

Rozmowę można rozpocząć przed ukończeniem C. **Aktualnie G0 ma pozytywną ocenę dostępności, G1 jest niezaakceptowane, C03 jest manifestem z 0/3 pakietów, G2–G4 pozostają otwarte.** B jest strukturalnie przygotowane do review, nie formalnie accepted. Zakończono A/A2 jako opracowania; C wykonał źródła/discovery/standard proponowany. Nie ma gotowej rezerwy ani wyników uczniów.

Brak całego banku 70 EO nie blokuje tej rozmowy. Finalizacja zależnych części przyrostu i handoff wymagają zaakceptowanej semantyki oraz rzeczywistej reprezentatywnej treści.

## 2. Dokładne źródła do przeczytania

Najpierw routing/statusy, następnie właściwe sekcje kontraktów. R01/R02 są mapą stanu, nie zamiennikiem wymagań.

| Dokładny plik | Obowiązkowy zakres / odpowiedzialność |
|---|---|
| `00_IREB_CPRE_START.md` | Całość: cel, granice, hierarchia, G0–G4; mapa pięciu Sources jest historycznie nieaktualna |
| `00_IREB_CPRE_Fundament_pedagogiczny.md` | Całość: niezmienniki nauki, pomiaru i granice obietnic |
| `IREB_CPRE_Deep_Research_PL_2026-11.md` | D2, D7–D8, D10–D12 i właściwe dowody przy konkretnej wątpliwości; nie ponawiaj całych badań |
| `IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md` | F01, F03–F12, F14–F16; wszystkie FR/AC, UC i FD. To baseline zachowań wskazany przez właściciela |
| `IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md` | F13.1–8, K0–K7, kompletność i A/P/K; obowiązki informacyjne |
| `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md` | Status G1, B-DEC-01–16, K-01–08, L-B i wymagania C |
| `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.1.md` | Tożsamości, kryteria, R01–R26, QG, rodziny, dowody, U-*, LUKA-*; nowe decyzje warunkowe do G1 |
| `B02_IREB_CPRE_FR_Traceability_v0.1.md` | Karty FR wybranego zakresu i §B02-04: wszystkie 11 przejść F06; pełny ślad 38 FR zachować |
| `B03_IREB_CPRE_Semantic_Pilot_APK_v0.1.md` | A/P/K i E01–20; ilustracje/syntetyczne historie, bez dopuszczenia do nauki i rezerwy |
| `C04_IREB_CPRE_Content_QA_and_Handoff_v0.1.md` | Faktyczny stan C, C-AC-01–14, zależności G1/G2 i warunki wznowienia |
| `C03_IREB_CPRE_Pilot_Content_APK_v0.1.md` | Całość: manifest; 0 pytań, follow-up, delayed, rodzin i niezależnie recenzowanych pakietów |
| `C01_IREB_CPRE_Source_and_Licensing_Register_v0.1.md` | Profil norm, zakresy odczytu EN/PL, prawa i zamierzone użycie; rejestr nie jest zgodą na dowolne kopiowanie |
| `C02_IREB_CPRE_Terminology_and_Authoring_Standard_v0.1.md` | Status proponowany, T-01–13, AT/QG i zasady rezerwy; po G1 dostosować do przyjętej rewizji |

Normy IREB rozstrzygają normatywne kwestie we właściwych wersjach. Aktualny profil: syllabus 3.3.0 / regulamin 5.6.2 / Glossary 2.2.0 / Handbook EN 1.3.2. Zakres kontroli konkretnych fragmentów odczytaj w C01; nie przypisuj sobie ich pełnego review.

## 3. Wymagania i niezmienniki do zachowania

- **FR-001–FR-038**, ich Given/When/Then w F09, **UC-01–UC-18** w F07 i **FD-01–FD-28** w F16 zachowują identyfikatory. B02 AC-001–038 są kryteriami semantyki, nie zamiennikiem AC produktu ani wykonanymi testami.
- Jedna prowadzona sesja, jedna uzasadniona kontynuacja i możliwość wyboru innego celu. Wejście od materiału lub pytania. Brak obowiązkowej diagnozy przed nauką.
- Dwa konteksty: **Nauka** z dozwoloną, rejestrowaną pomocą; **Sprawdzenie** bez pomocy, kluczy, zdobytych punktów, EO/źródeł i podpowiadających metadanych do finalizacji całej próby. Maksymalne wagi i instrukcje pozostają jawne.
- Pętla cel → potrzebna wiedza → próba → feedback → celowana korekta → nowy przypadek → powrót i późniejsza kontrola. Kroki nie oznaczają osobnych ekranów.
- Każda opcja/wiersz ma pełne rationale, lecz nie wymaga przeczytania wszystkiego po każdym trafieniu. Porównanie/prerequisite tylko z uzasadnieniem; diagnoza wymaga hipotezy, alternatyw i sondy. Brak sondy pozwala na neutralną korektę.
- Powrót zachowuje pytanie/rewizję, odpowiedź, wynik, ujawnione treści i miejsce/fokus; nie tworzy nowej próby. Konwersja Sprawdzenia do Nauki nie przywraca później niezależności tej samej próby.
- Scoring A/P/K według F11; pomoc i znajomość nie obniżają punktów, lecz zmieniają interpretację. Blank K nie jest Fałsz, nadmiar P zeruje pytanie.
- **SUPPORTS / MEASURES / MENTIONS / EVIDENCE_FOR** pozostają odrębne. Dowód dotyczy kryterium i warunków, nie wszystkich połączonych EO. A o kontekście L2 nie zamyka EO4.1.1 L3; pomocniczy KRY-X01 nie dostaje fikcyjnego EO.
- Oddziel punkty, pomoc, ekspozycję itemu/rodziny, nowy kontekst, samoocenę i retencję. Dwa odstępy **per kryterium**: od poprzedniej samodzielnej próby oraz ostatniego istotnego kontaktu. Świeża instrukcja wyklucza deklarację tygodniowej retencji.
- Rezerwa chroniona względem konkretnej osoby; przekład/parafraza/nowy ID nie odnawiają nowości. Ujawnione B03 nie jest rezerwą dla czytelnika. Zmiana klucza/rodziny zachowuje historię i ma analizę wpływu.
- Dostępność pętli, polskie terminy z EN i równoważne reprezentacje są wymaganiami; tekst alternatywny nie ujawnia klucza. Cel WCAG 2.2 AA nie jest już wykonanym audytem produktu.
- Brak korpusu nie oznacza braku wiedzy ucznia. Brak klucza/rationale/review blokuje punktowane użycie; brak opcjonalnego linku nie blokuje pewnego objaśnienia. Bez generowania autorytatywnej odpowiedzi na żywo.

## 4. Zakresy i hipotezy

| Zakres | Zachować |
|---|---|
| Essential / Level 1 | Mały pełny przekrój A/P/K, kontekstowa wiedza, korekta, powrót, meaningful follow-up, późniejsza kontrola, jawny profil dowodów, ochrona oceny i ciągłość. FR-025–028 obejmują test tematu bez limitu |
| Validate | Krótka diagnoza, dawka feedbacku, szczegóły doboru, język kategorii dowodów, opcjonalne confidence FR-030. Badania wybierać, nie uruchamiać wszystkiego naraz |
| Later / Level 2 | Pełny zakres EO/terminów, globalne wyszukiwanie FR-031, pełne timed mocki i pełny profil przygotowania |
| Experimental / odłożone | Lokalna aktywna mapa, globalny graf, zaawansowana adaptacja. Brak automatu „3×80%”, procentu mastery i prognozy zdania |

≥24 h, okna 3–7/~14 dni, dwa różne sukcesy i próg zmiany wsparcia po drugim nieudanym follow-up są lokalnymi hipotezami/politykami pilota. Nie przedstawiaj ich jako praw naukowych. Plan 9 pełnych EO +3 fragmenty /12 komórek /60+24 jest późniejszym budżetem, nie wykonaniem ani obowiązkowym rozmiarem pierwszego przyrostu.

## 5. Otwarte zależności i zakres rozmowy D

**Aktywne blokery handoffu:** nieprzyjęta podstawa B, brak realnego C, wymaganych review/dopuszczeń i wykonanego G3 oraz brak zatwierdzonego zakresu przyrostu. R02 GAP-01–03 wskazuje dokładne warunki. L-B04 review B pozostaje otwarte. G3 wymaga doprecyzowania: START opisuje przejście/symulację, późniejsze teksty także udział ucznia; nie utożsamiaj żadnego wariantu z empirycznym potwierdzeniem retencji.

**Dopiero do zaprojektowania:** szczegółowa organizacja flow i informacji, nawigacja/ekrany, zachowanie elementów, stany/komunikaty, styl i design system, mobile/desktop, priorytety i granice pierwszego wydania. W tej rozmowie korzystaj z istniejących reguł i jawnie syntetycznych przykładów do czasu dostarczenia C; nie ogłaszaj zakończenia G2/G3 na podstawie makiet.

**Nie projektuj ponownie:** metodologii nauki, znaczenia A/P/K, granicy pomocy, pełnych rationale, integralności historii, zasad nowości, dwóch czasów, rozdzielenia pokrycia i dowodów. Nie przywracaj globalnego grafu, gamifikacji ani LLM jako autorytetu kluczy. Nowe konflikty kieruj do właściciela/B/C ze śladem wymagania.

## 6. Warunek późniejszego przekazania do programowania

Przed handoffem potrzebne są: przyjęty zakres/rewizja B; realny reprezentatywny C z prawami, review i rolami użycia; konkretne pozytywne i negatywne przypadki A/P/K; protokół i odbiór G2/G3; zaakceptowany scope z FR/UC/AC oraz specyfikacja flow/UI wynikająca z D; jawne reguły ekspozycji, czasu, rewizji i ograniczeń; decyzja właściciela G4. Techniczne decyzje i testy realizacji należą do późniejszego mandatu, bez odgadywania domeny.

Pełny bank FL, wszystkie późniejsze funkcje i dowód prognostyczny nie są warunkiem ograniczonego przyrostu. Prototyp techniczny na syntetycznych danych można zlecić osobno; nie jest zaakceptowanym pilotem edukacyjnym.
