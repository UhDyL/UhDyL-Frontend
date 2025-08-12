import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CircleTextWraaper = styled.View<{ isSelected: boolean }>`
  border: 1px solid #d9d9d9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#30DB5B' : '#fff')};
`;

export const Divider = styled.View`
  width: 15px;
  height: 1px;
  border-style: dotted;
  border-width: 1px;
  border-color: #999;
`;

export const StyledText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? '#fff' : '')};
  font-weight: 700;
`;
