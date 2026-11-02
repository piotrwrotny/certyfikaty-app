"""Nowe pytania do istniejących zakresów; wszystkie rationale są lokalne."""
EXT = {}

def put(code, role, kind, stem, key, rows, change, weight=None):
    EXT[(code, role)] = dict(type=kind, role=role, stem=stem, key=key,
        options=[(r[0],r[1]) for r in rows], rule_indices=[r[2] for r in rows],
        w=weight or (1 if kind=='A' else 2), change=change,
        **({'k':len(key)} if kind=='P' else {}))

put('T01-01','F','A',
'Właściciel pracowni potrzebował widzieć nieopłacone zamówienia już przed rozmową. Analityk dopiero po rozmowie zapisał tę potrzebę w rejestrze. Który opis obu zdarzeń jest trafny?', 'b', [
 ('Przed wpisem nie istniało wymaganie w żadnym znaczeniu.','Potrzeba istniała wcześniej → requirement obejmuje potrzebę niezależnie od reprezentacji → wykluczenie wszystkich znaczeń jest błędne.',2),
 ('Potrzeba istniała wcześniej, a wpis jest jej udokumentowaną reprezentacją.','Podano wcześniejszą potrzebę i późniejszy zapis → to odrębne znaczenia requirement → opis jest trafny.',1),
 ('Wpis jest zawsze zaimplementowaną funkcją systemu.','Podano zapis analityka, nie wykonanie kodu → reprezentacja oczekiwania nie jest z definicji implementacją → odpowiedź nie wynika z danych.',1),
 ('Potrzeba i wpis muszą oznaczać dwa różne rodzaje quality requirement.','Opis nie rozstrzyga rodzaju oczekiwania → trzy znaczenia nie są trójpodziałem rodzajów → taka klasyfikacja jest nieuzasadniona.',3),
], 'Dialog o potrzebie i późniejszym zapisie zastępuje ogólne tezy B; wybór nie zastępuje otwartego uzasadnienia źródłowego F.')

put('T01-01','G','P',
'Operator od dawna potrzebuje rozpoznać właściciela przesyłki. Zespół opisuje oczekiwaną zdolność systemu, po czym utrwala ją w punkcie REQ-9. Które interpretacje są uzasadnione?', ['a','d'], [
 ('Wcześniejsza potrzeba operatora może być requirement.','Potrzebę wskazano przed dokumentowaniem → pierwszy sens requirement obejmuje tę potrzebę → interpretacja jest poprawna.',2),
 ('Dopiero numer REQ-9 sprawił, że potrzeba mogła istnieć.','Numer nadano późniejszemu zapisowi → potrzeba nie zależy od identyfikatora reprezentacji → twierdzenie jest błędne.',2),
 ('Trzy opisane momenty wyznaczają kolejno functional, quality i constraint.','Momenty dotyczą potrzeby, zdolności i zapisu → znaczenia terminu nie są rodzajami wymagań → przyporządkowanie jest błędne.',3),
 ('Punkt REQ-9 jest udokumentowaną reprezentacją oczekiwanej zdolności.','Podano utrwalenie opisu zdolności → trzeci sens requirement dotyczy takiej reprezentacji → interpretacja jest poprawna.',1),
], 'Trzy referenty w sekwencji i dwa poprawne wnioski; odróżnia istnienie potrzeby od tożsamości dokumentu.')

put('T01-02','G','A',
'W harmonogramie zapisano: „Specyfikowanie parametrów potrwa dwa dni”. W repozytorium znajduje się też opis parametrów już produkowanego czujnika. Która interpretacja jest zgodna ze znaczeniem specification?', 'd', [
 ('Oba sformułowania muszą oznaczać wyłącznie przyszłe wymagania.','Drugi opis dotyczy wykonanego urządzenia → specification dopuszcza cechy zaimplementowane → ograniczenie do przyszłych wymagań jest błędne.',3),
 ('Harmonogram dowodzi, że opis urządzenia nie może być specyfikacją.','Podano dwa różne użycia → proces jednego opisu nie wyklucza rezultatu drugiego → taki wniosek nie wynika.',1),
 ('Każdy gotowy opis jest requirements specification niezależnie od przedmiotu.','Parametry wykonanej wersji nie są same przez się zbiorem wymagań → przedmiot opisu ma znaczenie → uogólnienie jest niepoprawne.',2),
 ('Pierwsze użycie nazywa proces, a drugie może nazywać rezultat opisujący cechy wykonane.','Czas dotyczy czynności, parametry dotyczą obecnego urządzenia → specification ma oba sensy i dopuszcza właściwości wykonane → opis jest trafny.',1),
], 'Łączy rozpoznanie procesu z drugim artefaktem o cechach wykonanych; nie powtarza definicji B.')

put('T01-02','D','K',
'Plik A jest uporządkowanym zbiorem uzgodnionych wymagań dla następnej wersji i spełnia ustalone kryteria. Plik B opisuje zmierzone parametry obecnie wykonanego urządzenia. Oceń interpretacje.', [True,False,True], [
 ('Plik A jest requirements specification jako rezultat pracy.','A grupuje wymagania i spełnia kryteria → tak określono rezultat requirements specification → Prawda.',2),
 ('Plik B nie może być specification, ponieważ opisuje stan już zaimplementowany.','B dotyczy wykonanych cech → specification obejmuje także takie opisy → Fałsz.',3),
 ('Nazwa rozszerzenia pliku sama nie rozstrzyga, czy jego treść jest requirements specification.','Dane odróżniają przedmiot i strukturę opisów → definicja odnosi się do właściwości zbioru, nie rozszerzenia → Prawda.',2),
], 'Dwa artefakty i kontrast właściwości wymaganych/wykonanych; zachowano źródłowe otwarte D pod jego ID.')

put('T01-03','G','K',
'Oceń konsekwencje następujących danych: urząd używa wyników systemu do podjęcia decyzji dotyczącej firmy, firma nie ma konta w systemie, a operator korzysta z jego funkcji.', [True,False,True], [
 ('Firma może być interesariuszem, ponieważ wynik systemu na nią wpływa.','Decyzja dotyczy firmy → oddziaływanie systemu wystarcza w definicji stakeholder → Prawda.',1),
 ('Brak konta wyklucza firmę ze zbioru interesariuszy.','Podano oddziaływanie mimo braku konta → konto nie jest warunkiem definicji → Fałsz.',1),
 ('Operator korzystający z funkcji jest użytkownikiem i zarazem interesariuszem.','Operator używa funkcji → user jest stakeholderem → Prawda.',2),
], 'Organizacja podlegająca skutkom i operator korzystający z funkcji; odmienna konfiguracja od pracownika w F.')

put('T01-04','G','A',
'Laboratorium obejmuje usługę kalibracji: program przyjmuje zlecenie, urządzenie wykonuje pomiar, a pracownik zatwierdza wynik. Elementy współdziałają w celu dostarczenia wyniku kalibracji. Która ocena użycia terminu system jest trafna?', 'c', [
 ('Termin jest wykluczony, ponieważ w całości uczestniczy człowiek.','Pracownik współdziała z programem i sprzętem → system może mieć skład socjotechniczny → wykluczenie jest błędne.',4),
 ('Tylko program może być systemem, a urządzenie nigdy.','Opis obejmuje współdziałające elementy i cel → system nie jest ograniczony do samego kodu → odpowiedź nadmiernie zawęża pojęcie.',2),
 ('Całość może być systemem, ponieważ elementy współdziałają w określonym celu.','Dane wskazują wyodrębnioną całość i skoordynowane działania → spełniają sens inżynierski systemu → odpowiedź jest poprawna.',1),
 ('Sama wspólna lokalizacja wystarczałaby także bez celu i współdziałania.','Podano istotny cel i współdziałanie → definicja wymaga ich, a nie tylko miejsca → uogólnienie jest błędne.',1),
], 'Celowo współdziałająca usługa z programem, urządzeniem i człowiekiem zamiast abstrakcyjnej definicji.')

put('T01-04','D','A',
'Rozpatruje się wyodrębnioną usługę archiwizacji obejmującą pracowników, szafy i rejestr elektroniczny. Jej elementy współdziałają, aby przechować i odnaleźć dokumenty. Który argument uzasadnia traktowanie tej całości jako systemu?', 'a', [
 ('Elementy tworzą spójną całość i współdziałają w osiąganiu wskazanego celu.','Opis zawiera cel archiwizacji i skoordynowane elementy → to warunek inżynierskiego pojęcia system → argument jest trafny.',1),
 ('Każda grupa przedmiotów jest systemem także bez związku między nimi.','W przykładzie związek i cel są jawne → definicja nie obejmuje automatycznie przypadkowych grup → argument jest zbyt szeroki.',1),
 ('Pracowników należy uznać za fragmenty kodu, aby zachować nazwę system.','System CPRE może obejmować ludzi i organizację → nie trzeba utożsamiać ich z software → argument jest błędny.',4),
 ('Brak nowego programu wyklucza jakiekolwiek wymagania wobec usługi.','Przedmiotem są potrzeby wobec usługi → szeroki zakres systemów nie wymaga nowej aplikacji → wykluczenie nie wynika.',2),
], 'Wybór warunku definicyjnego w innej mieszanej usłudze; otwarte D pozostaje osobnym wykonaniem.')

put('T01-05','G','K',
'Zespół zapisuje potrzeby, sprawdza ich znaczenie z zainteresowanymi osobami i zarządza późniejszymi zmianami. Oceń interpretacje celu tej pracy.', [True,False,True], [
 ('Praca może ograniczać ryzyko dostarczenia systemu nieodpowiadającego potrzebom.','Podano pracę nad potrzebami i zmianami → cel definicji RE obejmuje ograniczenie tego ryzyka → Prawda.',1),
 ('Sukces tej pracy z definicji mierzy się wyłącznie liczbą stron.','Opis dotyczy rozumienia i zarządzania → celem RE są potrzeby, nie objętość → Fałsz.',2),
 ('Zarządzanie późniejszymi zmianami nie jest z definicji wyłączone z RE.','Podano zarządzanie wymaganiami po ustaleniach → definicja obejmuje zarządzanie, a nie tylko pierwszy zapis → Prawda.',1),
], 'Ocena ciągłej pracy i jej celu w krótkim opisie, zamiast wyboru dwóch składników definicji.')

