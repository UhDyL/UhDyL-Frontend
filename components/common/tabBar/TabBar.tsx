import { usePathname, useRouter } from 'expo-router';
import { Home, MessageCircleMore, User } from 'lucide-react-native';
import { useState } from 'react';
import { Container, IconBox, Label } from './tabBar.styled';

export default function TabBar() {
  const route = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState<'home' | 'chatting' | 'profile'>(
    'home'
  );

  const handlePressHomeBtn = () => {
    setSelected('home');
    if (pathname !== '/consumer') {
      setSelected('home');
      route.replace('/consumer');
    }
  };

  const handlePressChattingBtn = () => {
    setSelected('chatting');
    route.push('/chatting');
  };

  const handlePressProfileBtn = () => {
    setSelected('profile');
    route.push('/profile');
  };

  return (
    <Container>
      <IconBox onPress={() => handlePressHomeBtn()}>
        <Home color={selected === 'home' ? '#30DB5B' : '#D9D9D9'} />
        <Label activated={selected === 'home'}>홈</Label>
      </IconBox>
      <IconBox onPress={() => handlePressChattingBtn()}>
        <MessageCircleMore
          color={selected === 'chatting' ? '#30DB5B' : '#D9D9D9'}
        />
        <Label activated={selected === 'chatting'}>채팅</Label>
      </IconBox>
      <IconBox onPress={() => handlePressProfileBtn()}>
        <User color={selected === 'profile' ? '#30DB5B' : '#D9D9D9'} />
        <Label activated={selected === 'profile'}>프로필</Label>
      </IconBox>
    </Container>
  );
}
