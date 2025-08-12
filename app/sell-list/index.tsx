import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import { Text } from 'react-native';
import { Container } from './sellList.styled';

export default function SellList() {
  return (
    <Container>
      <BackAndTitle title='판매 목록' />
      <Text>HI</Text>
    </Container>
  );
}
