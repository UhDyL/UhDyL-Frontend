import { Container, ImageBox, InfoBox, TitleText } from './summaryBox.styled';

import { useUserStore } from '@/store/userStore';
import InfoItemBar from './infoItemBar/InfoItemBar';

type Props = {
  name: string;
  imgUrl: string;
  firstValue: string;
  secondValue: string;
};

export default function SummaryBox({
  name,
  imgUrl,
  firstValue,
  secondValue,
}: Props) {
  const userType = useUserStore((state) => state.mode);

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
        <TitleText>{name}</TitleText>
        <InfoItemBar label='판매 건수' value={firstValue} />
        <InfoItemBar
          label={userType === 'user' ? '평균 별점' : '판매 수익'}
          value={secondValue}
        />
      </InfoBox>
    </Container>
  );
}
