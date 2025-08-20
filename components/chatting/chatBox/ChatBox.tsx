import { Container, MessageContainer } from './chatBox.styled';

import { ChatMessageResponseDto } from '@/api/chatting.api';
import React from 'react';
import MyMessage from '../myMessage/MyMessage';
import OpponentInfo from '../opponentInfo/OppenentInfo';
import OpponentMessage from '../opponetMessage/OpponentMessage';

type Props = {
  data: ChatMessageResponseDto[];
};

export default function ChatBox({ data }: Props) {
  const userId = 1; // 나중에 본인 id로 수정

  return (
    <Container>
      {data.map((chat, index) => {
        const isFirstOpponentMessage =
          chat.senderId !== userId &&
          (index === 0 || data[index - 1].senderId === userId);

        return (
          <MessageContainer key={index}>
            {isFirstOpponentMessage && (
              <OpponentInfo imgUrl={chat.senderImage} name={chat.senderName} />
            )}
            {chat.senderId === userId ? (
              <MyMessage text={chat.message} {...chat} />
            ) : (
              <OpponentMessage text={chat.message} {...chat} />
            )}
          </MessageContainer>
        );
      })}
    </Container>
  );
}
