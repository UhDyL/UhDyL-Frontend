import { myProfileDummyReviews } from '@/mocks/dummy';
import { Container, StyledScrollView } from './profile.styled';

import OnlyTitleHeader from '@/components/common/OnlyTitleHeader/OnlyTitleHeader';
import SelectByTwoBar from '@/components/common/selectByTwoBar/SelectByTwoBar';
import TabBar from '@/components/common/tabBar/TabBar';
import MyProfileSum from '@/components/profile/myProfileSum/MyProfileSum';
import MyRecords from '@/components/profile/myRecords/MyRecords';
import { useGetMyZzim } from '@/hooks/query/useGetMyZzim';
import { useState } from 'react';

export default function ProfileScreen() {
  const [option, setOption] = useState<1 | 2>(1);
  const { data: zzimData } = useGetMyZzim();

  return (
    <Container>
      <StyledScrollView>
        <OnlyTitleHeader title='프로필' />
        <MyProfileSum userId='idid' name='미누리' profileImgUrl='' />
        <SelectByTwoBar
          labelOne='찜 내역'
          labelTwo='리뷰 내역'
          selected={option}
          setSelected={setOption}
        />
        <MyRecords
          selected={option}
          likedData={zzimData ?? []}
          reviewData={myProfileDummyReviews}
        />
      </StyledScrollView>
      <TabBar status='profile' />
    </Container>
  );
}
