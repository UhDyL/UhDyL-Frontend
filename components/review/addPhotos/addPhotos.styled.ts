import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  border: 1px dotted #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const DescriptionText = styled.Text`
  color: #30db5b;
  font-weight: 500;
`;

export const AddedImagesContainer = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;
