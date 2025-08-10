import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const LookMap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 2px 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
