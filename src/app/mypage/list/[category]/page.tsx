"use client";

import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";

type Props = {
  params: { category: string };
};

export default function Category({ params: { category } }: Props) {
  return (
    <MypageListWrapper>
      {/* TODO: list map */}
      <ul>
        {category === "review" ? (
          <>
            <ReviewItem />
            <ReviewItem />
          </>
        ) : (
          <MeetingItem category={category} />
        )}
      </ul>
    </MypageListWrapper>
  );
}
