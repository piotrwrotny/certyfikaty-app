# T07 — Wyjaśnianie dziewięciu zasad RE — QA_and_Handoff v0.1

Autor: jeden agent AI; 2.11.2026, Europe/Warsaw. Dokument v0.1, nowe obiekty r1, PL z terminologią EN. Status: **ukończony autorsko do odrębnego review**. G1 przyjęte w R06; G2/G3/G4 otwarte. B01–B04 v0.2 zachowują znaczenie przyjęte przez właściciela; C01–C04 v0.2 są wejściem do review, bez domniemanej akceptacji.

Jest to pełne wydanie recenzenckie z kluczami, rationale, rubrykami i kandydatami delayed. Czytelnik poznaje te zadania i ich rozwiązania. Wydanie **nie jest dla niego nieznaną rezerwą**. Materiał służy recenzentowi i agentowi implementującemu jako wsad merytoryczny; dopuszczenie do punktowanego użycia uczniowskiego wymaga review oraz decyzji o zakresie użycia.

Oficjalna reguła to FACT w granicach zlokalizowanego źródła; zastosowanie do autorskiej sytuacji to INTERPRETATION. Organizacja ćwiczeń i korekty to decyzja authoringu; propozycje rodzin są DESIGN HYPOTHESIS. Wszystkie przykłady są fikcyjne. Nie wytworzono danych ani diagnoz uczniów. Polskie objaśnienia są własnymi parafrazami; oficjalna etykieta terminu nie nadaje objaśnieniu statusu oficjalnego tłumaczenia.

## Wynik i policzony inwentarz

| Materiał | Liczba / tożsamości |
| --- | --- |
| Kryteria / rdzenie / porównania / EX / CE / korekty | Po 9; dokładne ID w Content |
| B / F / D | Po 9 rzeczywistych zadań; razem 27 |
| Zamknięte | 9; A=4, P=2, K=3 |
| Opcje/wiersze i lokalne rationale | 37 |
| Otwarte zadania wariantowe / rubryki | 18 |
| Retrieval / rubryki | 9 |
| Pary B–F/B–D/F–D | 27 |
| Rodziny proponowane | 9; nie są potwierdzonymi niezależnymi rodzinami |
| Reuse istniejących C | 6 aktywności, nie nowe ID/r1 |
| Odrębnie zrecenzowane / dopuszczone uczniowsko | 0 / 0 |
| Chroniona rezerwa dla czytelnika pełnego pliku | 0 |
| Próby uczniów / R25 | 0 / 0 |


## Macierz pokrycia i czynności

