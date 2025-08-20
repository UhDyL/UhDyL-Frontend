import { connectChat, sendChatMessgaes } from '@/api/chatting.api';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { BottomContainer, Container } from './chattingDetail.styled';

import AfterChatBtn from '@/components/chatting/afterChatBtn/AfterChatBtn';
import ChatBox from '@/components/chatting/chatBox/ChatBox';
import InputArea from '@/components/chatting/inputArea/InputArea';
import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import { useGetChatMessages } from '@/hooks/query/useGetChatMessages';
import { useLocalSearchParams } from 'expo-router';

export default function ChattingDetailScreen() {
  const { id, name } = useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id ?? '';
  const nameStr = Array.isArray(name) ? name[0] : name ?? '';
  const { data: chatMessages, refetch } = useGetChatMessages(+idStr);
  const [message, setMessage] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [publicId, setPublicId] = useState<string | undefined>(undefined);

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
          <InputArea
            imageUrl={imageUrl ?? ''}
            setImageUrl={setImageUrl}
            message={message}
            setMessage={setMessage}
            onSendPress={() => {
              sendChatMessgaes(+idStr, message, imageUrl, publicId);
              setImageUrl('');
              setMessage('');
            }}
          />
        </BottomContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
