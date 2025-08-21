import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  margin: 12px 0;
  border-radius: 12px;

  background-color: #f5f7fa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: #555;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;

export const Spinner = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#4a90e2',
})``;
