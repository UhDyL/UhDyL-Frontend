import { useEffect, useState } from 'react';

import { Alert } from 'react-native';
import BottomBar from '@/components/itemDetail/bottomBar/BottomBar';
import { Container } from './itemDetail.styled';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import InfoBox from '@/components/itemDetail/infoBox/InfoBox';
import TopBar from '@/components/itemDetail/topBar/TopBar';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useGetProductDetail } from '@/hooks/query/useGetProductDetail';
import { useLocalSearchParams } from 'expo-router';
import { useToggleZzim } from '@/hooks/mutation/useToggleZzim';

export default function ItemDetail() {
  const { id } = useLocalSearchParams();
  const productId = Array.isArray(id) ? id[0] : id;
  const { mutate } = useToggleZzim(+productId);
  const { data: product } = useGetProductDetail(Number(productId));
  const [isLiked, setIsLiked] = useState<boolean>(product?.isZzimed ?? false);

  const { showActionSheetWithOptions } = useActionSheet();

  const handleToggleLiked = () => {
    mutate(undefined, {
      onSuccess: (data) => {
        setIsLiked(data.isZzim);
        console.log('찜 요청 성공 : ', data.isZzim);
      },
      onError: () => {
        Alert.alert('찜 요청 실패', '다시 시도해주세요.');
      },
    });
  };

  const handlePress = () => {
    console.log('점 세 개 아이콘 클릭됨!');
    const options = ['신고하기', '닫기'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log('신고하기 선택됨');
        }
      }
    );
  };

  useEffect(() => {
    if (product) {
      setIsLiked(product.isZzimed);
    }
  }, [product]);

  return (
    <Container>
      <TopBar onMorePress={handlePress} />
      <ImageSlideBox
        images={product?.images ?? []}
        price={product?.price.toString() ?? ''}
      />
      <InfoBox
        title={product?.title ?? ''}
        description={product?.description ?? ''}
        imgUrl={product?.sellerPicture ?? ''}
        marketName={product?.sellerName ?? ''}
        rating={product?.sellerRating.toString() ?? ''}
      />
      <BottomBar isLiked={isLiked} setIsLiked={handleToggleLiked} />
    </Container>
  );
}
