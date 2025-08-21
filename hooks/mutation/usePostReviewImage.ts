import { postReviewImage } from '@/api/image.api';
import { useMutation } from '@tanstack/react-query';

export const usePostReviewImage = (imageUrl: string) => {
  return useMutation({
    mutationKey: ['postReviewImage'],
    mutationFn: () => postReviewImage(imageUrl),
  });
};
