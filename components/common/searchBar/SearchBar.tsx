import {
  Container,
  InputBar,
  InputComponent,
  SearchIcon,
} from './searchBar.styled';

type Props = {
  value: string;
  setValue: (value: string) => void;
  onPress: () => void;
};

export default function SearchBar({ value, setValue, onPress }: Props) {
  return (
    <Container>
      <InputBar>
        <InputComponent
          placeholder='찾으시는 못난이를 입력해 보세요.'
          value={value}
          onChangeText={setValue}
        />
        <SearchIcon onPress={onPress} />
      </InputBar>
    </Container>
  );
}
