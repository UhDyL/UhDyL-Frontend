import { Container, IconBox, Label } from './tabBar.styled';
import { Home, MessageCircleMore, User } from 'lucide-react-native';
import { usePathname, useRouter } from 'expo-router';

import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

type Props = {
  status: 'home' | 'chatting' | 'profile';
};

export default function TabBar({ status }: Props) {
  const route = useRouter();
  const pathname = usePathname();
  const userType = useUserStore((state) => state.mode);

  const [selected, setSelected] = useState<'home' | 'chatting' | 'profile'>(
    status
  );

  const handlePressHomeBtn = () => {
    setSelected('home');
    if (pathname !== '/user') {
      setSelected('home');
      if (userType === 'farmer') route.replace('/farmer');
      else route.replace('/user');
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
