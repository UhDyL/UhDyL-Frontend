import {
  Backdrop,
  BtnBox,
  BtnLabel,
  Card,
  MainText,
  Row,
} from './overlayModal.styled';

import { Modal } from 'react-native';
import React from 'react';

type Props = {
  isModalOn: boolean;
  setIsModalOn: (v: boolean) => void;
  text: string;
  acceptString: string;
  acceptColor: string;
  onAccept: () => void;
};

export default function OverlayModal({
  isModalOn,
  setIsModalOn,
  text,
  acceptString,
  acceptColor,
  onAccept,
}: Props) {
  return (
    <Modal
      visible={isModalOn}
      transparent
      animationType='fade'
      onRequestClose={() => setIsModalOn(false)}
    >
      <Backdrop onPress={() => setIsModalOn(false)}>
        <Card onStartShouldSetResponder={() => true}>
          <MainText>{text}</MainText>
          <Row>
            <BtnBox bg='#fff' onPress={() => setIsModalOn(false)}>
              <BtnLabel>취소</BtnLabel>
            </BtnBox>
            <BtnBox
              bg={acceptColor}
              onPress={() => {
                onAccept();
                setIsModalOn(false);
              }}
            >
              <BtnLabel style={{ color: '#fff' }}>{acceptString}</BtnLabel>
            </BtnBox>
          </Row>
        </Card>
      </Backdrop>
    </Modal>
  );
}
