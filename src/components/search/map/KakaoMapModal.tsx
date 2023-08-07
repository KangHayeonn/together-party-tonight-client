import React, { Dispatch, SetStateAction } from "react";
import ModalForm from "@/components/common/modal/ModalForm";
import { ModalFormWrapper } from "@/styles/components/search/map/KakaoModal";
import KakaoMap from "./KakaoMapSingle";

interface KakaoModalProps {
  modalTitle: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const KakaoModal = ({ modalTitle, onClose }: KakaoModalProps) => {
  const onClickClose = () => {
    document.body.style.overflow = "unset";
    onClose(false);
  };

  return (
    <ModalForm title={modalTitle} onClickEvent={onClickClose}>
      <ModalFormWrapper>
        <KakaoMap />
      </ModalFormWrapper>
    </ModalForm>
  );
};

export default KakaoModal;
