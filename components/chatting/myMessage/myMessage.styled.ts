import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 3px 0;
`;

export const ContentBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const ChatBubble = styled.Text`
  width: auto;
  border-radius: 15px;
  background-color: #f5f5f5;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 600;
`;
