import MeetingItem from "@/components/mypage/list/MeetingItem";

type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export default function Category({ params: category }: Props) {
  return (
    <ul>
      <MeetingItem />
    </ul>
  );
}
