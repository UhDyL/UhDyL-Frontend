import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin: 5px;
`;

export const ImgBox = styled(Image)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
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
  flex: 1;
  font-weight: 900;
  font-size: 16px;
`;

export const InfoBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
`;

export const Price = styled.Text`
  flex: 1;
  font-weight: 800;
  font-size: 18px;
  color: #30db5b;
`;

export const SellerName = styled.Text`
  color: #d9d9d9;
`;

export const ReviewBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const ReviewItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ReviewText = styled.Text`
  color: #d9d9d9;
`;
