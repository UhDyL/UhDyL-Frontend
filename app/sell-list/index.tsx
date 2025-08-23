import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import { Container } from './sellList.styled';
import { GetMyItemsResonseDto } from '@/api/product.api';
import SellListBox from '@/components/farmer/sell-list/sellListBox/SellListBox';
import TopOptionBar from '@/components/farmer/sell-list/topOptionBar/TopOptionBar';
import { useGetMyItems } from '@/hooks/query/useGetMyItems';
import { useState } from 'react';

export default function SellList() {
  const [option, setOption] = useState<'numOfSells' | 'numOfComplete'>(
    'numOfSells'
  );
  const { data } = useGetMyItems();
  const filterData = (data: GetMyItemsResonseDto[]) =>
    data.filter((e) => e.isCompleted === true);

  return (
    <Container>
      <BackAndTitle title='판매 목록' />
      <TopOptionBar option={option} setOption={setOption} />
      <SellListBox
        data={option === 'numOfComplete' ? filterData(data) : data}
      />
    </Container>
  );
}
