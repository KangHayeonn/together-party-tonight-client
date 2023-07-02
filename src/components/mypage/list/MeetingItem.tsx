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

type Props = {
  category: string;
};

export default function MeetingItem({ category }: Props) {
  const isMyMeeting = category === "meeting";
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
        <MeetingMoreBtn>{isMyMeeting ? "정산하기" : "채팅하기"}</MeetingMoreBtn>
      </ItemDateWrapper>
    </ListItem>
  );
}
