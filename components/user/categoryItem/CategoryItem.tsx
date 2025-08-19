import { Container, Label, StyledImg } from './categoryItem.styled';

import { imgMap } from '@/constants/imgMap';

type Props = {
  imgName: string;
  label: string;
  onPress: () => void;
};

export default function CategoryItem({ imgName, label, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <StyledImg source={imgMap[imgName]} />
      <Label>{label}</Label>
    </Container>
  );
}
