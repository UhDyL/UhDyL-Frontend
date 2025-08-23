import { deleteItem } from '@/api/product.api';
import { useMutation } from '@tanstack/react-query';

export const useDeleteItem = (productId: number) => {
  return useMutation({
    mutationKey: ['deleteItem'],
    mutationFn: () => deleteItem(productId),
  });
};
