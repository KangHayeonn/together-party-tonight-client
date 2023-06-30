import styled from "styled-components";

const SearchNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`;

const SearchFormWrapper = styled.div`
  display: flex;
  width: 30rem;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.65);
`;

export { SearchNavWrapper, SearchFormWrapper };
