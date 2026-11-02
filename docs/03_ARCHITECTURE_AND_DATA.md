# 03 — Architektura lekkiej aplikacji i dane

## Wybór techniczny

Domyślnie **TypeScript strict + React + Vite**, zwykły CSS oparty na `design/tokens.css`, **Dexie/IndexedDB**, **vite-plugin-pwa** z aktualizacją `prompt`, Vitest i Playwright. Jest to decyzja startowa tego handoffu, nie wybór dokonany wcześniej przez D. Claude sprawdza aktualne zgodne wersje i zapisuje lockfile oraz Node LTS w `.node-version`/engines; nie instaluje arbitralnie starych wersji na podstawie tego dokumentu.

React zarządza widokami, nie regułami oceny. Wystarczą lokalny state/reducer i proste serwisy; brak potrzeby Redux, SSR, komponentowego frameworka wizualnego, API, serwera kont, płatnych usług lub rozbudowanej biblioteki wykresów. Ajv 2020 może walidować build/import; runtime waliduje pobrane paczki przed aktywacją. Nie pobieraj schematów z internetu w czasie pracy.

Plan katalogów aplikacji:

```text
src/domain/          scoring, attempt transitions, evidence, eligibility
src/data/            IndexedDB repositories, migrations, profile boundary
src/content/         typed contract, validation, projections, selectors
src/updates/         content updater, release activation, SW coordination
src/features/        session, question, knowledge, topic-test, evidence, profiles
src/ui/              shared accessible primitives and CSS tokens
scripts/             deterministic content validation/build/release
content/inbox/       operator input; never part of public dist by default
content/normalized/  reviewed mapping source; separate review/learner channels
public/content/      generated release output only
tests/               unit, persistence, e2e, visual, failure fixtures
```

Nazwy katalogów są konwencją; najważniejsze są granice modułów. Próg planistyczny: początkowy JS app shell ≤250 KiB gzip bez treści/testów i brak zdalnych fontów/CDN. Raportuj zmierzony rozmiar; uzasadnione odstępstwo udokumentuj, zamiast usuwać walidację lub dostępność. Nie ładuj całego banku do DOM na wejściu. Nie dodawaj skomplikowanej optymalizacji przed pomiarem.

## Trzy klasy danych

| Klasa | Gdzie | Właściciel i cykl życia |
|---|---|---|
| App shell | Cache Storage zarządzane przez SW | Wersja aplikacji, assety z hashem; bez danych profilu |
| Paczki edukacyjne | IndexedDB: niezmienne payloady / indeks wydania | Wspólne na urządzeniu; download do staging; odrębny aktywny release pointer |
| Dane ucznia | IndexedDB: wszystkie rekordy z profileId | Profile, próby, odpowiedzi, ekspozycja, kontakty, dowody, plany, zgłoszenia i powrót; aktualizator treści ich nie usuwa |

Jedna baza IndexedDB upraszcza transakcję publikacji; rozdziel object stores i repozytoria. Nie przechowuj całego stanu w localStorage. sessionStorage może przechować ID wyboru w danej karcie, bez odpowiedzi. Baza demonstracyjna i uczniowska mają różne nazwy; tryb demonstracyjny nie uruchamia się automatycznie w wydaniu ucznia.

## Minimalne rekordy i więzy

| Rekord | Klucz / wymagane znaczenie |
|---|---|
| Profile | `id` UUID, `name`, normalizedName, createdAt, preferences; brak hasła i nazwy jako klucza |
| Attempt | `id`, profileId, activityKind, lifecycle, immutable initialMode, currentMode, formRef, contentReleaseId, pinned itemRef+revision+snapshot, timestamps, conditions, versionCounter |
| Answer | `[profileId, attemptId, itemInstanceId]`; odpowiedź A/P/K/open, draft/submitted, responseVersion, submittedAt; stan K null/true/false |
| Evaluation | profileId, attemptId, scoringVersion, exact fraction, decision outcomes, source revision, assessedAt, evaluationMethod; pierwotna ocena i ewentualna korekta są osobnymi rekordami |
| Exposure / Contact | profileId, eventId, item/family/revision, criterion/aspect, kind, scope, revealedAt, origin; snapshot historii sprzed prezentacji jest osobno |
| NavigationContext | profileId, attemptId, itemInstanceId+revision, anchorDecisionId, reveals, open sections, scroll, focusTarget, branch stack |
| Evidence / Plan | profileId, criterion/aspect, source attempt/event IDs, conditions and limitations; projekcja jest odtwarzalna, nie liczba mastery |
| ContentRelease / Package | releaseId+sequence, schema/app compatibility, validation state, payload sha, staging/ready/active, timestamps; treści niemutowalne |
| Withdrawal / Issue | referencja item+revision, discoveredAt, source release, neutral learner status; zgłoszenie lokalne oddzielone od odgórnej decyzji o wycofaniu |

