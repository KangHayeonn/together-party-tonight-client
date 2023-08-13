import styled from "styled-components";

const InpContainer = styled.div`
  position: relative;
`;

const InpPay = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  width: 100%;
  font-size: 28px;
  padding-bottom: 5px;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:not(:placeholder-shown) + button {
    display: block;
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  display: none;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const RequestBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 10px;
`;

export { InpContainer, InpPay, ClearBtn, RequestBtnWrapper };
