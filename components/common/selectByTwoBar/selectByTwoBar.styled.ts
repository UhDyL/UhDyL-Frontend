import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OptionBox = styled.TouchableOpacity<{ isSelected: boolean }>`
  width: 100%;
  flex: 1;
  border-bottom-color: ${({ isSelected }) =>
    isSelected ? '#30db5b' : '#D9D9D9'};
  border-bottom-width: 2px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
`;
