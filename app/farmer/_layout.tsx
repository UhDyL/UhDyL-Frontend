import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#30DB5B',
          fontSize: 22,
          fontWeight: 'bold',
          fontFamily: 'TitleFont',
        },
      }}
    />
  );
}
