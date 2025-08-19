import type { GetProductDetailResponseDto } from '@/api/product.api';
import { PostZzimResponseDto, toggleZzim } from '@/api/zzim.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useToggleZzim = (
  productId: number,
  options?: Parameters<
    typeof useMutation<PostZzimResponseDto, Error, void, unknown>
  >[0]
) => {
  const qc = useQueryClient();

  return useMutation<PostZzimResponseDto, Error, void, unknown>({
    mutationKey: ['useToggleZzim'],
    mutationFn: () => toggleZzim(productId),
    onSuccess: (data) => {
      qc.setQueryData<GetProductDetailResponseDto>(
        ['useGetProductDetail', productId],
        (old) => (old ? { ...old, isZzim: data.isZzim } : old)
      );

      qc.setQueryData<PostZzimResponseDto[]>(['useGetZzimList'], (old) => {
        if (!old) return old;
        return data.isZzim
          ? [...old, data]
          : old.filter((z) => z.zzim.id !== data.zzim.id);
      });

      qc.invalidateQueries({ queryKey: ['useGetProductDetail', productId] });
      qc.invalidateQueries({ queryKey: ['useGetZzimList'] });

      options?.onSuccess?.(data, undefined as any, undefined as any);
    },
    ...options,
  });
};
