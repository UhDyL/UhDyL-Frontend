import {
  LoadingContainer,
  LoadingImage,
  LoadingMainText,
  LoadingSubText,
} from './newItem.styled';

import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoadingScreen() {
  const router = useRouter();

  return (
    <LoadingContainer>
      <LoadingImage source={require('../../assets/images/loading_img.png')} />
      <LoadingMainText>AI가 작성 중이에요!</LoadingMainText>
      <TouchableOpacity onPress={() => router.push('/new-item/result')}>
        <LoadingSubText>조금만 기다려 주세요!</LoadingSubText>
      </TouchableOpacity>
    </LoadingContainer>
  );
}
