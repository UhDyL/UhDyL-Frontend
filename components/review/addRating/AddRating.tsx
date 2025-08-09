import { Container, DesctriptionText, TitleText } from './addRating.styled';

import { Rating } from 'react-native-ratings';

type Props = {
  rating: number;
  setRating: (rating: number) => void;
};

export default function AddRating({ rating, setRating }: Props) {
  return (
    <Container>
      <TitleText>별점을 매겨 보세요</TitleText>
      <Rating
        onFinishRating={(rating: number) => setRating(rating)}
        startingValue={rating}
        style={{ margin: 20 }}
      />
      <DesctriptionText>별을 선택하세요</DesctriptionText>
    </Container>
  );
}
