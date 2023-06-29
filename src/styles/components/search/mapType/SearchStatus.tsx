import styled from "styled-components";

const SearchStatusWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchStatusRadio = styled.input`
  appearance: none;
  margin: 0;

  &:checked + .label-radio {
    background-color: #0d3471;
  }
`;

const SearchStatusRadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.25rem;
  height: 1.875rem;
  color: #fff;
  background-color: #dee3ea;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.25rem;

  &:nth-child(2) {
    border-radius: 5px 0 0 5px;
  }

  &:nth-child(4) {
    border-radius: 0 5px 5px 0;
  }
`;

export { SearchStatusWrapper, SearchStatusRadio, SearchStatusRadioLabel };
