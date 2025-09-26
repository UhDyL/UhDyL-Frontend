import {
  Container,
  GoogleLoginImg,
  IconContainer,
  ImageContainer,
  KakaoLoginImg,
  TitleImg,
} from './Signin.styles';

import { socialLogin } from '@/services/auth.service';
import { Stack } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import TitleSvg from '../../assets/images/title.svg';

export default function SigninScreen() {
  return (
    <Container>
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
        }}
      />
      <TitleImg>
        <TitleSvg width='100%' />
      </TitleImg>

      <IconContainer>
        <TouchableOpacity onPress={() => socialLogin('kakao')}>
          <KakaoLoginImg
            source={require('../../assets/images/kakao_login.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => socialLogin('google')}>
          <GoogleLoginImg
            source={require('../../assets/images/google_login.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </IconContainer>
      <ImageContainer
        source={require('../../assets/images/main_picture.png')}
      />
    </Container>
  );
}
