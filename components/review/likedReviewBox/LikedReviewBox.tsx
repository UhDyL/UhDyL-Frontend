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
import { Heart } from 'lucide-react-native';
import { useState } from 'react';
import { useToggleZzim } from '@/hooks/mutation/useToggleZzim';

interface Props extends GetMyZzimResponseDto {
  onClick?: () => void;
}

export default function LikedReviewBox({
  productId,
  imageUrl,
  price,
  sellerName,
  title,
  onClick,
}: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const { mutate } = useToggleZzim(productId);
  const toggleLiked = () => {
    mutate(undefined, {
      onSuccess: () => setIsLiked(!isLiked),
    });
  };

  return (
    <Container onPress={onClick}>
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
