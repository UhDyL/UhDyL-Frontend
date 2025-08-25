import { Container, StyledName } from './opponentInfo.styled';

type Props = {
  name: string;
};

export default function OpponentInfo({ name }: Props) {
  return (
    <Container>
      <StyledName>{name}</StyledName>
    </Container>
  );
}
