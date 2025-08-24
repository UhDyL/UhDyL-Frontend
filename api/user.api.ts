import fetcher from './common/fetcher';

export interface UserInfoResponseDto {
  profileImageUrl: string;
  nickname: string;
  role: 'USER' | 'FARMER';
  mode: 'user' | 'farmer';
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

export interface GetMyFieldLocationResponse {
  location_x: number;
  location_y: number;
}

export const getMyFieldLocation = async () => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      code?: string;
      data: GetMyFieldLocationResponse;
    }>('/user/location');
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postMyFieldLocation = async (x: string, y: string) => {
  try {
    const response = await fetcher.post<{ success: boolean; data: string }>(
      '/user/location',
      {
        location_x: x,
        location_y: y,
      }
    );
    return response.data.success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface GetFarmerAuthResponseDto {
  accessToken: string;
  refreshToken: string;
}

export const getFarmerAuth = async () => {
  try {
    const response = await fetcher.post<{
      success: boolean;
      data: GetFarmerAuthResponseDto;
    }>('/user/complete-registration');
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
