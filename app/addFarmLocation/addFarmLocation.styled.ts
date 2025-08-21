import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const TopBox = styled.View`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TopText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #30db5b;
`;

export const TitleText = styled.Text`
  width: 60%;
  text-align: center;
  flex-wrap: wrap;
  font-size: 24px;
  font-weight: 800;
`;

export const MapImage = styled(Image)``;

export const Description = styled.Text`
  margin-top: 20px;
  text-align: center;
  flex-wrap: wrap;
  font-size: 14px;
`;
