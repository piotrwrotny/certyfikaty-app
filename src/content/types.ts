/**
 * Typed content contract matching schemas/content-package.schema.json and
 * schemas/content-manifest.schema.json (v1.0.0). Runtime reads validated JSON only.
 */
import type { ItemFormat } from '@/domain/scoring.ts';

export type Revision = string; // ^r[0-9]+(-suffix)?$

export interface ItemRef {
  readonly id: string;
  readonly revision: Revision;
}

export type ReviewStatus = 'pending' | 'changes-required' | 'approved';
export type PublicationStatus = 'review-only' | 'permitted' | 'withdrawn';
export type AllowedUse = 'learning' | 'practice' | 'remediation' | 'delayed' | 'topic-test';
export type RightsStatus = 'unresolved' | 'review-only' | 'permitted' | 'restricted';
export type RightsChannel = 'internal-review' | 'internal-lan' | 'public-noncommercial' | 'public-commercial';

export interface PackageStatus {
  readonly authoring: 'draft' | 'complete';
  readonly review: ReviewStatus;
  readonly publication: PublicationStatus;
  readonly allowedUses: readonly AllowedUse[];
  readonly empirical: 'none' | 'pilot' | 'validated';
  readonly decisionRef?: string;
}

export interface Rights {
  readonly status: RightsStatus;
  readonly channels: readonly RightsChannel[];
  readonly decisionRef?: string;
}

export interface Provenance {
  readonly path: string;
  readonly sha256: string;
  readonly documentVersion: string;
  readonly storedFileVersion: string;
}

export interface EducationProfile {
  readonly syllabusVersion: string;
  readonly glossaryVersion: string;
  readonly regulationsVersion: string;
}

export interface EoRef {
  readonly id: string;
  readonly level: 'L1' | 'L2' | 'L3';
}

export interface Aspect {
  readonly id: string;
  readonly label: string;
}

export interface Criterion {
  readonly id: string;
  readonly revision: Revision;
  readonly description: string;
  readonly eoRefs: readonly EoRef[];
  readonly aspects: readonly Aspect[];
}

export interface Source {
  readonly id: string;
  readonly title: string;
  readonly version: string;
  readonly url: string;
  readonly location: string;
  readonly attribution: string;
  readonly usageNote: string;
}

export interface SourceRef {
  readonly sourceId: string;
  readonly location: string;
}

export interface Rule {
  readonly id: string;
  readonly revision: Revision;
  readonly statementMarkdown: string;
  readonly sourceRefs: readonly SourceRef[];
}

export type KnowledgeKind = 'note' | 'comparison' | 'prerequisite' | 'worked-example' | 'example' | 'counterexample';

export interface ContactScope {
  readonly criterionId: string;
  readonly aspectId?: string;
}

export interface Knowledge {
  readonly id: string;
  readonly revision: Revision;
  readonly kind: KnowledgeKind;
  readonly title: string;
  readonly bodyMarkdown: string;
  readonly ruleIds: readonly string[];
  readonly contactScopes: readonly ContactScope[];
  readonly sourceAnchor: string;
  readonly prerequisiteCondition?: string;
  readonly skippable?: boolean;
}

export interface Decision {
  readonly id: string;
  readonly textMarkdown: string;
}

export interface Rationale {
  readonly id: string;
  readonly decisionId: string;
  readonly bodyMarkdown: string;
  readonly ruleIds: readonly string[];
  readonly contactScopes: readonly ContactScope[];
  readonly sourceAnchor: string;
}

export type QuestionRole = 'base' | 'follow-up-1' | 'follow-up-2' | 'delayed-candidate' | 'practice';

export interface CriterionMapping {
  readonly criterionId: string;
  readonly aspectId?: string;
  readonly role: 'primary' | 'secondary' | 'helper';
  readonly decisionIds: readonly string[];
}

export type AnswerKey =
  | { readonly selectedIds: readonly string[] }
  | { readonly truthByDecisionId: Readonly<Record<string, boolean>> };

