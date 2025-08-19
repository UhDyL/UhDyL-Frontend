import { Container, SummaryArea } from './seller.styled';
import { ScrollView, Text } from 'react-native';

import ReviewsBox from '@/components/seller/reviewsBox/ReviewsBox';
import SummaryBox from '@/components/seller/summaryBox/SummaryBox';
import TabBar from '@/components/common/tabBar/TabBar';
import TopHeader from '@/components/seller/topHeader/TopHeader';
import { useGetReviewByNickname } from '@/hooks/query/useGetReviewByNickname';
import { useLocalSearchParams } from 'expo-router';

export default function SellerScreen() {
  const { id, sellerPicture, sellerRating } = useLocalSearchParams();

  const sellerName = Array.isArray(id) ? id[0] : id ?? '';
  const picture = Array.isArray(sellerPicture)
    ? sellerPicture[0]
    : sellerPicture ?? '';
  const rating = Array.isArray(sellerRating)
    ? sellerRating[0]
    : sellerRating ?? '';
  const { data, isLoading, error } = useGetReviewByNickname(sellerName);

  if (isLoading) return <Text>로딩 중...</Text>;
  if (error) return <Text>에러 발생</Text>;
  if (!data) return <Text>데이터 없음</Text>;

  return (
    <>
      <ScrollView>
        <Container>
          <TopHeader />
          <SummaryArea>
            <SummaryBox
              imgUrl={picture}
              firstValue='0개'
              name={sellerName}
              secondValue={rating}
            />
          </SummaryArea>
          <ReviewsBox data={data ?? []} />
        </Container>
      </ScrollView>
      <TabBar status='home' />
    </>
  );
}
