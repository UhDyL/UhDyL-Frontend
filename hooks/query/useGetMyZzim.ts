import { GetMyZzimResponseDto, getMyZzim } from '@/api/zzim.api';

import { useQuery } from '@tanstack/react-query';

export const useGetMyZzim = () => {
  return useQuery<GetMyZzimResponseDto[]>({
    queryKey: ['getMyZzim'],
    queryFn: () => getMyZzim(),
  });
};