put('T01-05','D','A',
'Pracownik przepisuje wszystkie słowa klienta bez sprawdzania znaczenia i twierdzi, że jest to pełny opis RE. Które uzupełnienie najtrafniej oddaje pominięte elementy?', 'b', [
 ('Wystarczy użyć droższego edytora, aby zapewnić realizację potrzeb.','Brakuje pracy nad znaczeniem → narzędzie nie zastępuje celu i systematycznego podejścia → uzupełnienie jest nietrafne.',3),
 ('Potrzebne są systematyczne specyfikowanie i zarządzanie oraz cel rozumienia potrzeb i ograniczania ryzyka ich niespełnienia.','Opis ograniczono do przepisywania → definicja RE obejmuje wskazane działania i cel → to właściwe uzupełnienie.',1),
 ('Należy zagwarantować, że wymagania nigdy się nie zmienią.','W danych nie ma podstaw do niezmienności → definicja ogranicza ryzyko, a nie zabrania ewolucji → to niewłaściwe uzupełnienie.',1),
 ('Należy zakończyć kontakt z interesariuszami natychmiast po zapisie.','Cel dotyczy rozumienia ich potrzeb → zerwanie kontaktu nie uzupełnia brakującego rozumienia → odpowiedź nie wynika.',2),
], 'Niepełny zawodowy opis wymaga wskazania brakujących działań i celu; oryginalny otwarty wariant zachowany.')

put('T02-01','F','K',
'System po anulowaniu zlecenia ma wysłać operatorowi komunikat. Przy zadanym obciążeniu 99% komunikatów ma dotrzeć w 3 s. Do wysyłki dodatkowo narzucono komponent Omega, mimo innych rozwiązań spełniających oba oczekiwania. Oceń klasyfikacje.', [True,True,False,True], [
 ('Wysłanie komunikatu jest wymaganiem funkcjonalnym.','Podano zachowanie po anulowaniu → wymagany wynik/interakcja to functional requirement → Prawda.',2),
 ('Warunek czasu dotarcia komunikatów jest wymaganiem jakościowym.','Podano czas dla odsetka przy obciążeniu → dotyczy wydajności → Prawda.',3),
 ('Całe zdanie musi mieć jeden rodzaj, ponieważ użyto jednego słowa komunikat.','Opis łączy zachowanie, cechę i narzucony komponent → rodzaj wynika z przedmiotu każdego oczekiwania → Fałsz.',1),
 ('Dodatkowy nakaz Omega jest constraint.','Alternatywy spełniają funkcję i jakość → nakaz wykracza poza ich konieczne spełnienie → Prawda.',4),
], 'Złożony przypadek jest rozdzielany na oczekiwania; zamknięta kontrola nie zastępuje swobodnego powodu w źródłowym F.')

put('T02-01','G','P',
'Terminal potwierdza przyjęcie produktu i zapisuje identyfikator kontrolera. W uzgodnionym teście ma zużywać najwyżej 12 W. Organizacja nakazuje platformę Atlas-X mimo alternatyw spełniających wszystkie wymagane funkcje i jakość. Które klasyfikacje z powodem są poprawne?', ['b','d'], [
 ('Zapis identyfikatora jest jakościowy, bo pomaga w rozliczalności.','Podano czynność zapisu → funkcjonalne zachowanie może wspierać bezpieczeństwo → cel nie uzasadnia etykiety quality.',5),
 ('Limit 12 W jest jakościowy, bo określa zużycie zasobu w podanych warunkach.','Oczekiwanie dotyczy cechy zużycia energii → quality requirement → para jest poprawna.',3),
 ('Samo słowo platforma zawsze wystarcza do rozpoznania constraint w każdym zdaniu.','W zadaniu podano dodatkowy nakaz i alternatywy → constraint wynika z zawężenia ponad funkcje i jakość, nie samego słowa → uogólnienie jest błędne.',4),
 ('Nakaz Atlas-X jest constraint, bo dodatkowo eliminuje odpowiednie alternatywy.','Alternatywy są odpowiednie funkcjonalnie i jakościowo → dodatkowy wybór ogranicza przestrzeń → para jest poprawna.',4),
], 'Inna cecha zasobowa i funkcja rozliczalności; oceniane są zarazem typ i podany argument.')

put('T02-02','G','A',
'Wymaganie nakazuje konkretną bazę danych mimo istnienia alternatyw spełniających ustalone funkcje i jakość. Recenzent uznał zapis za jednoznaczny. Który wniosek o tych ocenach jest trafny?', 'c', [
 ('Jednoznaczność zmienia dodatkowy nakaz w quality requirement.','Ocena jasności dotyczy redakcji → nie zmienia przedmiotu oczekiwania → wniosek jest błędny.',3),
 ('Nakaz nie może należeć do NFR, ponieważ nie opisuje wydajności.','Podano dodatkowe ograniczenie rozwiązania → NFR obejmuje również constraint → wykluczenie jest błędne.',1),
 ('Nakaz może być constraint i należeć do NFR, a jednoznaczność jest osobną oceną zapisu.','Alternatywy wskazują dodatkowe ograniczenie, a recenzja jasność → to odrębne osie; NFR obejmuje constraint → wniosek jest trafny.',1),
 ('Każde NFR musi dotyczyć wyłącznie szybkości.','Zakres NFR obejmuje jakość i constraint → jedna cecha wydajności nie wyczerpuje go → odpowiedź jest zbyt wąska.',1),
], 'Łączy dodatkowy wybór realizacji z oceną jego zapisu; nie wystarcza pamięć samej definicji NFR.')

put('T02-02','D','K',
'Przyjęto znaczenie NFR z Glossary IREB 2.2.0. Zapis A nakazuje generowanie potwierdzenia i został oceniony jako jednoznaczny. Zapis B dodatkowo narzuca platformę mimo odpowiednich alternatyw. Oceń wnioski.', [False,True,True], [
 ('Jednoznaczność A wystarcza, aby zmienić jego rodzaj z functional na quality.','A opisuje generowanie → jakość redakcji nie zmienia oczekiwanego zachowania → Fałsz.',3),
 ('B jako constraint należy do NFR w tym profilu.','B dodatkowo narzuca platformę → constraint jest członem definicji NFR → Prawda.',1),
 ('NFR jest szersze niż sam zbiór quality requirements.','Profil zawiera także constraint → quality nie wyczerpuje NFR → Prawda.',1),
], 'Dwa błędne argumenty ze źródłowego otwartego D stają się osobnym sprawdzeniem zamkniętym z nowym ID.')

put('T03-01','F','A',
'Zespół zamierzał automatyzować druk etykiet. Rozmowa o potrzebach wykazała, że opóźnienia wynikają głównie z brakujących danych zamówienia. Nie powstał jeszcze nowy kod. Który argument opisuje wartość tej pracy?', 'd', [
 ('Bez kodu nie mogło poprawić się rozumienie problemu.','Rozmowa ujawniła przyczynę inną niż zakładana → RE może poprawiać rozumienie przed implementacją → argument jest błędny.',4),
 ('Ustalenie gwarantuje już brak wszystkich przyszłych defektów.','Ujawniono problem danych → wiedza o potrzebie nie gwarantuje poprawności każdego wykonania → argument wykracza poza korzyść.',3),
 ('Ustalenie samo zapewnia dokładny budżet całego rozwiązania.','Dane dotyczą przyczyny opóźnienia → wymagania są podstawą estymacji, nie gwarancją kosztu → argument jest nieuprawniony.',2),
 ('Lepsze rozumienie problemu zmniejsza ryzyko budowania automatyzacji, która go nie rozwiąże.','Ujawniono brak danych zamiast problemu druku → rozumienie problemu ogranicza ryzyko niewłaściwego systemu → argument jest trafny.',4),
], 'Zmiana z korzyści testowania i estymacji w B na uniknięcie niewłaściwego problemu; otwarte F pozostaje.')

put('T03-01','G','K',
'Przed zbudowaniem obsługi zwrotów uzgodniono wyjątek zwrotu części zamówienia. Zespół poznaje potrzebne warianty i oczekiwany wynik. Oceń konsekwencje tego ustalenia.', [True,True,False,True], [
 ('Można uwzględnić dodatkowe warianty w szacowaniu nakładu.','Uzgodniono zakres wariantów → wymagania dostarczają podstawy estymacji → Prawda.',2),
 ('Można przygotować testy z oczekiwanym wynikiem zwrotu częściowego.','Opisano oczekiwany rezultat → wymagania są podstawą testowania → Prawda.',3),
 ('Ustalenie uniemożliwia popełnienie błędu podczas implementacji.','Treść określa oczekiwania, nie wykonanie kodu → podstawa testu nie jest gwarancją bezbłędności → Fałsz.',3),
 ('Ustalenie może ograniczać ryzyko błędnego zachowania wobec potrzeby częściowego zwrotu.','Wyjątek został rozpoznany przed realizacją → adekwatne RE może zmniejszać ryzyko niewłaściwego systemu → Prawda.',1),
], 'Łączna ocena warunkowych korzyści i granicy gwarancji w nowej funkcji biznesowej.')

put('T03-01','D','P',
'Dla nowej usługi ustalono oczekiwania operatora, wyjątki zachowania i wyniki mające być widoczne po ich obsłudze. Które argumenty poprawnie wiążą RE z korzyściami?', ['a','c','e'], [
 ('Znajomość wyjątków poprawia rozumienie problemu i ogranicza ryzyko pominięcia istotnej potrzeby.','Ustalono wyjątki i oczekiwania operatora → rozumienie i ograniczenie ryzyka należą do korzyści RE → argument jest trafny.',4),
 ('Uzgodnienie potrzeb zapewnia, że każda przyszła estymacja będzie dokładna.','Uzgodniono zakres, nie przyszłą pracochłonność → podstawa estymacji nie jest gwarancją → argument jest błędny.',2),
 ('Znany zakres wariantów daje podstawę szacowania pracy i kosztu.','Dane opisują potrzebne zachowania → określony zakres wspiera estymację → argument jest trafny.',2),
 ('Po takim uzgodnieniu nie ma już potrzeby testowania.','Ustalono oczekiwane wyniki → wymagania są podstawą testu, a nie powodem jego zaniechania → argument jest błędny.',3),
 ('Oczekiwane wyniki pozwalają wyznaczyć punkt odniesienia dla testów.','Podano oczekiwany rezultat → można porównać z nim wykonanie → argument jest trafny.',3),
], 'Łączy cztery korzyści w trzech argumentach i dwie fałszywe gwarancje; nie zastępuje odtworzenia w otwartym D.',3)

