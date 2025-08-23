import { useLocalSearchParams, useRouter } from 'expo-router';

import Button from '@/components/common/button/Button';
import { Container } from './sellsListDetail.styled';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import InfoBox from '@/components/itemDetail/infoBox/InfoBox';
import Toast from 'react-native-toast-message';
import TopBar from '@/components/itemDetail/topBar/TopBar';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useGetProductDetail } from '@/hooks/query/useGetProductDetail';
import { usePatchItemComplted } from '@/hooks/mutation/usePatchItemComplted';

export default function SellsListDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();
  const idStr = Array.isArray(id) ? id[0] : id;
  const { data } = useGetProductDetail(+idStr);
  const { mutate: setCompleted } = usePatchItemComplted(+idStr);

  const handlePress = () => {
    const options = ['거래완료', '수정하기', '삭제하기', '닫기'];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            console.log('거래완료 선택됨');
            setCompleted(undefined, {
              onSuccess: () => {
                Toast.show({
                  type: 'info',
                  text1: '거래 완료',
                  text2: '거래 완료 성공!',
                });
              },
            });
            break;
          case 1:
            router.push(`/sell-list/${id}/edit`);
            break;
          case 2:
            console.log('삭제하기 선택됨');
            // TODO: 삭제 확인 및 실행
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <Container>
      <TopBar onMorePress={handlePress} />
      <ImageSlideBox price='19000' images={data?.images ?? []} />
      <InfoBox
        title={data?.title ?? ''}
        description={data?.description ?? ''}
        sellerName={data?.sellerName ?? ''}
        sellerPicture={data?.sellerPicture ?? ''}
        sellerRating={data?.sellerRating.toString() ?? ''}
        sellerSalesCount={data?.sellerSalesCount ?? 0}
      />
      <Button
        size='full'
        onClick={() => router.push(`/sell-list/${id}/edit`)}
        text='수정하기'
      />
    </Container>
  );
}
