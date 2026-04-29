import apiClient from '@/lib/api/client';
import { ENDPOINTS } from '@/lib/api/endpoints';
import type { ApiResponse, PaginatedResponse, QueryParams } from '@/lib/api/types';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  role?: 'admin' | 'user';
}

export const userService = {
  getAll: async (params?: QueryParams): Promise<PaginatedResponse<User>> => {
    const { data } = await apiClient.get<PaginatedResponse<User>>(ENDPOINTS.USERS.BASE, { params });
    return data;
  },

  getById: async (id: number): Promise<User> => {
    const { data } = await apiClient.get<ApiResponse<User>>(ENDPOINTS.USERS.BY_ID(id));
    return data.data;
  },

  create: async (payload: CreateUserPayload): Promise<User> => {
    const { data } = await apiClient.post<ApiResponse<User>>(ENDPOINTS.USERS.BASE, payload);
    return data.data;
  },

  update: async (id: number, payload: UpdateUserPayload): Promise<User> => {
    const { data } = await apiClient.patch<ApiResponse<User>>(ENDPOINTS.USERS.BY_ID(id), payload);
    return data.data;
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(ENDPOINTS.USERS.BY_ID(id));
  },
};
