/**
 * One recommended next step with a stated reason (FR-003/020/021, Blueprint F12):
 * 1) resume a meaningfully interrupted activity, 2) a later check that is due,
 * 3) an uncovered goal in syllabus/package order, 4) otherwise practice or end.
 * No mastery, no pass forecast, no artificial backlog.
 */
import type { CpreDb, AttemptRecord, PlanRecord } from '@/data/db.ts';
import { requireProfileId } from '@/data/db.ts';
import type { ContentPackage, Question, Knowledge } from '@/content/types.ts';
import { primaryScope } from './learning.ts';

export const DEFERRED_THRESHOLD_MS = 24 * 3600 * 1000; // pilot parameter (B01-10), not an IREB norm

export interface Goal {
  key: string; // criterionId/aspectId
  criterionId: string;
  aspectId?: string;
  /** Named scope label — only for material entry, after an answer and in the scope view. */
  label: string;
  /** Neutral criterion text — safe before an answer (INTRO-T21: no criterion names before answering). */
  criterionDescription: string;
  /** Neutral topic (package) title. */
  topicLabel: string;
  note?: Knowledge;
  baseItem?: Question;
  delayedItems: Question[];
  hasMaterial: boolean;
}

export type Recommendation =
  | { kind: 'no-content' }
  | { kind: 'resume-test'; attempt: AttemptRecord }
  | { kind: 'resume-learning'; plan: PlanRecord }
  | { kind: 'delayed'; goal: Goal; item: Question; lastAttemptAt: string; knownItem: boolean }
  | { kind: 'new-goal'; goal: Goal; reason: string }
  | { kind: 'all-touched'; goal: Goal | null };

export function goalKey(criterionId: string, aspectId?: string): string {
  return aspectId ? `${criterionId}/${aspectId}` : criterionId;
}

export function topicTitle(title: string): string {
  return title.split(' (')[0] ?? title;
}

export interface CriterionGroup {
  criterionId: string;
  description: string;
  topicLabel: string;
  goals: Goal[];
}

/** Presentation grouping: question entry is offered per criterion without naming the scope. */
export function groupByCriterion(goals: readonly Goal[]): CriterionGroup[] {
  const out: CriterionGroup[] = [];
  for (const g of goals) {
    let grp = out.find((x) => x.criterionId === g.criterionId);
    if (!grp) {
      grp = { criterionId: g.criterionId, description: g.criterionDescription, topicLabel: g.topicLabel, goals: [] };
      out.push(grp);
    }
    grp.goals.push(g);
  }
  return out;
}

/** Next scope of a criterion for question-first entry: first one without an independent attempt, else the first. */
export async function nextScopeForQuestion(db: CpreDb, profileId: string, group: CriterionGroup): Promise<Goal | null> {
  requireProfileId(profileId);
  const contacts = await db.contacts.where('[profileId+criterionId]').equals([profileId, group.criterionId]).toArray();
  const withItems = group.goals.filter((g) => g.baseItem);
  return withItems.find((g) => !contacts.some((c) => c.kind === 'independent-attempt' && (g.aspectId === undefined || c.aspectId === g.aspectId))) ?? withItems[0] ?? null;
}