put('T03-02','G','A',
'W opisie systemu w ogóle nie uwzględniono wymaganego wyjątku obsługi. Nie podano, jak prowadzono rozmowy ani jakie szkolenia odbył autor. Który wniosek jest uzasadniony?', 'b', [
 ('Na pewno jedyną przyczyną jest brak szkolenia autora.','Nie podano danych o przygotowaniu → lista możliwych przyczyn nie wskazuje jednej pewnej → diagnoza jest nieuprawniona.',3),
 ('Opis ilustruje brakujące wymaganie, ale nie ustala jednej konkretnej przyczyny pominięcia.','Wyjątek pominięto, a danych o przyczynie brak → można nazwać symptom bez pewnej diagnozy → wniosek jest poprawny.',1),
 ('Każde brakujące wymaganie dowodzi celowego pominięcia przez programistę.','Podano tylko brak wyjątku → symptom nie dowodzi zamiaru ani konkretnego sprawcy → wniosek jest nieuzasadniony.',3),
 ('Brak wyjątku nie może należeć do symptomów wymienionych w Syllabus.','Wymagane zachowanie nie zostało uwzględnione → to brakujące wymaganie → zaprzeczenie jest błędne.',1),
], 'Przypadek z jawnie ograniczonymi danymi zamiast odtwarzania obu list; nie diagnozuje osoby.')

put('T03-02','D','P',
'Po przeglądzie znaleziono brakujące, niejasne i nieprawidłowe wymagania. Które pozycje należą do wskazanych w Syllabus możliwych przyczyn takich niedostatków?', ['a','c','d','e'], [
 ('Pośpieszne przejście od razu do budowania systemu.','Wskazano mechanizm pośpiechu → znajduje się na liście przyczyn niedostatków RE → pozycja jest poprawna.',2),
 ('Samo stwierdzenie, że wymaganie jest niejasne.','Pozycja opisuje stan wymagania → niejasność jest symptomem, nie wskazaną tu przyczyną → nie należy do klucza.',1),
 ('Problemy komunikacyjne między zaangażowanymi stronami.','Pozycja dotyczy komunikacji → Syllabus wymienia ten mechanizm wśród przyczyn → należy do klucza.',2),
 ('Założenie, że wymagania są oczywiste.','Podano założenie zastępujące wyjaśnianie → jest wymienioną przyczyną niedostatków → należy do klucza.',2),
 ('Niewystarczająca edukacja i umiejętności RE.','Pozycja dotyczy przygotowania do RE → należy do źródłowego wykazu przyczyn → należy do klucza.',2),
], 'Rozpoznanie pełnej listy czterech przyczyn z kontrastem objawu; zachowano osobne swobodne odtworzenie D.',3)

put('T02-C-P','G','K',
'Urządzenie po przyjęciu zlecenia drukuje dwie etykiety. W zdefiniowanym trybie ma zużywać najwyżej 6 W. Nakazano sterownik Sigma mimo innych sterowników spełniających te same wymagania funkcjonalne i jakościowe. Oceń klasyfikacje z uzasadnieniem.', [True,False,True,False], [
 ('Dwie etykiety określają wynik funkcji, więc oczekiwanie jest funkcjonalne.','Liczba dotyczy wytwarzanego rezultatu → functional requirement obejmuje taki wynik → Prawda.',2),
 ('Limit zużycia energii jest constraint tylko dlatego, że zapisano liczbę.','Limit określa cechę pracy w trybie → quality może zawężać realizacje bez dodatkowego narzucenia rozwiązania → Fałsz.',3),
 ('Nakaz Sigma jest constraint, ponieważ eliminuje dodatkowo odpowiednie alternatywy.','Podano odpowiednie alternatywy i nakaz sterownika → dodatkowe zawężenie spełnia definicję constraint → Prawda.',4),
 ('Każde wymaganie wspierające bezpieczeństwo musi być jakościowe.','Cel może być wspierany zachowaniem → security bywa wyrażone funkcjonalnie lub jakościowo → Fałsz.',5),
], 'Nowa druga kontrola legacy KRY-P01: od P z parami typ/powód do oceny kontrastujących tez K.')

put('T04-01','G','A',
'Organizacja chce uzgodnić wymagania dla procedury przyjęcia zwrotu, wykonywanej przez ludzi z użyciem formularza i istniejącego skanera. Nie planuje nowego oprogramowania. Która ocena zakresu RE jest trafna?', 'b', [
 ('RE jest wykluczone, dopóki nie zaplanowano nowej aplikacji.','Przedmiotem jest procedura z określonym celem → system CPRE nie musi być nowym software → wykluczenie jest błędne.',1),
 ('RE może dotyczyć tej procedury, ponieważ wymagania mogą odnosić się do różnych rodzajów systemów.','Wskazano celową procedurę z ludźmi i urządzeniem → szeroki zakres RE obejmuje taki przedmiot → ocena jest poprawna.',1),
 ('Obecność skanera oznacza, że wolno rozpatrywać wyłącznie jego kod.','Opis dotyczy szerszej procedury → składnik techniczny nie usuwa elementów organizacyjnych → zawężenie nie wynika.',2),
 ('Wszystkie wymagania procedury muszą być z tego powodu constraint.','Pytanie dotyczy przedmiotu RE → skład systemu nie wyznacza rodzaju każdego oczekiwania → odpowiedź myli osie.',1),
], 'Organizacyjna procedura bez nowego programu zastępuje ogólne stwierdzenia o zastosowaniach.')

put('T04-02','F','P',
'W notatce rozróżniono cel organizacji, potrzebę osoby korzystającej z systemu oraz właściwość domeny, która ma zachodzić. Które przyporządkowania nazw są poprawne?', ['a','c','e'], [
 ('Cel organizacji można opisać jako business requirement.','Przedmiotem jest cel organizacji → to znaczenie business requirement → przyporządkowanie jest trafne.',2),
 ('Każda potrzeba użytkownika jest wyłącznie constraint i nie jest potrzebą interesariusza.','Podano perspektywę korzystającej osoby → user należy do stakeholder, a perspektywa nie narzuca constraint → odpowiedź jest błędna.',4),
 ('Potrzeba osoby korzystającej z systemu może być user requirement.','Opis dotyczy użytkownika → nazwa user requirement wyraża taką perspektywę → przyporządkowanie jest trafne.',4),
 ('Właściwość domeny musi oznaczać wewnętrzny algorytm programu.','Opis dotyczy warunku domeny → domain requirement nie jest z definicji algorytmem → zawężenie jest błędne.',3),
 ('Właściwość domeny mająca zachodzić może być domain requirement.','Wskazano wymagany stan domeny → odpowiada znaczeniu domain requirement → przyporządkowanie jest trafne.',3),
], 'Wybór trzech uzasadnionych przyporządkowań; source F nadal sprawdza samodzielne odtworzenie pięciu nazw.',3)

put('T04-02','G','K',
'Potrzebę krótszego czasu obsługi zgłosiła osoba korzystająca z funkcji systemu. Operator utrzymania zgłasza osobną potrzebę odtworzenia działania, choć nie obsługuje tej funkcji użytkowej. Oceń wnioski.', [True,False,True], [
 ('Pierwsze oczekiwanie może być user requirement i zarazem stakeholder requirement.','Osoba używa funkcji → user requirements są podzbiorem stakeholder requirements → Prawda.',4),
 ('Nazwa user requirement wyklucza rodzaj quality requirement dotyczący czasu.','Etykieta nazywa perspektywę osoby → nie wyznacza rodzaju concern → Fałsz.',1),
 ('Oczekiwanie operatora może być stakeholder requirement bez uznania go za usera tej funkcji.','Podano istotną potrzebę innej roli → stakeholder jest szerszą perspektywą niż user → Prawda.',4),
], 'Relacja podzbioru i dwie role w jednym opisie; nie wymusza rozłączności perspektyw.')

put('T05-01','G','A',
'Zespół wykonuje wywiady, zapisuje ustalenia, sprawdza ich adekwatność i obsługuje zmiany. Następnie wybiera częstość spotkań i postać artefaktów stosownie do dostępności interesariuszy. Który opis jest trafny?', 'c', [
 ('Wybrana aplikacja automatycznie wykonuje wszystkie cztery zadania RE.','Opis wskazuje czynności zespołu → wsparcie narzędziowe nie zastępuje ich wykonania → odpowiedź jest błędna.',3),
 ('Lista czterech zadań ustanawia jeden obowiązkowy jednorazowy harmonogram.','Dane obejmują wybór organizacji pracy → Syllabus wymaga doboru procesu → uniwersalna sekwencja nie wynika.',3),
 ('Nazwano główne zadania RE i dostosowano sposób ich realizacji do sytuacji.','Wywiady, zapis, sprawdzenie i zmiany odpowiadają zadaniom → ich proces wymaga tailoring → opis jest poprawny.',1),
 ('Analiza i rozwiązywanie konfliktów z definicji nie należą do pozyskiwania.','Pytanie dotyczy wykazu Syllabus → zalicza on te czynności do elicitation → zaprzeczenie jest błędne.',2),
], 'Kontrast zadań i konkretnego doboru praktyk; nie projektuje pełnego procesu L3.')

put('T05-01','D','K',
'Zespół potraktował listę zadań jako nakaz wykonania każdego dokładnie raz. Inna osoba proponuje dopasować proces i wracać do potrzebnych czynności. Oceń argumenty.', [True,False,True], [
 ('Pozyskiwanie, dokumentowanie, walidacja i zarządzanie to główne zadania RE.','Opis odwołuje się do źródłowego wykazu → te cztery nazwy do niego należą → Prawda.',1),
 ('Sama kolejność nazw w wykazie dowodzi zakazu ponownej walidacji.','Wykaz nie jest uniwersalnym harmonogramem → proces dobiera się do sytuacji → Fałsz.',3),
 ('Dobór procesu do sytuacji jest zgodny z wymaganiem tailoring.','Zaproponowano dopasowanie sposobu pracy → §1.4 wymaga odpowiedniego procesu → Prawda.',3),
], 'Ocena błędnej interpretacji listy jako harmonogramu; zachowano otwarte D wymagające własnego wyjaśnienia.')

put('T05-02','G','P',
'Analityczka pozyskuje i dokumentuje wymagania, a deweloper z interesariuszami sprawdza ich znaczenie. Oboje mają pogłębioną wiedzę RE i łączą problem z potencjalnymi rozwiązaniami. Nie istnieje osobny etat Requirements Engineer. Które wnioski są uzasadnione?', ['b','d'], [
 ('Brak tego etatu wyklucza pełnienie roli przez obie osoby.','Obowiązki i wiedza zostały podane → rola nie wymaga nazwy etatu → wniosek jest błędny.',1),
 ('Podział obowiązków może realizować rolę RE przez osoby o innych stanowiskach.','Opis zawiera czynności, wiedzę i most problem–rozwiązania → charakterystyka może być spełniona bez osobnego etatu → wniosek jest trafny.',2),
 ('Sam tytuł analityczka poświadczałby całą kompetencję także bez tych danych.','Dane o czynnościach i wiedzy są istotne → nazwa stanowiska nie zastępuje charakterystyki → wniosek jest nieuprawniony.',2),
 ('Programista nie jest z definicji wyłączony z roli Requirements Engineer.','Podano dewelopera wykonującego część zadań → Syllabus dopuszcza programistów w tej roli → wniosek jest trafny.',3),
], 'Praca rozdzielona między dwie osoby zamiast definicji stanowiska; zakres nie obejmuje certyfikowania kompetencji.')

