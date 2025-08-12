import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 30px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const GoHomeButton = styled.TouchableOpacity`
  background-color: #30db5b;
  width: 120px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
