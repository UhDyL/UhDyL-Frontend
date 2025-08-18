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

import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

type Props = {
  name: string;
  profileImgUrl: string;
  userId: string;
};

export default function MyProfileSum({ name, profileImgUrl, userId }: Props) {
  const router = useRouter();
  const userType = useUserStore((state) => state.role);

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
          </MiniBox>
          <EditProfileButtonWrapper
            onPress={() =>
              router.push({
                pathname: '/editProfile/[id]',
                params: {
                  id: userId,
                  name,
                  userType,
                  profileImgUrl,
                  userId,
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
