import styled from "styled-components";

const ToastBoxWrapper = styled.div`
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 4rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: #fff;
  text-align: center;
  z-index: 999;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
`;

const AlertToastBoxWrapper = styled.div`
  position: fixed;
  bottom: 15%;
  right: -120px;
  transform: translateX(-50%);
  padding: 10px 4rem;
  background: #0d99ff;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  z-index: 999;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
`;

export { ToastBoxWrapper, AlertToastBoxWrapper };
