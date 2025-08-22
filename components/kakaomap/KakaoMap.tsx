import { Image, StyleSheet, View } from 'react-native';

import React from 'react';
import { WebView } from 'react-native-webview';

type KakaoMapProps = {
  latitude?: number;
  longitude?: number;
  onLocationSelect?: (lat: number, lng: number) => void;
};

export default function KakaoMap({
  latitude,
  longitude,
  onLocationSelect,
}: KakaoMapProps) {
  const lat = latitude ?? 37.5665;
  const lng = longitude ?? 126.978;
  const KAKAO_MAP_JS_KEY = process.env.EXPO_PUBLIC_KAKAO_MAP_JS_KEY;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          html, body { height:100%; margin:0; padding:0; overflow:hidden; }
          #map { width:100%; height:100%; }
        </style>
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

              // idle 이벤트: 사용자가 지도를 이동/확대한 후 멈췄을 때 실행
              kakao.maps.event.addListener(map, 'idle', function () {
                var center = map.getCenter();
                var lat = center.getLat();
                var lng = center.getLng();
                window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'LOCATION_SELECTED',
                  lat: lat,
                  lng: lng
                }));
              });

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
        source={{ html }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        mixedContentMode='always'
        onMessage={(e) => {
          try {
            const data = JSON.parse(e.nativeEvent.data);
            if (data.type === 'LOCATION_SELECTED') {
              onLocationSelect && onLocationSelect(data.lat, data.lng);
            } else {
              console.log('KakaoMap:', data);
            }
          } catch {
            console.log('KakaoMap:', e.nativeEvent.data);
          }
        }}
      />
      <Image
        source={require('@/assets/images/location_marker.png')}
        style={styles.centerMarker}
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
  centerMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 32,
    height: 32,
    marginLeft: -16,
    marginTop: -32,
  },
});
