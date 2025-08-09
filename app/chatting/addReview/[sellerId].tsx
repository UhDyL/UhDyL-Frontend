import {
  ButtonText,
  Container,
  FinishButton,
  LineBar,
} from './AddReview.styled';
import { useLocalSearchParams, useRouter } from 'expo-router';

import AddComment from '@/components/review/addComment/AddComment';
import AddPhotos from '@/components/review/addPhotos/AddPhotos';
import AddRating from '@/components/review/addRating/AddRating';
import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import LikedReviewBox from '@/components/review/likedReviewBox/LikedReviewBox';
import { ScrollView } from 'react-native';
import { useState } from 'react';

export default function AddReviewScreen() {
  const { sellerId } = useLocalSearchParams();
  const [isLiked, setIsliked] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      keyboardShouldPersistTaps='handled'
    >
      <Container>
        <BackAndTitle title='리뷰 작성' />
        <LikedReviewBox
          toggleLiked={() => setIsliked(!isLiked)}
          sellerImgUrl=''
          isLiked={isLiked}
          itemName='복숭아'
          price='19,000원'
          sellerName='복복자'
        />
        <LineBar></LineBar>
        <AddRating rating={rating} setRating={setRating} />
        <AddComment comment={comment} setComment={setComment} />
        <AddPhotos />
        <FinishButton onPress={() => router.replace('/consumer')}>
          <ButtonText>작성 완료</ButtonText>
        </FinishButton>
      </Container>
    </ScrollView>
  );
}
