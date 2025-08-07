import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import TopBar from '@/components/itemDetail/topBar/TopBar';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import { Container } from './itemDetail.styled';

export default function ItemDetial() {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <TopBar setIsModalOn={() => setIsModalOn(true)} />
      <ImageSlideBox price='₩ 19,000' />
      <Text>{id}</Text>
    </Container>
  );
}
