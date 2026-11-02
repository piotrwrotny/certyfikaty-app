# Z1 — rzeczywisty raport walidacji

Autor: agent AI. Data 2026-11-02. Kontrola wyłącznie autorska.

## Dostępność narzędzi

content:lint — nie uruchomiono. content:convert — nie uruchomiono. content:validate aplikacji — nie uruchomiono. Brak scripts/content/authoring-cli.ts, walidatora content-package i kodu aplikacji; samo package.json nie wystarcza. Nie utworzono ręcznego content/normalized.

Pomocnicze wykonanie: python tools/validate_authoring_local.py --existing-normalized wskazany_katalog_T21. Użyto jsonschema 4.25.1, Draft 2020-12 i lokalnie zarejestrowanych schematów. Zależności narzędzia nie są spakowane. Dokładny rzeczywisty argument istniejącego katalogu zapisano w LOCAL_VALIDATION.json; nie jest on przenośnym poleceniem integracji.

## Wyniki

| Kontrola | Rzeczywisty wynik |
| --- | --- |
| UTF8_LF_no_BOM | 329 |
| schema_comment_path | 136 |
| schema_objects | 329 |
| topic_directory_name | 7 |
| draft_without_cli | 7 |
| global_unique_id | 715 |
| object_filename | 301 |
| provenance_file_exists | 23 |
| no_author_created_decisions | 14 |
| neutral_criterion_label | 54 |
| criterion_order | 7 |
| typed_reference | 2773 |
| local_reference | 2773 |
| relation_condition | 83 |
| real_uri_structure | 25 |
| source_location | 182 |
| relation_endpoint_kind | 92 |
| aspect_belongs_to_criterion | 313 |
| safe_markdown | 1292 |
| no_template_url | 1292 |
| option_unique_id | 108 |
| allowed_weight | 108 |
| K_semantics | 37 |
| rationale_three_part_structure | 435 |
| see_matches_current_routing | 435 |
| A_semantics | 41 |
| followup_is_used | 54 |
| P_semantics | 30 |
| base_has_correction | 27 |
| alternate_help | 27 |
| two_followups | 27 |
| followup_role_scope | 54 |
| open_sections | 45 |
| open_rubric_components | 45 |
| no_open_delayed_in_learning | 45 |
| complete_BFGD_scope | 27 |
| skippable_prerequisite | 2 |
| derived_rationale_id_unique | 435 |
| no_collision_with_available_normalized | 1 |

Błędy: 0. Ostrzeżenia: 7; wszystkie siedem dotyczy braku decyzji dla r2, po jednym na temat. Odrębne luki praw/review/CLI/open-D pozostają w manifeście; brak błędów schematu ich nie usuwa.

Sprawdzono nazwy, unikalność ID, format A/P/K, parametry, referencje i rodzaje końców, przynależność aspektów, komplet B/F/G/D, scope i role korekt, niepustą inną pomoc, rubryki, routing see, podstawy źródłowe reguł, provenance i brak chronionych plików. Sprawdzono kolizje z dostępnym snapshotem T21 w contract_inputs/content/normalized. Nie jest to kontrola z niedostarczonymi paczkami T08–T40.

566 wektorów to obliczenia według regulaminu i C02, bez wykonania aplikacyjnego scorer. SCORING_VECTORS.csv podaje każdą odpowiedź i dokładny oczekiwany ułamek. Brak testu aplikacji pozostaje jawny.

## Realne poprawki

