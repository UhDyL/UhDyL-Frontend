import { Container, StyledScrollView } from './ConsumerMainScreen.styled';

import CategoryBox from '@/components/consumer/categoryBox/CategoryBox';
import CategoryItemWrapper from '@/components/consumer/categoryItem/CategoryItemWrapper';
import MainHeader from '@/components/common/mainHeader/MainHeader';

export default function ConsumerMainScreen() {
  return (
    <StyledScrollView>
      <Container>
        <MainHeader />
        <CategoryBox />
        <CategoryItemWrapper />
      </Container>
    </StyledScrollView>
  );
}
