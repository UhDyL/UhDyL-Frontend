import { Redirect } from 'expo-router';
import { useUserStore } from '@/store/userStore';

export default function Index() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const userType = useUserStore((state) => state.mode);

  if (!isLoggedIn) {
    return <Redirect href='/sign-in' />;
  } else {
    if (userType === '판매자') {
      return <Redirect href='/farmer' />;
    } else {
      return <Redirect href='/user' />;
    }
  }
}
