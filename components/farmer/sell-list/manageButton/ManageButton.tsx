import { EllipsisVertical, Trash } from 'lucide-react-native';

import { Container } from './manageButton.styled';
import OverlayModal from '@/components/common/overlayModal/OverlayModal';
import { useState } from 'react';

type Props = {
  isCompleted: boolean;
  onEditPress: () => void;
  onDeletePress: () => void;
};

export default function ManageButton({
  isCompleted,
  onEditPress,
  onDeletePress,
}: Props) {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  return (
    <>
      <OverlayModal
        text='판매글을 삭제할까요?'
        acceptColor='red'
        acceptString='삭제'
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
        onAccept={() => onDeletePress()}
      />
      <Container onPress={isCompleted ? () => setIsModalOn(true) : onEditPress}>
        {isCompleted ? (
          <Trash color='#fff' />
        ) : (
          <EllipsisVertical color='#fff' />
        )}
      </Container>
    </>
  );
}
