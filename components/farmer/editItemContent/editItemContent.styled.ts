import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const TitleText = styled.TextInput`
  width: 100%;
  font-size: 18px;
  font-weight: 800;
`;

export const ContentText = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top',
})`
  width: 100%;
  height: 160px;
  text-align: start;
  font-size: 16px;
`;
