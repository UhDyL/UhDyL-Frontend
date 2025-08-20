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

import { useRouter } from 'expo-router';
import { Text } from 'react-native';

export default function ChattingBar({
  chatRoomId,
  chatRoomName,
  message,
  product,
  timestamp,
}: ChatRoomResponseDto) {
  const router = useRouter();
  const chatDate = new Date(timestamp);

  return (
    <Container
      onPress={() => {
        connectChat(chatRoomId, (msg) => {
          console.log('메시지 수신', msg);
        });
        router.push(
          `/chatting/${chatRoomId}?name=${encodeURIComponent(product.title)}`
        );
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
