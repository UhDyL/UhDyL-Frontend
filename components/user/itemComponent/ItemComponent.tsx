import {
  Container,
  DescriptionBox,
  ImgBox,
  InfoBox,
  Price,
  ReviewBox,
  ReviewItem,
  ReviewText,
  SellerName,
  TitleText,
} from './itemComponent.styled';
import { Heart, Star } from 'lucide-react-native';

import { useRouter } from 'expo-router';

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
  sellerName: string;
  averageStar: number;
  numOfReview: number;
  numOfLiked: number;
};

export default function ItemComponent({
  id,
  imgUrl,
  title,
  price,
  sellerName,
  averageStar,
  numOfLiked,
  numOfReview,
}: Props) {
  const router = useRouter();
  return (
    <Container onPress={() => router.push(`/itemDetail/${id}`)}>
      <ImgBox
        source={
          imgUrl
            ? { uri: imgUrl }
            : require('../../../assets/images/null_image.png')
        }
      />
      <DescriptionBox>
        <InfoBox>
          <SellerName>{sellerName}</SellerName>
          <TitleText>{title}</TitleText>
          <Price>{price.toLocaleString()}원</Price>
          <ReviewBox>
            <ReviewItem>
              <Star size={14} color='#d9d9d9' fill='#d9d9d9' />
              <ReviewText>{`${averageStar}(${numOfReview})`}</ReviewText>
            </ReviewItem>
            <ReviewItem>
              <Heart size={14} color='#d9d9d9' fill='#d9d9d9' />
              <ReviewText>{numOfLiked}</ReviewText>
            </ReviewItem>
          </ReviewBox>
        </InfoBox>
      </DescriptionBox>
    </Container>
  );
}
