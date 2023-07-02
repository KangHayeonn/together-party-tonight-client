import {
  ItemDate,
  ItemDateWrapper,
  ItemDesc,
  ItemInfo,
  ItemTitle,
  ListItem,
  MeetingMoreBtn,
  TagList,
} from "@/styles/page/MyPage/Meeting";

export default function MeetingItem() {
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
        <MeetingMoreBtn>정산하기</MeetingMoreBtn>
      </ItemDateWrapper>
    </ListItem>
  );
}
