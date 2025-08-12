import { Container, GoHomeButton, StyledText } from './levelAndGoHome.styled';

import { useRouter } from 'expo-router';
import OneTwoThreeLevel from '../oneToThreeLevel/OneToThreeLevel';

type Props = {
  level: 1 | 2 | 3;
};

export default function LevelAndGoHome({ level }: Props) {
  const router = useRouter();

  return (
    <Container>
      <OneTwoThreeLevel level={level} />
      <GoHomeButton>
        <StyledText onPress={() => router.push('/farmer')}>
          홈으로 이동
        </StyledText>
      </GoHomeButton>
    </Container>
  );
}
