import FeaturesBox from '@/components/farmer/featuresBox/FeaturesBox';
import MyFarm from '@/components/farmer/myFarm/MyFarm';
import SummaryBox from '@/components/seller/summaryBox/SummaryBox';
import { Stack } from 'expo-router';
import { Container } from './FarmerMainScreen.styled';

export default function FarmerMainScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: '어글리 딜리셔스' }} />
      <SummaryBox
        imgUrl=''
        name='미누리'
        userType='farmer'
        firstValue='0건'
        secondValue='50,000원'
      />
      <MyFarm />
      <FeaturesBox />
    </Container>
  );
}
