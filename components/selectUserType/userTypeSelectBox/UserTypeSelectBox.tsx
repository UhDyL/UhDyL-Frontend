import { Container, SelectUserTypeBox } from './userTypeSelectBox.styled';

import UserTypeBox from '../userTypeBox/UserTypeBox';

type Props = {
  selected: 'user' | 'farmer';
  setSelected: (option: 'user' | 'farmer') => void;
};

export default function UserTypeSelectBox({ selected, setSelected }: Props) {
  return (
    <Container>
      <SelectUserTypeBox onPress={() => setSelected('user')}>
        <UserTypeBox userType='user' selected={selected === 'user'} />
      </SelectUserTypeBox>
      <SelectUserTypeBox onPress={() => setSelected('farmer')}>
        <UserTypeBox userType='farmer' selected={selected === 'farmer'} />
      </SelectUserTypeBox>
    </Container>
  );
}
