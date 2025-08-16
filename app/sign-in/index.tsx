import {
  Container,
  GoogleLoginImg,
  IconContainer,
  KakaoLoginImg,
  TitleImg,
} from './Signin.styles';
import { googleLogin, kakaoLogin } from '@/api/login.api';

import React from 'react';
import TitleSvg from '../../assets/images/title.svg';
import { TouchableOpacity } from 'react-native';

export default function SigninScreen() {
  return (
    <Container>
      <TitleImg>
        <TitleSvg width='100%' />
      </TitleImg>

      <IconContainer>
        <TouchableOpacity onPress={kakaoLogin}>
          <KakaoLoginImg
            source={require('../../assets/images/kakao_login.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={googleLogin}>
          <GoogleLoginImg
            source={require('../../assets/images/google_login.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
}
