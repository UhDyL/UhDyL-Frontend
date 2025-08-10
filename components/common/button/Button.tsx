import { ButtonText, Container } from './button.styled';

type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <Container onPress={onClick}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
