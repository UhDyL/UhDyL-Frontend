import {
  Container,
  SearchBarWrapper,
  TextWrapper,
  TitleText,
} from './mainHeader.styled';

import SearchBar from '../searchBar/SearchBar';
import { useState } from 'react';

export default function MainHeader() {
  const [value, setValue] = useState<string>('');
  return (
    <Container>
      <TextWrapper>
        <TitleText>어글리 딜리셔스</TitleText>
      </TextWrapper>
      <SearchBarWrapper>
        <SearchBar value={value} setValue={setValue} />
      </SearchBarWrapper>
    </Container>
  );
}
