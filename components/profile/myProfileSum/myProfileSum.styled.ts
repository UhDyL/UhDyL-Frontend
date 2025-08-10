import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 10px;
`;
export const Column = styled.View`
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MiniBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const UserTypeText = styled.Text<{ userType: 'user' | 'farmer' }>`
  border-color: ${({ userType }) =>
    userType === 'user' ? '#19A63C' : '#B07F36'};
  color: ${({ userType }) => (userType === 'user' ? '#19A63C' : '#B07F36')};
  border-width: 1px;
  padding: 2px 7px;
  border-radius: 10px;
  font-weight: 700;
`;

export const EditProfileButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 35px;
  background-color: #d9d9d9;
  padding: 7px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WhiteText = styled.Text`
  color: #fff;
  font-weight: 700;
`;
