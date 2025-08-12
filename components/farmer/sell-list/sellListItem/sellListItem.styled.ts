import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`;

export const ImageBox = styled(Image)<{ isCompleted: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`;

export const ItemNameText = styled.Text`
  font-weight: 600;
`;

export const PriceText = styled.Text`
  font-size: 15px;
  font-weight: 800;
`;

export const FarmerNameText = styled.Text`
  font-weight: 500;
`;
