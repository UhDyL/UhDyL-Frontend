import { useLocalSearchParams, useRouter } from 'expo-router';

import Button from '@/components/common/button/Button';
import { Container } from './sellsListDetail.styled';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import InfoBox from '@/components/itemDetail/infoBox/InfoBox';
import TopBar from '@/components/itemDetail/topBar/TopBar';
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function SellsListDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

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
            // TODO: 완료 처리 로직
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
      <ImageSlideBox price='19000' />
      <InfoBox
        sellerId={'dd'}
        title='제목'
        description='설명'
        imgUrl=''
        marketName='홍길동'
        rating='5.0'
      />
      <Button
        size='full'
        onClick={() => router.push(`/sell-list/${id}/edit`)}
        text='수정하기'
      />
    </Container>
  );
}
