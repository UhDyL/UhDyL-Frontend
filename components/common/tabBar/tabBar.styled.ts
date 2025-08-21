import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 110px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  /* padding-bottom: 20px; */
  /* position: absolute; */
  /* bottom: 0; */
  border-top-width: 1px;
  border-top-color: #0000001a;
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
