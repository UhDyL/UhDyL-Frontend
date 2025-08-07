import { Container, StyledText, StyledTouchable } from './sortButton.styled';

type Props = {
  option: 'latest' | 'price';
  isModalOn: boolean;
  setIsModalOn: (data: boolean) => void;
};

export default function SortButton({ option, isModalOn, setIsModalOn }: Props) {
  const mappingKorean = (data: string) => {
    if (option === 'latest') return '최신순';
    if (option === 'price') return '가격순';
  };

  return (
    <StyledTouchable onPress={() => setIsModalOn(!isModalOn)}>
      <Container>
        <StyledText>{mappingKorean(option)}</StyledText>
      </Container>
    </StyledTouchable>
  );
}
