import {
  ChattingBtn,
  Container,
  LikeBtn,
  TextWrapper,
} from './bottomBar.styled';
import { Dispatch, SetStateAction } from 'react';

import { Heart } from 'lucide-react-native';
import { useCreateChatRoom } from '@/hooks/mutation/useCreateChatRoom';
import { useRouter } from 'expo-router';

type Props = {
  productId: string;
  isLiked: boolean;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
};

export default function BottomBar({ productId, isLiked, setIsLiked }: Props) {
  const { data, mutate } = useCreateChatRoom(productId);
  const router = useRouter();
  const handleGoChat = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.push(
          `/chatting/${data?.chatRoomId}?name=${
            data?.product.title ?? ''
          }&itemId=${data?.product.id}&isTradeCompleted=${
            data?.isTradeCompleted
          }`
        );
      },
    });
  };
  return (
    <Container>
      <LikeBtn onPress={() => setIsLiked(!isLiked)}>
        <Heart
          fill={isLiked ? '#30DB5B' : 'none'}
          color={isLiked ? '#30DB5B' : '#d9d9d9'}
        />
      </LikeBtn>
      <ChattingBtn onPress={handleGoChat}>
        <TextWrapper>채팅하기</TextWrapper>
      </ChattingBtn>
    </Container>
  );
}
