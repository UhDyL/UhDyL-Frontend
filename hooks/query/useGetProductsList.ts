import { GetProductsResponseDto, getProductsList } from '@/api/product.api';

import { useQuery } from '@tanstack/react-query';

export const useGetProductsList = () => {
  return useQuery<GetProductsResponseDto[]>({
    queryKey: ['getProductsList'],
    queryFn: getProductsList,
  });
};
