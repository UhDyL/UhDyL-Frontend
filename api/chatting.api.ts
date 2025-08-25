import * as SecureStore from 'expo-secure-store';

import { Client } from '@stomp/stompjs';
import PageableDataType from '@/types/pageableDataType';
import SockJS from 'sockjs-client';
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
  isTradeCompleted: boolean;
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

export const postComplete = async (chatRoomId: number): Promise<boolean> => {
  try {
    const response = await fetcher.post<{ success: true; data: string }>(
      `/chat/room/complete?chatRoomId=${chatRoomId}`
    );
    return response.data.success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface ChatMessageResponseDto {
  message: string;
  senderId: number;
  senderName: string;
  senderImage: string;
  timestamp: string;
}

export const getChatMessages = async (
  roomId: number,
  startDateTime?: string
) => {
  try {
    const params = new URLSearchParams();
    if (startDateTime) {
      params.append('startDateTime', startDateTime);
    }

    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<ChatMessageResponseDto[]>;
    }>(`/chat/room/${roomId}/messages?${params}`);
    return response.data.data.pageContents;
  } catch (err) {
    console.error('채팅 메세지 조회 실패 : ', err);
    throw err;
  }
};

let stompClient: Client | null = null;

export const connectChat = (roomId: number, onMsg: (m: any) => void) => {
  const token = SecureStore.getItem('accessToken');
  console.log('token : ', token);
  const client = new Client({
    webSocketFactory: () =>
      new SockJS(
        `${
          process.env.EXPO_PUBLIC_API_URL ?? 'https://54.180.195.238'
        }/chat/inbox`
      ),
    connectHeaders: token ? { Authorization: `Bearer ${token}` } : {},
    onConnect: () => {
      console.log('WebSocket 연결됨. 구독 시작 : ', `/sub/chat/${roomId}`);
      client.subscribe(`/sub/chat/${roomId}`, (f) => {
        console.log('메시지 수신 : ', f.body);
        const response = JSON.parse(f.body);
        const message = response.data || response;
        onMsg(message);
      });

      client.subscribe(`/user/queue/errors`, (f) => {
        console.error('WebSocket 에러 수신 : ', f.body);
        const error = JSON.parse(f.body);
        alert(`에러 발생 : ${error.message} (코드 : ${error.code})`);
      });
    },
  });

  client.activate();
  stompClient = client;
  return client;
};

export const sendChatMessgaes = (
  roomId: number,
  message: string,
  imageUrl?: string,
  publicId?: string
) => {
  if (!stompClient || !stompClient.connected) {
    alert('채팅 서버에 연결되어 있지 않습니다.');
    return;
  }
  const token = SecureStore.getItem('accessToken');
  console.log('token : ', token);
  stompClient.publish({
    destination: `/pub/chat/room/${roomId}`,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: JSON.stringify({
      message,
      imageUrl: imageUrl || '',
      publicId: publicId || '',
    }),
  });
};
