import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
`;

export const ViewWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MarketProfileBox = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #d9d9d9;
`;

export const ProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const RatingBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
`;

export const RatingValue = styled.Text`
  font-weight: 600;
`;

export const MarketInfoBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const MarketName = styled.Text`
  font-weight: 700;
`;

export const GoShopBtn = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #d9d9d9;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const InfoWrapper = styled.View`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const DescriptionText = styled.Text``;
