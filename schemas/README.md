# Schematy i reguły semantyczne

Draft JSON Schema 2020-12; `$id` pod `ireb-cpre.local` jest identyfikatorem, nie serwerem, z którego runtime ma pobierać pliki. Do walidatora załaduj lokalne schematy. Walidacja schematu nie wystarcza do publikacji ani oceny poprawności klucza.

- `content-package.schema.json`: startowy kontrakt obiektów. Wymagane są jednoznaczne item ID+revision, format, instrukcja, klucz i rationale wszystkich decyzji.
- `content-manifest.schema.json`: atomowe wydanie. URL jest relatywny do manifestu, same-origin i w obrębie configured content root. Odrzuć `..` poza root, protokół inny niż HTTPS/localhost, cross-origin i redirects do innych origin. SHA/bytes obejmują dokładne pobrane bajty, bez normalizacji tekstu.
- `profile-backup.schema.json`: envelope i definicja payload. SHA-256 policz z dokładnych UTF-8 bajtów **odkodowanego stringa `payloadJson`**, potem JSON.parse i walidacja przez `#/$defs/payload`. Nie licz digest z ponownie serializowanego obiektu. Własności obiektów domenowych wewnątrz records trzeba dodatkowo walidować docelowymi typami aplikacji; ten envelope nie zastępuje jej modelu danych.

## Reguły poza JSON Schema — obowiązkowe

1. Unikalność ID+revision i ID decyzji; zmiana bajtów pod tą samą rewizją jest błędem. Wszystkie references muszą trafić w lokalny obiekt albo jawnie wskazaną zależność paczki w tym samym release. Zależność nieobecna blokuje aktywację.
2. A ma jeden klucz; P liczba poprawnych ID = k≤liczba opcji; K m = liczba wierszy i dokładnie jeden boolean klucza dla każdego. Wszystkie ID klucza są rzeczywistymi decyzjami. Dokładnie jedno rationale per decyzja, z istniejącą regułą i źródłem. Nie wywodź formatu z prefiksu ID.
3. Criterion/aspect mappings odnoszą się do istniejących zakresów; sourceRefs do rzeczywistego źródła i lokalizacji, bez przypisywania GEN stron do SEN. Role SUPPORTS/MEASURES/MENTIONS nie są zamienne.
4. Osobne `rights.status/channels/decisionRef` opisują prawa konkretnego użycia i kanału, a `status.review/publication/allowedUses` review i dopuszczenia. `manifest.publicationChannel` musi być dozwolony przez prawa każdej paczki. Kanał learner odrzuca review-fixture, runtimeCompleteness partial, publication review-only/withdrawn, brak właściwego review/decisionRef, brak praw permitted/rightsDecisionRef dla kanału lub brak zamierzonego użycia. Zgoda dla learning nie daje automatycznie topic-test/delayed ani nowej rodziny. Forma ma odrębne review i eligibility.
5. Relacje treści nie tworzą wykonanych R25 EVIDENCE_FOR ani R26 zdarzeń powrotu. NAVPLAN jest planem, nie dowodem wykonania. Zdarzenia R25/R26 powstają z faktycznej aktywności profilu.
6. Kontakty per fragment/RAT nie rozszerzają się automatycznie do całego EO. Nowość rodziny wymaga review i historii osoby sprzed ekspozycji; brak informacji nie oznacza unknown/new.
7. W backup wszystkie records mają ten sam profileId co profile.id i poprawne wewnętrzne references. Import nie może zapisać danych innego profilu, podmienić oryginalnej oceny, usunąć ekspozycji lub cofnąć konwersji testu.
8. Treść Markdown jest bezpiecznie renderowana. Review i learner mają osobne artefakty wyjściowe; review-only nie jest ukrytym za flagą fragmentem produkcyjnego banku.

W razie potrzeby rozszerzenia modelu dla rzeczywistego materiału Claude wersjonuje schemat i migrację, zapisuje uzasadnienie i zachowuje B/FR. Nie pomija danych niewygodnych dla schematu.

Pusta lista packages jest poprawnym wydaniem przed dopuszczeniem pierwszej treści. Nie jest błędem aktualizacji ani wnioskiem o wiedzy osoby. Manifest learner z zerem paczek nadal nie może zawierać źródeł review-only.