| ID poprawki | Stan przed | Zmiana | Dowód po zmianie |
| --- | --- | --- | --- |
| Z1-APP-FIX-01 | Pierwszy przebieg zgłosił 128 skrótowych rationale bez jawnego pełnego trójczłonowego toku. | Dopisano odpowiednią źródłową regułę między lokalną przesłanką a wynikiem, zachowując klucze i wagi. | Lokalna kontrola struktury rationale: brak błędów; pełny tekst w pytaniach i DECISION_TRACE.csv. |
| Z1-APP-FIX-02 | Robocza wersja G dla KRY-A01 zawierała wiersz o klasyfikacji modułu wewnętrznego. | Zastąpiono go przypadkiem niezmienianego zewnętrznego harmonogramu; każdy wiersz dotyczy wyłącznie istotnego wpływu mimo braku zmiany. | T07-GC01; KRY-A01 zachowuje wąski zakres. |
| Z1-APP-FIX-03 | Robocza kotwica podsystemu wskazywała Handbook s.10–11. | Po odczycie doprecyzowano do §1.1, Definition 1.4 i uwagi o podsystemach, fizyczna s.12. | REG-T01-04-03; osobne poprawne wsparcie Glossary s.29. |
| Z1-APP-FIX-04 | Oryginalne korekty dostarczały tylko F, czasem otwarte; brak G i pełnej alternatywnej pomocy. | 27 korekt ma rzeczywiste zamknięte F/G w kolejności i inną pomoc; otwarte F zachowane oddzielnie. | Kontrole two_followups, followup_role_scope i alternate_help bez błędów. |
| Z1-APP-FIX-05 | Schema open nie pozwala bezpiecznie zapisać roli delayed; zwykły eksport mógłby wystawić D do Nauki. | Zachowano 20 oryginalnych otwartych D z ID i rubrykami poza parserem tematów, z mapą migracji. | Z1-GAP-OPEN-D pozostaje otwartą decyzją reprezentacji, a nie pozornie usuniętą luką. |
| Z1-APP-FIX-06 | Pierwsza adaptacja REM-A korzystała z szerszej pomocy PR04, a alternatywna pomoc głównego PR04 zbyt podobnie powtarzała cztery pytania. | REM-A otrzymała pierwotny wąski rdzeń C i przykład istotnego wpływu mimo niezmienności; PR04 otrzymał tabelę rozdzielającą sygnał od realnego zdarzenia. | Ręcznie ponownie sprawdzono zgodność celu korekty z KRY-A01 i KRY-T07-04; walidacja scope i odwołań bez błędów. |

## Niezmienniki migracji

