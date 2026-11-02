# IREB CPRE Foundation Level — kanoniczny punkt wejścia projektu

> **Rola dokumentu:** główny *Project Starting Context* i mapa odpowiedzialności aktywnych Sources dla kolejnych agentów.
>
> **Projekt:** IREB CPRE Foundation Level Learning System (język użytkownika i opracowań: polski; oryginalne terminy EN zachowywane).
>
> **Stan odniesienia:** 2 listopada 2026 r.; decyzja właściciela G1 zapisana w R06.
>
> **Aktualna faza:** **G1 CLOSED / B ACCEPTED** — właściciel przyjął B01–B04 v0.2, K-04 i wystarczalność udokumentowanego review AI dla odbioru B. Właściwy authoring C może zostać uruchomiony. Odrębnie zlecone D może być prowadzone równolegle; finalne sprawdzenie projektu wymaga rzeczywistych treści C i walkthrough. G2–G4 pozostają otwarte.
>
> **Pochodzenie:** cztery opracowania wymienione w sekcji „Mapa aktywnej wiedzy”; ten plik nie zastępuje ich treści ani nie stanowi nowego badania.
>
> **Status routera:** aktualizacja po jawnej decyzji właściciela z 2 listopada 2026. Źródłem akceptacji jest wypowiedź właściciela, udokumentowana w R06, a nie sam router. Historyczne statusy FOR REVIEW w przyjętym baseline B01–B03 oraz R04/R05 i C01–C04 opisują stan sprzed decyzji; nie otwierają ponownie G1. B04 zawiera administracyjny zapis decyzji bez zmiany reguł kontraktu.

## 1. Cel i ograniczenia

Zbudować w pierwszej kolejności **wiarygodną, spójną semantycznie bazę edukacyjną** do przygotowania do IREB CPRE Foundation Level, która później umożliwi prostą aplikację. Zewnętrzne doświadczenie ma pozostać minimalne, a wewnętrzna wiedza, pytania, wyjaśnienia, ocena i powtórki — rzetelne, kontrolowane i zgodne z celami IREB.

**Realizuj zakres zlecony w danej rozmowie.** C wytwarza treści; odrębnie zlecone D może równolegle projektować flow, ekrany, UX/UI, styl i zakres przyrostu. Samo zamknięcie G1 nie uruchamia D ani implementacji. Stos technologiczny, fizyczny model danych, API i kodowanie wymagają osobnego mandatu, a handoff ograniczonego przyrostu — decyzji G4. Nie wracaj do ogólnego researchu pedagogicznego bez konkretnej niespójności lub nowego wymagania. Nie wytwarzaj od razu całego sylabusa ani masowego banku pytań.

## 2. Mapa aktywnej wiedzy — otwieraj według potrzeby

1. **`00_IREB_CPRE_Fundament_pedagogiczny.md`** — **kanon pedagogiczny**: granice nauki i pomiaru, zasady retrieval, feedback, relacji, retencji, uczciwego wnioskowania oraz integralności treści. Otwórz przy interpretacji zasad nauki i rozstrzyganiu pedagogicznych wątpliwości.
2. **`IREB_CPRE_Deep_Research_PL_2026-11.md`** — **pełna baza dowodowa D1–D15**: uzasadnienia, ograniczenia badań, analiza IREB, metodologia uczenia, mapowanie EO, zasady banku pytań, źródła, przykładowy korpus i hipotezy pilota. Otwórz, gdy potrzebna jest argumentacja, dokładne źródło lub szczegółowy opis historycznych ustaleń.
3. **`IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md`** — **aktualne decyzje funkcjonalne F01–F16**: przebiegi ucznia, tryby, UC, wymagania FR-001–FR-038, akceptacja Given/When/Then, reguły A/P/K, stany i plan walidacji. Otwórz przy pytaniu *co użytkownik robi i jak system ma się zachować*.
4. **`IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md`** — **bezpośredni kontrakt wejściowy B i C**: macierz F13 dla FR-001–FR-038, semantyka encji i relacji, granularność wyjaśnień, proweniencja, kompletność, zachowanie przy lukach oraz przepracowane A/P/K. Otwórz przy pytaniu *jakiej informacji wymagają funkcje i czego muszą dostarczyć architektura wiedzy i autorzy treści*.

**Ten plik `00_IREB_CPRE_START.md` jest kanonicznym routerem CAŁEGO projektu.** `00_IREB_CPRE_Fundament_pedagogiczny.md` pozostaje kanonicznym źródłem PEDAGOGIKI. To różne odpowiedzialności; nie usuwać drugiego pliku tylko ze względu na prefiks `00`.

