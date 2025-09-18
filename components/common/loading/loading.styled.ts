import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  min-height: 200px;
  border-radius: 15px;
  padding: 16px;
  margin: 12px 0;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledText = styled.Text`
  color: #555;
  font-size: 14px;
  text-align: center;
  font-weight: 800;
`;

export const Spinner = styled.Image.attrs({
  source: require('../../../assets/images/loading_circle.png'),
})`
  width: 40px;
  height: 40px;
`;