put('T05-02','D','A',
'W nowym projekcie Product Owner kompetentnie pozyskuje i waliduje wymagania oraz wyjaśnia ich związek z rozwiązywanym problemem. Kierownik uznaje, że bez zmiany nazwy etatu osoba nie może pełnić roli RE. Który argument jest trafny?', 'a', [
 ('Opisane działania i wiedza mogą odpowiadać roli RE, niezależnie od nazwy etatu.','Podano czynności i łączenie problemu z rozwiązaniem → charakterystyka roli dotyczy pracy, nie wyłącznie etykiety → argument jest poprawny.',2),
 ('Zmiana nazwy etatu sama zapewniłaby wszystkie kompetencje.','Nowa nazwa nie dodaje wiedzy ani wykonania → opis roli wymaga rzeczywistych cech → argument jest błędny.',2),
 ('Product Owner jest w Syllabus z definicji wyłączony z roli RE.','Ta funkcja jest dopuszczona w §1.5 → wykluczenie przeczy wykazowi → argument jest błędny.',3),
 ('W roli RE nigdy nie wolno rozważać potencjalnych rozwiązań.','Podano łączenie problemu z rozwiązaniami → jest to część charakterystyki → zakaz jest błędny.',2),
], 'Spór o formalny etat przy jawnej charakterystyce pracy, bez udawania pełnego audytu zawodowego.')

put('T05-03','F','K',
'Oceń przyporządkowania do podstawowego zakresu nauki RE i rozwinięcia z Handbook.', [True,True,False,True], [
 ('Zasady, dokumentowanie i opracowywanie wymagań należą do zakresu nauki.','Te trzy obszary wskazano w §1.6 → stanowią część sześciu obszarów → Prawda.',1),
 ('Procesy, zarządzanie i wsparcie narzędziowe uzupełniają wskazany zakres.','To pozostałe obszary EU5–EU7 → wraz z wcześniejszymi tworzą pełną szóstkę → Prawda.',1),
 ('Biegłość w jednym edytorze wyczerpuje wszystkie sześć obszarów.','Edytor dotyczy fragmentu narzędzi → nie zastępuje pozostałych obszarów → Fałsz.',2),
 ('Słuchanie i moderowanie są przykładami umiejętności interpersonalnych wymienionych w Handbook.','Obie umiejętności występują w §1.6 Handbook → rozpoznanie tej listy jest poprawne → Prawda.',3),
], 'Rozpoznanie pełnej szóstki w dwóch grupach i jawne oddzielenie rozwinięcia Handbook; otwarte F zachowuje recall.')

put('T05-03','G','A',
'Program kursu obejmuje wyłącznie rysowanie diagramów w jednym edytorze. Organizator uważa, że to pełny zakres przygotowania RE. Która ocena jest trafna?', 'd', [
 ('Kurs jest pełny, jeżeli edytor ma wiele funkcji.','Liczba funkcji narzędzia nie pokrywa sześciu obszarów → obsługa programu nie wyczerpuje RE → ocena jest błędna.',2),
 ('Z zakresu RE należy usunąć zarządzanie istniejącymi wymaganiami.','Zarządzanie znajduje się w §1.6 → redukcja kursu nie zmienia wykazu → ocena jest błędna.',1),
 ('Pozostałe obszary zastąpi sam tytuł certyfikatu.','Tytuł nie jest treścią kursu → wymagany zakres obejmuje konkretne obszary → ocena nie wynika.',1),
 ('Brakuje zakresów zasad, opracowywania, procesów i zarządzania, a samo narzędzie nie wyczerpuje także dokumentowania.','Program opisuje tylko diagramy i edytor → §1.6 obejmuje szerszą szóstkę → zarzut niepełności jest uzasadniony.',1),
], 'Ocena niepełnego programu zamiast wybierania trzech pozycji listy.')

put('T05-03','D','P',
'W planie nauki są zasady RE, dokumentowanie w różnych postaciach oraz opracowywanie wymagań. Które trzy obszary uzupełniają pełny wykaz z §1.6 Syllabus?', ['a','c','e'], [
 ('Definiowanie i stosowanie odpowiednich procesów RE.','Brakuje obszaru organizacji pracy → odpowiednie procesy są częścią §1.6 → pozycja należy do klucza.',1),
 ('Obowiązkowa specjalizacja w jednym wskazanym komercyjnym edytorze.','Syllabus mówi o wsparciu narzędziowym jako obszarze → nie wskazuje takiego obowiązkowego produktu → pozycja nie należy do klucza.',2),
 ('Zarządzanie istniejącymi wymaganiami.','Pierwsze trzy obszary nie obejmują tej pracy → zarządzanie jest osobnym obszarem §1.6 → pozycja należy do klucza.',1),
 ('Zastąpienie walidacji samą pamięcią prowadzącego.','Nie opisano żadnego obszaru z wykazu → pamięć nie zastępuje podstawowego zakresu → pozycja nie należy do klucza.',1),
 ('Wykorzystanie wsparcia narzędziowego.','Narzędzia są szóstym obszarem → uzupełniają podane zasady, dokumentowanie i opracowywanie → pozycja należy do klucza.',1),
], 'Dopełnienie pełnej szóstki po innej grupie wejściowej; nie dowodzi samodzielnego odtworzenia bez podpowiedzi.',3)

put('T06-01','B','P',
'Które zestawy zawierają wyłącznie nazwy z dziewięciu zasad RE wymienionych w §2.1 Syllabus?', ['a','c','e'], [
 ('Orientacja na wartość; interesariusze; wspólne zrozumienie.','Trzy nazwy należą do PR01–PR03 → zestaw zawiera wyłącznie pozycje wykazu → należy do klucza.',1),
 ('Kontekst; maksymalizacja dokumentacji; walidacja.','Środkowa pozycja nie występuje w wykazie → cały zestaw nie spełnia warunku wyłącznie nazw zasad → nie należy do klucza.',1),
 ('Kontekst; problem–wymaganie–rozwiązanie; walidacja.','Nazwy odpowiadają PR04–PR06 → zestaw spełnia warunek → należy do klucza.',1),
 ('Ewolucja; innowacja; obowiązkowy zakup narzędzia.','Zakup narzędzia nie jest nazwą dziewiątej zasady → zestaw nie spełnia warunku → nie należy do klucza.',1),
 ('Ewolucja; innowacja; systematyczna i zdyscyplinowana praca.','Nazwy odpowiadają PR07–PR09 → wszystkie są na liście → zestaw należy do klucza.',1),
], 'Nowa próba rozpoznania pełnego wykazu; źródłowe otwarte B pozostaje pomiarem odtworzenia.',3)

put('T06-01','G','A',
'Redaktor chce dopisać do listy zasad „maksymalizację liczby stron” i uznać kolejność listy za obowiązkowy plan etapów projektu. Która korekta jest trafna?', 'b', [
 ('Wystarczy uznać maksymalizację stron za alternatywną nazwę innowacji.','Zmieniono znaczenie nazwy → taka pozycja nie występuje w źródłowym wykazie → korekta jest błędna.',1),
 ('Zachować dziewięć źródłowych nazw, a ich kolejności nie interpretować jako obowiązkowych faz procesu.','Propozycja zmienia wykaz i jego funkcję → zasady są przekrojową podstawą zadań i praktyk → korekta jest trafna.',2),
 ('Dopisać dziesiątą nazwę, jeżeli edytor pozwala utworzyć dziesięć rekordów.','Możliwość narzędzia nie zmienia wykazu Syllabus → dziesiąta pozycja nie jest zasadą źródłową → korekta jest błędna.',1),
 ('Usunąć walidację, bo jest także nazwą zadania RE.','Termin może nazywać zadanie i zasadę → walidacja pozostaje w dziewiątce → korekta jest błędna.',1),
], 'Rozpoznanie dwóch zmian naruszających wykaz i jego przekrojowy charakter; odmienny cel niż F.')

put('T06-01','D','K',
'Po przerwie sprawdź zgodność pozycji z wykazem zasad z §2.1, bez oceniania ich szczegółowego zastosowania.', [True,False,True,True], [
 ('Value-orientation oraz shared understanding są nazwami zasad.','Obie nazwy znajdują się w PR01–PR03 → zgodność z wykazem zachodzi → Prawda.',1),
 ('„Jeden uniwersalny proces” jest oficjalną nazwą dziewiątej zasady.','Dziewiąta nazwa dotyczy systematycznej i zdyscyplinowanej pracy → podana nazwa nie jest pozycją wykazu → Fałsz.',1),
 ('Problem–Requirement–Solution oraz validation należą do listy.','Nazwy odpowiadają PR05 i PR06 → należą do wykazu → Prawda.',1),
 ('Context, stakeholders, evolution, innovation i systematic and disciplined work dopełniają powyższe poprawne nazwy do dziewięciu.','Wyliczono pozostałe pięć źródłowych nazw → łącznie obejmują pełny wykaz → Prawda.',1),
], 'Rozpoznanie nazw EN w innym grupowaniu; to nie swobodny recall dziewiątki, który pozostaje w open.')

put('T06-02','F','P',
'Które pary termin–znaczenie są zgodne z terminologią EU2 i przyjętym Glossary?', ['a','c','e'], [
 ('Requirement — potrzeba, wymagana zdolność lub właściwość albo ich udokumentowana reprezentacja.','Para wymienia trzy sensy → odpowiada hasłu Requirement → należy do klucza.',6),
 ('Stakeholder — wyłącznie osoba bezpośrednio używająca interfejsu.','Zawężono wpływ i oddziaływanie do użycia → stakeholder jest szerszy niż user → para jest błędna.',6),
 ('Context — istotna część otoczenia systemu.','Wskazano istotność wobec systemu i wymagań → jest to sens Context w RE → para jest poprawna.',2),
 ('Validation — wyłącznie sprawdzenie zgodności zapisu ze specyfikacją.','Wskazano punkt odniesienia verification → validation odnosi się do potrzeb → para jest błędna.',5),
 ('RE — systematyczne specyfikowanie i zarządzanie wymaganiami dla rozumienia potrzeb i ograniczenia ryzyka.','Opis zachowuje działania i cel → odpowiada definicji RE → para jest poprawna.',7),
], 'Trzy znaczenia i dwa kontrasty; pełne odtworzenie sześciu terminów pozostaje w source F/RP.',3)

