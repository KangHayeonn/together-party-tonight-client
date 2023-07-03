import {
  ArrowBtn,
  ReviewTitle,
  ReviewWrapper,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import ReviewItem from "../list/ReviewItem";

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
          <ReviewItem />
        </li>
      </ul>
    </ReviewWrapper>
  );
}
