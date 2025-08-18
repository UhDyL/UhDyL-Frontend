import fetcher from './common/fetcher';

export async function exchangeCodeForToken(
  provider: 'kakao' | 'google',
  code: string,
  redirectUri: string
) {
  const res = await fetcher.post<{ accessToken: string; refreshToken: string }>(
    '/auth/exchange',
    {
      code,
      provider,
      redirectUri,
    }
  );
  return res.data;
}

export async function refreshTokenRequest(refreshToken: string) {
  const res = await fetcher.post<{ accessToken: string }>('/auth/refresh', {
    refreshToken,
  });
  return res.data;
}
