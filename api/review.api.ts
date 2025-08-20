import PageableDataType from '@/types/pageableDataType';
import fetcher from './common/fetcher';

export interface ReviewType {
  Id: number;
  content: string;
  rating: number;
  nickName: string;
  imageUrl: string;
  title: string;
  createdAt: Date;
}

export const getReviewByNickname = async (nickname: string) => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<ReviewType[]>;
    }>(`/review/${encodeURIComponent(nickname)}`);
    return response.data.data.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMyReviewList = async () => {
  try {
    const response = await fetcher.get<{
      success: boolean;
      data: PageableDataType<ReviewType[]>;
    }>('/review/me');
    console.log('내 리뷰 데이터 : ', response.data.data.pageContents);
    return response.data.data.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface PostReviewRequestDto {
  content: string;
  rating: number;
  imageUrl: string;
  publicId: string;
  productId: number;
}

export const postReview = async ({
  content,
  rating,
  imageUrl,
  publicId,
  productId,
}: PostReviewRequestDto) => {
  try {
    const repsonse = await fetcher.post<{ success: boolean; data: string }>(
      '/review',
      {
        content,
        rating,
        imageUrl,
        publicId,
        productId,
      }
    );
    return repsonse.data.success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
