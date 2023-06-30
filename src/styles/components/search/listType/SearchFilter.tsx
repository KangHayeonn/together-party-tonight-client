import styled from "styled-components";

const SearchFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  height: 100%;
  min-height: 800px;
  background-color: white;
`;

const SearchTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  padding: 0 10px;
`;

const SearchTableBody = styled.tbody`
  width: 100%;

  tr:not(:last-child) {
    border-bottom: 1px solid rgb(13, 27, 42, 0.25);
  }
`;

const SearchTableRow = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const SearchDataTitle = styled.td`
  color: #000;
  padding: 0;
  margin-top: 20px;
  margin-left: 10px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.25px;
`;

const SearchDataContent = styled.td`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchSliderWrapper = styled.div`
  width: 20rem;
`;

const SearchOptionContent = styled.td`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export {
  SearchFilterWrapper,
  SearchTable,
  SearchTableBody,
  SearchTableRow,
  SearchDataTitle,
  SearchDataContent,
  SearchSliderWrapper,
  SearchOptionContent,
};
