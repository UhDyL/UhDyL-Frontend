import { Container, TextWrapper } from './afterChatBtn.styled';

import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

type Props = {
  sellerId: string;
  isTradeCompleted?: boolean;
  isMyProduct: boolean;
};

export default function AfterChatBtn({
  sellerId,
  isTradeCompleted,
  isMyProduct,
}: Props) {
  const router = useRouter();
  const userType = useUserStore((state) => state.mode);
  console.log('내꺼인지 ? :', isMyProduct);

  let buttonText: string | null = null;

  if (isTradeCompleted) {
    if (userType === 'user') {
      buttonText = '리뷰 작성하기';
    }
  } else {
    if (userType === 'farmer' && isMyProduct) {
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
        }
      }}
    >
      <TextWrapper>{buttonText}</TextWrapper>
    </Container>
  );
}
