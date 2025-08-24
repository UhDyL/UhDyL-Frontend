import {
  LoadingContainer,
  LoadingImage,
  LoadingMainText,
  LoadingSubText,
} from './newItem.styled';

import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useFormStore } from '@/store/useFormStore';
import { usePostAIGenerate } from '@/hooks/mutation/usePostAIGenerate';
import { useRouter } from 'expo-router';

export default function LoadingScreen() {
  const router = useRouter();
  const { formData } = useFormStore();
  const { mutate: postAIGenerate } = usePostAIGenerate();

  useEffect(() => {
    postAIGenerate(formData, {
      onSuccess: (result) => {
        const aiImages: string[] = result.images;

        const mergedImages = aiImages.map((url) => {
          const found = formData.images.find((img) => img.url === url);
          return {
            url,
            publicId: found ? found.publicId : '',
          };
        });

        router.push({
          pathname: '/new-item/result',
          params: {
            title: result.title,
            description: result.description,
            price: String(result.price),
            images: JSON.stringify(mergedImages),
            categories: JSON.stringify(result.categories),
          },
        });
      },
    });
  }, []);

  return (
    <LoadingContainer>
      <LoadingImage source={require('../../assets/images/loading_img.png')} />
      <LoadingMainText>AI가 작성 중이에요!</LoadingMainText>
      <TouchableOpacity onPress={() => router.push('/new-item/result')}>
        <LoadingSubText>조금만 기다려 주세요!</LoadingSubText>
      </TouchableOpacity>
    </LoadingContainer>
  );
}
