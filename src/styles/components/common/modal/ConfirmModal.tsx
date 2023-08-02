import styled from "styled-components";

const ModalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalFormFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 4rem;
`;

const ModalFormFooterBtn = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalFormText = styled.p`
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
`;

const ModalFormBtn = styled.button`
  appearance: none;
  background-color: #0d3471;
  color: #fff;
  font-size: 14px;
  width: 7rem;
  height: 2.5rem;
  border-radius: 25px;

  &:hover {
    background-color: #bdc8d6;
  }
`;

export {
  ModalFormWrapper,
  ModalFormFooter,
  ModalFormFooterBtn,
  ModalFormText,
  ModalFormBtn,
};
