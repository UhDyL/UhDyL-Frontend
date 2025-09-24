import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledImg = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const Label = styled.Text`
  font-weight: 800;
`;
