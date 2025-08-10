import * as ImagePicker from 'expo-image-picker';

import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Container,
  StartButton,
  StartButtonText,
  SubContainer,
} from './Nickname.styled';

import ImageCircleUpload from '@/components/common/imageCircleUpload/ImageCircleUpload';
import NicknameInputForm from '@/components/nickname/nicknameInputForm/NicknameInputForm';
import { ImageSourcePropType } from 'react-native';

export default function NicknameScreen() {
  const [nickname, setNickname] = React.useState<string>('');
  const [image, setImage] = useState<ImageSourcePropType | null>(null);
  const [userType, setUserType] = useState<'farmer' | 'consumer'>('consumer');
  const router = useRouter();

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
      setImage({ uri: result.assets[0].uri });
    }
  };

  const handleStart = () => {
    if (userType === 'consumer') {
      router.replace('/consumer');
    } else {
      router.replace('/farmer');
    }
  };

  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SubContainer>
        <ImageCircleUpload image={image} setImage={setImage} />
        <NicknameInputForm nickname={nickname} setNickname={setNickname} />
      </SubContainer>

      <StartButton onPress={handleStart}>
        <StartButtonText>시작하기</StartButtonText>
      </StartButton>
    </Container>
  );
}
