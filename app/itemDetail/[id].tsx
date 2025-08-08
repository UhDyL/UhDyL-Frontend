import BottomBar from '@/components/itemDetail/bottomBar/BottomBar';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import InfoBox from '@/components/itemDetail/infoBox/InfoBox';
import TopBar from '@/components/itemDetail/topBar/TopBar';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useLocalSearchParams } from 'expo-router';
import { Container } from './itemDetail.styled';

export default function ItemDetial() {
  const { id } = useLocalSearchParams();
  const sellerId = '2'; // 임의로 설정해둡니당
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
      <ImageSlideBox price='₩ 19,000' />
      <InfoBox
        sellerId={sellerId}
        title='제목'
        description='설명'
        imgUrl=''
        marketName='홍길동'
        rating='5.0'
      />
      <BottomBar />
    </Container>
  );
}
