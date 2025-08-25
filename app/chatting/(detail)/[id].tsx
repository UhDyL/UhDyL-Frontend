import {
  BottomContainer,
  Container,
  InputWrapper,
} from './chattingDetail.styled';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { connectChat, sendChatMessgaes } from '@/api/chatting.api';
import { useEffect, useState } from 'react';

import AfterChatBtn from '@/components/chatting/afterChatBtn/AfterChatBtn';
import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import ChatBox from '@/components/chatting/chatBox/ChatBox';
import InputArea from '@/components/chatting/inputArea/InputArea';
import { useGetChatMessages } from '@/hooks/query/useGetChatMessages';
import { useLocalSearchParams } from 'expo-router';
import { usePostChattingImage } from '@/hooks/mutation/usePostChattingImage';

export default function ChattingDetailScreen() {
  const { id, name, itemId, isTradeCompleted, isMyProduct, isCompleted } =
    useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id ?? '';
  const nameStr = Array.isArray(name) ? name[0] : name ?? '';
  const itemIdStr = Array.isArray(itemId) ? itemId[0] : itemId ?? '';
  const isTradeCompletedBoolean = Array.isArray(isTradeCompleted)
    ? isTradeCompleted[0] === 'true'
    : isTradeCompleted === 'true';
  const isMyProductBoolean = Array.isArray(isMyProduct)
    ? isMyProduct[0] === 'true'
    : isMyProduct === 'true';
  const isCompletedBoolean = Array.isArray(isCompleted)
    ? isMyProduct[0] === 'true'
    : isMyProduct === 'true';
  const { data: chatMessages, refetch } = useGetChatMessages(+idStr);
  const [message, setMessage] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const { mutate: uploadImage } = usePostChattingImage(idStr, imageUrl ?? '');

  useEffect(() => {
    console.log('isTradeCompleted? :', isTradeCompleted);
    connectChat(+idStr, () => refetch());
    console.log('isMine : ', isMyProductBoolean, isMyProduct);
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
          <AfterChatBtn
            isCompleted={isCompletedBoolean}
            chatRoomId={+idStr}
            isMyProduct={isMyProductBoolean}
            sellerId={itemIdStr}
            isTradeCompleted={isTradeCompletedBoolean}
          />

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
