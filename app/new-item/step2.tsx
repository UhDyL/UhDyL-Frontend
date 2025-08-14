import { Container, JustBox } from './newItem.styled';

import Button from '@/components/common/button/Button';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function NewItemStepTwoScreen() {
  const router = useRouter();

  return (
    <Container>
      <Text>Second level Screen</Text>

      <JustBox>
        <Button text='다음' onClick={() => router.push('/new-item/step3')} />
      </JustBox>
    </Container>
  );
}
