import { Container, TextWrapper } from './afterChatBtn.styled';

import { useRouter } from 'expo-router';

type Props = {
  userType: 'user' | 'seller';
  sellerId: string;
};

export default function AfterChatBtn({ userType, sellerId }: Props) {
  const router = useRouter();

  return (
    <Container
      userType={userType}
      onPress={() =>
        userType === 'user'
          ? router.push(`/addReview/${sellerId}`)
          : console.log('거래완ㅋㅋ')
      }
    >
      <TextWrapper>
        {userType === 'user' ? '리뷰 작성하기' : '거래 완료'}
      </TextWrapper>
    </Container>
  );
}
