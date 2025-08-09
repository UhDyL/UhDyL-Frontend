import { Container, ImageBox, StyledName } from './opponentInfo.styled';

type Props = {
  imgUrl: string;
  name: string;
};

export default function OpponentInfo({ imgUrl, name }: Props) {
  return (
    <Container>
      <ImageBox
        source={
          imgUrl
            ? { uri: imgUrl }
            : require('../../../assets/images/null_image.png')
        }
      />
      <StyledName>{name}</StyledName>
    </Container>
  );
}
