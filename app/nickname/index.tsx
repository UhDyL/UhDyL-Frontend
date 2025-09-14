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
import UserTypeSelectBox from '@/components/common/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { useEditUserProfileInfo } from '@/hooks/mutation/useEditUserProfileInfo';
import { useUserStore } from '@/store/userStore';

export default function NicknameScreen() {
  const userNickname = useUserStore((state) => state.nickname);
  const userProfileImageUrl = useUserStore((state) => state.profileImageUrl);
  const userMode = useUserStore((state) => state.mode);
  const setUserNickname = useUserStore((state) => state.setNickname);
  const setUserProfileImageUrl = useUserStore(
    (state) => state.setProfileImageUrl
  );
  const setUserMode = useUserStore((state) => state.setMode);
  const [nickname, setNickname] = React.useState<string>(userNickname);
  const [imageUrl, setImageUrl] = useState<string>(userProfileImageUrl);
  const [mode, setMode] = useState<'user' | 'farmer'>(userMode);
  const router = useRouter();
  const { mutate } = useEditUserProfileInfo();

  const handleStart = () => {
    const payload: {
      mode: 'user' | 'farmer';
      profileImageUrl?: string;
      nickname?: string;
    } = {
      mode,
    };

    if (nickname !== userNickname) {
      payload.nickname = nickname;
    }
    if (imageUrl !== userProfileImageUrl) {
      payload.profileImageUrl = imageUrl;
    }

    mutate(payload, {
      onSuccess: () => {
        setUserNickname(nickname);
        setUserProfileImageUrl(imageUrl);
        setUserMode(mode);

        if (mode === 'user') {
          router.replace('/user');
        } else {
          router.replace('/farmer');
        }
      },
    });
  };

  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SubContainer>
        <ImageCircleUpload image={imageUrl} setImage={setImageUrl} />
        <NicknameInputForm nickname={nickname} setNickname={setNickname} />
        <UserTypeSelectBox userType={mode} setUserType={setMode} />
      </SubContainer>

      <StartButton onPress={handleStart}>
        <StartButtonText>시작하기</StartButtonText>
      </StartButton>
    </Container>
  );
}
