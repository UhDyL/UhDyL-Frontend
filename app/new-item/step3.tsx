import { Container, JustBox } from './newItem.styled';

import Button from '@/components/common/button/Button';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function NewItemStepThreeScreen() {
  const router = useRouter();

  return (
    <Container>
      <Text>Third level Screen</Text>

      <JustBox>
        <Button text='AI 작성하기' onClick={() => router.push('/farmer')} />
      </JustBox>
    </Container>
  );
}
