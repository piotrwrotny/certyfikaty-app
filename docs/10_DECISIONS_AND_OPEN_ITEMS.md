# 10 — Decyzje, aktualność i granice odbioru

## Decyzje właściciela i nowe zlecenie

| ID | Ustalenie | Skutek |
|---|---|---|
| OWN-01 | R06: G1 CLOSED dla B01–B04 v0.2, K-04 zachowane | B jest przyjętym kontraktem, nie wracamy do historycznie otwartego G1 |
| OWN-02 | Właściciel wybrał obraz „Skupiona sesja o rodzajach…” | Ten kierunek jest bazą organizacji UI |
| OWN-03 | Bieżąca wypowiedź: „stylistyka jest w pełni zaakceptowana” | Bez ponownej eksploracji wyglądu; aktualizuje historyczny status stylistyki w D |
| OWN-04 | Zlecenie przygotowania wsadu repozytorium dla Claude Code, PWA i nazwanych profili | Powstaje konkretny starter techniczny i backlog; oryginalne B/C/D/START nie są nadpisywane |

Użycie promptu START_CLAUDE_CODE przez właściciela stanowi zlecenie agentowi implementacji opisanej w tej paczce. Rutynowe decyzje programistyczne nie wymagają kolejnych potwierdzeń. Ten dokument nie jest zapisem, że już powstała PWA, został wykonany G3 lub formalnie zamknięto G4. Nie wydłużaj kolejki zgód w celu rozpoczęcia testów technicznych; warunki dopuszczenia treści i decyzje bramek mają własną odpowiedzialność.

## Przyjęte rozsądne założenia

| ID | Przyjęcie v0.1 | Dlaczego / granica |
|---|---|---|
| TECH-01 | Lokalny profil na urządzeniu, bez konta i synchronizacji | Właściciel opisał przełączanie zapisanego postępu, nie system kont |
| TECH-02 | Wspólny korpus, osobne dane osoby | Profile nie wymagają duplikowania treści; wszystkie dowody zależą od profileId |
| TECH-03 | Automatyczne sprawdzenie LAN podczas aktywnej app/wznowienia, z okresowym fallbackiem | Wykonalny, przenośny kontrakt PWA; nie obiecujemy pracy po zamknięciu aplikacji |
| TECH-04 | Statyczny HTTPS host w LAN i same-origin content | Lekkość i brak backendu; konkretny hostname/certyfikat ustala operator |
| TECH-05 | React/TS/Vite/Dexie/PWA plugin, plain CSS | Utrzymywalny lekki start; wersje dobiera i blokuje implementacja |
| TECH-06 | Aktualizacja kodu przez prompt, treści atomowo dla nowych prób | Chroni odpowiedź, skupienie i przypięte rewizje |
| TECH-07 | Eksport/import pojedynczego profilu bez merge | Prosty ratunek/przenoszenie, brak niejawnego scalania dowodów |
| TECH-08 | Review-only fixtures oddzielone od bazy ucznia | Umożliwia pełną implementację bez fałszywego przyjęcia C |

Nie trzeba teraz pytać właściciela o nazwy profili, UUID, bibliotekę ułamków, nazwę folderu ani rozmieszczenie statusu offline — decyzje są opisane. Synchronizacja między urządzeniami, prywatność profili z hasłami i firmowe SSO byłyby odrębnym rozszerzeniem, nie domyślną interpretacją.

## Rzeczywisty aktualny stan treści

- C01–C04 v0.2: rzeczywisty authoring, 9 zamkniętych pytań / 38 rationale, 7 otwartych aktywności; C-AC-12 i właściwe dopuszczenia pozostają otwarte.
- T21 v0.1, bieżąca wersja plików 2: 32 zamknięte /128 rationale, 4 otwarte; COMPLETE FOR SEPARATE REVIEW. Żadna forma testu T21 nie została dopuszczona samym authoringiem.
- D v0.1 opisuje dawny snapshot C v0.1 (0/3). Nie poprawiono go wstecz; tę nowszą nakładkę statusu stosuje implementacja. D nie jest źródłem stanu bieżącej bazy pytań.
- Odrębne review C/T21 nie dziedziczy zgody na AI review przyjętej dla B w G1. Brak review nie uniemożliwia technicznego importu i renderowania w trybie demonstracyjnym.

## Pozostałe warunki i właściciel decyzji

| Kwestia | Warunek | Czy blokuje niezależne kodowanie? |
|---|---|---|
| G2 — treści i użycia | Odrębne review, prawa właściwe dla kanału, decyzja zakresu użycia | Nie; blokuje deklarowanie learner-approved i publikację tych materiałów jako przyjętych |
| G3 — walkthrough | Rzeczywiste treści i ścieżki A/P/K, feedback, korekta, follow-up, powrót, symulacja odroczenia | Nie; nie oznaczaj go wykonanym na podstawie samych fixture testów |
| G4 — formalny handoff | Decyzja właściciela według projektu, z zakresem i rzeczywistymi pozostałymi zależnościami | Nie udawaj zamknięcia; dostarcz konkretny wynik techniczny do oceny |
| URL/certyfikat hosta | Stały origin HTTPS i sposób publikacji w konkretnej LAN | Nie; testuj localhost i podkatalog, przygotuj konfigurację |
| Urządzenia/AT | Rzeczywiste instalacje i czytnik zgodnie z docs/07 | Brak sprzętu oznacza konkretny niewykonany check, nie zatrzymanie całej pracy |
| Forma U-TOPIC | Dopuszczenie doboru, kolejności, przecieków, rodzin i eligibility | Nie; implementuj silnik na syntetycznej formie technicznej, bez udawania zatwierdzonego testu T21 |

Rozwiązania zależne od długości treści należy obejrzeć po pełnym imporcie: długie rationale z wieloma źródłami, wielowierszowe K, comparisons, wielokrotne relacje per decyzja, brak drugiego wariantu, wycofanie w trakcie testu i zakres alt/tytułów. Kontrola autora repozytorium nie jest badaniem użytkowników ani dowodem retencji.
