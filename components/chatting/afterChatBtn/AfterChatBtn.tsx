import { Container, TextWrapper } from './afterChatBtn.styled';

import { usePostComplete } from '@/hooks/mutation/usePostComplete';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

type Props = {
  sellerId: string;
  isTradeCompleted?: boolean;
  isMyProduct: boolean;
  chatRoomId: number;
  isCompleted: boolean;
};

export default function AfterChatBtn({
  sellerId,
  isTradeCompleted,
  isMyProduct,
  chatRoomId,
  isCompleted,
}: Props) {
  const router = useRouter();
  const userType = useUserStore((state) => state.mode);
  const { mutate: postComplete } = usePostComplete();

  let buttonText: string | null = null;

  if (isTradeCompleted) {
    if (userType === 'user') {
      buttonText = '리뷰 작성하기';
    }
  } else {
    if (userType === 'farmer' && isMyProduct && !isCompleted) {
      buttonText = '거래 완료';
    }
  }

  if (!buttonText) return null;

  return (
    <Container
      userType={userType ?? 'user'}
      onPress={() => {
        if (buttonText === '리뷰 작성하기') {
          router.push(`/chatting/addReview/${sellerId}`);
        } else if (buttonText === '거래 완료') {
          console.log('거래완ㅋㅋ');
          postComplete(chatRoomId, { onSuccess: () => router.back() });
        }
      }}
    >
      <TextWrapper>{buttonText}</TextWrapper>
    </Container>
  );
}
