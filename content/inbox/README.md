# Dodawanie następnego tematu

W tym katalogu umieść parę `Txx_..._Content_vX.md` i `Txx_..._QA_and_Handoff_vX.md`. W przypadku istniejącego tematu przekaż również wskazanie bieżącej rewizji i trybu EXTEND/REPAIR. Nie zmieniaj stabilnych ID.

Polecenie do Claude Code:

> Zaimportuj tę parę według docs/05_CONTENT_INGESTION.md. Przeczytaj oba pliki w całości i zachowaj rzeczywiste statusy review oraz użyć. Zmapuj istniejące treści do kontraktu, bez wymyślania kluczy, rationale, relacji i zgód. Wygeneruj raport wejście→wyjście, liczniki, delty rewizji i wyniki walidacji/scoringu/renderowania. Nie zmieniaj stylistyki ani istniejących odpowiedzi ucznia. Przy review-only przygotuj wyłącznie kanał recenzencki; działającego wydania learner nie zastępuj nieprzyjętą treścią.

Pełne recenzenckie pliki nie są automatycznie publikowane w `dist`. `Content` dostarcza wiedzę i zadania, `QA` ograniczenia, wektory i handoff. Sam `QA` jest niewystarczający. Manifest ucznia powstaje dopiero z właściwie dopuszczonych obiektów i form; zero aktywnych tematów ma czytelny stan „Materiały są przygotowywane”, bez fikcyjnej oceny wiedzy osoby.
