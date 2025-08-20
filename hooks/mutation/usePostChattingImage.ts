import { ImageUploadResponseDto, postChattingImage } from '@/api/image.api';

import { useMutation } from '@tanstack/react-query';

export const usePostChattingImage = (roomId: string, imageUrl: string) => {
  return useMutation<ImageUploadResponseDto>({
    mutationKey: ['postChattingImage'],
    mutationFn: () => postChattingImage(roomId, imageUrl),
  });
};
