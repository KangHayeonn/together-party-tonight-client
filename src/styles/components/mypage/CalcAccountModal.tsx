import { styled } from "styled-components";

const CalcInfoWrapper = styled.div`
  margin: 20px 0 35px;
`;

const Members = styled.p`
  font-size: 16px;
`;

const Amount = styled.em`
  font-size: 28px;
  font-weight: 600;
`;

const CalcDate = styled.p`
  font-size: 14px;
  color: #b1b1b1;
`;

const SelectWrapper = styled.div`
  display: flex;
  margin: 25px 0 8px;
  font-size: 16px;

  & button {
    margin-right: 15px;
    background-color: transparent;
    color: #9c9c9c;

    &.selected {
      color: #000;
      border-bottom: 2px solid #000;
    }
  }
`;

const MemberWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 215px;
`;

export {
  CalcInfoWrapper,
  Members,
  Amount,
  CalcDate,
  SelectWrapper,
  MemberWrap,
};
