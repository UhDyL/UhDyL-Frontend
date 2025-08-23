import { Container, JustBox, KeyBoardSafeArea } from './newItem.styled';

import Button from '@/components/common/button/Button';
import InputForm from '@/components/common/inputForm/InputForm';
import { Keyboard } from 'react-native';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import SelectKeywordBox from '@/components/farmer/seleectKeywordBox/SelectKeywordBox';
import { dummyKeywords } from '@/mocks/dummyKeywords';
import { useFormStore } from '@/store/useFormStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepOneScreen() {
  const [statusAndInfo, setStatusAndInfo] = useState<string>('');
  const [unitAndPrice, setUnitAndPrice] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();
  const { setFormData } = useFormStore();

  return (
    <KeyBoardSafeArea onPress={Keyboard.dismiss}>
      <Container>
        <LevelAndGoHome level={2} />
        <InputForm
          label='못난이 상태와 정보를 입력해주세요.'
          placeholder='예) 갈변한 5KG 사과'
          value={statusAndInfo}
          setValue={setStatusAndInfo}
        />
        <InputForm
          label='판매 단위 가격을 입력해주세요'
          placeholder='g/kg당 판매할 가격'
          value={unitAndPrice}
          setValue={setUnitAndPrice}
        />
        <SelectKeywordBox
          keywords={dummyKeywords}
          selected={selectedOptions ?? []}
          setSelected={setSelectedOptions}
        />
        <JustBox>
          <Button
            size='full'
            text='다음'
            onClick={() => {
              setFormData({
                condition: statusAndInfo,
                pricePerWeight: unitAndPrice,
                categories: selectedOptions,
              });
              router.push('/new-item/step3');
            }}
          />
        </JustBox>
      </Container>
    </KeyBoardSafeArea>
  );
}
