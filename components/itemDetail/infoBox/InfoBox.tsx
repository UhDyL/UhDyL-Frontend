import {
  Container,
  DescriptionText,
  GoShopBtn,
  InfoWrapper,
  MarketInfoBox,
  MarketName,
  MarketProfileBox,
  ProfileImage,
  RatingBox,
  RatingValue,
  TitleText,
  ViewWrapper,
} from './infoBox.styled';

import { Star } from 'lucide-react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
  sellerPicture: string;
  sellerName: string;
  sellerRating: string;
  sellerSalesCount: number;
  title: string;
  description: string;
};

export default function InfoBox({
  sellerPicture,
  sellerName,
  sellerRating,
  sellerSalesCount,
  title,
  description,
}: Props) {
  const router = useRouter();
  const formattedRating = Number(sellerRating).toFixed(1);

  return (
    <Container>
      <MarketProfileBox>
        <ViewWrapper>
          <ProfileImage
            source={
              sellerPicture
                ? { uri: sellerPicture }
                : require('../../../assets/images/null_image.png')
            }
          />
          <MarketInfoBox>
            <MarketName>{sellerName}</MarketName>
            <RatingBox>
              <Star size={15} fill='#30DB5B' color='#30DB5B' />
              <RatingValue>{formattedRating}</RatingValue>
            </RatingBox>
          </MarketInfoBox>
        </ViewWrapper>

        <GoShopBtn
          onPress={() =>
            router.push({
              pathname: '/seller/[id]',
              params: {
                id: sellerName,
                sellerPicture,
                formattedRating,
                sellerSalesCount,
              },
            })
          }
        >
          <Text>상점 방문하기</Text>
        </GoShopBtn>
      </MarketProfileBox>

      <InfoWrapper>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </InfoWrapper>
    </Container>
  );
}
