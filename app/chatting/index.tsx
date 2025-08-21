import {
  ButtonText,
  ButtonWrapper,
  Container,
  TitleText,
} from './chatting.styled';

import ChattingList from '@/components/chatting/chattingList/ChattingList';
import TabBar from '@/components/common/tabBar/TabBar';
import { useGetMyChatRooms } from '@/hooks/query/useGetMyChatRooms';
import { useUserStore } from '@/store/userStore';
import { ScrollView } from 'react-native';

export default function ChattingScreen() {
  const userType = useUserStore((state) => state.mode);
  const { data: chatRoomsData } = useGetMyChatRooms();

  return (
    <>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <Container>
          <TitleText>채팅</TitleText>
          <ButtonWrapper userType={userType}>
            <ButtonText>전체</ButtonText>
          </ButtonWrapper>
          <ChattingList data={chatRoomsData} />
        </Container>
      </ScrollView>
      <TabBar status='chatting' />
    </>
  );
}
