import styled from "styled-components";

const SearchTagListWrapper = styled.div`
  display: flex;
  margin-top: -20px;
  margin-bottom: 5px;
`;

const SearchTagItem = styled.div`
  margin-right: 10px;
`;

const SearchTagItemLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.75rem;
  padding: 3px 15px;
  color: #000;
  background-color: #eef3f9;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  border-radius: 7px;
  margin-top: 25px;

  &.secondary {
    color: #fff;
    background-color: #0d3471;
  }
`;

export { SearchTagListWrapper, SearchTagItem, SearchTagItemLabel };
