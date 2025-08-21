import { postReviewImage } from '@/api/image.api';
import { useMutation } from '@tanstack/react-query';

export const usePostReviewImage = () => {
  return useMutation({
    mutationKey: ['postReviewImage'],
    mutationFn: (imageUrl: string) => postReviewImage(imageUrl),
  });
};
