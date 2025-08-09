import ChattingBar, { ChattingBarProps } from '../chattingBar/ChattingBar';

import { Container } from './chattingList.styled';

type Props = {
  data: ChattingBarProps[];
};

export default function ChattingList({ data }: Props) {
  return (
    <Container>
      {data.map((ele, index) => (
        <ChattingBar key={index} {...ele} />
      ))}
    </Container>
  );
}
