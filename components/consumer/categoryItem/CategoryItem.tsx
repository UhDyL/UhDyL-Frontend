import { Container, Label, StyledImg } from './categoryItem.styled';

import { imgMap } from '@/constants/imgMap';

type Props = {
  imgName: string;
  label: string;
};

export default function CategoryItem({ imgName, label }: Props) {
  return (
    <Container>
      <StyledImg source={imgMap[imgName]} />
      <Label>{label}</Label>
    </Container>
  );
}
