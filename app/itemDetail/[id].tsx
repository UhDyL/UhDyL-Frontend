import BottomBar from '@/components/itemDetail/bottomBar/BottomBar';
import { Container } from './itemDetail.styled';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import InfoBox from '@/components/itemDetail/infoBox/InfoBox';
import TopBar from '@/components/itemDetail/topBar/TopBar';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useGetProductDetail } from '@/hooks/query/useGetProductDetail';
import { useLocalSearchParams } from 'expo-router';

export default function ItemDetial() {
  const { id } = useLocalSearchParams();

  const productId = Array.isArray(id) ? id[0] : id;

  const { data } = useGetProductDetail(Number(productId));

  const { showActionSheetWithOptions } = useActionSheet();

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

  return (
    <Container>
      <TopBar onMorePress={handlePress} />
      <ImageSlideBox
        images={data?.images ?? []}
        price={data?.price.toString() ?? ''}
      />
      <InfoBox
        title={data?.title ?? ''}
        description={data?.description ?? ''}
        imgUrl={data?.sellerPicture ?? ''}
        marketName={data?.sellerName ?? ''}
        rating={data?.sellerRating.toString() ?? ''}
      />
      <BottomBar />
    </Container>
  );
}
