import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";

type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export default function Category({ params: { category } }: Props) {
  console.log(category);
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
