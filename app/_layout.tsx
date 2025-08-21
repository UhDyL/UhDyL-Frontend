import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';

import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function Layout() {
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    TitleFont: require('../assets/fonts/Paperlogy-7Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <ActionSheetProvider>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          <Toast />
        </SafeAreaProvider>
      </ActionSheetProvider>
    </QueryClientProvider>
  );
}