export interface Question {
  readonly id: string;
  readonly revision: Revision;
  readonly format: ItemFormat;
  readonly role: QuestionRole;
  readonly weight: 1 | 2 | 3;
  readonly k?: number;
  readonly m?: number;
  readonly stemMarkdown: string;
  readonly instruction: string;
  readonly decisions: readonly Decision[];
  readonly answerKey: AnswerKey;
  readonly rationales: readonly Rationale[];
  readonly criterionMappings: readonly CriterionMapping[];
  readonly familyRef: ItemRef;
  readonly noveltyReview: 'pending' | 'near' | 'independent';
  readonly sourceAnchor: string;
}

export interface OpenActivity {
  readonly id: string;
  readonly revision: Revision;
  readonly promptMarkdown: string;
  readonly rubricMarkdown: string;
  readonly scope: readonly ContactScope[];
  readonly evaluationMethod: 'self-assessment' | 'designated-reviewer';
  readonly sourceAnchor: string;
}

export interface Remediation {
  readonly id: string;
  readonly revision: Revision;
  readonly scope: ContactScope;
  readonly bodyMarkdown: string;
  readonly knowledgeRefs: readonly ItemRef[];
  readonly followUpRefs: readonly ItemRef[];
  readonly alternativeHelpMarkdown: string;
  readonly exitAfterFailedFollowUps: 2;
}

export interface Family {
  readonly id: string;
  readonly revision: Revision;
  readonly review: 'pending' | 'approved';
  readonly description: string;
}

export type FormStatus = PackageStatus;

export interface TestForm {
  readonly id: string;
  readonly revision: Revision;
  readonly title: string;
  readonly status: FormStatus;
  readonly scopes: readonly ContactScope[];
  readonly itemRefs: readonly ItemRef[];
  readonly timed: false;
  readonly dictionaryAllowed: boolean;
  readonly eligibilityPolicyRef: string;
  readonly reviewDecisionRef: string;
}

export interface Relationship {
  readonly id: string;
  readonly revision: Revision;
  readonly type: string; // R01..R26
  readonly from: ItemRef;
  readonly to: ItemRef;
  readonly condition: string;
  readonly meaning: string;
  readonly provenance: string;
  readonly review: 'pending' | 'approved';
}

export interface ContentPackage {
  readonly schemaVersion: '1.0.0';
  readonly packageId: string;
  readonly revision: Revision;
  readonly title: string;
  readonly language: 'pl';
  readonly purpose: 'review-fixture' | 'content';
  readonly runtimeCompleteness: 'partial' | 'complete';
  readonly limitations: readonly string[];
  readonly status: PackageStatus;
  readonly provenance: readonly Provenance[];
  readonly educationProfile: EducationProfile;
  readonly criteria: readonly Criterion[];
  readonly sources: readonly Source[];
  readonly rules: readonly Rule[];
  readonly knowledge: readonly Knowledge[];
  readonly questions: readonly Question[];
  readonly openActivities: readonly OpenActivity[];
  readonly remediations: readonly Remediation[];
  readonly families: readonly Family[];
  readonly forms: readonly TestForm[];
  readonly relationships: readonly Relationship[];
  readonly extensions?: Record<string, unknown>;
  readonly rights: Rights;
}

export type ManifestChannel = 'review' | 'learner';
export type PublicationChannel = RightsChannel;

export interface ManifestPackageEntry {
  readonly packageId: string;
  readonly revision: Revision;
  readonly url: string;
  readonly bytes: number;
  readonly sha256: string;
}

export interface Withdrawal {
  readonly decisionId: string;
  readonly itemRef: ItemRef;
  readonly status: 'withdrawn' | 'key-disputed';
  readonly reasonCode: string;
  readonly decidedAt: string;
  readonly decisionRef: string;
}

export interface ContentManifest {
  readonly schemaVersion: '1.0.0';
  readonly releaseId: string;
  readonly releaseSequence: number;
  readonly channel: ManifestChannel;
  readonly createdAt: string;
  readonly compatibility: {
    readonly contentSchemaVersion: string;
    readonly minAppVersion: string;
    readonly maxAppMajor: number;
  };
  readonly packages: readonly ManifestPackageEntry[];
  readonly withdrawals: readonly Withdrawal[];
  readonly releaseNote: string;
  readonly publicationChannel: PublicationChannel;
}
