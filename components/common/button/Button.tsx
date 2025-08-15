import { ButtonText, Container } from './button.styled';

type Props = {
  text: string;
  onClick: () => void;
  size?: 'full' | 'half';
  color?: string;
};

export default function Button({ text, onClick, size, color }: Props) {
  return (
    <Container
      onPress={onClick}
      size={size ?? 'full'}
      color={color ?? '#30DB5B'}
    >
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
