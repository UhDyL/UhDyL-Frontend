import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #30db5b;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 180px;
`;

export const IconContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const KakaoLoginImg = styled(Image)``;

export const GoogleLoginImg = styled(Image)``;

export const TitleImg = styled.View`
  width: 80%;
`;
