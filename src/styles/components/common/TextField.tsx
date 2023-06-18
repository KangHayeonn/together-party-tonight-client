import styled from "styled-components";

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TextInput = styled.input`
  font-size: 1rem;
  line-height: 2.1rem;
  letter-spacing: 0.25px;
  width: 100%;
  height: 2.5rem;
  background-color: #f5f5f5;
  border-radius: 3px;
  border: 1px solid transparent;
  outline: none;
  padding-left: 5px;
  padding-right: 10px;

  &.error {
    border: 1px solid #ff0000;
  }

  &.white {
    background-color: #fdfdfd;
  }

  &:not(.error):focus {
    border: 1px solid #2a82f0;
  }

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const TextMessage = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 0.875rem;
  letter-spacing: 1.5px;
  height: 14px;
  white-space: nowrap;

  &.error {
    color: #ff0000;
  }

  &.success {
    color: #2a82f0;
  }
`;

export { TextWrapper, TextInput, TextMessage };
