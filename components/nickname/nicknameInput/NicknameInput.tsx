import {
  Container,
  ErrorText,
  NicknameInputArea,
} from './NicknameInput.styled';

import { useState } from 'react';

type Props = {
  nickname: string;
  setNickname: (nickname: string) => void;
};

export default function NicknameInput({ nickname, setNickname }: Props) {
  const [error, setError] = useState<string>('');

  const validateNickname = (value: string) => {
    const hasSpecialChar = /[^a-zA-Z0-9가-힣]/.test(value);
    if (value.length > 10) {
      setError('10자 이내로 입력해주세요.');
    } else if (hasSpecialChar) {
      setError('특수문자 및 공백은 사용할 수 없습니다.');
    } else if (value === 'takenName') {
      setError('이미 사용 중인 닉네임입니다.');
    } else {
      setError('');
    }
    setNickname(value);
  };

  return (
    <Container>
      <NicknameInputArea
        value={nickname}
        onChangeText={validateNickname}
        placeholder='홍길동'
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
