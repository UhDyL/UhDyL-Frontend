import { Container, StyledText } from './customTextBox.styled';

type Props = {
  text: string;
};

export default function CustomTextBox({ text }: Props) {
  return (
    <Container>
      <StyledText>{text}</StyledText>
    </Container>
  );
}
