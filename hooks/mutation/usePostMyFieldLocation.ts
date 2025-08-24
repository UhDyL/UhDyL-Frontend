import { postMyFieldLocation } from '@/api/user.api';
import { useMutation } from '@tanstack/react-query';

export const usePostMyFieldLocation = () => {
  type LocationInput = { x: string; y: string };

  return useMutation<boolean, Error, LocationInput>({
    mutationKey: ['postMyFieldLocation'],
    mutationFn: ({ x, y }) => postMyFieldLocation(x, y),
  });
};
