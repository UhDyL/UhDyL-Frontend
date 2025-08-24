import { getPublicId } from '@/api/image.api';
import { useMutation } from '@tanstack/react-query';

type ImageType = 'USER_IMAGE' | 'PRODUCT_IMAGE' | 'CHAT_IMAGE' | 'REVIEW_IMAGE';

export const useGetPublicId = () => {
  return useMutation({
    mutationKey: ['getPublicId'],
    mutationFn: ({
      imageUrl,
      imageType,
    }: {
      imageUrl: string;
      imageType: ImageType;
    }) => getPublicId(imageUrl, imageType),
  });
};