| Kryterium / źródło i poziom | SUPPORTS / reguła | MEASURES | Korekta / FU / D | Luka |
| --- | --- | --- | --- | --- |
| KRY-T07-01; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.1–2.2 zasada 1 s.14; C-S07 1.3.2 §2.2.1 s.16–18 | REG/CMP/EX/CE-KRY-T07-01 | Z1-T07-01-B01, Z1-T07-01-F01, Z1-T07-01-D01; RP-T07-01 | REM-KRY-T07-01; Z1-T07-01-F01; Z1-T07-01-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-02; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 2 s.15; C-S06 2.2.0 Interesariusz s.14, Persona s.21; C-S07 1.3.2 §2.2.2 s.18–19 | REG/CMP/EX/CE-KRY-T07-02 | Z1-T07-02-B01, Z1-T07-02-F01, Z1-T07-02-D01; RP-T07-02 | REM-KRY-T07-02; Z1-T07-02-F01; Z1-T07-02-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-03; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 3 s.15; C-S07 1.3.2 §2.2.3 s.20–21 | REG/CMP/EX/CE-KRY-T07-03 | Z1-T07-03-B01, Z1-T07-03-F01, Z1-T07-03-D01; RP-T07-03 | REM-KRY-T07-03; Z1-T07-03-F01; Z1-T07-03-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-04; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 4 s.16; C-S06 2.2.0 Context boundary s.12, System boundary s.13, Context s.17, Scope s.35; C-S07 1.3.2 §2.2.4 s.22–24 | REG/CMP/EX/CE-KRY-T07-04 | Z1-T07-04-B01, Z1-T07-04-F01, Z1-T07-04-D01; RP-T07-04 | REM-KRY-T07-04; Z1-T07-04-F01; Z1-T07-04-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-05; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 5 s.16; C-S07 1.3.2 §2.2.5 s.24–25 | REG/CMP/EX/CE-KRY-T07-05 | Z1-T07-05-B01, Z1-T07-05-F01, Z1-T07-05-D01; RP-T07-05 | REM-KRY-T07-05; Z1-T07-05-F01; Z1-T07-05-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-06; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 6 s.17; C-S06 2.2.0 Validation/Verification s.32; C-S07 1.3.2 §2.2.6 s.25–26 | REG/CMP/EX/CE-KRY-T07-06 | Z1-T07-06-B01, Z1-T07-06-F01, Z1-T07-06-D01; RP-T07-06 | REM-KRY-T07-06; Z1-T07-06-F01; Z1-T07-06-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-07; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 7 s.17; C-S07 1.3.2 §2.2.7 s.27 | REG/CMP/EX/CE-KRY-T07-07 | Z1-T07-07-B01, Z1-T07-07-F01, Z1-T07-07-D01; RP-T07-07 | REM-KRY-T07-07; Z1-T07-07-F01; Z1-T07-07-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-08; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 8 s.17–18; C-S07 1.3.2 §2.2.8 s.28 | REG/CMP/EX/CE-KRY-T07-08 | Z1-T07-08-B01, Z1-T07-08-F01, Z1-T07-08-D01; RP-T07-08 | REM-KRY-T07-08; Z1-T07-08-F01; Z1-T07-08-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |
| KRY-T07-09; EO2.2.2 L2; C-S02/C-S03 3.3.0 §2.2 zasada 9 s.18; C-S07 1.3.2 §2.2.9 s.29 | REG/CMP/EX/CE-KRY-T07-09 | Z1-T07-09-B01, Z1-T07-09-F01, Z1-T07-09-D01; RP-T07-09 | REM-KRY-T07-09; Z1-T07-09-F01; Z1-T07-09-D01 | Authoring istnieje; pełność EO i dopuszczenie oczekują odrębnego review; brak dowodów ucznia. |

MENTIONS: nazwy fikcyjnych organizacji, branże, urządzenia i technologie są tylko tłem. Nie uzyskują własnych EO ani punktów za specjalistyczną wiedzę. Nie utożsamiamy tej macierzy z wynikiem ucznia.


## Wektory punktacji każdego zamkniętego itemu

Syntetyczne dane kontrolne, bez historii osób. Źródło: C-S04 5.6.2 §2 s.4–6. Dokładne ułamki; zaokrąglenie prezentacji nie zmienia sum.

### Z1-T07-01-B01 / A / w=1

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| trafna | c | pełna waga tylko za trafny pojedynczy | 1 |
| błędna | a | pełna waga tylko za trafny pojedynczy | 0 |
| pusta | ∅ | pełna waga tylko za trafny pojedynczy | 0 |
| nadmiar | a, c | pełna waga tylko za trafny pojedynczy | 0 |

### Z1-T07-02-B01 / P / w=2 / k=2

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | a, b | 2 × 2/2 | 2 |
| częściowa/mieszana | a, c | 2 × 1/2 | 1 |
| niedobór | a | 2 × 1/2 | 1 |
| pusta | ∅ | 2 × 0/2 | 0 |
| same błędne | c, d | 2 × 0/2 | 0 |
| nadmiar | a, b, c | nadmiar n>k → 0 | 0 |

### Z1-T07-03-B01 / A / w=1

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| trafna | a | pełna waga tylko za trafny pojedynczy | 1 |
| błędna | b | pełna waga tylko za trafny pojedynczy | 0 |
| pusta | ∅ | pełna waga tylko za trafny pojedynczy | 0 |
| nadmiar | b, a | pełna waga tylko za trafny pojedynczy | 0 |

