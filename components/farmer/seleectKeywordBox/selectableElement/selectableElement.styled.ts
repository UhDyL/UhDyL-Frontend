import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const ElementText = styled.Text<{ selected: boolean }>`
  width: 70px;
  border: 1px solid #d9d9d9;
  text-align: center;
  border-radius: 15px;
  padding: 6px;
  font-weight: 600;
  background-color: ${({ selected }) => (selected ? '#30DB5B' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
`;
