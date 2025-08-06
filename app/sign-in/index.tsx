import {
  Container,
  GoogleLoginImg,
  IconContainer,
  KakaoLoginImg,
  TitleImg,
} from './Signin.styles';

import { Link } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import TitleSvg from '../../assets/images/title.svg';

export default function SigninScreen() {
  return (
    <Container>
      <TitleImg>
        <TitleSvg width='100%' />
      </TitleImg>

      <IconContainer>
        <Link href='/nickname' asChild>
          <TouchableOpacity>
            <KakaoLoginImg
              source={require('../../assets/images/kakao_login.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </Link>

        <Link href='/nickname' asChild>
          <TouchableOpacity>
            <GoogleLoginImg
              source={require('../../assets/images/google_login.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </Link>
      </IconContainer>
    </Container>
  );
}
