import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  color?: string;
  size: 'normal' | 'big';
}>`
  background-color: ${({ color }) => (color ? color : '#d9d9d9')};
  width: 160px;
  height: ${({ size }) => (size === 'normal' ? '80px' : '160px')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-shadow: ${({ size }) =>
    size === 'big' ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
  gap: 10px;
`;

export const TitleText = styled.Text<{
  size: 'normal' | 'big';
}>`
  color: ${({ size }) => (size === 'normal' ? '#000' : '#fff')};
  font-size: 18px;
  font-weight: 800;
`;

export const SubText = styled.Text<{
  size: 'normal' | 'big';
}>`
  color: ${({ size }) => (size === 'normal' ? '#000' : '#fff')};
`;
