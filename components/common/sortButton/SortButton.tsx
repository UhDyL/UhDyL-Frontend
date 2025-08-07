import { Container, StyledText, StyledTouchable } from './sortButton.styled';

import { useState } from 'react';

type Props = {
  isModalOn: boolean;
  setIsModalOn: (data: boolean) => void;
};

export default function SortButton({ isModalOn, setIsModalOn }: Props) {
  const [sortType, setSortType] = useState<'latest' | 'dictionary'>('latest');
  const mappingKorean = (data: string) => {
    if (data === 'latest') return '최신순';
    if (data === 'dictionary') return '사전순';
  };

  return (
    <StyledTouchable onPress={() => setIsModalOn(!isModalOn)}>
      <Container>
        <StyledText>{mappingKorean(sortType)}</StyledText>
      </Container>
    </StyledTouchable>
  );
}
