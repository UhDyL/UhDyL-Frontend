import * as Location from 'expo-location';

import { useEffect, useState } from 'react';
import { Container, LookMap, TitleText } from './myfarm.styled';

import KakaoMap from '@/components/kakaomap/KakaoMap';
import { useRouter } from 'expo-router';
import { MoveDiagonal } from 'lucide-react-native';
import { Text } from 'react-native';

export default function MyFarm() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const router = useRouter();

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('위치 권한이 거부되었습니다.');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } catch (error) {
      console.error('위치 정보를 가져오는 데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Container>
      <TitleText>내 농산물 재배 위치</TitleText>
      {location && (
        <KakaoMap latitude={location.latitude} longitude={location.longitude} />
      )}
      <LookMap onPress={() => router.push('/setFarmLocation')}>
        <Text>지도 보기</Text>
        <MoveDiagonal size={15} />
      </LookMap>
    </Container>
  );
}
