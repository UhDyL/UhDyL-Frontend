import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<{ isModalOn: boolean }>`
  width: 300px;
  height: 300px;
  display: ${({ isModalOn }) => (isModalOn === true ? '' : 'none')};
  background-color: blue;
  position: absolute;
`;

export const Backdrop = styled(Pressable)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 70%;
  height: 150px;
  padding: 10px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnBox = styled.Pressable<{ bg: string }>`
  width: 40%;
  padding: 10px 16px;
  border-radius: 10px;
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({ bg }) => (bg === '#fff' ? '1px solid #d9d9d9' : 'none')};
`;

export const BtnLabel = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 16px;
`;

export const MainText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;