### Z1-T07-04-B01 / K / w=3 / m=4

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | Fałsz, Prawda, Fałsz, Prawda | 3 × 4/4 | 3 |
| jeden błąd | Prawda, Prawda, Fałsz, Prawda | 3 × 3/4 | 9/4 |
| jeden blank | Fałsz, Prawda, Fałsz, ∅ | 3 × 3/4 | 9/4 |
| pusta | ∅, ∅, ∅, ∅ | 3 × 0/4 | 0 |
| błędna | Prawda, Fałsz, Prawda, Fałsz | 3 × 0/4 | 0 |
| obie wartości | Fałsz, Prawda, Fałsz, B | 3 × 3/4 | 9/4 |
| mieszana | Fałsz, ∅, ∅, ∅ | 3 × 1/4 | 3/4 |

### Z1-T07-05-B01 / A / w=1

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| trafna | c | pełna waga tylko za trafny pojedynczy | 1 |
| błędna | a | pełna waga tylko za trafny pojedynczy | 0 |
| pusta | ∅ | pełna waga tylko za trafny pojedynczy | 0 |
| nadmiar | a, c | pełna waga tylko za trafny pojedynczy | 0 |

### Z1-T07-06-B01 / P / w=3 / k=3

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | a, d, e | 3 × 3/3 | 3 |
| częściowa/mieszana | a, b | 3 × 1/3 | 1 |
| niedobór | a | 3 × 1/3 | 1 |
| pusta | ∅ | 3 × 0/3 | 0 |
| same błędne | b, c | 3 × 0/3 | 0 |
| nadmiar | a, d, e, b | nadmiar n>k → 0 | 0 |

### Z1-T07-07-B01 / K / w=2 / m=4

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | Prawda, Fałsz, Prawda, Fałsz | 2 × 4/4 | 2 |
| jeden błąd | Fałsz, Fałsz, Prawda, Fałsz | 2 × 3/4 | 3/2 |
| jeden blank | Prawda, Fałsz, Prawda, ∅ | 2 × 3/4 | 3/2 |
| pusta | ∅, ∅, ∅, ∅ | 2 × 0/4 | 0 |
| błędna | Fałsz, Prawda, Fałsz, Prawda | 2 × 0/4 | 0 |
| obie wartości | Prawda, Fałsz, Prawda, B | 2 × 3/4 | 3/2 |
| mieszana | Prawda, ∅, ∅, ∅ | 2 × 1/4 | 1/2 |

### Z1-T07-08-B01 / A / w=1

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| trafna | d | pełna waga tylko za trafny pojedynczy | 1 |
| błędna | a | pełna waga tylko za trafny pojedynczy | 0 |
| pusta | ∅ | pełna waga tylko za trafny pojedynczy | 0 |
| nadmiar | a, d | pełna waga tylko za trafny pojedynczy | 0 |

### Z1-T07-09-B01 / K / w=2 / m=4

| Przypadek | Odpowiedź | Obliczenie | Punkty |
| --- | --- | --- | --- |
| pełna | Fałsz, Prawda, Fałsz, Prawda | 2 × 4/4 | 2 |
| jeden błąd | Prawda, Prawda, Fałsz, Prawda | 2 × 3/4 | 3/2 |
| jeden blank | Fałsz, Prawda, Fałsz, ∅ | 2 × 3/4 | 3/2 |
| pusta | ∅, ∅, ∅, ∅ | 2 × 0/4 | 0 |
| błędna | Prawda, Fałsz, Prawda, Fałsz | 2 × 0/4 | 0 |
| obie wartości | Fałsz, Prawda, Fałsz, B | 2 × 3/4 | 3/2 |
| mieszana | Fałsz, ∅, ∅, ∅ | 2 × 1/4 | 1/2 |


## Przykłady kontroli otwartej oceny

