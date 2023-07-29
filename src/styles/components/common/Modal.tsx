import styled from "styled-components";

const ModalLayer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  background: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
`;

const InnerLayer = styled.div`
  flex: none;
  position: relative;
  margin: auto;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.6);
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d3471;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 0;
`;

const ModalTitle = styled.h2`
  text-align: center;
  flex-grow: 1;
  font-size: 18px;
  color: #fff;
`;

const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d3471;
  width: 50px;
  border-top-right-radius: 10px;
`;

export { ModalLayer, InnerLayer, ModalTop, ModalTitle, CloseBtn };
