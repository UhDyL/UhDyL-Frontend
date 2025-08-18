import type { UserInfoResponseDto } from '@/api/user.api';
import { useUserStore } from './userStore';

const mapRole = (r: 'USER' | 'FARMER'): 'user' | 'farmer' =>
  r.toLowerCase() as 'user' | 'farmer';

export function hydrateUserToStore(u: UserInfoResponseDto) {
  const { setProfileImageUrl, setNickname, setRole, setMode } =
    useUserStore.getState();

  setProfileImageUrl(u.profileImageUrl);
  setNickname(u.nickname);
  setRole(mapRole(u.role));
  setMode(u.mode);
}
