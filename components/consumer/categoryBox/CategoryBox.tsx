import {
  CategoryFirstFloor,
  CategorySecondFloor,
  CategoryWrapper,
  Container,
} from './categoryBox.styled';

import CategoryItem from '../categoryItem/CategoryItem';

export default function CategoryBox() {
  return (
    <Container>
      <CategoryWrapper>
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
      </CategoryWrapper>
    </Container>
  );
}
