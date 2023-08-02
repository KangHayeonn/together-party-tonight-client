import React, { Dispatch, SetStateAction } from "react";
import ModalForm from "./ModalForm";
import {
  ModalFormWrapper,
  ModalFormFooter,
  ModalFormFooterBtn,
  ModalFormText,
  ModalFormBtn,
} from "@/styles/components/common/modal/ConfirmModal";

interface ConfirmModalProps {
  modalTitle: string;
  modalText: string;
  modalSubText?: string;
  onClose: Dispatch<SetStateAction<boolean>>;
  handleSubmit: () => void;
}

const ConfirmModal = ({
  modalTitle,
  modalText,
  modalSubText,
  onClose,
  handleSubmit,
}: ConfirmModalProps) => {
  const onClickEvent = () => {
    handleSubmit();
    document.body.style.overflow = "unset";
    onClose(false);
  };

  const onClickClose = () => {
    document.body.style.overflow = "unset";
    onClose(false);
  };

  return (
    <ModalForm title={modalTitle} onClickEvent={onClickClose}>
      <ModalFormWrapper>
        <ModalFormText>{modalText}</ModalFormText>
        {modalSubText && <ModalFormText>{modalSubText}</ModalFormText>}
        <ModalFormFooter>
          <ModalFormFooterBtn>
            <ModalFormBtn onClick={onClickEvent}>네</ModalFormBtn>
          </ModalFormFooterBtn>
          <ModalFormFooterBtn>
            <ModalFormBtn onClick={onClickClose}>아니오</ModalFormBtn>
          </ModalFormFooterBtn>
        </ModalFormFooter>
      </ModalFormWrapper>
    </ModalForm>
  );
};

export default ConfirmModal;
