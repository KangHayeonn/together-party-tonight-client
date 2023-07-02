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
  padding: 20px 0 25px;
`;

const TotalMeeting = styled.p`
  font-size: 18px;
  margin-right: 23px;
`;

const ListItem = styled.li`
  padding: 20px 40px;
  background-color: #fff;
  border: 1px solid #808080;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-size: 21px;
`;
const ItemDesc = styled.p`
  padding: 10px 0;
`;
const TagList = styled.ul`
  display: flex;
  padding-bottom: 10px;

  & li {
    margin-right: 8px;
  }
`;

const ItemDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemDate = styled.p`
  font-size: 14px;
  color: #b1b1b1;
`;
const MeetingMoreBtn = styled.button`
  background: #fff;
  border: 1px solid #dadada;
  border-radius: 3px;
  padding: 3px 18px;
`;

export {
  MeetingWrapper,
  MeetingTitle,
  MeetingInfo,
  TotalMeeting,
  ListItem,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  TagList,
  ItemDateWrapper,
  ItemDate,
  MeetingMoreBtn,
};
