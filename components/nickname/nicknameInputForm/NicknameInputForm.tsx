import {
  Container,
  PreferText,
  PreferTextBox,
  TitleText,
} from './nicknameInputForm.styled';

import NicknameInput from '../nicknameInput/NicknameInput';

type Props = {
  nickname: string;
  setNickname: (nickname: string) => void;
};

export default function NicknameInputForm({ nickname, setNickname }: Props) {
  return (
    <Container>
      <TitleText>닉네임을 입력해주세요</TitleText>
      <NicknameInput nickname={nickname} setNickname={setNickname} />
      <PreferTextBox>
        <PreferText>
          • 다른 사람이 사용 중인 닉네임은 사용할 수 없어요.
        </PreferText>
        <PreferText>• 특수기호는 사용할 수 없어요.</PreferText>
        <PreferText>• 10글자 수 이내로 입력해주세요.</PreferText>
      </PreferTextBox>
    </Container>
  );
}
