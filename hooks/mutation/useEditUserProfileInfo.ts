import {
  EditUserProfileInfo,
  EditUserProfileInfoRequestDto,
} from '@/api/user.api';

import { useMutation } from '@tanstack/react-query';

export const useEditUserProfileInfo = () => {
  return {
    ...useMutation({
      mutationFn: (data: EditUserProfileInfoRequestDto) =>
        EditUserProfileInfo(data),
      mutationKey: ['editUserProfileInfo'],
    }),
  };
};
