import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 800;
`;
