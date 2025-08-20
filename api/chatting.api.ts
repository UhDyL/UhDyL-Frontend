import PageableDataType from '@/types/pageableDataType';
import fetcher from './common/fetcher';

export interface ChatRoomResponseDto {
  chatRoomId: number;
  chatRoomName: string;
  product: {
    id: number;
    title: string;
    price: number;
    sellerName: string;
    sellerPicture: string;
    mainImageUrl: string;
    isCompleted: boolean;
  };
  message: string;
  timestamp: Date;
}

export const getChatRoomList = async (): Promise<ChatRoomResponseDto[]> => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<ChatRoomResponseDto[]>;
    }>('/chat/room');
    return response.data.data.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createChatRoom = async (
  productId: string
): Promise<ChatRoomResponseDto> => {
  try {
    const response = await fetcher.post<{
      success: boolean;
      data: ChatRoomResponseDto;
    }>('/chat/room', { productId });
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postComplete = async (): Promise<boolean> => {
  try {
    const response = await fetcher.post<{ success: true; data: string }>(
      `/chat/room/complete`
    );
    return response.data.success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
