import { ChatBubble, Container, ContentBox } from './opponentMessage.styled';

import { Image } from 'react-native';
import OpponentInfo from '../opponentInfo/OppenentInfo';

type Props = {
  image?: string;
  text: string;
  senderImage: string;
  senderName: string;
};

export default function OpponentMessage({
  image,
  text,
  senderImage,
  senderName,
}: Props) {
  return (
    <Container>
      <ContentBox>
        <OpponentInfo imgUrl={senderImage} name={senderName} />
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 8,
              marginBottom: 8,
            }}
          />
        )}
        {text ? <ChatBubble>{text}</ChatBubble> : null}
      </ContentBox>
    </Container>
  );
}
