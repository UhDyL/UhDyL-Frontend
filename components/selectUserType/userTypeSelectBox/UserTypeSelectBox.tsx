import { Container, SelectUserTypeBox } from './userTypeSelectBox.styled';

import UserTypeBox from '../userTypeBox/UserTypeBox';
import { useUserStore } from '@/store/userStore';

export default function UserTypeSelectBox() {
  const userType = useUserStore((state) => state.userType);
  const setUserType = useUserStore((state) => state.setUserType);

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
