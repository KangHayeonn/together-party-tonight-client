"use client";

import { styled } from "styled-components";

const MeetingWrapper = styled.div`
  flex-grow: 1;
  padding: 30px 0;
`;

const MeetingTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const MeetingInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 25px;
`;

const TotalMeeting = styled.p`
  font-size: 18px;
  margin-right: 23px;
`;

const SelectWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 18px;

  & button {
    margin-right: 20px;
    background-color: transparent;
    color: #9c9c9c;

    &.selected {
      color: #000;
      border-bottom: 2px solid #000;
    }
  }
`;

export {
  MeetingWrapper,
  MeetingTitle,
  MeetingInfo,
  TotalMeeting,
  SelectWrapper,
};
