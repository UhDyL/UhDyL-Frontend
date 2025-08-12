import {
  Col,
  Container,
  FarmerNameText,
  ItemNameText,
  PriceText,
  Row,
} from './sellListItem.styled';

import { useActionSheet } from '@expo/react-native-action-sheet';
import { useRouter } from 'expo-router';
import ManageButton from '../manageButton/ManageButton';
import OverlayImage from '../overlayImage/OverlayImage';

type Props = {
  itemImg: string;
  itemName: string;
  price: string;
  farmerName: string;
  isCompleted: boolean;
  itemId: string;
};

export default function SellListItem({
  itemImg,
  itemName,
  price,
  farmerName,
  isCompleted,
  itemId,
}: Props) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const handlePress = () => {
    const options = ['거래완료', '수정하기', '삭제하기', '취소'];
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
            router.push(`/sell-list/${itemId}/edit`);
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
    <Container onPress={() => router.push(`/sell-list/${itemId}`)}>
      <Row>
        <OverlayImage isCompledted={isCompleted} source={itemImg} />
        <Col>
          <ItemNameText>{itemName}</ItemNameText>
          <PriceText>{price}</PriceText>
          <FarmerNameText>{farmerName}</FarmerNameText>
        </Col>
      </Row>
      <ManageButton isCompleted={isCompleted} onEditPress={handlePress} />
    </Container>
  );
}
