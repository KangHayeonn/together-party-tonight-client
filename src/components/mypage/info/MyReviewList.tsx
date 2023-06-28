import {
  ArrowBtn,
  ReviewrWrapper,
  ReviewRating,
  ReviewTitle,
  Reviewer,
  ReviewWrapper,
  Review,
  ReviewInfo,
  Meet,
  MeetDate,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";

export default function MyReviewList() {
  return (
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
            좋아요!! 123123정말 좋아요!! 123123정말 좋아요!! 123123정말 좋아요!!
            123123정말 좋아요!! 123123
          </Review>
          <ReviewInfo>
            <Meet>모임명: 테니스 모임회</Meet>
            <MeetDate>2022년 8월 23일</MeetDate>
          </ReviewInfo>
        </li>
      </ul>
    </ReviewWrapper>
  );
}