| Aktywność | Pełna / częściowa / pusta / graniczna / krytyczna |
| --- | --- |
| Z1-T07-01-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Wolno opisać ocenę jakościowo, bez wymyślania pieniędzy. Krytyczna: Twierdzenie, że każdy dodatkowy dokument z definicji ma dodatnią wartość. |
| Z1-T07-01-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Można stwierdzić, że potrzebne są dane do konkretnej decyzji; nie trzeba rozstrzygać, czy warsztat na pewno się opłaci. Krytyczna: Uznanie późniejszego charakteru korzyści za dowód ich nieistnienia. |
| Z1-T07-02-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Nie trzeba wybrać czasu retencji ani cytować prawa; scenariusz jest fikcyjny. Krytyczna: Obietnica jednoczesnego spełnienia sprzecznych zapisów bez uzgodnienia. |
| Z1-T07-02-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Wolno zaproponować reprezentantów grupy; nie trzeba tworzyć pełnej stakeholder list. Krytyczna: Utożsamienie persony z rzeczywistym podpisem całej grupy. |
| Z1-T07-03-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Dopuszczalne różne praktyki z uzasadnieniem; nie należy zakazywać wszelkiej wiedzy implicit. Krytyczna: Uznanie nowego podpisu za dowód usunięcia wszystkich rozbieżności. |
| Z1-T07-03-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Można zaakceptować obecną zgodność jako dobry sygnał, zachowując granice. Krytyczna: Wniosek „zgodni w jednym przykładzie, więc niczego nie brakuje”. |
| Z1-T07-04-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Nie trzeba projektować zabezpieczeń ani wyznaczać wszystkich granic L3; argument wystarcza. Krytyczna: Uznanie samego rekordu wejścia za gwarancję rzeczywistej ochrony. |
| Z1-T07-04-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Dopuszczalne jawne wskazanie, że wymagania zależą od danych i nie można zagwarantować celu bez dodatkowych warunków. Krytyczna: Pominięcie czujnika wyłącznie dlatego, że nie jest zmieniany, albo utożsamienie odczytu z gwarancją stanu realnego. |
| Z1-T07-05-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Nie trzeba projektować alternatywnej aplikacji; trafne rozróżnienie wystarcza. Krytyczna: Uznanie braku wskazanej technologii za jedyną możliwą definicję problemu. |
| Z1-T07-05-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Wolno zaznaczyć konieczność potwierdzenia realnej potrzeby; nie zakładać popytu z istnienia czujnika. Krytyczna: Stwierdzenie, że sama kolejność pomysł→potrzeba unieważnia RE. |
| Z1-T07-06-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Można zaproponować zmianę zakresu usługi lub warunków obsady jako przykład; wybór rozwiązania nie jest wymagany. Krytyczna: Uznanie poprawnej formy za wystarczającą walidację. |
| Z1-T07-06-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Można pozostawić założenie jako niepotwierdzone; nie wymyślać dostępności usługi. Krytyczna: Uznanie jednej formalnej akceptacji za dowód wszystkich aspektów. |
| Z1-T07-07-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Nie trzeba ustalać konkretnego terminu wdrożenia zmiany. Krytyczna: Uznanie jednej skrajności za bezwyjątkową regułę ewolucji. |
| Z1-T07-07-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Przyczyny można grupować we własnych słowach; wymagane jest zachowanie ich różnych sensów. Krytyczna: Przypisanie wszystkich zmian wyłącznie niedostatecznej analizie. |
| Z1-T07-08-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Odpowiedź „może, po walidacji potrzeby” jest trafna; nie zakładać zmierzonej korzyści. Krytyczna: Odrzucenie wartościowego uproszczenia wyłącznie z powodu braku nowej technologii. |
| Z1-T07-08-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Nie trzeba zaprojektować nowej usługi; oceniana jest argumentacja o zasadzie. Krytyczna: Przyjęcie technologicznej nowości za wystarczający dowód korzyści dla interesariusza. |
| Z1-T07-09-F01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Można zachować dawną praktykę po uzasadnieniu dopasowania. Krytyczna: Twierdzenie, że dawny sukces uzasadnia automatyczne kopiowanie w każdej sytuacji. |
| Z1-T07-09-D01 | Pełna: wszystkie wymiary jej rubryki. Częściowa: pierwszy wymiar spełniony, pozostałe pominięte. Pusta: ∅, wszystkie niespełnione. Graniczna: Wolno zaproponować inne sposoby pracy dla obu zespołów bez projektowania pełnego procesu. Krytyczna: Uznanie ciężaru dokumentacji lub nazwy agile za wystarczający dowód poprawnego RE. |
| RP-T07-01 | Pełna: Korzyści obejmują spełnienie potrzeb i ograniczenie ryzyka/przeróbek; koszty to pozyskanie, dokumentowanie, walidacja i zarządzanie. Wyjaśnia potrzebę proporcji nakładu do korzyści i ryzyka; ilość dokumentacji nie jest celem. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-02 | Pełna: Wymienia inne istotne role i ryzyko utraty ich wymagań; jedna osoba może łączyć role. Persona reprezentuje grupę/nieznane osoby, ale nie jest realnym potwierdzeniem ich zgody. Różne potrzeby mogą prowadzić do konfliktów wymagających identyfikacji i rozwiązania. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-03 | Pełna: Odróżnia explicit/implicit od prawdziwego/pozornego; dokument nie gwarantuje rozumienia. Wskazuje warunki wspólnej wiedzy/zaufania oraz bariery np. rotacji/odległości bez absolutyzowania. Wyjaśnia rolę przykładów, glosariusza/prototypów i krótkich pętli feedbacku. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-04 | Pełna: Odróżnia granicę systemu, granicę kontekstu i scope, bez utożsamienia istotności z zakresem zmian. Wyjaśnia wpływ zmian otoczenia, przełożenie wymagań świata rzeczywistego na systemowe i rolę założeń. Nie uznaje samego sygnału/rekordu za pewny dowód realnego zdarzenia bez uzasadnionych warunków. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-05 | Pełna: Rozpoznaje problem, potrzebną właściwość i system realizujący oczekiwanie jako powiązane role. Rozdzielanie concern ułatwia pracę, ale nie oznacza izolacji ani niezmiennej kolejności; pomysł/prototyp może ujawnić wymagania. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-06 | Pełna: Wczesna kontrola zmniejsza ryzyko odkrycia nieadekwatności dopiero po wdrożeniu. Obejmuje porozumienie, adekwatne pokrycie potrzeb oraz rozsądne założenia kontekstu. Poprawność zapisu nie dowodzi zgodności z potrzebą. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-07 | Pełna: Wskazuje różne przyczyny: biznes/procesy, konkurencja, priorytety klientów, technologia, przepisy, feedback; dopuszcza korektę błędów/walidację. Wyjaśnia adaptację do potrzeb i potrzebę stabilnej podstawy realizacji, bez absolutnego zakazu albo automatycznej akceptacji zmian. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-08 | Pełna: Innowacja ma poprawiać zaspokojenie potrzeb, a nie jedynie zwiększać liczbę funkcji lub nowość technologii. Dopuszcza użyteczne uproszczenie/małą funkcję i istotnie nowy sposób działania w dużej skali. Nowy pomysł trzeba sprawdzać z interesariuszami; nie zakładać, że ekspert zawsze wie lepiej. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |
| RP-T07-09 | Pełna: Potrzebne są odpowiednie praktyki czterech zadań niezależnie od procesu wytwarzania. Procesy/praktyki/artefakty dobiera się do problemu, kontekstu i środowiska; brak uniwersalnej recepty. Ponowne użycie wymaga refleksji; lekki sposób pracy może być zdyscyplinowany. Częściowa: tylko pierwszy element. Pusta: ∅. Równoważna: trafne własne słowa. Krytyczna: zaprzeczenie głównej regule. |


