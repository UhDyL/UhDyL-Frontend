import {
  BottomWrapper,
  Container,
  ImageWrapper,
  Page,
  PriceLabel,
  PriceText,
  PriceWrapper,
  SlideImage,
} from './imageSlideBox.styled';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useRef, useState } from 'react';

const { width } = Dimensions.get('window');

type Props = {
  images: string[];
  price: string;
};

export default function ImageSlideBox({ images, price }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentIndex(newIndex);
  };
  return (
    <Container>
      <ImageWrapper
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <SlideImage source={{ uri: item as string }} resizeMode='cover' />
        )}
      />
      <BottomWrapper>
        <PriceWrapper
          source={require('../../../assets/images/itemDetail/price_box.png')}
        >
          <PriceLabel>판매가격</PriceLabel>
          <PriceText>{price}</PriceText>
        </PriceWrapper>
        <Page>
          {currentIndex + 1}/{images.length}
        </Page>
      </BottomWrapper>
    </Container>
  );
}
