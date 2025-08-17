import { getUserInfo, type UserInfoResponseDto } from '@/api/user.api';
import { hydrateUserToStore } from '@/store/hydrateUser';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useGetUserInfo() {
  const query = useQuery<UserInfoResponseDto>({
    queryKey: ['user', 'me'],
    queryFn: getUserInfo,
    staleTime: 5 * 60_000,
  });

  useEffect(() => {
    if (query.data) {
      hydrateUserToStore(query.data);
    }
  }, [query.data]);

  return query;
}
