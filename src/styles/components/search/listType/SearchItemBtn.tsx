import styled from "styled-components";

const SearchItemBtnWrapper = styled.div`
  padding: 15px 20px;
  width: 100%;
  height: 6.5rem;
  margin-bottom: 1rem;
`;

const SearchItemBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;

  button:first-child {
    margin-right: 5rem;
  }
`;

export { SearchItemBtnWrapper, SearchItemBtnBox };
