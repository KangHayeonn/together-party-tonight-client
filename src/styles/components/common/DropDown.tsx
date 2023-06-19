import styled from "styled-components";
import { DropDownProps } from "@/components/common/DropDown";

const DropDownWrapper = styled.div<DropDownProps>`
  font-size: 1rem;
  position: relative;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width || 150}px`};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border: 1px solid #778da9;
  border-radius: 30px;
  cursor: pointer;

  &.opened {
    border-radius: 5px 5px 0 0;
  }
`;

const DropDownBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 3px 3px 3px 10px;
  background: transparent;
  height: 1.875rem;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: #778da9;

  img {
    position: absolute;
    right: 10px;
    top: 9px;
  }
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #fff;
  width: 100%;
  z-index: 999;
  top: 2.1rem;
  padding: 7px 0;
  border-radius: 10px;
  border: 1px solid #778da9;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  height: 10.5rem;
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

const DropDownItem = styled.div`
  font-size: 14px;
  color: #778da9;
  padding: 3px 10px;

  &:hover {
    background-color: #eef3f9;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export { DropDownWrapper, DropDownBtn, DropDownMenu, DropDownItem };
