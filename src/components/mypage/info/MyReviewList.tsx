import {
  ArrowBtn,
  ReviewTitle,
  ReviewWrapper,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import ReviewItem from "../list/ReviewItem";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";

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
      <MypageListWrapper>
        <li>
          <ReviewItem />
        </li>
      </MypageListWrapper>
    </ReviewWrapper>
  );
}
