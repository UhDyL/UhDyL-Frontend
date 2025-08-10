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

type Props = {
  name: string;
  userType: 'consumer' | 'seller';
  profileImgUrl: string;
  userId: string;
};

export default function MyProfileSum({
  name,
  userType,
  profileImgUrl,
  userId,
}: Props) {
  const router = useRouter();

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
            <UserTypeText userType={userType}>
              {userType === 'consumer' ? '구매자' : '판매자'}
            </UserTypeText>
          </MiniBox>
          <EditProfileButtonWrapper
            onPress={() => router.push(`/editProfile/${userId}`)}
          >
            <WhiteText>프로필 편집</WhiteText>
          </EditProfileButtonWrapper>
        </Column>
      </Row>
    </Container>
  );
}
