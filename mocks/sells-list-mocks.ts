type Props = {
  itemImg: string;
  itemName: string;
  price: string;
  farmerName: string;
  isCompleted: boolean;
};

export const sellsDummyData: Props[] = [
  {
    itemImg: '',
    itemName: '유기농 사과 5kg',
    price: '25000',
    farmerName: '김철수',
    isCompleted: true,
  },
  {
    itemImg: '',
    itemName: '참외 3kg',
    price: '18000',
    farmerName: '박영희',
    isCompleted: false,
  },
  {
    itemImg: '',
    itemName: '감자 10kg',
    price: '30000',
    farmerName: '이민수',
    isCompleted: true,
  },
  {
    itemImg: '',
    itemName: '방울토마토 2kg',
    price: '15000',
    farmerName: '최지훈',
    isCompleted: false,
  },
  {
    itemImg: '',
    itemName: '시금치 1kg',
    price: '8000',
    farmerName: '정하늘',
    isCompleted: true,
  },
];
