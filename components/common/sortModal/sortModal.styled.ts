import { Check } from 'lucide-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  gap: 10px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 80px;
`;

export const Bar = styled.View`
  width: 50px;
  height: 5px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const OptionBar = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 30px;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionText = styled.Text<{ isActive: boolean }>`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? '#30DB5B' : '#000')};
`;

export const StyledCheck = styled(Check)<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  color: ${(props) => (props.isActive ? '#30DB5B' : '')};
`;
