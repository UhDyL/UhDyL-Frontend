import { Category } from '@/types/categoryType';
import PageableDataType from '@/types/pageableDataType';
import { WriteFormData } from '@/store/useFormStore';
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

export interface SearchResponseDto {
  id: number;
  title: string;
  price: number;
  sellerName: string;
  sellerPicture: string;
  mainImageUrl: string;
  isCompleted: boolean;
}

export enum SortType {
  PRICE_DESC = 'price,DESC',
  CREATED_AT_DESC = 'createdAt,DESC',
}

export const getSearchedItems = async (
  keyword: string,
  category: Category,
  sort: SortType
) => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<SearchResponseDto[]>;
    }>(`/product/search?keyword=${keyword}&category=${category}&sort=${sort}`);
    return response.data.data.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface GetMySalesInfoResponseDto {
  sellerName: string;
  salesCount: number;
  salesRevenue: number;
  sellerPicture: string;
}

export const getMySalesInfo = async () => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: GetMySalesInfoResponseDto;
    }>('/product/sales-stats');
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface PostAIGenerateResponseDto {
  condition: string;
  pricePerWeight: string;
  categories: string[];
  images: string[];
  price: number;
  tone: string;
}

export const postAIGenerate = async (formData: WriteFormData) => {
  try {
    const response = await fetcher.post<{
      success: boolean;
      data: PostAIGenerateResponseDto;
    }>('/product/ai-generate', formData);
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface GetMyItemsResonseDto {
  id: number;
  title: string;
  price: number;
  sellerName: string;
  sellerPicture: string;
  mainImageUrl: string;
  isCompleted: boolean;
}

export const getMyItems = async () => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: {
        totalCount: number;
        completedCount: number;
        products: PageableDataType<GetMyItemsResonseDto[]>;
      };
    }>('/product/me');
    console.log('data : ', response.data.data.products.pageContents);
    return response.data.data.products.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface PatchItemInfoReqeustDto {
  title?: string;
  description?: string;
  price: number;
}

export const patchItemInfo = async (
  productId: number,
  data: PatchItemInfoReqeustDto
) => {
  try {
    const response = await fetcher.patch<{ success: boolean; data: string }>(
      `/product/${productId}`,
      data
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const patchItemCompleted = async (productId: number) => {
  try {
    const response = await fetcher.patch<{ success: boolean; data: string }>(
      `/product/${productId}/complete`
    );
    return response.data.success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteItem = async (productId: number) => {
  try {
    const response = await fetcher.delete<{ success: boolean; data: string }>(
      `/product/${productId}`
    );
    return response.data.success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
