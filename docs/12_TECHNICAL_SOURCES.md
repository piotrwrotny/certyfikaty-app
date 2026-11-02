# 12 — Dokumentacja techniczna

Sprawdzono 2.11.2026. To pierwotne dokumentacje zachowania platformy i używanych narzędzi; wybór stosu oraz konkretne limity/cooldown są decyzjami technicznymi tej paczki. Wersje zależności mają zostać zweryfikowane i utrwalone przy implementacji. Nie cytujemy z pamięci tabel wsparcia ani nie wpisujemy niezweryfikowanych wersji npm.

| Źródło | Zakres użyty w projekcie |
|---|---|
| [MDN — Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) | HTTPS, rejestracja i rozdział app cache od zwykłego pobierania |
| [web.dev — Service workers](https://web.dev/learn/pwa/service-workers) | Lifecycle, waiting, nietrwała pamięć workera i brak gwarantowanej ciągłej pracy |
| [Vite PWA — Prompt for update](https://vite-pwa-org.netlify.app/guide/prompt-for-update) | Kontrolowane powiadomienie o nowej aplikacji zamiast automatycznego reload |
| [MDN — Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine) | Zdarzenie sieci jako wskazówka, nie dowód dostępności hosta LAN |
| [MDN — Storage quotas and eviction](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) | IndexedDB/Cache, limity i utrata danych zależna od origin/przeglądarki |
| [MDN — StorageManager.persist](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist) | Opcjonalna prośba o trwałość i możliwość odmowy |
| [Dexie — transaction](https://dexie.org/docs/Dexie/Dexie.transaction()) | Krótkie transakcje DB i zakaz opierania ich czasu życia na pobieraniu sieciowym |
| [Vite — Static deployment](https://vite.dev/guide/static-deploy) | Wynik build jako pliki statyczne, base i brak przeznaczenia vite preview do produkcji |
| [MDN — Making PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) | Manifest, kryteria i różnice mechanizmów instalacji |

Interpretacja projektowa: aktualizator treści jest własnym, wersjonowanym protokołem aplikacji opartym na HTTP/IndexedDB. Żadna z dokumentacji nie narzuca jego struktury JSON, rozmiaru paczki, kryteriów pedagogicznych ani odroczenia ≥24 h.
