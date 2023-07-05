import styled from "styled-components";

const ChatDefaultFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #ecf2ff;
  margin-left: 5px;
`;

const ChatDefaultInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 28rem);
`;

const ChatDefaultTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 7px;
`;

const ChatDefaultText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.25px;
  margin-bottom: 18px;
`;

export {
  ChatDefaultFormWrapper,
  ChatDefaultInnerWrapper,
  ChatDefaultTitle,
  ChatDefaultText,
};
