import {
  Container,
  ErrorIcon,
  RetryButton,
  RetryButtonText,
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
      <StyledText>정보를 불러올 수 없어요</StyledText>
      {onRetry && (
        <RetryButton onPress={onRetry}>
          <RetryButtonText>다시 시도</RetryButtonText>
        </RetryButton>
      )}
    </Container>
  );
};
