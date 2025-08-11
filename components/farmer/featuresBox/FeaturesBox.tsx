import { Col, Container } from './featuresBox.styled';

import BoxBlock from '../boxBlock/BoxBlock';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

export default function FeaturesBox() {
  const router = useRouter();
  const userType = useUserStore((state) => state.userType);

  return (
    <Container>
      <Col>
        <BoxBlock
          onPress={() => router.push('/user')}
          size='normal'
          titleText='이웃 농산물 보러가기'
        />
        <BoxBlock
          onPress={() => console.log('농산물 판매 페이지')}
          size='big'
          titleText='농산물 판매하기'
          subText='못난이 농산물을 이웃들에게 팔아 보세요'
          color='#30DB5B'
        />
      </Col>
      <Col>
        <BoxBlock
          onPress={() =>
            router.push({ pathname: '/chatting', params: { userType } })
          }
          size='big'
          titleText='채팅하기'
          subText='구매자와 대화한 내역을 확인해 볼 수 있어요'
          color='#FFB340'
        />
        <BoxBlock
          onPress={() => console.log('판매 목록 페이지 이동')}
          size='normal'
          titleText='판매 목록'
        />
      </Col>
    </Container>
  );
}
