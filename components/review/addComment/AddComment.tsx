import { Container, StyledInputTextForm, TitleText } from './addComment.styled';

type Props = {
  comment: string;
  setComment: (comment: string) => void;
};

export default function AddComment({ comment, setComment }: Props) {
  return (
    <Container>
      <TitleText>후기를 남겨주세요</TitleText>
      <StyledInputTextForm
        value={comment}
        onChangeText={setComment}
        placeholder='최대 50자 이내로 작성해주세요.'
        multiline
      />
    </Container>
  );
}
