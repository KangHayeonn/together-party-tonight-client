import styled from "styled-components";

const ChatRoomListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 100%;
  min-height: 800px;
  box-shadow: 0.25rem 0 0.25rem rgba(0, 0, 0, 0.25);
  gap: 1rem;
  background-color: #ecf2ff;
`;

const ChatRoomList = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 50rem;
  max-height: 50rem;
  overflow-y: scroll;
  gap: 0.1rem;

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

const ChatRoomItem = styled.li`
  background-color: #dee3ea;
  padding: 20px 30px;

  &.checked {
    background-color: #bdc8d6;
  }
`;

const ChatRoomItemTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25px;
  margin-bottom: 10px;
  color: #0d3471;
`;

const ChatRoomItemContent = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  margin-bottom: 10px;
`;

const ChatRoomItemText = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 19.5rem;
  font-size: 0.9rem;
  letter-spacing: 0.25px;
  color: #0d3471;
`;

const ChatRoomItemDate = styled.div`
  margin-left: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #0d3471;
`;

const ChatRoomListEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
  font-size: 16px;
  color: #a0a0a0;
`;

export {
  ChatRoomListWrapper,
  ChatRoomList,
  ChatRoomItem,
  ChatRoomItemTitle,
  ChatRoomItemContent,
  ChatRoomItemText,
  ChatRoomItemDate,
  ChatRoomListEmpty,
};
