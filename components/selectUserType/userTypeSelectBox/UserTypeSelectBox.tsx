import { Container, SelectUserTypeBox } from './userTypeSelectBox.styled';

import UserTypeBox from '../userTypeBox/UserTypeBox';

type Props = {
  userType: 'user' | 'farmer';
  setUserType: (userType: 'user' | 'farmer') => void;
};

export default function UserTypeSelectBox({ userType, setUserType }: Props) {
  return (
    <Container>
      <SelectUserTypeBox onPress={() => setUserType('user')}>
        <UserTypeBox userType='user' selected={userType === 'user'} />
      </SelectUserTypeBox>
      <SelectUserTypeBox onPress={() => setUserType('farmer')}>
        <UserTypeBox userType='farmer' selected={userType === 'farmer'} />
      </SelectUserTypeBox>
    </Container>
  );
}
