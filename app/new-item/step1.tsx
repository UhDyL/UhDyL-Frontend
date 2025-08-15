import { Container, JustBox } from './newItem.styled';

import Button from '@/components/common/button/Button';
import InputForm from '@/components/common/inputForm/InputForm';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import SelectKeywordBox from '@/components/farmer/seleectKeywordBox/SelectKeywordBox';
import { dummyKeywords } from '@/mocks/dummyKeywords';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewItemStepOneScreen() {
  const [breed, setBreed] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  return (
    <Container>
      <LevelAndGoHome level={1} />
      <InputForm
        label='품종을 입력해주세요.'
        placeholder='예) 사과'
        value={breed}
        setValue={setBreed}
      />
      <SelectKeywordBox
        keywords={dummyKeywords}
        selected={selectedOptions}
        setSelected={setSelectedOptions}
      />
      <JustBox>
        <Button
          size='full'
          text='다음'
          onClick={() => router.push('/new-item/step2')}
        />
      </JustBox>
    </Container>
  );
}
