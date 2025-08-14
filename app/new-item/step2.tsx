import {
  Container,
  JustBox,
  PictureTextBox,
  SubText,
  TitleText,
} from './newItem.styled';

import Button from '@/components/common/button/Button';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import AddPhotos from '@/components/review/addPhotos/AddPhotos';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepTwoScreen() {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const router = useRouter();

  return (
    <Container>
      <LevelAndGoHome level={2} />
      <PictureTextBox>
        <TitleText>사진</TitleText>
        <SubText>최대 6장까지 첨부할 수 있어요</SubText>
      </PictureTextBox>
      <AddPhotos imagesUrl={imagesUrl} setImagesUrl={setImagesUrl} />
      <JustBox>
        <Button text='다음' onClick={() => router.push('/new-item/step3')} />
      </JustBox>
    </Container>
  );
}
