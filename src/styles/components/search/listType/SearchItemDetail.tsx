import styled from "styled-components";

const SearchItemDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;

const SearchItemDetailContent = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.25px;
  word-break: break-all;
  margin-bottom: 2rem;
`;

const SearchItemDetailTagWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SearchItemDetailBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  SearchItemDetailWrapper,
  SearchItemDetailContent,
  SearchItemDetailTagWrapper,
  SearchItemDetailBottom,
};
