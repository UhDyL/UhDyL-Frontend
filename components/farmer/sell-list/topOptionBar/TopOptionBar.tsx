import { useState } from 'react';
import OptionElement from '../optionElement/OptionElement';
import { Container } from './topOptionBar.styled';

export default function TopOptionBar() {
  const [option, setOption] = useState<'numOfSells' | 'numOfComplete'>(
    'numOfSells'
  );

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
