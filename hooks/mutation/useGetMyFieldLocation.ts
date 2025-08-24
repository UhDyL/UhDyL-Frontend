import { getMyFieldLocation } from '@/api/user.api';
import { useMutation } from '@tanstack/react-query';
export const useGetMyFieldLocation = () => {
  return useMutation({
    mutationKey: ['getMyFieldLocation'],
    mutationFn: () => getMyFieldLocation(),
  });
};
