import { ArrowBox, Container, TitleText } from './backAndTitle.styled';

import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

type Props = {
  title: string;
};

export default function BackAndTitle({ title }: Props) {
  const router = useRouter();

  return (
    <Container>
      <ArrowBox onPress={() => router.back()}>
        <ArrowLeft />
      </ArrowBox>
      <TitleText>{title}</TitleText>
    </Container>
  );
}
