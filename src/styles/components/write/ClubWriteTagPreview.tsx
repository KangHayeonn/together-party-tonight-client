import styled from "styled-components";

const ClubWriteTagPreviewWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #bdc8d6;
  max-height: 11rem;
  overflow-y: auto;
  border-radius: 7px;
  z-index: 999;
  margin-top: 5px;
  cursor: none;
  position: absolute;

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

const ClubWriteTagPreviewList = styled.ul`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ClubWriteTagPreviewItem = styled.li`
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
`;

export {
  ClubWriteTagPreviewWrapper,
  ClubWriteTagPreviewList,
  ClubWriteTagPreviewItem,
};
