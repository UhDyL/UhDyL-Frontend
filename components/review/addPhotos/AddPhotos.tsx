import * as ImagePicker from 'expo-image-picker';

import {
  AddedImagesContainer,
  Container,
  DescriptionText,
  TitleText,
  TopBar,
} from './addPhotos.styled';

import AdditionalPhotoBox from './AdditionalPhotoBox';
import { Alert } from 'react-native';
import { Camera } from 'lucide-react-native';
import PhotoAdded from './PhotoAdded';
import { useState } from 'react';

export default function AddPhotos() {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);

  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '갤러리 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setImagesUrl((prev) => [...prev, ...uris]);
    }
  };

  return (
    <>
      {imagesUrl.length === 0 ? (
        <Container onPress={pickImages}>
          <TopBar>
            <Camera fill='#d9d9d9' color='#fff' size={35} />
            <TitleText>사진 첨부하기</TitleText>
          </TopBar>
          <DescriptionText>못난이의 상태를 알려보세요</DescriptionText>
        </Container>
      ) : (
        <AddedImagesContainer>
          {imagesUrl.map((data, index) => (
            <PhotoAdded
              key={index}
              photoUrl={data}
              onDeletePhoto={() =>
                setImagesUrl((prev) => prev.filter((_, i) => i !== index))
              }
            />
          ))}
          <AdditionalPhotoBox
            imagesUrl={imagesUrl}
            setImagesUrl={setImagesUrl}
          />
        </AddedImagesContainer>
      )}
    </>
  );
}
