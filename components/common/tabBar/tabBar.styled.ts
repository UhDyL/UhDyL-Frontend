import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  padding-bottom: 20px;
`;

export const IconBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.Text<{ activated: boolean }>`
  color: ${(props) => (props.activated ? '#30DB5B' : '#D9D9D9')};
`;
