import SearchTemplate from "@/components/search/SearchTemplate";
import SearchItemAside from "@/components/search/mapType/SearchItemAside";
import KakaoMap from "@/components/search/map/KakoMap";

interface Props {
  params: { id: number };
}

export default async function Search({ params: { id } }: Props) {
  return (
    <SearchTemplate>
      <SearchItemAside />
      <KakaoMap />
    </SearchTemplate>
  );
}
