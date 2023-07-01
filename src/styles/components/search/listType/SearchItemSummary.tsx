import styled from "styled-components";

const SearchItemSummaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #1852af;
`;

const SearchItemSummaryLeft = styled.div``;

const SearchItemSummaryRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.07rem;
`;

const SearchItemSummaryTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

const SearchItemSummaryBox = styled.div`
  display: flex;

  .clock {
    margin-top: 3px;
    margin-right: 7px;
  }
`;

const SearchItemSummaryText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.25px;

  &.detail {
    font-weight: 600;
    color: #b1b1b1;
    margin-right: 7px;

    &:first-child {
      margin-left: 2px;
    }
  }

  &.rating {
    margin-left: 5px;
  }

  &.review {
    margin-left: 10px;
  }

  &.status {
    margin-right: 2px;
  }

  &.recruit {
    margin-left: 2px;
  }
`;

export {
  SearchItemSummaryWrapper,
  SearchItemSummaryLeft,
  SearchItemSummaryRight,
  SearchItemSummaryTitle,
  SearchItemSummaryBox,
  SearchItemSummaryText,
};
