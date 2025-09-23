import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom', 'left', 'right'],
})`
  width: 100%;
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const StyledScrollView = styled.ScrollView`
  flex: 1;
`;

export const FeaturesBoxWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
