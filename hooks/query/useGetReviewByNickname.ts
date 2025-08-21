import { ReviewType, getReviewByNickname } from '@/api/review.api';

import { useQuery } from '@tanstack/react-query';

export const useGetReviewByNickname = (nickname: string) => {
  return useQuery<ReviewType[]>({
    queryKey: ['getReviewByNickname', nickname],
    queryFn: () => getReviewByNickname(nickname),
    enabled: !!nickname,
    placeholderData: [],
  });
};
