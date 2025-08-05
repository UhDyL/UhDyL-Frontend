import { Redirect } from 'expo-router';

export default function Index() {
  // 일단 모두 다 sign-in으로 가도록

  // const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //     return <Redirect href='/sign-in'/>
  // }
  // return <Redirect href='/profile'/>
  return <Redirect href='/sign-in' />;
}
