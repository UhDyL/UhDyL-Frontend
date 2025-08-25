import { postComplete } from '@/api/chatting.api';
import { useMutation } from '@tanstack/react-query';

export const usePostComplete = () => {
  return useMutation({
    mutationKey: ['postComplete'],
    mutationFn: (chatRoomId: number) => postComplete(chatRoomId),
  });
};
