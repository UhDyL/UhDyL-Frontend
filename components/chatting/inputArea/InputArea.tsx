import * as ImagePicker from 'expo-image-picker';

import { Camera, Send, X } from 'lucide-react-native';
import {
  CameraIconWrapper,
  Container,
  ImagePreview,
  PreviewBox,
  Row,
  SendIconWrapper,
  StyledTextInput,
  XWrapper,
} from './inputArea.styled';

import { Alert } from 'react-native';

type Props = {
  message: string;
  setMessage: (message: string) => void;
  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;
  onSendPress: () => void;
};

export default function InputArea({
  imageUrl,
  message,
  onSendPress,
  setImageUrl,
  setMessage,
}: Props) {
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '갤러리 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUrl(uri);
      console.log('선택한 이미지:', uri);
      // TODO: 부모에 전달하거나 업로드 로직 연결
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '카메라 권한이 필요합니다.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUrl(uri);
      console.log('촬영한 이미지:', uri);
    }
  };

  return (
    <Container>
      {imageUrl && (
        <PreviewBox>
          <ImagePreview source={{ uri: imageUrl }} />
          <XWrapper onPress={() => setImageUrl('')}>
            <X size={20} color='#F00' />
          </XWrapper>
        </PreviewBox>
      )}
      <Row>
        <CameraIconWrapper onPress={pickImage}>
          <Camera fill='#d9d9d9' color='#000' />
        </CameraIconWrapper>
        <StyledTextInput
          placeholder='메세지를 입력해 보세요.'
          onChangeText={setMessage}
          value={message}
        />
        <SendIconWrapper onPress={onSendPress}>
          <Send fill='#fff' color='#000' />
        </SendIconWrapper>
      </Row>
    </Container>
  );
}
