import { Container, ItemsContainer } from './categoryItemWrapper.styled';

import { SearchResponseDto } from '@/api/product.api';
import ItemComponent from '../itemComponent/ItemComponent';

type Props = {
  data: SearchResponseDto[];
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
            sellerName={d.sellerName}
            title={d.title}
            averageStar={4.5}
            numOfLiked={12}
            numOfReview={120}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}
