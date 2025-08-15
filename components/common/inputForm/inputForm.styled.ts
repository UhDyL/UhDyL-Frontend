import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

export const StyledInputText = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #d9d9d9;
`;
