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

export interface EditUserProfileInfoRequestDto {
  profileImageUrl: string;
  nickname: string;
  mode: 'user' | 'farmer';
}

export const EditUserProfileInfo = async ({
  profileImageUrl,
  nickname,
  mode,
}: EditUserProfileInfoRequestDto): Promise<{
  success: boolean;
  data: string;
}> => {
  try {
    const response = await fetcher.patch<{ success: boolean; data: string }>(
      '/user/profile',
      { profileImageUrl, nickname, mode }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
