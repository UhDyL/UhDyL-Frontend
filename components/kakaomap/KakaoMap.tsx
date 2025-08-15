import { StyleSheet, View } from 'react-native';

import React from 'react';
import { WebView } from 'react-native-webview';

type KakaoMapProps = {
  latitude?: number;
  longitude?: number;
};

export default function KakaoMap({ latitude, longitude }: KakaoMapProps) {
  const lat = latitude ?? 37.5665; // 기본 좌표(서울시청)
  const lng = longitude ?? 126.978;
  const KAKAO_MAP_JS_KEY = process.env.EXPO_PUBLIC_KAKAO_MAP_JS_KEY;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          html, body { height:100%; margin:0; padding:0; }
          #map { width:100%; height:100%; }
        </style>
        <!-- autoload=false 로드 -->
        <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_JS_KEY}&autoload=false"></script>
      </head>
      <body>
        <div id="map"></div>
        <script>
          kakao.maps.load(function () {
            try {
              var container = document.getElementById('map');
              var options = {
                center: new kakao.maps.LatLng(${lat}, ${lng}),
                level: 3
              };
              var map = new kakao.maps.Map(container, options);
              new kakao.maps.Marker({ position: new kakao.maps.LatLng(${lat}, ${lng}), map: map });
              window.ReactNativeWebView && window.ReactNativeWebView.postMessage('KAKAO_READY');
            } catch (e) {
              window.ReactNativeWebView && window.ReactNativeWebView.postMessage('KAKAO_ERROR:' + e.message);
            }
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{
          html,
          // ★ Kakao 콘솔에 등록한 도메인으로 교체하세요
          baseUrl: 'https://my-app.local',
        }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        mixedContentMode='always'
        onMessage={(e) => console.log('KakaoMap:', e.nativeEvent.data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
});
