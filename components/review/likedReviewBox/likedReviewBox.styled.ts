import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImageBox = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const ItemNameText = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

export const PriceText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

export const SellerNameText = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

export const LikedWrapper = styled.TouchableOpacity<{ isLiked: boolean }>`
  background-color: ${({ isLiked }) => (isLiked ? '#30DB5B' : '#d9d9d9')};
  padding: 8px;
  border-radius: 50%;
`;
