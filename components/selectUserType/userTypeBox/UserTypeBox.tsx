import {
  Col,
  Container,
  DescriptionText,
  ImageBox,
  TitleText,
} from './userTypeBox.styled';

type Props = {
  userType: 'user' | 'farmer';
  selected: boolean;
};

export default function UserTypeBox({ userType, selected }: Props) {
  return (
    <Container
      selected={selected}
      typeColor={userType === 'user' ? '#30DB5B' : '#FFB340'}
    >
      <Col>
        <TitleText selected={selected}>
          {userType === 'user' ? '구매자' : '판매자'}로 이용하기
        </TitleText>
        <DescriptionText selected={selected}>
          못난이 농산물을 {userType === 'user' ? '구매' : '판매'}할래요
        </DescriptionText>
      </Col>
      <ImageBox
        source={
          userType === 'user'
            ? require('../../../assets/images/userType/user_img.png')
            : require('../../../assets/images/userType/farmer_img.png')
        }
      />
    </Container>
  );
}
