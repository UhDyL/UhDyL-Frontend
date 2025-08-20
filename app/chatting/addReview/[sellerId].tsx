import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ButtonText,
  Container,
  FinishButton,
  LineBar,
} from './AddReview.styled';

import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import AddComment from '@/components/review/addComment/AddComment';
import AddPhotos from '@/components/review/addPhotos/AddPhotos';
import AddRating from '@/components/review/addRating/AddRating';
import LikedReviewBox from '@/components/review/likedReviewBox/LikedReviewBox';
import { useGetProductDetail } from '@/hooks/query/useGetProductDetail';
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function AddReviewScreen() {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const { sellerId } = useLocalSearchParams();

  const sellerIdStr = Array.isArray(sellerId) ? sellerId[0] : sellerId ?? '';
  const [isLiked, setIsliked] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const router = useRouter();
  const { data: itemInfo } = useGetProductDetail(+sellerIdStr);

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
          title={itemInfo?.title ?? ''}
          price={itemInfo?.price ?? 0}
          imageUrl={itemInfo?.images[0] ?? ''}
          productId={itemInfo?.id ?? 0}
          zzimid={itemInfo?.id ?? 0}
          sellerName={itemInfo?.sellerName ?? ''}
        />
        <LineBar></LineBar>
        <AddRating rating={rating} setRating={setRating} />
        <AddComment comment={comment} setComment={setComment} />
        <AddPhotos imagesUrl={imagesUrl} setImagesUrl={setImagesUrl} />
        <FinishButton onPress={() => router.replace('/user')}>
          <ButtonText>작성 완료</ButtonText>
        </FinishButton>
      </Container>
    </ScrollView>
  );
}
