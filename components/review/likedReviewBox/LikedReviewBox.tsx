import {
  Container,
  ImageBox,
  InfoBox,
  ItemNameText,
  LeftSection,
  LikedWrapper,
  PriceText,
  SellerNameText,
} from './likedReviewBox.styled';

import { Heart } from 'lucide-react-native';

type Props = {
  sellerImgUrl: string;
  itemName: string;
  price: string;
  sellerName: string;
  isLiked: boolean;
  toggleLiked: () => void;
};

export default function LikedReviewBox({
  sellerImgUrl,
  itemName,
  price,
  sellerName,
  isLiked,
  toggleLiked,
}: Props) {
  return (
    <Container>
      <LeftSection>
        <ImageBox
          source={
            sellerImgUrl
              ? { uri: sellerImgUrl }
              : require('../../../assets/images/null_image.png')
          }
        />
        <InfoBox>
          <ItemNameText>{itemName}</ItemNameText>
          <PriceText>{price}</PriceText>
          <SellerNameText>{sellerName}</SellerNameText>
        </InfoBox>
      </LeftSection>

      <LikedWrapper isLiked={isLiked} onPress={() => toggleLiked()}>
        <Heart size={28} color='none' fill='#fff' />
      </LikedWrapper>
    </Container>
  );
}
