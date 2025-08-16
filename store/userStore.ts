import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type UserState = {
  profileImageUrl: string;
  nickname: string;
  role: 'user' | 'farmer';
  mode: '구매자' | '판매자';
  setProfileImageUrl: (t: string) => void;
  setNickame: (t: string) => void;
  setRole: (t: 'user' | 'farmer') => void;
  setMode: (t: '구매자' | '판매자') => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profileImageUrl: '',
      nickname: '',
      role: 'user',
      mode: '구매자',
      setProfileImageUrl: (t) => set({ profileImageUrl: t }),
      setNickame: (t) => set({ nickname: t }),
      setRole: (t) => set({ role: t }),
      setMode: (t) => set({ mode: t }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        profileImageUrl: s.profileImageUrl,
        nickname: s.nickname,
        role: s.role,
        mode: s.mode,
      }),
    }
  )
);
