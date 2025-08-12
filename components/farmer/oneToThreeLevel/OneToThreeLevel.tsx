import {
  CircleTextWraaper,
  Container,
  Divider,
  StyledText,
} from './oneToThreeLevel.styled';

type Props = {
  level: 1 | 2 | 3;
};

export default function OneTwoThreeLevel({ level }: Props) {
  return (
    <Container>
      <CircleTextWraaper isSelected={level === 1}>
        <StyledText isSelected={level === 1}>1</StyledText>
      </CircleTextWraaper>
      <Divider />
      <CircleTextWraaper isSelected={level === 2}>
        <StyledText isSelected={level === 2}>2</StyledText>
      </CircleTextWraaper>
      <Divider />
      <CircleTextWraaper isSelected={level === 3}>
        <StyledText isSelected={level === 3}>3</StyledText>
      </CircleTextWraaper>
    </Container>
  );
}
