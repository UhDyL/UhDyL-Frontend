import { Container, ElementText } from './selectableElement.styled';

type Props = {
  text: string;
  selected: boolean;
  toggleSelect: () => void;
};

export default function SelectableElement({
  text,
  selected,
  toggleSelect,
}: Props) {
  return (
    <Container onPress={toggleSelect}>
      <ElementText selected={selected}>{text}</ElementText>
    </Container>
  );
}
