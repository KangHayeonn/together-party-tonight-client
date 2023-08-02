import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBox = styled.div`
  width: 600px;
`;

const ModalFormTitle = styled.div`
  position: relative;
  background-color: #0d3471;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid #0d3471;
  padding: 10px 0px;

  img {
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
  }
`;

const ModalFormTitleLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  color: #fff;
`;

const ModalFormContent = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 50px 0px;
`;

export {
  ModalContainer,
  ModalBox,
  ModalFormTitle,
  ModalFormTitleLogo,
  ModalFormContent,
};
