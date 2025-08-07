import { Dimensions, FlatList, Image, ImageBackground } from 'react-native';

import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 50%;
`;

export const ImageWrapper = styled(FlatList)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const BottomWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  bottom: 0;
`;

export const PriceWrapper = styled(ImageBackground)`
  width: 110px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-bottom: 10px;
`;

export const SlideImage = styled(Image)`
  width: ${width}px;
  height: 100%;
  object-fit: cover;
`;

export const PriceLabel = styled.Text`
  color: #bd2c0f;
  font-weight: 700;
`;

export const PriceText = styled.Text`
  font-weight: 600;
`;

export const Page = styled.Text`
  background-color: #00000080;
  width: 50px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  text-align: center;
  font-weight: 700;
`;
