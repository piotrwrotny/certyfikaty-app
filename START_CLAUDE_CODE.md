# Prompt startowy do wklejenia w Claude Code

Zbuduj aplikację PWA IREB CPRE z tego repozytorium. Przeczytaj i wykonaj CLAUDE.md, docs/ oraz backlog/IMPLEMENTATION_BACKLOG.md. Zaakceptowany projekt to „Skupiona sesja”; zachowaj jego kompozycję, tokeny i interakcje, korzystając z rzeczywistych makiet w references/design. Nie wykonuj redesignu.

Zaimplementuj pierwszy przyrost z pełnymi ścieżkami Nauki i testem tematu, nazwanymi profilami lokalnymi z osobnym postępem, pracą offline i atomowymi aktualizacjami treści po odzyskaniu dostępu do hosta w sieci wewnętrznej. Zachowuj rozpoczęte próby, rewizje i historię. Profile lokalne nie wymagają logowania ani serwera postępu.

Pracuj iteracyjnie do spełnienia wszystkich technicznych kryteriów przyrostu. Nie zatrzymuj się na planie ani szkielecie. Rutynowe decyzje podejmuj samodzielnie i dokumentuj. Używaj aktualnych zgodnych wersji bibliotek z lockfile. Uruchamiaj rzeczywiste testy, także build z service workerem, awarie aktualizacji, izolację profili i regresje wizualne. Nie zmieniaj baseline dla uzyskania PASS.

Treści dodawaj według docs/05_CONTENT_INGESTION.md. Masz pełne pary Content + QA dla T21 oraz przykład znormalizowanych danych. Są do review: nie nadaj im statusu zatwierdzonych ani chronionej rezerwy. Braki dopuszczenia nie blokują programowania i demonstracji technicznej na oddzielonych fixtures. Nie generuj nowych domenowych kluczy lub rationale w aplikacji i nie włączaj runtime LLM.

Aktualizuj backlog/tasks.json i zapisz qa/IMPLEMENTATION_REPORT.md z dowodami, komendami, obrazami desktop/mobile i pozostałymi zależnościami. G2/G3/G4 i merytoryczne dopuszczenia zachowują rzeczywisty status; nie zatwierdzaj ich w moim imieniu. Nie publikuj zewnętrznie. Zacznij od kontroli wejść i pierwszego działającego pionowego przekroju, a następnie kontynuuj do ukończenia implementacji.