### Aktualny pakiet B i dokumenty odbiorowe

- `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md` — definicje i nadrzędny kontrakt semantyczny; przyjęty przez właściciela w G1, zgodnie z R06.
- `B02_IREB_CPRE_FR_Traceability_v0.2.md` — 38 kart FR i AC; dostępność flagi oraz warunek językowy doprecyzowane.
- `B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md` — zachowane ilustracje A/P/K i 24 próby logiczne; brak statusu gotowego korpusu C.
- `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md` — 16 B-DEC, K-01–11, granice G2/G3 i zapis decyzji G1 w B04-09; B04-08 jest rekomendacją sprzed akceptacji.
- `R04_IREB_CPRE_B_Acceptance_Review_v0.1.md` — historia przeglądu v0.1 i identyfikacja R-B01–04; poprzednią rekomendację uzupełnia R05.
- `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md` — wynik korekt i kontrola v0.2 przed decyzją; historyczny stan oczekiwania na G1.
- `R06_IREB_CPRE_G1_Owner_Decision_v0.1.md` — obowiązujący zapis decyzji właściciela z 2 listopada 2026; przyjęty baseline i K-04, statusy kolejnych bramek oraz sprostowanie listy Sources.

R01–R05 pozostają zapisami właściwych etapów; historyczne statusy G1 nie unieważniają późniejszej decyzji R06. R03 może służyć jako brief D po zastosowaniu B v0.2 oraz aktualnych statusów i korekt opisanych w R06. C01–C04 pozostają przygotowaniem opartym na B v0.1; ich stare hashe identyfikują dawny baseline, nie zatwierdzony korpus. Po G1 trzeba uzgodnić zgodność tego przygotowania z przyjętą rewizją B przed właściwym authoringiem. Nie nadawać mu automatycznie statusu zaakceptowanego.

Powtórzone kopie z dodatkowymi prefiksami nazw nie są nowymi rewizjami. Przechowywać je poza aktywnym zestawem roboczym po sprawdzeniu zgodności; archiwum pakietu zachowuje wszystkie 21 dostarczonych plików wejściowych. Jedna rola B ma jeden aktywny plik v0.2.

## 3. Pierwszeństwo źródeł i rozwiązywanie sprzeczności

- **Oficjalne źródła IREB** (w odpowiednich wersjach) są rozstrzygające dla reguł egzaminu, obowiązujących EO, terminologii normatywnej i zasad punktowania. W razie potrzeby sprawdź aktualność; historyczna wersja w raporcie nie zastępuje nowszego dokumentu oficjalnego.
- **Kanon pedagogiczny** jest odniesieniem dla jakości dydaktycznej; **Blueprint** określa przyjęte zachowania; **Functional-to-Knowledge Contract** określa informacyjne warunki tych zachowań; **Deep Research** uzasadnia ustalenia i ich ograniczenia.
- Jeśli kontrakt B/C jest niezgodny z FR lub accepted UX behaviour, **zgłoś konflikt i przedstaw warianty**; nie nadpisuj po cichu decyzji funkcjonalnej. Jeśli nowy dokument oficjalny podważa dawną regułę, wskaż zmianę i zależne wymagania do aktualizacji.
- Zachowuj klasyfikację: **FACT / RESEARCH FINDING / INTERPRETATION / DESIGN HYPOTHESIS / FUNCTIONAL DECISION**. Liczby planistyczne, terminy powtórek oraz progi mastery nie stają się faktami tylko przez powtarzanie.
- Każda istotna teza egzaminacyjna, klucz i wyjaśnienie potrzebują źródła, wersji oraz review. Tekst LLM jest szkicem, nie źródłem poprawności.

## 4. Niezmienniki doświadczenia i oceny

