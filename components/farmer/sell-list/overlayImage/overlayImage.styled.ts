import { ImageBackground, Text, View } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(ImageBackground)`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  overflow: hidden;
`;

export const Overlay = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4); /* 흐림 효과 */
  justify-content: center;
  align-items: center;
`;

export const OverlayText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
