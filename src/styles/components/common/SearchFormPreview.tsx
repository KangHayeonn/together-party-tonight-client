import styled from "styled-components";

const SearchPreviewWrapper = styled.div`
  width: 100%;
  background-color: #f0efef;
  max-height: 11rem;
  overflow-y: auto;
  border-radius: 7px;
  z-index: 999;
  margin-top: 5px;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    margin: 8px;
  }
`;

const SearchPreviewList = styled.ul`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchPreviewItem = styled.li`
  background-color: transparent;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.25px;
  display: flex;
  align-items: center;
  height: 1.875rem;
  padding: 17px 12px;
  cursor: pointer;

  &:hover {
    background-color: #bfc8cc;
  }

  &.checked {
    background-color: #bfc8cc;
  }
`;

export { SearchPreviewWrapper, SearchPreviewList, SearchPreviewItem };
