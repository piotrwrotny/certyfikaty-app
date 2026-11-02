import { createContext, useContext } from 'react';
import type { CpreDb, ProfileRecord } from '@/data/db.ts';
import type { ContentPackage } from '@/content/types.ts';
import type { LearningService } from '@/services/learning.ts';
import type { ProfileRepository } from '@/data/profiles.ts';
import type { ContentUpdatesApi } from '@/updates/useContentUpdates.ts';
import type { Route } from './router.ts';

export interface ActiveContentState {
  releaseId: string | null;
  packages: readonly ContentPackage[];
  loaded: boolean;
  technicalFixture: boolean;
}

export interface AppCtx {
  db: CpreDb;
  learning: LearningService;
  profiles: ProfileRepository;
  profile: ProfileRecord;
  content: ActiveContentState;
  updates: ContentUpdatesApi;
  navigate: (r: Route, opts?: { replace?: boolean }) => void;
  announce: (msg: string) => void;
  /** Saves current state (pausing an active check) and returns to the selector. */
  switchProfile: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  saveError: string | null;
  setSaveError: (msg: string | null) => void;
  /** Called by views that hold the in-progress attempt so app-update/profile switch can pause it. */
  registerActiveAttempt: (attemptId: string | null) => void;
}

export const AppContext = createContext<AppCtx | null>(null);

export function useApp(): AppCtx {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('AppContext missing');
  return ctx;
}
