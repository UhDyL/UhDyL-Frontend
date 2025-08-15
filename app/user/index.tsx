import {
  Container,
  GoFarmerBtn,
  StyledScrollView,
} from './UserMainScreen.styled';

import CategoryBox from '@/components/user/categoryBox/CategoryBox';
import CategoryItemWrapper from '@/components/user/categoryItem/CategoryItemWrapper';
import GoFarmerMain from '@/components/farmer/goFarmerMain/GoFarmerMain';
import MainHeader from '@/components/common/mainHeader/MainHeader';
import OverlayModal from '@/components/common/overlayModal/OverlayModal';
import TabBar from '@/components/common/tabBar/TabBar';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export default function UserMainScreen() {
  const userType = useUserStore((state) => state.userType);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <OverlayModal
        text='판매자 관리 페이지로 이동할까요?'
        acceptColor='#30DB5B'
        acceptString='확인'
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
        onAccept={() => router.push('/farmer')}
      />
      <StyledScrollView>
        <Container>
          <MainHeader />
          <CategoryBox />
          <CategoryItemWrapper />
        </Container>
      </StyledScrollView>
      <GoFarmerBtn>
        {userType === 'farmer' ? (
          <GoFarmerMain setIsModalOn={setIsModalOn} />
        ) : (
          ''
        )}
      </GoFarmerBtn>
      <TabBar status='home' />
    </>
  );
}
