import { sellsDummyData } from '@/mocks/sells-list-mocks';
import SellListItem from '../sellListItem/SellListItem';
import { Container } from './sellListBox.styled';

export default function SellListBox() {
  return (
    <Container>
      {sellsDummyData.map((data, index) => (
        <SellListItem key={index} {...data} itemId='2' />
      ))}
    </Container>
  );
}
