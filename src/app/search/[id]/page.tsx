import SearchTemplate from "@/components/search/SearchTemplate";
import SearchItemAside from "@/components/search/mapType/SearchItemAside";
import KakaoMapSingle from "@/components/search/map/KakaoMapSingle";

interface Props {
  params: { id: number };
}

export default function Search({ params: { id } }: Props) {
  return (
    <SearchTemplate>
      <SearchItemAside />
      <KakaoMapSingle />
    </SearchTemplate>
  );
}
