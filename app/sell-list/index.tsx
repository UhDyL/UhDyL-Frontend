import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import SellListBox from '@/components/farmer/sell-list/sellListBox/SellListBox';
import TopOptionBar from '@/components/farmer/sell-list/topOptionBar/TopOptionBar';
import { Container } from './sellList.styled';

export default function SellList() {
  return (
    <Container>
      <BackAndTitle title='판매 목록' />
      <TopOptionBar />
      <SellListBox />
    </Container>
  );
}
