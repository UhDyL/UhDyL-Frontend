import { ChatBubble, Container, ContentBox } from './opponentMessage.styled';

import { Image } from 'react-native';

type Props = {
  image?: string;
  text: string;
};

export default function OpponentMessage({ image, text }: Props) {
  return (
    <Container>
      <ContentBox>
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
