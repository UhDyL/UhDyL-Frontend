import * as SecureStore from 'expo-secure-store';

export async function saveTokens(accessToken?: string, refreshToken?: string) {
  if (accessToken) await SecureStore.setItemAsync('accessToken', accessToken);
  if (refreshToken)
    await SecureStore.setItemAsync('refreshToken', refreshToken);
}

export async function getAccessToken() {
  return SecureStore.getItemAsync('accessToken');
}

export async function getRefreshToken() {
  return SecureStore.getItemAsync('refreshToken');
}

export async function clearTokens() {
  await SecureStore.deleteItemAsync('accessToken');
  await SecureStore.deleteItemAsync('refreshToken');
}
