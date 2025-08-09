import { Camera } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const Row = styled.View`
  width: 100%;
  height: 25px;
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const CameraIconWrapper = styled(Camera)``;

export const SendIconWrapper = styled(TouchableOpacity)`
  padding: 7px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

export const StyledTextInput = styled.TextInput`
  width: 70%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
