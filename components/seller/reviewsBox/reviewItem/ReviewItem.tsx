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
import { Star, UserCircle } from 'lucide-react-native';

export type ReviewItemProps = {
  title: string;
  rating: number;
  createdAt: Date;
  nickname: string;
  content: string;
};

export default function ReviewItem({
  title,
  rating,
  createdAt,
  nickname,
  content,
}: ReviewItemProps) {
  const reTypeDate = new Date(createdAt);

  return (
    <Container>
      <InfoWrapper>
        <ItemImage
          source={require('../../../../assets/images/null_image.png')}
        />
        <TextArea>
          <DateWrapper>
            <DateText>{`${reTypeDate.getMonth()}월 ${reTypeDate.getDate()}일`}</DateText>
          </DateWrapper>
          <TitleWrapper>
            <TitleText>{title}</TitleText>
          </TitleWrapper>
          <RatingAndBuyerWrapper>
            <Rating>
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <Star key={index} size={16} color='#30DB5B' fill='#30DB5B' />
              ))}
            </Rating>
            <BuyerBox>
              <UserCircle color='#D9D9D9' size={16} />
              <BuyerText>{nickname}</BuyerText>
            </BuyerBox>
          </RatingAndBuyerWrapper>
        </TextArea>
      </InfoWrapper>
      <ContentText>{content}</ContentText>
    </Container>
  );
}
