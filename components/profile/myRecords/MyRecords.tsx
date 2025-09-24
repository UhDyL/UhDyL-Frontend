import { Container, ListBox } from './myRecords.styled';

import { GetMyZzimResponseDto } from '@/api/zzim.api';
import LikedReviewBox from '@/components/review/likedReviewBox/LikedReviewBox';
import ReviewItem from '@/components/seller/reviewsBox/reviewItem/ReviewItem';
import { ReviewType } from '@/api/review.api';
import { useRouter } from 'expo-router';

type Props = {
  selected: 1 | 2;
  likedData: GetMyZzimResponseDto[];
  reviewData: ReviewType[];
};

export default function MyRecords({ selected, likedData, reviewData }: Props) {
  const router = useRouter();

  return (
    <Container>
      {selected === 1 ? (
        <ListBox>
          {likedData.map((data, index) => (
            <LikedReviewBox
              {...data}
              key={index}
              onClick={() => router.push(`/itemDetail/${data.productId}`)}
            />
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
