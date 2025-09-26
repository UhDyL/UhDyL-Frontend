import { Container, Row } from './featuresBox.styled';

import BoxBlock from '../boxBlock/BoxBlock';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

export default function FeaturesBox() {
  const router = useRouter();
  const userType = useUserStore((state) => state.role);

  return (
    <Container>
      <Row>
        <BoxBlock
          onPress={() => router.push('/user')}
          size='big'
          titleText={'이웃 농산물\n보러가기'}
          subText='주변 이웃들의 못난이를 구경해보세요'
          imageUrl={require('../../../assets/images/farmer-main/see_neighbor_icon.png')}
        />
        <BoxBlock
          onPress={() => router.push('/new-item/step1')}
          size='big'
          titleText={'내 농산물\n판매하기'}
          subText='못난이 농산물을 이웃들에게 팔아 보세요'
          imageUrl={require('../../../assets/images/farmer-main/sell_mine_icon.png')}
        />
      </Row>
      <Row>
        <BoxBlock
          onPress={() =>
            router.push({ pathname: '/chatting', params: { userType } })
          }
          size='long'
          titleText='채팅'
          subText='주고받은 메세지를 확인해보세요'
          imageUrl={require('../../../assets/images/farmer-main/chatting_icon.png')}
        />
      </Row>
      <Row>
        <BoxBlock
          onPress={() => router.push('/sell-list')}
          size='normal'
          titleText='판매 목록'
          imageUrl={require('../../../assets/images/farmer-main/sell_list_icon.png')}
        />
        <BoxBlock
          onPress={() => router.push('/profile')}
          size='normal'
          titleText='내 상점'
          imageUrl={require('../../../assets/images/farmer-main/my_info_icon.png')}
        />
      </Row>
    </Container>
  );
}
