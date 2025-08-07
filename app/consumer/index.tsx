import { Container, StyledScrollView } from './ConsumerMainScreen.styled';

import MainHeader from '@/components/common/mainHeader/MainHeader';
import TabBar from '@/components/common/tabBar/TabBar';
import CategoryBox from '@/components/consumer/categoryBox/CategoryBox';
import CategoryItemWrapper from '@/components/consumer/categoryItem/CategoryItemWrapper';

export default function ConsumerMainScreen() {
  return (
    <>
      <StyledScrollView>
        <Container>
          <MainHeader />
          <CategoryBox />
          <CategoryItemWrapper />
        </Container>
      </StyledScrollView>
      <TabBar />
    </>
  );
}
