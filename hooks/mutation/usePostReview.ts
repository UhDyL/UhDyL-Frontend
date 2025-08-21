import { PostReviewRequestDto, postReview } from '@/api/review.api';

import { useMutation } from '@tanstack/react-query';

export const usePostReview = (params: PostReviewRequestDto) => {
  return useMutation({
    mutationKey: ['postReview'],
    mutationFn: () => postReview(params),
  });
};
