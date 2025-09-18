import { StyledWrapper } from './modalWrapper.styled';

type Props = {
  children: React.ReactNode;
};

export const ModalWrapper = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
