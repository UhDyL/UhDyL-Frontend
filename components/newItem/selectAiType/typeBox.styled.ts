import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImageBox = styled(Image)<{ selected: boolean }>`
  border-color: ${({ selected }) => (selected ? '#000000' : 'none')};
  border-width: ${({ selected }) => (selected ? '1px' : 'none')};
  border-radius: 50%;
  padding: 2px;
`;

export const LabelText = styled.Text``;

export const ImageContainer = styled.View`
  position: relative;
`;

export const CheckBox = styled.View`
  width: 20px;
  height: 20px;
  background-color: #30db5b;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 25px;
  right: 2px;
`;

export const Overlay = styled.View<{ dimmed: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  opacity: ${({ dimmed }) => (dimmed ? 0.5 : 0)};
`;