put('T06-02','G','K',
'Dwie osoby podpisały wymaganie, lecz podają różne wyniki dla tego samego przypadku. W innym zespole wspólna wiedza domenowa pozwala przewidzieć ten przypadek jednakowo. Oceń terminologiczne wnioski.', [True,False,True,True], [
 ('Udokumentowana i uzgodniona podstawa należy do explicit shared understanding.','Wskazano zapis i uzgodnienie → tym rozróżnia się explicit od implicit → Prawda.',3),
 ('Sam podpis dowodzi, że pierwsze osoby rzeczywiście mają wspólne znaczenie.','Podano różne interpretacje mimo podpisu → obie postacie mogą być pozorne → Fałsz.',4),
 ('Wspólna wiedza stanowi podstawę implicit shared understanding.','Drugi przypadek opiera się na wiedzy domenowej → odpowiada podstawie implicit → Prawda.',3),
 ('Kontrola dopasowania wymagania do potrzeb to validation, a nie wyłącznie verification.','Punktem odniesienia są potrzeby → validation różni się od zgodności ze specyfikacją → Prawda.',5),
], 'Rozdzielenie nośnika i trafności na dwóch przypadkach; nie przypisuje prawdziwości samej etykiecie.')

put('T06-02','D','A',
'Recenzent tłumaczy explicit jako „zawsze rzeczywiste”, implicit jako „zawsze pozorne”, a validation jako samą kontrolę zgodności ze specyfikacją. Która korekta jest właściwa?', 'c', [
 ('Wszystkie trzy utożsamienia są definicjami obowiązującymi w profilu.','Opis miesza nośnik z trafnością oraz potrzeby ze specyfikacją → źródła rozróżniają te osie → odpowiedź jest błędna.',4),
 ('Wystarczy zmienić nazwę dokumentu, pozostawiając trzy utożsamienia.','Wada dotyczy znaczeń → nazwa pliku nie zmienia definicji → korekta nie rozwiązuje problemu.',5),
 ('Explicit i implicit różnią się podstawą, obie postacie mogą być pozorne, a validation odnosi się do potrzeb.','Trzy twierdzenia wymagają rozdzielenia → zapis/wiedza, trafność oraz potrzeby/specyfikacja to osobne rozróżnienia → korekta jest trafna.',4),
 ('Tylko implicit może służyć wspólnemu zrozumieniu, ponieważ dokumentacja je wyklucza.','Źródło dopuszcza dwie postacie → dokumentowanie i uzgadnianie budują explicit → wykluczenie jest błędne.',3),
], 'Ocena złożonego błędnego objaśnienia zamiast czterech prostych tez B; otwarte D zachowuje sześć definicji.')

put('T07-01','F','A',
'Zwykłe rozliczenie jest opisane, ale nowy wyjątek może prowadzić do błędnych wypłat. Zaplanowano dodatkowy warsztat i sprawdzenie potrzeb przed realizacją wyjątku. Który argument właściwie stosuje zasadę wartości?', 'a', [
 ('Dodatkowy nakład trzeba zestawić z korzyścią pokrycia potrzeby i ograniczenia ryzyka błędów oraz przeróbek.','Wyjątek niesie wskazane ryzyko → wartość łączy korzyść z kosztem pracy RE → argument jest trafny.',1),
 ('Każdy warsztat ma dodatnią wartość tylko dlatego, że powstanie dokument.','Powstanie dokumentu nie określa korzyści → wymagania są środkiem do celu → automatyczny wniosek jest błędny.',3),
 ('Należy liczyć wyłącznie koszt zakodowania wyjątku, ignorując pracę RE.','Pytanie dotyczy źródłowej wartości wymagania → formuła uwzględnia pozyskanie, zapis, walidację i zarządzanie → wskazany rachunek jest niepełny.',1),
 ('Brak natychmiastowego kodu dowodzi zerowej korzyści warsztatu.','Warsztat może ograniczyć ryzyko niewłaściwego zachowania → korzyść nie zależy wyłącznie od natychmiastowego kodu → wniosek jest nieuprawniony.',2),
], 'Ryzykowny wyjątek i możliwie uzasadniony dodatkowy nakład zamiast nadmiarowych stron w B.')

put('T07-02','F','A',
'Użytkownicy chcą natychmiast usuwać rekord, a dział rozliczeń potrzebuje zachować go do wyjaśnienia transakcji. Nie ustalono wspólnego rozwiązania ani warunków retencji. Który argument najlepiej opisuje potrzebną pracę RE?', 'c', [
 ('Wystarczy przepisać oba żądania, aby stały się jednocześnie spełnione.','Żądania są sprzeczne w podanych warunkach → konflikt wymaga identyfikacji i rozwiązania → sam zapis go nie usuwa.',4),
 ('Dział rozliczeń należy pominąć wyłącznie dlatego, że nie jest użytkownikiem końcowym.','Podano istotną potrzebę innej roli → uwzględnianie samych użytkowników może pominąć wymagania → pominięcie jest błędne.',1),
 ('Trzeba rozpoznać potrzeby obu ról i rozwiązać konflikt, bez obiecywania spełnienia sprzecznych zapisów.','Opis ujawnia dwie potrzeby i sprzeczność propozycji → zasada wymaga właściwych ról i pracy z konfliktem → argument jest trafny.',4),
 ('Sama nazwa ważniejszego działu automatycznie rozstrzyga adekwatność każdej jego propozycji.','Nie podano uzgodnienia potrzeb → rola organizacyjna nie zastępuje rozwiązania konfliktu → wniosek nie wynika.',1),
], 'Konflikt dwóch ról zamiast pominiętego operatora i persony; bez doradzania rzeczywistej retencji prawnej.')

put('T07-03','F','A',
'Do zespołu o wysokiej rotacji dołącza dostawca zewnętrzny. Wcześniej opierano się głównie na wspólnej wiedzy wieloletnich pracowników. Który argument najlepiej uzasadnia działanie RE?', 'd', [
 ('Wcześniejszy sukces gwarantuje, że nowe osoby znają wszystkie znaczenia.','Skład i relacje zespołu się zmieniają → dawna wspólna wiedza nie dowodzi obecnej zgodności → gwarancja jest błędna.',4),
 ('Jeden podpis nowego dostawcy usuwa potrzebę sprawdzania interpretacji.','Podpis dotyczy uzgodnionej podstawy → explicit też może być pozorne → pominięcie kontroli jest nieuzasadnione.',3),
 ('Rotacja dowodzi, że żadne wspólne zrozumienie nie jest już możliwe.','Rotacja jest przeszkodą, a nie dowodem niemożliwości → praktyki mogą budować i sprawdzać podstawę → wniosek jest za mocny.',4),
 ('Warto uzgodnić znaczenia i sprawdzić je na przykładach, bo dotychczasowa wiedza implicit może nie wystarczyć.','Podano bariery wspólnej podstawy → przykłady i uzgodnienia wspierają jej sprawdzenie → argument jest trafny.',5),
], 'Warunki zespołu i trwałość wspólnej wiedzy zamiast jednego wieloznacznego terminu.')

put('T07-04','F','A',
'Analizowany system to aplikacja rejestrująca wejścia na podstawie sygnału oddzielnej bramki. Bramki nie można zmieniać; zewnętrzną procedurę reakcji ochrony można przeprojektować. Potrzebą jest faktyczne niedopuszczenie nieuprawnionych osób. Który argument jest właściwy?', 'b', [
 ('Poprawny rekord wejścia sam gwarantuje rzeczywiste zabezpieczenie strefy.','Aplikacja obserwuje sygnał, a cel dotyczy realnego dostępu → mapowanie wymaga odpowiednich warunków otoczenia → gwarancja nie wynika.',5),
 ('Trzeba sprawdzić związek sygnału z przejściem i reakcją, niezależnie od możliwości zmiany bramki.','Podano realny cel i zewnętrzny sygnał → zasada obejmuje istotność, mapowanie i założenia → argument jest trafny.',4),
 ('Możliwość zmiany procedury automatycznie czyni ją częścią aplikacji.','Procedurę określono jako zewnętrzną → scope i granica systemu są odrębne → taki wniosek jest błędny.',3),
 ('Bramkę wolno pominąć, ponieważ nie należy do zakresu zmian.','Bramka dostarcza decydujący sygnał → brak zmiany nie usuwa istotności → pominięcie jest błędne.',2),
], 'Mapowanie realnej kontroli dostępu na sygnał i reakcję, zamiast skanu zwrotu i modułu w B.')

put('T07-05','F','A',
'Klient mówi: „Problemem jest brak aplikacji mobilnej”. Rozmowa pokazuje, że zgłoszenia giną przy przekazaniu między zmianami. Nie przesądzono jeszcze sposobu usunięcia tego stanu. Która interpretacja pomaga w pracy RE?', 'c', [
 ('Brak jednej wskazanej technologii musi być jedynym możliwym opisem problemu.','Ujawniono zagubione zgłoszenia → stan problemowy różni się od propozycji realizacji → utożsamienie jest błędne.',1),
 ('Rozważanie aplikacji trzeba zakazać do chwili zakończenia wszystkich wymagań.','Zasada dopuszcza wzajemne oddziaływanie → rozdzielenie sensów nie narzuca sztywnej kolejności → zakaz nie wynika.',2),
 ('Gubienie zgłoszeń to stan problemowy, potrzebna jest zdolność ich zachowania i przekazania, a aplikacja jest jedną z propozycji rozwiązania.','W opisie są trzy role → rozdzielenie problemu, potrzebnej zdolności i realizacji ułatwia RE → interpretacja jest trafna.',4),
 ('Po wypowiedzeniu nazwy aplikacji potrzeby nie mają już znaczenia.','Rozwiązanie ma służyć potrzebie → propozycja technologii jej nie zastępuje → wniosek jest błędny.',1),
], 'Solution bias w wypowiedzi klienta zamiast zakazu prototypowania; wymaga wyboru rozdzielonych sensów.')

