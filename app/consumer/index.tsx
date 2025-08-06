import { Container } from './ConsumerMainScreen.styled';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function ConsumerMainScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <Text>hi</Text>
    </Container>
  );
}
