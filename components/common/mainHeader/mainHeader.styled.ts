import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['left', 'right', 'bottom'],
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const StyledScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const TextWrapper = styled.View`
  width: 100%;
  background-color: #30db5b;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-family: 'TitleFont';
  margin-top: 30;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const SearchBarWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 120px;
  z-index: 10;
`;

export const CategoryBox = styled.View`
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const CategoryFirstFloor = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CategorySecondFloor = styled.View`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ItemsContainer = styled.View`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  /* gap: 10px; */
`;
