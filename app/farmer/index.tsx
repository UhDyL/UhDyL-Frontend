import {
  Container,
  FeaturesBoxWrapper,
  StyledScrollView,
} from './FarmerMainScreen.styled';

import FeaturesBox from '@/components/farmer/featuresBox/FeaturesBox';
import MainHeader from '@/components/common/mainHeader/MainHeader';
import MyFarm from '@/components/farmer/myFarm/MyFarm';
import TabBar from '@/components/common/tabBar/TabBar';

export default function FarmerMainScreen() {
  return (
    <>
      <StyledScrollView>
        <Container>
          <MainHeader />
          <FeaturesBoxWrapper>
            <MyFarm />
            <FeaturesBox />
          </FeaturesBoxWrapper>
        </Container>
      </StyledScrollView>
      <TabBar status='home' />
    </>
  );
}
