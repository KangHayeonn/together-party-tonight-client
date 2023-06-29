import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
`;

const SliderPreview = styled.span`
  position: absolute;
  color: #2a82f0;
  margin: 0 0 0.25rem 0;
  left: 1.25rem;
  transform: translate(-50%, -1rem);
  white-space: nowrap;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.875rem;
  letter-spacing: 1.5px;
`;

const SliderInput = styled.input`
  width: 100%;
  margin: 0;
  appearance: none;
  outline: none;
  cursor: pointer;
  accent-color: #fff;
  border-radius: 0.125rem;
  background: #778da9 100%;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-top: -3px;
    background: #ffffff;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 0.25rem;
  }

  &:disabled {
    cursor: default;
  }
`;

const SliderContents = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.25rem;
`;

const SliderContent = styled.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.875rem;
  letter-spacing: 1.5px;
`;

export {
  SliderWrapper,
  SliderPreview,
  SliderInput,
  SliderContents,
  SliderContent,
};
