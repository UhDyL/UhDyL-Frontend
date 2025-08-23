import {
  Container,
  JustBox,
  KeyBoardSafeArea,
  SubText,
  TextBox,
  TitleText,
} from './newItem.styled';

import Button from '@/components/common/button/Button';
import ExampleTextBox from '@/components/newItem/exampleTextBox/ExampleTextBox';
import InputForm from '@/components/common/inputForm/InputForm';
import { Keyboard } from 'react-native';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import { TypeSelectBox } from '@/components/newItem/typeSelectBox/TypeSelectBox';
import { useFormStore } from '@/store/useFormStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepThreeScreen() {
  const router = useRouter();
  const [price, setPrice] = useState<string>('');
  const [selected, setSelected] = useState<
    'friendly' | 'funny' | 'like_seller'
  >('friendly');
  const { setFormData } = useFormStore();
  const mappingTypeSentences = (type: 'friendly' | 'funny' | 'like_seller') => {
    if (type === 'friendly') return 'a friendly and caring tone';
    if (type === 'funny') return 'a witty and cheerful tone';
    if (type === 'like_seller')
      return "a savvy merchant's tone, nighlighting value-for-money";
    else return 'a standard neutral tone';
  };

  return (
    <KeyBoardSafeArea onPress={Keyboard.dismiss}>
      <Container>
        <LevelAndGoHome level={3} />
        <InputForm
          numberOnly
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
            size='full'
            text='AI 작성하기'
            onClick={() => {
              setFormData({
                price: +price,
                tone: mappingTypeSentences(selected),
              });
              router.push('/new-item/loading');
            }}
          />
        </JustBox>
      </Container>
    </KeyBoardSafeArea>
  );
}
