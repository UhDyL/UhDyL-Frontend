import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 20px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

export const KeywordsArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;
