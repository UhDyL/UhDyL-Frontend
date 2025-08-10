import { Container, StyledScrollView } from './UserMainScreen.styled';

import MainHeader from '@/components/common/mainHeader/MainHeader';
import TabBar from '@/components/common/tabBar/TabBar';
import CategoryBox from '@/components/user/categoryBox/CategoryBox';
import CategoryItemWrapper from '@/components/user/categoryItem/CategoryItemWrapper';

export default function UserMainScreen() {
  return (
    <>
      <StyledScrollView>
        <Container>
          <MainHeader />
          <CategoryBox />
          <CategoryItemWrapper />
        </Container>
      </StyledScrollView>
      <TabBar status='home' />
    </>
  );
}
