import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  padding-top: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  z-index: 3;
  background-color: #fff;
`;
