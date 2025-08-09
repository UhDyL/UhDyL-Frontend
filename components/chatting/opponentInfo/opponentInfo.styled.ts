import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const ImageBox = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

export const StyledName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
