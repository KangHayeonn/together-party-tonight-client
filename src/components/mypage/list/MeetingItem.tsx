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
import { IClubItem } from "@/types/mypage";
import {
  toStringByFormatting,
  toStringByFormattingTime,
} from "@/utils/dateFormat";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

type Props = {
  item: IClubItem;
  category: string;
};

type ItemBtnObjType = {
  [key: string]: {
    btnName: string;
    handleFunc: () => void;
  };
};

export default function MeetingItem({ item, category }: Props) {
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

  const convertDate = (date: string) => {
    const getDate = date.split("T");
    return `${toStringByFormatting(
      new Date(getDate[0]),
      ".",
    )} ${toStringByFormattingTime(new Date(date))}`;
  };

  return (
    <ListItem>
      <ItemInfo>
        <ItemTitle>{item.clubName}</ItemTitle>
        <p>모집중&nbsp;&nbsp;n/{item.clubMaximum}</p>
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
        <MeetingMoreBtn>{itemBtnObj[category].btnName}</MeetingMoreBtn>
      </ItemDateWrapper>
    </ListItem>
  );
}
