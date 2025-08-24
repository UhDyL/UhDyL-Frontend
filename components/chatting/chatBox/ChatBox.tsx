import {
  Container,
  MessageContainer,
  StyledScrollView,
} from './chatBox.styled';
import React, { useEffect, useRef } from 'react';

import { ChatMessageResponseDto } from '@/api/chatting.api';
import MyMessage from '../myMessage/MyMessage';
import OpponentMessage from '../opponetMessage/OpponentMessage';
import { ScrollView } from 'react-native';
import { useUserStore } from '@/store/userStore';

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

          // const isFirstOpponentMessage =
          //   isOpponent &&
          //   (index === 0 || data[index - 1].senderName === userName);

          return (
            <MessageContainer key={index}>
              {/* {isFirstOpponentMessage && (
                <OpponentInfo
                  imgUrl={chat.senderImage}
                  name={chat.senderName}
                />
              )} */}
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
