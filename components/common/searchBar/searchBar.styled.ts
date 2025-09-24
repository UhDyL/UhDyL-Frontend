import { Search } from 'lucide-react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBar = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #30db5b;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

export const SearchIcon = styled(Search)`
  color: #30db5b;
`;

export const InputComponent = styled.TextInput`
  font-weight: 800;
`;
