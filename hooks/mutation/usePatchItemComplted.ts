import { patchItemCompleted } from '@/api/product.api';
import { useMutation } from '@tanstack/react-query';

export const usePatchItemComplted = (productId: number) => {
  return useMutation({
    mutationKey: ['patchItemComplted'],
    mutationFn: () => patchItemCompleted(productId),
  });
};
