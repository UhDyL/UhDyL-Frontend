import {
  ButtonWrapper,
  Container,
  LeftSection,
  StyledBeforeIcon,
  StyledDotIcon,
  StyledHomeIcon,
} from './topBar.styled';

import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';

type Props = {
  onMorePress: () => void;
};

export default function TopBar({ onMorePress }: Props) {
  const router = useRouter();
  const userType = useUserStore((state) => state.userType);

  return (
    <Container>
      <LeftSection>
        <ButtonWrapper onPress={() => router.back()}>
          <StyledBeforeIcon />
        </ButtonWrapper>
        <ButtonWrapper
          onPress={() =>
            router.replace(userType === 'user' ? '/user' : '/farmer')
          }
        >
          <StyledHomeIcon />
        </ButtonWrapper>
      </LeftSection>
      <ButtonWrapper onPress={onMorePress}>
        <StyledDotIcon />
      </ButtonWrapper>
    </Container>
  );
}
