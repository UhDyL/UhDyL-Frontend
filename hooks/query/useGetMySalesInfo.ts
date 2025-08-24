import { getMySalesInfo } from '@/api/product.api';
import { useQuery } from '@tanstack/react-query';

export const useGetMySalesInfo = () => {
  return useQuery({
    queryKey: ['getMySalesInfo'],
    queryFn: () => getMySalesInfo(),
  });
};
