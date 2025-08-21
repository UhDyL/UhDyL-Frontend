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

import { GetMyZzimResponseDto } from '@/api/zzim.api';
import { useToggleZzim } from '@/hooks/mutation/useToggleZzim';
import { Heart } from 'lucide-react-native';
import { useState } from 'react';

export default function LikedReviewBox({
  zzimid,
  productId,
  imageUrl,
  price,
  sellerName,
  title,
}: GetMyZzimResponseDto) {
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const { mutate } = useToggleZzim(productId);
  const toggleLiked = () => {
    mutate(undefined, {
      onSuccess: () => setIsLiked(!isLiked),
    });
  };

  return (
    <Container>
      <LeftSection>
        <ImageBox
          source={
            imageUrl
              ? { uri: imageUrl }
              : require('../../../assets/images/null_image.png')
          }
        />
        <InfoBox>
          <ItemNameText>{title}</ItemNameText>
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
