import { Container, ItemsContainer } from './categoryItemWrapper.styled';

import ItemComponent from '../itemComponent/ItemComponent';

const dummyData = [
  {
    id: 1,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '신선한 사과',
    price: '₩3,000',
    sellerName: '김과일',
    sellerImage: '',
  },
  {
    id: 2,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '유기농 양배추',
    price: '₩2,500',
    sellerName: '이채소',
    sellerImage: '',
  },
  {
    id: 3,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '햇감자 3kg',
    price: '₩4,200',
    sellerName: '박농부',
    sellerImage: '',
  },
  {
    id: 4,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '찹쌀 5kg',
    price: '₩11,000',
    sellerName: '정미소',
    sellerImage: '',
  },
  {
    id: 5,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '흠집토마토 1kg',
    price: '₩1,800',
    sellerName: '최농장',
    sellerImage: '',
  },
  {
    id: 6,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '잼용 딸기 500g',
    price: '₩2,200',
    sellerName: '윤과수원',
    sellerImage: '',
  },
  {
    id: 7,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '상추 200g',
    price: '₩1,000',
    sellerName: '장채소',
    sellerImage: '',
  },
  {
    id: 8,
    imgUrl:
      'https://oasisprodproduct.edge.naverncp.com/8690/detail/0_d008c40d-585e-4c69-9230-2f44cb774cb1.jpeg',
    title: '선물용 감귤 세트',
    price: '₩15,000',
    sellerName: '오선물',
    sellerImage: '',
  },
];

export default function CategoryItemWrapper() {
  return (
    <Container>
      <ItemsContainer>
        {dummyData.map((data, index) => (
          <ItemComponent
            id={data.id}
            key={index}
            imgUrl={data.imgUrl}
            price={data.price}
            sellerImage={data.sellerImage}
            sellerName={data.sellerName}
            title={data.title}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}
