import { Alert, ScrollView } from 'react-native';
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
import Toast from 'react-native-toast-message';
import { useGetProductDetail } from '@/hooks/query/useGetProductDetail';
import { usePostReview } from '@/hooks/mutation/usePostReview';
import { usePostReviewImage } from '@/hooks/mutation/usePostReviewImage';
import { useState } from 'react';

export default function AddReviewScreen() {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const { sellerId } = useLocalSearchParams();

  const sellerIdStr = Array.isArray(sellerId) ? sellerId[0] : sellerId ?? '';
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const router = useRouter();
  const { data: itemInfo } = useGetProductDetail(+sellerIdStr);
  const { mutate } = usePostReview({
    content: comment,
    rating: rating,
    imageUrl: imagesUrl[0],
    publicId: '',
    productId: +sellerIdStr,
  });
  const { mutate: postImage } = usePostReviewImage();

  const handleAddImage = (newImage: string[]) => {
    setImagesUrl((prev) => [...prev, newImage[0]]);

    postImage(newImage[0], {
      onSuccess: (response) => {
        console.log('업로드됨 : ', response.imageUrl);
        setImagesUrl((prev) =>
          prev.map((img) => (img === newImage[0] ? response.imageUrl : img))
        );
      },
      onError: (err) => {
        Alert.alert(err.message);
        setImagesUrl((prev) => prev.filter((img) => img !== newImage[0]));
      },
    });
  };

  const allImagesUploaded = imagesUrl.every((url) => url.startsWith('http'));

  const finishReview = () => {
    if (allImagesUploaded) {
      mutate(undefined, {
        onSuccess: () => {
          router.push('/user');
        },
        onError: (err) => {
          Toast.show({
            type: 'error',
            text1: 'API 요청 실패',
            text2: err.message,
          });
        },
      });
    } else {
      Alert.alert('이미지가 아직 업로드 중입니다.');
    }
  };

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
        <AddPhotos
          imagesUrl={imagesUrl}
          setImagesUrl={setImagesUrl}
          onAddImage={handleAddImage}
        />
        <FinishButton onPress={finishReview}>
          <ButtonText>작성 완료</ButtonText>
        </FinishButton>
      </Container>
    </ScrollView>
  );
}
