import Button from '../common/button/Button';
import { Container } from './twoButtonTopBar.styled';
import { useRouter } from 'expo-router';

export default function TwoButtonTopBar() {
  const router = useRouter();

  return (
    <Container>
      <Button
        size='half'
        text='AI 재작성하기'
        onClick={() => router.push('/new-item/loading')}
      />
      <Button
        size='half'
        text='홈으로 이동'
        onClick={() => router.push('/farmer')}
        color='#FFB340'
      />
    </Container>
  );
}
