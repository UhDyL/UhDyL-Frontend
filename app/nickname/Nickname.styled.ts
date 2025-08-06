import { Image, SafeAreaView } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const SubContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
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

export const CameraWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 2px;
  right: 2px;
  background-color: #30db5b;
  border-radius: 50px;
  padding: 6px;
`;

export const TitleText = styled.Text`
  width: 80%;
  font-size: 20px;
  font-weight: 700;
`;

export const PreferTextBox = styled.View`
  width: 80%;
  flex-direction: column;
`;

export const PreferText = styled.Text`
  font-size: 10px;
`;

export const StartButton = styled.TouchableOpacity`
  margin-top: 100px;
  width: 80%;
  padding: 14px 24px;
  border-radius: 10px;
  align-items: center;
  background-color: #30db5b;
`;

export const StartButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 800;
`;
