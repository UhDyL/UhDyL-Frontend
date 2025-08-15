import { JustBox, ResultContainer } from './newItem.styled';

import Button from '@/components/common/button/Button';
import EditItemContent from '@/components/farmer/editItemContent/EditItemContent';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import TwoButtonTopBar from '@/components/twoButtonTopBar/TwoButtonTopBar';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function ResultScreen() {
  const router = useRouter();
  const [title, setTitle] = useState<string>('제목예시구요');
  const [content, setContent] = useState<string>('내용예시입니당');

  return (
    <ResultContainer>
      <TwoButtonTopBar />
      <ImageSlideBox price='19,000' />

      <EditItemContent
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />

      <JustBox>
        <Button
          size='full'
          text='작성 완료'
          onClick={() => router.push('/farmer')}
        />
      </JustBox>
    </ResultContainer>
  );
}