put('T07-06','F','A',
'Wymaganie opisuje obsługę przez całą dobę i ma poprawną formę. Realizacja zakłada dostępność operatora, lecz z danych wynika, że operator pracuje tylko w dzień. Który argument najlepiej opisuje potrzebne sprawdzenie?', 'a', [
 ('Już podczas RE trzeba sprawdzić potrzeby, porozumienie i rozsądność założenia obsady, zamiast polegać na poprawnej formie.','Podano rozbieżność założenia z warunkami → walidacja obejmuje trzy aspekty i zaczyna się w RE → argument jest trafny.',2),
 ('Poprawna forma dowodzi wszystkich aspektów walidacji.','Forma nie potwierdza zgodności z potrzebami ani obsady → verification nie zastępuje validation → argument jest błędny.',3),
 ('Rozbieżność należy rozważyć dopiero po wdrożeniu systemu.','Ryzyko jest już widoczne → wczesna walidacja służy jego kontroli od początku → odkładanie przeczy zasadzie.',1),
 ('Podpis jednej osoby zmienia dzienną obsadę w całodobową.','Podpis nie zmienia podanego stanu otoczenia → założenie wymaga rzeczywistego sprawdzenia → wniosek jest nieuprawniony.',2),
], 'Fałszywe założenie w konkretnej usłudze zamiast rozpoznawania samej listy trzech pytań B.')

put('T07-07','F','A',
'Po rozpoczęciu implementacji organizacja zmieniła proces obsługi. Kierownik proponuje albo odrzucać każdą zmianę, albo realizować każde zgłoszenie natychmiast. Który argument jest najtrafniejszy?', 'd', [
 ('Każda zmiana procesu dowodzi, że wcześniejsze RE było nieprawidłowe.','Podano nową sytuację po uzgodnieniu → ewolucja bywa naturalna → pewna diagnoza wcześniejszej wady nie wynika.',1),
 ('Zasada wymaga natychmiastowej realizacji każdej propozycji.','Dopuszczenie zmian współistnieje ze stabilnością → sama propozycja nie jest decyzją o realizacji → argument jest błędny.',4),
 ('Po rozpoczęciu kodowania potrzeby muszą pozostać niezmienne na zawsze.','Proces biznesowy się zmienił → wymagania mogą wymagać adaptacji → absolutna niezmienność przeczy ewolucji.',2),
 ('Trzeba umożliwić rozważenie potrzebnej zmiany i zachować uporządkowaną stabilną podstawę prac.','Obie skrajności pomijają jeden cel → RE godzi adaptację i stabilność → argument jest trafny.',4),
], 'Wybór uzasadnienia polityki po konkretnej zmianie procesu zamiast ogólnych tez B.')

put('T07-08','F','A',
'Po zbadaniu potrzeb analityk proponuje usunąć zbędne ręczne przepisywanie danych i sprawdzić wariant z użytkownikami. Kierownik odrzuca pomysł, ponieważ nie wymaga nowej technologii ani przebudowy całej usługi. Która ocena jest trafna?', 'b', [
 ('Kierownik ma rację, bo każda innowacja musi być przełomem technologicznym.','Propozycja upraszcza użycie → zasada dopuszcza także małą skalę innowacji → warunek przełomu jest błędny.',2),
 ('Uproszczenie może być innowacją małej skali, jeżeli lepiej zaspokaja potrzebę i zostanie sprawdzone z użytkownikami.','Podano badanie potrzeby i wariant → łatwość obsługi mieści się w małej skali, a pomysł wymaga walidacji → ocena jest trafna.',2),
 ('Wystarczy nazwać pomysł innowacyjnym, aby uznać jego korzyść za dowiedzioną.','Opis przewiduje dopiero sprawdzenie → etykieta nowości nie potwierdza adekwatności → wniosek jest błędny.',3),
 ('Uproszczenie należy wdrożyć bez udziału użytkowników, bo analityk zawsze wie lepiej.','Zasada odnosi się do ich potrzeb → nowy pomysł nadal wymaga sprawdzenia → argument jest błędny.',3),
], 'Kontrast małej i dużej skali zamiast samej literalnej prośby o kolejny ekran.')

put('T07-09','F','A',
'Dostawca proponuje skopiować cały proces RE z dużego projektu do małego przedsięwzięcia. Jedynym uzasadnieniem jest wcześniejszy sukces. Który argument najlepiej stosuje zasadę systematycznej pracy?', 'c', [
 ('Dawny sukces dowodzi dopasowania procesu do każdej następnej sytuacji.','Podano tylko wynik innego projektu → reuse wymaga refleksji → automatyczny wniosek jest błędny.',4),
 ('Dostosowanie oznacza odrzucenie wszystkich dawnych praktyk niezależnie od ich przydatności.','Zasada wymaga oceny dopasowania → nie zakazuje uzasadnionego reuse → całkowite odrzucenie nie wynika.',3),
 ('Należy ocenić dopasowanie procesu i artefaktów do nowego problemu, kontekstu i środowiska, zachowując przydatne praktyki.','Projekt różni się sytuacją → zdyscyplinowany dobór wymaga refleksji nad reuse → argument jest trafny.',4),
 ('Mały projekt nie potrzebuje żadnej walidacji ani zarządzania wymaganiami.','Skala nie usuwa zadań RE → odpowiednie praktyki są potrzebne niezależnie od procesu → wykluczenie jest błędne.',1),
], 'Refleksyjny reuse w konkretnej zmianie skali; nie żąda projektowania całego procesu.')

put('T07-01','G','K',
'Dwie propozycje pracy RE oceniono jakościowo. Pierwsza dodaje powtórzony opis bez wpływu na decyzje, druga wyjaśnia nieuzgodniony wyjątek mogący wywołać kosztowną przeróbkę. Oceń argumenty.', [False,True,True], [
 ('Powtórzony opis ma wyższą wartość z samego powodu większej liczby stron.','Podano brak nowej korzyści decyzyjnej → objętość nie jest celem wartości → Fałsz.',3),
 ('Wyjaśnienie wyjątku może przynosić korzyść przez ograniczenie ryzyka przeróbki.','Wskazano ryzyko wyjątku → taki wkład należy do korzyści wymagania → Prawda.',2),
 ('Dla obu propozycji trzeba rozważyć także koszt ich pozyskania, dokumentowania, walidacji i zarządzania.','Porównuje się pracę nad wymaganiami → źródłowa formuła obejmuje te koszty RE → Prawda.',1),
], 'Porównanie dwóch rodzajów nakładu i ich mechanizmów, zamiast jednego ryzykownego wyjątku.')

put('T07-02','G','K',
'Przyszli użytkownicy usługi nie są jeszcze znani z nazwiska. Przygotowano personę. Operator przekazuje informacje o trudnościach odtworzenia usługi, a jedna osoba łączy role kupującego i użytkownika. Oceń wnioski.', [True,False,True,True], [
 ('Persona może pomóc opisać archetypowe potrzeby nieznanej grupy.','Podano nieznane przyszłe osoby → fikcyjny archetyp jest dopuszczoną reprezentacją → Prawda.',3),
 ('Persona poświadcza rzeczywistą zgodę całej przyszłej grupy.','Opis jest fikcyjny → nie jest podpisem ani wypowiedzią wszystkich osób → Fałsz.',3),
 ('Feedback operatora należy rozpatrzyć jako wkład istotnej roli, a nie odrzucać z braku roli klienta.','Podano potrzebę odtworzenia usługi → uwzględnianie samych klientów mogłoby pominąć wymaganie → Prawda.',1),
 ('Kupujący i użytkownik mogą być dwiema rolami tej samej osoby.','Wprost wskazano łączenie ról → zasada dopuszcza więcej niż jedną rolę stakeholdera → Prawda.',2),
], 'Nieznana grupa, informacja z eksploatacji i łączenie ról, bez powtarzania konfliktu F.')

put('T07-03','G','P',
'Zespół używa jednego podpisanego dokumentu, ale przykłady ujawniły różne rozumienie słowa „dostępny”. Część osób chce uzgodnić glosariusz i często porównywać oczekiwane wyniki. Które argumenty są uzasadnione?', ['a','d'], [
 ('Przykłady mogą ujawnić pozorne wspólne zrozumienie mimo udokumentowanej podstawy.','Podano różne znaczenia przy jednym dokumencie → explicit może być pozorne → argument jest trafny.',3),
 ('Podpis uniemożliwia istnienie rozbieżności, więc przykłady trzeba zignorować.','Rozbieżność jest jawna → podpis nie gwarantuje trafności wspólnego sensu → argument jest błędny.',3),
 ('Glosariusz sam dowiedzie, że żadne wymaganie nie zostało pominięte.','Glosariusz dotyczy znaczeń → nawet zgodność rozumienia nie dowodzi kompletności → wniosek jest błędny.',3),
 ('Uzgodnione znaczenia i krótkie pętle feedbacku mogą ograniczać skutki nieporozumień.','Wskazano rozbieżne interpretacje → glosariusz i feedback wspierają wspólną podstawę → argument jest trafny.',5),
], 'Wybór uzasadnionych praktyk i ograniczenie wniosku o kompletności; nie opiera się na zmianie składu zespołu.')

put('T07-04','G','K',
'Analizowaną całością jest aplikacja planowania dostaw z wewnętrznym katalogiem używanym bez zmian. Oddzielny czujnik zbiornika przekazuje opóźnione dane i pozostaje niezmieniany. Zewnętrzną procedurę dostaw można zmienić. Cel dotyczy rzeczywistego niedopuszczenia do przepełnienia. Oceń argumenty.', [False,True,True,False], [
 ('Brak zmiany katalogu dowodzi, że katalog leży poza aplikacją.','Katalog został jawnie włączony do aplikacji → scope nie wyznacza automatycznie granicy → Fałsz.',3),
 ('Opóźnienie czujnika jest istotne dla powiązania decyzji aplikacji z realnym poziomem zbiornika.','System obserwuje dane opóźnione, a cel realny stan → mapowanie wymaga założeń o danych i reakcji → Prawda.',5),
 ('Zmiana zewnętrznej procedury może zmienić wymagania aplikacji bez automatycznej zmiany jej granicy.','Procedura wpływa na dostawy → zmiany kontekstu trzeba uwzględnić → Prawda.',4),
 ('Poprawne zapisanie odczytu samo zapewnia brak przepełnienia w świecie rzeczywistym.','Zapis dotyczy sygnału → realny cel wymaga odpowiednich warunków otoczenia → Fałsz.',5),
], 'Dynamika procesu fizycznego i opóźnione dane zamiast bramki i reakcji ochrony; obejmuje cztery różne rozstrzygnięcia.')

