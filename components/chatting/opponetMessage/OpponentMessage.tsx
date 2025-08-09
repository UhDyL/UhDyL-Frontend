import { ChatBubble, Container } from './opponentMessage.styled';

type Props = {
  text: string;
};

export default function OpponentMessage({ text }: Props) {
  return (
    <Container>
      <ChatBubble>{text}</ChatBubble>
    </Container>
  );
}
