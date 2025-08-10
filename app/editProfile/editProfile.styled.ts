import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
`;

export const ImageBox = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  overflow: hidden;
`;

export const CameraBox = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50%;
  background-color: #30db5b;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
