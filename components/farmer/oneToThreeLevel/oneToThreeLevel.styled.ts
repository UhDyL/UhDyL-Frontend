import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CircleTextWraaper = styled.TouchableOpacity<{
  isSelected: boolean;
}>`
  border: 1px solid #d9d9d9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#30DB5B' : '#fff')};
`;

export const StyledText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? '#fff' : '')};
  font-weight: 700;
`;

export const Dot = styled.View`
  width: 2px;
  height: 2px;
  border-radius: 0.5px;
  background-color: #999;
`;

export const DotBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0 3px;
`;
