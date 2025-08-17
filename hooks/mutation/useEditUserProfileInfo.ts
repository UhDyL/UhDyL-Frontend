import {
  EditUserProfileInfo,
  EditUserProfileInfoRequestDto,
} from '@/api/user.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditUserProfileInfo = () => {
  const qc = useQueryClient();

  return {
    ...useMutation({
      mutationFn: EditUserProfileInfo,
      mutationKey: ['editUserProfileInfo'],
      onSuccess: (_res, vars) => {
        qc.setQueryData<EditUserProfileInfoRequestDto>(
          ['editUserProfileInfo'],
          (prev) => (prev ? { ...prev, ...vars } : prev)
        );

        qc.invalidateQueries({
          queryKey: ['editUserProfileInfo'],
          refetchType: 'active',
        });
      },
    }),
  };
};
