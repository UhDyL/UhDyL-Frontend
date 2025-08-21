import React, { useEffect, useRef } from 'react';
import {
  Container,
  MessageContainer,
  StyledScrollView,
} from './chatBox.styled';

import { ChatMessageResponseDto } from '@/api/chatting.api';
import { useUserStore } from '@/store/userStore';
import { ScrollView } from 'react-native';
import MyMessage from '../myMessage/MyMessage';
import OpponentInfo from '../opponentInfo/OppenentInfo';
import OpponentMessage from '../opponetMessage/OpponentMessage';

type Props = {
  data: ChatMessageResponseDto[];
};

export default function ChatBox({ data }: Props) {
  const userName = useUserStore((state) => state.nickname);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [data]);

  return (
    <Container>
      <StyledScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
        ref={scrollViewRef}
      >
        {[...data].reverse().map((chat, index) => {
          const isOpponent = chat.senderName !== userName;

          const isFirstOpponentMessage =
            isOpponent &&
            (index === 0 || data[index - 1].senderName === userName);

          return (
            <MessageContainer key={index}>
              {isFirstOpponentMessage && (
                <OpponentInfo
                  imgUrl={chat.senderImage}
                  name={chat.senderName}
                />
              )}
              {isOpponent ? (
                <OpponentMessage {...chat} text={chat.message} />
              ) : (
                <MyMessage
                  {...chat}
                  text={chat.message}
                  image={chat.senderImage}
                />
              )}
            </MessageContainer>
          );
        })}
      </StyledScrollView>
    </Container>
  );
}
