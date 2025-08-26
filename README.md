# UhDyL Frontend

**UhDyL Frontend**는 React Native와 Expo Router 기반으로 제작된 모바일 애플리케이션입니다.
소비자(User)와 판매자(Farmer)가 연결되어 못난이 농산물 거래, 채팅, 리뷰를 원활하게 진행할 수 있도록 개발되었습니다.

---

## 📸 Screenshots

앱의 주요 화면 예시입니다.
(아래 부분에 실행 화면 캡처나 GIF를 넣어주세요.)
<img width="1027" height="612" alt="image" src="https://github.com/user-attachments/assets/31de92e7-33cb-4432-937c-064c5632906b" />
<img width="1022" height="599" alt="image" src="https://github.com/user-attachments/assets/a9a7c562-e3d3-4225-af79-d46e56435307" />

| 홈 화면                                   | 상품 등록                                         | 채팅                                             |
| -------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| 
<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/293ae196-fabb-4235-aff3-992d1bca972f" /> | <img width="1280" height="720" alt="image" src="[https://github.com/user-attachments/assets/293ae196-fabb-4235-aff3-992d1bca972f](https://github.com/user-attachments/assets/31de92e7-33cb-4432-937c-064c5632906b)" /> | <img width="1280" height="720" alt="image" src="[https://github.com/user-attachments/assets/293ae196-fabb-4235-aff3-992d1bca972f](https://github.com/user-attachments/assets/a9a7c562-e3d3-4225-af79-d46e56435307)" />|

---

## 🚀 기술 스택

* **Framework**: React Native, Expo
* **Navigation**: expo-router
* **State Management**: Zustand
* **Server Communication**: axios + React Query
* **UI**: styled-components, react-native-webview
* **Image Upload**: expo-image-picker, Cloudinary API
* **Auth & Storage**: AsyncStorage, SecurityStorage
* **API Integration**: Kakao Map API, Custom Backend API

---

## 📂 프로젝트 구조

```
UhDyL-Frontend/
├── api/                # API 함수 모음
├── assets/             # 앱 리소스 (이미지, 아이콘, 스크린샷)
├── components/         # UI 및 공통 기능 컴포넌트
│   ├── common/         # 버튼, 인풋, 로딩 등
│   ├── farmer/         # 판매자 관련
│   ├── chatting/       # 채팅 관련
│   └── review/         # 리뷰 및 사진 업로드
├── hooks/              # react-query 기반 custom hooks
│   ├── mutation/       # POST/PATCH/DELETE
│   └── query/          # GET
├── store/              # Zustand 전역 상태
├── services/           # 인증, 스토리지
├── app/                # expo-router 페이지
│   ├── new-item/       # 상품 등록 플로우
│   ├── chatting/       # 채팅
│   ├── user/           # 유저 페이지
│   └── farmer/         # 판매자 페이지
└── ...
```

---

## ⚙️ 환경 변수

`.env` 파일에서 환경 변수를 관리합니다.

```env
EXPO_PUBLIC_API_URL=https://api.uhdyl.com
EXPO_PUBLIC_KAKAO_MAP_JS_KEY=YOUR_KAKAO_MAP_KEY
```

---

## 🛠️ 주요 기능

### 사용자/판매자 모드

* 로그인 후 user / farmer 모드 선택
* Zustand로 전역 상태 관리

### 상품 등록

1. Step 1: 기본 정보 입력 (상태/가격/키워드)
2. Step 2: 사진 첨부 (Cloudinary API 업로드)
3. Step 3: 가격 및 설명 스타일 선택
4. Loading: AI 기반 자동 설명 생성
5. Result: 수정 후 등록 완료

### 채팅

* 상품별 채팅방 생성
* 거래 완료 여부에 따라 버튼 UI 변경
* 리뷰 작성 연동

### Kakao Map 연동

* 농장 위치 등록 (WebView + Kakao Map API)
* 드래그 후 중앙 마커로 위치 선택

### 프로필 관리

* 프로필 사진/닉네임 수정
* 사용자 타입(user/farmer) 전환
* AsyncStorage 기반 persist 저장소

---

## ▶️ 실행 방법

### 1. 설치

```bash
git clone https://github.com/your-repo/UhDyL-Frontend.git
cd UhDyL-Frontend
npm install
```

### 2. 환경 변수 설정

루트에 `.env` 파일 생성 후 환경 변수 추가.

### 3. 실행

```bash
npx expo start
```

---

## 📦 빌드

### iOS

```bash
npx expo prebuild
npx expo run:ios
```

### Android

```bash
npx expo run:android
```

또는 Expo EAS 사용:

```bash
eas build --platform ios
eas build --platform android
```

---

## 📌 TODO

* [ ] 채팅 알림 (FCM)
* [ ] 다국어 지원
* [ ] 리뷰 별점 기능 강화
* [ ] 이미지 업로드 진행률 표시
