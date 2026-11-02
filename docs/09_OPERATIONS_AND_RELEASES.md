# 09 — Uruchomienie w LAN i utrzymanie

## Docelowy model

Statyczne pliki aplikacji i `content/manifest.json` na tym samym hostcie HTTPS w sieci wewnętrznej. Nie ma serwera danych uczniów ani logowania do aplikacji w przyroście. Dostęp do LAN/ewentualnego firmowego SSO jest warunkiem infrastruktury, nie nazwanym profilem ucznia. Nie dodawaj integracji SSO bez konkretnego zlecenia i środowiska.

Claude przygotowuje build i instrukcję dla administratora, nie publikuje automatycznie. Nie używaj `vite preview` jako produkcyjnego serwera. Dokumentacja wdrożenia ma zawierać ustalany przy instalacji stabilny URL, base/scope, certyfikat, MIME, nagłówki cache, fallback na shell bez przechwytywania brakującego JSON oraz sposób rollbacku. Brak docelowego hosta nie blokuje build/test na localhost.

## Reguły serwowania

| Zasób | Zasada |
|---|---|
| HTML wejściowy, SW, manifest treści | Rewalidacja/no-cache zgodnie z rolą; manifest treści pobierany no-store, nie cache-first w SW |
| Hashed JS/CSS/ikony | Długie cache immutable; stare hashe dostępne dla otwartych kart |
| Paczki `content/releases/<id>/...` | Niezmienne bajty i URL; długie cache; nigdy nadpisanie pod tą samą rewizją |
| Brakujący JSON / release | Prawdziwe 404 z odpowiednim MIME; nie HTML SPA z kodem 200 |
| Trasy UI | Fallback app shell, spójny base, bez wchodzenia poza scope |
| Dane profili | Wyłącznie lokalny IndexedDB; nie ma endpointu upload/telemetrii |

Nie pobieraj bibliotek/fontów z publicznych CDN. Link bibliograficzny może wymagać zewnętrznego internetu, ale sam materiał i zadanie pozostają używalne offline. Dane diagnostyczne aktualizacji nie zawierają nazw profili ani odpowiedzi. Brak zewnętrznej analityki w pierwszym przyroście.

## Publikacja następnej paczki przez operatora

1. Przekaż do repo parę tematu i ewentualny rzeczywisty zapis dopuszczenia. Wykonaj import, raport i `content:validate`.
2. Wygeneruj immutable paczki i manifest dla właściwego kanału. Fail, jeśli publikowane użycie nie jest dopuszczone. Review i learner to osobne output directories; nie tylko flaga w UI.
3. Umieść wszystkie pliki nowego release na hoście i sprawdź ich rozmiary/hashy/URL. Manifest opublikuj **na końcu** atomowym rename/swap pliku; nie edytuj go w trakcie pobierania przez klientów.
4. Otwórz app w nowej i istniejącej bazie. Sprawdź aktualizację, offline, profile, aktywną próbę starej rewizji i brak utraty postępu. Dla zmiany klucza/rodziny przygotuj impact report.
5. Przy błędzie opublikuj poprawne wydanie z wyższym sequence, odwołujące się do poprzednich payloadów; zachowaj listę wycofań. Nie polecaj uczniom kasowania danych witryny jako procedury aktualizacji.

## Kopie i utrzymanie

Użytkownik może wyeksportować pojedynczy profil i odtworzyć go jako nowy. Przy zmianie origin zaplanuj eksport/import przed przełączeniem; sama wspólna nazwa profilu nie przenosi historii między przeglądarkami/urządzeniami. Użycie trybu prywatnego lub usunięcie danych witryny może usunąć zapis — pokaż informację przy kopii/ustawieniach, bez straszącego modalu w sesji.

Instrukcja administratora po implementacji obejmuje upgrade app, content-only upgrade, rollback, brak LAN, quota, zablokowaną migrację przez inną kartę i odczyt historii wycofanych pytań. Każda naprawa ma zachować dane, a działania destrukcyjne wymagają świadomego wyboru użytkownika.