Przy tworzeniu próby zapisz stan nowości i oba odstępy **przed** pierwszym pokazaniem bieżącego itemu; następnie zapisz ekspozycję. Operacje muszą być idempotentne. Rekord zwraca sukces dopiero po commit transakcji. Nie polegaj na `beforeunload` jako głównym zapisie.

## Profile — dokładne zasady

- Przy nowym otwarciu aplikacji/karty z brakiem wyboru pokaż selektor. Odświeżenie aktywnej karty odtwarza jej wybrany profil i tę samą próbę; to nie jest nowy wybór użytkownika. Nowa instancja PWA zaczyna od selektora. Zapamiętana ostatnia nazwa jest sugestią.
- Nazwa: NFC, trim, 1–40 punktów kodowych, bez znaków sterujących i tekstu składającego się z samych niewidocznych znaków. Unikalność po NFC/trim i locale-independent case fold; „Ania”/„ania” traktuj jako konflikt, „Żaneta” i „Zaneta” jako różne. Waliduj w transakcji, nie tylko w polu UI.
- Wybór profilu ustala kontekst karty. Nie ma współdzielonego globalnego `currentProfileId`, który zmieni otwartą kartę innej osoby. Operacje async przechwytują profileId i attemptId przy uruchomieniu; po zmianie kontekstu nie mogą zapisać do nowo wybranego profilu.
- Domyślnie jeden piszący edytor danej próby: transakcja z versionCounter/lease i komunikacja BroadcastChannel, z fallbackiem dla braku API. Druga karta jest tylko do odczytu albo jawnie przejmuje po utracie lease. Sam timeout/komunikat bez atomowej kontroli wersji nie chroni przed nadpisaniem.
- Zmiana profilu: await zapis draftu/kontekstu; jeśli trwa test, zapisz pause i czas przerwy bez finalizacji ani konwersji; odłącz listenery/cache widoku; wróć do selektora. Przy błędzie nie przełączaj.
- Usunięcie profilu wymaga potwierdzenia z nazwą; odmów, jeśli w innej karcie trwa zapis/aktywna próba tego profilu, albo przeprowadź jawne zamknięcie lease. Usuń wyłącznie rekordy tego profileId, nigdy content stores. Nie ma automatycznej funkcji „wyczyść bazę po błędzie”.

Nazwane profile rozdzielają postęp na jednym urządzeniu. Nie są uwierzytelnianiem ani ochroną dostępu innych osób korzystających z tej samej przeglądarki. W przyroście nie tworzymy PIN-ów i kont pod pozorem wyboru profilu.

## Zapis, migracje i kopia

Draft zapisz przy każdej decyzji/zmianie flagi i przed istotną nawigacją, submit/finalize jako jedną transakcję. Pola tekstowe mogą mieć krótki debounce, ale blur/submit/switch awaitują zapis. Zdarzenie i jego pochodne nie mogą zapisać się połowicznie. Błędu zapisu nie przedstawiaj jako błędnej odpowiedzi.

Migracje mają numer, test kopii starej bazy i obsługę `versionchange`/blocked przez inną kartę. Nie usuwaj bazy ani nie kasuj rekordów nieznanej wersji. Nie odpalaj fetch/crypto w otwartej transakcji IndexedDB; pobranie i digest wykonaj wcześniej. Zmiana schematu treści nie musi wymuszać zmiany schematu postępu.

Eksport profilu zawiera wersję formatu, aplikacji, dane i integralność, historię ekspozycji, warunki, oryginalne oceny i snapshoty prób potrzebne do ich odczytu/wznowienia. Nie eksportuje całego nieużytego banku ani innych profili. Import waliduje rozmiar/schemat/referencje, pokazuje nazwę/liczbę prób i tworzy nowy lokalny profileId. Nie scala i nie nadpisuje historii w v0.1; zachowuje oryginalne ID w polu provenance i przemapowuje spójne lokalne odwołania. Importowana ekspozycja nie może zniknąć; jej niepełność oznacza „historia niepełna”, nie „nieznane pytanie”. Nieznany snapshot pozostaje czytelny jako archiwum, bez wyliczenia nowego wyniku z innej rewizji.

Przechowywanie lokalne zależy od przeglądarki. Użyj `storage.estimate`, opcjonalnego `persist` i jasnego eksportu. Przy odmowie persist aplikacja działa; pokaż wynik w Danych aplikacji. Nie twierdź, że cache lub instalacja gwarantują zachowanie postępu po usunięciu danych witryny. Zmiana domeny/protokołu/portu oznacza inny origin i wymaga eksportu/importu, nie domniemanej synchronizacji.

Format kopii jest określony w `schemas/profile-backup.schema.json` i przykładzie `examples/profile-backup.example.json`: envelope zawiera `payloadJson` jako string i SHA-256 jego dokładnych UTF-8 bajtów. Najpierw zweryfikuj digest, potem sparsuj payload i sprawdź schemat/domain references przed transakcją importu. Nie licz hash z ponownie serializowanego obiektu.
