import {
  Container,
  GoFarmerBtn,
  StyledScrollView,
} from './UserMainScreen.styled';

import { ErrorComponent } from '@/components/common/errorComponent/ErrorComponent';
import { Loading } from '@/components/common/loading/Loading';
import MainHeader from '@/components/common/mainHeader/MainHeader';
import { ModalWrapper } from '@/components/common/modalWrapper/ModalWrapper';
import OverlayModal from '@/components/common/overlayModal/OverlayModal';
import TabBar from '@/components/common/tabBar/TabBar';
import GoFarmerMain from '@/components/farmer/goFarmerMain/GoFarmerMain';
import CategoryBox from '@/components/user/categoryBox/CategoryBox';
import CategoryItemWrapper from '@/components/user/categoryItem/CategoryItemWrapper';
import { useGetProductsList } from '@/hooks/query/useGetProductsList';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function UserMainScreen() {
  const userType = useUserStore((state) => state.mode);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const { data, error, isError, isPending, isSuccess, refetch } =
    useGetProductsList();
  const router = useRouter();

  let content;
  if (isSuccess) {
    content = <CategoryItemWrapper data={data ?? []} />;
  }

  let modal;
  if (isPending) {
    modal = (
      <ModalWrapper>
        <Loading />
      </ModalWrapper>
    );
  } else if (isError) {
    modal = (
      <ModalWrapper>
        <ErrorComponent error={error} onRetry={refetch} />
      </ModalWrapper>
    );
  }

  return (
    <>
      {modal}
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
