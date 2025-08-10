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
import UserTypeSelectBox from '@/components/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { ImageSourcePropType } from 'react-native';

export default function NicknameScreen() {
  const [nickname, setNickname] = React.useState<string>('');
  const [image, setImage] = useState<ImageSourcePropType | null>(null);
  const [userType, setUserType] = useState<'user' | 'farmer'>('user');
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
        <UserTypeSelectBox selected={userType} setSelected={setUserType} />
      </SubContainer>

      <StartButton onPress={handleStart}>
        <StartButtonText>시작하기</StartButtonText>
      </StartButton>
    </Container>
  );
}
