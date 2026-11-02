import { DEMO_DB_NAME, LEARNER_DB_NAME } from '@/data/db.ts';

/**
 * Build-time channel. The learner build ships only content/learner; the review
 * build (explicit technical/review mode) ships content/review and uses a
 * separate database name so review fixtures never mix with learner data.
 */
export const CONTENT_CHANNEL: 'learner' | 'review' = import.meta.env.VITE_CONTENT_CHANNEL === 'review' ? 'review' : 'learner';
export const DB_NAME = CONTENT_CHANNEL === 'review' ? DEMO_DB_NAME : LEARNER_DB_NAME;
export const MANIFEST_URL = `${import.meta.env.BASE_URL}content/manifest.json`;
export const APP_VERSION_STRING = __APP_VERSION__;
export const APP_BUILD_TAG = __APP_BUILD__;
export const TAB_PROFILE_KEY = 'ireb-cpre.tab-profile';
export const LAST_PROFILE_KEY = 'ireb-cpre.last-profile';
