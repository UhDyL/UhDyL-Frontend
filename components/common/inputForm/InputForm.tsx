import { Container, LabelText, StyledInputText } from './inputForm.styled';

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
};

export default function InputForm({
  label,
  value,
  setValue,
  placeholder,
}: Props) {
  return (
    <Container>
      <LabelText>{label}</LabelText>
      <StyledInputText
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </Container>
  );
}
