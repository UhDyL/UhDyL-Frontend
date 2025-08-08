import {
  ChattingBtn,
  Container,
  LikeBtn,
  TextWrapper,
} from './bottomBar.styled';

import { Heart } from 'lucide-react-native';
import { useState } from 'react';

export default function BottomBar() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <Container>
      <LikeBtn onPress={() => setIsLiked(!isLiked)}>
        <Heart color={isLiked ? '#30DB5B' : '#d9d9d9'} />
      </LikeBtn>
      <ChattingBtn>
        <TextWrapper>채팅하기</TextWrapper>
      </ChattingBtn>
    </Container>
  );
}
