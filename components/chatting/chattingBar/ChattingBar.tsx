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

export type ChattingBarProps = {
  chattingId: string;
  itemImage: string;
  itemName: string;
  price: string;
  lastChat: string;
  lastAt: Date;
};

export default function ChattingBar({
  chattingId,
  itemImage,
  itemName,
  price,
  lastChat,
  lastAt,
}: ChattingBarProps) {
  const router = useRouter();

  return (
    <Container
      onPress={() =>
        router.push(
          `/chatting/${chattingId}?name=${encodeURIComponent(itemName)}`
        )
      }
    >
      <ImageBox
        source={
          itemImage
            ? { uri: itemImage }
            : require('../../../assets/images/null_image.png')
        }
      />
      <InfoBox>
        <TopArea>
          <ItemNameText>{itemName}</ItemNameText>
          <Text>
            {' '}
            {lastAt.toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </Text>
        </TopArea>
        <PriceText>{price}</PriceText>
        <LastChatText>{lastChat}</LastChatText>
      </InfoBox>
    </Container>
  );
}
