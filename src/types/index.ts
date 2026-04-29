// Shared TypeScript types

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export type SortOrder = 'asc' | 'desc';

export type AppEnv = 'local' | 'stage' | 'production';

export type UserRole = 'admin' | 'user';
