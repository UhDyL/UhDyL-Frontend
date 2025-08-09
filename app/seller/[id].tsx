import { Container, SummaryArea } from './seller.styled';

import { ReviewItemProps } from '@/components/seller/reviewsBox/reviewItem/ReviewItem';
import ReviewsBox from '@/components/seller/reviewsBox/ReviewsBox';
import { ScrollView } from 'react-native';
import SummaryBox from '@/components/seller/summaryBox/SummaryBox';
import TabBar from '@/components/common/tabBar/TabBar';
import TopHeader from '@/components/seller/topHeader/TopHeader';
import { useLocalSearchParams } from 'expo-router';

const dummyReviews: ReviewItemProps[] = [
  {
    name: '토마토',
    rating: 4.5,
    createdAt: new Date('2024-07-20'),
    buyer: 'cheolsu123',
    content:
      '상품이 전반적으로 만족스러웠어요. 포장도 깔끔하고 배송도 빨랐습니다.',
  },
  {
    name: '당근',
    rating: 5.0,
    createdAt: new Date('2024-08-01'),
    buyer: 'younghee88',
    content: '진짜 너무 좋아요! 친구한테도 추천했어요 :)',
  },
  {
    name: '양파즙',
    rating: 3.0,
    createdAt: new Date('2024-08-04'),
    buyer: 'minjun_park',
    content: '보통이에요. 생각보다 크기가 작아서 아쉬웠습니다.',
  },
  {
    name: '김치국',
    rating: 4.0,
    createdAt: new Date('2024-08-06'),
    buyer: 'seoyeonchoi',
    content: '가성비는 좋아요. 약간의 흠집이 있었지만 사용할 만합니다.',
  },
];

export default function SellerScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <ScrollView>
        <Container>
          <TopHeader />
          <SummaryArea>
            <SummaryBox imgUrl='' />
          </SummaryArea>
          <ReviewsBox data={dummyReviews} />
        </Container>
      </ScrollView>
      <TabBar status='home' />
    </>
  );
}
