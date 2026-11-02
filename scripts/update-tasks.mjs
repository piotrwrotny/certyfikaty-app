// One-off maintenance script: records implementation status and evidence in backlog/tasks.json.
import { readFileSync, writeFileSync } from 'node:fs';

const path = new URL('../backlog/tasks.json', import.meta.url);
const data = JSON.parse(readFileSync(path, 'utf-8'));
const U = 'tests/unit';
const E = 'tests/e2e';

const updates = {
  'TASK-001': ['done', ['references/BASELINE_MANIFEST.json: 76/76 SHA-256 unchanged (node check, 2026-11-02)', 'scripts/check_handoff.py: 20/20 passed before implementation (qa/handoff-checks.json)', `tests/visual/fidelity.spec.ts: prototype scenes home, K-question, P-feedback, test-P, test-review, test-result, converted compared with app metrics`]],
  'TASK-002': ['done', ['package.json + package-lock.json + .node-version (24.15.0)', 'npm run check: typecheck, lint, content:validate, test, build → qa/evidence/check.log']],
  'TASK-003': ['done', ['src/styles/app.css (tokens from design/tokens.css), src/app/Shell.tsx, src/ui/Dialog.tsx', `${E}/a11y.spec.ts (axe, keyboard, 44 px targets)`, 'tests/visual/fidelity.spec.ts (1200/390 metrics, overflow 320/390/768/1200)']],
  'TASK-004': ['done', ['src/data/db.ts', `${U}/db.test.ts (profileId indexes, newer DB refused without deletion, versionchange)`, `${E}/failures.spec.ts QA-29 newer DB from another tab`]],
  'TASK-005': ['done', [`${U}/profiles.test.ts`, `${E}/profiles.spec.ts QA-01/QA-02, PROF-01 (Chromium, Firefox)`]],
  'TASK-006': ['done', [`${U}/attempts.test.ts (CAS conflict, lease, captured profileId)`, `${E}/profiles.spec.ts QA-04/QA-05`]],
  'TASK-007': ['done', [`${E}/profiles.spec.ts PROF-01 refresh restores profile+attempt`, `${E}/failures.spec.ts QA-03 failed save blocks profile switch`, `${E}/app-update.spec.ts pause before reload`]],
  'TASK-008': ['done', [`${U}/backup.test.ts (exact-bytes digest, no merge, converted stays converted)`, `${E}/failures.spec.ts QA-30`, `${E}/profiles.spec.ts delete only Bartek`]],
  'TASK-009': ['done', ['src/content/validate.ts, src/content/projections.ts, scripts/content/validate.ts', `${U}/projections.test.ts`, `${U}/markdown.test.tsx`, 'npm run content:validate (incl. examples/negative-cases.json)']],
  'TASK-010': ['done', ['scripts/content/import-t21.ts → content/normalized/T21.r1-full1.json', 'content/normalized/T21-IMPORT_REPORT.md (32/128/47, 4 open, 8 notes, 3 CMP, 8 REM; statuses pending/review-only)', 'TECH01 second topic renders without hardcode (tests/e2e/*)', 'Limitation: relation register §8.3 mapped only for used functions; RAT contacts primary ZAK only (documented)']],
  'TASK-011': ['done', ['scripts/content/build-release.ts (deterministic, separate review/learner outputs, manifest written last)', 'learner release excludes T21 with 7 gate codes; content:release --strict refuses review-only', `${E}/smoke.spec.ts learner build has no review content`]],
  'TASK-012': ['done', [`${U}/scoring-t21-vectors.test.ts (176 vectors, 1024 states)`, `${U}/scoring.test.ts (K m=4/5, A 5 options)`, `${U}/fraction.test.ts (QA-09)`]],
  'TASK-013': ['done', ['src/features/learning/ChoiceControls.tsx, FormatTutorial.tsx (D04 §3 examples)', `${E}/learning.spec.ts QA-06/07/08, FR-029 (Chromium, WebKit)`]],
  'TASK-014': ['done', [`${U}/attempts.test.ts idempotent submit, immutable answer`, `${E}/learning.spec.ts QA-12 refresh keeps attempt`]],
  'TASK-015': ['done', ['src/services/planner.ts, src/features/session/*', `${E}/learning.spec.ts FR-032 resume`, `${E}/offline.spec.ts QA-21 no-content state`]],
  'TASK-016': ['done', ['src/features/session/LessonView.tsx (core + details)', `${E}/review.spec.ts open retrieval O01 with self-assessment`]],
  'TASK-017': ['done', [`${E}/learning.spec.ts QA-07 (wrong/omitted open, others on demand)`, 'LearningService.revealRationale logs contact per RAT']],
  'TASK-018': ['done', [`${E}/learning.spec.ts QA-12 (Chromium, WebKit)`, `${E}/a11y.spec.ts keyboard`]],
  'TASK-019': ['done', [`${E}/learning.spec.ts QA-13 two failed follow-ups, no third check`]],
  'TASK-020': ['done', [`${U}/exposure.test.ts (novelty before show, family, incomplete history)`]],
  'TASK-021': ['done', [`${U}/exposure.test.ts QA-17 two intervals`, 'planner delayed recommendation ≥24 h (pilot parameter)', 'StateView novariant']],
  'TASK-022': ['done', ['src/features/evidence/ScopeView.tsx', `${E}/profiles.spec.ts, ${E}/updates.spec.ts (evidence + withdrawn limitation)`]],
  'TASK-023': ['done', ['TECH01 explicit technical form; T21 has no form', `${E}/review.spec.ts no automatic D01–08 fallback`]],
  'TASK-024': ['done', [`${E}/topic-test.spec.ts QA-14/QA-15 (Chromium, WebKit)`]],
  'TASK-025': ['done', [`${E}/topic-test.spec.ts QA-16, FR-027`, `${U}/backup.test.ts converted survives import`]],
  'TASK-026': ['done', [`${E}/topic-test.spec.ts exact 13/3 = 4,33 / 5, 86,7 %`]],
  'TASK-027': ['done', ['StateView missing/novariant/withdrawn/disputed/two-failed', 'ReportView local issue (exported with profile)', `${E}/updates.spec.ts QA-28 history kept, not used as evidence`]],
  'TASK-028': ['done', [`${E}/smoke.spec.ts manifest scope/start_url /cpre/, maskable icon, no CDN`, `${E}/offline.spec.ts QA-20/QA-21 (Chromium, Firefox)`, 'Real device installation: see TASK-035/036 (blocked-environment)']],
  'TASK-029': ['done', [`${U}/updater.test.ts`, `${E}/updates.spec.ts QA-22/23/26 (Chromium, Firefox)`]],
  'TASK-030': ['done', [`${E}/updates.spec.ts QA-25/QA-28`, `${U}/updater.test.ts GC keeps referenced packages`]],
  'TASK-031': ['done', [`${E}/app-update.spec.ts QA-27 (Później / Zapisz i odśwież)`]],
  'TASK-032': ['done', ['src/features/appdata/DataView.tsx', `${E}/failures.spec.ts QA-29 write denied`, `${E}/offline.spec.ts readiness`]],
  'TASK-033': ['done', ['npm test: 242 unit tests, 0 skipped (qa/evidence/check.log)', 'examples/negative-cases.json rejected with expected codes']],
  'TASK-034': ['done', ['qa/evidence/e2e.log (Chromium, Firefox, WebKit, review build)', `tests/e2e/server.ts test LAN host with A/B and failure modes`]],
  'TASK-035': ['blocked-environment', ['Done: tests/visual/fidelity.spec.ts (metrics vs prototype, screenshots qa/screenshots), axe, keyboard, reflow 320–1200', 'Blocked: real screen reader (NVDA/VoiceOver), physical phone, 400% zoom/text-spacing manual check — no AT/device in this environment; manual protocol in qa/IMPLEMENTATION_REPORT.md']],
  'TASK-036': ['blocked-environment', ['Done: docs/RUNBOOK_LAN.md, docs/IMPLEMENTATION_DECISIONS.md, qa/IMPLEMENTATION_REPORT.md, build verified', 'Blocked: real HTTPS LAN origin + device installation (QA-36 install part) and TASK-035 AT checks; no deployment performed (not ordered)']],
};

for (const t of data.tasks) {
  const u = updates[t.id];
  if (!u) continue;
  t.status = u[0];
  t.evidence = u[1];
}
writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`, 'utf-8');
console.log('tasks updated:', Object.keys(updates).length);
