import {
  GetProductDetailResponseDto,
  getProductDetail,
} from '@/api/product.api';

import { useQuery } from '@tanstack/react-query';

export const useGetProductDetail = (productId: number) => {
  return useQuery<GetProductDetailResponseDto>({
    queryKey: ['useGetProductDetail'],
    queryFn: () => getProductDetail(productId),
  });
};
