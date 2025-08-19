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
    console.log('api 파일 결과 : ', response.data.data.pageContents);
    return response.data.data.pageContents;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
