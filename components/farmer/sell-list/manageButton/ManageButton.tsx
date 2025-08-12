import { EllipsisVertical, Trash } from 'lucide-react-native';

import { Container } from './manageButton.styled';

type Props = {
  isCompleted: boolean;
  onEditPress: () => void;
};

export default function ManageButton({ isCompleted, onEditPress }: Props) {
  return (
    <Container
      onPress={isCompleted ? () => console.log('삭제버튼') : onEditPress}
    >
      {isCompleted ? <Trash color='#fff' /> : <EllipsisVertical color='#fff' />}
    </Container>
  );
}
