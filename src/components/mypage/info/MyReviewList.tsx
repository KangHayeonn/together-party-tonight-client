import {
  ArrowBtn,
  ReviewTitle,
  ReviewWrapper,
} from "@/styles/page/MyPage/MyInfo";
import Image from "next/image";
import ReviewItem from "../list/ReviewItem";
import { MypageBtn, MypageListWrapper } from "@/styles/page/MyPage/ListLayout";
import { useSetRecoilState } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";

export default function MyReviewList() {
  const setIsOpen = useSetRecoilState(ModalAtom);

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
        {/* TODO: list map */}
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </MypageListWrapper>
    </ReviewWrapper>
  );
}
