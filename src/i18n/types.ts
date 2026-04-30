import type enAuth from './locales/en/auth.json';
import type enCommon from './locales/en/common.json';
import type enDashboard from './locales/en/dashboard.json';

// Recursive dot-path extractor for full type-safety on t() calls
type Paths<T, P extends string = ''> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Paths<T[K], `${P}${string & K}.`>
    : `${P}${string & K}`;
}[keyof T];

export type CommonKeys = Paths<typeof enCommon>;
export type AuthKeys = Paths<typeof enAuth>;
export type DashboardKeys = Paths<typeof enDashboard>;
