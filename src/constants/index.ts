export const APP_NAME = 'setup-testing';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  USERS: '/dashboard/users',
  SETTINGS: '/dashboard/settings',
} as const;

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  PAGE_SIZE: 10,
} as const;
