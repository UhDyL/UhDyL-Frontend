import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import { exchangeCodeForToken, refreshTokenRequest } from '@/api/auth.api';
import { getRefreshToken, saveTokens } from './token.service';

import { getUserInfo } from '@/api/user.api';
import { hydrateUserToStore } from '@/store/hydrateUser';
import { router } from 'expo-router';

function extractTokensFromUrl(url: string) {
  const { queryParams } = Linking.parse(url);
  const qAT =
    (queryParams?.accessToken as string) ||
    (queryParams?.access_token as string);
  const qRT =
    (queryParams?.refreshToken as string) ||
    (queryParams?.refresh_token as string);

  let hAT: string | undefined;
  let hRT: string | undefined;
  const hashIdx = url.indexOf('#');
  if (hashIdx >= 0) {
    const hash = url.slice(hashIdx + 1);
    const params = new URLSearchParams(hash);
    hAT = params.get('accessToken') ?? params.get('access_token') ?? undefined;
    hRT =
      params.get('refreshToken') ?? params.get('refresh_token') ?? undefined;
  }

  return { accessToken: qAT || hAT, refreshToken: qRT || hRT };
}

export async function socialLogin(provider: 'kakao' | 'google') {
  const redirectUri = Linking.createURL('auth/callback');
  const url =
    `${process.env.EXPO_PUBLIC_API_URL}/oauth2/authorization/${provider}` +
    `?redirect_uri=${encodeURIComponent(redirectUri)}`;

  const res = await WebBrowser.openAuthSessionAsync(url, redirectUri);
  if (res.type === 'success' && res.url) {
    const { accessToken, refreshToken } = extractTokensFromUrl(res.url);
    if (accessToken || refreshToken) {
      await saveTokens(accessToken, refreshToken);
      await prefetchAndHydrateUser();
      router.push('/nickname');
      return;
    }

    const { queryParams } = Linking.parse(res.url);
    const code = queryParams?.code as string | undefined;
    if (code) {
      const data = await exchangeCodeForToken(provider, code, redirectUri);
      await saveTokens(data.accessToken, data.refreshToken);
      await prefetchAndHydrateUser();
      router.push('/nickname');
    }
  }
}

export async function refreshAccessToken() {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) throw new Error('No refresh token');

  const data = await refreshTokenRequest(refreshToken);
  await saveTokens(data.accessToken);
  return data.accessToken;
}

async function prefetchAndHydrateUser() {
  try {
    const user = await getUserInfo();
    hydrateUserToStore(user);
  } catch (e) {
    console.warn('prefetch user failed:', e);
  }
}
