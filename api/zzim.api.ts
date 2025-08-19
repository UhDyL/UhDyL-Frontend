import PageableDataType from '@/types/pageableDataType';
import fetcher from './common/fetcher';

export interface GetMyZzimResponseDto {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  sellerName: string;
}

export const getMyZzim = async () => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<GetMyZzimResponseDto>;
    }>('/zzim');
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface PostZzimResponseDto {
  zzim: {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    sellerName: string;
  };
  isZzim: boolean;
}

export const toggleZzim = async (productId: number) => {
  try {
    const response = await fetcher.post<{
      success: boolean;
      data: PostZzimResponseDto;
    }>('/zzim', { productId: productId });
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
