import { Container, TextStyled } from './goFarmerMain.styled';
import { Dispatch, SetStateAction } from 'react';

import { useRouter } from 'expo-router';

type Props = {
  setIsModalOn: Dispatch<SetStateAction<boolean>>;
};

export default function GoFarmerMain({ setIsModalOn }: Props) {
  const router = useRouter();

  return (
    <Container onPress={() => setIsModalOn(true)}>
      <TextStyled>판매자 관리 이동</TextStyled>
    </Container>
  );
}
