import { Container, DesctriptionText, TitleText } from './addRating.styled';

import { Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

type Props = {
  rating: number;
  setRating: (rating: number) => void;
};

export default function AddRating({ rating, setRating }: Props) {
  return (
    <Container>
      <TitleText>별점을 매겨 보세요</TitleText>
      <StarRating
        rating={rating}
        onChange={(val: number) => setRating(val)}
        enableHalfStar
        starStyle={{ marginHorizontal: 2 }}
        starSize={40}
        StarIconComponent={({ type, size }) => (
          <Image
            source={
              type === 'half'
                ? require('../../../assets/images/review/half-star-image.png')
                : type === 'full'
                ? require('../../../assets/images/review/full-star-image.png')
                : require('../../../assets/images/review/empty-star-image.png')
            }
            style={{ width: size, height: size }}
            resizeMode='contain'
          />
        )}
      />
      <DesctriptionText>별을 선택하세요</DesctriptionText>
    </Container>
  );
}
