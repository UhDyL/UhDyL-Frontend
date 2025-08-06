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
  border-radius: 10px;
  padding: 15px;
`;

export const SearchIcon = styled(Search)`
  color: #30db5b;
`;

export const InputComponent = styled.TextInput``;
