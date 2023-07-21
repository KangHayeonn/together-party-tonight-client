import { atom } from "recoil";
import { SearchPreview } from "@/components/common/SearchForm";
import { SearchAddressType, SearchOptionsType } from "@/types/search";

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
  key: "searchKeywordState",
  default: "",
});

const searchAddressState = atom<SearchAddressType>({
  key: "searchAddressState",
  default: {
    address: "",
    latitude: 0,
    longitude: 0,
  },
});

const searchOptionsState = atom<SearchOptionsType>({
  key: "searchOptionsState",
  default: {
    category: "전체",
    distance: 5,
    lat: 0,
    lng: 0,
    memberNum: 20,
    page: 0,
    size: 20,
    sortFilter: "latest",
    status: "all",
    tags: "",
  },
});

export {
  searchState,
  searchKeywordState,
  searchAddressState,
  searchOptionsState,
};
