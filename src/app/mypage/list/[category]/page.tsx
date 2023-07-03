import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";

type Props = {
  params: { category: string };
};

export default function Category({ params: { category } }: Props) {
  return (
    <MypageListWrapper>
      {category === "review" ? (
        <>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </>
      ) : (
        <MeetingItem category={category} />
      )}
    </MypageListWrapper>
  );
}
