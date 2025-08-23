import {
  Container,
  JustBox,
  SubText,
  TextBox,
  TitleText,
} from './newItem.styled';

import AddPhotos from '@/components/review/addPhotos/AddPhotos';
import Button from '@/components/common/button/Button';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import { useFormStore } from '@/store/useFormStore';
import { usePostProductImage } from '@/hooks/mutation/usePostProductImage';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepTwoScreen() {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const router = useRouter();
  const { formData, setFormData } = useFormStore();

  const { mutateAsync: uploadImage } = usePostProductImage();

  const handleUploadImages = async () => {
    try {
      const results = await Promise.all(
        imagesUrl.map((image) => uploadImage(image))
      );

      const uploadedUrls = results.map((res) => res.imageUrl);
      setImagesUrl(uploadedUrls);

      setFormData({ images: uploadedUrls });

      router.push('/new-item/step2');
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  return (
    <Container>
      <LevelAndGoHome level={1} />
      <TextBox>
        <TitleText>사진</TitleText>
        <SubText>최대 6장까지 첨부할 수 있어요</SubText>
      </TextBox>
      <AddPhotos imagesUrl={imagesUrl} setImagesUrl={setImagesUrl} />
      <JustBox>
        <Button
          size='full'
          text='다음'
          onClick={() => {
            handleUploadImages();
          }}
        />
      </JustBox>
    </Container>
  );
}
