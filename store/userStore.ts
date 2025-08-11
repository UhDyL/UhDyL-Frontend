import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type UserState = {
  userType: 'user' | 'farmer' | null;
  name: string | null;
  setUserType: (t: UserState['userType']) => void;
  setName: (n: string | null) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userType: null,
      name: null,
      setUserType: (t) => set({ userType: t }),
      setName: (n) => set({ name: n }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ userType: s.userType }),
    }
  )
);