## QG-01–10 i C-AC-01–14 — autokontrola

| QG | Rzeczywisty wynik |
| --- | --- |
| QG-01 | Autorsko sprawdzono wystarczalność stemu; odrębny recenzent ma rozwiązać bez klucza. |
| QG-02 | Sprawdzono pełność kluczy i parametrów; A/P/K oddzielone od rubryk otwartych. |
| QG-03 | Przygotowano i autorsko odczytano 37 lokalnych rationale; każda decyzja ma przesłankę/regułę/wynik. |
| QG-04 | Kryterium/EO/poziom jawne; L1 nie awansuje do L3. L2 obejmuje argument/rubrykę. |
| QG-05 | Odczytano wskazane sekcje źródeł, zastosowanie do fikcyjnego przypadku jawne. |
| QG-06 | Instrukcje, polaryzacja i wiersze tekstowe sprawdzone autorsko; bez testu czytnika. |
| QG-07 | Rodziny i pary opisane, odrębne review granic pending; brak mocnej etykiety nowej rezerwy. |
| QG-08 | Obecny review i pochodzenie opisane; kanał publikacyjny nieustalony. |
| QG-09 | **Niespełnione: odrębne kompetentne review nie zostało wykonane.** |
| QG-10 | Treści B/F/D i korekty istnieją; dopuszczenie U-* oraz K6 formy oczekują review. |

