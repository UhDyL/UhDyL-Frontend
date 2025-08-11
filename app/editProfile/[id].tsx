import { useLocalSearchParams, useRouter } from 'expo-router';

import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import Button from '@/components/common/button/Button';
import { Container } from './editProfile.styled';
import ImageCircleUpload from '@/components/common/imageCircleUpload/ImageCircleUpload';
import { ImageSourcePropType } from 'react-native';
import NicknameInputForm from '@/components/nickname/nicknameInputForm/NicknameInputForm';
import UserTypeSelectBox from '@/components/selectUserType/userTypeSelectBox/UserTypeSelectBox';
import { useState } from 'react';

export default function EditProfileScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    id: string;
    name: string;
    profileImgUrl: string;
    userId: string;
  }>();
  const [image, setImage] = useState<ImageSourcePropType | null>(
    params.profileImgUrl ? { uri: params.profileImgUrl } : null
  );
  const [nickname, setNickname] = useState<string>(params.name);

  return (
    <Container>
      <BackAndTitle title='프로필 편집' />
      <ImageCircleUpload image={image} setImage={setImage} />
      <NicknameInputForm nickname={nickname} setNickname={setNickname} />
      <UserTypeSelectBox />
      <Button text='시작하기' onClick={() => router.push('/user')} />
    </Container>
  );
}
