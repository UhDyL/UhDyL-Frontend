import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['right', 'left', 'top'],
})`
  width: 100%;
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryArea = styled.View`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledScrollView = styled.ScrollView`
  width: 100%;
`;
