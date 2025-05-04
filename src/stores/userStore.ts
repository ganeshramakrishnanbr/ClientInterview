import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from '../types';

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// In a real application, this would interact with an authentication API
export const useUserStore = create<UserState>()(
  immer((set) => ({
    user: null,
    loading: false,
    error: null,

    setUser: (user) => {
      set((state) => {
        state.user = user;
      });
    },

    login: async (email, password) => {
      set((state) => { state.loading = true; state.error = null; });
      
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // For demo purposes only
        const mockUser: User = {
          id: '1',
          name: 'Demo User',
          email
        };
        
        set((state) => {
          state.user = mockUser;
          state.loading = false;
        });
      } catch (error) {
        set((state) => {
          state.error = error instanceof Error ? error.message : 'Login failed';
          state.loading = false;
        });
      }
    },

    logout: () => {
      set((state) => {
        state.user = null;
      });
    }
  }))
);