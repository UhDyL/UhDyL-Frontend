import { PatchItemInfoReqeustDto, patchItemInfo } from '@/api/product.api';

import { useMutation } from '@tanstack/react-query';

export const usePatchItemInfo = (productId: number) => {
  return useMutation({
    mutationKey: ['patchItemInfo'],
    mutationFn: (data: PatchItemInfoReqeustDto) =>
      patchItemInfo(productId, data),
  });
};
