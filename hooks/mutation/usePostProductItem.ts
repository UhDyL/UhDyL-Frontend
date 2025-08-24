import { PostProductItemRequestDto, postProductItem } from '@/api/product.api';

import { useMutation } from '@tanstack/react-query';

export const usePostProductItem = () => {
  return useMutation({
    mutationKey: ['postProductItem'],
    mutationFn: (data: PostProductItemRequestDto) => postProductItem(data),
  });
};
