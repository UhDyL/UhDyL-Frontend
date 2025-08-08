import {
  ChattingBtn,
  Container,
  LikeBtn,
  TextWrapper,
} from './bottomBar.styled';

import { Heart } from 'lucide-react-native';

export default function BottomBar() {
  return (
    <Container>
      <LikeBtn>
        <Heart />
      </LikeBtn>
      <ChattingBtn>
        <TextWrapper>채팅하기</TextWrapper>
      </ChattingBtn>
    </Container>
  );
}
