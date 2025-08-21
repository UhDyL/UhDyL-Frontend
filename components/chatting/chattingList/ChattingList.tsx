import ChattingBar from '../chattingBar/ChattingBar';

import { ChatRoomResponseDto } from '@/api/chatting.api';
import { Container } from './chattingList.styled';

type Props = {
  data: ChatRoomResponseDto[];
};

export default function ChattingList({ data }: Props) {
  return (
    <Container>
      {data.map((ele, index) => (
        <ChattingBar key={index} {...ele} />
      ))}
    </Container>
  );
}
