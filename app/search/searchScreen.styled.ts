import { Dimensions, ScrollView } from 'react-native';

import SearchBar from '@/components/common/searchBar/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding-top: 20px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

export const StyledSearchBar = styled(SearchBar)`
  width: 100%;
`;

export const OptionLayer = styled.View`
  display: flex;
  height: 70px;
  padding: 15px;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubText = styled.Text`
  width: 60%;
`;

export const StyledScrollView = styled(ScrollView)`
  width: 100%;
`;

const { width, height } = Dimensions.get('window');

export const Overlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: ${width}px;
  height: ${height}px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  justify-content: center;
  align-items: center;
`;
