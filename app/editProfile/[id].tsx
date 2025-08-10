import { Container } from './editProfile.styled';
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function EditProfileScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <Text>Edit Profile 페이지</Text>
      <Text>userId : {id}</Text>
    </Container>
  );
}
