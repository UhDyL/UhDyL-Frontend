import {
  Container,
  StartButton,
  StartButtonText,
  SubContainer,
} from './Nickname.styled';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import ImageCircleUpload from '@/components/common/imageCircleUpload/ImageCircleUpload';
import NicknameInputForm from '@/components/nickname/nicknameInputForm/NicknameInputForm';
import UserTypeSelectBox from '@/components/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { useEditUserProfileInfo } from '@/hooks/mutation/useEditUserProfileInfo';
import { useUserStore } from '@/store/userStore';

export default function NicknameScreen() {
  const userNickname = useUserStore((state) => state.nickname);
  const userProfileImageUrl = useUserStore((state) => state.profileImageUrl);
  const userMode = useUserStore((state) => state.mode);
  const [nickname, setNickname] = React.useState<string>(userNickname);
  const [imageUrl, setImageUrl] = useState<string>(userProfileImageUrl);
  const [mode, setMode] = useState<'구매자' | '판매자'>(userMode);
  const router = useRouter();
  const { mutate } = useEditUserProfileInfo();

  const handleStart = () => {
    mutate(
      {
        profileImageUrl: imageUrl,
        mode,
        nickname,
      },
      {
        onSuccess: () => {
          if (mode === '구매자') {
            router.replace('/user');
          } else {
            router.replace('/farmer');
          }
        },
      }
    );
  };

  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SubContainer>
        <ImageCircleUpload image={{ uri: imageUrl }} setImage={setImageUrl} />
        <NicknameInputForm nickname={nickname} setNickname={setNickname} />
        <UserTypeSelectBox userType={mode} setUserType={setMode} />
      </SubContainer>

      <StartButton onPress={handleStart}>
        <StartButtonText>시작하기</StartButtonText>
      </StartButton>
    </Container>
  );
}
