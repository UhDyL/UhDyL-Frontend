import {
  CategoryFirstFloor,
  CategorySecondFloor,
  CategoryWrapper,
  Container,
} from './categoryBox.styled';

import { useRouter } from 'expo-router';
import CategoryItem from '../categoryItem/CategoryItem';

export default function CategoryBox() {
  const router = useRouter();

  return (
    <Container>
      <CategoryWrapper>
        <CategoryFirstFloor>
          <CategoryItem
            imgName='fruit'
            label='과일'
            onPress={() => router.push('/search?category=FRUIT')}
          />
          <CategoryItem
            imgName='vegetable'
            label='채소'
            onPress={() => router.push('/search?category=VEGETABLE')}
          />
          <CategoryItem
            imgName='rootVegetable'
            label='뿌리채소'
            onPress={() => router.push('/search?category=ROOT_VEGETABLE')}
          />
          <CategoryItem
            imgName='grain'
            label='곡물'
            onPress={() => router.push('/search?category=GRAIN')}
          />
        </CategoryFirstFloor>
        <CategorySecondFloor>
          <CategoryItem
            imgName='forJuiceOrJam'
            label='주스/잼용'
            onPress={() => router.push('/search?category=JUICE_JAM')}
          />
          <CategoryItem
            imgName='forSideDish'
            label='반찬용'
            onPress={() => router.push('/search?category=SIDE_DISH')}
          />
          <CategoryItem
            imgName='forGift'
            label='선물용'
            onPress={() => router.push('/search?category=GIFT')}
          />
        </CategorySecondFloor>
      </CategoryWrapper>
    </Container>
  );
}
