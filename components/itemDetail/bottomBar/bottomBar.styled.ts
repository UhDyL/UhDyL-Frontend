import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #fff;
  padding-bottom: 40px;
  position: absolute;
  bottom: 0;
`;

export const LikeBtn = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: #d9d9d9;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChattingBtn = styled(TouchableOpacity)`
  width: 60%;
  background-color: #30db5b;
  padding: 15px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
