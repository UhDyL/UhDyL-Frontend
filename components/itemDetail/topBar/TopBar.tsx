import {
  ButtonWrapper,
  Container,
  LeftSection,
  StyledBeforeIcon,
  StyledDotIcon,
  StyledHomeIcon,
} from './topBar.styled';

import { useRouter } from 'expo-router';

type Props = {
  onMorePress: () => void;
};

export default function TopBar({ onMorePress }: Props) {
  const router = useRouter();

  return (
    <Container>
      <LeftSection>
        <ButtonWrapper onPress={() => router.back()}>
          <StyledBeforeIcon />
        </ButtonWrapper>
        <ButtonWrapper onPress={() => router.replace('/user')}>
          <StyledHomeIcon />
        </ButtonWrapper>
      </LeftSection>
      <ButtonWrapper onPress={onMorePress}>
        <StyledDotIcon />
      </ButtonWrapper>
    </Container>
  );
}
