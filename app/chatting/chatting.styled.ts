import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  margin: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
`;

export const TitleText = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.View`
  width: 150px;
  height: 40px;
  background-color: #30db5b;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
`;
