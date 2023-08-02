import styled from "styled-components";

const SearchReviewListWrapper = styled.div`
  position: absolute;
  left: 448px;
  width: 28rem;
  height: 100%;
  min-height: 882px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0.25rem 0 0.25rem rgba(0, 0, 0, 0.25);
  gap: 1rem;
  z-index: 100;
`;

const SearchReviewClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;

const SearchReviewTop = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 20px;
  gap: 0.5rem;
  margin-bottom: 20px;
`;

const SearchReviewBottom = styled.div`
  padding: 0 20px;
`;

const SearchReviewTotalScore = styled.div`
  display: flex;
`;

const SearchReviewText = styled.span`
  font-size: 0.72rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;

  &.title {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
  }

  &.count {
    margin-left: -2px;
    margin-right: 5px;
  }

  &.score {
    margin-left: 5px;
    margin-right: 20px;
    color: #2a82f0;
  }

  &.date {
    font-size: 0.71rem;
    font-weight: 400;
    color: #bfc8cc;
  }
`;

const SearchReviewItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 48.5rem;
  overflow-y: scroll;
  margin-top: -10px;
  margin-bottom: 30px;
  gap: 0.5rem;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    margin: 2px;
  }
`;

const SearchReviewItem = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  img {
    border-radius: 13px;
  }
`;

const SearchReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  gap: 0.1rem;
`;

const SearchReviewTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
`;

const SearchReviewDetail = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const SearchReviewContent = styled.div`
  width: 255px;
  font-size: 0.78rem;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export {
  SearchReviewListWrapper,
  SearchReviewClose,
  SearchReviewTop,
  SearchReviewBottom,
  SearchReviewTotalScore,
  SearchReviewText,
  SearchReviewItems,
  SearchReviewItem,
  SearchReviewBox,
  SearchReviewTitle,
  SearchReviewDetail,
  SearchReviewContent,
};
