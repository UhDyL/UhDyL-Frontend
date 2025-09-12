import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<{ selected: boolean; typeColor: string }>`
  width: 80%;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: ${({ selected, typeColor }) =>
    selected ? typeColor : '#fff'};
`;

export const TitleText = styled.Text<{ selected: boolean }>`
  font-size: 18px;
  font-weight: 800;
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
`;

export const DescriptionText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
`;

export const Col = styled.View`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageBox = styled(Image)`
  width: 100px;
  height: 100px;
`;
