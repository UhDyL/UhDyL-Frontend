import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['left', 'right', 'bottom'],
})`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const StyledScrollView = styled.ScrollView`
  flex: 1;
`;

export const GoFarmerBtn = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  position: absolute;
  bottom: 50px;
`;
