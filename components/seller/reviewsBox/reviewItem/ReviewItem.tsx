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

import { ReviewType } from '@/api/review.api';

export default function ReviewItem({
  Id,
  content,
  createdAt,
  imageUrl,
  nickName,
  rating,
  title,
}: ReviewType) {
  const reTypeDate = new Date(createdAt);

  return (
    <Container>
      <InfoWrapper>
        <ItemImage
          source={
            imageUrl
              ? imageUrl
              : require('../../../../assets/images/null_image.png')
          }
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
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  color='#30DB5B'
                  fill={index < Math.floor(rating) ? '#30DB5B' : 'none'}
                />
              ))}
            </Rating>
            <BuyerBox>
              <UserCircle color='#D9D9D9' size={16} />
              <BuyerText>{nickName}</BuyerText>
            </BuyerBox>
          </RatingAndBuyerWrapper>
        </TextArea>
      </InfoWrapper>
      <ContentText>{content}</ContentText>
    </Container>
  );
}
