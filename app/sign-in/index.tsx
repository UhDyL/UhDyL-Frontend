import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleSvg from '../../assets/images/title.svg';

export default function SigninScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleSvg style={styles.titleImg} />
      <View style={styles.iconContainer}>
        <Link href='/nickname' asChild>
          <TouchableOpacity>
            <Image
              style={styles.kakaoLoginImg}
              source={require('../../assets/images/kakao_login.png')}
            />
          </TouchableOpacity>
        </Link>

        <Link href='/nickname' asChild>
          <TouchableOpacity>
            <Image
              style={styles.googleLoginImg}
              source={require('../../assets/images/google_login.png')}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30DB5B',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 180,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titleImg: {
    width: '80%',
  },
  kakaoLoginImg: {},
  googleLoginImg: {},
});
