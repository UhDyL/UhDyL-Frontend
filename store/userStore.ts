import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type UserState = {
  profileImageUrl: string;
  nickname: string;
  role: 'user' | 'farmer';
  mode: 'user' | 'farmer';
  isLoggedIn: boolean;

  setProfileImageUrl: (t: string) => void;
  setNickname: (t: string) => void;
  setRole: (t: 'user' | 'farmer') => void;
  setMode: (t: 'user' | 'farmer' | 'USER' | 'FARMER') => void;
  setIsLoggedIn: (b: boolean) => void;

  logout: () => Promise<void>;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profileImageUrl: '',
      nickname: '',
      role: 'user',
      mode: 'user',
      isLoggedIn: false,

      setProfileImageUrl: (t) => set({ profileImageUrl: t }),
      setNickname: (t) => set({ nickname: t }),
      setRole: (t) => set({ role: t }),
      setMode: (t) => set({ mode: t.toLowerCase() as 'user' | 'farmer' }),
      setIsLoggedIn: (b) => set({ isLoggedIn: b }),

      logout: async () => {
        await AsyncStorage.removeItem('user-storage');
        set({
          profileImageUrl: '',
          nickname: '',
          role: 'user',
          mode: 'user',
          isLoggedIn: false,
        });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        profileImageUrl: s.profileImageUrl,
        nickname: s.nickname,
        role: s.role,
        mode: s.mode,
        isLoggedIn: s.isLoggedIn,
      }),
    }
  )
);
