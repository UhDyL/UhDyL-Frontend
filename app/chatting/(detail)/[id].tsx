import { BottomContainer, Container } from './chattingDetail.styled';
import ChatBox, {
  ChatMessageResponse,
} from '@/components/chatting/chatBox/ChatBox';
import { KeyboardAvoidingView, Platform } from 'react-native';

import AfterChatBtn from '@/components/chatting/afterChatBtn/AfterChatBtn';
import BackAndTitle from '@/components/common/backAndTitle/BackAndTitle';
import InputArea from '@/components/chatting/inputArea/InputArea';
import { useLocalSearchParams } from 'expo-router';

const dummyChatMessages: ChatMessageResponse[] = [
  {
    message: '안녕하세요! 감자 10kg 구매하고 싶습니다.',
    senderId: 1,
    senderName: '홍길동',
    senderImage: '',
    timestamp: new Date('2025-08-09T09:15:00'),
  },
  {
    message: '네~ 오늘 발송 가능합니다.',
    senderId: 2,
    senderName: '이영희',
    senderImage: '',
    timestamp: new Date('2025-08-09T09:16:30'),
  },
  {
    message: '혹시 택배비 포함 가격인가요?',
    senderId: 1,
    senderName: '홍길동',
    senderImage: '',
    timestamp: new Date('2025-08-09T09:17:10'),
  },
  {
    message: '네, ₩18,000에 배송비까지 포함입니다.',
    senderId: 2,
    senderName: '이영희',
    senderImage: '',
    timestamp: new Date('2025-08-09T09:18:05'),
  },
  {
    message: '좋아요, 그럼 주문하겠습니다.',
    senderId: 1,
    senderName: '홍길동',
    senderImage: '',
    timestamp: new Date('2025-08-09T09:19:40'),
  },
  {
    message: '감사합니다! 송장 번호 나오면 알려드릴게요.',
    senderId: 2,
    senderName: '이영희',
    senderImage: '',
    timestamp: new Date('2025-08-09T09:20:15'),
  },
];

export default function ChattingDetailScreen() {
  const { id, name } = useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id ?? '';
  const nameStr = Array.isArray(name) ? name[0] : name ?? '';

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -30 : 0}
    >
      <Container>
        <BackAndTitle title={nameStr} />
        <ChatBox data={dummyChatMessages} />
        <BottomContainer>
          <AfterChatBtn userType='user' sellerId={idStr} />
          <InputArea />
        </BottomContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
