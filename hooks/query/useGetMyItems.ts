import { getMyItems } from '@/api/product.api';
import { useQuery } from '@tanstack/react-query';

export const useGetMyItems = () => {
  return useQuery({
    queryKey: ['getMyItems'],
    queryFn: () => getMyItems(),
    initialData: [],
  });
};
