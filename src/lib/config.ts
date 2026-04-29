export const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'setup-testing',
  appEnv: (process.env.NEXT_PUBLIC_APP_ENV ?? 'local') as 'local' | 'stage' | 'production',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api',
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? '',
  isLocal: process.env.NEXT_PUBLIC_APP_ENV === 'local',
  isStage: process.env.NEXT_PUBLIC_APP_ENV === 'stage',
  isProd: process.env.NEXT_PUBLIC_APP_ENV === 'production',
  featureFlags: {
    darkMode: process.env.NEXT_PUBLIC_FEATURE_FLAG_DARK_MODE === 'true',
  },
} as const;
