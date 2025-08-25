import {
  Container,
  JustBox,
  LoadingView,
  SubText,
  TextBox,
  TitleText,
} from './newItem.styled';

import AddPhotos from '@/components/review/addPhotos/AddPhotos';
import Button from '@/components/common/button/Button';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import { Loading } from '@/components/common/loading/Loading';
import { View } from 'react-native';
import { useFormStore } from '@/store/useFormStore';
import { usePostProductImage } from '@/hooks/mutation/usePostProductImage';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepTwoScreen() {
  const { setFormData } = useFormStore();
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: uploadImage } = usePostProductImage();
  const router = useRouter();

  const handleUploadImages = async () => {
    if (isUploaded) {
      router.push('/new-item/step2');
      return;
    }

    try {
      setIsLoading(true);
      const results = await Promise.all(
        imagesUrl.map(async (localUrl) => {
          const res = await uploadImage(localUrl);
          return { url: res[0].imageUrl, publicId: res[0].publicId };
        })
      );

      setFormData({ images: results });
      setIsUploaded(true);
      router.push('/new-item/step2');
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <LevelAndGoHome level={1} />
        <TextBox>
          <TitleText>사진</TitleText>
          <SubText>최대 6장까지 첨부할 수 있어요</SubText>
        </TextBox>

        <AddPhotos imagesUrl={imagesUrl} setImagesUrl={setImagesUrl} />

        <JustBox>
          <Button size='full' text='다음' onClick={handleUploadImages} />
        </JustBox>
      </Container>

      {isLoading && (
        <LoadingView>
          <Loading />
        </LoadingView>
      )}
    </View>
  );
}
