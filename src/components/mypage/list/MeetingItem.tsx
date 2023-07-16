/* eslint-disable @typescript-eslint/no-empty-function */
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
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

type Props = {
  category: string;
};

type ItemBtnObjType = {
  [key: string]: {
    btnName: string;
    handleFunc: () => void;
  };
};

export default function MeetingItem({ category }: Props) {
  const curCalculate = useRecoilValue(CalculateSelect);

  const itemBtnObj: ItemBtnObjType = useMemo(() => {
    return {
      meeting: {
        btnName: "신청내역",
        handleFunc: () => {},
      },
      apply: {
        btnName: "채팅하기",
        handleFunc: () => {},
      },
      calculate: {
        btnName: curCalculate === "myMeeting" ? "정산 만들기" : "정산하기",
        handleFunc: () => {},
      },
    };
  }, [curCalculate]);

  return (
    <ListItem>
      <ItemInfo>
        <ItemTitle>모임 제목</ItemTitle>
        <p>모집중&nbsp;&nbsp;1/5</p>
      </ItemInfo>
      <ItemDesc>모임설명모임설명모임설명모임설명</ItemDesc>
      <TagList>
        <li>#테니스</li>
        <li>#축구</li>
      </TagList>
      <ItemDateWrapper>
        <ItemDate>2023.06.04 (월) 13:25</ItemDate>
        <MeetingMoreBtn>{itemBtnObj[category].btnName}</MeetingMoreBtn>
      </ItemDateWrapper>
    </ListItem>
  );
}
