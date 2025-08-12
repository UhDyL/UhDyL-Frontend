import { BoldText, Container, LabelText, Row } from './optionElement.styled';

import { Dot } from 'lucide-react-native';

type Props = {
  label: string;
  value: string;
  selected?: boolean;
  option: 'numOfSells' | 'numOfComplete';
  setOption: (option: 'numOfSells' | 'numOfComplete') => void;
};

export default function OptionElement({
  label,
  value,
  selected,
  option,
  setOption,
}: Props) {
  return (
    <Container onPress={() => setOption(option)} selected={selected || false}>
      <Row>
        <Dot color={selected ? '#30DB5B' : '#d9d9d9'} />
        <LabelText>{label}</LabelText>
      </Row>
      <BoldText>{value}</BoldText>
    </Container>
  );
}
