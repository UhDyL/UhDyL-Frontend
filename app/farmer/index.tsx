import { Container } from './FarmerMainScreen.styled';
import FeaturesBox from '@/components/farmer/featuresBox/FeaturesBox';
import MyFarm from '@/components/farmer/myFarm/MyFarm';
import { Stack } from 'expo-router';
import SummaryBox from '@/components/seller/summaryBox/SummaryBox';

export default function FarmerMainScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SummaryBox
        imgUrl=''
        name='미누리'
        firstValue='0건'
        secondValue='50,000원'
      />
      <MyFarm />
      <FeaturesBox />
    </Container>
  );
}
