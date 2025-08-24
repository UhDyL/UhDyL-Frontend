import { Container } from './sellListBox.styled';
import { GetMyItemsResonseDto } from '@/api/product.api';
import SellListItem from '../sellListItem/SellListItem';

type Props = {
  data: GetMyItemsResonseDto[];
};

export default function SellListBox({ data }: Props) {
  return (
    <Container>
      {data?.map((data, index) => (
        <SellListItem key={index} {...data} />
      ))}
    </Container>
  );
}
