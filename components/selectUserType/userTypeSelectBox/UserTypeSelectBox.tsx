import { Container, SelectUserTypeBox } from './userTypeSelectBox.styled';

import { useGetMyFieldLocation } from '@/hooks/mutation/useGetMyFieldLocation';
import { useRouter } from 'expo-router';
import UserTypeBox from '../userTypeBox/UserTypeBox';

type Props = {
  userType: 'user' | 'farmer';
  setUserType: (userType: 'user' | 'farmer') => void;
};

export default function UserTypeSelectBox({ userType, setUserType }: Props) {
  const { data, mutate, isSuccess, isError, error } = useGetMyFieldLocation();
  const router = useRouter();
  const handleFarmerSelected = () => {
    mutate(undefined, {
      onSuccess: () => {
        setUserType('farmer');
      },
      onError: (err: any) => {
        if (err?.response?.data?.code === 'U003') {
          router.push('/addFarmLocation');
        } else {
          setUserType('farmer');
        }
      },
    });
  };

  return (
    <Container>
      <SelectUserTypeBox onPress={() => setUserType('user')}>
        <UserTypeBox userType='user' selected={userType === 'user'} />
      </SelectUserTypeBox>
      <SelectUserTypeBox onPress={() => handleFarmerSelected()}>
        <UserTypeBox userType='farmer' selected={userType === 'farmer'} />
      </SelectUserTypeBox>
    </Container>
  );
}
