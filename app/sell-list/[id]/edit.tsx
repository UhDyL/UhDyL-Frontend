import { useLocalSearchParams, useRouter } from 'expo-router';

import Button from '@/components/common/button/Button';
import EditItemContent from '@/components/farmer/editItemContent/EditItemContent';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import { useState } from 'react';
import { Container } from './editItem.styled';

export default function EditItem() {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState<string>('예시 제목');
  const [content, setContent] = useState<string>('예시 내용들 블라블라');
  const router = useRouter();

  return (
    <Container>
      <LevelAndGoHome level={3} />
      <ImageSlideBox price='19000' />
      <EditItemContent
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
      <Button onClick={() => router.back()} text='작성 완료' />
    </Container>
  );
}
