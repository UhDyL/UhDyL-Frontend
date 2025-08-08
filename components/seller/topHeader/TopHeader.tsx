import { ButtonWrapper, Container, TitleText } from './topHeader.styled';

import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function TopHeader() {
  const router = useRouter();

  return (
    <Container>
      <ButtonWrapper onPress={() => router.back()}>
        <ArrowLeft />
      </ButtonWrapper>
      <TitleText>상점</TitleText>
    </Container>
  );
}
