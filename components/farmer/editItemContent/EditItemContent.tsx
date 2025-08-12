import { Container, ContentText, TitleText } from './editItemContent.styled';

import UnderLine from '@/components/common/underLineBar/UnderLineBar';

type Props = {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
};

export default function EditItemContent({
  title,
  setTitle,
  content,
  setContent,
}: Props) {
  return (
    <Container>
      <TitleText onChangeText={setTitle}>{title}</TitleText>
      <UnderLine />
      <ContentText onChangeText={setContent}>{content}</ContentText>
    </Container>
  );
}
