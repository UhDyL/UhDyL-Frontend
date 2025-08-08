import { Dot, Star } from 'lucide-react-native';
import {
  Container,
  LabelText,
  LeftSection,
  ValueBox,
  ValueText,
} from './infoItemBar.styled';

type Props = {
  label: string;
  value: string;
};

export default function InfoItemBar({ label, value }: Props) {
  return (
    <Container>
      <LeftSection>
        <Dot color='#30DB5B' />
        <LabelText>{label}</LabelText>
      </LeftSection>
      {label === '평균 별점' ? (
        <ValueBox>
          <Star size={15} fill='#30DB5B' color='#30DB5B' />
          <ValueText>{value}</ValueText>
        </ValueBox>
      ) : (
        <ValueText>{value}</ValueText>
      )}
    </Container>
  );
}