| Kontrola | Wynik | Dowód |
| --- | --- | --- |
| retrieval_preserved_RP-T01-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T01-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T01-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T01-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T01-01-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T01-01-F01 | OK | content/authoring/T01/open/Z1-T01-01-F01.md |
| question_core_preserved_Z1-T01-01-D01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| retrieval_preserved_RP-T01-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T01-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T01-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T01-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T01-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T01-02-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T01-02-D01 | OK | handoff/Z1/retained_open_delayed/T01/open/Z1-T01-02-D01.md |
| retrieval_preserved_RP-T01-03 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T01-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T01-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T01-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T01-03-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T01-03-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T01-03-D01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| retrieval_preserved_RP-T01-04 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T01-04 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T01-04 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T01-04 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T01-04-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T01-04-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T01-04-D01 | OK | handoff/Z1/retained_open_delayed/T01/open/Z1-T01-04-D01.md |
| retrieval_preserved_RP-T01-05 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T01-05 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T01-05 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T01-05 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T01-05-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T01-05-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T01-05-D01 | OK | handoff/Z1/retained_open_delayed/T01/open/Z1-T01-05-D01.md |
| all_four_roles_T01 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| retrieval_preserved_RP-T02-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T02-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T02-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T02-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T02-01-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T02-01-F01 | OK | content/authoring/T02/open/Z1-T02-01-F01.md |
| question_core_preserved_Z1-T02-01-D01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| retrieval_preserved_RP-T02-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T02-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T02-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T02-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T02-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T02-02-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T02-02-D01 | OK | handoff/Z1/retained_open_delayed/T02/open/Z1-T02-02-D01.md |
| all_four_roles_T02 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| retrieval_preserved_RP-T03-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T03-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T03-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T03-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T03-01-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T03-01-F01 | OK | content/authoring/T03/open/Z1-T03-01-F01.md |
| open_preserved_Z1-T03-01-D01 | OK | handoff/Z1/retained_open_delayed/T03/open/Z1-T03-01-D01.md |
| retrieval_preserved_RP-T03-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T03-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T03-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T03-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T03-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T03-02-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T03-02-D01 | OK | handoff/Z1/retained_open_delayed/T03/open/Z1-T03-02-D01.md |
| all_four_roles_T03 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| retrieval_preserved_RP-T04-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T04-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T04-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T04-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T04-01-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T04-01-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T04-01-D01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| retrieval_preserved_RP-T04-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T04-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T04-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T04-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T04-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T04-02-F01 | OK | content/authoring/T04/open/Z1-T04-02-F01.md |
| question_core_preserved_Z1-T04-02-D01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| all_four_roles_T04 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| retrieval_preserved_RP-T05-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T05-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T05-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T05-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T05-01-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T05-01-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T05-01-D01 | OK | handoff/Z1/retained_open_delayed/T05/open/Z1-T05-01-D01.md |
| retrieval_preserved_RP-T05-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T05-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T05-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T05-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T05-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| question_core_preserved_Z1-T05-02-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T05-02-D01 | OK | handoff/Z1/retained_open_delayed/T05/open/Z1-T05-02-D01.md |
| retrieval_preserved_RP-T05-03 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T05-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T05-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T05-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T05-03-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T05-03-F01 | OK | content/authoring/T05/open/Z1-T05-03-F01.md |
| open_preserved_Z1-T05-03-D01 | OK | handoff/Z1/retained_open_delayed/T05/open/Z1-T05-03-D01.md |
| all_four_roles_T05 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| retrieval_preserved_RP-T06-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T06-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T06-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T06-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| open_preserved_Z1-T06-01-B01 | OK | content/authoring/T06/open/Z1-T06-01-B01.md |
| question_core_preserved_Z1-T06-01-F01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T06-01-D01 | OK | handoff/Z1/retained_open_delayed/T06/open/Z1-T06-01-D01.md |
| retrieval_preserved_RP-T06-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T06-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T06-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T06-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T06-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T06-02-F01 | OK | content/authoring/T06/open/Z1-T06-02-F01.md |
| open_preserved_Z1-T06-02-D01 | OK | handoff/Z1/retained_open_delayed/T06/open/Z1-T06-02-D01.md |
| all_four_roles_T06 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| retrieval_preserved_RP-T07-01 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-01 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-01-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-01-F01 | OK | content/authoring/T07/open/Z1-T07-01-F01.md |
| open_preserved_Z1-T07-01-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-01-D01.md |
| retrieval_preserved_RP-T07-02 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-02 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-02-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-02-F01 | OK | content/authoring/T07/open/Z1-T07-02-F01.md |
| open_preserved_Z1-T07-02-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-02-D01.md |
| retrieval_preserved_RP-T07-03 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-03 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-03-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-03-F01 | OK | content/authoring/T07/open/Z1-T07-03-F01.md |
| open_preserved_Z1-T07-03-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-03-D01.md |
| retrieval_preserved_RP-T07-04 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-04 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-04 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-04 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-04-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-04-F01 | OK | content/authoring/T07/open/Z1-T07-04-F01.md |
| open_preserved_Z1-T07-04-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-04-D01.md |
| retrieval_preserved_RP-T07-05 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-05 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-05 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-05 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-05-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-05-F01 | OK | content/authoring/T07/open/Z1-T07-05-F01.md |
| open_preserved_Z1-T07-05-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-05-D01.md |
| retrieval_preserved_RP-T07-06 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-06 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-06 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-06 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-06-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-06-F01 | OK | content/authoring/T07/open/Z1-T07-06-F01.md |
| open_preserved_Z1-T07-06-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-06-D01.md |
| retrieval_preserved_RP-T07-07 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-07 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-07 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-07 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-07-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-07-F01 | OK | content/authoring/T07/open/Z1-T07-07-F01.md |
| open_preserved_Z1-T07-07-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-07-D01.md |
| retrieval_preserved_RP-T07-08 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-08 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-08 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-08 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-08-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-08-F01 | OK | content/authoring/T07/open/Z1-T07-08-F01.md |
| open_preserved_Z1-T07-08-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-08-D01.md |
| retrieval_preserved_RP-T07-09 | OK | Polecenie i każdy element modelu zachowane w open. |
| material_preserved_EX-KRY-T07-09 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CE-KRY-T07-09 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| material_preserved_CMP-KRY-T07-09 | OK | ID i pełny źródłowy przykład/kontrprzykład/oś porównania zachowane. |
| question_core_preserved_Z1-T07-09-B01 | OK | Stem, opcje, klucz i waga bez zmiany; rationale doprecyzowane w r2. |
| open_preserved_Z1-T07-09-F01 | OK | content/authoring/T07/open/Z1-T07-09-F01.md |
| open_preserved_Z1-T07-09-D01 | OK | handoff/Z1/retained_open_delayed/T07/open/Z1-T07-09-D01.md |
| all_four_roles_T07 | OK | Jedna pełna zamknięta ścieżka na każdy z 25 głównych i dwóch legacy zakresów. |
| eleven_owner_EO | OK | EO1.1.1, EO1.1.2, EO1.2.1, EO1.2.2, EO1.3.1, EO1.4.1, EO1.5.1, EO1.6.1, EO2.1.1, EO2.2.1, EO2.2.2 |
| nine_T07_principles | OK | Dziewięć PR i dodatkowe częściowe KRY-A01; KRY-A02 nie wyeksportowano. |
| all_original_open_D_retained | OK | 20 pełnych wykonań otwartych D poza parserem tematów. |
| legacy_key_preserved_C-A-B01 | OK | Klucz odczytany bezpośrednio z C03, nie z definicji generatora. |
| legacy_key_preserved_C-A-F01 | OK | Klucz odczytany bezpośrednio z C03, nie z definicji generatora. |
| legacy_key_preserved_C-A-D01 | OK | Klucz odczytany bezpośrednio z C03, nie z definicji generatora. |
| legacy_key_preserved_C-P-B01 | OK | Klucz odczytany bezpośrednio z C03, nie z definicji generatora. |
| legacy_key_preserved_C-P-F01 | OK | Klucz odczytany bezpośrednio z C03, nie z definicji generatora. |
| legacy_key_preserved_C-P-D01 | OK | Klucz odczytany bezpośrednio z C03, nie z definicji generatora. |
| no_fake_runtime_package | OK | Wyjście to pliki autorskie, bez ręcznie tworzonych JSON content-package. |
| no_decision_files | OK | Schematy chronionych plików są wejściem formatu, nie decyzjami. |
| source_bytes_T07_IREB_CPRE_Nine_Principles_Explained_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T01_IREB_CPRE_Fundamental_RE_Concepts_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T05_IREB_CPRE_Tasks_Role_and_Competencies_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T04_IREB_CPRE_Applications_and_Perspectives_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T03_IREB_CPRE_Value_and_Inadequate_RE_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T06_IREB_CPRE_Principles_Overview_and_Terminology_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T05_IREB_CPRE_Tasks_Role_and_Competencies_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T04_IREB_CPRE_Applications_and_Perspectives_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T07_IREB_CPRE_Nine_Principles_Explained_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_Z1_IREB_CPRE_Manifest_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T01_IREB_CPRE_Fundamental_RE_Concepts_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T02_IREB_CPRE_Kinds_of_Requirements_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_PROGRESS.json | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_PROGRESS.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T02_IREB_CPRE_Kinds_of_Requirements_Content_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T06_IREB_CPRE_Principles_Overview_and_Terminology_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_Z1_Author_Checks_v0.1.json | OK | Kopia źródła bez zmiany bajtów. |
| source_bytes_T03_IREB_CPRE_Value_and_Inadequate_RE_QA_and_Handoff_v0.1.md | OK | Kopia źródła bez zmiany bajtów. |
| project_bytes_09-R05_IREB_CPRE_G1_Corrections_and_Readiness_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_20-C03_IREB_CPRE_Pilot_Content_APK_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_01-IREB_CPRE_Deep_Research_PL_2026-11.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_10-B03_IREB_CPRE_Semantic_Pilot_APK_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_17-M01_IREB_CPRE_FL_Topic_Map_and_Authoring_Backlog_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_02-IREB_CPRE_Functional_Learning_Experience_Blueprint_PL_2026-11.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_08-R04_IREB_CPRE_B_Acceptance_Review_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_12-B01_IREB_CPRE_Semantic_Knowledge_Contract_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_15-R06_IREB_CPRE_G1_Owner_Decision_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_13-00_IREB_CPRE_START.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_03-IREB_CPRE_Functional_to_Knowledge_Contract_PL_2026-11.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_11-B02_IREB_CPRE_FR_Traceability_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_21-C04_IREB_CPRE_Content_QA_and_Handoff_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_16-M02_IREB_CPRE_Topic_Flow_Brief_Template_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_22-M03_IREB_CPRE_Topic_Collections_Z1-Z6_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_06-R02_IREB_CPRE_Readiness_Audit_and_Gap_Register_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_19-C02_IREB_CPRE_Terminology_and_Authoring_Standard_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_05-R01_IREB_CPRE_Project_State_and_Knowledge_Consolidation_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_04-00_IREB_CPRE_Fundament_pedagogiczny.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_18-C01_IREB_CPRE_Source_and_Licensing_Register_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_14-B04_IREB_CPRE_B_Decisions_and_Handoff_C_v0.2.md | OK | Baseline projektu bez zmiany bajtów. |
| project_bytes_07-R03_IREB_CPRE_Application_Design_Conversation_Input_v0.1.md | OK | Baseline projektu bez zmiany bajtów. |