put('T07-05','G','K',
'Nowy rodzaj czujnika zainspirował pomysł usługi. Po zobaczeniu demonstratora użytkownicy opisali potrzebę, której wcześniej nie zgłaszali. Zespół oddzielnie dokumentuje problem, potrzebne właściwości i proponowaną realizację. Oceń interpretacje.', [True,False,True], [
 ('Pomysł rozwiązania może poprzedzać opracowanie nowych wymagań.','Technologia pobudziła potrzebę → zasada dopuszcza taką kolejność, szczególnie w innowacji → Prawda.',3),
 ('Rozdzielenie trzech opisów oznacza zakaz wzajemnego wpływania na siebie.','Opis zachowuje rozróżnienie ról → separation of concerns nie usuwa współzależności → Fałsz.',2),
 ('Osobne nazwanie problemu, potrzebnej zdolności i realizacji może ułatwiać myślenie i komunikację.','Dokumentuje się trzy role → ich rozdzielanie jest celem RE mimo powiązania → Prawda.',4),
], 'Innowacja pobudzona rozwiązaniem i osobne opisy, zamiast istniejącego problemu nazwanego technologią.')

put('T07-06','G','K',
'Sponsor podpisał wymaganie. Użytkownicy nadal wskazują inne oczekiwane zachowanie, a dostępność zewnętrznej usługi, na której oparto wymaganie, nie została potwierdzona. Oceń wnioski.', [False,True,True,True], [
 ('Podpis sponsora dowodzi pełnego porozumienia mimo podanej rozbieżności.','Użytkownicy wskazują inne oczekiwanie → porozumienie ról nie wynika z jednego podpisu → Fałsz.',2),
 ('Adekwatność wymagania wobec potrzeb nadal wymaga sprawdzenia.','Podano rozbieżność oczekiwań → pokrycie potrzeb jest osobnym aspektem walidacji → Prawda.',2),
 ('Założenie dostępności usługi trzeba sprawdzić, zamiast uznać je za fakt z samego zapisu.','Dostępności nie potwierdzono → rozsądność założeń jest jednym z trzech pytań → Prawda.',2),
 ('Podjęcie tej pracy już podczas RE może ograniczyć ryzyko późnego wykrycia nieadekwatności.','Problemy są widoczne przed realizacją → wczesna walidacja kontroluje ryzyko od początku → Prawda.',1),
], 'Niepewne założenie i rozbieżność ról zamiast jawnie fałszywej całodobowej obsady.')

put('T07-07','G','K',
'Po uzgodnieniu wymagań pojawiły się nowa technologia i nowe potrzeby użytkowników. Podczas walidacji wykryto też błąd wcześniejszego wymagania. Oceń interpretacje zmian.', [True,True,False,True], [
 ('Nowa technologia i feedback o potrzebach mogą być naturalnymi źródłami zmian.','Wskazano dwa źródła z katalogu → ewolucja wymagań jest normalnym przypadkiem → Prawda.',2),
 ('Wykrycie wady podczas walidacji również może prowadzić do zmiany.','Podano odkrycie błędu → zasada wymienia walidację i korektę wad → Prawda.',3),
 ('Skoro istnieją zmiany, nie wolno zachować żadnej stabilnej podstawy prac.','Ewolucja obejmuje dwa cele → dopuszczanie zmian nie znosi stabilności → Fałsz.',4),
 ('Nie wszystkie opisane zmiany dowodzą błędu wcześniejszego RE.','Część wynika z nowej sytuacji, część z wykrytej wady → nie można utożsamić wszystkich z błędem → Prawda.',1),
], 'Oddziela źródła zewnętrzne od korekty odkrytej wady i od stabilności; nie wybiera polityki jak F.')

put('T07-08','G','K',
'Dostawca proponuje nowy silnik tylko z powodu jego nowości. Drugi pomysł usuwa niepotrzebny krok po zbadaniu potrzeb. Nie wykonano jeszcze oceny obu wariantów z interesariuszami. Oceń argumenty.', [False,True,False,True], [
 ('Nowość silnika sama dowodzi lepszego zaspokojenia potrzeb.','Nie podano wyniku sprawdzenia potrzeb → nowość nie jest dowodem adekwatności → Fałsz.',3),
 ('Usunięcie kroku może realizować innowację małej skali, jeśli ułatwia zaspokojenie potrzeby.','Pomysł dotyczy łatwości użycia → zasada dopuszcza małą skalę → Prawda.',2),
 ('Badanie potrzeb wolno pominąć, jeśli pomysłodawca ma tytuł eksperta.','Pozycja zawodowa nie potwierdza dopasowania pomysłu → potrzebna jest walidacja wobec potrzeb → Fałsz.',3),
 ('Rozważanie alternatywy dla literalnej prośby może należeć do dobrego RE.','Propozycje mogą być lepszym sposobem zaspokojenia potrzeby → zasada nie ogranicza pracy do przepisywania życzeń → Prawda.',1),
], 'Porównuje technologiczną nowość i użyteczne uproszczenie, z jawnie nieprzeprowadzoną walidacją.')

put('T07-09','G','K',
'Mały zespół rozwija system doraźnie, ale uzgadnia potrzeby, zapisuje istotne decyzje, sprawdza je i kontroluje zmiany. Duży zespół chce skopiować dawny proces bez zbadania nowego kontekstu. Oceń argumenty.', [True,False,True,False], [
 ('Doraźny rozwój systemu nie usuwa potrzeby systematycznej pracy nad wymaganiami.','Podano ad-hoc wytwarzanie → zasada obowiązuje niezależnie od procesu wytwarzania → Prawda.',1),
 ('Mała ilość dokumentacji sama dowodzi braku dyscypliny w pierwszym zespole.','Opis zawiera odpowiednie czynności RE → ciężar dokumentacji nie jest jedynym kryterium doboru → Fałsz.',3),
 ('Drugi zespół powinien ocenić dopasowanie dawnych praktyk do nowej sytuacji.','Proponuje reuse bez analizy → zasada wymaga refleksji → Prawda.',4),
 ('Jeden proces jest z definicji najlepszy dla obu zespołów niezależnie od kontekstu.','Sytuacje mają różną skalę i warunki → nie ma uniwersalnego procesu → Fałsz.',2),
], 'Dwa sposoby pracy z jawnymi czynnościami i bezrefleksyjnym reuse, zamiast jednego dostawcy w F.')

put('T07-C-A','G','K',
'Analizowany system to aplikacja pokazująca dostępność operatorów serwisu. Oddzielny, niezmieniany harmonogram pracy warunkuje ich dostępność. Harmonogram pozostaje poza aplikacją, a informacje wprowadza pracownik; nie ma automatycznego interfejsu IT. Oceń argumenty.', [True,False,True], [
 ('Harmonogram jest istotnym otoczeniem, ponieważ warunkuje znaczenie informacji o dostępności.','Podano wpływ na wymagane informacje → wymagania trzeba rozpatrywać wraz z istotnym kontekstem → Prawda.',1),
 ('Brak możliwości zmiany harmonogramu wystarcza do pominięcia jego wpływu.','Harmonogram warunkuje dostępność mimo niezmienności → scope nie usuwa istotności zewnętrznego wpływu → Fałsz.',2),
 ('Brak automatycznego interfejsu IT nie usuwa podanego wpływu harmonogramu na wymagania.','Informacje wprowadza człowiek, a warunek nadal obowiązuje → istotność kontekstu nie wymaga automatycznej integracji → Prawda.',1),
], 'Nowa druga kontrola KRY-A01: niemodyfikowalny harmonogram i ręczny przepływ informacji; wszystkie wiersze pozostają w zakresie istotnego zewnętrznego wpływu.')

put('T07-01','D','P',
'Sponsor chce usunąć całą walidację, ponieważ jej koszt występuje teraz, a uniknięcie przeróbek może nastąpić dopiero później. Nie oceniono wielkości ryzyka ani korzyści. Które argumenty są uzasadnione?', ['b','d'], [
 ('Późniejsza korzyść z definicji ma wartość zero.','Podano tylko różnicę czasu, nie brak korzyści → wartość uwzględnia wkład w potrzeby i ryzyko → automatyczne zerowanie nie wynika.',2),
 ('Eliminacja kosztu może usunąć także korzyść z ograniczenia ryzyka niespełnienia potrzeb.','Walidacja ma zostać usunięta bez oceny → korzyść i koszt trzeba rozważać razem → argument jest trafny.',2),
 ('Źródłowa formuła uwzględnia wyłącznie koszt późniejszego programowania.','Pytanie dotyczy wartości wymagania → wymienia koszt pozyskania, dokumentowania, walidacji i zarządzania → argument jest błędny.',1),
 ('Do decyzji potrzebna jest ocena korzyści względem kosztów pracy RE, a nie samo dążenie do zera nakładu.','Wielkości nie zostały ocenione → wymagania są środkiem do wyniku, a saldo decyduje o wartości → argument jest trafny.',1),
], 'Budżetowa eliminacja walidacji i różny moment korzyści zamiast objętości lub pojedynczego wyjątku; nie jest rachunkiem rzeczywistego ROI.')

put('T07-02','D','P',
'Dla przyszłej usługi nie zna się jeszcze konkretnych użytkowników. Utworzono ich archetypowy opis. Operatorzy już działającego pilota przekazują uwagi o potrzebach. Które wnioski są uzasadnione?', ['a','c','e'], [
 ('Nieznajomość nazwisk nie uzasadnia pominięcia całej istotnej roli.','Osoby są przyszłe, lecz rola istnieje → RE ma uwzględnić właściwe role i ich reprezentację → wniosek jest trafny.',1),
 ('Archetyp jest realną osobą, która zgodziła się za wszystkich na wymagania.','Opis określono jako archetypowy → persona jest fikcyjna → wniosek o rzeczywistej zgodzie jest błędny.',3),
 ('Persona może wspierać opis potrzeb grupy, ale nie zastępuje rzeczywistego uzgadniania konfliktów.','Podano fikcyjną reprezentację → opis grupy nie rozwiązuje sam sprzeczności → wniosek jest trafny.',3),
 ('Feedback operatorów trzeba wykluczyć tylko dlatego, że powstał podczas używania pilota.','Źródło dopuszcza feedback z używanego systemu → moment eksploatacji nie usuwa roli → wykluczenie jest błędne.',2),
 ('Informacje od użytkowników i operatorów mogą ujawnić istotne potrzeby wymagające pracy RE.','Podano uwagi z użycia → istotne role i ich feedback są częścią pracy nad potrzebami → wniosek jest trafny.',1),
], 'Reprezentacja przyszłego rynku i feedback z pilota; trzy argumenty, bez deklaracji kompletności stakeholder list.',3)

