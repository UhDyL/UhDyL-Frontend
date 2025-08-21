import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledScrollView = styled(ScrollView)`
  width: 100%;
  padding-bottom: 100px;
`;

export const MessageContainer = styled.View`
  width: 100%;
`;
