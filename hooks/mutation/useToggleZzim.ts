import { PostZzimResponseDto, toggleZzim } from '@/api/zzim.api';
import { useMutation } from '@tanstack/react-query';

export const useToggleZzim = (productId: number) => {
  return useMutation<PostZzimResponseDto>({
    mutationKey: ['useToggleZzim', productId],
    mutationFn: () => toggleZzim(productId),
  });
};