| C-AC | Stan / dowód / ograniczenie |
| --- | --- |
| C-AC-01 | Autorsko sprawdzone: claimy CL, źródła/wersje/lokalizacje przy REG i każdym zadaniu. |
| C-AC-02 | Autorsko sprawdzone: macierz powyżej, czynności per kryterium. Brak deklaracji wykazania całego EO przez osobę. |
| C-AC-03 | Autorsko sprawdzone: PL/EN i etykiety versus własne parafrazy; delty poniżej. |
| C-AC-04 | Rdzenie, warunki, konkretne EX/CE i osie CMP istnieją. R14 niewymuszone. |
| C-AC-05 | Nowe faktyczne stemy, klucze i każde rationale istnieją; nie wymuszono A/P/K w każdym T. |
| C-AC-06 | Wektory każdego itemu przeliczone na dokładnych ułamkach; arytmetyka nie jest review merytorycznym. |
| C-AC-07 | Relacje decyzja–R08–rationale–R09–reguła–R15–źródło instancjonowane w Content. |
| C-AC-08 | Neutralna korekta i rzeczywisty FU per kryterium; brak twierdzeń o diagnozie osoby; wyjście i limit pętli jawne. |
| C-AC-09 | Częściowo: pełni kandydaci D, konserwatywne rodziny i 3 pary na kryterium; odrębne review rodzin/eligibility pending. |
| C-AC-10 | Rubryki otwarte, warunki pełnej/częściowej/pustej/granicznej odpowiedzi i metoda oceny jawne. |
| C-AC-11 | Zakres kontaktu per kryterium, item/rodzina, dwa zegary i ekspozycja recenzencka opisane. |
| C-AC-12 | **Niespełnione w części odrębnego review.** Prawa obecnego review opisane; dalszy kanał publikacji nierozstrzygnięty. |
| C-AC-13 | Treści tekstowe z pełną tezą wiersza; zasady widoczności i powrotu określone. Realna interakcja do G3. |
| C-AC-14 | Inwentarz, delty, wersje, luki i handoff przygotowane. Brak pełnego FL, mocku i chronionej puli dla czytelnika. |


## Ślad FR / AC / UC

| Istniejące odniesienia | Wkład treści / granica |
| --- | --- |
| FR/AC-001–006; UC-01–03 | Karta, kryteria, materiały i retrieval; nie test orientacji/interfejsu. |
| FR/AC-007–012; UC-03/04/11 | Faktyczne formaty i rationale; nieobecny format w T nie jest brakującym obowiązkiem. |
| FR/AC-013–017; UC-05/06/07/14 | Korekty, CMP, FU, R26 kontrakt; brak realnej nawigacji ani diagnoz. |
| FR/AC-018–024; UC-15/16/18 | Rodziny/ujawnienie/czasy i ostrożne wnioski. Bez mastery, p(zdania) i danych osób. |
| FR/AC-025–030; UC-08/09/11/17 | Brak zatwierdzonego K6 Sprawdzenia lub pełnego mocku; instrukcje przyszłego użycia, scoring i opcjonalna flaga zachowane. |
| FR/AC-031–038; UC-14/16/17/18 | Terminy, luki, manifest, rewizje i reprezentacja. Brak testu wyszukiwarki/WCAG produktu. |


