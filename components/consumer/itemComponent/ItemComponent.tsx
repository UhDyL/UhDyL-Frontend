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

type Props = {
  imgUrl: string;
  title: string;
  price: string;
  sellerName: string;
  sellerImage: string;
};

export default function ItemComponent({
  imgUrl,
  title,
  price,
  sellerName,
  sellerImage,
}: Props) {
  return (
    <Container>
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
