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

export { MeetingWrapper, MeetingTitle, MeetingInfo, TotalMeeting };