## Delty rejestrów, realne napięcia i korekty

Stan przed: C-A dostarczał część zasady kontekstu i jedno wykonanie L3 do review. Stan po: dziewięć zakresów PR01–09, każde z własną treścią, B/F/D i RP; kontekst rozszerzony o założenia, zmiany i real-world requirements bez redefinicji KRY-A01. EO2.2.2 ma opracowany autorsko deklarowany zakres dziewięciu zasad, lecz pełność formalnie oczekuje niezależnego audytu. Klucze C-A, jego ID i rodziny zachowane. Nowe FAM-T07 porównać z C-A, B03 i T03/T06; żadna rodzina nie została tu uznana za niezależną rezerwę.

C01: dopisać faktyczny odczyt wskazanych sekcji EU1/EU2 i Glossary; nie zmieniać ID C-S01–07. C02: nowe kontrolowane terminy z tej jednostki, bez nadpisania T-01–13; nowe nazwy otrzymują przestrzeń TERM-T07. Rodziny: dodać wymienione FAM i pary R21, z zachowaniem pending. START i B pozostają bez zmian.

Nie udokumentowano tutaj fikcyjnej historii wad ani prób osób. Ślad rzeczywistych korekt wydania jest w manifeście Z1. Źródło/klucz/rodzina zmienione po tym wydaniu wymagają oceny wszystkich zależnych REG/CMP/REM/B/F/D/RP, rationale i interpretacji historycznych. Danych uczniów obecnie brak, więc nie ma wyników do przeliczenia.


## Luki, dopuszczenia i konkretny następny krok do G2

| Luka | Wpływ / następna czynność |
| --- | --- |
| LUKA-02 / C-AC-12 | Odrębny reviewer rozwiązuje stemy bez [R], potem weryfikuje źródła, wszystkie klucze, rationale, rubryki, PL/EN, relacje i prawa. Zapisać osobę/kompetencje/datę/rewizję/zakres/uwagi/decyzję. |
| LUKA-05 / K5 | Rodziny konserwatywne, brak potwierdzonej nowej niezależnej rodziny per kryterium; kandydaci D istnieją. Reviewer porównuje B–F, B–D, F–D oraz bliskie C/inne T. |
| LUKA-07 / eligibility | Brak historii osoby. Pełny plik ujawniony czytelnikowi; nie można nazwać dla niego tych D nową rezerwą. |
| LUKA-08 / kanał | Wewnętrzny review określony; publiczny/komercyjny kanał i konkretne prawa wymagają rozstrzygnięcia przed publikacją. |
| LUKA-11 / K6 | Nie powstała zatwierdzona forma testowa; brak kompletnego FL i pełnego mocku. Nie składać wszystkich B w test bez review przecieków. |
| Empiria / G3 | Brak prób uczniów, trudności i retencji. G3 to osobny walkthrough po G2, z jawnym protokołem; symulacja nie dowodzi retencji. |

**Wniosek:** authoring tego T jest ukończony do review. Nie nadano zgody U-READ/U-GUIDED/U-INDEPENDENT/U-REMEDIAL/U-REVISION/U-RESERVED/U-TOPIC/U-MOCK. Po rozliczeniu odrębnego review właściciel może ocenić G2 dla określonej rewizji i użycia; G3 pozostaje osobno. R06 przyjęło review AI wyłącznie dla B, nie dla C/Z1.

Historia: v0.1, pierwsza autorska kontrola i handoff. Oryginalnych Sources nie zmieniono.

## Kontrola reuse C-A i ocena bliskości

