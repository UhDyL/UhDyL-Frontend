import {
  Container,
  GoogleLoginImg,
  IconContainer,
  KakaoLoginImg,
  TitleImg,
} from './Signin.styles';

import React from 'react';
import TitleSvg from '../../assets/images/title.svg';
import { TouchableOpacity } from 'react-native';
import { socialLogin } from '@/services/auth.service';

export default function SigninScreen() {
  return (
    <Container>
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
    </Container>
  );
}
