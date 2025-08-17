import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';

import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

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
        </SafeAreaProvider>
      </ActionSheetProvider>
    </QueryClientProvider>
  );
}
