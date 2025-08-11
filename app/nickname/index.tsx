import {
  Container,
  StartButton,
  StartButtonText,
  SubContainer,
} from './Nickname.styled';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import ImageCircleUpload from '@/components/common/imageCircleUpload/ImageCircleUpload';
import { ImageSourcePropType } from 'react-native';
import NicknameInputForm from '@/components/nickname/nicknameInputForm/NicknameInputForm';
import UserTypeSelectBox from '@/components/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { useUserStore } from '@/store/userStore';

export default function NicknameScreen() {
  const [nickname, setNickname] = React.useState<string>('');
  const [image, setImage] = useState<ImageSourcePropType | null>(null);
  const userType = useUserStore((state) => state.userType);
  const router = useRouter();

  const handleStart = () => {
    if (userType === 'user') {
      router.replace('/user');
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
        <UserTypeSelectBox />
      </SubContainer>

      <StartButton onPress={handleStart}>
        <StartButtonText>시작하기</StartButtonText>
      </StartButton>
    </Container>
  );
}
