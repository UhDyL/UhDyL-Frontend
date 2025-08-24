import * as SecureStore from 'expo-secure-store';

import { hydrateUserAgain } from '@/services/auth.service';
import { useUserStore } from '@/store/userStore';
import { Redirect } from 'expo-router';

export default function Index() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const userType = useUserStore((state) => state.mode);
  if (isLoggedIn) {
    hydrateUserAgain();
  }
  console.log(useUserStore.getState());
  console.log(useUserStore.getState().mode);
  console.log(SecureStore.getItem('accessToken'));

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
