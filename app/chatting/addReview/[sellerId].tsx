import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import { Container } from './AddReview.styled';
import LikedReviewBox from '@/components/review/likedReviewBox/LikedReviewBox';
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function AddReviewScreen() {
  const { sellerId } = useLocalSearchParams();

  return (
    <Container>
      <BackAndTitle title='리뷰 작성' />
      <LikedReviewBox
        sellerImgUrl=''
        isLiked={false}
        itemName='복숭아'
        price='19,000원'
        sellerName='복복자'
      />
      <Text>hi</Text>
      <Text>{sellerId}</Text>
    </Container>
  );
}
