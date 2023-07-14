import styled from "styled-components";

const ChatRoomFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ecf2ff;
  margin-left: 5px;
`;

const ChatRoomFormTitle = styled.div`
  display: flex;
  width: calc(100% - 28rem);
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);

  & > img {
    &:hover {
      opacity: 0.5;
    }
  }
`;

const ChatRoomName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25px;

  & > img {
    margin-left: 10px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const ChatList = styled.div`
  min-height: 51.5rem;
  max-height: 51.5rem;
  width: calc(100% - 28rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;

  &::-webkit-scrollbar {
    width: 5px;
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

const ChatItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const ChatDateBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const ChatDate = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  color: #7e7c7c;
`;

const ChatContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  &.opposite {
    flex-direction: row-reverse;
    justify-content: flex-start;
    justify-content: flex-end;
  }
`;

const ChatTime = styled.div`
  font-size: 0.85rem;
  line-height: 0.15px;
  margin: 4px 10px 0px 10px;
  color: #9c9c9c;
`;

const ChatContent = styled.div`
  display: block;
  max-width: 27rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  padding: 8px 20px 5px 20px;
  border-radius: 25px;
  background-color: #fff;
`;

const ChatInputForm = styled.div`
  position: relative;
  width: calc(100% - 28rem);
  padding: 20px 20px 20px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);

  & > img {
    position: absolute;
    top: 31px;
    right: 45px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const ChatInput = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
  padding: 8px 70px 5px 20px;
  border-radius: 25px;
  background-color: #fff;
  outline: none;
`;

export {
  ChatRoomFormWrapper,
  ChatRoomFormTitle,
  ChatRoomName,
  ChatList,
  ChatItem,
  ChatDateBox,
  ChatDate,
  ChatContentBox,
  ChatContent,
  ChatTime,
  ChatInputForm,
  ChatInput,
};
