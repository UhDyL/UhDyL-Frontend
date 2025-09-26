import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  min-height: 200px;
  border-radius: 15px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ErrorIcon = styled(Image)``;

export const StyledText = styled.Text`
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 6px;
`;

export const RetryButton = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #30db5b;
  border-radius: 8px;
`;

export const RetryButtonText = styled.Text`
  font-weight: 800;
  font-size: 16px;
  color: white;
`;
