import { Container, StyledInputTextForm, TitleText } from './addComment.styled';

import { useState } from 'react';

type Props = {
  comment: string;
  setComment: (comment: string) => void;
};

export default function AddComment({ comment, setComment }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <TitleText>후기를 남겨주세요</TitleText>
      <StyledInputTextForm
        value={comment}
        onChangeText={setComment}
        placeholder='최대 50자 이내로 작성해주세요.'
        multiline
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      />
    </Container>
  );
}
