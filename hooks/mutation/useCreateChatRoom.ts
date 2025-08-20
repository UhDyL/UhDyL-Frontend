import { ChatRoomResponseDto, createChatRoom } from '@/api/chatting.api';

import { useMutation } from '@tanstack/react-query';

export const useCreateChatRoom = (chatRoomId: string) => {
  return useMutation<ChatRoomResponseDto>({
    mutationKey: ['createChatRoom'],
    mutationFn: () => createChatRoom(chatRoomId),
  });
};
