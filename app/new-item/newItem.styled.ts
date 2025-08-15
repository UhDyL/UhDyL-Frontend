import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom', 'left', 'right'],
})`
  width: 100%;
  flex: 1;
  padding-top: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const JustBox = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const LoadingContainer = styled(SafeAreaView).attrs({
  edges: ['left', 'right', 'bottom'],
})`
  width: 100%;
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SubText = styled.Text``;

export const LoadingMainText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #30db5b;
`;

export const LoadingSubText = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

export const LoadingImage = styled.Image``;
