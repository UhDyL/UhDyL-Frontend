import {
  Container,
  GoFarmerBtn,
  StyledScrollView,
} from './UserMainScreen.styled';

import CategoryBox from '@/components/user/categoryBox/CategoryBox';
import CategoryItemWrapper from '@/components/user/categoryItem/CategoryItemWrapper';
import { ErrorComponent } from '@/components/common/errorComponent/ErrorComponent';
import GoFarmerMain from '@/components/farmer/goFarmerMain/GoFarmerMain';
import { Loading } from '@/components/common/loading/Loading';
import MainHeader from '@/components/common/mainHeader/MainHeader';
import OverlayModal from '@/components/common/overlayModal/OverlayModal';
import TabBar from '@/components/common/tabBar/TabBar';
import { useGetProductsList } from '@/hooks/query/useGetProductsList';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export default function UserMainScreen() {
  const userType = useUserStore((state) => state.mode);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const { data, error, isError, isPending, isSuccess } = useGetProductsList();
  const router = useRouter();

  let content;
  if (isPending) {
    content = <Loading />;
  } else if (isError) {
    content = <ErrorComponent error={error} />;
  } else if (isSuccess) {
    content = <CategoryItemWrapper data={data ?? []} />;
  }

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
          {content}
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
