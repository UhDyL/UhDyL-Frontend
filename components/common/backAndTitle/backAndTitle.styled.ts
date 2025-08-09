import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 800;
`;

export const ArrowBox = styled(TouchableOpacity)`
  position: absolute;
  left: 20px;
`;
