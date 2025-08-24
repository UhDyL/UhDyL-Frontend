import * as SecureStore from 'expo-secure-store';

import { getFarmerAuth } from '@/api/user.api';
import { useMutation } from '@tanstack/react-query';

export const useGetFarmerAuth = () => {
  return useMutation({
    mutationKey: ['getFarmerAuth'],
    mutationFn: () => getFarmerAuth(),
    onSuccess: async (data) => {
      const { accessToken, refreshToken } = data;

      await SecureStore.setItem('accessToken', accessToken);
      await SecureStore.setItem('refreshToken', refreshToken);

      console.log('토큰 갱신 완료!');
    },
    onError: (error) => {
      console.error('토큰 갱신 실패:', error);
    },
  });
};