put('T07-03','D','A',
'W małym, doświadczonym zespole wszyscy niezależnie przewidzieli jednakowy wynik jednego uzgodnionego przypadku. Kierownik ogłasza, że wymagania są przez to kompletne i nie trzeba już feedbacku. Która ocena jest trafna?', 'b', [
 ('Doświadczenie dowodzi, że nie mogą istnieć żadne pominięte potrzeby.','Zgodność dotyczy jednego przypadku → nawet dobre shared understanding nie dowodzi kompletności → wniosek jest zbyt mocny.',3),
 ('Zgodność jest pomocną przesłanką wspólnego rozumienia tego przypadku, lecz nie dowodzi kompletności wszystkich wymagań.','Podano ograniczony wspólny wynik → ważne wymagania mogły nie zostać rozważone → ocena zachowuje granicę dowodu.',3),
 ('Wspólna wiedza nie może nigdy być podstawą shared understanding.','Zespół ma wspólną wiedzę → może to być podstawa implicit → zakaz jest błędny.',2),
 ('Każde kolejne pytanie o przykład unieważniłoby wcześniejszą zgodę.','Sprawdzanie interpretacji podtrzymuje wspólną podstawę → feedback nie jest z definicji unieważnieniem → twierdzenie jest błędne.',5),
], 'Granica wnioskowania ze zgodnego przykładu przy sprzyjających warunkach, zamiast rozbieżności lub rotacji.')

put('T07-04','D','P',
'Sortownia ma kierować rzeczywiście ciężkie przesyłki do obsługi ręcznej. Aplikacja obserwuje jedynie wynik z oddzielnej, niezmienianej wagi. Waga bywa błędnie wyzerowana. Zewnętrzną procedurę jej przygotowania można przeprojektować. Które argumenty są uzasadnione?', ['a','c','e'], [
 ('Warunek poprawnego przygotowania wagi jest istotny dla powiązania wyniku z rzeczywistą masą.','System widzi wskazanie, a potrzeba dotyczy fizycznej cechy → mapowanie wymaga odpowiedniego założenia otoczenia → argument jest trafny.',5),
 ('Brak zmiany wagi usuwa jej wpływ na wymagania aplikacji.','Waga dostarcza rozstrzygający sygnał → scope nie przesądza istotności → argument jest błędny.',2),
 ('Zmiana procedury przygotowania może wpłynąć na wymagania i założenia aplikacji.','Procedura wpływa na wiarygodność danych → zmiany kontekstu należy rozpatrywać → argument jest trafny.',4),
 ('Poprawna obsługa otrzymanej liczby zawsze dowodzi spełnienia celu dotyczącego realnych przesyłek.','Podano możliwość błędnego wyzerowania → sygnał nie gwarantuje realnego stanu bez warunków → argument jest błędny.',5),
 ('Możliwość przeprojektowania procedury nie zmienia jej automatycznie w część aplikacji.','Opis jawnie umieszcza procedurę na zewnątrz → scope i granica systemu są różne → argument jest trafny.',3),
], 'Realna cecha i potencjalnie błędny pomiar zamiast opóźnienia lub skanu; łączy istotność, scope, założenia i zmianę.',3)

put('T07-05','D','P',
'Organizacja rozważa demonstrator nowego terminala, aby poznać potrzebne interakcje. Równolegle opisuje niezadowalającą sytuację i oczekiwane zdolności. Które argumenty poprawnie opisują tę pracę?', ['b','d'], [
 ('Samo istnienie terminala jest pełnym opisem potrzeby interesariuszy.','Terminal jest propozycją realizacji → rozwiązanie nie zastępuje znaczenia potrzeby → argument jest błędny.',1),
 ('Badanie częściowego rozwiązania może pomóc opracować wymagania, choć opisy problemu i potrzeb trzeba nadal rozróżniać.','Demonstrator ma wyjaśnić interakcje → trójka współzależy przy zachowaniu rozróżnień → argument jest trafny.',5),
 ('Rozdzielenie nazw wymaga całkowitego odizolowania prac nad rozwiązaniem od RE.','Podano równoległe badanie → separation of concerns nie jest izolowaniem trójki → argument jest błędny.',2),
 ('W dokumentowaniu warto odróżnić stan problemowy, potrzebne właściwości i proponowany terminal.','Są to trzy role opisu → ich rozdzielenie ułatwia komunikację mimo współzależności → argument jest trafny.',4),
], 'Równoległe poznawanie interakcji i opis ról, zamiast technologicznego impulsu z G; wybór argumentów, nie recall definicji.')

put('T07-06','D','P',
'Przegląd wykazał, że wymaganie jest poprawne językowo i zgodne z szablonem. Nie sprawdzono, czy obejmuje potrzebę osób, których dotyczy, ani czy zewnętrzny dostawca zapewnia założone dane. Które argumenty są właściwe?', ['a','c','e'], [
 ('Kontrola formy nie wystarcza do potwierdzenia dopasowania do potrzeb.','Przegląd dotyczył zapisu → validation ma punkt odniesienia w potrzebach → argument jest trafny.',3),
 ('Zgodność z szablonem automatycznie potwierdza rozsądność założenia dostawcy.','Danych dostawcy nie sprawdzono → forma nie ustala warunków otoczenia → argument jest błędny.',2),
 ('Należy sprawdzić porozumienie właściwych interesariuszy i adekwatne pokrycie ich potrzeb.','Brakuje sprawdzenia wobec osób → to dwa aspekty źródłowej walidacji → argument jest trafny.',2),
 ('Pracę nad potrzebami trzeba odłożyć do czasu wdrożenia, ponieważ tekst jest już poprawny.','Ryzyko nieadekwatności pozostaje → zasada wymaga początku walidacji w RE → argument jest błędny.',1),
 ('Trzeba ocenić rozsądność założenia o danych już podczas RE.','Założenie dostawcy jest niepotwierdzone → kontrola kontekstu należy do walidacji → argument jest trafny.',2),
], 'Oddzielenie zakończonej kontroli formy od niewykonanej walidacji trzech aspektów; nie podaje rozbieżności jako już rozstrzygniętej.',3)

put('T07-07','D','P',
'Recenzent twierdzi, że jedynym dopuszczalnym źródłem zmiany jest błąd analityka, a stabilność wyklucza rozważanie nowych żądań. Które argumenty korygują to rozumowanie zgodnie z zasadą ewolucji?', ['a','c','e'], [
 ('Procesy biznesowe, oferta konkurencji i priorytety klientów mogą zmieniać wymagania.','Wskazano źródła zewnętrznej ewolucji → nie wymagają one założenia wcześniejszej wady → argument jest trafny.',2),
 ('Każde żądanie trzeba wdrożyć natychmiast, aby uznać zmianę za dopuszczalną.','Możliwość zmiany współistnieje ze stabilnością → żądanie nie oznacza automatycznej realizacji → argument jest błędny.',4),
 ('Technologia, regulacje i feedback użytkowników także mogą powodować zmiany.','Wymieniono pozostałe przykłady źródłowe → katalog wykracza poza błąd autora → argument jest trafny.',2),
 ('Wykrycie wady w walidacji nigdy nie może uzasadniać zmiany wymagania.','Zasada wprost dopuszcza korektę odkrytych wad → absolutne wykluczenie jest błędne.',3),
 ('Można rozważać zmiany i zarazem zachować stabilną podstawę realizacji.','Recenzent przeciwstawił cele absolutnie → źródło wymaga godzenia obu → argument jest trafny.',4),
], 'Korekta zamkniętej błędnej teorii źródeł zmian; obejmuje sześć przykładów w dwóch grupach i relację do stabilności.',3)

put('T07-08','D','P',
'Jeden wariant nowej usługi ułatwia wykonanie pojedynczej czynności, drugi radykalnie zmienia sposób świadczenia usługi. Oba są dopiero pomysłami. Które argumenty są zgodne z zasadą innowacji?', ['b','c','e'], [
 ('Tylko radykalny wariant może być innowacją niezależnie od potrzeb.','Źródło dopuszcza dwie skale → mała poprawa łatwości użycia nie jest wykluczona → argument jest błędny.',2),
 ('Pierwszy wariant może realizować innowację małej skali.','Opis dotyczy ułatwienia czynności → łatwość użycia należy do małej skali → argument jest trafny.',2),
 ('Drugi wariant może odpowiadać innowacji dużej skali.','Rozważono przełomowy sposób świadczenia → duża skala jest dopuszczonym kierunkiem → argument jest trafny.',2),
 ('Etykieta innowacji zwalnia oba warianty ze sprawdzenia wobec potrzeb.','Warianty są dopiero pomysłami → nowość nie potwierdza adekwatności → argument jest błędny.',3),
 ('Oba warianty trzeba rozważać pod kątem lepszego zaspokojenia potrzeb niż literalna propozycja.','Cel dotyczy korzyści interesariuszy → zasada zachęca do poszukiwania lepszego zaspokojenia → argument jest trafny.',1),
], 'Porównanie dwóch skal bez gotowej historii obejścia; nie wymaga wymyślenia rozwiązania L3.',3)

put('T07-09','D','P',
'Dwa zespoły mają różne ryzyka i dostępność interesariuszy. Jeden chce ciężkiego szablonu dla każdego przypadku, drugi tylko spontanicznych rozmów bez sprawdzania ustaleń. Które argumenty poprawnie stosują zasadę systematycznej pracy?', ['a','c','e'], [
 ('Oba zespoły potrzebują odpowiednich praktyk pozyskiwania, dokumentowania, walidacji i zarządzania.','Różnica kontekstu nie usuwa zadań RE → zasada obowiązuje niezależnie od procesu → argument jest trafny.',1),
 ('Najcięższy szablon z definicji jest najlepszy w każdej sytuacji.','Sytuacje mają różne potrzeby → nie istnieje uniwersalny proces lub praktyka → argument jest błędny.',2),
 ('Praktyki i artefakty należy dobrać do problemu, kontekstu i środowiska obu zespołów.','Podano różne warunki → właściwe dopasowanie jest częścią dyscypliny → argument jest trafny.',3),
 ('Nazwa agile pozwala zrezygnować z walidacji bez rozważenia potrzeb.','Proces nie jest wyjątkiem od zadań RE → sam szyld nie uzasadnia pominięcia sprawdzenia → argument jest błędny.',1),
 ('Dawne praktyki można zachować po refleksji nad ich dopasowaniem do nowej sytuacji.','Mowa o ponownym użyciu → zasada wymaga refleksji, nie automatycznej kopii → argument jest trafny.',4),
], 'Dwie skrajne propozycje i różne warunki interesariuszy; wybór argumentów nie jest projektem procesu L3.',3)
