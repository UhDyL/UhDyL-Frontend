import { LikedReviewBoxProps } from '@/types/review';
import { ReviewItemProps } from '@/components/seller/reviewsBox/reviewItem/ReviewItem';

export const myProfileDummyReviews: ReviewItemProps[] = [
  {
    name: '달콤 복숭아',
    rating: 5,
    createdAt: new Date('2025-08-01T14:23:00'),
    buyer: '김철수',
    content:
      '복숭아가 정말 달고 신선했어요! 배송도 빠르고 포장도 깔끔했습니다.',
  },
  {
    name: '유기농 감자',
    rating: 4,
    createdAt: new Date('2025-08-02T09:12:00'),
    buyer: '이영희',
    content: '감자가 크고 품질이 좋았지만, 일부가 조금 상해 있었어요.',
  },
  {
    name: '산지 직송 토마토',
    rating: 5,
    createdAt: new Date('2025-08-03T18:45:00'),
    buyer: '박민수',
    content: '토마토가 너무 싱싱하고 당도가 높아요. 재구매 의사 100%입니다!',
  },
  {
    name: '아삭 배추',
    rating: 3,
    createdAt: new Date('2025-08-04T11:30:00'),
    buyer: '정하나',
    content: '배추는 괜찮았는데 크기가 생각보다 작았습니다.',
  },
  {
    name: '고당도 사과',
    rating: 5,
    createdAt: new Date('2025-08-05T16:10:00'),
    buyer: '최성훈',
    content: '사과가 아삭하고 정말 맛있어요. 다음에 또 주문하겠습니다.',
  },
];

export const dummyLikedReviewData: LikedReviewBoxProps[] = [
  {
    sellerImgUrl: '',
    itemName: '복숭아 5kg',
    price: '₩ 25,000',
    sellerName: '복복자',
    isLiked: false,
    toggleLiked: () => console.log('복복자 좋아요 토글'),
  },
  {
    sellerImgUrl: '',
    itemName: '감자 10kg',
    price: '₩ 18,000',
    sellerName: '감감자',
    isLiked: true,
    toggleLiked: () => console.log('감감자 좋아요 토글'),
  },
  {
    sellerImgUrl: '',
    itemName: '방울토마토 3kg',
    price: '₩ 15,000',
    sellerName: '토토마',
    isLiked: false,
    toggleLiked: () => console.log('토토마 좋아요 토글'),
  },
  {
    sellerImgUrl: '',
    itemName: '사과 4kg',
    price: '₩ 20,000',
    sellerName: '사사과',
    isLiked: true,
    toggleLiked: () => console.log('사사과 좋아요 토글'),
  },
  {
    sellerImgUrl: '',
    itemName: '아보카도 1kg',
    price: '₩ 12,000',
    sellerName: '아아보',
    isLiked: false,
    toggleLiked: () => console.log('아아보 좋아요 토글'),
  },
];
