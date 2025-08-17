import fetcher from './common/fetcher';

export interface UserInfoResponseDto {
  profileImageUrl: string;
  nickname: string;
  role: 'USER' | 'FARMER';
  mode: '구매자' | '판매자';
}

export const getUserInfo = async (): Promise<UserInfoResponseDto> => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: UserInfoResponseDto;
    }>('/user/profile');
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
