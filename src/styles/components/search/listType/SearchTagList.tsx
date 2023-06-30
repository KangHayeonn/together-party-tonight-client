import styled from "styled-components";

const SearchTagListWrapper = styled.div`
  display: flex;
  margin-top: -20px;
  margin-bottom: 5px;
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
  height: 1.75rem;
  width: 80px;
  color: #000;
  background-color: #eef3f9;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  border-radius: 7px;

  &.secondary {
    color: #fff;
    background-color: #0d3471;
  }
`;

export {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
};
