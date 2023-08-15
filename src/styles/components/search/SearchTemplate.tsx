import styled from "styled-components";

const SearchPageWrapper = styled.div`
  display: flex;
  position: relative;

  &.list {
    flex-direction: column;
    background-color: #ecf2ff;
  }
`;

const SearchTypeBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 900;
  background-color: #0d3471;
  color: #fff;
  padding: 6px 25px;
  font-size: 15px;
  border-radius: 25px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: #778da9;
  }
`;

export { SearchPageWrapper, SearchTypeBtn };
