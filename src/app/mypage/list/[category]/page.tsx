import MyReviewList from "@/components/mypage/info/MyReviewList";
import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";

type Props = {
  params: { category: string };
};

export default function Category({ params: { category } }: Props) {
  return (
    <ul>
      {category === "review" ? (
        <ReviewItem />
      ) : (
        <MeetingItem category={category} />
      )}
    </ul>
  );
}