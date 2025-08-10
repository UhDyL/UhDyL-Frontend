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

type Props = {
  name: string;
  userType: 'consumer' | 'seller';
  profileImgUrl: string;
};

export default function MyProfileSum({ name, userType, profileImgUrl }: Props) {
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
          <EditProfileButtonWrapper>
            <WhiteText>프로필 편집</WhiteText>
          </EditProfileButtonWrapper>
        </Column>
      </Row>
    </Container>
  );
}
