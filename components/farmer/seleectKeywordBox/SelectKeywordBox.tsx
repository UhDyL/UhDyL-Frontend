import { Container, KeywordsArea, TitleText } from './selectKeywordBox.styled';
import { Dispatch, SetStateAction } from 'react';

import SelectableElement from './selectableElement/SelectableElement';

type Props = {
  keywords: string[];
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
};

export default function SelectKeywordBox({
  keywords,
  selected,
  setSelected,
}: Props) {
  const handleAddSelectedArray = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((w) => w !== option)
        : [...prev, option]
    );
  };

  return (
    <Container>
      <TitleText>못난이와 관련된 키워드를 모두 클릭해주세요.</TitleText>
      <KeywordsArea>
        {keywords.map((word, index) => (
          <SelectableElement
            key={index}
            text={word}
            selected={selected.includes(word)}
            toggleSelect={() => handleAddSelectedArray(word)}
          />
        ))}
      </KeywordsArea>
    </Container>
  );
}
