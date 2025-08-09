import { ChatBubble, Container } from './myMessage.styled';

type Props = {
  text: string;
};

export default function MyMessage({ text }: Props) {
  return (
    <Container>
      <ChatBubble>{text}</ChatBubble>
    </Container>
  );
}
