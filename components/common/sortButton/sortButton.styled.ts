import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const StyledTouchable = styled(TouchableOpacity)`
  position: relative;
`;

export const Container = styled.View`
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 20px;
`;

export const StyledText = styled.Text`
  color: #000;
  font-weight: 700;
`;
