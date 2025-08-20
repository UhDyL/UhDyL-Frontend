import * as ImagePicker from 'expo-image-picker';

import {
  CameraBox,
  Container,
  ImageBox,
  StyledImage,
} from './imageCircleUpload.styled';

import { Camera } from 'lucide-react-native';

type Props = {
  image: string;
  setImage: (image: string) => void;
};

export default function ImageCircleUpload({ image, setImage }: Props) {
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('사진 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <ImageBox>
        <StyledImage
          source={
            image
              ? { uri: image }
              : require('../../../assets/images/null_image.png')
          }
        />
        <CameraBox onPress={pickImage}>
          <Camera color='#30db5b' fill='#fff' />
        </CameraBox>
      </ImageBox>
    </Container>
  );
}
