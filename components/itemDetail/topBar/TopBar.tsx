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
  setIsModalOn: () => void;
};

export default function TopBar({ setIsModalOn }: Props) {
  const router = useRouter();

  return (
    <Container>
      <LeftSection>
        <ButtonWrapper onPress={() => router.back()}>
          <StyledBeforeIcon />
        </ButtonWrapper>
        <ButtonWrapper onPress={() => router.replace('/consumer')}>
          <StyledHomeIcon />
        </ButtonWrapper>
      </LeftSection>
      <ButtonWrapper>
        <StyledDotIcon onPress={() => setIsModalOn()} />
      </ButtonWrapper>
    </Container>
  );
}
