/**
 * ==============================================================================
 * Vidyabot Database & Cloud Sync Module (Demo Mode / Local Storage Engine)
 * ==============================================================================
 *
 * Current Status: 100% LOCAL BROWSER STORAGE (Demo Mode)
 * - Zero external Firebase credentials, API keys, or live connections.
 * - All state (user profiles, quiz attempts, error books, spaced revision)
 *   is securely managed locally in browser localStorage via `storageService.ts`.
 * - No network vulnerabilities or exposed public database configurations.
 * ==============================================================================
 */

import type {
  UserProfile,
  QuizAttempt,
  ErrorBookItem,
  RevisionSchedule,
  Badge,
  UploadedMaterial,
} from '../types';

export interface FirebaseConnectionStatus {
  app: null;
  db: null;
  isConnected: boolean;
  isDemoMode: boolean;
}

/**
 * Returns null in local demo mode — no live Firestore connections.
 */
export function getFirebaseDb(): null {
  return null;
}

/**
 * Initializes local storage mode without external Firebase dependencies.
 */
export function initFirebase(): FirebaseConnectionStatus {
  return {
    app: null,
    db: null,
    isConnected: false,
    isDemoMode: true,
  };
}

export function getOrCreateUserId(): string {
  const USER_ID_KEY = 'vidyabot_user_id';
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = 'student_' + Math.random().toString(36).substring(2, 9);
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}

// ==============================================================================
// LOCAL STORAGE DEMO STUBS (Zero Network Overhead, No Credentials)
// ==============================================================================

export async function syncUserProfileToFirestore(_profile: UserProfile): Promise<void> {
  return Promise.resolve();
}

export async function fetchUserProfileFromFirestore(): Promise<UserProfile | null> {
  return Promise.resolve(null);
}

export async function syncQuizAttemptToFirestore(_attempt: QuizAttempt): Promise<void> {
  return Promise.resolve();
}

export async function fetchQuizAttemptsFromFirestore(): Promise<QuizAttempt[]> {
  return Promise.resolve([]);
}

export async function syncErrorBookItemToFirestore(_item: ErrorBookItem): Promise<void> {
  return Promise.resolve();
}

export async function syncBatchErrorBookItemsToFirestore(_items: ErrorBookItem[]): Promise<void> {
  return Promise.resolve();
}

export async function fetchErrorBookFromFirestore(): Promise<ErrorBookItem[]> {
  return Promise.resolve([]);
}

export async function syncRevisionScheduleToFirestore(_schedule: RevisionSchedule): Promise<void> {
  return Promise.resolve();
}

export async function fetchRevisionSchedulesFromFirestore(): Promise<RevisionSchedule[]> {
  return Promise.resolve([]);
}

export async function syncBadgeToFirestore(_badge: Badge): Promise<void> {
  return Promise.resolve();
}

export async function syncBadgesToFirestore(_badges: Badge[]): Promise<void> {
  return Promise.resolve();
}

export async function fetchBadgesFromFirestore(): Promise<Badge[]> {
  return Promise.resolve([]);
}

export async function syncUploadedMaterialToFirestore(_material: UploadedMaterial): Promise<void> {
  return Promise.resolve();
}

export async function deleteUploadedMaterialFromFirestore(_id: string): Promise<void> {
  return Promise.resolve();
}

export async function fetchUploadedMaterialsFromFirestore(): Promise<UploadedMaterial[]> {
  return Promise.resolve([]);
}

