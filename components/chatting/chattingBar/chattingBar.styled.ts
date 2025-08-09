import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin: 10px;
`;

export const ImageBox = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: black;
`;

export const InfoBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

export const TopArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemNameText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const PriceText = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;

export const LastChatText = styled.Text`
  font-weight: 500;
`;
