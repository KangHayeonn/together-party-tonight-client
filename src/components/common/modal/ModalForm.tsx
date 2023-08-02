import React from "react";
import Image from "next/image";
import {
  ModalContainer,
  ModalBox,
  ModalFormTitle,
  ModalFormTitleLogo,
  ModalFormContent,
} from "@/styles/components/common/modal/ModalForm";

interface ModalFormProps {
  title?: string | undefined;
  onClickEvent?: () => void;
  children: JSX.Element;
}

const ModalForm = ({ title, onClickEvent, children }: ModalFormProps) => {
  return (
    <ModalContainer>
      <ModalBox>
        <ModalFormTitle>
          <ModalFormTitleLogo>
            <h3>{title}</h3>
          </ModalFormTitleLogo>
          <Image
            src="/images/closeWhite.svg"
            width={23}
            height={23}
            alt="Close Modal Icon"
            onClick={onClickEvent}
          />
        </ModalFormTitle>
        <ModalFormContent>{children}</ModalFormContent>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalForm;
