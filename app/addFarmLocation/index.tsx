import {
  Container,
  Description,
  MapImage,
  TitleText,
  TopBox,
  TopText,
} from './addFarmLocation.styled';

import Button from '@/components/common/button/Button';
import { useRouter } from 'expo-router';

export default function AddFarmLocation() {
  const router = useRouter();

  return (
    <Container>
      <TopBox>
        <TopText>재배 위치 설정하기</TopText>
        <TitleText>못난이 농산물의 재배 위치를 설정해 보세요</TitleText>
        <MapImage source={require('../../assets/images/map_icon.png')} />
        <Description>
          지도 위에 올려진 핀을 이용하여 재배 위치를 설정해 볼 수 있어요.
        </Description>
      </TopBox>
      <Button
        text='재배 위치 설정하기'
        onClick={() => router.push('/setFarmLocation')}
      />
    </Container>
  );
}