- Jedna **prowadzona sesja nauki oparta na celach i dowodach**, z prawem wyboru innego tematu; dwa odrębne konteksty: **Nauka** (pomoc dopuszczona i rejestrowana) oraz **Sprawdzenie** (pomoc niedostępna do zakończenia).
- Przepływ: cel → potrzebna wiedza → próba bez pomocy → wynik i decydująca zasada → celowana korekta / porównanie → nowy wariant → sprawdzenie po przerwie. Nie każdy krok jest obowiązkowym osobnym ekranem.
- Pytanie, opcja, wyjaśnienie, pojęcie, porównanie i prerequisite muszą dać się połączyć **kontekstowo**, z pewnym powrotem do oryginalnego zadania; globalny graf wiedzy jest **DEFER**, nie obowiązkową funkcją.
- Rozdziel: **punkty za zadanie**, pomoc, znajomość itemu i rodziny, ekspozycję na klucz, zakres sprawdzanego kryterium, nowość kontekstu oraz retencję po przerwie. Jedna poprawna odpowiedź nie oznacza mastery całego EO.
- Zachowuj odrębne zasady punktacji **A/P/K**, w tym częściowe punkty dla P i K. Chronione zadania pomiarowe nie mogą stać się pozornie „nieznane” po ujawnieniu rozwiązania.
- Nie ogłaszaj statystycznego prawdopodobieństwa zdania bez walidacji. Sam pilot tematu nie jest pełną symulacją egzaminu.

## 5. Mandaty agentów i rezultaty

### Agent B — Educational Knowledge Architecture (pierwszy)

**Wejście:** przede wszystkim *Functional-to-Knowledge Contract*, Blueprint F09/F13 oraz kanon pedagogiczny; Deep Research do weryfikacji znaczeń i źródeł.

**Rezultat:** *Semantic Knowledge Contract v0.1* opisujący znaczenie, tożsamość i granice encji, podstawowe relacje, podział między `supports/mentions/measures`, kryteria pełnego pokrycia EO, kontrakt Question Knowledge Package (opcja–rationale–reguła–źródło), warianty i ekspozycję, proweniencję i wersje, statusy review oraz zasady obsługi braków. Wskaż, co należy modelować jako dane korpusu, a co jako dowody aktywności ucznia.

**Pierwszy przekrój:** *system boundary vs system context* oraz przejścia A/P/K z feedbackiem, naprawą, nowym wariantem i powrotem. Sprawdź kontrakt względem FR-001–FR-038, nie tworząc jeszcze schematu bazy danych ani API.

### Agent C — Content Acquisition & Authoring (źródła może badać równolegle)

**Wejście:** kontrakt B po jego zatwierdzeniu; Deep Research D2, D7, D10–D12, Blueprint oraz handoff C.

**Rezultat:** *Content Quality & Authoring Package v0.1*: rejestr źródeł i praw użycia, słownik terminów PL/EN, reguły pisania i recenzji, kompletny autorski pakiet dla pierwszego przekroju (pojęcia, warunki, przykłady, kontrasty, trzy formaty pytań z pełnymi rationale, źródła, znaczące warianty), zasady wydzielenia i ochrony pozycji pomiarowych. Odróżnij szkice od treści zatwierdzonych.

**Nie twórz całego banku automatycznie.** Brak recenzji lub źródła to brak gotowości treści, nie zadanie dla LLM do ukrytego dopowiedzenia.

### Agent walidacyjny / właściciel produktu

Sprawdza zgodność ścieżek A/P/K, punktację, brak ujawniania pomocy w Sprawdzeniu, powrót z wiedzy, celowość remediacji, zachowanie przy brakach treści, nowość pytań i rozdzielenie wyniku od dowodu uczenia. Decyduje o przyjęciu B i C oraz rozpoczęciu większego pilota.

### Agent architektury oprogramowania — później

Otrzymuje zaakceptowane FR, kontrakt semantyczny, zatwierdzony pakiet treści i wyniki walidacji. Nie redefiniuje samodzielnie celów uczenia, oceny ani praw do treści.

## 6. Bramki decyzyjne

| Bramka | Warunek wejścia w kolejną fazę |
|---|---|
| **G0 — Source readiness** | `00_IREB_CPRE_START.md` oraz wszystkie cztery dokumenty z mapy są dostępne w aktywnych Sources projektu. |
| **G1 — B accepted** | **CLOSED / ACCEPTED, 2.11.2026 — decyzja właściciela w R06.** B01–B04 v0.2, B-DEC-01–16, K-01–11, zachowane K-04; udokumentowane review AI przyjęte jako wystarczające dla B/L-B04 w G1. |
| **G2 — C accepted** | C ma zweryfikowane źródła/prawa, kompletny pakiet treści pierwszego przekroju, rationale każdej opcji i jawny status recenzji. |
| **G3 — Functional walkthrough verified** | Można przejść trzy scenariusze A/P/K i zasymulować przebieg odroczonej próby bez wymyślania brakującej semantyki lub psucia pomiaru. Rzeczywista skuteczność uczenia pozostaje hipotezą do osobnego pilotażu. |
| **G4 — Implementation handoff** | Właściciel projektu zatwierdził zakres techniczny na podstawie G1–G3. |

