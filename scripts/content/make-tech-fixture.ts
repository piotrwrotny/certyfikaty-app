/**
 * Synthetic TECHNICAL fixture (TECH01): a second "topic" that exercises the
 * engine and the import contract without any IREB domain content. All stems,
 * keys and rationales are format demonstrations on neutral labels (Opcja 1–4),
 * explicitly marked as technical fixtures — not reviewed IREB content and not
 * a protected reserve. This enables QA-31/QA-32 and the e2e learner-channel
 * demo without granting any real content approval.
 *
 * Usage: tsx scripts/content/make-tech-fixture.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, stableJson, loadValidators, formatAjvErrors, schemaValid } from './lib.ts';
import { validatePackageSemantics, validateLearnerGate, combine } from '../../src/content/validate.ts';
import type { ContentPackage, Question, Rationale } from '../../src/content/types.ts';

const NOTE = 'Syntetyczna demonstracja techniczna formatu. Nie jest treścią IREB ani pomiarem wiedzy RE.';

function rat(itemId: string, decisionId: string, body: string, ruleId: string, criterionId: string): Rationale {
  return {
    id: `RAT-${itemId}-${decisionId}`,
    decisionId,
    bodyMarkdown: `${body} ${NOTE}`,
    ruleIds: [ruleId],
    contactScopes: [{ criterionId }],
    sourceAnchor: `fixtures/TECH01 ${itemId}/${decisionId}`,
  };
}

function aItem(id: string, role: Question['role'], family: string, correct: string): Question {
  const decisions = ['1', '2', '3', '4'].map((n) => ({ id: n, textMarkdown: `Opcja ${n}.` }));
  return {
    id, revision: 'r1', format: 'A', role, weight: 1,
    stemMarkdown: `Przykład formatu A na neutralnych etykietach. Wskaż opcję oznaczoną jako poprawna w tej demonstracji (Opcja ${correct}).`,
    instruction: 'Wybierz JEDNĄ odpowiedź. Maksymalnie 1 punkt.',
    decisions,
    answerKey: { selectedIds: [correct] },
    rationales: decisions.map((d) => rat(id, d.id, d.id === correct ? 'Ta opcja jest oznaczona jako poprawna w demonstracji formatu A: tylko pojedynczy jej wybór daje pełną wagę.' : 'Ta opcja nie jest oznaczona jako poprawna; wybór błędny, pusty lub nadmiarowy daje 0 punktów za format A.', 'REG-TECH-01', 'KRY-TECH-A')),
    criterionMappings: [{ criterionId: 'KRY-TECH-A', role: 'primary', decisionIds: decisions.map((d) => d.id) }],
    familyRef: { id: family, revision: 'r1' },
    noveltyReview: 'independent',
    sourceAnchor: `fixtures/TECH01 ${id}`,
  };
}

function pItem(id: string, role: Question['role'], family: string, correct: [string, string], weight: 1 | 2 | 3): Question {
  const decisions = ['1', '2', '3', '4', '5'].map((n) => ({ id: n, textMarkdown: `Opcja ${n}.` }));
  return {
    id, revision: 'r1', format: 'P', role, weight, k: 2,
    stemMarkdown: `Przykład formatu P na neutralnych etykietach. Wskaż DWIE opcje oznaczone jako poprawne (Opcje ${correct[0]} i ${correct[1]}).`,
    instruction: 'Wybierz dokładnie DWA stwierdzenia. Maksymalnie ' + String(weight) + ' pkt.',
    decisions,
    answerKey: { selectedIds: [...correct] },
    rationales: decisions.map((d) => rat(id, d.id, correct.includes(d.id) ? 'Opcja należy do klucza demonstracji: przy n≤k każda trafnie wybrana opcja daje część punktów.' : 'Opcja poza kluczem demonstracji: niezaznaczony dystraktor nie daje punktu, nadmiar zeruje całe pytanie.', 'REG-TECH-02', 'KRY-TECH-P')),
    criterionMappings: [{ criterionId: 'KRY-TECH-P', role: 'primary', decisionIds: decisions.map((d) => d.id) }],
    familyRef: { id: family, revision: 'r1' },
    noveltyReview: 'independent',
    sourceAnchor: `fixtures/TECH01 ${id}`,
  };
}

function kItem(id: string, role: Question['role'], family: string, truth: [boolean, boolean, boolean]): Question {
  const decisions = ['1', '2', '3'].map((n) => ({ id: n, textMarkdown: `Teza ${n} demonstracji formatu K (oznaczona jako ${truth[Number(n) - 1] ? 'prawdziwa' : 'fałszywa'}).` }));
  return {
    id, revision: 'r1', format: 'K', role, weight: 2, m: 3,
    stemMarkdown: 'Przykład formatu K na neutralnych etykietach. Oceń każdą tezę zgodnie z jej oznaczeniem w tej demonstracji.',
    instruction: 'Dla KAŻDEGO z trzech wierszy wybierz Prawda albo Fałsz. Maksymalnie 2 punkty; 2/3 za poprawny wiersz.',
    decisions,
    answerKey: { truthByDecisionId: { '1': truth[0], '2': truth[1], '3': truth[2] } },
    rationales: decisions.map((d, i) => rat(id, d.id, `Teza ${d.id} jest w demonstracji oznaczona jako ${truth[i] ? 'prawdziwa' : 'fałszywa'}; każdy wiersz oceniany jest niezależnie, blank i podwójny zapis dają 0 za ten wiersz.`, 'REG-TECH-03', 'KRY-TECH-K')),
    criterionMappings: [{ criterionId: 'KRY-TECH-K', role: 'primary', decisionIds: decisions.map((d) => d.id) }],
    familyRef: { id: family, revision: 'r1' },
    noveltyReview: 'independent',
    sourceAnchor: `fixtures/TECH01 ${id}`,
  };
}

const questions: Question[] = [
  aItem('TECH-A1', 'base', 'FAM-TECH-01', '2'),
  pItem('TECH-P1', 'base', 'FAM-TECH-02', ['1', '3'], 2),
  kItem('TECH-K1', 'base', 'FAM-TECH-03', [true, false, true]),
  aItem('TECH-F1', 'follow-up-1', 'FAM-TECH-01', '3'),
  aItem('TECH-G1', 'follow-up-2', 'FAM-TECH-01', '3'),
  aItem('TECH-D1', 'delayed-candidate', 'FAM-TECH-01', '4'),
];

const pkg: ContentPackage = {
  schemaVersion: '1.0.0',
  packageId: 'TECH01',
  revision: 'r1',
  title: 'TECH01 — syntetyczna demonstracja techniczna formatów A/P/K',
  language: 'pl',
  purpose: 'content',
  runtimeCompleteness: 'complete',
  limitations: [
    NOTE,
    'Służy wyłącznie testom technicznym silnika, aktualizatora i formy testu; zero treści egzaminacyjnych.',
  ],
  status: {
    authoring: 'complete',
    review: 'approved',
    publication: 'permitted',
    allowedUses: ['learning', 'practice', 'remediation', 'topic-test'],
    empirical: 'none',
    decisionRef: 'FIXTURE-TECH01-DECISION: dopuszczenie dotyczy wyłącznie syntetycznej demonstracji technicznej formatu (nie treści IREB)',
  },
  provenance: [
    { path: 'scripts/content/make-tech-fixture.ts', sha256: 'a'.repeat(64), documentVersion: 'r1', storedFileVersion: '1' },
    { path: 'docs/05_CONTENT_INGESTION.md', sha256: 'b'.repeat(64), documentVersion: 'v0.1', storedFileVersion: '1' },
  ],
  educationProfile: { syllabusVersion: 'n/d — fixture techniczne', glossaryVersion: 'n/d', regulationsVersion: '5.6.2 (tylko reguły naliczania A/P/K)' },
  criteria: [
    { id: 'KRY-TECH-A', revision: 'r1', description: 'Format A', eoRefs: [], aspects: [] },
    { id: 'KRY-TECH-P', revision: 'r1', description: 'Format P', eoRefs: [], aspects: [] },
    { id: 'KRY-TECH-K', revision: 'r1', description: 'Format K', eoRefs: [], aspects: [] },
  ],
  sources: [{
    id: 'SRC-TECH-01',
    title: 'Reguły naliczania formatów (opis własny projektu)',
    version: '1.0',
    url: 'https://ireb-cpre.local/fixtures/tech01',
    location: 'docs/06_EDUCATIONAL_INVARIANTS.md, tabela formatów',
    attribution: 'Własna syntetyczna demonstracja projektu; format naliczania wg Examination Regulations 5.6.2 §2 (opis własnymi słowami)',
    usageNote: 'Wyłącznie demonstracja techniczna; nie materiał egzaminacyjny.',
  }],
  rules: [
    { id: 'REG-TECH-01', revision: 'r1', statementMarkdown: 'Format A: dokładnie jeden poprawny wybór daje w; błędny, pusty lub nadmiarowy zapis daje 0.', sourceRefs: [{ sourceId: 'SRC-TECH-01', location: 'A' }] },
    { id: 'REG-TECH-02', revision: 'r1', statementMarkdown: 'Format P: przy n≤k wynik w×c/k; przy n>k całe pytanie ma 0; niewybrane dystraktory nie dają punktów.', sourceRefs: [{ sourceId: 'SRC-TECH-01', location: 'P' }] },
    { id: 'REG-TECH-03', revision: 'r1', statementMarkdown: 'Format K: każdy wiersz oceniany niezależnie, w×c/m; błąd, blank i podwójny zapis zerują tylko własny wiersz.', sourceRefs: [{ sourceId: 'SRC-TECH-01', location: 'K' }] },
  ],
  knowledge: [
    {
      id: 'N-TECH-01', revision: 'r1', kind: 'note', title: 'Jak liczone są formaty A, P i K',
      bodyMarkdown: `**Rdzeń:** A ma jeden klucz; P daje części przy n≤k i zero za nadmiar; K liczy każdy wiersz osobno. ${NOTE}`,
      ruleIds: ['REG-TECH-01', 'REG-TECH-02', 'REG-TECH-03'],
      contactScopes: [{ criterionId: 'KRY-TECH-A' }, { criterionId: 'KRY-TECH-P' }, { criterionId: 'KRY-TECH-K' }],
      sourceAnchor: 'fixtures/TECH01 N-TECH-01',
    },
    {
      id: 'CMP-TECH-01', revision: 'r1', kind: 'comparison', title: 'Niedobór a nadmiar w formacie P',
      bodyMarkdown: `**Wspólna oś:** liczba zaznaczeń względem k. Niedobór zachowuje trafną część (w×c/k); nadmiar zeruje całe pytanie. ${NOTE}`,
      ruleIds: ['REG-TECH-02'],
      contactScopes: [{ criterionId: 'KRY-TECH-P' }],
      sourceAnchor: 'fixtures/TECH01 CMP-TECH-01',
    },
  ],
  questions,
  openActivities: [],
  remediations: [{
    id: 'REM-TECH-01', revision: 'r1',
    scope: { criterionId: 'KRY-TECH-A' },
    bodyMarkdown: `Format A przyjmuje dokładnie jeden wybór; nadmiar i pusty zapis dają 0. Zobacz notę o formatach i spróbuj innego przypadku. ${NOTE}`,
    knowledgeRefs: [{ id: 'N-TECH-01', revision: 'r1' }],
    followUpRefs: [{ id: 'TECH-F1', revision: 'r1' }, { id: 'TECH-G1', revision: 'r1' }],
    alternativeHelpMarkdown: `Porównaj regułę A z regułą P w nocie o formatach; potem druga kontrola. ${NOTE}`,
    exitAfterFailedFollowUps: 2,
  }],
  families: [
    { id: 'FAM-TECH-01', revision: 'r1', review: 'approved', description: 'Syntetyczna rodzina demonstracji formatu A.' },
    { id: 'FAM-TECH-02', revision: 'r1', review: 'approved', description: 'Syntetyczna rodzina demonstracji formatu P.' },
    { id: 'FAM-TECH-03', revision: 'r1', review: 'approved', description: 'Syntetyczna rodzina demonstracji formatu K.' },
  ],
  forms: [{
    id: 'FORM-TECH-01', revision: 'r1',
    title: 'Techniczna forma testu (demonstracja): A + P + K, 5 pkt, bez limitu',
    status: {
      authoring: 'complete', review: 'approved', publication: 'permitted',
      allowedUses: ['topic-test'], empirical: 'none',
      decisionRef: 'FIXTURE-TECH01-FORM-DECISION: jawna forma techniczna do testów silnika (nie dopuszczony test wiedzy)',
    },
    scopes: [{ criterionId: 'KRY-TECH-A' }, { criterionId: 'KRY-TECH-P' }, { criterionId: 'KRY-TECH-K' }],
    itemRefs: [
      { id: 'TECH-A1', revision: 'r1' },
      { id: 'TECH-P1', revision: 'r1' },
      { id: 'TECH-K1', revision: 'r1' },
    ],
    timed: false,
    dictionaryAllowed: true,
    eligibilityPolicyRef: 'FIXTURE-TECH01-ELIGIBILITY: bez warunków osoby; forma techniczna',
    reviewDecisionRef: 'FIXTURE-TECH01-FORM-DECISION',
  }],
  relationships: [],
  rights: {
    status: 'permitted',
    channels: ['internal-review', 'internal-lan'],
    decisionRef: 'FIXTURE-TECH01-RIGHTS: własna synteza projektu, zero treści objętych prawami IREB',
  },
};

const validators = loadValidators();
if (!schemaValid(validators.contentPackage, pkg)) {
  console.error(formatAjvErrors(validators.contentPackage));
  process.exit(1);
}
const semantic = combine(
  validatePackageSemantics(pkg),
  validateLearnerGate(pkg, { channel: 'learner', publicationChannel: 'internal-lan' }),
);
if (!semantic.ok) {
  console.error(semantic.issues);
  process.exit(1);
}
const outDir = resolve(ROOT, 'content/normalized');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'TECH01.r1.json'), stableJson(pkg), 'utf-8');
console.log('OK: content/normalized/TECH01.r1.json');
