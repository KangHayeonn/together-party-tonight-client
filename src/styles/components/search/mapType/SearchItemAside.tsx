import styled from "styled-components";

const SearchItemAsideWrapper = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0.25rem 0 0.25rem rgba(0, 0, 0, 0.25);
`;

const SearchItemClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 100%;
  min-height: 800px;
  gap: 1rem;
`;

const SearchItemDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0px 23px;
  border-bottom: 1px solid rgb(189, 200, 214, 0.75);
`;

export {
  SearchItemAsideWrapper,
  SearchItemClubWrapper,
  SearchItemDetailWrapper,
};
