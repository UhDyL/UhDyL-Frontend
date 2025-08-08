import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
`;

export const InfoWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentText = styled.Text`
  padding-top: 10px;
`;

export const ItemImage = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 15px;
`;

export const TextArea = styled.View`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-weight: 800;
`;

export const Rating = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DateWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #808080;
`;

export const RatingAndBuyerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const BuyerBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

export const BuyerText = styled.Text`
  font-weight: 500;
  color: #808080;
`;
