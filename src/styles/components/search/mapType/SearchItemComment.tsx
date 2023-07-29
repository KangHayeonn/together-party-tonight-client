import styled from "styled-components";

const SearchCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 23px;
  gap: 0.5rem;
  width: 100%;
`;

const SearchCommentTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
`;

const SearchCommentInputForm = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 320px;
`;

const SearchCommentList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 15.5rem;
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

const SearchCommentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 9px;
  gap: 0.625rem;
  border: 1px solid rgb(189, 200, 214, 0.75);
`;

const SearchCommentTop = styled.div``;

const SearchCommentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchCommentText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15px;
  margin-right: 7px;
`;

const SearchComment = styled.div`
  display: flex;
  width: 200px;
  word-break: break-all;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15px;
  margin-right: 7px;
`;

const SearchCommentBtn = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SearchResultEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15.5rem;
  font-size: 16px;
  color: #a0a0a0;
`;

const SearchLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15.5rem;
`;

export {
  SearchCommentWrapper,
  SearchCommentTitle,
  SearchCommentInputForm,
  SearchCommentList,
  SearchCommentItem,
  SearchCommentTop,
  SearchCommentBottom,
  SearchCommentText,
  SearchComment,
  SearchCommentBtn,
  SearchResultEmpty,
  SearchLoadingWrapper,
};
