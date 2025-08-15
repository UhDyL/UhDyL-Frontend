import {
  CheckBox,
  Container,
  ImageBox,
  ImageContainer,
  LabelText,
  Overlay,
} from './typeBox.styled';

import { Check } from 'lucide-react-native';

const images = {
  friendly: require('../../../assets/images/ai-style/friendly.png'),
  funny: require('../../../assets/images/ai-style/funny.png'),
  like_seller: require('../../../assets/images/ai-style/like_seller.png'),
} as const;

type Props = {
  imageUrl: keyof typeof images;
  label: string;
  selected: boolean;
  setSelect: () => void;
};

export default function TypeBox({
  imageUrl,
  label,
  selected,
  setSelect,
}: Props) {
  return (
    <Container onPress={setSelect}>
      <ImageContainer>
        <ImageBox selected={selected} source={images[imageUrl]} />
        <Overlay dimmed={!selected} />
      </ImageContainer>

      <LabelText>{label}</LabelText>
      {selected ? (
        <CheckBox>
          <Check size={15} color='#fff' />
        </CheckBox>
      ) : (
        ''
      )}
    </Container>
  );
}
