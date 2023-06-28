import styled from "styled-components";

const SearchTagListWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 40px);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: -15px;
`;

const SearchTagItem = styled.div`
  margin-right: 10px;
`;

const SearchTagItemInput = styled.input`
  appearance: none;
  margin: 0;

  &:checked + .label-tag {
    background-color: #bdc8d6;
  }

  &:hover + .label-tag {
    opacity: 0.5;
  }
`;

const SearchTagItemLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.875rem;
  width: 90px;
  color: #000;
  background-color: #eef3f9;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  border-radius: 15px;
`;

export {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
};
