import { Container, MessageContainer } from './chatBox.styled';

import { ChatMessageResponseDto } from '@/api/chatting.api';
import { useUserStore } from '@/store/userStore';
import React from 'react';
import MyMessage from '../myMessage/MyMessage';
import OpponentInfo from '../opponentInfo/OppenentInfo';
import OpponentMessage from '../opponetMessage/OpponentMessage';

type Props = {
  data: ChatMessageResponseDto[];
};

export default function ChatBox({ data }: Props) {
  const userName = useUserStore((state) => state.nickname);

  return (
    <Container>
      {[...data].reverse().map((chat, index) => {
        const isOpponent = chat.senderName !== userName;

        const isFirstOpponentMessage =
          isOpponent &&
          (index === 0 || data[index - 1].senderName === userName);

        return (
          <MessageContainer key={index}>
            {isFirstOpponentMessage && (
              <OpponentInfo imgUrl={chat.senderImage} name={chat.senderName} />
            )}
            {isOpponent ? (
              <OpponentMessage {...chat} text={chat.message} />
            ) : (
              <MyMessage {...chat} text={chat.message} />
            )}
          </MessageContainer>
        );
      })}
    </Container>
  );
}
