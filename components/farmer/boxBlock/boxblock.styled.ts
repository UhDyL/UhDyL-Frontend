import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  size: 'normal' | 'big' | 'long';
}>`
  background-color: #f5f5f5;
  width: ${({ size }) => (size === 'long' ? '340px' : '160px')};
  height: ${({ size }) =>
    size === 'normal' || size === 'long' ? '120px' : '170px'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  gap: 10px;
`;

export const TextBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const TextWrapper = styled.View``;

export const TitleText = styled.Text<{
  size: 'normal' | 'big' | 'long';
}>`
  font-family: 'TitleFont';
  color: #000;
  font-size: 18px;
  font-weight: 800;
`;

export const SubText = styled.Text<{
  size: 'normal' | 'big' | 'long';
}>`
  color: #000;
  font-size: 12px;
  font-weight: 700;
`;

export const ImageBox = styled(Image)<{
  size: 'normal' | 'big' | 'long';
}>`
  position: absolute;
  bottom: 0px;
  right: 0px;
  object-fit: contain;
  width: ${({ size }) => (size === 'long' ? '180px' : '75px')};
`;
