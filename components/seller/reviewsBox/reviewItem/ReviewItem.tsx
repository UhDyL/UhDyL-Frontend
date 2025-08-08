import { Star, UserCircle } from 'lucide-react-native';
import {
  BuyerBox,
  BuyerText,
  Container,
  ContentText,
  DateText,
  DateWrapper,
  InfoWrapper,
  ItemImage,
  Rating,
  RatingAndBuyerWrapper,
  TextArea,
  TitleText,
  TitleWrapper,
} from './reviewItem.styled';

export type ReviewItemProps = {
  name: string;
  rating: number;
  createdAt: Date;
  buyer: string;
  content: string;
};

export default function ReviewItem({
  name,
  rating,
  createdAt,
  buyer,
  content,
}: ReviewItemProps) {
  return (
    <Container>
      <InfoWrapper>
        <ItemImage
          source={require('../../../../assets/images/null_image.png')}
        />
        <TextArea>
          <DateWrapper>
            <DateText>{createdAt.toDateString()}</DateText>
          </DateWrapper>
          <TitleWrapper>
            <TitleText>{name}</TitleText>
          </TitleWrapper>
          <RatingAndBuyerWrapper>
            <Rating>
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <Star key={index} size={16} color='#30DB5B' fill='#30DB5B' />
              ))}
            </Rating>
            <BuyerBox>
              <UserCircle color='#D9D9D9' size={16} />
              <BuyerText>{buyer}</BuyerText>
            </BuyerBox>
          </RatingAndBuyerWrapper>
        </TextArea>
      </InfoWrapper>
      <ContentText>{content}</ContentText>
    </Container>
  );
}
