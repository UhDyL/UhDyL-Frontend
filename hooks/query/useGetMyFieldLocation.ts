import { getMyFieldLocation } from '@/api/user.api';
import { useQuery } from '@tanstack/react-query';

export const useGetMyFieldLocation = () => {
  return useQuery({
    queryKey: ['getMyFieldLocation'],
    queryFn: () => getMyFieldLocation(),
  });
};
