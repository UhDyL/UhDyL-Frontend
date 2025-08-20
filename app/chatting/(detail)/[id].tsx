import { connectChat, sendChatMessgaes } from '@/api/chatting.api';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  BottomContainer,
  Container,
  InputWrapper,
} from './chattingDetail.styled';

import AfterChatBtn from '@/components/chatting/afterChatBtn/AfterChatBtn';
import ChatBox from '@/components/chatting/chatBox/ChatBox';
import InputArea from '@/components/chatting/inputArea/InputArea';
import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import { usePostChattingImage } from '@/hooks/mutation/usePostChattingImage';
import { useGetChatMessages } from '@/hooks/query/useGetChatMessages';
import { useLocalSearchParams } from 'expo-router';

export default function ChattingDetailScreen() {
  const { id, name, itemId } = useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id ?? '';
  const nameStr = Array.isArray(name) ? name[0] : name ?? '';
  const itemIdStr = Array.isArray(itemId) ? itemId[0] : itemId ?? '';
  const { data: chatMessages, refetch } = useGetChatMessages(+idStr);
  const [message, setMessage] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const { mutate: uploadImage } = usePostChattingImage(idStr, imageUrl ?? '');

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
          <AfterChatBtn sellerId={itemIdStr} />
          <InputWrapper>
            <InputArea
              imageUrl={imageUrl ?? ''}
              setImageUrl={setImageUrl}
              message={message}
              setMessage={setMessage}
              onSendPress={() => {
                if (imageUrl) {
                  uploadImage(undefined, {
                    onSuccess: (res) => {
                      sendChatMessgaes(
                        +idStr,
                        message,
                        res.imageUrl,
                        res.publicId
                      );
                      setMessage('');
                      setImageUrl('');
                    },
                  });
                } else {
                  sendChatMessgaes(+idStr, message, '', '');
                  setMessage('');
                }
              }}
            />
          </InputWrapper>
        </BottomContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
