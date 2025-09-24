import * as Location from 'expo-location';

import {
  ButtonWrapper,
  Container,
  OverlayArea,
} from './setFarmLocation.styled';
import { useEffect, useState } from 'react';

import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import Button from '@/components/common/button/Button';
import KakaoMap from '@/components/kakaomap/KakaoMap';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { hydrateUserAgain } from '@/services/auth.service';
import { useGetFarmerAuth } from '@/hooks/mutation/useGetFarmerAuth';
import { usePostMyFieldLocation } from '@/hooks/mutation/usePostMyFieldLocation';
import { useRouter } from 'expo-router';

export default function SetFarmLocationScreen() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const router = useRouter();
  const { mutate: getFarmerAuth } = useGetFarmerAuth();
  const { mutate: postMyFieldLocation } = usePostMyFieldLocation();

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
      setSelectedLocation({
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
      <OverlayArea>
        <BackAndTitle title='재배 위치 설정' />
      </OverlayArea>

      {location ? (
        <>
          <KakaoMap
            latitude={location.latitude}
            longitude={location.longitude}
            onLocationSelect={(lat, lng) => {
              setSelectedLocation({ latitude: lat, longitude: lng });
            }}
          />
          {/* <Text style={{ marginTop: 10, textAlign: 'center' }}>
            현재 선택된 위치: {selectedLocation?.latitude.toFixed(6)},
            {selectedLocation?.longitude.toFixed(6)}
          </Text> */}
        </>
      ) : (
        <Text>위치 정보를 불러오는 중...</Text>
      )}
      <ButtonWrapper>
        <Button
          text='재배 위치 설정하기'
          onClick={() => {
            postMyFieldLocation(
              {
                x: selectedLocation?.longitude.toString() ?? '',
                y: selectedLocation?.latitude.toString() ?? '',
              },
              {
                onSuccess: () => {
                  Toast.show({
                    type: 'info',
                    text1: '밭 위치 설정 성공!',
                    text2: '판매자 인증이 완료되어 판매자 페이지로 이동합니다.',
                  });
                  getFarmerAuth(undefined, {
                    onSuccess: () => {
                      hydrateUserAgain();
                      router.push('/farmer');
                    },
                  });
                },
                onError: () => {
                  Toast.show({
                    type: 'error',
                    text1: '밭 위치 설정 실패',
                    text2: '네트워크 상태를 확인해주세요.',
                  });
                },
              }
            );
          }}
        />
      </ButtonWrapper>
    </Container>
  );
}
