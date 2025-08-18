import { Container, Spinner, StyledText } from './loading.styled';

export const Loading = () => {
  return (
    <Container>
      <Spinner />
      <StyledText>로딩 중...</StyledText>
    </Container>
  );
};
