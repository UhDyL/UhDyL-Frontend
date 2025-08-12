import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ selected: boolean }>`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-color: ${({ selected }) => (selected ? '#30DB5B' : '#d9d9d9')};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LabelText = styled.Text``;

export const BoldText = styled.Text`
  font-size: 16px;
  font-weight: 800;
`;
