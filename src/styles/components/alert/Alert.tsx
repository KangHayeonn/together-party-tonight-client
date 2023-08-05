import styled from "styled-components";

const AlertWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 1rem;
  display: flex;
  width: 30rem;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 0.35rem rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px 15px 15px;
  gap: 0.5rem;
  z-index: 100;
`;

const AlertTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

const AlertTabs = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

const AlertTab = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f47a1;
  padding: 2px 15px;
  border-radius: 20px;
  cursor: pointer;

  &.check {
    background-color: #ecf2ff;
  }
`;

const AlertContents = styled.div`
  max-height: 18rem;
  overflow-y: auto;

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

const AlertList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AlertItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  color: #000;

  &.disabled {
    font-weight: 400;
    color: #bdc8d6;
  }
`;

const AlertItemTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;

  & > img:first-of-type {
    margin-right: 5px;
  }

  & > img:hover {
    opacity: 0.7;
  }

  & > img {
    cursor: pointer;

    &.disabled {
      cursor: none;
    }
  }
`;

const AlertItemBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 24rem;
  font-size: 14px;
  font-weight: 600;
  color: #a9a9a9;
`;

const AlertItemText = styled.div`
  display: block;
  width: 25.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AlertBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 165px;
  background-color: red;
  color: #fff;
  font-size: 11px;
  width: 18px;
  height: 18px;
  border-radius: 50px;
`;

export {
  AlertWrapper,
  AlertTitle,
  AlertTabs,
  AlertTab,
  AlertContents,
  AlertList,
  AlertItem,
  AlertItemTop,
  AlertItemBottom,
  AlertItemText,
  AlertBadge,
};
