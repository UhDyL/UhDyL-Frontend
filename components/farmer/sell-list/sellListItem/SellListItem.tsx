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
import { useDeleteItem } from '@/hooks/mutation/useDeleteItem';
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
  const { mutate: deleteItem } = useDeleteItem(id);

  const handlePress = () => {
    const options = ['품절하기', '수정하기', '삭제하기', '취소'];
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
                  text1: '품절 요청',
                  text2: '품절 요청 성공!',
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
            deleteItem(undefined, {
              onSuccess: () => {
                Toast.show({
                  type: 'info',
                  text1: '아이템 삭제',
                  text2: '삭제 성공!',
                });
                refetch();
              },
            });
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
      <ManageButton
        isCompleted={isCompleted}
        onEditPress={handlePress}
        onDeletePress={() => {
          deleteItem(undefined, {
            onSuccess: () => {
              Toast.show({
                type: 'info',
                text1: '아이템 삭제',
                text2: '삭제 성공!',
              });
              refetch();
            },
          });
        }}
      />
    </Container>
  );
}