## Luki i granice

| ID | Zakres | Brak | Wpływ | Następna czynność |
| --- | --- | --- | --- | --- |
| Z1-GAP-CLI | Wszystkie tematy | Brak implementacji oficjalnego lint/convert i repozytorium aplikacji. | Nie potwierdzono zgodności zachowania rzeczywistego konwertera lub content-package; authoring pozostaje draft. | W repozytorium uruchomić content:lint dla T01–T07, naprawić błędy i wykonać content:convert; sprawdzić raport i różnice. |
| Z1-GAP-OPEN-D | 20 źródłowych wykonań otwartych D | Schema open nie posiada pola role ani obsługiwanej polityki delayed. | Pełne zadania zachowane w handoff, poza runtime; 27 zamkniętych D nie mierzy automatycznie ich swobodnego wykonania. | Ustalić w kontrakcie aplikacji reprezentację i ochronę otwartego delayed albo pozostawić te wykonania w osobnym trybie poza runtime. Nie dopisywać pola do obecnego schematu. |
| Z1-GAP-REVIEW | 108 pytań, 65 otwartych aktywności łącznie, reguły i relacje | Nie ma odrębnego kompetentnego review tej rewizji. | C-AC-12 i QG-09 w części review niespełnione. | Reviewer rozwiązuje stemy bez klucza, następnie sprawdza każdą decyzję, źródło, EO, rubrykę i scoring; rozliczyć uwagi dla konkretnych rewizji. |
| Z1-GAP-RIGHTS | Wszystkie tematy r2 | Brak upoważnionej decyzji o prawach, kanale i użyciach. | Nie ma dopuszczenia także do kanału internal-review; usageNote go nie zastępuje. | Upoważniona osoba ocenia użyte źródła i wydanie, następnie zapisuje właściwą decyzję; agent tego pliku nie tworzy. |
| Z1-GAP-NOVELTY | D i bliskie rodziny | Brak review niezależności oraz historii ekspozycji osób. | Pełne archiwum ujawnia wszystkie klucze; nie stanowi nieznanej rezerwy dla czytelnika. | Ocenić rodziny i wzajemne przecieki oraz rzeczywistą eligibility przed użyciem D; zapisywać ekspozycję i oba czasy per kryterium. |
| Z1-GAP-IMPLEMENTATION | Integracja i G3 | Nie udostępniono działającej aplikacji do sprawdzenia UI i ograniczeń ekspozycji. | Neutralność treści i poprawny routing statyczny nie są wynikiem walkthrough. | Po odpowiednim odbiorze treści osobno wykonać G3 według protokołu na przyjętych rewizjach; nie deklarować retencji z symulacji. |

Samokontrola C-AC-01–14 i QG-01–10: AUTHOR_SELF_CHECK.md. C-AC-12 i QG-09 nie otrzymały autorskiego PASS w części odrębnego review. Źródłowe QA pozostaje zachowane, bez domniemania akceptacji G2.
