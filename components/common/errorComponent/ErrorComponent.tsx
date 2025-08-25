import {
  Container,
  ErrorIcon,
  RetryButton,
  StyledText,
} from './errorComponent.styled';

type Props = {
  error: Error;
  onRetry?: () => void;
};

export const ErrorComponent = ({ error, onRetry }: Props) => {
  return (
    <Container>
      <ErrorIcon source={require('../../../assets/images/error_icon.png')} />
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
