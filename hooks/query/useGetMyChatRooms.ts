import { getChatRoomList } from '@/api/chatting.api';
import { useQuery } from '@tanstack/react-query';

export const useGetMyChatRooms = () => {
  return useQuery({
    queryKey: ['getChatRoomLIst'],
    queryFn: getChatRoomList,
    initialData: [],
  });
};
