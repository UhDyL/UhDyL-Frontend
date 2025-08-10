import { Container, StyledText } from './onlyTitleHeader.styled';

type Props = {
  title: string;
};

export default function OnlyTitleHeader({ title }: Props) {
  return (
    <Container>
      <StyledText>{title}</StyledText>
    </Container>
  );
}
