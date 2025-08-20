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

import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';

type Props = {
  name: string;
  profileImgUrl: string;
};

export default function MyProfileSum({ name, profileImgUrl }: Props) {
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
