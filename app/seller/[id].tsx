import { Container, SummaryArea } from './seller.styled';

import SummaryBox from '@/components/seller/summaryBox/SummaryBox';
import TopHeader from '@/components/seller/topHeader/TopHeader';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function SellerScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <TopHeader />
      <SummaryArea>
        <SummaryBox imgUrl='' />
      </SummaryArea>
      <Text>{id}</Text>
    </Container>
  );
}
