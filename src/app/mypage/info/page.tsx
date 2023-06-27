"use client";

import TextButton from "@/components/common/TextButton";
import {
  ArrowBtn,
  Em,
  InfoWrapper,
  ReviewrWrapper,
  Rating,
  RatingTitle,
  RatingWrapper,
  ReviewRating,
  ReviewTitle,
  Reviewer,
  ReviewWrapper,
  UserDesc,
  UserInfo,
  UserInfoWrapper,
  UserName,
  Review,
  ReviewInfo,
  Meet,
  MeetDate,
} from "@/styles/page/MyPage";
import Image from "next/image";

export default function Info() {
  return (
    <InfoWrapper>
      <UserInfoWrapper>
        <UserInfo>
          <Image
            src="/images/Profile.svg"
            width={45}
            height={45}
            alt="프로필 이미지"
          />
          <div>
            <UserName>유저명</UserName>
            <UserDesc>축구, 런닝 좋아합니다.</UserDesc>
          </div>
        </UserInfo>
        <TextButton
          text="채팅하기"
          onClick={() => console.log("채팅하기 이동")}
          width={100}
          height={35}
          fontSize={14}
        />
      </UserInfoWrapper>

      <RatingWrapper>
        <RatingTitle>평점/리뷰</RatingTitle>
        <Rating>
          총 평점 :&nbsp;
          <Image src="/images/Star.svg" width={16} height={16} alt="별" />
          &nbsp; <Em>4.2</Em>
        </Rating>
        <div>
          리뷰 개수 : <Em>45개</Em>
        </div>
      </RatingWrapper>

      <ReviewWrapper>
        <ReviewTitle>
          리뷰 리스트
          <ArrowBtn>
            <Image
              src="/images/arrowUp.svg"
              width={13}
              height={13}
              alt="리뷰 펼치기/접기"
            />
          </ArrowBtn>
        </ReviewTitle>
        <ul>
          <li>
            <ReviewrWrapper>
              <Image
                src="/images/Profile.svg"
                width={30}
                height={30}
                alt="유저 이미지"
              />
              <Reviewer>밍키</Reviewer>
              <Image
                src="/images/SmallStar.svg"
                width={14}
                height={14}
                alt="별"
              />
              <ReviewRating>4.1</ReviewRating>
            </ReviewrWrapper>
            <Review>
              정말 좋아요!! 123123정말 좋아요!! 123123정말 좋아요!! 123123정말
              좋아요!! 123123정말 좋아요!! 123123정말 좋아요!! 123123정말
              좋아요!! 123123정말 좋아요!! 123123
            </Review>
            <ReviewInfo>
              <Meet>모임명: 테니스 모임회</Meet>
              <MeetDate>2022년 8월 23일</MeetDate>
            </ReviewInfo>
          </li>
        </ul>
      </ReviewWrapper>
    </InfoWrapper>
  );
}
