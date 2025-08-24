import { Container, LookMap, TitleText } from './myfarm.styled';

import KakaoMap from '@/components/kakaomap/KakaoMap';
import { MoveDiagonal } from 'lucide-react-native';
import { Text } from 'react-native';
import { useEffect } from 'react';
import { useGetMyFieldLocation } from '@/hooks/mutation/useGetMyFieldLocation';
import { useRouter } from 'expo-router';

export default function MyFarm() {
  const { data: farmLocation, mutate: getMyFarmLocation } =
    useGetMyFieldLocation();
  useEffect(() => {
    getMyFarmLocation();
    console.log(' location : ', farmLocation?.data);
  }, []);

  const router = useRouter();

  return (
    <Container>
      <TitleText>내 농산물 재배 위치</TitleText>
      <KakaoMap
        latitude={farmLocation?.data.location_y}
        longitude={farmLocation?.data.location_x}
      />
      <LookMap onPress={() => router.push('/setFarmLocation')}>
        <Text>지도 보기</Text>
        <MoveDiagonal size={15} />
      </LookMap>
    </Container>
  );
}
