import { Container, TextWrapper } from './afterChatBtn.styled';

type Props = {
  userType: 'user' | 'seller';
};

export default function AfterChatBtn({ userType }: Props) {
  return (
    <Container userType={userType}>
      <TextWrapper>
        {userType === 'user' ? '리뷰 작성하기' : '거래 완료'}
      </TextWrapper>
    </Container>
  );
}
