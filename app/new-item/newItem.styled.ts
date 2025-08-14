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

export const PictureTextBox = styled.View`
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

export const SubText = styled.Text``;
