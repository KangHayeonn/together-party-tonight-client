/* eslint-disable @typescript-eslint/no-empty-function */
import MyPage from "@/api/mypage";
import ConfirmModal from "@/components/common/modal/ConfirmModal";
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
import { useMemo, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

type Props = {
  item: IClubItem;
  category: string;
};

export default function MeetingItem({ item, category }: Props) {
  const setIsOpen = useSetRecoilState(ModalAtom);
  const calculateType = useRecoilValue(CalculateSelect);
  const [isOpenCalcModal, setIsOpenCalcModal] = useState(false);
  const [calcPrice, setCalcPrice] = useState(0);
  const [billingId, setBillingId] = useState(-1);

  const translateBtnName = (calculateType: string) => {
    if (calculateType === "meeting") {
      return item.billingRequest ? "정산내역" : "정산요청";
    }
    switch (item.billingState) {
      case "COMPLETED":
        return "정산내역";
      case "WAIT":
        return "정산하기";
      default:
        return "미정산";
    }
  };

  const getBillingPrice = async (clubId: number) => {
    try {
      const res = await MyPage.v1RequestBillingAccount(clubId);
      const billingList = res.data.clubBillingHistoryDtoList;
      setBillingId(billingList[0].id);
      const price = billingList[0].price
        ? Math.ceil(billingList[0].price / (billingList.length + 1))
        : 0;
      setCalcPrice(Number(price));
    } catch (error) {
      Promise.reject(error);
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
            if (item.billingState === "COMPLETED") {
              setIsOpen((val) => ({
                ...val,
                isOpenCalcAccountModal: true,
                clubItem: item,
                clubId: item.clubId,
              }));
            } else if (item.billingState === "WAIT") {
              getBillingPrice(item.clubId);
              setIsOpenCalcModal(true);
            } else {
              setIsOpen((val) => ({
                ...val,
                isOpenCalcAccountModal: true,
                clubId: item.clubId,
              }));
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
      {isOpenCalcModal && (
        <ConfirmModal
          modalTitle="정산하기"
          modalText={`정산 금액은 ${calcPrice}원 입니다. 정산하시겠습니까?`}
          onClose={setIsOpenCalcModal}
          handleSubmit={() => MyPage.v1RequestBillingPayment(billingId)}
        />
      )}
    </ListItem>
  );
}
