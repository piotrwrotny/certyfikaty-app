# 07 — Odbiór implementacji i dowody

Testy aplikacji trzeba dopiero wykonać. Ta paczka bada własną spójność, źródła i fixtures, nie działanie przyszłej PWA. Nie nazywaj technicznego walkthrough badaniem użytkowników ani dowodem skuteczności nauki.

## Komendy, które implementacja ma dostarczyć

| Komenda npm | Rzeczywista kontrola |
|---|---|
| typecheck / lint | TypeScript strict i uzgodnione reguły; bez wyłączenia błędów całymi modułami |
| test | Punktacja, kwalifikacja, state transitions, profile repositories i migracje |
| content:validate | Schematy i reguły semantyczne wszystkich paczek oraz integralność referencji i użyć |
| content:build / content:release | Deterministyczne immutable paczki i manifest; fail dla review-only na kanale learner |
| test:e2e | Zbudowana aplikacja z SW, prawdziwy IndexedDB, offline/awarie i scenariusze poniżej |
| test:visual | Reprezentatywne stany desktop/mobile i porównanie z zaakceptowanym designem |
| build / check | Produkcyjny build i wszystkie deterministyczne kontrole; build nie jest deploymentem |

## Wymagane scenariusze

| Test ID | Given / When | Then — kryterium odbioru |
|---|---|---|
| QA-01 | Nowa baza, utwórz Anię i Bartka; Ania odpowiada i otwiera wiedzę | Bartek ma pustą własną historię; nic z odpowiedzi/pomocy/nowości Ani nie przenika |
| QA-02 | Zmień nazwę Ani, wróć offline, usuń Bartka | ID i postęp Ani bez zmiany; korpus zachowany; usunięcie dotyczy tylko Bartka |
| QA-03 | Zapis odpowiedzi trwa, wybierz inny profil; potem wymuś failure | Poprawny zapis pozostaje przy pierwotnym profileId; failure blokuje przełączenie, zachowuje draft |
| QA-04 | Dwie karty tej samej próby wysyłają odpowiedzi równocześnie | Jedna wersja zatwierdzona, drugi zapis ma wykryty konflikt; brak last-write-wins w ciszy |
| QA-05 | Dwie karty z różnymi profilami | Wybranie profilu w jednej nie przełącza drugiej; ekspozycja i postęp izolowane |
| QA-06 | A: poprawna, błędna, pusta i importowana nadmiarowa odpowiedź | Odpowiednio w,0,0,0; zwykłe UI nie zapisuje dwóch opcji A |
| QA-07 | P: k=2; jedna poprawna, mieszana para, 3 wybory z 2 trafieniami | Odpowiednio w/2,w/2,0; nadmiar możliwy, brak hard cap; bez punktów za niewybrane |
| QA-08 | K: m=3,w=2; poprawny/blank/błędny i poprawny/podwójny/poprawny | Dokładnie 2/3 oraz 4/3; blank nigdy nie wygląda jak wybrane Fałsz |
| QA-09 | Sumuj 2/3 + 2/3 + 2/3 | Dokładnie 2, bez 1.98 i bez zmiany porównania przez zaokrąglenie |
| QA-10 | T21: 176 wejść/oczekiwanych wyników z QA i pełne zbiory 1024 stanów | Wektory zgodne; pełne zbiory mają zakres 0…w i prawidłowe reguły nadmiaru/blank; to matematyka, nie review klucza |
| QA-11 | A/P/K w Nauce, otwórz rationale pominiętej poprawnej opcji | Pełne lokalne uzasadnienie dostępne; poprawna odpowiedź nie wymusza lektury wszystkich |
| QA-12 | Z opcji do reguły, comparison, korekty, follow-up; refresh i powrót | Ten sam sourceAttemptId, rewizja, odpowiedź, wynik, ujawnienia i fokus; follow-up osobna próba |
| QA-13 | Dwa nieudane follow-up po bazowym błędzie | Licznik 2, inne wsparcie/przerwa, brak automatycznego trzeciego D/B/F |
| QA-14 | Test aktywny i wstrzymany; sprawdź UI, DOM, drzewo dostępności, title, link preview i historię | Brak klucza/rationale/zdobytych punktów/hintów EO/źródeł; komponent dostał wyłącznie prompt projection |
| QA-15 | Test z flagami, blank K, P nadmiar; review; double-finalize | Neutralne braki/flagi do końca, edycja przed końcem; jeden commit i jeden wynik po finalizacji całości |
| QA-16 | Konwersja testu do Nauki: anuluj, potwierdź, refresh, export/import | Anulowanie nic nie ujawnia; potwierdzenie całej formy trwałe, brak odzyskania niezależności; wcześniejsze warunki zachowane |
| QA-17 | Próba 7 dni po samodzielnej, 1 min po lekturze właściwego ZAK | Dwa odstępy i brak deklaracji 7-dniowej retencji; kontakt innego ZAK nie resetuje tego zakresu |
| QA-18 | Nowe ID/rewizja/tłumaczenie tej samej rodziny, częściowa historia | Znajomość zachowana lub stan niepewny, nigdy automatycznie nieznana; pula chroniona poza eksploracją |
| QA-19 | Korpus pusty / brak follow-up / relacji opcjonalnej / klucza / dowodów | Właściwe różne stany i dostępna alternatywa; krytyczny brak blokuje item, nie diagnozuje wiedzy |
| QA-20 | Po gotowości offline wyłącz sieć, zamknij/otwórz app | Wybór profilu, wiedza, odpowiedzi, finalizacja i wznowienie działają; żaden font/skrypt z CDN |
| QA-21 | Pierwszy start bez cache i bez hosta; częściowy download | Jasne „brak pobranych materiałów”, bez fałszywego „Gotowe offline”; retry po powrocie hosta |
| QA-22 | Host LAN dostępny bez internetu; internet dostępny bez LAN; portal HTML 200; LAN/VPN wraca bez eventu online | Tylko poprawny manifest z hosta aktywuje update; okresowy check widocznej app wykrywa LAN bez eventu; offline działa w pozostałych przypadkach |
| QA-23 | Pobranie nowego wydania urwane w połowie, zły digest/JSON/schema/ref | Poprzednie całe wydanie i cały postęp działają; zero częściowej aktywacji |
| QA-24 | Zamknij proces przed/po przełączeniu release pointer | Odpowiednio całe stare/nowe wydanie; nie ma pointera do brakujących paczek |
| QA-25 | Nowy release podczas odpowiedzi, gałęzi wiedzy i aktywnego testu | Bieżąca rewizja i source snapshot zachowane; nowe aktywności dopiero z nowej kompatybilnej wersji |
| QA-26 | Niekompatybilny manifest, dwie karty pobierające, rollback wyższym sequence | Bez aktywacji niekompatybilnego; jeden commit; rollback nie resetuje postępu/ekspozycji |
| QA-27 | Nowy SW czeka, użytkownik odpowiada/wybiera Później, potem zapisuje i odświeża | Brak auto-reload, ta sama próba i profil po update; błąd zapisu blokuje reload |
| QA-28 | Wycofanie/sporny klucz dla pytania w aktywnym teście i historii | Neutralne wstrzymanie formy; nowe użycia blokowane; stara odpowiedź/ocena zachowane, korekta oddzielnie |
| QA-29 | Quota/write denied/blocked migration/utrata lease | Czytelny błąd, zachowany draft i stara baza; brak deleteDatabase/reset jako naprawy |
| QA-30 | Eksport jednego profilu, import uszkodzony/poprawny/powtórzony | Brak obcych danych; uszkodzony nic nie zapisuje; poprawny tworzy nowy profil i zachowuje referencje/ekspozycję bez cichego merge |
| QA-31 | Import T21 jako review-only, próba learner release; brak QA lub rationale | Walidator odrzuca learner release; fixture demo działa oddzielnie; braki raportowane bez generowania |
| QA-32 | Import kolejnego tematu zgodnego ze schematem | Nowa treść renderuje się i przechodzi A/P/K/relacje bez nowego ekranu/hardcode T21 |
| QA-33 | Treść Markdown zawiera HTML/script/javascript URL lub bardzo długi K/rationale | Brak wykonania/injekcji, bezpieczne renderowanie, treść czytelna i brak poziomego scroll przy 320 px |
| QA-34 | Klawiatura i czytnik: modal, A/P/K, błędy, flagi, finalizacja i powrót | Semantyka grup/etykiet, widoczny fokus, brak pułapki, tekstowe stany i sensowne aria-live; bez przecieków |
| QA-35 | Desktop1200, phone390/320, tablet768, zoom/text spacing | Wierność Skupionej sesji, brak obciętych akcji i zasłoniętego fokusu; knowledge fullscreen na telefonie |
| QA-36 | Hosting `/cpre/`, instalacja i powrót z deep linku offline | Assety/manifest/scope poprawne; działa browser-back i start_url; stabilny origin i HTTPS |

