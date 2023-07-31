/* eslint-disable @typescript-eslint/no-empty-function */
import { ModalAtom } from "@/recoil/modal/atom";
import { CalculateSelect } from "@/recoil/mypage/atom";
import {
  ItemDate,
  ItemDateWrapper,
  ItemDesc,
  ItemInfo,
  ItemTitle,
  ListItem,
  MeetingMoreBtn,
  TagList,
} from "@/styles/components/mypage/ListItem";
import { IClubItem, ItemBtnObjType } from "@/types/mypage";
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from "@/utils/dateFormat";
import { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

type Props = {
  item: IClubItem;
  category: string;
};

export default function MeetingItem({ item, category }: Props) {
  const setIsOpen = useSetRecoilState(ModalAtom);
  const curCalculate = useRecoilValue(CalculateSelect);

  const itemBtnObj: ItemBtnObjType = useMemo(() => {
    return {
      meeting: {
        btnName: "신청내역",
        handleFunc: (item) => {
          setIsOpen((val) => ({
            ...val,
            isOpenApplyModal: true,
            clubItem: item,
            clubId: item.clubId,
          }));
        },
      },
      apply: {
        btnName: "모임원보기",
        handleFunc: (item) => {
          setIsOpen((val) => ({
            ...val,
            isOpenMemberModal: true,
            clubItem: item,
            clubId: item.clubId,
          }));
        },
      },
      calculate: {
        btnName: curCalculate === "myMeeting" ? "정산 만들기" : "정산하기",
        handleFunc: () => {},
      },
    };
  }, [curCalculate]);

  const convertDate = (date: string) => {
    const getDate = date.split("T");
    return `${toStringByFormatting(
      new Date(getDate[0]),
      ".",
    )} ${toStringByFormattingTime(new Date(date))}`;
  };
  // APPROVE(수락), PENDING(대기중), REFUSE(거절됨), KICKOUT(강퇴)
  const meetingState = (state: boolean | string) => {
    if (category === "apply") {
      const approvalObj: { [key: string]: string } = {
        APPROVE: "수락완료",
        PENDING: "대기중",
        REFUSE: "거절됨",
        KICKOUT: "강퇴",
      };
      return approvalObj[state as string];
    }
    if (category === "meeting") {
      return state ? "모집중" : "모집완료";
    }
  };

  return (
    <ListItem>
      <ItemInfo>
        <ItemTitle>{item.clubName}</ItemTitle>
        <p>
          {meetingState(item?.approvalStatus || item.clubState)}&nbsp;&nbsp;
          {item.appliedCount}/{item.clubMaximum}
        </p>
      </ItemInfo>
      <ItemDesc>{item.clubContent}</ItemDesc>
      <TagList>
        {item?.clubTags &&
          item.clubTags.length > 0 &&
          item.clubTags.map((tagName: string, idx: number) => (
            <li key={idx}>#{tagName}</li>
          ))}
      </TagList>
      <ItemDateWrapper>
        <ItemDate>
          {convertDate(item.modifiedDate || item.createdDate)}
        </ItemDate>
        <div>
          {item?.approvalStatus === "APPROVE" && (
            <MeetingMoreBtn
              onClick={() =>
                setIsOpen((val) => ({
                  ...val,
                  isMyReview: true,
                  isOpenReviewModal: true,
                  clubItem: item,
                  reviewId: -1,
                }))
              }
              style={{ marginRight: "5px" }}
            >
              리뷰쓰기
            </MeetingMoreBtn>
          )}
          <MeetingMoreBtn onClick={() => itemBtnObj[category].handleFunc(item)}>
            {itemBtnObj[category].btnName}
          </MeetingMoreBtn>
        </div>
      </ItemDateWrapper>
    </ListItem>
  );
}
