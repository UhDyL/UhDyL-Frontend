import { Container, TextStyled } from './goFarmerMain.styled';

import { useRouter } from 'expo-router';

export default function GoFarmerMain() {
  const router = useRouter();

  return (
    <Container onPress={() => router.push('/farmer')}>
      <TextStyled>판매자 관리 이동</TextStyled>
    </Container>
  );
}
