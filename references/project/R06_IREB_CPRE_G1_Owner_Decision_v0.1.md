# R06 — Decyzja właściciela o zamknięciu G1

**Projekt:** IREB CPRE Foundation Level Learning System  
**Data decyzji:** 2 listopada 2026, Europe/Warsaw  
**Wersja:** v0.1  
**Status:** G1 CLOSED / B ACCEPTED — decyzja właściciela.

Właściciel przyjął B01–B04 v0.2 jako kontrakt semantyczny, z zachowaniem K-04 i uznaniem udokumentowanego przeglądu AI za wystarczający do odbioru B. Podstawą jest jego odpowiedź „TAK” na pytanie o taki dokładnie zakres akceptacji w rozmowie z 2 listopada 2026. Ten zapis dokumentuje decyzję użytkownika.

## 1. Zakres przyjęcia

Zakres odpowiada wnioskowi R05 §6: B01–B04 v0.2, B-DEC-01–16, niezmienione rozstrzygnięcia K-01–08 i jawne doprecyzowania K-09–11. L-B04 rozstrzygnięto dla G1 jako przyjęcie zakresu review AI opisanego w R04/R05. Nie oznacza to wykonania ludzkiej recenzji eksperckiej ani przyjęcia przeglądu treści C.

**K-04 obowiązuje:** ILL-K01 zachowuje cztery wiersze, m=4, w=2 i ilustracyjny wynik 1/2. Wiersz 4 / KRY-X01 ma rolę pomocniczą bez fikcyjnego EO. Cała obecna ilustracja pozostaje poza rezerwą CPRE i pełnym mockiem do czasu uzasadnienia oficjalnego zakresu wszystkich punktowanych decyzji. W C można opracować osobną zgodną pozycję pomiarową; ukrycie etykiety nie usuwa ograniczenia.

## 2. Identyfikacja przyjętego baseline

Poniższe SHA-256 odpowiadają rzeczywistym kopiom Sources z chwili decyzji oraz manifestowi R05. Zgodność sprawdzono przed zapisaniem statusu G1.

| Dokument v0.2 | SHA-256 przyjętego baseline |
|---|---|
| B01 | `f29c2f3b61ce1ad86467a19153b648c50af8cac61b07ca19bb856d0dfe46323c` |
| B02 | `dc089326e158d431520c7a8eb5cc2f6d8935c0513bee355ca8f9ab7c92dcfa94` |
| B03 | `af112d6e97ebe559264eb7ba6df4c6acc8a0c91ffe02f543b0f44123913114d1` |
| B04 | `cd903c5e420a221a2edf53f489cc4a3e855bec32daf91ba993086306d9ccd607` |

B01–B03 pozostawiono bez zmiany bajtów. Ich dawne nagłówki FOR REVIEW są historycznym statusem autora i nie uchylają niniejszej decyzji. W B04 zapisano administracyjnie status, akceptację B-DEC, rozstrzygnięcie L-B04 i historię decyzji; nie zmieniono wierszy tabel B-DEC, K ani C-AC. Hash aktualnego B04 po zapisie decyzji: `00d82a4f62d8b1c01931941a0dcfa8fccccd378b29c1990eb47d5fd3dc4988e2`. Poprzednie bajty pozostają w paczce v0.2 i historii pliku. R04/R05 zachowują stan oraz wyniki z czasu ich sporządzenia.

## 3. Kolejne prace i zależności

| Etap | Co teraz można wykonać | Warunek zakończenia |
|---|---|---|
| C | Uzgodnić C01/C02 i przygotowanie C03/C04 z B v0.2; napisać trzy rzeczywiste pakiety edukacyjne A/P/K, rationale, korekty i znaczące warianty | Udokumentowane źródła, prawa, kompletność i odrębne review; decyzja właściciela G2 |
| D | Na osobne zlecenie projektować flow, organizację ekranów, UX/UI, styl i zakres przyrostu równolegle z C | Zależne rozwiązania sprawdzone na rzeczywistym reprezentatywnym C, zgodne z przyjętym kontraktem i wynikami G3 |
| Walkthrough | Po G2 przejść A/P/K, wiedzę, korektę, nową próbę i powrót; zasymulować odroczenie według jawnego protokołu | Decyzja G3; symulacja nie poświadcza retencji |
| Handoff | Połączyć zatwierdzony zakres D z G1–G3 i konkretnymi wersjami treści | Decyzja właściciela G4 przed kodowaniem przyrostu |

D nie wymaga ukończenia C do rozpoczęcia. Jego szczegóły zależne od treści wymagają późniejszej kontroli na prawdziwych przykładach. R03 §1, §5–6 jest podstawą tej zależności; historyczne odwołania do B v0.1, otwartego G1 i nierozstrzygniętego udziału ucznia należy czytać według B v0.2 / R06. Nie rozpoczynano w tej pracy authoringu C ani projektowania D.

## 4. Sprostowanie kontroli Sources i lista aktualizacji

Poprzednia odpowiedź błędnie utożsamiła cały katalog roboczy z bieżącym zestawem Project Sources. Przechowywane kopie dawnych załączników nie są dowodem ich aktywności. Na poprzedniej liście aktywnych Sources była jedna stara kopia B04 v0.1; C03 i C04 występowały pojedynczo i nie należało wskazywać ich do odłączenia jako duplikatów.

Na liście przekazanej z obecną wiadomością jest 17 źródeł: pięć podstawowych, cztery B v0.2, R01–R05, C01/C02 oraz stare B04 v0.1. Brakuje C03 i C04. Wymagane ręczne aktualizacje Sources:

1. Podmienić `00_IREB_CPRE_START.md` oraz `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md` na wersje z zapisem decyzji G1.
2. Dodać niniejszy R06 jako aktualny zapis decyzji właściciela.
3. Odłączyć stare `B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.1.md` od aktywnego zestawu, zachowując oryginał w archiwum.
4. Przywrócić po jednej kopii `C03_IREB_CPRE_Pilot_Content_APK_v0.1.md` i `C04_IREB_CPRE_Content_QA_and_Handoff_v0.1.md` jako przygotowanie do wznowienia C. Ich stary bloker G1 jest rozstrzygnięty przez R06; nie są gotowym korpusem ani odbiorem G2.

Przy zachowaniu wszystkich historycznych R01–R03 i przygotowania C01–C04 zestaw po tych zmianach ma 19 unikalnych źródeł, w tym R06. Zmiany plików nie przełączają automatycznie listy Project Sources. Ta czynność porządkowa nie wstrzymuje ani nie unieważnia decyzji G1.

## 5. Prompt do uruchomienia C

Gotowe zlecenie zawiera `PROMPT_C_IREB_CPRE_Real_Content_After_G1_v0.1.md`. Jest to instrukcja następnego zadania, nie wykonany korpus. Wklejenie promptu w nowej rozmowie projektu uruchamia C; samo zapisanie go nie oznacza rozpoczęcia produkcji materiału ani akceptacji G2.
