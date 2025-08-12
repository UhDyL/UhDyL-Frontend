import { Container, Overlay, OverlayText } from './overlayImage.styled';

type Props = {
  isCompledted: boolean;
  source: any;
};

export default function OverlayImage({ isCompledted, source }: Props) {
  return (
    <Container>
      {isCompledted && (
        <Overlay>
          <OverlayText>거래 완료</OverlayText>
        </Overlay>
      )}
    </Container>
  );
}
