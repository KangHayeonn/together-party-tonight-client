import styled from "styled-components";

const SearchCategoryWrapper = styled.div`
  display: flex;
  background-color: #fff;
  padding: 40px 100px 60px;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.65);
`;

const SearchCategoryList = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 30px);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: -35px;
  gap: 2.5rem;
`;

const SearchCategoryItem = styled.div``;

const SearchCategoryItemInput = styled.input`
  appearance: none;
  margin: 0;

  &:checked + .label-tag {
    color: #0d3471;
    font-weight: 600;
  }

  &:hover + .label-tag {
    opacity: 0.5;
  }
`;

const SearchCategoryItemLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.4rem;
  width: 100px;
  color: #666666;
  background-color: #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1rem;
`;

export {
  SearchCategoryWrapper,
  SearchCategoryList,
  SearchCategoryItem,
  SearchCategoryItemInput,
  SearchCategoryItemLabel,
};
