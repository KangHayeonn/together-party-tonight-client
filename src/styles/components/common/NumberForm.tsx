import styled from "styled-components";

const NumberWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

const NumberInput = styled.input`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0.1px;
  text-align: center;
  appearance: none;
  width: 4.375rem;
  padding: 0.25rem 0;
  border: none;
  background-color: #f5f5f5;
  color: #0d1b2a;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { NumberWrapper, NumberInput };
