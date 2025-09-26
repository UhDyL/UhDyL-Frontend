import {
  Container,
  ImageBox,
  SubText,
  TextBox,
  TextWrapper,
  TitleText,
} from './boxblock.styled';

import { ChevronRight } from 'lucide-react-native';

type Props = {
  size: 'normal' | 'big' | 'long';
  titleText: string;
  subText?: string;
  imageUrl: number;
  onPress: () => void;
};

export default function BoxBlock({
  size,
  titleText,
  subText,
  onPress,
  imageUrl,
}: Props) {
  const titleLines = titleText.split('\n');

  return (
    <Container size={size} onPress={onPress}>
      <TextBox>
        <TextWrapper>
          {titleLines.map((line, index) => (
            <TitleText key={index} size={size}>
              {line}
            </TitleText>
          ))}
        </TextWrapper>
        <ChevronRight size={15} color='#000000' />
      </TextBox>

      {subText && <SubText size={size}>{subText}</SubText>}
      <ImageBox source={imageUrl} size={size} />
    </Container>
  );
}
