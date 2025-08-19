import { useEffect, useState } from 'react';
import {
  Container,
  OptionLayer,
  Overlay,
  StyledScrollView,
  StyledSearchBar,
  SubText,
} from './searchScreen.styled';

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
  const [value, setValue] = useState<string>(query ? query[0] : '');

  const {
    mutate: searchProducts,
    data,
    isPending,
    error,
  } = useGetSearchProducts();

  const mappingSortType = (sort: 'latest' | 'price') => {
    if (sort === 'price') return 'price,DESC';
    else return 'createdAt,DESC';
  };

  useEffect(
    () =>
      searchProducts({
        keyword: value,
        category: category ? (category[0] as Category) : Category.NONE,
        sort: mappingSortType(option),
      }),
    []
  );

  useEffect(
    () =>
      searchProducts({
        keyword: value,
        category: Category.NONE,
        sort: mappingSortType(option),
      }),
    [option]
  );

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
            searchProducts(
              {
                keyword: value,
                category: Category.NONE,
                sort: mappingSortType(option),
              },
              {
                onSuccess: (res) => {
                  console.log('검색 결과:', res);
                },
                onError: (err) => {
                  console.log(err);
                },
              }
            )
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
          <SortModal option={option} setOption={setOption} />
        </Overlay>
      )}
    </>
  );
}
