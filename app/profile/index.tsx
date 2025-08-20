import { Container, StyledScrollView } from './profile.styled';

import OnlyTitleHeader from '@/components/common/OnlyTitleHeader/OnlyTitleHeader';
import SelectByTwoBar from '@/components/common/selectByTwoBar/SelectByTwoBar';
import TabBar from '@/components/common/tabBar/TabBar';
import MyProfileSum from '@/components/profile/myProfileSum/MyProfileSum';
import MyRecords from '@/components/profile/myRecords/MyRecords';
import { useGetMyReview } from '@/hooks/query/useGetMyReview';
import { useGetMyZzim } from '@/hooks/query/useGetMyZzim';
import { useUserStore } from '@/store/userStore';
import { useState } from 'react';

export default function ProfileScreen() {
  const [option, setOption] = useState<1 | 2>(1);
  const { data: zzimData } = useGetMyZzim();
  const { data: myReviewData } = useGetMyReview();
  const profileImgUrl = useUserStore((state) => state.profileImageUrl);
  const nickname = useUserStore((state) => state.nickname);

  return (
    <Container>
      <StyledScrollView>
        <OnlyTitleHeader title='프로필' />
        <MyProfileSum name={nickname} profileImgUrl={profileImgUrl} />
        <SelectByTwoBar
          labelOne='찜 내역'
          labelTwo='리뷰 내역'
          selected={option}
          setSelected={setOption}
        />
        <MyRecords
          selected={option}
          likedData={zzimData ?? []}
          reviewData={myReviewData ?? []}
        />
      </StyledScrollView>
      <TabBar status='profile' />
    </Container>
  );
}