| Zachowany obiekt | Rzeczywisty stan |
| --- | --- |
| C-A-B01/r1 | Źródłowe brzmienie skopiowane bez zmian; zakres/poziom i brak review G2 zachowane. |
| C-A-F01/r1 | Źródłowe brzmienie skopiowane bez zmian; zakres/poziom i brak review G2 zachowane. |
| C-A-D01/r1 | Źródłowe brzmienie skopiowane bez zmian; zakres/poziom i brak review G2 zachowane. |
| C-A-R01/r1 | Źródłowe brzmienie skopiowane bez zmian; zakres/poziom i brak review G2 zachowane. |
| C-A-S01/r1 | Źródłowe brzmienie skopiowane bez zmian; zakres/poziom i brak review G2 zachowane. |
| C-A-L301/r1 | Źródłowe brzmienie skopiowane bez zmian; zakres/poziom i brak review G2 zachowane. |

| Item A reuse | w/klucz | Trafna | Błędna | Pusta | Nadmiar |
| --- | --- | --- | --- | --- | --- |
| C-A-B01 | 1/d | d → 1 | a → 0 | ∅ → 0 | a,d → 0 |
| C-A-F01 | 1/a | a → 1 | b → 0 | ∅ → 0 | a,b → 0 |
| C-A-D01 | 1/c | c → 1 | a → 0 | ∅ → 0 | a,c → 0 |

Dodatkowy inwentarz reuse: 3 zamknięte A, 12 opcji/rationale, 2 otwarte retrieval/sonda oraz 1 otwarte wykonanie L3 z 6 wymiarami rubryki. Wektory A: 12 przypadków syntetycznych. L3 nie wchodzi do właścicielskiego zakresu Z1; pozostaje identyfikowalnym wkładem T23, bez nowej oceny.

| ID relacji R21 / para r1 | Rzeczywista bliskość i granica |
| --- | --- |
| REL-X-T07-1: Z1-T07-04-B01 ↔ C-A-B01 | Oba odróżniają scope od istotności; nowy K dodaje wewnętrzny moduł i mapowanie skanu. Różnica nie odświeża automatycznie rdzenia KRY-A01. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |
| REL-X-T07-2: Z1-T07-04-F01 ↔ C-A-F01 | Wpływ ręcznej procedury jest wspólny; nowy item wymaga wyjaśnienia założeń realnego dostępu. Część zakresu bliska. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |
| REL-X-T07-3: Z1-T07-04-D01 ↔ C-A-D01 | Fizyczny wpływ otoczenia wspólny; nowy przypadek obejmuje wiarygodność sygnału i założenia, C-A fizyczną obsługę w rękawicach. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |
| REL-X-T07-4: Z1-T07-04-D01 ↔ C-A-L301 | Wspólne granice/scope; nowy item L2 wyjaśnia zasadę, C-A-L301 wymaga samodzielnego podziału L3. Nie zamieniać pomiarów. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |
| REL-X-T07-5: Z1-T07-01-B01 ↔ Z1-T03-01-B01 | Wartość pracy RE łączy oba; T07 ocenia saldo kosztu/nakładu, T03 wskazane korzyści. Wspólne źródło nie dowodzi równoważności rodzin. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |
| REL-X-T07-6: Z1-T07-03-B01 ↔ Z1-T06-02-D01 | T06 ujawnia explicit/implicit i możliwość pozorności, więc stanowi kontakt z regułą T07/PR03. Nie ujawnia jednak całego scenariusza gotowości. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |
| REL-X-T07-7: Z1-T07-05-F01 ↔ Z1-T02-01-F01 | Oba rozdzielają propozycję rozwiązania od concern, ale T02 klasyfikuje typy, T07 trójkę. Nie przenosić wyniku między kryteriami. Stan: autorskie porównanie, odrębne review pending; bez gwarancji niezależności. |

Źródło proweniencji: C03-03 oraz treść obu wskazanych itemów. Funkcja: ochrona interpretacji nowości i oddzielenie kryteriów. Nie jest to R25 ani dowód empirycznej równoważności. Dodatkowe bliskie historyczne ilustracje: FAM-ILL-A01/P01 z B03 i D12; wspólny kontrast zewnętrzne/istotne lub concern zachowuje historię znającego je czytelnika.
