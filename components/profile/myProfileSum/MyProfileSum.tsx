import {
  Column,
  Container,
  EditProfileButtonWrapper,
  MiniBox,
  NameText,
  ProfileImage,
  Row,
  UserTypeText,
  WhiteText,
} from './myProfileSum.styled';
import { Text, TouchableOpacity } from 'react-native';

import { logout } from '@/services/auth.service';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

type Props = {
  name: string;
  profileImgUrl: string;
};

export default function MyProfileSum({ name, profileImgUrl }: Props) {
  const router = useRouter();
  const userType = useUserStore((state) => state.mode);
  console.log(userType);

  return (
    <Container>
      <Row>
        <ProfileImage
          source={
            profileImgUrl
              ? { uri: profileImgUrl }
              : require('../../../assets/images/null_image.png')
          }
        />
        <Column>
          <MiniBox>
            <NameText>{name}</NameText>
            <UserTypeText userType={userType ?? 'user'}>
              {userType === 'user' ? '구매자' : '판매자'}
            </UserTypeText>
            <TouchableOpacity
              onPress={() => {
                logout();
                useUserStore.getState().logout();
                router.replace('/');
              }}
            >
              <Text>로그아웃</Text>
            </TouchableOpacity>
          </MiniBox>
          <EditProfileButtonWrapper
            onPress={() =>
              router.push({
                pathname: '/editProfile/[id]',
                params: {
                  id: name,
                  name,
                  userType,
                  profileImgUrl,
                },
              })
            }
          >
            <WhiteText>프로필 편집</WhiteText>
          </EditProfileButtonWrapper>
        </Column>
      </Row>
    </Container>
  );
}
