import { ChevronLeft, EllipsisVertical, Home } from 'lucide-react-native';

import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LeftSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledBeforeIcon = styled(ChevronLeft)`
  color: #fff;
`;

export const StyledHomeIcon = styled(Home)`
  color: #fff;
`;

export const StyledDotIcon = styled(EllipsisVertical)`
  color: #fff;
`;

export const ButtonWrapper = styled(TouchableOpacity)``;
