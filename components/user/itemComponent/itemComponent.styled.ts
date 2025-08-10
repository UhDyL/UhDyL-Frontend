import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImgBox = styled(Image)`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

export const DescriptionBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const TitleText = styled.Text`
  font-weight: 800;
`;

export const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Price = styled.Text`
  font-weight: 800;
`;

export const SellerImg = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const SellerName = styled.Text``;
