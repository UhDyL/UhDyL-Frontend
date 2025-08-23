import {
  Col,
  Container,
  FarmerNameText,
  ItemNameText,
  PriceText,
  Row,
} from './sellListItem.styled';

import { GetMyItemsResonseDto } from '@/api/product.api';
import ManageButton from '../manageButton/ManageButton';
import OverlayImage from '../overlayImage/OverlayImage';
import Toast from 'react-native-toast-message';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useGetMyItems } from '@/hooks/query/useGetMyItems';
import { usePatchItemComplted } from '@/hooks/mutation/usePatchItemComplted';
import { useRouter } from 'expo-router';

export default function SellListItem({
  id,
  isCompleted,
  mainImageUrl,
  price,
  sellerName,
  sellerPicture,
  title,
}: GetMyItemsResonseDto) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const { mutate: setCompleted } = usePatchItemComplted(id);
  const { refetch } = useGetMyItems();

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
            setCompleted(undefined, {
              onSuccess: () => {
                Toast.show({
                  type: 'info',
                  text1: '거래 완료',
                  text2: '거래 완료 성공!',
                });
                refetch();
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
    <Container onPress={() => router.push(`/sell-list/${id}`)}>
      <Row>
        <OverlayImage isCompleted={isCompleted} source={mainImageUrl} />
        <Col>
          <ItemNameText numberOfLines={1} ellipsizeMode='tail'>
            {title}
          </ItemNameText>
          <PriceText>{price}</PriceText>
          <FarmerNameText>{sellerName}</FarmerNameText>
        </Col>
      </Row>
      <ManageButton isCompleted={isCompleted} onEditPress={handlePress} />
    </Container>
  );
}
