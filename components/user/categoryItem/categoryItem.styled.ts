import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledImg = styled(Image)`
  width: 80px;
  height: 80px;
`;

export const Label = styled.Text`
  font-weight: 800;
`;
