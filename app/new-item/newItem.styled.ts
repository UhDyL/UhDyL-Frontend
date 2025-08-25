import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom', 'left', 'right'],
})`
  width: 100%;
  flex: 1;
  padding-top: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const LoadingView = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const KeyBoardSafeArea = styled(TouchableWithoutFeedback)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const ResultContainer = styled(SafeAreaView).attrs({
  edges: ['right', 'left', 'bottom'],
})`
  width: 100%;
  padding-top: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: #fff;
`;
