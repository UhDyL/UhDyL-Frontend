import {
  CategoryBox,
  CategoryFirstFloor,
  CategorySecondFloor,
  Container,
  ItemsContainer,
  SearchBarWrapper,
  StyledScrollView,
  TextWrapper,
  TitleText,
} from './mainHeader.styled';

import CategoryItem from '../../consumer/categoryItem/CategoryItem';
import ItemComponent from '@/components/consumer/itemComponent/ItemComponent';
import SearchBar from '../searchBar/SearchBar';
import { useState } from 'react';

const dummyData = [
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '신선한 사과',
    price: '₩3,000',
    sellerName: '김과일',
    sellerImage: '',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '유기농 양배추',
    price: '₩2,500',
    sellerName: '이채소',
    sellerImage: '',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '햇감자 3kg',
    price: '₩4,200',
    sellerName: '박농부',
    sellerImage: '',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '찹쌀 5kg',
    price: '₩11,000',
    sellerName: '정미소',
    sellerImage: '',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '흠집토마토 1kg',
    price: '₩1,800',
    sellerName: '최농장',
    sellerImage: '',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '잼용 딸기 500g',
    price: '₩2,200',
    sellerName: '윤과수원',
    sellerImage: '',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '상추 200g',
    price: '₩1,000',
    sellerName: '장채소',
    sellerImage: 'https://example.com/sellers/jang.jpg',
  },
  {
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '선물용 감귤 세트',
    price: '₩15,000',
    sellerName: '오선물',
    sellerImage: '',
  },
];

export default function MainHeader() {
  const [value, setValue] = useState<string>('');
  return (
    <StyledScrollView>
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

        <ItemsContainer>
          {dummyData.map((data, index) => (
            <ItemComponent
              key={index}
              imgUrl={data.imgUrl}
              price={data.price}
              sellerImage={data.sellerImage}
              sellerName={data.sellerName}
              title={data.title}
            />
          ))}
        </ItemsContainer>
      </Container>
    </StyledScrollView>
  );
}
