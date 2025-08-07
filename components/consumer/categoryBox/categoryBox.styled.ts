import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const CategoryFirstFloor = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CategorySecondFloor = styled.View`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
