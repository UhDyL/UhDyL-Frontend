import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const StyledInputTextForm = styled(TextInput)`
  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: 80%;
  height: 120px;
  text-align: left;
  text-align-vertical: top;
`;
