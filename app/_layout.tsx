import { SplashScreen, Stack } from 'expo-router';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    TitleFont: require('../assets/fonts/Paperlogy-7Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
