import { Container, ImageBox, InfoBox, TitleText } from './summaryBox.styled';

import InfoItemBar from './infoItemBar/InfoItemBar';

type Props = {
  imgUrl: string;
};

export default function SummaryBox({ imgUrl }: Props) {
  return (
    <Container>
      <ImageBox
        source={
          imgUrl
            ? { uri: imgUrl }
            : require('../../../assets/images/null_image.png')
        }
      />
      <InfoBox>
        <TitleText>홍길동</TitleText>
        <InfoItemBar label='판매 건수' value='0개' />
        <InfoItemBar label='평균 별점' value='5점' />
      </InfoBox>
    </Container>
  );
}
