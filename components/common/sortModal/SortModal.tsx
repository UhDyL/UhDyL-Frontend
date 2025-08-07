import {
  Bar,
  Container,
  OptionBar,
  OptionText,
  StyledCheck,
  TitleText,
} from './sortModal.styled';

type Props = {
  option: 'latest' | 'price';
  setOption: (op: 'latest' | 'price') => void;
};

export default function SortModal({ option, setOption }: Props) {
  return (
    <Container>
      <Bar />
      <TitleText>정렬</TitleText>
      <OptionBar onPress={() => setOption('latest')}>
        <OptionText isActive={option === 'latest'}>최신순</OptionText>
        <StyledCheck isActive={option === 'latest'} />
      </OptionBar>
      <OptionBar onPress={() => setOption('price')}>
        <OptionText isActive={option === 'price'}>가격순</OptionText>
        <StyledCheck isActive={option === 'price'} />
      </OptionBar>
    </Container>
  );
}
