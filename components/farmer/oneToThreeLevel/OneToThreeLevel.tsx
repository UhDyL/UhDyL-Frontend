import {
  CircleTextWraaper,
  Container,
  Dot,
  DotBox,
  StyledText,
} from './oneToThreeLevel.styled';

import { useRouter } from 'expo-router';

type Props = {
  level: 1 | 2 | 3;
};

export default function OneTwoThreeLevel({ level }: Props) {
  const router = useRouter();

  return (
    <Container>
      <CircleTextWraaper
        isSelected={level === 1}
        onPress={() => router.push('/new-item/step1')}
      >
        <StyledText isSelected={level === 1}>1</StyledText>
      </CircleTextWraaper>
      <DotBox>
        <Dot />
        <Dot />
        <Dot />
      </DotBox>
      <CircleTextWraaper
        isSelected={level === 2}
        onPress={() => router.push('/new-item/step2')}
      >
        <StyledText isSelected={level === 2}>2</StyledText>
      </CircleTextWraaper>
      <DotBox>
        <Dot />
        <Dot />
        <Dot />
      </DotBox>
      <CircleTextWraaper
        isSelected={level === 3}
        onPress={() => router.push('/new-item/step3')}
      >
        <StyledText isSelected={level === 3}>3</StyledText>
      </CircleTextWraaper>
    </Container>
  );
}
