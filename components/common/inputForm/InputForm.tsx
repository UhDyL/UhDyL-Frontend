import { Container, LabelText, StyledInputText } from './inputForm.styled';

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  numberOnly?: boolean;
};

export default function InputForm({
  label,
  value,
  setValue,
  placeholder,
  numberOnly,
}: Props) {
  return (
    <Container>
      <LabelText>{label}</LabelText>
      <StyledInputText
        keyboardType={numberOnly ? 'numeric' : 'default'}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </Container>
  );
}
