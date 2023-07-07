"use client";

import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";
import { ModalAtom } from "@/recoil/modal/atom";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";
import { useSetRecoilState } from "recoil";

type Props = {
  params: { category: string };
};

export default function Category({ params: { category } }: Props) {
  const setIsOpen = useSetRecoilState(ModalAtom);

  return (
    <MypageListWrapper>
      {/* TODO: list map */}
      <ul>
        {category === "review" ? (
          <>
            <li>
              <button onClick={() => setIsOpen(true)}>
                <ReviewItem />
              </button>
            </li>
            <li>
              <button>
                <ReviewItem />
              </button>
            </li>
          </>
        ) : (
          <MeetingItem category={category} />
        )}
      </ul>
    </MypageListWrapper>
  );
}
