import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TitleText = styled.Text`
  width: 80%;
  font-size: 20px;
  font-weight: 700;
`;

export const PreferTextBox = styled.View`
  width: 80%;
  flex-direction: column;
`;

export const PreferText = styled.Text`
  font-size: 10px;
`;
