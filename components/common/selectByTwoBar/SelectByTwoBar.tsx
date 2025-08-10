import { ButtonText, Container, OptionBox } from './selectByTwoBar.styled';

type Props = {
  selected: 1 | 2;
  setSelected: (op: 1 | 2) => void;
  labelOne: string;
  labelTwo: string;
};

export default function SelectByTwoBar({
  selected,
  setSelected,
  labelOne,
  labelTwo,
}: Props) {
  return (
    <Container>
      <OptionBox isSelected={selected === 1} onPress={() => setSelected(1)}>
        <ButtonText>{labelOne}</ButtonText>
      </OptionBox>
      <OptionBox isSelected={selected === 2} onPress={() => setSelected(2)}>
        <ButtonText>{labelTwo}</ButtonText>
      </OptionBox>
    </Container>
  );
}