## 7. Instrukcja rozpoczęcia każdej pracy agenta

1. Odczytaj niniejszy router i wskaż, czy realizujesz **B**, **C**, **walidację**, czy późniejszą **implementację**.
2. Otwórz wymagane dokumenty według sekcji 2 i 5. Nie zastępuj pełnych źródeł plikami TXT będącymi streszczeniami poprzednich odpowiedzi.
3. Wskaż konkretny zakres, istniejące **FR / UC / EO**, status decyzji i planowany rezultat. Sprawdź, czy nie naruszasz granicy fazy.
4. Wykonaj zadanie i przedstaw rezultat, ślad do wymagań, luki oraz konflikty. Oznacz hipotezy i rzeczy wymagające review.
5. Przygotuj jednoznaczny handoff do następnego etapu. **Nie oznaczaj materiału jako zaakceptowanego bez decyzji właściciela projektu.**

## 8. Docelowy manifest Sources po korekcie B

**Rdzeń aktywnego zestawu — 12 plików po dodaniu R06:**

1. `00_IREB_CPRE_START.md` — niniejszy aktualny router.
2. `00_IREB_CPRE_Fundament_pedagogiczny.md`.
3. `IREB_CPRE_Deep_Research_PL_2026-11.md`.
4. `IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md`.
5. `IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md`.
6. `B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md`.
7. `B02_IREB_CPRE_FR_Traceability_v0.2.md`.
8. `B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md`.
9. `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md`.
10. `R04_IREB_CPRE_B_Acceptance_Review_v0.1.md` — historia review, z aktualną notą.
11. `R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md` — kontrola korekt i wniosek przed decyzją.
12. `R06_IREB_CPRE_G1_Owner_Decision_v0.1.md` — aktualna decyzja G1 i zakres akceptacji.

C01–C04 mogą pozostać pomocniczo jako jawnie niezaakceptowane przygotowanie, po jednej kopii każdego pliku. R01–R03 mogą pozostać pomocniczo jako historyczne audyty i wejście do odrębnego zadania D. Nie zastępują aktualnych warunków B ani decyzji R06. Przy zachowaniu całego przygotowania C i historycznych R01–R03 zestaw po dodaniu R06 liczy 19 unikalnych dokumentów; plik promptu jest instrukcją zadania, nie dodatkowym źródłem normatywnym.

**Weryfikuj wyłącznie bieżącą listę Project Sources, nie cały katalog roboczy z kopiami dawnych załączników.** Na liście przekazanej 2 listopada pozostał jeden stary `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md`; odłączyć go po potwierdzeniu v0.2. Brakuje C03 i C04: przywrócić po jednej kopii jako przygotowanie historyczne do wznowienia C. Pozostałe B v0.1 i dodatkowe kopie C nie figurują na tej liście. Kopie wejściowe zachowuje archiwum; nie kasować ich. Szczegóły sprostowania i podmian: R06 §4.

Historyczne `Omówienie egzaminu IREB.txt`, `Rekomendacja nauki IREB.txt` i `Projekt systemu nauki IREB.txt` nadal są materiałem archiwalnym zastąpionym merytorycznie przez kanon, Deep Research, Blueprint i FTC. Odłączać je dopiero po potwierdzeniu obecności właściwych pełnych dokumentów.

Samo zapisanie nowej wersji pliku nie przełącza automatycznie aktywnych Project Sources. Dokładna lista podmian jest w R05; aktualizacja zestawu Sources nie jest decyzją o zamknięciu G1.

## 9. Historia aktualizacji routera

- Stan wejściowy: kanoniczny router z 1 listopada 2026, pięć podstawowych źródeł i bramki G0–G4; zachowany bez zmian w archiwum wejść.
- Aktualizacja v0.2: wskazano poprawione B01–B04, aktualny raport R05, rolę historycznego R04, status pomocniczych dokumentów i sposób odłączenia identycznych kopii bez utraty treści. Hierarchia źródeł, pedagogika i definicje G0–G4 pozostają zachowane.

- Aktualizacja 2.11.2026 po decyzji właściciela: G1 przyjęte dla v0.2; dodano routing R06 i dopuszczalność odrębnie zleconego równoległego D, sprostowano źródło inwentarza. Warunki G2–G4 i ograniczenie K-04 zachowano. Wcześniejszy router znajduje się w paczce v0.2 i historii pliku.
