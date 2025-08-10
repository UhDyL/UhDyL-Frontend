import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 130px;
  border-radius: 15px;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
`;

export const ImageBox = styled(Image)`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;
