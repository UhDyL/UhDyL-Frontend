import ReviewItem, { ReviewItemProps } from './reviewItem/ReviewItem';
import { Container, TitleBar, TitleText } from './reviewsBox.styled';

import { Text } from 'react-native';

type Props = {
  data: ReviewItemProps[];
};

export default function ReviewsBox({ data }: Props) {
  return (
    <Container>
      <TitleBar>
        <TitleText>구매 후기</TitleText>
        <Text>{data.length}개</Text>
      </TitleBar>
      {data.map((d, index) => (
        <ReviewItem key={index} {...d} />
      ))}
    </Container>
  );
}
