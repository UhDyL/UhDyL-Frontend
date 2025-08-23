import { Container } from './topOptionBar.styled';
import OptionElement from '../optionElement/OptionElement';

type Props = {
  option: 'numOfSells' | 'numOfComplete';
  setOption: (option: 'numOfSells' | 'numOfComplete') => void;
};

export default function TopOptionBar({ option, setOption }: Props) {
  return (
    <Container>
      <OptionElement
        label='총 판매 개수'
        value='5개'
        option='numOfSells'
        setOption={setOption}
        selected={option === 'numOfSells'}
      />
      <OptionElement
        label='거래 완료 개수'
        value='0개'
        option='numOfComplete'
        setOption={setOption}
        selected={option === 'numOfComplete'}
      />
    </Container>
  );
}
