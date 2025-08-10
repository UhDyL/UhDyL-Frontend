import { Container, SubText, TitleText } from './boxblock.styled';

type Props = {
  size: 'normal' | 'big';
  color?: string;
  titleText: string;
  subText?: string;
};

export default function BoxBlock({ size, color, titleText, subText }: Props) {
  return (
    <Container color={color} size={size}>
      <TitleText size={size}>{titleText}</TitleText>
      {subText && <SubText size={size}>{subText}</SubText>}
    </Container>
  );
}
