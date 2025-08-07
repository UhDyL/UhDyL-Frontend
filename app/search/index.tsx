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
import CategoryItemWrapper from '@/components/consumer/categoryItem/CategoryItemWrapper';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function SearchScreen() {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [option, setOption] = useState<'latest' | 'price'>('latest');
  const { query } = useLocalSearchParams();
  const [value, setValue] = useState<string>(query[0]);
  return (
    <>
      <Container>
        <StyledSearchBar value={value} setValue={setValue} />
        <OptionLayer>
          <SubText>{value}와 관련된 검색입니다.</SubText>
          <SortButton
            option={option}
            isModalOn={isModalOn}
            setIsModalOn={setIsModalOn}
          />
        </OptionLayer>
        <StyledScrollView>
          <CategoryItemWrapper />
        </StyledScrollView>
      </Container>
      <TabBar />
      {isModalOn && (
        <Overlay onPress={() => setIsModalOn(false)}>
          <SortModal option={option} setOption={setOption} />
        </Overlay>
      )}
    </>
  );
}
