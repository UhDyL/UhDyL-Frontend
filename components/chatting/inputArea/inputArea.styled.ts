import { Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8%;
  margin-bottom: 40px;
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px 0 15px;
`;

export const PreviewBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const XWrapper = styled(TouchableOpacity)`
  margin-left: 5px;
`;

export const ImagePreview = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const CameraIconWrapper = styled(TouchableOpacity)``;

export const ImageBtn = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const SendIconWrapper = styled(TouchableOpacity)<{
  color: 'active' | 'inactive';
}>`
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ color }) =>
    color === 'active' ? '#30DB5B' : '#d9d9d9'};
`;

export const StyledTextInput = styled.TextInput`
  width: 70%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
