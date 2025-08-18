import { Container, SelectUserTypeBox } from './userTypeSelectBox.styled';

import UserTypeBox from '../userTypeBox/UserTypeBox';

type Props = {
  userType: '구매자' | '판매자';
  setUserType: (userType: '구매자' | '판매자') => void;
};

export default function UserTypeSelectBox({ userType, setUserType }: Props) {
  return (
    <Container>
      <SelectUserTypeBox onPress={() => setUserType('구매자')}>
        <UserTypeBox userType='user' selected={userType === '구매자'} />
      </SelectUserTypeBox>
      <SelectUserTypeBox onPress={() => setUserType('판매자')}>
        <UserTypeBox userType='farmer' selected={userType === '판매자'} />
      </SelectUserTypeBox>
    </Container>
  );
}
