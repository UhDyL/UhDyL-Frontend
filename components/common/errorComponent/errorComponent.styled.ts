import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  margin: 12px 0;
  border-radius: 12px;

  background-color: #ffecec;
  border: 1px solid #ff6b6b;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: #b00020;
  font-size: 14px;
  text-align: center;
  margin-bottom: 6px;
`;

export const RetryButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff6b6b;
  border-radius: 8px;
`;
