import { useEffect, useState } from 'react';
import {
  Container,
  OptionLayer,
  Overlay,
  StyledScrollView,
  StyledSearchBar,
  SubText,
} from './searchScreen.styled';

import { SortType } from '@/api/product.api';
import SortButton from '@/components/common/sortButton/SortButton';
import SortModal from '@/components/common/sortModal/SortModal';
import TabBar from '@/components/common/tabBar/TabBar';
import CategoryItemWrapper from '@/components/user/categoryItem/CategoryItemWrapper';
import { useGetSearchProducts } from '@/hooks/query/useGetSearchProducts';
import { Category } from '@/types/categoryType';
import { useLocalSearchParams } from 'expo-router';

export default function SearchScreen() {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [option, setOption] = useState<'latest' | 'price'>('latest');
  const { query, category } = useLocalSearchParams();
  const [value, setValue] = useState<string>(query ? String(query) : '');

  const {
    mutate: searchProducts,
    data,
    isPending,
    error,
  } = useGetSearchProducts();

  const mappingSortType = (sort: 'latest' | 'price'): SortType => {
    if (sort === 'price') return SortType.PRICE_DESC;
    return SortType.CREATED_AT_DESC;
  };

  const handleSetOption = (option: 'latest' | 'price') => {
    setOption(option);
    setIsModalOn(false);
  };

  const buildSearchParams = () => {
    if (category && !query) {
      return {
        keyword: '', // keyword는 빈 값
        category: category as Category,
        sort: mappingSortType(option),
      };
    }
    return {
      keyword: value,
      category: category ? (category as Category) : Category.NONE,
      sort: mappingSortType(option),
    };
  };

  useEffect(() => {
    searchProducts(buildSearchParams());
  }, []);

  useEffect(() => {
    searchProducts(buildSearchParams());
  }, [option]);

  useEffect(() => console.log('data : ', data), [data]);
  if (isPending) console.log('진행 중');
  if (error) console.error(error);

  return (
    <>
      <Container>
        <StyledSearchBar
          value={value}
          setValue={setValue}
          onPress={() =>
            searchProducts(buildSearchParams(), {
              onSuccess: (res) => {
                console.log('검색 결과:', res);
              },
              onError: (err) => {
                console.log(err);
              },
            })
          }
        />
        <OptionLayer>
          <SubText>{value}와 관련된 검색입니다.</SubText>
          <SortButton
            option={option}
            isModalOn={isModalOn}
            setIsModalOn={setIsModalOn}
          />
        </OptionLayer>
        <StyledScrollView>
          <CategoryItemWrapper data={data ?? []} />
        </StyledScrollView>
      </Container>
      <TabBar status='home' />
      {isModalOn && (
        <Overlay onPress={() => setIsModalOn(false)}>
          <SortModal option={option} setOption={handleSetOption} />
        </Overlay>
      )}
    </>
  );
}
