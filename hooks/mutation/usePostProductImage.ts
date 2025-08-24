import { postProductImage } from '@/api/image.api';
import { useMutation } from '@tanstack/react-query';

export const usePostProductImage = () => {
  return useMutation({
    mutationKey: ['postProductImage'],
    mutationFn: (imageUrl: string) => postProductImage(imageUrl),
  });
};
