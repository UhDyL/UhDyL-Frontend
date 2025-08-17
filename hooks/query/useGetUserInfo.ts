import { getUserInfo, type UserInfoResponseDto } from '@/api/user.api';
import { hydrateUserToStore } from '@/store/hydrateUser';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useGetUserInfo() {
  const qc = useQueryClient();

  const query = useQuery<UserInfoResponseDto>({
    queryKey: ['user', 'me'],
    queryFn: getUserInfo,
    staleTime: 5 * 60_000,
  });

  useEffect(() => {
    const cached = qc.getQueryData<UserInfoResponseDto>(['user', 'me']);
    if (cached) hydrateUserToStore(cached);
  }, [qc, query.dataUpdatedAt]);

  return query;
}
