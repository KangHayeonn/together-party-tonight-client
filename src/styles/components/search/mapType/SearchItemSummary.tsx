import styled from "styled-components";

const SearchSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.625rem;
  background: url("/images/category/study.svg");
  background-size: cover;

  .back-button {
    margin-left: -10px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const SearchSummaryBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  gap: 0.5rem;
`;

const SummaryInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 70%;
`;

const SummaryInnerBoxTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SummaryInnerBoxBottom = styled.div`
  color: #000;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;
`;

const SummaryClubTitle = styled.div`
  display: flex;
  align-items: center;
  max-width: 250px;
`;

const SummaryClubName = styled.span`
  max-width: 270px;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: 0.15px;
  color: #000;
  word-break: break-all;
  margin-left: 5px;
`;

const SummaryClubCategory = styled.span`
  color: rgba(0, 0, 0, 0.3);
  font-weight: 500;
  font-size: 0.65rem;
  line-height: 0.875rem;
  letter-spacing: 1.5px;
  margin-left: 0.4rem;
  margin-top: 5px;
`;

const SummaryClubAddress = styled.p`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
`;

export {
  SearchSummaryWrapper,
  SearchSummaryBox,
  SummaryInnerBox,
  SummaryInnerBoxTop,
  SummaryInnerBoxBottom,
  SummaryClubTitle,
  SummaryClubName,
  SummaryClubCategory,
  SummaryClubAddress,
};
