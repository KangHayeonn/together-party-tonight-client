import styled from "styled-components";

const SearchOpenReviewBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const SearchOpenReviewBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchOpenReviewContent = styled.span`
  font-size: 0.72rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;
  margin-right: 5px;

  &.title {
    font-size: 0.82rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
  }

  &.count {
    margin-right: 10px;
  }

  &.score {
    margin-left: 5px;
    margin-right: 20px;
    color: #2a82f0;
  }
`;

export {
  SearchOpenReviewBtnWrapper,
  SearchOpenReviewBtnBox,
  SearchOpenReviewContent,
};
