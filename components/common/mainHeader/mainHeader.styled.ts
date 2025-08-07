import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['left', 'right', 'bottom'],
})`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 2;
`;

export const TextWrapper = styled.View`
  width: 100%;
  background-color: #30db5b;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-family: 'TitleFont';
  margin-top: 30;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const SearchBarWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 120px;
  z-index: 10;
`;
