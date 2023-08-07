import styled from "styled-components";

const SearchListWrapper = styled.div`
  display: flex;
  width: 53rem;
  padding: 20px 0 20px 20px;
`;

const SearchListBox = styled.div`
  width: 100%;
`;

const SearchListBoxTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SearchListBoxBottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  min-height: 800px;
  max-height: 800px;
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

const SearchListTitle = styled.div``;

const SearchListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const SearchListItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const SearchListItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchItemLeft = styled.div``;

const SearchItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const SearchItemText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;

  &.category {
    background-color: #d9d9d9;
    padding: 5px 15px;
    border-radius: 15px;
  }

  &.title,
  &.review {
    margin-left: 7px;
    font-size: 1rem;
    font-weight: 600;
  }

  &.nick-name {
    font-size: 0.75rem;
    font-weight: 500;
  }

  &.date,
  &.address {
    margin-left: 7px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  &.address {
    margin-left: 4px;
  }

  &.status {
    font-weight: 600;
  }
`;

const SearchListItemContent = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

const SearchListItemTag = styled.div``;

const SearchResultEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  font-size: 16px;
  color: #a0a0a0;
`;

export {
  SearchListWrapper,
  SearchListBox,
  SearchListBoxTop,
  SearchListBoxBottom,
  SearchItemLeft,
  SearchItemRight,
  SearchItemText,
  SearchListTitle,
  SearchListItem,
  SearchListItemTop,
  SearchListItemContent,
  SearchListItemTag,
  SearchListItemBottom,
  SearchResultEmpty,
};
