import { Container, TitleBar, TitleText } from './reviewsBox.styled';

import ReviewItem from './reviewItem/ReviewItem';
import { ReviewType } from '@/api/review.api';
import { Text } from 'react-native';

type Props = {
  data: ReviewType[];
};

export default function ReviewsBox({ data }: Props) {
  return (
    <Container>
      <TitleBar>
        <TitleText>구매 후기</TitleText>
        <Text>{data.length}개</Text>
      </TitleBar>
      {data.map((d, index) => (
        <ReviewItem
          key={index}
          nickname={d.nickName}
          content={d.content}
          createdAt={d.createdAt}
          title={d.title}
          rating={d.rating}
        />
      ))}
    </Container>
  );
}
