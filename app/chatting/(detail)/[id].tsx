import { KeyboardAvoidingView, Platform } from 'react-native';
import { BottomContainer, Container } from './chattingDetail.styled';

import { connectChat } from '@/api/chatting.api';
import AfterChatBtn from '@/components/chatting/afterChatBtn/AfterChatBtn';
import ChatBox from '@/components/chatting/chatBox/ChatBox';
import InputArea from '@/components/chatting/inputArea/InputArea';
import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import { useGetChatMessages } from '@/hooks/query/useGetChatMessages';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

export default function ChattingDetailScreen() {
  const { id, name } = useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id ?? '';
  const nameStr = Array.isArray(name) ? name[0] : name ?? '';
  const { data: chatMessages, refetch } = useGetChatMessages(+idStr);

  useEffect(() => {
    connectChat(+idStr, () => refetch());
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -30 : 0}
    >
      <Container>
        <BackAndTitle title={nameStr} />
        <ChatBox data={chatMessages ?? []} />
        <BottomContainer>
          <AfterChatBtn sellerId={idStr} />
          <InputArea />
        </BottomContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
