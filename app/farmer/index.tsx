import FeaturesBox from '@/components/farmer/featuresBox/FeaturesBox';
import MyFarm from '@/components/farmer/myFarm/MyFarm';
import SummaryBox from '@/components/seller/summaryBox/SummaryBox';
import { useGetMySalesInfo } from '@/hooks/query/useGetMySalesInfo';
import { Stack } from 'expo-router';
import { Container } from './FarmerMainScreen.styled';

export default function FarmerMainScreen() {
  const { data } = useGetMySalesInfo();

  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SummaryBox
        imgUrl={data?.sellerPicture ?? ''}
        name={data?.sellerName ?? ''}
        firstValue={`${data?.salesCount}건`}
        secondValue={`${data?.salesRevenue}원`}
      />
      <MyFarm />
      <FeaturesBox />
    </Container>
  );
}
