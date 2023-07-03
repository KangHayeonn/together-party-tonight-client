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
import Image from "next/image";

export default function ReviewItem() {
  return (
    <ReviewListItem>
      <UserWrapper>
        <Image
          src="/images/Profile.svg"
          width={30}
          height={30}
          alt="사용자 프로필"
        />
        <UserName>밍키</UserName>
        <Image src="/images/SmallStar.svg" width={14} height={14} alt="별" />
        <ReviewRating>4.1</ReviewRating>
      </UserWrapper>
      <ItemDesc>모임설명모임설명모임설명모임설명</ItemDesc>
      <ItemDateWrapper>
        <MeetingName>모임명: 테니스 모임회</MeetingName>
        <ItemDate>2023년 6월 4일</ItemDate>
      </ItemDateWrapper>
    </ReviewListItem>
  );
}
