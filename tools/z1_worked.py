"""Dziewięć autorskich scenariuszy pokazujących zastosowanie reguł; bez danych uczniów."""
WORKED={
'T07-01':[
'Zespół rozważa godzinę doprecyzowania ryzykownego wyjątku rezerwacji. Potrzeba jest istotna, ale nie oszacowano wartości pieniężnej unikniętej przeróbki.',
'Kosztem jest praca nad wymaganiem: rozmowa, zapis i sprawdzenie. Nie zastępuj tego kosztu samym przyszłym programowaniem.',
'Korzyść może polegać na lepszym pokryciu potrzeby i zmniejszeniu ryzyka błędnego wyjątku. Sam fakt napisania dodatkowej strony nie opisuje tej korzyści.',
'Wynik: porównanie nakładu i spodziewanej korzyści jest zasadne; nie ma danych do ogłoszenia pewnego ROI lub gwarancji opłacalności tej godziny.'
],
'T07-02':[
'Zamawiający uzgodnił wygodę nowej usługi, ale operator wskazał, że nie będzie potrafił wznowić jej po awarii. Nie wybrano jeszcze sposobu odtwarzania.',
'Perspektywa zamawiającego nie wyczerpuje istotnych ról. Operator ma potrzebę wynikającą z utrzymania systemu.',
'Do pracy RE należy włączyć właściwą reprezentację tej roli i uzgodnić potrzeby, a ewentualny konflikt rozwiązać zamiast dopisać sprzeczne propozycje.',
'Wynik: ujawniono ryzyko pominięcia wymagania. Nie jest to kompletna stakeholder list ani gotowy projekt mechanizmu odtwarzania.'
],
'T07-03':[
'Sprzedaż i magazyn mówią o towarze „dostępnym”. Pierwszy dział zalicza zarezerwowane sztuki, drugi odejmuje je od stanu dostępnego.',
'Wspólne słowo nie zapewnia wspólnego znaczenia. Nawet podpisany dokument może stanowić pozorną podstawę explicit.',
'Porównanie wyniku dla przykładu z rezerwacją ujawnia różnicę. Uzgodniony termin i krótkie pętle feedbacku pomagają podtrzymać wspólne rozumienie.',
'Wynik: można uzgodnić sens tego przypadku. Zgodność jednego przykładu nie dowodzi kompletności wszystkich wymagań.'
],
'T07-04':[
'Aplikacja ewidencji narzędzi widzi skan zwrotu, a potrzeba dotyczy rzeczywistego odzyskania narzędzia. Skan może zostać wykonany omyłkowo bez zwrotu.',
'Rozdziel real-world requirement od obserwowalnego zdarzenia systemu: fizyczny zwrot i rekord skanu nie są tym samym faktem.',
'Ustal znaczenie procedury skanowania i założenia wiążącego sygnał z rzeczywistym zdarzeniem. Sam poprawny program nie potwierdza prawdziwości tego założenia.',
'Wynik: kontekst, jego zmiany i założenia wpływają na wymagania. To wyjaśnienie L2, a nie samodzielne wykonanie pełnego modelu granic L3.'
],
'T07-05':[
'Magazyn myli paczki przy wydaniu. Zaproponowano usługę z czytnikiem i nową procedurą; trzeba też obsłużyć uszkodzone etykiety.',
'Pomyłki opisują stan problemowy. Oczekiwana zdolność rozpoznania właściwej paczki jest wymaganiem, a usługa z czytnikiem jedną propozycją realizacji.',
'Sprawdzanie propozycji może ujawnić nowe wymaganie dotyczące uszkodzonych etykiet. Rozdzielenie opisów ułatwia rozmowę, lecz nie izoluje trzech obszarów.',
'Wynik: zachowano związek celu i realizacji bez uznania jednego narzędzia za samą potrzebę. Nie narzucono niezmiennej kolejności prac.'
],
'T07-06':[
'Wymaganie przewiduje całodobowy odbiór w punkcie. Zapis jest poprawny, ale założenie o całodobowej obsadzie nie odpowiada rzeczywistym godzinom pracy.',
'Najpierw odróżnij poprawność tekstu od dopasowania potrzeby i założeń. Brak błędu językowego nie zapewnia obsady.',
'Podczas RE trzeba sprawdzić porozumienie istotnych ról, adekwatne pokrycie potrzeb i rozsądność warunków kontekstu. Możliwe są różne uzgodnione korekty; nie przesądza ich sam przykład.',
'Wynik: wcześnie ujawniono ryzyko nieadekwatności. Nie jest to dowód, że przeprowadzono walidację całego systemu lub wybrano właściwą organizację obsady.'
],
'T07-07':[
'Po uzgodnieniu zakresu klient zmienił harmonogram dostaw i zgłosił potrzebę anulowania części rezerwacji. Trwa realizacja przyrostu.',
'Zmiana procesu lub priorytetu może być naturalnym źródłem nowego wymagania. Sama data zgłoszenia nie dowodzi błędu wcześniejszego RE.',
'Zgłoszenie należy rozpatrzyć z zachowaniem znanej podstawy realizacji i decyzji o dalszych pracach. Dopuszczenie zmiany nie znaczy automatycznej realizacji każdego żądania.',
'Wynik: oba cele, adaptacja i stabilność, mają uzasadnienie. Scenariusz nie narzuca jednej uniwersalnej procedury kontroli zmian.'
],
'T07-08':[
'Operator prosi o drugą kopię listy do kontroli brakujących pól. Rozmowa ujawnia potrzebę wcześniejszego wychwytywania pomyłki, a nie samej dodatkowej kartki.',
'Oddziel potrzebę od literalnej propozycji. Można zbadać prostsze sprawdzenie podczas wpisywania, zamiast automatycznie powielać listę.',
'Łatwiejsze wykonanie zadania może być innowacją małej skali. Pomysł trzeba zwalidować z potrzebami, bo sama inna technika nie dowodzi poprawy.',
'Wynik: wskazano możliwość lepszego zaspokojenia potrzeby. Nie ogłoszono zmierzonej oszczędności ani przewagi eksperta nad użytkownikiem.'
],
'T07-09':[
'Mały zespół uzgadnia krótkie przykłady, zapisuje istotne decyzje i regularnie sprawdza je z właścicielem potrzeby. Rozważa przejęcie ciężkiego procesu od dużego dostawcy.',
'Najpierw nazwij wykonywane zadania RE. Krótki zapis może nadal wspierać systematyczne pozyskiwanie, dokumentowanie, walidację i zarządzanie.',
'Przed reuse oceniaj dopasowanie do problemu, kontekstu i dostępności osób. Dawny sukces ani sam rozmiar dokumentacji nie zastępują tej refleksji.',
'Wynik: można zachować odpowiednie praktyki i zmienić pozostałe. Nie uznano jednej konfiguracji procesu za uniwersalną ani nazwy agile za zwolnienie z dyscypliny.'
],
}
