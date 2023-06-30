import styled from "styled-components";

const SearchDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SearchDetailTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
`;

const SearchDetailContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  .detail-icon {
    margin-left: 4px;
    margin-right: 4px;
  }

  &:last-child {
    margin-top: -5px;
  }
`;

const SearchDetailContent = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.25px;
`;

export {
  SearchDetailWrapper,
  SearchDetailTitle,
  SearchDetailContentBox,
  SearchDetailContent,
};
