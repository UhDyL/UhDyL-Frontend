import { ChatMessageResponseDto, getChatMessages } from '@/api/chatting.api';

import { useQuery } from '@tanstack/react-query';

export const useGetChatMessages = (roomId: number, startDateTime?: string) => {
  return useQuery<ChatMessageResponseDto[]>({
    queryKey: ['getChatMessages'],
    queryFn: () => getChatMessages(roomId, startDateTime),
  });
};
