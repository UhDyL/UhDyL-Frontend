import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { Container } from './seller.styled';

export default function SellerScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <Text>{id}</Text>
    </Container>
  );
}
