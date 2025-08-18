import { Container, RetryButton, StyledText } from './errorComponent.styled';

type Props = {
  error: Error;
  onRetry?: () => void;
};

export const ErrorComponent = ({ error, onRetry }: Props) => {
  return (
    <Container>
      <StyledText>에러 발생!</StyledText>
      <StyledText>{error.message}</StyledText>
      {onRetry && (
        <RetryButton onPress={onRetry}>
          <StyledText>다시 시도</StyledText>
        </RetryButton>
      )}
    </Container>
  );
};
