import styled from "styled-components";

const SearchResultList = styled.ul`
  border: 1px solid rgb(189, 200, 214, 0.75);
  border-radius: 3px;
  max-height: 21rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    margin: 8px;
  }
`;

const SearchResultItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 0.75rem;
  gap: 0.625rem;
  border-bottom: 1px solid rgb(189, 200, 214, 0.75);
  text-decoration: none;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const SearchItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SearchClubBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 250px;
`;

const SearchClubTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: 0.15px;
  color: #000;
  word-break: break-all;
  margin-left: 5px;
`;

const SearchClubCategory = styled.span`
  color: rgba(0, 0, 0, 0.3);
  font-weight: 500;
  font-size: 0.65rem;
  line-height: 0.875rem;
  letter-spacing: 1.5px;
  margin-left: 0.4rem;
  margin-top: 5px;
`;

const SearchScoreBox = styled.div`
  display: flex;
  gap: 5px;
`;

const SearchScore = styled.span`
  color: #2a82f0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;
`;

const SearchItemContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #000;
  justify-content: space-between;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;
  margin-bottom: 5px;
`;

const SearchClubAddress = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
`;

const SearchClubReview = styled.div``;

const SearchItemBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
`;

const SearchItemTag = styled.div`
  margin-right: 6px;
  background-color: #eef3f9;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.675rem;
  line-height: 0.875rem;
  letter-spacing: 0.25px;
`;

const SearchResultEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  font-size: 16px;
  color: #a0a0a0;
`;

export {
  SearchResultList,
  SearchResultItem,
  SearchItemTop,
  SearchClubBox,
  SearchClubTitle,
  SearchClubCategory,
  SearchScoreBox,
  SearchScore,
  SearchItemContent,
  SearchClubAddress,
  SearchClubReview,
  SearchItemBottom,
  SearchItemTag,
  SearchResultEmpty,
};
