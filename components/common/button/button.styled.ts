import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  size: 'full' | 'half';
  color: string;
}>`
  width: ${({ size }) => (size === 'full' ? '80%' : '48%')};
  height: 60px;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 800;
`;
