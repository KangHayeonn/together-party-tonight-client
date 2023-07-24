"use client";

import { ModalAtom } from "@/recoil/modal/atom";
import {
  MeetingName,
  ReviewListItem,
  UserName,
  UserWrapper,
  ItemDate,
  ItemDateWrapper,
  ItemDesc,
  ReviewRating,
} from "@/styles/components/mypage/ListItem";
import { MypageBtn } from "@/styles/page/MyPage/ListLayout";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { toStringByFormatting } from "@/utils/dateFormat";
import { IReviewItem } from "@/types/mypage";

type Props = {
  item: IReviewItem;
  isMyReview: boolean;
};

export default function ReviewItem({ item, isMyReview }: Props) {
  const setIsOpen = useSetRecoilState(ModalAtom);

  return (
    <li>
      <MypageBtn
        onClick={() =>
          setIsOpen((val) => ({
            ...val,
            isMyReview,
            isOpen: true,
            reviewItem: item,
            reviewId: item.reviewId,
          }))
        }
      >
        <ReviewListItem>
          <UserWrapper>
            <Image
              src={item.profileImage}
              width={30}
              height={30}
              alt="사용자 프로필"
              style={{ borderRadius: "50px" }}
            />
            <UserName>{item.nickName}</UserName>
            <Image
              src="/images/SmallStar.svg"
              width={14}
              height={14}
              alt="별"
            />
            <ReviewRating>{item.rating}</ReviewRating>
          </UserWrapper>
          <ItemDesc>{item.reviewContent}</ItemDesc>
          <ItemDateWrapper>
            <MeetingName>모임명: {item.clubName}</MeetingName>
            <ItemDate>
              {toStringByFormatting(
                new Date(item.modifiedDate || item.createdDate),
              )}
            </ItemDate>
          </ItemDateWrapper>
        </ReviewListItem>
      </MypageBtn>
    </li>
  );
}
