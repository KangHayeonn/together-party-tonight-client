"use client";

import { styled } from "styled-components";

const ListItem = styled.li`
  padding: 20px 40px;
  background-color: #fff;
  border: 1px solid #808080;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 800px;
  min-width: 425px;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-size: 21px;
`;

const ItemDesc = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 60px;
  padding: 10px 0;
`;

const TagList = styled.ul`
  display: flex;

  & li {
    margin-right: 8px;
  }
`;

const ItemDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDate = styled.p`
  font-size: 14px;
  color: #b1b1b1;
`;

const MeetingMoreBtn = styled.button`
  background: #fff;
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 3px 18px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewListItem = styled.div`
  padding: 20px 30px;
  background-color: #fff;
  border: 1px solid #808080;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const UserName = styled.p`
  font-size: 16px;
  margin: 0 10px;
`;

const MeetingName = styled.p`
  font-size: 14px;
  color: #4b4b4b;
`;

const ReviewRating = styled.em`
  font-size: 14px;
  font-weight: 500;
  color: #2a82f0;
  margin-left: 8px;
`;

export {
  UserWrapper,
  ReviewListItem,
  UserName,
  MeetingName,
  ListItem,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  TagList,
  ItemDateWrapper,
  ItemDate,
  MeetingMoreBtn,
  ReviewRating,
};
