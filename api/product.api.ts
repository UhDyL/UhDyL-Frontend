import PageableDataType from '@/types/pageableDataType';
import fetcher from './common/fetcher';

export interface GetProductsResponseDto {
  id: number;
  name: string;
  title: string;
  price: number;
  sellerName: string;
  sellerPicture: string;
  mainImageUrl: string;
  isCompleted: boolean;
}

export const getProductsList = async () => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<GetProductsResponseDto[]>;
    }>('/product');
    return response.data.data.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface GetProductDetailResponseDto {
  id: number;
  name: string;
  title: string;
  price: number;
  description: string;
  sellerName: string;
  sellerPicture: string;
  sellerRating: number;
  sellerSalesCount: number;
  images: string[];
  isCompleted: boolean;
  isZzimed: boolean;
}

export const getProductDetail = async (productId: number) => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: GetProductDetailResponseDto;
    }>(`/product/${productId}`);
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
