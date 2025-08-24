import { Container, KeywordsArea, TitleText } from './selectKeywordBox.styled';
import { Dispatch, SetStateAction } from 'react';

import SelectableElement from './selectableElement/SelectableElement';

type Keyword = {
  ko: string;
  en: string;
};

type Props = {
  keywords: Keyword[];
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
};

export default function SelectKeywordBox({
  keywords,
  selected,
  setSelected,
}: Props) {
  const handleToggle = (optionEn: string) => {
    setSelected((prev) =>
      prev.includes(optionEn)
        ? prev.filter((w) => w !== optionEn)
        : [...prev, optionEn]
    );
  };

  return (
    <Container>
      <TitleText>못난이와 관련된 키워드를 모두 클릭해주세요.</TitleText>
      <KeywordsArea>
        {keywords.map((word, index) => (
          <SelectableElement
            key={index}
            text={word.ko}
            selected={selected.includes(word.en)}
            toggleSelect={() => handleToggle(word.en)}
          />
        ))}
      </KeywordsArea>
    </Container>
  );
}
