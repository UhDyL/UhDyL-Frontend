import {
  CategoryBox,
  CategoryFirstFloor,
  CategorySecondFloor,
  Container,
  SearchBarWrapper,
  TextWrapper,
  TitleText,
} from './mainHeader.styled';

import CategoryItem from '../../consumer/categoryItem/CategoryItem';
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
      <CategoryBox>
        <CategoryFirstFloor>
          <CategoryItem imgName='fruit' label='과일' />
          <CategoryItem imgName='vegetable' label='채소' />
          <CategoryItem imgName='rootVegetable' label='뿌리채소' />
          <CategoryItem imgName='grain' label='곡물' />
        </CategoryFirstFloor>
        <CategorySecondFloor>
          <CategoryItem imgName='forJuiceOrJam' label='주스/잼용' />
          <CategoryItem imgName='forSideDish' label='반찬용' />
          <CategoryItem imgName='forGift' label='선물용' />
        </CategorySecondFloor>
      </CategoryBox>
    </Container>
  );
}
