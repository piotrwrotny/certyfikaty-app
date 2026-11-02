# Fixtures: testowe CA (TYLKO do testów)

Dwie samopodpisane pary certyfikat/klucz EC wygenerowane jednorazowo przez `openssl` wyłącznie do testów `scripts/lan/ca.ts` (eksport/import kopii CA). **To nie jest prawdziwe CA** i żadne urządzenie ani serwer im nie ufa. Klucze są publiczne w repozytorium świadomie; prawdziwe CA Caddy nigdy tu nie trafia (`.gitignore`: `caddy-ca-backup*.json`).
