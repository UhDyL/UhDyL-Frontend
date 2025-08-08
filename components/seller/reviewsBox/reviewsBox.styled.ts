import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleBar = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #d9d9d9;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 800;
`;
