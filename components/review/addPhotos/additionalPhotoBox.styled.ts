import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 1px dotted #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextBox = styled.Text`
  color: #d9d9d9;
`;
