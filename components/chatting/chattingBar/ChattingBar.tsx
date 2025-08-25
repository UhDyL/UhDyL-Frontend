import { ChatRoomResponseDto, connectChat } from '@/api/chatting.api';
import {
  Container,
  ImageBox,
  InfoBox,
  ItemNameText,
  LastChatText,
  PriceText,
  TopArea,
} from './chattingBar.styled';

import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

export default function ChattingBar({
  chatRoomId,
  chatRoomName,
  message,
  product,
  timestamp,
  isTradeCompleted,
}: ChatRoomResponseDto) {
  const router = useRouter();
  const chatDate = new Date(timestamp);
  const userName = useUserStore((state) => state.nickname);

  return (
    <Container
      onPress={() => {
        connectChat(chatRoomId, (msg) => {
          console.log('메시지 수신', msg);
        });
        router.push({
          pathname: '/chatting/[id]',
          params: {
            id: chatRoomId,
            name: product.title,
            itemId: product.id.toString(),
            isTradeCompleted: isTradeCompleted.toString(),
            isMyProduct: (product.sellerName === userName).toString(),
          },
        });
      }}
    >
      <ImageBox
        source={
          product.mainImageUrl
            ? { uri: product.mainImageUrl }
            : require('../../../assets/images/null_image.png')
        }
      />
      <InfoBox>
        <TopArea>
          <ItemNameText>{product.title}</ItemNameText>
          <Text>
            {' '}
            {chatDate.toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </Text>
        </TopArea>
        <PriceText>{product.price}</PriceText>
        <LastChatText>{message ?? '아직 보낸 메세지가 없어요!'}</LastChatText>
      </InfoBox>
    </Container>
  );
}
