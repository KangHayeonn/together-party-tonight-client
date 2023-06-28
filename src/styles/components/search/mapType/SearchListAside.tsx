import styled from "styled-components";

const SearchListAsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 100%;
  min-height: 800px;
  box-shadow: 0.25rem 0 0.25rem rgba(0, 0, 0, 0.25);
  gap: 1rem;
  padding: 20px 23px;
`;

const SearchTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border: 1px solid rgb(13, 27, 42, 0.25);
  border-radius: 5px;
  border-spacing: 0;
  overflow: hidden;
`;

const SearchTableBody = styled.tbody`
  width: 100%;

  tr:not(:last-child) td {
    border-bottom: 1px solid rgb(13, 27, 42, 0.25);
  }
`;

const SearchTableRow = styled.tr`
  width: 100%;
`;

const SearchDataTitle = styled.td`
  width: 7rem;
  min-width: 7rem;
  color: #fff;
  background-color: #0d3471;
  text-align: center;
  padding: 0;
  margin: 0;
  border: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;
`;

const SearchDataContent = styled.td`
  padding: 0.5rem 0.625rem;
  width: 100%;

  &.number {
    display: flex;
    justify-content: center;
  }
`;

export {
  SearchListAsideWrapper,
  SearchTable,
  SearchTableBody,
  SearchTableRow,
  SearchDataTitle,
  SearchDataContent,
};