## Macierz wykonania przeglądarkowego

Automatyczne smoke/e2e na Chromium i WebKit oraz przynajmniej krytyczny offline/profile/update także na Firefox w zwykłej karcie. Testuj **build**, nie wyłącznie dev server (SW i cache różnią się). Rzeczywista instalacja na desktop Chromium/Edge, Android Chrome i iOS Safari wymaga testu na urządzeniu/platformie; symulacja WebKit w Playwright nie jest jego zastępstwem. Jeśli środowisko nie pozwala, zapisz `blocked-environment` dla tego konkretnego sprawdzenia, z instrukcją ręczną; nie blokuj dalszej niezależnej implementacji i nie nazywaj go PASS.

Klawiatura i co najmniej jeden rzeczywisty czytnik (NVDA/Firefox lub VoiceOver/Safari) muszą zostać sprawdzone przed deklaracją odbioru dostępności. axe i automatyczny kontrast pomagają, nie stanowią pełnego audytu WCAG 2.2 AA. Uwzględnij reduced-motion i preferencje tekstu, cele dotykowe ≥44 px i fokus niezasłonięty przez sticky/footer.

## Rejestr dowodów

W `qa/IMPLEMENTATION_REPORT.md` dla testu zapisz commit/build, datę, środowisko, dane wejściowe/fixture, wynik oraz ścieżkę dowodu. Screenshoty implementacji nie mogą zastąpić `references/design`. Testy ze sterowanym czasem oznacz jako symulację. Dalsze kwestie treści zapisuj oddzielnie; nie obniżaj priorytetu Essential po to, by zamknąć backlog.
