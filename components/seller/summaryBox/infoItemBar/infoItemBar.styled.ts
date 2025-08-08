import styled from 'styled-components/native';

export const Container = styled.View`
  width: 200px;
  margin-right: 10px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
`;

export const LeftSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-weight: 700;
`;

export const ValueBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ValueText = styled.Text`
  font-weight: 700;
  padding-right: 10px;
`;
