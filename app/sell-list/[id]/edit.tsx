import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { Container } from './editItem.styled';

export default function EditItem() {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <Text>this is Edit page</Text>
      <Text>{id}</Text>
    </Container>
  );
}
