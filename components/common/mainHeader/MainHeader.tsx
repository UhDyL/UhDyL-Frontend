import {
  Container,
  SearchBarWrapper,
  TextWrapper,
  TitleText,
} from './mainHeader.styled';

import { useRouter } from 'expo-router';
import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';

export default function MainHeader() {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  return (
    <Container>
      <TextWrapper>
        <TitleText>어글리 딜리셔스</TitleText>
      </TextWrapper>
      <SearchBarWrapper>
        <SearchBar
          value={value}
          setValue={setValue}
          onPress={() =>
            router.push(`/search?query=${encodeURIComponent(value)}`)
          }
        />
      </SearchBarWrapper>
    </Container>
  );
}
