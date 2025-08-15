import {
  Container,
  Description,
  DescriptionBox,
} from './exampleTextBox.styled';

import CustomTextBox from '../textBox/CustomTextBox';
import { typeExamples } from '@/mocks/model_example_response';

type Props = {
  selected: 'friendly' | 'funny' | 'like_seller';
};

export default function ExampleTextBox({ selected }: Props) {
  return (
    <Container>
      <CustomTextBox text={typeExamples[selected]} />
      <DescriptionBox>
        <Description>
          선택하신 어감 스타일에 맞게 작성된 예시문을 나타내 보았어요
        </Description>
        <Description>해당 예시문은 실제 작성문과 관련이 없어요</Description>
      </DescriptionBox>
    </Container>
  );
}
