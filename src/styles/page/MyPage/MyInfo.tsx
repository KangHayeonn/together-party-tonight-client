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
  max-width: 700px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;

  & img {
    opacity: 1;
    border-radius: 100%;
  }

  & img:hover {
    opacity: 0.7;
  }
`;

const ProfileBtn = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  & img {
    border-radius: 10px;
  }
`;

const ProfileEditBtn = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -20px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
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

  & img {
    border-radius: 100%;
  }
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

const UpdateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #dee3ea;
  margin-bottom: 25px;
`;
const UpdateTitle = styled.h3`
  margin-left: 20px;
  font-size: 23px;
  font-weight: 700;
`;

const EditInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 15fr 1fr;
  margin-bottom: 10px;
`;
const EditPwInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 16fr;
  margin-bottom: 10px;
`;

const EditBtn = styled.button`
  height: 30px;
  border: 0;
  background-color: transparent;
  margin-left: 10px;
`;

const ConfirmBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const EditWrapper = styled.div`
  border-bottom: 1px solid #dee3ea;
  padding-bottom: 25px;
`;

const Withdrawal = styled.div`
  float: right;
  padding-top: 20px;
`;
const WithdrawalBtn = styled.button`
  border: 0;
  background-color: transparent;
  text-decoration: underline;
  text-underline-position: under;
  color: #ba1a1a;
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  UpdateWrapper,
  UpdateTitle,
  EditInfoWrapper,
  EditPwInfoWrapper,
  EditBtn,
  ConfirmBox,
  EditWrapper,
  Withdrawal,
  WithdrawalBtn,
  TopWrapper,
  LoadingWrapper,
  ProfileBtn,
  ProfileEditBtn,
};
