import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const StyledScrollView = styled.ScrollView`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  background-color: #fff;
`;

export const LineBar = styled.View`
  height: 1px;
  width: 80%;
  background-color: #d9d9d9;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  background-color: #30db5b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 800;
`;
