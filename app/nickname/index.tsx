import * as ImagePicker from 'expo-image-picker';

import {
  CameraWrapper,
  Container,
  ImageBox,
  PreferText,
  PreferTextBox,
  StartButton,
  StartButtonText,
  StyledImage,
  SubContainer,
  TitleText,
} from './Nickname.styled';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { Camera } from 'lucide-react-native';
import { ImageSourcePropType } from 'react-native';
import NicknameInput from '@/components/nickname/nicknameInput/NicknameInput';

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
      router.push('/consumer');
    } else {
      router.push('/farmer');
    }
  };

  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SubContainer>
        <ImageBox>
          <StyledImage
            source={
              image ? image : require('../../assets/images/null_image.png')
            }
          />
          <CameraWrapper onPress={pickImage}>
            <Camera size={24} fill='white' color='#30DB5B' />
          </CameraWrapper>
        </ImageBox>
        <TitleText>닉네임을 입력해주세요</TitleText>
        <NicknameInput nickname={nickname} setNickname={setNickname} />
        <PreferTextBox>
          <PreferText>
            • 다른 사람이 사용 중인 닉네임은 사용할 수 없어요.
          </PreferText>
          <PreferText>• 특수기호는 사용할 수 없어요.</PreferText>
          <PreferText>• 10글자 수 이내로 입력해주세요.</PreferText>
        </PreferTextBox>
      </SubContainer>

      <StartButton onPress={handleStart}>
        <StartButtonText>시작하기</StartButtonText>
      </StartButton>
    </Container>
  );
}
