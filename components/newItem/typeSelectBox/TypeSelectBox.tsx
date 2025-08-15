import TypeBox from '../selectAiType/TypeBox';
import { Container } from './typeSeletBox.styed';

type Props = {
  selected: 'friendly' | 'funny' | 'like_seller';
  setSelect: (selected: 'friendly' | 'funny' | 'like_seller') => void;
};

export function TypeSelectBox({ selected, setSelect }: Props) {
  return (
    <Container>
      <TypeBox
        imageUrl='friendly'
        label='다정하게'
        selected={selected === 'friendly'}
        setSelect={() => setSelect('friendly')}
      />
      <TypeBox
        imageUrl='funny'
        label='유쾌하게'
        selected={selected === 'funny'}
        setSelect={() => setSelect('funny')}
      />
      <TypeBox
        imageUrl='like_seller'
        label='장사꾼스럽게'
        selected={selected === 'like_seller'}
        setSelect={() => setSelect('like_seller')}
      />
    </Container>
  );
}
