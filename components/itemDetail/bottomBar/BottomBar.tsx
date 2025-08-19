import {
  ChattingBtn,
  Container,
  LikeBtn,
  TextWrapper,
} from './bottomBar.styled';
import { Dispatch, SetStateAction } from 'react';

import { Heart } from 'lucide-react-native';

type Props = {
  isLiked: boolean;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
};

export default function BottomBar({ isLiked, setIsLiked }: Props) {
  return (
    <Container>
      <LikeBtn onPress={() => setIsLiked(!isLiked)}>
        <Heart
          fill={isLiked ? '#30DB5B' : 'none'}
          color={isLiked ? '#30DB5B' : '#d9d9d9'}
        />
      </LikeBtn>
      <ChattingBtn>
        <TextWrapper>채팅하기</TextWrapper>
      </ChattingBtn>
    </Container>
  );
}
