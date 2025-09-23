import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
  padding-top: 120px;
  align-items: center;
  justify-content: flex-start;
  gap: 140px;
`;

export const IconContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const KakaoLoginImg = styled(Image)``;

export const GoogleLoginImg = styled(Image)`
  border: 1px solid #f2f2f2;
`;

export const TitleImg = styled.View`
  width: 80%;
`;

export const ImageContainer = styled(Image)`
  object-fit: contain;
  width: 120%;
  position: absolute;
  bottom: -90px;
`;