export function listGoals(packages: readonly ContentPackage[]): Goal[] {
  const goals: Goal[] = [];
  for (const pkg of packages) {
    for (const c of pkg.criteria) {
      const scopes = c.aspects.length > 0 ? c.aspects.map((a) => ({ aspectId: a.id, label: a.label })) : [{ aspectId: undefined, label: c.description }];
      for (const s of scopes) {
        const matches = (q: Question) => {
          const p = primaryScope(q);
          return p.criterionId === c.id && (s.aspectId === undefined || p.aspectId === s.aspectId);
        };
        const items = pkg.questions.filter(matches);
        // a note scoped to the whole criterion also serves each of its aspects
        const note = pkg.knowledge.find((k) => k.kind === 'note' && k.contactScopes.some((cs) => cs.criterionId === c.id && (s.aspectId === undefined || cs.aspectId === undefined || cs.aspectId === s.aspectId)));
        const baseItem = items.find((q) => q.role === 'base' || q.role === 'practice');
        const aspectNote = note && s.aspectId !== undefined && note.contactScopes.some((cs) => cs.aspectId === s.aspectId) ? note : undefined;
        const goal: Goal = {
          key: goalKey(c.id, s.aspectId),
          criterionId: c.id,
          label: aspectNote?.title ?? s.label,
          criterionDescription: c.description,
          topicLabel: topicTitle(pkg.title),
          delayedItems: items.filter((q) => q.role === 'delayed-candidate'),
          hasMaterial: Boolean(note) || items.length > 0,
          ...(s.aspectId !== undefined ? { aspectId: s.aspectId } : {}),
          ...(note ? { note } : {}),
          ...(baseItem ? { baseItem } : {}),
        };
        if (goal.hasMaterial) goals.push(goal);
      }
    }
  }
  return goals;
}

export async function recommend(db: CpreDb, profileId: string, packages: readonly ContentPackage[] | null, now = new Date()): Promise<Recommendation> {
  requireProfileId(profileId);
  // 1. Resume interrupted check / learning (always first, even without new content).
  const attempts = await db.attempts.where('profileId').equals(profileId).toArray();
  const test = attempts.find((a) => a.kind === 'topic-test' && (a.lifecycle === 'active' || a.lifecycle === 'paused' || a.lifecycle === 'suspended-withdrawal'));
  if (test) return { kind: 'resume-test', attempt: test };
  const suspended = await db.plans.get(`suspended-learning:${profileId}`);
  if (suspended && suspended.profileId === profileId) return { kind: 'resume-learning', plan: suspended };

  if (!packages || packages.length === 0) return { kind: 'no-content' };
  const goals = listGoals(packages);
  if (goals.length === 0) return { kind: 'no-content' };

  const contacts = await db.contacts.where('profileId').equals(profileId).toArray();
  const exposures = await db.exposures.where('profileId').equals(profileId).toArray();
  const withdrawnIds = new Set((await db.withdrawals.toArray()).map((w) => `${w.withdrawal.itemRef.id}@${w.withdrawal.itemRef.revision}`));
  const exposedItems = new Set(exposures.filter((e) => e.kind === 'item-stem').map((e) => e.refId));

  // 2. Later check due: independent attempt exists and last relevant contact ≥ threshold ago.
  for (const g of goals) {
    const inScope = contacts.filter((c) => c.criterionId === g.criterionId && (g.aspectId === undefined || c.aspectId === undefined || c.aspectId === g.aspectId));
    const attemptsAt = inScope.filter((c) => c.kind === 'independent-attempt').map((c) => Date.parse(c.at));
    if (attemptsAt.length === 0) continue;
    const lastContact = Math.max(...inScope.map((c) => Date.parse(c.at)));
    if (now.getTime() - lastContact < DEFERRED_THRESHOLD_MS) continue;
    const available = g.delayedItems.filter((q) => !withdrawnIds.has(`${q.id}@${q.revision}`));
    const fresh = available.find((q) => !exposedItems.has(q.id));
    const item = fresh ?? available[0];
    if (item) {
      return { kind: 'delayed', goal: g, item, lastAttemptAt: new Date(Math.max(...attemptsAt)).toISOString(), knownItem: !fresh };
    }
  }

  // 3. First uncovered goal (no independent attempt yet) in package order.
  for (const g of goals) {
    const touched = contacts.some((c) => c.kind === 'independent-attempt' && c.criterionId === g.criterionId && (g.aspectId === undefined || c.aspectId === g.aspectId));
    if (!touched && (g.baseItem || g.note)) {
      return { kind: 'new-goal', goal: g, reason: 'Nie mamy jeszcze Twojej samodzielnej próby tego rozróżnienia.' };
    }
  }
  return { kind: 'all-touched', goal: goals[0] ?? null };
}
