import {
  Container,
  InputBar,
  InputComponent,
  SearchIcon,
} from './searchBar.styled';

import { useRouter } from 'expo-router';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export default function SearchBar({ value, setValue }: Props) {
  const route = useRouter();
  return (
    <Container>
      <InputBar>
        <InputComponent
          placeholder='찾으시는 못난이를 입력해 보세요.'
          value={value}
          onChangeText={setValue}
        />
        <SearchIcon
          onPress={() =>
            route.push(`/search?query=${encodeURIComponent(value)}`)
          }
        />
      </InputBar>
    </Container>
  );
}
