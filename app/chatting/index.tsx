import {
  ButtonText,
  ButtonWrapper,
  Container,
  TitleText,
} from './chatting.styled';

import { ChattingBarProps } from '@/components/chatting/chattingBar/ChattingBar';
import ChattingList from '@/components/chatting/chattingList/ChattingList';
import { ScrollView } from 'react-native';
import TabBar from '@/components/common/tabBar/TabBar';

const dummyChats: ChattingBarProps[] = [
  {
    chattingId: '1',
    itemImage: 'https://example.com/images/tomato.jpg',
    itemName: '완숙 토마토 5kg',
    price: '₩ 18,000',
    lastChat: '혹시 10kg도 가능할까요?',
    lastAt: new Date('2025-08-05T14:30:00'),
  },
  {
    chattingId: '2',
    itemImage: 'https://example.com/images/apple.jpg',
    itemName: '청송 사과 10kg',
    price: '₩ 35,000',
    lastChat: '내일 바로 발송 가능하신가요?',
    lastAt: new Date('2025-08-08T09:15:00'),
  },
  {
    chattingId: '3',
    itemImage: 'https://example.com/images/cabbage.jpg',
    itemName: '절임배추 20kg',
    price: '₩ 42,000',
    lastChat: '배송비 포함 가격인가요?',
    lastAt: new Date('2025-08-07T18:45:00'),
  },
  {
    chattingId: '4',
    itemImage: 'https://example.com/images/peach.jpg',
    itemName: '복숭아 5kg',
    price: '₩ 25,000',
    lastChat: '혹시 직접 수령도 가능한가요?',
    lastAt: new Date('2025-08-09T11:20:00'),
  },
];

export default function ChattingScreen() {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <Container>
          <TitleText>채팅</TitleText>
          <ButtonWrapper>
            <ButtonText>전체</ButtonText>
          </ButtonWrapper>
          <ChattingList data={dummyChats} />
        </Container>
      </ScrollView>
      <TabBar status='chatting' />
    </>
  );
}
