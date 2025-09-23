import { Container, LookMap } from './myfarm.styled';

import KakaoMap from '@/components/kakaomap/KakaoMap';
import { useGetMyFieldLocation } from '@/hooks/mutation/useGetMyFieldLocation';
import { useRouter } from 'expo-router';
import { MoveDiagonal } from 'lucide-react-native';
import { useEffect } from 'react';
import { Text } from 'react-native';

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
