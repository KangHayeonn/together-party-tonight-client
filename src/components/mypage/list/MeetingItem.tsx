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
  isCheckPastMeeting,
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
  const calculateType = useRecoilValue(CalculateSelect);

  const translateBtnName = (calculateType: string) => {
    if (calculateType === "meeting") {
      return item.billingRequest ? "정산내역" : "정산요청";
    }
    switch (item.billingState) {
      case "Complete":
        return "정산내역";
      case "Wait":
        return "정산하기";
      default:
        return "미정산";
    }
  };

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
        btnName: translateBtnName(calculateType),
        handleFunc: (item) => {
          if (Object.prototype.hasOwnProperty.call(item, "billingRequest")) {
            setIsOpen((val) => ({
              ...val,
              ...(item.billingRequest
                ? { isOpenCalcAccountModal: true }
                : { isOpenRequestCalcModal: true }),
              clubId: item.clubId,
            }));
          } else {
            if (item.billingState === "Complete") {
              setIsOpen((val) => ({
                ...val,
                isOpenCalcAccountModal: true,
                clubItem: item,
                clubId: item.clubId,
              }));
            } else if (item.billingState === "Wait") {
              // 정산하기 api 호출
            }
          }
        },
      },
    };
  }, [calculateType, item]);

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
          {item.approvalStatus === "APPROVE" &&
            !item.isReviewWritten &&
            isCheckPastMeeting(item.meetingDate) && (
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
