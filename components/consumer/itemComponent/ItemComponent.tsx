import {
  Container,
  DescriptionBox,
  ImgBox,
  InfoBox,
  Price,
  SellerImg,
  SellerName,
  TitleText,
} from './itemComponent.styled';

import { useRouter } from 'expo-router';

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
  sellerName: string;
  sellerImage: string;
};

export default function ItemComponent({
  id,
  imgUrl,
  title,
  price,
  sellerName,
  sellerImage,
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
        <SellerImg
          source={
            sellerImage
              ? { uri: sellerImage }
              : require('../../../assets/images/null_image.png')
          }
        />
        <InfoBox>
          <TitleText>{title}</TitleText>
          <Price>{price}</Price>
          <SellerName>{sellerName}</SellerName>
        </InfoBox>
      </DescriptionBox>
    </Container>
  );
}
