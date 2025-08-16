import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';

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

  return {
    accessToken: qAT || hAT,
    refreshToken: qRT || hRT,
  };
}

async function saveTokens(accessToken?: string, refreshToken?: string) {
  if (accessToken) await SecureStore.setItemAsync('accessToken', accessToken);
  if (refreshToken)
    await SecureStore.setItemAsync('refreshToken', refreshToken);
}

export async function kakaoLogin() {
  const redirectUri = Linking.createURL('auth/callback');
  const url =
    `${process.env.EXPO_PUBLIC_API_URL}/oauth2/authorization/kakao` +
    `?redirect_uri=${encodeURIComponent(redirectUri)}`;

  console.log('Kakao Login URL:', url);
  console.log('Redirect URI (client->app):', redirectUri);

  const res = await WebBrowser.openAuthSessionAsync(url, redirectUri);
  if (res.type === 'success' && res.url) {
    console.log('res.url', res.url);

    const { accessToken, refreshToken } = extractTokensFromUrl(res.url);
    if (accessToken || refreshToken) {
      await saveTokens(accessToken, refreshToken);
      router.push('/nickname');
      return;
    }

    const { queryParams } = Linking.parse(res.url);
    const code = queryParams?.code as string | undefined;
    if (code) {
      const exchangeRes = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/auth/exchange`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, provider: 'kakao', redirectUri }),
        }
      );

      if (exchangeRes.ok) {
        const data = await exchangeRes.json();
        await saveTokens(data.accessToken, data.refreshToken);
        router.push('/nickname');
      } else {
        console.warn('Token exchange failed (kakao):', exchangeRes.status);
      }
    }
  }
}

export async function googleLogin() {
  const redirectUri = Linking.createURL('auth/callback');
  const url =
    `${process.env.EXPO_PUBLIC_API_URL}/oauth2/authorization/google` +
    `?redirect_uri=${encodeURIComponent(redirectUri)}`;

  console.log('Google Login URL:', url);
  console.log('Redirect URI (client->app):', redirectUri);

  const res = await WebBrowser.openAuthSessionAsync(url, redirectUri);
  if (res.type === 'success' && res.url) {
    console.log('res.url', res.url);

    const { accessToken, refreshToken } = extractTokensFromUrl(res.url);
    if (accessToken || refreshToken) {
      await saveTokens(accessToken, refreshToken);
      router.push('/nickname');
      return;
    }

    const { queryParams } = Linking.parse(res.url);
    const code = queryParams?.code as string | undefined;

    if (code) {
      const exchangeRes = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/auth/exchange`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, provider: 'google', redirectUri }),
        }
      );

      if (exchangeRes.ok) {
        const data = await exchangeRes.json();
        await saveTokens(data.accessToken, data.refreshToken);
        router.push('/nickname');
      } else {
        console.warn('Token exchange failed (google):', exchangeRes.status);
      }
    }
  }
}

export async function getAccessToken() {
  return await SecureStore.getItemAsync('accessToken');
}

export async function getRefreshToken() {
  return await SecureStore.getItemAsync('refreshToken');
}

export async function refreshAccessToken() {
  const refreshToken = await SecureStore.getItemAsync('refreshToken');

  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) throw new Error('Refresh failed');

  const data = await res.json();
  await SecureStore.setItemAsync('accessToken', data.accessToken);

  return data.accessToken;
}
