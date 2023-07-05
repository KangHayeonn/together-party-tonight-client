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

const ChatList = styled.div``;

const ChatItem = styled.div``;

const ChatDate = styled.div``;

const ChatContent = styled.div``;

const ChatRoomFormBottom = styled.div``;

export {
  ChatRoomFormWrapper,
  ChatRoomFormTitle,
  ChatRoomName,
  ChatList,
  ChatItem,
  ChatDate,
  ChatContent,
  ChatRoomFormBottom,
};
