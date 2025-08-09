import * as ImagePicker from 'expo-image-picker';

import { Container, TextBox } from './additionalPhotoBox.styled';

import { Alert } from 'react-native';
import { Camera } from 'lucide-react-native';

type Props = {
  imagesUrl: string[];
  setImagesUrl: React.Dispatch<React.SetStateAction<string[]>>;
  maxCount?: number;
};

export default function AdditionalPhotoBox({
  imagesUrl,
  setImagesUrl,
  maxCount,
}: Props) {
  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '갤러리 접근 권한이 필요합니다.');
      return;
    }

    const remain = maxCount
      ? Math.max(0, maxCount - imagesUrl.length)
      : undefined;
    if (maxCount && remain === 0) {
      Alert.alert('알림', `사진은 최대 ${maxCount}장까지 첨부할 수 있어요.`);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      let uris = result.assets.map((a) => a.uri);

      if (maxCount && remain !== undefined) {
        uris = uris.slice(0, remain);
      }

      setImagesUrl((prev) => {
        const set = new Set(prev);
        uris.forEach((u) => set.add(u));
        return Array.from(set);
      });
    }
  };

  return (
    <Container onPress={pickImages}>
      <Camera color='#D9D9D9' />
      <TextBox>사진 추가</TextBox>
    </Container>
  );
}
