import { atom } from "recoil";
import { SearchPreview } from "@/components/common/SearchForm";
import {
  SearchAddressType,
  SearchOptionsType,
  SearchListType,
  SearchResponseType,
} from "@/types/search";

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
    category: "",
    distance: 5,
    lat: 0,
    lng: 0,
    memberNum: 10,
    page: 0,
    size: 20,
    sortFilter: "latest",
    status: "all",
    tags: "",
  },
});

const searchListState = atom<SearchListType>({
  key: "searchListState",
  default: {
    clubId: -1,
    clubName: "",
    clubCategory: "",
    clubContent: "",
    memberCount: 0, // 모집 인원
    clubMaximum: 0, // 전체 인원
    clubTags: [],
    isRecruit: false, // true: 모집중
    address: "",
    latitude: 0,
    longitude: 0,
    image: "",
    ratingAvg: 0,
    reviewCnt: 0,
    memberId: 0,
    nickName: "",
    meetingDate: null,
    createdDate: null,
    modifiedDate: null,
  },
});

const searchResponseState = atom<SearchResponseType>({
  key: "searchResponseState",
  default: {
    clubList: [],
    count: 0,
    totalCount: 0,
  },
});

export {
  searchState,
  searchKeywordState,
  searchAddressState,
  searchOptionsState,
  searchListState,
  searchResponseState,
};
