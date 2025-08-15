import {
  Container,
  JustBox,
  SubText,
  TextBox,
  TitleText,
} from './newItem.styled';

import Button from '@/components/common/button/Button';
import ExampleTextBox from '@/components/newItem/exampleTextBox/ExampleTextBox';
import InputForm from '@/components/common/inputForm/InputForm';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import { TypeSelectBox } from '@/components/newItem/typeSelectBox/TypeSelectBox';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepThreeScreen() {
  const router = useRouter();
  const [price, setPrice] = useState<string>('');
  const [selected, setSelected] = useState<
    'friendly' | 'funny' | 'like_seller'
  >('friendly');

  return (
    <Container>
      <LevelAndGoHome level={3} />
      <InputForm
        label='가격을 입력해주세요.'
        placeholder='판매할 가격'
        value={price}
        setValue={setPrice}
      />

      <TextBox>
        <TitleText>설명 어감</TitleText>
        <SubText>원하는 어감 스타일을 선택해 주세요.</SubText>
      </TextBox>

      <TypeSelectBox selected={selected} setSelect={setSelected} />

      <ExampleTextBox selected={selected} />

      <JustBox>
        <Button
          text='AI 작성하기'
          onClick={() => router.push('/new-item/loading')}
        />
      </JustBox>
    </Container>
  );
}
