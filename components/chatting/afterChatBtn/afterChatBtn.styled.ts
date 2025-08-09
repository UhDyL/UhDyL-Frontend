import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)<{
  userType: 'user' | 'seller';
}>`
  background-color: ${({ userType }) =>
    userType === 'user' ? '#30DB5B' : '#FFB340'};
  width: 30%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const TextWrapper = styled.Text`
  color: #fff;
  font-weight: 800;
`;
