import { ReviewType, getMyReviewList } from '@/api/review.api';

import { useQuery } from '@tanstack/react-query';

export const useGetMyReview = () => {
  return useQuery<ReviewType[]>({
    queryKey: ['getMyReview'],
    queryFn: () => getMyReviewList(),
    initialData: [],
  });
};
