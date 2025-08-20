import { useLocalSearchParams, useRouter } from 'expo-router';

import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import Button from '@/components/common/button/Button';
import ImageCircleUpload from '@/components/common/imageCircleUpload/ImageCircleUpload';
import NicknameInputForm from '@/components/nickname/nicknameInputForm/NicknameInputForm';
import UserTypeSelectBox from '@/components/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { useState } from 'react';
import { Container } from './editProfile.styled';

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

  return (
    <Container>
      <BackAndTitle title='프로필 편집' />
      <ImageCircleUpload image={image} setImage={setImage} />
      <NicknameInputForm nickname={nickname} setNickname={setNickname} />
      <UserTypeSelectBox userType={userType} setUserType={setUserType} />
      <Button text='시작하기' onClick={() => router.push('/user')} />
    </Container>
  );
}
