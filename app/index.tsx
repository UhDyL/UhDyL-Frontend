import { useUserStore } from '@/store/userStore';
import { Redirect } from 'expo-router';

export default function Index() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const userType = useUserStore((state) => state.mode);
  console.log(useUserStore.getState());

  if (!isLoggedIn) {
    return <Redirect href='/sign-in' />;
  } else {
    if (userType === 'farmer') {
      return <Redirect href='/farmer' />;
    } else {
      return <Redirect href='/user' />;
    }
  }
}
