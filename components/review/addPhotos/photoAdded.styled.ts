import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100px;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageContainer = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const XWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  background-color: #30db5b;
  border-radius: 50%;
`;
