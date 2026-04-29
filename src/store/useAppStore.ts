import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  name: string;
  email: string;
}

interface AppState {
  // UI State
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  // User session
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // UI State
        sidebarOpen: true,
        toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen }), false, 'toggleSidebar'),
        setSidebarOpen: (open) => set({ sidebarOpen: open }, false, 'setSidebarOpen'),

        // User session
        user: null,
        setUser: (user) => set({ user }, false, 'setUser'),
        clearUser: () => set({ user: null }, false, 'clearUser'),
      }),
      { name: 'app-storage' }
    ),
    { name: 'AppStore' }
  )
);
