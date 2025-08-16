import { Container, TextWrapper } from './afterChatBtn.styled';

import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/userStore';

type Props = {
  sellerId: string;
};

export default function AfterChatBtn({ sellerId }: Props) {
  const router = useRouter();
  const userType = useUserStore((state) => state.role);

  return (
    <Container
      userType={userType ?? 'user'}
      onPress={() =>
        userType === 'user'
          ? router.push(`/chatting/addReview/${sellerId}`)
          : console.log('거래완ㅋㅋ')
      }
    >
      <TextWrapper>
        {userType === 'user' ? '리뷰 작성하기' : '거래 완료'}
      </TextWrapper>
    </Container>
  );
}
