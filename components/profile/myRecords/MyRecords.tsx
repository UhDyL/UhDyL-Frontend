import { Container, ListBox } from './myRecords.styled';
import ReviewItem, {
  ReviewItemProps,
} from '@/components/seller/reviewsBox/reviewItem/ReviewItem';

import LikedReviewBox from '@/components/review/likedReviewBox/LikedReviewBox';
import { LikedReviewBoxProps } from '@/types/review';

type Props = {
  selected: 1 | 2;
  likedData: LikedReviewBoxProps[];
  reviewData: ReviewItemProps[];
};

export default function MyRecords({ selected, likedData, reviewData }: Props) {
  return (
    <Container>
      {selected === 1 ? (
        <ListBox>
          {likedData.map((data, index) => (
            <LikedReviewBox {...data} key={index} />
          ))}
        </ListBox>
      ) : (
        <ListBox>
          {reviewData.map((data, index) => (
            <ReviewItem {...data} key={index} />
          ))}
        </ListBox>
      )}
    </Container>
  );
}
