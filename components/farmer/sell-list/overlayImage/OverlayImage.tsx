import { Container, Overlay, OverlayText } from './overlayImage.styled';

import { Image } from 'react-native';

type Props = {
  isCompleted: boolean;
  source: string;
};

export default function OverlayImage({ isCompleted, source }: Props) {
  return (
    <Container>
      <Image
        source={{ uri: source }}
        style={{ width: '100%', height: '100%' }}
        resizeMode='cover'
      />
      {isCompleted && (
        <Overlay>
          <OverlayText>거래 완료</OverlayText>
        </Overlay>
      )}
    </Container>
  );
}
