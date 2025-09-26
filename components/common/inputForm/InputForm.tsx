import { Container, LabelText, StyledInputText } from './inputForm.styled';

import { useState } from 'react';

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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <LabelText>{label}</LabelText>
      <StyledInputText
        keyboardType={numberOnly ? 'numeric' : 'default'}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      />
    </Container>
  );
}
