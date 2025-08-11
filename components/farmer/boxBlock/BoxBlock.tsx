import { Container, SubText, TitleText } from './boxblock.styled';

type Props = {
  size: 'normal' | 'big';
  color?: string;
  titleText: string;
  subText?: string;
  onPress: () => void;
};

export default function BoxBlock({
  size,
  color,
  titleText,
  subText,
  onPress,
}: Props) {
  return (
    <Container color={color} size={size} onPress={onPress}>
      <TitleText size={size}>{titleText}</TitleText>
      {subText && <SubText size={size}>{subText}</SubText>}
    </Container>
  );
}
