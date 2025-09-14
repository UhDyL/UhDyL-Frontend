import { useLocalSearchParams, useRouter } from 'expo-router';

import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import Button from '@/components/common/button/Button';
import { Container } from './editProfile.styled';
import ImageCircleUpload from '@/components/common/imageCircleUpload/ImageCircleUpload';
import NicknameInputForm from '@/components/nickname/nicknameInputForm/NicknameInputForm';
import UserTypeSelectBox from '@/components/common/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { hydrateUserAgain } from '@/services/auth.service';
import { useEditUserProfileInfo } from '@/hooks/mutation/useEditUserProfileInfo';
import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export default function EditProfileScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    id: string;
    name: string;
    profileImgUrl: string;
    userType: 'user' | 'farmer';
  }>();

  const [image, setImage] = useState<string>(
    params.profileImgUrl ? params.profileImgUrl : ''
  );
  const [nickname, setNickname] = useState<string>(params.name);
  const [userType, setUserType] = useState<'user' | 'farmer'>(params.userType);

  const { mutate } = useEditUserProfileInfo();

  const setUserNickname = useUserStore((state) => state.setNickname);
  const setUserProfileImageUrl = useUserStore(
    (state) => state.setProfileImageUrl
  );
  const setUserMode = useUserStore((state) => state.setMode);

  const handleStart = () => {
    const payload: {
      mode: 'user' | 'farmer';
      profileImageUrl?: string;
      nickname?: string;
    } = { mode: userType };

    if (nickname !== params.name) {
      payload.nickname = nickname;
    }
    if (image !== params.profileImgUrl) {
      payload.profileImageUrl = image;
    }
    if (userType !== params.userType) {
      payload.mode = userType;
    }

    mutate(payload, {
      onSuccess: () => {
        setUserNickname(nickname);
        setUserProfileImageUrl(image);
        setUserMode(userType);
        hydrateUserAgain();
        if (userType === 'user') {
          router.replace('/user');
        } else {
          router.replace('/farmer');
        }
      },
    });
  };

  return (
    <Container>
      <BackAndTitle title='프로필 편집' />
      <ImageCircleUpload image={image} setImage={setImage} />
      <NicknameInputForm nickname={nickname} setNickname={setNickname} />
      <UserTypeSelectBox userType={userType} setUserType={setUserType} />
      <Button text='시작하기' onClick={handleStart} />
    </Container>
  );
}
