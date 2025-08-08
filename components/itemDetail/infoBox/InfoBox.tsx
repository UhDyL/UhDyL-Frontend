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

type Props = {
  imgUrl: string;
  marketName: string;
  rating: string;
  title: string;
  description: string;
};

export default function InfoBox({
  imgUrl,
  marketName,
  rating,
  title,
  description,
}: Props) {
  return (
    <Container>
      <MarketProfileBox>
        <ViewWrapper>
          <ProfileImage
            source={
              imgUrl
                ? { uri: imgUrl }
                : require('../../../assets/images/null_image.png')
            }
          />
          <MarketInfoBox>
            <MarketName>{marketName}</MarketName>
            <RatingBox>
              <Star size={15} fill='#30DB5B' color='#30DB5B' />
              <RatingValue>{rating}</RatingValue>
            </RatingBox>
          </MarketInfoBox>
        </ViewWrapper>

        <GoShopBtn>
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
