import { atom } from "recoil";
import { SearchPreview } from "@/components/common/SearchForm";

const searchState = atom<SearchPreview>({
  key: "searchState", // 다른 recoil key와 중첩 x
  default: {
    address: {},
    address_name: "",
    address_type: "",
    road_address: {},
    x: "",
    y: "",
  },
});

const searchKeywordState = atom<string>({
  key: "searchKeywordState", // 다른 recoil key와 중첩 x
  default: "",
});

export { searchState, searchKeywordState };
