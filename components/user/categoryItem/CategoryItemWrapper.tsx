import { Container, ItemsContainer } from './categoryItemWrapper.styled';

import { GetProductsResponseDto } from '@/api/product.api';
import ItemComponent from '../itemComponent/ItemComponent';

type Props = {
  data: GetProductsResponseDto[];
};

export default function CategoryItemWrapper({ data }: Props) {
  return (
    <Container>
      <ItemsContainer>
        {data.map((d, index) => (
          <ItemComponent
            id={d.id}
            key={index}
            imgUrl={d.mainImageUrl}
            price={d.price}
            sellerImage={d.sellerPicture}
            sellerName={d.sellerName}
            title={d.title}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}
