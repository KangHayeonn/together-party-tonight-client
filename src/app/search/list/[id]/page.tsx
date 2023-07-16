import SearchTemplate from "@/components/search/SearchTemplate";
import SearchItem from "@/components/search/listType/SearchItem";

type Props = {
  params: { id: number };
};

export default async function SearchListItem({ params: { id } }: Props) {
  return (
    <SearchTemplate classType="list">
      <SearchItem />
    </SearchTemplate>
  );
}
