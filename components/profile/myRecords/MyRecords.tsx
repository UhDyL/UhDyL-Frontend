import ReviewItem, {
  ReviewItemProps,
} from '@/components/seller/reviewsBox/reviewItem/ReviewItem';
import { Container, ListBox } from './myRecords.styled';

import { GetMyZzimResponseDto } from '@/api/zzim.api';
import LikedReviewBox from '@/components/review/likedReviewBox/LikedReviewBox';

type Props = {
  selected: 1 | 2;
  likedData: GetMyZzimResponseDto[];
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
