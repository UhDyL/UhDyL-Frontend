import { Container, ImageContainer, XWrapper } from './photoAdded.styled';

import { X } from 'lucide-react-native';

type Props = {
  photoUrl: string;
  onDeletePhoto: () => void;
};

export default function PhotoAdded({ photoUrl, onDeletePhoto }: Props) {
  return (
    <Container>
      <ImageContainer source={{ uri: photoUrl }} />
      <XWrapper onPress={() => onDeletePhoto()}>
        <X style={{ padding: 10 }} color='#fff' size={10} />
      </XWrapper>
    </Container>
  );
}
