# 15 — Jak wprowadzić nową paczkę wiedzy do aplikacji

Krótka instrukcja dla właściciela treści. Szczegóły formatu: `docs/13_AUTHORING_FORMAT.md`. Instrukcja dla agenta AI piszącego treść: `docs/14_AI_AUTHORING_AGENT_GUIDE.md`. Publikacja na hoście: `docs/RUNBOOK_LAN.md`.

## Role

| Kto | Co robi |
|---|---|
| Agent AI | pisze katalog tematu i notatkę `README.md`; niczego nie zatwierdza |
| Ty | umieszczasz pliki, uruchamiasz komendy, czytasz raport |
| Osoba upoważniona | pisze `review/decisions.yaml` i, gdy trzeba, `review/withdrawals.yaml` |
| Administrator hosta | kopiuje wydanie na host w LAN |

Jedna osoba może pełnić kilka ról, ale decyzja recenzji zawsze ma wskazaną osobę i zapis.

## A. Nowy temat

1. **Umieść katalog** od agenta w `content/authoring/<ID>/`. Nazwa katalogu musi być równa `id` w `topic.yaml`, np. `content/authoring/T22/`.

2. **Sprawdź pliki.** Błędy wskazują plik i pole. Przekaż je agentowi do poprawy i powtórz ten krok.

   ```bash
   npm run content:lint
   ```

3. **Przekonwertuj.** Powstaje paczka `content/normalized/<ID>.<rewizja>.json` i raport `content/normalized/<ID>-AUTHORING_REPORT.md`.

   ```bash
   npm run content:convert
   ```

4. **Przeczytaj raport.** Sprawdź liczby pytań i uzasadnień, ostrzeżenia oraz wiersz „Kanał recenzencki”. Bez decyzji temat nie trafia do żadnego kanału i to jest poprawne.

5. **Udostępnij recenzentom.** Osoba upoważniona tworzy `content/authoring/<ID>/review/decisions.yaml` według wzoru z `content/authoring/_templates/review/decisions.yaml`. Dla samego podglądu recenzenckiego wystarczy:

   ```yaml
   decisions:
     - id: DEC-T22-0001
       decidedAt: 2026-11-10
       decidedBy: "Imię Nazwisko, rola"
       ref: "Gdzie jest zapis decyzji"
       revision: r1
       review: pending
       publication: review-only
       allowedUses: []
       rights: { status: review-only, channels: [internal-review] }
   ```

   Potem ponownie uruchom `content:convert` i otwórz podgląd recenzencki pod adresem `http://localhost:4320/cpre-review/`. Zatrzymasz go klawiszami Ctrl+C.

   ```bash
   npm run preview:review
   ```

6. **Dopuść dla uczniów.** Po recenzji osoba upoważniona dopisuje nową decyzję dla tej samej rewizji. Obowiązuje ostatnia decyzja danej rewizji. W `topic.yaml` musi też być `authoring: complete`.

   ```yaml
     - id: DEC-T22-0002
       decidedAt: 2026-11-20
       decidedBy: "Imię Nazwisko, rola"
       ref: "Protokół recenzji z 20.11.2026"
       revision: r1
       review: approved
       publication: permitted
       allowedUses: [learning, practice, remediation, delayed]
       rights: { status: permitted, channels: [internal-review, internal-lan] }
   ```

   Ponownie uruchom `content:convert`. Wiersz raportu „Kanał ucznia” powinien mieć wartość „tak”. Build ucznia możesz obejrzeć pod adresem `http://localhost:4310/cpre/`.

   ```bash
   npm run preview:learner
   ```

7. **Wydaj i opublikuj.** Uruchom kontrolę, a potem wydanie z numerem sekwencji wyższym niż ostatnio opublikowany. Skopiuj je na host według `docs/RUNBOOK_LAN.md` §5.2: najpierw katalog `releases/<id>/`, na końcu `manifest.json`.

   ```bash
   npm run check
   ```

   ```bash
   npm run content:release -- --sequence <N+1> --created-at <data ISO>
   ```

   Przeczytaj wynik. Lista `included` to tematy, które dostaną uczniowie. Linia `UWAGA: … był w poprzednim wydaniu …, a w nowym go nie ma` oznacza, że temat wypadnie uczniom. Zwykle brakuje wtedy decyzji dla jego nowej rewizji.

Aplikacje uczniów pobiorą nowe wydanie same, po odzyskaniu połączenia z hostem. Przebudowa ani reinstalacja aplikacji nie są potrzebne.

## B. Poprawka istniejącego tematu

1. Agent zmienia pliki, podnosi `revision` zmienionych obiektów i `revision` w `topic.yaml`. Identyfikatorów nie zmienia.
2. Wykonaj kroki A.2–A.4. Lint zgłosi błąd, jeśli opublikowana treść zmieniła się bez nowej rewizji.
3. **Nowa rewizja tematu potrzebuje nowej decyzji.** Bez niej temat wypadnie z wydania ucznia. Osoba upoważniona dopisuje decyzję z nowym `revision`.
4. Wykonaj krok A.7. Rozpoczęte próby uczniów zostają przy starej rewizji.

## C. Wycofanie pytania albo spór o klucz

1. Osoba upoważniona dopisuje wpis do `content/authoring/<ID>/review/withdrawals.yaml` według wzoru z `_templates`.
2. Uruchom `content:lint`, `content:convert` i wydanie z kroku A.7.
3. U uczniów nowe użycia tej rewizji pytania są zablokowane, a aktywny test zostaje wstrzymany bez ujawniania klucza. Historia zostaje, ale nie służy jako dowód.
4. Wpisu nie da się cofnąć ani zmienić. Poprawione pytanie publikujesz jako nową rewizję według części B.

## Czego nie robić

- Nie edytuj ręcznie plików w `content/normalized/` ani `content/withdrawals/`. Tworzy je konwerter.
- Nie zmieniaj identyfikatorów ani nazw katalogów opublikowanych tematów.
- Nie usuwaj wpisów z `review/withdrawals.yaml`.
- Nie publikuj buildu recenzenckiego (`dist-review/`) dla uczniów.
- Nie nadpisuj na hoście istniejących katalogów `releases/` i nie obniżaj numeru sekwencji.

## Typowe sytuacje

| Objaw | Przyczyna | Co zrobić |
|---|---|---|
| `content:lint` zgłasza błędy | treść niezgodna z formatem | przekaż listę agentowi, popraw, powtórz |
| raport: „Kanał recenzencki: nie” | brak decyzji z prawami `internal-review` | krok A.5 |
| raport: „Kanał ucznia: nie (LEARNER_…)” | brak dopuszczenia, praw albo `authoring: complete` | krok A.6; kody w raporcie mówią, czego brakuje |
| `content:convert` odmawia nadpisania T21 | paczka pochodzi ze starego importu | użyj innego `id` tematu |
| `content:release` odmawia | temat dopuszczony dla uczniów nie przechodzi bramki | popraw decyzję albo prawa i powtórz konwersję |
| uczniowie nie widzą tematu | wydanie bez tego tematu albo niepodmieniony `manifest.json` | sprawdź listę `included` i krok A.7 |
