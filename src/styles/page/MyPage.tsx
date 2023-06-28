"use client";

import { styled } from "styled-components";

const MyPageWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 70px 80px 80px 0;
  background-color: #ecf2ff;
`;

const InfoWrapper = styled.div`
  flex-grow: 1;
  padding: 30px 0;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px 30px;
  border-bottom: 1px solid #dee3ea;

  & img {
    margin-right: 20px;
  }
`;

const UserInfo = styled.div`
  display: flex;
`;

const UserName = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
const UserDesc = styled.small`
  font-size: 14px;
  font-weight: 400;
  color: #5f5f5f;
`;

const RatingWrapper = styled.div`
  padding: 30px 5px;
  border-bottom: 1px solid #dee3ea;
`;

const RatingTitle = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Rating = styled.div`
  margin: 10px 0;
`;

const Em = styled.em`
  font-weight: 600;
`;

const ReviewWrapper = styled.div`
  padding: 30px 5px;

  & ul li {
    margin-bottom: 15px;
    background-color: #fff;
    padding: 20px 30px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 10px;
  }
`;

const ReviewTitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ArrowBtn = styled.button`
  border: 0;
  background-color: transparent;
  margin-left: 12px;
`;

const ReviewrWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Reviewer = styled.p`
  padding: 0 15px;
`;

const ReviewRating = styled.em`
  font-size: 14px;
  font-weight: 500;
  color: #2a82f0;
  margin-left: 8px;
`;

const Review = styled.p`
  font-size: 16px;
  padding: 15px 0;
  word-break: break-all;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 225px;
`;

const Meet = styled.p`
  font-size: 14px;
  color: #4b4b4b;
`;

const MeetDate = styled.p`
  font-size: 14px;
  color: #727272;
`;

export {
  MyPageWrapper,
  InfoWrapper,
  UserInfoWrapper,
  UserInfo,
  UserName,
  UserDesc,
  RatingWrapper,
  RatingTitle,
  Rating,
  Em,
  ReviewWrapper,
  ReviewTitle,
  ArrowBtn,
  ReviewrWrapper,
  Reviewer,
  ReviewRating,
  Review,
  ReviewInfo,
  Meet,
  MeetDate,
};
